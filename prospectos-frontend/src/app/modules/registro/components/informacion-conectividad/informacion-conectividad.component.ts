import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TechCheckService } from '@app/shared/services/tech-check.service';
import { zip } from 'rxjs/index';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-conectividad',
  templateUrl: './informacion-conectividad.component.html',
  styleUrls: ['./informacion-conectividad.component.css']
})
export class InformacionConectividadComponent implements OnInit {

  infoConectividadForm: FormGroup;
  btnImg = 'assets/images/iconos/icon-arrow-button.svg';
  activeTest: boolean = false;
  loading: boolean = false;
  constructor(
    private _registroFormService: RegistroFormService,
    private _techCheckService: TechCheckService
  ) {
    this.infoConectividadForm = this._registroFormService.formInfoConectividad;
  }

  ngOnInit(): void {
  }

  get operador() { return this.infoConectividadForm.controls['operador']; }
  get carga() { return this.infoConectividadForm.controls['carga']; }
  get descarga() { return this.infoConectividadForm.controls['descarga']; }
  get ping() { return this.infoConectividadForm.controls['ping']; }
  get latencia() { return this.infoConectividadForm.controls['latencia']; }
  get ip() { return this.infoConectividadForm.controls['ip']; }
  get isp() { return this.infoConectividadForm.controls['isp']; }
  

  initTest(): void {
    this.loading = true;
    this.activeTest = !this.activeTest;
    zip(this._techCheckService.getMbps(), this._techCheckService.getDataIP()).subscribe(data => {
      const [speed, dataIP] = data;
      let descarga = speed.toFixed();
      let carga = (speed / 3).toFixed();
      this.descarga.setValue(descarga);
      this.carga.setValue(carga);
      this.ping.setValue('4 enviados, 4 recibidos, 0 perdidos');
      this.latencia.setValue('latencia');
      this.ip.setValue(dataIP.query);
      this.isp.setValue(dataIP.isp);
      this.operador.setValue(dataIP.as);
      this.loading = false;
    });
  }

}
