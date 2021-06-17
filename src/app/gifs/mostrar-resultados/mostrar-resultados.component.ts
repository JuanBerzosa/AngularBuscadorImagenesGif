import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-mostrar-resultados',
  templateUrl: './mostrar-resultados.component.html',
  styles: [
  ]
})
export class MostrarResultadosComponent implements OnInit {

  get resultados() {
    return this.gifService.resultado;
  }

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
    
  }

}
