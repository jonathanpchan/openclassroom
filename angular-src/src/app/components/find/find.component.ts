import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})

export class FindComponent implements OnInit {
  name : string;
  // day : string;
  roomsList = [];

  constructor(
    private buildingService:BuildingsService,
    private router:Router,
    private flashMessage : FlashMessagesService
  ) {}

  ngOnInit() {}
  show(day : string) {
    console.log(this.name);
    if(this.name == null){
      this.flashMessage.show('Please select the building', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.buildingService.getBuildings(this.name).subscribe(buildingList => {
      this.roomsList = [];
      let roomsJSON = buildingList.OpenBuilding[0].rooms;
      for (var room in roomsJSON)
      {
        var arr = new Array(168);
        let timesJSON = roomsJSON[room][day];
        for (var time in timesJSON)
        {
          for (var i = timesJSON[time].st / 5 - 96; i < timesJSON[time].et / 5 - 96; i++)
          {
            arr[i] = 1;
          }
        }
        this.roomsList.push({ name : roomsJSON[room].name, room : arr});
      }
      // document.getElementById("input").style.display = "none";
      document.getElementById("table").style.display = "block";
      // document.getElementById("back").style.display = "block";
    },
    err => {
      console.log(err);
    });
  }

  // timeFormat(time)
  // {
  //   var t;
  //   var minutes = time;

  //   if(minutes>=780)    {
  //     minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
  //   }
  //   // TODO: remove this for deployment as it's unneeded
  //   else if(minutes < 60)    {
  //     minutes+=720;//adding 12 hours if its before 1 AM
  //   }

  //   t = (minutes - minutes%60)/60 + ":";//calculating hours

  //   if(minutes%60==0)    {//formating minutes toFixed and to Prevision dont work
  //     t += "00";
  //   }else    {
  //     t += time%60;
  //   }

  //   if(time>720)    {//setting AM/PM based on the original time
  //     t+= " PM";
  //   }
  //   else    {
  //     t+= " AM";
  //   }

  //   return t;
  // }

  onBack() {
    document.getElementById("input").style.display = "block";
    document.getElementById("table").style.display = "none";
    document.getElementById("back").style.display = "none";
  }

  getClass(value : any) : string {
    return 'opentime';
  }
}

class openRooms {
  name : string;
  openclass : [number];
}
