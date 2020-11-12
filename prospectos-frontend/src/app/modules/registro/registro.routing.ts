import { Routes, RouterModule } from '@angular/router';
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
  }
];

export const RegistroRoutes = RouterModule.forChild(routes);
