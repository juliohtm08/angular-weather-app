import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';

// aqui é aonde definimos as rotas da aplicação

const routes: Routes = [
  // quando a URL estiver vazia, redireciona para a rota '/weather' (http://localhost:4200/weather)
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full', // Ativa a rota somente se a URL for exatamente igual ao path especificado.
  },
  // quando acessar a rota '/weather' renderizará o componente WeatherHomeComponent
  {
    path: 'weather',
    component: WeatherHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
