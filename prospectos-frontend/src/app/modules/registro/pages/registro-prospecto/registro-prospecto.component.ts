import { Component, OnInit } from '@angular/core';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-registro-prospecto',
  templateUrl: './registro-prospecto.component.html',
  styleUrls: ['./registro-prospecto.component.css']
})
export class RegistroProspectoComponent implements OnInit {

  constructor(
    private _registroFormService: RegistroFormService
  ) { 
    this._registroFormService.initForm();
  }

  ngOnInit(): void {
  }

}
