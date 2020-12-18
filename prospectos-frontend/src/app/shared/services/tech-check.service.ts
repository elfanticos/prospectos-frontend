import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
        return this._httpClient.get('http://ip-api.com/json');
    }

    getIp(): Observable<any> {
        return this._httpClient.get('https://api.ipify.org/?format=json').pipe(map((objIP: any) => {
            this.ip = (objIP || {}).ip;
            return this.ip;
        }));
    }
}