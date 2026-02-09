import { FeedUser, FeedPost } from '../types';

const users: FeedUser[] = [
  { id: 'u1', name: 'Sarah Chen', avatar: 'SC', role: 'analyst' },
  { id: 'u2', name: 'Marcus Webb', avatar: 'MW', role: 'trader' },
  { id: 'u3', name: 'Elena Voronova', avatar: 'EV', role: 'researcher' },
  { id: 'u4', name: 'James Harker', avatar: 'JH', role: 'journalist' },
  { id: 'u5', name: 'Priya Nair', avatar: 'PN', role: 'analyst' },
  { id: 'u6', name: 'Oliver Stein', avatar: 'OS', role: 'industry' },
  { id: 'u7', name: 'Fatima Al-Rashid', avatar: 'FA', role: 'trader' },
  { id: 'u8', name: 'Dmitri Petrov', avatar: 'DP', role: 'researcher' },
  { id: 'u9', name: 'Maria Santos', avatar: 'MS', role: 'journalist' },
  { id: 'u10', name: 'Kenji Takahashi', avatar: 'KT', role: 'analyst' },
  { id: 'u11', name: 'Liam Fitzgerald', avatar: 'LF', role: 'industry' },
  { id: 'u12', name: 'Amara Okafor', avatar: 'AO', role: 'trader' },
  { id: 'u13', name: 'Ravi Chakraborty', avatar: 'RC', role: 'researcher' },
  { id: 'u14', name: 'Ingrid Larsen', avatar: 'IL', role: 'analyst' },
  { id: 'u15', name: 'Carlos Mendez', avatar: 'CM', role: 'journalist' },
];

const resourceNames = [
  'Copper', 'Lithium', 'Cobalt', 'Nickel', 'Rare Earth Elements',
  'Crude Oil', 'Natural Gas', 'Coal', 'Iron Ore', 'Aluminum',
  'Gold', 'Silver', 'Steel', 'Uranium', 'Zinc',
  'Platinum', 'Manganese', 'Cement', 'Phosphate', 'Potash',
];

const regions = [
  'China', 'USA', 'Australia', 'Chile', 'DRC', 'Russia',
  'Brazil', 'India', 'South Africa', 'Indonesia', 'Canada',
  'Peru', 'Saudi Arabia', 'Norway', 'Japan', 'Germany',
  'Mexico', 'Argentina', 'Kazakhstan', 'Philippines',
];

