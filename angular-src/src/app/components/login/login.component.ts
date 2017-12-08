import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() { }

  //This sends the email and password combination to the data if successful the user is logged in
  //otherwise an error message is shown.
  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.userService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.userService.storeUserData(data.token, data.user);
        this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['schedule']);
      }
      else { //don't show what was wrong, disallow brute forcing
        this.flashMessage.show('No Match with that Email and Password.', { cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['login']);
      }
    })
  }
}
