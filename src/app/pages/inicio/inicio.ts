import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicio.html'
})
export class InicioComponent {
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.clave === '123') {
      alert('Bienvenido a FastMarket');
      this.router.navigate(['/compra']); // Redirige al formulario
    } else {
      alert('Usuario o clave incorrectos');
    }
  }
}