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
  * Gets the rooms that are open and display when they are open
  * 1) Not "x" and between 8AM and 10 PM?
  * 2) Notify buildingService to get the buildings from MongoDB
  * 3) Push room name if st >= timesJSON[time].st && (st+45) <= timesJSON[time].et OR st < timesJSON[time].st && timesJSON[time] > (st+60)
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
            if (st >= timesJSON[time].st && (st+45) <= timesJSON[time].et)
            {
              this.roomsList.push({ name : roomsJSON[room].name, st: this.timeFormat(timesJSON[time].st), et: this.timeFormat(timesJSON[time].et) });
            }
            else
            {
              // TODO: Eventually be open soon (30 minutes after the hour)
              if (st < timesJSON[time].st && timesJSON[time] > (st+60))
              {
                this.roomsList.push({ name : roomsJSON[room].name, st: this.timeFormat(timesJSON[time].st), et: this.timeFormat(timesJSON[time].et) });
              }
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

  // Adjust time in minutes to stringified time (No 12:00 AM)
  timeFormat(time : number) : string
  {
    if (time/60 > 12)
    {
      if (time%60 > 10)
      {
        return (time/60-12)+":"+(time%60)+" PM";
      }
      else
      {
        return (time/60-12)+":0"+(time%60)+" PM";
      }
    }
    else
    {
      if (time%60 > 10)
      {
        return (time/60)+":"+(time%60)+" AM";
      }
      else
      {
        return (time/60)+":0"+(time%60)+" AM";
      } 
    }
  }

  //   let  minutes = time*5;//since we have minutes in 5 minute chunks
  //   minutes += 480;//offset of 8 AM need to add 8 hours
  //   time = minutes;//set original value of time
  //   var t;


  //   if(minutes>=780)    {
  //     minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
  //   }
  //   // // TODO: remove this for deployment as it's unneeded
  //   // else if(minutes < 60)    {
  //   //   minutes+=720;//adding 12 hours if its before 1 AM
  //   // }
  //   t = (minutes - minutes%60)/60 + ":";//calculating hours

  //   if(minutes%60<10)    {//formating minutes toFixed and to Prevision dont work
  //     t += "0" + time%60;
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
 }
