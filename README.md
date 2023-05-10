# DashboardAgencia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## dashboard-agencia
Es un proyecto en Angular el cual busca poder mostrar de manera más amigable al usuario los datos de Carga

Para crear un ambiente de desarrollo para Angular, sigue estos pasos:

1.- Instala Node.js y npm: Angular requiere de Node.js y su gestor de paquetes npm. Ve al sitio oficial de Node.js (https://nodejs.org/en/) y descarga la versión LTS (Long Term Support) que esté disponible. Sigue las instrucciones de instalación.

2.- Instala Angular CLI: Angular CLI es una herramienta de línea de comandos que facilita la creación y gestión de proyectos Angular. Para instalar Angular CLI globalmente, ejecuta el siguiente comando en tu terminal:

npm install -g @angular/cli
3.- Ubicarse en el proyecto:

cd Dashboard-Agencia
4.- Correr el proyecto en local en el puerto 4200 con el siguiente comando:

ng serve

El comando anterior compilará tu aplicación Angular y la ejecutará en un servidor de desarrollo local. Por defecto, la aplicación estará disponible en http://localhost:4200/.
INFORMACIÓN IMPORTANTE
En la carpeta "models" se van a encontrar los modelos en este caso del manifiesto.

En la carpeta "data" es donde se va a recibir todos los datos en este caso de los manifiestos(manifiesto-data.ts) siguiendo la estructura planteada en manifiesto.model.ts

En la carpeta "services" es donde se van a encontrar lo servicios que va a poseer siguiendo el ejemplo del manifiesto, las sumas de sus ODTs y Cantidad de Bultos

└───src
    ├───app
    │   ├───Components
    │   ├───dashboard
    │   │   ├───carga-en-recepcion
    │   │   ├───carga-por-enviar
    │   │   ├───carga-por-llegar
    │   │   │   └───manifiesto-detalle
    │   │   └───models
    │   ├───data
    │   ├───login
    │   └───services
    └───assets
        └───imagenes
