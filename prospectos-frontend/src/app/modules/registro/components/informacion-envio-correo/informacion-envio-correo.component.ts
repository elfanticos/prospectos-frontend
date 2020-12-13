import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedConstants } from '@app/shared/shared.constants';

@Component({
  selector: 'app-informacion-envio-correo',
  templateUrl: './informacion-envio-correo.component.html',
  styleUrls: ['./informacion-envio-correo.component.css']
})
export class InformacionEnvioCorreoComponent implements OnInit {
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  cerrarRegistro(): void {
    console.log('CERRAR REGISTRO');
    localStorage.clear();
    this._router.navigate(['/']);
  }
}
