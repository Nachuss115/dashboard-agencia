import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  navbarCollapsed = true;
  currentTime: string;
  currentDate: string;
  userName = 'Nombre de Usuario'; // Reemplazar con el nombre real del usuario
  private timer: ReturnType<typeof setTimeout> | null = null;


  cerrarSesion(): void {
    // Agrega tu lógica de cierre de sesión aquí
    console.log('Cerrar sesión');

    this.router.navigate(['/login']);
    
  }

  userAgencies = Array.from({ length: 16 }, (_, i) => `M${i + 1}`);
  selectedAgency = this.userAgencies[0];

  selectAgency(agency: string) {
    this.selectedAgency = agency;
  }




  constructor(private router: Router) {
    this.currentTime = new Date().toLocaleTimeString();
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.currentDate = now.toLocaleDateString();
  }

 
    //Inicializar las ODTs sin enviar:
    odtSinEnviar = 0;


  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);


    this.odtSinEnviar = 5; // Reemplaza este valor por el número real de ODTs sin enviar
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }






}