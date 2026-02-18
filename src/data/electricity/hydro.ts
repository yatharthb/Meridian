import { Location } from '../../types';

export const hydroLocations: Location[] = [
  // === United States (102,000 MW) ===
  { id: 'hydro-grand-coulee', name: 'Grand Coulee Dam', lat: 47.95, lng: -118.98, type: 'plant' as const, capacity: 6809, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Largest hydroelectric facility in the United States, on the Columbia River' },
  { id: 'hydro-chief-joseph', name: 'Chief Joseph Dam', lat: 47.99, lng: -119.63, type: 'plant' as const, capacity: 2620, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Run-of-river dam on the Columbia River, second largest US hydroelectric plant' },
  { id: 'hydro-john-day', name: 'John Day Dam', lat: 45.72, lng: -120.69, type: 'plant' as const, capacity: 2160, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Run-of-river dam on the Columbia River in Oregon' },
  { id: 'hydro-the-dalles', name: 'The Dalles Dam', lat: 45.62, lng: -121.13, type: 'plant' as const, capacity: 1808, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Columbia River dam near The Dalles, Oregon' },
  { id: 'hydro-bonneville', name: 'Bonneville Dam', lat: 45.64, lng: -121.94, type: 'plant' as const, capacity: 1092, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Historic Columbia River dam in the Columbia River Gorge' },
  { id: 'hydro-mcnary', name: 'McNary Dam', lat: 45.93, lng: -119.30, type: 'plant' as const, capacity: 991, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Columbia River dam near Umatilla, Oregon' },
  { id: 'hydro-wanapum', name: 'Wanapum Dam', lat: 46.87, lng: -119.99, type: 'plant' as const, capacity: 1092, unit: 'MW', country: 'USA', operator: 'Grant County PUD', description: 'Columbia River dam operated by Grant County Public Utility District' },
  { id: 'hydro-priest-rapids', name: 'Priest Rapids Dam', lat: 46.63, lng: -119.91, type: 'plant' as const, capacity: 956, unit: 'MW', country: 'USA', operator: 'Grant County PUD', description: 'Columbia River dam operated by Grant County Public Utility District' },
  { id: 'hydro-rocky-reach', name: 'Rocky Reach Dam', lat: 47.49, lng: -120.30, type: 'plant' as const, capacity: 1287, unit: 'MW', country: 'USA', operator: 'Chelan County PUD', description: 'Columbia River dam near Wenatchee, Washington' },
  { id: 'hydro-rock-island', name: 'Rock Island Dam', lat: 47.35, lng: -120.09, type: 'plant' as const, capacity: 624, unit: 'MW', country: 'USA', operator: 'Chelan County PUD', description: 'First dam on the main stem Columbia River, built in 1933' },
  { id: 'hydro-wells', name: 'Wells Dam', lat: 47.95, lng: -119.87, type: 'plant' as const, capacity: 840, unit: 'MW', country: 'USA', operator: 'Douglas County PUD', description: 'Columbia River dam near Pateros, Washington' },
  { id: 'hydro-boundary', name: 'Boundary Dam', lat: 48.99, lng: -117.35, type: 'plant' as const, capacity: 1040, unit: 'MW', country: 'USA', operator: 'Seattle City Light', description: 'Concrete arch dam on the Pend Oreille River in northeast Washington' },
  { id: 'hydro-ross', name: 'Ross Dam', lat: 48.73, lng: -121.07, type: 'plant' as const, capacity: 450, unit: 'MW', country: 'USA', operator: 'Seattle City Light', description: 'Thin arch dam on the Skagit River in North Cascades' },
  { id: 'hydro-ice-harbor', name: 'Ice Harbor Dam', lat: 46.25, lng: -118.88, type: 'plant' as const, capacity: 603, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Lower Snake River dam in southeastern Washington' },
  { id: 'hydro-lower-monumental', name: 'Lower Monumental Dam', lat: 46.56, lng: -118.54, type: 'plant' as const, capacity: 810, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Snake River dam in Walla Walla County, Washington' },
  { id: 'hydro-little-goose', name: 'Little Goose Dam', lat: 46.59, lng: -118.03, type: 'plant' as const, capacity: 810, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Snake River dam near Starbuck, Washington' },
  { id: 'hydro-lower-granite', name: 'Lower Granite Dam', lat: 46.66, lng: -117.43, type: 'plant' as const, capacity: 810, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Most upstream of the four lower Snake River dams' },
  { id: 'hydro-dworshak', name: 'Dworshak Dam', lat: 46.51, lng: -116.30, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Tallest straight-axis concrete dam in the Western Hemisphere, on the Clearwater River' },
  { id: 'hydro-hoover', name: 'Hoover Dam', lat: 36.02, lng: -114.74, type: 'plant' as const, capacity: 2080, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Iconic concrete arch-gravity dam on the Colorado River between Nevada and Arizona' },
  { id: 'hydro-glen-canyon', name: 'Glen Canyon Dam', lat: 36.94, lng: -111.49, type: 'plant' as const, capacity: 1320, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Concrete arch dam on the Colorado River near Page, Arizona' },
  { id: 'hydro-flaming-gorge', name: 'Flaming Gorge Dam', lat: 40.91, lng: -109.42, type: 'plant' as const, capacity: 152, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Concrete arch dam on the Green River in northeastern Utah' },
  { id: 'hydro-robert-moses-niagara', name: 'Robert Moses Niagara Power Plant', lat: 43.14, lng: -79.04, type: 'plant' as const, capacity: 2525, unit: 'MW', country: 'USA', operator: 'New York Power Authority', description: 'One of the largest hydroelectric facilities in the world, on the Niagara River' },
  { id: 'hydro-blenheim-gilboa', name: 'Blenheim-Gilboa Pumped Storage', lat: 42.40, lng: -74.45, type: 'plant' as const, capacity: 1160, unit: 'MW', country: 'USA', operator: 'New York Power Authority', description: 'Pumped-storage hydroelectric facility in Schoharie County, New York' },
  { id: 'hydro-northfield-mountain', name: 'Northfield Mountain Pumped Storage', lat: 42.56, lng: -72.45, type: 'plant' as const, capacity: 1168, unit: 'MW', country: 'USA', operator: 'FirstLight Power', description: 'Underground pumped-storage facility in Franklin County, Massachusetts' },
  { id: 'hydro-bear-swamp', name: 'Bear Swamp Pumped Storage', lat: 42.70, lng: -72.90, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'USA', operator: 'Brookfield Renewable', description: 'Pumped-storage facility in the Berkshires of western Massachusetts' },
  { id: 'hydro-muddy-run', name: 'Muddy Run Pumped Storage', lat: 39.80, lng: -76.30, type: 'plant' as const, capacity: 1070, unit: 'MW', country: 'USA', operator: 'Exelon Generation', description: 'Pumped-storage facility on the Susquehanna River in Lancaster County, Pennsylvania' },
  { id: 'hydro-seneca', name: 'Seneca Pumped Storage', lat: 41.83, lng: -79.00, type: 'plant' as const, capacity: 435, unit: 'MW', country: 'USA', operator: 'FirstEnergy', description: 'Pumped-storage facility near Kinzua Dam in Warren County, Pennsylvania' },
  { id: 'hydro-bath-county', name: 'Bath County Pumped Storage', lat: 38.22, lng: -79.80, type: 'plant' as const, capacity: 3003, unit: 'MW', country: 'USA', operator: 'Dominion Energy', description: 'Largest pumped-storage hydroelectric station in the world' },
  { id: 'hydro-smith-mountain', name: 'Smith Mountain Lake', lat: 37.05, lng: -79.52, type: 'plant' as const, capacity: 604, unit: 'MW', country: 'USA', operator: 'American Electric Power', description: 'Pumped-storage hydroelectric facility on the Roanoke River in Virginia' },
  { id: 'hydro-ludington', name: 'Ludington Pumped Storage', lat: 43.89, lng: -86.45, type: 'plant' as const, capacity: 1872, unit: 'MW', country: 'USA', operator: 'Consumers Energy', description: 'Large pumped-storage facility on Lake Michigan in Mason County, Michigan' },
  { id: 'hydro-raccoon-mountain', name: 'Raccoon Mountain Pumped Storage', lat: 35.06, lng: -85.40, type: 'plant' as const, capacity: 1652, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Pumped-storage facility near Chattanooga, Tennessee' },
  { id: 'hydro-castaic', name: 'Castaic Power Plant', lat: 34.54, lng: -118.60, type: 'plant' as const, capacity: 1566, unit: 'MW', country: 'USA', operator: 'Los Angeles DWP', description: 'Pumped-storage facility and terminal reservoir of the California Aqueduct' },
  { id: 'hydro-helms', name: 'Helms Pumped Storage', lat: 37.05, lng: -118.98, type: 'plant' as const, capacity: 1212, unit: 'MW', country: 'USA', operator: 'Pacific Gas & Electric', description: 'Underground pumped-storage facility in the Sierra Nevada of Fresno County' },
  { id: 'hydro-oroville', name: 'Oroville Dam', lat: 39.54, lng: -121.49, type: 'plant' as const, capacity: 819, unit: 'MW', country: 'USA', operator: 'California DWR', description: 'Tallest dam in the United States, on the Feather River' },
  { id: 'hydro-shasta', name: 'Shasta Dam', lat: 40.72, lng: -122.42, type: 'plant' as const, capacity: 714, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Concrete gravity dam on the Sacramento River in northern California' },
  { id: 'hydro-new-melones', name: 'New Melones Dam', lat: 37.95, lng: -120.53, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Earth-fill dam on the Stanislaus River in the Sierra Nevada foothills' },
  { id: 'hydro-folsom', name: 'Folsom Dam', lat: 38.68, lng: -121.16, type: 'plant' as const, capacity: 199, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Concrete gravity dam on the American River near Sacramento' },
  { id: 'hydro-pine-flat', name: 'Pine Flat Dam', lat: 36.83, lng: -119.33, type: 'plant' as const, capacity: 165, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Concrete gravity dam on the Kings River in Fresno County' },
  { id: 'hydro-hungry-horse', name: 'Hungry Horse Dam', lat: 48.35, lng: -113.78, type: 'plant' as const, capacity: 428, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Concrete arch dam on the South Fork Flathead River in Montana' },
  { id: 'hydro-libby', name: 'Libby Dam', lat: 48.41, lng: -115.32, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Concrete gravity dam on the Kootenai River in Lincoln County, Montana' },
  { id: 'hydro-kerr', name: 'Kerr Dam', lat: 47.68, lng: -114.18, type: 'plant' as const, capacity: 194, unit: 'MW', country: 'USA', operator: 'Energy Keepers Inc.', description: 'Dam on the Flathead River near Polson, Montana, operated by Confederated Salish and Kootenai Tribes' },
  { id: 'hydro-yellowtail', name: 'Yellowtail Dam', lat: 45.31, lng: -107.94, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'Bureau of Reclamation', description: 'Concrete arch dam on the Bighorn River in Big Horn County, Montana' },
  { id: 'hydro-fort-peck', name: 'Fort Peck Dam', lat: 48.00, lng: -106.42, type: 'plant' as const, capacity: 186, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Hydraulic earth-fill dam on the Missouri River in northeastern Montana' },
  { id: 'hydro-kentucky', name: 'Kentucky Dam', lat: 37.01, lng: -88.28, type: 'plant' as const, capacity: 184, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Largest dam in the TVA system, on the Tennessee River in western Kentucky' },
  { id: 'hydro-fontana', name: 'Fontana Dam', lat: 35.44, lng: -83.81, type: 'plant' as const, capacity: 238, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Tallest dam east of the Rocky Mountains, in the Great Smoky Mountains of North Carolina' },
  { id: 'hydro-norris', name: 'Norris Dam', lat: 36.22, lng: -84.09, type: 'plant' as const, capacity: 131, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'First major project built by TVA, on the Clinch River in Tennessee' },
  { id: 'hydro-guntersville', name: 'Guntersville Dam', lat: 34.43, lng: -86.38, type: 'plant' as const, capacity: 123, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Tennessee River dam near Guntersville, Alabama' },
  { id: 'hydro-wilson', name: 'Wilson Dam', lat: 34.78, lng: -87.63, type: 'plant' as const, capacity: 629, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Historic Tennessee River dam near Muscle Shoals, Alabama' },
  { id: 'hydro-wheeler', name: 'Wheeler Dam', lat: 34.57, lng: -87.05, type: 'plant' as const, capacity: 361, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Tennessee River dam between Decatur and Rogersville, Alabama' },
  { id: 'hydro-garrison', name: 'Garrison Dam', lat: 47.50, lng: -101.43, type: 'plant' as const, capacity: 583, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Earth-fill dam on the Missouri River in central North Dakota, creating Lake Sakakawea' },
  { id: 'hydro-oahe', name: 'Oahe Dam', lat: 44.45, lng: -100.39, type: 'plant' as const, capacity: 786, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Earth-fill dam on the Missouri River near Pierre, South Dakota' },
  { id: 'hydro-big-bend', name: 'Big Bend Dam', lat: 44.06, lng: -99.44, type: 'plant' as const, capacity: 468, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Earth-fill dam on the Missouri River in central South Dakota' },
  { id: 'hydro-fort-randall', name: 'Fort Randall Dam', lat: 43.07, lng: -98.56, type: 'plant' as const, capacity: 320, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Missouri River dam in Gregory County, South Dakota' },
  { id: 'hydro-gavins-point', name: 'Gavins Point Dam', lat: 42.85, lng: -97.49, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'US Army Corps of Engineers', description: 'Most downstream of the main stem Missouri River dams, on the South Dakota-Nebraska border' },
  { id: 'hydro-wa-other', name: 'Washington Other Hydro', lat: 47.75, lng: -120.74, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of smaller Washington hydro facilities including Skagit, Cowlitz, and Yakima systems' },
  { id: 'hydro-or-other', name: 'Oregon Other Hydro', lat: 43.80, lng: -120.55, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Oregon hydro facilities on the Willamette, Deschutes, Rogue, and other river systems' },
  { id: 'hydro-ca-other', name: 'California Other Hydro', lat: 36.78, lng: -119.42, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of smaller California hydro including Pit River, Mokelumne, Yuba, and other Sierra facilities' },
  { id: 'hydro-ny-other', name: 'New York Other Hydro', lat: 42.17, lng: -74.95, type: 'plant' as const, capacity: 1400, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of New York hydro including St. Lawrence-FDR, Lewiston, and smaller upstate facilities' },
  { id: 'hydro-mt-other', name: 'Montana Other Hydro', lat: 46.88, lng: -110.36, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of smaller Montana hydro facilities on the Missouri and Clark Fork systems' },
  { id: 'hydro-id-other', name: 'Idaho Other Hydro', lat: 44.07, lng: -114.74, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Idaho hydro facilities including Hells Canyon complex, Anderson Ranch, and other Snake River plants' },
  { id: 'hydro-tn-other', name: 'Tennessee Other Hydro', lat: 35.52, lng: -86.58, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'USA', operator: 'Tennessee Valley Authority', description: 'Aggregate of remaining TVA hydro in Tennessee including Chickamauga, Fort Loudoun, Watts Bar, and Cherokee dams' },
  { id: 'hydro-al-other', name: 'Alabama Other Hydro', lat: 32.32, lng: -86.90, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Alabama hydro including Alabama Power dams on the Coosa and Tallapoosa rivers' },
  { id: 'hydro-nc-other', name: 'North Carolina Other Hydro', lat: 35.76, lng: -79.02, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of North Carolina hydro including Duke Energy Catawba-Wateree system and Alcoa Yadkin facilities' },
  { id: 'hydro-sc-other', name: 'South Carolina Hydro', lat: 33.84, lng: -81.16, type: 'plant' as const, capacity: 1400, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of South Carolina hydro including Bad Creek Pumped Storage, Jocassee, and Santee Cooper dams' },
  { id: 'hydro-ga-other', name: 'Georgia Hydro', lat: 32.17, lng: -83.44, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Georgia hydro including Rocky Mountain Pumped Storage, Buford Dam, and Chattahoochee River dams' },
  { id: 'hydro-me-other', name: 'Maine Hydro', lat: 45.25, lng: -69.45, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Maine hydro facilities on the Penobscot, Kennebec, and Androscoggin rivers' },
  { id: 'hydro-vt-other', name: 'Vermont Hydro', lat: 44.56, lng: -72.58, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Vermont hydro facilities on the Connecticut, Lamoille, and Winooski rivers' },
  { id: 'hydro-nh-other', name: 'New Hampshire Hydro', lat: 43.19, lng: -71.57, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of New Hampshire hydro facilities on the Connecticut and Merrimack rivers' },
  { id: 'hydro-az-other', name: 'Arizona Other Hydro', lat: 34.05, lng: -111.09, type: 'plant' as const, capacity: 550, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of smaller Arizona hydro including Davis Dam, Parker Dam, and Salt River Project facilities' },
  { id: 'hydro-co-other', name: 'Colorado Hydro', lat: 39.55, lng: -105.78, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Colorado hydro including Mount Elbert Pumped Storage, Blue Mesa, and other facilities' },
  { id: 'hydro-ne-other', name: 'Nebraska Hydro', lat: 41.49, lng: -99.90, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Nebraska hydro including Kingsley Dam, Gerald Gentleman, and Platte River facilities' },
  { id: 'hydro-sd-other', name: 'South Dakota Other Hydro', lat: 43.97, lng: -99.90, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of smaller South Dakota hydro facilities beyond the main stem Missouri River dams' },
  { id: 'hydro-pa-other', name: 'Pennsylvania Other Hydro', lat: 41.20, lng: -77.19, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of Pennsylvania hydro including Conowingo, Holtwood, and Safe Harbor dams on the Susquehanna River' },
  { id: 'hydro-va-other', name: 'Virginia Other Hydro', lat: 37.43, lng: -78.66, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of smaller Virginia hydro on the James, New, and Roanoke rivers' },
  { id: 'hydro-wv-other', name: 'West Virginia Hydro', lat: 38.60, lng: -80.45, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of West Virginia hydro including Summersville, Hawks Nest, and Ohio River facilities' },
  { id: 'hydro-us-other-states', name: 'Other US States Hydro', lat: 39.83, lng: -98.58, type: 'plant' as const, capacity: 7500, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining US hydro across Arkansas, Missouri, Oklahoma, Wisconsin, Minnesota, Iowa, Michigan, Louisiana, Texas, and other states' },

  // === China (421,000 MW) ===
  { id: 'hydro-chn-three-gorges', name: 'Three Gorges Dam', lat: 30.823, lng: 111.003, type: 'plant' as const, capacity: 22500, unit: 'MW', country: 'CHN', operator: 'China Yangtze Power', description: 'World\'s largest hydroelectric dam on the Yangtze River, Hubei Province' },
  { id: 'hydro-chn-baihetan', name: 'Baihetan Dam', lat: 27.220, lng: 102.900, type: 'plant' as const, capacity: 16000, unit: 'MW', country: 'CHN', operator: 'China Three Gorges Corp', description: 'Second largest hydro dam in world, on Jinsha River between Sichuan and Yunnan' },
  { id: 'hydro-chn-xiluodu', name: 'Xiluodu Dam', lat: 28.240, lng: 103.646, type: 'plant' as const, capacity: 13860, unit: 'MW', country: 'CHN', operator: 'China Three Gorges Corp', description: 'Arch dam on Jinsha River, Yunnan/Sichuan border' },
  { id: 'hydro-chn-wudongde', name: 'Wudongde Dam', lat: 26.333, lng: 102.617, type: 'plant' as const, capacity: 10200, unit: 'MW', country: 'CHN', operator: 'China Three Gorges Corp', description: 'Double-curvature arch dam on Jinsha River' },
  { id: 'hydro-chn-xiangjiaba', name: 'Xiangjiaba Dam', lat: 28.632, lng: 104.417, type: 'plant' as const, capacity: 6448, unit: 'MW', country: 'CHN', operator: 'China Three Gorges Corp', description: 'Gravity dam on Jinsha River near Yibin, Sichuan' },
  { id: 'hydro-chn-longtan', name: 'Longtan Dam', lat: 24.967, lng: 107.050, type: 'plant' as const, capacity: 6426, unit: 'MW', country: 'CHN', operator: 'China Datang Corp', description: 'RCC gravity dam on Hongshui River, Guangxi' },
  { id: 'hydro-chn-nuozhadu', name: 'Nuozhadu Dam', lat: 22.654, lng: 100.420, type: 'plant' as const, capacity: 5850, unit: 'MW', country: 'CHN', operator: 'Huaneng', description: 'Earth-core rockfill dam on Lancang/Mekong, Yunnan' },
  { id: 'hydro-chn-jinping-ii', name: 'Jinping-II Hydropower Station', lat: 28.167, lng: 101.633, type: 'plant' as const, capacity: 4800, unit: 'MW', country: 'CHN', operator: 'Ertan Hydropower', description: 'Underground powerhouse using bend in Yalong River, Sichuan' },
  { id: 'hydro-chn-xiaowan', name: 'Xiaowan Dam', lat: 24.683, lng: 99.917, type: 'plant' as const, capacity: 4200, unit: 'MW', country: 'CHN', operator: 'Huaneng', description: 'Double-curvature arch dam on Lancang/Mekong, Yunnan' },
  { id: 'hydro-chn-laxiwa', name: 'Laxiwa Dam', lat: 36.050, lng: 100.867, type: 'plant' as const, capacity: 4200, unit: 'MW', country: 'CHN', operator: 'China Huanghe Hydropower', description: 'Arch dam on Yellow River, Qinghai' },
  { id: 'hydro-chn-pubugou', name: 'Pubugou Dam', lat: 29.317, lng: 102.600, type: 'plant' as const, capacity: 3300, unit: 'MW', country: 'CHN', operator: 'Guodian', description: 'Gravel-fill dam on Dadu River, Sichuan' },
  { id: 'hydro-chn-goupitan', name: 'Goupitan Dam', lat: 27.400, lng: 107.033, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'CHN', operator: 'China Guodian', description: 'Double-curvature arch dam on Wujiang River, Guizhou' },
  { id: 'hydro-chn-ertan', name: 'Ertan Dam', lat: 26.833, lng: 101.600, type: 'plant' as const, capacity: 3300, unit: 'MW', country: 'CHN', operator: 'Ertan Hydropower', description: 'Arch dam on Yalong River, Sichuan' },
  { id: 'hydro-chn-guangzhao', name: 'Guangzhao Dam', lat: 25.700, lng: 106.533, type: 'plant' as const, capacity: 2520, unit: 'MW', country: 'CHN', operator: 'China Datang', description: 'Arch dam on Beipan River, Guizhou' },
  { id: 'hydro-chn-shuibuya', name: 'Shuibuya Dam', lat: 30.433, lng: 110.333, type: 'plant' as const, capacity: 1840, unit: 'MW', country: 'CHN', operator: 'China Yangtze Power', description: 'Concrete-faced rockfill dam in Hubei' },
  { id: 'hydro-chn-fengman', name: 'Fengman Dam', lat: 43.817, lng: 126.700, type: 'plant' as const, capacity: 1480, unit: 'MW', country: 'CHN', operator: 'State Grid', description: 'Reconstructed gravity dam on Songhua River, Jilin' },
  { id: 'hydro-chn-other', name: 'Other China Hydro', lat: 35.86, lng: 104.20, type: 'plant' as const, capacity: 311076, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of remaining hydroelectric capacity across all provinces' },

  // === Brazil (110,000 MW) ===
  { id: 'hydro-bra-itaipu', name: 'Itaipu Dam (Brazil share)', lat: -25.408, lng: -54.589, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'BRA', operator: 'Itaipu Binacional', description: 'World\'s second largest hydro dam, shared with Paraguay on Parana River; Brazil\'s 50% share' },
  { id: 'hydro-bra-belo-monte', name: 'Belo Monte Dam', lat: -3.117, lng: -51.793, type: 'plant' as const, capacity: 11233, unit: 'MW', country: 'BRA', operator: 'Norte Energia', description: 'Fourth largest hydro dam in the world, on the Xingu River, Para' },
  { id: 'hydro-bra-tucurui', name: 'Tucurui Dam', lat: -3.831, lng: -49.717, type: 'plant' as const, capacity: 8370, unit: 'MW', country: 'BRA', operator: 'Eletronorte', description: 'Large gravity dam on Tocantins River, Para' },
  { id: 'hydro-bra-jirau', name: 'Jirau Dam', lat: -9.267, lng: -64.650, type: 'plant' as const, capacity: 3750, unit: 'MW', country: 'BRA', operator: 'Energia Sustentavel', description: 'Run-of-river dam on Madeira River, Rondonia' },
  { id: 'hydro-bra-santo-antonio', name: 'Santo Antonio Dam', lat: -8.800, lng: -63.950, type: 'plant' as const, capacity: 3568, unit: 'MW', country: 'BRA', operator: 'Santo Antonio Energia', description: 'Run-of-river dam on Madeira River near Porto Velho' },
  { id: 'hydro-bra-ilha-solteira', name: 'Ilha Solteira Dam', lat: -20.383, lng: -51.367, type: 'plant' as const, capacity: 3444, unit: 'MW', country: 'BRA', operator: 'CTG Brasil', description: 'Gravity dam on Parana River, Sao Paulo' },
  { id: 'hydro-bra-itumbiara', name: 'Itumbiara Dam', lat: -18.417, lng: -49.100, type: 'plant' as const, capacity: 2082, unit: 'MW', country: 'BRA', operator: 'Eletrobras Furnas', description: 'Arch-gravity dam on Paranaiba River, Goias/Minas Gerais' },
  { id: 'hydro-bra-sao-simao', name: 'Sao Simao Dam', lat: -19.017, lng: -50.500, type: 'plant' as const, capacity: 1710, unit: 'MW', country: 'BRA', operator: 'CEMIG', description: 'Dam on Paranaiba River between Goias and Minas Gerais' },
  { id: 'hydro-bra-furnas', name: 'Furnas Dam', lat: -20.667, lng: -46.300, type: 'plant' as const, capacity: 1216, unit: 'MW', country: 'BRA', operator: 'Eletrobras Furnas', description: 'Concrete gravity dam on Grande River, Minas Gerais' },
  { id: 'hydro-bra-paulo-afonso', name: 'Paulo Afonso IV', lat: -9.400, lng: -38.217, type: 'plant' as const, capacity: 2462, unit: 'MW', country: 'BRA', operator: 'CHESF', description: 'Hydroelectric complex on Sao Francisco River, Bahia' },
  { id: 'hydro-bra-xingo', name: 'Xingo Dam', lat: -9.617, lng: -37.800, type: 'plant' as const, capacity: 3162, unit: 'MW', country: 'BRA', operator: 'CHESF', description: 'Gravity dam on Sao Francisco River' },
  { id: 'hydro-bra-sobradinho', name: 'Sobradinho Dam', lat: -9.433, lng: -40.833, type: 'plant' as const, capacity: 1050, unit: 'MW', country: 'BRA', operator: 'CHESF', description: 'Dam on Sao Francisco River, Bahia' },
  { id: 'hydro-bra-teles-pires', name: 'Teles Pires Dam', lat: -9.350, lng: -56.783, type: 'plant' as const, capacity: 1820, unit: 'MW', country: 'BRA', operator: 'Teles Pires Energia', description: 'Dam on Teles Pires River, Mato Grosso' },
  { id: 'hydro-bra-other', name: 'Other Brazil Hydro', lat: -14.24, lng: -51.93, type: 'plant' as const, capacity: 59133, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of remaining hydro across all Brazilian states' },

  // === Canada (84,000 MW) ===
  { id: 'hydro-can-robert-bourassa', name: 'Robert-Bourassa Generating Station', lat: 53.783, lng: -77.450, type: 'plant' as const, capacity: 5616, unit: 'MW', country: 'CAN', operator: 'Hydro-Quebec', description: 'Underground powerhouse on La Grande River, James Bay, Quebec' },
  { id: 'hydro-can-churchill-falls', name: 'Churchill Falls Generating Station', lat: 53.290, lng: -64.016, type: 'plant' as const, capacity: 5428, unit: 'MW', country: 'CAN', operator: 'Churchill Falls Labrador Corp', description: 'One of largest underground powerhouses in world, Labrador' },
  { id: 'hydro-can-la-grande-4', name: 'La Grande-4 Generating Station', lat: 53.833, lng: -73.433, type: 'plant' as const, capacity: 2779, unit: 'MW', country: 'CAN', operator: 'Hydro-Quebec', description: 'Part of James Bay hydroelectric complex' },
  { id: 'hydro-can-la-grande-3', name: 'La Grande-3 Generating Station', lat: 53.750, lng: -76.050, type: 'plant' as const, capacity: 2417, unit: 'MW', country: 'CAN', operator: 'Hydro-Quebec', description: 'Part of James Bay complex' },
  { id: 'hydro-can-manic-5', name: 'Manic-5 / Daniel-Johnson Dam', lat: 51.033, lng: -68.383, type: 'plant' as const, capacity: 2596, unit: 'MW', country: 'CAN', operator: 'Hydro-Quebec', description: 'Daniel-Johnson Dam, Manicouagan reservoir, largest multiple-arch dam in world' },
  { id: 'hydro-can-wac-bennett', name: 'W.A.C. Bennett Dam', lat: 56.017, lng: -122.200, type: 'plant' as const, capacity: 2730, unit: 'MW', country: 'CAN', operator: 'BC Hydro', description: 'Earth-fill dam on Peace River, British Columbia' },
  { id: 'hydro-can-mica', name: 'Mica Dam', lat: 52.083, lng: -118.567, type: 'plant' as const, capacity: 2805, unit: 'MW', country: 'CAN', operator: 'BC Hydro', description: 'Earth-fill dam on Columbia River, BC; tallest dam in Canada' },
  { id: 'hydro-can-gm-shrum', name: 'Gordon M. Shrum Generating Station', lat: 56.017, lng: -122.200, type: 'plant' as const, capacity: 2730, unit: 'MW', country: 'CAN', operator: 'BC Hydro', description: 'Powerhouse at W.A.C. Bennett Dam' },
  { id: 'hydro-can-revelstoke', name: 'Revelstoke Dam', lat: 51.067, lng: -118.183, type: 'plant' as const, capacity: 2480, unit: 'MW', country: 'CAN', operator: 'BC Hydro', description: 'Concrete gravity dam on Columbia River near Revelstoke, BC' },
  { id: 'hydro-can-site-c', name: 'Site C Dam', lat: 56.200, lng: -120.917, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'CAN', operator: 'BC Hydro', description: 'New dam on Peace River, northeastern BC' },
  { id: 'hydro-can-beauharnois', name: 'Beauharnois Generating Station', lat: 45.317, lng: -73.933, type: 'plant' as const, capacity: 1903, unit: 'MW', country: 'CAN', operator: 'Hydro-Quebec', description: 'Run-of-river station on St. Lawrence River near Montreal' },
  { id: 'hydro-can-other', name: 'Other Canada Hydro', lat: 56.13, lng: -106.35, type: 'plant' as const, capacity: 51416, unit: 'MW', country: 'CAN', operator: 'Various', description: 'Aggregate of remaining Canadian hydro across Manitoba, Ontario, BC, and other provinces' },

  // === Russia (55,000 MW) ===
  { id: 'hydro-rus-sayano', name: 'Sayano-Shushenskaya Dam', lat: 52.833, lng: 91.367, type: 'plant' as const, capacity: 6400, unit: 'MW', country: 'RUS', operator: 'RusHydro', description: 'Largest hydroelectric plant in Russia, arch-gravity dam on Yenisei River, Khakassia' },
  { id: 'hydro-rus-krasnoyarsk', name: 'Krasnoyarsk Dam', lat: 55.933, lng: 92.283, type: 'plant' as const, capacity: 6000, unit: 'MW', country: 'RUS', operator: 'RusHydro/En+', description: 'Gravity dam on Yenisei River near Krasnoyarsk, Siberia' },
  { id: 'hydro-rus-bratsk', name: 'Bratsk Dam', lat: 56.267, lng: 101.800, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'RUS', operator: 'En+ Group', description: 'Gravity dam on Angara River, powers Bratsk aluminum smelter' },
  { id: 'hydro-rus-ust-ilimsk', name: 'Ust-Ilimsk Dam', lat: 58.100, lng: 102.717, type: 'plant' as const, capacity: 3840, unit: 'MW', country: 'RUS', operator: 'En+ Group', description: 'Gravity dam on Angara River downstream of Bratsk' },
  { id: 'hydro-rus-boguchany', name: 'Boguchany Dam', lat: 58.367, lng: 97.450, type: 'plant' as const, capacity: 2997, unit: 'MW', country: 'RUS', operator: 'RusHydro/RUSAL', description: 'Gravity dam on Angara River, commissioned 2014' },
  { id: 'hydro-rus-volzhskaya', name: 'Volzhskaya / Volgograd Dam', lat: 48.817, lng: 44.667, type: 'plant' as const, capacity: 2671, unit: 'MW', country: 'RUS', operator: 'RusHydro', description: 'Dam on Volga River near Volgograd' },
  { id: 'hydro-rus-zhigulyovskaya', name: 'Zhigulyovskaya / Samara Dam', lat: 53.450, lng: 49.500, type: 'plant' as const, capacity: 2488, unit: 'MW', country: 'RUS', operator: 'RusHydro', description: 'Dam on Volga River near Tolyatti' },
  { id: 'hydro-rus-bureya', name: 'Bureya Dam', lat: 49.800, lng: 130.350, type: 'plant' as const, capacity: 2010, unit: 'MW', country: 'RUS', operator: 'RusHydro', description: 'Concrete gravity dam on Bureya River, Amur Oblast' },
  { id: 'hydro-rus-cheboksary', name: 'Cheboksary Dam', lat: 56.133, lng: 46.833, type: 'plant' as const, capacity: 1370, unit: 'MW', country: 'RUS', operator: 'RusHydro', description: 'Dam on Volga River near Cheboksary' },
  { id: 'hydro-rus-other', name: 'Other Russia Hydro', lat: 55.75, lng: 37.62, type: 'plant' as const, capacity: 22724, unit: 'MW', country: 'RUS', operator: 'Various', description: 'Aggregate of remaining Russian hydro across Siberia, Caucasus, and European Russia' },

  // === India (52,000 MW) ===
  { id: 'hydro-ind-tehri', name: 'Tehri Dam', lat: 30.383, lng: 78.483, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'IND', operator: 'THDC India', description: 'Tallest dam in India on Bhagirathi River, Uttarakhand' },
  { id: 'hydro-ind-koyna', name: 'Koyna Dam', lat: 17.383, lng: 73.750, type: 'plant' as const, capacity: 1960, unit: 'MW', country: 'IND', operator: 'Maharashtra State Electricity Board', description: 'Gravity dam in Western Ghats, Maharashtra' },
  { id: 'hydro-ind-srisailam', name: 'Srisailam Dam', lat: 15.850, lng: 78.900, type: 'plant' as const, capacity: 1670, unit: 'MW', country: 'IND', operator: 'APGENCO/Telangana', description: 'Dam on Krishna River, Andhra Pradesh/Telangana' },
  { id: 'hydro-ind-nathpa-jhakri', name: 'Nathpa Jhakri Dam', lat: 31.533, lng: 77.817, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'IND', operator: 'SJVN', description: 'Underground run-of-river on Sutlej, Himachal Pradesh' },
  { id: 'hydro-ind-sardar-sarovar', name: 'Sardar Sarovar Dam', lat: 21.833, lng: 73.750, type: 'plant' as const, capacity: 1450, unit: 'MW', country: 'IND', operator: 'SSNNL', description: 'Gravity dam on Narmada River, Gujarat' },
  { id: 'hydro-ind-bhakra', name: 'Bhakra Dam', lat: 31.417, lng: 76.433, type: 'plant' as const, capacity: 1325, unit: 'MW', country: 'IND', operator: 'BBMB', description: 'Concrete gravity dam on Sutlej River, Himachal Pradesh' },
  { id: 'hydro-ind-dehar', name: 'Dehar / Pandoh Dam', lat: 31.667, lng: 77.050, type: 'plant' as const, capacity: 990, unit: 'MW', country: 'IND', operator: 'BBMB', description: 'Underground powerhouse on Beas River, Himachal Pradesh' },
  { id: 'hydro-ind-other', name: 'Other India Hydro', lat: 20.59, lng: 78.96, type: 'plant' as const, capacity: 40705, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of remaining Indian hydro across Himachal Pradesh, J&K, Karnataka, Kerala, and NE states' },

  // === Norway (33,000 MW) ===
  { id: 'hydro-nor-tonstad', name: 'Tonstad Hydropower Station', lat: 58.667, lng: 6.717, type: 'plant' as const, capacity: 960, unit: 'MW', country: 'NOR', operator: 'Sira-Kvina Kraftselskap', description: 'Largest power station in Norway, Vest-Agder' },
  { id: 'hydro-nor-kvilldal', name: 'Kvilldal Hydropower Station', lat: 59.533, lng: 6.550, type: 'plant' as const, capacity: 1240, unit: 'MW', country: 'NOR', operator: 'Statkraft', description: 'Largest hydroelectric plant in Northern Europe, Rogaland' },
  { id: 'hydro-nor-aurland', name: 'Aurland Hydropower Station', lat: 60.917, lng: 7.117, type: 'plant' as const, capacity: 840, unit: 'MW', country: 'NOR', operator: 'ECO Energi', description: 'Underground powerhouse in Sogn og Fjordane' },
  { id: 'hydro-nor-rana', name: 'Rana Hydropower Complex', lat: 66.333, lng: 14.250, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'NOR', operator: 'Statkraft', description: 'Hydroelectric complex in Nordland' },
  { id: 'hydro-nor-sima', name: 'Sima Hydropower Station', lat: 60.367, lng: 7.200, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'NOR', operator: 'Statkraft', description: 'Near Hardangervidda plateau, Hordaland' },
  { id: 'hydro-nor-other', name: 'Other Norway Hydro', lat: 62.00, lng: 10.00, type: 'plant' as const, capacity: 28960, unit: 'MW', country: 'NOR', operator: 'Various', description: 'Aggregate of hundreds of hydro plants across Norway' },

  // === Japan (50,000 MW) ===
  { id: 'hydro-jpn-okutataragi', name: 'Okutataragi Pumped Storage', lat: 35.233, lng: 134.750, type: 'plant' as const, capacity: 1932, unit: 'MW', country: 'JPN', operator: 'Kansai Electric', description: 'Largest pumped-storage in Japan, Hyogo Prefecture' },
  { id: 'hydro-jpn-kannagawa', name: 'Kannagawa Pumped Storage', lat: 36.083, lng: 138.833, type: 'plant' as const, capacity: 2820, unit: 'MW', country: 'JPN', operator: 'TEPCO', description: 'Underground pumped storage in Gunma Prefecture' },
  { id: 'hydro-jpn-shin-takasegawa', name: 'Shin-Takasegawa Pumped Storage', lat: 36.267, lng: 137.750, type: 'plant' as const, capacity: 1280, unit: 'MW', country: 'JPN', operator: 'Chubu Electric', description: 'Pumped storage in Nagano Prefecture' },
  { id: 'hydro-jpn-okutadami', name: 'Okutadami Dam', lat: 37.117, lng: 139.250, type: 'plant' as const, capacity: 560, unit: 'MW', country: 'JPN', operator: 'J-Power', description: 'Arch dam on Tadami River, Fukushima' },
  { id: 'hydro-jpn-sakuma', name: 'Sakuma Dam', lat: 35.083, lng: 137.817, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'JPN', operator: 'J-Power', description: 'Dam on Tenryu River, Shizuoka' },
  { id: 'hydro-jpn-other', name: 'Other Japan Hydro', lat: 36.20, lng: 140.00, type: 'plant' as const, capacity: 43058, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of remaining hydro and pumped-storage across Japan' },

  // === Turkey (32,000 MW) ===
  { id: 'hydro-tur-ataturk', name: 'Ataturk Dam', lat: 37.500, lng: 38.350, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'TUR', operator: 'DSI', description: 'Sixth largest earth-and-rock fill dam in world, on Euphrates, Sanliurfa' },
  { id: 'hydro-tur-keban', name: 'Keban Dam', lat: 38.817, lng: 38.750, type: 'plant' as const, capacity: 1330, unit: 'MW', country: 'TUR', operator: 'EUAS', description: 'Gravity dam on Euphrates River, Elazig' },
  { id: 'hydro-tur-karakaya', name: 'Karakaya Dam', lat: 38.200, lng: 38.967, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'TUR', operator: 'EUAS', description: 'Arch dam on Euphrates River, Diyarbakir' },
  { id: 'hydro-tur-other', name: 'Other Turkey Hydro', lat: 39.93, lng: 32.86, type: 'plant' as const, capacity: 26470, unit: 'MW', country: 'TUR', operator: 'Various', description: 'Aggregate of hundreds of dams on Euphrates, Tigris, Coruh, and other rivers' },

  // === France (26,000 MW) ===
  { id: 'hydro-fra-grand-maison', name: 'Grand\'Maison Pumped Storage', lat: 45.200, lng: 5.983, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'FRA', operator: 'EDF', description: 'Largest pumped-storage in France, Isere' },
  { id: 'hydro-fra-tignes', name: 'Tignes Dam', lat: 45.517, lng: 6.917, type: 'plant' as const, capacity: 390, unit: 'MW', country: 'FRA', operator: 'EDF', description: 'Dam on Isere River, Savoie' },
  { id: 'hydro-fra-serre-poncon', name: 'Serre-Poncon Dam', lat: 44.467, lng: 6.333, type: 'plant' as const, capacity: 380, unit: 'MW', country: 'FRA', operator: 'EDF', description: 'Earth-fill dam on Durance River, largest reservoir in France' },
  { id: 'hydro-fra-other', name: 'Other France Hydro', lat: 46.60, lng: 2.50, type: 'plant' as const, capacity: 23430, unit: 'MW', country: 'FRA', operator: 'Various', description: 'Aggregate of remaining French hydro across Alps, Pyrenees, Massif Central, and Rhone valley' },

  // === Italy (22,000 MW) ===
  { id: 'hydro-ita-other', name: 'Other Italy Hydro', lat: 41.87, lng: 12.57, type: 'plant' as const, capacity: 22000, unit: 'MW', country: 'ITA', operator: 'Various', description: 'Aggregate of Alpine hydro and pumped storage across northern Italy' },

  // === Sweden (16,000 MW) ===
  { id: 'hydro-swe-other', name: 'Other Sweden Hydro', lat: 62.00, lng: 15.00, type: 'plant' as const, capacity: 16000, unit: 'MW', country: 'SWE', operator: 'Vattenfall/Fortum', description: 'Aggregate of hundreds of hydro plants in northern Sweden' },

  // === Switzerland (15,000 MW) ===
  { id: 'hydro-che-grande-dixence', name: 'Grande Dixence Dam', lat: 46.083, lng: 7.400, type: 'plant' as const, capacity: 2069, unit: 'MW', country: 'CHE', operator: 'Alpiq/Axpo', description: 'Tallest gravity dam in world at 285m, Valais' },
  { id: 'hydro-che-other', name: 'Other Switzerland Hydro', lat: 46.82, lng: 8.23, type: 'plant' as const, capacity: 12931, unit: 'MW', country: 'CHE', operator: 'Various', description: 'Aggregate of remaining Swiss hydro across Alpine cantons' },

  // === Venezuela (15,000 MW) ===
  { id: 'hydro-ven-guri', name: 'Guri Dam', lat: 7.767, lng: -62.983, type: 'plant' as const, capacity: 10235, unit: 'MW', country: 'VEN', operator: 'CORPOELEC', description: 'Fourth largest hydro dam in world, on Caroni River' },
  { id: 'hydro-ven-other', name: 'Other Venezuela Hydro', lat: 6.42, lng: -66.59, type: 'plant' as const, capacity: 4765, unit: 'MW', country: 'VEN', operator: 'Various', description: 'Aggregate of remaining Venezuelan hydro capacity' },

  // === Austria (14,000 MW) ===
  { id: 'hydro-aut-other', name: 'Other Austria Hydro', lat: 47.52, lng: 14.55, type: 'plant' as const, capacity: 14000, unit: 'MW', country: 'AUT', operator: 'Verbund/TIWAG', description: 'Aggregate of Alpine hydro including Kaprun, Malta, and others' },

  // === Colombia (12,000 MW) ===
  { id: 'hydro-col-other', name: 'Other Colombia Hydro', lat: 4.57, lng: -74.30, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'COL', operator: 'Various/EPM/Isagen', description: 'Aggregate including Chivor, Guatape, Ituango, and many others' },

  // === Mexico (12,600 MW) ===
  { id: 'hydro-mex-other', name: 'Other Mexico Hydro', lat: 23.63, lng: -102.55, type: 'plant' as const, capacity: 12600, unit: 'MW', country: 'MEX', operator: 'CFE', description: 'Aggregate across Grijalva, Santiago, Balsas river systems' },

  // === Iran (12,000 MW) ===
  { id: 'hydro-irn-other', name: 'Other Iran Hydro', lat: 32.43, lng: 53.69, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'IRN', operator: 'Iran Water & Power', description: 'Aggregate including Karun cascade dams' },

  // === Vietnam (18,000 MW) ===
  { id: 'hydro-vnm-son-la', name: 'Son La Dam', lat: 21.333, lng: 103.950, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'VNM', operator: 'EVN', description: 'Largest dam in Southeast Asia on Da River' },
  { id: 'hydro-vnm-other', name: 'Other Vietnam Hydro', lat: 14.06, lng: 108.28, type: 'plant' as const, capacity: 15600, unit: 'MW', country: 'VNM', operator: 'Various', description: 'Aggregate of remaining Vietnamese hydro capacity' },

  // === Pakistan (10,000 MW) ===
  { id: 'hydro-pak-tarbela', name: 'Tarbela Dam', lat: 34.089, lng: 72.700, type: 'plant' as const, capacity: 4888, unit: 'MW', country: 'PAK', operator: 'WAPDA', description: 'Earth-fill dam on Indus River, one of largest in world' },
  { id: 'hydro-pak-mangla', name: 'Mangla Dam', lat: 33.146, lng: 73.643, type: 'plant' as const, capacity: 1150, unit: 'MW', country: 'PAK', operator: 'WAPDA', description: 'Dam on Jhelum River, Azad Kashmir' },
  { id: 'hydro-pak-other', name: 'Other Pakistan Hydro', lat: 30.38, lng: 69.35, type: 'plant' as const, capacity: 3962, unit: 'MW', country: 'PAK', operator: 'Various', description: 'Aggregate of remaining Pakistani hydro capacity' },

  // === Paraguay (9,000 MW) ===
  { id: 'hydro-pry-itaipu', name: 'Itaipu Dam (Paraguay share)', lat: -25.408, lng: -54.589, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'PRY', operator: 'Itaipu Binacional', description: 'Paraguay\'s 50% share of Itaipu Dam' },
  { id: 'hydro-pry-yacyreta', name: 'Yacyreta Dam (Paraguay)', lat: -27.483, lng: -56.717, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'PRY', operator: 'EBY', description: 'Shared with Argentina on Parana River' },
  { id: 'hydro-pry-other', name: 'Other Paraguay Hydro', lat: -23.44, lng: -58.44, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'PRY', operator: 'ANDE', description: 'Aggregate of remaining Paraguayan hydro capacity' },

  // === Argentina (11,000 MW) ===
  { id: 'hydro-arg-yacyreta', name: 'Yacyreta Dam (Argentina)', lat: -27.483, lng: -56.717, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'ARG', operator: 'EBY', description: 'Argentina\'s share of Yacyreta Dam on Parana River' },
  { id: 'hydro-arg-salto-grande', name: 'Salto Grande Dam', lat: -31.267, lng: -57.933, type: 'plant' as const, capacity: 945, unit: 'MW', country: 'ARG', operator: 'CTM', description: 'Shared with Uruguay on Uruguay River' },
  { id: 'hydro-arg-other', name: 'Other Argentina Hydro', lat: -38.42, lng: -63.62, type: 'plant' as const, capacity: 8455, unit: 'MW', country: 'ARG', operator: 'Various', description: 'Aggregate of remaining Argentine hydro capacity' },

  // === Ethiopia (5,850 MW) ===
  { id: 'hydro-eth-gerd', name: 'Grand Ethiopian Renaissance Dam', lat: 11.217, lng: 35.083, type: 'plant' as const, capacity: 5150, unit: 'MW', country: 'ETH', operator: 'Ethiopian Electric Power', description: 'Africa\'s largest hydro dam on Blue Nile, under filling' },
  { id: 'hydro-eth-other', name: 'Other Ethiopia Hydro', lat: 9.15, lng: 38.70, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'ETH', operator: 'Various', description: 'Aggregate of remaining Ethiopian hydro capacity' },

  // === Mozambique (2,250 MW) ===
  { id: 'hydro-moz-cahora-bassa', name: 'Cahora Bassa Dam', lat: -15.583, lng: 32.700, type: 'plant' as const, capacity: 2075, unit: 'MW', country: 'MOZ', operator: 'HCB', description: 'Arch dam on Zambezi River, one of largest in Africa' },
  { id: 'hydro-moz-other', name: 'Other Mozambique Hydro', lat: -18.67, lng: 35.53, type: 'plant' as const, capacity: 175, unit: 'MW', country: 'MOZ', operator: 'Various', description: 'Aggregate of remaining Mozambican hydro capacity' },

  // === Peru (5,800 MW) ===
  { id: 'hydro-per-other', name: 'Other Peru Hydro', lat: -9.19, lng: -75.02, type: 'plant' as const, capacity: 5800, unit: 'MW', country: 'PER', operator: 'Various', description: 'Aggregate including Mantaro complex and others' },

  // === Laos (7,200 MW) ===
  { id: 'hydro-lao-other', name: 'Laos Hydro', lat: 19.86, lng: 102.50, type: 'plant' as const, capacity: 7200, unit: 'MW', country: 'LAO', operator: 'Various', description: 'Aggregate of Mekong tributary dams including Nam Theun 2, Xayaburi, and Nam Ou cascade' },

  // === Myanmar (3,300 MW) ===
  { id: 'hydro-mmr-other', name: 'Myanmar Hydro', lat: 21.91, lng: 95.96, type: 'plant' as const, capacity: 3300, unit: 'MW', country: 'MMR', operator: 'Various', description: 'Aggregate of hydro including Shweli, Yeywa, and Baluchaung facilities' },

  // === Indonesia (6,400 MW) ===
  { id: 'hydro-idn-other', name: 'Indonesia Hydro', lat: -0.79, lng: 113.92, type: 'plant' as const, capacity: 6400, unit: 'MW', country: 'IDN', operator: 'PLN/Various', description: 'Aggregate of hydro across Sumatra, Java, Kalimantan, and Sulawesi' },

  // === Malaysia (6,300 MW) ===
  { id: 'hydro-mys-other', name: 'Malaysia Hydro', lat: 4.21, lng: 101.98, type: 'plant' as const, capacity: 6300, unit: 'MW', country: 'MYS', operator: 'TNB/Sarawak Energy', description: 'Aggregate including Bakun Dam, Murum Dam, and Temengor Dam' },

  // === South Korea (6,500 MW) ===
  { id: 'hydro-kor-other', name: 'South Korea Hydro', lat: 35.91, lng: 127.77, type: 'plant' as const, capacity: 6500, unit: 'MW', country: 'KOR', operator: 'KHNP/K-water', description: 'Aggregate of conventional and pumped-storage hydro including Yangyang and Chungju' },

  // === Spain (20,400 MW) ===
  { id: 'hydro-esp-other', name: 'Spain Hydro', lat: 40.46, lng: -3.75, type: 'plant' as const, capacity: 20400, unit: 'MW', country: 'ESP', operator: 'Iberdrola/Endesa/Various', description: 'Aggregate of conventional and pumped-storage hydro across Duero, Tajo, and Ebro basins' },

  // === Portugal (7,100 MW) ===
  { id: 'hydro-prt-other', name: 'Portugal Hydro', lat: 39.40, lng: -8.22, type: 'plant' as const, capacity: 7100, unit: 'MW', country: 'PRT', operator: 'EDP/Various', description: 'Aggregate of hydro on Douro, Tejo, and other rivers' },

  // === Romania (6,400 MW) ===
  { id: 'hydro-rou-other', name: 'Romania Hydro', lat: 45.94, lng: 24.97, type: 'plant' as const, capacity: 6400, unit: 'MW', country: 'ROU', operator: 'Hidroelectrica', description: 'Aggregate of hydro on Danube and Carpathian rivers including Iron Gates' },

  // === Democratic Republic of Congo (2,800 MW) ===
  { id: 'hydro-cod-other', name: 'DR Congo Hydro', lat: -4.04, lng: 21.76, type: 'plant' as const, capacity: 2800, unit: 'MW', country: 'COD', operator: 'SNEL', description: 'Aggregate including Inga I and Inga II dams on Congo River' },

  // === Zambia (2,800 MW) ===
  { id: 'hydro-zmb-other', name: 'Zambia Hydro', lat: -13.13, lng: 27.85, type: 'plant' as const, capacity: 2800, unit: 'MW', country: 'ZMB', operator: 'ZESCO', description: 'Aggregate including Kariba North Bank and Kafue Gorge' },

  // === Egypt (2,800 MW) ===
  { id: 'hydro-egy-other', name: 'Egypt Hydro', lat: 24.05, lng: 32.88, type: 'plant' as const, capacity: 2800, unit: 'MW', country: 'EGY', operator: 'HPPA', description: 'Aggregate including Aswan High Dam and Aswan Low Dam on the Nile' },

  // === Nigeria (2,000 MW) ===
  { id: 'hydro-nga-other', name: 'Nigeria Hydro', lat: 9.06, lng: 7.49, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'NGA', operator: 'Various', description: 'Aggregate including Kainji, Jebba, and Shiroro dams' },

  // === New Zealand (5,400 MW) ===
  { id: 'hydro-nzl-other', name: 'New Zealand Hydro', lat: -40.90, lng: 174.89, type: 'plant' as const, capacity: 5400, unit: 'MW', country: 'NZL', operator: 'Meridian/Contact/Mercury', description: 'Aggregate of hydro across Waitaki, Clutha, Waikato, and Manapouri systems' },

  // === Chile (7,000 MW) ===
  { id: 'hydro-chl-other', name: 'Chile Hydro', lat: -33.45, lng: -70.67, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'CHL', operator: 'Enel/Colbun/Various', description: 'Aggregate of hydro including Ralco, Pangue, El Toro, and Rapel' },

  // === Ecuador (5,100 MW) ===
  { id: 'hydro-ecu-other', name: 'Ecuador Hydro', lat: -1.83, lng: -78.18, type: 'plant' as const, capacity: 5100, unit: 'MW', country: 'ECU', operator: 'CELEC EP', description: 'Aggregate including Coca Codo Sinclair, Paute-Integral, and other facilities' },

  // === Costa Rica (2,200 MW) ===
  { id: 'hydro-cri-other', name: 'Costa Rica Hydro', lat: 9.75, lng: -83.75, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'CRI', operator: 'ICE', description: 'Aggregate of hydro including Reventazon, Arenal, and Angostura' },

  // === Tajikistan (5,500 MW) ===
  { id: 'hydro-tjk-other', name: 'Tajikistan Hydro', lat: 38.86, lng: 71.28, type: 'plant' as const, capacity: 5500, unit: 'MW', country: 'TJK', operator: 'Barqi Tojik', description: 'Aggregate including Nurek Dam and Rogun Dam on Vakhsh River' },

  // === Kyrgyzstan (3,800 MW) ===
  { id: 'hydro-kgz-other', name: 'Kyrgyzstan Hydro', lat: 41.20, lng: 74.77, type: 'plant' as const, capacity: 3800, unit: 'MW', country: 'KGZ', operator: 'Electric Stations JSC', description: 'Aggregate including Toktogul cascade on Naryn River' },

  // === Georgia (3,300 MW) ===
  { id: 'hydro-geo-other', name: 'Georgia Hydro', lat: 42.32, lng: 43.37, type: 'plant' as const, capacity: 3300, unit: 'MW', country: 'GEO', operator: 'Various', description: 'Aggregate including Enguri Dam and Vardnili cascade' },

  // === Nepal (2,500 MW) ===
  { id: 'hydro-npl-other', name: 'Nepal Hydro', lat: 28.39, lng: 84.12, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'NPL', operator: 'NEA/Various', description: 'Aggregate of hydro on Himalayan rivers including Upper Tamakoshi and Kali Gandaki' },

  // === Uruguay (1,500 MW) ===
  { id: 'hydro-ury-other', name: 'Uruguay Hydro', lat: -34.88, lng: -56.18, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'URY', operator: 'UTE', description: 'Aggregate including Salto Grande (Uruguay share), Baygorria, and Palmar dams' },

  // === Finland (3,300 MW) ===
  { id: 'hydro-fin-other', name: 'Finland Hydro', lat: 64.23, lng: 27.73, type: 'plant' as const, capacity: 3300, unit: 'MW', country: 'FIN', operator: 'Fortum/Kemijoki Oy', description: 'Aggregate of hydro on Kemijoki, Oulujoki, and other northern rivers' },

  // === Germany (5,700 MW) ===
  { id: 'hydro-deu-other', name: 'Germany Hydro', lat: 51.17, lng: 10.45, type: 'plant' as const, capacity: 5700, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of conventional and pumped-storage hydro across Bavaria and other states' },

  // === Bosnia and Herzegovina (2,100 MW) ===
  { id: 'hydro-bih-other', name: 'Bosnia Herzegovina Hydro', lat: 43.92, lng: 17.68, type: 'plant' as const, capacity: 2100, unit: 'MW', country: 'BIH', operator: 'Various', description: 'Aggregate of hydro on Neretva, Drina, and Vrbas rivers' },

  // === Serbia (3,000 MW) ===
  { id: 'hydro-srb-other', name: 'Serbia Hydro', lat: 44.02, lng: 21.01, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'SRB', operator: 'EPS', description: 'Aggregate including Djerdap I and II on the Danube and Drina River facilities' },

  // === Croatia (2,200 MW) ===
  { id: 'hydro-hrv-other', name: 'Croatia Hydro', lat: 45.10, lng: 15.20, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'HRV', operator: 'HEP', description: 'Aggregate of hydro on Drava, Cetina, and other rivers' },

  // === Greece (3,400 MW) ===
  { id: 'hydro-grc-other', name: 'Greece Hydro', lat: 39.07, lng: 21.82, type: 'plant' as const, capacity: 3400, unit: 'MW', country: 'GRC', operator: 'PPC', description: 'Aggregate of conventional and pumped-storage hydro including Acheloos and Aliakmonas systems' },

  // === Albania (2,100 MW) ===
  { id: 'hydro-alb-other', name: 'Albania Hydro', lat: 41.15, lng: 20.17, type: 'plant' as const, capacity: 2100, unit: 'MW', country: 'ALB', operator: 'KESH', description: 'Aggregate of Drin River cascade including Fierza, Koman, and Vau i Dejes dams' },

  // === Tanzania (600 MW) ===
  { id: 'hydro-tza-other', name: 'Tanzania Hydro', lat: -6.37, lng: 34.89, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'TZA', operator: 'TANESCO', description: 'Aggregate including Kidatu, Mtera, and Kihansi dams' },

  // === Ghana (1,600 MW) ===
  { id: 'hydro-gha-other', name: 'Ghana Hydro', lat: 7.95, lng: -1.02, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'GHA', operator: 'VRA', description: 'Aggregate including Akosombo and Kpong dams on the Volta River' },

  // === Cameroon (1,000 MW) ===
  { id: 'hydro-cmr-other', name: 'Cameroon Hydro', lat: 7.37, lng: 12.35, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'CMR', operator: 'Various', description: 'Aggregate including Song Loulou and Edea dams on the Sanaga River' },

  // === Uganda (1,000 MW) ===
  { id: 'hydro-uga-other', name: 'Uganda Hydro', lat: 1.37, lng: 32.29, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'UGA', operator: 'UEGCL', description: 'Aggregate including Bujagali, Kiira, and Nalubaale dams on the Nile' },

  // === Philippines (3,800 MW) ===
  { id: 'hydro-phl-other', name: 'Philippines Hydro', lat: 12.88, lng: 121.77, type: 'plant' as const, capacity: 3800, unit: 'MW', country: 'PHL', operator: 'Various', description: 'Aggregate of hydro including Angat, Kalayaan pumped-storage, and Agus complex in Mindanao' },

  // === Australia (8,800 MW) ===
  { id: 'hydro-aus-other', name: 'Australia Hydro', lat: -33.87, lng: 151.21, type: 'plant' as const, capacity: 8800, unit: 'MW', country: 'AUS', operator: 'Snowy Hydro/Various', description: 'Aggregate including Snowy Mountains scheme, Tasmania hydro, and Tumut stations' },

  // === North Korea (5,000 MW) ===
  { id: 'hydro-prk-other', name: 'North Korea Hydro', lat: 40.03, lng: 127.51, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'PRK', operator: 'Various', description: 'Aggregate of hydro on Yalu, Tumen, and other rivers' },

  // === Uzbekistan (1,900 MW) ===
  { id: 'hydro-uzb-other', name: 'Uzbekistan Hydro', lat: 41.31, lng: 69.28, type: 'plant' as const, capacity: 1900, unit: 'MW', country: 'UZB', operator: 'Uzbekhydroenergo', description: 'Aggregate including Charvak and other dams on Chirchiq and Syr Darya rivers' },

  // === Iraq (2,500 MW) ===
  { id: 'hydro-irq-other', name: 'Iraq Hydro', lat: 33.31, lng: 44.37, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'IRQ', operator: 'Ministry of Electricity', description: 'Aggregate including Mosul Dam, Haditha Dam, and Darbandikhan on Tigris and Euphrates' },

  // === Angola (3,200 MW) ===
  { id: 'hydro-ago-other', name: 'Angola Hydro', lat: -12.37, lng: 17.54, type: 'plant' as const, capacity: 3200, unit: 'MW', country: 'AGO', operator: 'PRODEL/Various', description: 'Aggregate including Lauca, Cambambe, and Capanda dams on the Kwanza River' },

  // === Sudan (1,600 MW) ===
  { id: 'hydro-sdn-other', name: 'Sudan Hydro', lat: 15.60, lng: 32.53, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'SDN', operator: 'Dam Implementation Unit', description: 'Aggregate including Merowe Dam, Roseires Dam, and Sennar Dam on the Nile' },

  // === Bhutan (2,300 MW) ===
  { id: 'hydro-btn-other', name: 'Bhutan Hydro', lat: 27.51, lng: 90.43, type: 'plant' as const, capacity: 2300, unit: 'MW', country: 'BTN', operator: 'DGPC/Various', description: 'Aggregate including Tala, Chhukha, and Mangdechhu hydroelectric projects' },

  // === Other World (162,201 MW) ===
  { id: 'hydro-world-other', name: 'Rest of World Hydro', lat: 20.00, lng: 0.00, type: 'plant' as const, capacity: 162201, unit: 'MW', country: 'OTH', operator: 'Various', description: 'Aggregate of remaining global hydroelectric capacity across all other countries including Central Asia, Southeast Asia, Central America, and Africa' },

  // === Zimbabwe (2,100 MW) ===
  { id: 'hydro-zwe-agg', name: 'Zimbabwe Hydroelectric Plants', lat: -19.02, lng: 29.15, type: 'plant' as const, capacity: 2100, unit: 'MW', country: 'ZWE', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Zimbabwe' },

  // === Panama (1,700 MW) ===
  { id: 'hydro-pan-agg', name: 'Panama Hydroelectric Plants', lat: 8.54, lng: -80.78, type: 'plant' as const, capacity: 1700, unit: 'MW', country: 'PAN', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Panama' },

  // === Sri Lanka (1,700 MW) ===
  { id: 'hydro-lka-agg', name: 'Sri Lanka Hydroelectric Plants', lat: 7.87, lng: 80.77, type: 'plant' as const, capacity: 1700, unit: 'MW', country: 'LKA', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Sri Lanka' },

  // === Latvia (1,500 MW) ===
  { id: 'hydro-lva-agg', name: 'Latvia Hydroelectric Plants', lat: 56.88, lng: 24.60, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'LVA', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Latvia' },

  // === Cambodia (1,400 MW) ===
  { id: 'hydro-khm-agg', name: 'Cambodia Hydroelectric Plants', lat: 12.57, lng: 104.99, type: 'plant' as const, capacity: 1400, unit: 'MW', country: 'KHM', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Cambodia' },

  // === Guinea (1,200 MW) ===
  { id: 'hydro-gin-agg', name: 'Guinea Hydroelectric Plants', lat: 9.95, lng: -9.70, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'GIN', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Guinea' },

  // === Guatemala (1,100 MW) ===
  { id: 'hydro-gtm-agg', name: 'Guatemala Hydroelectric Plants', lat: 15.78, lng: -90.23, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'GTM', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Guatemala' },

  // === Bolivia (800 MW) ===
  { id: 'hydro-bol-agg', name: 'Bolivia Hydroelectric Plants', lat: -16.29, lng: -63.59, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'BOL', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Bolivia' },

  // === Honduras (700 MW) ===
  { id: 'hydro-hnd-agg', name: 'Honduras Hydroelectric Plants', lat: 15.20, lng: -86.24, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'HND', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Honduras' },

  // === Afghanistan (700 MW) ===
  { id: 'hydro-afg-agg', name: 'Afghanistan Hydroelectric Plants', lat: 33.94, lng: 67.71, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'AFG', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Afghanistan' },

  // === Montenegro (650 MW) ===
  { id: 'hydro-mne-agg', name: 'Montenegro Hydroelectric Plants', lat: 42.71, lng: 19.37, type: 'plant' as const, capacity: 650, unit: 'MW', country: 'MNE', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Montenegro' },

  // === North Macedonia (600 MW) ===
  { id: 'hydro-mkd-agg', name: 'North Macedonia Hydroelectric Plants', lat: 41.51, lng: 21.75, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'MKD', operator: 'Various', description: 'Aggregate of hydroelectric power generation across North Macedonia' },

  // === Dominican Republic (600 MW) ===
  { id: 'hydro-dom-agg', name: 'Dominican Republic Hydroelectric Plants', lat: 18.74, lng: -70.16, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'DOM', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Dominican Republic' },

  // === El Salvador (460 MW) ===
  { id: 'hydro-slv-agg', name: 'El Salvador Hydroelectric Plants', lat: 13.79, lng: -88.90, type: 'plant' as const, capacity: 460, unit: 'MW', country: 'SLV', operator: 'Various', description: 'Aggregate of hydroelectric power generation across El Salvador' },

  // === Namibia (350 MW) ===
  { id: 'hydro-nam-agg', name: 'Namibia Hydroelectric Plants', lat: -22.96, lng: 18.49, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'NAM', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Namibia' },

  // === Malawi (350 MW) ===
  { id: 'hydro-mwi-agg', name: 'Malawi Hydroelectric Plants', lat: -13.25, lng: 34.30, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'MWI', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Malawi' },

  // === Papua New Guinea (300 MW) ===
  { id: 'hydro-png-agg', name: 'Papua New Guinea Hydroelectric Plants', lat: -6.31, lng: 143.96, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'PNG', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Papua New Guinea' },

  // === Rwanda (250 MW) ===
  { id: 'hydro-rwa-agg', name: 'Rwanda Hydroelectric Plants', lat: -1.94, lng: 29.87, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'RWA', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Rwanda' },

  // === Madagascar (170 MW) ===
  { id: 'hydro-mdg-agg', name: 'Madagascar Hydroelectric Plants', lat: -18.77, lng: 46.87, type: 'plant' as const, capacity: 170, unit: 'MW', country: 'MDG', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Madagascar' },

  // === Cuba (100 MW) ===
  { id: 'hydro-cub-agg', name: 'Cuba Hydroelectric Plants', lat: 21.52, lng: -77.78, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'CUB', operator: 'Various', description: 'Aggregate of hydroelectric power generation across Cuba' },
];
