import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Typings
 */
import { RequestHandler } from 'express';
import { City } from '../types';

/**
 * Cities
 */
const json = readFileSync(join(__dirname, '../data/cities.json'));
const cities: City[] = JSON.parse(json.toString());

const findCityByName: RequestHandler = (req, res) => {
  const { name = '' } = req.query;
  let filteredCities: City[] = [];

  if (typeof name === 'string' && name.length > 0) {
    filteredCities = cities.filter(
      (city) => city.name.toLowerCase().includes(name),
    );
  }

  res.json(filteredCities);
};

/**
 * Export
 */
export default findCityByName;
