import { Component, OnInit } from '@angular/core';
import { PASOS } from '../../constants/step';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-registro-prospecto',
  templateUrl: './registro-prospecto.component.html',
  styleUrls: ['./registro-prospecto.component.css']
})
export class RegistroProspectoComponent implements OnInit {
  PASOS = PASOS;
  pasoSeleccionado = PASOS.PASO_1;
  constructor(
    private _registroFormService: RegistroFormService
  ) { 
    this._registroFormService.initForm();
  }

  ngOnInit(): void {
  }

  seleccionarPaso(value: number): void {
    this.pasoSeleccionado = value;
  }

}
