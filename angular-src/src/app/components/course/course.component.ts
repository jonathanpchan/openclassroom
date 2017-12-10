import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

// NOTE: COURSE COMPONENT IS USED IN THE SCHEDULE COMPONENT AS A CHILD COMPONENT, 
// HENCE THE EMITS TO NOTIFY THE PARENT COMPONENT WHEN IT NEEDS TO TAKE BACK THE DISPLAY/CONTROL.
// Source: https://angular.io/guide/component-interaction
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // 1st dropdown for course name
  courseName: string
  courseNameOptions: any[]

  // Holds onto the collection that has the listing of the courses based on courseName
  currCourseName: any[]

  // 2nd dropdown for course number
  courseNum: string
  courseNumOptions: any[]
  
  // 3rd dropdown for course combination
  courseChoice = null
  courseChoiceOptions: any[]
  
  // Cache of all courses so the database only needs to be called once
  courseAll: any[]

  // Confirmation when adding / cancelling the add course
  confirm: boolean = false
  confirmMessage: string
  @Output() afterConfirm: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private userService: UserService, 
    private flashMessage: FlashMessagesService) { }

  // ========== Get Dropdown Options ===============
  // 1) Get the course names
  ngOnInit() {
    this.courseNameOptions = []
    this.userService.getCourses().subscribe(names => {
      for (let name in names.Courses) 
      {
        this.courseNameOptions.push(names.Courses[name].name)
      }
    },
    err => {
      console.log(err);
    });
  }

  // 2) Get the course numbers
  getCourseNumOptions() {
    if (this.courseNameOptions != null)
    {
      // Reset the course number data that is displayed
      this.courseNumOptions = []
      this.courseChoiceOptions = null

      // Populate current course array to point to specific course name
      this.currCourseName = this.courseAll
      for (let all in this.currCourseName) 
      {
        // Once the particular course name is found, set the current course name
        if (this.currCourseName[all].name == this.courseName)
        {
          this.currCourseName = this.currCourseName[all]["courses"]
          break;
        }
      }

      // Populate the course num options from current course array
      for (let courses in this.currCourseName)
      {
        this.courseNumOptions.push(this.currCourseName[courses]["num"])
      }

      // Make display sorted and unique
      this.courseNumOptions = this.makeUnique(this.courseNumOptions)
    }
  }

  // 3) Get the course options
  getCourseChoiceOptions() {
    if (this.courseNumOptions != null)
    {
      this.courseChoiceOptions = []
      // Populate the choices the user can pick for the class they want to add
      for (let courses in this.currCourseName)
      {
        if (this.currCourseName[courses].num == this.courseNum)
        {
          this.courseChoiceOptions.push(this.currCourseName[courses])
        }
      }
    }
  }

  // Get all courses and puts them into courseAll as "cache" (on focus: When you select a course name)
  cache() {
    if (this.courseAll == null) 
    {
      this.courseAll = [];
      this.userService.getCourses().subscribe(all => {
        for (let course in all.Courses) {
          this.courseAll.push(all.Courses[course]);
        }
      },
      err => {
        console.log(err);
      });
    }
  }

  // ========== Add ===============
  // Switch back to Schedule component
  onBack() {
    this.afterConfirm.emit(false);
  }
  
  // 4) On submit, show data you'd like to add. If missing data, then alert that more info is needed.
  onSubmit() {
    if (this.courseAll && this.courseNameOptions && this.courseNumOptions && this.courseChoiceOptions && this.courseChoice) 
    {
      this.confirmMessage = this.courseName+" "+this.courseChoice.num+" Class # "+this.courseChoice.sec+" "+this.courseChoice.day+" "+this.courseChoice.time+" "+this.courseChoice.location; 
      this.confirm = true;
    } 
    else 
    {
      this.confirm = false;
      this.flashMessage.show('Please complete all course fields.', {cssClass: 'alert-danger', timeout: 3000})
    }
  }

  // Determine what to do if add or cancel
  addClick(answer: boolean) {
    if (answer) 
    {
      // Add (Back End)
      let coursePayload = {
        email: JSON.parse(localStorage.getItem('user')).email,
        crsID: this.courseChoice.sec
      }
      this.userService.addScheduleItem(coursePayload).subscribe((success) =>
      {
        // Don't Add (Front End)
        if (success.length == 0)
        {
          this.flashMessage.show('Course already in schedule.', {cssClass: 'alert-danger', timeout: 3000})
          this.afterConfirm.emit(false)
        }
        else
        { // Add (Front End)
          let add = {name: this.courseName, num: this.courseChoice.num, sec: this.courseChoice.sec, day: this.courseChoice.day, time: this.courseChoice.time, location: this.courseChoice.location, prof: this.courseChoice.prof }
          this.afterConfirm.emit(add)
          this.flashMessage.show('Course successfully added.', {cssClass: 'alert-success', timeout: 3000})
        }
      });
    } 
    else 
    { // If cancel, then switch back to schedule component
      this.afterConfirm.emit(false)
    }
  }
  
  // Take a SORTED array, determine unique values, and then return the array
  // Source: http://rosettacode.org/wiki/Remove_duplicate_elements#JavaScript
  makeUnique(arr) {
    let tempArr = arr;
    for (var i = 1; i < tempArr.length; ) 
    {
      if (tempArr[i-1] === tempArr[i]) 
      {
        tempArr.splice(i,1);
      } 
      else 
      {
        i++;
      }
    }
    return tempArr;
  }
}