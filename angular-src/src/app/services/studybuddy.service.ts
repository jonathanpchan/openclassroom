import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class StudyBuddyService {

  constructor(private http: Http) { }

  // Get Study Buddies based on classes
  getStudyBuddies() {
    let headers = new Headers({ 'Content-Type' : 'application/json' });
    return this.http.post('http://localhost:3000/studybuddies/get', {email: JSON.parse(localStorage.getItem('user'))["email"]},{headers: headers}).map(res => res.json());
  }
}
