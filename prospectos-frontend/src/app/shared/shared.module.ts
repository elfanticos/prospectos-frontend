import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaUbicacionComponent } from './components/mapa-ubicacion/mapa-ubicacion.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { AgmCoreModule } from '@agm/core';
import { CsNumberDirective } from './directives/cs-number.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CsLetterDirective } from './directives/cs-letter.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBG7wY_OKvdf_bsw3HyKnnK7vlFotNEKxk'
  }),
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSnackBarModule
  ],
  declarations: [
    MapaUbicacionComponent,
    ModalConfirmComponent,
    ControlMessagesComponent,
    CsNumberDirective,
    CsLetterDirective
  ],
  exports: [
    MapaUbicacionComponent,
    ModalConfirmComponent,
    ControlMessagesComponent,
    CsNumberDirective,
    CsLetterDirective,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ModalConfirmComponent
  ]
})
export class SharedModule { }
