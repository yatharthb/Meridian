import { useState } from 'react';
import { Map } from './components/Map';
import { resources } from './data/resources';
import { Resource } from './types';
import './App.css';

function App() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    resources.copper
  );

  const resourcesByCategory = {
    energy: Object.values(resources).filter(r => r.category === 'energy'),
    metal: Object.values(resources).filter(r => r.category === 'metal'),
    mineral: Object.values(resources).filter(r => r.category === 'mineral'),
    element: Object.values(resources).filter(r => r.category === 'element'),
  };

  const categoryLabels: Record<string, string> = {
    energy: 'Energy Resources',
    metal: 'Metals',
    mineral: 'Minerals',
    element: 'Elements',
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Meridian</h1>
          <p>Global Economy Visualizer - Explore production, processing, and consumption of 20 key resources worldwide</p>
        </div>

        <div className="resource-list">
          {Object.entries(resourcesByCategory).map(([category, items]) => (
            items.length > 0 && (
              <div key={category} className="resource-category">
                <div className="category-title">{categoryLabels[category]}</div>
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
                        {resource.locations.length} locations • {resource.globalProduction} {resource.unit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
      </div>

      <div className="map-container">
        <Map resource={selectedResource} />

        {selectedResource && (
          <div className="info-panel">
            <h2>
              <div className="resource-color" style={{ backgroundColor: selectedResource.color }} />
              {selectedResource.name}
            </h2>
            <p>{selectedResource.description}</p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-label">Global Production</div>
                <div className="stat-value">
                  {selectedResource.globalProduction}
                  <span className="stat-unit">{selectedResource.unit}</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Global Consumption</div>
                <div className="stat-value">
                  {selectedResource.globalConsumption}
                  <span className="stat-unit">{selectedResource.unit}</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Tracked Locations</div>
                <div className="stat-value">
                  {selectedResource.locations.length}
                  <span className="stat-unit">sites</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Category</div>
                <div className="stat-value" style={{ fontSize: '14px' }}>
                  {selectedResource.category}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
