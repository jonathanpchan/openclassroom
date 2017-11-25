import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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
  courseBuddies = null;
  loaded : boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {

    //TODO: We may be able to remove this and just use studyBuddies once Syed Fixes it.
    this.schedule = []
    this.authService.getSchedule({email : this.email}).subscribe(schedule => {
      this.schedule = schedule.schedule
      this.schedule.sort(this.sortByCourseName)
    },
    err => {
      console.log(err)
    })

    this.authService.getStudyBuddies({email : this.email}).subscribe(buddies => {
      console.log(this.email);
      console.log(buddies);
      if(buddies!=null)
      {
        this.courseBuddies = buddies[0];
        this.loaded = true;
        this.buddies=buddies;
      }
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
    //get index of the select menu and set our buddyDisplay to that index of studyBuddies
    var index = (<HTMLSelectElement>document.getElementById('courseSelect')).selectedIndex - 1;
    this.courseBuddies = this.buddies[index];
    document.getElementById("buddylist").style.display = "inline-block";
  }

  message(buddyIndex)
  {

    console.log(buddyIndex);
    //set up messaing thread with the data below
    console.log(this.courseBuddies.buddies[buddyIndex].name);
    console.log(this.courseBuddies.buddies[buddyIndex]._id);
    console.log(this.courseBuddies.buddies[buddyIndex].chatRoomId);
  }
}
