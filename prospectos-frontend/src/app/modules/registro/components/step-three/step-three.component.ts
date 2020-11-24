import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router
  ) { }

  ngOnInit() {
  }

  redirectNextStep(stepIndex: number): void {
    this._route.navigate([`${stepIndex}`])
  }

}
