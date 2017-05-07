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
  currentBuilding : Object;
  index: number;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

    showMonday(){
      this.monday = true;
      this.tuesday = false;
      this.wednesday = false;
      this.thursday = false;
    }

    showTuesday(){
      this.monday = false;
      this.tuesday = true;
      this.wednesday = false;
      this.thursday = false;
    }

    showWednesday(){
      this.monday = false;
      this.tuesday = false;
      this.wednesday = true;
      this.thursday = false;
    }

    showThursday(){
      this.monday = false;
      this.tuesday = false;
      this.wednesday = false;
      this.thursday = true;
    }

   onChange(bName) {
     //pass the name into function to change index
     this.getIndex(bName);
     this.currentBuilding = Object.assign({}, this.buildings[this.index]);
   }

   getIndex(bName){
    //stupid loop to get index for display.
    //this will probably break at some point
      var num:number = 0;
      while(bName != this.buildings[num].name){
        num = num+1;
      }
      this.index = num;
   }

  ngOnInit() {
    this.index = 0;
    this.authService.getBuildingList().subscribe(buildinglist => {
      this.buildings = buildinglist;
      //default, otherwise AS wont work until we change and change back.
      //not sure if its better to do it like this, or like in onChange(num);
    this.currentBuilding = this.buildings[this.index];
    this.monday = true;
    this.tuesday = false;
    this.wednesday = false;
    this.thursday = false;


    },
    err => {
      console.log(err);
      return false;
    })
  }
}


class  Building {
  name: string;
  rooms: Room[];
}

class  Room {
  name: number;
  mon: Class[];
  tue: Class[];
  wed: Class[];
  thu: Class[];
}

class Class {
  name: string;
  sec: string;
  days: string;
  location: string;
  st: number;
  et:number;
}
