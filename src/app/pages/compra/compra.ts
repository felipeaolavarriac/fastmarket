import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class CompraComponent {
  categoriaSeleccionada: string = 'todas'; //

  precios: { [key: string]: string } = {
    'Laptop Pro X1': '$850.000',
    'Audífonos Noise': '$120.000',
    'Monitor 34 UltraWide': '$350.000',
    'Freidora de Aire': '$65.000',
    'Cafetera Espresso': '$45.000',
    'Hervidor Eléctrico': '$25.000',
    'Taladro Percutor': '$55.000',
    'Set de Destornilladores': '$15.000',
    'Esmeril Angular': '$48.000'
  };

  producto: string = '';
  cantidad: number = 1;
  direccion: string = '';

  verCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
    window.scrollTo(0, 0);
  }

  registrarCompra() {
    if (!this.producto || !this.direccion) {
      alert('Completa los datos del pedido');
      return;
    }
    const nuevaCompra = {
      producto: this.producto,
      precio: this.precios[this.producto],
      cantidad: this.cantidad,
      direccion: this.direccion,
      fecha: new Date().toLocaleDateString(),
      estado: 'Comprado'
    };
    let historial = JSON.parse(localStorage.getItem('compras') || '[]');
    historial.push(nuevaCompra);
    localStorage.setItem('compras', JSON.stringify(historial));
    alert('Pedido realizado con éxito');
    this.categoriaSeleccionada = 'todas';
  }
}