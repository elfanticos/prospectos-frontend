import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AdminProspectoService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  buscarProspecto(): Observable<any> {
    const params = new HttpParams()
      .set('idProyecto', '0')
      .set('tipoDocumento', '0')
      .set('numeroDocumento', '')
      .set('pais', '139')
      .set('departamento', '0')
      .set('distrito', '0')
      .set('descarga', '')
      .set('carga', '')
      .set('auricular', '0')
      .set('fecIniRegistro', '')
      .set('fecFinRegistro', '');
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this._httpClient.get<any>(`${environment.api}${environment.apiService.admin.buscarProspecto}`, { params, headers });
  }

  detalleProspecto(): Observable<any> {
    const params = new HttpParams()
      .set('idProspecto', '22');
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this._httpClient.get<any>(`${environment.api}${environment.apiService.admin.detalleProspecto}`, { params, headers });
  }

  listarProyecto(): Observable<any> {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this._httpClient.get<any>(`${environment.api}${environment.apiService.admin.listarProyecto}`, { headers });
  }

}