import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  constructor(
    public registroFormService: RegistroFormService,
    private _route: Router,
    private _registroProspectoService: RegistroProspectoService
  ) { }

  ngOnInit(): void {
    this._registroProspectoService.dataSpeedTest().subscribe(data => {
      console.log(data);
    });
  }

  redirectNextStep(stepIndex: number): void {
    if (!this.registroFormService.formValidStep2) {
      this.registroFormService.touchedInputStepTwo();
      return;
    }
    const body = {
      "operador": "movistar",
      "carga": "35 mb",
      "descarga": "45 mb",
      "ping": "4 enviados, 4 recibidos, 0 perdidos",
      "latencia": "latencia",
      "ip": "192.192.192.192",
      "isp": "isp",
      "fecha_hora_conec": "2020-11-29T01:46",
      "postulante": {
        "idPostulante": 4
      }
    };
    this._registroProspectoService.registrarConectividad(body).subscribe(data => {
      console.log(data);
    });
    this._route.navigate([`${stepIndex}`]);
  }

}
