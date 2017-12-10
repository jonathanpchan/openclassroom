import { Component, OnChanges, Input } from '@angular/core';
import { RoomInfoService } from '../../services/roominfo.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnChanges {
  // Inputs from find components
  @Input() building: string = "";
  @Input() room: string = "";

  // Data structure
  rooms = null;
  loaded: boolean = false;
  empMon: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;

  //other data do send in routes
  comment: string;
  email: JSON = JSON.parse(localStorage.getItem('user'))["email"]

  constructor(
    private roomInfoService: RoomInfoService,
    private flashMessage: FlashMessagesService) { }

  //we use ngOnChanges() to dynamically get the room information from the find-classroom components
  //otherwise there would be issues loading each room from the other component
  ngOnChanges() {
    this.roomInfoService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
      if (roomInfo != null)
      {
        this.rooms = roomInfo;
        this.loaded = true;
      }
    },
    err => {
      console.log(err)
    })

  }

  //format time as time is provide in minutes otherwise
  timeFormat(time)
  {
    var t;
    var minutes = time;

    if (minutes>=780)    {
      minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
    }
    t = (minutes - minutes%60)/60 + ":";//calculating hours

    if (minutes%60==0)    {//formating minutes toFixed and to Prevision dont work
      t += "00";
    }
    else {
      t += time%60;
    }

    if (time>720)    {//setting AM/PM based on the original time
      t+= " PM";
    }
    else {
      t+= " AM";
    }
    return t;
  }

  //used to handle votes performed on the front end.
  vote(item, pos, nVote)
  {
    this.roomInfoService.addVote(this.building, this.room, this.email, item, pos, nVote).subscribe(data => {
      if (data.success) {
        //TODO update room info here instead since there is no actual success message from the route
      }
      else {
        //we call update this.rooms so we have the newest data from the databse after a vote goes through
        //other wise you will need to refresh the page to see any changes.
        this.roomInfoService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
          this.rooms = roomInfo;
        },
        err => {
          console.log(err)
        });
      }
    });


  }

  //used to submit a comment to the database when one is sent from the front end.
  onCommentSubmit()
  {
    //if the comment box is empty do not allow them to submit anything and show an error flash message.
    if (this.comment == "") {
      this.flashMessage.show('Please enter a comment before submitting', {cssClass: 'alert-danger', timeout: 3000});
    }
    else {
      this.roomInfoService.addComment(this.building, this.room, this.email, this.comment).subscribe(data => {
        if (data.success) {
          //TODO update room info here instead same issue as above
        }
        else {
          //we call update this.rooms so we have the newest data from the databse after a user comments on the room.
          //other wise you will need to refresh the page to see any changes.
          this.roomInfoService.getRoomInfo(this.building, this.room).subscribe(roomInfo => {
            this.rooms = roomInfo;
          },
          err => {
            console.log(err)
          });
        }
      })
    }
    //this is linked to the text field so we reset it here
    this.comment = '';
  }
}
