import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseName : string
  courseNameOptions : any[]
  currCourseName : any[]

  courseNum : string
  courseNumOptions : any[]
  
  courseChoice = null
  courseChoiceOptions : any[]
  
  courseAll : any[]

  confirm : boolean = false
  confirmMessage : string
  @Output() afterConfirm : EventEmitter<any> = new EventEmitter<any>()

  constructor(private authService : AuthService, private flashMessage : FlashMessagesService) { }

  // ========== Get Options ===============
  // Get the course names
  ngOnInit() {
    this.courseNameOptions = []
    this.authService.getCourses().subscribe(names => {
      for (let name in names.Courses) 
      {
        this.courseNameOptions.push(names.Courses[name].name)
      }
    },
    err => {
      console.log(err);
    });
  }

  // Get the course numbers
  getCourseNumOptions() {
    if (this.courseNameOptions != null)
    {
      // Reset the data that is displayed
      this.courseNumOptions = []
      this.courseChoiceOptions = null
      // Populate current course array to point to specific course name
      this.currCourseName = this.courseAll
      for (let all in this.currCourseName) 
      {
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

      // Made display sorted and unique
      this.courseNumOptions = this.makeUnique(this.courseNumOptions)
    }
  }

  // Get the course options
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

  // Gets all courses and puts them into courseAll as "cache"
  cache() {
    if (this.courseAll == null) 
    {
      this.courseAll = [];
      this.authService.getCourses().subscribe(all => {
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
  // On submit, show alternative data (If missing data, then alert)
  onSubmit() {
    if (this.courseAll && this.courseNameOptions && this.courseNumOptions && this.courseChoiceOptions && this.courseChoice) 
    {
      this.confirm=true;
      this.confirmMessage = this.courseName+" "+this.courseChoice.num+" Class # "+this.courseChoice.sec+" "+this.courseChoice.day+" "+this.courseChoice.time+" "+this.courseChoice.location;
    } 
    else 
    {
      this.flashMessage.show('Please complete all course fields.', {cssClass: 'alert-danger', timeout: 3000})
    }
  }

  // Determine what to do if add or cancel
  addClick(answer : boolean) {
    if (answer) 
    {
      // Add on back end
      let coursePayload = {
        email : JSON.parse(localStorage.getItem('user')).email,
        crsID : this.courseChoice.sec
      }
      this.authService.addScheduleItem(coursePayload).subscribe((success) =>
      {
        if (success == null)
        {
          // Add on front end
          let add = {name: this.courseName, num: this.courseChoice.num, sec: this.courseChoice.sec, day: this.courseChoice.day, time: this.courseChoice.Time, location: this.courseChoice.location, prof: this.courseChoice.prof }
          this.afterConfirm.emit(add)
          // Output
          this.flashMessage.show('Course successfully added.', {cssClass: 'alert-success', timeout: 3000})
        }
        else
        {
          this.flashMessage.show('Course already in schedule.', {cssClass: 'alert-danger', timeout: 3000})
          this.afterConfirm.emit(false)
        }
      });
    } 
    else 
    {
      this.afterConfirm.emit(false)
    }
  }
  
  // http://rosettacode.org/wiki/Remove_duplicate_elements#JavaScript
  // Take a SORTED array, determine unique values, and then return
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