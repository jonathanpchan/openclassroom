import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  user:Object = {username : "sugi", email : "nlsugi10@gmail.com"};
  schedule : Object[] = null;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    // this.authService.getSchedule().subscribe(schedule => {
    //   this.user = schedule.user;
    // },
    // err => {
    //   console.log(err);
    //   return false;
    // })
    this.user['email'] = "me";
    this.user['username'] = "Another";
  }
}
