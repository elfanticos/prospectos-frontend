import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RegistroProspectoService {

  constructor(
    private _http: ApiService,
  ) { }

  registrarProspecto(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarProspecto}`,body);
  }

  registrarConectividad(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarConectividad}`,body);
  }

  registrarDispositivos(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarDispositivos}`,body);
  }

  registrarEquipo(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarEquipo}`,body);
  }

}
