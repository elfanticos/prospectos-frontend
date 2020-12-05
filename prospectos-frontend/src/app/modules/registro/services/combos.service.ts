import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { IAuricular } from '../entities/combos/auricular';
import { IDepartamento } from '../entities/combos/departamento';
import { IDisco } from '../entities/combos/disco';
import { IDistrito } from '../entities/combos/distrito';
import { IPais } from '../entities/combos/pais';
import { IProcesador } from '../entities/combos/procesador';
import { IProvincia } from '../entities/combos/provincia';
import { IRam } from '../entities/combos/ram';
import { ISistema } from '../entities/combos/sistema';

@Injectable()
export class CombosService {

constructor(
  private _http: ApiService,
) { }

  comboPais(): Observable<IPais[]> {
    return this._http.get<IPais[]>({path: `${environment.api}${environment.apiService.combos.pais}`});
  }

  comboDepartamento(idPais: number): Observable<IDepartamento[]> {
    const _params: HttpParams = new HttpParams()
    .set('idPais', String(idPais));
    return this._http.get<IDepartamento[]>({path: `${environment.api}${environment.apiService.combos.departamento}`,_params});
  }

  comboProvincia(idDepartamento: number): Observable<IProvincia[]> {
    const _params: HttpParams = new HttpParams()
    .set('idDepartamento', String(idDepartamento));
    return this._http.get<IProvincia[]>({path:`${environment.api}${environment.apiService.combos.provincia}`, _params});
  }

  comboDistrito(idProvincia: number): Observable<IDistrito[]> {
    const _params: HttpParams = new HttpParams()
    .set('idProvincia', String(idProvincia));
    return this._http.get<IDistrito[]>({path: `${environment.api}${environment.apiService.combos.distrito}`,_params });
  }

  comboProcesador(): Observable<IProcesador[]> {
    return this._http.get<IProcesador[]>({path: `${environment.api}${environment.apiService.combos.procesador}`});
  }

  comboRam(): Observable<IRam[]> {
    return this._http.get<IRam[]>({path: `${environment.api}${environment.apiService.combos.ram}`});
  }

  comboDisco(): Observable<IDisco[]> {
    return this._http.get<IDisco[]>({path: `${environment.api}${environment.apiService.combos.disco}`});
  }

  comboSistema(): Observable<ISistema[]> {
    return this._http.get<ISistema[]>({path: `${environment.api}${environment.apiService.combos.sistema}`});
  }

  comboAuricular(): Observable<IAuricular[]> {
    return this._http.get<IAuricular[]>({path: `${environment.api}${environment.apiService.combos.auricular}`});
  }
}


