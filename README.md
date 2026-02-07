# Meridian - Global Economy Visualizer

An interactive web application that visualizes the entire global economy in a map format, showing production, processing, and consumption flows for 20 key resources.

## Features

- **Interactive World Map**: Explore resource production and consumption locations globally
- **20 Key Resources**: Including Oil, Copper, Iron, Lithium, Coal, Natural Gas, and more
- **Detailed Location Data**: View production statistics, capacity, and descriptions for each site
- **Visual Organization**: Resources categorized by Energy, Metals, Minerals, and Elements
- **Real-time Information**: Production facilities, mines, refineries, ports, and consumption centers

## Resources Included

### Energy Resources
- Crude Oil
- Natural Gas
- Coal

### Metals
- Copper
- Aluminium
- Nickel
- Steel
- Gold
- Silver
- Cobalt
- Zinc
- Platinum
- Manganese

### Minerals
- Iron Ore
- Cement
- Phosphate
- Potash

### Elements
- Lithium
- Uranium
- Rare Earth Elements

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Leaflet** - Interactive map library
- **React-Leaflet** - React components for Leaflet

## Project Structure

```
src/
├── components/       # React components
│   └── Map.tsx      # Map visualization component
├── data/            # Resource data
│   └── resources.ts # 20 resources with location data
├── types.ts         # TypeScript type definitions
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Data Structure

Each resource includes:
- Production sites (mines, fields)
- Processing facilities (refineries, smelters, plants)
- Transportation hubs (ports)
- Production/capacity statistics
- Geographic coordinates
- Descriptions and context

## Usage

1. **Select a Resource**: Click on any resource in the left sidebar
2. **Explore Locations**: The map displays all tracked locations for that resource
3. **View Details**: Click on any marker to see production statistics and information
4. **Compare**: Switch between resources to see different production patterns

## Future Enhancements

- Flow visualization showing resource movement
- Historical production data and trends
- Supply chain connections between locations
- Filter locations by type (mines, refineries, etc.)
- Export data and generate reports
- Additional resources and locations

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
