import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ngOnInit() {
    window.onscroll = this.scrollUp;
  }

  // Scroll back to the to if you click the To Top  
  toTop() {
    document.body.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  // Determine whether or not to show the To Top button  
  scrollUp() {
    if (document.body.scrollTop > 30 || document.scrollingElement.scrollTop > 30) {
      document.getElementById("to-top").style.display = "block";
    }
    else {
      document.getElementById("to-top").style.display = "none";
    }
  }
}
