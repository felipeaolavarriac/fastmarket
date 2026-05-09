import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  // Esta es la variable que el HTML estaba buscando
  comprasRecuperadas = [
    { producto: 'Ejemplo 1', cantidad: 2, direccion: 'Calle Falsa 123', fecha: '2026-05-09' },
    { producto: 'Ejemplo 2', cantidad: 1, direccion: 'Av. Concha y Toro', fecha: '2026-05-08' }
  ];
}