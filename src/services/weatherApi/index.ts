import fetch from 'node-fetch';

/**
 * Typings
 */
import { DailyWeatherResponse, CurrentWeatherResponse } from '../../models';

const setBaseUrlSettings = (baseUrl: string, lat: string, lon: string): URL => {
  const url = new URL(baseUrl);

  url.searchParams.set('lat', lat);
  url.searchParams.set('lon', lon);
  url.searchParams.set('appid', process.env.API_WEATHER_KEY || '');
  url.searchParams.set('lang', 'ru');
  url.searchParams.set('units', 'metric');

  return url;
};

export const fetchWeatherByDay = (lat: string, lon: string) => {
  const url = setBaseUrlSettings(
    'https://api.openweathermap.org/data/2.5/onecall',
    lat,
    lon,
  );

  url.searchParams.set('exclude', 'minutely,current,hourly,alerts');

  return fetchWeather<DailyWeatherResponse>(url);
};

export const fetchCurrentWeather = (lat: string, lon: string) => {
  const url = setBaseUrlSettings(
    lat,
    lon,
    'https://api.openweathermap.org/data/2.5/weather',
  );

  return fetchWeather<CurrentWeatherResponse>(url);
};

/**
 *
 * @param {URL} url
 * @return {JSON}
 */
async function fetchWeather<T>(url: URL) {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error when requesting weather on a third-party service');
  }
}
