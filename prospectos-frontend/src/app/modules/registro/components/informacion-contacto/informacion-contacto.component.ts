import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Globals } from '@app/globals';
import { MapaUbicacionService } from '@app/shared/components/mapa-ubicacion/mapa-ubicacion.service';
import { filter } from 'rxjs/internal/operators/filter';
import { IDepartamento } from '../../entities/combos/departamento';
import { IDistrito } from '../../entities/combos/distrito';
import { IPais } from '../../entities/combos/pais';
import { IProvincia } from '../../entities/combos/provincia';
import { CombosService } from '../../services/combos.service';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-contacto',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css']
})
export class InformacionContactoComponent implements OnInit {
  paises: IPais[] = [];
  departamentos: IDepartamento[] = [];
  provincias: IProvincia[] = [];
  distritos: IDistrito[] = [];
  // departamentos
  infoContactoForm: FormGroup;
  constructor(
    private _registroFormService: RegistroFormService,
    private _comboService: CombosService,
    private _globals: Globals,
    private mapaUbicacionSrv: MapaUbicacionService
  ) {
    this.infoContactoForm = this._registroFormService.formInfoContacto;
  }

  ngOnInit(): void {
    this._comboService.comboPais().subscribe(paises => this.paises = paises || []);
    this.setDepartamentos(JSON.parse(localStorage.getItem('departamentos') || '[]'));
    this.setProvincias(JSON.parse(localStorage.getItem('provincias') || '[]'));
    this.setDistritos(JSON.parse(localStorage.getItem('distritos') || '[]'));
    this.mapaUbicacionSrv.direccionState.pipe(filter(a => a != null)).subscribe(a => {
      this.direccion.setValue(a.direccion);
      this.latitud.setValue(a.lat);
      this.longitud.setValue(a.lng);
    })
  }

  get telefono() { return this.infoContactoForm.controls['telefono']; }
  get correo() { return this.infoContactoForm.controls['correo']; }
  get pais() { return this.infoContactoForm.controls['pais']; }
  get departamento() { return this.infoContactoForm.controls['departamento']; }
  get provincia() { return this.infoContactoForm.controls['provincia']; }
  get distrito() { return this.infoContactoForm.controls['distrito']; }
  get direccion() { return this.infoContactoForm.controls['direccion']; }
  get latitud() { return this.infoContactoForm.controls['latitud']; }
  get longitud() { return this.infoContactoForm.controls['longitud']; }

  selectedPais(): void {
    this.departamento.setValue('');
    this.loadDepartamentos();
  }

  selectedDepartamento(): void {
    this.loadProvincias();
  }

  selectedProvincia(): void {
    this.loadDistritos();
  }

  loadDepartamentos(): void {
    const objPaisSelected = this.paises.find(f => f.nombrePais == this.pais.value);
    this._comboService.comboDepartamento(objPaisSelected.idPais).subscribe(departamentos => {
      localStorage.setItem('departamentos', JSON.stringify(departamentos || []));
      this.setDepartamentos(departamentos);
    });
    this.departamento.enable();
    // if (this.pais.value === String(this._globals.__ID_PAIS_PERU)) {
    //   this._comboService.comboDepartamento().subscribe(departamentos => {
    //     localStorage.setItem('departamentos', JSON.stringify(departamentos || []));
    //     this.setDepartamentos(departamentos);
    //   });
    //   this.departamento.enable();
    // } else {
    //   this.setDepartamentos([]);
    // }
  }

  setDepartamentos(departamentos: IDepartamento[]): void {
    this.departamentos = departamentos || [];
    if (this.departamentos.length > 0 && this.pais.value) this.departamento.enable();
    else this.departamento.disable();
    this.provincia.setValue('');
    this.distrito.setValue('');
    this.provincia.disable();
    this.distrito.disable();
  }

  loadProvincias(): void {
    const objDepartamentoSelected = this.departamentos.find(f => f.nombreDepartamento == this.departamento.value);
    this._comboService.comboProvincia(objDepartamentoSelected.idDepartamento).subscribe(provincias => {
      localStorage.setItem('provincias', JSON.stringify(provincias || []));
      this.setProvincias(provincias);
    });
  }


  setProvincias(provincias: IProvincia[]): void {
    this.provincias = provincias || [];
    if (this.provincias.length > 0 && this.departamento.value) this.provincia.enable();
    else this.provincia.disable();
    this.distrito.setValue('');
    this.distrito.disable();
  }

  loadDistritos(): void {
    const objProvinciaSelected = this.provincias.find(f => f.nombreProvincia == this.provincia.value);
    this._comboService.comboDistrito(objProvinciaSelected.idProvincia).subscribe(distritos => {
      localStorage.setItem('distritos', JSON.stringify(distritos || []));
      this.setDistritos(distritos);
    });
  }

  setDistritos(distritos: IDistrito[]): void {
    this.distritos = distritos || [];
    if (this.distritos.length > 0 && this.provincia.value) this.distrito.enable();
    else this.distrito.disable();
  }

  onKeypressEvent(event) {
    if (event.code == 'Enter') {
      this.mapaUbicacionSrv.direccionCoordenates.next(this.direccion.value);
    }
  }
}
