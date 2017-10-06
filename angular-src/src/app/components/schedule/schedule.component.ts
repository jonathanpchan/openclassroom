import { Component, OnInit, ViewChild } from '@angular/core';
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
  home : boolean = true;
  add : boolean = false;
  delete : boolean = false;
  deleteMessage : String;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    let email = this.user["email"]
    this.authService.getSchedule({email : email}).subscribe(schedule => {
      this.schedule = schedule.schedule
    },
    err => {
      console.log(err)
    })
  }

  clickAdd() {
    this.add = true;
  }
  
  // Delete
  // 1) Go to prompt
  clickDelete(index) {
    this.delete = true;
    let course = this.schedule[index]
    let courseDetails = course.courses[0];
    this.deleteMessage = course.name+" "+courseDetails.num+" Class # "+courseDetails.sec+" "+courseDetails.day+" "+courseDetails.time+" "+courseDetails.location;
  }

  // Delete
  // 2) Determine if you delete or cancel
  deleteClick(confirm : boolean) {
    if (confirm) {
      
    }
    else {
      this.delete = false;
    }
  }


  onCourseConfirm(confirm) {
    if (confirm)
    {
      this.add=false;
      this.delete=false
      this.home=true;
    }
    else
    {
      console.log("ERROR")
    }
  }
}
