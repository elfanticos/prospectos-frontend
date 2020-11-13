import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'intranet',
    loadChildren: () => import('./modules/prospecto/prospecto.module').then(m => m.ProspectoModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/registro/registro.module').then(m => m.RegistroModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
