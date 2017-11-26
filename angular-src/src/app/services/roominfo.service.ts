//Service module for building, class, and classroom queries
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import {tokenNotExpired} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomInfoService {
  constructor(private http: Http) { }

  getRoomInfo(building, room) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/roominfo/getRoomInfo', { building, room }, { headers: headers }).map(res => res.json());
    // return this.http.post('roominfo/getRoomInfo', { building, room }, { headers: headers }).map(res => res.json());
  }

  addComment(building, room, email, comment) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/roominfo/addComment', { building, room, email, comment }, { headers: headers }).map(res => res.json());
    // return this.http.post('roominfo/addComment', { building, room, email, comment }, { headers: headers }).map(res => res.json());
  }

  addVote(building, room, email, item, pos, nvote) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/roominfo/addVote', { building, room, email, item, pos, nvote }, { headers: headers }).map(res => res.json());
    // return this.http.post('roominfo/addVote', { building, room, email, item, pos, nvote }, { headers: headers }).map(res => res.json());
  }
}
