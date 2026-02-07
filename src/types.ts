export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'mine' | 'refinery' | 'plant' | 'consumer' | 'port' | 'field';
  production?: number;
  capacity?: number;
  consumption?: number;
  unit: string;
  country: string;
  description?: string;
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
}

export type ResourceMap = Record<string, Resource>;
