import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaUbicacionComponent } from './components/mapa-ubicacion/mapa-ubicacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapaUbicacionComponent],
  exports: [MapaUbicacionComponent]
})
export class SharedModule { }
