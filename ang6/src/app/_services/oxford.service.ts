import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { EventEmitter } from '@angular/core';
import { listener } from '@angular/core/src/render3/instructions';

@Injectable()
export class OxfordService {

  constructor(private http: HttpClient) { }

  getDefinition(data) {

         return this.http.get<any>(environment.apiUrl +''+ data)
          .pipe(map((res:any) => {
            console.log(res)
              return res.data;
          }));
    }
}
