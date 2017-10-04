import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
    // return this.http.post('users/register', user, {headers: headers}).map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).map(res => res.json());
    // return this.http.post('users/authenticate', user, {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getSchedule(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/schedule', {headers: headers}).map(res => res.json());
    // return this.http.get('users/schedule', {headers: headers}).map(res => res.json());
  }

  getBuildingList(){
    let headers = new Headers();
    // this.loadToken();
    // headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/buildings', {headers: headers}).map(res => res.json());
    // return this.http.get('buildings', {headers: headers}).map(res => res.json());
  }

  getCourseNames(){
    let headers = new Headers();
    // this.loadToken();
    // headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/names', {headers: headers}).map(res => res.json());
    //return this.http.get('users/coursenames', {headers: headers}).map(res => res.json());
  }

  getCourses(){
    let headers = new Headers();
    // this.loadToken();
    // headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/courses', {headers: headers}).map(res => res.json());
    //return this.http.get('users/courses', {headers: headers}).map(res => res.json());
  }

  loadToken(){
     const token = localStorage.getItem('id_token');
     this.authToken = token;
  }

  loggedIn(){
    //need to read id_token due to some update
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken=null;
    this.user = null;
    localStorage.clear();
  }
}
