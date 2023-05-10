import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CargaPorLlegarComponent } from './dashboard/carga-por-llegar/carga-por-llegar.component';
import { CargaEnRecepcionComponent } from './dashboard/carga-en-recepcion/carga-en-recepcion.component';
import { CargaPorEnviarComponent } from './dashboard/carga-por-enviar/carga-por-enviar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { ManifiestoDetalleComponent } from './dashboard/carga-por-llegar/manifiesto-detalle/manifiesto-detalle.component';
//import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CargaPorLlegarComponent,
    CargaEnRecepcionComponent,
    CargaPorEnviarComponent,
    ManifiestoDetalleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
