import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ForgotPasswordService {
    constructor(private http: HttpClient) { } 

    forgotPassword(email: string) {
        return this.http.post<any>(environment.apiUrl+'forgot-password', email)
        .pipe(map((res:any) => {
            return res;
        }));
    }
      
}

