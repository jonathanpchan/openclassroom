import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms = null;

  constructor() { }

  ngOnInit() {

    this.rooms = JSON.parse('{"res":[{"building":"VEC","room":"103","whiteboard":{"uVote":33,"dVote":12,"UserVote":0},"hasOutlets":{"uVote":3,"dVote":1,"UserVote":-1},"comments":[{"username":"Bob","uVote":5,"dVote":0,"UserVote":1,"content":"Good Room","date":"2017-11-05 9:30 AM"},{"username":"Greg","uVote":0,"dVote":15,"UserVote":0,"content":"No Whiteboard","date":"2017-12-05 10:25 AM"}],"mon":[{"st":915,"et":950,"uVote":1,"dVote":5},{"st":1100,"et":1150,"uVote":10,"dVote":5}],"tue":[{"st":600,"et":650,"uVote":3,"dVote":5},{"st":900,"et":950,"uVote":1,"dVote":2}],"wed":[{"st":915,"et":950,"uVote":2,"dVote":5},{"st":1100,"et":1150,"uVote":9,"dVote":5}],"thu":[{"st":600,"et":650,"uVote":11,"dVote":5},{"st":900,"et":950,"uVote":8,"dVote":5}]}]}');
    this.rooms=this.rooms.res[0];

    console.log(this.rooms);

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


}
