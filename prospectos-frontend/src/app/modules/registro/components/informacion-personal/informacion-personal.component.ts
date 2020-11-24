import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroFormService } from '../../services/registro-form.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { CombosService } from '../../services/combos.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {
  infoPersForm: FormGroup;
  model: NgbDateStruct;
  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  tiposDocumentos:any[] = [
    {value: '0', desc: 'DNI'},
    {value: '1', desc: 'CARNET DE EXTRANJERÍA'},
  ];
  sexos: any[] = [
    {value: 1, desc: 'Masculino'},
    {value: 2, desc: 'Femenino'},
    {value: 3, desc: 'Otro'}
  ];
  constructor(
    private _registroFormService: RegistroFormService,
    private _comboService: CombosService
  ) {
    this.minDate = {year: (2002 - 100), month:11, day: 20};
    this.maxDate = {year: 2002, month:11, day: 20};
    this.infoPersForm = this._registroFormService.formInfoPersonal;
  }

  ngOnInit(): void {
  }


  get nombresPostulante() { return this.infoPersForm.controls['nombresPostulante']; }
  get apellidosPostulante() { return this.infoPersForm.controls['apellidosPostulante']; }
  get fecNacimiento() { return this.infoPersForm.controls['fecNacimiento']; }
  get sexo() { return this.infoPersForm.controls['sexo']; }
  get tipoDocumento() { return this.infoPersForm.controls['tipoDocumento']; }
  get numeroDocumento() { return this.infoPersForm.controls['numeroDocumento']; }
}
