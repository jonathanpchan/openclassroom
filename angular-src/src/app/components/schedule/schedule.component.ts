import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { StudyBuddyService } from '../../services/studybuddy.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  // You
  user: JSON = JSON.parse(localStorage.getItem('user'))
  // Your schedule
  schedule = null;
  // Boolean for if you are displaying the schedule
  home: boolean = true;
  // Boolean for if you are attempting to add a course
  add: boolean = false;
  // Boolean for if you are attempting to delete a course
  delete: boolean = false;
  // Boolean for if you are finalizing a schedule
  finalize: boolean = false;
  // Boolean for if the schedule is finalized or not
  isFinalized: boolean = false;
  // Information about the course you are about to delete
  deleteMessage: String;
  // Item that is in the process of being deleted
  currItem = null;

  constructor(
    private userService: UserService, 
    private studyBuddyService: StudyBuddyService, 
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.schedule = []
    let email = this.user["email"]

    // Get schedule
    this.userService.getSchedule({email: email}).subscribe(schedule => {
      this.schedule = schedule.schedule
      this.schedule.sort(this.sortByCourseName)
    },
    err => {
      console.log(err)
    })
    
    // Check to see if finalized
    this.userService.isFinalized(this.user["email"]).subscribe((finalized) => {
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
    this.add = false;
    this.delete = false
    this.home = true;
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
    this.currItem = { index: index, crsID: courseChoice.sec};
  }

  // 2) Determine if you delete or cancel
  onCourseDelete(confirm: boolean) {
    if (confirm) 
    {
      let coursePayload = {
        email: JSON.parse(localStorage.getItem('user')).email,
        crsID: this.currItem.crsID
      }
      // Delete on back end
      this.userService.deleteScheduleItem(coursePayload).subscribe();
      // Delete on front end
      this.schedule.splice(this.currItem.index, 1)
      this.schedule.sort(this.sortByCourseName)
      this.flashMessage.show('Course successfully removed.', {cssClass: 'alert-success', timeout: 3000})
    }
    this.delete = false;
  }

  clickFinalize() {
    // If the length is greater than 0, you can finalize
    if (this.schedule.length > 0) {
      this.finalize = true;
    }
    else {
      // If the length is <= 0, you cannot finalize
      this.flashMessage.show('Cannot finalize course schedule.', {cssClass: 'alert-danger', timeout: 3000})
    }
  }

  onFinalize(confirm: boolean) {
    // On finalize confirmation screen, finalize or don't finalize depending on the button chosen
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
