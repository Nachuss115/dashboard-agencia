import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CargaPorLlegarComponent } from './dashboard/carga-por-llegar/carga-por-llegar.component';
import { CargaEnRecepcionComponent } from './dashboard/carga-en-recepcion/carga-en-recepcion.component';
import { CargaPorEnviarComponent } from './dashboard/carga-por-enviar/carga-por-enviar.component';
import { ManifiestoDetalleComponent } from './dashboard/carga-por-llegar/manifiesto-detalle/manifiesto-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'carga-por-llegar', pathMatch: 'full' },
      { path: 'carga-por-llegar', component: CargaPorLlegarComponent },
      { path: 'carga-por-llegar/manifiesto/:id', component: ManifiestoDetalleComponent },
      { path: 'carga-en-recepcion', component: CargaEnRecepcionComponent },
      { path: 'carga-por-enviar', component: CargaPorEnviarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
