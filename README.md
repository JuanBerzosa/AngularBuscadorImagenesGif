# BuscardorGifs

Ejercicio para practicar el acceso a APIs mediante httpClient en Angular.
En este caso, el acceso al API de GIPHY para buscar imagenes gif en movimiento a partir de un término dado:
https://giphy.com/

Consta de un componente para introducir el término a buscar, un compomente para mostrar los resultados, y un componente sidebar para mostrar el historial con los ultimos 10 terminos buscados.

Está creado modularmente, con todos los componentes y servicios en el modulo "Gifs", excepto el sidebar que está en el modulo "Shared".
No utiliza rutas, y el propio app.component.html se encarga de servir de page para colocar los demas componentes a cargar.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
