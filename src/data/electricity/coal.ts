import { Location } from '../../types';

export const coalLocations: Location[] = [
  // === United States (170,000 MW) ===
  { id: 'coal-scherer', name: 'Plant Scherer', lat: 33.0464, lng: -83.8317, type: 'plant' as const, capacity: 3564, unit: 'MW', country: 'USA', operator: 'Georgia Power', description: 'Largest coal-fired power plant in the US, located near Macon, GA' },
  { id: 'coal-bowen', name: 'Plant Bowen', lat: 34.1264, lng: -84.9189, type: 'plant' as const, capacity: 3160, unit: 'MW', country: 'USA', operator: 'Georgia Power', description: 'Major coal plant in northwestern Georgia near Cartersville' },
  { id: 'coal-miller', name: 'James H. Miller Jr. Steam Plant', lat: 33.6536, lng: -87.0775, type: 'plant' as const, capacity: 2822, unit: 'MW', country: 'USA', operator: 'Alabama Power', description: 'One of the largest coal-fired plants in the US, near West Jefferson' },
  { id: 'coal-gibson', name: 'Gibson Generating Station', lat: 38.3611, lng: -87.7394, type: 'plant' as const, capacity: 3345, unit: 'MW', country: 'USA', operator: 'Duke Energy', description: 'Largest power plant in Indiana, on the Wabash River' },
  { id: 'coal-monroe', name: 'Monroe Power Plant', lat: 41.8942, lng: -83.3756, type: 'plant' as const, capacity: 3280, unit: 'MW', country: 'USA', operator: 'DTE Energy', description: 'Largest coal plant in Michigan, on Lake Erie shore' },
  { id: 'coal-cumberland', name: 'Cumberland Fossil Plant', lat: 36.3933, lng: -87.6533, type: 'plant' as const, capacity: 2470, unit: 'MW', country: 'USA', operator: 'TVA', description: 'Large TVA coal plant on the Cumberland River near Cumberland City' },
  { id: 'coal-kingston', name: 'Kingston Fossil Plant', lat: 35.8978, lng: -84.5217, type: 'plant' as const, capacity: 1398, unit: 'MW', country: 'USA', operator: 'TVA', description: 'TVA coal plant on Watts Bar Reservoir near Kingston' },
  { id: 'coal-bull-run', name: 'Bull Run Fossil Plant', lat: 36.0169, lng: -84.1492, type: 'plant' as const, capacity: 881, unit: 'MW', country: 'USA', operator: 'TVA', description: 'TVA coal plant near Oak Ridge on Melton Hill Reservoir' },
  { id: 'coal-paradise', name: 'Paradise Fossil Plant', lat: 37.0064, lng: -86.9806, type: 'plant' as const, capacity: 1020, unit: 'MW', country: 'USA', operator: 'TVA', description: 'TVA coal plant in Muhlenberg County, immortalized by John Prine' },
  { id: 'coal-ghent', name: 'Ghent Generating Station', lat: 38.7350, lng: -85.0536, type: 'plant' as const, capacity: 2226, unit: 'MW', country: 'USA', operator: 'KU Energy', description: 'Major Kentucky coal plant on the Ohio River near Ghent' },
  { id: 'coal-gavin', name: 'General James M. Gavin Power Plant', lat: 38.9317, lng: -82.1464, type: 'plant' as const, capacity: 2600, unit: 'MW', country: 'USA', operator: 'American Electric Power', description: 'Massive AEP coal plant on the Ohio River in Cheshire' },
  { id: 'coal-conesville', name: 'Conesville Power Plant', lat: 40.1800, lng: -81.8806, type: 'plant' as const, capacity: 1590, unit: 'MW', country: 'USA', operator: 'American Electric Power', description: 'AEP coal plant on the Muskingum River in Coshocton County' },
  { id: 'coal-amos', name: 'John E. Amos Power Plant', lat: 38.4583, lng: -81.8194, type: 'plant' as const, capacity: 2933, unit: 'MW', country: 'USA', operator: 'American Electric Power', description: 'Largest power plant in West Virginia, on the Kanawha River' },
  { id: 'coal-mountaineer', name: 'Mountaineer Plant', lat: 38.9344, lng: -81.9428, type: 'plant' as const, capacity: 1300, unit: 'MW', country: 'USA', operator: 'American Electric Power', description: 'AEP coal plant in Mason County on the Ohio River' },
  { id: 'coal-harrison', name: 'Harrison Power Station', lat: 39.3722, lng: -80.3011, type: 'plant' as const, capacity: 1984, unit: 'MW', country: 'USA', operator: 'Allegheny Energy', description: 'Major coal plant near Clarksburg, West Virginia' },
  { id: 'coal-mitchell', name: 'Mitchell Power Station', lat: 39.7461, lng: -80.7614, type: 'plant' as const, capacity: 1560, unit: 'MW', country: 'USA', operator: 'American Electric Power', description: 'AEP coal plant on the Ohio River in Marshall County' },
  { id: 'coal-pleasants', name: 'Pleasants Power Station', lat: 39.3394, lng: -81.1722, type: 'plant' as const, capacity: 1300, unit: 'MW', country: 'USA', operator: 'Allegheny Energy', description: 'Coal plant on the Ohio River in Pleasants County' },
  { id: 'coal-longview', name: 'Longview Power Plant', lat: 39.6478, lng: -79.8850, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Longview Power', description: 'Modern supercritical coal plant near Morgantown' },
  { id: 'coal-belews-creek', name: 'Belews Creek Steam Station', lat: 36.2694, lng: -80.0603, type: 'plant' as const, capacity: 2240, unit: 'MW', country: 'USA', operator: 'Duke Energy', description: 'Duke Energy coal plant on Belews Lake near Stokesdale' },
  { id: 'coal-roxboro', name: 'Roxboro Steam Plant', lat: 36.4528, lng: -78.9808, type: 'plant' as const, capacity: 2462, unit: 'MW', country: 'USA', operator: 'Duke Energy', description: 'Major Duke Energy coal plant in Person County' },
  { id: 'coal-marshall', name: 'Marshall Steam Station', lat: 35.6275, lng: -80.9667, type: 'plant' as const, capacity: 2090, unit: 'MW', country: 'USA', operator: 'Duke Energy', description: 'Duke Energy coal plant on Lake Norman near Terrell' },
  { id: 'coal-cliffside', name: 'Cliffside Steam Station', lat: 35.2383, lng: -81.7778, type: 'plant' as const, capacity: 546, unit: 'MW', country: 'USA', operator: 'Duke Energy', description: 'Duke Energy coal plant in Rutherford County' },
  { id: 'coal-cross', name: 'Cross Generating Station', lat: 33.3597, lng: -80.1564, type: 'plant' as const, capacity: 2390, unit: 'MW', country: 'USA', operator: 'Santee Cooper', description: 'Largest coal plant in South Carolina, in Berkeley County' },
  { id: 'coal-winyah', name: 'Winyah Generating Station', lat: 33.3383, lng: -79.2783, type: 'plant' as const, capacity: 1150, unit: 'MW', country: 'USA', operator: 'Santee Cooper', description: 'Coal plant near Georgetown on Winyah Bay' },
  { id: 'coal-homer-city', name: 'Homer City Generating Station', lat: 40.5019, lng: -79.2058, type: 'plant' as const, capacity: 1884, unit: 'MW', country: 'USA', operator: 'Homer City Generation', description: 'Major coal plant in Indiana County, Pennsylvania' },
  { id: 'coal-keystone', name: 'Keystone Generating Station', lat: 40.6614, lng: -79.3400, type: 'plant' as const, capacity: 1711, unit: 'MW', country: 'USA', operator: 'GenOn Energy', description: 'Large coal plant in Armstrong County on the Allegheny River' },
  { id: 'coal-conemaugh', name: 'Conemaugh Generating Station', lat: 40.3953, lng: -79.0586, type: 'plant' as const, capacity: 1711, unit: 'MW', country: 'USA', operator: 'GenOn Energy', description: 'Coal plant near New Florence in Westmoreland County' },
  { id: 'coal-parish', name: 'W.A. Parish Generating Station', lat: 29.4839, lng: -95.6328, type: 'plant' as const, capacity: 2466, unit: 'MW', country: 'USA', operator: 'NRG Energy', description: 'Large coal and gas plant southwest of Houston near Thompsons' },
  { id: 'coal-martin-lake', name: 'Martin Lake Steam Electric Station', lat: 32.2583, lng: -94.5694, type: 'plant' as const, capacity: 2250, unit: 'MW', country: 'USA', operator: 'Luminant', description: 'Major coal plant in East Texas near Tatum' },
  { id: 'coal-limestone', name: 'Limestone Electric Generating Station', lat: 31.4167, lng: -96.2556, type: 'plant' as const, capacity: 1850, unit: 'MW', country: 'USA', operator: 'NRG Energy', description: 'Coal plant near Jewett in Limestone County, Texas' },
  { id: 'coal-jim-bridger', name: 'Jim Bridger Power Plant', lat: 41.7681, lng: -108.8511, type: 'plant' as const, capacity: 2120, unit: 'MW', country: 'USA', operator: 'PacifiCorp', description: 'Major coal plant near Point of Rocks, fed by adjacent mine' },
  { id: 'coal-laramie-river', name: 'Laramie River Station', lat: 42.1031, lng: -104.8714, type: 'plant' as const, capacity: 1710, unit: 'MW', country: 'USA', operator: 'Basin Electric', description: 'Large coal plant near Wheatland in southeastern Wyoming' },
  { id: 'coal-naughton', name: 'Naughton Power Plant', lat: 41.7178, lng: -110.5694, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'PacifiCorp', description: 'Coal plant near Kemmerer in southwestern Wyoming' },
  { id: 'coal-dave-johnston', name: 'Dave Johnston Power Plant', lat: 42.8219, lng: -106.3189, type: 'plant' as const, capacity: 750, unit: 'MW', country: 'USA', operator: 'PacifiCorp', description: 'Coal plant on the North Platte River near Glenrock' },
  { id: 'coal-dry-fork', name: 'Dry Fork Station', lat: 44.6500, lng: -105.3192, type: 'plant' as const, capacity: 385, unit: 'MW', country: 'USA', operator: 'Basin Electric', description: 'Modern coal plant near Gillette in the Powder River Basin' },
  { id: 'coal-san-juan', name: 'San Juan Generating Station', lat: 36.8039, lng: -108.4392, type: 'plant' as const, capacity: 847, unit: 'MW', country: 'USA', operator: 'PNM', description: 'Coal plant near Farmington in San Juan County' },
  { id: 'coal-four-corners', name: 'Four Corners Power Plant', lat: 36.6858, lng: -108.4806, type: 'plant' as const, capacity: 1540, unit: 'MW', country: 'USA', operator: 'Arizona Public Service', description: 'Large coal plant near the Four Corners monument on Navajo land' },
  { id: 'coal-colstrip', name: 'Colstrip Power Plant', lat: 45.8844, lng: -106.6172, type: 'plant' as const, capacity: 2094, unit: 'MW', country: 'USA', operator: 'Talen Energy', description: 'Largest coal plant in Montana, in Rosebud County' },
  { id: 'coal-north-valmy', name: 'North Valmy Generating Station', lat: 40.8569, lng: -117.1281, type: 'plant' as const, capacity: 522, unit: 'MW', country: 'USA', operator: 'NV Energy/Idaho Power', description: 'Coal plant in rural Humboldt County, Nevada' },
  { id: 'coal-intermountain', name: 'Intermountain Power Plant', lat: 38.8389, lng: -112.5450, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'USA', operator: 'Intermountain Power Agency', description: 'Large coal plant near Delta, historically serving Los Angeles' },
  { id: 'coal-hunter', name: 'Hunter Power Plant', lat: 38.9797, lng: -111.2322, type: 'plant' as const, capacity: 1320, unit: 'MW', country: 'USA', operator: 'PacifiCorp', description: 'Coal plant in Emery County near Castle Dale' },
  { id: 'coal-coal-creek', name: 'Coal Creek Station', lat: 47.3281, lng: -101.2206, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'USA', operator: 'Great River Energy', description: 'Large lignite-fired plant near Underwood' },
  { id: 'coal-antelope-valley', name: 'Antelope Valley Station', lat: 47.3483, lng: -101.6553, type: 'plant' as const, capacity: 900, unit: 'MW', country: 'USA', operator: 'Basin Electric', description: 'Lignite coal plant near Beulah in Mercer County' },
  { id: 'coal-leland-olds', name: 'Leland Olds Station', lat: 47.2836, lng: -101.2889, type: 'plant' as const, capacity: 656, unit: 'MW', country: 'USA', operator: 'Basin Electric', description: 'Lignite coal plant near Stanton in Mercer County' },
  { id: 'coal-sherco', name: 'Sherburne County Generating Station (Sherco)', lat: 45.3833, lng: -93.8833, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'USA', operator: 'Xcel Energy', description: 'Largest power plant in Minnesota, near Becker' },
  { id: 'coal-council-bluffs', name: 'Council Bluffs Energy Center', lat: 41.2206, lng: -95.8633, type: 'plant' as const, capacity: 893, unit: 'MW', country: 'USA', operator: 'MidAmerican Energy', description: 'Coal plant near Council Bluffs on the Missouri River' },
  { id: 'coal-ottumwa', name: 'Ottumwa Generating Station', lat: 41.0522, lng: -92.3811, type: 'plant' as const, capacity: 726, unit: 'MW', country: 'USA', operator: 'Alliant Energy', description: 'Coal plant near Ottumwa in Wapello County' },
  { id: 'coal-prairie-state', name: 'Prairie State Generating Station', lat: 38.2469, lng: -89.7867, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'USA', operator: 'Prairie State Energy Campus', description: 'Modern supercritical coal plant near Marissa with adjacent mine' },
  { id: 'coal-newton', name: 'Newton Power Station', lat: 38.9917, lng: -88.3372, type: 'plant' as const, capacity: 1230, unit: 'MW', country: 'USA', operator: 'Ameren', description: 'Coal plant near Newton in Jasper County' },
  { id: 'coal-labadie', name: 'Labadie Energy Center', lat: 38.5397, lng: -90.8272, type: 'plant' as const, capacity: 2372, unit: 'MW', country: 'USA', operator: 'Ameren', description: 'Largest coal plant in Missouri, on the Missouri River near Labadie' },
  { id: 'coal-rush-island', name: 'Rush Island Energy Center', lat: 38.1064, lng: -90.2508, type: 'plant' as const, capacity: 1178, unit: 'MW', country: 'USA', operator: 'Ameren', description: 'Coal plant on the Mississippi River near Festus' },
  { id: 'coal-iatan', name: 'Iatan Generating Station', lat: 39.5256, lng: -94.9333, type: 'plant' as const, capacity: 1480, unit: 'MW', country: 'USA', operator: 'Evergy', description: 'Coal plant on the Missouri River near Weston' },
  { id: 'coal-jeffrey', name: 'Jeffrey Energy Center', lat: 39.2806, lng: -96.1117, type: 'plant' as const, capacity: 2160, unit: 'MW', country: 'USA', operator: 'Evergy', description: 'Largest power plant in Kansas, near St. Marys' },
  { id: 'coal-la-cygne', name: 'La Cygne Generating Station', lat: 38.3228, lng: -94.6314, type: 'plant' as const, capacity: 1411, unit: 'MW', country: 'USA', operator: 'Evergy', description: 'Coal plant in Linn County near La Cygne' },
  { id: 'coal-nebraska-city', name: 'Nebraska City Station', lat: 40.6447, lng: -95.8439, type: 'plant' as const, capacity: 1267, unit: 'MW', country: 'USA', operator: 'OPPD', description: 'Major coal plant near Nebraska City on the Missouri River' },
  { id: 'coal-gerald-gentleman', name: 'Gerald Gentleman Station', lat: 40.9667, lng: -100.7833, type: 'plant' as const, capacity: 1365, unit: 'MW', country: 'USA', operator: 'NPPD', description: 'Largest power plant in Nebraska, near Sutherland' },
  { id: 'coal-tn-other', name: 'Tennessee Other Coal Plants', lat: 35.52, lng: -86.58, type: 'plant' as const, capacity: 1751, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining TN coal capacity including Gallatin, Johnsonville, and Allen' },
  { id: 'coal-wv-other', name: 'West Virginia Other Coal Plants', lat: 38.60, lng: -80.45, type: 'plant' as const, capacity: 3223, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining WV coal capacity including Fort Martin, Albright, Grant Town, and smaller plants' },
  { id: 'coal-ky-other', name: 'Kentucky Other Coal Plants', lat: 37.67, lng: -84.67, type: 'plant' as const, capacity: 4754, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining KY coal capacity including East Bend, Trimble County, Mill Creek, and others' },
  { id: 'coal-oh-other', name: 'Ohio Other Coal Plants', lat: 40.42, lng: -82.91, type: 'plant' as const, capacity: 4310, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining OH coal capacity including Cardinal, Sammis, Kyger Creek, and others' },
  { id: 'coal-in-other', name: 'Indiana Other Coal Plants', lat: 40.27, lng: -86.13, type: 'plant' as const, capacity: 7309, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining IN coal capacity including Rockport, Petersburg, Cayuga, Clifty Creek, and others' },
  { id: 'coal-pa-other', name: 'Pennsylvania Other Coal Plants', lat: 41.20, lng: -77.19, type: 'plant' as const, capacity: 2194, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining PA coal capacity including Montour, Brunner Island, and others' },
  { id: 'coal-tx-other', name: 'Texas Other Coal Plants', lat: 31.97, lng: -99.90, type: 'plant' as const, capacity: 4434, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining TX coal capacity including Monticello, Pirkey, Harrington, Sandow, and others' },
  { id: 'coal-wy-other', name: 'Wyoming Other Coal Plants', lat: 43.08, lng: -107.29, type: 'plant' as const, capacity: 1335, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining WY coal capacity including Wyodak, Neil Simpson, and others' },
  { id: 'coal-mt-other', name: 'Montana Other Coal Plants', lat: 46.88, lng: -110.36, type: 'plant' as const, capacity: 306, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining MT coal capacity including Corette and Lewis & Clark' },
  { id: 'coal-nd-other', name: 'North Dakota Other Coal Plants', lat: 47.55, lng: -101.00, type: 'plant' as const, capacity: 1344, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining ND coal capacity including Coyote, Stanton, and Heskett stations' },
  { id: 'coal-mo-other', name: 'Missouri Other Coal Plants', lat: 38.57, lng: -92.60, type: 'plant' as const, capacity: 1970, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining MO coal capacity including Sioux, Meramec, New Madrid, Thomas Hill, and Asbury' },
  { id: 'coal-il-other', name: 'Illinois Other Coal Plants', lat: 40.63, lng: -89.40, type: 'plant' as const, capacity: 4170, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining IL coal capacity including Waukegan, Joliet, Powerton, Havana, Duck Creek, and others' },
  { id: 'coal-ia-other', name: 'Iowa Other Coal Plants', lat: 41.88, lng: -93.10, type: 'plant' as const, capacity: 1881, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining IA coal capacity including Burlington, Louisa, Neal, and others' },
  { id: 'coal-mn-other', name: 'Minnesota Other Coal Plants', lat: 46.73, lng: -94.69, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining MN coal capacity including Boswell Energy Center, Clay Boswell, and Taconite Harbor' },
  { id: 'coal-wi-other', name: 'Wisconsin Coal Plants', lat: 43.78, lng: -88.79, type: 'plant' as const, capacity: 4500, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'WI coal capacity including Pleasant Prairie, Oak Creek, Elm Road, Weston, Columbia, and Edgewater' },
  { id: 'coal-mi-other', name: 'Michigan Other Coal Plants', lat: 44.31, lng: -85.60, type: 'plant' as const, capacity: 3720, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining MI coal capacity including Campbell, Karn-Weadock, Belle River, and others' },
  { id: 'coal-ga-other', name: 'Georgia Other Coal Plants', lat: 32.17, lng: -83.44, type: 'plant' as const, capacity: 1776, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining GA coal capacity including Wansley, Hammond, Yates, and Kraft' },
  { id: 'coal-al-other', name: 'Alabama Other Coal Plants', lat: 32.32, lng: -86.90, type: 'plant' as const, capacity: 3178, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining AL coal capacity including Gorgas, Barry, Greene County, Colbert, and Widows Creek' },
  { id: 'coal-nc-other', name: 'North Carolina Other Coal Plants', lat: 35.76, lng: -79.02, type: 'plant' as const, capacity: 1462, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining NC coal capacity including Allen, Buck, Dan River, Riverbend, and Mayo' },
  { id: 'coal-sc-other', name: 'South Carolina Other Coal Plants', lat: 33.84, lng: -81.16, type: 'plant' as const, capacity: 660, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining SC coal capacity including Wateree, Williams, and Cope' },
  { id: 'coal-fl-other', name: 'Florida Coal Plants', lat: 27.66, lng: -81.52, type: 'plant' as const, capacity: 3500, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'FL coal capacity including Crystal River, Stanton, Deerhaven, Crist, Scherer (FL share), and Big Bend' },
  { id: 'coal-va-other', name: 'Virginia Coal Plants', lat: 37.43, lng: -78.66, type: 'plant' as const, capacity: 3200, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'VA coal capacity including Mount Storm, Chesterfield, Clover, Glen Lyn, and Clinch River' },
  { id: 'coal-ne-other', name: 'Nebraska Other Coal Plants', lat: 41.49, lng: -99.90, type: 'plant' as const, capacity: 568, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining NE coal capacity including Sheldon Station and North Omaha' },
  { id: 'coal-ks-other', name: 'Kansas Other Coal Plants', lat: 38.50, lng: -98.77, type: 'plant' as const, capacity: 629, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining KS coal capacity including Holcomb and Nearman Creek' },
  { id: 'coal-ut-other', name: 'Utah Other Coal Plants', lat: 39.32, lng: -111.09, type: 'plant' as const, capacity: 880, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining UT coal capacity including Huntington and Carbon plants' },
  { id: 'coal-nm-other', name: 'New Mexico Other Coal Plants', lat: 34.52, lng: -105.87, type: 'plant' as const, capacity: 413, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'Remaining NM coal capacity including Escalante and other smaller plants' },
  { id: 'coal-co-other', name: 'Colorado Coal Plants', lat: 39.55, lng: -105.78, type: 'plant' as const, capacity: 3600, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'CO coal capacity including Comanche, Pawnee, Craig, Hayden, Rawhide, and Cherokee' },
  { id: 'coal-az-other', name: 'Arizona Coal Plants', lat: 34.05, lng: -111.09, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'AZ coal capacity including Cholla, Coronado, Apache, and Springerville' },
  { id: 'coal-md-other', name: 'Maryland Coal Plants', lat: 39.05, lng: -76.64, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'MD coal capacity including Brandon Shores, Wagner, Chalk Point, Morgantown, and Dickerson' },
  { id: 'coal-ms-other', name: 'Mississippi Coal Plants', lat: 32.35, lng: -89.40, type: 'plant' as const, capacity: 900, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'MS coal capacity including Daniel and Red Hills' },
  { id: 'coal-la-other', name: 'Louisiana Coal Plants', lat: 30.98, lng: -91.96, type: 'plant' as const, capacity: 750, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'LA coal capacity including Dolet Hills, Big Cajun 2, and Rodemacher' },
  { id: 'coal-sd-other', name: 'South Dakota Coal Plants', lat: 43.93, lng: -99.90, type: 'plant' as const, capacity: 474, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'SD coal capacity including Big Stone Plant' },
  { id: 'coal-ar-other', name: 'Arkansas Coal Plants', lat: 35.20, lng: -91.83, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various operators', description: 'AR coal capacity including Independence, White Bluff, and Flint Creek' },

  // === China (1,147,000 MW) ===
  { id: 'coal-chn-tuoketuo', name: 'Datang Tuoketuo Power Station', lat: 40.20, lng: 111.40, type: 'plant' as const, capacity: 6720, unit: 'MW', country: 'CHN', operator: 'China Datang Corp', description: 'World\'s largest coal-fired power plant, in Inner Mongolia' },
  { id: 'coal-chn-waigaoqiao', name: 'Waigaoqiao Power Station', lat: 31.35, lng: 121.65, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'CHN', operator: 'Shanghai Electric Power', description: 'Major coal plant in Pudong, Shanghai' },
  { id: 'coal-chn-junggar', name: 'Junggar Power Station', lat: 39.85, lng: 110.45, type: 'plant' as const, capacity: 6600, unit: 'MW', country: 'CHN', operator: 'China Guodian', description: 'Massive pithead power plant in Inner Mongolia' },
  { id: 'coal-chn-beilun', name: 'Guodian Beilun Power Station', lat: 29.90, lng: 121.87, type: 'plant' as const, capacity: 4400, unit: 'MW', country: 'CHN', operator: 'China Guodian', description: 'Large coastal coal plant in Ningbo, Zhejiang' },
  { id: 'coal-chn-zouxian', name: 'Zouxian Power Station', lat: 35.15, lng: 116.97, type: 'plant' as const, capacity: 4540, unit: 'MW', country: 'CHN', operator: 'China Huadian', description: 'Major coal plant in Shandong Province' },
  { id: 'coal-chn-jiaxing', name: 'Jiaxing Power Station', lat: 30.50, lng: 120.75, type: 'plant' as const, capacity: 3320, unit: 'MW', country: 'CHN', operator: 'China Datang', description: 'Coastal coal plant in Zhejiang' },
  { id: 'coal-chn-shajiao', name: 'Shajiao C Power Station', lat: 22.72, lng: 113.80, type: 'plant' as const, capacity: 1980, unit: 'MW', country: 'CHN', operator: 'China Resources Power', description: 'Major plant in Guangdong Province' },
  { id: 'coal-chn-shandong', name: 'Shandong Province Coal Plants', lat: 36.67, lng: 117.02, type: 'plant' as const, capacity: 120000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Shandong, major industrial province' },
  { id: 'coal-chn-inner-mongolia', name: 'Inner Mongolia Coal Plants', lat: 41.00, lng: 112.00, type: 'plant' as const, capacity: 100000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of pithead coal plants near coal mines' },
  { id: 'coal-chn-jiangsu', name: 'Jiangsu Province Coal Plants', lat: 33.00, lng: 119.00, type: 'plant' as const, capacity: 85000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Jiangsu' },
  { id: 'coal-chn-guangdong', name: 'Guangdong Province Coal Plants', lat: 23.13, lng: 113.27, type: 'plant' as const, capacity: 65000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Guangdong' },
  { id: 'coal-chn-henan', name: 'Henan Province Coal Plants', lat: 34.00, lng: 113.50, type: 'plant' as const, capacity: 60000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Henan' },
  { id: 'coal-chn-hebei', name: 'Hebei Province Coal Plants', lat: 39.00, lng: 115.50, type: 'plant' as const, capacity: 55000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Hebei' },
  { id: 'coal-chn-shanxi', name: 'Shanxi Province Coal Plants', lat: 37.90, lng: 112.55, type: 'plant' as const, capacity: 70000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Shanxi, major coal mining province' },
  { id: 'coal-chn-anhui', name: 'Anhui Province Coal Plants', lat: 31.86, lng: 117.28, type: 'plant' as const, capacity: 45000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across Anhui' },
  { id: 'coal-chn-other', name: 'Other China Coal Plants', lat: 35.86, lng: 104.20, type: 'plant' as const, capacity: 517440, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate across all other provinces' },

  // === India (260,000 MW) ===
  { id: 'coal-ind-vindhyachal', name: 'Vindhyachal Super Thermal Power Station', lat: 24.08, lng: 82.67, type: 'plant' as const, capacity: 4760, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Largest thermal plant in India, Madhya Pradesh' },
  { id: 'coal-ind-mundra-adani', name: 'Mundra Thermal Power Station', lat: 22.73, lng: 69.72, type: 'plant' as const, capacity: 4620, unit: 'MW', country: 'IND', operator: 'Adani Power', description: 'Largest private-sector coal plant in India, Gujarat' },
  { id: 'coal-ind-mundra-umpp', name: 'Mundra Ultra Mega Power Project', lat: 22.74, lng: 69.71, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'IND', operator: 'Tata Power', description: 'Ultra Mega Power Project on Gujarat coast' },
  { id: 'coal-ind-sipat', name: 'Sipat Super Thermal Power Station', lat: 22.10, lng: 82.60, type: 'plant' as const, capacity: 2980, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Major plant in Chhattisgarh' },
  { id: 'coal-ind-talcher', name: 'Talcher Super Thermal Power Station', lat: 20.95, lng: 85.23, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Major plant in Odisha' },
  { id: 'coal-ind-rihand', name: 'Rihand Super Thermal Power Station', lat: 24.20, lng: 82.95, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Plant near Sonebhadra, UP' },
  { id: 'coal-ind-korba', name: 'Korba Super Thermal Power Station', lat: 22.35, lng: 82.72, type: 'plant' as const, capacity: 2600, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Plant in Chhattisgarh' },
  { id: 'coal-ind-ramagundam', name: 'Ramagundam Super Thermal Power Station', lat: 18.75, lng: 79.48, type: 'plant' as const, capacity: 2600, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Plant in Telangana' },
  { id: 'coal-ind-farakka', name: 'Farakka Super Thermal Power Station', lat: 24.80, lng: 87.92, type: 'plant' as const, capacity: 2100, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Plant in West Bengal near Bangladesh border' },
  { id: 'coal-ind-dadri', name: 'Dadri Thermal Power Station', lat: 28.55, lng: 77.56, type: 'plant' as const, capacity: 1820, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Plant near Delhi, Uttar Pradesh' },
  { id: 'coal-ind-maharashtra', name: 'Maharashtra Coal Plants', lat: 19.75, lng: 75.71, type: 'plant' as const, capacity: 35000, unit: 'MW', country: 'IND', operator: 'Various/NTPC/Adani', description: 'Aggregate across Maharashtra' },
  { id: 'coal-ind-chhattisgarh', name: 'Chhattisgarh Coal Plants', lat: 21.25, lng: 81.63, type: 'plant' as const, capacity: 22000, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate across Chhattisgarh' },
  { id: 'coal-ind-uttar-pradesh', name: 'Uttar Pradesh Coal Plants', lat: 26.85, lng: 80.91, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'IND', operator: 'Various/NTPC', description: 'Aggregate across UP' },
  { id: 'coal-ind-other', name: 'Other India Coal Plants', lat: 20.59, lng: 78.96, type: 'plant' as const, capacity: 148520, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate across all other states' },

  // === Japan (47,000 MW) ===
  { id: 'coal-jpn-hekinan', name: 'JERA Hekinan Thermal Power Station', lat: 34.83, lng: 136.97, type: 'plant' as const, capacity: 4100, unit: 'MW', country: 'JPN', operator: 'JERA', description: 'Largest coal plant in Japan, Aichi Prefecture' },
  { id: 'coal-jpn-isogo', name: 'Isogo Thermal Power Station', lat: 35.42, lng: 139.63, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'JPN', operator: 'J-Power/JERA', description: 'Ultra-supercritical plant in Yokohama' },
  { id: 'coal-jpn-matsuura', name: 'Matsuura Thermal Power Station', lat: 33.35, lng: 129.72, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'JPN', operator: 'J-Power', description: 'Coal plant in Nagasaki Prefecture' },
  { id: 'coal-jpn-haramachi', name: 'Haramachi Thermal Power Station', lat: 37.63, lng: 141.00, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'JPN', operator: 'Tōhoku Electric', description: 'Coal plant in Fukushima Prefecture' },
  { id: 'coal-jpn-maizuru', name: 'Maizuru Thermal Power Station', lat: 35.47, lng: 135.33, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'JPN', operator: 'Kansai Electric', description: 'USC coal plant in Kyoto Prefecture' },
  { id: 'coal-jpn-hirono', name: 'Hirono Thermal Power Station', lat: 37.22, lng: 141.03, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'JPN', operator: 'TEPCO', description: 'Coal plant in Fukushima Prefecture' },
  { id: 'coal-jpn-other', name: 'Other Japan Coal Plants', lat: 36.20, lng: 140.00, type: 'plant' as const, capacity: 34100, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of remaining coal plants' },

  // === South Korea (38,000 MW) ===
  { id: 'coal-kor-dangjin', name: 'Dangjin Thermal Power Station', lat: 36.95, lng: 126.63, type: 'plant' as const, capacity: 6040, unit: 'MW', country: 'KOR', operator: 'Korea East-West Power', description: 'Largest coal plant in South Korea' },
  { id: 'coal-kor-boryeong', name: 'Boryeong Thermal Power Station', lat: 36.33, lng: 126.55, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'KOR', operator: 'Korea Midland Power', description: 'Major coal plant in South Chungcheong' },
  { id: 'coal-kor-taean', name: 'Taean Thermal Power Station', lat: 36.77, lng: 126.13, type: 'plant' as const, capacity: 6100, unit: 'MW', country: 'KOR', operator: 'Korea Western Power', description: 'Large coal complex on west coast' },
  { id: 'coal-kor-hadong', name: 'Hadong Thermal Power Station', lat: 34.95, lng: 127.88, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'KOR', operator: 'Korea Southern Power', description: 'Coal plant in South Gyeongsang' },
  { id: 'coal-kor-samcheok', name: 'Samcheok Green Power Station', lat: 37.42, lng: 129.18, type: 'plant' as const, capacity: 2100, unit: 'MW', country: 'KOR', operator: 'Korea South-East Power', description: 'Green Power coal plant in Gangwon' },
  { id: 'coal-kor-other', name: 'Other South Korea Coal Plants', lat: 36.50, lng: 127.77, type: 'plant' as const, capacity: 15760, unit: 'MW', country: 'KOR', operator: 'Various', description: 'Aggregate of remaining coal plants' },

  // === Germany (30,000 MW) ===
  { id: 'coal-deu-neurath', name: 'Neurath Power Station', lat: 51.05, lng: 6.63, type: 'plant' as const, capacity: 4400, unit: 'MW', country: 'DEU', operator: 'RWE', description: 'Largest lignite plant in Germany near Cologne' },
  { id: 'coal-deu-niederaussem', name: 'Niederaußem Power Station', lat: 50.99, lng: 6.68, type: 'plant' as const, capacity: 3864, unit: 'MW', country: 'DEU', operator: 'RWE', description: 'Major lignite plant in North Rhine-Westphalia' },
  { id: 'coal-deu-jaenschwalde', name: 'Jänschwalde Power Station', lat: 51.83, lng: 14.47, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'DEU', operator: 'LEAG', description: 'Large lignite plant in Brandenburg, Lusatia' },
  { id: 'coal-deu-schwarze-pumpe', name: 'Schwarze Pumpe Power Station', lat: 51.55, lng: 14.35, type: 'plant' as const, capacity: 1600, unit: 'MW', country: 'DEU', operator: 'LEAG', description: 'Lignite plant in Brandenburg' },
  { id: 'coal-deu-boxberg', name: 'Boxberg Power Station', lat: 51.42, lng: 14.58, type: 'plant' as const, capacity: 2575, unit: 'MW', country: 'DEU', operator: 'LEAG', description: 'Lignite plant in Saxony' },
  { id: 'coal-deu-other', name: 'Other Germany Coal Plants', lat: 51.17, lng: 10.45, type: 'plant' as const, capacity: 14561, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of remaining hard coal and lignite plants' },

  // === Indonesia (40,000 MW) ===
  { id: 'coal-idn-suralaya', name: 'Suralaya Power Station', lat: -6.02, lng: 106.08, type: 'plant' as const, capacity: 4025, unit: 'MW', country: 'IDN', operator: 'Indonesia Power', description: 'Largest coal plant in Indonesia, in Banten' },
  { id: 'coal-idn-paiton', name: 'Paiton Power Station Complex', lat: -7.72, lng: 113.55, type: 'plant' as const, capacity: 4710, unit: 'MW', country: 'IDN', operator: 'Various/PLN', description: 'Major coal complex in East Java' },
  { id: 'coal-idn-tanjung-jati', name: 'Tanjung Jati B Power Station', lat: -6.45, lng: 110.73, type: 'plant' as const, capacity: 2640, unit: 'MW', country: 'IDN', operator: 'Sumitomo/PLN', description: 'Coal plant in Central Java' },
  { id: 'coal-idn-cirebon', name: 'Cirebon Power Station', lat: -6.78, lng: 108.37, type: 'plant' as const, capacity: 1660, unit: 'MW', country: 'IDN', operator: 'Marubeni/Samtan', description: 'Coal plant in West Java' },
  { id: 'coal-idn-batang', name: 'Batang Power Station', lat: -6.92, lng: 109.75, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'IDN', operator: 'J-Power/Itochu', description: 'USC coal plant in Central Java' },
  { id: 'coal-idn-other', name: 'Other Indonesia Coal Plants', lat: -2.50, lng: 118.00, type: 'plant' as const, capacity: 24965, unit: 'MW', country: 'IDN', operator: 'Various', description: 'Aggregate across Kalimantan, Sumatra, and other islands' },

  // === South Africa (42,000 MW) ===
  { id: 'coal-zaf-medupi', name: 'Medupi Power Station', lat: -23.68, lng: 27.55, type: 'plant' as const, capacity: 4764, unit: 'MW', country: 'ZAF', operator: 'Eskom', description: 'Newest coal plant in South Africa, Limpopo; dry-cooled' },
  { id: 'coal-zaf-kusile', name: 'Kusile Power Station', lat: -25.97, lng: 29.17, type: 'plant' as const, capacity: 4800, unit: 'MW', country: 'ZAF', operator: 'Eskom', description: 'Under completion near eMalahleni, Mpumalanga' },
  { id: 'coal-zaf-matimba', name: 'Matimba Power Station', lat: -23.67, lng: 27.60, type: 'plant' as const, capacity: 3990, unit: 'MW', country: 'ZAF', operator: 'Eskom', description: 'World\'s largest direct dry-cooled power station, Limpopo' },
  { id: 'coal-zaf-kendal', name: 'Kendal Power Station', lat: -25.97, lng: 29.12, type: 'plant' as const, capacity: 4116, unit: 'MW', country: 'ZAF', operator: 'Eskom', description: 'One of largest coal plants in Southern Hemisphere, Mpumalanga' },
  { id: 'coal-zaf-majuba', name: 'Majuba Power Station', lat: -27.08, lng: 29.77, type: 'plant' as const, capacity: 4110, unit: 'MW', country: 'ZAF', operator: 'Eskom', description: 'Coal plant near Volksrust, Mpumalanga' },
  { id: 'coal-zaf-other', name: 'Other South Africa Coal Plants', lat: -26.20, lng: 28.04, type: 'plant' as const, capacity: 20220, unit: 'MW', country: 'ZAF', operator: 'Eskom', description: 'Aggregate of Lethabo, Tutuka, Duvha, Kriel, Arnot, Camden, Komati, Hendrina, and Grootvlei' },

  // === Russia (47,000 MW) ===
  { id: 'coal-rus-reftinskaya', name: 'Reftinskaya GRES', lat: 57.08, lng: 61.72, type: 'plant' as const, capacity: 3800, unit: 'MW', country: 'RUS', operator: 'Enel Russia', description: 'Largest coal plant in Russia, Sverdlovsk Oblast' },
  { id: 'coal-rus-berezovskaya', name: 'Berezovskaya GRES', lat: 56.08, lng: 90.72, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'RUS', operator: 'Unipro', description: 'Major coal plant in Krasnoyarsk Krai' },
  { id: 'coal-rus-tom-usinskaya', name: 'Tom-Usinskaya GRES', lat: 53.98, lng: 87.38, type: 'plant' as const, capacity: 1272, unit: 'MW', country: 'RUS', operator: 'SUEK', description: 'Coal plant in Kemerovo Oblast, Kuzbass' },
  { id: 'coal-rus-troitskaya', name: 'Troitskaya GRES', lat: 54.12, lng: 61.58, type: 'plant' as const, capacity: 2059, unit: 'MW', country: 'RUS', operator: 'OGK-2', description: 'Coal plant in Chelyabinsk Oblast' },
  { id: 'coal-rus-other', name: 'Other Russia Coal Plants', lat: 55.75, lng: 37.62, type: 'plant' as const, capacity: 37469, unit: 'MW', country: 'RUS', operator: 'Various', description: 'Aggregate of remaining coal plants across Russia' },

  // === Poland (27,000 MW) ===
  { id: 'coal-pol-belchatow', name: 'Bełchatów Power Station', lat: 51.26, lng: 19.33, type: 'plant' as const, capacity: 5298, unit: 'MW', country: 'POL', operator: 'PGE', description: 'Largest lignite plant in world and largest in Europe' },
  { id: 'coal-pol-other', name: 'Other Poland Coal Plants', lat: 51.92, lng: 19.15, type: 'plant' as const, capacity: 21702, unit: 'MW', country: 'POL', operator: 'Various', description: 'Aggregate of remaining hard coal and lignite plants across Poland' },

  // === Turkey (20,000 MW) ===
  { id: 'coal-tur-afsin-elbistan', name: 'Afşin-Elbistan Power Station', lat: 38.28, lng: 36.72, type: 'plant' as const, capacity: 2795, unit: 'MW', country: 'TUR', operator: 'EÜAŞ', description: 'Largest lignite plant in Turkey' },
  { id: 'coal-tur-other', name: 'Other Turkey Coal Plants', lat: 39.93, lng: 32.86, type: 'plant' as const, capacity: 17205, unit: 'MW', country: 'TUR', operator: 'Various', description: 'Aggregate of remaining coal and lignite plants across Turkey' },

  // === Vietnam (25,000 MW) ===
  { id: 'coal-vnm-other', name: 'Vietnam Coal Plants', lat: 21.03, lng: 105.85, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'VNM', operator: 'EVN/Various', description: 'Aggregate of coal plants in Red River Delta and across Vietnam' },

  // === Australia (22,000 MW) ===
  { id: 'coal-aus-eraring', name: 'Eraring Power Station', lat: -33.07, lng: 151.52, type: 'plant' as const, capacity: 2880, unit: 'MW', country: 'AUS', operator: 'Origin Energy', description: 'Largest power station in Australia, NSW' },
  { id: 'coal-aus-loy-yang', name: 'Loy Yang A Power Station', lat: -38.27, lng: 146.58, type: 'plant' as const, capacity: 2210, unit: 'MW', country: 'AUS', operator: 'AGL', description: 'Brown coal in Latrobe Valley, Victoria' },
  { id: 'coal-aus-other', name: 'Other Australia Coal Plants', lat: -25.27, lng: 133.78, type: 'plant' as const, capacity: 16910, unit: 'MW', country: 'AUS', operator: 'Various', description: 'Aggregate of remaining coal plants across Australia' },

  // === Taiwan (15,000 MW) ===
  { id: 'coal-twn-taichung', name: 'Taichung Power Plant', lat: 24.28, lng: 120.48, type: 'plant' as const, capacity: 5780, unit: 'MW', country: 'TWN', operator: 'Taipower', description: 'Largest coal plant in Taiwan and one of largest CO2 emitters' },
  { id: 'coal-twn-other', name: 'Other Taiwan Coal Plants', lat: 23.70, lng: 120.96, type: 'plant' as const, capacity: 9220, unit: 'MW', country: 'TWN', operator: 'Taipower', description: 'Aggregate of remaining coal plants across Taiwan' },

  // === Philippines (10,000 MW) ===
  { id: 'coal-phl-other', name: 'Philippines Coal Plants', lat: 12.88, lng: 121.77, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'PHL', operator: 'Various', description: 'Aggregate across Luzon, Visayas, and Mindanao' },

  // === Malaysia (10,000 MW) ===
  { id: 'coal-mys-other', name: 'Malaysia Coal Plants', lat: 4.21, lng: 101.98, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'MYS', operator: 'TNB/Various', description: 'Aggregate including Manjung and Jimah' },

  // === Ukraine (15,000 MW) ===
  { id: 'coal-ukr-other', name: 'Ukraine Coal Plants', lat: 48.38, lng: 31.17, type: 'plant' as const, capacity: 15000, unit: 'MW', country: 'UKR', operator: 'DTEK/Various', description: 'Aggregate of thermal plants across Ukraine' },

  // === Czech Republic (8,000 MW) ===
  { id: 'coal-cze-other', name: 'Czech Republic Coal Plants', lat: 49.82, lng: 15.47, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'CZE', operator: 'CEZ/EP Energy', description: 'Aggregate of lignite and hard coal plants' },

  // === United Kingdom (3,000 MW) ===
  { id: 'coal-gbr-other', name: 'United Kingdom Coal Plants', lat: 52.50, lng: -1.50, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'GBR', operator: 'Various', description: 'Remaining coal capacity' },

  // === Bangladesh (5,000 MW) ===
  { id: 'coal-bgd-other', name: 'Bangladesh Coal Plants', lat: 23.68, lng: 90.36, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'BGD', operator: 'Various', description: 'Aggregate of coal plants including Payra and Rampal' },

  // === Kazakhstan (24,000 MW) ===
  { id: 'coal-kaz-agg', name: 'Kazakhstan Coal Plants', lat: 48.02, lng: 66.92, type: 'plant' as const, capacity: 24000, unit: 'MW', country: 'KAZ', operator: 'Various', description: 'Aggregate of coal power generation across Kazakhstan' },

  // === Serbia (4,000 MW) ===
  { id: 'coal-srb-agg', name: 'Serbia Coal Plants', lat: 44.02, lng: 20.91, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'SRB', operator: 'Various', description: 'Aggregate of coal power generation across Serbia' },

  // === Bulgaria (4,000 MW) ===
  { id: 'coal-bgr-agg', name: 'Bulgaria Coal Plants', lat: 42.73, lng: 25.49, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'BGR', operator: 'Various', description: 'Aggregate of coal power generation across Bulgaria' },

  // === Bosnia and Herzegovina (2,500 MW) ===
  { id: 'coal-bih-agg', name: 'Bosnia and Herzegovina Coal Plants', lat: 43.92, lng: 17.68, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'BIH', operator: 'Various', description: 'Aggregate of coal power generation across Bosnia and Herzegovina' },

  // === Greece (2,500 MW) ===
  { id: 'coal-grc-agg', name: 'Greece Coal Plants', lat: 39.07, lng: 21.82, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'GRC', operator: 'Various', description: 'Aggregate of coal power generation across Greece' },

  // === Mongolia (1,200 MW) ===
  { id: 'coal-mng-agg', name: 'Mongolia Coal Plants', lat: 46.86, lng: 103.85, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'MNG', operator: 'Various', description: 'Aggregate of coal power generation across Mongolia' },

  // === Myanmar (3,000 MW) ===
  { id: 'coal-mmr-agg', name: 'Myanmar Coal Plants', lat: 19.76, lng: 96.08, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'MMR', operator: 'Various', description: 'Aggregate of coal power generation across Myanmar' },

  // === Cambodia (1,500 MW) ===
  { id: 'coal-khm-agg', name: 'Cambodia Coal Plants', lat: 12.57, lng: 104.99, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'KHM', operator: 'Various', description: 'Aggregate of coal power generation across Cambodia' },

  // === Pakistan (5,000 MW) ===
  { id: 'coal-pak-agg', name: 'Pakistan Coal Plants', lat: 30.38, lng: 69.35, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'PAK', operator: 'Various', description: 'Aggregate of coal power generation across Pakistan' },

  // === Thailand (5,000 MW) ===
  { id: 'coal-tha-agg', name: 'Thailand Coal Plants', lat: 15.87, lng: 100.99, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'THA', operator: 'Various', description: 'Aggregate of coal power generation across Thailand' },

  // === Cuba (200 MW) ===
  { id: 'coal-cub-agg', name: 'Cuba Coal Plants', lat: 21.52, lng: -77.78, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'CUB', operator: 'Various', description: 'Aggregate of coal power generation across Cuba' },

  // === Zimbabwe (2,000 MW) ===
  { id: 'coal-zwe-agg', name: 'Zimbabwe Coal Plants', lat: -19.02, lng: 29.15, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'ZWE', operator: 'Various', description: 'Aggregate of coal power generation across Zimbabwe' },

  // === Botswana (600 MW) ===
  { id: 'coal-bwa-agg', name: 'Botswana Coal Plants', lat: -22.33, lng: 24.68, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'BWA', operator: 'Various', description: 'Aggregate of coal power generation across Botswana' },

  // === Mozambique (600 MW) ===
  { id: 'coal-moz-agg', name: 'Mozambique Coal Plants', lat: -18.67, lng: 35.53, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'MOZ', operator: 'Various', description: 'Aggregate of coal power generation across Mozambique' },

  // === Hong Kong (4,000 MW) ===
  { id: 'coal-hkg-agg', name: 'Hong Kong Coal Plants', lat: 22.40, lng: 114.11, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'HKG', operator: 'Various', description: 'Aggregate of coal power generation across Hong Kong' },

  // === Romania (1,500 MW) ===
  { id: 'coal-rou-agg', name: 'Romania Coal Plants', lat: 45.94, lng: 24.97, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'ROU', operator: 'Various', description: 'Aggregate of coal power generation across Romania' },

  // === North Macedonia (800 MW) ===
  { id: 'coal-mkd-agg', name: 'North Macedonia Coal Plants', lat: 41.51, lng: 21.75, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'MKD', operator: 'Various', description: 'Aggregate of coal power generation across North Macedonia' },

  // === Spain (3,000 MW) ===
  { id: 'coal-esp-agg', name: 'Spain Coal Plants', lat: 40.46, lng: -3.75, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'ESP', operator: 'Various', description: 'Aggregate of coal power generation across Spain' },

  // === Chile (5,000 MW) ===
  { id: 'coal-chl-agg', name: 'Chile Coal Plants', lat: -35.68, lng: -71.54, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'CHL', operator: 'Various', description: 'Aggregate of coal power generation across Chile' },

  // === Morocco (2,500 MW) ===
  { id: 'coal-mar-agg', name: 'Morocco Coal Plants', lat: 31.79, lng: -7.09, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'MAR', operator: 'Various', description: 'Aggregate of coal power generation across Morocco' },

  // === Dominican Republic (1,000 MW) ===
  { id: 'coal-dom-agg', name: 'Dominican Republic Coal Plants', lat: 18.74, lng: -70.16, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'DOM', operator: 'Various', description: 'Aggregate of coal power generation across Dominican Republic' },

  // === Mauritius (200 MW) ===
  { id: 'coal-mus-agg', name: 'Mauritius Coal Plants', lat: -20.35, lng: 57.55, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'MUS', operator: 'Various', description: 'Aggregate of coal power generation across Mauritius' },

  // === Senegal (300 MW) ===
  { id: 'coal-sen-agg', name: 'Senegal Coal Plants', lat: 14.50, lng: -14.45, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'SEN', operator: 'Various', description: 'Aggregate of coal power generation across Senegal' },

  // === Mexico (5,000 MW) ===
  { id: 'coal-mex-agg', name: 'Mexico Coal Plants', lat: 23.63, lng: -102.55, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'MEX', operator: 'Various', description: 'Aggregate of coal power generation across Mexico' },

  // === Brazil (3,000 MW) ===
  { id: 'coal-bra-agg', name: 'Brazil Coal Plants', lat: -14.24, lng: -51.93, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of coal power generation across Brazil' },
];
