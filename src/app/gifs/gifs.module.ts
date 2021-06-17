import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifHomePageComponent } from './gif-home-page/gif-home-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MostrarResultadosComponent } from './mostrar-resultados/mostrar-resultados.component';



@NgModule({
  declarations: [
    GifHomePageComponent,
    BusquedaComponent,
    MostrarResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifHomePageComponent
  ]
})
export class GifsModule { }
