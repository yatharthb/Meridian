import { ResourceMap } from '../../types';
import { nuclearLocations } from './nuclear';
import { natgasLocations } from './natgas';
import { coalLocations } from './coal';
import { hydroLocations } from './hydro';
import { windLocations } from './wind';
import { solarLocations } from './solar';
import { geothermalLocations } from './geothermal';
import { biomassLocations } from './biomass';

export const electricityResources: ResourceMap = {
  elec_nuclear: {
    id: 'elec_nuclear',
    name: 'Nuclear',
    color: '#7B2FBE',
    unit: 'MW',
    globalProduction: 400000,
    description: 'Nuclear fission power plants providing reliable baseload electricity worldwide across 31 countries.',
    category: 'electricity',
    locations: nuclearLocations,
  },
  elec_natgas: {
    id: 'elec_natgas',
    name: 'Natural Gas',
    color: '#FF6B35',
    unit: 'MW',
    globalProduction: 2020000,
    description: 'Natural gas-fired power plants including combined-cycle (CCGT), simple-cycle, and peaking units worldwide.',
    category: 'electricity',
    locations: natgasLocations,
  },
  elec_coal: {
    id: 'elec_coal',
    name: 'Coal',
    color: '#8B6914',
    unit: 'MW',
    globalProduction: 2130000,
    description: 'Coal-fired power plants providing electricity worldwide, with major capacity in China, India, and the United States.',
    category: 'electricity',
    locations: coalLocations,
  },
  elec_hydro: {
    id: 'elec_hydro',
    name: 'Hydroelectric',
    color: '#1E90FF',
    unit: 'MW',
    globalProduction: 1450000,
    description: 'Hydroelectric power plants and dams generating electricity from water resources worldwide.',
    category: 'electricity',
    locations: hydroLocations,
  },
  elec_wind: {
    id: 'elec_wind',
    name: 'Wind',
    color: '#20B2AA',
    unit: 'MW',
    globalProduction: 1170000,
    description: 'Wind farms and wind energy facilities generating electricity worldwide, including onshore and offshore installations.',
    category: 'electricity',
    locations: windLocations,
  },
  elec_solar: {
    id: 'elec_solar',
    name: 'Solar',
    color: '#FFB800',
    unit: 'MW',
    globalProduction: 2200000,
    description: 'Solar photovoltaic and concentrated solar power plants generating electricity worldwide.',
    category: 'electricity',
    locations: solarLocations,
  },
  elec_geothermal: {
    id: 'elec_geothermal',
    name: 'Geothermal',
    color: '#DC143C',
    unit: 'MW',
    globalProduction: 16800,
    description: 'Geothermal power plants harnessing heat from the Earth to generate electricity across 16 countries worldwide.',
    category: 'electricity',
    locations: geothermalLocations,
  },
  elec_biomass: {
    id: 'elec_biomass',
    name: 'Biomass',
    color: '#6B8E23',
    unit: 'MW',
    globalProduction: 151000,
    description: 'Biomass and waste-to-energy power plants generating electricity from organic materials worldwide.',
    category: 'electricity',
    locations: biomassLocations,
  },
};
