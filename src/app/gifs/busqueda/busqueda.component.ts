import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit, AfterViewInit {
  @ViewChild('txtTerminoBusqueda')
  hijoTxtTermino!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Hasta aftgerView no tendríamos el valor del ViewChild 
    // (por ejemplo en ngOnInit no lo tendríamos aún)
    this.hijoTxtTermino.nativeElement.focus();
  }

  buscar(terminoABuscar: string) {
    this.gifService.buscar(this.hijoTxtTermino.nativeElement.value);
    this.hijoTxtTermino.nativeElement.value = '';
  }
}
