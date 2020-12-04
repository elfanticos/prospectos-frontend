import { Component, OnInit } from '@angular/core';
import { PASOS } from '../../constants/step';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-menu-step',
  templateUrl: './menu-step.component.html',
  styleUrls: ['./menu-step.component.css']
})
export class MenuStepComponent implements OnInit {
  PASOS = PASOS;
  constructor(
    private _registroFormService: RegistroFormService,
  ) { }

  ngOnInit() {
  }

  get validStep1(): boolean {
    return this._registroFormService.formValidStep1;
  }

  get validStep2(): boolean {
    return this._registroFormService.formValidStep2;
  }

  get validStep3(): boolean {
    return this._registroFormService.formValidStep3;
  }

}
