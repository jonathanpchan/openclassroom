//Service module for building, class, and classroom queries
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import {tokenNotExpired} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class BuildingsService {
  constructor(private http: Http) { }

  //=========== Buildings ======================
  // Get building based on name
  getBuilding(name: String): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/buildings', {name}, { headers: headers }).map(res => res.json()).catch(this.handleError);
    return this.http.post('buildings', {name}, { headers: headers }).map(res => res.json()).catch(this.handleError);
  }

  // Get all buildings
  getBuildings(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.get('http://localhost:3000/buildings', { headers: headers }).map(res => res.json()).catch(this.handleError);
    return this.http.get('buildings', { headers: headers }).map(res => res.json()).catch(this.handleError);
  }

  // Get all building names
  getBuildingNames(): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json' });
    // return this.http.get('http://localhost:3000/buildings/names', { headers: headers }).map(res => res.json()).catch(this.handleError);
    return this.http.get('buildings/names', { headers: headers }).map(res => res.json()).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message: error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
