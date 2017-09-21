import { Component, OnInit } from '@angular/core';
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
    start: [0, 24],
    keyboard: true,  // same as [keyboard]="true"
    step: 0.5,
    pageSteps: 2,
    range: {
      min : 0, 
      max : 24
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };

  constructor() { }

  ngOnInit() {
  }

  show(day : string)
  {
    console.log(day);
  }

  onChange(value: any) {
    console.log('Value changed to', value);
  }
}
