import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core/helpers';
import { FiltroBusquedaComponent } from './pages/filtro-busqueda/filtro-busqueda.component';

const routes: Routes = [
  {  
    path:'prospectos',
    component: FiltroBusquedaComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectoRoutingModule { }
