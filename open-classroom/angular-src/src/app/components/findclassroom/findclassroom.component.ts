import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import {Router} from '@angular/router';
import { DropdownComponent } from '../dropdown/dropdown.component';

//attributes
@Component({
  selector: 'app-findclassroom',
  templateUrl: './findclassroom.component.html',
  styleUrls: ['./findclassroom.component.css']
})

export class FindclassroomComponent implements OnInit {
  buildings;
  constructor(
    private builService:BuildingsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.builService.getBuildings().subscribe(building => {
      this.buildings = building.buildings;
    });
  }
}
