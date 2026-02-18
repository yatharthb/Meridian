import { Location } from '../../types';

export const windLocations: Location[] = [
  // === United States (150,000 MW) ===
  { id: 'wind-roscoe', name: 'Roscoe Wind Farm', lat: 32.45, lng: -100.53, type: 'plant' as const, capacity: 781, unit: 'MW', country: 'USA', operator: 'E.ON', description: 'One of the largest onshore wind farms in the world, Nolan County TX' },
  { id: 'wind-horse-hollow', name: 'Horse Hollow Wind Energy Center', lat: 32.18, lng: -100.28, type: 'plant' as const, capacity: 736, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Major wind farm spanning Taylor and Nolan counties TX' },
  { id: 'wind-capricorn-ridge', name: 'Capricorn Ridge Wind Farm', lat: 32.15, lng: -100.68, type: 'plant' as const, capacity: 662, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Large wind farm in Sterling and Coke counties TX' },
  { id: 'wind-sweetwater', name: 'Sweetwater Wind Farm', lat: 32.42, lng: -100.39, type: 'plant' as const, capacity: 585, unit: 'MW', country: 'USA', operator: 'Infigen Energy', description: 'Multi-phase wind project in Nolan County TX' },
  { id: 'wind-buffalo-gap', name: 'Buffalo Gap Wind Farm', lat: 32.28, lng: -100.08, type: 'plant' as const, capacity: 523, unit: 'MW', country: 'USA', operator: 'AES', description: 'Three-phase wind project in Taylor County TX' },
  { id: 'wind-panhandle', name: 'Panhandle Wind Ranch', lat: 35.52, lng: -100.40, type: 'plant' as const, capacity: 458, unit: 'MW', country: 'USA', operator: 'Apex Clean Energy', description: 'Wind energy project in the Texas Panhandle' },
  { id: 'wind-tx-aggregate', name: 'Texas Other Wind Farms', lat: 31.97, lng: -99.90, type: 'plant' as const, capacity: 42255, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining Texas wind installations including West Texas, Gulf Coast, and Panhandle projects' },
  { id: 'wind-macksburg', name: 'Macksburg Wind Farm', lat: 41.18, lng: -94.18, type: 'plant' as const, capacity: 375, unit: 'MW', country: 'USA', operator: 'MidAmerican Energy', description: 'Large wind project in Madison County IA' },
  { id: 'wind-pioneer-prairie', name: 'Pioneer Prairie Wind Farm', lat: 43.18, lng: -93.58, type: 'plant' as const, capacity: 303, unit: 'MW', country: 'USA', operator: 'Alliant Energy', description: 'Wind farm in Mitchell and Worth counties IA' },
  { id: 'wind-highland-ia', name: 'Highland Wind Farm', lat: 42.62, lng: -95.37, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'MidAmerican Energy', description: 'Wind project in O\'Brien County IA' },
  { id: 'wind-ia-aggregate', name: 'Iowa Other Wind Farms', lat: 41.88, lng: -93.10, type: 'plant' as const, capacity: 13022, unit: 'MW', country: 'USA', operator: 'Various (MidAmerican, Alliant, NextEra)', description: 'Aggregate of remaining Iowa wind installations, second-largest wind state' },
  { id: 'wind-traverse', name: 'Traverse Wind Energy Center', lat: 36.50, lng: -99.50, type: 'plant' as const, capacity: 998, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'One of the largest onshore wind projects in the US, Custer and Blaine counties OK' },
  { id: 'wind-frontier-ok', name: 'Frontier Wind Farm', lat: 36.82, lng: -100.13, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind farm in Beaver County OK' },
  { id: 'wind-western-trail', name: 'Western Trail Wind Farm', lat: 36.12, lng: -99.43, type: 'plant' as const, capacity: 367, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind project in Roger Mills County OK' },
  { id: 'wind-sundance-ok', name: 'Sundance Wind Farm', lat: 36.30, lng: -99.70, type: 'plant' as const, capacity: 299, unit: 'MW', country: 'USA', operator: 'Enel Green Power', description: 'Wind project in western Oklahoma' },
  { id: 'wind-north-central-ok', name: 'North Central Wind Energy Facilities', lat: 36.55, lng: -97.80, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various', description: 'Multiple wind facilities in north-central Oklahoma' },
  { id: 'wind-ok-aggregate', name: 'Oklahoma Other Wind Farms', lat: 35.47, lng: -97.52, type: 'plant' as const, capacity: 10636, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining Oklahoma wind installations across western and central regions' },
  { id: 'wind-flat-ridge', name: 'Flat Ridge Wind Farm', lat: 37.38, lng: -97.83, type: 'plant' as const, capacity: 470, unit: 'MW', country: 'USA', operator: 'BP Wind Energy', description: 'Large wind project in Barber and Harper counties KS' },
  { id: 'wind-smoky-hills', name: 'Smoky Hills Wind Farm', lat: 38.90, lng: -98.08, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'Enel Green Power', description: 'Wind farm in Ellsworth and Lincoln counties KS' },
  { id: 'wind-meridian-way', name: 'Meridian Way Wind Farm', lat: 39.05, lng: -97.60, type: 'plant' as const, capacity: 201, unit: 'MW', country: 'USA', operator: 'Sempra Energy', description: 'Wind project in Cloud County KS' },
  { id: 'wind-gray-county', name: 'Gray County Wind Farm', lat: 37.73, lng: -100.43, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'EDP Renewables', description: 'Wind farm in southwestern Kansas' },
  { id: 'wind-spearville', name: 'Spearville Wind Farm', lat: 37.85, lng: -99.75, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'EDP Renewables', description: 'Wind project in Ford County KS' },
  { id: 'wind-ks-aggregate', name: 'Kansas Other Wind Farms', lat: 38.50, lng: -98.77, type: 'plant' as const, capacity: 7829, unit: 'MW', country: 'USA', operator: 'Various (Enel, NextEra, Evergy)', description: 'Aggregate of remaining Kansas wind installations across western and central regions' },
  { id: 'wind-twin-groves', name: 'Twin Groves Wind Farm', lat: 40.43, lng: -88.93, type: 'plant' as const, capacity: 396, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Large wind farm in McLean County IL' },
  { id: 'wind-streator-cayuga', name: 'Streator Cayuga Ridge South', lat: 41.00, lng: -88.80, type: 'plant' as const, capacity: 240, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Wind project in Livingston County IL' },
  { id: 'wind-grand-ridge', name: 'Grand Ridge Wind Farm', lat: 41.22, lng: -88.78, type: 'plant' as const, capacity: 210, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Wind project in LaSalle County IL' },
  { id: 'wind-bishop-hill', name: 'Bishop Hill Wind Farm', lat: 41.18, lng: -90.05, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Wind farm in Henry County IL' },
  { id: 'wind-harvest-il', name: 'Harvest Wind Farm', lat: 41.33, lng: -89.43, type: 'plant' as const, capacity: 143, unit: 'MW', country: 'USA', operator: 'Horizon Wind Energy', description: 'Wind project in Bureau County IL' },
  { id: 'wind-rail-splitter', name: 'Rail Splitter Wind Farm', lat: 40.53, lng: -89.48, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'Horizon Wind Energy', description: 'Wind farm in Tazewell and Logan counties IL' },
  { id: 'wind-il-aggregate', name: 'Illinois Other Wind Farms', lat: 40.63, lng: -89.40, type: 'plant' as const, capacity: 6211, unit: 'MW', country: 'USA', operator: 'Various (Invenergy, EDP, Apex)', description: 'Aggregate of remaining Illinois wind installations across central and northern regions' },
  { id: 'wind-alta', name: 'Alta Wind Energy Center', lat: 35.08, lng: -118.37, type: 'plant' as const, capacity: 1548, unit: 'MW', country: 'USA', operator: 'Terra-Gen', description: 'Largest wind farm in the US, Tehachapi Mountains in Kern County CA' },
  { id: 'wind-tehachapi', name: 'Tehachapi Pass Wind Farm', lat: 35.13, lng: -118.38, type: 'plant' as const, capacity: 690, unit: 'MW', country: 'USA', operator: 'Various', description: 'Historic wind resource area in Tehachapi Pass CA' },
  { id: 'wind-san-gorgonio', name: 'San Gorgonio Pass Wind Farm', lat: 33.93, lng: -116.58, type: 'plant' as const, capacity: 615, unit: 'MW', country: 'USA', operator: 'Various', description: 'Major wind resource area near Palm Springs CA' },
  { id: 'wind-ca-aggregate', name: 'California Other Wind Farms', lat: 36.78, lng: -119.42, type: 'plant' as const, capacity: 3447, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining California wind installations including Altamont Pass and Solano County' },
  { id: 'wind-rush-creek', name: 'Rush Creek Wind Farm', lat: 39.42, lng: -103.35, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Largest wind farm in Colorado, Elbert and Lincoln counties' },
  { id: 'wind-cedar-creek', name: 'Cedar Creek Wind Farm', lat: 40.62, lng: -104.08, type: 'plant' as const, capacity: 551, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Large wind project in Weld County CO' },
  { id: 'wind-cheyenne-ridge', name: 'Cheyenne Ridge Wind Farm', lat: 38.95, lng: -103.10, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Major wind project on Colorado\'s eastern plains' },
  { id: 'wind-peetz-table', name: 'Peetz Table Wind Farm', lat: 40.97, lng: -103.15, type: 'plant' as const, capacity: 401, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind farm in Logan County CO' },
  { id: 'wind-co-aggregate', name: 'Colorado Other Wind Farms', lat: 39.55, lng: -105.78, type: 'plant' as const, capacity: 3148, unit: 'MW', country: 'USA', operator: 'Various (Xcel, NextEra, Vestas)', description: 'Aggregate of remaining Colorado wind installations on the eastern plains' },
  { id: 'wind-lake-benton', name: 'Lake Benton Wind Farm', lat: 44.27, lng: -96.30, type: 'plant' as const, capacity: 213, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Pioneer large-scale wind farm in Lincoln County MN' },
  { id: 'wind-nobles', name: 'Nobles Wind Farm', lat: 43.70, lng: -95.72, type: 'plant' as const, capacity: 201, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Wind project in Nobles County MN' },
  { id: 'wind-odell', name: 'Odell Wind Farm', lat: 44.00, lng: -95.77, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Wind farm in Cottonwood County MN' },
  { id: 'wind-blazing-star', name: 'Blazing Star Wind Farm', lat: 43.78, lng: -94.52, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Wind project in Martin and Jackson counties MN' },
  { id: 'wind-freeborn', name: 'Freeborn Wind Farm', lat: 43.55, lng: -93.35, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Wind farm in Freeborn County MN' },
  { id: 'wind-mn-aggregate', name: 'Minnesota Other Wind Farms', lat: 46.73, lng: -94.69, type: 'plant' as const, capacity: 3486, unit: 'MW', country: 'USA', operator: 'Various (Xcel, NextEra, EDP)', description: 'Aggregate of remaining Minnesota wind installations across southern and western regions' },
  { id: 'wind-oliver', name: 'Oliver Wind Energy Center', lat: 47.10, lng: -101.10, type: 'plant' as const, capacity: 152, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind project in Oliver County ND' },
  { id: 'wind-wilton', name: 'Wilton Wind Energy Center', lat: 47.15, lng: -100.78, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind farm near Wilton ND' },
  { id: 'wind-thunder-spirit', name: 'Thunder Spirit Wind Farm', lat: 46.75, lng: -100.50, type: 'plant' as const, capacity: 107, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind project in Morton County ND' },
  { id: 'wind-nd-aggregate', name: 'North Dakota Other Wind Farms', lat: 47.55, lng: -101.00, type: 'plant' as const, capacity: 4091, unit: 'MW', country: 'USA', operator: 'Various (NextEra, Basin Electric)', description: 'Aggregate of remaining North Dakota wind installations' },
  { id: 'wind-wy-aggregate', name: 'Wyoming Wind Farms', lat: 43.08, lng: -107.29, type: 'plant' as const, capacity: 4100, unit: 'MW', country: 'USA', operator: 'Various (PacifiCorp, NextEra, Power Company of Wyoming)', description: 'Aggregate of Wyoming wind installations including Chokecherry-Sierra Madre and Carbon County projects' },
  { id: 'wind-shepherds-flat', name: 'Shepherds Flat Wind Farm', lat: 45.37, lng: -120.15, type: 'plant' as const, capacity: 845, unit: 'MW', country: 'USA', operator: 'Caithness Energy', description: 'One of the largest wind farms in the world, Gilliam and Morrow counties OR' },
  { id: 'wind-biglow-canyon', name: 'Biglow Canyon Wind Farm', lat: 45.63, lng: -120.83, type: 'plant' as const, capacity: 450, unit: 'MW', country: 'USA', operator: 'Portland General Electric', description: 'Three-phase wind project in Sherman County OR' },
  { id: 'wind-montague', name: 'Montague Wind Farm', lat: 45.70, lng: -120.25, type: 'plant' as const, capacity: 404, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind farm in Gilliam County OR' },
  { id: 'wind-wheatridge', name: 'Wheatridge Renewable Energy Facility', lat: 45.55, lng: -119.60, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Combined wind, solar, and battery facility in Morrow County OR' },
  { id: 'wind-or-aggregate', name: 'Oregon Other Wind Farms', lat: 43.80, lng: -120.55, type: 'plant' as const, capacity: 1801, unit: 'MW', country: 'USA', operator: 'Various (PGE, PacifiCorp)', description: 'Aggregate of remaining Oregon wind installations in Columbia Plateau region' },
  { id: 'wind-meadow-lake', name: 'Meadow Lake Wind Farm', lat: 40.78, lng: -87.16, type: 'plant' as const, capacity: 801, unit: 'MW', country: 'USA', operator: 'EDP Renewables', description: 'Largest wind farm in Indiana, White County' },
  { id: 'wind-fowler-ridge', name: 'Fowler Ridge Wind Farm', lat: 40.52, lng: -87.32, type: 'plant' as const, capacity: 750, unit: 'MW', country: 'USA', operator: 'BP Wind Energy', description: 'Major wind farm in Benton County IN' },
  { id: 'wind-in-aggregate', name: 'Indiana Other Wind Farms', lat: 40.27, lng: -86.13, type: 'plant' as const, capacity: 1549, unit: 'MW', country: 'USA', operator: 'Various (EDP, BP Wind)', description: 'Aggregate of remaining Indiana wind installations in northwest counties' },
  { id: 'wind-ne-aggregate', name: 'Nebraska Wind Farms', lat: 41.49, lng: -99.90, type: 'plant' as const, capacity: 3500, unit: 'MW', country: 'USA', operator: 'Various (NextEra, Invenergy, NPPD)', description: 'Aggregate of Nebraska wind installations including Rattlesnake Creek, Thunderhead, and Grande Prairie projects' },
  { id: 'wind-sagamore', name: 'Sagamore Wind Farm', lat: 34.48, lng: -104.22, type: 'plant' as const, capacity: 522, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Large wind project in Roosevelt County NM' },
  { id: 'wind-western-spirit', name: 'Pattern Western Spirit Wind', lat: 34.30, lng: -105.60, type: 'plant' as const, capacity: 377, unit: 'MW', country: 'USA', operator: 'Pattern Energy', description: 'Wind project connected to the SunZia transmission line NM' },
  { id: 'wind-broadview', name: 'Broadview Energy', lat: 34.80, lng: -103.80, type: 'plant' as const, capacity: 324, unit: 'MW', country: 'USA', operator: 'Pattern Energy', description: 'Wind project in Quay and Curry counties NM' },
  { id: 'wind-el-cabo', name: 'El Cabo Wind Farm', lat: 34.92, lng: -104.35, type: 'plant' as const, capacity: 298, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind farm in Guadalupe County NM' },
  { id: 'wind-nm-aggregate', name: 'New Mexico Other Wind Farms', lat: 34.52, lng: -105.87, type: 'plant' as const, capacity: 1679, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining New Mexico wind installations across eastern regions' },
  { id: 'wind-wa-aggregate', name: 'Washington Wind Farms', lat: 47.75, lng: -120.74, type: 'plant' as const, capacity: 3300, unit: 'MW', country: 'USA', operator: 'Various (Puget Sound Energy, PacifiCorp)', description: 'Aggregate of Washington wind installations including Hopkins Ridge, Wild Horse, and Kittitas Valley projects' },
  { id: 'wind-cvow', name: 'Coastal Virginia Offshore Wind', lat: 36.88, lng: -75.50, type: 'plant' as const, capacity: 2600, unit: 'MW', country: 'USA', operator: 'Dominion Energy', description: 'Largest offshore wind project in the US, 27 miles off Virginia Beach' },
  { id: 'wind-va-aggregate', name: 'Virginia Other Wind Farms', lat: 37.43, lng: -78.66, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining Virginia wind installations including Appalachian ridge projects' },
  { id: 'wind-mi-aggregate', name: 'Michigan Wind Farms', lat: 44.31, lng: -85.60, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'USA', operator: 'Various (DTE, Consumers Energy)', description: 'Aggregate of Michigan wind installations including Gratiot, Huron, and Tuscola county projects' },
  { id: 'wind-south-fork', name: 'South Fork Wind Farm', lat: 41.07, lng: -72.15, type: 'plant' as const, capacity: 130, unit: 'MW', country: 'USA', operator: 'Orsted', description: 'Offshore wind farm south of Rhode Island serving Long Island NY' },
  { id: 'wind-ny-aggregate', name: 'New York Other Wind Farms', lat: 42.17, lng: -74.95, type: 'plant' as const, capacity: 2070, unit: 'MW', country: 'USA', operator: 'Various (Avangrid, EDP, Invenergy)', description: 'Aggregate of remaining New York wind installations including Maple Ridge, Fenner, and Altona projects' },
  { id: 'wind-prairie-winds-sd', name: 'Prairie Winds Wind Farm', lat: 44.30, lng: -99.85, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Wind project in central South Dakota' },
  { id: 'wind-tatanka', name: 'Tatanka Wind Farm', lat: 45.87, lng: -97.35, type: 'plant' as const, capacity: 180, unit: 'MW', country: 'USA', operator: 'Acciona Energy', description: 'Wind farm spanning South Dakota and North Dakota border' },
  { id: 'wind-crocker', name: 'Crocker Wind Farm', lat: 43.60, lng: -99.30, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'Geronimo Energy', description: 'Wind project in Clark County SD' },
  { id: 'wind-sd-aggregate', name: 'South Dakota Other Wind Farms', lat: 43.97, lng: -99.90, type: 'plant' as const, capacity: 1220, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining South Dakota wind installations' },
  { id: 'wind-vineyard', name: 'Vineyard Wind 1', lat: 41.18, lng: -70.58, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Avangrid/Copenhagen Infrastructure Partners', description: 'First commercial-scale offshore wind farm in the US, south of Martha\'s Vineyard' },
  { id: 'wind-ma-aggregate', name: 'Massachusetts Other Wind Farms', lat: 42.41, lng: -71.38, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining Massachusetts wind installations including onshore and planned offshore capacity' },
  { id: 'wind-pa-aggregate', name: 'Pennsylvania Wind Farms', lat: 41.20, lng: -77.19, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'USA', operator: 'Various (EDP, Iberdrola, NextEra)', description: 'Aggregate of Pennsylvania wind installations along Appalachian ridges including Locust Ridge and Forward projects' },
  { id: 'wind-mo-aggregate', name: 'Missouri Wind Farms', lat: 38.57, lng: -92.60, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'USA', operator: 'Various (Ameren, Evergy)', description: 'Aggregate of Missouri wind installations in northwest region including Atchison and Nodaway county projects' },
  { id: 'wind-me-aggregate', name: 'Maine Wind Farms', lat: 45.25, lng: -69.45, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'USA', operator: 'Various (Avangrid, First Wind)', description: 'Aggregate of Maine wind installations including Kibby, Stetson, and Bingham projects' },
  { id: 'wind-rim-rock', name: 'Rim Rock Wind Farm', lat: 47.82, lng: -110.75, type: 'plant' as const, capacity: 189, unit: 'MW', country: 'USA', operator: 'NaturEner', description: 'Wind farm near the Rocky Mountain Front MT' },
  { id: 'wind-judith-gap', name: 'Judith Gap Wind Farm', lat: 46.70, lng: -109.75, type: 'plant' as const, capacity: 135, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Montana\'s first large-scale wind farm in Wheatland County' },
  { id: 'wind-mt-aggregate', name: 'Montana Other Wind Farms', lat: 46.88, lng: -110.36, type: 'plant' as const, capacity: 676, unit: 'MW', country: 'USA', operator: 'Various (NaturEner, NorthWestern Energy)', description: 'Aggregate of remaining Montana wind installations along the Rocky Mountain Front and central plains' },
  { id: 'wind-oh-aggregate', name: 'Ohio Wind Farms', lat: 40.42, lng: -82.91, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'USA', operator: 'Various (Apex, EDP, Amazon)', description: 'Aggregate of Ohio wind installations including Timber Road, Blue Creek, and Northwest Ohio projects' },
  { id: 'wind-glacier-hills', name: 'Glacier Hills Wind Farm', lat: 43.82, lng: -88.25, type: 'plant' as const, capacity: 162, unit: 'MW', country: 'USA', operator: 'We Energies', description: 'Wind farm in Columbia and Dodge counties WI' },
  { id: 'wind-forward', name: 'Forward Wind Energy Center', lat: 43.38, lng: -88.87, type: 'plant' as const, capacity: 129, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Wind project in Dodge and Fond du Lac counties WI' },
  { id: 'wind-wi-aggregate', name: 'Wisconsin Other Wind Farms', lat: 43.78, lng: -88.79, type: 'plant' as const, capacity: 609, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining Wisconsin wind installations' },
  { id: 'wind-wv-aggregate', name: 'West Virginia Wind Farms', lat: 38.60, lng: -80.45, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various (AES, NextEra)', description: 'Aggregate of West Virginia wind installations along Allegheny Mountain ridges including Beech Ridge and Laurel Mountain' },
  { id: 'wind-nc-aggregate', name: 'North Carolina Wind Farms', lat: 35.76, lng: -79.02, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various (Amazon, Avangrid)', description: 'Aggregate of North Carolina wind installations including Amazon Wind Farm projects' },
  { id: 'wind-granite-reliable', name: 'Granite Reliable Wind Farm', lat: 44.13, lng: -71.72, type: 'plant' as const, capacity: 99, unit: 'MW', country: 'USA', operator: 'Brookfield Renewable', description: 'Wind farm in Coos County NH' },
  { id: 'wind-lempster', name: 'Lempster Wind Farm', lat: 43.20, lng: -72.20, type: 'plant' as const, capacity: 24, unit: 'MW', country: 'USA', operator: 'Iberdrola Renewables', description: 'Community wind farm in Sullivan County NH' },
  { id: 'wind-nh-aggregate', name: 'New Hampshire Other Wind Farms', lat: 43.19, lng: -71.57, type: 'plant' as const, capacity: 127, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of remaining New Hampshire wind installations' },
  { id: 'wind-block-island', name: 'Block Island Wind Farm', lat: 41.13, lng: -71.52, type: 'plant' as const, capacity: 30, unit: 'MW', country: 'USA', operator: 'Orsted', description: 'America\'s first offshore wind farm, five turbines off Block Island RI' },

  // === China (561,000 MW) ===
  { id: 'wind-chn-jiuquan', name: 'Gansu Jiuquan Wind Power Base', lat: 39.77, lng: 98.50, type: 'plant' as const, capacity: 20000, unit: 'MW', country: 'CHN', operator: 'Various/State Power Investment', description: 'World\'s largest wind power base in Gansu Province\'s Hexi Corridor' },
  { id: 'wind-chn-hami', name: 'Hami Wind Farm Cluster', lat: 42.83, lng: 93.51, type: 'plant' as const, capacity: 13000, unit: 'MW', country: 'CHN', operator: 'Various/Goldwind', description: 'Major wind base in Xinjiang\'s Hami Prefecture' },
  { id: 'wind-chn-ulanqab', name: 'Inner Mongolia Ulanqab', lat: 41.00, lng: 113.10, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'CHN', operator: 'Various/Longyuan Power', description: 'Wind farm complex in Ulanqab, Inner Mongolia' },
  { id: 'wind-chn-zhangbei', name: 'Zhangbei Wind Farm', lat: 41.15, lng: 114.70, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'CHN', operator: 'China Huadian', description: 'Wind project in Hebei Province near Beijing' },
  { id: 'wind-chn-dabancheng', name: 'Dabancheng Wind Farm', lat: 43.35, lng: 88.32, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'One of China\'s first and most visible wind farms near Urumqi, Xinjiang' },
  { id: 'wind-chn-inner-mongolia', name: 'Inner Mongolia Aggregate', lat: 44.00, lng: 113.00, type: 'plant' as const, capacity: 150000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of wind farms across Inner Mongolia, China\'s largest wind province' },
  { id: 'wind-chn-xinjiang', name: 'Xinjiang Aggregate', lat: 41.50, lng: 86.00, type: 'plant' as const, capacity: 40000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of remaining wind farms across Xinjiang' },
  { id: 'wind-chn-hebei', name: 'Hebei Aggregate', lat: 39.00, lng: 115.50, type: 'plant' as const, capacity: 35000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of onshore and offshore wind across Hebei' },
  { id: 'wind-chn-shandong', name: 'Shandong Aggregate', lat: 36.50, lng: 118.50, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of onshore and offshore wind across Shandong' },
  { id: 'wind-chn-jiangsu', name: 'Jiangsu Offshore', lat: 33.50, lng: 121.00, type: 'plant' as const, capacity: 18000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of offshore wind farms in Jiangsu waters' },
  { id: 'wind-chn-yunnan', name: 'Yunnan Aggregate', lat: 25.00, lng: 102.70, type: 'plant' as const, capacity: 15000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of high-altitude wind farms in Yunnan' },
  { id: 'wind-chn-guangdong', name: 'Guangdong Offshore', lat: 22.00, lng: 115.00, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'CHN', operator: 'Various/CGN', description: 'Aggregate of offshore wind farms off Guangdong coast' },
  { id: 'wind-chn-other', name: 'Other China Wind', lat: 35.86, lng: 104.20, type: 'plant' as const, capacity: 222000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of remaining wind capacity across all other provinces' },

  // === Germany (73,000 MW) ===
  { id: 'wind-deu-gode', name: 'Gode Wind 1 & 2', lat: 54.05, lng: 7.02, type: 'plant' as const, capacity: 582, unit: 'MW', country: 'DEU', operator: 'Orsted', description: 'Offshore wind farm in North Sea, 45km north of Norderney' },
  { id: 'wind-deu-borkum', name: 'Borkum Riffgrund 1 & 2', lat: 53.97, lng: 6.52, type: 'plant' as const, capacity: 762, unit: 'MW', country: 'DEU', operator: 'Orsted', description: 'Offshore wind farm north of Borkum island' },
  { id: 'wind-deu-hohe-see', name: 'Hohe See', lat: 54.43, lng: 6.30, type: 'plant' as const, capacity: 497, unit: 'MW', country: 'DEU', operator: 'EnBW', description: 'Offshore wind farm in German North Sea' },
  { id: 'wind-deu-arkona', name: 'Arkona', lat: 54.78, lng: 13.77, type: 'plant' as const, capacity: 385, unit: 'MW', country: 'DEU', operator: 'RWE/Equinor', description: 'Offshore wind farm in Baltic Sea northeast of Rugen' },
  { id: 'wind-deu-trianel', name: 'Trianel Windpark Borkum', lat: 54.00, lng: 6.25, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'DEU', operator: 'Trianel', description: 'Offshore wind farm in North Sea' },
  { id: 'wind-deu-schleswig', name: 'Schleswig-Holstein Onshore', lat: 54.22, lng: 9.70, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of onshore wind in Germany\'s windiest state' },
  { id: 'wind-deu-lower-saxony', name: 'Lower Saxony Onshore', lat: 52.64, lng: 9.85, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of onshore wind in Lower Saxony' },
  { id: 'wind-deu-brandenburg', name: 'Brandenburg Onshore', lat: 52.41, lng: 13.07, type: 'plant' as const, capacity: 8500, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of onshore wind around Berlin' },
  { id: 'wind-deu-north-sea', name: 'North Sea Offshore Aggregate', lat: 54.30, lng: 7.00, type: 'plant' as const, capacity: 5574, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of remaining North Sea offshore wind' },
  { id: 'wind-deu-other', name: 'Other Germany Wind', lat: 51.17, lng: 10.45, type: 'plant' as const, capacity: 37500, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of remaining onshore and offshore wind across Germany' },

  // === India (46,000 MW) ===
  { id: 'wind-ind-jaisalmer', name: 'Jaisalmer Wind Park', lat: 26.92, lng: 70.90, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'IND', operator: 'Various/Suzlon', description: 'One of world\'s largest wind farms in Rajasthan desert' },
  { id: 'wind-ind-muppandal', name: 'Muppandal Wind Farm', lat: 8.17, lng: 77.52, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'IND', operator: 'Various', description: 'Major wind farm at Aralvaimozhi pass, Tamil Nadu' },
  { id: 'wind-ind-tamil-nadu', name: 'Tamil Nadu Aggregate', lat: 10.50, lng: 78.00, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'IND', operator: 'Various/Suzlon/Siemens Gamesa', description: 'Aggregate of wind farms across Tamil Nadu, India\'s leading wind state' },
  { id: 'wind-ind-gujarat', name: 'Gujarat Aggregate', lat: 22.00, lng: 70.00, type: 'plant' as const, capacity: 9000, unit: 'MW', country: 'IND', operator: 'Various/Adani/Tata', description: 'Aggregate of onshore and offshore wind across Gujarat' },
  { id: 'wind-ind-karnataka', name: 'Karnataka Aggregate', lat: 15.00, lng: 76.00, type: 'plant' as const, capacity: 5200, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of wind farms in Karnataka' },
  { id: 'wind-ind-rajasthan', name: 'Rajasthan Aggregate', lat: 27.00, lng: 72.00, type: 'plant' as const, capacity: 6700, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of wind farms across Rajasthan' },
  { id: 'wind-ind-maharashtra', name: 'Maharashtra Aggregate', lat: 19.00, lng: 74.00, type: 'plant' as const, capacity: 5500, unit: 'MW', country: 'IND', operator: 'Various/Suzlon', description: 'Aggregate of wind farms in Maharashtra' },
  { id: 'wind-ind-other', name: 'Other India Wind', lat: 20.59, lng: 78.96, type: 'plant' as const, capacity: 6500, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of remaining wind in Andhra Pradesh, Madhya Pradesh, Kerala, and other states' },

  // === Spain (30,000 MW) ===
  { id: 'wind-esp-andevalo', name: 'El Andevalo', lat: 37.58, lng: -7.02, type: 'plant' as const, capacity: 292, unit: 'MW', country: 'ESP', operator: 'Iberdrola', description: 'Large wind complex in Huelva, Andalusia' },
  { id: 'wind-esp-tarifa', name: 'Tarifa Wind Farms', lat: 36.02, lng: -5.60, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'ESP', operator: 'Various', description: 'Historic wind farms at Strait of Gibraltar' },
  { id: 'wind-esp-galicia', name: 'Galicia Aggregate', lat: 42.90, lng: -8.00, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'ESP', operator: 'Various/Naturgy', description: 'Aggregate of wind farms in Galicia, Spain\'s windiest region' },
  { id: 'wind-esp-castilla-leon', name: 'Castilla y Leon Aggregate', lat: 41.65, lng: -4.72, type: 'plant' as const, capacity: 6500, unit: 'MW', country: 'ESP', operator: 'Various/Iberdrola', description: 'Aggregate of wind in Castilla y Leon' },
  { id: 'wind-esp-aragon', name: 'Aragon Aggregate', lat: 41.60, lng: -0.90, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'ESP', operator: 'Various/EDP', description: 'Aggregate of wind farms in Aragon' },
  { id: 'wind-esp-other', name: 'Other Spain Wind', lat: 40.46, lng: -3.75, type: 'plant' as const, capacity: 13708, unit: 'MW', country: 'ESP', operator: 'Various', description: 'Aggregate of remaining wind across Andalusia, Castilla-La Mancha, Navarra, and other regions' },

  // === Brazil (34,000 MW) ===
  { id: 'wind-bra-alto-sertao', name: 'Complexo Eolico Alto Sertao', lat: -13.50, lng: -41.00, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'BRA', operator: 'Renova Energia', description: 'Large wind complex in Bahia' },
  { id: 'wind-bra-lagoa-ventos', name: 'Complexo Eolico Lagoa dos Ventos', lat: -8.42, lng: -41.33, type: 'plant' as const, capacity: 716, unit: 'MW', country: 'BRA', operator: 'Enel Green Power', description: 'One of largest wind complexes in South America, Piaui' },
  { id: 'wind-bra-rn', name: 'Rio Grande do Norte Aggregate', lat: -5.80, lng: -36.60, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of wind in Brazil\'s leading wind state' },
  { id: 'wind-bra-bahia', name: 'Bahia Aggregate', lat: -12.97, lng: -41.39, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of wind farms across Bahia' },
  { id: 'wind-bra-piaui', name: 'Piaui Aggregate', lat: -7.00, lng: -42.00, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of wind in Piaui' },
  { id: 'wind-bra-other', name: 'Other Brazil Wind', lat: -14.24, lng: -51.93, type: 'plant' as const, capacity: 12984, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of remaining wind in Ceara, Pernambuco, Rio Grande do Sul, and other states' },

  // === United Kingdom (32,000 MW) ===
  { id: 'wind-gbr-hornsea', name: 'Hornsea 1 & 2', lat: 53.88, lng: 1.80, type: 'plant' as const, capacity: 2652, unit: 'MW', country: 'GBR', operator: 'Orsted', description: 'World\'s largest offshore wind farm complex in North Sea off Yorkshire' },
  { id: 'wind-gbr-dogger-bank', name: 'Dogger Bank A & B', lat: 54.75, lng: 2.00, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'GBR', operator: 'SSE/Equinor', description: 'Under construction, will be world\'s largest offshore wind farm' },
  { id: 'wind-gbr-east-anglia', name: 'East Anglia ONE', lat: 52.25, lng: 2.50, type: 'plant' as const, capacity: 714, unit: 'MW', country: 'GBR', operator: 'ScottishPower Renewables', description: 'Offshore wind farm off Suffolk coast' },
  { id: 'wind-gbr-london-array', name: 'London Array', lat: 51.63, lng: 1.50, type: 'plant' as const, capacity: 630, unit: 'MW', country: 'GBR', operator: 'RWE/Masdar', description: 'Major offshore wind farm in outer Thames Estuary' },
  { id: 'wind-gbr-walney', name: 'Walney Extension', lat: 54.03, lng: -3.55, type: 'plant' as const, capacity: 659, unit: 'MW', country: 'GBR', operator: 'Orsted', description: 'Offshore wind farm in Irish Sea off Cumbria' },
  { id: 'wind-gbr-beatrice', name: 'Beatrice', lat: 58.10, lng: -2.95, type: 'plant' as const, capacity: 588, unit: 'MW', country: 'GBR', operator: 'SSE Renewables', description: 'Offshore wind farm in Moray Firth, Scotland' },
  { id: 'wind-gbr-whitelee', name: 'Whitelee Wind Farm', lat: 55.68, lng: -4.27, type: 'plant' as const, capacity: 539, unit: 'MW', country: 'GBR', operator: 'ScottishPower Renewables', description: 'Largest onshore wind farm in UK, near Glasgow' },
  { id: 'wind-gbr-other', name: 'Other UK Wind', lat: 54.50, lng: -2.00, type: 'plant' as const, capacity: 23818, unit: 'MW', country: 'GBR', operator: 'Various', description: 'Aggregate of remaining onshore and offshore wind across UK' },

  // === France (22,000 MW) ===
  { id: 'wind-fra-other', name: 'Other France Wind', lat: 46.60, lng: 2.50, type: 'plant' as const, capacity: 22000, unit: 'MW', country: 'FRA', operator: 'Various/EDF/Engie', description: 'Aggregate of onshore and offshore wind across France' },

  // === Canada (18,000 MW) ===
  { id: 'wind-can-other', name: 'Other Canada Wind', lat: 56.13, lng: -106.35, type: 'plant' as const, capacity: 18000, unit: 'MW', country: 'CAN', operator: 'Various/TransAlta/Boralex', description: 'Aggregate including Alberta, Ontario, Quebec wind' },

  // === Sweden (16,000 MW) ===
  { id: 'wind-swe-markbygden', name: 'Markbygden', lat: 65.20, lng: 19.50, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'SWE', operator: 'Svevind', description: 'Europe\'s largest onshore wind project in Norrbotten' },
  { id: 'wind-swe-other', name: 'Other Sweden Wind', lat: 62.00, lng: 15.00, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'SWE', operator: 'Various', description: 'Aggregate of remaining wind farms across Sweden' },

  // === Australia (12,000 MW) ===
  { id: 'wind-aus-other', name: 'Other Australia Wind', lat: -25.27, lng: 133.78, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'AUS', operator: 'Various', description: 'Aggregate of wind farms across South Australia, Victoria, NSW, and Western Australia' },

  // === Turkey (12,000 MW) ===
  { id: 'wind-tur-other', name: 'Other Turkey Wind', lat: 39.93, lng: 32.86, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'TUR', operator: 'Various', description: 'Aggregate of onshore wind across Turkey' },

  // === Netherlands (10,000 MW) ===
  { id: 'wind-nld-borssele', name: 'Borssele', lat: 51.65, lng: 3.00, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'NLD', operator: 'Orsted', description: 'Offshore wind zone off Zeeland' },
  { id: 'wind-nld-other', name: 'Other Netherlands Wind', lat: 52.13, lng: 5.29, type: 'plant' as const, capacity: 8500, unit: 'MW', country: 'NLD', operator: 'Various', description: 'Aggregate of remaining onshore and offshore wind across Netherlands' },

  // === Poland (10,000 MW) ===
  { id: 'wind-pol-other', name: 'Other Poland Wind', lat: 51.92, lng: 19.15, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'POL', operator: 'Various', description: 'Aggregate of onshore wind across Poland' },

  // === Denmark (8,011 MW) ===
  { id: 'wind-dnk-horns-rev', name: 'Horns Rev 3', lat: 55.70, lng: 7.78, type: 'plant' as const, capacity: 407, unit: 'MW', country: 'DNK', operator: 'Vattenfall', description: 'Offshore wind in North Sea off Jutland' },
  { id: 'wind-dnk-kriegers-flak', name: 'Kriegers Flak', lat: 55.08, lng: 12.87, type: 'plant' as const, capacity: 604, unit: 'MW', country: 'DNK', operator: 'Vattenfall', description: 'Offshore in Baltic Sea' },
  { id: 'wind-dnk-other', name: 'Other Denmark Wind', lat: 56.26, lng: 9.50, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'DNK', operator: 'Various', description: 'Aggregate of remaining onshore and offshore wind across Denmark' },

  // === Italy (12,000 MW) ===
  { id: 'wind-ita-other', name: 'Other Italy Wind', lat: 41.87, lng: 12.57, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'ITA', operator: 'Various/Enel/ERG', description: 'Aggregate across southern Italy and Sardinia' },

  // === Ireland (6,500 MW) ===
  { id: 'wind-irl-other', name: 'Other Ireland Wind', lat: 53.14, lng: -7.69, type: 'plant' as const, capacity: 6500, unit: 'MW', country: 'IRL', operator: 'Various/SSE/ESB', description: 'Aggregate of onshore wind across Ireland' },

  // === Mexico (7,000 MW) ===
  { id: 'wind-mex-other', name: 'Other Mexico Wind', lat: 23.63, lng: -102.55, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'MEX', operator: 'Various/Acciona/Enel', description: 'Aggregate including Oaxaca Isthmus of Tehuantepec projects' },

  // === South Korea (3,000 MW) ===
  { id: 'wind-kor-other', name: 'Other South Korea Wind', lat: 36.50, lng: 127.77, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'KOR', operator: 'Various', description: 'Aggregate including Jeju Island and offshore projects' },

  // === Japan (5,000 MW) ===
  { id: 'wind-jpn-other', name: 'Other Japan Wind', lat: 36.20, lng: 140.00, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of onshore and offshore wind across Japan' },

  // === South Africa (4,500 MW) ===
  { id: 'wind-zaf-other', name: 'Other South Africa Wind', lat: -30.56, lng: 22.94, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'ZAF', operator: 'Various/Enel/ENGIE', description: 'Aggregate of wind across Eastern Cape, Northern Cape, and Western Cape' },

  // === Norway (4,500 MW) ===
  { id: 'wind-nor-agg', name: 'Norway Wind Farms', lat: 60.47, lng: 8.47, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'NOR', operator: 'Various', description: 'Aggregate of wind power generation across Norway' },

  // === Finland (5,600 MW) ===
  { id: 'wind-fin-agg', name: 'Finland Wind Farms', lat: 61.92, lng: 25.75, type: 'plant' as const, capacity: 5600, unit: 'MW', country: 'FIN', operator: 'Various', description: 'Aggregate of wind power generation across Finland' },

  // === Portugal (5,800 MW) ===
  { id: 'wind-prt-agg', name: 'Portugal Wind Farms', lat: 39.40, lng: -8.22, type: 'plant' as const, capacity: 5800, unit: 'MW', country: 'PRT', operator: 'Various', description: 'Aggregate of wind power generation across Portugal' },

  // === Belgium (4,900 MW) ===
  { id: 'wind-bel-agg', name: 'Belgium Wind Farms', lat: 50.50, lng: 4.00, type: 'plant' as const, capacity: 4900, unit: 'MW', country: 'BEL', operator: 'Various', description: 'Aggregate of wind power generation across Belgium' },

  // === Austria (3,600 MW) ===
  { id: 'wind-aut-agg', name: 'Austria Wind Farms', lat: 47.52, lng: 14.55, type: 'plant' as const, capacity: 3600, unit: 'MW', country: 'AUT', operator: 'Various', description: 'Aggregate of wind power generation across Austria' },

  // === Greece (4,600 MW) ===
  { id: 'wind-grc-agg', name: 'Greece Wind Farms', lat: 39.07, lng: 21.82, type: 'plant' as const, capacity: 4600, unit: 'MW', country: 'GRC', operator: 'Various', description: 'Aggregate of wind power generation across Greece' },

  // === Romania (3,000 MW) ===
  { id: 'wind-rou-agg', name: 'Romania Wind Farms', lat: 45.94, lng: 24.97, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'ROU', operator: 'Various', description: 'Aggregate of wind power generation across Romania' },

  // === Ukraine (2,500 MW) ===
  { id: 'wind-ukr-agg', name: 'Ukraine Wind Farms', lat: 48.38, lng: 31.17, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'UKR', operator: 'Various', description: 'Aggregate of wind power generation across Ukraine' },

  // === Croatia (1,100 MW) ===
  { id: 'wind-hrv-agg', name: 'Croatia Wind Farms', lat: 45.10, lng: 15.20, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'HRV', operator: 'Various', description: 'Aggregate of wind power generation across Croatia' },

  // === Serbia (500 MW) ===
  { id: 'wind-srb-agg', name: 'Serbia Wind Farms', lat: 44.02, lng: 20.91, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'SRB', operator: 'Various', description: 'Aggregate of wind power generation across Serbia' },

  // === Argentina (3,800 MW) ===
  { id: 'wind-arg-agg', name: 'Argentina Wind Farms', lat: -38.42, lng: -63.62, type: 'plant' as const, capacity: 3800, unit: 'MW', country: 'ARG', operator: 'Various', description: 'Aggregate of wind power generation across Argentina' },

  // === Chile (4,500 MW) ===
  { id: 'wind-chl-agg', name: 'Chile Wind Farms', lat: -35.68, lng: -71.54, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'CHL', operator: 'Various', description: 'Aggregate of wind power generation across Chile' },

  // === Colombia (1,000 MW) ===
  { id: 'wind-col-agg', name: 'Colombia Wind Farms', lat: 4.57, lng: -74.30, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'COL', operator: 'Various', description: 'Aggregate of wind power generation across Colombia' },

  // === Uruguay (1,500 MW) ===
  { id: 'wind-ury-agg', name: 'Uruguay Wind Farms', lat: -32.52, lng: -55.77, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'URY', operator: 'Various', description: 'Aggregate of wind power generation across Uruguay' },

  // === Peru (1,000 MW) ===
  { id: 'wind-per-agg', name: 'Peru Wind Farms', lat: -9.19, lng: -75.02, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'PER', operator: 'Various', description: 'Aggregate of wind power generation across Peru' },

  // === Vietnam (4,000 MW) ===
  { id: 'wind-vnm-agg', name: 'Vietnam Wind Farms', lat: 14.06, lng: 108.28, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'VNM', operator: 'Various', description: 'Aggregate of wind power generation across Vietnam' },

  // === Taiwan (1,000 MW) ===
  { id: 'wind-twn-agg', name: 'Taiwan Wind Farms', lat: 23.70, lng: 120.96, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'TWN', operator: 'Various', description: 'Aggregate of wind power generation across Taiwan' },

  // === Pakistan (1,800 MW) ===
  { id: 'wind-pak-agg', name: 'Pakistan Wind Farms', lat: 30.38, lng: 69.35, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'PAK', operator: 'Various', description: 'Aggregate of wind power generation across Pakistan' },

  // === Philippines (500 MW) ===
  { id: 'wind-phl-agg', name: 'Philippines Wind Farms', lat: 12.88, lng: 121.77, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'PHL', operator: 'Various', description: 'Aggregate of wind power generation across Philippines' },

  // === Thailand (3,000 MW) ===
  { id: 'wind-tha-agg', name: 'Thailand Wind Farms', lat: 15.87, lng: 100.99, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'THA', operator: 'Various', description: 'Aggregate of wind power generation across Thailand' },

  // === Egypt (1,900 MW) ===
  { id: 'wind-egy-agg', name: 'Egypt Wind Farms', lat: 30.04, lng: 31.24, type: 'plant' as const, capacity: 1900, unit: 'MW', country: 'EGY', operator: 'Various', description: 'Aggregate of wind power generation across Egypt' },

  // === Morocco (1,500 MW) ===
  { id: 'wind-mar-agg', name: 'Morocco Wind Farms', lat: 31.79, lng: -7.09, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'MAR', operator: 'Various', description: 'Aggregate of wind power generation across Morocco' },

  // === Kenya (450 MW) ===
  { id: 'wind-ken-agg', name: 'Kenya Wind Farms', lat: -0.02, lng: 37.91, type: 'plant' as const, capacity: 450, unit: 'MW', country: 'KEN', operator: 'Various', description: 'Aggregate of wind power generation across Kenya' },

  // === Ethiopia (400 MW) ===
  { id: 'wind-eth-agg', name: 'Ethiopia Wind Farms', lat: 9.15, lng: 40.49, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'ETH', operator: 'Various', description: 'Aggregate of wind power generation across Ethiopia' },

  // === Kazakhstan (1,600 MW) ===
  { id: 'wind-kaz-agg', name: 'Kazakhstan Wind Farms', lat: 48.02, lng: 66.92, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'KAZ', operator: 'Various', description: 'Aggregate of wind power generation across Kazakhstan' },

  // === Mongolia (700 MW) ===
  { id: 'wind-mng-agg', name: 'Mongolia Wind Farms', lat: 46.86, lng: 103.85, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'MNG', operator: 'Various', description: 'Aggregate of wind power generation across Mongolia' },

  // === New Zealand (1,000 MW) ===
  { id: 'wind-nzl-agg', name: 'New Zealand Wind Farms', lat: -40.90, lng: 174.89, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'NZL', operator: 'Various', description: 'Aggregate of wind power generation across New Zealand' },

  // === Lithuania (1,000 MW) ===
  { id: 'wind-ltu-agg', name: 'Lithuania Wind Farms', lat: 55.17, lng: 23.88, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'LTU', operator: 'Various', description: 'Aggregate of wind power generation across Lithuania' },
];
