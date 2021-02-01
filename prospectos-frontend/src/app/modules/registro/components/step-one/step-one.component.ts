import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '@app/core/services/snackbar.service';
import { SharedConstants } from '@app/shared/shared.constants';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProject } from '../../entities/project/project';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit, OnDestroy {
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  project: IProject = {};
  subActiRoute: Subscription = new Subscription();
  params: any = {};
  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _activedRoute: ActivatedRoute,
    private _registroProspectoService: RegistroProspectoService,
    private _snackBarService: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.subActiRoute = this._activedRoute.queryParamMap
      .pipe(map((data: any) => ({ ...data.params })))
      .subscribe(params => {
        this.params = params;
        this._registroProspectoService.detalleProyecto(params.codigoProyecto || 'proy00001')
          .subscribe(detalle => {
            this.project = detalle || {};
            this.registroFormService.project = this.project;
          });
      });
  }

  ngOnDestroy(): void {
    this.subActiRoute.unsubscribe();
  }

  redirectNextStep(stepIndex: number): void {
    if (!this.registroFormService.formValidStep1) {
      this.registroFormService.touchedInputStepOne();
      return;
    }
    const values = this.registroFormService.valuesFormStepOne;
    this._registroProspectoService.registrarProspecto(values).subscribe(data => {
      if (data.cod === 0) {
        localStorage.setItem('stepOne', JSON.stringify(values));
        localStorage.setItem('idPostulante', String(data.idPostulante));
        this._route.navigate([`${stepIndex}`], {queryParams: this.params});
      } else {
        this._snackBarService.show({ message: data.msg });
      }
    }, err => {
      console.log(err);
    });
  }
}
