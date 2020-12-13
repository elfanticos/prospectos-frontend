import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject</* User */any>;
    public user: Observable</* User */any>;

    constructor(
        private router: Router,
        private _http: ApiService,
        private _httClient: HttpClient
    ) {
        this.userSubject = new BehaviorSubject</* User */any>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): /* User */any {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        const body = new HttpParams()
            .set('username', username)
            .set('password', password)
            .set('grant_type', 'password');
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Basic cnJoaHByb3NwZWN0b2FwcDpycmhocHJvc3BlY3RvY29kZXg='
        });
        return this._httClient.post<any>(`${environment.api}${environment.apiService.oauth.token}`, body, {headers});
    }

    logout() {
        this._http.post<any>(`${environment.api}/users/revoke-token`, {}).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    refreshToken() {
        const uri = `${environment.api}${environment.apiService.oauth.token}`;
        console.log(uri);
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic cnJoaHByb3NwZWN0b2FwcDpycmhocHJvc3BlY3RvY29kZXg='
        });
        return this._http.post<any>(`${environment.api}${environment.apiService.oauth.token}`, {
            grant_type: 'password',
            username: 'UsuAdmin',
            password: '123'
        })
            .pipe(map((user) => {
                console.log(user);
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            }));
    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}