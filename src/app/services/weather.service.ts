import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGetWeatherDto } from '../components/weather/get-weather.dto';
import { BehaviorSubject, map, Observable } from 'rxjs';
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

  getWeatherTest(): Observable<WeatherData> {
    const weather = new WeatherData(
      new Location('ASDASD', 'ADADS', 'ADASD'),
      new Weather(21, 21, ['asdasd'], 6)
    );

    return new BehaviorSubject<WeatherData>(weather)
      .asObservable()
      .pipe(map((res) => res as WeatherData));
  }

  getWeather(dto: IGetWeatherDto) {
    return this.http
      .get<WeatherData>('http://api.weatherstack.com/current', {
        params: new HttpParams({
          fromObject: {
            access_key: '058f51a39da6162011b0b47c013538b1',
            query: `${dto.lat},${dto.lon}`,
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
