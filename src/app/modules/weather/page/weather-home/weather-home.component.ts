import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { IWeatherDatas } from 'src/app/models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// @Component => Decorator que transforma a classe em um componente Angular
@Component({
  selector: 'app-weather-home', // nome da tag que pode ser utilizada no HTML
  templateUrl: './weather-home.component.html', // caminho para o arquivo HTML
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject(); // Subject usado para encerrar observables e evitar vazamentos de memória
  initialCityName = 'São Paulo'; // nome da cidade inicial para consulta do clima
  weatherDatas!: IWeatherDatas; // objeto que armazenará os dados do clima retornados pela API
  searchIcon = faMagnifyingGlass; // ícone de lupa utilizado na interface

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName); // chamada inicial ao carregar o componente
  }

  // método responsável por buscar os dados do clima de uma cidade
  getWeatherDatas(cityName: string): void {
    this.weatherService
      .getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$)) // operador para cancelar a inscrição quando o componente for destruído
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response); // armazena os dados se houver resposta
          console.log(this.weatherDatas);
        },
        error: (error) => console.log(error),
      });
  }

  // método chamado ao submeter o formulário de busca
  onSubmit(): void {
    console.log('CHAMOU A FUNÇÃO');
    this.getWeatherDatas(this.initialCityName); // busca os dados com o nome da cidade atual
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // envia sinal para encerrar as inscrições
    this.destroy$.complete(); // finaliza o Subject
  }
}
