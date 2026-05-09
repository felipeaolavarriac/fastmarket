import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { CompraComponent } from './pages/compra/compra';
import { Historial } from './pages/historial/historial';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'compra', component: CompraComponent },
  { path: 'historial', component: Historial },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];