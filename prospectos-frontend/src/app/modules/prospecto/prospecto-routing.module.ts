import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltroBusquedaComponent } from './pages/filtro-busqueda/filtro-busqueda.component';

const routes: Routes = [
  {  
    path:'prospectos',
    component: FiltroBusquedaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectoRoutingModule { }
