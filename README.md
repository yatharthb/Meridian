# Meridian - Global Economy Visualizer

A comprehensive, interactive web application that visualizes the entire global economy through detailed mapping of resource production, processing, and consumption flows for 20 critical resources.

![Version](https://img.shields.io/badge/version-0.2.0-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6)

## Features

### Core Functionality

🗺️ **Interactive World Map**
- Dark-themed map optimized for data visualization
- Dynamic markers sized by production volume
- Smooth animations and transitions
- Responsive zoom and pan controls

🔄 **Supply Chain Visualization**
- Flow lines showing resource movement between locations
- Visual representation of trade relationships
- Production-to-consumption pathways

📊 **Comprehensive Data**
- 20 key global resources tracked
- 180+ production, refining, and consumption locations worldwide
- Real production statistics and capacity data
- Operator information and establishment dates
- Employee counts and export destinations

🔍 **Smart Search**
- Real-time search filtering
- Search by resource name, description, or uses
- Instant results across all categories

📈 **Rich Information Panels**
- Detailed statistics for each resource
- Market size and pricing information
- Major producers and consumers
- Primary use cases
- Global production/consumption data

### Resource Categories

#### Energy Resources (3)
- **Crude Oil** - Primary transportation fuel and petrochemicals feedstock
- **Natural Gas** - Clean electricity generation and heating
- **Coal** - Power generation and steel production

#### Metals (10)
- **Copper** - Electrical wiring and electronics
- **Aluminium** - Lightweight applications and packaging
- **Nickel** - Stainless steel and EV batteries
- **Steel** - Construction and manufacturing
- **Gold** - Jewelry, investment, and electronics
- **Silver** - Industrial applications and solar panels
- **Cobalt** - Battery cathodes and superalloys
- **Zinc** - Galvanizing and die-casting
- **Platinum** - Catalytic converters and fuel cells
- **Manganese** - Steel production and batteries

#### Minerals (4)
- **Iron Ore** - Steel production raw material
- **Cement** - Concrete and construction
- **Phosphate** - Fertilizers and food security
- **Potash** - Agricultural fertilizers

#### Elements (3)
- **Lithium** - EV batteries and energy storage
- **Uranium** - Nuclear power generation
- **Rare Earth Elements** - High-tech and green technologies

## Technology Stack

- **React 18** - Modern UI framework with hooks
- **TypeScript 5.5** - Type-safe development
- **Vite 5** - Lightning-fast build tool
- **Leaflet** - Interactive mapping library
- **React-Leaflet** - React bindings for Leaflet
- **Lucide React** - Beautiful icon system

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yatharthb/Meridian.git
cd Meridian

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173/`

## Project Structure

```
Meridian/
├── src/
│   ├── components/
│   │   └── Map.tsx          # Interactive map with markers and flows
│   ├── data/
│   │   └── resources.ts     # Comprehensive resource database
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Data Coverage

### Location Types
- **Mines** - Extraction sites (ore, coal, precious metals)
- **Fields** - Oil and gas production areas
- **Refineries** - Processing facilities
- **Plants** - Manufacturing and smelting
- **Ports** - Major shipping hubs
- **Consumers** - End-use industrial centers

### Data Points Per Location
- Precise geographic coordinates
- Production/capacity/consumption statistics
- Operating company
- Establishment date
- Employee count
- Export destinations
- Detailed descriptions

### Supply Chain Data
- Origin and destination mapping
- Volume and flow rates
- Trade relationships
- Distribution networks

## Features Highlights

### Visual Design
- **Modern Dark Theme** - Optimized for extended viewing
- **Gradient Accents** - Purple-blue color scheme
- **Smooth Animations** - Fade-ins, transitions, and hover effects
- **Responsive Layout** - Adapts to different screen sizes

### Interactive Elements
- **Clickable Markers** - Detailed popups with location info
- **Dynamic Sizing** - Markers scale with production volume
- **Color Coding** - Each resource has unique color
- **Flow Visualization** - Dashed lines show supply chains
- **Live Search** - Filter resources in real-time

### Information Architecture
- **Categorized Resources** - Organized by type
- **Statistics Dashboard** - Key metrics at a glance
- **Resource Details** - Comprehensive information panels
- **Market Data** - Size, pricing, and trends

## Use Cases

📚 **Education** - Teaching global economics and resource geography
🔬 **Research** - Analyzing supply chains and trade patterns
💼 **Business** - Understanding commodity markets and production
🌍 **Journalism** - Visualizing economic stories and trends
📊 **Analysis** - Studying resource dependencies and flows

## Performance

- **Fast Initial Load** - Optimized bundle size
- **Smooth Interactions** - 60 FPS animations
- **Efficient Rendering** - React optimization techniques
- **Lazy Loading** - Components load on demand

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- [ ] Historical production trends and charts
- [ ] Additional resources (coffee, wheat, semiconductors)
- [ ] More detailed supply chain networks
- [ ] Climate impact and sustainability metrics
- [ ] Real-time pricing data integration
- [ ] Comparison mode for multiple resources
- [ ] Export capabilities (PDF, CSV)
- [ ] Mobile-optimized interface
- [ ] Multi-language support
- [ ] Dark/light theme toggle

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## Data Sources

Data compiled from:
- Company annual reports and production statistics
- International Energy Agency (IEA)
- U.S. Geological Survey (USGS)
- World Bank commodity data
- Industry associations and mining companies

## License

MIT License - see LICENSE file for details

## Acknowledgments

- OpenStreetMap for base map tiles
- CartoDB for dark map styling
- All the companies and organizations providing public production data

## Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ by [Yatharth Bindal](https://github.com/yatharthb)
