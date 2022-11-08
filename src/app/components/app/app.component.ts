import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather app';
  amount: number[] = [1];

  createWeatherWidget() {
    this.amount.push(1);
  }

  removeWeatherWidget() {
    this.amount.pop();
  }
}
