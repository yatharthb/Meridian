import { ResourceMap } from '../types';

export const resources: ResourceMap = {
  copper: {
    id: 'copper',
    name: 'Copper',
    color: '#B87333',
    unit: 'Mt/year',
    globalProduction: 25,
    description: 'Essential metal for electrical wiring, electronics, construction, and renewable energy infrastructure. Critical for electrification and green energy transition.',
    category: 'metals',
    locations: [
      // Chile - World's largest copper producer
      { id: 'escondida', name: 'Escondida Mine', lat: -24.2306, lng: -69.0617, type: 'mine', production: 1.0, unit: 'Mt/year', country: 'Chile', operator: 'BHP', description: 'World\'s largest copper mine, open-pit operation in Atacama Desert' },
      { id: 'collahuasi', name: 'Collahuasi', lat: -20.95, lng: -68.73, type: 'mine', production: 0.54, unit: 'Mt/year', country: 'Chile', operator: 'Anglo American/Glencore', description: 'High-altitude copper mine at 4,000m elevation' },
      { id: 'el-teniente', name: 'El Teniente', lat: -34.09, lng: -70.45, type: 'mine', production: 0.47, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'World\'s largest underground copper mine' },
      { id: 'los-bronces', name: 'Los Bronces', lat: -33.15, lng: -70.28, type: 'mine', production: 0.35, unit: 'Mt/year', country: 'Chile', operator: 'Anglo American', description: 'Major open-pit copper mine near Santiago' },
      { id: 'chuquicamata', name: 'Chuquicamata', lat: -22.28, lng: -68.90, type: 'mine', production: 0.32, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Historic open-pit mine, transitioning to underground' },

      // Peru - Second largest producer
      { id: 'cerro-verde', name: 'Cerro Verde', lat: -16.51, lng: -71.58, type: 'mine', production: 0.50, unit: 'Mt/year', country: 'Peru', operator: 'Freeport-McMoRan', description: 'Large open-pit copper mine near Arequipa' },
      { id: 'antamina', name: 'Antamina', lat: -9.35, lng: -77.10, type: 'mine', production: 0.44, unit: 'Mt/year', country: 'Peru', operator: 'Glencore/BHP/Teck', description: 'Polymetallic mine producing copper, zinc, silver' },
      { id: 'las-bambas', name: 'Las Bambas', lat: -14.17, lng: -72.33, type: 'mine', production: 0.38, unit: 'Mt/year', country: 'Peru', operator: 'MMG Limited', description: 'Large open-pit copper mine in Apurímac' },
      { id: 'southern-copper-peru', name: 'Southern Peru Operations', lat: -17.18, lng: -70.40, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'Peru', operator: 'Southern Copper', description: 'Multiple mines including Toquepala and Cuajone' },

      // Indonesia
      { id: 'grasberg', name: 'Grasberg Mine', lat: -4.05, lng: 137.12, type: 'mine', production: 0.70, unit: 'Mt/year', country: 'Indonesia', operator: 'Freeport-McMoRan', description: 'World\'s largest gold mine and second-largest copper mine' },

      // USA
      { id: 'morenci', name: 'Morenci Mine', lat: 33.05, lng: -109.37, type: 'mine', production: 0.42, unit: 'Mt/year', country: 'USA', operator: 'Freeport-McMoRan', description: 'Largest copper mine in North America' },
      { id: 'bingham-canyon', name: 'Bingham Canyon', lat: 40.52, lng: -112.15, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'USA', operator: 'Rio Tinto', description: 'Largest man-made excavation in the world' },
      { id: 'bagdad', name: 'Bagdad Mine', lat: 34.58, lng: -113.22, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'USA', operator: 'Freeport-McMoRan', description: 'Open-pit copper mine in Arizona' },

      // Australia
      { id: 'olympic-dam', name: 'Olympic Dam', lat: -30.47, lng: 136.88, type: 'mine', production: 0.19, unit: 'Mt/year', country: 'Australia', operator: 'BHP', description: 'Underground mine producing copper, uranium, gold, silver' },

      // China - Major producer and processor
      { id: 'jiangxi-copper', name: 'Jiangxi Copper Mines', lat: 28.68, lng: 117.03, type: 'mine', production: 0.42, unit: 'Mt/year', country: 'China', operator: 'Jiangxi Copper', description: 'Largest copper mining company in China' },
      { id: 'tongling', name: 'Tongling Nonferrous', lat: 30.95, lng: 117.81, type: 'refinery', capacity: 1.2, unit: 'Mt/year', country: 'China', operator: 'Tongling Nonferrous', description: 'Major copper smelting and refining complex' },
      { id: 'jinchuan', name: 'Jinchuan Mine', lat: 38.48, lng: 102.17, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'China', operator: 'Jinchuan Group', description: 'Major nickel-copper mine in Gansu Province' },

      // Zambia
      { id: 'kansanshi', name: 'Kansanshi Mine', lat: -12.09, lng: 26.43, type: 'mine', production: 0.25, unit: 'Mt/year', country: 'Zambia', operator: 'First Quantum Minerals', description: 'Largest copper mine in Africa' },
      { id: 'lumwana', name: 'Lumwana Mine', lat: -12.17, lng: 25.83, type: 'mine', production: 0.13, unit: 'Mt/year', country: 'Zambia', operator: 'Barrick Gold', description: 'Open-pit copper mine in Northwestern Province' },

      // DRC (Congo)
      { id: 'kamoa-kakula', name: 'Kamoa-Kakula', lat: -10.82, lng: 26.13, type: 'mine', production: 0.45, unit: 'Mt/year', country: 'DRC', operator: 'Ivanhoe Mines/Zijin', description: 'High-grade underground copper mine' },
      { id: 'tenke-fungurume', name: 'Tenke Fungurume', lat: -10.60, lng: 26.10, type: 'mine', production: 0.21, unit: 'Mt/year', country: 'DRC', operator: 'China Molybdenum', description: 'Open-pit copper-cobalt mine' },

      // Mongolia
      { id: 'oyu-tolgoi', name: 'Oyu Tolgoi', lat: 43.00, lng: 106.85, type: 'mine', production: 0.52, unit: 'Mt/year', country: 'Mongolia', operator: 'Rio Tinto/Turquoise Hill', description: 'World-class copper-gold deposit in Gobi Desert' },

      // Russia
      { id: 'udokan', name: 'Udokan', lat: 56.57, lng: 118.28, type: 'mine', production: 0.42, unit: 'Mt/year', country: 'Russia', operator: 'USM Holdings', description: 'Massive copper deposit in Eastern Siberia' },

      // Mexico
      { id: 'buenavista', name: 'Buenavista del Cobre', lat: 30.57, lng: -109.75, type: 'mine', production: 0.38, unit: 'Mt/year', country: 'Mexico', operator: 'Grupo México', description: 'Large open-pit copper mine in Sonora' },

      // Refineries and Processing
      { id: 'glencore-huelva', name: 'Atlantic Copper Smelter', lat: 37.25, lng: -6.95, type: 'refinery', capacity: 0.35, unit: 'Mt/year', country: 'Spain', operator: 'Glencore', description: 'Largest copper smelter in Europe' },
      { id: 'chuquicamata-refinery', name: 'Chuquicamata Refinery', lat: -22.30, lng: -68.93, type: 'refinery', capacity: 0.55, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Major copper refining complex' },
      { id: 'amarillo', name: 'Amarillo Copper Refinery', lat: 35.22, lng: -101.83, type: 'refinery', capacity: 0.36, unit: 'Mt/year', country: 'USA', operator: 'Asarco', description: 'Large copper refinery in Texas' },

      // Poland
      { id: 'kghm-polska', name: 'KGHM Polska Mines', lat: 51.46, lng: 16.32, type: 'mine', production: 0.53, unit: 'Mt/year', country: 'Poland', operator: 'KGHM', description: 'Major European copper producer' },
      { id: 'legnica-smelter', name: 'Legnica Copper Smelter', lat: 51.21, lng: 16.16, type: 'refinery', capacity: 0.58, unit: 'Mt/year', country: 'Poland', operator: 'KGHM', description: 'Europe\'s largest copper smelter complex' },

      // Canada
      { id: 'highland-valley', name: 'Highland Valley', lat: 50.50, lng: -121.03, type: 'mine', production: 0.16, unit: 'Mt/year', country: 'Canada', operator: 'Teck Resources', description: 'One of Canada\'s largest copper mines' },
      { id: 'mount-polley', name: 'Mount Polley', lat: 52.55, lng: -121.68, type: 'mine', production: 0.04, unit: 'Mt/year', country: 'Canada', operator: 'Imperial Metals', description: 'British Columbia copper-gold mine' },
      { id: 'red-chris', name: 'Red Chris', lat: 57.72, lng: -129.72, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Canada', operator: 'Newcrest Mining', description: 'Northern BC copper-gold mine' },

      // Kazakhstan
      { id: 'kounrad', name: 'Kounrad Mine', lat: 47.47, lng: 74.93, type: 'mine', production: 0.11, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Kazakhmys', description: 'Major Central Asian copper mine' },
      { id: 'aktogay', name: 'Aktogay', lat: 47.25, lng: 78.42, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Kazakhstan', operator: 'KAZ Minerals', description: 'Large porphyry copper deposit' },
      { id: 'bozshakol', name: 'Bozshakol', lat: 52.08, lng: 62.67, type: 'mine', production: 0.09, unit: 'Mt/year', country: 'Kazakhstan', operator: 'KAZ Minerals', description: 'Major copper-molybdenum mine' },

      // India
      { id: 'malanjkhand', name: 'Malanjkhand Mine', lat: 22.28, lng: 80.65, type: 'mine', production: 0.04, unit: 'Mt/year', country: 'India', operator: 'Hindustan Copper', description: 'Largest copper mine in India' },
      { id: 'khetri', name: 'Khetri Copper Complex', lat: 28.00, lng: 75.78, type: 'mine', production: 0.03, unit: 'Mt/year', country: 'India', operator: 'Hindustan Copper', description: 'Major copper mining complex in Rajasthan' },
      { id: 'birla-copper', name: 'Birla Copper Smelter', lat: 28.53, lng: 77.39, type: 'refinery', capacity: 0.50, unit: 'Mt/year', country: 'India', operator: 'Birla Copper', description: 'Major Indian copper refining facility' },
      { id: 'sterlite-tuticorin', name: 'Sterlite Copper Tuticorin', lat: 8.80, lng: 78.15, type: 'refinery', capacity: 0.40, unit: 'Mt/year', country: 'India', operator: 'Vedanta', description: 'Large copper smelter in Tamil Nadu' },

      // Japan
      { id: 'naoshima-smelter', name: 'Naoshima Smelter', lat: 34.46, lng: 133.99, type: 'refinery', capacity: 0.42, unit: 'Mt/year', country: 'Japan', operator: 'Mitsubishi Materials', description: 'Advanced copper smelting and recycling facility' },
      { id: 'saganoseki', name: 'Saganoseki Smelter', lat: 33.23, lng: 131.88, type: 'refinery', capacity: 0.47, unit: 'Mt/year', country: 'Japan', operator: 'Pan Pacific Copper', description: 'Leading Japanese copper smelter' },

      // Iran
      { id: 'sarcheshmeh', name: 'Sarcheshmeh Mine', lat: 29.78, lng: 55.67, type: 'mine', production: 0.23, unit: 'Mt/year', country: 'Iran', operator: 'NICICO', description: 'Largest copper mine in Middle East' },
      { id: 'sungun', name: 'Sungun Mine', lat: 38.83, lng: 46.40, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Iran', operator: 'NICICO', description: 'Major porphyry copper deposit' },

      // Turkey
      { id: 'eti-bakir', name: 'Eti Bakır Murgul', lat: 40.96, lng: 41.51, type: 'mine', production: 0.02, unit: 'Mt/year', country: 'Turkey', operator: 'Eti Bakır', description: 'Turkish copper mine and refinery' },

      // Bulgaria
      { id: 'assarel', name: 'Assarel-Medet', lat: 42.70, lng: 24.42, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Bulgaria', operator: 'Asarel-Medet', description: 'Largest copper mine in Bulgaria' },

      // Serbia
      { id: 'bor', name: 'Bor Mine', lat: 44.08, lng: 22.10, type: 'mine', production: 0.04, unit: 'Mt/year', country: 'Serbia', operator: 'Zijin Mining', description: 'Historic Balkan copper mining complex' },

      // Argentina
      { id: 'bajo-alumbrera', name: 'Bajo de la Alumbrera', lat: -27.33, lng: -66.62, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Argentina', operator: 'Glencore', description: 'Major copper-gold mine' },
      { id: 'minera-alumbrera', name: 'Minera Alumbrera', lat: -27.23, lng: -66.37, type: 'mine', production: 0.07, unit: 'Mt/year', country: 'Argentina', operator: 'Multiple operators', description: 'Copper porphyry deposit' },

      // Papua New Guinea
      { id: 'ok-tedi', name: 'Ok Tedi Mine', lat: -5.20, lng: 141.20, type: 'mine', production: 0.13, unit: 'Mt/year', country: 'Papua New Guinea', operator: 'Ok Tedi Mining', description: 'Large open-pit copper-gold mine' },
      { id: 'porgera', name: 'Porgera Mine', lat: -5.47, lng: 143.10, type: 'mine', production: 0.03, unit: 'Mt/year', country: 'Papua New Guinea', operator: 'Barrick/Zijin', description: 'High-grade gold-copper mine' },

      // Philippines
      { id: 'tampakan', name: 'Tampakan Project', lat: 6.38, lng: 124.93, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Philippines', operator: 'Sagittarius Mines', description: 'Large undeveloped copper-gold deposit' },

      // Pakistan
      { id: 'saindak', name: 'Saindak Mine', lat: 29.27, lng: 61.58, type: 'mine', production: 0.02, unit: 'Mt/year', country: 'Pakistan', operator: 'MCC', description: 'Copper-gold mine in Balochistan' },

      // Myanmar
      { id: 'monywa', name: 'Monywa Copper Mines', lat: 22.10, lng: 95.13, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Myanmar', operator: 'Wanbao Mining', description: 'Major Southeast Asian copper project' },

      // Laos
      { id: 'sepon', name: 'Sepon Mine', lat: 16.83, lng: 106.28, type: 'mine', production: 0.03, unit: 'Mt/year', country: 'Laos', operator: 'MMG', description: 'Copper-gold mine in Southeast Asia' },

      // South Africa
      { id: 'palabora', name: 'Palabora Mine', lat: -23.98, lng: 31.13, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'South Africa', operator: 'Palabora Mining', description: 'Large open-pit copper mine' },

      // Namibia
      { id: 'tsumeb', name: 'Tsumeb Mine', lat: -19.25, lng: 17.72, type: 'mine', production: 0.02, unit: 'Mt/year', country: 'Namibia', operator: 'Dundee Precious Metals', description: 'Historic copper mine and smelter' },

      // Botswana
      { id: 'khoemacau', name: 'Khoemacau Mine', lat: -20.75, lng: 22.42, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Botswana', operator: 'Cupric Canyon Capital', description: 'New large-scale copper mine' },

      // Brazil (additional)
      { id: 'sossego', name: 'Sossego Mine', lat: -6.47, lng: -49.97, type: 'mine', production: 0.09, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Major copper mine in Carajás' },
      { id: 'salobo', name: 'Salobo Mine', lat: -5.81, lng: -50.55, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Large copper mine in Amazon' },

      // Ecuador
      { id: 'mirador', name: 'Mirador Mine', lat: -3.80, lng: -78.57, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Ecuador', operator: 'ECSA', description: 'First large-scale copper mine in Ecuador' },

      // Panama
      { id: 'cobre-panama', name: 'Cobre Panamá', lat: 8.58, lng: -80.62, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Panama', operator: 'First Quantum', description: 'Largest mine in Central America' },

      // Additional refineries worldwide
      { id: 'guixi-smelter', name: 'Guixi Copper Smelter', lat: 28.28, lng: 117.20, type: 'refinery', capacity: 0.40, unit: 'Mt/year', country: 'China', operator: 'Jiangxi Copper', description: 'Major Chinese copper smelter' },
      { id: 'olympic-dam-refinery', name: 'Olympic Dam Refinery', lat: -30.47, lng: 136.88, type: 'refinery', capacity: 0.19, unit: 'Mt/year', country: 'Australia', operator: 'BHP', description: 'Integrated copper-uranium refinery' },
      { id: 'aurubis-hamburg', name: 'Aurubis Hamburg', lat: 53.53, lng: 9.95, type: 'refinery', capacity: 0.72, unit: 'Mt/year', country: 'Germany', operator: 'Aurubis', description: 'Europe\'s largest copper recycler' },
      { id: 'aurubis-bulgaria', name: 'Aurubis Pirdop', lat: 42.70, lng: 24.18, type: 'refinery', capacity: 0.28, unit: 'Mt/year', country: 'Bulgaria', operator: 'Aurubis', description: 'Major Balkan copper smelter' },
      { id: 'chuquicamata-electroref', name: 'Chuquicamata Electrorefinery', lat: -22.28, lng: -68.90, type: 'refinery', capacity: 0.34, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Major copper electrorefining facility' },
      { id: 'ventanas-smelter', name: 'Ventanas Smelter', lat: -32.75, lng: -71.48, type: 'refinery', capacity: 0.42, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Coastal copper smelter' },
      { id: 'ilo-refinery', name: 'Ilo Refinery', lat: -17.64, lng: -71.34, type: 'refinery', capacity: 0.28, unit: 'Mt/year', country: 'Peru', operator: 'Southern Copper', description: 'Major Peruvian copper refinery' },
      { id: 'pasar-smelter', name: 'Pasar Copper Smelter', lat: -7.25, lng: 112.75, type: 'refinery', capacity: 0.30, unit: 'Mt/year', country: 'Indonesia', operator: 'Freeport', description: 'Major Indonesian copper smelter' },
      { id: 'gresik-smelter', name: 'Gresik PT Smelting', lat: -7.17, lng: 112.65, type: 'refinery', capacity: 0.27, unit: 'Mt/year', country: 'Indonesia', operator: 'Mitsubishi/Freeport', description: 'Copper smelting facility' },
      { id: 'chino-refinery', name: 'Chino Mines Refinery', lat: 32.78, lng: -108.12, type: 'refinery', capacity: 0.12, unit: 'Mt/year', country: 'USA', operator: 'Freeport-McMoRan', description: 'Southwest copper refining' },
      { id: 'hayden-smelter', name: 'Hayden Smelter', lat: 33.00, lng: -110.78, type: 'refinery', capacity: 0.31, unit: 'Mt/year', country: 'USA', operator: 'Asarco', description: 'Arizona copper smelter' },
      { id: 'onsan-refinery', name: 'Onsan Copper Refinery', lat: 35.45, lng: 129.35, type: 'refinery', capacity: 0.44, unit: 'Mt/year', country: 'South Korea', operator: 'LS-Nikko', description: 'Major Korean copper refinery' },
      { id: 'tambang-smelter', name: 'Tambang Refinery', lat: 0.75, lng: 101.45, type: 'refinery', capacity: 0.22, unit: 'Mt/year', country: 'Indonesia', operator: 'PT Freeport', description: 'Sumatra copper processing' },

      // Major Ports
      { id: 'shanghai-port-copper', name: 'Shanghai Yangshan Port', lat: 30.63, lng: 122.08, type: 'port', capacity: 1.8, unit: 'Mt/year', country: 'China', description: 'Major copper import terminal' },
      { id: 'rotterdam-copper', name: 'Port of Rotterdam', lat: 51.92, lng: 4.48, type: 'port', capacity: 0.85, unit: 'Mt/year', country: 'Netherlands', description: 'Europe\'s largest copper trading hub' },
      { id: 'antwerp-copper', name: 'Port of Antwerp', lat: 51.27, lng: 4.40, type: 'port', capacity: 0.52, unit: 'Mt/year', country: 'Belgium', description: 'Major European copper port' },
      { id: 'hamburg-port', name: 'Port of Hamburg', lat: 53.54, lng: 9.98, type: 'port', capacity: 0.38, unit: 'Mt/year', country: 'Germany', description: 'German copper trading hub' },
      { id: 'qingdao-copper', name: 'Qingdao Copper Port', lat: 36.07, lng: 120.38, type: 'port', capacity: 0.95, unit: 'Mt/year', country: 'China', description: 'Major Chinese copper import hub' },
      { id: 'busan-port', name: 'Busan Port', lat: 35.10, lng: 129.04, type: 'port', capacity: 0.42, unit: 'Mt/year', country: 'South Korea', description: 'Korean copper trading hub' },
      { id: 'valparaiso-port', name: 'Valparaíso Port', lat: -33.03, lng: -71.63, type: 'port', capacity: 0.68, unit: 'Mt/year', country: 'Chile', description: 'Major Chilean copper export port' },

      // Major consumption centers
      { id: 'shanghai-manufacturing', name: 'Shanghai Manufacturing Hub', lat: 31.23, lng: 121.47, type: 'consumer', consumption: 3.2, unit: 'Mt/year', country: 'China', description: 'Major electronics and electrical equipment manufacturing center' },
      { id: 'shenzhen-electronics', name: 'Shenzhen Electronics Zone', lat: 22.54, lng: 114.06, type: 'consumer', consumption: 2.1, unit: 'Mt/year', country: 'China', description: 'World\'s largest electronics manufacturing hub' },
      { id: 'detroit-auto', name: 'Detroit Automotive Region', lat: 42.33, lng: -83.05, type: 'consumer', consumption: 0.45, unit: 'Mt/year', country: 'USA', description: 'Major automotive manufacturing center' },
      { id: 'guangdong-manufacturing', name: 'Guangdong Manufacturing Zone', lat: 23.13, lng: 113.26, type: 'consumer', consumption: 1.8, unit: 'Mt/year', country: 'China', description: 'Major industrial manufacturing hub' },
      { id: 'germany-industrial', name: 'German Industrial Belt', lat: 51.23, lng: 6.78, type: 'consumer', consumption: 0.72, unit: 'Mt/year', country: 'Germany', description: 'Major European manufacturing center' },
      { id: 'jiangsu-manufacturing', name: 'Jiangsu Province Industrial Zone', lat: 32.06, lng: 118.80, type: 'consumer', consumption: 1.5, unit: 'Mt/year', country: 'China', description: 'Major Chinese manufacturing region' },
      { id: 'zhejiang-electronics', name: 'Zhejiang Manufacturing Hub', lat: 30.25, lng: 120.17, type: 'consumer', consumption: 1.2, unit: 'Mt/year', country: 'China', description: 'Electronics and appliance manufacturing' },
      { id: 'tokyo-industrial', name: 'Greater Tokyo Industrial Zone', lat: 35.68, lng: 139.75, type: 'consumer', consumption: 0.82, unit: 'Mt/year', country: 'Japan', description: 'Major Japanese manufacturing center' },
      { id: 'osaka-industrial', name: 'Osaka-Kobe Industrial Belt', lat: 34.69, lng: 135.50, type: 'consumer', consumption: 0.55, unit: 'Mt/year', country: 'Japan', description: 'Kansai manufacturing region' },
      { id: 'seoul-industrial', name: 'Seoul Capital Region', lat: 37.57, lng: 126.98, type: 'consumer', consumption: 0.48, unit: 'Mt/year', country: 'South Korea', description: 'Korean electronics manufacturing hub' },
      { id: 'taipei-electronics', name: 'Taipei-Hsinchu Tech Corridor', lat: 25.03, lng: 121.57, type: 'consumer', consumption: 0.38, unit: 'Mt/year', country: 'Taiwan', description: 'High-tech electronics manufacturing' },
      { id: 'bangalore-tech', name: 'Bangalore Tech Hub', lat: 12.97, lng: 77.59, type: 'consumer', consumption: 0.22, unit: 'Mt/year', country: 'India', description: 'Indian technology and electronics center' },
      { id: 'mumbai-industrial', name: 'Mumbai Industrial Zone', lat: 19.08, lng: 72.88, type: 'consumer', consumption: 0.28, unit: 'Mt/year', country: 'India', description: 'Major Indian manufacturing region' },
      { id: 'sao-paulo-industrial', name: 'São Paulo Industrial Belt', lat: -23.55, lng: -46.63, type: 'consumer', consumption: 0.35, unit: 'Mt/year', country: 'Brazil', description: 'Latin America\'s largest industrial center' },
      { id: 'mexico-industrial', name: 'Mexico City-Querétaro Corridor', lat: 20.59, lng: -100.39, type: 'consumer', consumption: 0.28, unit: 'Mt/year', country: 'Mexico', description: 'Mexican manufacturing corridor' },
      { id: 'milan-industrial', name: 'Milan Industrial Zone', lat: 45.46, lng: 9.19, type: 'consumer', consumption: 0.18, unit: 'Mt/year', country: 'Italy', description: 'Northern Italy manufacturing' },
      { id: 'istanbul-manufacturing', name: 'Istanbul Manufacturing Region', lat: 41.01, lng: 28.98, type: 'consumer', consumption: 0.15, unit: 'Mt/year', country: 'Turkey', description: 'Turkish industrial hub' },
      { id: 'barcelona-industrial', name: 'Barcelona Industrial Area', lat: 41.38, lng: 2.17, type: 'consumer', consumption: 0.12, unit: 'Mt/year', country: 'Spain', description: 'Spanish manufacturing center' },
    ]
  },

  oil: {
    id: 'oil',
    name: 'Crude Oil',
    color: '#000000',
    unit: 'Mb/d',
    globalProduction: 100,
    description: 'Primary liquid fuel for transportation, aviation, shipping, and petrochemical feedstock. Backbone of modern economy and mobility.',
    category: 'energy',
    locations: [
      // Saudi Arabia - Largest producer
      { id: 'ghawar', name: 'Ghawar Field', lat: 25.50, lng: 49.50, type: 'field', production: 3.8, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'World\'s largest conventional oil field, 280km long' },
      { id: 'safaniya', name: 'Safaniya Field', lat: 27.70, lng: 49.40, type: 'field', production: 1.5, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'World\'s largest offshore oil field' },
      { id: 'shaybah', name: 'Shaybah Field', lat: 22.52, lng: 53.97, type: 'field', production: 1.0, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Remote field in Empty Quarter desert' },

      // USA - Largest producer
      { id: 'permian', name: 'Permian Basin', lat: 31.80, lng: -102.40, type: 'field', production: 5.8, unit: 'Mb/d', country: 'USA', operator: 'Multiple operators', description: 'Most productive oil region in USA, shale revolution epicenter' },
      { id: 'eagle-ford', name: 'Eagle Ford Shale', lat: 28.65, lng: -98.43, type: 'field', production: 1.1, unit: 'Mb/d', country: 'USA', operator: 'Multiple operators', description: 'Major shale oil play in South Texas' },
      { id: 'bakken', name: 'Bakken Formation', lat: 47.98, lng: -103.33, type: 'field', production: 1.2, unit: 'Mb/d', country: 'USA', operator: 'Multiple operators', description: 'Large shale oil formation in North Dakota/Montana' },
      { id: 'prudhoe-bay', name: 'Prudhoe Bay', lat: 70.33, lng: -148.72, type: 'field', production: 0.3, unit: 'Mb/d', country: 'USA', operator: 'BP/ConocoPhillips', description: 'Largest oil field in North America' },

      // Russia
      { id: 'samotlor', name: 'Samotlor Field', lat: 61.10, lng: 76.70, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Russia', operator: 'Rosneft', description: 'Largest oil field in Russia, Western Siberia' },
      { id: 'priobskoye', name: 'Priobskoye Field', lat: 61.05, lng: 70.75, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Russia', operator: 'Rosneft/Gazprom Neft', description: 'Major oil field in Khanty-Mansi region' },

      // Iraq
      { id: 'rumaila', name: 'Rumaila Field', lat: 30.47, lng: 47.63, type: 'field', production: 1.5, unit: 'Mb/d', country: 'Iraq', operator: 'BP/PetroChina', description: 'One of world\'s largest oil fields' },
      { id: 'west-qurna', name: 'West Qurna Field', lat: 31.37, lng: 47.20, type: 'field', production: 0.8, unit: 'Mb/d', country: 'Iraq', operator: 'Lukoil/ExxonMobil', description: 'Supergiant oil field in southern Iraq' },

      // Kuwait
      { id: 'burgan', name: 'Greater Burgan Field', lat: 29.10, lng: 48.00, type: 'field', production: 1.7, unit: 'Mb/d', country: 'Kuwait', operator: 'Kuwait Oil Company', description: 'World\'s second-largest oil field' },

      // UAE
      { id: 'zakum', name: 'Upper Zakum Field', lat: 24.88, lng: 53.28, type: 'field', production: 0.8, unit: 'Mb/d', country: 'UAE', operator: 'ADNOC', description: 'World\'s second-largest offshore field' },

      // Canada
      { id: 'athabasca', name: 'Athabasca Oil Sands', lat: 57.20, lng: -111.40, type: 'field', production: 2.9, unit: 'Mb/d', country: 'Canada', operator: 'Multiple operators', description: 'Largest oil sands deposits in the world' },

      // Brazil
      { id: 'lula', name: 'Lula Field', lat: -24.70, lng: -42.50, type: 'field', production: 1.0, unit: 'Mb/d', country: 'Brazil', operator: 'Petrobras', description: 'Giant pre-salt offshore oil field' },
      { id: 'buzios', name: 'Búzios Field', lat: -24.22, lng: -42.28, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Brazil', operator: 'Petrobras', description: 'Largest pre-salt field in Santos Basin' },

      // China
      { id: 'daqing', name: 'Daqing Oil Field', lat: 46.58, lng: 125.10, type: 'field', production: 0.8, unit: 'Mb/d', country: 'China', operator: 'PetroChina', description: 'China\'s largest oil field' },

      // Kazakhstan
      { id: 'kashagan', name: 'Kashagan Field', lat: 45.25, lng: 51.70, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Kazakhstan', operator: 'NCOC consortium', description: 'Largest discovery since 1960s, Caspian Sea' },
      { id: 'tengiz', name: 'Tengiz Field', lat: 45.33, lng: 54.63, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Kazakhstan', operator: 'Chevron/ExxonMobil', description: 'Supergiant oil field' },

      // Norway
      { id: 'johan-sverdrup', name: 'Johan Sverdrup', lat: 58.88, lng: 2.77, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Norway', operator: 'Equinor', description: 'Largest field discovered in North Sea since 1970s' },

      // Libya
      { id: 'sharara', name: 'Sharara Field', lat: 27.78, lng: 12.55, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Libya', operator: 'NOC', description: 'Largest oil field in Libya' },

      // Nigeria
      { id: 'bonga', name: 'Bonga Field', lat: 4.42, lng: 5.98, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Nigeria', operator: 'Shell', description: 'Deepwater offshore oil field' },

      // Angola
      { id: 'girassol', name: 'Girassol Field', lat: -8.92, lng: 12.83, type: 'field', production: 0.25, unit: 'Mb/d', country: 'Angola', operator: 'TotalEnergies', description: 'Major deepwater oil field' },

      // Venezuela
      { id: 'orinoco-belt', name: 'Orinoco Oil Belt', lat: 8.70, lng: -64.10, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Venezuela', operator: 'PDVSA', description: 'One of world\'s largest oil reserves' },

      // Iran
      { id: 'south-pars', name: 'South Pars (Oil)', lat: 27.70, lng: 52.40, type: 'field', production: 0.6, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'Major oil and gas field in Persian Gulf' },
      { id: 'ahwaz', name: 'Ahwaz Field', lat: 31.32, lng: 48.67, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'Large onshore oil field' },

      // Mexico
      { id: 'cantarell', name: 'Cantarell Field', lat: 19.70, lng: -92.35, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Mexico', operator: 'Pemex', description: 'Historic supergiant offshore field' },

      // Azerbaijan
      { id: 'azeri-chirag', name: 'Azeri-Chirag-Gunashli', lat: 40.33, lng: 50.47, type: 'field', production: 0.6, unit: 'Mb/d', country: 'Azerbaijan', operator: 'BP', description: 'Major Caspian Sea oil field' },

      // Malaysia
      { id: 'tapis', name: 'Tapis Field', lat: 4.20, lng: 108.50, type: 'field', production: 0.15, unit: 'Mb/d', country: 'Malaysia', operator: 'Petronas', description: 'Benchmark crude oil field' },

      // Refineries - Major processing hubs
      { id: 'houston-refining', name: 'Houston Refining Complex', lat: 29.76, lng: -95.37, type: 'refinery', capacity: 2.8, unit: 'Mb/d', country: 'USA', operator: 'Multiple operators', description: 'Largest refining hub in North America' },
      { id: 'singapore-refining', name: 'Singapore Refining Hub', lat: 1.35, lng: 103.82, type: 'refinery', capacity: 1.5, unit: 'Mb/d', country: 'Singapore', operator: 'Multiple operators', description: 'Asia\'s largest oil trading and refining center' },
      { id: 'rotterdam-port', name: 'Rotterdam Port', lat: 51.92, lng: 4.48, type: 'port', capacity: 1.4, unit: 'Mb/d', country: 'Netherlands', operator: 'Port of Rotterdam', description: 'Europe\'s largest port and oil hub' },
      { id: 'jamnagar', name: 'Jamnagar Refinery Complex', lat: 22.47, lng: 70.07, type: 'refinery', capacity: 1.4, unit: 'Mb/d', country: 'India', operator: 'Reliance Industries', description: 'World\'s largest refinery complex' },
      { id: 'yanbu', name: 'Yanbu Refinery', lat: 24.09, lng: 38.06, type: 'refinery', capacity: 0.4, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Major refinery on Red Sea coast' },
      { id: 'ras-tanura', name: 'Ras Tanura', lat: 26.65, lng: 50.17, type: 'refinery', capacity: 0.5, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Largest oil shipping port in the world' },
      { id: 'ulsan-refinery', name: 'SK Energy Ulsan', lat: 35.54, lng: 129.32, type: 'refinery', capacity: 0.84, unit: 'Mb/d', country: 'South Korea', operator: 'SK Energy', description: 'World\'s third-largest refinery' },
      { id: 'paraguana', name: 'Paraguaná Refinery Complex', lat: 11.72, lng: -70.22, type: 'refinery', capacity: 0.97, unit: 'Mb/d', country: 'Venezuela', operator: 'PDVSA', description: 'Second-largest refinery complex globally' },
      { id: 'guangdong-refining', name: 'Guangdong Petrochemical', lat: 21.55, lng: 110.92, type: 'refinery', capacity: 0.4, unit: 'Mb/d', country: 'China', operator: 'Sinopec', description: 'Major Chinese refining complex' },
      { id: 'port-arthur', name: 'Port Arthur Refinery', lat: 29.90, lng: -93.93, type: 'refinery', capacity: 0.6, unit: 'Mb/d', country: 'USA', operator: 'Motiva', description: 'Largest refinery in North America' },

      // Major Ports
      { id: 'fujairah-port', name: 'Port of Fujairah', lat: 25.13, lng: 56.36, type: 'port', capacity: 1.2, unit: 'Mb/d', country: 'UAE', description: 'Major oil storage and bunkering hub' },
      { id: 'cushing-hub', name: 'Cushing Oil Hub', lat: 35.98, lng: -96.77, type: 'hub', capacity: 0.9, unit: 'Mb/d', country: 'USA', description: 'Primary oil trading hub and storage facility in USA' },
    ]
  },

  iron: {
    id: 'iron',
    name: 'Iron Ore',
    color: '#8B4513',
    unit: 'Mt/year',
    globalProduction: 2600,
    description: 'Primary raw material for steel production. Essential for construction, infrastructure, automotive, and manufacturing industries worldwide.',
    category: 'metals',
    locations: [
      // Australia - Largest producer
      { id: 'pilbara', name: 'Pilbara Region', lat: -22.50, lng: 118.50, type: 'mine', production: 580, unit: 'Mt/year', country: 'Australia', operator: 'Rio Tinto/BHP/Fortescue', description: 'World\'s largest iron ore producing region' },
      { id: 'mount-whaleback', name: 'Mount Whaleback', lat: -23.37, lng: 119.66, type: 'mine', production: 85, unit: 'Mt/year', country: 'Australia', operator: 'BHP', description: 'Largest single iron ore mine' },
      { id: 'tom-price', name: 'Tom Price', lat: -22.69, lng: 117.79, type: 'mine', production: 75, unit: 'Mt/year', country: 'Australia', operator: 'Rio Tinto', description: 'Major Pilbara iron ore operation' },

      // Brazil - Second largest
      { id: 'carajas', name: 'Carajás Mine', lat: -6.07, lng: -50.20, type: 'mine', production: 190, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'World\'s largest and highest grade iron ore mine' },
      { id: 'itabira', name: 'Itabira Complex', lat: -19.62, lng: -43.23, type: 'mine', production: 65, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Historic iron ore mining complex in Minas Gerais' },
      { id: 's11d', name: 'S11D Mine', lat: -6.38, lng: -50.35, type: 'mine', production: 90, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Largest single iron ore mine in Vale\'s system' },

      // China - Large producer and consumer
      { id: 'anshan', name: 'Anshan Mining District', lat: 41.12, lng: 122.99, type: 'mine', production: 45, unit: 'Mt/year', country: 'China', operator: 'Ansteel', description: 'Major iron ore mining area in Liaoning' },
      { id: 'qianxi', name: 'Qianxi Mining Area', lat: 40.62, lng: 118.48, type: 'mine', production: 38, unit: 'Mt/year', country: 'China', operator: 'HBIS Group', description: 'Large iron ore mines in Hebei Province' },

      // India
      { id: 'bailadila', name: 'Bailadila Mines', lat: 18.63, lng: 81.25, type: 'mine', production: 35, unit: 'Mt/year', country: 'India', operator: 'NMDC', description: 'High-grade iron ore deposits in Chhattisgarh' },
      { id: 'goa-mines', name: 'Goa Iron Ore Belt', lat: 15.35, lng: 74.12, type: 'mine', production: 28, unit: 'Mt/year', country: 'India', operator: 'Multiple operators', description: 'Coastal iron ore mining region' },

      // Russia
      { id: 'lebedinsky', name: 'Lebedinsky Mine', lat: 50.97, lng: 37.78, type: 'mine', production: 42, unit: 'Mt/year', country: 'Russia', operator: 'Metalloinvest', description: 'Largest iron ore mine in Russia' },
      { id: 'mikhailovsky', name: 'Mikhailovsky GOK', lat: 51.68, lng: 35.93, type: 'mine', production: 38, unit: 'Mt/year', country: 'Russia', operator: 'Metalloinvest', description: 'Major open-pit iron ore operation' },

      // South Africa
      { id: 'sishen', name: 'Sishen Mine', lat: -27.70, lng: 23.00, type: 'mine', production: 32, unit: 'Mt/year', country: 'South Africa', operator: 'Kumba Iron Ore', description: 'One of world\'s largest open-pit iron ore mines' },

      // Sweden
      { id: 'kiruna', name: 'Kiruna Mine', lat: 67.86, lng: 20.23, type: 'mine', production: 28, unit: 'Mt/year', country: 'Sweden', operator: 'LKAB', description: 'Largest underground iron ore mine in the world' },

      // Ukraine
      { id: 'kryvyi-rih', name: 'Kryvyi Rih Basin', lat: 47.91, lng: 33.38, type: 'mine', production: 58, unit: 'Mt/year', country: 'Ukraine', operator: 'Metinvest/ArcelorMittal', description: 'Major iron ore basin in eastern Ukraine' },

      // USA
      { id: 'hibbing', name: 'Hibbing Taconite', lat: 47.43, lng: -92.97, type: 'mine', production: 14, unit: 'Mt/year', country: 'USA', operator: 'Cliffs Natural Resources', description: 'Major taconite operation in Minnesota' },

      // Ports
      { id: 'port-hedland', name: 'Port Hedland', lat: -20.31, lng: 118.57, type: 'port', capacity: 520, unit: 'Mt/year', country: 'Australia', operator: 'BHP/FMG/Roy Hill', description: 'World\'s largest iron ore export port' },
      { id: 'tubarao', name: 'Tubarão Port', lat: -20.28, lng: -40.24, type: 'port', capacity: 100, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Major iron ore export terminal' },
      { id: 'qingdao-port', name: 'Qingdao Port', lat: 36.07, lng: 120.38, type: 'port', capacity: 180, unit: 'Mt/year', country: 'China', operator: 'Qingdao Port Group', description: 'Major iron ore import terminal' },

      // Ukraine
      { id: 'kryvyi-rih', name: 'Kryvyi Rih Basin', lat: 47.91, lng: 33.38, type: 'mine', production: 45, unit: 'Mt/year', country: 'Ukraine', operator: 'Metinvest', description: 'Major European iron ore mining region' },

      // Sweden
      { id: 'kiruna', name: 'Kiruna Mine', lat: 67.85, lng: 20.23, type: 'mine', production: 27, unit: 'Mt/year', country: 'Sweden', operator: 'LKAB', description: 'Largest underground iron ore mine in the world' },
      { id: 'malmberget', name: 'Malmberget Mine', lat: 67.18, lng: 20.68, type: 'mine', production: 15, unit: 'Mt/year', country: 'Sweden', operator: 'LKAB', description: 'Historic Swedish iron ore mine' },

      // Mauritania
      { id: 'zouerate', name: 'Zouérat Mine', lat: 22.75, lng: -12.48, type: 'mine', production: 12, unit: 'Mt/year', country: 'Mauritania', operator: 'SNIM', description: 'Major Saharan iron ore mine' },

      // Additional Ports
      { id: 'rizhao-port', name: 'Rizhao Port', lat: 35.43, lng: 119.45, type: 'port', capacity: 120, unit: 'Mt/year', country: 'China', description: 'Major Chinese iron ore import port' },
      { id: 'rotterdam-iron', name: 'Rotterdam Iron Hub', lat: 51.92, lng: 4.48, type: 'port', capacity: 35, unit: 'Mt/year', country: 'Netherlands', description: 'Europe\'s main iron ore distribution hub' },

      // Steel Mills (major consumers)
      { id: 'baosteel', name: 'Baosteel Shanghai', lat: 31.40, lng: 121.20, type: 'plant', consumption: 42, unit: 'Mt/year', country: 'China', operator: 'China Baowu Steel', description: 'One of world\'s largest integrated steel mills' },
      { id: 'hebei-steel-complex', name: 'Hebei Steel Region', lat: 39.72, lng: 114.55, type: 'consumer', consumption: 240, unit: 'Mt/year', country: 'China', description: 'Massive steel production cluster' },
      { id: 'jamshedpur', name: 'Tata Steel Jamshedpur', lat: 22.79, lng: 86.19, type: 'plant', consumption: 18, unit: 'Mt/year', country: 'India', operator: 'Tata Steel', description: 'Large integrated steel plant' },
      { id: 'arcelormittal-dunkirk', name: 'ArcelorMittal Dunkirk', lat: 51.05, lng: 2.38, type: 'plant', consumption: 13, unit: 'Mt/year', country: 'France', operator: 'ArcelorMittal', description: 'Largest steel plant in France' },
      { id: 'posco-pohang', name: 'POSCO Pohang Works', lat: 36.03, lng: 129.36, type: 'plant', consumption: 35, unit: 'Mt/year', country: 'South Korea', operator: 'POSCO', description: 'One of world\'s most efficient steel mills' },
    ]
  },

  lithium: {
    id: 'lithium',
    name: 'Lithium',
    color: '#CC99FF',
    unit: 'kt LCE/year',
    globalProduction: 180,
    description: 'Critical battery material for electric vehicles and energy storage. Essential for electrification and renewable energy transition.',
    category: 'critical',
    locations: [
      // Australia - Largest producer (hard rock)
      { id: 'greenbushes', name: 'Greenbushes Mine', lat: -33.87, lng: 116.05, type: 'mine', production: 60, unit: 'kt LCE/year', country: 'Australia', operator: 'Talison Lithium', description: 'World\'s largest hard-rock lithium mine' },
      { id: 'mt-cattlin', name: 'Mt Cattlin', lat: -32.70, lng: 121.65, type: 'mine', production: 8, unit: 'kt LCE/year', country: 'Australia', operator: 'Mineral Resources', description: 'Spodumene lithium mine in Western Australia' },
      { id: 'pilgangoora', name: 'Pilgangoora', lat: -21.65, lng: 118.65, type: 'mine', production: 12, unit: 'kt LCE/year', country: 'Australia', operator: 'Pilbara Minerals', description: 'Large spodumene operation in Pilbara' },

      // Chile - Largest brine producer
      { id: 'atacama', name: 'Salar de Atacama', lat: -23.50, lng: -68.25, type: 'mine', production: 48, unit: 'kt LCE/year', country: 'Chile', operator: 'SQM/Albemarle', description: 'World\'s highest grade lithium brine deposit' },

      // Argentina
      { id: 'hombre-muerto', name: 'Salar del Hombre Muerto', lat: -25.43, lng: -66.90, type: 'mine', production: 14, unit: 'kt LCE/year', country: 'Argentina', operator: 'Livent', description: 'High-grade lithium brine operation' },
      { id: 'olaroz', name: 'Olaroz', lat: -24.18, lng: -66.58, type: 'mine', production: 8, unit: 'kt LCE/year', country: 'Argentina', operator: 'Allkem', description: 'Lithium carbonate production from brine' },

      // China - Major producer and processor
      { id: 'qinghai-salt-lakes', name: 'Qinghai Salt Lakes', lat: 37.22, lng: 95.25, type: 'mine', production: 16, unit: 'kt LCE/year', country: 'China', operator: 'Multiple operators', description: 'Brine lithium production in Qinghai Province' },
      { id: 'jiangxi-lithium', name: 'Jiangxi Lepidolite', lat: 25.28, lng: 114.95, type: 'mine', production: 10, unit: 'kt LCE/year', country: 'China', operator: 'Yichun Tantalum', description: 'Lithium from lepidolite mica' },

      // Zimbabwe
      { id: 'bikita', name: 'Bikita Mine', lat: -20.02, lng: 31.30, type: 'mine', production: 4, unit: 'kt LCE/year', country: 'Zimbabwe', operator: 'Sinomine', description: 'Petalite and spodumene lithium mine' },
      { id: 'arcadia', name: 'Arcadia Mine', lat: -17.75, lng: 31.05, type: 'mine', production: 5.5, unit: 'kt LCE/year', country: 'Zimbabwe', operator: 'Prospect Resources', description: 'Large-scale petalite project' },

      // USA
      { id: 'silver-peak', name: 'Silver Peak', lat: 37.73, lng: -117.95, type: 'mine', production: 5, unit: 'kt LCE/year', country: 'USA', operator: 'Albemarle', description: 'Only operating lithium brine mine in USA' },
      { id: 'thacker-pass', name: 'Thacker Pass', lat: 41.37, lng: -117.97, type: 'mine', production: 6, unit: 'kt LCE/year', country: 'USA', operator: 'Lithium Americas', description: 'Largest known lithium deposit in USA' },

      // Mali
      { id: 'goulamina', name: 'Goulamina', lat: 11.45, lng: -7.25, type: 'mine', production: 7, unit: 'kt LCE/year', country: 'Mali', operator: 'Leo Lithium', description: 'Major African spodumene project' },

      // Mexico
      { id: 'sonora', name: 'Sonora Lithium', lat: 29.30, lng: -110.90, type: 'mine', production: 4.5, unit: 'kt LCE/year', country: 'Mexico', operator: 'Ganfeng', description: 'Clay lithium project' },

      // Processing facilities
      { id: 'ganfeng-jiangxi', name: 'Ganfeng Lithium Plant', lat: 27.62, lng: 115.83, type: 'refinery', capacity: 45, unit: 'kt LCE/year', country: 'China', operator: 'Ganfeng Lithium', description: 'World\'s largest lithium compounds producer' },
      { id: 'tianqi-lithium', name: 'Tianqi Lithium Processing', lat: 29.18, lng: 103.82, type: 'refinery', capacity: 32, unit: 'kt LCE/year', country: 'China', operator: 'Tianqi Lithium', description: 'Major lithium processing facility' },
      { id: 'lianyungang', name: 'Lianyungang Hub', lat: 34.60, lng: 119.20, type: 'refinery', capacity: 28, unit: 'kt LCE/year', country: 'China', operator: 'Multiple operators', description: 'Lithium processing cluster' },
      { id: 'kwinana', name: 'Kwinana Lithium Refinery', lat: -32.23, lng: 115.78, type: 'refinery', capacity: 24, unit: 'kt LCE/year', country: 'Australia', operator: 'Tianqi/IGO', description: 'Lithium hydroxide production facility' },
      { id: 'kemerton', name: 'Kemerton Lithium Plant', lat: -33.28, lng: 115.72, type: 'refinery', capacity: 20, unit: 'kt LCE/year', country: 'Australia', operator: 'Albemarle', description: 'Lithium hydroxide refinery' },
      { id: 'kings-mountain', name: 'Kings Mountain Processing', lat: 35.24, lng: -81.34, type: 'refinery', capacity: 15, unit: 'kt LCE/year', country: 'USA', operator: 'Albemarle', description: 'North American lithium processing' },

      // Battery manufacturing (major consumers)
      { id: 'gigafactory-nevada', name: 'Tesla Gigafactory Nevada', lat: 39.54, lng: -119.44, type: 'consumer', consumption: 18, unit: 'kt LCE/year', country: 'USA', operator: 'Tesla/Panasonic', description: 'Massive battery production facility' },
      { id: 'gigafactory-shanghai', name: 'Tesla Gigafactory Shanghai', lat: 31.17, lng: 121.54, type: 'consumer', consumption: 22, unit: 'kt LCE/year', country: 'China', operator: 'Tesla', description: 'Major battery and EV production plant' },
      { id: 'catl-ningde', name: 'CATL Ningde', lat: 26.67, lng: 119.55, type: 'consumer', consumption: 35, unit: 'kt LCE/year', country: 'China', operator: 'CATL', description: 'World\'s largest battery manufacturer' },
      { id: 'lg-energy-ochang', name: 'LG Energy Ochang', lat: 36.72, lng: 127.49, type: 'consumer', consumption: 12, unit: 'kt LCE/year', country: 'South Korea', operator: 'LG Energy Solution', description: 'Major battery production facility' },
      { id: 'byd-shenzhen', name: 'BYD Shenzhen Battery', lat: 22.65, lng: 114.05, type: 'consumer', consumption: 28, unit: 'kt LCE/year', country: 'China', operator: 'BYD', description: 'Major EV and battery manufacturer' },
      { id: 'sk-hungary', name: 'SK Innovation Hungary', lat: 47.35, lng: 19.33, type: 'consumer', consumption: 8, unit: 'kt LCE/year', country: 'Hungary', operator: 'SK On', description: 'European battery gigafactory' },
      { id: 'northvolt-sweden', name: 'Northvolt Ett', lat: 65.58, lng: 22.15, type: 'consumer', consumption: 10, unit: 'kt LCE/year', country: 'Sweden', operator: 'Northvolt', description: 'Europe\'s largest battery plant' },
    ]
  },

  coal: {
    id: 'coal',
    name: 'Coal',
    color: '#2F2F2F',
    unit: 'Mt/year',
    globalProduction: 8000,
    description: 'Major energy source for electricity generation and steel production. Most abundant fossil fuel globally.',
    category: 'energy',
    locations: [
      // China - Largest producer and consumer
      { id: 'shanxi', name: 'Shanxi Province Mines', lat: 37.87, lng: 112.55, type: 'mine', production: 1100, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'China\'s largest coal producing province' },
      { id: 'inner-mongolia', name: 'Inner Mongolia Mines', lat: 40.82, lng: 111.67, type: 'mine', production: 1050, unit: 'Mt/year', country: 'China', operator: 'Shenhua/China Coal', description: 'Massive open-pit coal operations' },
      { id: 'shaanxi-coal', name: 'Shaanxi Province', lat: 38.58, lng: 109.50, type: 'mine', production: 680, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Major coal production base' },
      { id: 'haerwusu', name: 'Haerwusu Mine', lat: 39.68, lng: 109.80, type: 'mine', production: 35, unit: 'Mt/year', country: 'China', operator: 'Shenhua', description: 'One of world\'s largest single coal mines' },

      // India - Second largest producer
      { id: 'jharia', name: 'Jharia Coalfield', lat: 23.75, lng: 86.42, type: 'mine', production: 45, unit: 'Mt/year', country: 'India', operator: 'Coal India', description: 'Largest coal reserves in India' },
      { id: 'talcher', name: 'Talcher Coalfield', lat: 20.95, lng: 85.22, type: 'mine', production: 52, unit: 'Mt/year', country: 'India', operator: 'Coal India/MCL', description: 'Major coal producing area in Odisha' },
      { id: 'singrauli', name: 'Singrauli Coalfield', lat: 24.12, lng: 82.67, type: 'mine', production: 48, unit: 'Mt/year', country: 'India', operator: 'Coal India/NCL', description: 'Super critical coal belt' },

      // Indonesia - Largest exporter
      { id: 'kalimantan', name: 'Kalimantan Coal Region', lat: -1.50, lng: 116.00, type: 'mine', production: 620, unit: 'Mt/year', country: 'Indonesia', operator: 'Multiple operators', description: 'Major thermal coal export region' },
      { id: 'banpu-indo', name: 'Banpu Indonesia Mines', lat: -0.48, lng: 115.85, type: 'mine', production: 25, unit: 'Mt/year', country: 'Indonesia', operator: 'Banpu', description: 'Large coal mining operations' },

      // USA
      { id: 'powder-river', name: 'Powder River Basin', lat: 43.80, lng: -105.50, type: 'mine', production: 280, unit: 'Mt/year', country: 'USA', operator: 'Peabody/Arch', description: 'Largest coal-producing region in USA' },
      { id: 'appalachia', name: 'Appalachian Coal Region', lat: 37.85, lng: -81.62, type: 'mine', production: 185, unit: 'Mt/year', country: 'USA', operator: 'Multiple operators', description: 'Historic coal mining region' },
      { id: 'illinois-basin', name: 'Illinois Basin', lat: 38.12, lng: -88.55, type: 'mine', production: 58, unit: 'Mt/year', country: 'USA', operator: 'Peabody/Foresight', description: 'Major coal basin in Midwest' },

      // Australia - Major exporter
      { id: 'hunter-valley', name: 'Hunter Valley', lat: -32.50, lng: 151.20, type: 'mine', production: 160, unit: 'Mt/year', country: 'Australia', operator: 'Glencore/Yancoal', description: 'Premier coal export region' },
      { id: 'bowen-basin', name: 'Bowen Basin', lat: -22.00, lng: 148.00, type: 'mine', production: 220, unit: 'Mt/year', country: 'Australia', operator: 'BHP/Glencore/Peabody', description: 'World\'s largest source of metallurgical coal' },

      // Russia
      { id: 'kuzbass', name: 'Kuzbass Basin', lat: 54.00, lng: 86.50, type: 'mine', production: 255, unit: 'Mt/year', country: 'Russia', operator: 'SUEK/Kuzbassrazrezugol', description: 'Largest coal basin in Russia' },
      { id: 'kansk-achinsk', name: 'Kansk-Achinsk Basin', lat: 56.10, lng: 95.70, type: 'mine', production: 48, unit: 'Mt/year', country: 'Russia', operator: 'SUEK', description: 'Large lignite coal deposits' },

      // South Africa
      { id: 'mpumalanga', name: 'Mpumalanga Coalfields', lat: -26.00, lng: 29.50, type: 'mine', production: 260, unit: 'Mt/year', country: 'South Africa', operator: 'Exxaro/Glencore', description: 'Major coal producing region' },

      // Poland
      { id: 'upper-silesia', name: 'Upper Silesian Coal Basin', lat: 50.30, lng: 19.00, type: 'mine', production: 52, unit: 'Mt/year', country: 'Poland', operator: 'JSW/PGG', description: 'Largest coal region in Poland' },

      // Kazakhstan
      { id: 'ekibastuz', name: 'Ekibastuz Coal Basin', lat: 51.67, lng: 75.32, type: 'mine', production: 72, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Bogatyr Komir', description: 'Massive open-pit coal operations' },

      // Colombia
      { id: 'cerrejon', name: 'Cerrejón Mine', lat: 11.10, lng: -72.70, type: 'mine', production: 26, unit: 'Mt/year', country: 'Colombia', operator: 'Cerrejón', description: 'Largest coal mine in Latin America' },
      { id: 'drummond-colombia', name: 'Drummond Colombia', lat: 9.42, lng: -73.73, type: 'mine', production: 22, unit: 'Mt/year', country: 'Colombia', operator: 'Drummond', description: 'Major Colombian coal exporter' },

      // Vietnam
      { id: 'quang-ninh', name: 'Quang Ninh Coal Region', lat: 21.00, lng: 107.30, type: 'mine', production: 48, unit: 'Mt/year', country: 'Vietnam', operator: 'Vinacomin', description: 'Vietnam\'s main coal producing area' },

      // Mongolia
      { id: 'tavan-tolgoi', name: 'Tavan Tolgoi', lat: 43.65, lng: 105.95, type: 'mine', production: 32, unit: 'Mt/year', country: 'Mongolia', operator: 'Erdenes TT', description: 'One of world\'s largest untapped coking coal deposits' },

      // Germany
      { id: 'rhenish', name: 'Rhenish Coal Region', lat: 50.90, lng: 6.50, type: 'mine', production: 85, unit: 'Mt/year', country: 'Germany', operator: 'RWE', description: 'Major lignite mining area' },
      { id: 'lusatia', name: 'Lusatian Coal Region', lat: 51.40, lng: 14.30, type: 'mine', production: 58, unit: 'Mt/year', country: 'Germany', operator: 'LEAG', description: 'Lignite coal basin' },

      // Czech Republic
      { id: 'ostrava-karvina', name: 'Ostrava-Karviná Coalfield', lat: 49.82, lng: 18.28, type: 'mine', production: 12, unit: 'Mt/year', country: 'Czech Republic', operator: 'OKD', description: 'Major Central European coal basin' },

      // Ukraine
      { id: 'donbas', name: 'Donbas Coal Basin', lat: 48.00, lng: 38.00, type: 'mine', production: 35, unit: 'Mt/year', country: 'Ukraine', operator: 'DTEK', description: 'Historic coal mining region' },

      // Turkey
      { id: 'zonguldak', name: 'Zonguldak Coal Basin', lat: 41.46, lng: 31.80, type: 'mine', production: 14, unit: 'Mt/year', country: 'Turkey', operator: 'TTK', description: 'Major Turkish coal region' },

      // Canada
      { id: 'alberta-coal', name: 'Alberta Coal Fields', lat: 53.22, lng: -117.80, type: 'mine', production: 32, unit: 'Mt/year', country: 'Canada', operator: 'Teck/CNRL', description: 'Western Canadian coal operations' },
      { id: 'elkview', name: 'Elkview Operations', lat: 50.03, lng: -114.85, type: 'mine', production: 28, unit: 'Mt/year', country: 'Canada', operator: 'Teck Resources', description: 'Major metallurgical coal mine' },

      // North Korea
      { id: 'anju-coal', name: 'Anju Coal Region', lat: 39.62, lng: 125.67, type: 'mine', production: 28, unit: 'Mt/year', country: 'North Korea', operator: 'State-owned', description: 'Major North Korean coal area' },

      // Thailand
      { id: 'mae-moh', name: 'Mae Moh Mine', lat: 18.30, lng: 99.75, type: 'mine', production: 15, unit: 'Mt/year', country: 'Thailand', operator: 'EGAT', description: 'Thailand\'s largest lignite mine' },

      // Ports
      { id: 'newcastle-coal-port', name: 'Port of Newcastle', lat: -32.92, lng: 151.78, type: 'port', capacity: 170, unit: 'Mt/year', country: 'Australia', operator: 'Port of Newcastle', description: 'World\'s largest coal export port' },
      { id: 'richards-bay', name: 'Richards Bay Coal Terminal', lat: -28.77, lng: 32.08, type: 'port', capacity: 92, unit: 'Mt/year', country: 'South Africa', operator: 'RBCT', description: 'Major coal export terminal' },
      { id: 'qinhuangdao', name: 'Qinhuangdao Port', lat: 39.93, lng: 119.60, type: 'port', capacity: 280, unit: 'Mt/year', country: 'China', description: 'World\'s largest coal port' },
      { id: 'gladstone-port', name: 'Gladstone Coal Terminal', lat: -23.85, lng: 151.25, type: 'port', capacity: 85, unit: 'Mt/year', country: 'Australia', description: 'Major Queensland coal export port' },
      { id: 'hay-point', name: 'Dalrymple Bay/Hay Point', lat: -21.28, lng: 149.30, type: 'port', capacity: 102, unit: 'Mt/year', country: 'Australia', description: 'Bowen Basin coal export terminal' },

      // Power plants (major consumers)
      { id: 'tuoketuo', name: 'Tuoketuo Power Station', lat: 40.17, lng: 111.15, type: 'consumer', consumption: 28, unit: 'Mt/year', country: 'China', description: 'One of world\'s largest coal power plants' },
      { id: 'taichung', name: 'Taichung Power Plant', lat: 24.21, lng: 120.48, type: 'consumer', consumption: 18, unit: 'Mt/year', country: 'Taiwan', operator: 'Taiwan Power Company', description: 'World\'s largest coal-fired power station' },
      { id: 'kendal', name: 'Kendal Power Station', lat: -26.08, lng: 29.13, type: 'consumer', consumption: 22, unit: 'Mt/year', country: 'South Africa', operator: 'Eskom', description: 'Major South African coal power plant' },
      { id: 'belchatow', name: 'Bełchatów Power Station', lat: 51.27, lng: 19.33, type: 'consumer', consumption: 42, unit: 'Mt/year', country: 'Poland', operator: 'PGE', description: 'Europe\'s largest coal power plant' },
      { id: 'datang', name: 'Datang托克托', lat: 36.70, lng: 114.48, type: 'consumer', consumption: 20, unit: 'Mt/year', country: 'China', description: 'Major Chinese coal power complex' },
      { id: 'vindhyachal', name: 'Vindhyachal Power Station', lat: 24.10, lng: 82.67, type: 'consumer', consumption: 25, unit: 'Mt/year', country: 'India', operator: 'NTPC', description: 'India\'s largest thermal power plant' },
      { id: 'mundra', name: 'Mundra Ultra Mega Power Plant', lat: 22.75, lng: 69.68, type: 'consumer', consumption: 16, unit: 'Mt/year', country: 'India', operator: 'Adani Power', description: 'Coastal thermal power station' },
      { id: 'sasan', name: 'Sasan Ultra Mega Power', lat: 24.08, lng: 82.48, type: 'consumer', consumption: 19, unit: 'Mt/year', country: 'India', operator: 'Reliance Power', description: 'Pithead power station' },
      { id: 'badarpur', name: 'Badarpur Thermal Station', lat: 28.50, lng: 77.28, type: 'consumer', consumption: 14, unit: 'Mt/year', country: 'India', description: 'Delhi region coal power plant' },
      { id: 'paiton', name: 'Paiton Power Station', lat: -7.70, lng: 113.50, type: 'consumer', consumption: 12, unit: 'Mt/year', country: 'Indonesia', description: 'Java coal-fired power complex' },
    ]
  },

  aluminium: {
    id: 'aluminium',
    name: 'Aluminium',
    color: '#A8A9AD',
    unit: 'Mt/year',
    globalProduction: 70,
    description: 'Lightweight metal essential for aerospace, automotive, packaging, and construction. Second most used metal after steel.',
    category: 'metals',
    locations: [
      // Bauxite mines
      { id: 'weipa', name: 'Weipa Bauxite Mine', lat: -12.67, lng: 141.87, type: 'mine', production: 35, unit: 'Mt bauxite/year', country: 'Australia', operator: 'Rio Tinto', description: 'World\'s largest bauxite mine' },
      { id: 'paragominas', name: 'Paragominas Mine', lat: -3.00, lng: -47.48, type: 'mine', production: 18, unit: 'Mt bauxite/year', country: 'Brazil', operator: 'Hydro', description: 'Large bauxite mine in Amazon' },
      { id: 'guinea-bauxite', name: 'Sangarédi Mine', lat: 11.58, lng: -13.72, type: 'mine', production: 35, unit: 'Mt bauxite/year', country: 'Guinea', operator: 'CBG', description: 'Major bauxite producer from world\'s largest reserves' },
      { id: 'huntly', name: 'Huntly Mine', lat: -33.00, lng: 116.18, type: 'mine', production: 25, unit: 'Mt bauxite/year', country: 'Australia', operator: 'Alcoa', description: 'Large bauxite mine in Western Australia' },

      // Alumina refineries
      { id: 'gladstone', name: 'Gladstone Alumina Refinery', lat: -23.85, lng: 151.25, type: 'refinery', capacity: 3.8, unit: 'Mt alumina/year', country: 'Australia', operator: 'Rio Tinto', description: 'One of world\'s largest alumina refineries' },
      { id: 'alunorte', name: 'Alunorte Refinery', lat: -2.61, lng: -48.45, type: 'refinery', capacity: 6.3, unit: 'Mt alumina/year', country: 'Brazil', operator: 'Hydro', description: 'World\'s largest alumina refinery' },

      // Aluminium smelters
      { id: 'rusal-bratsk', name: 'Bratsk Smelter', lat: 56.15, lng: 101.63, type: 'plant', production: 1.05, unit: 'Mt/year', country: 'Russia', operator: 'Rusal', description: 'World\'s largest aluminium smelter' },
      { id: 'rusal-krasnoyarsk', name: 'Krasnoyarsk Smelter', lat: 56.02, lng: 92.85, type: 'plant', production: 1.03, unit: 'Mt/year', country: 'Russia', operator: 'Rusal', description: 'Major Siberian aluminium smelter' },
      { id: 'chalco-qinghai', name: 'Qinghai Aluminum', lat: 36.62, lng: 101.77, type: 'plant', production: 0.5, unit: 'Mt/year', country: 'China', operator: 'Chalco', description: 'Large-scale aluminium smelter' },
      { id: 'albras', name: 'Albras Smelter', lat: -2.58, lng: -48.48, type: 'plant', production: 0.48, unit: 'Mt/year', country: 'Brazil', operator: 'Hydro', description: 'Major aluminium smelter in Pará' },
      { id: 'ma-aden', name: 'Ma\'aden Aluminium', lat: 27.05, lng: 49.59, type: 'plant', production: 0.74, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'Ma\'aden/Alcoa', description: 'Integrated aluminium complex' },
      { id: 'dubal', name: 'EGA Jebel Ali', lat: 24.98, lng: 55.08, type: 'plant', production: 0.95, unit: 'Mt/year', country: 'UAE', operator: 'Emirates Global Aluminium', description: 'Large Middle East smelter' },
      { id: 'alcoa-portland', name: 'Alcoa Portland', lat: -38.33, lng: 141.60, type: 'plant', production: 0.36, unit: 'Mt/year', country: 'Australia', operator: 'Alcoa', description: 'Major Victorian aluminium smelter' },
      { id: 'kitimat', name: 'Kitimat Smelter', lat: 54.05, lng: -128.68, type: 'plant', production: 0.44, unit: 'Mt/year', country: 'Canada', operator: 'Rio Tinto', description: 'Large BC aluminium smelter' },
      { id: 'century-aluminum', name: 'Century Aluminum Kentucky', lat: 37.08, lng: -88.63, type: 'plant', production: 0.26, unit: 'Mt/year', country: 'USA', operator: 'Century Aluminum', description: 'Major US aluminium producer' },
      { id: 'sohar', name: 'Sohar Aluminium', lat: 24.43, lng: 56.73, type: 'plant', production: 0.38, unit: 'Mt/year', country: 'Oman', operator: 'OQ/Rio Tinto', description: 'Integrated aluminium complex' },

      // Major consumers
      { id: 'boeing-everett', name: 'Boeing Everett', lat: 47.92, lng: -122.28, type: 'consumer', consumption: 0.15, unit: 'Mt/year', country: 'USA', operator: 'Boeing', description: 'World\'s largest aerospace manufacturing plant' },
      { id: 'airbus-toulouse', name: 'Airbus Toulouse', lat: 43.65, lng: 1.37, type: 'consumer', consumption: 0.12, unit: 'Mt/year', country: 'France', operator: 'Airbus', description: 'Major aircraft manufacturing facility' },
    ]
  },

  naturalgas: {
    id: 'naturalgas',
    name: 'Natural Gas',
    color: '#4169E1',
    unit: 'bcm/year',
    globalProduction: 4100,
    description: 'Clean-burning fossil fuel for electricity generation, heating, and industrial processes. Key to energy transition.',
    category: 'energy',
    locations: [
      // USA - Largest producer
      { id: 'marcellus', name: 'Marcellus Shale', lat: 40.50, lng: -78.50, type: 'field', production: 350, unit: 'bcm/year', country: 'USA', operator: 'Multiple operators', description: 'Largest US natural gas field' },
      { id: 'permian-gas', name: 'Permian Basin Gas', lat: 31.85, lng: -102.38, type: 'field', production: 180, unit: 'bcm/year', country: 'USA', operator: 'Multiple operators', description: 'Major associated gas production' },
      { id: 'haynesville', name: 'Haynesville Shale', lat: 32.00, lng: -94.00, type: 'field', production: 95, unit: 'bcm/year', country: 'USA', operator: 'Multiple operators', description: 'Major shale gas play' },

      // Russia - Second largest
      { id: 'urengoy', name: 'Urengoy Gas Field', lat: 65.95, lng: 76.63, type: 'field', production: 185, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'One of world\'s largest gas fields' },
      { id: 'yamal-peninsula', name: 'Yamal Peninsula', lat: 70.00, lng: 70.00, type: 'field', production: 115, unit: 'bcm/year', country: 'Russia', operator: 'Novatek/Gazprom', description: 'Arctic gas megaproject' },
      { id: 'bovanenkovo', name: 'Bovanenkovo Field', lat: 70.35, lng: 68.00, type: 'field', production: 90, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'Major Yamal gas field' },

      // Qatar/Iran - Largest field
      { id: 'south-pars', name: 'South Pars/North Dome', lat: 27.00, lng: 52.50, type: 'field', production: 300, unit: 'bcm/year', country: 'Iran/Qatar', operator: 'NIOC/Qatar Energy', description: 'World\'s largest gas field' },

      // Australia
      { id: 'gorgon', name: 'Gorgon LNG Project', lat: -20.67, lng: 115.12, type: 'field', production: 22, unit: 'Mt LNG/year', country: 'Australia', operator: 'Chevron/Shell/ExxonMobil', description: 'Major offshore gas and LNG project' },
      { id: 'northwest-shelf', name: 'North West Shelf', lat: -20.50, lng: 115.00, type: 'field', production: 16.3, unit: 'Mt LNG/year', country: 'Australia', operator: 'Woodside/BHP/BP/Shell', description: 'Pioneering Australian LNG project' },

      // China
      { id: 'sulige', name: 'Sulige Gas Field', lat: 38.85, lng: 108.75, type: 'field', production: 28, unit: 'bcm/year', country: 'China', operator: 'PetroChina', description: 'China\'s largest gas field' },
      { id: 'changqing', name: 'Changqing Gas Fields', lat: 36.60, lng: 108.95, type: 'field', production: 45, unit: 'bcm/year', country: 'China', operator: 'PetroChina', description: 'Major gas producing area' },

      // Netherlands
      { id: 'groningen', name: 'Groningen Field', lat: 53.30, lng: 6.70, type: 'field', production: 12, unit: 'bcm/year', country: 'Netherlands', operator: 'NAM', description: 'Europe\'s largest gas field (declining production)' },

      // Norway
      { id: 'troll', name: 'Troll Field', lat: 60.64, lng: 3.72, type: 'field', production: 40, unit: 'bcm/year', country: 'Norway', operator: 'Equinor', description: 'Largest gas field in Norwegian North Sea' },

      // Algeria
      { id: 'hassi-rmel', name: 'Hassi R\'Mel', lat: 32.93, lng: 3.30, type: 'field', production: 85, unit: 'bcm/year', country: 'Algeria', operator: 'Sonatrach', description: 'One of world\'s largest gas fields' },

      // Turkmenistan
      { id: 'galkynysh', name: 'Galkynysh Field', lat: 38.85, lng: 64.50, type: 'field', production: 65, unit: 'bcm/year', country: 'Turkmenistan', operator: 'Turkmengaz', description: 'Second largest gas field in the world' },

      // LNG export terminals
      { id: 'qatargas', name: 'Ras Laffan LNG', lat: 25.90, lng: 51.50, type: 'plant', capacity: 77, unit: 'Mt LNG/year', country: 'Qatar', operator: 'Qatar Energy', description: 'World\'s largest LNG export facility' },
      { id: 'sabine-pass', name: 'Sabine Pass LNG', lat: 29.73, lng: -93.87, type: 'plant', capacity: 30, unit: 'Mt LNG/year', country: 'USA', operator: 'Cheniere Energy', description: 'First major US LNG export terminal' },
      { id: 'sakhalin', name: 'Sakhalin-2 LNG', lat: 46.65, lng: 142.72, type: 'plant', capacity: 11.6, unit: 'Mt LNG/year', country: 'Russia', operator: 'Gazprom/Shell', description: 'Major LNG export project' },

      // Additional fields
      { id: 'karachaganak', name: 'Karachaganak Field', lat: 51.30, lng: 53.30, type: 'field', production: 18, unit: 'bcm/year', country: 'Kazakhstan', operator: 'KPO', description: 'Giant gas condensate field' },
      { id: 'shah-deniz', name: 'Shah Deniz', lat: 40.00, lng: 50.25, type: 'field', production: 20, unit: 'bcm/year', country: 'Azerbaijan', operator: 'BP', description: 'Major Caspian gas field' },
      { id: 'vaca-muerta', name: 'Vaca Muerta', lat: -38.50, lng: -69.50, type: 'field', production: 24, unit: 'bcm/year', country: 'Argentina', operator: 'Multiple operators', description: 'Massive shale gas formation' },
      { id: 'khazzan', name: 'Khazzan Gas Field', lat: 21.80, lng: 56.50, type: 'field', production: 10.5, unit: 'bcm/year', country: 'Oman', operator: 'BP', description: 'Tight gas development' },
      { id: 'ichthys', name: 'Ichthys LNG', lat: -12.57, lng: 130.85, type: 'plant', capacity: 9.6, unit: 'Mt LNG/year', country: 'Australia', operator: 'INPEX', description: 'Darwin LNG facility' },
      { id: 'wheatstone', name: 'Wheatstone LNG', lat: -21.30, lng: 114.85, type: 'plant', capacity: 9, unit: 'Mt LNG/year', country: 'Australia', operator: 'Chevron', description: 'Western Australian LNG' },
      { id: 'corpus-christi', name: 'Corpus Christi LNG', lat: 27.83, lng: -97.47, type: 'plant', capacity: 18, unit: 'Mt LNG/year', country: 'USA', operator: 'Cheniere', description: 'Texas LNG exporter' },

      // Import terminals
      { id: 'tokyo-gas-terminal', name: 'Tokyo LNG Terminals', lat: 35.45, lng: 139.80, type: 'port', capacity: 35, unit: 'Mt LNG/year', country: 'Japan', operator: 'Tokyo Gas/JERA', description: 'Major LNG import hub' },
      { id: 'gate-rotterdam', name: 'Gate Rotterdam', lat: 51.93, lng: 4.08, type: 'port', capacity: 16, unit: 'Mt LNG/year', country: 'Netherlands', operator: 'Gasunie/Vopak', description: 'European LNG import terminal' },
      { id: 'pyeongtaek-lng', name: 'Pyeongtaek LNG', lat: 36.95, lng: 126.80, type: 'port', capacity: 14, unit: 'Mt LNG/year', country: 'South Korea', operator: 'KOGAS', description: 'Major Korean LNG terminal' },
      { id: 'dahej', name: 'Dahej LNG Terminal', lat: 21.70, lng: 72.65, type: 'port', capacity: 17.5, unit: 'Mt LNG/year', country: 'India', operator: 'Petronet LNG', description: 'India\'s largest LNG terminal' },
      { id: 'dapeng', name: 'Dapeng LNG Terminal', lat: 22.70, lng: 114.53, type: 'port', capacity: 4.5, unit: 'Mt LNG/year', country: 'China', operator: 'CNOOC', description: 'First Chinese LNG terminal' },
    ]
  },

  nickel: {
    id: 'nickel',
    name: 'Nickel',
    color: '#727472',
    unit: 'kt/year',
    globalProduction: 3500,
    description: 'Critical metal for stainless steel and increasingly important for electric vehicle batteries.',
    category: 'metals',
    locations: [
      // Indonesia - Largest producer
      { id: 'sorowako', name: 'Sorowako Mine', lat: -2.53, lng: 121.35, type: 'mine', production: 75, unit: 'kt/year', country: 'Indonesia', operator: 'Vale Indonesia', description: 'Major laterite nickel operation' },
      { id: 'weda-bay', name: 'Weda Bay', lat: 0.38, lng: 127.87, type: 'mine', production: 85, unit: 'kt/year', country: 'Indonesia', operator: 'Tsingshan/Eramet', description: 'Large-scale nickel laterite mine' },
      { id: 'pomalaa', name: 'Pomalaa Mine', lat: -4.15, lng: 121.60, type: 'mine', production: 32, unit: 'kt/year', country: 'Indonesia', operator: 'Aneka Tambang', description: 'Historic nickel mining area' },

      // Philippines
      { id: 'rio-tuba', name: 'Rio Tuba Mine', lat: 8.45, lng: 117.47, type: 'mine', production: 28, unit: 'kt/year', country: 'Philippines', operator: 'Nickel Asia', description: 'Major laterite nickel producer' },
      { id: 'taganito', name: 'Taganito HPAL', lat: 9.48, lng: 125.98, type: 'plant', production: 24, unit: 'kt/year', country: 'Philippines', operator: 'Sumitomo/Nickel Asia', description: 'High-pressure acid leach facility' },

      // Russia
      { id: 'norilsk', name: 'Norilsk-Talnakh', lat: 69.36, lng: 88.20, type: 'mine', production: 180, unit: 'kt/year', country: 'Russia', operator: 'Norilsk Nickel', description: 'World\'s largest nickel-copper-palladium complex' },

      // New Caledonia
      { id: 'goro', name: 'Goro Mine', lat: -22.28, lng: 167.00, type: 'mine', production: 50, unit: 'kt/year', country: 'New Caledonia', operator: 'Vale/Tsingshan', description: 'Large laterite nickel project' },
      { id: 'koniambo', name: 'Koniambo', lat: -21.05, lng: 164.80, type: 'mine', production: 55, unit: 'kt/year', country: 'New Caledonia', operator: 'Glencore', description: 'Major nickel-cobalt operation' },

      // Canada
      { id: 'sudbury', name: 'Sudbury Basin', lat: 46.49, lng: -81.00, type: 'mine', production: 48, unit: 'kt/year', country: 'Canada', operator: 'Vale/Glencore', description: 'Historic nickel mining district' },
      { id: 'voiseys-bay', name: 'Voisey\'s Bay', lat: 56.33, lng: -61.72, type: 'mine', production: 38, unit: 'kt/year', country: 'Canada', operator: 'Vale', description: 'Major nickel-copper-cobalt mine in Labrador' },

      // Australia
      { id: 'murrin-murrin', name: 'Murrin Murrin', lat: -28.75, lng: 121.22, type: 'mine', production: 32, unit: 'kt/year', country: 'Australia', operator: 'Glencore', description: 'Laterite nickel-cobalt operation' },

      // Processing and battery production
      { id: 'gwangyang', name: 'POSCO Gwangyang', lat: 34.94, lng: 127.72, type: 'refinery', capacity: 100, unit: 'kt/year', country: 'South Korea', operator: 'POSCO', description: 'Integrated nickel refining and precursor production' },
      { id: 'tsingshan-morowali', name: 'Tsingshan Morowali', lat: -2.68, lng: 121.38, type: 'plant', production: 120, unit: 'kt/year', country: 'Indonesia', operator: 'Tsingshan', description: 'Massive nickel-stainless steel complex' },
    ]
  },

  steel: {
    id: 'steel',
    name: 'Steel',
    color: '#708090',
    unit: 'Mt/year',
    globalProduction: 1950,
    description: 'Most widely used metal alloy. Foundation of modern infrastructure, construction, and manufacturing.',
    category: 'metals',
    locations: [
      // China - Dominant producer
      { id: 'hebei-steel', name: 'Hebei Steel Region', lat: 39.72, lng: 114.55, type: 'plant', production: 240, unit: 'Mt/year', country: 'China', operator: 'HBIS/Shougang', description: 'Massive steel cluster near Beijing' },
      { id: 'baowu-steel', name: 'China Baowu Steel Group', lat: 31.30, lng: 121.22, type: 'plant', production: 120, unit: 'Mt/year', country: 'China', operator: 'China Baowu', description: 'World\'s largest steel company' },
      { id: 'ansteel', name: 'Ansteel Group', lat: 41.12, lng: 122.95, type: 'plant', production: 45, unit: 'Mt/year', country: 'China', operator: 'Ansteel', description: 'Major integrated steel mill' },
      { id: 'shagang', name: 'Jiangsu Shagang Group', lat: 31.88, lng: 120.52, type: 'plant', production: 42, unit: 'Mt/year', country: 'China', operator: 'Shagang', description: 'China\'s largest private steel producer' },

      // India
      { id: 'tata-jamshedpur', name: 'Tata Steel Jamshedpur', lat: 22.79, lng: 86.19, type: 'plant', production: 10, unit: 'Mt/year', country: 'India', operator: 'Tata Steel', description: 'Historic integrated steel plant' },
      { id: 'sail-bhilai', name: 'Bhilai Steel Plant', lat: 21.21, lng: 81.38, type: 'plant', production: 5.3, unit: 'Mt/year', country: 'India', operator: 'SAIL', description: 'Major Indian steel producer' },
      { id: 'jswsteel', name: 'JSW Steel Vijayanagar', lat: 15.17, lng: 76.58, type: 'plant', production: 13, unit: 'Mt/year', country: 'India', operator: 'JSW Steel', description: 'India\'s largest single-location steel plant' },

      // Japan
      { id: 'nippon-steel-kimitsu', name: 'Nippon Steel Kimitsu', lat: 35.33, lng: 139.87, type: 'plant', production: 9, unit: 'Mt/year', country: 'Japan', operator: 'Nippon Steel', description: 'Advanced integrated steel mill' },
      { id: 'jfe-fukuyama', name: 'JFE Fukuyama Works', lat: 34.43, lng: 133.37, type: 'plant', production: 8, unit: 'Mt/year', country: 'Japan', operator: 'JFE Steel', description: 'Major steelmaking complex' },

      // USA
      { id: 'ussteel-gary', name: 'U.S. Steel Gary Works', lat: 41.60, lng: -87.35, type: 'plant', production: 7, unit: 'Mt/year', country: 'USA', operator: 'U.S. Steel', description: 'Large integrated steel mill' },
      { id: 'nucor-decatur', name: 'Nucor Decatur', lat: 34.61, lng: -86.98, type: 'plant', production: 3, unit: 'Mt/year', country: 'USA', operator: 'Nucor', description: 'Major mini-mill steel producer' },

      // South Korea
      { id: 'posco-pohang', name: 'POSCO Pohang', lat: 36.02, lng: 129.37, type: 'plant', production: 21, unit: 'Mt/year', country: 'South Korea', operator: 'POSCO', description: 'World-class integrated steel works' },
      { id: 'posco-gwangyang', name: 'POSCO Gwangyang', lat: 34.90, lng: 127.73, type: 'plant', production: 18, unit: 'Mt/year', country: 'South Korea', operator: 'POSCO', description: 'Modern integrated steel mill' },

      // Germany
      { id: 'thyssenkrupp', name: 'ThyssenKrupp Duisburg', lat: 51.43, lng: 6.76, type: 'plant', production: 11, unit: 'Mt/year', country: 'Germany', operator: 'ThyssenKrupp', description: 'Europe\'s largest steel plant' },

      // Brazil
      { id: 'usiminas-ipatinga', name: 'Usiminas Ipatinga', lat: -19.47, lng: -42.54, type: 'plant', production: 9, unit: 'Mt/year', country: 'Brazil', operator: 'Usiminas', description: 'Major Latin American steel mill' },

      // Russia
      { id: 'magnitogorsk', name: 'Magnitogorsk Iron & Steel', lat: 53.42, lng: 59.05, type: 'plant', production: 12, unit: 'Mt/year', country: 'Russia', operator: 'MMK', description: 'One of Russia\'s largest steel producers' },

      // Turkey
      { id: 'erdemir', name: 'Ereğli Iron & Steel', lat: 41.28, lng: 31.42, type: 'plant', production: 9, unit: 'Mt/year', country: 'Turkey', operator: 'Erdemir', description: 'Largest integrated steel plant in Turkey' },

      // Additional China (more major producers)
      { id: 'shougang', name: 'Shougang Group', lat: 39.90, lng: 116.18, type: 'plant', production: 32, unit: 'Mt/year', country: 'China', operator: 'Shougang', description: 'Beijing-based major steel group' },
      { id: 'wuhan-iron', name: 'Wuhan Iron & Steel', lat: 30.63, lng: 114.35, type: 'plant', production: 38, unit: 'Mt/year', country: 'China', operator: 'Baowu', description: 'Central China major steel producer' },
      { id: 'shandong-steel', name: 'Shandong Iron & Steel', lat: 36.68, lng: 117.02, type: 'plant', production: 36, unit: 'Mt/year', country: 'China', operator: 'Shandong Steel', description: 'Coastal steel production hub' },
      { id: 'maanshan-steel', name: 'Maanshan Steel', lat: 31.67, lng: 118.48, type: 'plant', production: 20, unit: 'Mt/year', country: 'China', operator: 'Baowu', description: 'Yangtze region steel mill' },
      { id: 'benxi-steel', name: 'Benxi Steel', lat: 41.32, lng: 123.78, type: 'plant', production: 18, unit: 'Mt/year', country: 'China', operator: 'Benxi Steel', description: 'Northeastern steel producer' },
      { id: 'tangshan-steel', name: 'Tangshan Steel Cluster', lat: 39.63, lng: 118.18, type: 'plant', production: 52, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Major steel production cluster' },
      { id: 'panzhihua', name: 'Panzhihua Iron & Steel', lat: 26.55, lng: 101.72, type: 'plant', production: 14, unit: 'Mt/year', country: 'China', operator: 'Pangang Group', description: 'Southwest China vanadium-bearing steel' },
      { id: 'jinan-steel', name: 'Jinan Steel', lat: 36.65, lng: 117.12, type: 'plant', production: 12, unit: 'Mt/year', country: 'China', operator: 'Shandong Steel', description: 'Provincial steel producer' },

      // India (additional)
      { id: 'sail-rourkela', name: 'Rourkela Steel Plant', lat: 22.22, lng: 84.85, type: 'plant', production: 4.5, unit: 'Mt/year', country: 'India', operator: 'SAIL', description: 'Major SAIL facility' },
      { id: 'sail-bokaro', name: 'Bokaro Steel Plant', lat: 23.67, lng: 86.15, type: 'plant', production: 4.8, unit: 'Mt/year', country: 'India', operator: 'SAIL', description: 'Large integrated steel plant' },
      { id: 'rinl-vizag', name: 'Visakhapatnam Steel Plant', lat: 17.70, lng: 83.33, type: 'plant', production: 7.3, unit: 'Mt/year', country: 'India', operator: 'RINL', description: 'Coastal steel plant' },
      { id: 'jindal-angul', name: 'Jindal Steel Angul', lat: 20.83, lng: 85.10, type: 'plant', production: 12, unit: 'Mt/year', country: 'India', operator: 'JSPL', description: 'Integrated steel complex' },
      { id: 'essar-hazira', name: 'Essar Steel Hazira', lat: 21.10, lng: 72.63, type: 'plant', production: 10, unit: 'Mt/year', country: 'India', operator: 'ArcelorMittal', description: 'Coastal steel facility' },
      { id: 'bhushan-steel', name: 'Bhushan Steel Odisha', lat: 20.73, lng: 84.90, type: 'plant', production: 5, unit: 'Mt/year', country: 'India', operator: 'Tata Steel', description: 'Eastern India steel plant' },

      // Japan (additional)
      { id: 'nippon-steel-oita', name: 'Nippon Steel Oita', lat: 33.27, lng: 131.67, type: 'plant', production: 7.5, unit: 'Mt/year', country: 'Japan', operator: 'Nippon Steel', description: 'Kyushu integrated mill' },
      { id: 'nippon-steel-nagoya', name: 'Nippon Steel Nagoya', lat: 35.10, lng: 136.88, type: 'plant', production: 8.2, unit: 'Mt/year', country: 'Japan', operator: 'Nippon Steel', description: 'Central Japan steel works' },
      { id: 'jfe-chiba', name: 'JFE Chiba Works', lat: 35.57, lng: 140.03, type: 'plant', production: 7, unit: 'Mt/year', country: 'Japan', operator: 'JFE Steel', description: 'Tokyo Bay area steel mill' },

      // USA (additional)
      { id: 'cleveland-cliffs-burns', name: 'Cleveland-Cliffs Burns Harbor', lat: 41.63, lng: -87.13, type: 'plant', production: 5, unit: 'Mt/year', country: 'USA', operator: 'Cleveland-Cliffs', description: 'Great Lakes steel mill' },
      { id: 'nucor-crawfordsville', name: 'Nucor Crawfordsville', lat: 40.04, lng: -87.00, type: 'plant', production: 2.5, unit: 'Mt/year', country: 'USA', operator: 'Nucor', description: 'Pioneering thin-slab caster' },
      { id: 'steel-dynamics', name: 'Steel Dynamics Indiana', lat: 41.07, lng: -85.03, type: 'plant', production: 6, unit: 'Mt/year', country: 'USA', operator: 'SDI', description: 'Major mini-mill producer' },
      { id: 'arcelormittal-indiana', name: 'ArcelorMittal Indiana Harbor', lat: 41.65, lng: -87.42, type: 'plant', production: 6.2, unit: 'Mt/year', country: 'USA', operator: 'ArcelorMittal', description: 'Integrated steel facility' },
      { id: 'big-river-steel', name: 'Big River Steel Arkansas', lat: 35.52, lng: -90.00, type: 'plant', production: 3.3, unit: 'Mt/year', country: 'USA', operator: 'US Steel', description: 'Modern flex mill' },

      // Europe (additional)
      { id: 'arcelormittal-ghent', name: 'ArcelorMittal Gent', lat: 51.27, lng: 3.75, type: 'plant', production: 7, unit: 'Mt/year', country: 'Belgium', operator: 'ArcelorMittal', description: 'Major Benelux steel plant' },
      { id: 'arcelormittal-dunkirk', name: 'ArcelorMittal Dunkerque', lat: 51.03, lng: 2.38, type: 'plant', production: 7, unit: 'Mt/year', country: 'France', operator: 'ArcelorMittal', description: 'Largest French steel plant' },
      { id: 'arcelormittal-fos', name: 'ArcelorMittal Fos-sur-Mer', lat: 43.43, lng: 4.93, type: 'plant', production: 6, unit: 'Mt/year', country: 'France', operator: 'ArcelorMittal', description: 'Mediterranean steel facility' },
      { id: 'arcelormittal-eisenhuttenstadt', name: 'ArcelorMittal Eisenhüttenstadt', lat: 52.15, lng: 14.65, type: 'plant', production: 2.5, unit: 'Mt/year', country: 'Germany', operator: 'ArcelorMittal', description: 'Eastern German steel plant' },
      { id: 'salzgitter', name: 'Salzgitter AG', lat: 52.15, lng: 10.33, type: 'plant', production: 7, unit: 'Mt/year', country: 'Germany', operator: 'Salzgitter AG', description: 'Major German steel producer' },
      { id: 'tata-ijmuiden', name: 'Tata Steel IJmuiden', lat: 52.47, lng: 4.60, type: 'plant', production: 7, unit: 'Mt/year', country: 'Netherlands', operator: 'Tata Steel', description: 'Largest Dutch steel plant' },
      { id: 'liberty-galati', name: 'Liberty Galați', lat: 45.43, lng: 28.05, type: 'plant', production: 3.5, unit: 'Mt/year', country: 'Romania', operator: 'Liberty Steel', description: 'Major Eastern European mill' },
      { id: 'arcelormittal-asturias', name: 'ArcelorMittal Asturias', lat: 43.52, lng: -5.93, type: 'plant', production: 5, unit: 'Mt/year', country: 'Spain', operator: 'ArcelorMittal', description: 'Spanish integrated steel mill' },
      { id: 'ilva-taranto', name: 'Acciaierie d\'Italia Taranto', lat: 40.48, lng: 17.23, type: 'plant', production: 8, unit: 'Mt/year', country: 'Italy', operator: 'Acciaierie d\'Italia', description: 'Largest European integrated mill' },
      { id: 'voestalpine-linz', name: 'voestalpine Linz', lat: 48.28, lng: 14.33, type: 'plant', production: 5, unit: 'Mt/year', country: 'Austria', operator: 'voestalpine', description: 'Austrian integrated steel plant' },
      { id: 'tata-port-talbot', name: 'Tata Steel Port Talbot', lat: 51.58, lng: -3.80, type: 'plant', production: 4, unit: 'Mt/year', country: 'UK', operator: 'Tata Steel', description: 'UK\'s largest steel plant' },
      { id: 'british-steel-scunthorpe', name: 'British Steel Scunthorpe', lat: 53.58, lng: -0.65, type: 'plant', production: 3, unit: 'Mt/year', country: 'UK', operator: 'Jingye Group', description: 'Major UK steel producer' },

      // Russia (additional)
      { id: 'nlmk-lipetsk', name: 'NLMK Lipetsk', lat: 52.63, lng: 39.65, type: 'plant', production: 14, unit: 'Mt/year', country: 'Russia', operator: 'NLMK', description: 'Russia\'s largest steel producer' },
      { id: 'severstal', name: 'Severstal Cherepovets', lat: 59.13, lng: 37.90, type: 'plant', production: 11, unit: 'Mt/year', country: 'Russia', operator: 'Severstal', description: 'Northern Russia steel mill' },
      { id: 'evraz-ntmk', name: 'Evraz NTMK', lat: 57.92, lng: 59.97, type: 'plant', production: 6, unit: 'Mt/year', country: 'Russia', operator: 'Evraz', description: 'Ural region steel plant' },

      // Ukraine
      { id: 'metinvest-mariupol', name: 'Metinvest Mariupol', lat: 47.10, lng: 37.53, type: 'plant', production: 10, unit: 'Mt/year', country: 'Ukraine', operator: 'Metinvest', description: 'Major Black Sea steel complex' },
      { id: 'arcelormittal-kryvyi', name: 'ArcelorMittal Kryvyi Rih', lat: 47.91, lng: 33.38, type: 'plant', production: 6, unit: 'Mt/year', country: 'Ukraine', operator: 'ArcelorMittal', description: 'Integrated Ukrainian steel mill' },

      // Latin America
      { id: 'gerdau-brazil', name: 'Gerdau Brazilian Mills', lat: -23.53, lng: -46.63, type: 'plant', production: 15, unit: 'Mt/year', country: 'Brazil', operator: 'Gerdau', description: 'Major Brazilian steel group' },
      { id: 'ternium-argentina', name: 'Ternium Siderar', lat: -34.47, lng: -58.55, type: 'plant', production: 4, unit: 'Mt/year', country: 'Argentina', operator: 'Ternium', description: 'Largest Argentine steel mill' },
      { id: 'ternium-mexico', name: 'Ternium Mexico', lat: 25.80, lng: -100.35, type: 'plant', production: 5, unit: 'Mt/year', country: 'Mexico', operator: 'Ternium', description: 'Major Mexican steel producer' },

      // Middle East
      { id: 'emirates-steel', name: 'Emirates Steel', lat: 24.33, lng: 54.52, type: 'plant', production: 3.5, unit: 'Mt/year', country: 'UAE', operator: 'Emirates Steel', description: 'Major Gulf steel producer' },
      { id: 'hadeed-saudi', name: 'Hadeed Steel', lat: 26.30, lng: 50.17, type: 'plant', production: 6, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Integrated Saudi steel mill' },
      { id: 'esfahan-steel', name: 'Esfahan Steel Company', lat: 32.65, lng: 51.67, type: 'plant', production: 3.2, unit: 'Mt/year', country: 'Iran', operator: 'ESCO', description: 'Major Iranian integrated mill' },

      // Southeast Asia
      { id: 'hoa-phat', name: 'Hoa Phat Hai Duong', lat: 20.93, lng: 106.33, type: 'plant', production: 8, unit: 'Mt/year', country: 'Vietnam', operator: 'Hoa Phat Group', description: 'Vietnam\'s largest steel producer' },
      { id: 'formosa-ha-tinh', name: 'Formosa Ha Tinh Steel', lat: 18.35, lng: 105.90, type: 'plant', production: 7, unit: 'Mt/year', country: 'Vietnam', operator: 'Formosa Plastics', description: 'Major coastal integrated mill' },
      { id: 'krakatau-steel', name: 'Krakatau Steel', lat: -6.03, lng: 106.13, type: 'plant', production: 3, unit: 'Mt/year', country: 'Indonesia', operator: 'Krakatau Steel', description: 'Indonesian integrated mill' },
      { id: 'hyundai-steel', name: 'Hyundai Steel Dangjin', lat: 36.90, lng: 126.63, type: 'plant', production: 17, unit: 'Mt/year', country: 'South Korea', operator: 'Hyundai Steel', description: 'Integrated automotive steel mill' },

      // Australia
      { id: 'bluescope-port-kembla', name: 'BlueScope Port Kembla', lat: -34.48, lng: 150.90, type: 'plant', production: 5, unit: 'Mt/year', country: 'Australia', operator: 'BlueScope', description: 'Australia\'s largest steel mill' },
      { id: 'liberty-whyalla', name: 'Liberty Whyalla', lat: -33.03, lng: 137.52, type: 'plant', production: 1.2, unit: 'Mt/year', country: 'Australia', operator: 'Liberty Steel', description: 'South Australian steel plant' },

      // Africa
      { id: 'arcelormittal-sa', name: 'ArcelorMittal South Africa', lat: -26.35, lng: 27.87, type: 'plant', production: 6, unit: 'Mt/year', country: 'South Africa', operator: 'ArcelorMittal', description: 'Major African steel producer' },
      { id: 'egypt-steel', name: 'Egyptian Steel', lat: 30.55, lng: 31.00, type: 'plant', production: 5, unit: 'Mt/year', country: 'Egypt', operator: 'Egypt Steel', description: 'North African steel mill' },
    ]
  },

  gold: {
    id: 'gold',
    name: 'Gold',
    color: '#FFD700',
    unit: 'tonnes/year',
    globalProduction: 3300,
    description: 'Precious metal for jewelry, investment, electronics, and central bank reserves. Ultimate store of value.',
    category: 'metals',
    locations: [
      { id: 'nevada-gold', name: 'Nevada Gold Mines', lat: 40.50, lng: -116.50, type: 'mine', production: 115, unit: 'tonnes/year', country: 'USA', operator: 'Nevada Gold Mines JV', description: 'World\'s largest gold mining complex' },
      { id: 'muruntau', name: 'Muruntau', lat: 41.57, lng: 64.58, type: 'mine', production: 66, unit: 'tonnes/year', country: 'Uzbekistan', operator: 'Navoi Mining', description: 'Largest open-pit gold mine by area' },
      { id: 'olimpiada', name: 'Olimpiada Mine', lat: 58.40, lng: 92.20, type: 'mine', production: 42, unit: 'tonnes/year', country: 'Russia', operator: 'Polyus', description: 'Largest gold mine in Russia' },
      { id: 'pueblo-viejo', name: 'Pueblo Viejo', lat: 19.02, lng: -70.17, type: 'mine', production: 28, unit: 'tonnes/year', country: 'Dominican Republic', operator: 'Barrick/Newmont', description: 'Major Caribbean gold mine' },
      { id: 'boddington', name: 'Boddington', lat: -32.80, lng: 116.50, type: 'mine', production: 26, unit: 'tonnes/year', country: 'Australia', operator: 'Newmont', description: 'Largest gold mine in Australia' },
      { id: 'super-pit', name: 'Super Pit Kalgoorlie', lat: -30.78, lng: 121.48, type: 'mine', production: 22, unit: 'tonnes/year', country: 'Australia', operator: 'Saracen/Northern Star', description: 'Iconic open-pit gold mine' },
      { id: 'lagunas-norte', name: 'Lagunas Norte', lat: -8.00, lng: -78.30, type: 'mine', production: 18, unit: 'tonnes/year', country: 'Peru', operator: 'Barrick Gold', description: 'High-altitude gold mine' },
      { id: 'yanacocha', name: 'Yanacocha', lat: -6.98, lng: -78.50, type: 'mine', production: 24, unit: 'tonnes/year', country: 'Peru', operator: 'Newmont', description: 'Largest gold mine in South America' },
      { id: 'kibali', name: 'Kibali Mine', lat: 3.05, lng: 28.15, type: 'mine', production: 21, unit: 'tonnes/year', country: 'DRC', operator: 'Barrick/AngloGold', description: 'Major African gold mine' },
      { id: 'loulo-gounkoto', name: 'Loulo-Gounkoto', lat: 13.40, lng: -10.68, type: 'mine', production: 20, unit: 'tonnes/year', country: 'Mali', operator: 'Barrick Gold', description: 'Large West African gold complex' },
      { id: 'mponeng', name: 'Mponeng Mine', lat: -26.50, lng: 27.45, type: 'mine', production: 12, unit: 'tonnes/year', country: 'South Africa', operator: 'AngloGold Ashanti', description: 'World\'s deepest gold mine (4km)' },
      { id: 'bulyanhulu', name: 'Bulyanhulu', lat: -3.33, lng: 32.68, type: 'mine', production: 11, unit: 'tonnes/year', country: 'Tanzania', operator: 'Acacia/Barrick', description: 'Underground gold mine' },
      { id: 'tasiast', name: 'Tasiast Mine', lat: 19.82, lng: -15.52, type: 'mine', production: 13, unit: 'tonnes/year', country: 'Mauritania', operator: 'Kinross Gold', description: 'Large Saharan gold deposit' },
      { id: 'hemlo', name: 'Hemlo Mine', lat: 48.70, lng: -85.88, type: 'mine', production: 9, unit: 'tonnes/year', country: 'Canada', operator: 'Barrick Gold', description: 'Major Canadian gold mine' },
      { id: 'veladero', name: 'Veladero', lat: -29.27, lng: -70.08, type: 'mine', production: 16, unit: 'tonnes/year', country: 'Argentina', operator: 'Barrick Gold', description: 'High-altitude Andean gold mine' },

      // Additional major gold mines worldwide
      { id: 'cadia-valley', name: 'Cadia Valley', lat: -33.47, lng: 148.98, type: 'mine', production: 31, unit: 'tonnes/year', country: 'Australia', operator: 'Newcrest Mining', description: 'Large-scale underground gold-copper mine' },
      { id: 'lihir', name: 'Lihir Mine', lat: -3.13, lng: 152.63, type: 'mine', production: 29, unit: 'tonnes/year', country: 'Papua New Guinea', operator: 'Newcrest Mining', description: 'Island volcanic gold deposit' },
      { id: 'goldstrike', name: 'Goldstrike/Cortez', lat: 40.92, lng: -116.28, type: 'mine', production: 45, unit: 'tonnes/year', country: 'USA', operator: 'Nevada Gold Mines', description: 'Major Nevada gold complex' },
      { id: 'carlin-trend', name: 'Carlin Trend Mines', lat: 40.70, lng: -116.30, type: 'mine', production: 38, unit: 'tonnes/year', country: 'USA', operator: 'Nevada Gold Mines', description: 'Sediment-hosted gold district' },
      { id: 'turquoise-ridge', name: 'Turquoise Ridge', lat: 40.82, lng: -117.32, type: 'mine', production: 15, unit: 'tonnes/year', country: 'USA', operator: 'Nevada Gold Mines', description: 'Underground gold mine' },
      { id: 'fort-knox', name: 'Fort Knox Mine', lat: 65.00, lng: -147.40, type: 'mine', production: 12, unit: 'tonnes/year', country: 'USA', operator: 'Kinross Gold', description: 'Alaska gold mine' },
      { id: 'red-lake', name: 'Red Lake Complex', lat: 51.03, lng: -93.83, type: 'mine', production: 14, unit: 'tonnes/year', country: 'Canada', operator: 'Evolution Mining', description: 'High-grade Canadian gold' },
      { id: 'detour-lake', name: 'Detour Lake', lat: 48.50, lng: -81.67, type: 'mine', production: 20, unit: 'tonnes/year', country: 'Canada', operator: 'Kirkland Lake Gold', description: 'Large open-pit gold mine' },
      { id: 'malartic', name: 'Canadian Malartic', lat: 48.13, lng: -78.13, type: 'mine', production: 18, unit: 'tonnes/year', country: 'Canada', operator: 'Agnico Eagle/Yamana', description: 'Quebec open-pit gold mine' },
      { id: 'meadowbank', name: 'Meadowbank', lat: 65.10, lng: -96.02, type: 'mine', production: 10, unit: 'tonnes/year', country: 'Canada', operator: 'Agnico Eagle', description: 'Nunavut gold mine' },
      { id: 'cerro-negro', name: 'Cerro Negro', lat: -47.67, lng: -70.08, type: 'mine', production: 13, unit: 'tonnes/year', country: 'Argentina', operator: 'Newmont', description: 'Patagonian gold mine' },
      { id: 'merian', name: 'Merian Mine', lat: 4.35, lng: -54.52, type: 'mine', production: 14, unit: 'tonnes/year', country: 'Suriname', operator: 'Newmont', description: 'Rainforest gold operation' },
      { id: 'penasquito', name: 'Peñasquito', lat: 24.73, lng: -101.43, type: 'mine', production: 16, unit: 'tonnes/year', country: 'Mexico', operator: 'Newmont', description: 'Large polymetallic mine' },
      { id: 'natalka', name: 'Natalka Mine', lat: 62.45, lng: 155.13, type: 'mine', production: 31, unit: 'tonnes/year', country: 'Russia', operator: 'Polyus', description: 'Far East Russian gold mine' },
      { id: 'blagodatnoye', name: 'Blagodatnoye', lat: 58.17, lng: 91.83, type: 'mine', production: 19, unit: 'tonnes/year', country: 'Russia', operator: 'Polyus', description: 'Siberian gold deposit' },
      { id: 'kumtor', name: 'Kumtor Mine', lat: 41.83, lng: 78.20, type: 'mine', production: 17, unit: 'tonnes/year', country: 'Kyrgyzstan', operator: 'Centerra Gold', description: 'High-altitude Central Asian gold mine' },
      { id: 'sukho-log', name: 'Sukhoi Log', lat: 57.78, lng: 116.62, type: 'mine', production: 24, unit: 'tonnes/year', country: 'Russia', operator: 'Polyus', description: 'Large refractory gold deposit' },
      { id: 'geita', name: 'Geita Mine', lat: -2.88, lng: 32.23, type: 'mine', production: 17, unit: 'tonnes/year', country: 'Tanzania', operator: 'AngloGold Ashanti', description: 'Major Tanzanian gold mine' },
      { id: 'siguiri', name: 'Siguiri Mine', lat: 11.42, lng: -9.17, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Guinea', operator: 'AngloGold Ashanti', description: 'West African gold operation' },
      { id: 'tropicana', name: 'Tropicana', lat: -28.55, lng: 123.62, type: 'mine', production: 16, unit: 'tonnes/year', country: 'Australia', operator: 'AngloGold/Regis', description: 'Remote Western Australia gold mine' },
      { id: 'telfer', name: 'Telfer Mine', lat: -21.72, lng: 122.18, type: 'mine', production: 19, unit: 'tonnes/year', country: 'Australia', operator: 'Newcrest Mining', description: 'Large desert gold-copper mine' },
      { id: 'sunrise-dam', name: 'Sunrise Dam', lat: -29.22, lng: 122.30, type: 'mine', production: 9, unit: 'tonnes/year', country: 'Australia', operator: 'AngloGold Ashanti', description: 'Australian underground-open pit hybrid' },
      { id: 'tanami', name: 'Tanami Gold Mine', lat: -20.20, lng: 130.80, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Australia', operator: 'Newmont', description: 'Northern Territory gold mine' },
      { id: 'porgera', name: 'Porgera Mine', lat: -5.47, lng: 143.10, type: 'mine', production: 18, unit: 'tonnes/year', country: 'Papua New Guinea', operator: 'Barrick/Zijin', description: 'High-grade PNG gold mine' },
      { id: 'obuasi', name: 'Obuasi Mine', lat: 6.20, lng: -1.67, type: 'mine', production: 14, unit: 'tonnes/year', country: 'Ghana', operator: 'AngloGold Ashanti', description: 'Historic underground gold mine' },
      { id: 'iduapriem', name: 'Iduapriem Mine', lat: 5.20, lng: -2.13, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Ghana', operator: 'AngloGold Ashanti', description: 'Ghanaian open-pit gold mine' },
      { id: 'ahafo', name: 'Ahafo Mine', lat: 7.32, lng: -2.57, type: 'mine', production: 18, unit: 'tonnes/year', country: 'Ghana', operator: 'Newmont', description: 'Major Ghanaian gold complex' },
      { id: 'akyem', name: 'Akyem Mine', lat: 6.32, lng: -0.97, type: 'mine', production: 13, unit: 'tonnes/year', country: 'Ghana', operator: 'Newmont', description: 'Open-pit gold mine' },
      { id: 'cerro-vanguardia', name: 'Cerro Vanguardia', lat: -48.50, lng: -69.05, type: 'mine', production: 7, unit: 'tonnes/year', country: 'Argentina', operator: 'AngloGold Ashanti', description: 'Southern Patagonia gold mine' },
      { id: 'shandong-gold', name: 'Shandong Gold Mines', lat: 37.40, lng: 119.80, type: 'mine', production: 45, unit: 'tonnes/year', country: 'China', operator: 'Shandong Gold', description: 'Major Chinese gold producer' },
      { id: 'zijinshan', name: 'Zijinshan Mine', lat: 25.18, lng: 116.37, type: 'mine', production: 22, unit: 'tonnes/year', country: 'China', operator: 'Zijin Mining', description: 'Large gold-copper mine' },
      { id: 'jiama', name: 'Jiama Mine', lat: 29.97, lng: 91.73, type: 'mine', production: 9, unit: 'tonnes/year', country: 'China', operator: 'China Gold', description: 'Tibetan gold-copper mine' },

      // Refineries
      { id: 'rand-refinery', name: 'Rand Refinery', lat: -26.13, lng: 28.07, type: 'refinery', capacity: 600, unit: 'tonnes/year', country: 'South Africa', operator: 'Rand Refinery', description: 'World\'s largest integrated gold refinery' },
      { id: 'perth-mint', name: 'Perth Mint', lat: -31.95, lng: 115.86, type: 'refinery', capacity: 400, unit: 'tonnes/year', country: 'Australia', operator: 'Gold Corporation', description: 'Australia\'s official precious metals mint' },
      { id: 'valcambi', name: 'Valcambi Refinery', lat: 46.20, lng: 8.97, type: 'refinery', capacity: 1500, unit: 'tonnes/year', country: 'Switzerland', operator: 'Valcambi', description: 'Major Swiss precious metals refinery' },
      { id: 'argor-heraeus', name: 'Argor-Heraeus', lat: 46.18, lng: 6.93, type: 'refinery', capacity: 400, unit: 'tonnes/year', country: 'Switzerland', operator: 'Argor-Heraeus', description: 'Swiss gold refinery' },
      { id: 'johnson-matthey', name: 'Johnson Matthey Refinery', lat: 51.48, lng: -0.28, type: 'refinery', capacity: 300, unit: 'tonnes/year', country: 'UK', operator: 'Johnson Matthey', description: 'Historic London gold refinery' },
    ]
  },

  silver: {
    id: 'silver',
    name: 'Silver',
    color: '#C0C0C0',
    unit: 'kt/year',
    globalProduction: 27,
    description: 'Precious and industrial metal used in jewelry, electronics, solar panels, and photography.',
    category: 'metals',
    locations: [
      { id: 'cannington', name: 'Cannington Mine', lat: -21.83, lng: 140.07, type: 'mine', production: 1.2, unit: 'kt/year', country: 'Australia', operator: 'South32', description: 'World\'s largest silver-lead-zinc mine' },
      { id: 'fresnillo', name: 'Fresnillo', lat: 23.17, lng: -102.87, type: 'mine', production: 0.95, unit: 'kt/year', country: 'Mexico', operator: 'Fresnillo plc', description: 'World\'s largest primary silver mine' },
      { id: 'saucito', name: 'Saucito Mine', lat: 23.20, lng: -102.90, type: 'mine', production: 0.62, unit: 'kt/year', country: 'Mexico', operator: 'Fresnillo plc', description: 'High-grade silver mine' },
      { id: 'penasquito', name: 'Peñasquito', lat: 24.38, lng: -101.42, type: 'mine', production: 0.58, unit: 'kt/year', country: 'Mexico', operator: 'Newmont', description: 'Mexico\'s largest gold-silver mine' },
      { id: 'antamina-silver', name: 'Antamina', lat: -9.35, lng: -77.10, type: 'mine', production: 0.55, unit: 'kt/year', country: 'Peru', operator: 'Glencore/BHP', description: 'Polymetallic mine' },
      { id: 'uchucchacua', name: 'Uchucchacua Mine', lat: -10.57, lng: -76.73, type: 'mine', production: 0.42, unit: 'kt/year', country: 'Peru', operator: 'Buenaventura', description: 'High-grade underground silver mine' },
      { id: 'rudna', name: 'Rudna Mine', lat: 51.50, lng: 16.20, type: 'mine', production: 0.48, unit: 'kt/year', country: 'Poland', operator: 'KGHM', description: 'Major copper-silver mine' },
      { id: 'dukat', name: 'Dukat Mine', lat: 62.50, lng: 152.60, type: 'mine', production: 0.38, unit: 'kt/year', country: 'Russia', operator: 'Polymetal', description: 'Major Russian silver mine' },
      { id: 'kyzyl', name: 'Kyzyl Mine', lat: 51.67, lng: 84.97, type: 'mine', production: 0.32, unit: 'kt/year', country: 'Russia', operator: 'Polymetal', description: 'Gold-silver mine in Altai' },
      { id: 'greens-creek', name: 'Greens Creek', lat: 58.08, lng: -134.62, type: 'mine', production: 0.28, unit: 'kt/year', country: 'USA', operator: 'Hecla Mining', description: 'Underground polymetallic mine in Alaska' },
    ]
  },

  uranium: {
    id: 'uranium',
    name: 'Uranium',
    color: '#00FF00',
    unit: 'kt U₃O₈/year',
    globalProduction: 54,
    description: 'Nuclear fuel for clean baseload electricity generation. Critical for carbon-free energy future.',
    category: 'energy',
    locations: [
      { id: 'kazakhstan-isr', name: 'Kazakhstan ISR Operations', lat: 47.00, lng: 67.00, type: 'mine', production: 22, unit: 'kt/year', country: 'Kazakhstan', operator: 'Kazatomprom', description: 'World\'s largest uranium producer using in-situ recovery' },
      { id: 'cigar-lake', name: 'Cigar Lake', lat: 58.05, lng: -104.50, type: 'mine', production: 8, unit: 'kt/year', country: 'Canada', operator: 'Cameco/Orano', description: 'World\'s highest grade uranium mine (18% U₃O₈)' },
      { id: 'mcarthur-river', name: 'McArthur River', lat: 57.77, lng: -105.05, type: 'mine', production: 7, unit: 'kt/year', country: 'Canada', operator: 'Cameco', description: 'World\'s largest high-grade uranium deposit' },
      { id: 'olympic-dam-u', name: 'Olympic Dam', lat: -30.47, lng: 136.88, type: 'mine', production: 4.5, unit: 'kt/year', country: 'Australia', operator: 'BHP', description: 'World\'s largest uranium deposit by-product' },
      { id: 'rossing', name: 'Rössing Mine', lat: -22.50, lng: 14.98, type: 'mine', production: 3, unit: 'kt/year', country: 'Namibia', operator: 'China National Nuclear', description: 'One of world\'s largest open-pit uranium mines' },
      { id: 'husab', name: 'Husab Mine', lat: -22.52, lng: 14.85, type: 'mine', production: 5.5, unit: 'kt/year', country: 'Namibia', operator: 'Swakop Uranium', description: 'One of world\'s largest uranium mines' },
      { id: 'imouraren', name: 'Imouraren', lat: 18.83, lng: 7.92, type: 'mine', production: 3.5, unit: 'kt/year', country: 'Niger', operator: 'Orano', description: 'Large uranium deposit in Sahara' },
      { id: 'ranger', name: 'Ranger Mine', lat: -12.70, lng: 132.90, type: 'mine', production: 1.5, unit: 'kt/year', country: 'Australia', operator: 'ERA', description: 'Historic uranium mine now in rehabilitation' },
      { id: 'beverley', name: 'Beverley Mine', lat: -30.22, lng: 139.52, type: 'mine', production: 1.2, unit: 'kt/year', country: 'Australia', operator: 'Heathgate', description: 'ISR uranium operation' },
    ]
  },

  rare_earths: {
    id: 'rare_earths',
    name: 'Rare Earth Elements',
    color: '#FF69B4',
    unit: 'kt REO/year',
    globalProduction: 300,
    description: 'Critical elements for high-tech applications, permanent magnets, catalysts, and green technologies.',
    category: 'critical',
    locations: [
      { id: 'bayan-obo', name: 'Bayan Obo', lat: 41.77, lng: 109.97, type: 'mine', production: 170, unit: 'kt REO/year', country: 'China', operator: 'China Northern Rare Earth', description: 'World\'s largest rare earth mine, 80% of China\'s production' },
      { id: 'sichuan-ree', name: 'Sichuan REE Mines', lat: 28.85, lng: 102.47, type: 'mine', production: 35, unit: 'kt REO/year', country: 'China', operator: 'China Minmetals', description: 'Ion-adsorption clay deposits' },
      { id: 'jiangxi-ree', name: 'Jiangxi REE District', lat: 25.85, lng: 114.95, type: 'mine', production: 28, unit: 'kt REO/year', country: 'China', operator: 'China Southern Rare Earth', description: 'Heavy rare earth production' },
      { id: 'mountain-pass', name: 'Mountain Pass', lat: 35.48, lng: -115.53, type: 'mine', production: 43, unit: 'kt REO/year', country: 'USA', operator: 'MP Materials', description: 'Largest rare earth mine outside China' },
      { id: 'mount-weld', name: 'Mount Weld', lat: -28.87, lng: 122.38, type: 'mine', production: 20, unit: 'kt REO/year', country: 'Australia', operator: 'Lynas Rare Earths', description: 'High-grade rare earth deposit' },
      { id: 'lynas-malaysia', name: 'Lynas Processing Plant', lat: 3.60, lng: 103.30, type: 'refinery', capacity: 22, unit: 'kt REO/year', country: 'Malaysia', operator: 'Lynas Rare Earths', description: 'Major rare earth processing facility outside China' },
      { id: 'baotou-processing', name: 'Baotou REE Plant', lat: 40.65, lng: 109.82, type: 'refinery', capacity: 180, unit: 'kt REO/year', country: 'China', operator: 'China Northern Rare Earth', description: 'World\'s largest rare earth processing facility' },
    ]
  },

  cobalt: {
    id: 'cobalt',
    name: 'Cobalt',
    color: '#0047AB',
    unit: 'kt/year',
    globalProduction: 210,
    description: 'Critical battery material for electric vehicles, superalloys for jet engines, and industrial catalysts.',
    category: 'critical',
    locations: [
      { id: 'mutanda', name: 'Mutanda', lat: -10.93, lng: 27.57, type: 'mine', production: 28, unit: 'kt/year', country: 'DRC', operator: 'Glencore', description: 'World\'s largest cobalt mine' },
      { id: 'tenke-fungurume-co', name: 'Tenke Fungurume', lat: -10.60, lng: 26.10, type: 'mine', production: 18, unit: 'kt/year', country: 'DRC', operator: 'China Molybdenum', description: 'Major copper-cobalt mine' },
      { id: 'kolwezi', name: 'Kolwezi Mining District', lat: -10.72, lng: 25.47, type: 'mine', production: 35, unit: 'kt/year', country: 'DRC', operator: 'Multiple operators', description: 'Heart of global cobalt production' },
      { id: 'kamoto', name: 'Kamoto Copper', lat: -10.67, lng: 25.43, type: 'mine', production: 22, unit: 'kt/year', country: 'DRC', operator: 'Glencore', description: 'Major copper-cobalt operation' },
      { id: 'voiseys-bay-co', name: 'Voisey\'s Bay', lat: 56.33, lng: -61.72, type: 'mine', production: 3.2, unit: 'kt/year', country: 'Canada', operator: 'Vale', description: 'Nickel-copper-cobalt mine' },
      { id: 'ambatovy', name: 'Ambatovy', lat: -18.85, lng: 48.32, type: 'mine', production: 5.5, unit: 'kt/year', country: 'Madagascar', operator: 'Sherritt/Sumitomo', description: 'Nickel-cobalt laterite project' },
      { id: 'murrin-murrin-co', name: 'Murrin Murrin', lat: -28.75, lng: 121.22, type: 'mine', production: 3.8, unit: 'kt/year', country: 'Australia', operator: 'Glencore', description: 'Nickel-cobalt operation' },
      { id: 'norilsk-co', name: 'Norilsk Nickel', lat: 69.36, lng: 88.20, type: 'mine', production: 6.5, unit: 'kt/year', country: 'Russia', operator: 'Norilsk Nickel', description: 'By-product cobalt from nickel-copper mining' },
    ]
  },

  zinc: {
    id: 'zinc',
    name: 'Zinc',
    color: '#7F7F7F',
    unit: 'Mt/year',
    globalProduction: 13,
    description: 'Corrosion-resistant coating for steel (galvanizing), die-casting alloys, and battery applications.',
    category: 'metals',
    locations: [
      { id: 'red-dog', name: 'Red Dog Mine', lat: 68.07, lng: -162.83, type: 'mine', production: 0.62, unit: 'Mt/year', country: 'USA', operator: 'Teck Resources', description: 'World\'s largest zinc mine, Arctic Alaska' },
      { id: 'rampura-agucha', name: 'Rampura Agucha', lat: 27.60, lng: 74.70, type: 'mine', production: 0.48, unit: 'Mt/year', country: 'India', operator: 'Hindustan Zinc', description: 'One of world\'s largest zinc-lead mines' },
      { id: 'antamina-zn', name: 'Antamina', lat: -9.35, lng: -77.10, type: 'mine', production: 0.42, unit: 'Mt/year', country: 'Peru', operator: 'Glencore/BHP/Teck', description: 'Polymetallic mine' },
      { id: 'cerro-lindo', name: 'Cerro Lindo', lat: -13.17, lng: -75.72, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Peru', operator: 'Nexa Resources', description: 'Underground zinc mine' },
      { id: 'mount-isa-zn', name: 'Mount Isa Mines', lat: -20.73, lng: 139.50, type: 'mine', production: 0.32, unit: 'Mt/year', country: 'Australia', operator: 'Glencore', description: 'Historic zinc-lead-silver district' },
      { id: 'century', name: 'George Fisher Mine', lat: -20.72, lng: 139.49, type: 'mine', production: 0.22, unit: 'Mt/year', country: 'Australia', operator: 'Glencore', description: 'Underground zinc mine' },
      { id: 'zhaiping', name: 'Zhaiping Mine', lat: 26.32, lng: 108.85, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'China', operator: 'Zijin Mining', description: 'Major zinc mine in Guizhou' },
      { id: 'lanping', name: 'Lanping Mining District', lat: 26.47, lng: 99.42, type: 'mine', production: 0.28, unit: 'Mt/year', country: 'China', operator: 'China Minmetals', description: 'Major lead-zinc district' },
    ]
  },

  phosphate: {
    id: 'phosphate',
    name: 'Phosphate',
    color: '#DAA520',
    unit: 'Mt P₂O₅/year',
    globalProduction: 240,
    description: 'Essential nutrient for fertilizers. Critical for global food security and agricultural productivity.',
    category: 'minerals',
    locations: [
      { id: 'khouribga', name: 'Khouribga', lat: 32.88, lng: -6.91, type: 'mine', production: 38, unit: 'Mt/year', country: 'Morocco', operator: 'OCP Group', description: 'World\'s largest phosphate mine, 70% of global reserves' },
      { id: 'benguerir', name: 'Benguerir', lat: 32.23, lng: -7.95, type: 'mine', production: 15, unit: 'Mt/year', country: 'Morocco', operator: 'OCP Group', description: 'Major phosphate mining area' },
      { id: 'bou-craa', name: 'Bou Craa', lat: 26.35, lng: -12.93, type: 'mine', production: 2.5, unit: 'Mt/year', country: 'Western Sahara', operator: 'OCP Group', description: 'Phosphate mine with 100km conveyor to coast' },
      { id: 'mosaic-florida', name: 'Mosaic Florida Operations', lat: 27.80, lng: -81.80, type: 'mine', production: 11, unit: 'Mt/year', country: 'USA', operator: 'Mosaic Company', description: 'Major US phosphate producer' },
      { id: 'yunnan-phosphate', name: 'Yunnan Phosphate District', lat: 24.50, lng: 103.00, type: 'mine', production: 30, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Major phosphate region in SW China' },
      { id: 'hubei-phosphate', name: 'Hubei Yichang', lat: 30.70, lng: 111.28, type: 'mine', production: 18, unit: 'Mt/year', country: 'China', operator: 'Hubei Yihua', description: 'Large phosphate mining area' },
      { id: 'tunisia-phosphate', name: 'Gafsa Basin', lat: 34.42, lng: 8.78, type: 'mine', production: 8, unit: 'Mt/year', country: 'Tunisia', operator: 'CPG', description: 'Major North African phosphate region' },
      { id: 'jordan-phosphate', name: 'Eshidiya Mine', lat: 30.25, lng: 35.67, type: 'mine', production: 7, unit: 'Mt/year', country: 'Jordan', operator: 'JPMC', description: 'Large open-pit phosphate mine' },
      { id: 'apatit', name: 'Apatit Khibiny', lat: 67.67, lng: 33.67, type: 'mine', production: 10, unit: 'Mt/year', country: 'Russia', operator: 'PhosAgro', description: 'Arctic phosphate operation' },
    ]
  },

  potash: {
    id: 'potash',
    name: 'Potash',
    color: '#FF6347',
    unit: 'Mt K₂O/year',
    globalProduction: 48,
    description: 'Key fertilizer component providing potassium. Essential for crop growth and global food production.',
    category: 'minerals',
    locations: [
      { id: 'saskatchewan', name: 'Saskatchewan Potash Belt', lat: 52.10, lng: -106.60, type: 'mine', production: 22, unit: 'Mt/year', country: 'Canada', operator: 'Nutrien/Mosaic/K+S', description: 'World\'s largest and highest quality potash deposits' },
      { id: 'berezniki', name: 'Berezniki & Solikamsk', lat: 59.40, lng: 56.80, type: 'mine', production: 12, unit: 'Mt/year', country: 'Russia', operator: 'Uralkali', description: 'World\'s oldest potash operations, major producer' },
      { id: 'soligorsk', name: 'Soligorsk', lat: 52.79, lng: 27.55, type: 'mine', production: 11, unit: 'Mt/year', country: 'Belarus', operator: 'Belaruskali', description: 'World\'s 3rd largest potash producer' },
      { id: 'dead-sea', name: 'Dead Sea Works', lat: 31.05, lng: 35.43, type: 'mine', production: 2.2, unit: 'Mt/year', country: 'Israel', operator: 'ICL Group', description: 'Unique potash from Dead Sea evaporation' },
      { id: 'qinghai-potash', name: 'Qinghai Salt Lakes', lat: 37.00, lng: 95.00, type: 'mine', production: 5.5, unit: 'Mt/year', country: 'China', operator: 'Salt Lake Potash', description: 'Brine potash production' },
      { id: 'germany-potash', name: 'Werra-Fulda District', lat: 50.95, lng: 9.98, type: 'mine', production: 3, unit: 'Mt/year', country: 'Germany', operator: 'K+S', description: 'Historic European potash region' },
    ]
  },

  platinum: {
    id: 'platinum',
    name: 'Platinum',
    color: '#E5E4E2',
    unit: 'tonnes/year',
    globalProduction: 190,
    description: 'Precious metal for catalytic converters, jewelry, fuel cells, and chemical catalysts. Rarest precious metal.',
    category: 'metals',
    locations: [
      { id: 'bushveld', name: 'Bushveld Complex', lat: -25.00, lng: 29.00, type: 'mine', production: 135, unit: 'tonnes/year', country: 'South Africa', operator: 'Impala/Anglo/Sibanye', description: 'World\'s largest PGM deposit, 75% of global reserves' },
      { id: 'mogalakwena', name: 'Mogalakwena Mine', lat: -24.28, lng: 28.95, type: 'mine', production: 25, unit: 'tonnes/year', country: 'South Africa', operator: 'Anglo American Platinum', description: 'World\'s largest open-pit platinum mine' },
      { id: 'norilsk-pgm', name: 'Norilsk Nickel PGMs', lat: 69.36, lng: 88.20, type: 'mine', production: 22, unit: 'tonnes/year', country: 'Russia', operator: 'Norilsk Nickel', description: 'Major PGM producer from nickel-copper ore' },
      { id: 'stillwater', name: 'Stillwater Mine', lat: 45.40, lng: -109.90, type: 'mine', production: 14, unit: 'tonnes/year', country: 'USA', operator: 'Sibanye-Stillwater', description: 'Largest US platinum mine' },
      { id: 'mimosa', name: 'Mimosa Mine', lat: -19.63, lng: 30.02, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Zimbabwe', operator: 'Sibanye-Stillwater/Impala', description: 'Major Zimbabwean PGM mine' },
    ]
  },

  manganese: {
    id: 'manganese',
    name: 'Manganese',
    color: '#E30B5D',
    unit: 'Mt/year',
    globalProduction: 21,
    description: 'Essential for steel production as deoxidizer and alloying element. Increasingly used in batteries.',
    category: 'metals',
    locations: [
      { id: 'kalahari', name: 'Kalahari Manganese Field', lat: -27.30, lng: 22.90, type: 'mine', production: 8, unit: 'Mt/year', country: 'South Africa', operator: 'South32/Assmang', description: 'World\'s largest manganese field, 70% of global reserves' },
      { id: 'groote-eylandt-mn', name: 'Groote Eylandt', lat: -13.95, lng: 136.50, type: 'mine', production: 4.2, unit: 'Mt/year', country: 'Australia', operator: 'South32', description: 'High-grade manganese deposit' },
      { id: 'moanda-mn', name: 'Moanda', lat: -1.57, lng: 13.20, type: 'mine', production: 2.8, unit: 'Mt/year', country: 'Gabon', operator: 'Comilog/Eramet', description: 'One of world\'s richest manganese deposits' },
      { id: 'carajas-mn', name: 'Carajás Manganese', lat: -6.07, lng: -50.20, type: 'mine', production: 2.8, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Major manganese producer in Amazon' },
      { id: 'guangxi-mn', name: 'Guangxi Province Mines', lat: 23.75, lng: 108.80, type: 'mine', production: 3.5, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'China\'s main manganese production region' },
    ]
  },

  cement: {
    id: 'cement',
    name: 'Cement',
    color: '#B8B8B8',
    unit: 'Mt/year',
    globalProduction: 4400,
    description: 'Fundamental binding material for concrete. Enables all modern construction and infrastructure development.',
    category: 'minerals',
    locations: [
      { id: 'anhui-conch', name: 'Anhui Conch Cement', lat: 30.92, lng: 117.77, type: 'plant', production: 400, unit: 'Mt/year', country: 'China', operator: 'Anhui Conch', description: 'World\'s largest cement producer' },
      { id: 'cnbm', name: 'China National Building Material', lat: 39.90, lng: 116.40, type: 'plant', production: 380, unit: 'Mt/year', country: 'China', operator: 'CNBM', description: 'Second largest cement company globally' },
      { id: 'ultratech', name: 'UltraTech Cement', lat: 19.08, lng: 72.88, type: 'plant', production: 130, unit: 'Mt/year', country: 'India', operator: 'UltraTech', description: 'India\'s largest cement producer' },
      { id: 'acc-cement', name: 'ACC Limited', lat: 19.20, lng: 72.97, type: 'plant', production: 35, unit: 'Mt/year', country: 'India', operator: 'ACC/Holcim', description: 'Major Indian cement producer' },
      { id: 'lafarge-michigan', name: 'Lafarge Alpena Plant', lat: 45.07, lng: -83.43, type: 'plant', production: 3.2, unit: 'Mt/year', country: 'USA', operator: 'Holcim', description: 'Largest cement plant in USA' },
      { id: 'cemex-mexico', name: 'CEMEX Mexican Operations', lat: 25.67, lng: -100.30, type: 'plant', production: 28, unit: 'Mt/year', country: 'Mexico', operator: 'CEMEX', description: 'Major global cement producer' },
      { id: 'heidelberg-indonesia', name: 'Indocement', lat: -6.18, lng: 106.83, type: 'plant', production: 22, unit: 'Mt/year', country: 'Indonesia', operator: 'HeidelbergCement', description: 'Largest cement producer in Indonesia' },
      { id: 'lafarge-egypt', name: 'LafargeHolcim Egypt', lat: 30.04, lng: 31.24, type: 'plant', production: 9, unit: 'Mt/year', country: 'Egypt', operator: 'Holcim', description: 'Major North African cement producer' },
      { id: 'dangote-cement', name: 'Dangote Cement', lat: 6.45, lng: 3.40, type: 'plant', production: 48, unit: 'Mt/year', country: 'Nigeria', operator: 'Dangote Group', description: 'Africa\'s largest cement producer' },
    ]
  }
};
