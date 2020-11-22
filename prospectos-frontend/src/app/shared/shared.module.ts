import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaUbicacionComponent } from './components/mapa-ubicacion/mapa-ubicacion.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapaUbicacionComponent,
    ModalConfirmComponent,
    ControlMessagesComponent
  ],
  exports: [
    MapaUbicacionComponent,
    ModalConfirmComponent,
    ControlMessagesComponent
  ],
  entryComponents: [
    ModalConfirmComponent
  ]
})
export class SharedModule { }
