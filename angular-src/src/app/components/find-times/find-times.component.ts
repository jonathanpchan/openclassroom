import { Component, OnInit, Input } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-find-times',
  templateUrl: './find-times.component.html',
  styleUrls: ['./find-times.component.css']
})
export class FindTimesComponent implements OnInit {
  @Input() name : string;
  day : string = "";
  // For displaying the times
  times = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", 
            "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", 
            "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", 
            "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
            "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
            "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",  
            "6:00 PM","6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", 
            "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
  tstart : number = 16;
  tend : number = 44;
  // For displaying the boxes
  start : number = 8*12;
  end : number = 22*12;
  // See: http://tb.github.io/ng2-nouislider/
  // Slider configuration
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
  roomsList = [];
  buildingList = null;

  constructor(private buildingService:BuildingsService) { }

  ngOnInit() { }

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
          document.getElementById("table-2").style.display = "block";
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

  // Setting the values for the display change
  onChange(value: number[]) {
    this.start = value[0]*12;
    this.end = value[1]*12;
    this.tstart = value[0]*2;
    this.tend = value[1]*2;
  }
}
