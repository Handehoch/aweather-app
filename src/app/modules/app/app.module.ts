import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../../components/app/app.component';
import { WeatherComponent } from '../../components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
    AngularYandexMapsModule.forRoot({
      apikey: 'b9c3e9a2-c071-4bc7-9f06-c369a12ad0a5',
      lang: 'ru_RU',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
