import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetWeatherDto } from '../components/weather/get-weather.dto';
import { map } from 'rxjs';
import { OpenWeatherData } from '../components/weather/weather-data';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getFromOpenWeather(dto: IGetWeatherDto) {
    return this.http
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: dto.lat,
          lon: dto.lon,
          appid: environment.openWeatherApi,
          units: 'metric',
        },
      })
      .pipe(map((res) => new OpenWeatherData(res)));
  }
}
