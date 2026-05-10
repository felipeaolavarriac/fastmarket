import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar'; // Verifica que termine en 'navbar'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], // Importamos el Navbar y el Outlet
  template: '<app-navbar></app-navbar>' // Esto llama a tu menú
})
export class AppComponent {}