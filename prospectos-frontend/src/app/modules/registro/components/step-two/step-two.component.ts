import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

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
