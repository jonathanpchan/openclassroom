import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { StudyBuddyService } from '../../services/studybuddy.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
    user: JSON = JSON.parse(localStorage.getItem('user'))
    show: boolean = false;
    isFinalized: boolean;
    oldpw: String;
    newpw: String;
    username: String;
    email: String;
    x: String

    constructor(private userService: UserService,
                private studyBuddyService: StudyBuddyService,
                private flashMessage: FlashMessagesService) {
    }

    ngOnInit() {
        this.username = this.user["username"];
        this.email = this.user["email"];
        this.userService.isFinalized(this.email).subscribe( data => {
            this.isFinalized = data[0].schedFinal;
        })
    }

    toggleView(): void {
        if (this.show === false) {
            this.show = true;
        } else {
            this.show = false;
        }
    }

    onSubmitPW(): void {
        if (this.oldpw == "" || this.newpw == "") {
            this.flashMessage.show('Please enter all fields before submitting', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        }
        else {
            this.userService.changePW(this.email, this.oldpw, this.newpw).subscribe(data => {
                if (data.success) {
                    this.flashMessage.show('Password successfully changed.', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    this.show = false;
                }
                else if (!data.success) {
                    this.flashMessage.show('Incorrect password!', {cssClass: 'alert-danger', timeout: 3000});
                }
            })
        }
        this.oldpw = '';
        this.newpw = '';
    }

    unfinalize(): void {
        this.studyBuddyService.unfinalize(this.email).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Schedule has been opened for modification! Please finalize your schedule in the Schedule tab!', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                this.isFinalized = false;
            }
        })
    }
}