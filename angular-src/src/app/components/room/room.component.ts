import { Component, OnChanges, Input} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnChanges {
  //inputs from find components
  @Input() building: string = "";
  @Input() room : string = "";

  //data structure
  rooms = null;
  loaded : boolean = false;

  //other data do send in routes
  comment : string;
  email : JSON = JSON.parse(localStorage.getItem('user'))["email"]

  constructor(private authService:AuthService){}

  ngOnChanges(){
    // console.log("rooms changed\n\n\n\n\n");
    // console.log(this.building,this.room);
    this.authService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
      this.rooms = roomInfo;
    },
    err => {
      console.log(err)
    })
    //console.logthis.rooms
    if(this.rooms != null)
    {
      this.loaded = true
    }
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

  vote(item, pos, nVote)
  {
    console.log("building - " + this.building + " room - " + this.room
              + " email - " + this.email +  " item - " + item + " pos - " + pos
              + " vote - " + nVote);
    this.authService.addVote(this.building, this.room, this.email, item, pos, nVote).subscribe(data => {
      if(data.success){
        console.log("good vote")
      }
      else{
        console.log("no vote?")
      }
    });

    this.authService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
      this.rooms = roomInfo;
    },
    err => {
      console.log(err)
    });
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

    this.authService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
      this.rooms = roomInfo;
    },
    err => {
      console.log(err)
    });
  }
}
