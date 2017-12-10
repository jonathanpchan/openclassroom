import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
  constructor() { }

  // Make sure the register information is all filled out
  validateRegister(user) {
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined){
      return false;
    }
    else {
      return true;
    }
  }

  // Make sure it's a valid email
  // Source: LOST
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
