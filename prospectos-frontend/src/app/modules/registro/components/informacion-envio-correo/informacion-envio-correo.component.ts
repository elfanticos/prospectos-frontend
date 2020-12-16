import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedConstants } from '@app/shared/shared.constants';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-envio-correo',
  templateUrl: './informacion-envio-correo.component.html',
  styleUrls: ['./informacion-envio-correo.component.css']
})
export class InformacionEnvioCorreoComponent implements OnInit {
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  constructor(
    private _router: Router,
    private _prospectoFormService: RegistroFormService
  ) { }

  ngOnInit(): void {
  }

  cerrarRegistro(): void {
    console.log('CERRAR REGISTRO');
    localStorage.clear();
    this._prospectoFormService.resetForms();
    this._router.navigate(['/']);
  }
}
