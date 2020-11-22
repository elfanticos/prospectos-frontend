import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaUbicacionComponent } from './components/mapa-ubicacion/mapa-ubicacion.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapaUbicacionComponent,
    ModalConfirmComponent],
  exports: [
    MapaUbicacionComponent,
    ModalConfirmComponent
  ],
  entryComponents: [
    ModalConfirmComponent
  ]
})
export class SharedModule { }
