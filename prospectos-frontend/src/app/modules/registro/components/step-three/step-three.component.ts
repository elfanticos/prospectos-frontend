import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _registroProspectoService: RegistroProspectoService
  ) { }

  ngOnInit() {
  }

  redirectNextStep(stepIndex: number): void {
    console.log(this.registroFormService.valuesFormStepThree);
    this._registroProspectoService.registrarDispositivos(this.registroFormService.valuesFormStepThree).subscribe(data => {
      console.log(data);
      this._route.navigate([`${stepIndex}`]);
    });
  }

}
