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
  compras: any[] = [];

  ngOnInit() {
    // Recuperar datos de localStorage (Punto 6 de la pauta)
    const datos = localStorage.getItem('compras');
    if (datos) {
      this.compras = JSON.parse(datos);
    }
  }

  // Función para convertir "$850.000" en el número 850000
  convertirPrecioANumero(precioStr: string): number {
    if (!precioStr) return 0;
    return Number(precioStr.replace(/[$.]/g, ''));
  }

  // Calcula el total sumando (precio * cantidad) de cada fila
  calcularTotalGeneral(): number {
    return this.compras.reduce((acc, item) => {
      const precio = this.convertirPrecioANumero(item.precio);
      return acc + (precio * item.cantidad);
    }, 0);
  }

  // Borrar historial (Opcional, pero útil para probar)
  limpiarHistorial() {
    if (confirm('¿Deseas borrar todo el historial?')) {
      localStorage.removeItem('compras');
      this.compras = [];
    }
  }
}