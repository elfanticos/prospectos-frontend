import { Component, OnInit } from '@angular/core';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  finalizarActivate: boolean = false;
  constructor(
    public registroFormService: RegistroFormService,
    private _registroProspectoService: RegistroProspectoService
  ) { }

  ngOnInit() {
  }
  finalizarRegistro(): void {
    const values = this.registroFormService.valuesFormStepFour;
    this._registroProspectoService.registrarEquipo(values).subscribe(data => {
      console.log(data);
      this.finalizarActivate = true;
    })
  }
}
