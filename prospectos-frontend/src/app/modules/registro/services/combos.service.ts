import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '@app/globals';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { IDepartamento } from '../entities/combos/departamento';
import { IDistrito } from '../entities/combos/distrito';
import { IPais } from '../entities/combos/pais';
import { IProvincia } from '../entities/combos/provincia';

@Injectable()
export class CombosService {

constructor(
  private _http: ApiService,
  private _globals: Globals
) { }

  comboPais(): Observable<IPais[]> {
    return this._http.get<IPais[]>({path: `${environment.api}${environment.apiService.combos.pais}`});
  }

  comboDepartamento(): Observable<IDepartamento[]> {
    const _params: HttpParams = new HttpParams()
    .set('idPais', String(this._globals.__ID_PAIS_PERU));
    return this._http.get<IDepartamento[]>({path: `${environment.api}${environment.apiService.combos.departamento}`,_params});
  }

  comboProvincia(idDepartamento: string): Observable<IProvincia[]> {
    const _params: HttpParams = new HttpParams()
    .set('idDepartamento', idDepartamento);
    return this._http.get<IProvincia[]>({path:`${environment.api}${environment.apiService.combos.provincia}`, _params});
  }

  comboDistrito(idProvincia: string): Observable<IDistrito[]> {
    const _params: HttpParams = new HttpParams()
    .set('idProvincia', idProvincia);
    return this._http.get<IDistrito[]>({path: `${environment.api}${environment.apiService.combos.distrito}`,_params });
  }
}
