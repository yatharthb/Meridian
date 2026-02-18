import { Location } from '../../types';

export const geothermalLocations: Location[] = [
  // === United States (3,937 MW) ===
  { id: 'geo-geysers-1', name: 'The Geysers (Calpine Units)', lat: 38.79, lng: -122.77, type: 'plant' as const, capacity: 725, unit: 'MW', country: 'USA', operator: 'Calpine', description: 'Largest geothermal complex in the world, Sonoma and Lake counties, CA' },
  { id: 'geo-geysers-2', name: 'The Geysers (NCPA/Other Units)', lat: 38.80, lng: -122.82, type: 'plant' as const, capacity: 310, unit: 'MW', country: 'USA', operator: 'Northern California Power Agency', description: 'Additional geothermal units at The Geysers complex, CA' },
  { id: 'geo-salton-sea', name: 'Salton Sea Geothermal Field', lat: 33.18, lng: -115.60, type: 'plant' as const, capacity: 340, unit: 'MW', country: 'USA', operator: 'CalEnergy/Berkshire Hathaway', description: 'Multiple geothermal plants near the Salton Sea, Imperial County, CA' },
  { id: 'geo-coso', name: 'Coso Geothermal Field', lat: 36.03, lng: -117.81, type: 'plant' as const, capacity: 270, unit: 'MW', country: 'USA', operator: 'Coso Operating Company', description: 'Geothermal complex at Naval Air Weapons Station China Lake, CA' },
  { id: 'geo-east-mesa', name: 'East Mesa Geothermal Field', lat: 32.78, lng: -115.25, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Geothermal power plants in Imperial Valley, CA' },
  { id: 'geo-heber', name: 'Heber Geothermal Complex', lat: 32.73, lng: -115.53, type: 'plant' as const, capacity: 92, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Binary and flash geothermal plants near Heber, CA' },
  { id: 'geo-casa-diablo', name: 'Casa Diablo Geothermal', lat: 37.63, lng: -118.85, type: 'plant' as const, capacity: 40, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Geothermal plant near Mammoth Lakes, CA' },
  { id: 'geo-dixie-valley', name: 'Dixie Valley Geothermal', lat: 39.98, lng: -117.84, type: 'plant' as const, capacity: 67, unit: 'MW', country: 'USA', operator: 'Terra-Gen', description: 'Binary geothermal plant in Churchill County, NV' },
  { id: 'geo-steamboat', name: 'Steamboat Springs Geothermal', lat: 39.38, lng: -119.77, type: 'plant' as const, capacity: 78, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Multiple geothermal plants south of Reno, NV' },
  { id: 'geo-brady', name: 'Brady Hot Springs Geothermal', lat: 39.79, lng: -119.00, type: 'plant' as const, capacity: 26, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Binary geothermal plant in Churchill County, NV' },
  { id: 'geo-beowawe', name: 'Beowawe Geothermal', lat: 40.57, lng: -116.60, type: 'plant' as const, capacity: 17, unit: 'MW', country: 'USA', operator: 'Terra-Gen', description: 'Geothermal plant in Lander County, NV' },
  { id: 'geo-desert-peak', name: 'Desert Peak Geothermal', lat: 39.77, lng: -118.87, type: 'plant' as const, capacity: 26, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Binary geothermal plant in Churchill County, NV' },
  { id: 'geo-soda-lake', name: 'Soda Lake Geothermal', lat: 39.60, lng: -118.83, type: 'plant' as const, capacity: 26, unit: 'MW', country: 'USA', operator: 'Cyrq Energy', description: 'Binary geothermal plant in Churchill County, NV' },
  { id: 'geo-stillwater', name: 'Stillwater Geothermal', lat: 39.54, lng: -118.57, type: 'plant' as const, capacity: 47, unit: 'MW', country: 'USA', operator: 'Enel Green Power', description: 'Hybrid geothermal-solar facility in Churchill County, NV' },
  { id: 'geo-wabuska', name: 'Wabuska Geothermal', lat: 39.17, lng: -119.17, type: 'plant' as const, capacity: 5, unit: 'MW', country: 'USA', operator: 'Hometown Energy', description: 'Small geothermal plant in Lyon County, NV' },
  { id: 'geo-san-emidio', name: 'San Emidio Geothermal', lat: 40.85, lng: -119.40, type: 'plant' as const, capacity: 12, unit: 'MW', country: 'USA', operator: 'US Geothermal', description: 'Geothermal plant in Washoe County, NV' },
  { id: 'geo-mcginness', name: 'McGinness Hills Geothermal', lat: 39.73, lng: -116.83, type: 'plant' as const, capacity: 138, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Multi-phase geothermal complex in Lander County, NV' },
  { id: 'geo-tungsten', name: 'Tungsten Mountain Geothermal', lat: 40.29, lng: -117.43, type: 'plant' as const, capacity: 32, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Geothermal plant in Pershing County, NV' },
  { id: 'geo-don-campbell', name: 'Don A. Campbell Geothermal', lat: 38.63, lng: -118.37, type: 'plant' as const, capacity: 36, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Geothermal plant in Mineral County, NV' },
  { id: 'geo-jersey-valley', name: 'Jersey Valley Geothermal', lat: 40.23, lng: -117.47, type: 'plant' as const, capacity: 24, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Geothermal plant in Pershing County, NV' },
  { id: 'geo-nv-other', name: 'Nevada Other Geothermal', lat: 39.80, lng: -117.50, type: 'plant' as const, capacity: 230, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining smaller geothermal facilities across Nevada' },
  { id: 'geo-puna', name: 'Puna Geothermal Venture', lat: 19.47, lng: -154.89, type: 'plant' as const, capacity: 38, unit: 'MW', country: 'USA', operator: 'Ormat Technologies', description: 'Geothermal plant on the Big Island of Hawaii' },
  { id: 'geo-neal-hot-springs', name: 'Neal Hot Springs Geothermal', lat: 43.97, lng: -117.48, type: 'plant' as const, capacity: 28, unit: 'MW', country: 'USA', operator: 'US Geothermal', description: 'Geothermal plant in Malheur County, OR' },
  { id: 'geo-raft-river', name: 'Raft River Geothermal', lat: 42.10, lng: -113.40, type: 'plant' as const, capacity: 13, unit: 'MW', country: 'USA', operator: 'US Geothermal', description: 'Binary geothermal plant in Cassia County, ID' },
  { id: 'geo-blundell', name: 'Blundell Geothermal Plant', lat: 38.50, lng: -112.85, type: 'plant' as const, capacity: 38, unit: 'MW', country: 'USA', operator: 'PacifiCorp', description: 'Geothermal plant in Beaver County, UT' },
  { id: 'geo-lightning-dock', name: 'Lightning Dock Geothermal', lat: 32.15, lng: -109.03, type: 'plant' as const, capacity: 10, unit: 'MW', country: 'USA', operator: 'Cyrq Energy', description: 'Geothermal plant in Hidalgo County, NM' },

  // === Indonesia (2,653 MW) ===
  { id: 'geo-idn-sarulla', name: 'Sarulla Geothermal', lat: 2.067, lng: 99.067, type: 'plant' as const, capacity: 330, unit: 'MW', country: 'IDN', operator: 'Medco/Ormat/Itochu', description: 'Largest single-contract geothermal project in the world, North Sumatra' },
  { id: 'geo-idn-wayang-windu', name: 'Wayang Windu Geothermal', lat: -7.200, lng: 107.633, type: 'plant' as const, capacity: 227, unit: 'MW', country: 'IDN', operator: 'Star Energy', description: 'Geothermal power plant in West Java' },
  { id: 'geo-idn-darajat', name: 'Darajat Geothermal', lat: -7.233, lng: 107.683, type: 'plant' as const, capacity: 271, unit: 'MW', country: 'IDN', operator: 'Star Energy/Chevron', description: 'Geothermal power plant in West Java' },
  { id: 'geo-idn-kamojang', name: 'Kamojang Geothermal', lat: -7.167, lng: 107.800, type: 'plant' as const, capacity: 235, unit: 'MW', country: 'IDN', operator: 'Pertamina', description: 'Indonesia\'s first geothermal power plant, West Java' },
  { id: 'geo-idn-lahendong', name: 'Lahendong Geothermal', lat: 1.283, lng: 124.833, type: 'plant' as const, capacity: 120, unit: 'MW', country: 'IDN', operator: 'Pertamina', description: 'Geothermal power plant in North Sulawesi' },
  { id: 'geo-idn-ulubelu', name: 'Ulubelu Geothermal', lat: -5.383, lng: 104.567, type: 'plant' as const, capacity: 220, unit: 'MW', country: 'IDN', operator: 'Pertamina', description: 'Geothermal power plant in Lampung, Sumatra' },
  { id: 'geo-idn-salak', name: 'Salak/Gunung Salak Geothermal', lat: -6.717, lng: 106.717, type: 'plant' as const, capacity: 377, unit: 'MW', country: 'IDN', operator: 'Star Energy', description: 'Major geothermal complex in West Java' },
  { id: 'geo-idn-dieng', name: 'Dieng Geothermal', lat: -7.200, lng: 109.900, type: 'plant' as const, capacity: 120, unit: 'MW', country: 'IDN', operator: 'Geodipa Energi', description: 'Geothermal power plant on the Dieng Plateau, Central Java' },
  { id: 'geo-idn-other', name: 'Other Indonesia Geothermal', lat: -2.50, lng: 118.00, type: 'plant' as const, capacity: 753, unit: 'MW', country: 'IDN', operator: 'Various', description: 'Aggregate of remaining geothermal facilities across Indonesia' },

  // === Philippines (1,984 MW) ===
  { id: 'geo-phl-tiwi', name: 'Tiwi Geothermal', lat: 13.467, lng: 123.700, type: 'plant' as const, capacity: 289, unit: 'MW', country: 'PHL', operator: 'Aboitiz Power', description: 'One of the oldest geothermal plants in the Philippines, Albay province' },
  { id: 'geo-phl-makban', name: 'Makban/Makiling-Banahaw Geothermal', lat: 14.067, lng: 121.517, type: 'plant' as const, capacity: 458, unit: 'MW', country: 'PHL', operator: 'Aboitiz Power', description: 'Largest geothermal plant in the Philippines, Laguna/Batangas' },
  { id: 'geo-phl-tongonan', name: 'Tongonan/Leyte Geothermal', lat: 11.200, lng: 124.700, type: 'plant' as const, capacity: 726, unit: 'MW', country: 'PHL', operator: 'Energy Development Corp', description: 'Major geothermal complex on Leyte island' },
  { id: 'geo-phl-palinpinon', name: 'Palinpinon Geothermal', lat: 9.267, lng: 123.233, type: 'plant' as const, capacity: 192, unit: 'MW', country: 'PHL', operator: 'Energy Development Corp', description: 'Geothermal power plant in Negros Oriental' },
  { id: 'geo-phl-bacman', name: 'Bacman/Bacon-Manito Geothermal', lat: 13.283, lng: 123.917, type: 'plant' as const, capacity: 140, unit: 'MW', country: 'PHL', operator: 'PNOC-EDC', description: 'Geothermal power plant in Sorsogon/Albay' },
  { id: 'geo-phl-other', name: 'Other Philippines Geothermal', lat: 12.88, lng: 121.77, type: 'plant' as const, capacity: 179, unit: 'MW', country: 'PHL', operator: 'Various', description: 'Aggregate of remaining geothermal facilities across the Philippines' },

  // === Turkey (1,734 MW) ===
  { id: 'geo-tur-efeler', name: 'Efeler Geothermal', lat: 37.700, lng: 28.300, type: 'plant' as const, capacity: 170, unit: 'MW', country: 'TUR', operator: 'Gürmat', description: 'Geothermal power plant in Aydın province' },
  { id: 'geo-tur-kizildere', name: 'Kızıldere Geothermal', lat: 37.917, lng: 29.017, type: 'plant' as const, capacity: 165, unit: 'MW', country: 'TUR', operator: 'Zorlu Energy', description: 'Turkey\'s first geothermal power plant, Denizli province' },
  { id: 'geo-tur-germencik', name: 'Germencik Geothermal', lat: 37.817, lng: 27.567, type: 'plant' as const, capacity: 145, unit: 'MW', country: 'TUR', operator: 'Gürmat', description: 'Geothermal power plant in Aydın province' },
  { id: 'geo-tur-alasehir', name: 'Alaşehir Geothermal', lat: 38.350, lng: 28.517, type: 'plant' as const, capacity: 128, unit: 'MW', country: 'TUR', operator: 'Zorlu Energy', description: 'Geothermal power plant in Manisa province' },
  { id: 'geo-tur-pamukoren', name: 'Pamukören Geothermal', lat: 37.600, lng: 28.400, type: 'plant' as const, capacity: 113, unit: 'MW', country: 'TUR', operator: 'Türkerler Holding', description: 'Geothermal power plant in Aydın province' },
  { id: 'geo-tur-other', name: 'Other Turkey Geothermal', lat: 38.50, lng: 29.00, type: 'plant' as const, capacity: 1013, unit: 'MW', country: 'TUR', operator: 'Various', description: 'Aggregate of many smaller geothermal plants across western Turkey' },

  // === New Zealand (1,207 MW) ===
  { id: 'geo-nzl-kawerau', name: 'Kawerau Geothermal', lat: -38.083, lng: 176.717, type: 'plant' as const, capacity: 265, unit: 'MW', country: 'NZL', operator: 'Mercury Energy/Ngāti Tūwharetoa', description: 'Geothermal power plant in the Bay of Plenty region' },
  { id: 'geo-nzl-wairakei', name: 'Wairakei/Te Mihi Geothermal', lat: -38.617, lng: 176.100, type: 'plant' as const, capacity: 370, unit: 'MW', country: 'NZL', operator: 'Contact Energy', description: 'New Zealand\'s first geothermal power plant, Taupō' },
  { id: 'geo-nzl-nga-awa-purua', name: 'Ngā Awa Pūrua Geothermal', lat: -38.517, lng: 176.217, type: 'plant' as const, capacity: 140, unit: 'MW', country: 'NZL', operator: 'Contact Energy', description: 'Single largest geothermal turbine in the world, Taupō' },
  { id: 'geo-nzl-rotokawa', name: 'Poihipi/Rotokawa Geothermal', lat: -38.617, lng: 176.183, type: 'plant' as const, capacity: 174, unit: 'MW', country: 'NZL', operator: 'Mercury Energy', description: 'Geothermal power plant in the Taupō Volcanic Zone' },
  { id: 'geo-nzl-other', name: 'Other New Zealand Geothermal', lat: -38.60, lng: 176.20, type: 'plant' as const, capacity: 258, unit: 'MW', country: 'NZL', operator: 'Various', description: 'Mokai, Ngatamariki, Ohaaki, and other geothermal facilities' },

  // === Kenya (985 MW) ===
  { id: 'geo-ken-olkaria', name: 'Olkaria I-V Geothermal', lat: -0.883, lng: 36.283, type: 'plant' as const, capacity: 878, unit: 'MW', country: 'KEN', operator: 'KenGen', description: 'Largest geothermal complex in Africa, Hell\'s Gate National Park' },
  { id: 'geo-ken-menengai', name: 'Menengai Geothermal', lat: -0.200, lng: 36.067, type: 'plant' as const, capacity: 105, unit: 'MW', country: 'KEN', operator: 'GDC/Orpower', description: 'Geothermal development in Nakuru County' },
  { id: 'geo-ken-other', name: 'Other Kenya Geothermal', lat: -0.50, lng: 36.30, type: 'plant' as const, capacity: 2, unit: 'MW', country: 'KEN', operator: 'Various', description: 'Smaller geothermal facilities across the Kenyan Rift Valley' },

  // === Mexico (976 MW) ===
  { id: 'geo-mex-cerro-prieto', name: 'Cerro Prieto Geothermal', lat: 32.417, lng: -115.233, type: 'plant' as const, capacity: 570, unit: 'MW', country: 'MEX', operator: 'CFE', description: 'One of the world\'s largest geothermal fields, Baja California' },
  { id: 'geo-mex-los-azufres', name: 'Los Azufres Geothermal', lat: 19.783, lng: -100.650, type: 'plant' as const, capacity: 247, unit: 'MW', country: 'MEX', operator: 'CFE', description: 'Geothermal power plant in Michoacán' },
  { id: 'geo-mex-los-humeros', name: 'Los Humeros Geothermal', lat: 19.683, lng: -97.450, type: 'plant' as const, capacity: 94, unit: 'MW', country: 'MEX', operator: 'CFE', description: 'Geothermal power plant in Puebla' },
  { id: 'geo-mex-other', name: 'Other Mexico Geothermal', lat: 23.63, lng: -102.55, type: 'plant' as const, capacity: 65, unit: 'MW', country: 'MEX', operator: 'CFE', description: 'Las Tres Vírgenes, Domo San Pedro, and other geothermal facilities' },

  // === Italy (916 MW) ===
  { id: 'geo-ita-larderello', name: 'Larderello Geothermal', lat: 43.250, lng: 10.867, type: 'plant' as const, capacity: 594, unit: 'MW', country: 'ITA', operator: 'Enel Green Power', description: 'World\'s first geothermal power plant (1911), Tuscany' },
  { id: 'geo-ita-travale', name: 'Travale/Radicondoli Geothermal', lat: 43.167, lng: 11.067, type: 'plant' as const, capacity: 160, unit: 'MW', country: 'ITA', operator: 'Enel Green Power', description: 'Geothermal power plant in Tuscany' },
  { id: 'geo-ita-monte-amiata', name: 'Monte Amiata Geothermal', lat: 42.883, lng: 11.600, type: 'plant' as const, capacity: 162, unit: 'MW', country: 'ITA', operator: 'Enel Green Power', description: 'Geothermal power plant in southern Tuscany' },

  // === Iceland (786 MW) ===
  { id: 'geo-isl-hellisheidi', name: 'Hellisheiði Geothermal', lat: 64.033, lng: -21.400, type: 'plant' as const, capacity: 303, unit: 'MW', country: 'ISL', operator: 'ON Power/Reykjavik Energy', description: 'Largest geothermal power plant in Iceland' },
  { id: 'geo-isl-nesjavellir', name: 'Nesjavellir Geothermal', lat: 64.117, lng: -21.267, type: 'plant' as const, capacity: 120, unit: 'MW', country: 'ISL', operator: 'ON Power/Reykjavik Energy', description: 'Geothermal plant also supplying hot water to Reykjavik' },
  { id: 'geo-isl-reykjanes', name: 'Reykjanes Geothermal', lat: 63.817, lng: -22.683, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'ISL', operator: 'HS Orka', description: 'Geothermal power plant on the Reykjanes Peninsula' },
  { id: 'geo-isl-svartsengi', name: 'Svartsengi Geothermal', lat: 63.875, lng: -22.433, type: 'plant' as const, capacity: 75, unit: 'MW', country: 'ISL', operator: 'HS Orka', description: 'Geothermal plant powering the Blue Lagoon geothermal spa' },
  { id: 'geo-isl-other', name: 'Other Iceland Geothermal', lat: 65.00, lng: -18.50, type: 'plant' as const, capacity: 188, unit: 'MW', country: 'ISL', operator: 'Various', description: 'Krafla, Þeistareykir, Bjarnarflag, and other geothermal facilities' },

  // === Japan (601 MW) ===
  { id: 'geo-jpn-hatchobaru', name: 'Hatchobaru Geothermal', lat: 33.083, lng: 131.250, type: 'plant' as const, capacity: 112, unit: 'MW', country: 'JPN', operator: 'Kyushu Electric', description: 'Largest geothermal power plant in Japan, Ōita Prefecture' },
  { id: 'geo-jpn-yanaizu', name: 'Yanaizu-Nishiyama Geothermal', lat: 37.533, lng: 139.900, type: 'plant' as const, capacity: 65, unit: 'MW', country: 'JPN', operator: 'Tōhoku Electric', description: 'Geothermal power plant in Fukushima Prefecture' },
  { id: 'geo-jpn-other', name: 'Other Japan Geothermal', lat: 39.00, lng: 140.00, type: 'plant' as const, capacity: 424, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Matsukawa, Ōnuma, Sumikawa, Wasabizawa, and other geothermal facilities' },

  // === El Salvador (204 MW) ===
  { id: 'geo-slv-berlin', name: 'Berlin/Ahuachapán Geothermal', lat: 13.733, lng: -89.783, type: 'plant' as const, capacity: 204, unit: 'MW', country: 'SLV', operator: 'LaGeo', description: 'Major geothermal complex in El Salvador' },

  // === Costa Rica (262 MW) ===
  { id: 'geo-cri-miravalles', name: 'Miravalles/Las Pailas Geothermal', lat: 10.733, lng: -85.167, type: 'plant' as const, capacity: 262, unit: 'MW', country: 'CRI', operator: 'ICE', description: 'Geothermal complex in Guanacaste province, Costa Rica' },

  // === Ethiopia (45 MW) ===
  { id: 'geo-eth-aluto', name: 'Aluto-Langano/Corbetti Geothermal', lat: 7.650, lng: 38.783, type: 'plant' as const, capacity: 45, unit: 'MW', country: 'ETH', operator: 'Ethiopian Electric Power', description: 'Geothermal development in the Ethiopian Rift Valley' },

  // === Nicaragua (153 MW) ===
  { id: 'geo-nic-momotombo', name: 'Momotombo/San Jacinto Geothermal', lat: 12.450, lng: -86.533, type: 'plant' as const, capacity: 153, unit: 'MW', country: 'NIC', operator: 'PENSA/Polaris', description: 'Geothermal power plants in western Nicaragua' },

  // === Guatemala (52 MW) ===
  { id: 'geo-gtm-zunil', name: 'Zunil/Ortitlán Geothermal', lat: 14.767, lng: -91.467, type: 'plant' as const, capacity: 52, unit: 'MW', country: 'GTM', operator: 'INDE/Ormat', description: 'Geothermal power plants in the western highlands of Guatemala' },
];
