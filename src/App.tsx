import { useState, useMemo, useEffect, useCallback } from 'react';
import { WorldMap } from './components/WorldMap';
import { resources } from './data/resources';
import { Resource, ResourceCategory, LocationType, locationTypeLabels, categoryLabels, formatNumber, AreaResourceStats } from './types';
import L from 'leaflet';
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
  const [isCombinedElectricity, setIsCombinedElectricity] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isAreaSelectMode, setIsAreaSelectMode] = useState(false);
  const [selectedBounds, setSelectedBounds] = useState<L.LatLngBounds | null>(null);

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

  // Electricity computed values
  const electricityResourceList = useMemo(() => {
    return resourceList.filter((r) => r.category === 'electricity');
  }, [resourceList]);

  const totalElectricityProduction = useMemo(() => {
    return electricityResourceList.reduce((sum, r) => sum + r.globalProduction, 0);
  }, [electricityResourceList]);

  const totalElectricitySites = useMemo(() => {
    return electricityResourceList.reduce((sum, r) => sum + r.locations.length, 0);
  }, [electricityResourceList]);

  // All countries sorted for dropdown
  const allCountries = useMemo(() => {
    const countries = new Set<string>();
    resourceList.forEach((r) => r.locations.forEach((l) => countries.add(l.country)));
    return Array.from(countries).sort();
  }, [resourceList]);

  // Country data for country view
  const countryData = useMemo(() => {
    if (!selectedCountry) return [];
    return resourceList
      .map((r) => {
        const countryLocations = r.locations.filter((l) => l.country === selectedCountry);
        if (countryLocations.length === 0) return null;
        const countryTotal = countryLocations.reduce(
          (sum, l) => sum + (l.production || l.capacity || l.consumption || 0),
          0
        );
        const pctOfGlobal = r.globalProduction > 0 ? (countryTotal / r.globalProduction) * 100 : 0;
        return {
          resource: r,
          locations: countryLocations,
          countryTotal,
          pctOfGlobal,
        };
      })
      .filter(Boolean) as {
      resource: Resource;
      locations: typeof resourceList[0]['locations'];
      countryTotal: number;
      pctOfGlobal: number;
    }[];
  }, [selectedCountry, resourceList]);

  // Country totals map for popup percentage calculations
  const countryTotals = useMemo(() => {
    if (!selectedCountry) return undefined;
    const totals = new Map<string, number>();
    countryData.forEach((d) => {
      totals.set(d.resource.id, d.countryTotal);
    });
    return totals;
  }, [selectedCountry, countryData]);

  // Resources to pass to WorldMap in country view
  const countryResources = useMemo(() => {
    if (!selectedCountry) return undefined;
    return countryData.map((d) => d.resource);
  }, [selectedCountry, countryData]);

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

  useEffect(() => {
    if (selectedResource?.category === 'electricity' && !activeLocationTypes.has('plant')) {
      const newTypes = new Set(activeLocationTypes);
      newTypes.add('plant');
      setActiveLocationTypes(newTypes);
    }
  }, [selectedResource]);

  // When entering combined electricity mode, ensure 'plant' type is active
  useEffect(() => {
    if (isCombinedElectricity && !activeLocationTypes.has('plant')) {
      const newTypes = new Set(activeLocationTypes);
      newTypes.add('plant');
      setActiveLocationTypes(newTypes);
    }
  }, [isCombinedElectricity]);

  const handleSelectResource = (resource: Resource) => {
    setSelectedResource(resource);
    setIsCombinedElectricity(false);
    setSelectedCountry(null);
  };

  const handleSelectCombinedElectricity = () => {
    setIsCombinedElectricity(true);
    setSelectedResource(null);
    setSelectedCountry(null);
  };

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
    setIsCombinedElectricity(false);
    setSelectedResource(null);
  };

  const handleExitCountryView = () => {
    setSelectedCountry(null);
  };

  const handleAreaSelected = useCallback((bounds: L.LatLngBounds) => {
    setSelectedBounds(bounds);
  }, []);

  const handleClearAreaSelection = useCallback(() => {
    setSelectedBounds(null);
  }, []);

  const toggleAreaSelectMode = () => {
    setIsAreaSelectMode((prev) => {
      if (prev) {
        setSelectedBounds(null);
      }
      return !prev;
    });
  };

  // Compute area stats
  const areaStats: AreaResourceStats[] = useMemo(() => {
    if (!selectedBounds) return [];

    const results: AreaResourceStats[] = [];
    for (const res of resourceList) {
      const locsInArea = res.locations.filter((loc) =>
        selectedBounds.contains([loc.lat, loc.lng])
      );
      if (locsInArea.length === 0) continue;

      const totalInArea = locsInArea.reduce(
        (sum, l) => sum + (l.production || l.capacity || l.consumption || 0),
        0
      );
      const pctOfGlobal = res.globalProduction > 0 ? (totalInArea / res.globalProduction) * 100 : 0;

      // Per-country breakdown
      const countryMap = new Map<string, number>();
      for (const loc of locsInArea) {
        const val = loc.production || loc.capacity || loc.consumption || 0;
        countryMap.set(loc.country, (countryMap.get(loc.country) || 0) + val);
      }

      // Compute each country's global total for this resource
      const countryGlobalTotals = new Map<string, number>();
      for (const loc of res.locations) {
        const val = loc.production || loc.capacity || loc.consumption || 0;
        countryGlobalTotals.set(loc.country, (countryGlobalTotals.get(loc.country) || 0) + val);
      }

      const countryBreakdown = Array.from(countryMap.entries())
        .map(([country, totalInCountryArea]) => {
          const countryTotalGlobal = countryGlobalTotals.get(country) || 0;
          return {
            country,
            totalInArea: totalInCountryArea,
            countryTotalGlobal,
            pctOfCountry: countryTotalGlobal > 0 ? (totalInCountryArea / countryTotalGlobal) * 100 : 0,
          };
        })
        .sort((a, b) => b.totalInArea - a.totalInArea);

      results.push({
        resource: res,
        locationsInArea: locsInArea.length,
        totalInArea,
        pctOfGlobal,
        countryBreakdown,
      });
    }

    return results.sort((a, b) => b.pctOfGlobal - a.pctOfGlobal);
  }, [selectedBounds, resourceList]);

  // Determine view mode
  const viewMode: 'single' | 'combined' | 'country' =
    selectedCountry ? 'country' :
    isCombinedElectricity ? 'combined' :
    'single';

  // Active count depends on view mode
  const activeCount = useMemo(() => {
    if (viewMode === 'combined') {
      return electricityResourceList.reduce(
        (sum, r) => sum + r.locations.filter((l) => activeLocationTypes.has(l.type)).length,
        0
      );
    }
    if (viewMode === 'country' && countryResources) {
      return countryResources.reduce(
        (sum, r) => sum + r.locations.filter((l) => activeLocationTypes.has(l.type) && l.country === selectedCountry).length,
        0
      );
    }
    if (selectedResource) {
      return selectedResource.locations.filter((l) => activeLocationTypes.has(l.type)).length;
    }
    return 0;
  }, [viewMode, selectedResource, electricityResourceList, countryResources, activeLocationTypes, selectedCountry]);

  const categories: (ResourceCategory | 'all')[] = ['all', 'metals', 'energy', 'minerals', 'critical', 'electricity'];

  const renderResourceItem = (resource: Resource) => (
    <div
      key={resource.id}
      className={`resource-item ${selectedResource?.id === resource.id && !isCombinedElectricity ? 'active' : ''}`}
      onClick={() => handleSelectResource(resource)}
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

  const renderCombinedElectricityItem = () => {
    const colors = electricityResourceList.map((r) => r.color);
    const gradient = `conic-gradient(${colors.map((c, i) => `${c} ${(i / colors.length) * 360}deg ${((i + 1) / colors.length) * 360}deg`).join(', ')})`;

    return (
      <div
        className={`resource-item ${isCombinedElectricity ? 'active' : ''}`}
        onClick={handleSelectCombinedElectricity}
      >
        <div className="resource-header">
          <div className="resource-color" style={{ background: gradient }} />
          <div className="resource-name">All Electricity</div>
          <div className="resource-badge">{totalElectricitySites}</div>
        </div>
        <div className="resource-meta">
          {formatNumber(totalElectricityProduction)} MW combined
        </div>
      </div>
    );
  };

  // Determine what to pass to WorldMap
  const mapResources = viewMode === 'combined' ? electricityResourceList :
                       viewMode === 'country' ? countryResources :
                       undefined;
  const mapResource = viewMode === 'single' ? selectedResource : null;

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
            <>
              {activeCategory === 'electricity' && !searchQuery && renderCombinedElectricityItem()}
              {filteredResources.length > 0 ? (
                filteredResources.map(renderResourceItem)
              ) : (
                <div className="no-results">No resources match your search</div>
              )}
            </>
          ) : (
            groupedResources &&
            (Object.entries(groupedResources) as [ResourceCategory, Resource[]][]).map(
              ([category, items]) => (
                <div key={category} className="resource-group">
                  <div className="group-header">{categoryLabels[category]}</div>
                  {category === 'electricity' && renderCombinedElectricityItem()}
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
          <button
            className={`toggle-btn area-select-btn ${isAreaSelectMode ? 'active' : ''}`}
            onClick={toggleAreaSelectMode}
            title="Area Select: draw a rectangle to analyze resources in a region"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 4, verticalAlign: 'middle' }}>
              <rect x="1" y="1" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/>
            </svg>
            Area Select
          </button>
          {(selectedResource || isCombinedElectricity || selectedCountry) && (
            <div className="active-count">
              {activeCount} sites visible
            </div>
          )}
        </div>

        {/* Country selector dropdown */}
        <div className="country-selector">
          <select
            value={selectedCountry || ''}
            onChange={(e) => {
              if (e.target.value) {
                handleSelectCountry(e.target.value);
              } else {
                handleExitCountryView();
              }
            }}
          >
            <option value="">Select Country...</option>
            {allCountries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Country view back button */}
        {selectedCountry && (
          <div className="country-view-header">
            <button className="back-btn" onClick={handleExitCountryView}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to World
            </button>
            <span className="country-view-name">{selectedCountry}</span>
          </div>
        )}

        <WorldMap
          resource={mapResource}
          resources={mapResources}
          activeLocationTypes={activeLocationTypes}
          countryFilter={selectedCountry}
          countryTotals={countryTotals}
          isAreaSelectMode={isAreaSelectMode}
          selectedBounds={selectedBounds}
          onAreaSelected={handleAreaSelected}
          onClearSelection={handleClearAreaSelection}
        />

        {/* Info panel - single resource mode */}
        {viewMode === 'single' && selectedResource && (
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

        {/* Top countries panel - single resource mode */}
        {viewMode === 'single' && selectedResource && (
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
                    <div
                      key={country.country}
                      className="country-item clickable"
                      onClick={() => handleSelectCountry(country.country)}
                    >
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

        {/* Combined electricity breakdown panel */}
        {viewMode === 'combined' && (
          <div className="electricity-panel">
            <div className="panel-header">
              <h2>Electricity Generation Mix</h2>
            </div>
            <div className="elec-total">
              <span className="elec-total-value">{formatNumber(totalElectricityProduction)}</span>
              <span className="elec-total-unit">MW tracked capacity</span>
            </div>

            <div className="elec-stacked-bar">
              {electricityResourceList.map((r) => {
                const pct = (r.globalProduction / totalElectricityProduction) * 100;
                return (
                  <div
                    key={r.id}
                    className="elec-stacked-segment"
                    style={{ width: `${pct}%`, backgroundColor: r.color }}
                    title={`${r.name}: ${pct.toFixed(1)}%`}
                  />
                );
              })}
            </div>

            <div className="elec-breakdown">
              {electricityResourceList.map((r) => {
                const pct = (r.globalProduction / totalElectricityProduction) * 100;
                return (
                  <div key={r.id} className="elec-breakdown-row">
                    <div className="elec-breakdown-dot" style={{ backgroundColor: r.color }} />
                    <div className="elec-breakdown-name">{r.name}</div>
                    <div className="elec-breakdown-pct">{pct.toFixed(1)}%</div>
                    <div className="elec-breakdown-bar">
                      <div
                        className="elec-breakdown-bar-fill"
                        style={{ width: `${pct}%`, backgroundColor: r.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Country view detail panel */}
        {viewMode === 'country' && selectedCountry && (
          <div className="country-detail-panel">
            <div className="panel-header">
              <h2>{selectedCountry}</h2>
              <button className="minimize-btn" onClick={handleExitCountryView}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="country-detail-stats">
              <div className="stat-box">
                <div className="stat-label">Resources Present</div>
                <div className="stat-value">{countryData.length}</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Total Sites</div>
                <div className="stat-value">
                  {countryData.reduce((sum, d) => sum + d.locations.length, 0)}
                </div>
              </div>
            </div>

            <div className="country-detail-resources">
              {countryData.map((d) => (
                <div key={d.resource.id} className="country-detail-row">
                  <div className="elec-breakdown-dot" style={{ backgroundColor: d.resource.color }} />
                  <div className="country-detail-name">{d.resource.name}</div>
                  <div className="country-detail-sites">{d.locations.length} sites</div>
                  <div className="country-detail-global">{d.pctOfGlobal.toFixed(1)}% global</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Area selection analysis panel */}
        {selectedBounds && (
          <div className="area-select-panel">
            <div className="panel-header">
              <h2>Area Analysis</h2>
              <button className="minimize-btn" onClick={() => { setSelectedBounds(null); setIsAreaSelectMode(false); }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {areaStats.length > 0 ? (
              <>
                <div className="area-summary">
                  <div className="stat-box">
                    <div className="stat-label">Resources</div>
                    <div className="stat-value">{areaStats.length}</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Sites</div>
                    <div className="stat-value">
                      {areaStats.reduce((sum, s) => sum + s.locationsInArea, 0)}
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Countries</div>
                    <div className="stat-value">
                      {new Set(areaStats.flatMap((s) => s.countryBreakdown.map((c) => c.country))).size}
                    </div>
                  </div>
                </div>

                <div className="area-resource-list">
                  {areaStats.map((stat) => (
                    <div key={stat.resource.id} className="area-resource-section">
                      <div className="area-resource-header">
                        <div className="resource-color" style={{ backgroundColor: stat.resource.color }} />
                        <div className="area-resource-name">{stat.resource.name}</div>
                        <div className="area-resource-total">
                          {formatNumber(stat.totalInArea)} {stat.resource.unit}
                        </div>
                        <div className="area-resource-pct">{stat.pctOfGlobal.toFixed(1)}% global</div>
                      </div>
                      <div className="area-country-list">
                        {stat.countryBreakdown.length === 1 ? (
                          <div className="area-country-row single">
                            <span className="area-country-name">{stat.countryBreakdown[0].country}</span>
                            <span className="area-country-pct">{stat.countryBreakdown[0].pctOfCountry.toFixed(1)}% of national</span>
                          </div>
                        ) : (
                          stat.countryBreakdown.map((cb) => (
                            <div key={cb.country} className="area-country-row">
                              <span className="area-country-name">{cb.country}</span>
                              <span className="area-country-amount">{formatNumber(cb.totalInArea)} {stat.resource.unit}</span>
                              <span className="area-country-pct">{cb.pctOfCountry.toFixed(1)}% of national</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="area-empty">No resource locations found in selected area. Try selecting a larger region.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
