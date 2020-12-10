import { Component, OnInit } from '@angular/core';
import { RegistroFormService } from '../../services/registro-form.service';
import { RegistroProspectoService } from '../../services/registro-prospecto.service';
import { RegistroLeadService } from '../../services/registro-lead.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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
    private _registroLeadService: RegistroLeadService,
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit() {

  }

  finalizarRegistro(): void {
    // this.registrarLead();
    // return;
    const values = this.registroFormService.valuesFormStepFour;
    this._registroProspectoService.registrarEquipo(values).subscribe(data => {
      console.log(data);
      const objParam = {
        equipo: data.idEquipo,
        extensionImg: values.extensionFile,
        file: values.file
      };
      this._registroProspectoService.registrarEquipoImg(objParam).subscribe(dataImg => {
        console.log(dataImg);
        this.finalizarActivate = true;
        this.registrarLead();
      });
    })
  }
  registrarLead(): void {
    const obj = {
      "idPostulante": localStorage.getItem('idPostulante'),
      "fecHoraLead": "",
      "dispositivo": this.deviceService.getDeviceInfo().device,
      "navegador": this.deviceService.getDeviceInfo().browser,
      "sistOperativo": this.deviceService.getDeviceInfo().os,
      "resolucion": this.deviceService.getDeviceInfo().orientation,
      "userAgent": this.deviceService.getDeviceInfo().userAgent,
      "isp": "Perú",
      "utmSource": "url_prueba",
      "utmMedium": "url_prueba",
      "utmCampaign": "url_prueba",
      "utmTerm": "url_prueba",
      "utmContent": "url_prueba",
      "utmOrigin": "url_prueba",
      "gclid": "url_prueba"
    }
    console.log(obj);
    // return
    this._registroLeadService.registrarLead(obj).subscribe(data => {
      console.log(data);
      localStorage.clear();
    })
  }
}
