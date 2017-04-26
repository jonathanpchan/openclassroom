import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  buildings : Object;
  //buildingNames: string[];

  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

  test(){
    console.log(this.buildings);
    }

  ngOnInit() {
    this.authService.getBuildingList().subscribe(buildinglist => {
      this.buildings = buildinglist;
      //console.log(buildinglist);
      //this.buildings.push(build);
      //building list is the list of buildings show by console
      //need to go through and fill building array with the data
      //from building list.
      //  buildinglist.forEach(function(building) {
      //    //console.log(building.name);
      //    //get rooms
      //   //  building.forEach(function(building.room){//not working
      //   //    console.log
      //         //get classes parse data
      //   //  })
      // });
      //console.log(this.buildings);
    },
    err => {
      console.log(err);
      return false;
    })
  }
}


interface Building {
  name: string;
  rooms: Room[];
}

interface Room {
  name: number;
  mon: Class[];
  tue: Class[];
  wed: Class[];
  thu: Class[];
}

interface Class {
  name: string;
  sec: string;
  days: string;
  location: string;
  st: number;
  et:number;
}
