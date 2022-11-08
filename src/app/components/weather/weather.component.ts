import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { OpenWeatherData } from './weather-data';
import {
  numberValidator,
  validateLat,
  validateLong,
} from '../../validators/input-validators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  form: FormGroup | undefined;
  weather!: OpenWeatherData;
  center: number[] = [];

  constructor(private readonly weatherService: WeatherService) {}

  get lat() {
    return this.form?.get('lat');
  }

  get lon() {
    return this.form?.get('lon');
  }

  onSubmit() {
    this.getWeatherFromOpenWeather();
    this.center = [Number(this.lat?.value), Number(this.lon?.value)];
  }

  getWeatherFromOpenWeather() {
    this.weatherService
      .getFromOpenWeather({
        lat: Number(this.lat?.value),
        lon: Number(this.lon?.value),
      })
      .subscribe((res) => {
        this.weather = res as OpenWeatherData;
        console.log(res);
      });
  }

  generateIconPath(query: string) {
    return `http://openweathermap.org/img/wn/${query}@2x.png`;
  }

  ngOnInit(): void {
    this.form = new FormGroup<any>(
      {
        lat: new FormControl(null, [validateLat, numberValidator]),
        lon: new FormControl(null, [validateLong, numberValidator]),
      },
      {
        validators: Validators.required,
      }
    );
  }
}
