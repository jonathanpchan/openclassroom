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
    this.buildingService.getBuildings(this.name, this.day).subscribe(buildingList => {
      this.buildingList = buildingList.OpenBuilding;
    },
    err => {
      console.log(err);
    });
  }
}