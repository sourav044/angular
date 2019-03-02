import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string)  {
        
        console.log(email);
       // ------------ API ------------------
       return this.http.post<any>(environment.apiUrl+'Login', ({ email: email, password: password }))
           .pipe(map((res:any) => {
               // login successful if there's a jwt token in the response
                  console.log(res);
                   // store username and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser',JSON.stringify({ user: res.user, type: res.type, token: res.token  }));
                   return res;
               
            }));


       


    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
