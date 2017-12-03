import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class StudyBuddyService {
  constructor(private http: Http) { }

  joinStudyBuddies(email) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/studybuddies/add', { email: email },{ headers: headers }).map(res => res.json());
    // return this.http.post('studybuddies/add', { email: email },{ headers: headers }).map(res => res.json());
  }
  unfinalize(email) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/studybuddies/remove', {email : email}, { headers: headers }).map(res => res.json());
    // return this.http.post('studybuddies/remove', email, { headers: headers }).map(res => res.json());
  }

  // Get Study Buddies based on classes
  getStudyBuddies(email): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/studybuddies/get', email, { headers: headers }).map(res => res.json());
    // return this.http.post('studyBuddies/get', email, { headers: headers }).map(res => res.json());
  }
}
