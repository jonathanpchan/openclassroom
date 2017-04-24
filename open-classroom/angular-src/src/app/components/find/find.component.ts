import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  buildings : Building[];
  //buildingNames: string[];

  constructor(
    private authService:AuthService,
    private router:Router
  ) {
    //hardcode to test
//     this.buildings = [{name:'ECS', rooms:[
//       {name: 105,
//       mon:[
//     {
//         "name" : "ECOa 100",
//         "sec" : "1358",
//         "days" : "MW",
//         "location" : "ECS-105",
//         "st" : 540,
//         "et" : 590
//     },
//     {
//         "name" : "ECON 101",
//         "sec" : "2827",
//         "days" : "MW",
//         "location" : "ECS-105",
//         "st" : 600,
//         "et" : 650
//     },
//     {
//         "name" : "I S 300",
//         "sec" : "3387",
//         "days" : "MW",
//         "location" : "ECS-105",
//         "st" : 660,
//         "et" : 735
//     },
//     {
//         "name" : "ECON 101",
//         "sec" : "1361",
//         "days" : "MW",
//         "location" : "ECS-105",
//         "st" : 750,
//         "et" : 825
//     },
//     {
//         "name" : "PSY 100",
//         "sec" : "2647",
//         "days" : "MW",
//         "location" : "ECS-105",
//         "st" : 840,
//         "et" : 915
//     },
//     {
//         "name" : "ECON 101",
//         "sec" : "2370",
//         "days" : "MW",
//         "location" : "ECS-105",
//         "st" : 930,
//         "et" : 1005
//     },
//     {
//         "name" : "MAE 471",
//         "sec" : "4943",
//         "days" : "M",
//         "location" : "ECS-105",
//         "st" : 1020,
//         "et" : 1130
//     }
// ],
//       tue:[{
//       "name" : "MATH 113",
//       "sec" : "5862",
//       "days" : "TuTh",
//       "location" : "ECS-105",
//       "st" : 480,
//       "et" : 555}],
//       wed:[{
//       "name" : "ECON 100",
//       "sec" : "1358",
//       "days" : "MW",
//       "location" : "ECS-105",
//       "st" : 540,
//       "et" : 590}],
//       thu:[{
//       "name" : "MATH 113",
//       "sec" : "5862",
//       "days" : "TuTh",
//       "location" : "ECS-105",
//       "st" : 480,
//       "et" : 555}]
//     }
//     ]}];
  }

  test(){
    console.log("Hello World");
  }



  ngOnInit() {
    this.authService.getBuildingList().subscribe(buildinglist => {
      // this.buildings = build.buildings;
      console.log(buildinglist);
      //this.buildings.push(build);
      //building list is the list of buildings show by console
      //need to go through and fill building array with the data
      //from building list.
       buildinglist.forEach(function(building) {
         console.log(building.name);
         //get rooms
        //  building.forEach(function(building.room){//not working
        //    console.log
              //get classes parse data
        //  })
      });
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
