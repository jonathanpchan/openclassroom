import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-studybuddy',
  templateUrl: './studybuddy.component.html',
  styleUrls: ['./studybuddy.component.css']
})
export class StudybuddyComponent implements OnInit {

  email : JSON = JSON.parse(localStorage.getItem('user'))["email"];
  schedule = null;
  courseName : string;
  courseNum : string;
  buddies = null;
  test = null;
  loaded : boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    //console.log(this.email);



    this.schedule = []
    this.authService.getSchedule({email : this.email}).subscribe(schedule => {
      this.schedule = schedule.schedule
      this.schedule.sort(this.sortByCourseName)
      //console.log(this.schedule);

      this.buddies = JSON.parse('{"res":[{"classes":[{"name":"CECS 444","buddies":[{"name":"guy0","id":"xxxxx"},{"name":"guy1","id":"xxxxx"},{"name":"guy2","id":"xxxxx"},{"name":"guy3","id":"xxxxx"}]},{"name":"CECS 445","buddies":[{"name":"guy4","id":"xxxxx"},{"name":"guy5","id":"xxxxx"},{"name":"guy6","id":"xxxxx"},{"name":"guy7","id":"xxxxx"}]},{"name":"CECS 446","buddies":[{"name":"guy8","id":"xxxxx"},{"name":"guy9","id":"xxxxx"}]}]}]}');
      this.buddies = this.buddies.res[0].classes;
      console.log(this.buddies);
      setTimeout(this.lol(),100); // run donothing after 0.5 seconds


    },
    err => {
      console.log(err)
    })

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

  showBuddies()
  {
    var index = (<HTMLSelectElement>document.getElementById('courseSelect')).selectedIndex - 1;

    this.test = this.buddies[index];

    console.log("index of course - " + index);
    console.log(this.buddies);
    document.getElementById("buddylist").style.display = "inline-block";

    // var input = (<HTMLInputElement>document.getElementById('courseSelect')).value;
    // var course = input.split(" ");
    // this.courseName = course[0];
    // this.courseNum = course[1];




    // console.log(this.courseName + " " + this.courseNum);

    // console.log("test\n" + this.test.name);
    // console.log("test\n" + this,test.buddies);


    //TODO implement routes get data and change it
    //show study buddies now, we don't need to hide it anymore
  }

  message(name)
  {
    console.log("messaging " + name);
  }

  lol()
  {
    this.loaded=true;
    document.getElementById("buddylist").style.display = "inline-block";
  }
}
