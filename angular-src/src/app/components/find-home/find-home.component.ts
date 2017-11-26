import { Component, OnInit, ViewChild } from '@angular/core';
import { FindComponent } from '../find/find.component';
import { BuildingsService } from '../../services/buildings.service';
import { FindNowComponent } from '../find-now/find-now.component';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-find-home',
  templateUrl: './find-home.component.html',
  styleUrls: ['./find-home.component.css'],
  providers: [FindNowComponent] // Needed to function call the FindNowComponent
})
export class FindHomeComponent implements OnInit {
  // Chosen building to be queried (passed down components)
  building: string = "";
  // All building names possible
  buildingNames = [];

  // Access the used FindNowComponent to make the show function call
  @ViewChild(FindNowComponent) nowComponent: FindNowComponent;

  constructor(
    private buildingService: BuildingsService, 
    private flashMessage: FlashMessagesService) { }

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
      document.getElementById("room").style.display = "none";
      document.getElementById("room2").style.display = "none";
      document.getElementById("room3").style.display = "none";


    }
  }

  // 3) Display button depending on id
  displayOption(option: string) {
    if (this.building == "") {
      this.flashMessage.show('Please choose a building to find an Open Classroom.', {cssClass: 'alert-danger', timeout: 3000})
    }
    else {
      if (document.getElementById("buttons").style.display == "block")
      {
        document.getElementById("buttons").style.display = "none";
        document.getElementById(option).style.display = "block";
        if (option == "now")
        {
          this.nowComponent.showNow();
        }
      }
    }
  }
}
