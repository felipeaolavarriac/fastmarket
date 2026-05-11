import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css' // <--- ESTA LÍNEA ES CLAVE
})
export class InicioComponent {
  gmail: string = '';
  clave: string = '';
  fechaNacimiento: string = '';
  esRegistro: boolean = false;

  constructor(private router: Router) {}

  // FUNCIÓN CRÍTICA: Valida que tenga @ y un punto después del @
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  registrar() {
    // 1. Validar campos vacíos
    if (!this.gmail || !this.clave || !this.fechaNacimiento) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // 2. Validar formato de Gmail (@ y .)
    if (!this.validarEmail(this.gmail)) {
      alert('El formato del correo no es válido. Debe incluir un "@" y un "." después de este.');
      return;
    }

    // 3. Validación de edad (Mínimo 18 años)
    const hoy = new Date();
    const cumpleanos = new Date(this.fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    if (edad < 18) {
      alert('Debes ser mayor de 18 años para registrarte en FastMarket.');
      return;
    }

    // Guardar en localStorage
    const nuevoUsuario = { gmail: this.gmail, clave: this.clave };
    localStorage.setItem(this.gmail, JSON.stringify(nuevoUsuario));
    
    alert('Usuario registrado con éxito. Ya puedes iniciar sesión.');
    this.esRegistro = false;
    this.limpiarCampos();
  }

  login() {
    // También validamos el formato al iniciar sesión
    if (!this.validarEmail(this.gmail)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }

    const usuarioGuardado = localStorage.getItem(this.gmail);

    if (usuarioGuardado) {
      const datos = JSON.parse(usuarioGuardado);
      if (datos.clave === this.clave) {
        alert('Bienvenido a FastMarket');
        this.router.navigate(['/compra']);
      } else {
        alert('Contraseña incorrecta.');
      }
    } else {
      alert('Este correo no está registrado.');
    }
  }

  limpiarCampos() {
    this.gmail = '';
    this.clave = '';
    this.fechaNacimiento = '';
  }
}