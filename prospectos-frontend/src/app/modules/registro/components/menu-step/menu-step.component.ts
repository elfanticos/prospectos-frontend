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

  touchedInput(paso: string): void {
    console.log('activeValidators =>', paso);
    switch (paso) {
      case PASOS.PASO_1:
        this._registroFormService.touchedInputStepOne();
        break;
      case PASOS.PASO_2:
        this._registroFormService.touchedInputStepTwo();
        break;
      case PASOS.PASO_3:
        this._registroFormService.touchedInputStepThree();
        break;
    }
  }

}
