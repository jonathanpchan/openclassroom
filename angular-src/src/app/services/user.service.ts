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
  // Register a user given user information from payload
  registerUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(res => res.json());
    return this.http.post('users/register', user, { headers: headers }).map(res => res.json());
  }

  // Authenticate a user given user information from payload
  authenticateUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(res => res.json());
    return this.http.post('users/authenticate', user, { headers: headers }).map(res => res.json());
  }

  // Route to call settings/pw. Used to changed the user's password.
  changePW(email, oldpw, newpw) {
    let headers = new Headers({'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/settings/pw', {email, oldpw, newpw}, { headers: headers }).map(res => res.json());
    return this.http.post('users/settings/pw', {email, oldpw, newpw}, {headers: headers}).map(res => res.json());
  }

  //=========== Schedule =====================
  // Check to see if the user is finalized
  isFinalized(email): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/final', { email: email }, { headers: headers }).map(res => res.json());
    return this.http.post('users/final', { email: email }, { headers: headers }).map(res => res.json());
  }
  
  // Get the user's schedule
  getSchedule(email): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/schedule', email, { headers: headers }).map(res => res.json());
    return this.http.post('users/schedule', email, { headers: headers }).map(res => res.json());
  }

  // Add a schedule item to the user's schedule
  addScheduleItem(item) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/schedule/add', item, { headers: headers }).map(res => res.json());
    return this.http.post('users/schedule/add', item, { headers: headers }).map(res => res.json());
  }

  // Delete a schedule item from the user's schedule
  deleteScheduleItem(item) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/schedule/delete', item, { headers: headers }).map(res => res.json());
    return this.http.post('users/schedule/delete', item, { headers: headers }).map(res => res.json());
  }

  //=========== Courses ======================
  // Get a list of all the course names
  getCourseNames() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.get('http://localhost:3000/users/courses/names', { headers: headers }).map(res => res.json());
    return this.http.get('users/courses/names', { headers: headers }).map(res => res.json());
  }

  // Get all course information
  getCourses(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.get('http://localhost:3000/users/courses', { headers: headers }).map(res => res.json());
    return this.http.get('users/courses', { headers: headers }).map(res => res.json());
  }

  //=========== User Token ===================
  // Store user data into local storage
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Load JSON web token
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Check to see if the token is not expired
  loggedIn() {
    // need to read id_token due to some update
    return tokenNotExpired('id_token');
  }

  // Logout clears local storage and user information
  logout() {
    this.authToken=null;
    this.user = null;
    localStorage.clear();
  }
}
