import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroProspectoComponent } from './components/registro-prospecto/registro-prospecto.component';
import { LoginComponent } from './components/login/login.component';
import { FiltroBusquedaComponent } from './components/filtro-busqueda/filtro-busqueda.component';



@NgModule({
  declarations: [RegistroProspectoComponent, LoginComponent, FiltroBusquedaComponent],
  imports: [
    CommonModule
  ]
})
export class RegistroModule { }
