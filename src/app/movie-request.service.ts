import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieRequestService {

  url = 'http://www.omdbapi.com/';
  apiKey = '8d54bf2'; // <-- Enter your own key here!

  constructor(private http: HttpClient) { }

  public conectarAPI(title, type): Observable<any>{
    
    return this.http.get(this.url+'?s='+title+'&type='+type+'&apikey='+this.apiKey+'&plot=full');
  
  }
}
