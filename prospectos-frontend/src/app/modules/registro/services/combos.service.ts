import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    private _httpClient: HttpClient
  ) {
  }

  comboPais(): Observable<IPais[]> {
    // return this._httpClient.get<IPais[]>({path: `${environment.api}${environment.apiService.combos.pais}`});

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.get<IPais[]>(`${environment.api}${environment.apiService.combos.pais}`, { headers });
  }

  comboDepartamento(idPais: number): Observable<IDepartamento[]> {
    const params: HttpParams = new HttpParams()
      .set('idPais', String(idPais));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // return this._http.get<IDepartamento[]>({path: `${environment.api}${environment.apiService.combos.departamento}`,_params});
    return this._httpClient.get<IDepartamento[]>(`${environment.api}${environment.apiService.combos.departamento}`, { params, headers });
  }

  comboProvincia(idDepartamento: number): Observable<IProvincia[]> {
    const params: HttpParams = new HttpParams()
      .set('idDepartamento', String(idDepartamento));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // return this._http.get<IProvincia[]>({path:`${environment.api}${environment.apiService.combos.provincia}`, _params});
    return this._httpClient.get<IProvincia[]>(`${environment.api}${environment.apiService.combos.provincia}`, { params, headers });
  }

  comboDistrito(idProvincia: number): Observable<IDistrito[]> {
    const params: HttpParams = new HttpParams()
      .set('idProvincia', String(idProvincia));
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // return this._http.get<IDistrito[]>({path: `${environment.api}${environment.apiService.combos.distrito}`,_params });
    return this._httpClient.get<IDistrito[]>(`${environment.api}${environment.apiService.combos.distrito}`, { params, headers });
  }

  comboProcesador(): Observable<IProcesador[]> {
    // return this._http.get<IProcesador[]>({path: `${environment.api}${environment.apiService.combos.procesador}`});
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.get<IProcesador[]>(`${environment.api}${environment.apiService.combos.procesador}`, { headers });
  }

  comboRam(): Observable<IRam[]> {
    // return this._http.get<IRam[]>({path: `${environment.api}${environment.apiService.combos.ram}`});
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.get<IRam[]>(`${environment.api}${environment.apiService.combos.ram}`, { headers });
  }

  comboDisco(): Observable<IDisco[]> {
    // return this._http.get<IDisco[]>({path: `${environment.api}${environment.apiService.combos.disco}`});
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.get<IDisco[]>(`${environment.api}${environment.apiService.combos.disco}`, { headers });
  }

  comboSistema(): Observable<ISistema[]> {
    // return this._http.get<ISistema[]>({path: `${environment.api}${environment.apiService.combos.sistema}`});
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.get<ISistema[]>(`${environment.api}${environment.apiService.combos.sistema}`, { headers });
  }

  comboAuricular(): Observable<IAuricular[]> {
    // return this._http.get<IAuricular[]>({path: `${environment.api}${environment.apiService.combos.auricular}`});
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.get<IAuricular[]>(`${environment.api}${environment.apiService.combos.auricular}`, { headers });
  }
}


