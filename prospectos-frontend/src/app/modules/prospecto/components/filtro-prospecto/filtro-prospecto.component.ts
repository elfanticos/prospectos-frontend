import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAuricular } from '@app/modules/registro/entities/combos/auricular';
import { IVelocidadCarga } from '@app/modules/registro/entities/combos/velocidad-carga';
import { IVelocidadDescarga } from '@app/modules/registro/entities/combos/velocidad-descagar';
import { CombosService } from '@app/shared/services/combos.service';
import { SharedConstants } from '@app/shared/shared.constants';
import { IProyecto } from '../../models/proyecto';
import { AdminProspectoFormService } from '../../services/admin-prospecto-form.service';
import { AdminProspectoService } from '../../services/admin-prospecto.service';

@Component({
  selector: 'app-filtro-prospecto',
  templateUrl: './filtro-prospecto.component.html',
  styleUrls: ['./filtro-prospecto.component.css']
})
export class FiltroProspectoComponent implements OnInit {
  formSearch: FormGroup;
  tiposDocumentos:any[] =SharedConstants.COMBOS.TIPO_DOCUMENTO;
  sexos: any[] = SharedConstants.COMBOS.SEXO;
  vCargas: IVelocidadCarga[] = [];
  vDescargas: IVelocidadDescarga[] = [];
  auriculares: IAuricular[] = [];
  proyectos: IProyecto[] = [];
  ICON_ARROW_BUTTON = SharedConstants.ICONS.ICON_ARROW_BUTTON;
  constructor(
    public adminProspectoFormService: AdminProspectoFormService,
    private _comboService: CombosService,
    private _adminProspectoService: AdminProspectoService
  ) {
    this.formSearch = this.adminProspectoFormService.formSearch;
  }

  ngOnInit(): void {
    this._comboService.comboVelocidadDeCarga().subscribe(vCargas => this.vCargas = vCargas);
    this._comboService.comboVelocidadDeDescarga().subscribe(vDescargas => this.vDescargas = vDescargas);
    this._comboService.comboAuricular().subscribe(auriculares => this.auriculares = auriculares);
    this._adminProspectoService.listarProyecto().subscribe(proyectos => this.proyectos = proyectos);
  }

  get idProyecto() { return this.formSearch.controls['idProyecto']; }
  get tipoDocumento() { return this.formSearch.controls['tipoDocumento']; }
  get numeroDocumento() { return this.formSearch.controls['numeroDocumento']; }
  get pais() { return this.formSearch.controls['pais']; }
  get departamento() { return this.formSearch.controls['departamento']; }
  get distrito() { return this.formSearch.controls['distrito']; }
  get descarga() { return this.formSearch.controls['descarga']; }
  get carga() { return this.formSearch.controls['carga']; }
  get auricular() { return this.formSearch.controls['auricular']; }
  get fecIniRegistro() { return this.formSearch.controls['fecIniRegistro']; }
  get fecFinRegistro() { return this.formSearch.controls['fecFinRegistro']; }
}
