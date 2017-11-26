import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  authToken: any;
  user: any;
  constructor(private http: Http) { }

  //=========== User Registration ============
  registerUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(res => res.json());
    // return this.http.post('users/register', user, { headers: headers }).map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(res => res.json());
    // return this.http.post('users/authenticate', user, { headers: headers }).map(res => res.json());
  }

  //=========== Schedule =====================
  isFinalized(email): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users/final', { email: email }, { headers: headers }).map(res => res.json());
    // return this.http.post('users/final', { email: email }, { headers: headers }).map(res => res.json());
  }
  
  getSchedule(email): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users/schedule', email, { headers: headers }).map(res => res.json());
    // return this.http.post('users/schedule', email, { headers: headers }).map(res => res.json());
  }

  addScheduleItem(item) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users/schedule/add', item, { headers: headers }).map(res => res.json());
    // return this.http.post('users/schedule/add', item, { headers: headers }).map(res => res.json());
  }

  deleteScheduleItem(item) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users/schedule/delete', item, { headers: headers }).map(res => res.json());
    // return this.http.post('users/schedule/delete', item, { headers: headers }).map(res => res.json());
  }

  //=========== Courses ======================
  getCourseNames() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get('http://localhost:3000/users/courses/names', { headers: headers }).map(res => res.json());
    // return this.http.get('users/courses/names', { headers: headers }).map(res => res.json());
  }

  getCourses(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get('http://localhost:3000/users/courses', { headers: headers }).map(res => res.json());
    // return this.http.get('users/courses', { headers: headers }).map(res => res.json());
  }

  //=========== User Token ===================
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    // need to read id_token due to some update
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken=null;
    this.user = null;
    localStorage.clear();
  }
}
