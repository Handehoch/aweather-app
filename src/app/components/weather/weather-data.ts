export class OpenWeatherData {
  public weather: IWeather;
  public main: IMain;
  public wind: IWind;
  public sys: ISys;
  public name: string;

  constructor(obj: any) {
    this.weather = obj?.weather[0] as IWeather;
    this.main = obj?.main as IMain;
    this.wind = obj?.wind as IWind;
    this.sys = obj?.sys as ISys;
    this.name = obj?.name;
  }
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  pressure: number;
}

interface IWind {
  speed: number;
  deg: number;
}

interface ISys {
  country: string;
}
