import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { CompraComponent } from './pages/compra/compra';
import { HistorialComponent } from './pages/historial/historial';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // <--- Tu login vive aquí
  { path: 'compra', component: CompraComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'about', component: AboutComponent }
];