import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RegistroProspectoService {

  constructor(
    private _http: ApiService,
    private _httpClient: HttpClient
  ) { }

  registrarProspecto(body: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.post<any>(`${environment.api}${environment.apiService.postulante.registrarProspecto}`, body, { headers });
  }

  registrarConectividad(body: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.post<any>(`${environment.api}${environment.apiService.postulante.registrarConectividad}`, body, { headers });
  }

  registrarDispositivos(body: any): Observable<any> {
    const idPostulante = localStorage.getItem('idPostulante');
    console.log('body => ', body);
    const params = new HttpParams()
      .set('TIPO-DISPOSITIVO', body.tipoDispositivo)
      .set('ID-POSTULANTE', idPostulante)
      .set('EXTENCION-FILE', body.extension);
    const formData = new FormData();
    formData.append('file', body.file);
    console.log('formData => ', formData);
    return this._httpClient.post<any>(`${environment.api}${environment.apiService.postulante.registrarDispositivos}`, formData, { params });
  }

  registrarEquipo(body: any): Observable<any> {
    const updBody = {
      ...body,
      file: null,
      idPostulante: localStorage.getItem('idPostulante')
    };
    // const params = new HttpParams()
    //   .set('procesador', body.procesador)
    //   .set('memoriaRam', body.memoriaRam)
    //   .set('discoDuro', body.discoDuro)
    //   .set('sistOperativo', body.sistOperativo)
    //   .set('idPostulante', '36');
    // const formData = new FormData()
    //   .append('file', body.file);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.post<any>(`${environment.api}${environment.apiService.postulante.registrarEquipo}`, updBody, { headers });
  }

  registrarEquipoImg(body: any): Observable<any> {
    const params = new HttpParams()
      .set('EQUIPO', body.equipo)
      .set('EXTENCION-FILE', body.extensionImg);
    const formData = new FormData()
    formData.append('file', body.file);
    return this._httpClient.post<any>(`${environment.api}${environment.apiService.postulante.registrarEquipoImg}`, formData, { params });
  }

  dataSpeedTest(): Observable<any> {
    const params = new HttpParams()
      .set('https', 'true')
      .set('token', 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm')
      .set('urlCount', '5');
    let headers = new HttpHeaders()
      // .set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Wit')
      // .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
      // .set('Access-Control-Allow-Origin', '*')
      // .set('Access-Control-Allow-Credentials', 'true')
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')

    // headers.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Wit');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // headers.append( 'Content-Type', 'application/json');

    return this._httpClient.get<any>('https://api.fast.com/netflix/speedtest/v2', { params, headers });
  }


}
