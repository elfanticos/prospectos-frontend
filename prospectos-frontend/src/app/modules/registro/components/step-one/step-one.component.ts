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
    const values = this.registroFormService.valuesFormStepOne;
    this._registroProspectoService.registrarProspecto(values).subscribe(data => {
      console.log(data);
      localStorage.setItem('stepOne', JSON.stringify(values));
      localStorage.setItem('idPostulante', String(data.idPostulante));
      this._route.navigate([`${stepIndex}`]);
    });
  }
}
