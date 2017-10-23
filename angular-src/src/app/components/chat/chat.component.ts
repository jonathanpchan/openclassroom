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
  message : String;
  names: string[] = ['jon', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick'];
  showChat: boolean = false;
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

  // Join room (Leave room before joining new room)
  joinRoom(room : any) {
    // BELOW IS TESTING ITEM
    this.roomChange(this.currentRoom, room)
    // ABOVE IS TESTING ITEM
    
    // Set new room
    this.currentRoom = room;
    this.chatService.joinRoom(this.currentRoom)

    // TODO: Logic for clearing the area and querying the database for previous messages

    // Subscribe to the messages
    if (this.connection == null) {
      this.connection = this.chatService.getMessages().subscribe((message : String) => {
        this.messages.push(message);
      })
    }
  }

  // Send message (REQUIRES JOINROOM CALLED FIRST)
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

  displayMsg(person : string){
    this.showChat = true;
    console.log(person);
  }
}
