import { Component, OnInit, Input } from '@angular/core';
// https://angular.io/api/common/DatePipe
import { DatePipe } from '@angular/common';
import {BuildingsService} from '../../services/buildings.service';

@Component({
  selector: 'app-find-now',
  templateUrl: './find-now.component.html',
  styleUrls: ['./find-now.component.css']
})
export class FindNowComponent implements OnInit {
  @Input() name : string;
  days = ["x", "omon", "otue", "owed", "othu", "x", "x"];
  day : string;
  roomsList = [];

  constructor(private buildingService : BuildingsService) { }

  ngOnInit() 
  {
    // let day = this.days[new Date().getUTCDay()];
    this.day = this.days[new Date().getUTCDay()]
    this.day = "x";
    // let hour = new Date().getUTCHours();
    let start = new Date().getUTCHours();
    start = 8;
    let end = start + 1;
    if (this.day == "x" || start < 8 || end > 22)
    {
      this.roomsList = [];
      this.roomsList.push("No Currently Available Classrooms");
    }
    else 
    {
      this.buildingService.getBuildings(this.name).subscribe(buildingList => {
        this.roomsList = [];
        let roomsJSON = buildingList.OpenBuilding[0].rooms;
        for (var room in roomsJSON)
        {
          let timesJSON = roomsJSON[room][this.day];
          for (var time in timesJSON)
          {
            if (timesJSON[time].st <= start && (timesJSON[time].et - (end + 1) >= 30))
            {
              this.roomsList.push({building : buildingList.OpenBuilding[room].name, name : roomsJSON[room].name})
            }
          }
        }
        document.getElementById("now-data").style.display = "block";
        return true;
      },
      err => {
        console.log(err);
      });
    }
    console.log(this.day);
  }
}
