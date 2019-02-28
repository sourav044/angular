import { Injectable,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class TicketService {
    @Output() getTickets:EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }

    getAll(data) {
        return this.http.post<any>(environment.apiUrl+'ticket-list', data)
        .pipe(map((res:any) => {
           return res.data;
        }));
    }
    createTicket(data){
        return this.http.post<any>(environment.apiUrl+'ticket-create', data)
        .pipe(map((res:any) => {
            this.getTickets.emit(res);
            return res.data;
        }));
    }
    editTicket(data){
        return this.http.put<any>(environment.apiUrl+'update-ticket-details', data)
        .pipe(map((res:any) => {
            return res.data;
        }));
    }



}
