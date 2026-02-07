import { Resource, ResourceMap } from '../types';

export const resources: ResourceMap = {
  copper: {
    id: 'copper',
    name: 'Copper',
    category: 'metal',
    color: '#B87333',
    unit: 'million tonnes',
    globalProduction: 25,
    globalConsumption: 25,
    description: 'Essential for electrical wiring, electronics, and construction',
    locations: [
      {
        id: 'escondida',
        name: 'Escondida Mine',
        lat: -24.2306,
        lng: -69.0617,
        type: 'mine',
        production: 1.0,
        unit: 'million tonnes/year',
        country: 'Chile',
        description: 'World\'s largest copper mine'
      },
      {
        id: 'grasberg',
        name: 'Grasberg Mine',
        lat: -4.0536,
        lng: 137.1161,
        type: 'mine',
        production: 0.6,
        unit: 'million tonnes/year',
        country: 'Indonesia',
        description: 'Largest gold mine and 2nd largest copper mine'
      },
      {
        id: 'morenci',
        name: 'Morenci Mine',
        lat: 33.0547,
        lng: -109.3675,
        type: 'mine',
        production: 0.4,
        unit: 'million tonnes/year',
        country: 'USA',
        description: 'Largest copper mine in North America'
      },
      {
        id: 'chuquicamata',
        name: 'Chuquicamata',
        lat: -22.2833,
        lng: -68.9000,
        type: 'mine',
        production: 0.4,
        unit: 'million tonnes/year',
        country: 'Chile',
        description: 'One of the largest open pit mines'
      },
      {
        id: 'tongling',
        name: 'Tongling Nonferrous',
        lat: 30.9456,
        lng: 117.8114,
        type: 'refinery',
        capacity: 1.2,
        unit: 'million tonnes/year',
        country: 'China',
        description: 'Major copper refinery'
      }
    ]
  },
  oil: {
    id: 'oil',
    name: 'Crude Oil',
    category: 'energy',
    color: '#000000',
    unit: 'million barrels/day',
    globalProduction: 95,
    globalConsumption: 95,
    description: 'Primary energy source for transportation and petrochemicals',
    locations: [
      {
        id: 'ghawar',
        name: 'Ghawar Field',
        lat: 25.5,
        lng: 49.5,
        type: 'field',
        production: 3.8,
        unit: 'million barrels/day',
        country: 'Saudi Arabia',
        description: 'World\'s largest oil field'
      },
      {
        id: 'permian',
        name: 'Permian Basin',
        lat: 31.8,
        lng: -102.4,
        type: 'field',
        production: 5.2,
        unit: 'million barrels/day',
        country: 'USA',
        description: 'Largest oil-producing region in USA'
      },
      {
        id: 'burgan',
        name: 'Burgan Field',
        lat: 29.1,
        lng: 48.0,
        type: 'field',
        production: 1.7,
        unit: 'million barrels/day',
        country: 'Kuwait',
        description: 'Second largest oil field'
      },
      {
        id: 'houston',
        name: 'Houston Refining Complex',
        lat: 29.7604,
        lng: -95.3698,
        type: 'refinery',
        capacity: 2.5,
        unit: 'million barrels/day',
        country: 'USA',
        description: 'Largest refining hub in North America'
      },
      {
        id: 'rotterdam',
        name: 'Rotterdam Port',
        lat: 51.9225,
        lng: 4.4792,
        type: 'port',
        capacity: 1.4,
        unit: 'million barrels/day',
        country: 'Netherlands',
        description: 'Major European oil hub'
      }
    ]
  },
  iron: {
    id: 'iron',
    name: 'Iron Ore',
    category: 'mineral',
    color: '#8B4513',
    unit: 'million tonnes',
    globalProduction: 2600,
    globalConsumption: 2600,
    description: 'Primary raw material for steel production',
    locations: [
      {
        id: 'carajas',
        name: 'Carajás Mine',
        lat: -6.0667,
        lng: -50.2000,
        type: 'mine',
        production: 150,
        unit: 'million tonnes/year',
        country: 'Brazil',
        description: 'World\'s largest iron ore mine'
      },
      {
        id: 'pilbara',
        name: 'Pilbara Region',
        lat: -22.5,
        lng: 118.5,
        type: 'mine',
        production: 500,
        unit: 'million tonnes/year',
        country: 'Australia',
        description: 'Largest iron ore producing region'
      },
      {
        id: 'kiruna',
        name: 'Kiruna Mine',
        lat: 67.8558,
        lng: 20.2253,
        type: 'mine',
        production: 27,
        unit: 'million tonnes/year',
        country: 'Sweden',
        description: 'Largest underground iron ore mine'
      },
      {
        id: 'baosteel',
        name: 'Baosteel Shanghai',
        lat: 31.4,
        lng: 121.2,
        type: 'plant',
        capacity: 40,
        unit: 'million tonnes steel/year',
        country: 'China',
        description: 'One of world\'s largest steel mills'
      }
    ]
  },
  aluminium: {
    id: 'aluminium',
    name: 'Aluminium',
    category: 'metal',
    color: '#A8A9AD',
    unit: 'million tonnes',
    globalProduction: 68,
    globalConsumption: 68,
    description: 'Lightweight metal for aerospace, automotive, and packaging',
    locations: [
      {
        id: 'weipa',
        name: 'Weipa Bauxite Mine',
        lat: -12.6667,
        lng: 141.8667,
        type: 'mine',
        production: 35,
        unit: 'million tonnes bauxite/year',
        country: 'Australia',
        description: 'World\'s largest bauxite mine'
      },
      {
        id: 'guinea-bauxite',
        name: 'Sangarédi Mine',
        lat: 11.5833,
        lng: -13.7167,
        type: 'mine',
        production: 32,
        unit: 'million tonnes bauxite/year',
        country: 'Guinea',
        description: 'Major bauxite producer'
      },
      {
        id: 'alcoa-portland',
        name: 'Alcoa Portland Smelter',
        lat: -38.3333,
        lng: 141.6000,
        type: 'plant',
        production: 0.36,
        unit: 'million tonnes/year',
        country: 'Australia',
        description: 'Major aluminium smelter'
      },
      {
        id: 'chalco-qinghai',
        name: 'Chalco Qinghai',
        lat: 36.6167,
        lng: 101.7667,
        type: 'plant',
        production: 0.5,
        unit: 'million tonnes/year',
        country: 'China',
        description: 'Large-scale aluminium smelter'
      }
    ]
  },
  lithium: {
    id: 'lithium',
    name: 'Lithium',
    category: 'element',
    color: '#CC99FF',
    unit: 'thousand tonnes',
    globalProduction: 130,
    globalConsumption: 130,
    description: 'Critical for electric vehicle batteries and energy storage',
    locations: [
      {
        id: 'atacama',
        name: 'Salar de Atacama',
        lat: -23.5,
        lng: -68.25,
        type: 'mine',
        production: 30,
        unit: 'thousand tonnes/year',
        country: 'Chile',
        description: 'World\'s largest lithium brine operation'
      },
      {
        id: 'greenbushes',
        name: 'Greenbushes Mine',
        lat: -33.8667,
        lng: 116.0500,
        type: 'mine',
        production: 40,
        unit: 'thousand tonnes/year',
        country: 'Australia',
        description: 'Largest hard-rock lithium mine'
      },
      {
        id: 'uyuni',
        name: 'Salar de Uyuni',
        lat: -20.3,
        lng: -66.8,
        type: 'mine',
        production: 5,
        unit: 'thousand tonnes/year',
        country: 'Bolivia',
        description: 'World\'s largest lithium reserve'
      },
      {
        id: 'ganfeng',
        name: 'Ganfeng Lithium Plant',
        lat: 27.6167,
        lng: 115.8333,
        type: 'plant',
        capacity: 20,
        unit: 'thousand tonnes/year',
        country: 'China',
        description: 'Major lithium processing facility'
      }
    ]
  },
  nickel: {
    id: 'nickel',
    name: 'Nickel',
    category: 'metal',
    color: '#727472',
    unit: 'million tonnes',
    globalProduction: 3.3,
    globalConsumption: 3.3,
    description: 'Used in stainless steel and batteries',
    locations: [
      {
        id: 'norilsk',
        name: 'Norilsk-Talnakh',
        lat: 69.3558,
        lng: 88.2027,
        type: 'mine',
        production: 0.2,
        unit: 'million tonnes/year',
        country: 'Russia',
        description: 'World\'s largest nickel mining complex'
      },
      {
        id: 'vale-sudbury',
        name: 'Sudbury Basin',
        lat: 46.49,
        lng: -81.0,
        type: 'mine',
        production: 0.1,
        unit: 'million tonnes/year',
        country: 'Canada',
        description: 'Historic nickel mining district'
      },
      {
        id: 'sorowako',
        name: 'Sorowako Mine',
        lat: -2.5333,
        lng: 121.3500,
        type: 'mine',
        production: 0.08,
        unit: 'million tonnes/year',
        country: 'Indonesia',
        description: 'Major nickel laterite operation'
      }
    ]
  },
  coal: {
    id: 'coal',
    name: 'Coal',
    category: 'energy',
    color: '#2F2F2F',
    unit: 'million tonnes',
    globalProduction: 8000,
    globalConsumption: 8000,
    description: 'Major energy source for electricity and steel production',
    locations: [
      {
        id: 'powder-river',
        name: 'Powder River Basin',
        lat: 43.8,
        lng: -105.5,
        type: 'mine',
        production: 300,
        unit: 'million tonnes/year',
        country: 'USA',
        description: 'Largest coal-producing region in USA'
      },
      {
        id: 'hunter-valley',
        name: 'Hunter Valley',
        lat: -32.5,
        lng: 151.2,
        type: 'mine',
        production: 160,
        unit: 'million tonnes/year',
        country: 'Australia',
        description: 'Major coal export region'
      },
      {
        id: 'shanxi',
        name: 'Shanxi Province Mines',
        lat: 37.87,
        lng: 112.55,
        type: 'mine',
        production: 1000,
        unit: 'million tonnes/year',
        country: 'China',
        description: 'China\'s largest coal producing province'
      }
    ]
  },
  naturalgas: {
    id: 'naturalgas',
    name: 'Natural Gas',
    category: 'energy',
    color: '#4169E1',
    unit: 'billion cubic meters',
    globalProduction: 4000,
    globalConsumption: 4000,
    description: 'Clean-burning fossil fuel for power and heating',
    locations: [
      {
        id: 'south-pars',
        name: 'South Pars/North Dome',
        lat: 27.0,
        lng: 52.5,
        type: 'field',
        production: 250,
        unit: 'billion cubic meters/year',
        country: 'Iran/Qatar',
        description: 'World\'s largest gas field'
      },
      {
        id: 'marcellus',
        name: 'Marcellus Shale',
        lat: 40.5,
        lng: -78.5,
        type: 'field',
        production: 300,
        unit: 'billion cubic meters/year',
        country: 'USA',
        description: 'Largest US natural gas field'
      },
      {
        id: 'yamal',
        name: 'Yamal Peninsula',
        lat: 70.0,
        lng: 70.0,
        type: 'field',
        production: 100,
        unit: 'billion cubic meters/year',
        country: 'Russia',
        description: 'Major Arctic gas production'
      }
    ]
  },
  gold: {
    id: 'gold',
    name: 'Gold',
    category: 'metal',
    color: '#FFD700',
    unit: 'tonnes',
    globalProduction: 3300,
    globalConsumption: 3300,
    description: 'Precious metal for jewelry, investment, and electronics',
    locations: [
      {
        id: 'nevada-gold',
        name: 'Nevada Gold Mines',
        lat: 40.5,
        lng: -116.5,
        type: 'mine',
        production: 115,
        unit: 'tonnes/year',
        country: 'USA',
        description: 'Largest gold mining complex in world'
      },
      {
        id: 'muruntau',
        name: 'Muruntau',
        lat: 41.5667,
        lng: 64.5833,
        type: 'mine',
        production: 66,
        unit: 'tonnes/year',
        country: 'Uzbekistan',
        description: 'Largest open-pit gold mine'
      },
      {
        id: 'boddington',
        name: 'Boddington',
        lat: -32.8,
        lng: 116.5,
        type: 'mine',
        production: 26,
        unit: 'tonnes/year',
        country: 'Australia',
        description: 'Largest gold mine in Australia'
      }
    ]
  },
  silver: {
    id: 'silver',
    name: 'Silver',
    category: 'metal',
    color: '#C0C0C0',
    unit: 'thousand tonnes',
    globalProduction: 27,
    globalConsumption: 27,
    description: 'Used in jewelry, electronics, and solar panels',
    locations: [
      {
        id: 'cannington',
        name: 'Cannington Mine',
        lat: -21.8333,
        lng: 140.0667,
        type: 'mine',
        production: 1.2,
        unit: 'thousand tonnes/year',
        country: 'Australia',
        description: 'World\'s largest silver producer'
      },
      {
        id: 'fresnillo',
        name: 'Fresnillo',
        lat: 23.1667,
        lng: -102.8667,
        type: 'mine',
        production: 0.9,
        unit: 'thousand tonnes/year',
        country: 'Mexico',
        description: 'Major silver mine'
      },
      {
        id: 'antamina',
        name: 'Antamina',
        lat: -9.35,
        lng: -77.1,
        type: 'mine',
        production: 0.6,
        unit: 'thousand tonnes/year',
        country: 'Peru',
        description: 'Large polymetallic mine'
      }
    ]
  },
  uranium: {
    id: 'uranium',
    name: 'Uranium',
    category: 'element',
    color: '#00FF00',
    unit: 'thousand tonnes',
    globalProduction: 50,
    globalConsumption: 50,
    description: 'Nuclear fuel for power generation',
    locations: [
      {
        id: 'cigar-lake',
        name: 'Cigar Lake',
        lat: 58.05,
        lng: -104.5,
        type: 'mine',
        production: 8,
        unit: 'thousand tonnes/year',
        country: 'Canada',
        description: 'Highest grade uranium mine'
      },
      {
        id: 'olympic-dam',
        name: 'Olympic Dam',
        lat: -30.4667,
        lng: 136.8833,
        type: 'mine',
        production: 4,
        unit: 'thousand tonnes/year',
        country: 'Australia',
        description: 'Large uranium by-product operation'
      },
      {
        id: 'kazakhstan-mines',
        name: 'Kazakhstan ISR Operations',
        lat: 47.0,
        lng: 67.0,
        type: 'mine',
        production: 20,
        unit: 'thousand tonnes/year',
        country: 'Kazakhstan',
        description: 'World\'s largest uranium producer'
      }
    ]
  },
  steel: {
    id: 'steel',
    name: 'Steel',
    category: 'metal',
    color: '#808080',
    unit: 'million tonnes',
    globalProduction: 1900,
    globalConsumption: 1900,
    description: 'Foundation of modern infrastructure and manufacturing',
    locations: [
      {
        id: 'hebei-steel',
        name: 'Hebei Iron & Steel',
        lat: 38.04,
        lng: 114.48,
        type: 'plant',
        production: 40,
        unit: 'million tonnes/year',
        country: 'China',
        description: 'One of world\'s largest steelmakers'
      },
      {
        id: 'arcelormittal',
        name: 'ArcelorMittal Dunkirk',
        lat: 51.03,
        lng: 2.37,
        type: 'plant',
        production: 7,
        unit: 'million tonnes/year',
        country: 'France',
        description: 'Major European steel mill'
      },
      {
        id: 'usiminas',
        name: 'Usiminas',
        lat: -19.5,
        lng: -42.6,
        type: 'plant',
        production: 9,
        unit: 'million tonnes/year',
        country: 'Brazil',
        description: 'Major Latin American steelmaker'
      }
    ]
  },
  cement: {
    id: 'cement',
    name: 'Cement',
    category: 'mineral',
    color: '#B8B8B8',
    unit: 'million tonnes',
    globalProduction: 4100,
    globalConsumption: 4100,
    description: 'Essential building material for construction',
    locations: [
      {
        id: 'anhui-conch',
        name: 'Anhui Conch Cement',
        lat: 30.92,
        lng: 117.77,
        type: 'plant',
        production: 350,
        unit: 'million tonnes/year',
        country: 'China',
        description: 'World\'s largest cement producer'
      },
      {
        id: 'lafarge-michigan',
        name: 'Lafarge Alpena Plant',
        lat: 45.07,
        lng: -83.43,
        type: 'plant',
        production: 3,
        unit: 'million tonnes/year',
        country: 'USA',
        description: 'Largest cement plant in USA'
      },
      {
        id: 'ultratech',
        name: 'UltraTech Cement',
        lat: 19.08,
        lng: 72.88,
        type: 'plant',
        production: 120,
        unit: 'million tonnes/year',
        country: 'India',
        description: 'Largest cement producer in India'
      }
    ]
  },
  rare_earths: {
    id: 'rare_earths',
    name: 'Rare Earth Elements',
    category: 'element',
    color: '#FF69B4',
    unit: 'thousand tonnes',
    globalProduction: 280,
    globalConsumption: 280,
    description: 'Critical for electronics, magnets, and green technology',
    locations: [
      {
        id: 'bayan-obo',
        name: 'Bayan Obo',
        lat: 41.77,
        lng: 109.97,
        type: 'mine',
        production: 140,
        unit: 'thousand tonnes/year',
        country: 'China',
        description: 'World\'s largest rare earth mine'
      },
      {
        id: 'mountain-pass',
        name: 'Mountain Pass',
        lat: 35.48,
        lng: -115.53,
        type: 'mine',
        production: 38,
        unit: 'thousand tonnes/year',
        country: 'USA',
        description: 'Largest rare earth mine outside China'
      },
      {
        id: 'mount-weld',
        name: 'Mount Weld',
        lat: -28.87,
        lng: 122.38,
        type: 'mine',
        production: 15,
        unit: 'thousand tonnes/year',
        country: 'Australia',
        description: 'High-grade rare earth deposit'
      }
    ]
  },
  cobalt: {
    id: 'cobalt',
    name: 'Cobalt',
    category: 'metal',
    color: '#0047AB',
    unit: 'thousand tonnes',
    globalProduction: 190,
    globalConsumption: 190,
    description: 'Critical for lithium-ion batteries and superalloys',
    locations: [
      {
        id: 'tenke-fungurume',
        name: 'Tenke Fungurume',
        lat: -10.6,
        lng: 26.1,
        type: 'mine',
        production: 18,
        unit: 'thousand tonnes/year',
        country: 'DRC',
        description: 'Major cobalt producer'
      },
      {
        id: 'mutanda',
        name: 'Mutanda',
        lat: -10.9333,
        lng: 27.5667,
        type: 'mine',
        production: 27,
        unit: 'thousand tonnes/year',
        country: 'DRC',
        description: 'World\'s largest cobalt mine'
      },
      {
        id: 'vale-voiseys',
        name: 'Voisey\'s Bay',
        lat: 56.3333,
        lng: -61.7167,
        type: 'mine',
        production: 3,
        unit: 'thousand tonnes/year',
        country: 'Canada',
        description: 'Major nickel-cobalt mine'
      }
    ]
  },
  zinc: {
    id: 'zinc',
    name: 'Zinc',
    category: 'metal',
    color: '#7F7F7F',
    unit: 'million tonnes',
    globalProduction: 13,
    globalConsumption: 13,
    description: 'Used for galvanizing steel and in batteries',
    locations: [
      {
        id: 'red-dog',
        name: 'Red Dog Mine',
        lat: 68.0667,
        lng: -162.8333,
        type: 'mine',
        production: 0.6,
        unit: 'million tonnes/year',
        country: 'USA',
        description: 'World\'s largest zinc mine'
      },
      {
        id: 'rampura-agucha',
        name: 'Rampura Agucha',
        lat: 27.6,
        lng: 74.7,
        type: 'mine',
        production: 0.5,
        unit: 'million tonnes/year',
        country: 'India',
        description: 'Major zinc-lead mine'
      },
      {
        id: 'antamina-zinc',
        name: 'Antamina (Zinc)',
        lat: -9.35,
        lng: -77.1,
        type: 'mine',
        production: 0.4,
        unit: 'million tonnes/year',
        country: 'Peru',
        description: 'Large zinc producer'
      }
    ]
  },
  phosphate: {
    id: 'phosphate',
    name: 'Phosphate',
    category: 'mineral',
    color: '#DAA520',
    unit: 'million tonnes',
    globalProduction: 230,
    globalConsumption: 230,
    description: 'Essential for fertilizers and food production',
    locations: [
      {
        id: 'bou-craa',
        name: 'Bou Craa',
        lat: 26.35,
        lng: -12.93,
        type: 'mine',
        production: 2,
        unit: 'million tonnes/year',
        country: 'Western Sahara',
        description: 'Large phosphate deposit'
      },
      {
        id: 'khouribga',
        name: 'Khouribga',
        lat: 32.88,
        lng: -6.91,
        type: 'mine',
        production: 20,
        unit: 'million tonnes/year',
        country: 'Morocco',
        description: 'World\'s largest phosphate reserve'
      },
      {
        id: 'mosaic-florida',
        name: 'Mosaic Phosphate Mines',
        lat: 27.8,
        lng: -81.8,
        type: 'mine',
        production: 10,
        unit: 'million tonnes/year',
        country: 'USA',
        description: 'Major US phosphate producer'
      }
    ]
  },
  potash: {
    id: 'potash',
    name: 'Potash',
    category: 'mineral',
    color: '#FF6347',
    unit: 'million tonnes',
    globalProduction: 45,
    globalConsumption: 45,
    description: 'Key fertilizer component for agriculture',
    locations: [
      {
        id: 'saskatchewan',
        name: 'Saskatchewan Potash Mines',
        lat: 52.1,
        lng: -106.6,
        type: 'mine',
        production: 13,
        unit: 'million tonnes/year',
        country: 'Canada',
        description: 'World\'s largest potash producing region'
      },
      {
        id: 'berezniki',
        name: 'Berezniki Mine',
        lat: 59.4,
        lng: 56.8,
        type: 'mine',
        production: 7,
        unit: 'million tonnes/year',
        country: 'Russia',
        description: 'Major potash producer'
      },
      {
        id: 'dead-sea',
        name: 'Dead Sea Works',
        lat: 31.05,
        lng: 35.43,
        type: 'mine',
        production: 2,
        unit: 'million tonnes/year',
        country: 'Israel',
        description: 'Potash from Dead Sea evaporation'
      }
    ]
  },
  platinum: {
    id: 'platinum',
    name: 'Platinum',
    category: 'metal',
    color: '#E5E4E2',
    unit: 'tonnes',
    globalProduction: 190,
    globalConsumption: 190,
    description: 'Precious metal for catalytic converters and jewelry',
    locations: [
      {
        id: 'bushveld',
        name: 'Bushveld Complex',
        lat: -25.0,
        lng: 29.0,
        type: 'mine',
        production: 120,
        unit: 'tonnes/year',
        country: 'South Africa',
        description: 'World\'s largest platinum deposit'
      },
      {
        id: 'norilsk-platinum',
        name: 'Norilsk Nickel (Platinum)',
        lat: 69.3558,
        lng: 88.2027,
        type: 'mine',
        production: 20,
        unit: 'tonnes/year',
        country: 'Russia',
        description: 'Major platinum group metals producer'
      },
      {
        id: 'stillwater',
        name: 'Stillwater Mine',
        lat: 45.4,
        lng: -109.9,
        type: 'mine',
        production: 15,
        unit: 'tonnes/year',
        country: 'USA',
        description: 'Largest US platinum mine'
      }
    ]
  },
  manganese: {
    id: 'manganese',
    name: 'Manganese',
    category: 'metal',
    color: '#E30B5D',
    unit: 'million tonnes',
    globalProduction: 20,
    globalConsumption: 20,
    description: 'Essential for steel production and batteries',
    locations: [
      {
        id: 'kalahari',
        name: 'Kalahari Manganese Field',
        lat: -27.3,
        lng: 22.9,
        type: 'mine',
        production: 7,
        unit: 'million tonnes/year',
        country: 'South Africa',
        description: 'World\'s largest manganese field'
      },
      {
        id: 'carajas-manganese',
        name: 'Carajás (Manganese)',
        lat: -6.0667,
        lng: -50.2000,
        type: 'mine',
        production: 2,
        unit: 'million tonnes/year',
        country: 'Brazil',
        description: 'Major manganese producer'
      },
      {
        id: 'groote-eylandt',
        name: 'Groote Eylandt',
        lat: -13.95,
        lng: 136.5,
        type: 'mine',
        production: 3,
        unit: 'million tonnes/year',
        country: 'Australia',
        description: 'High-grade manganese mine'
      }
    ]
  }
};
