import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-conectividad',
  templateUrl: './informacion-conectividad.component.html',
  styleUrls: ['./informacion-conectividad.component.css']
})
export class InformacionConectividadComponent implements OnInit {

  infoConectividadForm: FormGroup;
  btnImg = 'assets/images/iconos/icon-arrow-button.svg';
  activeTest: boolean = false;
  constructor(
    private _registroFormService: RegistroFormService
  ) {
    this.infoConectividadForm = this._registroFormService.formInfoConectividad;
  }

  ngOnInit(): void {
  }

}
