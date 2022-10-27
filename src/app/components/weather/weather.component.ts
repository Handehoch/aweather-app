import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { map } from 'rxjs';
import { WeatherData } from './weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  lat = new FormControl('');
  long = new FormControl('');
  weather: WeatherData | undefined;

  constructor(private readonly weatherService: WeatherService) {}

  getWeather() {
    this.weatherService
      .getWeather({
        lat: Number(this.lat.value),
        long: Number(this.long.value),
      })
      .subscribe((res) => {
        this.weather = res;
        console.log(this.weather);
      });
  }

  ngOnInit(): void {}
}
