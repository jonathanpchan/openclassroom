import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  user : JSON = JSON.parse(localStorage.getItem('user'))
  schedule = null;
  add : boolean = false;
  delete : boolean = false;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    let email = this.user["email"]
    console.log(email)
    this.authService.getSchedule({email : email}).subscribe(schedule => {
      console.log(schedule)
      this.schedule = schedule.schedule
    },
    err => {
      console.log(err)
    })
  }

  clickAdd() {
    this.add = true;
  }
  
  clickDelete() {
    this.delete = true;
  }
}
