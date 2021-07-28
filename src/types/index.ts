/* eslint-disable camelcase */

export type City = {
  name: string;
  lat: number;
  lon: number;
};

export type OpenWeatherApi = {
  coord: {
    lon: number;
    lat: number;
  },
  weather: [
    {
      id: number,
      main: 'Clouds';
      description: string;
      icon: string;
    }
  ],
  base: string,
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  },
  clouds: {
    all: number;
  },
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string,
    sunrise: number;
    sunset: number;
  },
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export type AppWeatherApi = {
  city: string;
  weather: {
    temp: number;
    feels_like: number;
    condition: string;
    wind_speed: number;
    wind_dir: string;
    humidity: number;
    icon: string;
  }
}
