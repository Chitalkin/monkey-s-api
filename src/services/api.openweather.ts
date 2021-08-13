import fetch from 'node-fetch';

const fetchWeather = async (lat: string, lon: string) => {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather');

  url.searchParams.set('lat', lat);
  url.searchParams.set('lon', lon);
  url.searchParams.set('appid', process.env.API_WEATHER_KEY || '');
  url.searchParams.set('lang', 'ru');
  url.searchParams.set('units', 'metric');

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error when requesting weather on a third-party service');
  }
};

/**
 * Export
 */
export default fetchWeather;
