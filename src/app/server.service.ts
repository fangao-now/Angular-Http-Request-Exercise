import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/RX';
import { Observable } from 'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular-http-exercise-95836.firebaseio.com/data.json',
    // servers,
    // {headers: headers} );
        return this.http.put('https://angular-http-exercise-95836.firebaseio.com/data.json',
    servers,
    {headers: headers} );
  }

  getServers() {
    return this.http.get('https://angular-http-exercise-95836.firebaseio.com/data')
    .map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          // server.name = 'get_' + server.name;
          console.log(server);
        }
        return data;
      }
    ).catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw('failed to get server');
      }
    );
  }

  getAppName() {
    return this.http.get('https://angular-http-exercise-95836.firebaseio.com/appName.json')
    .map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
