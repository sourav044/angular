import { Injectable,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class TicketService {
    @Output() getTickets:EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(environment.apiUrl+'MovieList')
        .pipe(map((res:any) => {
            console.log(res);
           return res;
        }));
    }
    createTicket(data){
        return this.http.post<any>(environment.apiUrl+'MovieCreate', data)
        .pipe(map((res:any) => {
            this.getTickets.emit(res);
            return res.data;
        }));
    }
    editTicket(data){
        return this.http.put<any>(environment.apiUrl+'MovieDetails', data)
        .pipe(map((res:any) => {
            return res.data;
        }));
    }

    bookTicket(data){
        return this.http.put<any>(environment.apiUrl+'MovieBook', data)
        .pipe(map((res:any) => {
            return res.data;
        }));
    }

}
