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

  // Send email and password combination to the database and navigate based on if it successfully matched an email and password combination.
  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.userService.authenticateUser(user).subscribe(data => {
      // If sucessful, store user data into JSON web token
      if (data.success) {
        this.userService.storeUserData(data.token, data.user);
        this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['schedule']);
      }
      else {
        // If unsuccessful, show the email and password combination was not correct
        this.flashMessage.show('No Match with that Email and Password.', { cssClass: 'alert-danger', timeout: 3000 })
      }
    })
  }
}
