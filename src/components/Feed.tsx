import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { FeedPost, FeedSortMode, Resource } from '../types';
import { generateFeedPosts } from '../data/feedData';
import { sortFeed } from '../utils/feedRanking';

const TOTAL_POSTS = 2000;
const PAGE_SIZE = 20;

// Generate all posts once at module level to avoid regeneration on re-render
const allPosts = generateFeedPosts(TOTAL_POSTS);

interface FeedProps {
  selectedResource: Resource | null;
}

function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

const sentimentColors: Record<FeedPost['sentiment'], string> = {
  bullish: '#22c55e',
  bearish: '#ef4444',
  neutral: '#a3a3a3',
};

const sentimentLabels: Record<FeedPost['sentiment'], string> = {
  bullish: 'Bullish',
  bearish: 'Bearish',
  neutral: 'Neutral',
};

const typeIcons: Record<FeedPost['postType'], string> = {
  analysis: 'Analysis',
  news: 'News',
  discussion: 'Discussion',
  alert: 'Alert',
};

const roleColors: Record<string, string> = {
  analyst: '#667eea',
  trader: '#f59e0b',
  researcher: '#8b5cf6',
  journalist: '#ec4899',
  industry: '#06b6d4',
};

function PostCard({ post }: { post: FeedPost }) {
  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="post-avatar" style={{ backgroundColor: roleColors[post.author.role] }}>
          {post.author.avatar}
        </div>
        <div className="post-author-info">
          <span className="post-author-name">{post.author.name}</span>
          <span className="post-author-role">{post.author.role}</span>
        </div>
        <div className="post-meta-right">
          <span className="post-time">{formatTimeAgo(post.timestamp)}</span>
        </div>
      </div>

      <div className="post-badges">
        <span
          className="post-type-badge"
          data-type={post.postType}
        >
          {typeIcons[post.postType]}
        </span>
        <span
          className="post-sentiment-badge"
          style={{ color: sentimentColors[post.sentiment], borderColor: sentimentColors[post.sentiment] }}
        >
          {sentimentLabels[post.sentiment]}
        </span>
      </div>

      <div className="post-content">{post.content}</div>

      {(post.resourceTags.length > 0 || post.regionTags.length > 0) && (
        <div className="post-tags">
          {post.resourceTags.map((tag, i) => (
            <span key={`r-${i}`} className="post-tag resource-tag">{tag}</span>
          ))}
          {post.regionTags.map((tag, i) => (
            <span key={`g-${i}`} className="post-tag region-tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="post-actions">
        <button className="post-action-btn">
          <span className="action-icon">&#9825;</span>
          <span>{formatNumber(post.likes)}</span>
        </button>
        <button className="post-action-btn">
          <span className="action-icon">&#9997;</span>
          <span>{formatNumber(post.comments)}</span>
        </button>
        <button className="post-action-btn">
          <span className="action-icon">&#8635;</span>
          <span>{formatNumber(post.shares)}</span>
        </button>
        <button className="post-action-btn">
          <span className="action-icon">&#9734;</span>
          <span>{formatNumber(post.bookmarks)}</span>
        </button>
      </div>
    </div>
  );
}

export function Feed({ selectedResource }: FeedProps) {
  const [sortMode, setSortMode] = useState<FeedSortMode>('ranked');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const scrollRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const rankedPosts = useMemo(
    () => sortFeed(allPosts, sortMode, selectedResource?.name ?? null),
    [sortMode, selectedResource?.name]
  );

  const visiblePosts = useMemo(
    () => rankedPosts.slice(0, visibleCount),
    [rankedPosts, visibleCount]
  );

  // Reset visible count when sort mode or resource changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    scrollRef.current?.scrollTo(0, 0);
  }, [sortMode, selectedResource?.name]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < rankedPosts.length) {
          setVisibleCount(prev => Math.min(prev + PAGE_SIZE, rankedPosts.length));
        }
      },
      { root: scrollRef.current, rootMargin: '400px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [visibleCount, rankedPosts.length]);

  const handleSortChange = useCallback((mode: FeedSortMode) => {
    setSortMode(mode);
  }, []);

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h2 className="feed-title">Community Feed</h2>
        <div className="feed-sort-tabs">
          {(['ranked', 'trending', 'latest'] as FeedSortMode[]).map(mode => (
            <button
              key={mode}
              className={`feed-sort-tab ${sortMode === mode ? 'active' : ''}`}
              onClick={() => handleSortChange(mode)}
            >
              {mode === 'ranked' ? 'For You' : mode === 'trending' ? 'Trending' : 'Latest'}
            </button>
          ))}
        </div>
        <div className="feed-post-count">
          {rankedPosts.length.toLocaleString()} posts
        </div>
      </div>

      <div className="feed-scroll" ref={scrollRef}>
        {selectedResource && sortMode === 'ranked' && (
          <div className="feed-relevance-note">
            Showing posts relevant to <strong>{selectedResource.name}</strong> first
          </div>
        )}

        {visiblePosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}

        {visibleCount < rankedPosts.length && (
          <div ref={loadMoreRef} className="feed-loading-more">
            Loading more posts...
          </div>
        )}

        {visibleCount >= rankedPosts.length && (
          <div className="feed-end">
            You've reached the end of the feed
          </div>
        )}
      </div>
    </div>
  );
}
