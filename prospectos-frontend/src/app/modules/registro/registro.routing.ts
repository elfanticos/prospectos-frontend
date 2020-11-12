import { Routes, RouterModule } from '@angular/router';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroProspectoComponent } from './components/registro-prospecto/registro-prospecto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroProspectoComponent
  },
  {
    path: 'busqueda',
    component: FiltroBusquedaComponent
  }
];

export const RegistroRoutes = RouterModule.forChild(routes);
