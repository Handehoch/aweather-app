export class Location {
  constructor(
    public country: string,
    public name: string,
    public region: string
  ) {}
}

export class Weather {
  constructor(
    public feelslike: number,
    public temperature: number,
    public weather_descriptions: string[],
    public wind_speed: number
  ) {}
}

export class WeatherData {
  constructor(public location: Location, public current: Weather) {}
}
