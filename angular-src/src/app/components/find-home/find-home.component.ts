import { Component, OnInit} from '@angular/core';
import { FindComponent } from '../find/find.component';
import { BuildingsService } from '../../services/buildings.service';
import { FindNowComponent } from '../find-now/find-now.component';

@Component({
  selector: 'app-find-home',
  templateUrl: './find-home.component.html',
  styleUrls: ['./find-home.component.css'],
  // Needed to function call the FindNowComponent
  providers: [FindNowComponent]
})
export class FindHomeComponent implements OnInit {
  // Chosen building to be queried (passed down components)
  building : string;
  // All building names possible
  buildingNames = [];

  constructor(private buildingService : BuildingsService, private findNow : FindNowComponent) {}
  
  // 1) Display available building names
  ngOnInit() { 
    this.buildingService.getBuildingNames().subscribe(names => {
      for (let name in names.OpenBuilding) {
        this.buildingNames.push(names.OpenBuilding[name].name);
      }
    },
    err => {
      console.log(err);
    });
  }

  // 2) Display option buttons 
  displayButtons() {
    if (document.getElementById("buttons").style.display == "none")
    {
      document.getElementById("buttons").style.display = "block";
      document.getElementById("all").style.display = "none";
      document.getElementById("table").style.display = "none";
      document.getElementById("table-2").style.display = "none";
      document.getElementById("now").style.display = "none";
      document.getElementById("times").style.display = "none";
    }
  }

  // 3) Display button depending on id
  displayOption(option : string) {
    if (document.getElementById("buttons").style.display == "block")
    {
      document.getElementById("buttons").style.display = "none";
      document.getElementById(option).style.display = "block";
      // if (option == "now")
      // {
      //   this.findNow.show(this.building);
      // }
    }
  }
}
