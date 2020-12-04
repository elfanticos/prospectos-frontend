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
    const body = {
      "postulante": {
          "nombresPostulante": "Jhonatan Marcial",
          "apellidosPostulante": "Meza Inca",
          "fecNacimiento": "1990-06-17",
          "sexo": 1,
          "tipoDocumento": 1,
          "numeroDocumento": "46357329",
          "fecha_hora_post": "2020-11-29T01:46:00.000Z"
      },
      "datosPersonales": {
          "telefono": "12345678",
          "correo": "jhonatan@gmail.com",
          "pais": "Perú",
          "departamento": "Lima",
          "provincia": "Lima",
          "distrito": "San Juan de Miraflores",
          "direccion": "Av. Defensores de Lima 816",
          "latitud": "145'3215.156",
          "longitud": "145'3215.158",
          "fec_hora_datos": "2020-11-29T01:46:00.000Z",
          "postulante": {
          }
      },
      "proyecto": "prospectos - b12"
  };

    this._registroProspectoService.registrarProspecto(body).subscribe(data => {
      console.log(data);
    });
    this._route.navigate([`${stepIndex}`])
  }
}
