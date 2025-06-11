export interface IWeatherDatas {
  timezone: number;
  id: number;
  name: string;
  cod: number;
  base: string;
  visibility: number;
  dt: number;

  coord: {
    lat: number;
    lon: number;
  };
  wather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    fells_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}
