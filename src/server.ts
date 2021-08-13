import express from 'express';
import cors, { CorsOptions } from 'cors';
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
const PORT: number = Number(process.env.APP_PORT) || 3000;
const HOST: string = process.env.APP_HOST || 'localhost';
const corsSettings: CorsOptions = {
  origin: '*',
};

/**
 * App
 */
const app = express();

/**
 * Middlewares
 */
app.use(json());
app.use(helmet());
app.use(cors(corsSettings));

app.use('/weather', weatherRoutes);
app.use('/cities', cityRoutes);

/**
 * Starting app
 */
app.listen(PORT, HOST);
