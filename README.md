# Meridian - Global Economy Visualizer

An interactive visualization platform for exploring global resource production, processing, and consumption patterns across 20 critical resources.

## Overview

Meridian provides a comprehensive view of the global economy through interactive maps showing:
- **Primary extraction**: Mines, oil/gas fields
- **Processing**: Refineries, smelters, processing plants
- **Manufacturing**: Production facilities
- **Distribution**: Ports and shipping hubs
- **Consumption**: Major consumption centers

## Resources Tracked (20)

### Metals (10)
- Copper
- Iron
- Aluminium
- Nickel
- Steel
- Gold
- Silver
- Cobalt
- Zinc
- Platinum
- Manganese

### Energy (3)
- Crude Oil
- Natural Gas
- Coal

### Minerals (4)
- Phosphate
- Potash
- Cement
- Rare Earth Elements

### Critical Elements (3)
- Lithium
- Uranium

## Features

- 🗺️ **Interactive World Map** with real-time pan and zoom
- 📍 **Comprehensive Location Data** covering major global production centers
- 📊 **Production Statistics** for each location
- 🔄 **Supply Chain Visualization** from extraction to consumption
- 🎨 **Color-coded Resources** for easy identification
- 📱 **Responsive Design** works on desktop and mobile

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Leaflet** - Interactive mapping
- **Vite** - Build tool

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. Open the application
2. Select a resource from the sidebar
3. Explore locations on the map
4. Click markers for detailed information

## Data Coverage

Each resource includes:
- Major production facilities worldwide
- Processing and refining locations
- Manufacturing plants
- Distribution hubs
- Consumption centers

Covering approximately 70-90% of global production for each resource.

## Project Structure

```
src/
├── components/
│   └── WorldMap.tsx       # Map visualization component
├── data/
│   └── resources.ts        # Comprehensive resource database
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main application
├── App.css                 # Styles
└── main.tsx                # Entry point
```

## License

MIT

## Contributing

Contributions welcome! Please open an issue or pull request.
