import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaUbicacionComponent } from './components/mapa-ubicacion/mapa-ubicacion.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { AgmCoreModule } from '@agm/core';
import { CsNumberDirective } from './directives/cs-number.directive';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBG7wY_OKvdf_bsw3HyKnnK7vlFotNEKxk'
  }),
  ],
  declarations: [
    MapaUbicacionComponent,
    ModalConfirmComponent,
    ControlMessagesComponent,
    CsNumberDirective
  ],
  exports: [
    MapaUbicacionComponent,
    ModalConfirmComponent,
    ControlMessagesComponent,
    CsNumberDirective
  ],
  entryComponents: [
    ModalConfirmComponent
  ]
})
export class SharedModule { }
