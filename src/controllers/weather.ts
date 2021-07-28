import { RequestHandler } from 'express';

/**
 * Helpers
 */
import prepareWeatherInfo from '../helpers/prepareWeatherInfo';

/**
 * Weather service
 */
import getCityWeather from '../services/api.openweather';

const fetchWeather: RequestHandler = async (req, res) => {
  const { lat = '', lon = '' } = req.query;

  if (typeof lat === 'string' && typeof lon === 'string') {
    try {
      const weather = await getCityWeather(lat, lon);

      res.json(prepareWeatherInfo(weather));
    } catch (error) {
      res.status(503).json({ message: error.message });
    }
  } else {
    res.status(400).json({ code: 400, message: 'Invalid query parameters' });
  }
};

/**
 * Export
 */
export default fetchWeather;
