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

      // Chile - Additional mines
      { id: 'centinela', name: 'Centinela Mine', lat: -23.10, lng: -69.13, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'Chile', operator: 'Antofagasta Minerals', description: 'Major copper mine in Antofagasta Region' },
      { id: 'radomiro-tomic', name: 'Radomiro Tomic', lat: -22.23, lng: -68.90, type: 'mine', production: 0.28, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Large oxide and sulfide mine near Chuquicamata' },
      { id: 'spence', name: 'Spence Mine', lat: -22.82, lng: -69.28, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'Chile', operator: 'BHP', description: 'Copper cathode mine in Atacama Desert' },
      { id: 'quebrada-blanca', name: 'Quebrada Blanca', lat: -21.00, lng: -68.75, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'Chile', operator: 'Teck Resources', description: 'Major copper mine with QB2 expansion' },
      { id: 'candelaria', name: 'Candelaria Mine', lat: -27.52, lng: -69.97, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Chile', operator: 'Lundin Mining', description: 'Copper-gold mine in Atacama' },
      { id: 'sierra-gorda', name: 'Sierra Gorda Mine', lat: -22.88, lng: -69.35, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Chile', operator: 'KGHM/Sumitomo', description: 'Copper-molybdenum mine' },
      { id: 'ministro-hales', name: 'Ministro Hales', lat: -22.35, lng: -68.88, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Open-pit mine in Calama' },
      { id: 'zaldivar', name: 'Zaldívar Mine', lat: -24.12, lng: -69.08, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Chile', operator: 'Antofagasta/Barrick', description: 'SX-EW copper mine in Atacama' },
      { id: 'chile-other-copper', name: 'Chile Other Copper', lat: -30.00, lng: -71.00, type: 'mine', production: 0.50, unit: 'Mt/year', country: 'Chile', operator: 'Various', description: 'Aggregate from other smaller Chilean copper mines' },

      // Peru - Additional
      { id: 'quellaveco', name: 'Quellaveco Mine', lat: -17.12, lng: -70.60, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'Peru', operator: 'Anglo American', description: 'New large-scale copper mine in Moquegua' },
      { id: 'toromocho', name: 'Toromocho Mine', lat: -11.55, lng: -76.13, type: 'mine', production: 0.25, unit: 'Mt/year', country: 'Peru', operator: 'Chinalco', description: 'Large copper mine in Junín Region' },
      { id: 'antapaccay', name: 'Antapaccay Mine', lat: -14.97, lng: -71.35, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'Peru', operator: 'Glencore', description: 'Open-pit copper mine in Cusco Region' },
      { id: 'constancia', name: 'Constancia Mine', lat: -14.50, lng: -71.77, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Peru', operator: 'Hudbay Minerals', description: 'Copper-molybdenum mine in Cusco' },

      // DRC - Additional
      { id: 'kamoto-copper', name: 'Kamoto Mine', lat: -10.73, lng: 25.43, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'DRC', operator: 'Glencore/Katanga Mining', description: 'Large underground copper-cobalt operation' },
      { id: 'mutanda', name: 'Mutanda Mine', lat: -10.58, lng: 25.92, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'DRC', operator: 'Glencore', description: 'Major copper-cobalt mine in Lualaba' },
      { id: 'sicomines', name: 'Sicomines Mine', lat: -10.95, lng: 25.95, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'DRC', operator: 'China Railway/Gécamines', description: 'Sino-Congolese copper mining joint venture' },
      { id: 'kinsevere', name: 'Kinsevere Mine', lat: -11.37, lng: 27.58, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'DRC', operator: 'China Molybdenum', description: 'Copper SX-EW operation in Haut-Katanga' },

      // China - Additional
      { id: 'duobaoshan', name: 'Duobaoshan Mine', lat: 49.38, lng: 125.73, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'China', operator: 'Zijin Mining', description: 'Large copper mine in Heilongjiang' },
      { id: 'qulong', name: 'Qulong Mine', lat: 29.67, lng: 91.60, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'China', operator: 'China Gold/Zijin', description: 'World-class porphyry copper deposit in Tibet' },
      { id: 'dexing', name: 'Dexing Mine', lat: 29.00, lng: 117.60, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'China', operator: 'Jiangxi Copper', description: 'One of the largest copper mines in Asia' },
      { id: 'china-other-copper', name: 'China Other Copper', lat: 30.00, lng: 100.00, type: 'mine', production: 0.60, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Aggregate from Yunnan, Inner Mongolia, Xinjiang and other provinces' },

      // Russia - Additional
      { id: 'norilsk-copper', name: 'Norilsk Copper Operations', lat: 69.36, lng: 88.22, type: 'mine', production: 0.40, unit: 'Mt/year', country: 'Russia', operator: 'Nornickel', description: 'By-product copper from Norilsk-Talnakh complex' },

      // USA - Additional
      { id: 'safford-lone-star', name: 'Safford/Lone Star Mine', lat: 32.86, lng: -109.63, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'USA', operator: 'Freeport-McMoRan', description: 'Copper mine complex in Arizona' },
      { id: 'sierrita', name: 'Sierrita Mine', lat: 31.87, lng: -111.08, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'USA', operator: 'Freeport-McMoRan', description: 'Copper-molybdenum mine south of Tucson' },
      { id: 'ray-mine', name: 'Ray Mine', lat: 33.17, lng: -110.97, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'USA', operator: 'Asarco', description: 'Open-pit copper mine in Arizona' },
      { id: 'resolution-copper', name: 'Resolution Copper', lat: 33.30, lng: -111.10, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'USA', operator: 'Rio Tinto/BHP', description: 'Developing deep copper deposit in Arizona' },

      // Zambia - Additional
      { id: 'sentinel', name: 'Sentinel Mine', lat: -12.55, lng: 25.52, type: 'mine', production: 0.25, unit: 'Mt/year', country: 'Zambia', operator: 'First Quantum', description: 'Large open-pit mine in Northwestern Province' },
      { id: 'konkola', name: 'Konkola Mine', lat: -12.38, lng: 27.81, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Zambia', operator: 'Vedanta Resources', description: 'Deep underground copper mine on Copperbelt' },
      { id: 'zambia-other', name: 'Zambia Other Copper', lat: -12.50, lng: 28.00, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'Zambia', operator: 'Various', description: 'Other Copperbelt mines including Mopani and KCM' },

      // Australia - Additional
      { id: 'prominent-hill', name: 'Prominent Hill', lat: -29.72, lng: 135.53, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Australia', operator: 'BHP', description: 'Underground copper-gold mine in South Australia' },
      { id: 'mount-isa-copper', name: 'Mount Isa Copper', lat: -20.73, lng: 139.50, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Australia', operator: 'Glencore', description: 'Underground copper mine in Queensland' },

      // Sweden
      { id: 'aitik', name: 'Aitik Mine', lat: 67.07, lng: 20.96, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Sweden', operator: 'Boliden', description: 'Largest open-pit metal mine in Europe' },

      // Uzbekistan
      { id: 'almalyk', name: 'Almalyk Mine', lat: 40.85, lng: 69.60, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Uzbekistan', operator: 'AGMK', description: 'Large copper-gold mine near Tashkent' },

      // Armenia
      { id: 'kajaran', name: 'Kajaran Mine', lat: 39.15, lng: 46.15, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Armenia', operator: 'Zangezur Copper-Molybdenum', description: 'Large copper-molybdenum mine' },

      // Mongolia
      { id: 'oyu-tolgoi-ext', name: 'Mongolia Oyu Tolgoi Underground', lat: 43.0, lng: 106.9, type: 'mine', production: 0.5, unit: 'Mt/year', country: 'Mongolia', operator: 'Rio Tinto', description: 'Underground expansion of world-class copper-gold deposit in Gobi Desert' },

      // Panama
      { id: 'cobre-panama-ext', name: 'Panama Cobre Panama', lat: 8.8, lng: -80.6, type: 'mine', production: 0.3, unit: 'Mt/year', country: 'Panama', operator: 'First Quantum (mothballed)', description: 'Largest mine in Central America, currently mothballed' },

      // Zambia
      { id: 'lumwana-ext', name: 'Zambia Lumwana Mine', lat: -12.1, lng: 25.9, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Zambia', operator: 'Barrick Gold', description: 'Open-pit copper mine in Northwestern Province' },

      // Kazakhstan
      { id: 'aktogay-ext', name: 'Kazakhstan Aktogay', lat: 46.9, lng: 79.6, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Kazakhstan', operator: 'KAZ Minerals', description: 'Large porphyry copper deposit expansion' },

      // Australia
      { id: 'olympic-dam-copper-ext', name: 'Australia Olympic Dam Copper', lat: -30.45, lng: 136.89, type: 'mine', production: 0.2, unit: 'Mt/year', country: 'Australia', operator: 'BHP', description: 'Underground polymetallic mine producing copper, uranium, gold, silver' },

      // Mexico
      { id: 'buenavista-ext', name: 'Mexico Buenavista', lat: 30.95, lng: -110.0, type: 'mine', production: 0.2, unit: 'Mt/year', country: 'Mexico', operator: 'Southern Copper', description: 'Large open-pit copper mine in Sonora state' },

      // Canada
      { id: 'highland-valley-ext', name: 'Canada Highland Valley', lat: 50.5, lng: -121.0, type: 'mine', production: 0.1, unit: 'Mt/year', country: 'Canada', operator: 'Teck Resources', description: 'One of Canada\'s largest open-pit copper mines in British Columbia' },

      // Chile
      { id: 'chuquicamata-ext', name: 'Chile Chuquicamata Underground', lat: -22.3, lng: -68.9, type: 'mine', production: 0.3, unit: 'Mt/year', country: 'Chile', operator: 'Codelco', description: 'Underground expansion of historic open-pit copper mine' },

      // World aggregate for smaller producers
      { id: 'world-other-copper', name: 'Other World Copper', lat: 0.00, lng: 20.00, type: 'mine', production: 2.33, unit: 'Mt/year', country: 'Various', operator: 'Multiple operators', description: 'Aggregate from smaller mines worldwide including Finland, Spain, Portugal, Tanzania, Cuba, etc.' },

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
    color: '#4A7C59',
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

      // Saudi Arabia - Additional fields
      { id: 'khurais', name: 'Khurais Field', lat: 24.14, lng: 48.07, type: 'field', production: 1.2, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Major Arabian oil field with advanced technology' },
      { id: 'manifa', name: 'Manifa Field', lat: 27.60, lng: 49.50, type: 'field', production: 0.9, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Offshore heavy oil field' },
      { id: 'abqaiq', name: 'Abqaiq Field', lat: 25.93, lng: 49.68, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Mature supergiant field with major processing facility' },
      { id: 'berri', name: 'Berri Field', lat: 27.30, lng: 49.80, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Offshore oil field in Persian Gulf' },
      { id: 'zuluf', name: 'Zuluf Field', lat: 27.50, lng: 49.60, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Large offshore field in the Persian Gulf' },

      // Russia - Additional fields
      { id: 'romashkino', name: 'Romashkino Field', lat: 54.60, lng: 51.30, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Russia', operator: 'Tatneft', description: 'Historic supergiant oil field in Tatarstan' },
      { id: 'vankor', name: 'Vankor Field', lat: 67.72, lng: 83.72, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Russia', operator: 'Rosneft', description: 'Major East Siberian oil field' },
      { id: 'kuyumba', name: 'Kuyumba Field', lat: 59.80, lng: 99.00, type: 'field', production: 0.1, unit: 'Mb/d', country: 'Russia', operator: 'Slavneft/Gazprom Neft', description: 'East Siberian field on ESPO pipeline route' },
      { id: 'west-siberia-cluster', name: 'West Siberia Other Fields', lat: 60.50, lng: 74.00, type: 'field', production: 5.0, unit: 'Mb/d', country: 'Russia', operator: 'Rosneft/Lukoil/Gazprom Neft', description: 'Aggregate production from numerous West Siberian fields' },

      // Iraq - Additional fields
      { id: 'majnoon', name: 'Majnoon Field', lat: 31.10, lng: 47.30, type: 'field', production: 0.24, unit: 'Mb/d', country: 'Iraq', operator: 'Basra Oil Company', description: 'Supergiant oil field in southern Iraq' },
      { id: 'kirkuk', name: 'Kirkuk Field', lat: 35.47, lng: 44.39, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Iraq', operator: 'North Oil Company', description: 'Historic northern Iraqi supergiant' },
      { id: 'halfaya', name: 'Halfaya Field', lat: 31.48, lng: 47.48, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Iraq', operator: 'PetroChina/Total', description: 'Southern Iraqi oil field' },
      { id: 'zubair', name: 'Zubair Field', lat: 30.80, lng: 47.47, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Iraq', operator: 'Eni/Kogas', description: 'Major Basra region oil field' },
      { id: 'iraq-kurd', name: 'Kurdistan Region Fields', lat: 36.20, lng: 44.10, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Iraq', operator: 'Multiple operators', description: 'Combined production from Kurdistan region fields' },

      // Iran - Additional fields
      { id: 'marun', name: 'Marun Field', lat: 31.58, lng: 49.35, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'One of Iran\'s largest onshore oil fields in Khuzestan' },
      { id: 'gachsaran', name: 'Gachsaran Field', lat: 30.35, lng: 50.80, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'Major onshore field in southwestern Iran' },
      { id: 'aghajari', name: 'Aghajari Field', lat: 30.70, lng: 49.83, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'Historic oil field in Khuzestan Province' },

      // Nigeria - Additional fields
      { id: 'forcados-yokri', name: 'Forcados-Yokri', lat: 5.35, lng: 5.33, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Nigeria', operator: 'Shell/NNPC', description: 'Major onshore Niger Delta oil field' },
      { id: 'akpo', name: 'Akpo Field', lat: 4.50, lng: 5.00, type: 'field', production: 0.18, unit: 'Mb/d', country: 'Nigeria', operator: 'TotalEnergies', description: 'Deepwater FPSO field offshore Nigeria' },
      { id: 'egina', name: 'Egina Field', lat: 4.20, lng: 4.80, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Nigeria', operator: 'TotalEnergies', description: 'Ultra-deepwater field in OML 130' },
      { id: 'nigeria-onshore', name: 'Nigeria Onshore Fields', lat: 5.00, lng: 6.50, type: 'field', production: 0.6, unit: 'Mb/d', country: 'Nigeria', operator: 'Shell/NNPC/Seplat', description: 'Aggregated onshore Niger Delta production' },

      // Angola - Additional fields
      { id: 'dalia', name: 'Dalia Field', lat: -8.30, lng: 12.15, type: 'field', production: 0.15, unit: 'Mb/d', country: 'Angola', operator: 'TotalEnergies', description: 'FPSO-based deepwater field in Block 17' },
      { id: 'pazflor', name: 'Pazflor Field', lat: -8.50, lng: 12.00, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Angola', operator: 'TotalEnergies', description: 'Deepwater field with innovative separation technology' },
      { id: 'angola-other', name: 'Angola Other Fields', lat: -7.50, lng: 12.50, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Angola', operator: 'Multiple operators', description: 'Aggregate production from numerous Angolan blocks' },

      // Guyana
      { id: 'stabroek-liza', name: 'Stabroek Block (Liza)', lat: 7.90, lng: -57.50, type: 'field', production: 0.6, unit: 'Mb/d', country: 'Guyana', operator: 'ExxonMobil/Hess/CNOOC', description: 'Major deepwater discovery producing from Liza 1 & 2 FPSOs' },

      // UAE - Additional fields
      { id: 'murban', name: 'Murban Field', lat: 24.00, lng: 54.50, type: 'field', production: 1.0, unit: 'Mb/d', country: 'UAE', operator: 'ADNOC', description: 'Abu Dhabi\'s largest onshore oil field' },
      { id: 'lower-zakum', name: 'Lower Zakum Field', lat: 24.60, lng: 53.50, type: 'field', production: 0.4, unit: 'Mb/d', country: 'UAE', operator: 'ADNOC', description: 'Major offshore oil field' },
      { id: 'bu-hasa', name: 'Bu Hasa Field', lat: 23.50, lng: 53.50, type: 'field', production: 0.6, unit: 'Mb/d', country: 'UAE', operator: 'ADNOC', description: 'Large onshore Abu Dhabi oil field' },

      // Kuwait - Additional fields
      { id: 'kuwait-north', name: 'North Kuwait Fields', lat: 29.50, lng: 47.70, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Kuwait', operator: 'Kuwait Oil Company', description: 'Combined northern Kuwait fields including Raudhatain and Sabriyah' },

      // Oman
      { id: 'nimr', name: 'Nimr Field', lat: 19.60, lng: 56.20, type: 'field', production: 0.22, unit: 'Mb/d', country: 'Oman', operator: 'PDO', description: 'Major oil field in southern Oman' },
      { id: 'oman-other', name: 'Oman Other Fields', lat: 21.50, lng: 56.50, type: 'field', production: 0.78, unit: 'Mb/d', country: 'Oman', operator: 'PDO/Occidental', description: 'Aggregated production from numerous Omani fields' },

      // Qatar
      { id: 'dukhan', name: 'Dukhan Field', lat: 25.42, lng: 50.78, type: 'field', production: 0.34, unit: 'Mb/d', country: 'Qatar', operator: 'QatarEnergy', description: 'Qatar\'s first and only onshore oil field' },
      { id: 'al-shaheen', name: 'Al-Shaheen Field', lat: 26.10, lng: 51.65, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Qatar', operator: 'North Oil Company/TotalEnergies', description: 'Largest offshore oil field in Qatar' },

      // Algeria
      { id: 'hassi-messaoud', name: 'Hassi Messaoud', lat: 31.68, lng: 6.07, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Algeria', operator: 'Sonatrach', description: 'Algeria\'s largest oil field, producing since 1958' },
      { id: 'algeria-other', name: 'Algeria Other Fields', lat: 30.50, lng: 5.00, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Algeria', operator: 'Sonatrach', description: 'Aggregated production from Berkine Basin and other fields' },

      // Libya - Additional fields
      { id: 'waha', name: 'Waha Oil Fields', lat: 29.30, lng: 18.30, type: 'field', production: 0.25, unit: 'Mb/d', country: 'Libya', operator: 'Waha Oil Company', description: 'Group of oil fields in Sirte Basin' },
      { id: 'libya-other', name: 'Libya Other Fields', lat: 28.00, lng: 15.00, type: 'field', production: 0.45, unit: 'Mb/d', country: 'Libya', operator: 'NOC/Eni', description: 'Aggregated production from Libyan fields' },

      // Egypt
      { id: 'western-desert-egypt', name: 'Western Desert Fields', lat: 29.50, lng: 28.50, type: 'field', production: 0.35, unit: 'Mb/d', country: 'Egypt', operator: 'Apache/Multiple', description: 'Major oil-producing region' },
      { id: 'gulf-of-suez', name: 'Gulf of Suez Fields', lat: 28.70, lng: 33.20, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Egypt', operator: 'Multiple operators', description: 'Offshore oil fields in the Gulf of Suez' },

      // Brazil - Additional fields
      { id: 'santos-pre-salt', name: 'Santos Pre-Salt (Other)', lat: -25.00, lng: -43.00, type: 'field', production: 1.5, unit: 'Mb/d', country: 'Brazil', operator: 'Petrobras', description: 'Aggregate from other pre-salt fields including Sapinhoá, Lapa, Mero' },
      { id: 'campos-basin', name: 'Campos Basin', lat: -22.50, lng: -40.00, type: 'field', production: 0.8, unit: 'Mb/d', country: 'Brazil', operator: 'Petrobras', description: 'Mature deepwater basin including Marlim and Roncador fields' },

      // USA - Additional fields
      { id: 'gulf-of-mexico-oil', name: 'Gulf of Mexico Deepwater', lat: 28.50, lng: -89.50, type: 'field', production: 1.8, unit: 'Mb/d', country: 'USA', operator: 'Shell/BP/Chevron', description: 'Deepwater production including Thunder Horse, Mars, Atlantis' },
      { id: 'niobrara-dj', name: 'DJ Basin/Niobrara', lat: 40.20, lng: -104.50, type: 'field', production: 0.5, unit: 'Mb/d', country: 'USA', operator: 'Occidental/Civitas', description: 'Tight oil production in Colorado' },
      { id: 'anadarko-basin', name: 'Anadarko Basin', lat: 35.50, lng: -98.00, type: 'field', production: 0.4, unit: 'Mb/d', country: 'USA', operator: 'Continental/Devon', description: 'SCOOP-STACK plays in Oklahoma' },

      // Canada - Additional
      { id: 'cold-lake', name: 'Cold Lake Operations', lat: 54.50, lng: -110.20, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Canada', operator: 'Imperial Oil/Cenovus', description: 'Major thermal in-situ oil sands operation' },
      { id: 'newfoundland-offshore', name: 'Newfoundland Offshore', lat: 46.50, lng: -48.50, type: 'field', production: 0.25, unit: 'Mb/d', country: 'Canada', operator: 'ExxonMobil/Husky', description: 'Hibernia and other Grand Banks fields' },

      // Indonesia
      { id: 'cepu-block', name: 'Cepu Block (Banyu Urip)', lat: -7.15, lng: 111.85, type: 'field', production: 0.18, unit: 'Mb/d', country: 'Indonesia', operator: 'ExxonMobil/Pertamina', description: 'Largest oil production in Java' },
      { id: 'indonesia-other', name: 'Indonesia Other Fields', lat: 1.00, lng: 102.00, type: 'field', production: 0.42, unit: 'Mb/d', country: 'Indonesia', operator: 'Pertamina/Chevron', description: 'Aggregated from Rokan, Duri and other fields' },

      // Malaysia - Additional
      { id: 'malaysia-other', name: 'Malaysia Other Fields', lat: 5.50, lng: 112.00, type: 'field', production: 0.45, unit: 'Mb/d', country: 'Malaysia', operator: 'Petronas/Shell', description: 'Aggregate from Sabah, Sarawak and Peninsular Malaysia fields' },

      // India
      { id: 'mumbai-high', name: 'Mumbai High Field', lat: 19.40, lng: 71.35, type: 'field', production: 0.2, unit: 'Mb/d', country: 'India', operator: 'ONGC', description: 'India\'s largest offshore oil field' },
      { id: 'rajasthan-barmer', name: 'Rajasthan (Barmer) Field', lat: 25.75, lng: 71.38, type: 'field', production: 0.15, unit: 'Mb/d', country: 'India', operator: 'Vedanta/Cairn', description: 'Mangala and other fields in Barmer Basin' },
      { id: 'india-other-oil', name: 'India Other Oil Fields', lat: 22.00, lng: 80.00, type: 'field', production: 0.35, unit: 'Mb/d', country: 'India', operator: 'ONGC/Oil India', description: 'Aggregate from Assam, Gujarat and offshore fields' },

      // Norway - Additional
      { id: 'ekofisk', name: 'Ekofisk Field', lat: 56.55, lng: 3.22, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Norway', operator: 'ConocoPhillips', description: 'Pioneer North Sea field' },
      { id: 'norway-other', name: 'Norway Other Fields', lat: 61.00, lng: 2.50, type: 'field', production: 0.9, unit: 'Mb/d', country: 'Norway', operator: 'Equinor/Aker BP', description: 'Aggregate from Troll, Oseberg, Gullfaks, Alvheim and others' },

      // UK
      { id: 'uk-north-sea', name: 'UK North Sea Fields', lat: 57.50, lng: 1.00, type: 'field', production: 0.8, unit: 'Mb/d', country: 'UK', operator: 'Multiple operators', description: 'Aggregate UK Continental Shelf production' },

      // China - Additional
      { id: 'shengli', name: 'Shengli Field', lat: 37.50, lng: 118.50, type: 'field', production: 0.4, unit: 'Mb/d', country: 'China', operator: 'Sinopec', description: 'China\'s second-largest oil field in Shandong' },
      { id: 'changqing-oil', name: 'Changqing Oil Field', lat: 37.00, lng: 108.00, type: 'field', production: 0.5, unit: 'Mb/d', country: 'China', operator: 'PetroChina', description: 'Tight oil production in Ordos Basin' },
      { id: 'bohai-bay', name: 'Bohai Bay Fields', lat: 39.00, lng: 119.50, type: 'field', production: 0.5, unit: 'Mb/d', country: 'China', operator: 'CNOOC', description: 'Offshore production in Bohai Sea' },
      { id: 'china-other-oil', name: 'China Other Oil Fields', lat: 42.00, lng: 87.00, type: 'field', production: 0.8, unit: 'Mb/d', country: 'China', operator: 'PetroChina/Sinopec/CNOOC', description: 'Xinjiang, Liaohe, Jilin and other fields' },

      // Argentina
      { id: 'vaca-muerta-oil', name: 'Vaca Muerta Oil', lat: -38.30, lng: -69.30, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Argentina', operator: 'YPF/Multiple', description: 'Shale oil production from the Neuquén Basin' },
      { id: 'argentina-conventional', name: 'Argentina Conventional', lat: -39.00, lng: -67.00, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Argentina', operator: 'YPF/Pan American', description: 'Conventional production from Neuquén and San Jorge basins' },

      // Colombia
      { id: 'colombia-llanos', name: 'Llanos Basin', lat: 5.00, lng: -72.00, type: 'field', production: 0.55, unit: 'Mb/d', country: 'Colombia', operator: 'Ecopetrol/Multiple', description: 'Colombia\'s main oil-producing basin' },
      { id: 'colombia-other', name: 'Colombia Other Fields', lat: 7.00, lng: -73.50, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Colombia', operator: 'Ecopetrol', description: 'Middle Magdalena and other basins' },

      // Ecuador
      { id: 'ecuador-oriente', name: 'Ecuador Oriente Basin', lat: -0.50, lng: -77.00, type: 'field', production: 0.47, unit: 'Mb/d', country: 'Ecuador', operator: 'Petroecuador/Multiple', description: 'Amazon region oil production' },

      // Congo-Brazzaville
      { id: 'congo-brazzaville', name: 'Congo-Brazzaville Fields', lat: -4.50, lng: 11.50, type: 'field', production: 0.26, unit: 'Mb/d', country: 'Republic of Congo', operator: 'TotalEnergies/Eni', description: 'Offshore and onshore production' },

      // Gabon
      { id: 'gabon-fields', name: 'Gabon Oil Fields', lat: -1.70, lng: 9.50, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Gabon', operator: 'Shell/TotalEnergies', description: 'Rabi-Kounga and other fields' },

      // Chad
      { id: 'doba-basin', name: 'Doba Basin', lat: 8.65, lng: 16.85, type: 'field', production: 0.12, unit: 'Mb/d', country: 'Chad', operator: 'Savannah Energy', description: 'Southern Chad oil fields' },

      // South Sudan
      { id: 'south-sudan-fields', name: 'Upper Nile Fields', lat: 9.50, lng: 32.50, type: 'field', production: 0.15, unit: 'Mb/d', country: 'South Sudan', operator: 'DPOC/GPOC', description: 'Oil production from Upper Nile' },

      // Ghana
      { id: 'jubilee', name: 'Jubilee Field', lat: 4.60, lng: -3.12, type: 'field', production: 0.08, unit: 'Mb/d', country: 'Ghana', operator: 'Tullow Oil', description: 'Deepwater oil field in Ghana' },

      // Turkmenistan
      { id: 'turkmenistan-oil', name: 'Turkmenistan Western Fields', lat: 39.50, lng: 54.00, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Turkmenistan', operator: 'Turkmenneft', description: 'Oil production near Caspian coast' },

      // Vietnam
      { id: 'bach-ho', name: 'Bach Ho (White Tiger)', lat: 9.80, lng: 108.00, type: 'field', production: 0.1, unit: 'Mb/d', country: 'Vietnam', operator: 'Vietsovpetro', description: 'Vietnam\'s largest oil field' },

      // Thailand
      { id: 'thailand-oil', name: 'Thailand Oil Fields', lat: 8.50, lng: 102.50, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Thailand', operator: 'PTTEP/Chevron', description: 'Gulf of Thailand and onshore production' },

      // Brunei
      { id: 'brunei-offshore', name: 'Brunei Offshore Fields', lat: 5.30, lng: 114.50, type: 'field', production: 0.1, unit: 'Mb/d', country: 'Brunei', operator: 'Brunei Shell', description: 'Offshore oil production' },

      // Venezuela
      { id: 'orinoco-belt-ext', name: 'Venezuela Orinoco Belt Extension', lat: 8.5, lng: -63.5, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Venezuela', operator: 'PDVSA', description: 'Extended extra-heavy crude oil production in eastern Venezuela' },

      // Mexico
      { id: 'ku-maloob-zaap', name: 'Mexico Ku-Maloob-Zaap', lat: 19.5, lng: -92.3, type: 'field', production: 0.8, unit: 'Mb/d', country: 'Mexico', operator: 'Pemex', description: 'Major offshore production complex in Bay of Campeche' },
      { id: 'cantarell-ext', name: 'Mexico Cantarell', lat: 19.7, lng: -92.1, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Mexico', operator: 'Pemex', description: 'Historic super-giant field in Bay of Campeche' },

      // Kazakhstan
      { id: 'tengiz-field', name: 'Kazakhstan Tengiz Field', lat: 46.2, lng: 53.3, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Kazakhstan', operator: 'Tengizchevroil', description: 'Major onshore field near Caspian Sea' },
      { id: 'kashagan-field', name: 'Kazakhstan Kashagan Field', lat: 46.0, lng: 52.2, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Kazakhstan', operator: 'NCOC', description: 'Large offshore Caspian field with high H2S content' },

      // Azerbaijan
      { id: 'acg-complex', name: 'Azerbaijan ACG Complex', lat: 40.0, lng: 51.0, type: 'field', production: 0.6, unit: 'Mb/d', country: 'Azerbaijan', operator: 'BP', description: 'Azeri-Chirag-Gunashli deepwater complex in Caspian Sea' },

      // Norway
      { id: 'johan-sverdrup-ext', name: 'Norway Johan Sverdrup', lat: 58.9, lng: 2.5, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Norway', operator: 'Equinor', description: 'Giant North Sea field powered by renewable electricity' },
      { id: 'statfjord-oseberg', name: 'Norway Statfjord/Oseberg', lat: 61.3, lng: 1.8, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Norway', operator: 'Equinor', description: 'Mature North Sea producing fields' },

      // UK
      { id: 'uk-north-sea-ext', name: 'UK North Sea Fields', lat: 57.5, lng: 0.5, type: 'field', production: 0.4, unit: 'Mb/d', country: 'UK', operator: 'Various', description: 'Multiple producing fields in UK sector of North Sea' },

      // Brazil
      { id: 'buzios-field', name: 'Brazil Buzios Field', lat: -24.0, lng: -41.0, type: 'field', production: 1.0, unit: 'Mb/d', country: 'Brazil', operator: 'Petrobras', description: 'Largest producing pre-salt field in Santos Basin' },
      { id: 'tupi-lula-field', name: 'Brazil Tupi/Lula Field', lat: -25.3, lng: -43.0, type: 'field', production: 0.8, unit: 'Mb/d', country: 'Brazil', operator: 'Petrobras', description: 'Pioneer pre-salt deepwater field in Santos Basin' },

      // Oman
      { id: 'oman-pdo-fields', name: 'Oman PDO Fields', lat: 21.5, lng: 56.3, type: 'field', production: 0.6, unit: 'Mb/d', country: 'Oman', operator: 'PDO', description: 'Petroleum Development Oman onshore production' },

      // UAE
      { id: 'adnoc-onshore', name: 'UAE ADNOC Onshore', lat: 23.5, lng: 54.0, type: 'field', production: 1.5, unit: 'Mb/d', country: 'UAE', operator: 'ADNOC', description: 'Major onshore fields in Abu Dhabi' },
      { id: 'adnoc-offshore', name: 'UAE ADNOC Offshore', lat: 24.8, lng: 53.5, type: 'field', production: 1.0, unit: 'Mb/d', country: 'UAE', operator: 'ADNOC', description: 'Offshore fields including Upper Zakum and Umm Shaif' },

      // Saudi Arabia
      { id: 'shaybah-field', name: 'Saudi Shaybah Field', lat: 22.5, lng: 54.0, type: 'field', production: 0.75, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Remote desert field in Rub al Khali (Empty Quarter)' },
      { id: 'safaniyah-field', name: 'Saudi Safaniyah Field', lat: 28.0, lng: 48.8, type: 'field', production: 1.2, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'World\'s largest offshore oil field in Persian Gulf' },
      { id: 'abqaiq-other', name: 'Saudi Abqaiq/Other', lat: 25.9, lng: 49.7, type: 'field', production: 1.0, unit: 'Mb/d', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Historic field and processing hub in Eastern Province' },

      // Iraq
      { id: 'west-qurna-ext', name: 'Iraq West Qurna', lat: 31.0, lng: 47.3, type: 'field', production: 0.8, unit: 'Mb/d', country: 'Iraq', operator: 'Lukoil/BP', description: 'Super-giant field in southern Iraq near Basra' },
      { id: 'iraq-zubair', name: 'Iraq Zubair', lat: 30.5, lng: 47.5, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Iraq', operator: 'Eni/CNPC', description: 'Major producing field in southern Iraq' },

      // Iran
      { id: 'ahwaz-asmari', name: 'Iran Ahwaz-Asmari Field', lat: 31.3, lng: 48.7, type: 'field', production: 0.7, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'One of Iran\'s largest onshore fields in Khuzestan' },
      { id: 'marun-field', name: 'Iran Marun Field', lat: 31.0, lng: 49.2, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Iran', operator: 'NIOC', description: 'Major onshore field in southwestern Iran' },

      // Russia
      { id: 'east-siberia-fields', name: 'Russia East Siberia Fields', lat: 60.5, lng: 108.0, type: 'field', production: 1.0, unit: 'Mb/d', country: 'Russia', operator: 'Rosneft/Various', description: 'Emerging production region in eastern Siberia' },
      { id: 'volga-urals-fields', name: 'Russia Volga-Urals Fields', lat: 55.0, lng: 53.0, type: 'field', production: 1.5, unit: 'Mb/d', country: 'Russia', operator: 'Rosneft/Tatneft/Various', description: 'Mature producing region in Volga-Urals basin' },

      // China
      { id: 'daqing-other', name: 'China Daqing Other', lat: 46.6, lng: 125.1, type: 'field', production: 0.6, unit: 'Mb/d', country: 'China', operator: 'PetroChina', description: 'Additional production from Daqing area fields' },
      { id: 'changqing-oil-ext', name: 'China Changqing Oil', lat: 37.5, lng: 108.5, type: 'field', production: 0.9, unit: 'Mb/d', country: 'China', operator: 'PetroChina', description: 'China\'s largest producing oil and gas field complex' },

      // India
      { id: 'mumbai-high-ext', name: 'India Mumbai High Extension', lat: 19.4, lng: 71.4, type: 'field', production: 0.2, unit: 'Mb/d', country: 'India', operator: 'ONGC', description: 'Extended production from Mumbai High offshore complex' },

      // Angola
      { id: 'angola-block17', name: 'Angola Block 17', lat: -7.0, lng: 10.5, type: 'field', production: 0.5, unit: 'Mb/d', country: 'Angola', operator: 'TotalEnergies', description: 'Deepwater block with multiple FPSO operations' },

      // Nigeria
      { id: 'egina-fpso', name: 'Nigeria Egina FPSO', lat: 5.5, lng: 3.8, type: 'field', production: 0.2, unit: 'Mb/d', country: 'Nigeria', operator: 'TotalEnergies', description: 'Ultra-deepwater FPSO production offshore Nigeria' },

      // Libya
      { id: 'sharara-field', name: 'Libya Sharara Field', lat: 27.0, lng: 13.0, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Libya', operator: 'NOC/Repsol', description: 'Libya\'s largest oil field in Fezzan region' },

      // Algeria
      { id: 'hassi-messaoud-other', name: 'Algeria Hassi Messaoud Other', lat: 31.7, lng: 6.1, type: 'field', production: 0.4, unit: 'Mb/d', country: 'Algeria', operator: 'Sonatrach', description: 'Additional production from Hassi Messaoud area' },

      // USA
      { id: 'dj-basin', name: 'USA DJ Basin', lat: 40.0, lng: -104.8, type: 'field', production: 0.6, unit: 'Mb/d', country: 'USA', operator: 'Various', description: 'Denver-Julesburg Basin tight oil production in Colorado' },
      { id: 'bakken-formation', name: 'USA Bakken Formation', lat: 48.2, lng: -103.5, type: 'field', production: 1.0, unit: 'Mb/d', country: 'USA', operator: 'Various', description: 'Major shale oil play in North Dakota and Montana' },

      // Canada
      { id: 'montney-oil', name: 'Canada Montney Oil', lat: 56.5, lng: -121.0, type: 'field', production: 0.3, unit: 'Mb/d', country: 'Canada', operator: 'Various', description: 'Liquids-rich production from Montney Formation' },

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

      // Sweden (additional)
      { id: 'malmberget', name: 'Malmberget Mine', lat: 67.18, lng: 20.68, type: 'mine', production: 15, unit: 'Mt/year', country: 'Sweden', operator: 'LKAB', description: 'Historic Swedish iron ore mine' },

      // Mauritania
      { id: 'zouerate', name: 'Zouérat Mine', lat: 22.75, lng: -12.48, type: 'mine', production: 12, unit: 'Mt/year', country: 'Mauritania', operator: 'SNIM', description: 'Major Saharan iron ore mine' },

      // Australia - Additional mines
      { id: 'roy-hill', name: 'Roy Hill Mine', lat: -22.43, lng: 119.95, type: 'mine', production: 60, unit: 'Mt/year', country: 'Australia', operator: 'Roy Hill Holdings', description: 'Major iron ore mine in the Pilbara' },
      { id: 'christmas-creek', name: 'Christmas Creek Mine', lat: -22.35, lng: 119.73, type: 'mine', production: 50, unit: 'Mt/year', country: 'Australia', operator: 'Fortescue Metals Group', description: 'Large-scale open-pit iron ore mine in the Pilbara' },
      { id: 'cloudbreak', name: 'Cloudbreak Mine', lat: -22.29, lng: 119.36, type: 'mine', production: 40, unit: 'Mt/year', country: 'Australia', operator: 'Fortescue Metals Group', description: 'Open-pit iron ore mine in the Chichester Range' },
      { id: 'yandi', name: 'Yandi Mine', lat: -22.71, lng: 119.09, type: 'mine', production: 40, unit: 'Mt/year', country: 'Australia', operator: 'BHP', description: 'Channel iron deposit mine in the Pilbara' },
      { id: 'marandoo', name: 'Marandoo Mine', lat: -22.63, lng: 118.13, type: 'mine', production: 20, unit: 'Mt/year', country: 'Australia', operator: 'Rio Tinto', description: 'Open-pit iron ore mine adjacent to Karijini National Park' },

      // Brazil - Additional
      { id: 'mariana', name: 'Mariana Mine Complex', lat: -20.38, lng: -43.42, type: 'mine', production: 25, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Iron ore mining complex in Minas Gerais' },
      { id: 'brucutu', name: 'Brucutu Mine', lat: -19.87, lng: -43.38, type: 'mine', production: 15, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Large iron ore mine in the Iron Quadrangle' },

      // India - Additional
      { id: 'donimalai', name: 'Donimalai Iron Ore Mine', lat: 15.17, lng: 76.39, type: 'mine', production: 15, unit: 'Mt/year', country: 'India', operator: 'NMDC', description: 'Major mechanized iron ore mine in Karnataka' },
      { id: 'odisha-mines', name: 'Odisha Iron Ore Mines', lat: 22.01, lng: 85.22, type: 'mine', production: 50, unit: 'Mt/year', country: 'India', operator: 'Various (Tata Steel, SAIL, OMC)', description: 'Iron ore mines in the Joda-Barbil belt of Odisha' },
      { id: 'karnataka-bellary', name: 'Bellary-Hospet Iron Ore Mines', lat: 15.14, lng: 76.52, type: 'mine', production: 30, unit: 'Mt/year', country: 'India', operator: 'Various (NMDC, JSW)', description: 'Iron ore mining district in Karnataka' },
      { id: 'jharkhand-noamundi', name: 'Noamundi Iron Ore Mine', lat: 22.16, lng: 85.50, type: 'mine', production: 20, unit: 'Mt/year', country: 'India', operator: 'Tata Steel', description: 'One of the oldest iron ore mines in India' },
      { id: 'chhattisgarh-dalli', name: 'Dalli-Rajhara Mine', lat: 20.58, lng: 81.08, type: 'mine', production: 15, unit: 'Mt/year', country: 'India', operator: 'SAIL', description: 'Iron ore mine complex supplying Bhilai Steel Plant' },

      // China - Additional
      { id: 'hebei-qianan', name: 'Qian\'an Iron Ore Mines', lat: 40.00, lng: 118.70, type: 'mine', production: 50, unit: 'Mt/year', country: 'China', operator: 'Hebei Iron and Steel Group', description: 'Major iron ore mining district in Hebei Province' },
      { id: 'liaoning-benxi', name: 'Benxi Iron Ore Mines', lat: 41.33, lng: 123.77, type: 'mine', production: 40, unit: 'Mt/year', country: 'China', operator: 'Benxi Steel Group', description: 'Iron ore mining complex in Liaoning Province' },
      { id: 'sichuan-panzhihua', name: 'Panzhihua Vanadium-Iron Mine', lat: 26.58, lng: 101.72, type: 'mine', production: 20, unit: 'Mt/year', country: 'China', operator: 'Pangang Group', description: 'Major vanadium-titanium magnetite deposit' },
      { id: 'shandong-laiwu', name: 'Laiwu Iron Ore Mine', lat: 36.21, lng: 117.66, type: 'mine', production: 25, unit: 'Mt/year', country: 'China', operator: 'Shandong Iron and Steel Group', description: 'Iron ore mining in Shandong Province' },
      { id: 'inner-mongolia-bayan-obo', name: 'Bayan Obo Iron-REE Mine', lat: 41.80, lng: 109.97, type: 'mine', production: 30, unit: 'Mt/year', country: 'China', operator: 'Baotou Steel', description: 'Massive iron and rare earth deposit in Inner Mongolia' },

      // Russia - Additional
      { id: 'stoilensky', name: 'Stoilensky GOK', lat: 51.30, lng: 37.65, type: 'mine', production: 20, unit: 'Mt/year', country: 'Russia', operator: 'NLMK Group', description: 'Major iron ore mining plant in Belgorod Oblast' },
      { id: 'karelsky-okatysh', name: 'Karelsky Okatysh', lat: 63.82, lng: 33.95, type: 'mine', production: 15, unit: 'Mt/year', country: 'Russia', operator: 'Severstal', description: 'Iron ore pellet producer in Republic of Karelia' },

      // Canada
      { id: 'bloom-lake', name: 'Bloom Lake Mine', lat: 52.78, lng: -66.84, type: 'mine', production: 20, unit: 'Mt/year', country: 'Canada', operator: 'Champion Iron', description: 'High-grade iron ore mine in the Labrador Trough' },
      { id: 'mont-wright', name: 'Mont-Wright Mine', lat: 52.80, lng: -66.95, type: 'mine', production: 25, unit: 'Mt/year', country: 'Canada', operator: 'ArcelorMittal', description: 'One of the largest open-pit iron ore mines in the world' },

      // South Africa - Additional
      { id: 'kolomela', name: 'Kolomela Mine', lat: -28.41, lng: 22.87, type: 'mine', production: 15, unit: 'Mt/year', country: 'South Africa', operator: 'Kumba Iron Ore', description: 'Open-pit mine in Northern Cape Province' },
      { id: 'thabazimbi', name: 'Thabazimbi Mine', lat: -24.59, lng: 27.40, type: 'mine', production: 10, unit: 'Mt/year', country: 'South Africa', operator: 'Kumba Iron Ore', description: 'Historic iron ore mine in Limpopo Province' },

      // Iran
      { id: 'gol-e-gohar', name: 'Gol-e-Gohar Iron Ore Mine', lat: 29.13, lng: 55.37, type: 'mine', production: 15, unit: 'Mt/year', country: 'Iran', operator: 'Gol-e-Gohar Mining', description: 'Largest iron ore mine in Iran' },
      { id: 'chadormalu', name: 'Chadormalu Mine', lat: 32.82, lng: 55.25, type: 'mine', production: 12, unit: 'Mt/year', country: 'Iran', operator: 'Chadormalu Mining', description: 'Major iron ore mine in Yazd Province' },

      // Guinea
      { id: 'simandou', name: 'Simandou Iron Ore Project', lat: -8.63, lng: -8.93, type: 'mine', production: 20, unit: 'Mt/year', country: 'Guinea', operator: 'Rio Tinto/Winning Consortium', description: 'Largest undeveloped high-grade iron ore deposit' },

      // Kazakhstan
      { id: 'sokolov-sarbai', name: 'Sokolov-Sarbai Mining Complex', lat: 52.54, lng: 62.05, type: 'mine', production: 18, unit: 'Mt/year', country: 'Kazakhstan', operator: 'ERG', description: 'Major iron ore mining complex in Kostanay Oblast' },

      // Chile
      { id: 'los-colorados', name: 'Los Colorados Mine', lat: -28.31, lng: -70.56, type: 'mine', production: 10, unit: 'Mt/year', country: 'Chile', operator: 'CAP', description: 'Iron ore mine in Atacama Region' },
      { id: 'el-romeral-iron', name: 'El Romeral Mine', lat: -29.71, lng: -71.24, type: 'mine', production: 5, unit: 'Mt/year', country: 'Chile', operator: 'CAP', description: 'Iron ore mine in Coquimbo Region' },

      // Peru
      { id: 'marcona', name: 'Marcona Mine', lat: -15.22, lng: -75.10, type: 'mine', production: 12, unit: 'Mt/year', country: 'Peru', operator: 'Shougang Hierro Peru', description: 'Largest iron ore mine in Peru' },

      // Sierra Leone
      { id: 'tonkolili', name: 'Tonkolili Iron Ore Mine', lat: 8.98, lng: -11.73, type: 'mine', production: 12, unit: 'Mt/year', country: 'Sierra Leone', operator: 'Shandong Iron and Steel', description: 'Large iron ore deposit in central Sierra Leone' },

      // Mexico
      { id: 'pena-colorada', name: 'Peña Colorada Mine', lat: 19.49, lng: -104.08, type: 'mine', production: 10, unit: 'Mt/year', country: 'Mexico', operator: 'Ternium/ArcelorMittal', description: 'Largest iron ore mine in Mexico' },

      // Liberia
      { id: 'yekepa', name: 'Yekepa Iron Ore Mine', lat: 7.57, lng: -8.53, type: 'mine', production: 10, unit: 'Mt/year', country: 'Liberia', operator: 'ArcelorMittal Liberia', description: 'Iron ore mine in Nimba County' },

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
      { id: 'greenbushes', name: 'Greenbushes Mine', lat: -33.87, lng: 116.05, type: 'mine', production: 44, unit: 'kt LCE/year', country: 'Australia', operator: 'Talison Lithium', description: 'World\'s largest hard-rock lithium mine' },
      { id: 'mt-cattlin', name: 'Mt Cattlin', lat: -32.70, lng: 121.65, type: 'mine', production: 8, unit: 'kt LCE/year', country: 'Australia', operator: 'Mineral Resources', description: 'Spodumene lithium mine in Western Australia' },
      { id: 'pilgangoora', name: 'Pilgangoora', lat: -21.65, lng: 118.65, type: 'mine', production: 9, unit: 'kt LCE/year', country: 'Australia', operator: 'Pilbara Minerals', description: 'Large spodumene operation in Pilbara' },

      // Chile - Largest brine producer
      { id: 'atacama', name: 'Salar de Atacama', lat: -23.50, lng: -68.25, type: 'mine', production: 34, unit: 'kt LCE/year', country: 'Chile', operator: 'SQM/Albemarle', description: 'World\'s highest grade lithium brine deposit' },

      // Argentina
      { id: 'hombre-muerto', name: 'Salar del Hombre Muerto', lat: -25.43, lng: -66.90, type: 'mine', production: 11, unit: 'kt LCE/year', country: 'Argentina', operator: 'Livent', description: 'High-grade lithium brine operation' },
      { id: 'olaroz', name: 'Olaroz', lat: -24.18, lng: -66.58, type: 'mine', production: 8, unit: 'kt LCE/year', country: 'Argentina', operator: 'Allkem', description: 'Lithium carbonate production from brine' },

      // China - Major producer and processor
      { id: 'qinghai-salt-lakes', name: 'Qinghai Salt Lakes', lat: 37.22, lng: 95.25, type: 'mine', production: 12, unit: 'kt LCE/year', country: 'China', operator: 'Multiple operators', description: 'Brine lithium production in Qinghai Province' },
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
    color: '#8B6914',
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

      // India - Additional mines
      { id: 'gevra-coal', name: 'Gevra Mine', lat: 22.33, lng: 82.53, type: 'mine', production: 50, unit: 'Mt/year', country: 'India', operator: 'SECL', description: 'One of Asia\'s largest open-pit coal mines in Chhattisgarh' },
      { id: 'kusmunda-coal', name: 'Kusmunda Mine', lat: 22.37, lng: 82.68, type: 'mine', production: 40, unit: 'Mt/year', country: 'India', operator: 'SECL', description: 'Large opencast coal mine in Korba coalfield' },
      { id: 'raniganj-coal', name: 'Raniganj Coalfield', lat: 23.63, lng: 87.12, type: 'mine', production: 40, unit: 'Mt/year', country: 'India', operator: 'Eastern Coalfields Ltd', description: 'Historic coal mining region in West Bengal' },
      { id: 'godavari-valley-coal', name: 'Godavari Valley Coalfield', lat: 18.45, lng: 80.05, type: 'mine', production: 30, unit: 'Mt/year', country: 'India', operator: 'Singareni Collieries', description: 'Major coal producing region in Telangana' },
      { id: 'mahanadi-coal', name: 'Mahanadi Coalfields', lat: 21.25, lng: 84.00, type: 'mine', production: 150, unit: 'Mt/year', country: 'India', operator: 'MCL/Coal India', description: 'Major coal mining operations across Odisha' },
      { id: 'secl-additional', name: 'SECL Additional Areas', lat: 22.08, lng: 82.15, type: 'mine', production: 100, unit: 'Mt/year', country: 'India', operator: 'SECL/Coal India', description: 'Additional mining areas in Chhattisgarh and MP' },
      { id: 'western-coalfields', name: 'Western Coalfields', lat: 21.15, lng: 79.08, type: 'mine', production: 60, unit: 'Mt/year', country: 'India', operator: 'WCL/Coal India', description: 'Coal operations in Maharashtra and MP' },
      { id: 'central-coalfields', name: 'Central Coalfields', lat: 23.78, lng: 85.33, type: 'mine', production: 80, unit: 'Mt/year', country: 'India', operator: 'CCL/Coal India', description: 'Mining across Jharkhand coalfields' },
      { id: 'singareni-coal', name: 'Singareni Collieries', lat: 17.97, lng: 79.58, type: 'mine', production: 60, unit: 'Mt/year', country: 'India', operator: 'SCCL', description: 'Major state-owned coal producer in Telangana' },

      // China - Additional provinces
      { id: 'anhui-coal', name: 'Anhui Province Coal', lat: 32.92, lng: 116.78, type: 'mine', production: 80, unit: 'Mt/year', country: 'China', operator: 'Huainan/Huaibei Mining', description: 'Major coal producing province' },
      { id: 'guizhou-coal', name: 'Guizhou Province Coal', lat: 26.65, lng: 106.63, type: 'mine', production: 70, unit: 'Mt/year', country: 'China', operator: 'Panjiang Mining', description: 'Southwest China coal production base' },
      { id: 'henan-coal', name: 'Henan Province Coal', lat: 34.76, lng: 113.65, type: 'mine', production: 50, unit: 'Mt/year', country: 'China', operator: 'Henan Energy', description: 'Central China coal mining region' },
      { id: 'shandong-coal', name: 'Shandong Province Coal', lat: 36.30, lng: 117.00, type: 'mine', production: 40, unit: 'Mt/year', country: 'China', operator: 'Yanzhou Coal', description: 'Eastern China coal province' },
      { id: 'xinjiang-coal', name: 'Xinjiang Coal Region', lat: 43.82, lng: 87.57, type: 'mine', production: 50, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Expanding coal production in northwest China' },

      // Russia - Additional
      { id: 'elga-coal', name: 'Elga Coal Mine', lat: 56.42, lng: 130.00, type: 'mine', production: 20, unit: 'Mt/year', country: 'Russia', operator: 'Elga Coal', description: 'Major coking coal deposit in Yakutia' },
      { id: 'kuzbass-additional', name: 'Kuzbass Additional Mines', lat: 53.75, lng: 87.17, type: 'mine', production: 40, unit: 'Mt/year', country: 'Russia', operator: 'SDS-Ugol/Kuzbassrazrezugol', description: 'Extended Kuznetsk Basin operations' },

      // Mozambique
      { id: 'moatize-coal', name: 'Moatize Mine', lat: -16.12, lng: 33.75, type: 'mine', production: 10, unit: 'Mt/year', country: 'Mozambique', operator: 'Vale Mozambique', description: 'Major coal mine in Tete Province' },

      // Philippines
      { id: 'semirara-coal', name: 'Semirara Coal Mine', lat: 12.08, lng: 121.40, type: 'mine', production: 12, unit: 'Mt/year', country: 'Philippines', operator: 'Semirara Mining', description: 'Largest coal mine in the Philippines' },

      // China - additional provinces
      { id: 'guizhou-coal-add', name: 'China Guizhou Mines', lat: 26.60, lng: 106.70, type: 'mine', production: 120, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Coal mining operations across Guizhou Province' },
      { id: 'anhui-coal-add', name: 'China Anhui Province Mines', lat: 33.30, lng: 116.80, type: 'mine', production: 90, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Coal mining operations across Anhui Province' },
      { id: 'henan-coal-add', name: 'China Henan Province Mines', lat: 34.00, lng: 113.00, type: 'mine', production: 80, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Coal mining operations across Henan Province' },

      // India - additional coalfields
      { id: 'singareni-coal-add', name: 'India Singareni Collieries', lat: 18.00, lng: 79.58, type: 'mine', production: 65, unit: 'Mt/year', country: 'India', operator: 'SCCL', description: 'Major coal mining company in Telangana' },
      { id: 'northern-coalfields', name: 'India Northern Coalfields', lat: 24.10, lng: 82.50, type: 'mine', production: 55, unit: 'Mt/year', country: 'India', operator: 'NCL/Coal India', description: 'Northern Coalfields subsidiary of Coal India' },
      { id: 'mahanadi-coalfields', name: 'India Mahanadi Coalfields', lat: 21.95, lng: 84.20, type: 'mine', production: 45, unit: 'Mt/year', country: 'India', operator: 'MCL/Coal India', description: 'Mahanadi Coalfields subsidiary of Coal India' },

      // Colombia
      { id: 'cerrejon-coal', name: 'Colombia Cerrejon Mine', lat: 11.10, lng: -72.70, type: 'mine', production: 25, unit: 'Mt/year', country: 'Colombia', operator: 'Glencore', description: 'One of the largest open-pit coal mines in the world' },

      // Poland
      { id: 'silesia-coal', name: 'Poland Silesia Coal District', lat: 50.27, lng: 19.00, type: 'mine', production: 40, unit: 'Mt/year', country: 'Poland', operator: 'PGG/Various', description: 'Major coal mining district in Upper Silesia' },

      // Kazakhstan
      { id: 'ekibastuz-coal', name: 'Kazakhstan Ekibastuz Basin', lat: 51.72, lng: 75.33, type: 'mine', production: 30, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Various', description: 'Major coal basin in central Kazakhstan' },

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
      // Bauxite mines (production converted to aluminium-equivalent: ~5t bauxite → 1t aluminium)
      { id: 'weipa', name: 'Weipa Bauxite Mine', lat: -12.67, lng: 141.87, type: 'mine', capacity: 7, unit: 'Mt equiv/year', country: 'Australia', operator: 'Rio Tinto', description: 'World\'s largest bauxite mine (~35 Mt bauxite/year)' },
      { id: 'paragominas', name: 'Paragominas Mine', lat: -3.00, lng: -47.48, type: 'mine', capacity: 3.6, unit: 'Mt equiv/year', country: 'Brazil', operator: 'Hydro', description: 'Large bauxite mine in Amazon (~18 Mt bauxite/year)' },
      { id: 'guinea-bauxite', name: 'Sangarédi Mine', lat: 11.58, lng: -13.72, type: 'mine', capacity: 7, unit: 'Mt equiv/year', country: 'Guinea', operator: 'CBG', description: 'Major bauxite producer from world\'s largest reserves (~35 Mt bauxite/year)' },
      { id: 'huntly', name: 'Huntly Mine', lat: -33.00, lng: 116.18, type: 'mine', capacity: 5, unit: 'Mt equiv/year', country: 'Australia', operator: 'Alcoa', description: 'Large bauxite mine in Western Australia (~25 Mt bauxite/year)' },

      // Guinea — additional bauxite mines (~15.5 Mt equiv additional)
      { id: 'boke-cbg', name: 'Boké CBG/Sangarédi Complex', lat: 11.08, lng: -14.29, type: 'mine', capacity: 5.0, unit: 'Mt equiv/year', country: 'Guinea', operator: 'CBG (Alcoa/Rio Tinto/Dadco)', description: 'CBG joint venture operations in Boké region (~25 Mt bauxite/year)' },
      { id: 'guinea-gac', name: 'GAC Tinguilinta Mine', lat: 11.30, lng: -14.10, type: 'mine', capacity: 2.5, unit: 'Mt equiv/year', country: 'Guinea', operator: 'Guinea Alumina Corporation (EGA)', description: 'EGA-owned bauxite mine in Boké (~12.5 Mt bauxite/year)' },
      { id: 'smb-winning', name: 'SMB-Winning Consortium Mine', lat: 10.93, lng: -14.45, type: 'mine', capacity: 5.0, unit: 'Mt equiv/year', country: 'Guinea', operator: 'SMB-Winning (Shandong Weiqiao/UMS/Yantaï Port)', description: 'Largest bauxite consortium in Guinea (~25 Mt bauxite/year)' },
      { id: 'fria-rusal', name: 'Fria Bauxite Mine', lat: 10.47, lng: -13.58, type: 'mine', capacity: 1.5, unit: 'Mt equiv/year', country: 'Guinea', operator: 'Rusal/Friguia', description: 'Bauxite mine supplying Fria alumina refinery (~7.5 Mt bauxite/year)' },
      { id: 'kindia-rusal', name: 'Kindia (Dian-Dian) Mine', lat: 10.07, lng: -12.86, type: 'mine', capacity: 1.5, unit: 'Mt equiv/year', country: 'Guinea', operator: 'Rusal', description: 'Rusal-operated bauxite mine near Kindia (~7.5 Mt bauxite/year)' },

      // Australia — additional bauxite mines (~8.5 Mt equiv additional)
      { id: 'worsley-boddington', name: 'Worsley Bauxite Mine', lat: -33.11, lng: 116.48, type: 'mine', capacity: 4.0, unit: 'Mt equiv/year', country: 'Australia', operator: 'South32', description: 'Major Darling Range bauxite mine feeding Worsley refinery (~20 Mt bauxite/year)' },
      { id: 'gove-nhulunbuy', name: 'Gove Bauxite Mine', lat: -12.18, lng: 136.77, type: 'mine', capacity: 2.5, unit: 'Mt equiv/year', country: 'Australia', operator: 'Rio Tinto', description: 'East Arnhem Land bauxite operation in Northern Territory (~12.5 Mt bauxite/year)' },
      { id: 'willowdale', name: 'Willowdale Bauxite Mine', lat: -32.90, lng: 116.05, type: 'mine', capacity: 2.0, unit: 'Mt equiv/year', country: 'Australia', operator: 'Alcoa', description: 'Darling Range bauxite mine in Western Australia (~10 Mt bauxite/year)' },

      // Brazil — additional bauxite mines (~5 Mt equiv additional)
      { id: 'trombetas-mrn', name: 'Trombetas (MRN) Mine', lat: -1.50, lng: -56.38, type: 'mine', capacity: 3.5, unit: 'Mt equiv/year', country: 'Brazil', operator: 'MRN (Vale/South32/Rio Tinto)', description: 'Major bauxite mine on Trombetas River, Pará (~17.5 Mt bauxite/year)' },
      { id: 'juruti-alcoa', name: 'Juruti Bauxite Mine', lat: -2.15, lng: -56.10, type: 'mine', capacity: 1.5, unit: 'Mt equiv/year', country: 'Brazil', operator: 'Alcoa', description: 'Alcoa bauxite operation on Amazon in western Pará (~7.5 Mt bauxite/year)' },

      // China — bauxite mines (~14 Mt equiv)
      { id: 'shanxi-bauxite', name: 'Shanxi Bauxite Mines', lat: 37.55, lng: 111.55, type: 'mine', capacity: 4.0, unit: 'Mt equiv/year', country: 'China', operator: 'Chalco/Various', description: 'Major diasporic bauxite mining region in Shanxi Province (~20 Mt bauxite/year)' },
      { id: 'henan-bauxite', name: 'Henan Bauxite Mines', lat: 34.40, lng: 112.80, type: 'mine', capacity: 4.0, unit: 'Mt equiv/year', country: 'China', operator: 'Chalco/Various', description: 'Large bauxite mining cluster in Henan Province (~20 Mt bauxite/year)' },
      { id: 'guizhou-bauxite', name: 'Guizhou Bauxite Mines', lat: 27.10, lng: 106.90, type: 'mine', capacity: 3.0, unit: 'Mt equiv/year', country: 'China', operator: 'Chalco/Guizhou Aluminium', description: 'Southwest China bauxite mining region (~15 Mt bauxite/year)' },
      { id: 'guangxi-bauxite', name: 'Guangxi Bauxite Mines', lat: 23.50, lng: 107.40, type: 'mine', capacity: 3.0, unit: 'Mt equiv/year', country: 'China', operator: 'Chalco/Various', description: 'Southern China bauxite deposits in Guangxi Province (~15 Mt bauxite/year)' },

      // India — bauxite mines (~5 Mt equiv)
      { id: 'odisha-bauxite', name: 'Odisha Bauxite Mines', lat: 18.90, lng: 83.20, type: 'mine', capacity: 2.5, unit: 'Mt equiv/year', country: 'India', operator: 'Vedanta/NALCO/OMC', description: 'Eastern Ghats bauxite mining complex in Koraput/Kalahandi (~12.5 Mt bauxite/year)' },
      { id: 'nalco-panchpatmali', name: 'NALCO Panchpatmali Mine', lat: 18.70, lng: 83.00, type: 'mine', capacity: 1.5, unit: 'Mt equiv/year', country: 'India', operator: 'NALCO', description: 'Hilltop bauxite mine feeding NALCO Damanjodi refinery (~7.5 Mt bauxite/year)' },
      { id: 'hindalco-renukoot', name: 'Hindalco Renukoot Mines', lat: 24.20, lng: 83.02, type: 'mine', capacity: 1.0, unit: 'Mt equiv/year', country: 'India', operator: 'Hindalco (Aditya Birla)', description: 'Bauxite mines supplying Renukoot alumina complex (~5 Mt bauxite/year)' },

      // Indonesia — bauxite mines (~8 Mt equiv)
      { id: 'west-kalimantan-bauxite', name: 'West Kalimantan Bauxite Mines', lat: 0.50, lng: 109.30, type: 'mine', capacity: 4.0, unit: 'Mt equiv/year', country: 'Indonesia', operator: 'Antam/Various', description: 'Borneo bauxite mining region, laterite deposits (~20 Mt bauxite/year)' },
      { id: 'bintan-bauxite', name: 'Bintan Island Bauxite Mine', lat: 1.05, lng: 104.52, type: 'mine', capacity: 2.0, unit: 'Mt equiv/year', country: 'Indonesia', operator: 'Antam/PT Bintan Alumina', description: 'Riau Islands bauxite mine near Singapore (~10 Mt bauxite/year)' },
      { id: 'mempawah-bauxite', name: 'Mempawah Bauxite Mines', lat: 0.35, lng: 108.96, type: 'mine', capacity: 2.0, unit: 'Mt equiv/year', country: 'Indonesia', operator: 'Harita Group/Various', description: 'West Kalimantan coastal bauxite operations (~10 Mt bauxite/year)' },

      // Jamaica — bauxite mines (~2 Mt equiv)
      { id: 'jamaica-noranda', name: 'Jamaica Bauxite Mines', lat: 18.30, lng: -77.60, type: 'mine', capacity: 2.0, unit: 'Mt equiv/year', country: 'Jamaica', operator: 'Noranda Jamaica/Jamaica Bauxite Partners', description: 'Historic Caribbean bauxite producer, multiple concessions (~10 Mt bauxite/year)' },

      // Russia — bauxite mine (~1.5 Mt equiv)
      { id: 'rusal-timan', name: 'Timan Bauxite Mine', lat: 62.15, lng: 55.68, type: 'mine', capacity: 1.5, unit: 'Mt equiv/year', country: 'Russia', operator: 'Rusal', description: 'Major Russian bauxite deposit in Komi Republic (~7.5 Mt bauxite/year)' },

      // Ghana — bauxite mine (~2 Mt equiv)
      { id: 'awaso-ghana', name: 'Awaso Bauxite Mine', lat: 6.17, lng: -2.27, type: 'mine', capacity: 2.0, unit: 'Mt equiv/year', country: 'Ghana', operator: 'Ghana Bauxite Company (Bosai Minerals)', description: 'Ghana\'s primary bauxite mine in Western Region (~10 Mt bauxite/year)' },

      // Sierra Leone — bauxite mine (~1 Mt equiv)
      { id: 'sierra-leone-bauxite', name: 'Port Loko Bauxite Mine', lat: 8.77, lng: -12.79, type: 'mine', capacity: 1.0, unit: 'Mt equiv/year', country: 'Sierra Leone', operator: 'Vimetco/Sierra Minerals', description: 'West African bauxite operation near Freetown (~5 Mt bauxite/year)' },

      // Vietnam — bauxite mine (~1 Mt equiv)
      { id: 'vietnam-dak-nong', name: 'Đắk Nông Bauxite Mine', lat: 12.00, lng: 107.69, type: 'mine', capacity: 1.0, unit: 'Mt equiv/year', country: 'Vietnam', operator: 'Vinacomin/TKV', description: 'Central Highlands bauxite mine in Đắk Nông Province (~5 Mt bauxite/year)' },

      // Saudi Arabia — bauxite mine (~1 Mt equiv)
      { id: 'maaden-al-baitha', name: 'Ma\'aden Al Ba\'itha Mine', lat: 23.65, lng: 44.38, type: 'mine', capacity: 1.0, unit: 'Mt equiv/year', country: 'Saudi Arabia', operator: 'Ma\'aden', description: 'Saudi Arabia\'s primary bauxite mine in Qassim region (~5 Mt bauxite/year)' },

      // Malaysia — bauxite mine (~0.5 Mt equiv)
      { id: 'kuantan-bauxite', name: 'Kuantan Bauxite Mines', lat: 3.80, lng: 103.33, type: 'mine', capacity: 0.5, unit: 'Mt equiv/year', country: 'Malaysia', operator: 'Various', description: 'Pahang state bauxite mining area on east coast Peninsular Malaysia (~2.5 Mt bauxite/year)' },

      // Alumina refineries (capacity converted to aluminium-equivalent: ~2t alumina → 1t aluminium)
      { id: 'gladstone', name: 'Gladstone Alumina Refinery', lat: -23.85, lng: 151.25, type: 'refinery', capacity: 1.9, unit: 'Mt equiv/year', country: 'Australia', operator: 'Rio Tinto', description: 'One of world\'s largest alumina refineries (~3.8 Mt alumina/year)' },
      { id: 'alunorte', name: 'Alunorte Refinery', lat: -2.61, lng: -48.45, type: 'refinery', capacity: 3.2, unit: 'Mt equiv/year', country: 'Brazil', operator: 'Hydro', description: 'World\'s largest alumina refinery (~6.3 Mt alumina/year)' },

      // Aluminium smelters — China (~40 Mt, 57% of global)
      { id: 'hongqiao', name: 'China Hongqiao Smelters', lat: 35.38, lng: 118.35, type: 'plant', production: 6.0, unit: 'Mt/year', country: 'China', operator: 'China Hongqiao', description: 'World\'s largest aluminium producer (Shandong)' },
      { id: 'xinfa', name: 'Xinfa Group Smelters', lat: 36.70, lng: 118.05, type: 'plant', production: 5.0, unit: 'Mt/year', country: 'China', operator: 'Xinfa Group', description: 'Major Chinese aluminium producer (Shandong)' },
      { id: 'chalco-main', name: 'Chalco Smelters', lat: 34.75, lng: 113.65, type: 'plant', production: 4.5, unit: 'Mt/year', country: 'China', operator: 'Chalco', description: 'State-owned aluminium giant (multiple sites)' },
      { id: 'east-hope', name: 'East Hope Group Smelters', lat: 37.87, lng: 112.55, type: 'plant', production: 3.5, unit: 'Mt/year', country: 'China', operator: 'East Hope Group', description: 'Major private aluminium producer (Xinjiang/Shanxi)' },
      { id: 'yunnan-al', name: 'Yunnan Aluminium', lat: 25.04, lng: 102.71, type: 'plant', production: 3.2, unit: 'Mt/year', country: 'China', operator: 'Yunnan Aluminium', description: 'Hydropower-based smelting hub' },
      { id: 'guangxi-al', name: 'Guangxi Aluminium Cluster', lat: 23.73, lng: 108.32, type: 'plant', production: 3.0, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Southern China smelting region' },
      { id: 'inner-mongolia-al', name: 'Inner Mongolia Smelters', lat: 40.84, lng: 111.75, type: 'plant', production: 3.5, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Coal-powered smelting region' },
      { id: 'chalco-qinghai', name: 'Qinghai Aluminum', lat: 36.62, lng: 101.77, type: 'plant', production: 1.5, unit: 'Mt/year', country: 'China', operator: 'Chalco', description: 'Hydropower-based smelter in western China' },
      { id: 'guizhou-al', name: 'Guizhou Aluminium', lat: 26.65, lng: 106.63, type: 'plant', production: 2.5, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Southwest China smelting cluster' },

      // India (~4 Mt)
      { id: 'hindalco', name: 'Hindalco Smelters', lat: 24.80, lng: 82.38, type: 'plant', production: 1.3, unit: 'Mt/year', country: 'India', operator: 'Hindalco/Aditya Birla', description: 'India\'s largest aluminium producer' },
      { id: 'vedanta-jharsuguda', name: 'Vedanta Jharsuguda', lat: 21.85, lng: 84.01, type: 'plant', production: 1.8, unit: 'Mt/year', country: 'India', operator: 'Vedanta', description: 'World\'s largest single-location aluminium smelter' },
      { id: 'nalco', name: 'NALCO Angul Smelter', lat: 20.84, lng: 85.10, type: 'plant', production: 0.46, unit: 'Mt/year', country: 'India', operator: 'NALCO', description: 'Indian state-owned aluminium producer' },

      // Russia (~3.6 Mt)
      { id: 'rusal-bratsk', name: 'Bratsk Smelter', lat: 56.15, lng: 101.63, type: 'plant', production: 1.05, unit: 'Mt/year', country: 'Russia', operator: 'Rusal', description: 'One of the world\'s largest aluminium smelters' },
      { id: 'rusal-krasnoyarsk', name: 'Krasnoyarsk Smelter', lat: 56.02, lng: 92.85, type: 'plant', production: 1.03, unit: 'Mt/year', country: 'Russia', operator: 'Rusal', description: 'Major Siberian aluminium smelter' },
      { id: 'rusal-sayanogorsk', name: 'Sayanogorsk Smelter', lat: 52.00, lng: 91.40, type: 'plant', production: 0.54, unit: 'Mt/year', country: 'Russia', operator: 'Rusal', description: 'Hydropower-fed smelter near Sayano-Shushenskaya dam' },
      { id: 'rusal-novokuznetsk', name: 'Novokuznetsk Smelter', lat: 53.76, lng: 87.11, type: 'plant', production: 0.22, unit: 'Mt/year', country: 'Russia', operator: 'Rusal', description: 'Siberian aluminium smelter' },

      // Middle East (~5.5 Mt)
      { id: 'alba', name: 'Aluminium Bahrain (Alba)', lat: 26.03, lng: 50.51, type: 'plant', production: 1.56, unit: 'Mt/year', country: 'Bahrain', operator: 'Alba', description: 'One of the world\'s largest single-site smelters' },
      { id: 'dubal', name: 'EGA Jebel Ali', lat: 24.98, lng: 55.08, type: 'plant', production: 1.4, unit: 'Mt/year', country: 'UAE', operator: 'Emirates Global Aluminium', description: 'Major Middle East smelter complex' },
      { id: 'emal', name: 'EGA Al Taweelah', lat: 24.60, lng: 54.60, type: 'plant', production: 1.3, unit: 'Mt/year', country: 'UAE', operator: 'Emirates Global Aluminium', description: 'World-class smelter in Abu Dhabi' },
      { id: 'ma-aden', name: 'Ma\'aden Aluminium', lat: 27.05, lng: 49.59, type: 'plant', production: 0.74, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'Ma\'aden/Alcoa', description: 'Integrated aluminium complex' },
      { id: 'sohar', name: 'Sohar Aluminium', lat: 24.43, lng: 56.73, type: 'plant', production: 0.39, unit: 'Mt/year', country: 'Oman', operator: 'OQ/Rio Tinto', description: 'Integrated aluminium complex' },

      // Canada (~3 Mt)
      { id: 'kitimat', name: 'Kitimat Smelter', lat: 54.05, lng: -128.68, type: 'plant', production: 0.44, unit: 'Mt/year', country: 'Canada', operator: 'Rio Tinto', description: 'Large BC aluminium smelter' },
      { id: 'arvida', name: 'Arvida/Saguenay Complex', lat: 48.43, lng: -71.07, type: 'plant', production: 1.0, unit: 'Mt/year', country: 'Canada', operator: 'Rio Tinto', description: 'Major Quebec hydropower smelting complex' },
      { id: 'alouette', name: 'Alouette Smelter', lat: 50.22, lng: -66.37, type: 'plant', production: 0.62, unit: 'Mt/year', country: 'Canada', operator: 'Rio Tinto/Marubeni', description: 'Americas\' largest aluminium smelter' },
      { id: 'becancour', name: 'Bécancour Smelter', lat: 46.35, lng: -72.43, type: 'plant', production: 0.44, unit: 'Mt/year', country: 'Canada', operator: 'Alcoa', description: 'Quebec aluminium smelter' },

      // Norway (~1.4 Mt)
      { id: 'hydro-karmoy', name: 'Hydro Karmøy', lat: 59.28, lng: 5.31, type: 'plant', production: 0.28, unit: 'Mt/year', country: 'Norway', operator: 'Norsk Hydro', description: 'Hydropower-based smelter with pilot zero-carbon technology' },
      { id: 'hydro-sunndal', name: 'Hydro Sunndal', lat: 62.67, lng: 8.56, type: 'plant', production: 0.40, unit: 'Mt/year', country: 'Norway', operator: 'Norsk Hydro', description: 'Major Norwegian smelter' },
      { id: 'hydro-husnes', name: 'Hydro Husnes', lat: 59.87, lng: 5.75, type: 'plant', production: 0.19, unit: 'Mt/year', country: 'Norway', operator: 'Norsk Hydro', description: 'Western Norway smelter' },

      // Iceland (~0.9 Mt)
      { id: 'fjardaal', name: 'Alcoa Fjarðaál', lat: 64.68, lng: -14.01, type: 'plant', production: 0.35, unit: 'Mt/year', country: 'Iceland', operator: 'Alcoa', description: 'Geothermal/hydropower-fed smelter' },
      { id: 'norduralid', name: 'Norðurál Grundartangi', lat: 64.35, lng: -21.67, type: 'plant', production: 0.32, unit: 'Mt/year', country: 'Iceland', operator: 'Century Aluminum', description: 'Hydropower-based smelter' },

      // Africa (~1.8 Mt)
      { id: 'mozal', name: 'Mozal Smelter', lat: -26.02, lng: 32.45, type: 'plant', production: 0.58, unit: 'Mt/year', country: 'Mozambique', operator: 'South32', description: 'Southern Africa\'s major aluminium smelter' },
      { id: 'hillside', name: 'Hillside Smelter', lat: -28.82, lng: 31.98, type: 'plant', production: 0.72, unit: 'Mt/year', country: 'South Africa', operator: 'South32', description: 'Africa\'s largest aluminium smelter' },
      { id: 'egyptalum', name: 'Egyptalum Nag Hammadi', lat: 26.05, lng: 32.17, type: 'plant', production: 0.32, unit: 'Mt/year', country: 'Egypt', operator: 'Egyptalum', description: 'Nile hydropower-fed smelter' },

      // Australia (~1.6 Mt)
      { id: 'tomago', name: 'Tomago Smelter', lat: -32.84, lng: 151.73, type: 'plant', production: 0.59, unit: 'Mt/year', country: 'Australia', operator: 'Rio Tinto/Glencore', description: 'Largest Australian aluminium smelter' },
      { id: 'alcoa-portland', name: 'Alcoa Portland', lat: -38.33, lng: 141.60, type: 'plant', production: 0.36, unit: 'Mt/year', country: 'Australia', operator: 'Alcoa', description: 'Major Victorian aluminium smelter' },
      { id: 'boyne-island', name: 'Boyne Smelters', lat: -24.02, lng: 151.33, type: 'plant', production: 0.50, unit: 'Mt/year', country: 'Australia', operator: 'Rio Tinto', description: 'Queensland aluminium smelter' },

      // Brazil (~0.7 Mt)
      { id: 'albras', name: 'Albras Smelter', lat: -2.58, lng: -48.48, type: 'plant', production: 0.48, unit: 'Mt/year', country: 'Brazil', operator: 'Hydro', description: 'Major aluminium smelter in Pará' },

      // USA (~0.7 Mt)
      { id: 'century-aluminum', name: 'Century Aluminum Kentucky', lat: 37.08, lng: -88.63, type: 'plant', production: 0.26, unit: 'Mt/year', country: 'USA', operator: 'Century Aluminum', description: 'Major US aluminium producer' },
      { id: 'alcoa-massena', name: 'Alcoa Massena', lat: 44.93, lng: -74.89, type: 'plant', production: 0.13, unit: 'Mt/year', country: 'USA', operator: 'Alcoa', description: 'New York state aluminium smelter' },

      // Additional smelters (~10.5 Mt)
      { id: 'china-henan-smelters', name: 'China Henan Smelters', lat: 34.75, lng: 113.50, type: 'plant', production: 2.5, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Henan province aluminium smelter cluster' },
      { id: 'china-sichuan-cq-smelters', name: 'China Sichuan/Chongqing Smelters', lat: 30.57, lng: 104.07, type: 'plant', production: 1.5, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Southwest China hydropower-fed smelters' },
      { id: 'china-shandong-other', name: 'China Shandong Other Smelters', lat: 36.80, lng: 117.00, type: 'plant', production: 2.0, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Additional Shandong province smelter capacity' },
      { id: 'india-balco-korba', name: 'India Balco/Korba Smelter', lat: 22.35, lng: 82.68, type: 'plant', production: 0.57, unit: 'Mt/year', country: 'India', operator: 'Vedanta/BALCO', description: 'Chhattisgarh coal-powered aluminium smelter' },
      { id: 'indonesia-inalum', name: 'Indonesia Inalum Kuala Tanjung', lat: 3.38, lng: 99.45, type: 'plant', production: 0.25, unit: 'Mt/year', country: 'Indonesia', operator: 'MIND ID/Inalum', description: 'North Sumatra aluminium smelter' },
      { id: 'south-korea-ulsan', name: 'South Korea Ulsan Smelter', lat: 35.55, lng: 129.31, type: 'plant', production: 0.15, unit: 'Mt/year', country: 'South Korea', operator: 'Novelis', description: 'South Korean aluminium production facility' },
      { id: 'argentina-puerto-madryn', name: 'Argentina Puerto Madryn', lat: -42.77, lng: -65.04, type: 'plant', production: 0.46, unit: 'Mt/year', country: 'Argentina', operator: 'Aluar', description: 'Patagonia wind/hydro-powered aluminium smelter' },
      { id: 'nz-tiwai-point', name: 'New Zealand Tiwai Point', lat: -46.58, lng: 168.37, type: 'plant', production: 0.33, unit: 'Mt/year', country: 'New Zealand', operator: 'Rio Tinto', description: 'Southland hydropower aluminium smelter' },
      { id: 'tajikistan-talco', name: 'Tajikistan TALCO', lat: 38.54, lng: 68.77, type: 'plant', production: 0.30, unit: 'Mt/year', country: 'Tajikistan', operator: 'TALCO', description: 'Central Asian aluminium smelter using hydropower' },
      { id: 'ghana-valco-tema', name: 'Ghana Valco Tema', lat: 5.62, lng: -0.02, type: 'plant', production: 0.14, unit: 'Mt/year', country: 'Ghana', operator: 'VALCO', description: 'West African aluminium smelter at Tema' },
      { id: 'iran-iralco', name: 'Iran IRALCO', lat: 34.30, lng: 49.70, type: 'plant', production: 0.50, unit: 'Mt/year', country: 'Iran', operator: 'IRALCO', description: 'Iranian aluminium production complex at Arak' },
      { id: 'world-other-smelters', name: 'Other World Aluminium Smelters', lat: 10.0, lng: 25.0, type: 'plant', production: 1.8, unit: 'Mt/year', country: 'Various', operator: 'Multiple', description: 'Aggregate of smaller global aluminium smelter operations' },

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

      // USA - Additional fields
      { id: 'utica-shale', name: 'Utica Shale', lat: 40.10, lng: -81.20, type: 'field', production: 100, unit: 'bcm/year', country: 'USA', operator: 'Multiple operators', description: 'Major Appalachian shale gas play' },
      { id: 'eagle-ford-gas', name: 'Eagle Ford Gas', lat: 28.70, lng: -98.50, type: 'field', production: 45, unit: 'bcm/year', country: 'USA', operator: 'EOG/ConocoPhillips', description: 'Associated gas from Eagle Ford Shale' },
      { id: 'scoop-stack', name: 'SCOOP-STACK Play', lat: 35.20, lng: -97.80, type: 'field', production: 50, unit: 'bcm/year', country: 'USA', operator: 'Continental/Devon', description: 'Oklahoma gas play' },
      { id: 'gulf-of-mexico-gas', name: 'Gulf of Mexico Gas', lat: 28.50, lng: -89.50, type: 'field', production: 30, unit: 'bcm/year', country: 'USA', operator: 'Shell/BP/Chevron', description: 'Deepwater natural gas production' },
      { id: 'barnett-shale', name: 'Barnett Shale', lat: 32.80, lng: -97.40, type: 'field', production: 20, unit: 'bcm/year', country: 'USA', operator: 'Multiple operators', description: 'Pioneering shale gas play in Fort Worth Basin' },
      { id: 'appalachian-other', name: 'Appalachian Basin Other', lat: 38.50, lng: -80.50, type: 'field', production: 80, unit: 'bcm/year', country: 'USA', operator: 'EQT/Southwestern', description: 'Additional Appalachian gas production' },

      // Russia - Additional fields
      { id: 'yamburg', name: 'Yamburg Gas Field', lat: 67.97, lng: 75.50, type: 'field', production: 85, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'Supergiant gas field in Yamalo-Nenets' },
      { id: 'zapolyarnoye', name: 'Zapolyarnoye Field', lat: 65.38, lng: 78.08, type: 'field', production: 80, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'Supergiant gas field in Western Siberia' },
      { id: 'orenburg-gas', name: 'Orenburg Gas Field', lat: 51.40, lng: 55.50, type: 'field', production: 25, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'Large gas condensate field in the Urals' },
      { id: 'chayandinskoye', name: 'Chayandinskoye Field', lat: 58.83, lng: 113.67, type: 'field', production: 25, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'Key source for Power of Siberia pipeline' },
      { id: 'medvezhe', name: 'Medvezhe Field', lat: 66.00, lng: 74.00, type: 'field', production: 30, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'Major West Siberian gas field' },

      // Iran - Additional
      { id: 'kangan-dalan', name: 'Kangan-Dalan Fields', lat: 28.50, lng: 52.30, type: 'field', production: 30, unit: 'bcm/year', country: 'Iran', operator: 'NIOC', description: 'Major onshore gas formations in Fars Province' },

      // China - Additional
      { id: 'sichuan-basin', name: 'Sichuan Basin Gas Fields', lat: 30.50, lng: 104.50, type: 'field', production: 60, unit: 'bcm/year', country: 'China', operator: 'PetroChina/Sinopec', description: 'Major conventional and tight gas production' },
      { id: 'tarim-basin-gas', name: 'Tarim Basin Gas', lat: 39.00, lng: 83.50, type: 'field', production: 30, unit: 'bcm/year', country: 'China', operator: 'PetroChina', description: 'Deep gas from the Tarim Basin in Xinjiang' },

      // Canada
      { id: 'montney', name: 'Montney Formation', lat: 56.50, lng: -121.00, type: 'field', production: 120, unit: 'bcm/year', country: 'Canada', operator: 'Tourmaline/CNRL/ARC', description: 'Largest natural gas play in Canada' },
      { id: 'wcsb-other', name: 'WCSB Conventional Gas', lat: 53.00, lng: -115.00, type: 'field', production: 40, unit: 'bcm/year', country: 'Canada', operator: 'Multiple operators', description: 'Western Canadian conventional gas' },

      // Saudi Arabia
      { id: 'ghawar-gas', name: 'Ghawar Associated Gas', lat: 25.40, lng: 49.50, type: 'field', production: 50, unit: 'bcm/year', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Associated gas from world\'s largest oil field' },
      { id: 'wasit-gas', name: 'Wasit Gas Plant Fields', lat: 27.65, lng: 49.50, type: 'field', production: 35, unit: 'bcm/year', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Offshore non-associated gas fields' },

      // Egypt
      { id: 'zohr', name: 'Zohr Gas Field', lat: 31.82, lng: 32.53, type: 'field', production: 30, unit: 'bcm/year', country: 'Egypt', operator: 'Eni/bp', description: 'Largest gas field in the Mediterranean Sea' },
      { id: 'west-nile-delta', name: 'West Nile Delta Fields', lat: 31.70, lng: 30.00, type: 'field', production: 15, unit: 'bcm/year', country: 'Egypt', operator: 'bp/DEA', description: 'Offshore gas complex including Raven and Taurus' },

      // Norway - Additional
      { id: 'ormen-lange', name: 'Ormen Lange Field', lat: 63.10, lng: 5.30, type: 'field', production: 20, unit: 'bcm/year', country: 'Norway', operator: 'Shell/Equinor', description: 'Major deepwater gas field' },
      { id: 'sleipner', name: 'Sleipner Field', lat: 58.37, lng: 1.91, type: 'field', production: 12, unit: 'bcm/year', country: 'Norway', operator: 'Equinor', description: 'Gas field with carbon capture' },

      // Malaysia
      { id: 'sarawak-gas', name: 'Sarawak Offshore Gas', lat: 4.50, lng: 111.00, type: 'field', production: 35, unit: 'bcm/year', country: 'Malaysia', operator: 'PETRONAS/Shell', description: 'Major gas area feeding Bintulu LNG' },

      // Indonesia
      { id: 'tangguh', name: 'Tangguh LNG Gas Field', lat: -2.80, lng: 134.30, type: 'field', production: 12, unit: 'bcm/year', country: 'Indonesia', operator: 'bp', description: 'Major LNG source in Papua' },
      { id: 'mahakam-delta', name: 'Mahakam Delta Gas', lat: -0.50, lng: 117.30, type: 'field', production: 15, unit: 'bcm/year', country: 'Indonesia', operator: 'Pertamina/TotalEnergies', description: 'Gas production in East Kalimantan' },

      // Nigeria
      { id: 'bonny-nlng', name: 'Bonny/NLNG Supply Fields', lat: 4.43, lng: 7.16, type: 'field', production: 25, unit: 'bcm/year', country: 'Nigeria', operator: 'Shell/NNPC', description: 'Gas supplying Nigeria LNG' },

      // UAE
      { id: 'shah-gas-uae', name: 'Shah Gas Field', lat: 23.20, lng: 53.50, type: 'field', production: 20, unit: 'bcm/year', country: 'UAE', operator: 'ADNOC', description: 'Large sour gas development' },

      // Uzbekistan
      { id: 'gazli', name: 'Gazli Gas Field', lat: 40.13, lng: 63.45, type: 'field', production: 20, unit: 'bcm/year', country: 'Uzbekistan', operator: 'Uzbekneftegaz', description: 'Historic large gas field' },
      { id: 'shurtan', name: 'Shurtan Gas Field', lat: 38.70, lng: 65.80, type: 'field', production: 18, unit: 'bcm/year', country: 'Uzbekistan', operator: 'Uzbekneftegaz', description: 'Major gas condensate field' },

      // Trinidad and Tobago
      { id: 'atlantic-lng-fields', name: 'Atlantic LNG Supply Fields', lat: 10.40, lng: -61.00, type: 'field', production: 18, unit: 'bcm/year', country: 'Trinidad and Tobago', operator: 'bp/Shell/NGC', description: 'Offshore gas fields for Atlantic LNG' },

      // Pakistan
      { id: 'sui-gas', name: 'Sui Gas Field', lat: 28.65, lng: 68.90, type: 'field', production: 12, unit: 'bcm/year', country: 'Pakistan', operator: 'PPL', description: 'Pakistan\'s largest gas field' },

      // Bangladesh
      { id: 'bibiyana', name: 'Bibiyana Gas Field', lat: 24.76, lng: 91.70, type: 'field', production: 12, unit: 'bcm/year', country: 'Bangladesh', operator: 'Chevron', description: 'Largest gas field in Bangladesh' },

      // UK
      { id: 'uk-north-sea-gas', name: 'UK North Sea Gas Fields', lat: 57.50, lng: 1.50, type: 'field', production: 30, unit: 'bcm/year', country: 'UK', operator: 'Shell/bp/Harbour Energy', description: 'Aggregate UK Continental Shelf gas' },

      // Thailand
      { id: 'gulf-thailand-gas', name: 'Gulf of Thailand Gas', lat: 9.50, lng: 101.50, type: 'field', production: 22, unit: 'bcm/year', country: 'Thailand', operator: 'PTTEP/Chevron', description: 'Offshore gas fields' },

      // Bolivia
      { id: 'tarija-gas', name: 'Tarija Gas Fields', lat: -21.50, lng: -63.50, type: 'field', production: 12, unit: 'bcm/year', country: 'Bolivia', operator: 'YPFB/TotalEnergies', description: 'Gas fields including San Alberto' },

      // India
      { id: 'krishna-godavari', name: 'Krishna-Godavari Basin', lat: 16.50, lng: 82.00, type: 'field', production: 15, unit: 'bcm/year', country: 'India', operator: 'Reliance/bp/ONGC', description: 'Deepwater gas fields including KG-D6' },

      // Brazil
      { id: 'santos-basin-gas', name: 'Santos Basin Pre-Salt Gas', lat: -25.50, lng: -43.00, type: 'field', production: 20, unit: 'bcm/year', country: 'Brazil', operator: 'Petrobras', description: 'Associated gas from pre-salt fields' },

      // Iraq
      { id: 'basra-gas', name: 'Basra Gas Fields', lat: 30.50, lng: 47.80, type: 'field', production: 18, unit: 'bcm/year', country: 'Iraq', operator: 'Basra Gas Company', description: 'Associated gas from southern Iraqi fields' },

      // Algeria - Additional
      { id: 'in-salah', name: 'In Salah Gas Fields', lat: 28.00, lng: 2.50, type: 'field', production: 8, unit: 'bcm/year', country: 'Algeria', operator: 'Sonatrach/bp', description: 'Central Saharan gas with CCS project' },
      { id: 'in-amenas', name: 'In Amenas Gas Field', lat: 28.20, lng: 9.50, type: 'field', production: 9, unit: 'bcm/year', country: 'Algeria', operator: 'Sonatrach/bp', description: 'Wet gas in the Illizi Basin' },

      // Mozambique
      { id: 'rovuma-basin', name: 'Rovuma Basin Gas', lat: -12.00, lng: 40.50, type: 'field', production: 10, unit: 'bcm/year', country: 'Mozambique', operator: 'TotalEnergies/Eni', description: 'Massive deepwater gas discoveries' },

      // Peru
      { id: 'camisea-gas', name: 'Camisea Gas Fields', lat: -11.85, lng: -72.70, type: 'field', production: 14, unit: 'bcm/year', country: 'Peru', operator: 'Pluspetrol/Hunt Oil', description: 'Peru\'s main gas supply from Ucayali Basin' },

      // Papua New Guinea
      { id: 'png-lng-fields', name: 'PNG LNG Gas Fields', lat: -6.00, lng: 143.00, type: 'field', production: 12, unit: 'bcm/year', country: 'Papua New Guinea', operator: 'ExxonMobil/Santos', description: 'Hides and Angore gas fields' },

      { id: 'ichthys', name: 'Ichthys LNG', lat: -12.57, lng: 130.85, type: 'plant', capacity: 9.6, unit: 'Mt LNG/year', country: 'Australia', operator: 'INPEX', description: 'Darwin LNG facility' },
      { id: 'wheatstone', name: 'Wheatstone LNG', lat: -21.30, lng: 114.85, type: 'plant', capacity: 9, unit: 'Mt LNG/year', country: 'Australia', operator: 'Chevron', description: 'Western Australian LNG' },
      { id: 'corpus-christi', name: 'Corpus Christi LNG', lat: 27.83, lng: -97.47, type: 'plant', capacity: 18, unit: 'Mt LNG/year', country: 'USA', operator: 'Cheniere', description: 'Texas LNG exporter' },


      // Additional gas fields (~620 bcm)
      { id: 'usa-dj-basin-gas', name: 'USA Denver-Julesburg Basin Gas', lat: 40.05, lng: -104.75, type: 'field', production: 35, unit: 'bcm/year', country: 'USA', operator: 'Various', description: 'Colorado DJ Basin tight gas and associated gas production' },
      { id: 'usa-san-juan-basin', name: 'USA San Juan Basin', lat: 36.80, lng: -107.90, type: 'field', production: 25, unit: 'bcm/year', country: 'USA', operator: 'Various', description: 'New Mexico/Colorado coalbed methane and conventional gas' },
      { id: 'usa-fayetteville-shale', name: 'USA Fayetteville Shale', lat: 35.50, lng: -92.00, type: 'field', production: 20, unit: 'bcm/year', country: 'USA', operator: 'Various', description: 'Arkansas shale gas production' },
      { id: 'russia-kovykta', name: 'Russia Kovykta Field', lat: 55.50, lng: 107.50, type: 'field', production: 25, unit: 'bcm/year', country: 'Russia', operator: 'Gazprom', description: 'East Siberian gas field feeding Power of Siberia pipeline' },
      { id: 'russia-cenomanian', name: 'Russia Cenomanian Fields', lat: 65.00, lng: 73.00, type: 'field', production: 40, unit: 'bcm/year', country: 'Russia', operator: 'Various', description: 'West Siberian shallow gas production from Cenomanian reservoirs' },
      { id: 'russia-sakhalin-gas', name: 'Russia Sakhalin Gas', lat: 51.50, lng: 143.50, type: 'field', production: 20, unit: 'bcm/year', country: 'Russia', operator: 'Sakhalin Energy', description: 'Sakhalin Island offshore gas production' },
      { id: 'iran-north-pars-other', name: 'Iran North Pars/Other', lat: 27.50, lng: 52.50, type: 'field', production: 50, unit: 'bcm/year', country: 'Iran', operator: 'NIOC', description: 'Iranian offshore and onshore gas fields beyond South Pars' },
      { id: 'qatar-north-field-expansion', name: 'Qatar North Field Expansion', lat: 26.20, lng: 52.10, type: 'field', production: 60, unit: 'bcm/year', country: 'Qatar', operator: 'QatarEnergy', description: 'North Field East/South expansion phases' },
      { id: 'turkmenistan-galkynysh-2', name: 'Turkmenistan Galkynysh Phase 2', lat: 37.30, lng: 63.50, type: 'field', production: 25, unit: 'bcm/year', country: 'Turkmenistan', operator: 'Turkmengaz', description: 'Second phase of worlds second-largest gas field' },
      { id: 'china-ordos-cbm', name: 'China Ordos Basin Coal-Bed', lat: 39.50, lng: 110.00, type: 'field', production: 20, unit: 'bcm/year', country: 'China', operator: 'PetroChina', description: 'Coalbed methane and tight gas from Ordos Basin' },
      { id: 'china-south-china-sea-gas', name: 'China South China Sea Gas', lat: 18.00, lng: 112.00, type: 'field', production: 15, unit: 'bcm/year', country: 'China', operator: 'CNOOC', description: 'Offshore deepwater gas production in South China Sea' },
      { id: 'saudi-jafurah', name: 'Saudi Arabia Jafurah Field', lat: 24.50, lng: 49.50, type: 'field', production: 20, unit: 'bcm/year', country: 'Saudi Arabia', operator: 'Saudi Aramco', description: 'Unconventional gas megaproject in Eastern Province' },
      { id: 'egypt-west-med-gas', name: 'Egypt West Mediterranean Gas', lat: 31.50, lng: 28.50, type: 'field', production: 12, unit: 'bcm/year', country: 'Egypt', operator: 'Various', description: 'Western Mediterranean offshore gas fields' },
      { id: 'malaysia-sabah-gas', name: 'Malaysia Sabah Offshore Gas', lat: 6.00, lng: 116.00, type: 'field', production: 15, unit: 'bcm/year', country: 'Malaysia', operator: 'Petronas', description: 'Sabah offshore deepwater gas production' },
      { id: 'indonesia-natuna-gas', name: 'Indonesia Natuna Sea Gas', lat: 3.50, lng: 108.00, type: 'field', production: 10, unit: 'bcm/year', country: 'Indonesia', operator: 'Pertamina', description: 'Natuna Sea offshore gas fields' },
      { id: 'oman-khazzan-other', name: 'Oman Khazzan Phase 2 & Other', lat: 21.00, lng: 57.00, type: 'field', production: 12, unit: 'bcm/year', country: 'Oman', operator: 'BP/Oman Oil', description: 'Tight gas and conventional gas production' },
      { id: 'myanmar-yadana-zawtika', name: 'Myanmar Yadana/Zawtika Gas', lat: 13.00, lng: 96.50, type: 'field', production: 8, unit: 'bcm/year', country: 'Myanmar', operator: 'TotalEnergies/PTTEP', description: 'Andaman Sea offshore gas fields' },
      { id: 'argentina-vaca-muerta-exp', name: 'Argentina Vaca Muerta Expansion', lat: -38.20, lng: -69.50, type: 'field', production: 12, unit: 'bcm/year', country: 'Argentina', operator: 'YPF/Various', description: 'Expanding shale gas production from Neuquen Basin' },
      { id: 'nigeria-nlng-supply', name: 'Nigeria NLNG Expansion Supply', lat: 4.30, lng: 7.20, type: 'field', production: 15, unit: 'bcm/year', country: 'Nigeria', operator: 'NLNG/SPDC', description: 'Niger Delta associated and non-associated gas for LNG' },
      { id: 'uae-shah-habshan', name: 'UAE Shah/Habshan Fields', lat: 23.80, lng: 53.80, type: 'field', production: 18, unit: 'bcm/year', country: 'UAE', operator: 'ADNOC', description: 'Sour gas and sweet gas processing in Abu Dhabi' },
      { id: 'norway-troll-phase3', name: 'Norway Troll Phase 3 Gas', lat: 60.64, lng: 3.72, type: 'field', production: 30, unit: 'bcm/year', country: 'Norway', operator: 'Equinor', description: 'North Sea giant gas field third development phase' },
      { id: 'uzbekistan-shurtan-exp', name: 'Uzbekistan Shurtan Expansion/Other', lat: 38.80, lng: 65.70, type: 'field', production: 12, unit: 'bcm/year', country: 'Uzbekistan', operator: 'Uzbekneftegaz', description: 'Central Asian gas production expansion' },
      { id: 'bangladesh-titas-gas', name: 'Bangladesh Titas/Other Gas', lat: 23.90, lng: 91.10, type: 'field', production: 10, unit: 'bcm/year', country: 'Bangladesh', operator: 'Petrobangla', description: 'Sylhet region gas fields supplying domestic demand' },
      { id: 'world-other-gas-prod', name: 'Other World Gas Production', lat: 15.00, lng: 30.00, type: 'field', production: 91, unit: 'bcm/year', country: 'Various', operator: 'Multiple', description: 'Aggregate of remaining global gas production' },
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
    color: '#50C878',
    unit: 'kt/year',
    globalProduction: 3500,
    description: 'Critical metal for stainless steel and increasingly important for electric vehicle batteries.',
    category: 'metals',
    locations: [
      // Indonesia - Largest producer
      { id: 'sorowako', name: 'Sorowako Mine', lat: -2.53, lng: 121.35, type: 'mine', production: 75, unit: 'kt/year', country: 'Indonesia', operator: 'Vale Indonesia', description: 'Major laterite nickel operation' },
      { id: 'weda-bay', name: 'Weda Bay', lat: 0.38, lng: 127.87, type: 'mine', production: 85, unit: 'kt/year', country: 'Indonesia', operator: 'Tsingshan/Eramet', description: 'Large-scale nickel laterite mine' },
      { id: 'pomalaa', name: 'Pomalaa Mine', lat: -4.15, lng: 121.60, type: 'mine', production: 32, unit: 'kt/year', country: 'Indonesia', operator: 'Aneka Tambang', description: 'Historic nickel mining area' },
      { id: 'morowali-imip', name: 'Morowali IMIP Complex', lat: -2.85, lng: 121.67, type: 'plant', production: 400, unit: 'kt/year', country: 'Indonesia', operator: 'Tsingshan/IMIP', description: 'Indonesia Morowali Industrial Park, massive NPI and HPAL processing hub' },
      { id: 'weda-bay-iwip', name: 'Weda Bay IWIP Complex', lat: 0.30, lng: 127.80, type: 'plant', production: 250, unit: 'kt/year', country: 'Indonesia', operator: 'Tsingshan/Huayou', description: 'Indonesia Weda Bay Industrial Park, integrated NPI and HPAL facility' },
      { id: 'obi-island-hpal', name: 'Obi Island HPAL', lat: -1.55, lng: 127.65, type: 'plant', production: 120, unit: 'kt/year', country: 'Indonesia', operator: 'Harita Nickel', description: 'High-pressure acid leach plant on Obi Island producing mixed hydroxide precipitate' },
      { id: 'sulawesi-laterite', name: 'Sulawesi Laterite Mines', lat: -2.00, lng: 121.90, type: 'mine', production: 180, unit: 'kt/year', country: 'Indonesia', operator: 'Various', description: 'Aggregate laterite nickel ore mines across Central and Southeast Sulawesi' },
      { id: 'halmahera-mines', name: 'Halmahera Nickel Mines', lat: 0.65, lng: 128.10, type: 'mine', production: 140, unit: 'kt/year', country: 'Indonesia', operator: 'Various', description: 'Laterite nickel mines across Halmahera Island feeding NPI and HPAL plants' },
      { id: 'konawe-mines', name: 'Konawe Nickel District', lat: -3.60, lng: 122.20, type: 'mine', production: 95, unit: 'kt/year', country: 'Indonesia', operator: 'Various', description: 'Nickel laterite mining district in Southeast Sulawesi' },
      { id: 'kolaka-mines', name: 'Kolaka Nickel Mines', lat: -3.95, lng: 121.70, type: 'mine', production: 65, unit: 'kt/year', country: 'Indonesia', operator: 'Various', description: 'Nickel mining operations in Kolaka regency, Sulawesi' },

      // Philippines
      { id: 'rio-tuba', name: 'Rio Tuba Mine', lat: 8.45, lng: 117.47, type: 'mine', production: 28, unit: 'kt/year', country: 'Philippines', operator: 'Nickel Asia', description: 'Major laterite nickel producer' },
      { id: 'taganito', name: 'Taganito HPAL', lat: 9.48, lng: 125.98, type: 'plant', production: 24, unit: 'kt/year', country: 'Philippines', operator: 'Sumitomo/Nickel Asia', description: 'High-pressure acid leach facility' },
      { id: 'surigao-laterite', name: 'Surigao Laterite Mines', lat: 9.75, lng: 125.50, type: 'mine', production: 95, unit: 'kt/year', country: 'Philippines', operator: 'Nickel Asia/CTP', description: 'Major laterite nickel mining district in Surigao del Norte' },
      { id: 'zambales-mines', name: 'Zambales Nickel Mines', lat: 15.40, lng: 120.05, type: 'mine', production: 55, unit: 'kt/year', country: 'Philippines', operator: 'Zambales Diversified', description: 'Laterite nickel mines on Zambales coast, Luzon' },
      { id: 'palawan-mines', name: 'Palawan Nickel Mines', lat: 9.10, lng: 117.80, type: 'mine', production: 48, unit: 'kt/year', country: 'Philippines', operator: 'Nickel Asia/DMCI', description: 'Nickel laterite operations in southern Palawan' },
      { id: 'nonoc-island', name: 'Nonoc Island Mine', lat: 9.82, lng: 125.58, type: 'mine', production: 30, unit: 'kt/year', country: 'Philippines', operator: 'Pacific Nickel', description: 'Laterite nickel operation on Nonoc Island' },
      { id: 'cagdianao-mine', name: 'Cagdianao Mine', lat: 9.92, lng: 125.65, type: 'mine', production: 35, unit: 'kt/year', country: 'Philippines', operator: 'Nickel Asia', description: 'Open-pit laterite nickel mine in Dinagat Islands' },
      { id: 'coral-bay-hpal', name: 'Coral Bay HPAL', lat: 8.50, lng: 117.50, type: 'plant', production: 22, unit: 'kt/year', country: 'Philippines', operator: 'Sumitomo/Rio Tuba', description: 'HPAL plant producing nickel-cobalt mixed sulphide' },

      // Russia
      { id: 'norilsk', name: 'Norilsk-Talnakh', lat: 69.36, lng: 88.20, type: 'mine', production: 180, unit: 'kt/year', country: 'Russia', operator: 'Norilsk Nickel', description: 'World\'s largest nickel-copper-palladium complex' },
      { id: 'kola-peninsula', name: 'Kola Peninsula Mines', lat: 68.93, lng: 33.05, type: 'mine', production: 60, unit: 'kt/year', country: 'Russia', operator: 'Norilsk Nickel', description: 'Pechenga and Monchegorsk nickel operations on Kola Peninsula' },

      // New Caledonia
      { id: 'goro', name: 'Goro Mine', lat: -22.28, lng: 167.00, type: 'mine', production: 50, unit: 'kt/year', country: 'New Caledonia', operator: 'Vale/Tsingshan', description: 'Large laterite nickel project' },
      { id: 'koniambo', name: 'Koniambo', lat: -21.05, lng: 164.80, type: 'mine', production: 55, unit: 'kt/year', country: 'New Caledonia', operator: 'Glencore', description: 'Major nickel-cobalt operation' },

      // Canada
      { id: 'sudbury', name: 'Sudbury Basin', lat: 46.49, lng: -81.00, type: 'mine', production: 48, unit: 'kt/year', country: 'Canada', operator: 'Vale/Glencore', description: 'Historic nickel mining district' },
      { id: 'voiseys-bay', name: 'Voisey\'s Bay', lat: 56.33, lng: -61.72, type: 'mine', production: 38, unit: 'kt/year', country: 'Canada', operator: 'Vale', description: 'Major nickel-copper-cobalt mine in Labrador' },
      { id: 'thompson-mine', name: 'Thompson Mine', lat: 55.74, lng: -97.83, type: 'mine', production: 25, unit: 'kt/year', country: 'Canada', operator: 'Vale', description: 'Underground nickel mine in Manitoba' },
      { id: 'raglan-mine', name: 'Raglan Mine', lat: 61.68, lng: -73.63, type: 'mine', production: 28, unit: 'kt/year', country: 'Canada', operator: 'Glencore', description: 'Nickel-copper mine in Nunavik, northern Quebec' },

      // Australia
      { id: 'murrin-murrin', name: 'Murrin Murrin', lat: -28.75, lng: 121.22, type: 'mine', production: 32, unit: 'kt/year', country: 'Australia', operator: 'Glencore', description: 'Laterite nickel-cobalt operation' },
      { id: 'mt-nickel', name: 'Mt Nickel Mine', lat: -31.55, lng: 121.50, type: 'mine', production: 20, unit: 'kt/year', country: 'Australia', operator: 'BHP', description: 'Nickel sulphide mine in Western Australia goldfields' },
      { id: 'nova-bollinger', name: 'Nova-Bollinger Mine', lat: -31.82, lng: 123.20, type: 'mine', production: 25, unit: 'kt/year', country: 'Australia', operator: 'IGO Limited', description: 'Underground nickel-copper-cobalt mine in Fraser Range, WA' },
      { id: 'ravensthorpe', name: 'Ravensthorpe Nickel', lat: -33.58, lng: 120.05, type: 'mine', production: 22, unit: 'kt/year', country: 'Australia', operator: 'First Quantum', description: 'Laterite nickel operation in southern Western Australia' },
      { id: 'kambalda', name: 'Kambalda Nickel District', lat: -31.20, lng: 121.67, type: 'mine', production: 15, unit: 'kt/year', country: 'Australia', operator: 'Various', description: 'Historic nickel sulphide mining district near Kalgoorlie' },
      { id: 'cosmos-nickel', name: 'Cosmos Nickel Mine', lat: -27.78, lng: 120.56, type: 'mine', production: 12, unit: 'kt/year', country: 'Australia', operator: 'IGO Limited', description: 'Underground nickel sulphide mine in Wiluna district' },

      // China
      { id: 'jinchuan-nickel', name: 'Jinchuan Nickel Mine', lat: 38.48, lng: 102.17, type: 'mine', production: 100, unit: 'kt/year', country: 'China', operator: 'Jinchuan Group', description: 'China\'s largest nickel mine and smelter complex in Gansu Province' },

      // Brazil
      { id: 'onca-puma', name: 'Onca Puma Mine', lat: -6.58, lng: -51.08, type: 'mine', production: 45, unit: 'kt/year', country: 'Brazil', operator: 'Vale', description: 'Laterite ferronickel operation in Para state' },
      { id: 'barro-alto', name: 'Barro Alto Mine', lat: -14.97, lng: -48.92, type: 'mine', production: 38, unit: 'kt/year', country: 'Brazil', operator: 'Anglo American', description: 'Ferronickel laterite mine and smelter in Goias state' },

      // Cuba
      { id: 'moa-bay', name: 'Moa Bay Nickel', lat: 20.66, lng: -74.88, type: 'mine', production: 35, unit: 'kt/year', country: 'Cuba', operator: 'Sherritt/Cuban JV', description: 'Laterite nickel-cobalt mining and processing complex' },

      // Finland
      { id: 'terrafame-sotkamo', name: 'Terrafame Sotkamo Mine', lat: 63.97, lng: 28.02, type: 'mine', production: 30, unit: 'kt/year', country: 'Finland', operator: 'Terrafame', description: 'Bio-heap leach nickel-zinc-cobalt mine in Kainuu region' },

      // Turkey
      { id: 'gordes-laterite', name: 'Gordes Laterite Mine', lat: 38.93, lng: 28.29, type: 'mine', production: 18, unit: 'kt/year', country: 'Turkey', operator: 'Meta Nickel', description: 'Laterite nickel mine and HPAL plant in western Turkey' },

      // South Africa
      { id: 'nkomati-mine', name: 'Nkomati Mine', lat: -25.68, lng: 31.18, type: 'mine', production: 16, unit: 'kt/year', country: 'South Africa', operator: 'African Rainbow Minerals', description: 'Open-pit and underground nickel-copper-chrome mine in Mpumalanga' },

      // Guatemala
      { id: 'fenix-mine', name: 'Fenix Nickel Mine', lat: 15.48, lng: -89.35, type: 'mine', production: 18, unit: 'kt/year', country: 'Guatemala', operator: 'Solway Group', description: 'Laterite ferronickel mine and smelter at El Estor' },

      // Dominican Republic
      { id: 'falcondo-mine', name: 'Falcondo Mine', lat: 19.07, lng: -70.17, type: 'mine', production: 25, unit: 'kt/year', country: 'Dominican Republic', operator: 'Glencore', description: 'Ferronickel laterite mine and smelter at Bonao' },

      // Colombia
      { id: 'cerro-matoso', name: 'Cerro Matoso Mine', lat: 7.95, lng: -75.52, type: 'mine', production: 42, unit: 'kt/year', country: 'Colombia', operator: 'South32', description: 'Open-pit laterite ferronickel mine in Cordoba department' },

      // Madagascar
      { id: 'ambatovy-nickel', name: 'Ambatovy Mine', lat: -18.85, lng: 48.32, type: 'mine', production: 40, unit: 'kt/year', country: 'Madagascar', operator: 'Sumitomo/Korea Mine Rehab', description: 'Large laterite nickel-cobalt mine and HPAL processing plant' },

      // Papua New Guinea
      { id: 'ramu-hpal', name: 'Ramu HPAL Plant', lat: -5.58, lng: 145.72, type: 'plant', production: 35, unit: 'kt/year', country: 'Papua New Guinea', operator: 'MCC/Highlands Pacific', description: 'High-pressure acid leach nickel-cobalt plant in Madang Province' },

      // New Caledonia (additional)
      { id: 'doniambo-smelter', name: 'Doniambo Smelter', lat: -22.25, lng: 166.45, type: 'plant', production: 55, unit: 'kt/year', country: 'New Caledonia', operator: 'SLN/Eramet', description: 'Pyrometallurgical nickel smelter at Noumea producing ferronickel' },

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

      // China - Additional (need ~350 Mt more to reach ~90%)
      { id: 'rizhao-steel', name: 'Rizhao Steel', lat: 35.42, lng: 119.53, type: 'plant', production: 18, unit: 'Mt/year', country: 'China', operator: 'Rizhao Steel', description: 'Coastal integrated steel mill in Shandong' },
      { id: 'nanjing-steel', name: 'Nanjing Iron and Steel', lat: 32.06, lng: 118.78, type: 'plant', production: 12, unit: 'Mt/year', country: 'China', operator: 'Nanjing Steel United', description: 'Major Yangtze Delta steel producer' },
      { id: 'delong-steel', name: 'Delong Steel', lat: 36.85, lng: 115.68, type: 'plant', production: 15, unit: 'Mt/year', country: 'China', operator: 'Delong Steel', description: 'Major private steel producer in Hebei' },
      { id: 'hunan-valin', name: 'Hunan Valin Steel', lat: 27.83, lng: 112.93, type: 'plant', production: 15, unit: 'Mt/year', country: 'China', operator: 'Valin Steel', description: 'Major Hunan Province steel group' },
      { id: 'taiyuan-steel', name: 'Taiyuan Iron and Steel', lat: 37.87, lng: 112.55, type: 'plant', production: 10, unit: 'Mt/year', country: 'China', operator: 'TISCO', description: 'Leading stainless steel producer in Shanxi' },
      { id: 'baotou-steel', name: 'Baotou Steel', lat: 40.66, lng: 109.84, type: 'plant', production: 12, unit: 'Mt/year', country: 'China', operator: 'Baotou Iron and Steel', description: 'Inner Mongolia integrated steel and rare earth complex' },
      { id: 'liuzhou-steel', name: 'Liuzhou Iron and Steel', lat: 24.33, lng: 109.42, type: 'plant', production: 12, unit: 'Mt/year', country: 'China', operator: 'Guangxi Steel Group', description: 'Major steel producer in Guangxi' },
      { id: 'zhanjiang-baowu', name: 'Zhanjiang Baowu Steel', lat: 21.27, lng: 110.35, type: 'plant', production: 10, unit: 'Mt/year', country: 'China', operator: 'China Baowu', description: 'Coastal greenfield steel base in Guangdong' },
      { id: 'anyang-steel', name: 'Henan Anyang Steel', lat: 36.10, lng: 114.35, type: 'plant', production: 12, unit: 'Mt/year', country: 'China', operator: 'Anyang Iron and Steel', description: 'Major Henan Province steel producer' },
      { id: 'jingye-steel', name: 'Jingye Group', lat: 38.04, lng: 114.51, type: 'plant', production: 15, unit: 'Mt/year', country: 'China', operator: 'Jingye Group', description: 'Major private steel producer in Hebei' },
      { id: 'china-other-steel', name: 'China Other Steel', lat: 32.00, lng: 112.00, type: 'plant', production: 150, unit: 'Mt/year', country: 'China', operator: 'Various operators', description: 'Aggregate from numerous smaller Chinese steel mills' },

      // India - Additional
      { id: 'amns-hazira', name: 'AM/NS India Hazira', lat: 21.10, lng: 72.63, type: 'plant', production: 10, unit: 'Mt/year', country: 'India', operator: 'ArcelorMittal Nippon Steel', description: 'Joint venture coastal steel plant in Gujarat' },
      { id: 'jsw-dolvi', name: 'JSW Steel Dolvi', lat: 18.80, lng: 73.05, type: 'plant', production: 10, unit: 'Mt/year', country: 'India', operator: 'JSW Steel', description: 'Coastal integrated steel plant in Maharashtra' },
      { id: 'india-other-steel', name: 'India Other Steel', lat: 20.00, lng: 80.00, type: 'plant', production: 30, unit: 'Mt/year', country: 'India', operator: 'Various', description: 'Aggregate from smaller Indian steel producers' },

      // Taiwan
      { id: 'china-steel-kaohsiung', name: 'China Steel Kaohsiung', lat: 22.55, lng: 120.32, type: 'plant', production: 22, unit: 'Mt/year', country: 'Taiwan', operator: 'China Steel Corporation', description: 'Taiwan\'s largest integrated steel producer' },

      // Iran - Additional
      { id: 'mobarakeh-steel', name: 'Mobarakeh Steel', lat: 32.35, lng: 51.50, type: 'plant', production: 8, unit: 'Mt/year', country: 'Iran', operator: 'Mobarakeh Steel Company', description: 'Largest steel producer in the Middle East' },
      { id: 'khouzestan-steel', name: 'Khouzestan Steel', lat: 31.32, lng: 48.67, type: 'plant', production: 4, unit: 'Mt/year', country: 'Iran', operator: 'Khouzestan Steel Company', description: 'Direct-reduction steel mill in Ahvaz' },

      // Turkey - Additional
      { id: 'tosyali-steel', name: 'Tosyali Steel', lat: 36.58, lng: 36.17, type: 'plant', production: 6, unit: 'Mt/year', country: 'Turkey', operator: 'Tosyali Holding', description: 'Major steel mill in Hatay Province' },
      { id: 'kardemir', name: 'Kardemir Karabuk', lat: 41.20, lng: 32.63, type: 'plant', production: 4, unit: 'Mt/year', country: 'Turkey', operator: 'Kardemir', description: 'Integrated steel plant in Karabuk' },
      { id: 'turkey-other-steel', name: 'Turkey Other Steel', lat: 39.00, lng: 32.00, type: 'plant', production: 15, unit: 'Mt/year', country: 'Turkey', operator: 'Various', description: 'Aggregate from other Turkish steel producers' },

      // Pakistan
      { id: 'pakistan-steel', name: 'Pakistan Steel Mills', lat: 24.84, lng: 66.97, type: 'plant', production: 8, unit: 'Mt/year', country: 'Pakistan', operator: 'Various', description: 'Combined Pakistani steel production' },

      // Bangladesh
      { id: 'bangladesh-steel', name: 'Bangladesh Steel Mills', lat: 22.35, lng: 91.80, type: 'plant', production: 6, unit: 'Mt/year', country: 'Bangladesh', operator: 'BSRM/KSRM', description: 'Combined Bangladeshi steel production' },

      // Egypt - Additional
      { id: 'ezz-steel', name: 'Ezz Steel', lat: 29.97, lng: 32.54, type: 'plant', production: 5, unit: 'Mt/year', country: 'Egypt', operator: 'Ezz Steel', description: 'Largest steel producer in MENA' },

      // Malaysia
      { id: 'malaysia-steel', name: 'Malaysia Steel', lat: 4.23, lng: 103.42, type: 'plant', production: 8, unit: 'Mt/year', country: 'Malaysia', operator: 'Various', description: 'Combined Malaysian steel production' },

      // Other countries aggregate

      // Additional steel plants (~92.5 Mt)
      { id: 'china-anshan-benxi', name: 'China Anshan/Benxi Steel', lat: 41.10, lng: 123.00, type: 'plant', production: 35, unit: 'Mt/year', country: 'China', operator: 'Ansteel Group', description: 'Liaoning province integrated steel complex' },
      { id: 'china-maanshan', name: 'China Maanshan Iron & Steel', lat: 31.70, lng: 118.50, type: 'plant', production: 20, unit: 'Mt/year', country: 'China', operator: 'Baowu/Maanshan', description: 'Anhui province major steel producer' },
      { id: 'vietnam-hoa-phat', name: 'Vietnam Hoa Phat Steel', lat: 20.95, lng: 106.66, type: 'plant', production: 8, unit: 'Mt/year', country: 'Vietnam', operator: 'Hoa Phat Group', description: 'Largest Vietnamese steelmaker with integrated complex' },
      { id: 'mexico-ahmsa', name: 'Mexico AHMSA Monclova', lat: 26.90, lng: -101.42, type: 'plant', production: 5, unit: 'Mt/year', country: 'Mexico', operator: 'AHMSA', description: 'Major Mexican integrated steelworks at Monclova' },
      { id: 'saudi-sabic-hadeed', name: 'Saudi Arabia SABIC/Hadeed', lat: 26.28, lng: 50.21, type: 'plant', production: 6, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'SABIC/Hadeed', description: 'Middle Eastern EAF-based flat and long steel producer' },
      { id: 'algeria-el-hadjar', name: 'Algeria El Hadjar Steel', lat: 36.78, lng: 7.73, type: 'plant', production: 3, unit: 'Mt/year', country: 'Algeria', operator: 'Sider/ArcelorMittal', description: 'North African integrated steelworks at Annaba' },
      { id: 'indonesia-krakatau', name: 'Indonesia Krakatau Steel', lat: -6.00, lng: 106.15, type: 'plant', production: 6, unit: 'Mt/year', country: 'Indonesia', operator: 'Krakatau Steel', description: 'State-owned integrated steel complex at Cilegon' },
      { id: 'south-africa-arcelormittal', name: 'South Africa ArcelorMittal', lat: -26.20, lng: 28.04, type: 'plant', production: 4.5, unit: 'Mt/year', country: 'South Africa', operator: 'ArcelorMittal SA', description: 'Major South African steelmaker with Vanderbijlpark works' },
      { id: 'spain-arcelormittal-asturias', name: 'Spain ArcelorMittal Asturias', lat: 43.53, lng: -5.67, type: 'plant', production: 5, unit: 'Mt/year', country: 'Spain', operator: 'ArcelorMittal', description: 'Integrated steelworks complex in Asturias' },
      { id: 'world-other-steel', name: 'Other World Steel', lat: 20.00, lng: 0.00, type: 'plant', production: 150, unit: 'Mt/year', country: 'Various', operator: 'Multiple operators', description: 'Aggregate from Algeria, Nigeria, Thailand, Philippines, Canada and numerous other producers' },
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

      // China - Additional (total China ~380t)
      { id: 'henan-gold', name: 'Henan Gold District', lat: 34.00, lng: 111.50, type: 'mine', production: 40, unit: 'tonnes/year', country: 'China', operator: 'Various', description: 'Major gold-producing province' },
      { id: 'fujian-gold', name: 'Fujian Gold Mines', lat: 26.00, lng: 117.50, type: 'mine', production: 25, unit: 'tonnes/year', country: 'China', operator: 'Zijin Mining', description: 'Southeastern China gold production' },
      { id: 'yunnan-gold', name: 'Yunnan Gold Mines', lat: 25.00, lng: 102.50, type: 'mine', production: 20, unit: 'tonnes/year', country: 'China', operator: 'Various', description: 'Southwest China gold mining' },
      { id: 'china-other-gold', name: 'China Other Gold Mines', lat: 40.00, lng: 116.00, type: 'mine', production: 80, unit: 'tonnes/year', country: 'China', operator: 'Various operators', description: 'Aggregate from Inner Mongolia, Hubei, Guizhou, Anhui provinces' },

      // Australia - Additional (~310t total)
      { id: 'cadia-valley', name: 'Cadia Valley Mine', lat: -33.47, lng: 148.98, type: 'mine', production: 28, unit: 'tonnes/year', country: 'Australia', operator: 'Newcrest/Newmont', description: 'Largest gold mine in Australia by reserves' },
      { id: 'tanami', name: 'Tanami Mine', lat: -19.97, lng: 129.70, type: 'mine', production: 16, unit: 'tonnes/year', country: 'Australia', operator: 'Newmont', description: 'Underground gold mine in Northern Territory' },
      { id: 'telfer', name: 'Telfer Mine', lat: -21.72, lng: 122.22, type: 'mine', production: 14, unit: 'tonnes/year', country: 'Australia', operator: 'Newcrest', description: 'Gold-copper mine in Western Australia' },
      { id: 'australia-wa-other', name: 'Western Australia Other Gold', lat: -31.00, lng: 121.00, type: 'mine', production: 80, unit: 'tonnes/year', country: 'Australia', operator: 'Various operators', description: 'Aggregate from WA Goldfields including Jundee, Sunrise Dam, Duketon' },
      { id: 'australia-nsw-qld', name: 'NSW/QLD Gold Mines', lat: -28.00, lng: 150.00, type: 'mine', production: 25, unit: 'tonnes/year', country: 'Australia', operator: 'Various', description: 'Aggregate from Mount Rawdon, Cowal, Northparkes' },

      // Russia - Additional (~330t total)
      { id: 'natalka', name: 'Natalka Mine', lat: 61.55, lng: 148.80, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Russia', operator: 'Polyus', description: 'Large gold mine in Magadan Oblast' },
      { id: 'kupol', name: 'Kupol Mine', lat: 65.85, lng: 165.78, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Russia', operator: 'Kinross Gold', description: 'High-grade gold-silver mine in Chukotka' },
      { id: 'russia-far-east', name: 'Russia Far East Gold', lat: 55.00, lng: 135.00, type: 'mine', production: 60, unit: 'tonnes/year', country: 'Russia', operator: 'Polyus/Polymetal', description: 'Aggregate from Amur, Khabarovsk regions' },
      { id: 'russia-urals-siberia', name: 'Russia Urals/Siberia Gold', lat: 55.00, lng: 75.00, type: 'mine', production: 50, unit: 'tonnes/year', country: 'Russia', operator: 'Various', description: 'Aggregate from Urals and W Siberia regions' },

      // Canada (~200t total)
      { id: 'detour-lake', name: 'Detour Lake Mine', lat: 50.43, lng: -79.68, type: 'mine', production: 20, unit: 'tonnes/year', country: 'Canada', operator: 'Agnico Eagle', description: 'Large open-pit gold mine in Ontario' },
      { id: 'musselwhite', name: 'Musselwhite Mine', lat: 52.62, lng: -90.37, type: 'mine', production: 6, unit: 'tonnes/year', country: 'Canada', operator: 'Newmont', description: 'Underground gold mine in Ontario' },
      { id: 'meadowbank', name: 'Meadowbank/Amaruq', lat: 65.02, lng: -96.05, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Canada', operator: 'Agnico Eagle', description: 'Arctic gold mine in Nunavut' },
      { id: 'red-lake', name: 'Red Lake Mine', lat: 51.07, lng: -93.75, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Canada', operator: 'Evolution Mining', description: 'Historic high-grade gold camp in Ontario' },
      { id: 'canadian-malartic', name: 'Canadian Malartic', lat: 48.13, lng: -78.12, type: 'mine', production: 20, unit: 'tonnes/year', country: 'Canada', operator: 'Agnico Eagle', description: 'Largest gold mine in Canada, Quebec' },
      { id: 'brucejack', name: 'Brucejack Mine', lat: 56.47, lng: -130.17, type: 'mine', production: 10, unit: 'tonnes/year', country: 'Canada', operator: 'Newcrest/Newmont', description: 'High-grade underground gold mine in BC' },

      // Indonesia - Additional (~130t)
      { id: 'batu-hijau', name: 'Batu Hijau Mine', lat: -8.97, lng: 116.87, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Indonesia', operator: 'Amman Mineral', description: 'Large copper-gold mine on Sumbawa' },
      { id: 'indonesia-artisanal', name: 'Indonesia Artisanal Gold', lat: -2.00, lng: 115.00, type: 'mine', production: 50, unit: 'tonnes/year', country: 'Indonesia', operator: 'Artisanal miners', description: 'Widespread artisanal gold mining across Indonesia' },

      // South Africa (~100t)
      { id: 'south-deep', name: 'South Deep Mine', lat: -26.40, lng: 27.67, type: 'mine', production: 9, unit: 'tonnes/year', country: 'South Africa', operator: 'Gold Fields', description: 'Deepest gold mine in Witwatersrand' },
      { id: 'mponeng', name: 'Mponeng Mine', lat: -26.42, lng: 27.45, type: 'mine', production: 7, unit: 'tonnes/year', country: 'South Africa', operator: 'Harmony Gold', description: 'Deepest mine in the world at 4km' },
      { id: 'sa-other-gold', name: 'South Africa Other Gold', lat: -26.50, lng: 27.50, type: 'mine', production: 55, unit: 'tonnes/year', country: 'South Africa', operator: 'Harmony/Sibanye/DRDGold', description: 'Aggregate from other Witwatersrand mines and tailings' },

      // Ghana (~130t)
      { id: 'obuasi', name: 'Obuasi Mine', lat: 6.20, lng: -1.68, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Ghana', operator: 'AngloGold Ashanti', description: 'Historic gold mine being redeveloped' },
      { id: 'tarkwa', name: 'Tarkwa Mine', lat: 5.30, lng: -1.98, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Ghana', operator: 'Gold Fields', description: 'Large open-pit gold mine in Western Region' },
      { id: 'ahafo', name: 'Ahafo Mine', lat: 7.03, lng: -2.33, type: 'mine', production: 18, unit: 'tonnes/year', country: 'Ghana', operator: 'Newmont', description: 'Open-pit and underground gold mine' },
      { id: 'ghana-other', name: 'Ghana Other Gold', lat: 6.00, lng: -2.00, type: 'mine', production: 55, unit: 'tonnes/year', country: 'Ghana', operator: 'Various/artisanal', description: 'Other mines and artisanal production' },

      // Mali (~70t)
      { id: 'loulo-gounkoto', name: 'Loulo-Gounkoto Complex', lat: 13.73, lng: -11.07, type: 'mine', production: 20, unit: 'tonnes/year', country: 'Mali', operator: 'Barrick Gold', description: 'Major gold complex in western Mali' },
      { id: 'syama', name: 'Syama Mine', lat: 11.25, lng: -6.17, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Mali', operator: 'Resolute Mining', description: 'Underground gold mine in southern Mali' },
      { id: 'mali-other', name: 'Mali Other Gold', lat: 12.50, lng: -8.00, type: 'mine', production: 42, unit: 'tonnes/year', country: 'Mali', operator: 'Various/artisanal', description: 'Other mines and artisanal gold mining' },

      // Burkina Faso (~60t)
      { id: 'essakane', name: 'Essakane Mine', lat: 15.33, lng: -0.23, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Burkina Faso', operator: 'IAMGOLD', description: 'Largest gold mine in Burkina Faso' },
      { id: 'burkina-other', name: 'Burkina Faso Other Gold', lat: 12.50, lng: -1.50, type: 'mine', production: 48, unit: 'tonnes/year', country: 'Burkina Faso', operator: 'Various/artisanal', description: 'Multiple mines and artisanal mining' },

      // Sudan (~80t)
      { id: 'sudan-gold', name: 'Sudan Gold Mining', lat: 19.00, lng: 33.50, type: 'mine', production: 80, unit: 'tonnes/year', country: 'Sudan', operator: 'Various/artisanal', description: 'Artisanal and industrial mining in River Nile and Red Sea states' },

      // Guinea (~70t)
      { id: 'siguiri', name: 'Siguiri Mine', lat: 11.42, lng: -9.17, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Guinea', operator: 'AngloGold Ashanti', description: 'Open-pit gold mine complex' },
      { id: 'guinea-other', name: 'Guinea Other Gold', lat: 10.50, lng: -10.00, type: 'mine', production: 58, unit: 'tonnes/year', country: 'Guinea', operator: 'Various/artisanal', description: 'Other mining operations and artisanal production' },

      // Tanzania (~55t)
      { id: 'geita', name: 'Geita Mine', lat: -2.82, lng: 32.15, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Tanzania', operator: 'AngloGold Ashanti', description: 'Open-pit and underground gold mine' },
      { id: 'north-mara', name: 'North Mara Mine', lat: -1.43, lng: 34.58, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Tanzania', operator: 'Barrick Gold', description: 'Gold mine in Mara Region' },
      { id: 'tanzania-other', name: 'Tanzania Other Gold', lat: -4.00, lng: 33.00, type: 'mine', production: 32, unit: 'tonnes/year', country: 'Tanzania', operator: 'Various/artisanal', description: 'Other mines and artisanal production' },

      // Senegal (~25t)
      { id: 'sabodala-massawa', name: 'Sabodala-Massawa Complex', lat: 12.87, lng: -11.75, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Senegal', operator: 'Endeavour Mining', description: 'Major gold complex in eastern Senegal' },
      { id: 'senegal-other', name: 'Senegal Other Gold', lat: 13.00, lng: -12.00, type: 'mine', production: 13, unit: 'tonnes/year', country: 'Senegal', operator: 'Various', description: 'Additional gold mining operations' },

      // Cote d'Ivoire (~50t)
      { id: 'ity-mine', name: 'Ity Mine', lat: 6.87, lng: -7.42, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Cote d\'Ivoire', operator: 'Endeavour Mining', description: 'Heap-leach and CIL gold mine' },
      { id: 'ivory-coast-other', name: 'Cote d\'Ivoire Other Gold', lat: 7.50, lng: -5.50, type: 'mine', production: 38, unit: 'tonnes/year', country: 'Cote d\'Ivoire', operator: 'Various', description: 'Multiple gold mines including Tongon and artisanal' },

      // Mexico (~120t)
      { id: 'penasquito-gold', name: 'Peñasquito Gold', lat: 24.38, lng: -101.42, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Mexico', operator: 'Newmont', description: 'Large polymetallic mine with gold production' },
      { id: 'mexico-other-gold', name: 'Mexico Other Gold', lat: 24.00, lng: -105.00, type: 'mine', production: 80, unit: 'tonnes/year', country: 'Mexico', operator: 'Various', description: 'Aggregate from Dolores, Pinos Altos, La Herradura and other mines' },

      // Peru - Additional (~130t)
      { id: 'peru-other-gold', name: 'Peru Other Gold', lat: -12.00, lng: -76.00, type: 'mine', production: 60, unit: 'tonnes/year', country: 'Peru', operator: 'Various/artisanal', description: 'Other mines and artisanal production in Madre de Dios and elsewhere' },

      // Colombia (~50t)
      { id: 'buritica', name: 'Buriticá Mine', lat: 6.73, lng: -75.88, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Colombia', operator: 'Zijin Mining', description: 'High-grade underground gold mine in Antioquia' },
      { id: 'colombia-other-gold', name: 'Colombia Other Gold', lat: 5.50, lng: -75.00, type: 'mine', production: 42, unit: 'tonnes/year', country: 'Colombia', operator: 'Various/artisanal', description: 'Artisanal and other mining operations' },

      // Brazil (~70t)
      { id: 'brazil-gold', name: 'Brazil Gold Mines', lat: -12.00, lng: -47.00, type: 'mine', production: 70, unit: 'tonnes/year', country: 'Brazil', operator: 'Various/artisanal', description: 'Aggregate from Minas Gerais, Goiás, Pará and artisanal mining' },

      // Kazakhstan (~70t)
      { id: 'vasilkovskoye', name: 'Vasilkovskoye Mine', lat: 52.28, lng: 68.38, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Kazakhstan', operator: 'Kazzinc/Glencore', description: 'Major gold mine in Kostanay Oblast' },
      { id: 'kazakhstan-other-gold', name: 'Kazakhstan Other Gold', lat: 48.00, lng: 68.00, type: 'mine', production: 55, unit: 'tonnes/year', country: 'Kazakhstan', operator: 'Various', description: 'Aggregate from Altyntau, Bakyrchik and other deposits' },

      // Argentina (~70t)
      { id: 'veladero', name: 'Veladero Mine', lat: -29.37, lng: -69.25, type: 'mine', production: 8, unit: 'tonnes/year', country: 'Argentina', operator: 'Barrick Gold', description: 'High-altitude open-pit gold mine in San Juan' },
      { id: 'argentina-other-gold', name: 'Argentina Other Gold', lat: -32.00, lng: -68.00, type: 'mine', production: 40, unit: 'tonnes/year', country: 'Argentina', operator: 'Various', description: 'Aggregate from Cerro Negro, Cerro Vanguardia and others' },

      // Turkey (~40t)
      { id: 'copler', name: 'Çöpler Mine', lat: 39.45, lng: 38.70, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Turkey', operator: 'SSR Mining', description: 'Large gold mine in Erzincan Province' },
      { id: 'turkey-other-gold', name: 'Turkey Other Gold', lat: 39.00, lng: 35.00, type: 'mine', production: 28, unit: 'tonnes/year', country: 'Turkey', operator: 'Various', description: 'Other Turkish gold mining operations' },

      // Philippines (~40t)
      { id: 'philippines-gold', name: 'Philippines Gold Mines', lat: 10.00, lng: 124.00, type: 'mine', production: 40, unit: 'tonnes/year', country: 'Philippines', operator: 'Various/artisanal', description: 'Gold mining across Luzon, Visayas, Mindanao' },

      // Ecuador (~15t)
      { id: 'fruta-del-norte', name: 'Fruta del Norte', lat: -3.80, lng: -78.50, type: 'mine', production: 12, unit: 'tonnes/year', country: 'Ecuador', operator: 'Lundin Gold', description: 'High-grade underground gold mine' },

      // DRC (~30t)
      { id: 'kibali', name: 'Kibali Mine', lat: 3.07, lng: 30.17, type: 'mine', production: 14, unit: 'tonnes/year', country: 'DRC', operator: 'Barrick Gold', description: 'Largest gold mine in DRC, Haut-Uele Province' },
      { id: 'drc-other-gold', name: 'DRC Artisanal Gold', lat: 2.00, lng: 28.00, type: 'mine', production: 16, unit: 'tonnes/year', country: 'DRC', operator: 'Artisanal miners', description: 'Artisanal gold mining in eastern DRC' },

      // Mauritania
      { id: 'tasiast', name: 'Tasiast Mine', lat: 20.22, lng: -15.78, type: 'mine', production: 18, unit: 'tonnes/year', country: 'Mauritania', operator: 'Kinross Gold', description: 'Large open-pit gold mine in Saharan Mauritania' },

      // Papua New Guinea (~55t)
      { id: 'lihir', name: 'Lihir Gold Mine', lat: -3.13, lng: 152.63, type: 'mine', production: 25, unit: 'tonnes/year', country: 'Papua New Guinea', operator: 'Newcrest/Newmont', description: 'Island-based gold mine in a volcanic caldera' },
      { id: 'png-other-gold', name: 'PNG Other Gold', lat: -5.50, lng: 143.00, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Papua New Guinea', operator: 'Various', description: 'Porgera, Hidden Valley and other mines' },

      // Egypt (~15t)
      { id: 'sukari', name: 'Sukari Gold Mine', lat: 24.95, lng: 33.93, type: 'mine', production: 15, unit: 'tonnes/year', country: 'Egypt', operator: 'Centamin', description: 'First modern gold mine in Egypt' },

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
    color: '#B0C4DE',
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
      // Mexico - World's largest silver producer (additional mines)
      { id: 'la-colorada-silver', name: 'La Colorada Mine', lat: 24.39, lng: -105.19, type: 'mine', production: 0.72, unit: 'kt/year', country: 'Mexico', operator: 'Pan American Silver', description: 'Deep underground silver mine in Durango state' },
      { id: 'juanicipio', name: 'Juanicipio Mine', lat: 23.19, lng: -102.91, type: 'mine', production: 0.65, unit: 'kt/year', country: 'Mexico', operator: 'MAG Silver/Fresnillo', description: 'High-grade silver-gold joint venture in Zacatecas' },
      { id: 'san-julian', name: 'San Julián Mine', lat: 24.15, lng: -105.93, type: 'mine', production: 0.55, unit: 'kt/year', country: 'Mexico', operator: 'First Majestic Silver', description: 'Silver-gold mine in Chihuahua-Durango border region' },
      { id: 'palmarejo', name: 'Palmarejo Mine', lat: 27.08, lng: -108.70, type: 'mine', production: 0.42, unit: 'kt/year', country: 'Mexico', operator: 'Coeur Mining', description: 'Open-pit and underground silver-gold mine in Chihuahua' },
      { id: 'la-encantada', name: 'La Encantada Mine', lat: 28.40, lng: -102.62, type: 'mine', production: 0.38, unit: 'kt/year', country: 'Mexico', operator: 'First Majestic Silver', description: 'Silver mine in Coahuila with on-site processing' },
      { id: 'tayoltita', name: 'Tayoltita Mine', lat: 24.07, lng: -105.77, type: 'mine', production: 0.35, unit: 'kt/year', country: 'Mexico', operator: 'First Majestic Silver', description: 'Historic underground silver-gold mine in Durango' },
      { id: 'san-jose-del-progreso', name: 'San Jose del Progreso', lat: 16.50, lng: -96.70, type: 'mine', production: 0.30, unit: 'kt/year', country: 'Mexico', operator: 'Fortuna Silver Mines', description: 'Underground silver-gold mine in Oaxaca' },
      { id: 'batopilas', name: 'Batopilas Mine', lat: 27.02, lng: -107.73, type: 'mine', production: 0.08, unit: 'kt/year', country: 'Mexico', operator: 'Batopilas Mining', description: 'Historic native silver district in Copper Canyon' },
      // Peru - Second largest producer (additional mines)
      { id: 'cerro-de-pasco', name: 'Cerro de Pasco Mine', lat: -10.68, lng: -76.26, type: 'mine', production: 0.58, unit: 'kt/year', country: 'Peru', operator: 'Cerro de Pasco Resources', description: 'Historic polymetallic mine at 4,380m elevation' },
      { id: 'toromocho-silver', name: 'Toromocho Mine', lat: -11.60, lng: -76.13, type: 'mine', production: 0.45, unit: 'kt/year', country: 'Peru', operator: 'Chinalco', description: 'Large copper mine with significant silver by-product' },
      { id: 'pallancata', name: 'Pallancata Mine', lat: -14.72, lng: -73.28, type: 'mine', production: 0.40, unit: 'kt/year', country: 'Peru', operator: 'Hochschild Mining', description: 'Underground silver-gold mine in Ayacucho region' },
      { id: 'orcopampa', name: 'Orcopampa Mine', lat: -15.27, lng: -72.33, type: 'mine', production: 0.35, unit: 'kt/year', country: 'Peru', operator: 'Buenaventura', description: 'Underground gold-silver mine in Arequipa region' },
      { id: 'arcata', name: 'Arcata Mine', lat: -15.23, lng: -72.17, type: 'mine', production: 0.30, unit: 'kt/year', country: 'Peru', operator: 'Hochschild Mining', description: 'Silver-gold mine in the Peruvian Andes' },
      { id: 'julcani', name: 'Julcani Mine', lat: -12.95, lng: -75.05, type: 'mine', production: 0.30, unit: 'kt/year', country: 'Peru', operator: 'Buenaventura', description: 'Historic silver mine in Huancavelica region' },
      // China - Major silver producer (regional aggregations)
      { id: 'henan-silver-district', name: 'Henan Silver District', lat: 33.87, lng: 111.52, type: 'mine', production: 1.20, unit: 'kt/year', country: 'China', operator: 'Various (Luoyang Mining, Zhongjin Gold)', description: 'Major silver-producing region including Luoyang and Sanmenxia mines' },
      { id: 'inner-mongolia-silver', name: 'Inner Mongolia Silver Mines', lat: 43.62, lng: 115.98, type: 'mine', production: 0.95, unit: 'kt/year', country: 'China', operator: 'Various (China Silver Group, Shandong Gold)', description: 'Silver by-product from lead-zinc-copper mining in Inner Mongolia' },
      { id: 'yunnan-silver-district', name: 'Yunnan Silver District', lat: 26.50, lng: 103.80, type: 'mine', production: 0.72, unit: 'kt/year', country: 'China', operator: 'Various (Yunnan Copper, Yunnan Tin)', description: 'Polymetallic mining region producing silver as by-product' },
      { id: 'jiangxi-silver-district', name: 'Jiangxi Silver District', lat: 28.52, lng: 115.82, type: 'mine', production: 0.55, unit: 'kt/year', country: 'China', operator: 'Various (Jiangxi Copper)', description: 'Silver by-product from copper and lead-zinc mining' },
      // Bolivia
      { id: 'san-cristobal-silver', name: 'San Cristóbal Mine', lat: -21.10, lng: -66.64, type: 'mine', production: 0.65, unit: 'kt/year', country: 'Bolivia', operator: 'Sumitomo Corporation', description: 'One of the world\'s largest silver-zinc-lead mines' },
      { id: 'san-vicente-silver', name: 'San Vicente Mine', lat: -21.30, lng: -65.60, type: 'mine', production: 0.28, unit: 'kt/year', country: 'Bolivia', operator: 'Pan American Silver/COMIBOL', description: 'Underground silver-zinc mine in southern Bolivia' },
      { id: 'potosi-silver', name: 'Potosí Silver Mines', lat: -19.59, lng: -65.75, type: 'mine', production: 0.32, unit: 'kt/year', country: 'Bolivia', operator: 'Various cooperatives', description: 'Historic Cerro Rico silver mining district' },
      // Chile
      { id: 'pascua-lama-silver', name: 'Pascua-Lama Region', lat: -29.32, lng: -70.02, type: 'mine', production: 0.48, unit: 'kt/year', country: 'Chile', operator: 'Barrick Gold', description: 'Border gold-silver deposit in the Andes' },
      { id: 'collahuasi-silver', name: 'Collahuasi Silver By-product', lat: -20.95, lng: -68.73, type: 'mine', production: 0.38, unit: 'kt/year', country: 'Chile', operator: 'Anglo American/Glencore', description: 'Silver by-product from major copper mine at 4,000m' },
      { id: 'candelaria-silver', name: 'Candelaria Mine', lat: -27.52, lng: -69.27, type: 'mine', production: 0.32, unit: 'kt/year', country: 'Chile', operator: 'Lundin Mining', description: 'Copper-gold-silver mine in Atacama region' },
      // India
      { id: 'rampura-agucha-silver', name: 'Rampura Agucha Mine', lat: 25.82, lng: 74.77, type: 'mine', production: 0.52, unit: 'kt/year', country: 'India', operator: 'Hindustan Zinc (Vedanta)', description: 'World\'s largest zinc mine with major silver by-product' },
      { id: 'sindesar-khurd-silver', name: 'Sindesar Khurd Mine', lat: 25.02, lng: 74.13, type: 'mine', production: 0.32, unit: 'kt/year', country: 'India', operator: 'Hindustan Zinc (Vedanta)', description: 'Underground zinc-lead mine with high silver content in Rajasthan' },
      // Argentina
      { id: 'pirquitas-silver', name: 'Pirquitas Mine', lat: -22.69, lng: -66.50, type: 'mine', production: 0.52, unit: 'kt/year', country: 'Argentina', operator: 'SSR Mining', description: 'High-altitude open-pit silver-tin mine in Jujuy province' },
      { id: 'cerro-vanguardia-silver', name: 'Cerro Vanguardia Mine', lat: -48.38, lng: -68.27, type: 'mine', production: 0.42, unit: 'kt/year', country: 'Argentina', operator: 'AngloGold Ashanti', description: 'Gold-silver mine in Santa Cruz, Patagonia' },
      // Australia (additional)
      { id: 'broken-hill-silver', name: 'Broken Hill Mine', lat: -31.95, lng: 141.45, type: 'mine', production: 0.38, unit: 'kt/year', country: 'Australia', operator: 'Perilya (Zhongjin Lingnan)', description: 'Historic silver-lead-zinc mining district in New South Wales' },
      { id: 'olympic-dam-silver', name: 'Olympic Dam Silver By-product', lat: -30.47, lng: 136.88, type: 'mine', production: 0.35, unit: 'kt/year', country: 'Australia', operator: 'BHP', description: 'Silver by-product from giant polymetallic underground mine' },
      // Guatemala
      { id: 'escobal', name: 'Escobal Mine', lat: 14.38, lng: -90.28, type: 'mine', production: 0.62, unit: 'kt/year', country: 'Guatemala', operator: 'Pan American Silver', description: 'One of the world\'s largest primary silver deposits' },
      // USA (additional)
      { id: 'lucky-friday', name: 'Lucky Friday Mine', lat: 47.47, lng: -115.97, type: 'mine', production: 0.42, unit: 'kt/year', country: 'USA', operator: 'Hecla Mining', description: 'Deep underground silver mine in Idaho\'s Silver Valley' },
      { id: 'galena-mine', name: 'Galena Mine', lat: 47.51, lng: -115.92, type: 'mine', production: 0.35, unit: 'kt/year', country: 'USA', operator: 'Americas Gold and Silver', description: 'Historic silver mine in Coeur d\'Alene mining district, Idaho' },
      // Sweden
      { id: 'garpenberg-silver', name: 'Garpenberg Mine', lat: 60.33, lng: 16.22, type: 'mine', production: 0.48, unit: 'kt/year', country: 'Sweden', operator: 'Boliden', description: 'One of Europe\'s most productive zinc-silver mines' },
      // Turkey
      { id: 'gumushane-silver', name: 'Gümüşhane Silver District', lat: 40.46, lng: 39.48, type: 'mine', production: 0.25, unit: 'kt/year', country: 'Turkey', operator: 'Various', description: 'Historic silver mining region in northeastern Turkey' },
      // Kazakhstan
      { id: 'karaganda-silver', name: 'Karaganda Silver By-product', lat: 49.80, lng: 73.10, type: 'mine', production: 0.35, unit: 'kt/year', country: 'Kazakhstan', operator: 'Kazzinc (Glencore)', description: 'Silver by-product from polymetallic mining operations' },
      // Morocco
      { id: 'imiter-silver', name: 'Imiter Mine', lat: 31.38, lng: -5.87, type: 'mine', production: 0.28, unit: 'kt/year', country: 'Morocco', operator: 'Managem Group', description: 'Africa\'s largest silver mine in Anti-Atlas mountains' },
      // Indonesia
      { id: 'grasberg-silver', name: 'Grasberg Silver By-product', lat: -4.05, lng: 137.12, type: 'mine', production: 0.45, unit: 'kt/year', country: 'Indonesia', operator: 'Freeport-McMoRan/INALUM', description: 'Silver by-product from world\'s largest gold-copper mine' },
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
      { id: 'kazakhstan-isr', name: 'Kazakhstan ISR Operations', lat: 47.00, lng: 67.00, type: 'mine', production: 16, unit: 'kt/year', country: 'Kazakhstan', operator: 'Kazatomprom', description: 'World\'s largest uranium producer using in-situ recovery' },
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
      { id: 'bayan-obo', name: 'Bayan Obo', lat: 41.77, lng: 109.97, type: 'mine', production: 145, unit: 'kt REO/year', country: 'China', operator: 'China Northern Rare Earth', description: 'World\'s largest rare earth deposit, producing ~50% of global REEs' },
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

      // DRC - Additional
      { id: 'kisanfu-cobalt', name: 'Kisanfu Mine', lat: -10.55, lng: 26.18, type: 'mine', production: 15, unit: 'kt/year', country: 'DRC', operator: 'CMOC', description: 'World-class cobalt-copper deposit' },
      { id: 'deziwa-cobalt', name: 'Deziwa Mine', lat: -10.42, lng: 26.05, type: 'mine', production: 8, unit: 'kt/year', country: 'DRC', operator: 'China Nonferrous', description: 'Major copper-cobalt mine in Katanga' },
      { id: 'drc-artisanal-cobalt', name: 'DRC Artisanal Cobalt', lat: -10.98, lng: 25.95, type: 'mine', production: 10, unit: 'kt/year', country: 'DRC', operator: 'Artisanal miners', description: 'Artisanal cobalt mining across Lualaba' },

      // Indonesia
      { id: 'indonesia-hpal-cobalt', name: 'Indonesia HPAL Cobalt', lat: -2.85, lng: 121.70, type: 'mine', production: 12, unit: 'kt/year', country: 'Indonesia', operator: 'Various (Huayou/CATL/GEM)', description: 'Cobalt from HPAL nickel plants in Sulawesi' },

      // Philippines
      { id: 'philippines-cobalt', name: 'Philippines Cobalt', lat: 9.48, lng: 125.98, type: 'mine', production: 5, unit: 'kt/year', country: 'Philippines', operator: 'Nickel Asia/Sumitomo', description: 'Cobalt from HPAL operations' },

      // Morocco
      { id: 'bou-azzer', name: 'Bou Azzer Mine', lat: 30.48, lng: -6.92, type: 'mine', production: 2, unit: 'kt/year', country: 'Morocco', operator: 'Managem Group', description: 'World\'s largest primary cobalt mine' },

      // Cuba
      { id: 'moa-bay-cobalt', name: 'Moa Bay Cobalt', lat: 20.66, lng: -74.90, type: 'mine', production: 3, unit: 'kt/year', country: 'Cuba', operator: 'Sherritt/Cuban JV', description: 'Laterite nickel-cobalt operation' },

      // Papua New Guinea
      { id: 'ramu-cobalt', name: 'Ramu Nickel-Cobalt', lat: -5.58, lng: 145.75, type: 'mine', production: 3, unit: 'kt/year', country: 'Papua New Guinea', operator: 'MCC Ramu NiCo', description: 'HPAL cobalt from Ramu operation' },

      // Zambia
      { id: 'chambishi-cobalt', name: 'Chambishi Cobalt', lat: -12.63, lng: 28.07, type: 'mine', production: 3, unit: 'kt/year', country: 'Zambia', operator: 'CNMC', description: 'Copper-cobalt mine on Copperbelt' },

      // Finland
      { id: 'terrafame-cobalt', name: 'Terrafame Sotkamo', lat: 63.97, lng: 28.02, type: 'mine', production: 2, unit: 'kt/year', country: 'Finland', operator: 'Terrafame', description: 'Bio-heap leach cobalt-nickel extraction' },
    ]
  },

  zinc: {
    id: 'zinc',
    name: 'Zinc',
    color: '#9DB4C0',
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

      // China - additional regions (~3.74 Mt to reach ~4.2 Mt total with existing 0.46)
      { id: 'hunan-zinc-district', name: 'Hunan Zinc District', lat: 27.83, lng: 112.93, type: 'mine', production: 0.85, unit: 'Mt/year', country: 'China', operator: 'Hunan Nonferrous/Zhuzhou Smelter', description: 'Major zinc-lead mining region including Shuikoushan and Shizhuyuan deposits' },
      { id: 'inner-mongolia-zn', name: 'Inner Mongolia Zinc District', lat: 43.95, lng: 116.05, type: 'mine', production: 0.72, unit: 'Mt/year', country: 'China', operator: 'China Nonferrous Metal Mining', description: 'Multiple zinc-lead mines across the autonomous region' },
      { id: 'yunnan-zn', name: 'Yunnan Zinc District', lat: 25.60, lng: 103.50, type: 'mine', production: 0.65, unit: 'Mt/year', country: 'China', operator: 'Yunnan Chihong Zinc & Germanium', description: 'Major zinc production region in southwest China' },
      { id: 'guangdong-zn', name: 'Guangdong Zinc District', lat: 24.80, lng: 113.58, type: 'mine', production: 0.48, unit: 'Mt/year', country: 'China', operator: 'Shenzhen Zhongjin Lingnan', description: 'Fankou and other zinc-lead mines in northern Guangdong' },
      { id: 'sichuan-zn', name: 'Sichuan Zinc District', lat: 30.05, lng: 102.90, type: 'mine', production: 0.52, unit: 'Mt/year', country: 'China', operator: 'Various state enterprises', description: 'Zinc-lead mining operations in Sichuan Province' },
      { id: 'gansu-zn', name: 'Gansu Zinc Mines', lat: 36.06, lng: 103.83, type: 'mine', production: 0.32, unit: 'Mt/year', country: 'China', operator: 'Baiyin Nonferrous Group', description: 'Zinc production centered around Baiyin mining district' },
      { id: 'guangxi-zn', name: 'Guangxi Zinc Mines', lat: 24.33, lng: 109.40, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'China', operator: 'Various operators', description: 'Zinc-lead mining operations in Guangxi region' },

      // India - additional mines
      { id: 'sindesar-khurd', name: 'Sindesar Khurd Mine', lat: 24.97, lng: 74.02, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'India', operator: 'Hindustan Zinc', description: 'Underground zinc-lead-silver mine in Rajasthan' },
      { id: 'zawar-zn', name: 'Zawar Mines', lat: 24.35, lng: 73.72, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'India', operator: 'Hindustan Zinc', description: 'Historic zinc-lead mining complex with 2,000+ year history' },
      { id: 'kayad-zn', name: 'Kayad Mine', lat: 26.52, lng: 75.77, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'India', operator: 'Hindustan Zinc', description: 'Underground zinc mine in Ajmer district, Rajasthan' },

      // Australia - additional mines
      { id: 'mcarthur-river-zn', name: 'McArthur River Mine', lat: -16.44, lng: 136.10, type: 'mine', production: 0.35, unit: 'Mt/year', country: 'Australia', operator: 'Glencore', description: 'One of world\'s largest zinc-lead deposits in Northern Territory' },
      { id: 'dugald-river', name: 'Dugald River Mine', lat: -20.26, lng: 139.83, type: 'mine', production: 0.20, unit: 'Mt/year', country: 'Australia', operator: 'MMG Limited', description: 'High-grade underground zinc mine in Queensland' },
      { id: 'rosebery-zn', name: 'Rosebery Mine', lat: -41.77, lng: 145.53, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Australia', operator: 'MMG Limited', description: 'Underground polymetallic mine in western Tasmania' },

      // Peru - additional mines
      { id: 'cerro-de-pasco-zn', name: 'Cerro de Pasco Mine', lat: -10.68, lng: -76.26, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'Peru', operator: 'Cerro de Pasco Resources', description: 'Historic polymetallic mining district at 4,380m elevation' },
      { id: 'el-porvenir-zn', name: 'El Porvenir Mine', lat: -10.55, lng: -76.36, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Peru', operator: 'Nexa Resources', description: 'Underground zinc-lead-copper mine in Pasco region' },
      { id: 'atacocha-zn', name: 'Atacocha Mine', lat: -10.57, lng: -76.21, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Peru', operator: 'Nexa Resources', description: 'Underground polymetallic mine in Pasco department' },

      // Mexico
      { id: 'fresnillo-zn', name: 'Fresnillo Zinc Operations', lat: 23.17, lng: -102.87, type: 'mine', production: 0.28, unit: 'Mt/year', country: 'Mexico', operator: 'Fresnillo plc', description: 'Zinc by-product from polymetallic mining operations' },
      { id: 'penoles-zn', name: 'Peñoles Zinc Operations', lat: 25.54, lng: -103.42, type: 'mine', production: 0.32, unit: 'Mt/year', country: 'Mexico', operator: 'Industrias Peñoles', description: 'Multiple zinc-lead mines across northern Mexico' },

      // Canada
      { id: 'kidd-creek-zn', name: 'Kidd Creek Mine', lat: 48.68, lng: -81.37, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Canada', operator: 'Glencore', description: 'Deep underground copper-zinc mine near Timmins, Ontario' },
      { id: 'halfmile-lake-zn', name: 'Halfmile Lake & Caribou', lat: 47.30, lng: -66.22, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Canada', operator: 'Trevali Mining', description: 'Zinc-lead-silver mines in Bathurst Mining Camp, New Brunswick' },
      { id: 'myra-falls-zn', name: 'Myra Falls Mine', lat: 49.58, lng: -125.60, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Canada', operator: 'Nyrstar', description: 'Underground polymetallic mine on Vancouver Island, BC' },

      // Bolivia
      { id: 'san-cristobal-zn', name: 'San Cristóbal Mine', lat: -21.11, lng: -66.65, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Bolivia', operator: 'Sumitomo Corporation', description: 'Large open-pit silver-zinc-lead mine in Potosí Department' },

      // Ireland
      { id: 'tara-mine-navan', name: 'Tara Mine', lat: 53.66, lng: -6.70, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Ireland', operator: 'Boliden', description: 'Europe\'s largest zinc mine, located near Navan, County Meath' },

      // Sweden
      { id: 'garpenberg-zn', name: 'Garpenberg Mine', lat: 60.32, lng: 16.23, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'Sweden', operator: 'Boliden', description: 'One of the world\'s most efficient underground zinc mines' },
      { id: 'boliden-aitik-zn', name: 'Boliden Aitik', lat: 67.07, lng: 20.97, type: 'mine', production: 0.04, unit: 'Mt/year', country: 'Sweden', operator: 'Boliden', description: 'Large open-pit mine with zinc as by-product from copper production' },
      { id: 'zinkgruvan-zn', name: 'Zinkgruvan Mine', lat: 58.82, lng: 15.10, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Sweden', operator: 'Lundin Mining', description: 'Underground zinc-lead-silver mine in south-central Sweden' },

      // Kazakhstan
      { id: 'kazzinc-operations', name: 'Kazzinc Operations', lat: 49.97, lng: 82.62, type: 'mine', production: 0.30, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Kazzinc/Glencore', description: 'Integrated zinc mining and smelting complex in East Kazakhstan' },
      { id: 'shalkiya-zn', name: 'Shalkiya Mine', lat: 43.67, lng: 67.33, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Shalkiya Zinc', description: 'Large zinc-lead deposit in Kyzylorda region' },

      // USA - additional mines
      { id: 'east-tennessee-zn', name: 'East Tennessee Zinc District', lat: 36.28, lng: -83.50, type: 'mine', production: 0.15, unit: 'Mt/year', country: 'USA', operator: 'Nyrstar/Glencore', description: 'Historic zinc mining district in Appalachian region' },
      { id: 'greens-creek-zn', name: 'Greens Creek Mine', lat: 58.08, lng: -134.64, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'USA', operator: 'Hecla Mining', description: 'Underground polymetallic mine on Admiralty Island, Alaska' },

      // Turkey
      { id: 'balya-zn', name: 'Balya Lead-Zinc Mine', lat: 39.75, lng: 27.58, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Turkey', operator: 'Eti Mine Works', description: 'Lead-zinc mining operations in Balıkesir Province' },
      { id: 'kayseri-zn', name: 'Kayseri Zinc Operations', lat: 38.73, lng: 35.48, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Turkey', operator: 'Various operators', description: 'Zinc-lead mining in central Anatolia' },

      // Brazil
      { id: 'vazante-zn', name: 'Vazante Mine', lat: -17.99, lng: -46.91, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'Brazil', operator: 'Nexa Resources', description: 'World\'s largest known willemite zinc deposit in Minas Gerais' },
      { id: 'morro-agudo-zn', name: 'Morro Agudo Mine', lat: -18.28, lng: -46.38, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Brazil', operator: 'Nexa Resources', description: 'Underground zinc-lead mine in Minas Gerais' },

      // Poland
      { id: 'olkusz-zn', name: 'Olkusz Zinc-Lead District', lat: 50.28, lng: 19.57, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Poland', operator: 'ZGH Boleslaw', description: 'Historic Silesian zinc-lead mining district' },

      // Namibia
      { id: 'skorpion-zn', name: 'Skorpion Zinc Mine', lat: -27.83, lng: 16.63, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Namibia', operator: 'Vedanta Resources', description: 'Open-pit zinc oxide mine in southern Namibia' },

      // Honduras
      { id: 'el-mochito-zn', name: 'El Mochito Mine', lat: 14.85, lng: -88.07, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Honduras', operator: 'Ascendant Resources', description: 'Underground zinc-lead-silver mine in western Honduras' },

      // Finland
      { id: 'pyhasalmi-zn', name: 'Pyhäsalmi Mine', lat: 63.66, lng: 26.04, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Finland', operator: 'First Quantum Minerals', description: 'Deep underground copper-zinc mine in central Finland' },

      // Portugal
      { id: 'neves-corvo-zn', name: 'Neves-Corvo Mine', lat: 37.57, lng: -7.97, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Portugal', operator: 'Lundin Mining', description: 'Underground copper-zinc mine in Alentejo region' },

      // Bolivia
      { id: 'san-cristobal-zn-add', name: 'Bolivia San Cristobal', lat: -21.07, lng: -66.63, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'Bolivia', operator: 'Sumitomo', description: 'Large open-pit silver-zinc-lead mine in Potosi' },

      // China - additional
      { id: 'lanping-zn', name: 'China Lanping Zinc', lat: 26.45, lng: 99.42, type: 'mine', production: 0.18, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Major zinc-lead deposit in Yunnan Province' },
      { id: 'xinjiang-zn', name: 'China Xinjiang Zinc', lat: 44.00, lng: 87.50, type: 'mine', production: 0.12, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Zinc mining operations in Xinjiang region' },

      // Namibia
      { id: 'rosh-pinah-zn', name: 'Namibia Rosh Pinah', lat: -27.95, lng: 16.77, type: 'mine', production: 0.08, unit: 'Mt/year', country: 'Namibia', operator: 'Trevali Mining', description: 'Underground zinc-lead mine in southern Namibia' },

      // Kazakhstan
      { id: 'ridder-zn', name: 'Kazakhstan Ridder Zinc', lat: 50.35, lng: 83.52, type: 'mine', production: 0.10, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Kazzinc/Glencore', description: 'Zinc mining and smelting complex in East Kazakhstan' },

      // Turkey
      { id: 'balya-zn-add', name: 'Turkey Balya Zinc', lat: 39.75, lng: 27.58, type: 'mine', production: 0.05, unit: 'Mt/year', country: 'Turkey', operator: 'Various', description: 'Historic zinc-lead mining district in Balikesir Province' },

      // Myanmar
      { id: 'bawdwin-zn', name: 'Burma/Myanmar Bawdwin Mine', lat: 23.12, lng: 97.25, type: 'mine', production: 0.06, unit: 'Mt/year', country: 'Myanmar', operator: 'Myanmar Metals', description: 'Historic lead-zinc-silver mine in Shan State' },

      // Other
      { id: 'other-world-zn', name: 'Other World Zinc', lat: 10.0, lng: 25.0, type: 'mine', production: 0.29, unit: 'Mt/year', country: 'Various', operator: 'Multiple', description: 'Aggregate of smaller zinc mining operations worldwide' },
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

      // China - Additional
      { id: 'guizhou-wengfu', name: 'Guizhou Wengfu Phosphate', lat: 27.00, lng: 107.17, type: 'mine', production: 12, unit: 'Mt/year', country: 'China', operator: 'Wengfu Group', description: 'Major phosphate mine and processing in Guizhou' },
      { id: 'sichuan-phosphate', name: 'Sichuan Phosphate Mines', lat: 31.47, lng: 104.73, type: 'mine', production: 10, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Phosphate mining in Sichuan Basin' },
      { id: 'china-other-phosphate', name: 'China Other Phosphate', lat: 30.00, lng: 115.00, type: 'mine', production: 10, unit: 'Mt/year', country: 'China', operator: 'Various', description: 'Aggregate from Hubei, Anhui and other provinces' },

      // Egypt
      { id: 'abu-tartur', name: 'Abu Tartur Mine', lat: 25.47, lng: 30.02, type: 'mine', production: 3, unit: 'Mt/year', country: 'Egypt', operator: 'El Nasr Mining', description: 'Large phosphate deposit in Western Desert' },

      // Saudi Arabia
      { id: 'waad-al-shamal', name: 'Wa\'ad al-Shamal', lat: 31.67, lng: 38.75, type: 'mine', production: 6, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'Ma\'aden', description: 'Integrated phosphate mining and fertilizer complex' },

      // Brazil
      { id: 'mosaic-tapira', name: 'Mosaic Tapira Mine', lat: -19.87, lng: -46.83, type: 'mine', production: 5, unit: 'Mt/year', country: 'Brazil', operator: 'Mosaic Fertilizantes', description: 'Major phosphate mining complex in Minas Gerais' },

      // India
      { id: 'rajasthan-phosphate', name: 'RSMML Jhamarkotra', lat: 24.30, lng: 73.67, type: 'mine', production: 2.5, unit: 'Mt/year', country: 'India', operator: 'RSMML', description: 'Largest rock phosphate mine in India' },

      // South Africa
      { id: 'foskor-phalaborwa', name: 'Foskor Phalaborwa', lat: -23.94, lng: 31.14, type: 'mine', production: 2, unit: 'Mt/year', country: 'South Africa', operator: 'Foskor', description: 'Major phosphate mine' },

      // Peru
      { id: 'bayovar-phosphate', name: 'Bayovar Phosphate', lat: -5.82, lng: -81.05, type: 'mine', production: 3, unit: 'Mt/year', country: 'Peru', operator: 'Focus Minerals', description: 'Large sedimentary phosphate deposit' },

      // Vietnam
      { id: 'lao-cai-phosphate', name: 'Lao Cai Phosphate Mine', lat: 22.48, lng: 103.97, type: 'mine', production: 3, unit: 'Mt/year', country: 'Vietnam', operator: 'Lao Cai Chemical', description: 'Northern Vietnam phosphate district' },

      // Senegal
      { id: 'ics-taiba', name: 'ICS Taiba Phosphate', lat: 14.93, lng: -16.97, type: 'mine', production: 2, unit: 'Mt/year', country: 'Senegal', operator: 'ICS', description: 'West African phosphate complex' },

      // Algeria
      { id: 'djebel-onk', name: 'Djebel Onk Phosphate', lat: 34.70, lng: 7.98, type: 'mine', production: 1.5, unit: 'Mt/year', country: 'Algeria', operator: 'Ferphos', description: 'Algerian phosphate complex near Tebessa' },

      // Australia
      { id: 'phosphate-hill-aus', name: 'Phosphate Hill Mine', lat: -21.80, lng: 139.98, type: 'mine', production: 2, unit: 'Mt/year', country: 'Australia', operator: 'Incitec Pivot', description: 'Phosphate mine in northwest Queensland' },

      // Jordan - additional
      { id: 'al-shidiya-phosphate', name: 'Jordan Al-Shidiya', lat: 29.85, lng: 35.80, type: 'mine', production: 3.5, unit: 'Mt/year', country: 'Jordan', operator: 'JPMC', description: 'Southern Jordan phosphate mining complex' },

      // Tunisia - additional
      { id: 'tunisia-gafsa-complex', name: 'Tunisia Gafsa Complex', lat: 34.42, lng: 8.78, type: 'mine', production: 2.5, unit: 'Mt/year', country: 'Tunisia', operator: 'CPG', description: 'Additional phosphate capacity from Gafsa mining complex' },

      // Togo
      { id: 'hahotoe-phosphate', name: 'Togo Hahotoe Phosphate', lat: 6.35, lng: 1.42, type: 'mine', production: 1.0, unit: 'Mt/year', country: 'Togo', operator: 'SNPT', description: 'Coastal phosphate mining operation in Togo' },

      // USA - additional Florida
      { id: 'florida-phosphate-add', name: 'USA Florida Phosphate', lat: 27.90, lng: -82.00, type: 'mine', production: 4.0, unit: 'Mt/year', country: 'USA', operator: 'Mosaic/Nutrien', description: 'Additional phosphate mining capacity in central Florida' },

      // Mexico
      { id: 'baja-phosphate', name: 'Mexico Baja California Phosphate', lat: 27.80, lng: -114.00, type: 'mine', production: 1.5, unit: 'Mt/year', country: 'Mexico', operator: 'ROFOMEX', description: 'Phosphate mining operations in Baja California' },

      // Kazakhstan
      { id: 'karatau-phosphate', name: 'Kazakhstan Karatau Phosphate', lat: 43.20, lng: 69.00, type: 'mine', production: 2.0, unit: 'Mt/year', country: 'Kazakhstan', operator: 'Kazphosphate', description: 'Major phosphate deposits in southern Kazakhstan' },
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
      { id: 'saskatchewan', name: 'Saskatchewan Potash Belt', lat: 52.10, lng: -106.60, type: 'mine', production: 16, unit: 'Mt/year', country: 'Canada', operator: 'Nutrien/Mosaic/K+S', description: 'World\'s largest and highest quality potash deposits' },
      { id: 'berezniki', name: 'Berezniki & Solikamsk', lat: 59.40, lng: 56.80, type: 'mine', production: 9, unit: 'Mt/year', country: 'Russia', operator: 'Uralkali', description: 'World\'s oldest potash operations, major producer' },
      { id: 'soligorsk', name: 'Soligorsk', lat: 52.79, lng: 27.55, type: 'mine', production: 8, unit: 'Mt/year', country: 'Belarus', operator: 'Belaruskali', description: 'World\'s 3rd largest potash producer' },
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
      { id: 'bushveld', name: 'Bushveld Complex', lat: -25.00, lng: 29.00, type: 'mine', production: 110, unit: 'tonnes/year', country: 'South Africa', operator: 'Impala/Anglo/Sibanye', description: 'World\'s largest PGM deposit, 75% of global reserves' },
      { id: 'mogalakwena', name: 'Mogalakwena Mine', lat: -24.28, lng: 28.95, type: 'mine', production: 22, unit: 'tonnes/year', country: 'South Africa', operator: 'Anglo American Platinum', description: 'World\'s largest open-pit platinum mine' },
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
      { id: 'kalahari', name: 'Kalahari Manganese Field', lat: -27.30, lng: 22.90, type: 'mine', production: 7, unit: 'Mt/year', country: 'South Africa', operator: 'South32/Assmang', description: 'World\'s largest manganese field, 70% of global reserves' },
      { id: 'groote-eylandt-mn', name: 'Groote Eylandt', lat: -13.95, lng: 136.50, type: 'mine', production: 4.2, unit: 'Mt/year', country: 'Australia', operator: 'South32', description: 'High-grade manganese deposit' },
      { id: 'moanda-mn', name: 'Moanda', lat: -1.57, lng: 13.20, type: 'mine', production: 2.8, unit: 'Mt/year', country: 'Gabon', operator: 'Comilog/Eramet', description: 'One of world\'s richest manganese deposits' },
      { id: 'carajas-mn', name: 'Carajás Manganese', lat: -6.07, lng: -50.20, type: 'mine', production: 2.8, unit: 'Mt/year', country: 'Brazil', operator: 'Vale', description: 'Major manganese producer in Amazon' },
      { id: 'guangxi-mn', name: 'Guangxi Province Mines', lat: 23.75, lng: 108.80, type: 'mine', production: 3, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'China\'s main manganese production region' },
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

      // China - Regional clusters (remaining ~1400 Mt beyond Conch + CNBM)
      { id: 'shandong-cement', name: 'Shandong Province Cement', lat: 36.67, lng: 116.99, type: 'plant', production: 250, unit: 'Mt/year', country: 'China', operator: 'Shandong Shanshui/Multiple', description: 'Major cement production region in eastern China' },
      { id: 'jiangsu-cement', name: 'Jiangsu Province Cement', lat: 32.06, lng: 118.78, type: 'plant', production: 180, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Yangtze Delta cement production cluster' },
      { id: 'henan-cement', name: 'Henan Province Cement', lat: 34.76, lng: 113.65, type: 'plant', production: 180, unit: 'Mt/year', country: 'China', operator: 'Tianrui/Multiple', description: 'Central China cement hub serving inland infrastructure' },
      { id: 'guangdong-cement', name: 'Guangdong Province Cement', lat: 23.13, lng: 113.26, type: 'plant', production: 150, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Pearl River Delta cement production for southern China' },
      { id: 'sichuan-cement', name: 'Sichuan Province Cement', lat: 30.57, lng: 104.07, type: 'plant', production: 140, unit: 'Mt/year', country: 'China', operator: 'Sichuan Esheng/Multiple', description: 'Western China cement cluster for infrastructure development' },
      { id: 'hebei-cement', name: 'Hebei Province Cement', lat: 38.04, lng: 114.51, type: 'plant', production: 130, unit: 'Mt/year', country: 'China', operator: 'Jidong Cement/Multiple', description: 'Northern China cement production supporting Beijing region' },
      { id: 'hubei-cement', name: 'Hubei Province Cement', lat: 30.59, lng: 114.31, type: 'plant', production: 120, unit: 'Mt/year', country: 'China', operator: 'Huaxin Cement/Multiple', description: 'Central China cement production along Yangtze River' },
      { id: 'hunan-cement', name: 'Hunan Province Cement', lat: 28.23, lng: 112.94, type: 'plant', production: 100, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'South-central China cement production region' },
      { id: 'zhejiang-cement', name: 'Zhejiang Province Cement', lat: 30.27, lng: 120.15, type: 'plant', production: 80, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'East China coastal cement production' },
      { id: 'yunnan-cement', name: 'Yunnan Province Cement', lat: 25.04, lng: 102.71, type: 'plant', production: 70, unit: 'Mt/year', country: 'China', operator: 'Yunnan Yiliang/Multiple', description: 'Southwest China cement cluster near limestone deposits' },

      // India - Additional producers (~170 Mt beyond UltraTech + ACC)
      { id: 'ambuja-cement', name: 'Ambuja Cements', lat: 23.02, lng: 72.57, type: 'plant', production: 35, unit: 'Mt/year', country: 'India', operator: 'Ambuja/Holcim', description: 'Major western India cement producer based in Gujarat' },
      { id: 'shree-cement', name: 'Shree Cement', lat: 25.34, lng: 74.63, type: 'plant', production: 45, unit: 'Mt/year', country: 'India', operator: 'Shree Cement', description: 'Fast-growing Indian cement company based in Rajasthan' },
      { id: 'dalmia-cement', name: 'Dalmia Bharat Cement', lat: 11.13, lng: 78.66, type: 'plant', production: 30, unit: 'Mt/year', country: 'India', operator: 'Dalmia Bharat', description: 'Major south Indian cement producer in Tamil Nadu' },
      { id: 'ramco-cements', name: 'Ramco Cements', lat: 10.53, lng: 78.14, type: 'plant', production: 20, unit: 'Mt/year', country: 'India', operator: 'The Ramco Cements', description: 'Leading south Indian cement manufacturer' },
      { id: 'rajasthan-cement-cluster', name: 'Rajasthan Cement Cluster', lat: 26.92, lng: 75.79, type: 'plant', production: 40, unit: 'Mt/year', country: 'India', operator: 'Multiple operators', description: 'Major cement production zone near Jaipur limestone belt' },

      // Vietnam
      { id: 'vicem-vietnam', name: 'Vietnam Cement Corp (VICEM)', lat: 20.86, lng: 106.68, type: 'plant', production: 100, unit: 'Mt/year', country: 'Vietnam', operator: 'VICEM/Multiple', description: 'Vietnam national cement industry centered near Hai Phong' },

      // Turkey
      { id: 'turkey-cement', name: 'Turkish Cement Producers', lat: 39.93, lng: 32.85, type: 'plant', production: 75, unit: 'Mt/year', country: 'Turkey', operator: 'Oyak/Limak/Multiple', description: 'Major cement exporter with plants across Anatolia' },

      // Iran
      { id: 'iran-cement', name: 'Iranian Cement Cluster', lat: 35.69, lng: 51.39, type: 'plant', production: 55, unit: 'Mt/year', country: 'Iran', operator: 'Tehran Cement/Multiple', description: 'Major Middle Eastern cement production centered around Tehran' },

      // Brazil
      { id: 'votorantim-cement', name: 'Votorantim Cimentos', lat: -23.55, lng: -46.63, type: 'plant', production: 35, unit: 'Mt/year', country: 'Brazil', operator: 'Votorantim', description: 'Brazil\'s largest cement producer headquartered in Sao Paulo' },
      { id: 'intercement-brazil', name: 'InterCement Brazil', lat: -22.91, lng: -43.17, type: 'plant', production: 20, unit: 'Mt/year', country: 'Brazil', operator: 'InterCement', description: 'Major Brazilian cement manufacturer near Rio de Janeiro' },

      // Russia
      { id: 'eurocement-russia', name: 'Eurocement Group', lat: 55.76, lng: 37.62, type: 'plant', production: 35, unit: 'Mt/year', country: 'Russia', operator: 'Eurocement', description: 'Russia\'s largest cement producer with plants across the country' },
      { id: 'novoroscement', name: 'Novoroscement', lat: 44.72, lng: 37.77, type: 'plant', production: 20, unit: 'Mt/year', country: 'Russia', operator: 'Novoroscement', description: 'Major cement plant on the Black Sea coast in Novorossiysk' },

      // Japan
      { id: 'taiheiyo-cement', name: 'Taiheiyo Cement', lat: 35.68, lng: 139.69, type: 'plant', production: 50, unit: 'Mt/year', country: 'Japan', operator: 'Taiheiyo Cement', description: 'Japan\'s largest cement manufacturer' },

      // South Korea
      { id: 'ssangyong-cement', name: 'Ssangyong Cement', lat: 37.19, lng: 128.99, type: 'plant', production: 30, unit: 'Mt/year', country: 'South Korea', operator: 'Ssangyong Cement', description: 'Major South Korean cement producer near Yeongwol limestone' },
      { id: 'hanil-cement', name: 'Hanil Cement', lat: 37.35, lng: 128.73, type: 'plant', production: 20, unit: 'Mt/year', country: 'South Korea', operator: 'Hanil Cement', description: 'Leading South Korean cement manufacturer in Gangwon Province' },

      // USA - Additional
      { id: 'lehigh-hanson-usa', name: 'Lehigh Hanson US Operations', lat: 36.69, lng: -76.21, type: 'plant', production: 35, unit: 'Mt/year', country: 'USA', operator: 'Lehigh Hanson/HeidelbergCement', description: 'Major US cement producer with multiple plants' },
      { id: 'buzzi-unicem-usa', name: 'Buzzi Unicem USA', lat: 36.17, lng: -86.78, type: 'plant', production: 25, unit: 'Mt/year', country: 'USA', operator: 'Buzzi Unicem', description: 'Italian-owned cement operations across southeastern US' },
      { id: 'texas-lehigh', name: 'Texas Lehigh Cement', lat: 30.56, lng: -97.67, type: 'plant', production: 25, unit: 'Mt/year', country: 'USA', operator: 'Lehigh Hanson/Holcim JV', description: 'Major Texas cement plant near Austin' },

      // Saudi Arabia
      { id: 'saudi-cement', name: 'Saudi Cement Company', lat: 26.43, lng: 50.10, type: 'plant', production: 35, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'Saudi Cement Co', description: 'Major Gulf region cement producer in Eastern Province' },
      { id: 'yamama-cement', name: 'Yamama Saudi Cement', lat: 24.71, lng: 46.67, type: 'plant', production: 25, unit: 'Mt/year', country: 'Saudi Arabia', operator: 'Yamama Cement', description: 'Leading Saudi cement producer near Riyadh' },

      // Pakistan
      { id: 'lucky-cement', name: 'Lucky Cement', lat: 33.77, lng: 72.36, type: 'plant', production: 25, unit: 'Mt/year', country: 'Pakistan', operator: 'Lucky Cement', description: 'Pakistan\'s largest cement producer near Pezu' },
      { id: 'dgkhan-cement', name: 'DG Khan Cement', lat: 30.05, lng: 70.64, type: 'plant', production: 20, unit: 'Mt/year', country: 'Pakistan', operator: 'DG Khan Cement', description: 'Major Pakistani cement producer in Punjab' },

      // Bangladesh
      { id: 'shah-cement-bangladesh', name: 'Shah Cement Bangladesh', lat: 23.81, lng: 90.41, type: 'plant', production: 35, unit: 'Mt/year', country: 'Bangladesh', operator: 'Shah Cement/Multiple', description: 'Bangladesh cement industry centered near Dhaka' },

      // Thailand
      { id: 'scg-cement', name: 'SCG Cement', lat: 14.69, lng: 100.75, type: 'plant', production: 35, unit: 'Mt/year', country: 'Thailand', operator: 'Siam Cement Group', description: 'Thailand\'s largest cement producer in Saraburi Province' },

      // Germany
      { id: 'heidelberg-domestic', name: 'HeidelbergCement Germany', lat: 49.41, lng: 8.69, type: 'plant', production: 35, unit: 'Mt/year', country: 'Germany', operator: 'HeidelbergCement', description: 'Major European cement producer headquartered in Heidelberg' },

      // Philippines
      { id: 'holcim-philippines', name: 'Holcim Philippines', lat: 14.42, lng: 121.40, type: 'plant', production: 28, unit: 'Mt/year', country: 'Philippines', operator: 'Holcim', description: 'Leading cement producer in the Philippines near Norzagaray' },

      // China - Additional provincial clusters
      { id: 'fujian-cement', name: 'Fujian Province Cement', lat: 26.07, lng: 119.30, type: 'plant', production: 75, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Southeast China cement production in Fujian' },
      { id: 'shanxi-cement', name: 'Shanxi Province Cement', lat: 37.87, lng: 112.55, type: 'plant', production: 65, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Northern China coal-rich cement cluster' },
      { id: 'guangxi-cement', name: 'Guangxi Province Cement', lat: 22.82, lng: 108.32, type: 'plant', production: 80, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Southern China limestone-rich cement region' },
      { id: 'guizhou-cement', name: 'Guizhou Province Cement', lat: 26.65, lng: 106.63, type: 'plant', production: 70, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Southwest China cement production for rural infrastructure' },
      { id: 'liaoning-cement', name: 'Liaoning Province Cement', lat: 41.80, lng: 123.43, type: 'plant', production: 55, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Northeast China industrial cement region' },
      { id: 'jiangxi-cement', name: 'Jiangxi Province Cement', lat: 28.68, lng: 115.86, type: 'plant', production: 55, unit: 'Mt/year', country: 'China', operator: 'Multiple operators', description: 'Central-east China cement production' },

      // Indonesia - Additional
      { id: 'semen-indonesia', name: 'Semen Indonesia Group', lat: -7.26, lng: 112.75, type: 'plant', production: 35, unit: 'Mt/year', country: 'Indonesia', operator: 'Semen Indonesia', description: 'State-owned cement conglomerate based in Surabaya' },

      // Egypt - Additional
      { id: 'sinai-cement', name: 'Sinai Cement & Arabian Cement', lat: 30.01, lng: 32.55, type: 'plant', production: 30, unit: 'Mt/year', country: 'Egypt', operator: 'Sinai Cement/Multiple', description: 'Egyptian cement producers near Suez region' },

      // Algeria
      { id: 'algeria-cement', name: 'Algerian Cement Group (GICA)', lat: 36.75, lng: 3.06, type: 'plant', production: 25, unit: 'Mt/year', country: 'Algeria', operator: 'GICA/LafargeHolcim', description: 'Major North African cement producer' },

      // Spain
      { id: 'spain-cement', name: 'Spanish Cement Producers', lat: 40.42, lng: -3.70, type: 'plant', production: 20, unit: 'Mt/year', country: 'Spain', operator: 'CEMEX/Holcim/Multiple', description: 'Spanish cement production cluster' },

      // Italy
      { id: 'italy-cement', name: 'Italian Cement Producers', lat: 41.90, lng: 12.50, type: 'plant', production: 20, unit: 'Mt/year', country: 'Italy', operator: 'Buzzi Unicem/Italcementi', description: 'Italian cement industry' },

      // Mexico - Additional
      { id: 'gcc-mexico', name: 'GCC Chihuahua Operations', lat: 28.63, lng: -106.09, type: 'plant', production: 15, unit: 'Mt/year', country: 'Mexico', operator: 'Grupo Cementos de Chihuahua', description: 'Northern Mexico cement producer' },

      // Colombia
      { id: 'argos-colombia', name: 'Cementos Argos', lat: 6.25, lng: -75.56, type: 'plant', production: 18, unit: 'Mt/year', country: 'Colombia', operator: 'Grupo Argos', description: 'Colombia\'s largest cement producer based in Medellin' },

      // Uzbekistan
      { id: 'uzbekistan-cement', name: 'Uzbekistan Cement Industry', lat: 41.31, lng: 69.28, type: 'plant', production: 20, unit: 'Mt/year', country: 'Uzbekistan', operator: 'Multiple operators', description: 'Central Asian cement production hub' },

      // Malaysia
      { id: 'ytl-cement', name: 'YTL Cement Malaysia', lat: 4.21, lng: 101.97, type: 'plant', production: 20, unit: 'Mt/year', country: 'Malaysia', operator: 'YTL Cement/CIMA', description: 'Southeast Asian cement producer in Perak' },

      // Morocco
      { id: 'lafarge-morocco', name: 'LafargeHolcim Maroc', lat: 33.57, lng: -7.59, type: 'plant', production: 15, unit: 'Mt/year', country: 'Morocco', operator: 'LafargeHolcim', description: 'Leading Moroccan cement producer in Casablanca region' },
    ]
  }
};
