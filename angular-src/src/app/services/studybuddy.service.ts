import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class StudyBuddyService {
  constructor(private http: Http) { }

  // Service to call /add route. Adds a user to study buddy feature
  joinStudyBuddies(email) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/studybuddies/add', { email: email },{ headers: headers }).map(res => res.json());
    return this.http.post('studybuddies/add', { email: email },{ headers: headers }).map(res => res.json());
  }

  // Service to call /remove route. Removes a user from study buddy feature
  unfinalize(email) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/studybuddies/remove', {email : email}, { headers: headers }).map(res => res.json());
    return this.http.post('studybuddies/remove', { email : email }, { headers: headers }).map(res => res.json());
  }

  // Service to call /get route. Get Study Buddies based on classes
  getStudyBuddies(email): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/studybuddies/get', email, { headers: headers }).map(res => res.json());
    return this.http.post('studybuddies/get', email, { headers: headers }).map(res => res.json());
  }
}
