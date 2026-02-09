import { FeedPost, FeedSortMode } from '../types';

/**
 * Feed ranking algorithm using a weighted engagement score with time decay.
 *
 * Score = engagementScore * relevanceBoost * typeBoost / timePenalty
 *
 * - engagementScore: weighted sum of likes, comments, shares, bookmarks
 * - timePenalty: exponential decay based on hours since posting (half-life ~12h)
 * - relevanceBoost: multiplier when post tags match the selected resource
 * - typeBoost: alerts and breaking news get a small boost
 *
 * This avoids pure-chronological ordering and surfaces high-quality,
 * engaging, relevant content while still keeping the feed fresh.
 */

const ENGAGEMENT_WEIGHTS = {
  likes: 1,
  comments: 3,    // Comments signal deeper engagement
  shares: 5,      // Shares are the strongest signal
  bookmarks: 2,   // Bookmarks indicate lasting value
};

const HALF_LIFE_HOURS = 12;
const DECAY_CONSTANT = Math.LN2 / HALF_LIFE_HOURS;

const TYPE_BOOSTS: Record<FeedPost['postType'], number> = {
  alert: 1.5,
  news: 1.2,
  analysis: 1.1,
  discussion: 1.0,
};

function computeEngagementScore(post: FeedPost): number {
  return (
    post.likes * ENGAGEMENT_WEIGHTS.likes +
    post.comments * ENGAGEMENT_WEIGHTS.comments +
    post.shares * ENGAGEMENT_WEIGHTS.shares +
    post.bookmarks * ENGAGEMENT_WEIGHTS.bookmarks
  );
}

function computeTimePenalty(postTimestamp: number, now: number): number {
  const hoursAgo = (now - postTimestamp) / 3600000;
  // Exponential decay with a floor so old posts don't vanish entirely
  return Math.exp(DECAY_CONSTANT * hoursAgo) + 0.1;
}

function computeRelevanceBoost(post: FeedPost, selectedResourceName: string | null): number {
  if (!selectedResourceName) return 1.0;
  const lowerSelected = selectedResourceName.toLowerCase();
  const tagMatch = post.resourceTags.some(
    tag => tag.toLowerCase() === lowerSelected
  );
  return tagMatch ? 2.5 : 1.0;
}

export function rankPost(
  post: FeedPost,
  now: number,
  selectedResourceName: string | null,
): number {
  const engagement = computeEngagementScore(post);
  const timePenalty = computeTimePenalty(post.timestamp, now);
  const relevance = computeRelevanceBoost(post, selectedResourceName);
  const typeBoost = TYPE_BOOSTS[post.postType];

  // Log-scale engagement to prevent viral posts from dominating completely
  const normalizedEngagement = Math.log2(engagement + 1);

  return (normalizedEngagement * relevance * typeBoost) / timePenalty;
}

/**
 * Sorts a feed of posts according to the selected mode.
 * Returns a new sorted array (does not mutate the input).
 */
export function sortFeed(
  posts: FeedPost[],
  mode: FeedSortMode,
  selectedResourceName: string | null,
): FeedPost[] {
  const now = Date.now();

  switch (mode) {
    case 'ranked': {
      // Pre-compute scores once, then sort by score descending
      const scored = posts.map(post => ({
        post,
        score: rankPost(post, now, selectedResourceName),
      }));
      scored.sort((a, b) => b.score - a.score);
      return scored.map(s => s.post);
    }
    case 'latest':
      return [...posts].sort((a, b) => b.timestamp - a.timestamp);
    case 'trending': {
      // Trending = highest engagement in last 24h only
      const oneDayAgo = now - 86400000;
      const recent = posts.filter(p => p.timestamp > oneDayAgo);
      const scored = recent.map(post => ({
        post,
        score: computeEngagementScore(post),
      }));
      scored.sort((a, b) => b.score - a.score);
      return scored.map(s => s.post);
    }
    default:
      return posts;
  }
}
