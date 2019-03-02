import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string)  {

     // ------------ API ------------------
     return this.http.post<any>(environment.apiUrl+'Login', {"a"})
         .pipe(map((res:any) => {
             // login successful if there's a jwt token in the response
                console.log(res);
                 // store username and jwt token in local storage to keep user logged in between page refreshes
                 localStorage.setItem('currentUser',res);
                 return res;
             
          }));


     


  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
