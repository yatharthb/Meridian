import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { Resource, Location, LocationType, locationTypeLabels, formatNumber } from '../types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface WorldMapProps {
  resource: Resource | null;
  resources?: Resource[];
  activeLocationTypes: Set<LocationType>;
  countryFilter?: string | null;
  countryTotals?: Map<string, number>;
  isAreaSelectMode?: boolean;
  selectedBounds?: L.LatLngBounds | null;
  onAreaSelected?: (bounds: L.LatLngBounds) => void;
  onClearSelection?: () => void;
}

interface MapControllerProps {
  resource: Resource | null;
  countryFilter?: string | null;
  countryBounds?: L.LatLngBoundsExpression | null;
}

function MapController({ resource, countryFilter, countryBounds }: MapControllerProps) {
  const map = useMap();
  const prevCountryRef = useRef<string | null>(null);

  useEffect(() => {
    map.invalidateSize();
  }, [map, resource]);

  useEffect(() => {
    if (countryFilter && countryBounds) {
      map.fitBounds(countryBounds as L.LatLngBoundsExpression, { padding: [50, 50], maxZoom: 6 });
    } else if (prevCountryRef.current && !countryFilter) {
      map.setView([20, 0], 2);
    }
    prevCountryRef.current = countryFilter ?? null;
  }, [map, countryFilter, countryBounds]);

  return null;
}

interface RectangleSelectorProps {
  isSelecting: boolean;
  selectedBounds: L.LatLngBounds | null;
  onAreaSelected: (bounds: L.LatLngBounds) => void;
  onClearSelection: () => void;
}

function RectangleSelector({ isSelecting, selectedBounds, onAreaSelected, onClearSelection }: RectangleSelectorProps) {
  const map = useMap();
  const startPointRef = useRef<L.Point | null>(null);
  const startLatLngRef = useRef<L.LatLng | null>(null);
  const previewRectRef = useRef<L.Rectangle | null>(null);
  const selectedRectRef = useRef<L.Rectangle | null>(null);

  useEffect(() => {
    // Show/remove selected rectangle
    if (selectedBounds) {
      if (selectedRectRef.current) {
        selectedRectRef.current.setBounds(selectedBounds);
      } else {
        selectedRectRef.current = L.rectangle(selectedBounds, {
          color: '#6c7cff',
          weight: 2,
          dashArray: '6 4',
          fillColor: '#6c7cff',
          fillOpacity: 0.08,
          interactive: false,
        }).addTo(map);
      }
    } else {
      if (selectedRectRef.current) {
        selectedRectRef.current.remove();
        selectedRectRef.current = null;
      }
    }
  }, [map, selectedBounds]);

  useEffect(() => {
    if (!isSelecting) {
      // Cleanup when exiting select mode
      if (previewRectRef.current) {
        previewRectRef.current.remove();
        previewRectRef.current = null;
      }
      startPointRef.current = null;
      startLatLngRef.current = null;
      map.getContainer().style.cursor = '';
      map.dragging.enable();
      return;
    }

    map.getContainer().style.cursor = 'crosshair';

    const onMouseDown = (e: L.LeafletMouseEvent) => {
      startPointRef.current = e.containerPoint;
      startLatLngRef.current = e.latlng;
      map.dragging.disable();

      // Clear previous selection when starting new drag
      if (selectedRectRef.current) {
        selectedRectRef.current.remove();
        selectedRectRef.current = null;
        onClearSelection();
      }
    };

    const onMouseMove = (e: L.LeafletMouseEvent) => {
      if (!startLatLngRef.current) return;

      const bounds = L.latLngBounds(startLatLngRef.current, e.latlng);
      if (previewRectRef.current) {
        previewRectRef.current.setBounds(bounds);
      } else {
        previewRectRef.current = L.rectangle(bounds, {
          color: '#6c7cff',
          weight: 1.5,
          dashArray: '4 4',
          fillColor: '#6c7cff',
          fillOpacity: 0.05,
          interactive: false,
        }).addTo(map);
      }
    };

    const onMouseUp = (e: L.LeafletMouseEvent) => {
      map.dragging.enable();
      if (!startPointRef.current || !startLatLngRef.current) return;

      // Remove preview
      if (previewRectRef.current) {
        previewRectRef.current.remove();
        previewRectRef.current = null;
      }

      // Min 10x10px threshold
      const dx = Math.abs(e.containerPoint.x - startPointRef.current.x);
      const dy = Math.abs(e.containerPoint.y - startPointRef.current.y);
      if (dx < 10 || dy < 10) {
        startPointRef.current = null;
        startLatLngRef.current = null;
        return;
      }

      const bounds = L.latLngBounds(startLatLngRef.current, e.latlng);
      onAreaSelected(bounds);

      startPointRef.current = null;
      startLatLngRef.current = null;
    };

    map.on('mousedown', onMouseDown);
    map.on('mousemove', onMouseMove);
    map.on('mouseup', onMouseUp);

    return () => {
      map.off('mousedown', onMouseDown);
      map.off('mousemove', onMouseMove);
      map.off('mouseup', onMouseUp);
      map.getContainer().style.cursor = '';
      map.dragging.enable();
      if (previewRectRef.current) {
        previewRectRef.current.remove();
        previewRectRef.current = null;
      }
    };
  }, [map, isSelecting, onAreaSelected, onClearSelection]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (selectedRectRef.current) {
        selectedRectRef.current.remove();
      }
      if (previewRectRef.current) {
        previewRectRef.current.remove();
      }
    };
  }, []);

  return null;
}

function getMarkerRadius(location: Location, globalProduction: number): number {
  const value = location.production || location.capacity || location.consumption || 0;
  if (globalProduction === 0) return 3;
  const ratio = value / globalProduction;
  if (ratio > 0.05) return 8;
  if (ratio > 0.02) return 6;
  if (ratio > 0.005) return 5;
  if (ratio > 0.001) return 4;
  return 3;
}

