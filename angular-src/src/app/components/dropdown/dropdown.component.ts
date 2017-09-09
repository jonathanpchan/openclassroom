import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../../services/buildings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  buildings;
  
  constructor(
    private builService:BuildingsService,
    private router:Router
  ) { }

  ngOnInit() {
  }
}
