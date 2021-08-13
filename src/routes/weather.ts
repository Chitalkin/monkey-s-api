import { Router } from 'express';

/**
 * Controllers
 */
import getCityWeather from '../controllers/weather';

/**
 * Init
 */
const router = Router();

/**
 * Methods
 */
router.get('/', getCityWeather);

/**
 * Export
 */
export default router;
