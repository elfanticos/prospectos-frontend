import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from '@app/core/services/snackbar.service';
import { SharedConstants } from '@app/shared/shared.constants';
import { IProyect } from '../../entities/project/project';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  project: IProyect = {};
  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _registroProspectoService: RegistroProspectoService,
    private _snackBarService: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.project = this.registroFormService.project;
  }

  redirectNextStep(stepIndex: number): void {
    if(!this.registroFormService.formValidStep1) {
      this.registroFormService.touchedInputStepOne();
      return;
    }
    const values = this.registroFormService.valuesFormStepOne;
    console.log('registrarProspecto => ', values);
    this._registroProspectoService.registrarProspecto(values).subscribe(data => {
      if (data.cod === 0) {
        localStorage.setItem('stepOne', JSON.stringify(values));
        localStorage.setItem('idPostulante', String(data.idPostulante));
        this._route.navigate([`${stepIndex}`]);
      } else {
        this._snackBarService.show({message: data.msg});
      }
    }, err => {
      console.log(err);
    });
  }
}
