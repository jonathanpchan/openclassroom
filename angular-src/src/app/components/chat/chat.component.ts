import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: String = JSON.parse(localStorage.getItem('user'));
  sender: String = this.user["name"];
  sendee: String = null;
  currentRoom: any;
  messages: any = [];
  message: String = null;
  connection: any = null;
  buddyList: any = [];
  showBack: boolean = false;

  constructor(
    private chatService: ChatService, 
    private flashMessage: FlashMessagesService) { }

  ngOnInit() { 
    // Open the chatroom with 
    if (this.chatService.ID != null) {
      let payload = {
        "user": this.chatService.ID["name"],
        "email": this.chatService.ID["email"]
      }
      this.joinRoom(payload);
      this.chatService.ID = null;
    }
    // Get the buddyList (normally)
    this.chatService.getBuddyList(this.user['email']).subscribe((list) => {
      for (let buddyIndex in list[0].buddyList) {
        this.buddyList.push(list[0].buddyList[buddyIndex]);
      }
    })
  }

  // Join room (Leave room before joining new room)
  joinRoom(sendee) {
    // Back join room
    this.sendee = sendee.user;
    this.showBack = true;
    // Create room or get room # to join (Back End)
    this.chatService.createRoom(this.user["email"], sendee.email).subscribe((out) => {
      // Eliminate issue of room # too long
      this.currentRoom = out[0]._id.substring(0, 24);
      // Join Room (Back End)
      this.chatService.joinRoom(this.currentRoom);
      // Get Old Messages (Back End)
      this.chatService.getMessages(this.currentRoom).subscribe((messages) => {
        this.messages = []
        for (let message in messages[0].messages) {
          this.messages.push(messages[0].messages[message])
        }
      })
      if (this.connection == null) {
        // Listen for Messages (Front End)
        this.connection = this.chatService.getSubscription().subscribe((payload) => {
          this.messages.push(payload);
        })
      }
      this.message = '';
    })
  }

  // Send message (REQUIRES JOINROOM CALLED FIRST)
  sendMessage() {
    // Make sure there is a connection, there is a message, and the message is not just white space
    if (this.connection == null || this.sendee == null || this.message == null || this.message.trim().length == 0) {
      this.flashMessage.show('Cannot send message. Did you join a room?', { cssClass: 'alert-danger', timeout: 3000 })
    }
    else {
      // Send message (Front End & Back End)
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
