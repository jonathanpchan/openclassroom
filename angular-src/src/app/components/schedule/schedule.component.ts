import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StudyBuddyService } from '../../services/studybuddy.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  finalize : boolean = false;
  isFinalized : boolean = false;
  deleteMessage : String;
  currItem = null;

  constructor(private authService:AuthService, 
              private studyBuddyService: StudyBuddyService, 
              private flashMessage : FlashMessagesService) { }

  ngOnInit() {
    this.schedule = []
    let email = this.user["email"]
    // Get schedule
    this.authService.getSchedule({email : email}).subscribe(schedule => {
      this.schedule = schedule.schedule
      this.schedule.sort(this.sortByCourseName)
    },
    err => {
      console.log(err)
    })
    // Check to see if finalized
    this.authService.isFinalized(this.user["email"]).subscribe((finalized) => {
      this.isFinalized= finalized[0].schedFinal
    });
  }

  // ========== Add ==================
  // 1) Go to add
  clickAdd() {
    this.add = true;
  }

  // 2) Determine if you add or cancel
  onCourseAdd(confirm) {
    if (confirm)
    {
      this.schedule.push(confirm)
      this.schedule.sort(this.sortByCourseName)
    }
    this.add=false;
    this.delete=false
    this.home=true;
  }
  
  // ========== Delete ===============
  // 1) Go to delete
  clickDelete(index) {
    this.delete = true;
    // Create Message
    let course = this.schedule[index]
    let courseChoice = course;
    this.deleteMessage = course.name+" "+courseChoice.num+" Class # "+courseChoice.sec+" "+courseChoice.day+" "+courseChoice.time+" "+courseChoice.location;
    // In preparation for delete
    this.currItem = { index : index, crsID : courseChoice.sec};
  }

  // 2) Determine if you delete or cancel
  onCourseDelete(confirm : boolean) {
    if (confirm) 
    {
      let coursePayload = {
        email : JSON.parse(localStorage.getItem('user')).email,
        crsID : this.currItem.crsID
      }
      // Delete on back end
      this.authService.deleteScheduleItem(coursePayload).subscribe();
      // Delete on front end
      this.schedule.splice(this.currItem.index, 1)
      this.schedule.sort(this.sortByCourseName)
      this.flashMessage.show('Course successfully removed', {cssClass: 'alert-success', timeout: 3000})
    }
    this.delete = false;
  }

  clickFinalize() {
    this.finalize = true;
  }

  onFinalize(confirm : boolean) {
    if (confirm) {
      this.studyBuddyService.joinStudyBuddies(this.user["email"]).subscribe();
    }
    this.isFinalized = confirm;
    this.finalize = false;
  }

  // Sort by Course, then Course Num, then by Course Sec
  sortByCourseName(a,b) {
    // Name (ex. CECS)
    if (a.name == b.name)
    {
      // Number (ex. CECS 101 vs CECS 102)
      if (a.num == b.num)
      {
        return a.sec-b.sec
      }
      else
      {
        return a.num > b.num
      }
    }
    else
    {
      return a.name > b.name
    }
  }
}
