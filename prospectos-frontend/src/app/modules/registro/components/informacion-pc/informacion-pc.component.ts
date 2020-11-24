import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDisco } from '../../entities/combos/disco';
import { IProcesador } from '../../entities/combos/procesador';
import { IRam } from '../../entities/combos/ram';
import { ISistema } from '../../entities/combos/sistema';
import { CombosService } from '../../services/combos.service';
import { RegistroFormService } from '../../services/registro-form.service';

@Component({
  selector: 'app-informacion-pc',
  templateUrl: './informacion-pc.component.html',
  styleUrls: ['./informacion-pc.component.css']
})
export class InformacionPcComponent implements OnInit {
  infoPcForm: FormGroup;
  procesadores: IProcesador[] = [];
  memoriasRam: IRam[] = [];
  discos: IDisco[] = [];
  sistemas: ISistema[] = [];
  constructor(
    private _registroFormService: RegistroFormService,
    private _combosService: CombosService
  ) {
    this.infoPcForm = this._registroFormService.formInfoPc;
  }

  ngOnInit(): void {
    this.procesadores = JSON.parse(localStorage.getItem('procesadores') || '[]');
    this.memoriasRam = JSON.parse(localStorage.getItem('memoriasRam') || '[]');
    this.discos = JSON.parse(localStorage.getItem('discos') || '[]');
    this.sistemas = JSON.parse(localStorage.getItem('sistemas') || '[]');

    this.loadProcesadores();
    this.loadMemoriasRam();
    this.loadDiscos();
    this.loadSistemas();

  }

  get procesador() { return this.infoPcForm.get('equipo').get('procesador'); }
  get memoriaRam() { return this.infoPcForm.get('equipo').get('memoriaRam'); }
  get discoDuro() { return this.infoPcForm.get('equipo').get('discoDuro'); }
  get sistOperativo() { return this.infoPcForm.get('equipo').get('sistOperativo'); }
  get urlImagen() { return  this.infoPcForm.get('image').get('urlImagen'); }
  get nombreImagen() { return  this.infoPcForm.get('image').get('nombreImagen'); }

  loadProcesadores(): void {
    this._combosService.comboProcesador().subscribe(procesadores => {
      this.procesadores = procesadores;
      localStorage.setItem('procesadores', JSON.stringify(this.procesadores));
    });
  }

  loadMemoriasRam(): void {
    this._combosService.comboRam().subscribe(memoriasRam => {
      this.memoriasRam = memoriasRam;
      localStorage.setItem('memoriasRam', JSON.stringify(this.memoriasRam));
    });
  }

  loadDiscos(): void {
    this._combosService.comboDisco().subscribe(discos => {
      this.discos = discos;
      localStorage.setItem('discos', JSON.stringify(this.discos));
    });
  }

  loadSistemas(): void {
    this._combosService.comboSistema().subscribe(sistemas => {
      this.sistemas = sistemas;
      localStorage.setItem('sistemas', JSON.stringify(this.sistemas));
    });
  }

}
