import { Component } from '@angular/core';

// @Component => Decorator que transforma a classe em um componente Angular
@Component({
  selector: 'app-weather-home', // nome da tag que pode ser utilizada no HTML
  templateUrl: './weather-home.component.html', // caminho para o arquivo HTML
  styleUrls: [],
})
export class WeatherHomeComponent {}
