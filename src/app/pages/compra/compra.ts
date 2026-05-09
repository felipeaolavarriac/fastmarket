import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class CompraComponent {
  producto: string = '';
  cantidad: number = 1;
  direccion: string = '';

  registrarCompra() {
    console.log('Compra registrada:', {
      producto: this.producto,
      cantidad: this.cantidad,
      direccion: this.direccion
    });
    alert('¡Compra realizada con éxito!');
  }
}
