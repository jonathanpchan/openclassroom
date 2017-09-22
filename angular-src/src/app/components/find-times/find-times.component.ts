import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-find-times',
  templateUrl: './find-times.component.html',
  styleUrls: ['./find-times.component.css']
})
export class FindTimesComponent implements OnInit {
  // See: http://tb.github.io/ng2-nouislider/
  timeRange : number[];
  timeSliderConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [7, 22],
    keyboard: true,  // same as [keyboard]="true"
    step: 0.5,
    pageSteps: 2,
    range: {
      min : 7, 
      max : 22
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };
  buildingTimes = [];

  constructor(private buildingService:BuildingsService) { }

  ngOnInit() {
  }

  show(day : string)
  {
    this.buildingTimes = [];
    var left = 8;
    var right = 21;
    var arrSize = (right-left) * 12;
    var offset = left * 12;
    this.buildingService.getAll().subscribe(buildingList => {
      for (var build in buildingList.OpenBuilding)
      {
        let roomsJSON = buildingList.OpenBuilding[build].rooms;
        for (var room in roomsJSON)
        {
          var arr = new Array(arrSize);
          let timesJSON = roomsJSON[room][day];
          let push = false;
          for (var time in timesJSON)
          {
            //console.log(buildingList.OpenBuilding[build].name+" | "+roomsJSON[room].name+" | "+timesJSON[time].st+"-"+timesJSON[time].et);
            for (var i = timesJSON[time].st / 5 - offset; i < timesJSON[time].et / 5 - offset; i++)
            {
              arr[i] = 1;
              push = true;
            }
          }
          if (push) {
            this.buildingTimes.push({ building : buildingList.OpenBuilding[build].name, name : roomsJSON[room].name, room : arr});
          }
        }
      }
      document.getElementById("table").style.display = "block";
    },
    err => {
      console.log(err);
    });

    // this.buildingService.getAll().subscribe(buildingList => {
    //   let roomsJSON = buildingList.OpenBuilding[0].rooms;
    //   for (var room in roomsJSON)
    //   {
    //     var arr = new Array();
    //     let timesJSON = roomsJSON[room][day];
    //     for (var time in timesJSON)
    //     {
    //       for (var i = timesJSON[time].st / 5 - 96; i < timesJSON[time].et / 5 - 96; i++)
    //       {
    //         arr[i] = 1;
    //       }
    //     }
    //     this.roomsList.push({ name : roomsJSON[room].name, room : arr});
    //   }
    // },
    // err => {
    //   console.log(err);
    // });
  }

  onChange(value: any) {
    console.log('Value changed to', value);
  }
}
