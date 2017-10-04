import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.courseNameOptions = []
    this.authService.getCourses().subscribe(names => {
      for (let name in names.Courses) {
        this.courseNameOptions.push(names.Courses[name].name)
      }
    },
    err => {
      console.log(err);
    });
  }

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
      this.courseNumOptions = this.makeUnique(this.courseNumOptions.sort())
    }
  }

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
      // Sort choices by section (no need to make unique since section number is unique)
      this.courseChoiceOptions = this.courseChoiceOptions.sort((a,b) => { return a.sec-b.sec })
    }
  }

  change() {
    console.log()
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

  getCurrItem() {
    // for (let i in this.courseAll[this.courseName]["courses"]) {
    //   if (this.courseAll[this.courseName]["courses"][i].sec == this.courseChoiceOptions) {
    //     this.currItem = this.courseAll[this.courseName]["courses"][i]
    //     break;
    //   }
    // }
  }

  onSubmit() {
    if (this.courseAll && this.courseNameOptions && this.courseNumOptions && this.courseChoiceOptions && this.courseChoice) 
    {
      this.confirm=true;
      console.log(this.courseChoice)
      this.confirmMessage = this.courseName+" "+this.courseChoice.num+" Class # "+this.courseChoice.sec+" "+this.courseChoice.day+" "+this.courseChoice.time+" "+this.courseChoice.location;

    }
  }

  addClick(answer : boolean) {
    if (answer)
    {
      // (TEMP) Get the email of the user
      let email = localStorage.getItem('user')
      email = JSON.parse(email).email
      console.log(this.courseChoice.sec)
      this.authService.addScheduleItem(email, this.courseChoice.sec)
      console.log("done")
    }
    else
    {
      // Reset
      this.courseNumOptions = null;
      this.courseChoiceOptions = null;
      this.courseChoice = null;
      this.confirm = false;
    }
  }
  
  // http://rosettacode.org/wiki/Remove_duplicate_elements#JavaScript
  // Take a SORTED array, determine unique values, and then return
  makeUnique(arr) {
    let tempArr = arr;
    for (var i = 1; i < tempArr.length; ) {
      if (tempArr[i-1] === tempArr[i]) {
        tempArr.splice(i,1);
      } else {
        i++;
      }
    }
    return tempArr;
  }
}