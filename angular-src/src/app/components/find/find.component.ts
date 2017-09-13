import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})

export class FindComponent implements OnInit {
  name : String;
  day : String;
  time : string;
  buildingList : Object;

  constructor(
    private buildingService:BuildingsService,
    private router:Router
  ) {}
   
  ngOnInit() {}

  onSubmit() {
    this.buildingService.getBuildings(this.name, this.day).subscribe(buildingList => {
      // Where we do the data processing
      let openBuildingJSON = buildingList['OpenBuilding'];
      for (var build in openBuildingJSON)
      {
        let openRoomJSON = openBuildingJSON[build]['rooms'];
        for (var room in openRoomJSON)
        {
          let openClassJSON = openBuildingJSON[build]['rooms'][room]['class'];
          for (var oclass in openClassJSON)
          {
            let timesJSON = openClassJSON[oclass];
            if (parseInt(timesJSON['st'], 10) >= parseInt(this.time, 10))
            {
              console.log(timesJSON['st']);
            }
          }
        }
      }
      
      this.buildingList = buildingList.OpenBuilding;
    },
    err => {
      console.log(err);
    });
  }
}