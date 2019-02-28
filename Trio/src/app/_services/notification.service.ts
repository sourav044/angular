import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {
    @Output() getNotifications: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }

    getNotification() {
        return this.http.get<any>(environment.apiUrl + 'get-notifications')
            .pipe(map((res: any) => {
                return res.data;
            }));
    }
    ChangeNotificationStatus(data) {
        return this.http.put<any>(environment.apiUrl + 'change-notification-read-status',data)
            .pipe(map((res: any) => {
                this.getNotifications.emit(res);
                return res;
            }));
    }
}