function getMarkerOpacity(location: Location, globalProduction: number): number {
  const value = location.production || location.capacity || location.consumption || 0;
  if (globalProduction === 0) return 0.7;
  const ratio = value / globalProduction;
  if (ratio > 0.02) return 0.9;
  if (ratio > 0.005) return 0.8;
  return 0.7;
}

function calculatePercentage(location: Location, globalProduction: number): string {
  const value = location.production || location.capacity || location.consumption || 0;
  if (value === 0 || globalProduction === 0) return '0';
  return ((value / globalProduction) * 100).toFixed(2);
}

interface UnifiedMarker {
  location: Location;
  color: string;
  resourceName: string;
  globalProduction: number;
  resourceId: string;
}

export function WorldMap({ resource, resources, activeLocationTypes, countryFilter, countryTotals, isAreaSelectMode, selectedBounds, onAreaSelected, onClearSelection }: WorldMapProps) {
  // Build unified marker list from either single resource or multiple resources
  const markers: UnifiedMarker[] = [];

  if (resources && resources.length > 0) {
    // Multi-resource mode (combined electricity or country view)
    for (const res of resources) {
      for (const loc of res.locations) {
        if (!activeLocationTypes.has(loc.type)) continue;
        if (countryFilter && loc.country !== countryFilter) continue;
        markers.push({
          location: loc,
          color: res.color,
          resourceName: res.name,
          globalProduction: res.globalProduction,
          resourceId: res.id,
        });
      }
    }
  } else if (resource) {
    // Single resource mode
    for (const loc of resource.locations) {
      if (!activeLocationTypes.has(loc.type)) continue;
      if (countryFilter && loc.country !== countryFilter) continue;
      markers.push({
        location: loc,
        color: resource.color,
        resourceName: resource.name,
        globalProduction: resource.globalProduction,
        resourceId: resource.id,
      });
    }
  }

  // Compute country bounds for zoom
  const countryBounds = countryFilter && markers.length > 0
    ? L.latLngBounds(markers.map(m => [m.location.lat, m.location.lng] as L.LatLngTuple))
    : null;

  const isMultiResource = !!(resources && resources.length > 0);

  return (
    <MapContainer
      key="main-map"
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={10}
      style={{ height: '100%', width: '100%' }}
      worldCopyJump={true}
      zoomControl={false}
    >
      <MapController resource={resource} countryFilter={countryFilter} countryBounds={countryBounds} />
      {onAreaSelected && onClearSelection && (
        <RectangleSelector
          isSelecting={!!isAreaSelectMode}
          selectedBounds={selectedBounds ?? null}
          onAreaSelected={onAreaSelected}
          onClearSelection={onClearSelection}
        />
      )}
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {markers.map((m) => {
        const percentage = calculatePercentage(m.location, m.globalProduction);
        const radius = getMarkerRadius(m.location, m.globalProduction);
        const fillOpacity = getMarkerOpacity(m.location, m.globalProduction);

        // Country percentage calculation
        let countryPercentage: string | null = null;
        if (countryFilter && countryTotals) {
          const countryTotal = countryTotals.get(m.resourceId) || 0;
          const value = m.location.production || m.location.capacity || m.location.consumption || 0;
          if (countryTotal > 0 && value > 0) {
            countryPercentage = ((value / countryTotal) * 100).toFixed(1);
          }
        }

        return (
          <CircleMarker
            key={m.location.id}
            center={[m.location.lat, m.location.lng]}
            radius={radius}
            pathOptions={{
              fillColor: m.color,
              color: m.color,
              weight: 1,
              opacity: 0.6,
              fillOpacity,
            }}
          >
            <Popup>
              <div className="location-popup">
                <h3>{m.location.name}</h3>
                {isMultiResource && (
                  <div className="location-resource-name" style={{ color: m.color }}>
                    {m.resourceName}
                  </div>
                )}
                <div className="location-type" style={{ backgroundColor: m.color }}>
                  {locationTypeLabels[m.location.type].icon} {locationTypeLabels[m.location.type].label}
                </div>

                {m.location.operator && (
                  <div className="location-operator">
                    {m.location.operator}
                  </div>
                )}

                <div className="location-details">
                  {m.location.production !== undefined && (
                    <div className="detail-row">
                      <span className="detail-label">Production</span>
                      <span className="detail-value">
                        {formatNumber(m.location.production)} {m.location.unit}
                        <span className="percentage">{percentage}% global</span>
                      </span>
                    </div>
                  )}
                  {m.location.capacity !== undefined && (
                    <div className="detail-row">
                      <span className="detail-label">Capacity</span>
                      <span className="detail-value">
                        {formatNumber(m.location.capacity)} {m.location.unit}
                        <span className="percentage">{percentage}% global</span>
                      </span>
                    </div>
                  )}
                  {m.location.consumption !== undefined && (
                    <div className="detail-row">
                      <span className="detail-label">Consumption</span>
                      <span className="detail-value">
                        {formatNumber(m.location.consumption)} {m.location.unit}
                        <span className="percentage">{percentage}% global</span>
                      </span>
                    </div>
                  )}
                  {countryPercentage && (
                    <div className="detail-row">
                      <span className="detail-label">% of {countryFilter}</span>
                      <span className="detail-value">
                        <span className="percentage country-pct-badge">{countryPercentage}%</span>
                      </span>
                    </div>
                  )}
                  <div className="detail-row">
                    <span className="detail-label">Country</span>
                    <span className="detail-value">{m.location.country}</span>
                  </div>
                </div>

                {m.location.description && (
                  <div className="location-description">{m.location.description}</div>
                )}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
