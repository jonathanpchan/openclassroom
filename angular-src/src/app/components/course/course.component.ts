import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course : string;
  courseNames = [];

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.courseNames = []
    this.authService.getCourseNames().subscribe(names => {
      for (let name in names.Courses) {
        this.courseNames.push(names.Courses[name].name);
      }
    },
    err => {
      console.log(err);
    });
  }
}
