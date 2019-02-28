import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EventEmitter } from '@angular/core';
@Injectable()
export class SettingsService {
    @Output() getFormFields: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }

    settingsList() {
        return this.http.get<any>(environment.apiUrl + 'new-project-fields-list')
            .pipe(map((res: any) => {
                return res.data;
            }));
    }

    changeStatus(data){
        return this.http.put<any>(environment.apiUrl + 'change-field-status', data)
            .pipe(map((res: any) => {
                this.getFormFields.emit(res);
                return res;
            }));
    }

}
