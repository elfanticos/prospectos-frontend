import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-conectividad',
  templateUrl: './informacion-conectividad.component.html',
  styleUrls: ['./informacion-conectividad.component.css']
})
export class InformacionConectividadComponent implements OnInit {

  infoConectividadForm: FormGroup;
  constructor(
    private _registroFormService: RegistroFormService
  ) {
    this.infoConectividadForm = this._registroFormService.formInfoConectividad;
  }

  ngOnInit(): void {

  }

}
