import { useState, useMemo } from 'react';
import { Map } from './components/Map';
import { Feed } from './components/Feed';
import { resources } from './data/resources';
import { Resource, LocationTypeFilter, AppView } from './types';
import './App.css';

function App() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    resources.copper
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<AppView>('map');
  const [locationTypeFilters, setLocationTypeFilters] = useState<LocationTypeFilter>({
    mine: true,
    field: true,
    refinery: false,
    plant: false,
    consumer: false,
    port: false,
    hub: false,
  });

  const resourcesByCategory = useMemo(() => ({
    energy: Object.values(resources).filter(r => r.category === 'energy'),
    metal: Object.values(resources).filter(r => r.category === 'metal'),
    mineral: Object.values(resources).filter(r => r.category === 'mineral'),
    element: Object.values(resources).filter(r => r.category === 'element'),
  }), []);

  const categoryLabels: Record<string, string> = {
    energy: 'Energy Resources',
    metal: 'Metals',
    mineral: 'Minerals',
    element: 'Elements',
  };

  const categoryIcons: Record<string, string> = {
    energy: '⚡',
    metal: '⚙️',
    mineral: '💎',
    element: '🔬',
  };

  const locationTypeLabels: Record<string, { label: string; icon: string; description: string }> = {
    mine: { label: 'Mining', icon: '⛏️', description: 'Ore extraction and mining operations' },
    field: { label: 'Fields', icon: '🛢️', description: 'Oil & gas field production' },
    refinery: { label: 'Refining', icon: '🏭', description: 'Processing and refining facilities' },
    plant: { label: 'Manufacturing', icon: '🏗️', description: 'Smelting and manufacturing plants' },
    port: { label: 'Ports', icon: '⚓', description: 'Major shipping and distribution hubs' },
    consumer: { label: 'Consumption', icon: '🏙️', description: 'Major consumption centers' },
    hub: { label: 'Hubs', icon: '🌐', description: 'Trading and distribution hubs' },
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return resourcesByCategory;

    const query = searchQuery.toLowerCase();
    const filtered: any = { energy: [], metal: [], mineral: [], element: [] };

    Object.entries(resourcesByCategory).forEach(([category, items]) => {
      filtered[category] = items.filter(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.uses.some(use => use.toLowerCase().includes(query))
      );
    });

    return filtered;
  }, [resourcesByCategory, searchQuery]);

  const totalResources = Object.values(resourcesByCategory).flat().length;
  const totalLocations = Object.values(resources).reduce((sum, r) => sum + r.locations.length, 0);

  const toggleLocationTypeFilter = (type: string) => {
    setLocationTypeFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const visibleLocationCount = selectedResource?.locations.filter(
    loc => locationTypeFilters[loc.type]
  ).length || 0;

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Meridian</h1>
          <p>Comprehensive visualization of global resource production, processing, and consumption patterns</p>
        </div>

        <div className="view-switcher">
          <button
            className={`view-tab ${activeView === 'map' ? 'active' : ''}`}
            onClick={() => setActiveView('map')}
          >
            Map View
          </button>
          <button
            className={`view-tab ${activeView === 'feed' ? 'active' : ''}`}
            onClick={() => setActiveView('feed')}
          >
            Community Feed
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="stats-overview">
          <div className="stats-grid-small">
            <div className="stat-card-small">
              <div className="stat-label-small">Resources</div>
              <div className="stat-value-small">
                {totalResources}
                <span className="stat-unit-small">tracked</span>
              </div>
            </div>
            <div className="stat-card-small">
              <div className="stat-label-small">Locations</div>
              <div className="stat-value-small">
                {totalLocations}
                <span className="stat-unit-small">sites</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Type Filters */}
        <div className="filter-section">
          <div className="filter-header">
            <span className="filter-title">Supply Chain Levels</span>
            <span className="filter-count">{visibleLocationCount} visible</span>
          </div>
          <div className="filter-toggles">
            {Object.entries(locationTypeLabels).map(([type, info]) => {
              const count = selectedResource?.locations.filter(loc => loc.type === type).length || 0;
              if (count === 0) return null;

              return (
                <button
                  key={type}
                  className={`filter-toggle ${locationTypeFilters[type] ? 'active' : ''}`}
                  onClick={() => toggleLocationTypeFilter(type)}
                  title={info.description}
                >
                  <span className="toggle-icon">{info.icon}</span>
                  <span className="toggle-label">{info.label}</span>
                  <span className="toggle-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="resource-list">
          {Object.entries(filteredCategories).map(([category, items]) => (
            items.length > 0 && (
              <div key={category} className="resource-category">
                <div className="category-title">
                  <span>{categoryIcons[category]}</span>
                  {categoryLabels[category]}
                </div>
                {items.map((resource) => (
                  <div
                    key={resource.id}
                    className={`resource-item ${selectedResource?.id === resource.id ? 'active' : ''}`}
                    onClick={() => setSelectedResource(resource)}
                  >
                    <div
                      className="resource-color"
                      style={{ backgroundColor: resource.color }}
                    />
                    <div className="resource-info">
                      <div className="resource-name">{resource.name}</div>
                      <div className="resource-stats">
                        <span className="resource-stat-item">
                          📍 {resource.locations.length} locations
                        </span>
                        <span className="resource-stat-item">
                          📊 {resource.globalProduction} {resource.unit}
                        </span>
                      </div>
                    </div>
                    <div className="resource-badge">
                      {resource.category}
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
      </div>

      {activeView === 'map' ? (
        <div className="map-container">
          <Map resource={selectedResource} locationTypeFilters={locationTypeFilters} />

          {selectedResource && (
            <div className="info-panel">
              <h2>
                <div
                  className="resource-color"
                  style={{ backgroundColor: selectedResource.color }}
                />
                {selectedResource.name}
              </h2>
              <p>{selectedResource.description}</p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-label">Global Production</div>
                  <div className="stat-value">
                    {selectedResource.globalProduction.toLocaleString()}
                    <span className="stat-unit">{selectedResource.unit}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Global Consumption</div>
                  <div className="stat-value">
                    {selectedResource.globalConsumption.toLocaleString()}
                    <span className="stat-unit">{selectedResource.unit}</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Total Sites</div>
                  <div className="stat-value">
                    {selectedResource.locations.length}
                    <span className="stat-unit">locations</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Visible Sites</div>
                  <div className="stat-value">
                    {visibleLocationCount}
                    <span className="stat-unit">shown</span>
                  </div>
                </div>
              </div>

              {selectedResource.marketSize && (
                <div className="info-section">
                  <div className="info-section-title">Market Size</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>
                    {selectedResource.marketSize}
                  </div>
                </div>
              )}

              <div className="info-section">
                <div className="info-section-title">Major Producers</div>
                <div className="info-tags">
                  {selectedResource.majorProducers.map((producer, idx) => (
                    <span key={idx} className="info-tag">🏭 {producer}</span>
                  ))}
                </div>
              </div>

              <div className="info-section">
                <div className="info-section-title">Major Consumers</div>
                <div className="info-tags">
                  {selectedResource.majorConsumers.map((consumer, idx) => (
                    <span key={idx} className="info-tag">🏙️ {consumer}</span>
                  ))}
                </div>
              </div>

              <div className="info-section">
                <div className="info-section-title">Primary Uses</div>
                <div className="info-tags">
                  {selectedResource.uses.map((use, idx) => (
                    <span key={idx} className="info-tag">{use}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Feed selectedResource={selectedResource} />
      )}
    </div>
  );
}

export default App;
