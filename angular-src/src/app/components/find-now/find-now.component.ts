import { Component, OnInit } from '@angular/core';
// https://angular.io/api/common/DatePipe
import { DatePipe } from '@angular/common';
import {BuildingsService} from '../../services/buildings.service';

@Component({
  selector: 'app-find-now',
  templateUrl: './find-now.component.html',
  styleUrls: ['./find-now.component.css']
})
export class FindNowComponent implements OnInit {
  days = ["x", "omon", "otue", "owed", "othu", "x", "x"];
  buildingNow = [];

  constructor(private buildingService : BuildingsService) { }

  ngOnInit() {
    // let day = this.days[new Date().getUTCDay()];
    let day = this.days[1];
    // let hour = new Date().getUTCHours();
    let hour = 10*60;
    this.buildingService.getAll().subscribe(buildingList => {
      for (var build in buildingList.OpenBuilding)
      {
        let roomsJSON = buildingList.OpenBuilding[build].rooms;
        for (var room in roomsJSON)
        {
          let timesJSON = roomsJSON[room][day];
          for (var time in timesJSON)
          {
            //console.log(buildingList.OpenBuilding[build].name+" | "+roomsJSON[room].name+" | "+timesJSON[time].st+"-"+timesJSON[time].et);
            if (timesJSON[time].st <= hour && (timesJSON[time].et - hour) >= 30)
            {
              this.buildingNow.push({building : buildingList.OpenBuilding[build].name, name : roomsJSON[room].name})
            }
          }
        }
      }
    },
    err => {
      console.log(err);
    });
  }
}
