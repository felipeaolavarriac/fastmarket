import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {
  gmail: string = '';
  clave: string = '';
  fechaNacimiento: string = '';
  esRegistro: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    const sesion = localStorage.getItem('usuarioActual');
    if (sesion) {
      const datos = JSON.parse(sesion);
      this.gmail = datos.gmail;
      this.isLoggedIn = true;
    }
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  registrar() {
    if (!this.gmail || !this.clave || !this.fechaNacimiento) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    if (!this.validarEmail(this.gmail)) {
      alert('El formato del correo no es válido.');
      return;
    }
    const hoy = new Date();
    const cumpleanos = new Date(this.fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    if (hoy.getMonth() < cumpleanos.getMonth() || (hoy.getMonth() === cumpleanos.getMonth() && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    if (edad < 18) {
      alert('Debes ser mayor de 18 años.');
      return;
    }
    const nuevoUsuario = { gmail: this.gmail, clave: this.clave };
    localStorage.setItem(this.gmail, JSON.stringify(nuevoUsuario));
    alert('Usuario registrado con éxito.');
    this.esRegistro = false;
    this.limpiarCampos();
  }

  login() {
    if (!this.validarEmail(this.gmail)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }
    const usuarioGuardado = localStorage.getItem(this.gmail);
    if (usuarioGuardado) {
      const datos = JSON.parse(usuarioGuardado);
      if (datos.clave === this.clave) {
        localStorage.setItem('usuarioActual', JSON.stringify(datos));
        this.isLoggedIn = true;
        alert('Bienvenido a FastMarket');
      } else {
        alert('Contraseña incorrecta.');
      }
    } else {
      alert('Este correo no está registrado.');
    }
  }

  logout() {
    localStorage.removeItem('usuarioActual');
    this.isLoggedIn = false;
    this.limpiarCampos();
  }

  verCategoria(cat: string) {
    localStorage.setItem('categoriaTemporal', cat);
    this.router.navigate(['/compra']);
  }

  limpiarCampos() {
    this.gmail = '';
    this.clave = '';
    this.fechaNacimiento = '';
  }
}