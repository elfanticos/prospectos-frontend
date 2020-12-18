import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from '@app/core/services/snackbar.service';
import { SharedConstants } from '@app/shared/shared.constants';
import { Subscription } from 'rxjs';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit, OnDestroy {
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  subServiceActive: Subscription = new Subscription();
  service: boolean = false;
  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _registroProspectoService: RegistroProspectoService,
    private _snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.subServiceActive = this.registroFormService.serviceActive$.subscribe(() => {
      this.service = true;
      setTimeout(() => {
        this.service = false;
      }, 10000);
    });
  }

  ngOnDestroy(): void {
    this.subServiceActive.unsubscribe();
  }

  redirectNextStep(stepIndex: number): void {
    if (!this.registroFormService.formValidStep2) {
      this.registroFormService.touchedInputStepTwo();
      this._snackBarService.show({message: 'Realiza el test'});
      return;
    }
    const values = this.registroFormService.valuesFormStepTwo;
    // const values = {
    //   "operador": "movistar",
    //   "carga": 35,
    //   "descarga": 45,
    //   "ping": "4 perdidos",
    //   "latencia": "latencia",
    //   "ip": "192.192.192.192",
    //   "isp": "isp"
    // };
    this._registroProspectoService.registrarConectividad(values).subscribe(data => {
      console.log(data);
      localStorage.setItem('stepTwo', JSON.stringify(values));
      this._route.navigate([`${stepIndex}`]);
    });
  }

}
