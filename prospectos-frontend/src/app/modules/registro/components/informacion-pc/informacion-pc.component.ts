import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-pc',
  templateUrl: './informacion-pc.component.html',
  styleUrls: ['./informacion-pc.component.css']
})
export class InformacionPcComponent implements OnInit {
  infoPcForm: FormGroup;
  constructor(
    private _registroFormService: RegistroFormService
  ) {
    this.infoPcForm = this._registroFormService.formInfoPc;
  }

  ngOnInit(): void {

  }

}
