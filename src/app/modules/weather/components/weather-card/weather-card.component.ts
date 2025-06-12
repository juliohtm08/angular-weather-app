import { Component, Input, OnInit } from '@angular/core';
import { IWeatherDatas } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent implements OnInit {
  // Decorador @Input permite que o componente receba dados do componente pai
  @Input() weatherDatasInput!: IWeatherDatas; // objeto com os dados do clima recebidos do componente pai

  // Executado ao iniciar o componente
  ngOnInit(): void {
    console.log(
      `DADOS RECEBIDOS DO COMPONENTE PAI - WEATHER-CARD: ${this.weatherDatasInput}`
    );
  }
}
