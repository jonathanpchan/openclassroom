import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // You
  user: String = JSON.parse(localStorage.getItem('user'));
  // You are the sender
  sender: String = this.user["name"];
  // You intially are talking to no one
  sendee: String = null;
  // The current room is where you and the sendee will talk
  currentRoom: any;
  // Holds the message logs
  messages: any = [];
  // What message is being sent when sending a message
  message: String = null;
  // Connection determines if you connected to the room
  connection: any = null;
  // Holds the listing of names of who you can talk to
  buddyList: any = [];
  // Flag for if you can show the back button (small screen: Show buddy list or message log)
  showBack: boolean = false;

  constructor(
    private chatService: ChatService, 
    private flashMessage: FlashMessagesService) { }

  ngOnInit() { 
    // Join room if you came from the study buddy page
    if (this.chatService.ID != null) {
      // If you clicked a study buddy, that info is put in chatService then received from chatservice to talk with that person
      let payload = {
        "user": this.chatService.ID["name"],
        "email": this.chatService.ID["email"]
      }
      this.joinRoom(payload);
      this.chatService.ID = null;
    }
    // Get the buddy list normally
    this.chatService.getBuddyList(this.user['email']).subscribe((list) => {
      for (let buddyIndex in list[0].buddyList) {
        this.buddyList.push(list[0].buddyList[buddyIndex]);
      }
    })
  }

  // Leave any pre-existing rooms, then join a room
  joinRoom(sendee) {
    this.sendee = sendee.user;
    this.showBack = true;
    // Create room and get a room # to join (Back End)
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
      // Listen for Messages (Front End)
      if (this.connection == null) {
        this.connection = this.chatService.getSubscription().subscribe((payload) => {
          this.messages.push(payload);
        })
      }
      this.message = '';
    })
  }

  // Only send a message if you've joined a room
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

  // Go back to the buddy list (small screen: Clears who you were talking)
  back() {
    this.sendee = null;
    this.showBack = false;
    this.messages = [];
    this.message = '';
  }
}
