import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'content-type': 'application/json'});
    /* return this.http.post(
        'https://udemy-ng-http-e1a40.firebaseio.com/servers.json',
        servers,
        {headers: headers}
    ); */
    return this.http.put(
      'https://udemy-ng-http-e1a40.firebaseio.com/servers.json',
      servers,
      {headers: headers}
  );
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-e1a40.firebaseio.com/servers.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ))
      .pipe(catchError(
        (error: Response) => {
          return throwError('Something went wrong');
        }
      ));
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-e1a40.firebaseio.com/appName.json')
      .pipe(map(
        (response: Response) => {
          return response.json();
        }
      ));
  }

}
