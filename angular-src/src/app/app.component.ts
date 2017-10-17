import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  ngOnInit() {
    window.onscroll = this.scrollUp;
  }

  toTop() {
    document.body.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  scrollUp() {
    if (document.body.scrollTop > 30 || document.scrollingElement.scrollTop > 30) {
      document.getElementById("to-top").style.display = "block";
    }
    else {
      document.getElementById("to-top").style.display = "none";
    }
  }
}
