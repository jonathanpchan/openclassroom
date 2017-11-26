import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import { StudyBuddyService } from '../../services/studybuddy.service';

@Component({
  selector: 'app-studybuddy',
  templateUrl: './studybuddy.component.html',
  styleUrls: ['./studybuddy.component.css']
})
export class StudybuddyComponent implements OnInit {
  user: JSON = JSON.parse(localStorage.getItem('user'));
  buddy: string = null;
  email: JSON = this.user["email"];
  schedule = null;
  courseName: string;
  courseNum: string;
  buddies = null;
  courseBuddies = null;
  loaded: boolean = false;

  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private studyBuddyService: StudyBuddyService) { }

  ngOnInit() {
    this.schedule = []
    // Generate course names
    this.userService.getSchedule({email: this.email}).subscribe(schedule => {
      this.schedule = schedule.schedule
      this.schedule.sort(this.sortByCourseName)
    },
    err => {
      console.log(err)
    })

    // Generate buddies to course names
    this.studyBuddyService.getStudyBuddies({email: this.email}).subscribe(buddies => {
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
    let buddy = this.courseBuddies.buddies[buddyIndex];
    this.chatService.addBuddyListItem(JSON.parse(localStorage.getItem('user'))["email"], buddy.email, buddy.name).subscribe();
    this.buddy = buddy;
  }

  ngOnDestroy() {
    if (this.buddy != null) {
      this.chatService.ID = this.buddy;
    }
  }
}