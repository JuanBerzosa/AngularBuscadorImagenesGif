import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Gif, SearchGifResponse } from '../models/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  // Si existe, leemos el historialBusqueda del localStorage, y iniciazalizamo _historialBusqueda a él.
  // Si no existe, lo dejamos vacio.
  private historialGuardado = localStorage.getItem('historialBusqueda');
  private _historialBusqueda: string[] =
    this.historialGuardado != null ? JSON.parse(this.historialGuardado) : [];

  private url = environment.URL_GIPHY;

  public get historialBusqueda() {
    return [...this._historialBusqueda];
  }

  // Si existe, leemos el resultadoGuardado del localStorage, y iniciazalizamos resultado a él.
  // Si no existe, lo dejamos vacio.
  private resultadoGuardado = localStorage.getItem('resultadoGuardado');
  public resultado: Gif[] =
    this.resultadoGuardado != null ? JSON.parse(this.resultadoGuardado) : [];

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

    // Almacenamos en el localStorage el historial de busqueda
    localStorage.setItem(
      'historialBusqueda',
      JSON.stringify(this._historialBusqueda)
    );

    // Se recomienda poner el tipo en el propio get con <T>, ya que get es de tipo generico
    this.http
      .get<SearchGifResponse>(
        `${this.url}?api_key=ryCQ2zwURk6Ft0TyYq4ck84dZT2nPvYT&q=${termino}&limit=20`
      )
      .subscribe((respuesta) => {
        this.resultado = respuesta.data;
        localStorage.setItem(
          'resultadoGuardado',
          JSON.stringify(this.resultado)
        );

      });
  }
}
