import { HttpParams } from '@angular/common/http';
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
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarProspecto}`, body);
  }

  registrarConectividad(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarConectividad}`, body);
  }

  registrarDispositivos(body: any): Observable<any> {
    const params = new HttpParams()
      .set('TIPO-DISPOSITIVO', body.tipoDispositivo)
      .set('ID-POSTULANTE', '1')
      .set('EXTENCION-FILE', 'jpg');
    const formData = new FormData()
      .append('file', body.file);
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarDispositivos}`, formData, params);
  }

  registrarEquipo(body: any): Observable<any> {
    const params = new HttpParams()
      .set('procesador', body.procesador)
      .set('memoriaRam', body.memoriaRam)
      .set('discoDuro', body.discoDuro)
      .set('sistOperativo', body.sistOperativo)
      .set('idPostulante', '1');
    const formData = new FormData()
      .append('file', body.file);
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarEquipo}`, formData, params);
  }

  registrarEquipoImg(body: any): Observable<any>{
    const params = new HttpParams()
      .set('EQUIPO', body.tipoEquipo)
      .set('EXTENCION-FILE', 'pmg');
    const formData = new FormData()
      .append('file', body.file);
      return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarEquipo}`, formData, params);
  }

}
