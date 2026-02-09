import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { Resource, Location, LocationType, locationTypeLabels, formatNumber } from '../types';
import 'leaflet/dist/leaflet.css';

interface WorldMapProps {
  resource: Resource | null;
  activeLocationTypes: Set<LocationType>;
}

function MapController({ resource }: { resource: Resource | null }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map, resource]);
  return null;
}

function getMarkerRadius(location: Location): number {
  const value = location.production || location.capacity || location.consumption || 0;
  if (value > 100) return 14;
  if (value > 50) return 11;
  if (value > 10) return 8;
  if (value > 1) return 6;
  return 5;
}

function getMarkerOpacity(location: Location): number {
  const value = location.production || location.capacity || location.consumption || 0;
  if (value > 50) return 0.9;
  if (value > 10) return 0.8;
  return 0.7;
}

function calculatePercentage(location: Location, globalProduction: number): string {
  const value = location.production || location.capacity || location.consumption || 0;
  if (value === 0 || globalProduction === 0) return '0';
  return ((value / globalProduction) * 100).toFixed(2);
}

export function WorldMap({ resource, activeLocationTypes }: WorldMapProps) {
  const filteredLocations = resource?.locations.filter(
    (location) => activeLocationTypes.has(location.type)
  ) || [];

  return (
    <MapContainer
      key={resource?.id || 'empty'}
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={10}
      style={{ height: '100%', width: '100%' }}
      worldCopyJump={true}
      zoomControl={false}
    >
      <MapController resource={resource} />
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {filteredLocations.map((location) => {
        const percentage = resource ? calculatePercentage(location, resource.globalProduction) : '0';
        const radius = getMarkerRadius(location);
        const fillOpacity = getMarkerOpacity(location);
        const color = resource?.color || '#667eea';

        return (
          <CircleMarker
            key={location.id}
            center={[location.lat, location.lng]}
            radius={radius}
            pathOptions={{
              fillColor: color,
              color: color,
              weight: 2,
              opacity: 0.6,
              fillOpacity,
            }}
          >
            <Popup>
              <div className="location-popup">
                <h3>{location.name}</h3>
                <div className="location-type" style={{ backgroundColor: color }}>
                  {locationTypeLabels[location.type].icon} {locationTypeLabels[location.type].label}
                </div>

                {location.operator && (
                  <div className="location-operator">
                    {location.operator}
                  </div>
                )}

                <div className="location-details">
                  {location.production !== undefined && (
                    <div className="detail-row">
                      <span className="detail-label">Production</span>
                      <span className="detail-value">
                        {formatNumber(location.production)} {location.unit}
                        <span className="percentage">{percentage}%</span>
                      </span>
                    </div>
                  )}
                  {location.capacity !== undefined && (
                    <div className="detail-row">
                      <span className="detail-label">Capacity</span>
                      <span className="detail-value">
                        {formatNumber(location.capacity)} {location.unit}
                        <span className="percentage">{percentage}%</span>
                      </span>
                    </div>
                  )}
                  {location.consumption !== undefined && (
                    <div className="detail-row">
                      <span className="detail-label">Consumption</span>
                      <span className="detail-value">
                        {formatNumber(location.consumption)} {location.unit}
                        <span className="percentage">{percentage}%</span>
                      </span>
                    </div>
                  )}
                  <div className="detail-row">
                    <span className="detail-label">Country</span>
                    <span className="detail-value">{location.country}</span>
                  </div>
                </div>

                {location.description && (
                  <div className="location-description">{location.description}</div>
                )}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
