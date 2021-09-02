/**
 * Typings
 */
import {
  CurrentWeatherResponse,
  CurrentWeatherApi,
  DailyWeatherResponse,
  WeekWeatherApi,
  WeekDayWeather,
} from '../../models';

export const convertDegreeToDirection = (degree: number): string => {
  if (degree > 337.5) return 'Северное';
  if (degree > 292.5) return 'Северо-западное';
  if (degree > 247.5) return 'Западное';
  if (degree > 202.5) return 'Юго-западное';
  if (degree > 157.5) return 'Южное';
  if (degree > 122.5) return 'Юго-восточное';
  if (degree > 67.5) return 'Восточное';
  if (degree > 22.5) {
    return 'Северо-восточное';
  }
  return 'Северное';
};

export const prepareNowWeatherInfo = (
  response: CurrentWeatherResponse,
): CurrentWeatherApi => ({
  city: response.name,
  weather: {
    temp: Number(response.main.temp.toFixed(0)),
    feels_like: Number(response.main.feels_like.toFixed(0)),
    wind_speed: response.wind.speed,
    wind_dir: convertDegreeToDirection(response.wind.deg),
    humidity: response.main.humidity,
    condition: response.weather[0].description,
    icon: response.weather[0].main,
  },
});

export const prepareWeekWeatherInfo = (
  response: DailyWeatherResponse,
): WeekWeatherApi => {
  const neededDays = response.daily.slice(1, 8);

  const transformedDays: WeekDayWeather[] = neededDays.map(day => {
    const [loceleDay, localeDate] = getLocaleDate(day.dt);

    return {
      day_of_week: {
        day: loceleDay,
        date: localeDate,
      },
      temp: {
        morning: Number(day.temp.morn.toFixed(0)),
        day: Number(day.temp.day.toFixed(0)),
        night: Number(day.temp.night.toFixed(0)),
      },
      wind_speed: Math.ceil(day.wind_speed),
      wind_dir: convertDegreeToDirection(day.wind_deg),
      humidity: day.humidity,
      icon: day.weather[0].main,
    };
  });

  return {
    weather: transformedDays,
  };
};

function getLocaleDate(timestamp: number): [string, string] {
  const localeDate = new Date(timestamp * 1000).toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const [day, date] = localeDate.split(', ');

  return [day, date];
}
