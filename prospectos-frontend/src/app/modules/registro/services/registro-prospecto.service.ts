import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RegistroProspectoService {

  constructor(
    private _http: ApiService,
  ) { }

  // registrarProspecto(): Observable<any> {
  //   this._http.post<any>(`${environment.api}/${environment.apiService.postulante.registrarProspecto}`);
  // }

}
