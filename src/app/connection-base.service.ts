import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionBaseService {

  api : string  = 'http://127.0.0.1/filmes/';

  constructor(public http: HttpClient) { }

  public getDataPost(route, post): Observable<any>{
    post = JSON.stringify(post);
    return this.http.post(this.api + route, post);
  }
  
  public getData(route): Observable<any>{
    return this.http.get(this.api + route);
  }
}
