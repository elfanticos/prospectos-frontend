import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-contacto',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css']
})
export class InformacionContactoComponent implements OnInit {

  infoContactoForm: FormGroup;
  constructor(
    private _registroFormService: RegistroFormService
  ) {
    this.infoContactoForm = this._registroFormService.formInfoContacto;
  }

  ngOnInit(): void {

  }

  get telefono() { return this.infoContactoForm.controls['telefono']; }
  get correo() { return this.infoContactoForm.controls['correo']; }
  get pais() { return this.infoContactoForm.controls['pais']; }
  get departamento() { return this.infoContactoForm.controls['departamento']; }
  get provincia() { return this.infoContactoForm.controls['provincia']; }
  get distrito() { return this.infoContactoForm.controls['distrito']; }
  get direccion() { return this.infoContactoForm.controls['direccion']; }
  get latitud() { return this.infoContactoForm.controls['latitud']; }
  get longitud() { return this.infoContactoForm.controls['longitud']; }

}
