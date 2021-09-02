/* eslint-disable camelcase */

type WeatherIconResponse = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CurrentWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherIconResponse[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type DailyWeatherDayResponse = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherIconResponse[];
  clouds: number;
  pop: number;
  uvi: number;
};

export type DailyWeatherResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: DailyWeatherDayResponse[];
};

type DayWeather = {
  temp: number;
  feels_like: number;
  condition: string;
  wind_speed: number;
  wind_dir: string;
  humidity: number;
  icon: string;
};

export type CurrentWeatherApi = {
  city: string;
  weather: DayWeather;
  coord: {
    lon: number;
    lat: number;
  };
};

export type WeekDayWeather = {
  day_of_week: {
    day: string;
    date: string;
  };
  temp: {
    morning: number;
    day: number;
    night: number;
  };
  wind_speed: number;
  wind_dir: string;
  humidity: number;
  icon: string;
};

export type WeekWeatherApi = {
  weather: WeekDayWeather[];
};

export type WeatherByDayResponse = {};
