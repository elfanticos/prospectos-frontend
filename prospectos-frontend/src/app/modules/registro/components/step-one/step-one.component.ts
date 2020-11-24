import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  redirectNextStep(stepIndex: number): void {
    this._route.navigate([`${stepIndex}`])
  }
}
