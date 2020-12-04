import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  registrarProspecto(): Observable<any> {
    const body = {
      "postulante": {
        "nombresPostulante": "Jhonatan Marcial",
        "apellidosPostulante": "Meza Inca",
        "fecNacimiento": "1990-06-17",
        "sexo": 1,
        "tipoDocumento": 1,
        "numeroDocumento": "46357329",
        "fecha_hora_post": "2020-11-29T01:46:00.000Z"
      },
      "datosPersonales": {
        "telefono": "12345678",
        "correo": "jhonatan@gmail.com",
        "pais": "Perú",
        "departamento": "Lima",
        "provincia": "Lima",
        "distrito": "San Juan de Miraflores",
        "direccion": "Av. Defensores de Lima 816",
        "latitud": "145'3215.156",
        "longitud": "145'3215.158",
        "fec_hora_datos": "2020-11-29T01:46:00.000Z",
        "postulante": {
        }
      },
      "proyecto": "prospectos - b12"
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._httpClient.post(`http://ec2-54-90-30-216.compute-1.amazonaws.com:9090/api/postulante/registrar-prospecto`, body, { headers });
  }
  // registrarProspecto(body: any): Observable<any> {
  //   return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarProspecto}`,body);
  // }

  registrarConectividad(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarConectividad}`, body);
  }

  registrarDispositivos(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarDispositivos}`, body);
  }

  registrarEquipo(body: any): Observable<any> {
    return this._http.post<any>(`${environment.api}${environment.apiService.postulante.registrarEquipo}`, body);
  }

}
