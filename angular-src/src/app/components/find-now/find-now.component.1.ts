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
  days = ["x", "omon", "otue", "owed", "othu", "fri", "x"];
  buildingNow = [];

  constructor(private buildingService : BuildingsService) { }

  ngOnInit() { 

  }
  
  show(name : string) {
    let day = this.days[new Date().getUTCDay()-1];
    day = "otue";
    this.buildingService.getBuildings(name).subscribe(buildingList => {
      this.buildingNow = [];
      let roomsJSON = buildingList.OpenBuilding[0].rooms;
      let start = new Date().getUTCHours();
      let end = start + 1;
      start = 8 * 12;
      end = (start+1) * 12;
      for (var room in roomsJSON)
      {
        let timesJSON = roomsJSON[room][day];
        for (var time in timesJSON)
        {
          if (timesJSON[time].st <= start && (timesJSON[time].et-end) >= 0)
          {
            console.log(start+" "+end+" "+day);
            this.buildingNow.push(buildingList.OpenBuilding[0].name+" "+roomsJSON[room].name);
          }
        }
      }
      document.getElementById("table").style.display = "block";
    },
    err => {
      console.log(err);
    });
  }
}
