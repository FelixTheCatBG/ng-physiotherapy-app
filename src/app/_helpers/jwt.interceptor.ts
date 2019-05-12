import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let loggedIn = this.authenticationService.isLoggedIn();
        console.log("interceptorrr");
        var token = localStorage.getItem("jwt");

        if (loggedIn && token) {
            request = request.clone({
                responseType: 'json',
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'

                }
            });
        }

        return next.handle(request);
    }
}