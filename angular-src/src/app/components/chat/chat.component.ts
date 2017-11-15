import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  sender: String = JSON.parse(localStorage.getItem('user'))["name"];
  sendee: String = null;
  currentRoom: any;
  messages: any = [];
  message: String = null;
  connection: any = null;
  // BELOW IS TESTING ITEM
  // names must be initialized to an empty string
  names: string[] = ['jon', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick'];
  showBack: boolean = false;
  // ABOVE IS TESTING ITEM

  constructor(private chatService: ChatService, private flashMessage: FlashMessagesService) {}

  ngOnInit() { }

  // Join room (Leave room before joining new room)
  joinRoom(sendee: string) {
    // Back join room
    this.sendee = sendee;
    this.showBack = true;
    this.chatService.createRoom(this.sender, sendee).subscribe((room) => {
      this.currentRoom = room[0]._id

      // Front join room
      this.chatService.joinRoom(this.currentRoom)
      
      // Back get messages
      this.chatService.getMessages(this.currentRoom).subscribe((messages) => {
        // Set new room
        this.messages = []
        // Populate messages
        for (let message in messages[0].messages) {
          this.messages.push(messages[0].messages[message])
        }
      })
      // Subscribe to real time messages
      // Front get messages
      if (this.connection == null) {
        this.connection = this.chatService.getSubscription().subscribe((payload) => {
          this.messages.push(payload);
        })
      }
      this.message = '';
    })
  }

  // Send message (REQUIRES JOINROOM CALLED FIRST)
  sendMessage() {
    console.log(this.showBack);
    // Make sure there is a connection, there is a message, and the message is not just white space
    if (this.connection == null || this.sendee == null || this.message == null || this.message.trim().length == 0) {
      this.flashMessage.show('Cannot send message. Did you join a room?', {cssClass: 'alert-danger', timeout: 3000})
    }
    else {
      // Send message to room with message
      this.chatService.sendMessage(this.currentRoom, this.sender, this.message).subscribe();
    }
    // Clear message
    this.message='';
  }

  back() {
    this.sendee = null;
    this.showBack = false;
    this.messages = [];
  }
}
