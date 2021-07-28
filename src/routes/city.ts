import { Router } from 'express';

/**
 * Controllers
 */
import findCityByName from '../controllers/city';

/**
 * Init
 */
const router = Router();

/**
 * Methods
 */
router.get('/', findCityByName);

/**
 * Export
 */
export default router;
