import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _registroProspectoService: RegistroProspectoService
  ) { }

  ngOnInit(): void {
  }

  redirectNextStep(stepIndex: number): void {
    this._registroProspectoService.registrarProspecto(this.registroFormService.valuesFormStepOne).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    this._route.navigate([`${stepIndex}`])
  }
}
