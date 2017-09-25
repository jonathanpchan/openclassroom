import { Component, OnInit, Input } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-find-times',
  templateUrl: './find-times.component.html',
  styleUrls: ['./find-times.component.css']
})
export class FindTimesComponent implements OnInit {
  // Value passed from Find-Home Component
  @Input() name : string;
  @Input() day : string;
  
  // Times displayed on the front end but currently only does 8 (inclusive) to 10 (exclusive). This can be filtered down.
  times = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", 
            "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", 
            "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", 
            "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
            "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
            "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",  
            "6:00 PM","6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", 
            "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
  // Start and end values of the slider for AM/PM display
  tstart : number = 16;
  tend : number = 44;
  // Start and end values for array display (in minutes) 
  start : number = 8*12;
  end : number = 22*12;
  
  // Configure the slider (as reference: http://tb.github.io/ng2-nouislider/)
  timeRange : number[];
  timeSliderConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [8, 22],
    keyboard: true,  // same as [keyboard]="true"
    step: 0.5,
    pageSteps: 2,
    margin: 0.5,
    range: {
      min : 8, 
      max : 22
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };

  // The list of all values from the building chosen ("cached")
  buildingList = null;
  // The list that will be displayed after population in the show function
  roomsList = [];

  // Need to pass argument so it can be used in functions below
  constructor(private buildingService:BuildingsService) { }

  ngOnInit() { }

  /* 
  * Show the table based on the day (BUILDING name should be provided)
  * 0) Reset the buildingList to null and set current day to "" if you "switch to a different room"
  * 1) Is the day the same?
  * 2) Is buildingList initialized to an array?
  *    2a) Query the cache most of the time
  *    3a) Create a temporary array and populate it with the start and end times per room
  *    4a) Push temp array to the roomsList
  * 3) Notify buildingService to get the buildings from MongoDB
  * 4) Create a temporary array and populate it with the start and end times per room
  * 5) Push temp array to the roomsList
  * 6) Store in buildingList the query
  */
  show(day : string) {
    // 0) Re-initialize if navigate away from current page
    if (document.getElementById("table-2").style.display == "none")
    {
      this.buildingList = null;
      this.day = "";
    }
    // 1) Only run once when same button is pressed multiple times
    if (this.day != day) 
    {
      // 2) Query the database once ("cache the buildingList")
      if (this.buildingList == null)
      {
        // Clear roomsList for new list
        this.roomsList = [];
        // 3) Notify buildingService to get the buildings from MongoDB
        this.buildingService.getBuildings(this.name).subscribe(buildingList => {
          // roomsJSON = { name, mon, tue, wed, thu, omon, otue, owed, othu }
          let roomsJSON = buildingList.OpenBuilding[0].rooms;
          for (let room in roomsJSON)
          {
            // 4) Size of array for 8AM (inclusive) to 10 PM (exclusive)
            let arr = new Array(288);
            // timesJSON = [{ name, sec, days, location, st, et }]
            let timesJSON = roomsJSON[room][day];
            for (let time in timesJSON)
            {
              // Add 1's to values in the range of the times (increments of 5)
              for (let i = timesJSON[time].st / 5 ; i < timesJSON[time].et / 5; i++)
              {
                arr[i] = 1;
              }
            }
            // 5) Add to the roomsList
            this.roomsList.push({ name : roomsJSON[room].name, room : arr});
          }
          // 6) Store in the buildingList ("cache")
          this.buildingList = buildingList.OpenBuilding[0];
          // Display table
          document.getElementById("table-2").style.display = "block";
          // Set the day
          this.day = day;
        },
        err => {
          console.log(err);
        });
      }
      // 2a) Query the cache most of the time
      else
      {
        // Clear roomsList for new list
        this.roomsList = [];
        // { name, mon, tue, wed, thu, omon, otue, owed, othu }
        let roomsJSON = this.buildingList.rooms;
        for (let room in roomsJSON)
        {
          // 3a) Size of array for 8AM (inclusive) to 10 PM (exclusive)
          let arr = new Array(288);
          // timesJSON = [{ name, sec, days, location, st, et }]
          let timesJSON = roomsJSON[room][day];
          for (let time in timesJSON)
          {
            for (let i = timesJSON[time].st / 5; i < timesJSON[time].et / 5; i++)
            {
              arr[i] = 1;
            }
          }
          // 4a) Add to the roomsList
          this.roomsList.push({ name : roomsJSON[room].name, room : arr});
        }
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

  // On slider change, set start and end times for the times
  onChange(value: number[]) {
    this.start = value[0]*12;
    this.end = value[1]*12;
    this.tstart = value[0]*2;
    this.tend = value[1]*2;
  }
}
