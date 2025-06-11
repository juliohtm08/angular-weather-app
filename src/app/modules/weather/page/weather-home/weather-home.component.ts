import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { IWeatherDatas } from 'src/app/models/interfaces/weather.interface';

// @Component => Decorator que transforma a classe em um componente Angular
@Component({
  selector: 'app-weather-home', // nome da tag que pode ser utilizada no HTML
  templateUrl: './weather-home.component.html', // caminho para o arquivo HTML
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'São Paulo';
  weatherDatas!: IWeatherDatas;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error: (error) => console.log(error),
    });
  }
}
