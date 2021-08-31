# Monkey's API

## Солянка из API для практики.

### Файл `.env` с переменными для локальной разработки

* `API_WEATHER_KEY` - API ключ [OpenWeather](https://openweathermap.org/)
* `APP_HOST` - host приложения (по умолчанию localhost)
* `APP_PORT` - порт приложения (по умолчанию 3000)
---

### Команды для разработки:

* ```npm install``` - установка зависимостей
* ```npm run dev:ts``` - отслеживание изменений в `.ts` файлах
* ```npm run dev:server``` - запуск сервера
---

### Когда будет происходить деплой на сервер:

* Github action срабатывает на пуш в `master`
* Для отправки данных, в `github secrets` должны быть добавлены переменные
  + `API_WEATHER_KEY` - API ключ [OpenWeather](https://openweathermap.org/)
  + `APP_HOST` - host приложения на сервере
  + `APP_PORT` - порт приложения на сервере
  + `HOST` - сервер
  + `USERNAME` - пользователь
  + `PASSWORD` - пароль пользователя
---

### Что происходит на сервере.

* уже установлен `NodeJS >= 14.7`

* ```npm install pm2@latest -g```

- ```pm2 start ~/projects/api/dist/server.js --name <app_name> --watch```

[ссылка на доку pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)

---

## API погоды:

---

### Данные о погоде в данный момент

```
  Method: GET
  Path: /weather/now
  Params: lat, lon,
  Response: {
    city: string;
    weather: {
      temp: number;
      feels_like: number;
      condition: string;
      wind_speed: number;
      wind_dir: string;
      humidity: number;
    };
  }
```

### Погода на ближайшие 3 дня

```
  Method: GET
  Path: /weather/week
  Params: lat, lon,
  Response: {
      city: string;
      weather: {
      day_of_week: {
        day: string;
        date: string;
      };
      temp: {
        morning: number;
        day: number;
        night: number;
      };
      condition: string;
      wind_speed: number;
      wind_dir: string;
      humidity: number;
      icon: string;
    }[]
  }
```
