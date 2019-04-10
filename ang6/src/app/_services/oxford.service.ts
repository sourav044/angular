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

    let promise = new Promise((resolve, reject) => {
    let apiURL = environment.apiUrl +'Dictionary?val='+ data;
    this.http.get(apiURL)
      .toPromise()
      .then(
        res => { // Success
          console.log(res.json());
          resolve();
        }
      );
  });
  return promise;

    
  }
}
