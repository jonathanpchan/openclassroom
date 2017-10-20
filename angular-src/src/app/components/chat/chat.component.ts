import { Component, OnInit, OnDestroy } from '@angular/core';
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
  message : String;

  // BELOW IS TESTING ITEM
  roomOption: any;
  roomChange(roomLeave, roomJoin) {
    if (roomLeave != null) {
      this.messages.push({text: "You left room #"+roomLeave})
    }
    if (roomJoin != null) {
      this.messages.push({text: "You joined room #"+roomJoin})
    }
  }
  // ABOVE IS TESTING ITEM

  constructor(private chatService : ChatService) { }

  ngOnInit() {}

  // 1) Step 1 is to connect to a room
  initRoom(room : any) {
    // BELOW IS TESTING ITEM
    this.roomChange(this.currentRoom, room)
    // ABOVE IS TESTING ITEM

    // If connected to a room
    if (this.connection != null) 
    {
      console.log('Left Room #'+this.currentRoom);
      this.connection.unsubscribe();
    }
    // Set new room
    this.currentRoom = room;
    console.log("Joined Room #"+this.currentRoom);
    // Join new room
    this.chatService.joinRoom(room);

    // TODO: Logic for clearing the area and querying the database for previous messages
    
    // Subscribe to messages of room
    this.connection = this.chatService.getMessages().subscribe((message : String) => {
      this.messages.push(message);
    })
  }

  // Sending messages REQUIRES INITROOM CALLED FIRST
  sendMessage(room : any) {
    if (this.connection == null) {
      console.log("Error: Need to choose a room before messaging")
    }
    else {
      // Send message to room with message
      this.chatService.sendMessage(room, this.message);
      // Clear message
      this.message='';
    }
  }

  // This happens when you close the window
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
