import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class GifService {
  private _historialBusqueda: string[] = [];
  private url = environment.URL_GIPHY;

  public get historialBusqueda() {
    return [...this._historialBusqueda];
  }

  public resultado: any[] = [];

  constructor(private http: HttpClient) {}

  // HECHA CON PROMISES
  // public buscar(termino: string) {
  //   termino ? (termino = termino.trim().toLocaleLowerCase()) : '';
  //   if (termino === '' || termino.length === 0) {
  //     return;
  //   }
  //   if (this._historialBusqueda.includes(termino)) {
  //     return;
  //   }
  //   this._historialBusqueda.unshift(termino);
  //   this._historialBusqueda = this._historialBusqueda.slice(0, 9);

  //   fetch(
  //     'http://api.giphy.com/v1/gifs/search?api_key=ryCQ2zwURk6Ft0TyYq4ck84dZT2nPvYT&q=cheeseburgers&limit=20'
  //   ).then((response) => {
  //     response.json().then((responseJson) => {
  //       console.log(responseJson);
  //     });
  //   });
  // }

  // HECHA CON ASYNC FUNCTIONS
  // public async buscar(termino: string) {
  //   termino ? (termino = termino.trim().toLocaleLowerCase()) : '';
  //   if (termino === '' || termino.length === 0) {
  //     return;
  //   }
  //   if (this._historialBusqueda.includes(termino)) {
  //     return;
  //   }
  //   this._historialBusqueda.unshift(termino);
  //   this._historialBusqueda = this._historialBusqueda.slice(0, 9);

  //   const response = await fetch('http://api.giphy.com/v1/gifs/search?api_key=ryCQ2zwURk6Ft0TyYq4ck84dZT2nPvYT&q=cheeseburgers&limit=20')
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  // }

  // Hecha con HttpClient, con observables
  public buscar(termino: string) {
    termino ? (termino = termino.trim().toLocaleLowerCase()) : '';
    if (termino === '' || termino.length === 0) {
      return;
    }
    if (this._historialBusqueda.includes(termino)) {
      return;
    }
    this._historialBusqueda.unshift(termino);
    this._historialBusqueda = this._historialBusqueda.slice(0, 9);

    this.http
      .get(
        `${this.url}?api_key=ryCQ2zwURk6Ft0TyYq4ck84dZT2nPvYT&q=${termino}&limit=20`
      )
      .subscribe( (respuesta:any)=> {
        console.log(respuesta.data);
        this.resultado = respuesta.data;

      });
  }
}
