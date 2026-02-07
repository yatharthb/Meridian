import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Resource } from '../types';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  resource: Resource | null;
}

export function Map({ resource }: MapProps) {
  const getLocationIcon = (type: string) => {
    const icons: Record<string, string> = {
      mine: '⛏',
      refinery: '🏭',
      plant: '🏗',
      field: '🛢',
      port: '⚓',
      consumer: '🏙'
    };
    return icons[type] || '📍';
  };

  const getLocationTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
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

      {resource?.locations.map((location) => (
        <CircleMarker
          key={location.id}
          center={[location.lat, location.lng]}
          radius={8}
          pathOptions={{
            fillColor: resource.color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
          }}
        >
          <Popup>
            <div className="location-popup">
              <div className="popup-header">{location.name}</div>
              <div className="popup-type">
                {getLocationIcon(location.type)} {getLocationTypeLabel(location.type)}
              </div>

              <div className="popup-stats">
                {location.production && (
                  <div className="popup-stat">
                    <span className="popup-stat-label">Production:</span>
                    <span className="popup-stat-value">
                      {location.production} {location.unit}
                    </span>
                  </div>
                )}
                {location.capacity && (
                  <div className="popup-stat">
                    <span className="popup-stat-label">Capacity:</span>
                    <span className="popup-stat-value">
                      {location.capacity} {location.unit}
                    </span>
                  </div>
                )}
                {location.consumption && (
                  <div className="popup-stat">
                    <span className="popup-stat-label">Consumption:</span>
                    <span className="popup-stat-value">
                      {location.consumption} {location.unit}
                    </span>
                  </div>
                )}
              </div>

              {location.description && (
                <div className="popup-description">{location.description}</div>
              )}

              <div className="popup-country">📍 {location.country}</div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
