import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación y validación del formulario

    // Si la autenticación es exitosa, navega al dashboard
    this.router.navigate(['/dashboard']);
  }
}
