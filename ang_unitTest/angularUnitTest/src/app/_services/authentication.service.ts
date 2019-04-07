import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs/operators';
import {
  environment
} from '../../environments/environment';
import { reject } from 'q';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    
    // ------------ API ------------------
    return this.http.post < any > (environment.apiUrl + 'Login', ({
        email: email,
        password: password
      }))
      .pipe(map((res: any) => {
        // login successful if there's a jwt token in the response
        alert(res);
        localStorage.setItem('currentUser', JSON.stringify({
          user: res.user,
          type: res.type,
          token: res.token
        }));
        return res;

      }));
  }

  LoginStatus(): boolean {
    if (localStorage["currentUser"] == null) {
      return true;
    } else {
      return false;

    }
  }

  LogOut() {
           
      return new Promise((resolve,reject) =>{
      setTimeout(() => {
        localStorage["currentUser"] = null;
         resolve(true);
      },100);
      });
           
  }
}
