import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { SpeedTestService, SpeedTestSettingsModel } from 'ng-speed-test';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDataIP } from '../models/data-ip';

@Injectable({
    providedIn: 'root'
})
export class TechCheckService {
    private _ip: string = null;
    constructor(
        private speedTestService: SpeedTestService,
        private _httpClient: HttpClient
    ) {
    }

    get ip(): string {
        return this._ip;
    }
    set ip(value: string) {
        this._ip = value;
    }

    getMbps(setting?: SpeedTestSettingsModel): Observable<number> {
        setting = setting || {};
        setting.iterations = 80;
        setting.retryDelay = 20000;
        return this.speedTestService.getMbps();
    }

    getDataIP(): Observable<IDataIP> {
        console.log(this.ip);
        let params = new HttpParams()
            .set('ip', this.ip);

        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this._httpClient.get(`${environment.api}${environment.apiService.postulante.testIP}`, { headers, params });
    }

    getIp(): Observable<any> {
        return this._httpClient.get('https://api.ipify.org/?format=json').pipe(map((objIP: any) => {
            this.ip = (objIP || {}).ip;
            return this.ip;
        }));
    }
}