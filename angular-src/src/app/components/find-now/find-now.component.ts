import { Component, OnInit, Input } from '@angular/core';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-find-now',
  templateUrl: './find-now.component.html',
  styleUrls: ['./find-now.component.css']
})
export class FindNowComponent implements OnInit {
  // Value passed from Find-Home Component
  @Input() name: string;

  // Days the buildingService will query using
  days = ["x", "omon", "otue", "owed", "othu", "x", "x"];
  day: string;

  // The list that will be displayed after population in the show function
  roomsList = [];

  // Notifies the HTML to display the error message when out of hours
  show: boolean = false;

  //Arguments to pass to roomInfo
  buildingName: String = "";
  roomNumber: String = "";

  // Need to pass argument so it can be used in functions below
  constructor(private buildingService: BuildingsService) { }

  // Set the day once when navigating to the find classroom page
  ngOnInit() {
    this.day = this.days[new Date().getDay()]
  }

  /*
  * Gets the rooms that are open and display when they are open
  * 1) Not "x" and between 8AM and 10 PM?
  * 2) Notify buildingService to get the buildings from MongoDB
  * 3) Push room name if st >= timesJSON[time].st && (st+30) <= timesJSON[time].et
  */
  showNow() {
    document.getElementById("nowTimes").style.display = "block";

    let st = new Date().getHours() * 60;
    // 1) Not "x" and between 8 AM and 10 PM?
    if (this.day != "x" && st >= 8*60 && st < 22*60)
    {
      // Clear roomsList for new list
      this.roomsList = [];
      // 2) Notify buildingService to get the buildings from MongoDB
      this.buildingService.getBuilding(this.name).subscribe(buildingList => {
        // roomsJSON = { name, mon, tue, wed, thu, omon, otue, owed, othu }
        let roomsJSON = buildingList.OpenBuilding[0].rooms;
        for (let room in roomsJSON)
        {
          // timesJSON = [{ name, sec, days, location, st, et }]
          let timesJSON = roomsJSON[room][this.day];
          for (let time in timesJSON)
          {
            // 3) Push room name if st >= timesJSON[time].st && (st+30) <= timesJSON[time].et
            if (st >= timesJSON[time].st && (st+30) <= timesJSON[time].et)
            {
              this.roomsList.push({ name: roomsJSON[room].name, st: this.timeFormat(timesJSON[time].st), et: this.timeFormat(timesJSON[time].et) });
            }
          }
        }
        if (this.roomsList.length > 0) {
          this.show = true;
        }
        else
        {
          this.show = false;
        }
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

  // Adjust time in minutes to stringified time (No 12:00 AM)
  timeFormat(time: number): string
  {
    // 12 AM
    if (Math.trunc(time/60) == 0)
    {
      if (time%60 < 10)
      {
        return "12:0"+(time%60)+" AM";
      }
      else
      {
        return "12:"+(time%60)+" AM";
      }
    }
    // 12 PM
    else if (Math.trunc(time/60) == 12)
    {
      if (time%60 < 10)
      {
        return "12:0"+(time%60)+" PM";
      }
      else
      {
        return "12:"+(time%60)+" PM";
      }
    }
    // 1 PM to 12 AM (exclusive)
    if (time/60 > 12)
    {
      if (time%60 < 10)
      {
        return (Math.trunc(time/60)-12)+":0"+(time%60)+" PM";
      }
      else
      {
        return (Math.trunc(time/60)-12)+":"+(time%60)+" PM";
      }
    }
    // 1 AM to 12 PM (exclusive)
    else
    {
      if (time%60 < 10)
      {
        return Math.trunc(time/60)+":0"+(time%60)+" AM";
      }
      else
      {
        return Math.trunc(time/60)+":"+(time%60)+" AM";
      }
    }
  }

  showRoom(room, number)
  {
    this.buildingName = room;
    this.roomNumber = number;
    document.getElementById("nowTimes").style.display = "none";
    document.getElementById("room2").style.display = "block";
  }

 }
