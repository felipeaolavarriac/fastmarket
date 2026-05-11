import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importante para que funcionen los routerLink

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterModule], // Añadimos RouterModule aquí
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
      
      // Opcional: Esto sirve para que si hay datos viejos sin precio, 
      // no se vea el campo vacío (solo por si acaso)
      this.comprasRecuperadas = this.comprasRecuperadas.map(compra => ({
        ...compra,
        precio: compra.precio || 'N/A',
        estado: compra.estado || 'Comprado'
      }));
    }
  }

  // Función extra por si quieres borrar el historial (opcional pero muy útil)
  borrarHistorial() {
    if (confirm('¿Estás seguro de que quieres limpiar tu historial?')) {
      localStorage.removeItem('compras');
      this.comprasRecuperadas = [];
    }
  }
}