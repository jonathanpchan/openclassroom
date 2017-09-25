import { Component, OnInit, Input } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';

@Component({
  selector: 'app-find-now',
  templateUrl: './find-now.component.html',
  styleUrls: ['./find-now.component.css']
})
export class FindNowComponent implements OnInit {
  // Value passed from Find-Home Component
  @Input() name : string;

  // Days the buildingService will query using
  days = ["x", "omon", "otue", "owed", "othu", "x", "x"];
  day : string;

  // The list that will be displayed after population in the show function
  roomsList = [];

  // Notifies the HTML to display the error message when out of hours
  show : boolean;

  // Need to pass argument so it can be used in functions below
  constructor(private buildingService : BuildingsService) { }

  // Set the day once when navigating to the find classroom page
  ngOnInit() { 
    this.day = this.days[new Date().getDay()] 
  }

  /*
  * 1) Not "x" and between 8AM and 10 PM?
  * 2) Notify buildingService to get the buildings from MongoDB
  * 3) Push room name if st >= timesJSON[time].st && (st+45) <= timesJSON[time].et OR st < timesJSON[time].st && timesJSON[time] > (st+60)
  *
  *
  */
  showNow() {
    let st = new Date().getHours() * 60;
    // 1) Not "x" and between 8 AM and 10 PM?
    if (this.day != "x" && st >= 8*60 && st+45 <= 22*60)
    {
      // Clear roomsList for new list
      this.roomsList = [];
      // 2) Notify buildingService to get the buildings from MongoDB
      this.buildingService.getBuildings(this.name).subscribe(buildingList => {
        // roomsJSON = { name, mon, tue, wed, thu, omon, otue, owed, othu }
        let roomsJSON = buildingList.OpenBuilding[0].rooms;
        for (let room in roomsJSON)
        {
          // timesJSON = [{ name, sec, days, location, st, et }]
          let timesJSON = roomsJSON[room][this.day];
          for (let time in timesJSON)
          {
            // 3) Push room name if st >= timesJSON[time].st && (st+45) <= timesJSON[time].et OR st < timesJSON[time].st && timesJSON[time] > (st+60)
            if ((st >= timesJSON[time].st && (st+45) <= timesJSON[time].et) || (st < timesJSON[time].st && timesJSON[time] > (st+60)))
            {
              this.roomsList.push(roomsJSON[room].name);
            }
          }
        }
        this.show = true;
      },
      err => {
        console.log(err);
      });
    }
    else 
    {
      this.show = false;
    }
  }
}
