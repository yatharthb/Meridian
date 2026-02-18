import { Location } from '../../types';

export const solarLocations: Location[] = [
  // === United States (177,000 MW) ===
  { id: 'solar-edwards-sanborn', name: 'Edwards & Sanborn Solar+Storage', lat: 35.10, lng: -117.88, type: 'plant' as const, capacity: 1118, unit: 'MW', country: 'USA', operator: 'Terra-Gen', description: 'One of the largest solar-plus-storage projects in the US, Kern County, CA' },
  { id: 'solar-mount-signal', name: 'Mount Signal Solar Farm', lat: 32.65, lng: -115.62, type: 'plant' as const, capacity: 794, unit: 'MW', country: 'USA', operator: '8minutenergy Renewables', description: 'Large-scale PV facility in Imperial Valley, CA' },
  { id: 'solar-solar-star', name: 'Solar Star', lat: 34.83, lng: -118.40, type: 'plant' as const, capacity: 579, unit: 'MW', country: 'USA', operator: 'BHE Renewables', description: 'Major PV solar farm using SunPower panels in Kern/LA Counties, CA' },
  { id: 'solar-topaz', name: 'Topaz Solar Farm', lat: 35.03, lng: -119.98, type: 'plant' as const, capacity: 550, unit: 'MW', country: 'USA', operator: 'BHE Renewables', description: 'Large photovoltaic power station in San Luis Obispo County, CA' },
  { id: 'solar-desert-sunlight', name: 'Desert Sunlight Solar Farm', lat: 33.83, lng: -115.42, type: 'plant' as const, capacity: 550, unit: 'MW', country: 'USA', operator: 'NextEra/GE', description: 'PV solar farm in Riverside County desert, CA' },
  { id: 'solar-blythe', name: 'Blythe Solar Power Project', lat: 33.63, lng: -114.72, type: 'plant' as const, capacity: 485, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Large PV installation near Blythe, Riverside County, CA' },
  { id: 'solar-daggett', name: 'Daggett Solar Power Facility', lat: 34.87, lng: -116.82, type: 'plant' as const, capacity: 482, unit: 'MW', country: 'USA', operator: 'Clearway Energy', description: 'Solar-plus-storage project in San Bernardino County, CA' },
  { id: 'solar-aratina', name: 'Aratina Solar Center', lat: 35.28, lng: -118.85, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Recurrent Energy', description: 'Utility-scale solar project in Kern County, CA' },
  { id: 'solar-westlands', name: 'Westlands Solar Park', lat: 36.27, lng: -120.05, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Westlands Solar Park', description: 'Large PV installation on retired farmland in Kings County, CA' },
  { id: 'solar-ivanpah', name: 'Ivanpah Solar Electric Generating System', lat: 35.56, lng: -115.47, type: 'plant' as const, capacity: 392, unit: 'MW', country: 'USA', operator: 'BrightSource Energy', description: 'Concentrated solar thermal power facility in Mojave Desert, CA' },
  { id: 'solar-crimson', name: 'Crimson Solar Project', lat: 33.58, lng: -114.93, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'USA', operator: 'Recurrent Energy', description: 'Solar-plus-storage project in Riverside County, CA' },
  { id: 'solar-rosamond', name: 'Rosamond Solar Farm', lat: 34.83, lng: -118.20, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'SunPower', description: 'Utility-scale PV project in Kern County, CA' },
  { id: 'solar-california-valley', name: 'California Valley Solar Ranch', lat: 35.28, lng: -119.87, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'SunPower', description: 'PV solar farm in San Luis Obispo County, CA' },
  { id: 'solar-tranquillity', name: 'Tranquillity Solar Farm', lat: 36.63, lng: -120.23, type: 'plant' as const, capacity: 205, unit: 'MW', country: 'USA', operator: 'NRG Energy', description: 'PV facility in Fresno County, CA' },
  { id: 'solar-great-valley', name: 'Great Valley Solar', lat: 36.07, lng: -120.12, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Recurrent Energy', description: 'Utility-scale PV in Kings County, CA' },
  { id: 'solar-copper-mountain', name: 'Copper Mountain Solar Facility', lat: 35.78, lng: -115.00, type: 'plant' as const, capacity: 802, unit: 'MW', country: 'USA', operator: 'Sempra Energy', description: 'One of the largest PV solar installations in the US, near Boulder City, NV' },
  { id: 'solar-gemini', name: 'Gemini Solar Project', lat: 36.57, lng: -114.92, type: 'plant' as const, capacity: 690, unit: 'MW', country: 'USA', operator: 'Quinbrook/Arevia Power', description: 'Major solar-plus-storage project north of Las Vegas, NV' },
  { id: 'solar-techren', name: 'Techren Solar', lat: 36.30, lng: -115.35, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Techren Solar', description: 'Large-scale PV facility in southern Nevada' },
  { id: 'solar-silver-state-south', name: 'Silver State South Solar', lat: 35.78, lng: -115.35, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'PV solar project in Primm, NV' },
  { id: 'solar-townsite', name: 'Townsite Solar', lat: 35.88, lng: -115.20, type: 'plant' as const, capacity: 179, unit: 'MW', country: 'USA', operator: 'NV Energy', description: 'Solar facility near Boulder City, NV' },
  { id: 'solar-mesquite', name: 'Mesquite Solar Complex', lat: 33.23, lng: -112.82, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Sempra Energy', description: 'Multi-phase PV solar installation in Maricopa County, AZ' },
  { id: 'solar-sun-streams', name: 'Sun Streams Solar Farm', lat: 33.47, lng: -112.58, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Longroad Energy', description: 'Large PV project west of Phoenix, AZ' },
  { id: 'solar-agua-caliente', name: 'Agua Caliente Solar Project', lat: 32.93, lng: -113.53, type: 'plant' as const, capacity: 290, unit: 'MW', country: 'USA', operator: 'NRG Energy', description: 'PV solar farm in Yuma County, AZ' },
  { id: 'solar-red-horse', name: 'Red Horse Solar Farm', lat: 32.68, lng: -112.45, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'DEPCOM Power', description: 'PV solar plant in Pinal County, AZ' },
  { id: 'solar-pinal-central', name: 'Pinal Central Solar', lat: 32.48, lng: -111.38, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'APS', description: 'Utility-scale solar in Pinal County, AZ' },
  { id: 'solar-samson', name: 'Samson Solar Energy Center', lat: 33.42, lng: -96.05, type: 'plant' as const, capacity: 1310, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Largest solar farm in Texas, multi-phase project in Lamar/Red River Counties' },
  { id: 'solar-roadrunner', name: 'Roadrunner Solar', lat: 31.32, lng: -103.38, type: 'plant' as const, capacity: 497, unit: 'MW', country: 'USA', operator: 'Enel Green Power', description: 'Large PV project in Upton County, West Texas' },
  { id: 'solar-lapetus', name: 'Lapetus Solar', lat: 31.88, lng: -103.55, type: 'plant' as const, capacity: 460, unit: 'MW', country: 'USA', operator: 'Longroad Energy', description: 'Utility-scale solar in Pecos County, TX' },
  { id: 'solar-permian-energy', name: 'Permian Energy Center', lat: 31.42, lng: -102.88, type: 'plant' as const, capacity: 420, unit: 'MW', country: 'USA', operator: 'Orion Renewable Energy', description: 'Solar-plus-storage facility in Andrews County, TX' },
  { id: 'solar-prospero', name: 'Prospero Solar Farm', lat: 31.52, lng: -103.22, type: 'plant' as const, capacity: 379, unit: 'MW', country: 'USA', operator: '8minute Solar Energy', description: 'PV solar installation in West Texas' },
  { id: 'solar-fighting-jays', name: 'Fighting Jays Solar', lat: 30.08, lng: -97.38, type: 'plant' as const, capacity: 350, unit: 'MW', country: 'USA', operator: '7X Energy', description: 'PV solar farm in Caldwell County, TX' },
  { id: 'solar-oberon', name: 'Oberon Solar', lat: 32.22, lng: -103.78, type: 'plant' as const, capacity: 340, unit: 'MW', country: 'USA', operator: 'Ares Management', description: 'Large-scale PV project in Winkler County, TX' },
  { id: 'solar-sweetwater', name: 'Sweetwater Solar Farm', lat: 32.48, lng: -100.40, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'Duke Energy', description: 'PV solar facility near Sweetwater, Nolan County, TX' },
  { id: 'solar-longhorn', name: 'Longhorn Solar', lat: 32.32, lng: -99.78, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Recurrent Energy', description: 'Utility-scale PV project in West Texas' },
  { id: 'solar-cutlass', name: 'Cutlass Solar', lat: 28.88, lng: -97.18, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Lightsource BP', description: 'PV solar farm in South Texas' },
  { id: 'solar-pflugerville', name: 'Pflugerville Solar', lat: 30.42, lng: -97.58, type: 'plant' as const, capacity: 144, unit: 'MW', country: 'USA', operator: 'Canadian Solar', description: 'Utility-scale PV near Austin, TX' },
  { id: 'solar-mammoth', name: 'Mammoth Solar', lat: 40.73, lng: -86.70, type: 'plant' as const, capacity: 1650, unit: 'MW', country: 'USA', operator: 'AES Corporation', description: 'Largest solar farm in the US (by area), Pulaski/Starke/White Counties, IN' },
  { id: 'solar-randolph', name: 'Randolph Solar', lat: 36.35, lng: -79.72, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'One of the largest solar projects east of the Mississippi, Randolph County, VA' },
  { id: 'solar-spotsylvania', name: 'Spotsylvania Solar Energy Center', lat: 38.15, lng: -77.72, type: 'plant' as const, capacity: 625, unit: 'MW', country: 'USA', operator: 'sPower', description: 'Large utility-scale solar facility in Spotsylvania County, VA' },
  { id: 'solar-pleinmont', name: 'Pleinmont Solar', lat: 38.58, lng: -77.62, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Dominion Energy', description: 'Major solar project in Fauquier County, VA' },
  { id: 'solar-badger-hollow', name: 'Badger Hollow Solar Farm', lat: 43.12, lng: -90.57, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Largest solar farm in Wisconsin, Iowa County, WI' },
  { id: 'solar-muscle-shoals', name: 'Muscle Shoals Solar', lat: 34.78, lng: -87.58, type: 'plant' as const, capacity: 227, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Major solar project for TVA in Colbert County, AL' },
  { id: 'solar-dodge-county', name: 'Dodge County Solar', lat: 32.17, lng: -83.18, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Silicon Ranch', description: 'Utility-scale PV in Dodge County, GA' },
  { id: 'solar-hickory-park', name: 'Hickory Park Solar', lat: 32.72, lng: -83.48, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Large PV project in Twiggs County, GA' },
  { id: 'solar-origin', name: 'Origin Solar', lat: 35.42, lng: -78.95, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Strata Solar', description: 'Utility-scale solar in Harnett County, NC' },
  { id: 'solar-conetoe', name: 'Conetoe Solar', lat: 35.82, lng: -77.42, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Avangrid Renewables', description: 'PV facility in Edgecombe County, NC' },
  { id: 'solar-coosa', name: 'Coosa Solar Farm', lat: 33.80, lng: -86.02, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'Southern Company', description: 'Solar project in St. Clair County, AL' },
  { id: 'solar-birdsboro', name: 'Birdsboro Solar', lat: 40.28, lng: -75.78, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'BrightSphere Solar', description: 'PV solar installation in Berks County, PA' },
  { id: 'solar-babcock-ranch', name: 'Babcock Ranch Solar Energy Center', lat: 26.82, lng: -81.72, type: 'plant' as const, capacity: 150, unit: 'MW', country: 'USA', operator: 'NextEra/FPL', description: 'Solar-powered community in Charlotte County, FL' },
  { id: 'solar-fpl-discovery', name: 'FPL Discovery Solar Energy Center', lat: 27.55, lng: -80.90, type: 'plant' as const, capacity: 74.5, unit: 'MW', country: 'USA', operator: 'NextEra/FPL', description: 'Utility-scale PV in Indian River County, FL' },
  { id: 'solar-azalea', name: 'Azalea Solar Energy Center', lat: 30.52, lng: -85.82, type: 'plant' as const, capacity: 74.5, unit: 'MW', country: 'USA', operator: 'NextEra/FPL', description: 'FPL solar center in Washington County, FL' },
  { id: 'solar-linden', name: 'Linden Solar', lat: 40.63, lng: -74.23, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'PSEG Solar Source', description: 'Large PV installation in Linden, NJ' },
  { id: 'solar-pratt', name: 'Pratt Solar Farm', lat: 37.65, lng: -98.74, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'NextEra Energy', description: 'Utility-scale solar in Pratt County, KS' },
  { id: 'solar-skeleton-creek', name: 'Skeleton Creek Solar Farm', lat: 36.18, lng: -97.95, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'Invenergy', description: 'Large-scale solar in Garfield County, OK' },
  { id: 'solar-ca-distributed', name: 'California Distributed & Other Solar', lat: 36.78, lng: -119.42, type: 'plant' as const, capacity: 25945, unit: 'MW', country: 'USA', operator: 'Various (PG&E, SCE, SDG&E, community solar)', description: 'Aggregate of distributed rooftop, community solar, and smaller utility-scale PV across California' },
  { id: 'solar-tx-distributed', name: 'Texas Distributed & Other Solar', lat: 31.97, lng: -99.90, type: 'plant' as const, capacity: 14450, unit: 'MW', country: 'USA', operator: 'Various (ERCOT market participants)', description: 'Aggregate of distributed, community, and smaller utility-scale solar across Texas' },
  { id: 'solar-fl-distributed', name: 'Florida Distributed & Other Solar', lat: 27.66, lng: -81.52, type: 'plant' as const, capacity: 8201, unit: 'MW', country: 'USA', operator: 'Various (FPL, Duke Energy Florida, TECO)', description: 'Aggregate of FPL solar centers, distributed rooftop, and other utility-scale PV across Florida' },
  { id: 'solar-nc-distributed', name: 'North Carolina Distributed & Other Solar', lat: 35.76, lng: -79.02, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'USA', operator: 'Various (Duke Energy Carolinas, Strata Solar)', description: 'Aggregate of utility-scale and distributed solar across North Carolina' },
  { id: 'solar-va-distributed', name: 'Virginia Distributed & Other Solar', lat: 37.43, lng: -78.66, type: 'plant' as const, capacity: 3575, unit: 'MW', country: 'USA', operator: 'Various (Dominion Energy, Appalachian Power)', description: 'Aggregate of distributed and smaller utility-scale solar across Virginia' },
  { id: 'solar-ga-distributed', name: 'Georgia Distributed & Other Solar', lat: 32.17, lng: -83.44, type: 'plant' as const, capacity: 3700, unit: 'MW', country: 'USA', operator: 'Various (Georgia Power, Southern Company)', description: 'Aggregate of utility-scale and distributed solar across Georgia' },
  { id: 'solar-az-distributed', name: 'Arizona Distributed & Other Solar', lat: 34.05, lng: -111.09, type: 'plant' as const, capacity: 5610, unit: 'MW', country: 'USA', operator: 'Various (APS, SRP, TEP)', description: 'Aggregate of distributed rooftop and smaller utility-scale solar across Arizona' },
  { id: 'solar-nv-distributed', name: 'Nevada Distributed & Other Solar', lat: 38.80, lng: -116.42, type: 'plant' as const, capacity: 3679, unit: 'MW', country: 'USA', operator: 'Various (NV Energy)', description: 'Aggregate of distributed and smaller utility-scale solar across Nevada' },
  { id: 'solar-nj-distributed', name: 'New Jersey Distributed & Other Solar', lat: 40.06, lng: -74.41, type: 'plant' as const, capacity: 4080, unit: 'MW', country: 'USA', operator: 'Various (PSEG, community solar programs)', description: 'Aggregate of rooftop, community, and utility-scale solar across New Jersey' },
  { id: 'solar-ma-distributed', name: 'Massachusetts Distributed & Other Solar', lat: 42.41, lng: -71.38, type: 'plant' as const, capacity: 3900, unit: 'MW', country: 'USA', operator: 'Various (National Grid, Eversource)', description: 'Aggregate of rooftop, community, and utility-scale solar across Massachusetts' },
  { id: 'solar-ny-distributed', name: 'New York Distributed & Other Solar', lat: 42.17, lng: -74.95, type: 'plant' as const, capacity: 3800, unit: 'MW', country: 'USA', operator: 'Various (NYSERDA, ConEd, community solar)', description: 'Aggregate of distributed and utility-scale solar across New York' },
  { id: 'solar-oh-distributed', name: 'Ohio Distributed & Other Solar', lat: 40.42, lng: -82.91, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'USA', operator: 'Various (AEP Ohio, Duke Energy Ohio)', description: 'Aggregate of utility-scale and distributed solar across Ohio' },
  { id: 'solar-in-distributed', name: 'Indiana Distributed & Other Solar', lat: 40.27, lng: -86.13, type: 'plant' as const, capacity: 1350, unit: 'MW', country: 'USA', operator: 'Various (AES Indiana, Duke Energy Indiana)', description: 'Aggregate of distributed and smaller utility-scale solar across Indiana' },
  { id: 'solar-il-distributed', name: 'Illinois Distributed & Other Solar', lat: 40.63, lng: -89.40, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'USA', operator: 'Various (ComEd, Ameren Illinois)', description: 'Aggregate of community and utility-scale solar across Illinois' },
  { id: 'solar-mn-distributed', name: 'Minnesota Distributed & Other Solar', lat: 46.73, lng: -94.69, type: 'plant' as const, capacity: 2100, unit: 'MW', country: 'USA', operator: 'Various (Xcel Energy, community solar gardens)', description: 'Aggregate of community solar gardens and utility-scale PV across Minnesota' },
  { id: 'solar-sc-distributed', name: 'South Carolina Distributed & Other Solar', lat: 33.84, lng: -81.16, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'USA', operator: 'Various (Dominion Energy SC, Duke Energy)', description: 'Aggregate of utility-scale and distributed solar across South Carolina' },
  { id: 'solar-al-distributed', name: 'Alabama Distributed & Other Solar', lat: 32.32, lng: -86.90, type: 'plant' as const, capacity: 1623, unit: 'MW', country: 'USA', operator: 'Various (Alabama Power, TVA)', description: 'Aggregate of utility-scale and distributed solar across Alabama' },
  { id: 'solar-md-distributed', name: 'Maryland Distributed & Other Solar', lat: 39.05, lng: -76.64, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'USA', operator: 'Various (BGE, Pepco, community solar)', description: 'Aggregate of community and utility-scale solar across Maryland' },
  { id: 'solar-co-distributed', name: 'Colorado Distributed & Other Solar', lat: 39.55, lng: -105.78, type: 'plant' as const, capacity: 2700, unit: 'MW', country: 'USA', operator: 'Various (Xcel Energy, community solar)', description: 'Aggregate of community solar gardens and utility-scale PV across Colorado' },
  { id: 'solar-nm-distributed', name: 'New Mexico Distributed & Other Solar', lat: 34.52, lng: -105.87, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'USA', operator: 'Various (PNM, El Paso Electric)', description: 'Aggregate of utility-scale and distributed solar across New Mexico' },
  { id: 'solar-ut-distributed', name: 'Utah Distributed & Other Solar', lat: 39.32, lng: -111.09, type: 'plant' as const, capacity: 1800, unit: 'MW', country: 'USA', operator: 'Various (Rocky Mountain Power)', description: 'Aggregate of utility-scale and distributed solar across Utah' },
  { id: 'solar-pa-distributed', name: 'Pennsylvania Distributed & Other Solar', lat: 41.20, lng: -77.19, type: 'plant' as const, capacity: 1350, unit: 'MW', country: 'USA', operator: 'Various (PECO, PPL, community solar)', description: 'Aggregate of distributed and community solar across Pennsylvania' },
  { id: 'solar-wi-distributed', name: 'Wisconsin Distributed & Other Solar', lat: 43.78, lng: -88.79, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various (We Energies, Alliant Energy)', description: 'Aggregate of distributed and smaller utility-scale solar across Wisconsin' },
  { id: 'solar-mi-distributed', name: 'Michigan Distributed & Other Solar', lat: 44.31, lng: -85.60, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'USA', operator: 'Various (DTE Energy, Consumers Energy)', description: 'Aggregate of distributed and utility-scale solar across Michigan' },
  { id: 'solar-ar-distributed', name: 'Arkansas Distributed & Other Solar', lat: 35.20, lng: -91.83, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Various (Entergy Arkansas)', description: 'Aggregate of utility-scale solar across Arkansas' },
  { id: 'solar-ms-distributed', name: 'Mississippi Distributed & Other Solar', lat: 32.35, lng: -89.40, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various (Entergy Mississippi, Mississippi Power)', description: 'Aggregate of utility-scale solar across Mississippi' },
  { id: 'solar-ks-distributed', name: 'Kansas Distributed & Other Solar', lat: 38.50, lng: -98.77, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various (Evergy)', description: 'Aggregate of utility-scale solar across Kansas' },
  { id: 'solar-ok-distributed', name: 'Oklahoma Distributed & Other Solar', lat: 35.47, lng: -97.52, type: 'plant' as const, capacity: 550, unit: 'MW', country: 'USA', operator: 'Various (OG&E, PSO)', description: 'Aggregate of utility-scale solar across Oklahoma' },
  { id: 'solar-ct-distributed', name: 'Connecticut Distributed & Other Solar', lat: 41.60, lng: -72.73, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Various (Eversource, UI)', description: 'Aggregate of rooftop and community solar across Connecticut' },
  { id: 'solar-or-distributed', name: 'Oregon Distributed & Other Solar', lat: 43.80, lng: -120.55, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'USA', operator: 'Various (PGE, PacifiCorp)', description: 'Aggregate of utility-scale and distributed solar across Oregon' },
  { id: 'solar-hi-distributed', name: 'Hawaii Distributed & Other Solar', lat: 21.09, lng: -157.50, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'USA', operator: 'Various (Hawaiian Electric, rooftop solar)', description: 'Aggregate of distributed rooftop and utility-scale solar across Hawaii' },
  { id: 'solar-vt-distributed', name: 'Vermont Distributed & Other Solar', lat: 44.56, lng: -72.58, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various (Green Mountain Power)', description: 'Aggregate of community and distributed solar across Vermont' },
  { id: 'solar-ri-distributed', name: 'Rhode Island Distributed & Other Solar', lat: 41.58, lng: -71.48, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various (Rhode Island Energy)', description: 'Aggregate of community and distributed solar across Rhode Island' },
  { id: 'solar-nh-distributed', name: 'New Hampshire Distributed & Other Solar', lat: 43.19, lng: -71.57, type: 'plant' as const, capacity: 250, unit: 'MW', country: 'USA', operator: 'Various (Eversource, Liberty Utilities)', description: 'Aggregate of community and distributed solar across New Hampshire' },
  { id: 'solar-me-distributed', name: 'Maine Distributed & Other Solar', lat: 45.25, lng: -69.45, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various (Versant Power, CMP)', description: 'Aggregate of community and utility-scale solar across Maine' },
  { id: 'solar-de-distributed', name: 'Delaware Distributed & Other Solar', lat: 39.16, lng: -75.52, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various (Delmarva Power)', description: 'Aggregate of distributed and utility-scale solar across Delaware' },
  { id: 'solar-wa-distributed', name: 'Washington Distributed & Other Solar', lat: 47.38, lng: -120.44, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Various (Puget Sound Energy)', description: 'Aggregate of distributed and community solar across Washington state' },
  { id: 'solar-mo-distributed', name: 'Missouri Distributed & Other Solar', lat: 38.57, lng: -92.60, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'USA', operator: 'Various (Ameren Missouri, Evergy)', description: 'Aggregate of utility-scale and distributed solar across Missouri' },
  { id: 'solar-ia-distributed', name: 'Iowa Distributed & Other Solar', lat: 41.88, lng: -93.10, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'USA', operator: 'Various (MidAmerican, Alliant Energy)', description: 'Aggregate of community and utility-scale solar across Iowa' },
  { id: 'solar-tn-distributed', name: 'Tennessee Distributed & Other Solar', lat: 35.52, lng: -86.58, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'USA', operator: 'Various (TVA, local utilities)', description: 'Aggregate of TVA solar programs and distributed PV across Tennessee' },
  { id: 'solar-la-distributed', name: 'Louisiana Distributed & Other Solar', lat: 31.17, lng: -91.87, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'USA', operator: 'Various (Entergy Louisiana, Cleco)', description: 'Aggregate of utility-scale solar across Louisiana' },
  { id: 'solar-ky-distributed', name: 'Kentucky Distributed & Other Solar', lat: 37.84, lng: -84.27, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various (LG&E/KU, Kentucky Power)', description: 'Aggregate of utility-scale and distributed solar across Kentucky' },
  { id: 'solar-wv-distributed', name: 'West Virginia Distributed & Other Solar', lat: 38.60, lng: -80.45, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'Various (AEP, Mon Power)', description: 'Aggregate of distributed and small-scale solar across West Virginia' },
  { id: 'solar-ne-distributed', name: 'Nebraska Distributed & Other Solar', lat: 41.49, lng: -99.90, type: 'plant' as const, capacity: 200, unit: 'MW', country: 'USA', operator: 'Various (NPPD, OPPD)', description: 'Aggregate of utility-scale and distributed solar across Nebraska' },
  { id: 'solar-mt-distributed', name: 'Montana Distributed & Other Solar', lat: 46.88, lng: -110.36, type: 'plant' as const, capacity: 100, unit: 'MW', country: 'USA', operator: 'Various (NorthWestern Energy)', description: 'Aggregate of distributed and community solar across Montana' },
  { id: 'solar-id-distributed', name: 'Idaho Distributed & Other Solar', lat: 44.07, lng: -114.74, type: 'plant' as const, capacity: 300, unit: 'MW', country: 'USA', operator: 'Various (Idaho Power)', description: 'Aggregate of utility-scale and distributed solar across Idaho' },
  { id: 'solar-sd-distributed', name: 'South Dakota Distributed & Other Solar', lat: 43.97, lng: -99.90, type: 'plant' as const, capacity: 50, unit: 'MW', country: 'USA', operator: 'Various (Black Hills Energy)', description: 'Aggregate of distributed solar across South Dakota' },
  { id: 'solar-nd-distributed', name: 'North Dakota Distributed & Other Solar', lat: 47.55, lng: -100.34, type: 'plant' as const, capacity: 50, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of distributed solar across North Dakota' },
  { id: 'solar-wy-distributed', name: 'Wyoming Distributed & Other Solar', lat: 43.08, lng: -107.29, type: 'plant' as const, capacity: 50, unit: 'MW', country: 'USA', operator: 'Various (Rocky Mountain Power)', description: 'Aggregate of distributed solar across Wyoming' },
  { id: 'solar-ak-distributed', name: 'Alaska Distributed & Other Solar', lat: 64.20, lng: -152.49, type: 'plant' as const, capacity: 20, unit: 'MW', country: 'USA', operator: 'Various', description: 'Aggregate of distributed solar across Alaska' },

  // === China (888,000 MW) ===
  { id: 'solar-chn-tengger', name: 'Tengger Desert Solar Park', lat: 37.55, lng: 104.04, type: 'plant' as const, capacity: 1547, unit: 'MW', country: 'CHN', operator: 'SPIC/Zhongwei', description: 'One of world\'s largest solar parks in Ningxia desert' },
  { id: 'solar-chn-golmud', name: 'Golmud Solar Park', lat: 36.42, lng: 94.90, type: 'plant' as const, capacity: 2800, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Massive solar installation on Qinghai-Tibet Plateau at 2,800m elevation' },
  { id: 'solar-chn-datong', name: 'Datong Solar Top Runner Base', lat: 40.08, lng: 113.30, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Showcase solar park using advanced technology near coal mining subsidence area, Shanxi' },
  { id: 'solar-chn-huanghe-hainan', name: 'Huanghe Hydropower Hainan Solar Park', lat: 36.30, lng: 100.62, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'CHN', operator: 'Huanghe Hydropower', description: 'Mega solar park in Qinghai Province' },
  { id: 'solar-chn-kubuqi', name: 'Kubuqi Desert Solar', lat: 40.50, lng: 109.80, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'CHN', operator: 'Elion Group', description: 'Solar park combined with desert restoration in Inner Mongolia' },
  { id: 'solar-chn-shandong', name: 'Shandong Aggregate', lat: 36.67, lng: 117.02, type: 'plant' as const, capacity: 75000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of utility and distributed solar across Shandong Province' },
  { id: 'solar-chn-hebei', name: 'Hebei Aggregate', lat: 39.00, lng: 115.50, type: 'plant' as const, capacity: 65000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of solar across Hebei Province' },
  { id: 'solar-chn-jiangsu', name: 'Jiangsu Aggregate', lat: 33.00, lng: 119.50, type: 'plant' as const, capacity: 55000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of solar including fishery-solar complementary projects' },
  { id: 'solar-chn-zhejiang', name: 'Zhejiang Aggregate', lat: 29.20, lng: 120.50, type: 'plant' as const, capacity: 40000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of distributed and utility solar' },
  { id: 'solar-chn-anhui', name: 'Anhui Aggregate', lat: 31.86, lng: 117.28, type: 'plant' as const, capacity: 35000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of solar including floating solar on coal subsidence lakes' },
  { id: 'solar-chn-henan', name: 'Henan Aggregate', lat: 34.00, lng: 113.50, type: 'plant' as const, capacity: 30000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of solar across Henan' },
  { id: 'solar-chn-xinjiang', name: 'Xinjiang Aggregate', lat: 41.50, lng: 86.00, type: 'plant' as const, capacity: 28000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of desert solar across Xinjiang' },
  { id: 'solar-chn-inner-mongolia', name: 'Inner Mongolia Aggregate', lat: 44.00, lng: 113.00, type: 'plant' as const, capacity: 40000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of solar across Inner Mongolia' },
  { id: 'solar-chn-qinghai', name: 'Qinghai Aggregate', lat: 36.50, lng: 96.00, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of high-altitude solar across Qinghai' },
  { id: 'solar-chn-other', name: 'Other China Solar', lat: 35.86, lng: 104.20, type: 'plant' as const, capacity: 486953, unit: 'MW', country: 'CHN', operator: 'Various', description: 'Aggregate of remaining solar across all other provinces' },

  // === India (97,000 MW) ===
  { id: 'solar-ind-bhadla', name: 'Bhadla Solar Park', lat: 27.54, lng: 71.92, type: 'plant' as const, capacity: 2245, unit: 'MW', country: 'IND', operator: 'Various/NTPC/Adani', description: 'World\'s largest solar park in Rajasthan desert' },
  { id: 'solar-ind-pavagada', name: 'Pavagada Solar Park', lat: 14.10, lng: 77.28, type: 'plant' as const, capacity: 2050, unit: 'MW', country: 'IND', operator: 'Karnataka Solar Power Development Corp', description: 'Ultra Mega Solar Park in Tumkur, Karnataka' },
  { id: 'solar-ind-kurnool', name: 'Kurnool Ultra Mega Solar Park', lat: 15.83, lng: 78.03, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'IND', operator: 'APGENCO', description: 'Major solar park in Andhra Pradesh' },
  { id: 'solar-ind-rewa', name: 'Rewa Solar Park', lat: 24.53, lng: 81.30, type: 'plant' as const, capacity: 750, unit: 'MW', country: 'IND', operator: 'Rewa Ultra Mega Solar', description: 'Landmark solar park in Madhya Pradesh; powers Delhi Metro' },
  { id: 'solar-ind-np-kunta', name: 'NP Kunta Ultra Mega Solar Park', lat: 14.33, lng: 78.22, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'IND', operator: 'NTPC', description: 'Solar park in Anantapur, Andhra Pradesh' },
  { id: 'solar-ind-rajasthan', name: 'Rajasthan Aggregate', lat: 27.00, lng: 72.00, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'IND', operator: 'Various/Adani/Tata', description: 'Aggregate of solar across Rajasthan' },
  { id: 'solar-ind-gujarat', name: 'Gujarat Aggregate', lat: 23.00, lng: 72.00, type: 'plant' as const, capacity: 15000, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of solar including Charanka Solar Park' },
  { id: 'solar-ind-karnataka', name: 'Karnataka Aggregate', lat: 15.00, lng: 76.00, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of solar across Karnataka' },
  { id: 'solar-ind-tamil-nadu', name: 'Tamil Nadu Aggregate', lat: 11.00, lng: 78.00, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of solar across Tamil Nadu' },
  { id: 'solar-ind-andhra-pradesh', name: 'Andhra Pradesh Aggregate', lat: 15.91, lng: 79.74, type: 'plant' as const, capacity: 6455, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of solar across Andhra Pradesh' },
  { id: 'solar-ind-other', name: 'Other India Solar', lat: 20.59, lng: 78.96, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'IND', operator: 'Various', description: 'Aggregate of remaining solar across Madhya Pradesh, Maharashtra, Uttar Pradesh, Telangana, and other states' },

  // === Brazil (53,000 MW) ===
  { id: 'solar-bra-sao-goncalo', name: 'São Gonçalo Solar Park', lat: -6.75, lng: -38.27, type: 'plant' as const, capacity: 864, unit: 'MW', country: 'BRA', operator: 'Enel Green Power', description: 'One of largest solar parks in Latin America, Piauí' },
  { id: 'solar-bra-janauba', name: 'Janaúba Solar Complex', lat: -15.80, lng: -43.31, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Solar complex in Minas Gerais' },
  { id: 'solar-bra-minas-gerais', name: 'Minas Gerais Aggregate', lat: -18.50, lng: -44.00, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of solar across Minas Gerais' },
  { id: 'solar-bra-sao-paulo', name: 'São Paulo Aggregate', lat: -22.00, lng: -49.50, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of distributed and utility solar' },
  { id: 'solar-bra-bahia', name: 'Bahia Aggregate', lat: -13.00, lng: -41.50, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of solar across Bahia' },
  { id: 'solar-bra-piaui', name: 'Piauí Aggregate', lat: -7.00, lng: -42.00, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of solar in Piauí' },
  { id: 'solar-bra-ceara', name: 'Ceará Aggregate', lat: -5.00, lng: -39.00, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of solar in Ceará' },
  { id: 'solar-bra-other', name: 'Other Brazil Solar', lat: -14.24, lng: -51.93, type: 'plant' as const, capacity: 13936, unit: 'MW', country: 'BRA', operator: 'Various', description: 'Aggregate of remaining solar capacity across Brazil' },

  // === Germany (82,000 MW) ===
  { id: 'solar-deu-weesow', name: 'Weesow-Willmersdorf', lat: 52.70, lng: 13.80, type: 'plant' as const, capacity: 187, unit: 'MW', country: 'DEU', operator: 'EnBW', description: 'Largest solar park in Germany, Brandenburg' },
  { id: 'solar-deu-senftenberg', name: 'Senftenberg Solar Park', lat: 51.52, lng: 14.00, type: 'plant' as const, capacity: 166, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Major solar park in Lusatia, Brandenburg' },
  { id: 'solar-deu-bavaria', name: 'Bavaria Aggregate', lat: 48.80, lng: 11.50, type: 'plant' as const, capacity: 20000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of solar across Bavaria, Germany\'s sunniest state' },
  { id: 'solar-deu-baden-wuerttemberg', name: 'Baden-Württemberg Aggregate', lat: 48.60, lng: 9.20, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of solar across Baden-Württemberg' },
  { id: 'solar-deu-nrw', name: 'North Rhine-Westphalia Aggregate', lat: 51.43, lng: 7.66, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of solar across NRW' },
  { id: 'solar-deu-brandenburg', name: 'Brandenburg/Berlin Aggregate', lat: 52.50, lng: 13.40, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of solar in Brandenburg' },
  { id: 'solar-deu-lower-saxony', name: 'Lower Saxony Aggregate', lat: 52.64, lng: 9.85, type: 'plant' as const, capacity: 6000, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of solar in Lower Saxony' },
  { id: 'solar-deu-other', name: 'Other Germany Solar', lat: 51.17, lng: 10.45, type: 'plant' as const, capacity: 30647, unit: 'MW', country: 'DEU', operator: 'Various', description: 'Aggregate of remaining solar capacity across other German states' },

  // === Japan (90,000 MW) ===
  { id: 'solar-jpn-setouchi', name: 'Setouchi Kirei Mega Solar', lat: 34.63, lng: 134.17, type: 'plant' as const, capacity: 235, unit: 'MW', country: 'JPN', operator: 'Setouchi Joint', description: 'Largest solar farm in Japan, on reclaimed salt fields in Okayama' },
  { id: 'solar-jpn-ukujima', name: 'Ukujima Mega Solar', lat: 33.00, lng: 129.07, type: 'plant' as const, capacity: 480, unit: 'MW', country: 'JPN', operator: 'Photovolt Development', description: 'One of largest PV plants in Japan, Nagasaki Prefecture' },
  { id: 'solar-jpn-aomori', name: 'Aomori Aggregate', lat: 40.82, lng: 140.74, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of solar in northern Honshu' },
  { id: 'solar-jpn-ibaraki-tochigi', name: 'Ibaraki/Tochigi Aggregate', lat: 36.50, lng: 140.00, type: 'plant' as const, capacity: 6000, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of solar in Kanto region' },
  { id: 'solar-jpn-kyushu', name: 'Kyushu Aggregate', lat: 33.00, lng: 131.00, type: 'plant' as const, capacity: 15000, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of solar across Kyushu island' },
  { id: 'solar-jpn-hokkaido', name: 'Hokkaido Aggregate', lat: 43.00, lng: 141.35, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of solar in Hokkaido' },
  { id: 'solar-jpn-other', name: 'Other Japan Solar', lat: 36.20, lng: 140.00, type: 'plant' as const, capacity: 58285, unit: 'MW', country: 'JPN', operator: 'Various', description: 'Aggregate of remaining distributed and utility-scale solar across Japan' },

  // === Australia (36,000 MW) ===
  { id: 'solar-aus-limondale', name: 'Limondale Solar Farm', lat: -34.10, lng: 146.39, type: 'plant' as const, capacity: 349, unit: 'MW', country: 'AUS', operator: 'Canadian Solar', description: 'Largest solar farm in NSW' },
  { id: 'solar-aus-western-downs', name: 'Western Downs Green Power Hub', lat: -26.85, lng: 151.00, type: 'plant' as const, capacity: 400, unit: 'MW', country: 'AUS', operator: 'Neoen', description: 'One of largest in Southern Hemisphere, Queensland' },
  { id: 'solar-aus-queensland', name: 'Queensland Aggregate', lat: -23.50, lng: 149.00, type: 'plant' as const, capacity: 10000, unit: 'MW', country: 'AUS', operator: 'Various', description: 'Aggregate of solar across Queensland' },
  { id: 'solar-aus-nsw', name: 'NSW Aggregate', lat: -32.00, lng: 148.00, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'AUS', operator: 'Various', description: 'Aggregate of solar across New South Wales' },
  { id: 'solar-aus-victoria', name: 'Victoria Aggregate', lat: -37.00, lng: 145.00, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'AUS', operator: 'Various', description: 'Aggregate of solar across Victoria' },
  { id: 'solar-aus-other', name: 'Other Australia Solar', lat: -25.27, lng: 133.78, type: 'plant' as const, capacity: 12251, unit: 'MW', country: 'AUS', operator: 'Various', description: 'Aggregate of remaining solar in SA, WA, and rooftop across Australia' },

  // === Spain (35,000 MW) ===
  { id: 'solar-esp-other', name: 'Other Spain Solar', lat: 40.46, lng: -3.75, type: 'plant' as const, capacity: 35000, unit: 'MW', country: 'ESP', operator: 'Various/Iberdrola/Acciona', description: 'Aggregate including Extremadura, Andalusia, and Castilla-La Mancha' },

  // === Italy (30,000 MW) ===
  { id: 'solar-ita-other', name: 'Other Italy Solar', lat: 41.87, lng: 12.57, type: 'plant' as const, capacity: 30000, unit: 'MW', country: 'ITA', operator: 'Various/Enel', description: 'Aggregate of distributed and utility-scale solar across Italy' },

  // === South Korea (25,000 MW) ===
  { id: 'solar-kor-other', name: 'Other South Korea Solar', lat: 36.50, lng: 127.77, type: 'plant' as const, capacity: 25000, unit: 'MW', country: 'KOR', operator: 'Various/KEPCO', description: 'Aggregate of solar across South Korea' },

  // === Netherlands (24,000 MW) ===
  { id: 'solar-nld-other', name: 'Other Netherlands Solar', lat: 52.13, lng: 5.29, type: 'plant' as const, capacity: 24000, unit: 'MW', country: 'NLD', operator: 'Various', description: 'Aggregate of rooftop and utility solar, one of highest per-capita in world' },

  // === France (20,000 MW) ===
  { id: 'solar-fra-other', name: 'Other France Solar', lat: 46.60, lng: 2.50, type: 'plant' as const, capacity: 20000, unit: 'MW', country: 'FRA', operator: 'Various/EDF/Total', description: 'Aggregate across southern France and distributed' },

  // === Vietnam (17,000 MW) ===
  { id: 'solar-vnm-other', name: 'Other Vietnam Solar', lat: 14.06, lng: 108.28, type: 'plant' as const, capacity: 17000, unit: 'MW', country: 'VNM', operator: 'Various', description: 'Aggregate of solar parks in Ninh Thuận, Bình Thuận, and other provinces' },

  // === United Kingdom (16,000 MW) ===
  { id: 'solar-gbr-other', name: 'Other UK Solar', lat: 52.50, lng: -1.50, type: 'plant' as const, capacity: 16000, unit: 'MW', country: 'GBR', operator: 'Various', description: 'Aggregate of utility-scale and rooftop solar across UK' },

  // === Turkey (15,000 MW) ===
  { id: 'solar-tur-other', name: 'Other Turkey Solar', lat: 39.93, lng: 32.86, type: 'plant' as const, capacity: 15000, unit: 'MW', country: 'TUR', operator: 'Various/Kalyon', description: 'Aggregate across Turkey including Karapınar Solar Plant' },

  // === Chile (12,000 MW) ===
  { id: 'solar-chl-atacama', name: 'Atacama Solar', lat: -23.50, lng: -69.50, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'CHL', operator: 'Various', description: 'Solar in Atacama Desert, highest irradiance in world' },
  { id: 'solar-chl-other', name: 'Other Chile Solar', lat: -33.45, lng: -70.67, type: 'plant' as const, capacity: 11000, unit: 'MW', country: 'CHL', operator: 'Various', description: 'Aggregate of remaining solar capacity across Chile' },

  // === Poland (12,000 MW) ===
  { id: 'solar-pol-other', name: 'Other Poland Solar', lat: 51.92, lng: 19.15, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'POL', operator: 'Various', description: 'Aggregate of distributed and utility solar' },

  // === Mexico (12,000 MW) ===
  { id: 'solar-mex-other', name: 'Other Mexico Solar', lat: 23.63, lng: -102.55, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'MEX', operator: 'Various/Enel/Acciona', description: 'Aggregate including Sonoran Desert and central Mexico' },

  // === South Africa (8,000 MW) ===
  { id: 'solar-zaf-other', name: 'Other South Africa Solar', lat: -30.56, lng: 22.94, type: 'plant' as const, capacity: 8000, unit: 'MW', country: 'ZAF', operator: 'Various', description: 'Aggregate of PV across Northern Cape and other provinces' },

  // === United Arab Emirates (8,000 MW) ===
  { id: 'solar-are-mbr', name: 'Mohammed bin Rashid Al Maktoum Solar Park', lat: 24.77, lng: 55.37, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'ARE', operator: 'DEWA/ACWA', description: 'World\'s largest single-site solar park in Dubai' },
  { id: 'solar-are-other', name: 'Other UAE Solar', lat: 24.45, lng: 54.65, type: 'plant' as const, capacity: 3000, unit: 'MW', country: 'ARE', operator: 'Various', description: 'Aggregate of remaining solar capacity across UAE' },

  // === Saudi Arabia (8,000 MW) ===
  { id: 'solar-sau-sudair', name: 'Sudair Solar', lat: 25.50, lng: 45.60, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'SAU', operator: 'ACWA Power', description: 'Largest solar project in Saudi Arabia' },
  { id: 'solar-sau-other', name: 'Other Saudi Arabia Solar', lat: 24.71, lng: 46.68, type: 'plant' as const, capacity: 6500, unit: 'MW', country: 'SAU', operator: 'Various', description: 'Aggregate of remaining solar capacity across Saudi Arabia' },

  // === Egypt (5,000 MW) ===
  { id: 'solar-egy-benban', name: 'Benban Solar Park', lat: 24.45, lng: 32.72, type: 'plant' as const, capacity: 1650, unit: 'MW', country: 'EGY', operator: 'Various', description: 'One of world\'s largest solar parks near Aswan' },
  { id: 'solar-egy-other', name: 'Other Egypt Solar', lat: 30.04, lng: 31.24, type: 'plant' as const, capacity: 3350, unit: 'MW', country: 'EGY', operator: 'Various', description: 'Aggregate of remaining solar capacity across Egypt' },

  // === Taiwan (12000 MW) ===
  { id: 'solar-twn-agg', name: 'Taiwan Solar Plants', lat: 23.70, lng: 120.96, type: 'plant' as const, capacity: 12000, unit: 'MW', country: 'TWN', operator: 'Various', description: 'Aggregate of solar power generation across Taiwan' },

  // === Belgium (7000 MW) ===
  { id: 'solar-bel-agg', name: 'Belgium Solar Plants', lat: 50.50, lng: 4.00, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'BEL', operator: 'Various', description: 'Aggregate of solar power generation across Belgium' },

  // === Ukraine (7000 MW) ===
  { id: 'solar-ukr-agg', name: 'Ukraine Solar Plants', lat: 48.38, lng: 31.17, type: 'plant' as const, capacity: 7000, unit: 'MW', country: 'UKR', operator: 'Various', description: 'Aggregate of solar power generation across Ukraine' },

  // === Austria (6000 MW) ===
  { id: 'solar-aut-agg', name: 'Austria Solar Plants', lat: 47.52, lng: 14.55, type: 'plant' as const, capacity: 6000, unit: 'MW', country: 'AUT', operator: 'Various', description: 'Aggregate of solar power generation across Austria' },

  // === Greece (5500 MW) ===
  { id: 'solar-grc-agg', name: 'Greece Solar Plants', lat: 39.07, lng: 21.82, type: 'plant' as const, capacity: 5500, unit: 'MW', country: 'GRC', operator: 'Various', description: 'Aggregate of solar power generation across Greece' },

  // === Switzerland (5000 MW) ===
  { id: 'solar-che-agg', name: 'Switzerland Solar Plants', lat: 46.82, lng: 8.23, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'CHE', operator: 'Various', description: 'Aggregate of solar power generation across Switzerland' },

  // === Hungary (5000 MW) ===
  { id: 'solar-hun-agg', name: 'Hungary Solar Plants', lat: 47.16, lng: 19.50, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'HUN', operator: 'Various', description: 'Aggregate of solar power generation across Hungary' },

  // === Indonesia (5000 MW) ===
  { id: 'solar-idn-agg', name: 'Indonesia Solar Plants', lat: -0.79, lng: 113.92, type: 'plant' as const, capacity: 5000, unit: 'MW', country: 'IDN', operator: 'Various', description: 'Aggregate of solar power generation across Indonesia' },

  // === Portugal (4200 MW) ===
  { id: 'solar-prt-agg', name: 'Portugal Solar Plants', lat: 39.40, lng: -8.22, type: 'plant' as const, capacity: 4200, unit: 'MW', country: 'PRT', operator: 'Various', description: 'Aggregate of solar power generation across Portugal' },

  // === Sweden (4000 MW) ===
  { id: 'solar-swe-agg', name: 'Sweden Solar Plants', lat: 60.13, lng: 18.64, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'SWE', operator: 'Various', description: 'Aggregate of solar power generation across Sweden' },

  // === Thailand (4000 MW) ===
  { id: 'solar-tha-agg', name: 'Thailand Solar Plants', lat: 15.87, lng: 100.99, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'THA', operator: 'Various', description: 'Aggregate of solar power generation across Thailand' },

  // === Finland (3500 MW) ===
  { id: 'solar-fin-agg', name: 'Finland Solar Plants', lat: 61.92, lng: 25.75, type: 'plant' as const, capacity: 3500, unit: 'MW', country: 'FIN', operator: 'Various', description: 'Aggregate of solar power generation across Finland' },

  // === Denmark (3500 MW) ===
  { id: 'solar-dnk-agg', name: 'Denmark Solar Plants', lat: 56.26, lng: 9.50, type: 'plant' as const, capacity: 3500, unit: 'MW', country: 'DNK', operator: 'Various', description: 'Aggregate of solar power generation across Denmark' },

  // === Czech Republic (2200 MW) ===
  { id: 'solar-cze-agg', name: 'Czech Republic Solar Plants', lat: 49.82, lng: 15.47, type: 'plant' as const, capacity: 2200, unit: 'MW', country: 'CZE', operator: 'Various', description: 'Aggregate of solar power generation across Czech Republic' },

  // === Malaysia (2800 MW) ===
  { id: 'solar-mys-agg', name: 'Malaysia Solar Plants', lat: 4.21, lng: 101.98, type: 'plant' as const, capacity: 2800, unit: 'MW', country: 'MYS', operator: 'Various', description: 'Aggregate of solar power generation across Malaysia' },

  // === New Zealand (2400 MW) ===
  { id: 'solar-nzl-agg', name: 'New Zealand Solar Plants', lat: -40.90, lng: 174.89, type: 'plant' as const, capacity: 2400, unit: 'MW', country: 'NZL', operator: 'Various', description: 'Aggregate of solar power generation across New Zealand' },

  // === Israel (2500 MW) ===
  { id: 'solar-isr-agg', name: 'Israel Solar Plants', lat: 31.05, lng: 34.85, type: 'plant' as const, capacity: 2500, unit: 'MW', country: 'ISR', operator: 'Various', description: 'Aggregate of solar power generation across Israel' },

  // === Jordan (1900 MW) ===
  { id: 'solar-jor-agg', name: 'Jordan Solar Plants', lat: 30.59, lng: 36.24, type: 'plant' as const, capacity: 1900, unit: 'MW', country: 'JOR', operator: 'Various', description: 'Aggregate of solar power generation across Jordan' },

  // === Pakistan (4000 MW) ===
  { id: 'solar-pak-agg', name: 'Pakistan Solar Plants', lat: 30.38, lng: 69.35, type: 'plant' as const, capacity: 4000, unit: 'MW', country: 'PAK', operator: 'Various', description: 'Aggregate of solar power generation across Pakistan' },

  // === Philippines (2000 MW) ===
  { id: 'solar-phl-agg', name: 'Philippines Solar Plants', lat: 12.88, lng: 121.77, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'PHL', operator: 'Various', description: 'Aggregate of solar power generation across Philippines' },

  // === Romania (1500 MW) ===
  { id: 'solar-rou-agg', name: 'Romania Solar Plants', lat: 45.94, lng: 24.97, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'ROU', operator: 'Various', description: 'Aggregate of solar power generation across Romania' },

  // === Argentina (1000 MW) ===
  { id: 'solar-arg-agg', name: 'Argentina Solar Plants', lat: -38.42, lng: -63.62, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'ARG', operator: 'Various', description: 'Aggregate of solar power generation across Argentina' },

  // === Colombia (1400 MW) ===
  { id: 'solar-col-agg', name: 'Colombia Solar Plants', lat: 4.57, lng: -74.30, type: 'plant' as const, capacity: 1400, unit: 'MW', country: 'COL', operator: 'Various', description: 'Aggregate of solar power generation across Colombia' },

  // === Ireland (1000 MW) ===
  { id: 'solar-irl-agg', name: 'Ireland Solar Plants', lat: 53.14, lng: -7.69, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'IRL', operator: 'Various', description: 'Aggregate of solar power generation across Ireland' },

  // === Bangladesh (1000 MW) ===
  { id: 'solar-bgd-agg', name: 'Bangladesh Solar Plants', lat: 23.68, lng: 90.36, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'BGD', operator: 'Various', description: 'Aggregate of solar power generation across Bangladesh' },

  // === Iran (1200 MW) ===
  { id: 'solar-irn-agg', name: 'Iran Solar Plants', lat: 32.43, lng: 53.69, type: 'plant' as const, capacity: 1200, unit: 'MW', country: 'IRN', operator: 'Various', description: 'Aggregate of solar power generation across Iran' },

  // === Morocco (1400 MW) ===
  { id: 'solar-mar-agg', name: 'Morocco Solar Plants', lat: 31.79, lng: -7.09, type: 'plant' as const, capacity: 1400, unit: 'MW', country: 'MAR', operator: 'Various', description: 'Aggregate of solar power generation across Morocco' },

  // === Kenya (500 MW) ===
  { id: 'solar-ken-agg', name: 'Kenya Solar Plants', lat: -0.02, lng: 37.91, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'KEN', operator: 'Various', description: 'Aggregate of solar power generation across Kenya' },

  // === Ethiopia (500 MW) ===
  { id: 'solar-eth-agg', name: 'Ethiopia Solar Plants', lat: 9.15, lng: 40.49, type: 'plant' as const, capacity: 500, unit: 'MW', country: 'ETH', operator: 'Various', description: 'Aggregate of solar power generation across Ethiopia' },

  // === Mongolia (700 MW) ===
  { id: 'solar-mng-agg', name: 'Mongolia Solar Plants', lat: 46.86, lng: 103.85, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'MNG', operator: 'Various', description: 'Aggregate of solar power generation across Mongolia' },

  // === Uruguay (700 MW) ===
  { id: 'solar-ury-agg', name: 'Uruguay Solar Plants', lat: -32.52, lng: -55.77, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'URY', operator: 'Various', description: 'Aggregate of solar power generation across Uruguay' },

  // === Peru (800 MW) ===
  { id: 'solar-per-agg', name: 'Peru Solar Plants', lat: -9.19, lng: -75.02, type: 'plant' as const, capacity: 800, unit: 'MW', country: 'PER', operator: 'Various', description: 'Aggregate of solar power generation across Peru' },

  // === Bolivia (700 MW) ===
  { id: 'solar-bol-agg', name: 'Bolivia Solar Plants', lat: -16.29, lng: -63.59, type: 'plant' as const, capacity: 700, unit: 'MW', country: 'BOL', operator: 'Various', description: 'Aggregate of solar power generation across Bolivia' },

  // === Dominican Republic (600 MW) ===
  { id: 'solar-dom-agg', name: 'Dominican Republic Solar Plants', lat: 18.74, lng: -70.16, type: 'plant' as const, capacity: 600, unit: 'MW', country: 'DOM', operator: 'Various', description: 'Aggregate of solar power generation across Dominican Republic' },

  // === Singapore (1100 MW) ===
  { id: 'solar-sgp-agg', name: 'Singapore Solar Plants', lat: 1.35, lng: 103.82, type: 'plant' as const, capacity: 1100, unit: 'MW', country: 'SGP', operator: 'Various', description: 'Aggregate of solar power generation across Singapore' },

  // === Nigeria (1000 MW) ===
  { id: 'solar-nga-agg', name: 'Nigeria Solar Plants', lat: 9.08, lng: 7.49, type: 'plant' as const, capacity: 1000, unit: 'MW', country: 'NGA', operator: 'Various', description: 'Aggregate of solar power generation across Nigeria' },

  // === Kazakhstan (2000 MW) ===
  { id: 'solar-kaz-agg', name: 'Kazakhstan Solar Plants', lat: 48.02, lng: 66.92, type: 'plant' as const, capacity: 2000, unit: 'MW', country: 'KAZ', operator: 'Various', description: 'Aggregate of solar power generation across Kazakhstan' },

  // === Uzbekistan (1500 MW) ===
  { id: 'solar-uzb-agg', name: 'Uzbekistan Solar Plants', lat: 41.38, lng: 64.59, type: 'plant' as const, capacity: 1500, unit: 'MW', country: 'UZB', operator: 'Various', description: 'Aggregate of solar power generation across Uzbekistan' },
];
