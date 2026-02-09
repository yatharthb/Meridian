import { useState, useMemo } from 'react';
import { WorldMap } from './components/WorldMap';
import { resources } from './data/resources';
import { Resource, ResourceCategory, LocationType, locationTypeLabels, categoryLabels, formatNumber } from './types';
import './App.css';

function App() {
  const resourceList = Object.values(resources);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    resourceList[0] || null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all');
  const [activeLocationTypes, setActiveLocationTypes] = useState<Set<LocationType>>(
    new Set(['mine', 'field'])
  );
  const [isInfoMinimized, setIsInfoMinimized] = useState(false);
  const [isCountryMinimized, setIsCountryMinimized] = useState(false);

  const toggleLocationType = (type: LocationType) => {
    const newTypes = new Set(activeLocationTypes);
    if (newTypes.has(type)) {
      newTypes.delete(type);
    } else {
      newTypes.add(type);
    }
    setActiveLocationTypes(newTypes);
  };

  const filteredResources = useMemo(() => {
    return resourceList.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [resourceList, searchQuery, activeCategory]);

  const groupedResources = useMemo(() => {
    if (activeCategory !== 'all') return null;
    const groups: Partial<Record<ResourceCategory, Resource[]>> = {};
    filteredResources.forEach((r) => {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category]!.push(r);
    });
    return groups;
  }, [filteredResources, activeCategory]);

  const globalStats = useMemo(() => {
    const totalLocations = resourceList.reduce((sum, r) => sum + r.locations.length, 0);
    const countries = new Set(resourceList.flatMap((r) => r.locations.map((l) => l.country)));
    return { totalResources: resourceList.length, totalLocations, totalCountries: countries.size };
  }, [resourceList]);

  const getTopCountries = (resource: Resource) => {
    const countryStats = new Map<string, number>();
    resource.locations.forEach((location) => {
      const value = location.production || location.capacity || 0;
      const current = countryStats.get(location.country) || 0;
      countryStats.set(location.country, current + value);
    });

    const sorted = Array.from(countryStats.entries())
      .map(([country, production]) => ({
        country,
        production,
        percentage: (production / resource.globalProduction) * 100,
      }))
      .sort((a, b) => b.production - a.production)
      .slice(0, 10);

    return sorted;
  };

  const activeCount = selectedResource
    ? selectedResource.locations.filter((l) => activeLocationTypes.has(l.type)).length
    : 0;

  const categories: (ResourceCategory | 'all')[] = ['all', 'metals', 'energy', 'minerals', 'critical'];

  const renderResourceItem = (resource: Resource) => (
    <div
      key={resource.id}
      className={`resource-item ${selectedResource?.id === resource.id ? 'active' : ''}`}
      onClick={() => setSelectedResource(resource)}
    >
      <div className="resource-header">
        <div className="resource-color" style={{ backgroundColor: resource.color }} />
        <div className="resource-name">{resource.name}</div>
        <div className="resource-badge">{resource.locations.length}</div>
      </div>
      <div className="resource-meta">
        {formatNumber(resource.globalProduction)} {resource.unit}
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo-row">
            <h1>Meridian</h1>
            <span className="version-badge">v1.0</span>
          </div>
          <p>Global Economy Visualizer</p>
        </div>

        <div className="sidebar-stats">
          <div className="mini-stat">
            <span className="mini-stat-value">{globalStats.totalResources}</span>
            <span className="mini-stat-label">Resources</span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-value">{globalStats.totalLocations}</span>
            <span className="mini-stat-label">Locations</span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-value">{globalStats.totalCountries}</span>
            <span className="mini-stat-label">Countries</span>
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>
              &times;
            </button>
          )}
        </div>

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All' : categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="resource-list">
          {searchQuery || activeCategory !== 'all' ? (
            filteredResources.length > 0 ? (
              filteredResources.map(renderResourceItem)
            ) : (
              <div className="no-results">No resources match your search</div>
            )
          ) : (
            groupedResources &&
            (Object.entries(groupedResources) as [ResourceCategory, Resource[]][]).map(
              ([category, items]) => (
                <div key={category} className="resource-group">
                  <div className="group-header">{categoryLabels[category]}</div>
                  {items.map(renderResourceItem)}
                </div>
              )
            )
          )}
        </div>
      </div>

      <div className="map-container">
        <div className="location-type-toggles">
          {(Object.keys(locationTypeLabels) as LocationType[]).map((type) => (
            <button
              key={type}
              className={`toggle-btn ${activeLocationTypes.has(type) ? 'active' : ''}`}
              onClick={() => toggleLocationType(type)}
            >
              {locationTypeLabels[type].icon} {locationTypeLabels[type].label}
            </button>
          ))}
          {selectedResource && (
            <div className="active-count">
              {activeCount} sites visible
            </div>
          )}
        </div>

        <WorldMap
          resource={selectedResource}
          activeLocationTypes={activeLocationTypes}
        />

        {selectedResource && (
          <>
            {isInfoMinimized ? (
              <div className="panel-tab info-tab" onClick={() => setIsInfoMinimized(false)}>
                Resource Info
              </div>
            ) : (
              <div className="info-panel">
                <div className="panel-header">
                  <h2>
                    <div
                      className="resource-color"
                      style={{ backgroundColor: selectedResource.color }}
                    />
                    {selectedResource.name}
                  </h2>
                  <button className="minimize-btn" onClick={() => setIsInfoMinimized(true)}>
                    <svg width="14" height="2" viewBox="0 0 14 2"><rect width="14" height="2" rx="1" fill="currentColor"/></svg>
                  </button>
                </div>
                <p className="info-description">{selectedResource.description}</p>

                <div className="info-stats">
                  <div className="stat-box">
                    <div className="stat-label">Global Production</div>
                    <div className="stat-value">
                      {formatNumber(selectedResource.globalProduction)}
                      <span className="stat-unit">{selectedResource.unit}</span>
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Tracked Sites</div>
                    <div className="stat-value">
                      {selectedResource.locations.length}
                      <span className="stat-unit">locations</span>
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Visible</div>
                    <div className="stat-value">
                      {activeCount}
                      <span className="stat-unit">on map</span>
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Countries</div>
                    <div className="stat-value">
                      {new Set(selectedResource.locations.map((l) => l.country)).size}
                      <span className="stat-unit">nations</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {selectedResource && (
          <>
            {isCountryMinimized ? (
              <div className="panel-tab country-tab" onClick={() => setIsCountryMinimized(false)}>
                Top Countries
              </div>
            ) : (
              <div className="country-panel">
                <div className="panel-header">
                  <h2>Top Producing Countries</h2>
                  <button className="minimize-btn" onClick={() => setIsCountryMinimized(true)}>
                    <svg width="14" height="2" viewBox="0 0 14 2"><rect width="14" height="2" rx="1" fill="currentColor"/></svg>
                  </button>
                </div>

                <div className="country-list">
                  {getTopCountries(selectedResource).map((country, index) => (
                    <div key={country.country} className="country-item">
                      <div className="country-rank" style={{
                        color: index < 3 ? selectedResource.color : undefined,
                      }}>
                        {index + 1}
                      </div>
                      <div className="country-info">
                        <div className="country-name">{country.country}</div>
                        <div className="country-production">
                          {formatNumber(country.production)} {selectedResource.unit}
                        </div>
                      </div>
                      <div className="country-pct">{country.percentage.toFixed(1)}%</div>
                      <div className="country-bar">
                        <div
                          className="country-bar-fill"
                          style={{
                            width: `${Math.min(country.percentage, 100)}%`,
                            backgroundColor: selectedResource.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
