webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(185),
        styles: [__webpack_require__(173)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_usermanual_usermanual_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_devguide_devguide_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_buildings_service__ = __webpack_require__(68);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'usermanual', component: __WEBPACK_IMPORTED_MODULE_13__components_usermanual_usermanual_component__["a" /* UsermanualComponent */] },
    { path: 'devguide', component: __WEBPACK_IMPORTED_MODULE_14__components_devguide_devguide_component__["a" /* DevguideComponent */] },
    { path: 'findclassroom', component: __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__["a" /* FindComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_usermanual_usermanual_component__["a" /* UsermanualComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_devguide_devguide_component__["a" /* DevguideComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__["a" /* FindComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__services_buildings_service__["a" /* BuildingsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(186),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(187),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], DevguideComponent);

//# sourceMappingURL=devguide.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function FindComponent(buildingService, router, flashMessage) {
        this.buildingService = buildingService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.roomsList = [];
        this.timeSliderConfig = {
            behaviour: 'drag',
            connect: true,
            start: [0, 24],
            keyboard: true,
            step: 0.5,
            pageSteps: 2,
            range: {
                min: 0,
                max: 24
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 6,
                stepped: true
            }
        };
    }
    FindComponent.prototype.ngOnInit = function () { };
    FindComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.name);
        console.log(this.day);
        if (this.name == null || this.day == null) {
            this.flashMessage.show('Please select the building and day', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.buildingService.getBuildings(this.name).subscribe(function (buildingList) {
            _this.roomsList = [];
            var roomsJSON = buildingList.OpenBuilding[0].rooms;
            for (var room in roomsJSON) {
                var arr = new Array(180);
                var timesJSON = roomsJSON[room][_this.day];
                for (var time in timesJSON) {
                    for (var i = timesJSON[time].st / 5 - 84; i < timesJSON[time].et / 5 - 84; i++) {
                        arr[i] = 1;
                    }
                }
                _this.roomsList.push({ name: roomsJSON[room].name, room: arr });
            }
            document.getElementById("input").style.display = "none";
            document.getElementById("slider").style.display = "none";
            document.getElementById("table").style.display = "block";
            document.getElementById("back").style.display = "block";
        }, function (err) {
            console.log(err);
        });
    };
    // timeFormat(time)
    // {
    //   var t;
    //   var minutes = time;
    //   if(minutes>=780)    {
    //     minutes-=720;//if its 13 o'clock you take off 12 hours or 720 mins
    //   }
    //   // TODO: remove this for deployment as it's unneeded
    //   else if(minutes < 60)    {
    //     minutes+=720;//adding 12 hours if its before 1 AM
    //   }
    //   t = (minutes - minutes%60)/60 + ":";//calculating hours
    //   if(minutes%60==0)    {//formating minutes toFixed and to Prevision dont work
    //     t += "00";
    //   }else    {
    //     t += time%60;
    //   }
    //   if(time>720)    {//setting AM/PM based on the original time
    //     t+= " PM";
    //   }
    //   else    {
    //     t+= " AM";
    //   }
    //   return t;
    // }
    FindComponent.prototype.onBack = function () {
        document.getElementById("input").style.display = "block";
        document.getElementById("slider").style.display = "block";
        document.getElementById("table").style.display = "none";
        document.getElementById("back").style.display = "none";
    };
    FindComponent.prototype.getClass = function (value) {
        return 'opentime';
    };
    FindComponent.prototype.onChange = function (value) {
        console.log('Value changed to', value);
    };
    return FindComponent;
}());
FindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find',
        template: __webpack_require__(188),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FindComponent);

var openRooms = (function () {
    function openRooms() {
    }
    return openRooms;
}());
var _a, _b, _c;
//# sourceMappingURL=find.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(15);
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
        template: __webpack_require__(189),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(20);
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
        template: __webpack_require__(190),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(39);
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
        template: __webpack_require__(191),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(20);
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
        template: __webpack_require__(192),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(15);
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
        template: __webpack_require__(193),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ScheduleComponent);

var _a, _b;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(194),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], UsermanualComponent);

//# sourceMappingURL=usermanual.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(15);
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

/***/ 114:
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

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(119);
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
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/register', user, {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/authenticate', user, {headers: headers}).map(res => res.json());
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
        return this.http.get('http://localhost:3000/users/schedule', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('users/schedule', {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.getBuildingList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/buildings', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('buildings', {headers: headers}).map(res => res.json());
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
exports.push([module.i, "table {\r\n    width : 2000px;\r\n    height : auto;\r\n}\r\n\r\ntr{\r\n  height: 20px;\r\n}\r\n\r\ntd{\r\n  border-collapse: collapse;\r\n}\r\n\r\n.tablecontainer {\r\n    width : 100%;\r\n    height : 100%;\r\n    overflow : auto;\r\n    padding : 0, 0, 0, 0;\r\n}\r\n\r\n.opentime {\r\n    background-color : #81ea9d;\r\n    padding : 5px, 5px, 5px, 5px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.closedtime {\r\n    background-color : #ed5d50;\r\n    padding : 5px, 5px, 5px, 5px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.five-minute-chunk{\r\n\r\n}\r\n\r\n.left-column{\r\n position: -webkit-sticky;\r\n position: sticky;\r\n left: 0;\r\n background-color: #ffffff;\r\n width: 75px;\r\n border: 2px solid black;\r\n text-align: center;\r\n}\r\n\r\n.left-column:hover {\r\n  background-color: #76a8f7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body>\r\n    <app-navbar></app-navbar>\r\n      <div class = \"container\">\r\n        <flash-messages></flash-messages>  \r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<h2 classs= \"page-header\">Dashboard</h2>\r\n<p>Set your schedule up here</p>\r\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title> Developer Guide </title>\r\n</head>\r\n\r\n<div>\r\n  <h2 class=\"page-header\" style=\"text-align: center;\">Developer Guide</h2>\r\n  \r\n  <h3 class=\"header\"> [What is Open Classroom?] </h3>\r\n  <body>\r\n    As computer science students, we have personally had issues finding open rooms to study in. So we created an app to let students know what classrooms and labs are open. Currently students have no easy way to find this out. They have to chance upon a room or search physically till they find one. We provide a listing of what rooms are open to make the lives of students easier. In addition, students will soon be able to upload their schedules and Open Classroom will suggest where they can go to study. There are also social elements in the works, where students can find other people to study with whether they are in the same class or taking a different section. Chat functionality and note sharing are also on the way. A means for users updating erroneous information and having it user moderated will also be implemented. This application will surely increase the student’s knowledgebase of where they can prepare for their next exam or simply get the help they need in a free space devoid of professor involvement.\r\n  </body>\r\n  \r\n  <h3 class=\"header\"> [Features] </h3>\r\n  <body>\r\n    <u>Currently Live</u>\r\n    <ul>\r\n      <li>Signup</li>\r\n      <li>Login/Logout</li>\r\n      <li>Get Open Classroom by Building</li>\r\n    </ul>\r\n    <u>In Progress</u>\r\n    <ul>\r\n      <li>Open Classroom based on Schedule</li>\r\n      <li>User Schedule Building</li>\r\n      <li>User Chatroom</li>\r\n      <li>User Group Boards</li>\r\n      <li>File Transfer between Users</li>\r\n    </ul>\r\n  </body>\r\n  \r\n  <h3 class=\"header\"> [Setup] </h3>\r\n  <body>\r\n    You can install the Open Classroom application by downloading the source code directly and unzipping the contents into a folder. Alternatively, you can also fork project. As this is a MEAN stack application, you must <strong>install the 4 dependencies</strong>:\r\n    <ol type = \"1\">\r\n      <li> <strong>MongoDB</strong> (via website)</li>\r\n      <li> <strong>Angular 2.0</strong> (via npm install)</li>\r\n      <li> <strong>ExpressJS</strong> (via npm install)</li>\r\n      <li> <strong>NodeJS</strong> (via website)</li>\r\n    </ol>\r\n    Furthermore, you must <strong>install (\"ng install\") the node_modules folder</strong> into these 2 folders <strong>using a terminal at that path location</strong>:\r\n    <ol type = \"1\">\r\n      <li> \"openclassroom\" folder</li>\r\n      <li> \"openclassroom/angular-src\" folder</li>\r\n    </ol>\r\n\r\n    <u>Populate your MongoDB Database with Classroom Content</u>\r\n    <ol type = \"1\">\r\n      <li> Navigate where you installed MongoDB (default location: C:\\Program Files\\MongoDB\\Server\\3.4\\bin) and <strong>run \"mongod.exe\"</strong> or the <strong>\"mongod.exe\" shortcut</strong> in the scraper folder</li>\r\n      <li> Navigate to the \"scraper\" folder</li>\r\n      <li> In a terminal at this path location, run \"node scraper\"</li>\r\n    </ol>\r\n\r\n    <u>Run the Open Classroom Application on Localhost</u>\r\n    <ol type = \"1\">\r\n      <li> Make sure <strong>\"mongod.exe\"</strong> is running (if not, run \"mongod.exe\" as seen above) </li>\r\n      <li> Open a new terminal in the <strong>\"openclassroom\"</strong> folder</li>\r\n      <li> Use the command <strong>\"npm start\"</strong> or <strong>\"npm serve\"</strong> or <strong>\"nodemon\"</strong> (see dependencies) </li>\r\n      <li> <strong>Open a web browser</strong> (Chrome, Edge, Firefox, etc.) and go to <strong>\"localhost:3000\"</strong> </li>\r\n    </ol>\r\n  </body>\r\n  \r\n  <h3 class=\"header\"> [Dependencies] </h3>\r\n  <body>\r\n    <u>Open Classroom uses the MEAN stack</u>\r\n    <ul>\r\n      <li><a href=\"https://www.mongodb.com/download-center\"> MongoDB </a></li>\r\n      <li><a href=\"https://github.com/angular/angular-cli\"> Angular 2.0</a></li>\r\n      <li><a href=\"https://github.com/expressjs/express\"> ExpressJS </a></li>\r\n      <li><a href=\"https://nodejs.org/en/download/\"> NodeJS </a></li>\r\n    </ul>\r\n    <i>(Angular 2.0 and ExpressJS are installed using \"ng install\". MongoDB and NodeJS shall be installed from their respective websites.)</i> \r\n    <br>\r\n    <br>\r\n    <u>Helpful Applications</u>\r\n    <ul>\r\n      <li> <a href=\"https://nodemon.io/\">Nodemon</a> - an application that updates your project without having to restart \"npm start\" or \"ng serve\" </li>\r\n      <li> <a href=\"https://robomongo.org/\">Robomongo</a> - a MongoDB client that displays the data in your database (when connected)</li>\r\n    </ul>\r\n  </body>\r\n\r\n  <h3 class=\"header\"> [OpenClassroom Project Tree] </h3>\r\n  <body>\r\n    <ul>\r\n      <li>angular-src (where our angular project resides)\r\n        <ul>\r\n          <li>e2e (for testing)</li>\r\n          <li>node_modules (dependencies installed based on package.json)</li>\r\n          <li>src\r\n            <ul>\r\n              <li>app (where the pieces to make the application resides)\r\n                <ul>\r\n                  <li>components (modules that are added to the website)</li>\r\n                  <li>guards (protects routes)</li>\r\n                  <li>services (authenticate and distribute data)</li>\r\n                </ul>\r\n              </li>\r\n              <li>assets</li>\r\n              <li>environments</li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>config (where JSON Web Token strategy and database is located)</li>\r\n      <li>models (what objects the project will be interacting with)</li>\r\n      <li>node_modules (dependencies installed based on package.json)</li>\r\n      <li>public (deployment files and starting page location)</li>\r\n      <li>routes (set up GET and POST requests here)</li>\r\n      <li>scraper (where CSULB population happens)\r\n        <ul>\r\n        <li>open-classroom-data (JSON file with pre-scraped buildings 2017)</li>\r\n        <li>node_modules (dependencies installed based on package.json)</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </body>\r\n\r\n  <h3 class=\"header\"> [How do I contribute?] </h3>\r\n  <body>\r\n    If you want to contribute to the project, feel free to report bugs, download the source code, or fork the project.\r\n    <ul>\r\n      <li>Source Code: <a href=\"https://github.com/jonathanpchan/openclassroom\">https://github.com/jonathanpchan/openclassroom</a></li>\r\n      <li>Issue Tracker: <a href=\"https://github.com/jonathanpchan/openclassroom/issues\">https://github.com/jonathanpchan/openclassroom/issues</a></li>\r\n    </ul>\r\n  </body>\r\n\r\n  <h3 class=\"header\"> [Support] </h3>\r\n  <body>\r\n    If you have any questions, feel free to contact us at <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a> \r\n  </body>\r\n</div>\r\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Open Buildings</h2>\r\n<form (submit)=\"onSubmit()\" id=\"input\" style=\"display: block\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" >\r\n      <option selected disabled hidden>Choose here</option>\r\n      <option value=\"AS\">AS</option>\r\n      <option value=\"CBA\">CBA</option>\r\n      <option value=\"CTS\">CTS</option>\r\n      <option value=\"DC\">DC</option>\r\n      <option value=\"DESN\">DESN</option>\r\n      <option value=\"ECS\">ECS</option>\r\n      <option value=\"ED2\">ED2</option>\r\n      <option value=\"EED\">EED</option>\r\n      <option value=\"EN2\">EN2</option>\r\n      <option value=\"EN3\">EN3</option>\r\n      <option value=\"EN4\">EN4</option>\r\n      <option value=\"ET\">ET</option>\r\n      <option value=\"FA1\">FA1</option>\r\n      <option value=\"FA2\">FA2</option>\r\n      <option value=\"FA3\">FA3</option>\r\n      <option value=\"FA4\">FA4</option>\r\n      <option value=\"FCS\">FCS</option>\r\n      <option value=\"FLD\">FLD</option>\r\n      <option value=\"FO2\">FO2</option>\r\n      <option value=\"HHS1\">HHS1</option>\r\n      <option value=\"HSCI\">HSCI</option>\r\n      <option value=\"HSD\">HSD</option>\r\n      <option value=\"KIN\">KIN</option>\r\n      <option value=\"LA1\">LA1</option>\r\n      <option value=\"LA2\">LA2</option>\r\n      <option value=\"LA3\">LA3</option>\r\n      <option value=\"LA4\">LA4</option>\r\n      <option value=\"LA5\">LA5</option>\r\n      <option value=\"LAB\">LAB</option>\r\n      <option value=\"LCH\">LCH</option>\r\n      <option value=\"LH\">LH</option>\r\n      <option value=\"MHB\">MHB</option>\r\n      <option value=\"MIC\">MIC</option>\r\n      <option value=\"MLSC\">MLSC</option>\r\n      <option value=\"MM\">MM</option>\r\n      <option value=\"NUR\">NUR</option>\r\n      <option value=\"OFF\">OFF</option>\r\n      <option value=\"PH1\">PH1</option>\r\n      <option value=\"PSY\">PSY</option>\r\n      <option value=\"RNG\">RNG</option>\r\n      <option value=\"RLC\">RLC</option>\r\n      <option value=\"SPA\">SPA</option>\r\n      <option value=\"SWM\">SWM</option>\r\n      <option value=\"TA\">TA</option>\r\n      <option value=\"UMC\">UMC</option>\r\n      <option value=\"USU\">USU</option>\r\n      <option value=\"UT\">UT</option>\r\n      <option value=\"UTC\">UTC</option>\r\n      <option value=\"VEC\">VEC</option>\r\n  </select>\r\n    </div>\r\n  <div class=\"form-group\">\r\n    <label>Day</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"day\" name=\"day\" >\r\n      <option value=\"omon\">Monday</option>\r\n      <option value=\"otue\">Tuesday</option>\r\n      <option value=\"owed\">Wednesday</option>\r\n      <option value=\"othu\">Thursday</option>\r\n    </select>\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\">  \r\n</form>\r\n<nouislider [config]=\"timeSliderConfig\" [(ngModel)]=\"timeRange\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{standalone: true}\" id=\"slider\"></nouislider>\r\n\r\n<div class=\"tablecontainer\" id=\"table\" style=\"display: none\">\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <th></th>\r\n        <!--<td colspan=\"12\">12:00 AM</td>\r\n        <td colspan=\"12\">1:00 AM</td>\r\n        <td colspan=\"12\">2:00 AM</td>\r\n        <td colspan=\"12\">3:00 AM</td>\r\n        <td colspan=\"12\">4:00 AM</td>\r\n        <td colspan=\"12\">5:00 AM</td>\r\n        <td colspan=\"12\">6:00 AM</td> -->\r\n        <th colspan=\"12\">7:00 AM</th>\r\n        <th colspan=\"12\">8:00 AM</th>\r\n        <th colspan=\"12\">9:00 AM</th>\r\n        <th colspan=\"12\">10:00 AM</th>\r\n        <th colspan=\"12\">11:00 AM</th>\r\n        <th colspan=\"12\">12:00 PM</th>\r\n        <th colspan=\"12\">1:00 PM</th>\r\n        <th colspan=\"12\">2:00 PM</th>\r\n        <th colspan=\"12\">3:00 PM</th>\r\n        <th colspan=\"12\">4:00 PM</th>\r\n        <th colspan=\"12\">5:00 PM</th>\r\n        <th colspan=\"12\">6:00 PM</th>\r\n        <th colspan=\"12\">7:00 PM</th>\r\n        <th colspan=\"12\">8:00 PM</th>\r\n        <th colspan=\"12\">9:00 PM</th>\r\n        <!-- <th colspan=\"12\">10:00 PM</td> -->\r\n        <!--<td colspan=\"12\">11:00 PM</td>-->\r\n      </tr>\r\n      <tr class=\"classroom\" *ngFor=\"let rooms of roomsList\">\r\n        <th class=\"left-column\">{{name}}-{{rooms.name}}</th>\r\n        <!-- Potential place for index of for loop -->\r\n        <td *ngFor=\"let room of rooms?.room\" [ngClass]=\"room ? 'opentime' : 'closedtime'\"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<input type=\"button\" class=\"btn btn-primary\" (click)=\"onBack()\" id=\"back\" style=\"display: none\" value=\"Back\">"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Open Classroom</h1>\r\n  <p class=\"lead\">Find your study buddy here</p>\r\n  <div *ngIf = \"!authService.loggedIn()\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n  </div>\r\n  <div *ngIf = \"authService.loggedIn()\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/findclassroom']\">Find Open Classroom</a> <a class=\"btn btn-default\">Find Study Buddy</a>\r\n  </div>\r\n\r\n  <div>\r\n    <p>\r\n      <br /><a [routerLink]=\"['/usermanual']\">User Manual</a> | <a [routerLink]=\"['/devguide']\">Dev Guide</a> \r\n      <!--<a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"> for need authorization-->\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h3>Find the Best Study Spot!</h3>\r\n    <p>Find open rooms by building or by schedule.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Study with fellow Study Buddies!</h3>\r\n    <p>Find others in the same program to study with.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Share Class Notes!</h3>\r\n    <p>Share notes to get an edge on the competition.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>\r\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<!-- Modeled after: https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_collapse&stacked=h-->\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">OpenClassroom</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/schedule']\">My Schedule</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/findclassroom']\">Find Classroom</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/findbuddy']\">Find Buddy</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/messages']\">Messages</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/groups']\">Groups</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Settings</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register </a></li>\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">My Schedule</h2>\r\n  <ul class=\"list-group\">\r\n    <li class= \"list-group-item\">Username: {{user.username}}</li>\r\n    <li class= \"list-group-item\">Email: {{user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title> User manual </title>\r\n</head>\r\n\r\n<div>\r\n  <h2 class=\"page-header\" style=\"text-align: center;\">User Manual</h2>\r\n  <h3 class=\"header\"> [Overview] </h3>\r\n  <p class= \"tab\">\r\n    <body>\r\n    For a student, finding the ideal place to study can be a reoccurring issue.\r\n    With the inception of OpenClassroom, our goal is to minimize students' already\r\n    high stress levels by a simple solution to finding optimal classrooms to study in.\r\n    Our application will be able to search for classrooms based on a specific time,\r\n    a specific building, or by a \"now\" function that will list all available classrooms\r\n    that are open at the time of query.\r\n  </body></p>\r\n  <h3 class=\"header\"> [Registration] </h3>\r\n  <body>\r\n  To register, you will need a valid e-mail address.\r\n</body>\r\n  <ol type = \"1\">\r\n    <li> Click on the register tab on the top right corner of the navigation bar. </li>\r\n    <li> Enter your name.</li>\r\n    <li> Enter a username. (Other users will be able to identify you by this.)</li>\r\n    <li> Enter a valid e-mail address.</li>\r\n    <li> Create a password.</li>\r\n    <li> Click submit!</li>\r\n    <li> Congratulations! You will now be able to login and access the services provided.</li>\r\n  </ol>\r\n\r\n  <h3 class=\"header\"> [Login] </h3>\r\n  <body>\r\n  To login, you will need to have a registered account.\r\n  </body>\r\n  <ol type = \"1\">\r\n    <li> Click on the login tab on the top right corner of the navigation bar. </li>\r\n    <li> Enter your e-mail address.</li>\r\n    <li> Enter your password.</li>\r\n    <li> Click submit!</li>\r\n  </ol>\r\n</div>\r\n\r\n<h3 class=\"header\"> [FAQ] </h3>\r\n<ol type = \"1\">\r\n  <li> When will the application be released to the public? </li>\r\n    <ul>\r\n      <li> We are looking to launch in December, 2017! </li>\r\n    </ul>\r\n  <li> How can I become a part of the development team? </li>\r\n    <ul>\r\n      <li> Please refer to our developer guide!  </li>\r\n    </ul>\r\n  <li> I can't login! What should I do?</li>\r\n    <ul>\r\n      <li> Please make sure you're using the credentials you created your account\r\n    with, and if you are still unable to access your account, please contact us at\r\n    <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a>\r\n      </li>\r\n    </ul>\r\n</ol>\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(201);
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
    BuildingsService.prototype.getBuildings = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/buildings', { name: name }).map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.post('buildings', {name}).map(res => res.json()).catch(this.handleError);
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

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.bundle.js.map