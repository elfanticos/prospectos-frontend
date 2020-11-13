import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroProspectoComponent } from './pages/registro-prospecto/registro-prospecto.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroProspectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
