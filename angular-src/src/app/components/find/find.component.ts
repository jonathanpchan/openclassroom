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
  buildingList : Object;

  constructor(
    private buildingService:BuildingsService,
    private router:Router
  ) {}
   
  ngOnInit() {}

  onSubmit() {
    this.buildingList = this.buildingService.getBuildings(this.name, this.day).subscribe(buildingList => {
      this.buildingList = buildingList.OpenBuilding;
      // There is difference between this.buildingList and buildingList. For accessing and processing, use this.buildingList :) :) :)
      console.log(this.buildingList[0].name);
    },
    err => {
      console.log(err);
      return false;
    });

    // Processing of the data can come here before it's displayed in the html!!! :) :) :)
  }
}