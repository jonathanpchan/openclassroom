import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean = false; // Initially show hidden

  constructor(
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService) { }

  ngOnInit() { }

  // Change the state of dropdown
  toggle() {
    this.show = !this.show;
  }

  // Line items call hide(), then toggle(), so to make sure it's false, start off true
  hide() {
    this.show = true;
  }

  // On logout, show log out and navigate back to login
  onLogoutClick() {
    this.userService.logout();
    this.flashMessage.show('You have logged out.', { cssClass:'alert-success', timeout:3000 });
    this.router.navigate(['/'])
  }
}
