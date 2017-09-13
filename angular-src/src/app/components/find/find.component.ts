import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})

export class FindComponent implements OnInit {
  name : string;
  day : string;
  time : string;
  buildingList : Object;

  constructor(
    private buildingService:BuildingsService,
    private router:Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.buildingService.getBuildings(this.name, this.day).subscribe(buildingList => {
      // Where we do the data processing
      let openBuildingJSON = buildingList['OpenBuilding'];//list of buildings
      for (var build in openBuildingJSON)
      {
        console.log(openBuildingJSON[build].name);
        let openRoomJSON = openBuildingJSON[build]['rooms'];
        for (var room in openRoomJSON)//list of rooms in that given building
        {
          console.log(openBuildingJSON[build].name + "-" + openRoomJSON[room].name)//log name
          let openClassJSON = openRoomJSON[room]['class']; //list of classes in that building
          for (var oclass in openClassJSON)
          {
            //let timesJSON = openClassJSON[oclass];
            var st = openClassJSON[oclass].st;
            var et = openClassJSON[oclass].et
            var start = this.timeFormat(st);
            var end = this.timeFormat(et);
            console.log(start + " - " + end);

            // if (parseInt(timesJSON['st'], 10) >= parseInt(this.time, 10))
            // {
            //   console.log(timesJSON['st']);
            // }
          }
        }
      }

      this.buildingList = buildingList.OpenBuilding;
    },
    err => {
      console.log(err);
    });
  }

  timeFormat(time)
  {
    var t;
    var minutes = time;

    if(minutes>=780)    {
      minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
    }
    // TODO: remove this for deployment as it's unneeded
    else if(minutes < 60)    {
      minutes+=720;//adding 12 hours if its before 1 AM
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
