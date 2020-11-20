import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CombosService {

constructor(
  private _http: ApiService
) { }

  comboPais(): Observable<any> {
    return this._http.post(`${environment.api}${environment.apiService.combos.pais}`);
  }

  comboDepartamento(): Observable<any> {
    return this._http.post(`${environment.api}${environment.apiService.combos.departamento}`);
  }

  comboProvincia(): Observable<any> {
    return this._http.post(`${environment.api}${environment.apiService.combos.provincia}`);
  }

  comboDistrito(): Observable<any> {
    return this._http.post(`${environment.api}${environment.apiService.combos.distrito}`);
  }
}
