import { Location } from '../../types';

export const biomassLocations: Location[] = [
  // === United States (11,000 MW) ===
  { id: 'bio-gainesville', name: 'Gainesville Renewable Energy Center', lat: 29.72, lng: -82.41, type: 'plant' as const, capacity: 102, unit: 'MW', country: 'USA', operator: 'Gainesville Regional Utilities', description: 'Largest dedicated biomass plant in the Southeast, Gainesville, FL' },
  { id: 'bio-nacogdoches', name: 'Nacogdoches Generating Facility', lat: 31.60, lng: -94.66, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'Southern Power', description: 'Wood-fired biomass plant in East Texas' },
  { id: 'bio-savannah-river', name: 'Savannah River Site Biomass', lat: 33.25, lng: -81.62, type: 'plant' as const, capacity: 20, unit: 'MW', country: 'USA', operator: 'Department of Energy', description: 'Biomass cogeneration facility at the Savannah River Site, SC' },
  { id: 'bio-mcneil', name: 'Joseph C. McNeil Generating Station', lat: 44.52, lng: -73.20, type: 'plant' as const, capacity: 50, unit: 'MW', country: 'USA', operator: 'Burlington Electric', description: 'Wood-fired biomass plant in Burlington, VT' },
  { id: 'bio-schiller', name: 'Schiller Station Biomass', lat: 43.09, lng: -70.82, type: 'plant' as const, capacity: 48, unit: 'MW', country: 'USA', operator: 'Eversource Energy', description: 'Converted coal-to-biomass station in Portsmouth, NH' },
  { id: 'bio-livermore-falls', name: 'Livermore Falls Biomass', lat: 44.48, lng: -70.19, type: 'plant' as const, capacity: 37, unit: 'MW', country: 'USA', operator: 'ReEnergy Holdings', description: 'Wood-fired biomass plant in Livermore Falls, ME' },
  { id: 'bio-covanta-indianapolis', name: 'Covanta Indianapolis WTE', lat: 39.75, lng: -86.17, type: 'plant' as const, capacity: 73, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Indianapolis, IN' },
  { id: 'bio-covanta-fairfax', name: 'Covanta Fairfax WTE', lat: 38.75, lng: -77.24, type: 'plant' as const, capacity: 80, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Lorton, VA' },
  { id: 'bio-covanta-pinellas', name: 'Covanta Pinellas WTE', lat: 27.91, lng: -82.75, type: 'plant' as const, capacity: 75, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in St. Petersburg, FL' },
  { id: 'bio-wheelabrator-saugus', name: 'Wheelabrator Saugus WTE', lat: 42.47, lng: -71.01, type: 'plant' as const, capacity: 60, unit: 'MW', country: 'USA', operator: 'WIN Waste Innovations', description: 'One of the oldest WTE facilities in the US, Saugus, MA' },
  { id: 'bio-covanta-hempstead', name: 'Covanta Hempstead WTE', lat: 40.70, lng: -73.61, type: 'plant' as const, capacity: 72, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility on Long Island, NY' },
  { id: 'bio-covanta-essex', name: 'Covanta Essex WTE', lat: 40.75, lng: -74.17, type: 'plant' as const, capacity: 67, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Newark, NJ' },
  { id: 'bio-covanta-niagara', name: 'Covanta Niagara WTE', lat: 43.08, lng: -79.00, type: 'plant' as const, capacity: 45, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Niagara Falls, NY' },
  { id: 'bio-palm-beach', name: 'Palm Beach Renewable Energy Facility', lat: 26.78, lng: -80.13, type: 'plant' as const, capacity: 95, unit: 'MW', country: 'USA', operator: 'Solid Waste Authority', description: 'Waste-to-energy facility in West Palm Beach, FL' },
  { id: 'bio-lee-county', name: 'Lee County WTE', lat: 26.60, lng: -81.72, type: 'plant' as const, capacity: 60, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Fort Myers, FL' },
  { id: 'bio-hillsborough', name: 'Hillsborough County WTE', lat: 27.87, lng: -82.35, type: 'plant' as const, capacity: 46, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Tampa, FL' },
  { id: 'bio-pasco-county', name: 'Pasco County WTE', lat: 28.32, lng: -82.54, type: 'plant' as const, capacity: 30, unit: 'MW', country: 'USA', operator: 'Covanta', description: 'Waste-to-energy facility in Spring Hill, FL' },
  { id: 'bio-ca-other', name: 'California Biomass & WTE', lat: 36.78, lng: -119.42, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across California' },
  { id: 'bio-fl-other', name: 'Florida Other Biomass & WTE', lat: 28.50, lng: -81.52, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining biomass and WTE facilities across Florida' },
  { id: 'bio-ny-other', name: 'New York Biomass & WTE', lat: 42.17, lng: -74.95, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across New York' },
  { id: 'bio-pa-other', name: 'Pennsylvania Biomass & WTE', lat: 41.20, lng: -77.19, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across Pennsylvania' },
  { id: 'bio-ma-other', name: 'Massachusetts Biomass & WTE', lat: 42.41, lng: -71.38, type: 'plant' as const, capacity: 280, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across Massachusetts' },
  { id: 'bio-ct-other', name: 'Connecticut Biomass & WTE', lat: 41.60, lng: -72.73, type: 'plant' as const, capacity: 230, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across Connecticut' },
  { id: 'bio-nj-other', name: 'New Jersey Biomass & WTE', lat: 40.06, lng: -74.41, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across New Jersey' },
  { id: 'bio-va-other', name: 'Virginia Biomass & WTE', lat: 37.43, lng: -78.66, type: 'plant' as const, capacity: 280, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across Virginia' },
  { id: 'bio-md-other', name: 'Maryland Biomass & WTE', lat: 39.05, lng: -76.64, type: 'plant' as const, capacity: 180, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across Maryland' },
  { id: 'bio-me-other', name: 'Maine Biomass', lat: 45.25, lng: -69.45, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of wood-fired biomass plants across Maine' },
  { id: 'bio-nh-other', name: 'New Hampshire Biomass', lat: 43.19, lng: -71.57, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of wood-fired biomass plants across New Hampshire' },
  { id: 'bio-mn-other', name: 'Minnesota Biomass', lat: 46.73, lng: -94.69, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass facilities across Minnesota' },
  { id: 'bio-wi-other', name: 'Wisconsin Biomass', lat: 43.78, lng: -88.79, type: 'plant' as const, capacity: 180, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and WTE facilities across Wisconsin' },
  { id: 'bio-mi-other', name: 'Michigan Biomass', lat: 44.31, lng: -85.60, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and WTE facilities across Michigan' },
  { id: 'bio-ga-other', name: 'Georgia Biomass', lat: 32.17, lng: -83.44, type: 'plant' as const, capacity: 180, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass facilities across Georgia' },
  { id: 'bio-nc-other', name: 'North Carolina Biomass', lat: 35.76, lng: -79.02, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass facilities across North Carolina' },
  { id: 'bio-sc-other', name: 'South Carolina Biomass', lat: 33.84, lng: -81.16, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass facilities across South Carolina' },
  { id: 'bio-tx-other', name: 'Texas Biomass & WTE', lat: 31.97, lng: -99.90, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy facilities across Texas' },
  { id: 'bio-or-other', name: 'Oregon Biomass', lat: 43.80, lng: -120.55, type: 'plant' as const, capacity: 180, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of wood-fired biomass plants across Oregon' },
  { id: 'bio-wa-other', name: 'Washington Biomass', lat: 47.75, lng: -120.74, type: 'plant' as const, capacity: 170, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass and WTE facilities across Washington' },
  { id: 'bio-al-other', name: 'Alabama Biomass', lat: 32.32, lng: -86.90, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of biomass facilities across Alabama' },
  { id: 'bio-other-us', name: 'Other US Biomass & WTE', lat: 39.83, lng: -98.58, type: 'plant' as const, capacity: 850, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining biomass and waste-to-energy facilities across other US states' },

  // === China (31,000 MW) ===
  { id: 'bio-chn-taizhou', name: 'Guodian Taizhou Biomass', lat: 32.49, lng: 119.92, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'CHN', operator: 'China Guodian', description: 'Straw-fired biomass plant in Jiangsu Province' },
  { id: 'bio-chn-suixi', name: 'National Bio Energy Suixi', lat: 33.87, lng: 116.80, type: 'plant' as const, capacity: 75, unit: 'MW', country: 'CHN', operator: 'National Bio Energy', description: 'Agricultural waste biomass plant in Anhui Province' },
  { id: 'bio-chn-wuhan-wte', name: 'Kaidi Wuhan WTE', lat: 30.50, lng: 114.30, type: 'plant' as const, capacity: 66, unit: 'MW', country: 'CHN', operator: 'Kaidi Ecological', description: 'Waste-to-energy facility in Wuhan, Hubei' },
  { id: 'bio-chn-jiangyin-wte', name: 'Everbright Jiangyin WTE', lat: 31.91, lng: 120.28, type: 'plant' as const, capacity: 54, unit: 'MW', country: 'CHN', operator: 'China Everbright', description: 'Waste-to-energy plant in Jiangsu Province' },
  { id: 'bio-chn-changzhou-wte', name: 'Everbright Changzhou WTE', lat: 31.77, lng: 119.97, type: 'plant' as const, capacity: 48, unit: 'MW', country: 'CHN', operator: 'China Everbright', description: 'WTE facility in Changzhou, Jiangsu' },
  { id: 'bio-chn-chongqing-wte', name: 'Sanfeng Environment Chongqing', lat: 29.56, lng: 106.55, type: 'plant' as const, capacity: 36, unit: 'MW', country: 'CHN', operator: 'Chongqing Sanfeng', description: 'Waste-to-energy facility in Chongqing' },
  { id: 'bio-chn-heilongjiang', name: 'Heilongjiang Biomass Cluster', lat: 46.00, lng: 127.00, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of agricultural biomass plants across Heilongjiang Province' },
  { id: 'bio-chn-shandong', name: 'Shandong Biomass Cluster', lat: 36.67, lng: 117.02, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of biomass and WTE plants across Shandong Province' },
  { id: 'bio-chn-guangdong', name: 'Guangdong WTE Cluster', lat: 23.13, lng: 113.27, type: 'plant' as const, capacity: 280, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of waste-to-energy facilities across Guangdong Province' },
  { id: 'bio-chn-other', name: 'Other China Biomass', lat: 35.86, lng: 104.20, type: 'plant' as const, capacity: 29791, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of remaining biomass, biogas, and WTE facilities across China' },

  // === Brazil (18,000 MW) ===
  { id: 'bio-bra-barbosa', name: 'UEGA Barbosa', lat: -21.27, lng: -49.95, type: 'plant' as const, capacity: 170, unit: 'MW', country: 'BRA', operator: 'Raízen', description: 'Sugarcane bagasse cogeneration in São Paulo state' },
  { id: 'bio-bra-costa-pinto', name: 'Usina Costa Pinto', lat: -22.72, lng: -47.63, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'BRA', operator: 'Raízen', description: 'Sugarcane bagasse plant in Piracicaba, São Paulo' },
  { id: 'bio-bra-barra-grande', name: 'Usina Barra Grande', lat: -21.02, lng: -48.22, type: 'plant' as const, capacity: 90, unit: 'MW', country: 'BRA', operator: 'Tereos', description: 'Bagasse cogeneration in Lençóis Paulista, SP' },
  { id: 'bio-bra-santa-cruz', name: 'Usina Santa Cruz', lat: -22.32, lng: -41.00, type: 'plant' as const, capacity: 85, unit: 'MW', country: 'BRA', operator: 'Bioenergia', description: 'Biomass cogeneration in Rio de Janeiro' },
  { id: 'bio-bra-sao-paulo', name: 'São Paulo State Bagasse', lat: -22.00, lng: -49.50, type: 'plant' as const, capacity: 6000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of sugarcane bagasse plants across São Paulo state' },
  { id: 'bio-bra-minas-gerais', name: 'Minas Gerais Bagasse', lat: -18.50, lng: -44.00, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of sugarcane bagasse plants across Minas Gerais' },
  { id: 'bio-bra-goias-ms', name: 'Goiás/Mato Grosso do Sul', lat: -16.00, lng: -50.00, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of bagasse and biomass plants in central Brazil' },
  { id: 'bio-bra-other', name: 'Other Brazil Biomass', lat: -14.24, lng: -51.93, type: 'plant' as const, capacity: 7055, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of remaining biomass and WTE across Brazil' },

  // === India (10,000 MW) ===
  { id: 'bio-ind-dadri', name: 'NTPC Dadri Biomass', lat: 28.55, lng: 77.56, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Biomass co-firing at Dadri thermal complex, Uttar Pradesh' },
  { id: 'bio-ind-tamil-nadu', name: 'Orient Green Power Tamil Nadu', lat: 11.13, lng: 78.66, type: 'plant' as const, capacity: 50, unit: 'MW', country: 'IND', operator: 'Orient Green Power', description: 'Biomass power plant in Tamil Nadu' },
  { id: 'bio-ind-raichur', name: 'Shalivahana Biomass Raichur', lat: 16.20, lng: 77.35, type: 'plant' as const, capacity: 25, unit: 'MW', country: 'IND', operator: 'Shalivahana Green Energy', description: 'Biomass plant in Karnataka' },
  { id: 'bio-ind-maharashtra', name: 'Maharashtra Biomass Cluster', lat: 19.75, lng: 75.71, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of bagasse and biomass plants across Maharashtra' },
  { id: 'bio-ind-other', name: 'Other India Biomass', lat: 20.59, lng: 78.96, type: 'plant' as const, capacity: 8325, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of remaining biomass, bagasse, and WTE plants across India' },

  // === Germany (10,000 MW) ===
  { id: 'bio-deu-mannheim', name: 'Mannheim Biomass CHP', lat: 49.49, lng: 8.47, type: 'plant' as const, capacity: 20, unit: 'MW', country: 'DEU', operator: 'MVV Energie', description: 'Biomass combined heat and power in Mannheim' },
  { id: 'bio-deu-papenburg', name: 'Papenburg Biomass', lat: 53.08, lng: 7.39, type: 'plant' as const, capacity: 20, unit: 'MW', country: 'DEU', operator: 'EEW Energy from Waste', description: 'Biomass CHP plant in Lower Saxony' },
  { id: 'bio-deu-berlin-wte', name: 'Berlin Ruhleben WTE', lat: 52.53, lng: 13.23, type: 'plant' as const, capacity: 55, unit: 'MW', country: 'DEU', operator: 'BSR', description: 'Waste-to-energy facility in Berlin' },
  { id: 'bio-deu-munich-wte', name: 'Munich North WTE', lat: 48.20, lng: 11.55, type: 'plant' as const, capacity: 40, unit: 'MW', country: 'DEU', operator: 'SWM', description: 'Waste-to-energy plant in Munich' },
  { id: 'bio-deu-other', name: 'Other Germany Biomass', lat: 51.17, lng: 10.45, type: 'plant' as const, capacity: 9865, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of thousands of small biomass, biogas, and WTE plants across Germany' },

  // === United Kingdom (6,000 MW) ===
  { id: 'bio-gbr-drax', name: 'Drax Biomass Units', lat: 53.74, lng: -0.99, type: 'plant' as const, capacity: 2595, unit: 'MW', country: 'GBR', operator: 'Drax Group', description: 'World\'s largest biomass power station, converted from coal; burns wood pellets in Selby, North Yorkshire' },
  { id: 'bio-gbr-lynemouth', name: 'Lynemouth Power Station', lat: 55.20, lng: -1.52, type: 'plant' as const, capacity: 420, unit: 'MW', country: 'GBR', operator: 'EPH/Lynemouth Power', description: 'Converted coal-to-biomass plant in Northumberland' },
  { id: 'bio-gbr-ferrybridge', name: 'Ferrybridge Multifuel', lat: 53.72, lng: -1.27, type: 'plant' as const, capacity: 90, unit: 'MW', country: 'GBR', operator: 'Multifuel Energy', description: 'Waste and biomass-fired plant near Knottingley, West Yorkshire' },
  { id: 'bio-gbr-other', name: 'Other UK Biomass', lat: 52.50, lng: -1.50, type: 'plant' as const, capacity: 2895, unit: 'MW', country: 'GBR', operator: 'Various', description: 'Aggregate of WTE, biomass CHP, and energy-from-waste facilities across the UK' },

  // === Japan (6,000 MW) ===
  { id: 'bio-jpn-taketoyo', name: 'Taketoyo Biomass', lat: 34.83, lng: 136.92, type: 'plant' as const, capacity: 75, unit: 'MW', country: 'JPN', operator: 'JERA', description: 'Biomass power station in Aichi Prefecture' },
  { id: 'bio-jpn-ishinomaki', name: 'Ishinomaki Biomass', lat: 38.43, lng: 141.30, type: 'plant' as const, capacity: 75, unit: 'MW', country: 'JPN', operator: 'Nippon Paper', description: 'Wood biomass plant in Miyagi Prefecture' },
  { id: 'bio-jpn-saijo', name: 'Saijo Biomass', lat: 33.92, lng: 133.15, type: 'plant' as const, capacity: 75, unit: 'MW', country: 'JPN', operator: 'Sumitomo Forestry', description: 'Dedicated biomass plant in Ehime Prefecture' },
  { id: 'bio-jpn-other', name: 'Other Japan Biomass', lat: 36.20, lng: 140.00, type: 'plant' as const, capacity: 5775, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of biomass, WTE, and waste-fired power plants across Japan' },

  // === Italy (4,000 MW) ===
  { id: 'bio-ita-fusina', name: 'Fusina Biomass', lat: 45.42, lng: 12.25, type: 'plant' as const, capacity: 70, unit: 'MW', country: 'ITA', operator: 'Enel', description: 'Biomass and WTE plant near Venice' },
  { id: 'bio-ita-other', name: 'Other Italy Biomass', lat: 41.87, lng: 12.57, type: 'plant' as const, capacity: 3930, unit: 'MW', country: 'ITA', operator: 'Various', description: 'Aggregate of biomass, biogas, and WTE facilities across Italy' },

  // === Thailand (4,000 MW) ===
  { id: 'bio-tha-mitr-phol', name: 'Mitr Phol Bio-Power', lat: 14.97, lng: 102.10, type: 'plant' as const, capacity: 120, unit: 'MW', country: 'THA', operator: 'Mitr Phol Group', description: 'Sugarcane bagasse cogeneration in Khon Kaen Province' },
  { id: 'bio-tha-other', name: 'Other Thailand Biomass', lat: 15.87, lng: 100.99, type: 'plant' as const, capacity: 3880, unit: 'MW', country: 'THA', operator: 'Various', description: 'Aggregate of biomass, bagasse, and WTE facilities across Thailand' },

  // === France (3,000 MW) ===
  { id: 'bio-fra-gardanne', name: 'Gardanne Biomass', lat: 43.45, lng: 5.47, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'FRA', operator: 'Gazel Énergie', description: 'Converted coal-to-biomass plant in Provence, largest in France' },
  { id: 'bio-fra-other', name: 'Other France Biomass', lat: 46.60, lng: 2.50, type: 'plant' as const, capacity: 2850, unit: 'MW', country: 'FRA', operator: 'Various', description: 'Aggregate of WTE, biogas, and biomass plants across France' },

  // === Finland (3,000 MW) ===
  { id: 'bio-fin-alholmens', name: 'Alholmens Kraft', lat: 63.67, lng: 22.70, type: 'plant' as const, capacity: 265, unit: 'MW', country: 'FIN', operator: 'UPM/Pohjolan Voima', description: 'World\'s largest biomass-fired power plant, using peat and wood chips in Pietarsaari' },
  { id: 'bio-fin-other', name: 'Other Finland Biomass', lat: 61.92, lng: 25.75, type: 'plant' as const, capacity: 2735, unit: 'MW', country: 'FIN', operator: 'Various', description: 'Aggregate of biomass and peat-fired CHP plants across Finland' },

  // === Sweden (3,000 MW) ===
  { id: 'bio-swe-vartaverket', name: 'Värtaverket CHP', lat: 59.36, lng: 18.12, type: 'plant' as const, capacity: 215, unit: 'MW', country: 'SWE', operator: 'Stockholm Exergi', description: 'World\'s largest wood pellet-fired CHP, Stockholm' },
  { id: 'bio-swe-other', name: 'Other Sweden Biomass', lat: 62.00, lng: 15.00, type: 'plant' as const, capacity: 2785, unit: 'MW', country: 'SWE', operator: 'Various', description: 'Aggregate of biomass and WTE CHP plants across Sweden' },

  // === Denmark (3,000 MW) ===
  { id: 'bio-dnk-other', name: 'Other Denmark Biomass', lat: 56.26, lng: 9.50, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'DNK', operator: 'Various', description: 'Aggregate of straw, wood chip, and WTE CHP plants across Denmark' },

  // === Netherlands (3,000 MW) ===
  { id: 'bio-nld-other', name: 'Other Netherlands Biomass', lat: 52.13, lng: 5.29, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'NLD', operator: 'Various', description: 'Aggregate of biomass co-firing and WTE plants across the Netherlands' },

  // === Poland (2,500 MW) ===
  { id: 'bio-pol-other', name: 'Other Poland Biomass', lat: 51.92, lng: 19.15, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'POL', operator: 'Various', description: 'Aggregate of biomass co-firing and WTE across Poland' },

  // === Canada (2,500 MW) ===
  { id: 'bio-can-other', name: 'Other Canada Biomass', lat: 56.13, lng: -106.35, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'CAN', operator: 'Various', description: 'Aggregate of biomass and WTE plants across Canada' },

  // === Austria (2,000 MW) ===
  { id: 'bio-aut-other', name: 'Other Austria Biomass', lat: 47.52, lng: 14.55, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'AUT', operator: 'Various', description: 'Aggregate of biomass and WTE plants across Austria' },

  // === South Korea (2,000 MW) ===
  { id: 'bio-kor-other', name: 'Other South Korea Biomass', lat: 36.50, lng: 127.77, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'KOR', operator: 'Various', description: 'Aggregate of biomass co-firing and WTE plants across South Korea' },

  // === Indonesia (1,800 MW) ===
  { id: 'bio-idn-other', name: 'Other Indonesia Biomass', lat: -2.50, lng: 118.00, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'IDN', operator: 'Various', description: 'Aggregate of palm oil waste biomass and WTE plants across Indonesia' },

  // === Spain (1,500 MW) ===
  { id: 'bio-esp-other', name: 'Other Spain Biomass', lat: 40.46, lng: -3.75, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'ESP', operator: 'Various', description: 'Aggregate of biomass and WTE plants across Spain' },

  // === Belgium (1,500 MW) ===
  { id: 'bio-bel-other', name: 'Other Belgium Biomass', lat: 50.50, lng: 4.00, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'BEL', operator: 'Various', description: 'Aggregate of biomass and WTE plants' },

  // === Portugal (800 MW) ===
  { id: 'bio-prt-other', name: 'Other Portugal Biomass', lat: 39.40, lng: -8.22, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'PRT', operator: 'Various', description: 'Aggregate of forest biomass and WTE plants across Portugal' },

  // === Russia (2500 MW) ===
  { id: 'bio-rus-agg', name: 'Russia Biomass Plants', lat: 61.52, lng: 105.32, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'RUS', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Russia' },

  // === Malaysia (2000 MW) ===
  { id: 'bio-mys-agg', name: 'Malaysia Biomass Plants', lat: 4.21, lng: 101.98, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'MYS', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Malaysia' },

  // === Vietnam (2500 MW) ===
  { id: 'bio-vnm-agg', name: 'Vietnam Biomass Plants', lat: 14.06, lng: 108.28, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'VNM', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Vietnam' },

  // === Ukraine (1000 MW) ===
  { id: 'bio-ukr-agg', name: 'Ukraine Biomass Plants', lat: 48.38, lng: 31.17, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'UKR', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Ukraine' },

  // === Argentina (1000 MW) ===
  { id: 'bio-arg-agg', name: 'Argentina Biomass Plants', lat: -38.42, lng: -63.62, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'ARG', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Argentina' },

  // === Colombia (700 MW) ===
  { id: 'bio-col-agg', name: 'Colombia Biomass Plants', lat: 4.57, lng: -74.30, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'COL', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Colombia' },

  // === Latvia (700 MW) ===
  { id: 'bio-lva-agg', name: 'Latvia Biomass Plants', lat: 56.88, lng: 24.60, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'LVA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Latvia' },

  // === Hungary (1000 MW) ===
  { id: 'bio-hun-agg', name: 'Hungary Biomass Plants', lat: 47.16, lng: 19.50, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'HUN', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Hungary' },

  // === Romania (700 MW) ===
  { id: 'bio-rou-agg', name: 'Romania Biomass Plants', lat: 45.94, lng: 24.97, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'ROU', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Romania' },

  // === Czech Republic (500 MW) ===
  { id: 'bio-cze-agg', name: 'Czech Republic Biomass Plants', lat: 49.82, lng: 15.47, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'CZE', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Czech Republic' },

  // === Lithuania (500 MW) ===
  { id: 'bio-ltu-agg', name: 'Lithuania Biomass Plants', lat: 55.17, lng: 23.88, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'LTU', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Lithuania' },

  // === New Zealand (400 MW) ===
  { id: 'bio-nzl-agg', name: 'New Zealand Biomass Plants', lat: -40.90, lng: 174.89, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'NZL', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across New Zealand' },

  // === Nigeria (500 MW) ===
  { id: 'bio-nga-agg', name: 'Nigeria Biomass Plants', lat: 9.08, lng: 7.49, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'NGA', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Nigeria' },

  // === Ireland (500 MW) ===
  { id: 'bio-irl-agg', name: 'Ireland Biomass Plants', lat: 53.14, lng: -7.69, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'IRL', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Ireland' },

  // === Philippines (500 MW) ===
  { id: 'bio-phl-agg', name: 'Philippines Biomass Plants', lat: 12.88, lng: 121.77, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'PHL', operator: 'Various', description: 'Aggregate of biomass and waste-to-energy generation across Philippines' },
];
