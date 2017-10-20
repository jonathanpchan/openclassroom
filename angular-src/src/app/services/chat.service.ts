import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  // How the user is communicating with the server
  private socket : any = null;

  // TODO: This may need changing when deploying to master
  constructor() {}

  // Tell the server to join the room
  joinRoom(room : any) {
    if (this.socket == null) {
      this.socket = io.connect("http://localhost:4020/");
    }
    this.socket.emit('join', room);
  }

  // Tell the server to leave the room
  leaveRoom(room : any) {
    this.socket.emit('leave', room);
  }

  // Tell the server to send a message to those in the room
  sendMessage(room : any, message : String) {
    console.log(room+" "+message)
    this.socket.emit('add message', room, message);
  }

  // Create an observable that will read off the next message when the user gets a message
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }
}
