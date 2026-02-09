export type LocationType = 'mine' | 'field' | 'refinery' | 'plant' | 'port' | 'consumer' | 'hub';

export type ResourceCategory = 'metals' | 'energy' | 'minerals' | 'critical';

export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: LocationType;
  production?: number;
  capacity?: number;
  consumption?: number;
  unit: string;
  country: string;
  operator?: string;
  description: string;
}

export interface Resource {
  id: string;
  name: string;
  color: string;
  unit: string;
  globalProduction: number;
  locations: Location[];
  description: string;
  category: ResourceCategory;
}

export type ResourceMap = Record<string, Resource>;

export const locationTypeLabels: Record<LocationType, { label: string; icon: string }> = {
  mine: { label: 'Mining', icon: '\u26CF\uFE0F' },
  field: { label: 'Fields', icon: '\uD83D\uDEE2\uFE0F' },
  refinery: { label: 'Refineries', icon: '\uD83C\uDFED' },
  plant: { label: 'Plants', icon: '\uD83C\uDFD7\uFE0F' },
  port: { label: 'Ports', icon: '\u2693' },
  consumer: { label: 'Consumers', icon: '\uD83C\uDFD9\uFE0F' },
  hub: { label: 'Hubs', icon: '\uD83D\uDCE6' },
};

export const categoryLabels: Record<ResourceCategory, string> = {
  metals: 'Metals & Alloys',
  energy: 'Energy',
  minerals: 'Industrial Minerals',
  critical: 'Critical Elements',
};

export function formatNumber(value: number, decimals = 1): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(decimals)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(decimals)}K`;
  if (Number.isInteger(value)) return value.toString();
  return value.toFixed(decimals);
}
