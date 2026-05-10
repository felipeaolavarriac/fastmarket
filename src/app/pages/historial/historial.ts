import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css'
})
export class HistorialComponent implements OnInit {
  comprasRecuperadas: any[] = [];

  ngOnInit() {
    // Recuperar datos de localStorage (Requisito Pauta)
    const datos = localStorage.getItem('compras');
    if (datos) {
      this.comprasRecuperadas = JSON.parse(datos);
    }
  }
}