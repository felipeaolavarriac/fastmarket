import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compra.html'
})
export class CompraComponent {
  producto: string = '';
  cantidad: number = 1;
  direccion: string = '';

  registrarCompra() {
    // VALIDACIÓN 
    if (!this.producto || !this.direccion || this.cantidad <= 0) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const nuevaCompra = {
      producto: this.producto,
      cantidad: this.cantidad,
      direccion: this.direccion,
      fecha: new Date().toLocaleDateString()
    };

    // LOCALSTORAGE (Punto 6 de la pauta)
    let historial = JSON.parse(localStorage.getItem('compras') || '[]');
    historial.push(nuevaCompra);
    localStorage.setItem('compras', JSON.stringify(historial));

    alert('Compra guardada en el sistema');
    this.producto = ''; this.direccion = ''; this.cantidad = 1; // Limpiar campos
  }
}
