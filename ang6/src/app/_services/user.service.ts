import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EventEmitter } from '@angular/core';
import { listener } from '@angular/core/src/render3/instructions';


@Injectable()
export class UserService {
   
    @Output() getUsers: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }

    passwordChange(data) {
        return this.http.post<any>(environment.apiUrl + 'change-password', data)
            .pipe(map((res: any) => {
                return res;
            }));
    }

    usersList(method) {
        let data = {
            user_type: method,
            // status: 1
        }
        return this.http.post(environment.apiUrl + 'user-list', data)
            .pipe(map((res: any) => {
                return res.data;
            }));
    }
    createUser(data) {
        return this.http.post(environment.apiUrl + 'user-create', data)
            .pipe(map((res: any) => {
                this.getUsers.emit(res);
                return res;
            }));
    }
    editUser(data) {
        return this.http.put(environment.apiUrl + 'user-update', data)
            .pipe(map((res: any) => {
                this.getUsers.emit(res);
                return res;
            }));
    }

    getUser() {
        return this.http.get(environment.apiUrl + 'user-profile')
            .pipe(map((res: any) => {
                return res.data;
            }));
    }
	
    user_profile(data) {
        return this.http.post(environment.apiUrl + 'user-profile-update', data)
            .pipe(map((res: any) => {
                this.getUsers.emit(res);
                return res;
            }));
    }


}



