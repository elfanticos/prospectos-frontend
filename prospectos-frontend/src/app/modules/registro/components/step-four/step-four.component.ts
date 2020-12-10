import { Component, OnInit } from '@angular/core';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';
import { RegistroLeadService } from '../../services/registrar-lead.service'

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  finalizarActivate: boolean = false;

  constructor(
    public registroFormService: RegistroFormService,
    private _registroProspectoService: RegistroProspectoService,
    private _registroLeadService: RegistroLeadService
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
  registrarLead(): void{
    const obj = {
      "idPostulante": 32,
      "fecHoraLead": "",
      "dispositivo": "",
      "navegador": "",
      "sistOperativo": "",
      "resolucion": "",
      "userAgent": "",
      "isp": "Perú",
      "utmSource": "url_prueba",
      "utmMedium": "url_prueba",
      "utmCampaign": "url_prueba",
      "utmTerm": "url_prueba",
      "utmContent": "url_prueba",
      "utmOrigin": "url_prueba",
      "gclid": "url_prueba"
    }
    this._registroLeadService.registrarLead(obj).subscribe(data => {
      console.log(data);
    })
  }
}
