import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    return this.http.post('https://angular-http-exercise-95836.firebaseio.com/data.json', servers);
  }
}
