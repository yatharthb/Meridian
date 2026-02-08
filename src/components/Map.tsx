import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Resource, LocationTypeFilter } from '../types';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  resource: Resource | null;
  locationTypeFilters: LocationTypeFilter;
}

export function Map({ resource, locationTypeFilters }: MapProps) {
  const getLocationIcon = (type: string) => {
    const icons: Record<string, string> = {
      mine: '⛏️',
      refinery: '🏭',
      plant: '🏗️',
      field: '🛢️',
      port: '⚓',
      consumer: '🏙️',
      hub: '🌐'
    };
    return icons[type] || '📍';
  };

  const getLocationTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getMarkerSize = (location: any) => {
    const production = location.production || location.capacity || location.consumption || 0;
    if (production > 100) return 12;
    if (production > 50) return 10;
    if (production > 10) return 8;
    return 6;
  };

  const filteredLocations = resource?.locations.filter(
    location => locationTypeFilters[location.type]
  ) || [];

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={10}
        style={{ height: '100%', width: '100%' }}
        worldCopyJump={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Location Markers */}
        {filteredLocations.map((location) => (
          <CircleMarker
            key={location.id}
            center={[location.lat, location.lng]}
            radius={getMarkerSize(location)}
            pathOptions={{
              fillColor: resource.color,
              color: '#fff',
              weight: 2,
              opacity: 1,
              fillOpacity: 0.9
            }}
          >
            <Popup>
              <div className="location-popup">
                <div className="popup-header">{location.name}</div>

                <div className="popup-type">
                  {getLocationIcon(location.type)} {getLocationTypeLabel(location.type)}
                </div>

                {location.operator && (
                  <div className="popup-operator">Operated by {location.operator}</div>
                )}

                <div className="popup-stats">
                  {location.production && (
                    <div className="popup-stat">
                      <span className="popup-stat-label">Production:</span>
                      <span className="popup-stat-value">
                        {location.production.toLocaleString()} {location.unit}
                      </span>
                    </div>
                  )}
                  {location.capacity && (
                    <div className="popup-stat">
                      <span className="popup-stat-label">Capacity:</span>
                      <span className="popup-stat-value">
                        {location.capacity.toLocaleString()} {location.unit}
                      </span>
                    </div>
                  )}
                  {location.consumption && (
                    <div className="popup-stat">
                      <span className="popup-stat-label">Consumption:</span>
                      <span className="popup-stat-value">
                        {location.consumption.toLocaleString()} {location.unit}
                      </span>
                    </div>
                  )}
                </div>

                <div className="popup-description">{location.description}</div>

                <div className="popup-meta">
                  {location.established && (
                    <div className="popup-meta-item">
                      <span>📅</span>
                      <span>Est. {location.established}</span>
                    </div>
                  )}
                  {location.employees && (
                    <div className="popup-meta-item">
                      <span>👥</span>
                      <span>{location.employees.toLocaleString()} employees</span>
                    </div>
                  )}
                </div>

                <div className="popup-country">📍 {location.country}</div>

                {location.exportTo && location.exportTo.length > 0 && (
                  <div className="popup-exports">
                    <div className="popup-exports-title">Exports To</div>
                    <div className="popup-exports-list">
                      {location.exportTo.map((country, idx) => (
                        <span key={idx} className="export-tag">{country}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Map Legend */}
      {resource && filteredLocations.length > 0 && (
        <div className="map-legend">
          <div className="legend-title">Showing {filteredLocations.length} Locations</div>
          <div className="legend-items">
            {Array.from(new Set(filteredLocations.map(l => l.type))).map((type) => (
              <div key={type} className="legend-item">
                <div
                  className="legend-icon"
                  style={{ backgroundColor: resource.color }}
                />
                <span>{getLocationIcon(type)} {getLocationTypeLabel(type)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
