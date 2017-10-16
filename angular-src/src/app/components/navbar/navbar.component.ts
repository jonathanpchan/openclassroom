import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService } from '../../services/validate.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show : boolean = false;   // store state

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {}

  // Changes state of dropdown
  toggle() {
    this.show = !this.show;
  }

  hideDropdown() {
    this.show = false;
  }

  // On logout, show log out and navigate back to login
  onLogoutClick() {
  this.authService.logout();
  this.flashMessage.show('You have logged out.', {
    cssClass:'alert-success',
    timeout:3000
  });
    this.router.navigate(['/'])
  }
}
