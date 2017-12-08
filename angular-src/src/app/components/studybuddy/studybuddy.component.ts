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
  //get user from local storage and set up all data needed for the component
  user: JSON = JSON.parse(localStorage.getItem('user'));
  buddy: string = null;
  email: string;
  schedule = null;
  buddies = null;
  courseBuddies = null;
  loaded: boolean = false;
  isFinalized : boolean = false;

  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private studyBuddyService: StudyBuddyService) { }

  ngOnInit() {
    this.schedule = []
    this.email = this.user["email"];

    //calls isFinalized in user service to prevent users from using this when the data is not finalized
    this.userService.isFinalized(this.email).subscribe( data => {
        this.isFinalized = data[0].schedFinal;
        //if not finalized display warning to user.
        if(!this.isFinalized){
          document.getElementById("warning").style.display = "inline-block";
        }
    },
    err => {
      console.log(err)
    });

    //TODO: Use the course names once syed provides them instead of using the schedule
    this.userService.getSchedule({email: this.email}).subscribe(schedule => {
      this.schedule = schedule.schedule
      this.schedule.sort(this.sortByCourseName)
    },
    err => {
      console.log(err)
    });

    // Generate buddies for each course
    this.studyBuddyService.getStudyBuddies({email: this.email}).subscribe(buddies => {

      //This should be handled in the err, but routes do not proved a proper err
      if(buddies.error == "Nothing Found in SB") {
        document.getElementById("cronjobwait").style.display = "inline-block";
        document.getElementById("buddies").style.display = "none";
      }
      //if it's not an error we load buddies
      else
      {
        this.courseBuddies = buddies[0];
        this.loaded = true;
        this.buddies=buddies;
      }
    },
    err => {
      console.log(err)
    });
  }

  // Used to sort the schedule by coure names
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

  //Shows the buddies depending on the index of the class that is chosen
  //TODO fix this when routes provide course name ex 491b
  showBuddies()
  {
    //get index of the select menu and set our buddyDisplay to that index of studyBuddies
    var index = (<HTMLSelectElement>document.getElementById('courseSelect')).selectedIndex - 1;
    this.courseBuddies = this.buddies[index];

    //if there are no buddies display text indicating there are no buddies
    if(this.courseBuddies.buddies.length < 1)    {
      document.getElementById("buddylist").style.display = "none";
      document.getElementById("nobuddies").style.display = "inline-block";
    }
    //otherwise display the list of buddies
    else
    {
      document.getElementById("buddylist").style.display = "inline-block";
      document.getElementById("nobuddies").style.display = "none";
    }
  }

  //open message thread to buddy
  message(buddyIndex)
  {
    let buddy = this.courseBuddies.buddies[buddyIndex];
    this.chatService.addBuddyListItem(this.user["email"], buddy.email, buddy.name).subscribe();
    this.chatService.addBuddyListItem(buddy.email, this.user["email"], this.user["username"]).subscribe();
    this.buddy = buddy;
  }

  ngOnDestroy() {
    if (this.buddy != null) {
      this.chatService.ID = this.buddy;
    }
  }
}
