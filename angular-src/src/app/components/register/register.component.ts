import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  regdate: Date;

  // What services that are being used to register
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() { }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      regdate: new Date()
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email.', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register User using const user data
    this.userService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You registered! Please enter your credentials to log in.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);

      }
      else {
        this.flashMessage.show('Email is already in use.', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });
  }
}
