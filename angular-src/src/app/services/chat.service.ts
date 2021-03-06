import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  // How the user is communicating with the server
  private socket: any;
  // ID of the user that's going to be chatting with you
  public ID: string = null;

  constructor(private http: Http) { }

  // Create the room based on user pair
  createRoom(sender: String, sendee: String) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let payload = {
      user_1: sender,
      user_2: sendee
    }
    // return this.http.post('http://localhost:3000/messages/create', payload, { headers: headers }).map(res => res.json());
    return this.http.post('messages/create', payload, { headers: headers }).map(res => res.json());
  }

  // Tell the server to connect to server and join a room
  joinRoom(ID: String) {
    // Connect once while on that page
    if (this.socket == null) {
      // this.socket = io.connect("http://localhost:3000/");
      this.socket = io.connect("https://openclassroom.herokuapp.com/");
    }
    this.socket.emit('join room', ID);
  }

  // Tell the server to send a message to those in the room
  sendMessage(ID: String, sender: String, message: String) {
    this.socket.emit('add message', ID, sender, message);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let payload = {
      sender: sender,
      msg: message,
      ID: ID
    }
    // return this.http.post('http://localhost:3000/messages/send', payload, { headers: headers }).map(res => res.json());
    return this.http.post('messages/send', payload, { headers: headers }).map(res => res.json());
  }

  getBuddyList(email: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/users/buddylist', { email: email }, { headers: headers }).map(res => res.json());
    return this.http.post('users/buddylist', { email: email }, { headers: headers }).map(res => res.json());
  }

  addBuddyListItem(email1: String, email2: String, user: String) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let payload = {
      email1: email1,
      email2: email2,
      user: user
    }
    // return this.http.post('http://localhost:3000/users/buddylist/add', payload, { headers: headers }).map(res => res.json());
    return this.http.post('users/buddylist/add', payload, { headers: headers }).map(res => res.json());
  }

  // Create an observable that will read off the next message when the user gets a message
  getSubscription(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      })
    })
    return observable;
  }

  getMessages(ID: String) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('http://localhost:3000/messages/get', { ID: ID }, { headers: headers }).map(res => res.json());
    return this.http.post('messages/get', { ID: ID }, { headers: headers }).map(res => res.json());
  }
}
