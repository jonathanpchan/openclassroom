import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentRoom: any;
  messages: any = [];
  connection : any = null;
  message : String  ;
  // BELOW IS TESTING ITEM
  names: string[] = ['jon', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick'];
  roomOption: any = null;
  // ABOVE IS TESTING ITEM

  constructor(private chatService : ChatService) { }

  ngOnInit() { }

  // Join room (Leave room before joining new room)
  joinRoom(room : any) {
    // Set new room
    this.currentRoom = room;
    this.chatService.joinRoom(this.currentRoom)

    // Clear the area and populate with some text (TODO: Query the database for previous messages)
    this.messages = [];
    this.messages.push({room: this.currentRoom, sender: "announcer", text: "You joined room #"+this.currentRoom})
    this.messages.push({room: this.currentRoom, sender: "sendee", text: "Hardcoded code is great. It allows us to move forward."})
    this.messages.push({room: this.currentRoom, sender: "sender", text: "This will be a test to make sure that it will change to a different line. After running it, it turns out that it will word wrap. Happy days!"});

    // Subscribe to the messages
    if (this.connection == null) {
      this.connection = this.chatService.getMessages().subscribe((message : String) => {
        this.messages.push(message);
      })
    }
  }

  // Send message (REQUIRES JOINROOM CALLED FIRST)
  sendMessage() {
    // Make sure there is a connection, there is a message, and the message is not just white space
    if (this.connection == null || this.message == null || this.message.trim().length == 0) {
      console.log("Error: Cannot send message")
    }
    else {
      // TEST CODE FOR SINGLE USER SENDING TO OTHER USER
      let sender = "sender";
      if (Math.random() > 0.5) { sender = "sendee" }
      // Send message to room with message
      this.chatService.sendMessage(this.currentRoom, sender, this.message);
    }
    // Clear message
    this.message='';
  }
}
