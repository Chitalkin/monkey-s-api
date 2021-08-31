import { RequestHandler } from 'express';

/**
 * Helpers
 */
import { prepareNowWeatherInfo, prepareWeekWeatherInfo } from '../helpers';

/**
 * Weather service
 */
import { fetchCurrentWeather, fetchWeatherByDay } from '../services/weatherApi';

export const getCurrentCityWeather: RequestHandler = async (req, res) => {
  const { lat = '', lon = '' } = req.query;

  if (typeof lat === 'string' && typeof lon === 'string') {
    try {
      const response = await fetchCurrentWeather(lat, lon);

      if (response.cod === 401) {
        res.json(response);
      } else {
        res.json(prepareNowWeatherInfo(response));
      }
    } catch (error) {
      res.status(503).json(error);
    }
  } else {
    res.status(400).json({ code: 400, message: 'Invalid query parameters' });
  }
};

export const getCityWeatherByDay: RequestHandler = async (req, res) => {
  const { lat = '', lon = '' } = req.query;

  if (typeof lat === 'string' && typeof lon === 'string') {
    try {
      const response = await fetchWeatherByDay(lat, lon);

      res.json(prepareWeekWeatherInfo(response));
    } catch (error) {
      res.status(503).json(error);
    }
  } else {
    res.status(400).json({ code: 400, message: 'Invalid query parameters' });
  }
};
