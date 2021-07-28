/**
 * Helpers
 */
import convertDegreeToDirection from './convertDegreeToDirection';

/**
 * Typings
 */
import { OpenWeatherApi, AppWeatherApi } from '../types';

export default (weather: OpenWeatherApi): AppWeatherApi => ({
  city: weather.name,
  weather: {
    temp: Number(weather.main.temp.toFixed(0)),
    feels_like: Number(weather.main.feels_like.toFixed(0)),
    wind_speed: weather.wind.speed,
    wind_dir: convertDegreeToDirection(weather.wind.deg),
    humidity: weather.main.humidity,
    condition: weather.weather[0].description,
    icon: weather.weather[0].main,
  },
});
