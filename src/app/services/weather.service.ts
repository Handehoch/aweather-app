import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGetWeatherDto } from '../components/weather/get-weather.dto';
import { map } from 'rxjs';
import {
  Location,
  Weather,
  WeatherData,
} from '../components/weather/weather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getWeather(dto: IGetWeatherDto) {
    return this.http
      .get<WeatherData>('http://api.weatherstack.com/current', {
        params: new HttpParams({
          fromObject: {
            access_key: '9f5bd4c96f95848e6655a6175c8858db',
            query: `${dto.lat},${dto.long}`,
          },
        }),
      })
      .pipe(
        map((res) => {
          const { feelslike, temperature, weather_descriptions, wind_speed } =
            res.current;
          const { country, name, region } = res.location;

          return new WeatherData(
            new Location(country, name, region),
            new Weather(
              feelslike,
              temperature,
              weather_descriptions,
              wind_speed
            )
          );
        })
      );
  }
}
