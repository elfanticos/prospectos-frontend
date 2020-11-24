import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Globals } from '@app/globals';
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
    private _globals: Globals
  ) {
    this.infoContactoForm = this._registroFormService.formInfoContacto;
  }

  ngOnInit(): void {
    this._comboService.comboPais().subscribe(paises => this.paises = paises || []);
    this.pais.valueChanges.subscribe(() => this.loadDepartamentos());
    this.departamento.valueChanges.subscribe(() => this.loadProvincias());
    this.provincia.valueChanges.subscribe(() => this.loadDistritos());

    this.setDepartamentos(JSON.parse(localStorage.getItem('departamentos') || '[]'));
    this.setProvincias(JSON.parse(localStorage.getItem('provincias') || '[]'));
    this.setDistritos(JSON.parse(localStorage.getItem('distritos') || '[]'));
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


  loadDepartamentos(): void {
    if (this.pais.value === String(this._globals.__ID_PAIS_PERU)) {
      this._comboService.comboDepartamento().subscribe(departamentos => {
        localStorage.setItem('departamentos', JSON.stringify(departamentos || []));
        this.setDepartamentos(departamentos);
      });
      this.departamento.enable();
    } else {
      this.setDepartamentos([]);
    }
  }

  setDepartamentos(departamentos: IDepartamento[]): void {
    this.departamentos = departamentos || [];
    if (this.departamentos.length > 0) this.departamento.enable();
    else this.departamento.disable();
    this.provincia.disable();
    this.distrito.disable();
  }

  loadProvincias(): void {
    this._comboService.comboProvincia(this.departamento.value).subscribe(provincias => {
      localStorage.setItem('provincias', JSON.stringify(provincias ||[]));
      this.setProvincias(provincias);
    });
  }


  setProvincias(provincias: IProvincia[]): void {
    this.provincias = provincias || [];
    if (this.provincias.length > 0) this.provincia.enable();
    else this.provincia.disable();
    this.distrito.disable();
  }

  loadDistritos(): void {
    this._comboService.comboDistrito(this.provincia.value).subscribe(distritos => {
      localStorage.setItem('distritos', JSON.stringify(distritos ||[]));
      this.setDistritos(distritos);
    });
  }

  setDistritos(distritos: IDistrito[]): void {
    this.distritos = distritos || [];
    if (this.distritos.length > 0) this.distrito.enable();
    else this.distrito.disable();
  }
}
