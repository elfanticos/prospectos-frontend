import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistroProspectoService } from '../services/registro-prospecto.service';

@Injectable()
export class ProyectoResolver implements Resolve<Observable<string>> {
  constructor(
      private _registroProspectoService: RegistroProspectoService
  ) {}

  resolve() {
    return this._registroProspectoService.detalleProyecto('proy00001');
  }
}