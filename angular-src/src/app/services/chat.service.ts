import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  // How the user is communicating with the server
  private socket : any;

  constructor() { }

  // Tell the server to connect to server and join a room
  joinRoom(room : any) {
    // Connect once while on that page
    if (this.socket == null) {
      this.socket = io.connect("http://localhost:4020/");
    }
    this.socket.emit('join room', room);
  }

  // Tell the server to send a message to those in the room
  sendMessage(room : any, sender: String, message : String) {
    this.socket.emit('add message', room, sender, message);
  }

  // Create an observable that will read off the next message when the user gets a message
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      })
    })
    return observable;
  }
}
