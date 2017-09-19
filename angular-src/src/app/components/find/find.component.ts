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
  roomsList = [];

  constructor(
    private buildingService:BuildingsService,
    private router:Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.buildingService.getBuildings(this.name).subscribe(buildingList => {
      this.roomsList = [];
      let roomsJSON = buildingList.OpenBuilding.rooms;
      for (var build in roomsJSON)
      {
        console.log(roomsJSON[build].name);
      }
      console.log("Submit");
      // for (var build in openBuildingJSON)
      // {
      //   let openRoomJSON = openBuildingJSON[build]['rooms'];

      //   for (var room in openRoomJSON) //list of rooms in that given building
      //   {
      //     var arr = new Array(24*12);
      //     let openClassJSON = openRoomJSON[room]['class']; //list of classes in that building
      //     for (var oclass in openClassJSON)
      //     {
      //       let timesJSON = openClassJSON[oclass];
      //       var st = timesJSON.st;
      //       var et = timesJSON.et;

      //       // Needs to be reviewed. This is static but should be dynamic.
      //       for (var i = 0; i < 24*12; i++)
      //       {
      //         if (timesJSON.st == i*5)
      //         {
      //           if (timesJSON.et == (i+1)*5)
      //           {
      //             arr[i] = arr[i] | 1;
      //           }
      //           else if (timesJSON.et < (i+1)*5)
      //           {
      //             arr[i] = arr[i] | 1;
      //           }
      //           else
      //           {
      //             arr[i] = arr[i] | 1;
      //           }
      //         }
      //         else if (timesJSON.st < i*5)
      //         {
      //           if (timesJSON.et == (i+1)*5)
      //           {
      //             arr[i] = arr[i] | 1;
      //           }
      //           else if (timesJSON.et < (i+1)*5)
      //           {
      //             if (timesJSON.et >= i*5)
      //             {
      //               //arr[i] = ((i+1)*60 - timesJSON.et)/60;
      //               arr[i] = arr[i] | 1;
      //             }
      //             else
      //             {
      //               arr[i] = arr[i] | 0;
      //             }
      //           }
      //           else 
      //           {
      //             arr[i] = arr[i] | 1;
      //           }
      //         }
      //         else
      //         {
      //           arr[i] = arr[i] | 0;
      //         }
      //       }
      //     }
      //     //console.log(openRoomJSON[room].name+" "+arr);
      //     this.roomsList.push({ name : openRoomJSON[room].name, room : arr});
      //   }
      // }
      // document.getElementById("input").style.display = "none";
      // document.getElementById("table").style.display = "block";
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