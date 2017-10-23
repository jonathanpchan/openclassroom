import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  comment : string;
  rooms = null;
  building: string;
  room : string;
  email : JSON = JSON.parse(localStorage.getItem('user'))["email"]
  constructor(private authService:AuthService){}

  ngOnInit() {
    // this.rooms = JSON.parse('{"res":[{"building":"VEC","room":"103","whiteboard":{"uVote":33,"dVote":12,"UserVote":0},"hasOutlets":{"uVote":3,"dVote":1,"UserVote":-1},"comments":[{"username":"Bob","uVote":5,"dVote":0,"UserVote":1,"content":"Good Room","date":"2017-11-05 9:30 AM"},{"username":"Greg","uVote":0,"dVote":15,"UserVote":0,"content":"No Whiteboard","date":"2017-12-05 10:25 AM"}],"mon":[{"st":915,"et":950,"uVote":1,"dVote":5},{"st":1100,"et":1150,"uVote":10,"dVote":5}],"tue":[{"st":600,"et":650,"uVote":3,"dVote":5},{"st":900,"et":950,"uVote":1,"dVote":2}],"wed":[{"st":915,"et":950,"uVote":2,"dVote":5},{"st":1100,"et":1150,"uVote":9,"dVote":5}],"thu":[{"st":600,"et":650,"uVote":11,"dVote":5},{"st":900,"et":950,"uVote":8,"dVote":5}]}]}');
    // this.rooms=this.rooms.res[0];

    this.building = "AS";
    this.room = "233";

    console.log(this.building,this.room);
    //console.log(this.rooms);

    this.authService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
      this.rooms = roomInfo;
      console.log(this.rooms);
    },
    err => {
      console.log(err)
    })
  }

  timeFormat(time)
  {
    var t;
    var minutes = time;

    if(minutes>=780)    {
      minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
    }
    t = (minutes - minutes%60)/60 + ":";//calculating hours

    if(minutes%60==0)    {//formating minutes toFixed and to Prevision dont work
      t += "00";
    }else    {
      t += time%60;
    }

    if(time>720)    {//setting AM/PM based on the original time
      t+= " PM";
    }
    else    {
      t+= " AM";
    }

    return t;
  }


  //TODO: add routes and information
  //We Dont have a good way to get the day, so we need to separate these
  //feature route will require email, building-room, vote, item)// feautres
  //time route will require email, building-room, vote, (day, array index)// feautres
  //comment route will require email, building-room, vote, (comment, array index)// feautres
  //comment post route will require email, building-room, comment// feautres


  nestedVote(item, pos, nVote)
  {
    console.log("building - " + this.building + " room - " + this.room
              + " email - " + this.email +  " item - " + item + " pos - " + pos
              + " vote - " + nVote);
    this.authService.addNestedVote(this.building, this.room, this.email, item, pos, nVote).subscribe(data => {
      if(data.success){
        console.log("good vote")
      }
      else{
        console.log("no vote?")
      }
    });
  }

  vote(item, nVote)
  {
    console.log("building - " + this.building + " room - " + this.room
              + " email - " + this.email +  " item - " + item + " vote - " + nVote);
    //this.authService.addNestedVote(this.building, this.room, this.email, item, nVote);
  }

  onCommentSubmit()
  {
    console.log("building - " + this.building + " room - " + this.room + " email - " + this.email +
              " comment - " + this.comment);
    this.authService.addComment(this.building, this.room, this.email, this.comment).subscribe(data => {
      if(data.success){
        console.log("good")
      }
      else{
        console.log("no comment?")
      }
    })
  }




}
