import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthenticationService } from '@app/core/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.jwtToken;
        const isApiUrl = request.url.startsWith(environment.api);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
            });
        }

        if (request.url.includes(environment.apiService.oauth.token)) {
            request = request.clone({
                setHeaders: { Authorization: ' Basic cnJoaHByb3NwZWN0b2FwcDpycmhocHJvc3BlY3RvY29kZXg=' }
            });
        }

        return next.handle(request);
    }
}