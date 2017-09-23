import { Component, OnInit, Input } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})

export class FindComponent implements OnInit {
  // Needed to get the input from the 
  @Input() name : string;
  @Input() day : string;
  times = ["8:00 AM", "9:00 AM", 
          "10:00 AM", "11:00 AM", "12:00 PM", 
          "1:00 PM", "2:00 PM", "3:00 PM", 
          "4:00 PM", "5:00 PM", "6:00 PM", 
          "7:00 PM", "8:00 PM", "9:00 PM"];
  roomsList = [];
  buildingList = null;

  constructor(
    private buildingService : BuildingsService,
    private router : Router,
    private flashMessage : FlashMessagesService
  ) {}

  ngOnInit() {}

  // Show the table based on the day (BUILDING name should be provided)
  show(day : string) {
    // Only run once when same button is pressed multiple times
    if (this.day != day) 
    {
      // Query the database once
      if (this.buildingList == null)
      {
        this.buildingService.getBuildings(this.name).subscribe(buildingList => {
          this.roomsList = [];
          let roomsJSON = buildingList.OpenBuilding[0].rooms;
          for (var room in roomsJSON)
          {
            var arr = new Array(288);
            let timesJSON = roomsJSON[room][day];
            for (var time in timesJSON)
            {
              for (var i = timesJSON[time].st / 5 ; i < timesJSON[time].et / 5; i++)
              {
                arr[i] = 1;
              }
            }
            this.roomsList.push({ name : roomsJSON[room].name, room : arr});
          }
          document.getElementById("table").style.display = "block";
          this.day = day;
        },
        err => {
          console.log(err);
        });
      }
      // Query the cache most of the time
      else
      {
        this.roomsList = [];
        let roomsJSON = this.buildingList.OpenBuilding[0].rooms;
        for (var room in roomsJSON)
        {
          var arr = new Array(288);
          let timesJSON = roomsJSON[room][day];
          for (var time in timesJSON)
          {
            for (var i = timesJSON[time].st / 5; i < timesJSON[time].et / 5; i++)
            {
              arr[i] = 1;
            }
          }
          this.roomsList.push({ name : roomsJSON[room].name, room : arr});
        }
        document.getElementById("table").style.display = "block";
        this.day = day;
      }
    }
  }

  timeFormat(time)
  {
    var  minutes = time*5;//since we have minutes in 5 minute chunks
    minutes += 480;//offset of 8 AM need to add 8 hours
    time = minutes;//set original value of time
    var t;


    if(minutes>=780)    {
      minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
    }
    // // TODO: remove this for deployment as it's unneeded
    // else if(minutes < 60)    {
    //   minutes+=720;//adding 12 hours if its before 1 AM
    // }
    t = (minutes - minutes%60)/60 + ":";//calculating hours

    if(minutes%60<10)    {//formating minutes toFixed and to Prevision dont work
      t += "0" + time%60;
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

  getClass(value : any) : string {
    return 'opentime';
  }

  getCell(x) {
    console.log("Cell index is: " + x);
  }
}

class openRooms {
  name : string;
  openclass : [number];
}
