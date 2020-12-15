import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpeedTestService, SpeedTestSettingsModel } from 'ng-speed-test';
import { Observable } from 'rxjs';
import { IDataIP } from '../models/data-ip';

@Injectable({
    providedIn: 'root'
})
export class TechCheckService {
    constructor(
        private speedTestService: SpeedTestService,
        private _httpClient: HttpClient
    ) {
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
}