webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindComponent = (function () {
    function FindComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    FindComponent.prototype.showMonday = function () {
        this.monday = true;
        this.tuesday = false;
        this.wednesday = false;
        this.thursday = false;
    };
    FindComponent.prototype.showTuesday = function () {
        this.monday = false;
        this.tuesday = true;
        this.wednesday = false;
        this.thursday = false;
    };
    FindComponent.prototype.showWednesday = function () {
        this.monday = false;
        this.tuesday = false;
        this.wednesday = true;
        this.thursday = false;
    };
    FindComponent.prototype.showThursday = function () {
        this.monday = false;
        this.tuesday = false;
        this.wednesday = false;
        this.thursday = true;
    };
    FindComponent.prototype.onChange = function (bName) {
        //pass the name into function to change index
        this.getIndex(bName);
        this.currentBuilding = Object.assign({}, this.buildings[this.index]);
    };
    FindComponent.prototype.getIndex = function (bName) {
        //stupid loop to get index for display.
        //this will probably break at some point
        var num = 0;
        while (bName != this.buildings[num].name) {
            num = num + 1;
        }
        this.index = num;
    };
    FindComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.index = 0;
        this.authService.getBuildingList().subscribe(function (buildinglist) {
            _this.buildings = buildinglist;
            //default, otherwise AS wont work until we change and change back.
            //not sure if its better to do it like this, or like in onChange(num);
            _this.currentBuilding = _this.buildings[_this.index];
            //perhaps make this autodetect later, if weekend default to monday
            _this.monday = true;
            _this.tuesday = false;
            _this.wednesday = false;
            _this.thursday = false;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return FindComponent;
}());
FindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find',
        template: __webpack_require__(182),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FindComponent);

var Building = (function () {
    function Building() {
    }
    return Building;
}());
var Room = (function () {
    function Room() {
    }
    return Room;
}());
var Class = (function () {
    function Class() {
    }
    return Class;
}());
var _a, _b;
//# sourceMappingURL=find.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(183),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Login Successful', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['schedule']);
            }
            else {
                _this.flashMessage.show('No Match with that Email and Password', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(184),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(185),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    // What services that are being used to register
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            regdate: new Date()
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register user into DB
        //what is an observable
        //what is subscribing to it?
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have now registered now try logging in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(186),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = (function () {
    function ScheduleComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getSchedule().subscribe(function (schedule) {
            _this.user = schedule.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(187),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ScheduleComponent);

var _a, _b;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermanualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsermanualComponent = (function () {
    function UsermanualComponent() {
    }
    UsermanualComponent.prototype.ngOnInit = function () {
    };
    return UsermanualComponent;
}());
UsermanualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-usermanual',
        template: __webpack_require__(188),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], UsermanualComponent);

//# sourceMappingURL=usermanual.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else
            this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Service module for building, class, and classroom queries




var BuildingsService = (function () {
    function BuildingsService(http) {
        this.http = http;
    }
    BuildingsService.prototype.getBuildings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3000/buildings', {headers: headers}).map(this.extractData).catch(this.handleError);
        return this.http.get('buildings', { headers: headers }).map(this.extractData).catch(this.handleError);
    };
    BuildingsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BuildingsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return BuildingsService;
}());
BuildingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BuildingsService);

var _a;
//# sourceMappingURL=buildings.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getSchedule = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3000/users/schedule', {headers: headers}).map(res => res.json());
        return this.http.get('users/schedule', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBuildingList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3000/buildings', {headers: headers}).map(res => res.json());
        return this.http.get('buildings', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        //need to read id_token due to some update
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <body>\n    <app-navbar></app-navbar>\n      <div class = \"container\">\n        <flash-messages></flash-messages>  \n        <router-outlet></router-outlet>\n      </div>\n  </body>\n</html>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<h2 classs= \"page-header\">Dashboard</h2>\n<p>Set your schedule up here</p>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<head>\n  <title> Developer Guide </title>\n</head>\n\n<div>\n  <h2 class=\"page-header\" style=\"text-align: center;\">Developer Guide</h2>\n  \n  <h3 class=\"header\"> [What is Open Classroom?] </h3>\n  <body>\n    As computer science students, we have personally had issues finding open rooms to study in. So we created an app to let students know what classrooms and labs are open. Currently students have no easy way to find this out. They have to chance upon a room or search physically till they find one. We provide a listing of what rooms are open to make the lives of students easier. In addition, students will soon be able to upload their schedules and Open Classroom will suggest where they can go to study. There are also social elements in the works, where students can find other people to study with whether they are in the same class or taking a different section. Chat functionality and note sharing are also on the way. A means for users updating erroneous information and having it user moderated will also be implemented. This application will surely increase the student’s knowledgebase of where they can prepare for their next exam or simply get the help they need in a free space devoid of professor involvement.\n  </body>\n  \n  <h3 class=\"header\"> [Features] </h3>\n  <body>\n    <u>Currently Live</u>\n    <ul>\n      <li>Signup</li>\n      <li>Login/Logout</li>\n      <li>Get Open Classroom by Building</li>\n    </ul>\n    <u>In Progress</u>\n    <ul>\n      <li>Open Classroom based on Schedule</li>\n      <li>User Schedule Building</li>\n      <li>User Chatroom</li>\n      <li>User Group Boards</li>\n      <li>File Transfer between Users</li>\n    </ul>\n  </body>\n  \n  <h3 class=\"header\"> [Setup] </h3>\n  <body>\n    You can install the Open Classroom application by downloading the source code directly and unzipping the contents into a folder. Alternatively, you can also fork project. As this is a MEAN stack application, you must <strong>install the 4 dependencies</strong>:\n    <ol type = \"1\">\n      <li> <strong>MongoDB</strong> (via website)</li>\n      <li> <strong>Angular 2.0</strong> (via npm install)</li>\n      <li> <strong>ExpressJS</strong> (via npm install)</li>\n      <li> <strong>NodeJS</strong> (via website)</li>\n    </ol>\n    Furthermore, you must <strong>install (\"ng install\") the node_modules folder</strong> into these 3 folders <strong>using a terminal at that path location</strong>:\n    <ol type = \"1\">\n      <li> \"scraper\" folder</li>\n      <li> \"open-classroom\" folder</li>\n      <li> \"open-classroom/angular-src\" folder</li>\n    </ol>\n\n    <u>Populate your MongoDB Database with Classroom Content</u>\n    <ol type = \"1\">\n      <li> Navigate where you installed MongoDB (default location: C:\\Program Files\\MongoDB\\Server\\3.4\\bin) and <strong>run \"mongod.exe\"</strong> or the <strong>\"mongod.exe\" shortcut</strong> in the scraper folder.</li>\n      <li> Navigate to the \"scraper\" folder</li>\n      <li> In a terminal at this path location, run \"node scraper\"</li>\n    </ol>\n\n    <u>Run the Open Classroom Application</u>\n    <ol type = \"1\">\n      <li> Make sure <strong>\"mongod.exe\"</strong> is running (if not, run \"mongod.exe\" as seen above) </li>\n      <li> Open a new terminal in the <strong>\"open-classroom\"</strong> folder</li>\n      <li> Use the command <strong>\"npm start\"</strong> or <strong>\"npm serve\"</strong> or <strong>\"nodemon\"</strong> (see dependencies) </li>\n      <li> <strong>Open a web browser</strong> (Chrome, Edge, Firefox, etc.) and go to <strong>\"localhost:3000\".</strong> </li>\n    </ol>\n  </body>\n  \n  <h3 class=\"header\"> [Dependencies] </h3>\n  <body>\n    <u>Open Classroom uses the MEAN stack</u>\n    <ul>\n      <li><a href=\"https://www.mongodb.com/download-center\"> MongoDB </a></li>\n      <li><a href=\"https://github.com/angular/angular-cli\"> Angular 2.0</a></li>\n      <li><a href=\"https://github.com/expressjs/express\"> ExpressJS </a></li>\n      <li><a href=\"https://nodejs.org/en/download/\"> NodeJS </a></li>\n    </ul>\n    <i>(Angular 2.0 and ExpressJS are installed using \"ng install\". MongoDB and NodeJS shall be installed from their respective websites)</i>\n\n    <u>Helpful Applications</u>\n    <ul>\n      <li> <a href=\"https://nodemon.io/\">Nodemon</a> - an application that updates your project without having to restart \"npm start\" or \"ng serve\" </li>\n      <li> <a href=\"https://robomongo.org/\">Robomongo</a> - a MongoDB client that displays the data in your database (when connected)</li>\n    </ul>\n  </body>\n\n  <h3 class=\"header\"> [OpenClassroom Project Tree] </h3>\n  <body>\n    <ul>\n      <li>angular-src (where our angular project resides)\n        <ul>\n          <li>e2e (for testing)</li>\n          <li>node_modules (dependencies installed based on package.json)</li>\n          <li>src\n            <ul>\n              <li>app (where the pieces to make the application resides)\n                <ul>\n                  <li>components (modules that are added to the website)</li>\n                  <li>guards (protects routes)</li>\n                  <li>services (authenticate and distribute data)</li>\n                </ul>\n              </li>\n              <li>assets</li>\n              <li>environments</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n      <li>config (where JSON Web Token strategy and database is located)</li>\n      <li>models (what objects the project will be interacting with)</li>\n      <li>node_modules (dependencies installed based on package.json)</li>\n      <li>public (deployment files and starting page location)</li>\n      <li>routes (set up GET and POST requests here)</li>\n      <li>scraper (where CSULB population happens)\n        <ul>\n        <li>open-classroom-data (JSON file with pre-scraped buildings 2017)</li>\n        <li>node_modules (dependencies installed based on package.json)</li>\n        </ul>\n      </li>\n    </ul>\n  </body>\n\n  <h3 class=\"header\"> [How do I contribute?] </h3>\n  <body>\n    If you want to contribute to the project, feel free to report bugs, download the source code, or fork the project.\n    <ul>\n      <li>Source Code: <a href=\"https://github.com/jonathanpchan/openclassroom\">https://github.com/jonathanpchan/openclassroom</a></li>\n      <li>Issue Tracker: <a href=\"https://github.com/jonathanpchan/openclassroom/issues\">https://github.com/jonathanpchan/openclassroom/issues</a></li>\n    </ul>\n  </body>\n\n  <h3 class=\"header\"> [Support] </h3>\n  <body>\n    If you have any questions, feel free to contact us at <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a> \n  </body>\n</div>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<h1> <strong> Find Open Classroom </strong></h1>\n<button (click) = \"showMonday()\"> Monday</button> <button (click) = \"showTuesday()\"> Tuesday</button> <button (click) = \"showWednesday()\"> Wednesday</button> <button (click) = \"showThursday()\"> Thursday</button>\n\n\n\n<h3>  Select Your Building </h3>\n\n<!-- this creates a drop down list of buildings -->\n<select [(ngModel)]=\"$index\" (ngModelChange)=\"onChange($event)\">\n  <option *ngFor=\"let buildingName of buildings\"> {{buildingName.name}} </option>\n</select>\n\n<!-- I have not been able to get ng-options or ng-repeat to work-->\n<!-- <select ng-model=\"selectedBuilding\">\n<option ng-repeat=\"x in Buildings\" value=\"{{x.name}}\">{{x.name}}</option>\n</select> -->\n<div *ngIf = \"monday\">\n<h2>{{currentBuilding?.name}} Building</h2>\n\n      <!--if i create a day value i should be able to *ngIf this -->\n      <!-- <li><strong>Monday</strong></li> -->\n      <ul>\n        <li *ngFor=\"let room of currentBuilding?.rooms\">\n          <!-- display bug if room has no classes ex EN3-111 on monday-->\n          <!-- not sure how to display this based on if it has a value or not later on in the loops -->\n          {{currentBuilding.name}} - {{room.name}}\n          <ul>\n            <!--if i create a day value i should be able to *ngIf this -->\n            <!--will need to adapt for open times-->\n            <li *ngFor = \"let class of room.omon\">\n\n                Open From:  {{(class.st-class.st%60)/60}}:{{class.st%60 | number:'2.0-0'}} -\n                {{(class.et-class.et%60)/60}}:{{class.et%60 | number:'2.0-0'}}\n\n            </li>\n          </ul>\n        </li>\n    </ul>\n</div>\n\n<div *ngIf = \"tuesday\">\n<h2>{{currentBuilding?.name}} Building</h2>\n\n      <!--if i create a day value i should be able to *ngIf this -->\n      <!-- <li><strong>Monday</strong></li> -->\n  <ul>\n    <li *ngFor = \"let room of currentBuilding?.rooms\">\n      <!-- display bug if room has no classes ex EN3-111 on monday-->\n      {{currentBuilding.name}} - {{room.name}}\n      <ul>\n        <!--if i create a day value i should be able to *ngIf this -->\n        <!--will need to adapt for open times-->\n        <li *ngFor = \"let class of room.otue\">\n\n            Open From:  {{(class.st-class.st%60)/60}}:{{class.st%60 | number:'2.0-0'}} -\n            {{(class.et-class.et%60)/60}}:{{class.et%60 | number:'2.0-0'}}\n\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf = \"wednesday\">\n<h2>{{currentBuilding?.name}} Building</h2>\n\n      <!--if i create a day value i should be able to *ngIf this -->\n      <!-- <li><strong>Monday</strong></li> -->\n  <ul>\n    <li *ngFor = \"let room of currentBuilding?.rooms\">\n      <!-- display bug if room has no classes ex EN3-111 on monday-->\n      {{currentBuilding.name}} - {{room.name}}\n      <ul>\n        <!--if i create a day value i should be able to *ngIf this -->\n        <!--will need to adapt for open times-->\n        <li *ngFor = \"let class of room.owed\">\n\n            Open From:  {{(class.st-class.st%60)/60}}:{{class.st%60 | number:'2.0-0'}} -\n            {{(class.et-class.et%60)/60}}:{{class.et%60 | number:'2.0-0'}}\n\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf = \"thursday\">\n<h2>{{currentBuilding?.name}} Building</h2>\n\n      <!--if i create a day value i should be able to *ngIf this -->\n      <!-- <li><strong>Monday</strong></li> -->\n  <ul>\n    <li *ngFor = \"let room of currentBuilding?.rooms\">\n      <!-- display bug if room has no classes ex EN3-111 on monday-->\n      {{currentBuilding.name}} - {{room.name}}\n      <ul>\n        <!--if i create a day value i should be able to *ngIf this -->\n        <!--will need to adapt for open times-->\n        <li *ngFor = \"let class of room.othu\">\n\n            Open From:  {{(class.st-class.st%60)/60}}:{{class.st%60 | number:'2.0-0'}} -\n            {{(class.et-class.et%60)/60}}:{{class.et%60 | number:'2.0-0'}}\n\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Open Classroom</h1>\n  <p class=\"lead\">Find your study buddy here</p>\n  <div *ngIf = \"!authService.loggedIn()\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n  <div *ngIf = \"authService.loggedIn()\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/findclassroom']\">Find Open Classroom</a> <a class=\"btn btn-default\">Find Study Buddy</a>\n  </div>\n\n  <div>\n    <p>\n      <br /><a [routerLink]=\"['/usermanual']\">User Manual</a> | <a [routerLink]=\"['/devguide']\">Dev Guide</a> \n      <!--<a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"> for need authorization-->\n    </p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Find the Best Study Spot!</h3>\n    <p>Find open rooms by building or by schedule.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Study with fellow Study Buddies!</h3>\n    <p>Find others in the same program to study with.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Share Class Notes!</h3>\n    <p>Share notes to get an edge on the competition.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<!-- Modeled after: https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_collapse&stacked=h-->\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">OpenClassroom</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/schedule']\">My Schedule</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/findclassroom']\">Find Classroom</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/findbuddy']\">Find Buddy</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/messages']\">Messages</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/groups']\">Groups</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Settings</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register </a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">My Schedule</h2>\n  <ul class=\"list-group\">\n    <li class= \"list-group-item\">Username: {{user.username}}</li>\n    <li class= \"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<head>\n  <title> User manual </title>\n</head>\n\n<div>\n  <h2 class=\"page-header\" style=\"text-align: center;\">User Manual</h2>\n  <h3 class=\"header\"> [Overview] </h3>\n  <p class= \"tab\">\n    <body>\n    For a student, finding the ideal place to study can be a reoccurring issue.\n    With the inception of OpenClassroom, our goal is to minimize students' already\n    high stress levels by a simple solution to finding optimal classrooms to study in.\n    Our application will be able to search for classrooms based on a specific time,\n    a specific building, or by a \"now\" function that will list all available classrooms\n    that are open at the time of query.\n  </body></p>\n  <h3 class=\"header\"> [Registration] </h3>\n  <body>\n  To register, you will need a valid e-mail address.\n</body>\n  <ol type = \"1\">\n    <li> Click on the register tab on the top right corner of the navigation bar. </li>\n    <li> Enter your name.</li>\n    <li> Enter a username. (Other users will be able to identify you by this.)</li>\n    <li> Enter a valid e-mail address.</li>\n    <li> Create a password.</li>\n    <li> Click submit!</li>\n    <li> Congratulations! You will now be able to login and access the services provided.</li>\n  </ol>\n\n  <h3 class=\"header\"> [Login] </h3>\n  <body>\n  To login, you will need to have a registered account.\n  </body>\n  <ol type = \"1\">\n    <li> Click on the login tab on the top right corner of the navigation bar. </li>\n    <li> Enter your e-mail address.</li>\n    <li> Enter your password.</li>\n    <li> Click submit!</li>\n  </ol>\n</div>\n\n<h3 class=\"header\"> [FAQ] </h3>\n<ol type = \"1\">\n  <li> When will the application be released to the public? </li>\n    <ul>\n      <li> We are looking to launch in December, 2017! </li>\n    </ul>\n  <li> How can I become a part of the development team? </li>\n    <ul>\n      <li> Please refer to our developer guide!  </li>\n    </ul>\n  <li> I can't login! What should I do?</li>\n    <ul>\n      <li> Please make sure you're using the credentials you created your account\n    with, and if you are still unable to access your account, please contact us at\n    <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a>\n      </li>\n    </ul>\n</ol>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(179),
        styles: [__webpack_require__(168)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_schedule_schedule_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_usermanual_usermanual_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_devguide_devguide_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_find_find_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_buildings_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Automatically written in using "ng g component ________" in the components folder










// manually written after using ng g service _______"





// Routes for the components (will be protected later)
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_10__components_schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'usermanual', component: __WEBPACK_IMPORTED_MODULE_12__components_usermanual_usermanual_component__["a" /* UsermanualComponent */] },
    { path: 'devguide', component: __WEBPACK_IMPORTED_MODULE_13__components_devguide_devguide_component__["a" /* DevguideComponent */] },
    { path: 'findclassroom', component: __WEBPACK_IMPORTED_MODULE_14__components_find_find_component__["a" /* FindComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_usermanual_usermanual_component__["a" /* UsermanualComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_devguide_devguide_component__["a" /* DevguideComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_find_find_component__["a" /* FindComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_buildings_service__["a" /* BuildingsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(180),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevguideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevguideComponent = (function () {
    function DevguideComponent() {
    }
    DevguideComponent.prototype.ngOnInit = function () {
    };
    return DevguideComponent;
}());
DevguideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devguide',
        template: __webpack_require__(181),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], DevguideComponent);

//# sourceMappingURL=devguide.component.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.bundle.js.map