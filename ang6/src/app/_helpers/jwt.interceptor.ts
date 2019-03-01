import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let key  = 'LozC7H0rINg8kO1FMrm1RRBIzjw9AozsQwguKB3J';
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    'x-api-key':key,
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }else{
            request = request.clone({
                setHeaders: { 
                    'x-api-key':key
                }
            });
        }
 
        return next.handle(request);
    }
}