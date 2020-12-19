import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedConstants } from '@app/shared/shared.constants';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  subActiRoute: Subscription = new Subscription();
  params: any = {};
  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _registroProspectoService: RegistroProspectoService,
    private _activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subActiRoute = this._activedRoute.queryParamMap
    .pipe(map((data: any) => ({ ...data.params })))
    .subscribe(params => {
      this.params = params;
    });
  }

  redirectNextStep(stepIndex: number): void {
    if (!this.registroFormService.formValidStep3) {
      this.registroFormService.touchedInputStepThree();
      return;
    }
    const values = this.registroFormService.valuesFormStepThree;
    console.log(values);
    this._registroProspectoService.registrarDispositivos(values).subscribe(data => {
      // localStorage.setItem('stepThree', JSON.stringify(values));
      console.log(data);
      this._route.navigate([`${stepIndex}`], {queryParams: this.params});
    });
  }

}
 