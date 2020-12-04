import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  finalizarActivate: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  finalizarRegistro(): void {
    this.finalizarActivate = true;
  }
}
