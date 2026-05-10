import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { CompraComponent } from './pages/compra/compra';
import { HistorialComponent } from './pages/historial/historial';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Login inicial (Punto 7)
  { path: 'compra', component: CompraComponent }, // Formulario
  { path: 'historial', component: HistorialComponent } // Visualización
];