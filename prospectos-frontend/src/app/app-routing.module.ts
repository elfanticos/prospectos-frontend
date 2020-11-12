import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltroBusquedaComponent } from './modules/registro/components/filtro-busqueda/filtro-busqueda.component';
import { LoginComponent } from './modules/registro/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: FiltroBusquedaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
