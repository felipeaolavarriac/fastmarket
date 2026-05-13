import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class CompraComponent {
  categoriaSeleccionada: string = localStorage.getItem('categoriaTemporal') || 'todas';
  isLoggedIn: boolean = false;
  producto: string = '';
  cantidad: number = 1;
  direccion: string = '';

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

  imagenesProductos: { [key: string]: string } = {
    'Laptop Pro X1': 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjgwNzc3fGltYWdlL3BuZ3xoOWUvaGI4LzE0MDgwNDY4MDkwOTEwLnBuZ3w4MzIxNDk3M2E4NTA5ZjY5ZjYzYTc5ZDk3MWYwNjk3OTczNzYxMjM2MDU0ZTQ0MDBjMTU0ZmRhZWUxM2Q2ODYx/lenovo-laptop-thinkpad-x1-carbon-gen-8-hero.png',
    'Audífonos Noise': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    'Monitor 34 UltraWide': 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    'Freidora de Aire': 'https://kitchenit.cl/cdn/shop/files/FREIDORADEAIREDUALEDITION9L_8.jpg?v=1738006398&width=1200',
    'Cafetera Espresso': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKw3s4NoY1x87SSjigm-cSOvivXoEFsb1oA&s',
    'Hervidor Eléctrico': 'https://ostercl.vtexassets.com/arquivos/ids/160532-800-auto?v=638918459886230000&width=800&height=auto&aspect=true',
    'Taladro Percutor': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400',
    'Set de Destornilladores': 'https://dz019gex1wne1.cloudfront.net/fit-in/700x700/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/kit-destornilladores-nappo-nhk-049-foto1.jpg',
    'Esmeril Angular': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlEKsNItRQx0KsEBZViVk1nIOsuMeob593g&s'
  };

  constructor(private router: Router) {
    const sesion = localStorage.getItem('usuarioActual');
    this.isLoggedIn = !!sesion;
  }

  obtenerProductos() {
    if (this.categoriaSeleccionada === 'tecnologia') return ['Laptop Pro X1', 'Audífonos Noise', 'Monitor 34 UltraWide'];
    if (this.categoriaSeleccionada === 'cocina') return ['Freidora de Aire', 'Cafetera Espresso', 'Hervidor Eléctrico'];
    if (this.categoriaSeleccionada === 'herramientas') return ['Taladro Percutor', 'Set de Destornilladores', 'Esmeril Angular'];
    return [];
  }

  seleccionarProducto(nombre: string) {
    this.producto = nombre;
    this.cantidad = 1;
  }

  registrarCompra() {
    // Verificación final antes de guardar
    if (!this.producto || !this.direccion || this.cantidad < 1) {
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
    
    alert('¡Compra realizada con éxito!');
    
    // Limpiar formulario y redirigir al historial
    this.producto = '';
    this.router.navigate(['/historial']);
  }
}