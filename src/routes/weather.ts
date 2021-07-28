import { Router } from 'express';

/**
 * Controllers
 */
import fetchWeather from '../controllers/weather';

/**
 * Init
 */
const router = Router();

/**
 * Methods
 */
router.get('/', fetchWeather);

/**
 * Export
 */
export default router;
