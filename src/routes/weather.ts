import { Router } from 'express';

/**
 * Controllers
 */
import {
  getCurrentCityWeather,
  getCityWeatherByDay,
} from '../controllers/weather';

/**
 * Init
 */
const router = Router();

/**
 * Routes
 */
router.get('/now', getCurrentCityWeather);
router.get('/week', getCityWeatherByDay);

/**
 * Export
 */
export default router;