const postTemplates: { content: string; resourceTags: string[]; regionTags: string[]; sentiment: FeedPost['sentiment']; postType: FeedPost['postType'] }[] = [
  { content: 'Copper futures surging on renewed demand from China\'s grid expansion. LME inventories at 3-month lows. The electrification thesis continues to play out.', resourceTags: ['Copper'], regionTags: ['China'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Breaking: Chile\'s Escondida mine reports 12% production shortfall in Q3 due to water restrictions. BHP reviewing operational targets for 2026.', resourceTags: ['Copper'], regionTags: ['Chile'], sentiment: 'bullish', postType: 'news' },
  { content: 'Lithium carbonate prices have dropped 40% YTD. Is this the bottom, or are we heading for further correction? Supply from Australian spodumene operations continues to exceed expectations.', resourceTags: ['Lithium'], regionTags: ['Australia'], sentiment: 'bearish', postType: 'discussion' },
  { content: 'Alert: DRC cobalt output restrictions announced. Glencore\'s Mutanda operations affected. Expect supply tightening in EV battery supply chain over next 2 quarters.', resourceTags: ['Cobalt'], regionTags: ['DRC'], sentiment: 'bullish', postType: 'alert' },
  { content: 'Indonesian nickel processing capacity now exceeds 1.5Mt NPI equivalent. HPAL projects coming online faster than anticipated. Class 1 nickel premium narrowing.', resourceTags: ['Nickel'], regionTags: ['Indonesia'], sentiment: 'bearish', postType: 'analysis' },
  { content: 'Rare earth element separation facility approved in Texas. $800M investment backed by DoD. Will take 3 years to reach full capacity but signals serious diversification effort.', resourceTags: ['Rare Earth Elements'], regionTags: ['USA'], sentiment: 'bullish', postType: 'news' },
  { content: 'OPEC+ considering deeper cuts as Brent slides below $70. Saudi Aramco maintaining capex plans despite pricing pressure. Market seems oversupplied through H1 2026.', resourceTags: ['Crude Oil'], regionTags: ['Saudi Arabia'], sentiment: 'bearish', postType: 'analysis' },
  { content: 'European natural gas storage at 85% ahead of winter. TTF futures curve in contango. LNG imports from US remain strong. Risk of price spikes seems limited barring extreme weather.', resourceTags: ['Natural Gas'], regionTags: ['Norway', 'USA'], sentiment: 'neutral', postType: 'analysis' },
  { content: 'India\'s coal import dependency declining faster than expected. Domestic production up 11% YoY. Coal India achieving record output levels.', resourceTags: ['Coal'], regionTags: ['India'], sentiment: 'bearish', postType: 'news' },
  { content: 'Iron ore spot just hit $135/t CFR China. Vale\'s S11D expansion on track. Australian exporters benefiting from strong AUD terms of trade.', resourceTags: ['Iron Ore'], regionTags: ['Brazil', 'Australia', 'China'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Aluminum smelter restarts in Yunnan after hydro season begins. Power costs dropping. Expect 500kt of capacity to return by end of month.', resourceTags: ['Aluminum'], regionTags: ['China'], sentiment: 'bearish', postType: 'news' },
  { content: 'Gold breaking through $2,800/oz on geopolitical tensions. Central bank buying continues unabated. Physical demand in India strong ahead of festival season.', resourceTags: ['Gold'], regionTags: ['India'], sentiment: 'bullish', postType: 'alert' },
  { content: 'Silver industrial demand hitting record levels driven by solar PV installations. Solar panel manufacturers consuming 15% of annual silver output. Structural deficit widening.', resourceTags: ['Silver'], regionTags: ['China'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Global steel production flattening. Chinese property sector weakness continues to drag. ArcelorMittal cutting European capacity. Overcapacity remains the core issue.', resourceTags: ['Steel'], regionTags: ['China', 'Germany'], sentiment: 'bearish', postType: 'discussion' },
  { content: 'Uranium spot hits $95/lb. Nuclear renaissance in full swing - 60 reactors under construction globally. Kazatomprom maintaining production discipline. Long-term contracts at premium.', resourceTags: ['Uranium'], regionTags: ['Kazakhstan'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Zinc inventories building on LME and SHFE. Mine supply recovering after 2024 disruptions. Glencore and Teck reporting strong output. Refined surplus expected in 2026.', resourceTags: ['Zinc'], regionTags: ['Australia', 'Canada'], sentiment: 'bearish', postType: 'analysis' },
  { content: 'Platinum deficit widens to 800koz as auto catalyst demand stays robust. South African supply issues persistent - Eskom load shedding impacting smelters.', resourceTags: ['Platinum'], regionTags: ['South Africa'], sentiment: 'bullish', postType: 'news' },
  { content: 'Manganese ore prices spiking after Gabon export disruption. South32\'s GEMCO operations still offline. Battery-grade manganese sulphate in tight supply.', resourceTags: ['Manganese'], regionTags: ['South Africa'], sentiment: 'bullish', postType: 'alert' },
  { content: 'India cement demand growing at 8% CAGR. Ultratech and Adani expanding capacity. Infrastructure push driving volumes. Pricing power improving in key markets.', resourceTags: ['Cement'], regionTags: ['India'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Phosphate prices stabilizing after 2025 volatility. Morocco\'s OCP maintaining strategic export levels. Chinese export quotas limiting supply to international markets.', resourceTags: ['Phosphate'], regionTags: ['China'], sentiment: 'neutral', postType: 'news' },
  { content: 'Potash market finding equilibrium. Belarusian exports partially recovering. Canadian producers maintaining discipline. Agricultural demand seasonal uptick expected.', resourceTags: ['Potash'], regionTags: ['Canada', 'Russia'], sentiment: 'neutral', postType: 'discussion' },
  { content: 'The copper-gold ratio is signaling economic acceleration. When these two diverge from historical correlation, pay attention. Currently at multi-year highs.', resourceTags: ['Copper', 'Gold'], regionTags: [], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Battery metals complex under pressure. LFP chemistry gaining share, reducing cobalt and nickel intensity per kWh. Tesla\'s shift to LFP for standard range accelerating the trend.', resourceTags: ['Cobalt', 'Nickel', 'Lithium'], regionTags: ['China', 'USA'], sentiment: 'bearish', postType: 'discussion' },
  { content: 'Just visited the Pilbara iron ore operations. Autonomous haulage now standard across all major operations. Rio Tinto, BHP, and FMG running 24/7 driverless fleets.', resourceTags: ['Iron Ore'], regionTags: ['Australia'], sentiment: 'neutral', postType: 'discussion' },
  { content: 'Argentina\'s lithium triangle development accelerating. New fast-track permitting regime attracting $5B+ in FDI. Jujuy and Salta provinces leading the charge.', resourceTags: ['Lithium'], regionTags: ['Argentina'], sentiment: 'bullish', postType: 'news' },
  { content: 'Natural gas becoming the transition fuel. Global LNG trade hitting 450Mt. Qatar expanding North Field. US Gulf Coast export capacity at record levels.', resourceTags: ['Natural Gas'], regionTags: ['USA', 'Saudi Arabia'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Steel scrap-to-EAF ratio climbing globally. Green steel mandates in EU driving shift. Nucor and Steel Dynamics positioned well in North America.', resourceTags: ['Steel'], regionTags: ['USA', 'Germany'], sentiment: 'neutral', postType: 'analysis' },
  { content: 'Alert: Massive new copper-gold porphyry discovery in Philippines. Early estimates suggest 10Mt+ Cu equivalent. Could be generational deposit. Shares of junior miner up 300%.', resourceTags: ['Copper', 'Gold'], regionTags: ['Philippines'], sentiment: 'bullish', postType: 'alert' },
  { content: 'The race to secure critical mineral supply chains is reshaping geopolitics. US, EU, and Japan all signing bilateral agreements with African nations. Resource nationalism rising.', resourceTags: ['Rare Earth Elements', 'Cobalt', 'Manganese'], regionTags: ['USA', 'DRC', 'South Africa'], sentiment: 'neutral', postType: 'discussion' },
  { content: 'Coal phase-down harder than expected. Asian demand proving sticky. Vietnam and Bangladesh adding coal capacity despite climate commitments. Peak coal may be further out.', resourceTags: ['Coal'], regionTags: ['India', 'China', 'Indonesia'], sentiment: 'neutral', postType: 'analysis' },
  { content: 'Gold mining costs rising sharply - AISC now averaging $1,350/oz across majors. Labor shortages in Canada and Australia. Margin compression despite high prices for higher-cost producers.', resourceTags: ['Gold'], regionTags: ['Canada', 'Australia'], sentiment: 'bearish', postType: 'analysis' },
  { content: 'Aluminum can sheet demand surging 6% YoY on beverage industry shift from plastic. Novelis and Arconic investing in new rolling capacity. Sustainability premium emerging.', resourceTags: ['Aluminum'], regionTags: ['USA'], sentiment: 'bullish', postType: 'news' },
  { content: 'Silver photovoltaic paste consumption could double by 2028 at current solar installation rates. Silver Institute flagging potential structural supply issue. Recycling key.', resourceTags: ['Silver'], regionTags: ['China', 'India'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Uranium enrichment capacity becoming the bottleneck, not mining. Russia controls 40%+ of global enrichment. Western nations racing to build centrifuge capacity.', resourceTags: ['Uranium'], regionTags: ['Russia', 'USA'], sentiment: 'bullish', postType: 'discussion' },
  { content: 'Interesting development: copper cathode premiums in Shanghai at $120/t over LME. Tight physical market despite paper selling. Watch for short squeeze potential.', resourceTags: ['Copper'], regionTags: ['China'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Oil market structure flipping to backwardation. Draws accelerating as summer driving season approaches. Refiners scrambling for medium sour barrels.', resourceTags: ['Crude Oil'], regionTags: ['USA'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'Mexican lithium nationalization policy stalling foreign investment. AMLO-era regulations still in effect. Meanwhile, Chile\'s new public-private model showing promise.', resourceTags: ['Lithium'], regionTags: ['Mexico', 'Chile'], sentiment: 'neutral', postType: 'news' },
  { content: 'Deep-sea mining debate intensifying. The Metals Company pushing forward with Clarion-Clipperton Zone plans. Pacific island nations divided. Manganese nodules could disrupt supply.', resourceTags: ['Manganese', 'Nickel', 'Cobalt'], regionTags: [], sentiment: 'neutral', postType: 'discussion' },
  { content: 'Platinum group metals facing secular demand shift. Fuel cell vehicles gaining traction in heavy transport. Toyota and Hyundai expanding FCEV lineups. PGM basket strengthening.', resourceTags: ['Platinum'], regionTags: ['Japan'], sentiment: 'bullish', postType: 'analysis' },
  { content: 'China\'s strategic petroleum reserve estimated at 950M barrels - approaching 90-day import cover target. Buying dips systematically. Floor under prices.', resourceTags: ['Crude Oil'], regionTags: ['China'], sentiment: 'neutral', postType: 'analysis' },
];

// Seeded pseudo-random number generator for deterministic output
function mulberry32(seed: number) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export function generateFeedPosts(count: number): FeedPost[] {
  const rng = mulberry32(42);
  const now = Date.now();
  const posts: FeedPost[] = [];

  for (let i = 0; i < count; i++) {
    const template = postTemplates[Math.floor(rng() * postTemplates.length)];
    const user = users[Math.floor(rng() * users.length)];

    // Spread timestamps across last 7 days with clustering for realism
    const hoursAgo = rng() * 168; // 7 days in hours
    const clusterNoise = (rng() - 0.5) * 2; // +/- 1 hour jitter
    const timestamp = now - (hoursAgo + clusterNoise) * 3600000;

    // Engagement follows power-law distribution - most posts low, few very high
    const engagementBase = rng();
    const engagementMultiplier = engagementBase < 0.9 ? 1 : engagementBase < 0.97 ? 5 : 20;

    const likes = Math.floor(rng() * 50 * engagementMultiplier);
    const comments = Math.floor(rng() * 15 * engagementMultiplier);
    const shares = Math.floor(rng() * 8 * engagementMultiplier);
    const bookmarks = Math.floor(rng() * 12 * engagementMultiplier);

    // Add some variation to content to make posts unique
    const extraRegion = regions[Math.floor(rng() * regions.length)];
    const extraResource = resourceNames[Math.floor(rng() * resourceNames.length)];
    const regionTags = [...template.regionTags];
    const resourceTags = [...template.resourceTags];
    if (rng() > 0.7) regionTags.push(extraRegion);
    if (rng() > 0.8) resourceTags.push(extraResource);

    posts.push({
      id: `post-${i}`,
      author: user,
      content: template.content,
      resourceTags,
      regionTags,
      timestamp,
      likes,
      comments,
      shares,
      bookmarks,
      hasImage: rng() > 0.7,
      sentiment: template.sentiment,
      postType: template.postType,
    });
  }

  return posts;
}
