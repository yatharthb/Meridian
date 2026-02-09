export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'mine' | 'refinery' | 'plant' | 'consumer' | 'port' | 'field' | 'hub';
  production?: number;
  capacity?: number;
  consumption?: number;
  unit: string;
  country: string;
  description: string;
  operator?: string;
  established?: number;
  employees?: number;
  exportTo?: string[];
}

export interface Resource {
  id: string;
  name: string;
  category: 'mineral' | 'energy' | 'metal' | 'element';
  color: string;
  unit: string;
  locations: Location[];
  globalProduction: number;
  globalConsumption: number;
  description: string;
  majorProducers: string[];
  majorConsumers: string[];
  uses: string[];
  marketSize?: string;
  pricePerUnit?: string;
}

export type ResourceMap = Record<string, Resource>;

export type LocationType = 'mine' | 'refinery' | 'plant' | 'consumer' | 'port' | 'field' | 'hub';

export interface LocationTypeFilter {
  [key: string]: boolean;
}

// Feed types
export interface FeedUser {
  id: string;
  name: string;
  avatar: string;
  role: 'analyst' | 'trader' | 'researcher' | 'journalist' | 'industry';
}

export interface FeedPost {
  id: string;
  author: FeedUser;
  content: string;
  resourceTags: string[];
  regionTags: string[];
  timestamp: number;
  likes: number;
  comments: number;
  shares: number;
  bookmarks: number;
  hasImage: boolean;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  postType: 'analysis' | 'news' | 'discussion' | 'alert';
}

export type FeedSortMode = 'ranked' | 'latest' | 'trending';

export type AppView = 'map' | 'feed';
