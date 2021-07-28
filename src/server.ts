import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { json } from 'body-parser';

/**
 * Routes
 */
import weatherRoutes from './routes/weather';
import cityRoutes from './routes/city';

/**
 * Config
 */
dotenv.config();
const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = process.env.HOST || 'localhost';

/**
 * App
 */
const app = express();

/**
 * Middlewares
 */
app.use(json());
app.use(helmet());

app.use('/weather', weatherRoutes);
app.use('/city', cityRoutes);

/**
 * Starting app
 */
app.listen(PORT, HOST);
