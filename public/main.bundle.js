webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 117;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(141);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 124:
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
    AppComponent.prototype.ngOnInit = function () {
        window.onscroll = this.scrollUp;
    };
    AppComponent.prototype.toTop = function () {
        document.body.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    };
    AppComponent.prototype.scrollUp = function () {
        if (document.body.scrollTop > 30 || document.scrollingElement.scrollTop > 30) {
            document.getElementById("to-top").style.display = "block";
        }
        else {
            document.getElementById("to-top").style.display = "none";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(234),
        styles: [__webpack_require__(213)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_schedule_schedule_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_usermanual_usermanual_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_devguide_devguide_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_find_find_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_find_home_find_home_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_buildings_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_chat_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_find_now_find_now_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_find_times_find_times_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_course_course_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_studybuddy_studybuddy_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_room_room_component__ = __webpack_require__(136);
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
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_10__components_schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'usermanual', component: __WEBPACK_IMPORTED_MODULE_12__components_usermanual_usermanual_component__["a" /* UsermanualComponent */] },
    { path: 'devguide', component: __WEBPACK_IMPORTED_MODULE_13__components_devguide_devguide_component__["a" /* DevguideComponent */] },
    { path: 'findclassroom', component: __WEBPACK_IMPORTED_MODULE_15__components_find_home_find_home_component__["a" /* FindHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'findclassroom/now', component: __WEBPACK_IMPORTED_MODULE_22__components_find_now_find_now_component__["a" /* FindNowComponent */] },
    { path: 'findclassroom/building', component: __WEBPACK_IMPORTED_MODULE_14__components_find_find_component__["a" /* FindComponent */] },
    { path: 'findclassroom/time', component: __WEBPACK_IMPORTED_MODULE_23__components_find_times_find_times_component__["a" /* FindTimesComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__["a" /* ChatComponent */] },
    { path: 'studybuddy', component: __WEBPACK_IMPORTED_MODULE_26__components_studybuddy_studybuddy_component__["a" /* StudybuddyComponent */] },
    { path: '**', redirectTo: '' }
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
            __WEBPACK_IMPORTED_MODULE_10__components_schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_usermanual_usermanual_component__["a" /* UsermanualComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_devguide_devguide_component__["a" /* DevguideComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_find_find_component__["a" /* FindComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderComponent"],
            __WEBPACK_IMPORTED_MODULE_15__components_find_home_find_home_component__["a" /* FindHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_find_now_find_now_component__["a" /* FindNowComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_find_times_find_times_component__["a" /* FindTimesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_studybuddy_studybuddy_component__["a" /* StudybuddyComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_room_room_component__["a" /* RoomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__services_buildings_service__["a" /* BuildingsService */], __WEBPACK_IMPORTED_MODULE_21__services_chat_service__["a" /* ChatService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    // ABOVE IS TESTING ITEM
    function ChatComponent(chatService, flashMessage) {
        this.chatService = chatService;
        this.flashMessage = flashMessage;
        this.sender = JSON.parse(localStorage.getItem('user'))["name"];
        this.sendee = null;
        this.messages = [];
        this.message = null;
        this.connection = null;
        // BELOW IS TESTING ITEM
        // names must be initialized to an empty string
        this.names = ['jon', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick', 'syed', 'jonC', 'nick'];
        this.showBack = false;
    }
    ChatComponent.prototype.ngOnInit = function () { };
    // Join room (Leave room before joining new room)
    ChatComponent.prototype.joinRoom = function (sendee) {
        var _this = this;
        // Back join room
        this.sendee = sendee;
        this.showBack = true;
        this.chatService.createRoom(this.sender, sendee).subscribe(function (room) {
            _this.currentRoom = room[0]._id;
            // Front join room
            _this.chatService.joinRoom(_this.currentRoom);
            // Back get messages
            _this.chatService.getMessages(_this.currentRoom).subscribe(function (messages) {
                // Set new room
                _this.messages = [];
                // Populate messages
                for (var message in messages[0].messages) {
                    _this.messages.push(messages[0].messages[message]);
                }
            });
            // Subscribe to real time messages
            // Front get messages
            if (_this.connection == null) {
                _this.connection = _this.chatService.getSubscription().subscribe(function (payload) {
                    _this.messages.push(payload);
                });
            }
            _this.message = '';
        });
    };
    // Send message (REQUIRES JOINROOM CALLED FIRST)
    ChatComponent.prototype.sendMessage = function () {
        console.log(this.showBack);
        // Make sure there is a connection, there is a message, and the message is not just white space
        if (this.connection == null || this.sendee == null || this.message == null || this.message.trim().length == 0) {
            this.flashMessage.show('Cannot send message. Did you join a room?', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            // Send message to room with message
            this.chatService.sendMessage(this.currentRoom, this.sender, this.message).subscribe();
        }
        // Clear message
        this.message = '';
    };
    ChatComponent.prototype.back = function () {
        this.sendee = null;
        this.showBack = false;
        this.messages = [];
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(235),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseComponent = (function () {
    function CourseComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.courseChoice = null;
        this.confirm = false;
        this.afterConfirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    // ========== Get Options ===============
    // Get the course names
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseNameOptions = [];
        this.authService.getCourses().subscribe(function (names) {
            for (var name in names.Courses) {
                _this.courseNameOptions.push(names.Courses[name].name);
            }
        }, function (err) {
            console.log(err);
        });
    };
    // Get the course numbers
    CourseComponent.prototype.getCourseNumOptions = function () {
        if (this.courseNameOptions != null) {
            // Reset the data that is displayed
            this.courseNumOptions = [];
            this.courseChoiceOptions = null;
            // Populate current course array to point to specific course name
            this.currCourseName = this.courseAll;
            for (var all in this.currCourseName) {
                if (this.currCourseName[all].name == this.courseName) {
                    this.currCourseName = this.currCourseName[all]["courses"];
                    break;
                }
            }
            // Populate the course num options from current course array
            for (var courses in this.currCourseName) {
                this.courseNumOptions.push(this.currCourseName[courses]["num"]);
            }
            // Made display sorted and unique
            this.courseNumOptions = this.makeUnique(this.courseNumOptions);
        }
    };
    // Get the course options
    CourseComponent.prototype.getCourseChoiceOptions = function () {
        if (this.courseNumOptions != null) {
            this.courseChoiceOptions = [];
            // Populate the choices the user can pick for the class they want to add
            for (var courses in this.currCourseName) {
                if (this.currCourseName[courses].num == this.courseNum) {
                    this.courseChoiceOptions.push(this.currCourseName[courses]);
                }
            }
        }
    };
    // Gets all courses and puts them into courseAll as "cache"
    CourseComponent.prototype.cache = function () {
        var _this = this;
        if (this.courseAll == null) {
            this.courseAll = [];
            this.authService.getCourses().subscribe(function (all) {
                for (var course in all.Courses) {
                    _this.courseAll.push(all.Courses[course]);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    // ========== Add ===============
    CourseComponent.prototype.onBack = function () {
        this.afterConfirm.emit(false);
    };
    // On submit, show alternative data (If missing data, then alert)
    CourseComponent.prototype.onSubmit = function () {
        if (this.courseAll && this.courseNameOptions && this.courseNumOptions && this.courseChoiceOptions && this.courseChoice) {
            this.confirmMessage = this.courseName + " " + this.courseChoice.num + " Class # " + this.courseChoice.sec + " " + this.courseChoice.day + " " + this.courseChoice.time + " " + this.courseChoice.location;
            this.confirm = true;
        }
        else {
            this.confirm = false;
            this.flashMessage.show('Please complete all course fields.', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    // Determine what to do if add or cancel
    CourseComponent.prototype.addClick = function (answer) {
        var _this = this;
        if (answer) {
            // Add on back end
            var coursePayload = {
                email: JSON.parse(localStorage.getItem('user')).email,
                crsID: this.courseChoice.sec
            };
            this.authService.addScheduleItem(coursePayload).subscribe(function (success) {
                // Don't add to front end
                if (success.length == 0) {
                    _this.flashMessage.show('Course already in schedule.', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.afterConfirm.emit(false);
                }
                else {
                    var add = { name: _this.courseName, num: _this.courseChoice.num, sec: _this.courseChoice.sec, day: _this.courseChoice.day, time: _this.courseChoice.time, location: _this.courseChoice.location, prof: _this.courseChoice.prof };
                    _this.afterConfirm.emit(add);
                    _this.flashMessage.show('Course successfully added.', { cssClass: 'alert-success', timeout: 3000 });
                }
            });
        }
        else {
            this.afterConfirm.emit(false);
        }
    };
    // http://rosettacode.org/wiki/Remove_duplicate_elements#JavaScript
    // Take a SORTED array, determine unique values, and then return
    CourseComponent.prototype.makeUnique = function (arr) {
        var tempArr = arr;
        for (var i = 1; i < tempArr.length;) {
            if (tempArr[i - 1] === tempArr[i]) {
                tempArr.splice(i, 1);
            }
            else {
                i++;
            }
        }
        return tempArr;
    };
    return CourseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CourseComponent.prototype, "afterConfirm", void 0);
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course',
        template: __webpack_require__(236),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], CourseComponent);

var _a, _b, _c;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ 128:
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
        template: __webpack_require__(237),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], DevguideComponent);

//# sourceMappingURL=devguide.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindHomeComponent = (function () {
    function FindHomeComponent(buildingService, flashMessage) {
        this.buildingService = buildingService;
        this.flashMessage = flashMessage;
        // Chosen building to be queried (passed down components)
        this.building = "";
        // All building names possible
        this.buildingNames = [];
    }
    // 1) Display available building names
    FindHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildingService.getBuildingNames().subscribe(function (names) {
            for (var name in names.OpenBuilding) {
                _this.buildingNames.push(names.OpenBuilding[name].name);
            }
        }, function (err) {
            console.log(err);
        });
    };
    // 2) Display option buttons
    FindHomeComponent.prototype.displayButtons = function () {
        if (document.getElementById("buttons").style.display == "none") {
            document.getElementById("buttons").style.display = "block";
            document.getElementById("all").style.display = "none";
            document.getElementById("table").style.display = "none";
            document.getElementById("table-2").style.display = "none";
            document.getElementById("now").style.display = "none";
            document.getElementById("times").style.display = "none";
            document.getElementById("room").style.display = "none";
            document.getElementById("room2").style.display = "none";
            document.getElementById("room3").style.display = "none";
        }
    };
    // 3) Display button depending on id
    FindHomeComponent.prototype.displayOption = function (option) {
        if (this.building == "") {
            this.flashMessage.show('Please choose a building to find an Open Classroom.', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            if (document.getElementById("buttons").style.display == "block") {
                document.getElementById("buttons").style.display = "none";
                document.getElementById(option).style.display = "block";
                if (option == "now") {
                    this.nowComponent.showNow();
                }
            }
        }
    };
    return FindHomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__["a" /* FindNowComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__["a" /* FindNowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__["a" /* FindNowComponent */]) === "function" && _a || Object)
], FindHomeComponent.prototype, "nowComponent", void 0);
FindHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-home',
        template: __webpack_require__(238),
        styles: [__webpack_require__(217)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__["a" /* FindNowComponent */]] // Needed to function call the FindNowComponent
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FindHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=find-home.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindTimesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindTimesComponent = (function () {
    // Need to pass argument so it can be used in functions below
    function FindTimesComponent(buildingService) {
        this.buildingService = buildingService;
        // Times displayed on the front end but currently only does 8 (inclusive) to 10 (exclusive). This can be filtered down.
        this.times = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
            "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
            "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
            "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
            "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
            "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
            "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
            "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
        // Start and end values of the slider for AM/PM display
        this.tstart = 16;
        this.tend = 44;
        // Start and end values for array display (in minutes)
        this.start = 8 * 12;
        this.end = 22 * 12;
        this.timeSliderConfig = {
            behaviour: 'drag',
            connect: true,
            start: [8, 22],
            keyboard: true,
            step: 0.5,
            margin: 0.5,
            range: {
                min: 8,
                max: 22 // 10 PM end
            }
        };
        // The list of all values from the building chosen ("cached")
        this.buildingList = null;
        // The list that will be displayed after population in the show function
        this.roomsList = [];
        //Arguments to pass to roomInfo
        this.buildingName = "";
        this.roomNumber = "";
    }
    FindTimesComponent.prototype.ngOnInit = function () {
        document.getElementById('start').textContent = this.times[this.tstart];
        document.getElementById('end').textContent = this.times[this.tend];
    };
    /*
    * Show the table based on the day (BUILDING name should be provided)
    * 0) Reset the buildingList to null and set current day to "" if you "switch to a different room"
    * 1) Is the day the same?
    * 2) Is buildingList initialized to an array?
    *    2a) Query the cache most of the time
    *    3a) Create a temporary array and populate it with the start and end times per room
    *    4a) Push temp array to the roomsList
    * 3) Notify buildingService to get the buildings from MongoDB
    * 4) Create a temporary array and populate it with the start and end times per room
    * 5) Push temp array to the roomsList
    * 6) Store in buildingList the query
    */
    FindTimesComponent.prototype.show = function (day) {
        var _this = this;
        document.getElementById("room3").style.display = "none";
        // 0) Re-initialize if navigate away from current page
        if (document.getElementById("table-2").style.display == "none") {
            this.buildingList = null;
            this.day = "";
        }
        // 1) Only run once when same button is pressed multiple times
        if (this.day != day) {
            // 2) Query the database once ("cache the buildingList")
            if (this.buildingList == null) {
                // Clear roomsList for new list
                this.roomsList = [];
                // 3) Notify buildingService to get the buildings from MongoDB
                this.buildingService.getBuilding(this.name).subscribe(function (buildingList) {
                    // roomsJSON = { name, mon, tue, wed, thu, omon, otue, owed, othu }
                    var roomsJSON = buildingList.OpenBuilding[0].rooms;
                    for (var room in roomsJSON) {
                        // 4) Size of array for 8AM (inclusive) to 10 PM (exclusive)
                        var arr = new Array(288);
                        // timesJSON = [{ name, sec, days, location, st, et }]
                        var timesJSON = roomsJSON[room][day];
                        for (var time in timesJSON) {
                            // Add 1's to values in the range of the times (increments of 5)
                            for (var i = timesJSON[time].st / 5; i < timesJSON[time].et / 5; i++) {
                                arr[i] = 1;
                            }
                        }
                        // 5) Add to the roomsList
                        _this.roomsList.push({ name: roomsJSON[room].name, room: arr });
                    }
                    // 6) Store in the buildingList ("cache")
                    _this.buildingList = buildingList.OpenBuilding[0];
                    // Display table
                    document.getElementById("table-2").style.display = "block";
                    // Set the day
                    _this.day = day;
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                // Clear roomsList for new list
                this.roomsList = [];
                // { name, mon, tue, wed, thu, omon, otue, owed, othu }
                var roomsJSON = this.buildingList.rooms;
                for (var room in roomsJSON) {
                    // 3a) Size of array for 8AM (inclusive) to 10 PM (exclusive)
                    var arr = new Array(288);
                    // timesJSON = [{ name, sec, days, location, st, et }]
                    var timesJSON = roomsJSON[room][day];
                    for (var time in timesJSON) {
                        for (var i = timesJSON[time].st / 5; i < timesJSON[time].et / 5; i++) {
                            arr[i] = 1;
                        }
                    }
                    // 4a) Add to the roomsList
                    this.roomsList.push({ name: roomsJSON[room].name, room: arr });
                }
                this.day = day;
            }
        }
    };
    FindTimesComponent.prototype.displayToolTip = function (time) {
        var minutes = time * 5; //since we have minutes in 5 minute chunks
        minutes += this.start * 5; //offset of start value * 5
        time = minutes; //set original value of time
        var t;
        if (minutes >= 780) {
            minutes -= 720; //if its 13 o'clock you take off 12 hours or 720 mins
        }
        // // TODO: remove this for deployment as it's unneeded
        // else if(minutes < 60)    {
        //   minutes+=720;//adding 12 hours if its before 1 AM
        // }
        t = (minutes - minutes % 60) / 60 + ":"; //calculating hours
        if (minutes % 60 < 10) {
            t += "0" + time % 60;
        }
        else {
            t += time % 60;
        }
        if (time >= 720) {
            t += " PM";
        }
        else {
            t += " AM";
        }
        return t;
    };
    // On slider change, set start and end times for the times
    FindTimesComponent.prototype.onChange = function (value) {
        this.start = value[0] * 12;
        this.end = value[1] * 12;
        this.tstart = value[0] * 2;
        this.tend = value[1] * 2;
        document.getElementById('start').textContent = this.times[this.tstart];
        document.getElementById('end').textContent = this.times[this.tend];
    };
    FindTimesComponent.prototype.getRoomInfo = function (building_name, room_num) {
        var email = JSON.parse(localStorage.getItem('user')).email;
        //set new inputs
        this.buildingName = building_name;
        this.roomNumber = room_num;
        //hide table and show room
        document.getElementById("table-2").style.display = "none";
        document.getElementById("room3").style.display = "block";
        //hide everything else
        // document.getElementById("buttons").style.display = "none";
        // document.getElementById("all").style.display = "none";
        // document.getElementById("table-2").style.display = "none";
        // document.getElementById("now").style.display = "none";
        // document.getElementById("times").style.display = "none";
    };
    return FindTimesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindTimesComponent.prototype, "name", void 0);
FindTimesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-times',
        template: __webpack_require__(240),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object])
], FindTimesComponent);

var _a;
//# sourceMappingURL=find-times.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
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




//import { RoomComponent } from '../room/room.component';
var FindComponent = (function () {
    // Need to pass arguments so it can be used in functions below
    function FindComponent(buildingService, router, flashMessage) {
        this.buildingService = buildingService;
        this.router = router;
        this.flashMessage = flashMessage;
        // Values passed to room components
        this.buildingName = "";
        this.roomNumber = "";
        // Times displayed on the front end but currently does 8 (inclusive) to 10 (exclusive). This can be filtered down.
        this.times = ["8:00 AM", "9:00 AM",
            "10:00 AM", "11:00 AM", "12:00 PM",
            "1:00 PM", "2:00 PM", "3:00 PM",
            "4:00 PM", "5:00 PM", "6:00 PM",
            "7:00 PM", "8:00 PM", "9:00 PM"];
        // The list of all values from the building chosen ("cached")
        this.buildingList = null;
        // The list that will be displayed after population in the show function
        this.roomsList = [];
    }
    FindComponent.prototype.ngOnInit = function () { };
    /*
    * Show the table based on the day (BUILDING name should be provided)
    * 0) Reset the buildingList to null and set current day to "" if you "switch to a different room"
    * 1) Is the day the same?
    * 2) Is buildingList initialized to an array?
    *    2a) Query the cache most of the time
    *    3a) Create a temporary array and populate it with the start and end times per room
    *    4a) Push temp array to the roomsList
    * 3) Notify buildingService to get the buildings from MongoDB
    * 4) Create a temporary array and populate it with the start and end times per room
    * 5) Push temp array to the roomsList
    * 6) Store in buildingList the query
    */
    FindComponent.prototype.show = function (day) {
        var _this = this;
        document.getElementById("room").style.display = "none";
        // 0) Re-initialize if navigate away from current page
        if (document.getElementById("table").style.display == "none") {
            this.buildingList = null;
            this.day = "";
        }
        // 1) Only run once when same button is pressed multiple times
        if (this.day != day) {
            // 2) Query the database once ("cache the buildingList")
            if (this.buildingList == null) {
                // Clear roomsList for new list
                this.roomsList = [];
                // 3) Notify buildingService to get the buildings from MongoDB
                this.buildingService.getBuilding(this.name).subscribe(function (buildingList) {
                    // roomsJSON = { name, mon, tue, wed, thu, omon, otue, owed, othu }
                    var roomsJSON = buildingList.OpenBuilding[0].rooms;
                    for (var room in roomsJSON) {
                        // 4) Size of array for 8AM (inclusive) to 10 PM (exclusive)
                        var arr = new Array(288);
                        // timesJSON = [{ name, sec, days, location, st, et }]
                        var timesJSON = roomsJSON[room][day];
                        for (var time in timesJSON) {
                            // Add 1's to values in the range of the times (increments of 5)
                            for (var i = timesJSON[time].st / 5; i < timesJSON[time].et / 5; i++) {
                                arr[i] = 1;
                            }
                        }
                        // 5) Add to the roomsList
                        _this.roomsList.push({ name: roomsJSON[room].name, room: arr });
                    }
                    // 6) Store in the buildingList ("cache")
                    _this.buildingList = buildingList.OpenBuilding[0];
                    // Display table
                    document.getElementById("table").style.display = "block";
                    // Set the day
                    _this.day = day;
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                // Clear roomsList for new list
                this.roomsList = [];
                // { name, mon, tue, wed, thu, omon, otue, owed, othu }
                var roomsJSON = this.buildingList.rooms;
                for (var room in roomsJSON) {
                    // 3a) Size of array for 8AM (inclusive) to 10 PM (exclusive)
                    var arr = new Array(288);
                    // timesJSON = [{ name, sec, days, location, st, et }]
                    var timesJSON = roomsJSON[room][day];
                    for (var time in timesJSON) {
                        for (var i = timesJSON[time].st / 5; i < timesJSON[time].et / 5; i++) {
                            arr[i] = 1;
                        }
                    }
                    // 4a) Add to the roomsList
                    this.roomsList.push({ name: roomsJSON[room].name, room: arr });
                }
                this.day = day;
            }
        }
    };
    FindComponent.prototype.displayToolTip = function (time) {
        var minutes = time * 5; //since we have minutes in 5 minute chunks
        minutes += 480; //offset of 8 AM need to add 8 hours
        time = minutes; //set original value of time
        var t;
        if (minutes >= 780) {
            minutes -= 720; //if its 13 o'clock you take off 12 hours or 720 mins
        }
        // // TODO: remove this for deployment as it's unneeded
        // else if(minutes < 60)    {
        //   minutes+=720;//adding 12 hours if its before 1 AM
        // }
        t = (minutes - minutes % 60) / 60 + ":"; //calculating hours
        if (minutes % 60 < 10) {
            t += "0" + time % 60;
        }
        else {
            t += time % 60;
        }
        if (time >= 720) {
            t += " PM";
        }
        else {
            t += " AM";
        }
        return t;
    };
    FindComponent.prototype.getRoomInfo = function (building_name, room_num) {
        var email = JSON.parse(localStorage.getItem('user')).email;
        //set new inputs
        this.buildingName = building_name;
        this.roomNumber = room_num;
        //hide table and show room
        document.getElementById("table").style.display = "none";
        document.getElementById("room").style.display = "block";
        //hide everything else
        // document.getElementById("buttons").style.display = "none";
        // document.getElementById("all").style.display = "none";
        // document.getElementById("table-2").style.display = "none";
        // document.getElementById("now").style.display = "none";
        // document.getElementById("times").style.display = "none";
    };
    return FindComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindComponent.prototype, "name", void 0);
FindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find',
        template: __webpack_require__(241),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FindComponent);

var _a, _b, _c;
//# sourceMappingURL=find.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
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
        template: __webpack_require__(242),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
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
    LoginComponent.prototype.ngOnInit = function () { };
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
        template: __webpack_require__(243),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(45);
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
        this.show = false; // Initially show hidden
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    // Changes state of dropdown
    NavbarComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    // Line items call hide(), then toggle(), so to make sure it's false, start off true
    NavbarComponent.prototype.hide = function () {
        this.show = true;
    };
    // On logout, show log out and navigate back to login
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You have logged out.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(244),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
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
        template: __webpack_require__(245),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomComponent = (function () {
    function RoomComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        //inputs from find components
        this.building = "";
        this.room = "";
        //data structure
        this.rooms = null;
        this.loaded = false;
        this.email = JSON.parse(localStorage.getItem('user'))["email"];
    }
    RoomComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log("new room " + this.building, this.room);
        this.authService.getRoomInfo(this.building, this.room).subscribe(function (roomInfo) {
            if (roomInfo != null) {
                _this.rooms = roomInfo;
                _this.loaded = true;
            }
            console.log(_this.rooms);
        }, function (err) {
            console.log(err);
        });
    };
    RoomComponent.prototype.timeFormat = function (time) {
        var t;
        var minutes = time;
        if (minutes >= 780) {
            minutes -= 720; //if its 13 o'clock you take off 12 hours or 720 mins
        }
        t = (minutes - minutes % 60) / 60 + ":"; //calculating hours
        if (minutes % 60 == 0) {
            t += "00";
        }
        else {
            t += time % 60;
        }
        if (time > 720) {
            t += " PM";
        }
        else {
            t += " AM";
        }
        return t;
    };
    RoomComponent.prototype.vote = function (item, pos, nVote) {
        var _this = this;
        // console.log("building - " + this.building + " room - " + this.room
        //           + " email - " + this.email +  " item - " + item + " pos - " + pos
        //           + " vote - " + nVote);
        this.authService.addVote(this.building, this.room, this.email, item, pos, nVote).subscribe(function (data) {
            if (data.success) {
                //TODO update room info here instead
                console.log("good vote");
            }
            else {
                //console.log("no vote?")
                _this.authService.getRoomInfo(_this.building, _this.room).subscribe(function (roomInfo) {
                    _this.rooms = roomInfo;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    RoomComponent.prototype.onCommentSubmit = function () {
        //check for empty comment here
        // console.log("building - " + this.building + " room - " + this.room + " email - " + this.email +
        //           " comment - " + this.comment);
        var _this = this;
        if (this.comment == "") {
            this.flashMessage.show('Please enter a comment before submitting', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.addComment(this.building, this.room, this.email, this.comment).subscribe(function (data) {
                if (data.success) {
                    //TODO update room info here instead
                    console.log("good");
                }
                else {
                    console.log("no comment?");
                    _this.authService.getRoomInfo(_this.building, _this.room).subscribe(function (roomInfo) {
                        _this.rooms = roomInfo;
                    }, function (err) {
                        console.log(err);
                    });
                }
            });
        }
        this.comment = '';
    };
    return RoomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RoomComponent.prototype, "building", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RoomComponent.prototype, "room", void 0);
RoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-room',
        template: __webpack_require__(246),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], RoomComponent);

var _a, _b;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function ScheduleComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.schedule = null;
        this.home = true;
        this.add = false;
        this.delete = false;
        this.finalize = false;
        this.isFinalized = false;
        this.currItem = null;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schedule = [];
        var email = this.user["email"];
        this.authService.getSchedule({ email: email }).subscribe(function (schedule) {
            _this.schedule = schedule.schedule;
            _this.schedule.sort(_this.sortByCourseName);
        }, function (err) {
            console.log(err);
        });
    };
    // ========== Add ==================
    // 1) Go to add
    ScheduleComponent.prototype.clickAdd = function () {
        this.add = true;
    };
    // 2) Determine if you add or cancel
    ScheduleComponent.prototype.onCourseAdd = function (confirm) {
        if (confirm) {
            this.schedule.push(confirm);
            this.schedule.sort(this.sortByCourseName);
        }
        this.add = false;
        this.delete = false;
        this.home = true;
    };
    // ========== Delete ===============
    // 1) Go to delete
    ScheduleComponent.prototype.clickDelete = function (index) {
        this.delete = true;
        // Create Message
        var course = this.schedule[index];
        var courseChoice = course;
        this.deleteMessage = course.name + " " + courseChoice.num + " Class # " + courseChoice.sec + " " + courseChoice.day + " " + courseChoice.time + " " + courseChoice.location;
        // In preparation for delete
        this.currItem = { index: index, crsID: courseChoice.sec };
    };
    // 2) Determine if you delete or cancel
    ScheduleComponent.prototype.onCourseDelete = function (confirm) {
        if (confirm) {
            var coursePayload = {
                email: JSON.parse(localStorage.getItem('user')).email,
                crsID: this.currItem.crsID
            };
            // Delete on back end
            this.authService.deleteScheduleItem(coursePayload).subscribe();
            // Delete on front end
            this.schedule.splice(this.currItem.index, 1);
            this.schedule.sort(this.sortByCourseName);
            this.flashMessage.show('Course successfully removed', { cssClass: 'alert-success', timeout: 3000 });
        }
        this.delete = false;
    };
    ScheduleComponent.prototype.clickFinalize = function () {
        this.finalize = true;
    };
    ScheduleComponent.prototype.onFinalize = function (confirm) {
        this.isFinalized = confirm;
        this.finalize = false;
    };
    // Sort by Course, then Course Num, then by Course Sec
    ScheduleComponent.prototype.sortByCourseName = function (a, b) {
        // Name (ex. CECS)
        if (a.name == b.name) {
            // Number (ex. CECS 101 vs CECS 102)
            if (a.num == b.num) {
                return a.sec - b.sec;
            }
            else {
                return a.num > b.num;
            }
        }
        else {
            return a.name > b.name;
        }
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(247),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ScheduleComponent);

var _a, _b, _c;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudybuddyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudybuddyComponent = (function () {
    function StudybuddyComponent(authService) {
        this.authService = authService;
        this.email = JSON.parse(localStorage.getItem('user'))["email"];
        this.schedule = null;
        this.buddies = null;
        this.test = null;
        this.loaded = false;
    }
    StudybuddyComponent.prototype.ngOnInit = function () {
        //console.log(this.email);
        var _this = this;
        this.schedule = [];
        this.authService.getSchedule({ email: this.email }).subscribe(function (schedule) {
            _this.schedule = schedule.schedule;
            _this.schedule.sort(_this.sortByCourseName);
            //console.log(this.schedule);
            _this.buddies = JSON.parse('{"res":[{"classes":[{"name":"CECS 444","buddies":[{"name":"guy0","id":"xxxxx"},{"name":"guy1","id":"xxxxx"},{"name":"guy2","id":"xxxxx"},{"name":"guy3","id":"xxxxx"}]},{"name":"CECS 445","buddies":[{"name":"guy4","id":"xxxxx"},{"name":"guy5","id":"xxxxx"},{"name":"guy6","id":"xxxxx"},{"name":"guy7","id":"xxxxx"}]},{"name":"CECS 446","buddies":[{"name":"guy8","id":"xxxxx"},{"name":"guy9","id":"xxxxx"}]}]}]}');
            _this.buddies = _this.buddies.res[0].classes;
            console.log(_this.buddies);
            setTimeout(_this.lol(), 100); // run donothing after 0.5 seconds
        }, function (err) {
            console.log(err);
        });
    };
    // Sort by Course, then Course Num, then by Course Sec
    StudybuddyComponent.prototype.sortByCourseName = function (a, b) {
        // Name (ex. CECS)
        if (a.name == b.name) {
            // Number (ex. CECS 101 vs CECS 102)
            if (a.num == b.num) {
                return a.sec - b.sec;
            }
            else {
                return a.num > b.num;
            }
        }
        else {
            return a.name > b.name;
        }
    };
    StudybuddyComponent.prototype.showBuddies = function () {
        var index = document.getElementById('courseSelect').selectedIndex - 1;
        this.test = this.buddies[index];
        console.log("index of course - " + index);
        console.log(this.buddies);
        document.getElementById("buddylist").style.display = "inline-block";
        // var input = (<HTMLInputElement>document.getElementById('courseSelect')).value;
        // var course = input.split(" ");
        // this.courseName = course[0];
        // this.courseNum = course[1];
        // console.log(this.courseName + " " + this.courseNum);
        // console.log("test\n" + this.test.name);
        // console.log("test\n" + this,test.buddies);
        //TODO implement routes get data and change it
        //show study buddies now, we don't need to hide it anymore
    };
    StudybuddyComponent.prototype.message = function (name) {
        console.log("messaging " + name);
    };
    StudybuddyComponent.prototype.lol = function () {
        this.loaded = true;
        document.getElementById("buddylist").style.display = "inline-block";
    };
    return StudybuddyComponent;
}());
StudybuddyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-studybuddy',
        template: __webpack_require__(248),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], StudybuddyComponent);

var _a;
//# sourceMappingURL=studybuddy.component.js.map

/***/ }),

/***/ 139:
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
        template: __webpack_require__(249),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], UsermanualComponent);

//# sourceMappingURL=usermanual.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(9);
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

/***/ 141:
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

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".main-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 2.5% 95% 2.5%;\r\n        grid-template-columns: 2.5% 95% 2.5%;\r\n    -ms-grid-rows: 50px 63px 100%;\r\n        grid-template-rows: 50px 63px 100%;\r\n    grid-template-areas: \r\n        \"nav    nav     nav\"\r\n        \"fm     fm      fm\"\r\n        \".      ro      .\";\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.main-grid app-navbar {\r\n    grid-area: nav;\r\n}\r\n\r\n.main-grid flash-messages {\r\n    grid-area: fm;\r\n}\r\n\r\n/* Used to circumvent router-outlet issue */\r\n.main-grid div {\r\n    grid-area: ro;\r\n    /* border: 2px black solid; */\r\n}\r\n\r\n/* https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */\r\n.button-to-top {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Fixed/sticky position */\r\n    bottom: 20px; /* Place the button at the bottom of the page */\r\n    right: 20px; /* Place the button 30px from the right */\r\n    z-index: 100; /* Make sure it does not overlap */\r\n    border: none; /* Remove borders */\r\n    outline: none; /* Remove outline */\r\n    background-color: #edaa00; /* Set a background color */\r\n    color: #333333; /* Text color */\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 20px;\r\n    border-radius: 10px; /* Rounded corners */\r\n    opacity: 0.6;\r\n}\r\n\r\n.button-to-top:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.button-to-top:active {\r\n    opacity: 0.8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* Formatting of the user list area */\r\n.msglist {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-area: msglist;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: 50px auto;\r\n        grid-template-rows: 50px auto;\r\n    grid-template-areas: \r\n        \"msglist-title\"\r\n        \"msglist-users\";\r\n    min-width: 225px;\r\n}\r\n\r\n.msglist-title {\r\n    grid-area: msglist-title;\r\n    background: #edaa00;\r\n    border: 1px black solid;\r\n    color: black;\r\n    font-size: 30px;\r\n    overflow: auto;\r\n    text-align: center;\r\n}\r\n\r\n/* List of users */\r\n.msglist-users {\r\n    grid-area: msglist-users;\r\n    background: white;\r\n    border: 1px black solid;\r\n    height: 450px;\r\n    list-style: none;\r\n    margin: 0 !important;\r\n    max-height: 450px;\r\n    overflow: auto;\r\n    padding: 0 !important; \r\n}\r\n\r\n.msglist-user {\r\n    border: 0 !important;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n.msglist-btn {\r\n    border-bottom: 1px gray solid;\r\n    color: black;\r\n    height: 100%;\r\n    padding: 10px 0 10px 0;\r\n    width: 100%;\r\n}\r\n\r\n/* Formatting of the chat area */\r\n.chat {\r\n    grid-area: chat;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 100%;\r\n        grid-template-columns: 100%;\r\n    -ms-grid-rows: 50px auto 50px;\r\n        grid-template-rows: 50px auto 50px;\r\n    grid-template-areas: \r\n        \"chat-title\"\r\n        \"chat-logs\"\r\n        \"chat-form\";\r\n    min-width: 300px;\r\n}\r\n\r\n/* Title area of the chat */\r\n.chat-title {\r\n    grid-area: chat-title;\r\n    background: #edaa00;\r\n    border: 1px black solid;\r\n    color: black;\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.back {\r\n    float: left;\r\n    background: #edaa00;\r\n    border-bottom: 1.5px black solid;\r\n    border-right: 1px black solid;\r\n    min-width: 75px;\r\n    height: 50px;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    text-align: center;\r\n}\r\n\r\n/* Chatlog area where you see the messages being displayed */\r\n.chatlogs {\r\n    grid-area: chat-logs;\r\n    background: #f3f3f3;\r\n    border: 1px black solid;\r\n    height: 400px;\r\n    min-width: 300px;\r\n    overflow: auto;\r\n    padding: 5px;\r\n}\r\n\r\n.sender {\r\n    background: #edaa00;\r\n    margin: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.sendee {\r\n    background: gray;\r\n    margin: 0 !important;\r\n    width: 100%;\r\n}\r\n\r\n.chatmsg {\r\n    border-radius: 5px;\r\n    clear: both;\r\n    border: 1.5px black solid;\r\n    margin-bottom: 5px;\r\n    padding: 0 5px 5px 5px;\r\n}\r\n\r\n.sender .chatmsg {\r\n    float: right;\r\n    background: lightblue;\r\n    max-width: 75%;\r\n    width: auto;\r\n}\r\n\r\n.sendee .chatmsg {\r\n    float: left;\r\n    background: lightgreen;\r\n    max-width: 75%;\r\n    width: auto;\r\n}\r\n\r\n/* User input and button formatting */\r\n.chat-form {\r\n    background: rgb(221, 221, 221);\r\n    border: 1px black solid;\r\n    overflow: hidden;\r\n}\r\n.chat-text {\r\n    grid-area: chat-input;\r\n    float: left;\r\n    background: transparent;\r\n    border: none;\r\n    color: black;\r\n    height: 100%;\r\n    padding-left: 10px;\r\n    width: 80%;\r\n}\r\n\r\n.chat-submit {\r\n    grid-area: chat-submit;\r\n    float: right;\r\n    border-left: 1px black solid;\r\n    height: 100%;\r\n    width: 20%;\r\n}\r\n\r\n.btn:hover {\r\n    color: black;\r\n}\r\n\r\n.btn:focus {\r\n    color: black;\r\n}\r\n\r\n/* Hide when not the \"normal\" class */\r\n.msglist-hide, .chat-hide, .back-hide {\r\n    display: none;\r\n}\r\n\r\n/* Display both parts of the chat */\r\n@media (min-width: 600px) {\r\n    .grid {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 300px auto;\r\n            grid-template-columns: 300px auto;\r\n        -ms-grid-rows: 100%;\r\n            grid-template-rows: 100%;\r\n        grid-template-areas:\r\n            \"msglist chat\";\r\n    }\r\n\r\n    .msglist, .msglist-hide {\r\n        grid-area: msglist;\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 100%;\r\n            grid-template-columns: 100%;\r\n        -ms-grid-rows: 50px auto;\r\n            grid-template-rows: 50px auto;\r\n        grid-template-areas: \r\n            \"msglist-title\"\r\n            \"msglist-users\";\r\n        min-width: 225px;\r\n    }\r\n\r\n    .chat, .chat-hide {\r\n        grid-area: chat;\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 100%;\r\n            grid-template-columns: 100%;\r\n        -ms-grid-rows: 50px auto 50px;\r\n            grid-template-rows: 50px auto 50px;\r\n        grid-template-areas: \r\n            \"chat-title\"\r\n            \"chat-logs\"\r\n            \"chat-form\";\r\n        min-width: 300px;\r\n    }\r\n\r\n    .back {\r\n        display: none;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".cancel {\r\n    float: left;\r\n}\r\n\r\n.submit {\r\n    width: 45%;\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".buttons { \r\n    text-align: center; \r\n} \r\n \r\n.btn-primary { \r\n    width: 100%; \r\n    margin-bottom: 5px; \r\n} \r\n \r\n@media (min-width: 600px) { \r\n    .btn-primary { \r\n        width: 32%; \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".slider-grid {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 100px auto 100px;\r\n      grid-template-columns: 100px auto 100px;\r\n  grid-template-areas: \r\n  \"slider slider slider\"\r\n  \"start  .      end\";\r\n}\r\n\r\n.start {\r\n  grid-area: start;\r\n  text-align: left;\r\n}\r\n\r\n.slider {\r\n  grid-area: slider;\r\n  width: 100%;\r\n  padding: 0 15px 0 15px;\r\n}\r\n\r\n.end {\r\n  grid-area: end;\r\n  text-align: right;\r\n}\r\n\r\ntable {\r\n  width : 2000px;\r\n  height : auto;\r\n}\r\n\r\ntr {\r\n  height: 20px;\r\n}\r\n\r\ntd {\r\n  border-collapse: collapse;\r\n}\r\n\r\n.tablecontainer {\r\n  width : 100%;\r\n  height : 100%;\r\n  overflow : auto;\r\n  padding : 0, 0, 0, 0;\r\n}\r\n\r\n.opentime {\r\n  background-color : #81ea9d;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.closedtime {\r\n  background-color : #ed5d50;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.five-minute-chunk{\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n/*tool tip for each square*/\r\n.five-minute-chunk:hover .time-tool-tip{\r\n  width: 75px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  /*padding: 5px 0;*/\r\n  position:absolute;/*this is messing up when scrolling to the right, like wtih an offset for some reason*/\r\n  top: -20px;\r\n  left: 20px;\r\n  z-index: 1;\r\n  visibility: visible;\r\n  display: block;\r\n}\r\n\r\n.time-tool-tip{\r\n  visibility: hidden;\r\n  z-index: 20;\r\n  /* display: none; */ /* This is making the cells small. */\r\n}\r\n\r\n.five-minute-chunk:hover .time-tool-tip{\r\n  visibility: visible;\r\n}\r\n\r\n.left-column {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  left: 0;\r\n  top: -50;\r\n  background-color: #ffffff;\r\n  width: 100px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  z-index: 20;\r\n}\r\n\r\n.left-column:hover {\r\n  background-color: #76a8f7;\r\n}\r\n\r\n.btn-primary {\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .btn-primary {\r\n    width: 24%;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "table {\r\n  width : auto;\r\n  height : auto;\r\n}\r\n\r\ntr {\r\n  height: 20px;\r\n}\r\n\r\ntd {\r\n  border-collapse: collapse;\r\n}\r\n\r\n.tablecontainer {\r\n  width : 100%;\r\n  height : 100%;\r\n  overflow : auto;\r\n  padding : 0, 0, 0, 0;\r\n}\r\n\r\n.opentime {\r\n  background-color : #81ea9d;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.closedtime {\r\n  background-color : #ed5d50;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.five-minute-chunk {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n/*tool tip for each square*/\r\n.five-minute-chunk:hover .time-tool-tip {\r\n  width: 75px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  /*padding: 5px 0;*/\r\n  position:absolute;/*this is messing up when scrolling to the right, like wtih an offset for some reason*/\r\n  top: -20px;\r\n  left: 20px;\r\n  z-index: 1;\r\n  visibility: visible;\r\n  display: block;\r\n}\r\n\r\n.time-tool-tip {\r\n  visibility: hidden;\r\n  z-index: 20;\r\n  /* display: none; */ /* This is making the cells small. */\r\n}\r\n\r\n.five-minute-chunk:hover .time-tool-tip {\r\n  visibility: visible;\r\n}\r\n\r\n.left-column {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  left: 0;\r\n  top: -50;\r\n  background-color: #ffffff;\r\n  width: 100px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  z-index: 20;\r\n}\r\n\r\n.left-column:hover {\r\n  background-color: #76a8f7;\r\n}\r\n\r\n.btn-primary {\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .btn-primary {\r\n    width: 24%;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".jumbotron {\r\n    text-align: center;\r\n}\r\n\r\n.btn {\r\n    width: 15rem;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.home-content {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 100% 100% 100%;\r\n        grid-template-rows: 100% 100% 100%;\r\n    grid-template-areas:\r\n        \"content-1\"\r\n        \"content-2\"\r\n        \"content-3\";\r\n}\r\n\r\n/* For Desktop 600px+ */\r\n@media (min-width: 600px) {    \r\n    .home-content {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 33.33% 33.33% 33.33%;\r\n            grid-template-columns: 33.33% 33.33% 33.33%;\r\n        grid-template-areas: \"content-1 content-2 content-3\";\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".roomName{\r\n  padding-bottom: 50px;\r\n}\r\n\r\n/*.dayContainer{\r\n  display: grid;\r\n  grid-template-columns: 50%, 50%;\r\n  grid-gap: 25px\r\n}*/\r\n\r\n.dayContainer{\r\n  display: inline-block;\r\n  /*padding is off when time block is a different length*/\r\n  padding-right: 20px;\r\n  /*border: 2px solid black;*/\r\n}\r\n\r\n.day{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 20% 20% 1fr;\r\n      grid-template-columns: 20% 20% 1fr;\r\n  -ms-grid-rows: 75% 25%;\r\n      grid-template-rows: 75% 25%;\r\n  grid-template-areas:\r\n      \"tc tc tc \"\r\n      \"uv dv .  \";\r\n  grid-area: day;\r\n  grid-gap: 10px;\r\n\r\n\r\n\r\n}\r\n\r\n.featurecontainer{\r\n  display: inline-block;\r\n  /*padding-right: 20px;*/\r\n}\r\n\r\n.feature\r\n{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 5% 5% 1fr;\r\n      grid-template-columns: 5% 5% 1fr;\r\n  -ms-grid-rows: 75% 25%;\r\n      grid-template-rows: 75% 25%;\r\n  grid-template-areas:\r\n      \"fn fn fn \"\r\n      \"uv dv .  \";\r\n      grid-gap: 10px;\r\n}\r\n\r\n.commentContainer{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 5% 5% 1fr 1fr;\r\n      grid-template-columns: 5% 5% 1fr 1fr;\r\n  -ms-grid-rows: 25% 75%;\r\n      grid-template-rows: 25% 75%;\r\n  grid-template-areas:\r\n      \"uv dv cu dt\"\r\n      \"cm cm cm cm\";\r\n  padding-bottom: 10px;\r\n  grid-gap: 10px;\r\n}\r\n\r\n.uVote{\r\n  grid-area: uv;\r\n  /*border: 1px solid blue;*/\r\n}\r\n\r\n.dVote{\r\n  grid-area: dv;\r\n  /*border: 1px solid red;*/\r\n}\r\n\r\n.timeContainer{\r\n  grid-area: tc;\r\n  /*border: 1px solid black;*/\r\n  /*padding: 0;*/\r\n}\r\n\r\n.featureName{\r\n  grid-area: fn;\r\n  /*border: 1px solid black;*/\r\n}\r\n\r\n.comment{\r\n  grid-area:cm;\r\n  border-radius: 25px;\r\n  background-color: #dee3ea;\r\n  /*border: 1px solid black;*/\r\n}\r\n\r\n.commentUser{\r\n  grid-area: cu;\r\n  /*border: 1px solid black;*/\r\n}\r\n\r\n.date{\r\n  grid-area:dt;\r\n  /*border: 1px solid violet;*/\r\n}\r\n\r\n#commentBox{\r\n  padding-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".table-title {\r\n    background-color: #d7d1c5;\r\n}\r\n\r\ntable {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    width: 99%;\r\n}\r\n  \r\ntd { \r\n    padding-left: 10px; \r\n    border: 5px #eee solid;\r\n}\r\n\r\n.left-column {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    background-color: inherit;\r\n    left: 0px;\r\n    z-index: 20;\r\n    min-width: 100px;\r\n}\r\n\r\n.trash { \r\n    background-color: white; \r\n} \r\n \r\n.trash:hover { \r\n    color: red; \r\n} \r\n\r\n.finalize {\r\n    border: none;\r\n    text-align: right;\r\n    padding-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*.studyBuddies{\r\n  display: grid;\r\n  grid-template-columns:100%;\r\n  grid-gap: 5px;\r\n}*/\r\n\r\n/*switch to different layout at 600px min-width*/\r\n/*@media (min-width: 600px) {*/\r\n.studyBuddies{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns:(1fr)[4];\r\n      grid-template-columns:repeat(4, 1fr);\r\n  grid-gap: 15px;\r\n}\r\n/*}*/\r\n\r\n.buddy{\r\n  /*grid-area:bd;*/\r\n  border: 1px solid black;\r\n  border-radius: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.courseTitle\r\n{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body class=\"main-grid\">\r\n    <app-navbar></app-navbar>\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n    <button class=\"button-to-top\" (click)=\"toTop()\" id=\"to-top\">\r\n      <span class=\"fa fa-chevron-up\" aria-hidden=\"true\"></span>\r\n      <p>Top</p>\r\n    </button>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body class=\"grid\">\r\n    <div [ngClass]=\"sendee==null ? 'msglist' : 'msglist-hide'\">\r\n      <div class=\"msglist-title\">OC Messenger</div>\r\n      <ul *ngIf=\"names.length > 0\" class=\"list-group msglist-users\">\r\n        <li class=\"list-group-item msglist-user\" *ngFor=\"let name of names\">\r\n          <button class=\"btn msglist-btn\" (click)=\"joinRoom(name)\">{{name}}</button>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"names.length <= 0\" class=\"list-group msglist-users\">\r\n        <h2 style=\"text-align: center; top: 50%;\">Go to the Study Buddy Tab to add some buddies!</h2>\r\n      </ul>\r\n    </div>\r\n    <div [ngClass]=\"sendee==null ? 'chat-hide' : 'chat'\">\r\n      <div class=\"chat-title\">\r\n        <button *ngIf=\"showBack\" class=\"btn\" [ngClass]=\"showBack ? 'back' : 'back-hide'\" (click)=\"back()\">\r\n          <span class=\"fa fa-chevron-left\" aria-hidden=\"true\"></span>Back\r\n        </button>\r\n        <div class=\"announcer\">{{sendee}}</div>\r\n      </div>\r\n      <!-- https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style -->\r\n      <div class=\"chatlogs\" #chatlogs [scrollTop]=\"chatlogs.scrollHeight\">\r\n        <div *ngFor=\"let message of messages\">\r\n          <div *ngIf=\"message.sender!=sender\" class=\"sendee\">\r\n            <p class=\"chatmsg\">{{message.message}}</p>\r\n          </div>\r\n          <div *ngIf=\"message.sender==sender\" class=\"sender\">\r\n            <p class=\"chatmsg\">{{message.message}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <form class=\"chat-form\" (submit)=\"sendMessage()\">\r\n      <input type=\"text\" class=\"chat-text\" [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\"/>\r\n      <button type=\"submit\" class=\"btn btn-primary chat-submit\">\r\n        <span class=\"fa fa-send\" aria-hidden=\"true\"></span>\r\n      </button>\r\n    </form>\r\n    </div>\r\n  </body>\r\n</html>"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body>\r\n    <div *ngIf=\"!confirm\">\r\n      <div class=\"form-group\">\r\n        <!-- 1) Choosing the course name -->\r\n        <h1>Add a Course</h1>\r\n        <h2>Department</h2>\r\n        <select class=\"form-control\" [(ngModel)]=\"courseName\" name=\"courseName\" (focus)=\"cache()\" (change)=\"getCourseNumOptions()\">\r\n          <option selected hidden></option>\r\n          <option *ngFor=\"let cname of courseNameOptions\">{{cname}}</option>\r\n        </select>\r\n    \r\n        <!-- 2) Choosing the course number -->\r\n        <div *ngIf=\"courseNumOptions\">\r\n          <h2>Course Number</h2>\r\n          <select class=\"form-control\" [(ngModel)]=\"courseNum\" name=\"courseNum\" (change)=\"getCourseChoiceOptions()\">\r\n            <option selected hidden></option>\r\n            <option *ngFor=\"let cid of courseNumOptions\"> {{cid}}</option>\r\n          </select>\r\n        </div>\r\n    \r\n        <!-- 3) Finally choosing a class -->\r\n        <div *ngIf=\"courseChoiceOptions\">\r\n          <h2>Course</h2>\r\n          <select class=\"form-control\" [(ngModel)]=\"courseChoice\" name=\"courseChoice\">\r\n            <option selected hidden></option>\r\n            <option *ngFor=\"let cchoice of courseChoiceOptions\" [ngValue]=\"cchoice\"> {{courseName}} {{cchoice.num}} |  #{{cchoice.sec}} {{cchoice.day}} {{cchoice.time}} {{cchoice.location}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary cancel\" (click)=\"onBack()\">\r\n            <span class=\"fa fa-chevron-left\" aria-hidden=\"true\"></span> Back\r\n        </button>\r\n        <button class=\"btn btn-default submit\" (click)=\"onSubmit()\">\r\n          <span class=\"fa fa-plus\" aria-hidden=\"true\"></span> Add Course\r\n        </button>\r\n      </div>\r\n    </div>\r\n      \r\n    <div *ngIf=\"confirm\" id=\"confirm\" style=\"text-align: center\">\r\n      <h1>Are you sure you want to add?</h1>\r\n      <h2>{{confirmMessage}}</h2>\r\n      <div>\r\n        <button class=\"btn btn-default btn-primary\" style=\"width: 33%\" (click)=\"addClick(true)\">\r\n          <span class=\"fa fa-check\" aria-hidden=\"true\"></span> Yes\r\n        </button>\r\n        <button class=\"btn btn-primary\" style=\"width: 33%\" (click)=\"addClick(false)\">\r\n          <span class=\"fa fa-remove\" aria-hidden=\"true\"></span> No\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title> Developer Guide </title>\r\n  </head>\r\n  <body style=\"text-align: left\">\r\n    <h2 class=\"page-header\" style=\"text-align: center;\">Developer Guide</h2>\r\n    \r\n    <h3 class=\"header\"> [What is Open Classroom?] </h3>\r\n      As computer science students, we have personally had issues finding open rooms to study in. So we created an app to let students know what classrooms and labs are open. Currently students have no easy way to find this out. They have to chance upon a room or search physically till they find one. We provide a listing of what rooms are open to make the lives of students easier. In addition, students will soon be able to upload their schedules and Open Classroom will suggest where they can go to study. There are also social elements in the works, where students can find other people to study with whether they are in the same class or taking a different section. Chat functionality and note sharing are also on the way. A means for users updating erroneous information and having it user moderated will also be implemented. This application will surely increase the student’s knowledgebase of where they can prepare for their next exam or simply get the help they need in a free space devoid of professor involvement.\r\n    \r\n    <h3 class=\"header\"> [Features] </h3>\r\n    <u>Currently Live</u>\r\n    <ul>\r\n      <li>Signup</li>\r\n      <li>Login/Logout</li>\r\n      <li>Get Open Classroom by Building</li>\r\n    </ul>\r\n    <u>In Progress</u>\r\n    <ul>\r\n      <li>Open Classroom based on Schedule</li>\r\n      <li>User Schedule Building</li>\r\n      <li>User Chatroom</li>\r\n      <li>User Group Boards</li>\r\n      <li>File Transfer between Users</li>\r\n    </ul>\r\n    \r\n    <h3 class=\"header\"> [Setup] </h3>\r\n    You can install the Open Classroom application by downloading the source code directly and unzipping the contents into a folder. Alternatively, you can also fork project. As this is a MEAN stack application, you must <strong>install the 4 dependencies</strong>:\r\n    <ol type = \"1\">\r\n      <li> <strong>MongoDB</strong> (via website)</li>\r\n      <li> <strong>Angular 2.0</strong> (via npm install)</li>\r\n      <li> <strong>ExpressJS</strong> (via npm install)</li>\r\n      <li> <strong>NodeJS</strong> (via website)</li>\r\n    </ol>\r\n    Furthermore, you must <strong>install (\"ng install\") the node_modules folder</strong> into these 2 folders <strong>using a terminal at that path location</strong>:\r\n    <ol type = \"1\">\r\n      <li> \"openclassroom\" folder</li>\r\n      <li> \"openclassroom/angular-src\" folder</li>\r\n    </ol>\r\n  \r\n    <u>Populate your MongoDB Database with Classroom Content</u>\r\n    <ol type = \"1\">\r\n      <li> Navigate where you installed MongoDB (default location: C:\\Program Files\\MongoDB\\Server\\3.4\\bin) and <strong>run \"mongod.exe\"</strong> or the <strong>\"mongod.exe\" shortcut</strong> in the scraper folder</li>\r\n      <li> Navigate to the \"scraper\" folder</li>\r\n      <li> In a terminal at this path location, run \"node scraper\"</li>\r\n    </ol>\r\n  \r\n    <u>Run the Open Classroom Application on Localhost</u>\r\n    <ol type = \"1\">\r\n      <li> Make sure <strong>\"mongod.exe\"</strong> is running (if not, run \"mongod.exe\" as seen above) </li>\r\n      <li> Open a new terminal in the <strong>\"openclassroom\"</strong> folder</li>\r\n      <li> Use the command <strong>\"npm start\"</strong> or <strong>\"npm serve\"</strong> or <strong>\"nodemon\"</strong> (see dependencies) </li>\r\n      <li> <strong>Open a web browser</strong> (Chrome, Edge, Firefox, etc.) and go to <strong>\"localhost:3000\"</strong> </li>\r\n    </ol>\r\n    \r\n    <h3 class=\"header\"> [Dependencies] </h3>\r\n    <u>Open Classroom uses the MEAN stack</u>\r\n    <ul>\r\n      <li><a href=\"https://www.mongodb.com/download-center\"> MongoDB </a></li>\r\n      <li><a href=\"https://github.com/angular/angular-cli\"> Angular 2.0</a></li>\r\n      <li><a href=\"https://github.com/expressjs/express\"> ExpressJS </a></li>\r\n      <li><a href=\"https://nodejs.org/en/download/\"> NodeJS </a></li>\r\n    </ul>\r\n    <i>(Angular 2.0 and ExpressJS are installed using \"ng install\". MongoDB and NodeJS shall be installed from their respective websites.)</i> \r\n    <br>\r\n    <br>\r\n    <u>Helpful Applications</u>\r\n    <ul>\r\n      <li> <a href=\"https://nodemon.io/\">Nodemon</a> - an application that updates your project without having to restart \"npm start\" or \"ng serve\" </li>\r\n      <li> <a href=\"https://robomongo.org/\">Robomongo</a> - a MongoDB client that displays the data in your database (when connected)</li>\r\n    </ul>\r\n  \r\n    <h3 class=\"header\"> [OpenClassroom Project Tree] </h3>\r\n    <ul>\r\n      <li>angular-src (where our angular project resides)\r\n        <ul>\r\n          <li>e2e (for testing)</li>\r\n          <li>node_modules (dependencies installed based on package.json)</li>\r\n          <li>src\r\n            <ul>\r\n              <li>app (where the pieces to make the application resides)\r\n                <ul>\r\n                  <li>components (modules that are added to the website)</li>\r\n                  <li>guards (protects routes)</li>\r\n                  <li>services (authenticate and distribute data)</li>\r\n                </ul>\r\n              </li>\r\n              <li>assets</li>\r\n              <li>environments</li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>config (where JSON Web Token strategy and database is located)</li>\r\n      <li>models (what objects the project will be interacting with)</li>\r\n      <li>node_modules (dependencies installed based on package.json)</li>\r\n      <li>public (deployment files and starting page location)</li>\r\n      <li>routes (set up GET and POST requests here)</li>\r\n      <li>scraper (where CSULB population happens)\r\n        <ul>\r\n        <li>open-classroom-data (JSON file with pre-scraped buildings 2017)</li>\r\n        <li>node_modules (dependencies installed based on package.json)</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  \r\n    <h3 class=\"header\"> [How do I contribute?] </h3>\r\n    If you want to contribute to the project, feel free to report bugs, download the source code, or fork the project.\r\n    <ul>\r\n      <li>Source Code: <a href=\"https://github.com/jonathanpchan/openclassroom\">https://github.com/jonathanpchan/openclassroom</a></li>\r\n      <li>Issue Tracker: <a href=\"https://github.com/jonathanpchan/openclassroom/issues\">https://github.com/jonathanpchan/openclassroom/issues</a></li>\r\n    </ul>\r\n  \r\n    <h3 class=\"header\"> [Support] </h3>\r\n    If you have any questions, feel free to contact us at <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a> \r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <!-- 1) Building Select -->\r\n    <div class=\"form-group\">\r\n      <h1 id=\"title\">Building</h1>\r\n      <select class=\"form-control\" [(ngModel)]=\"building\" name=\"building\" (focus)=\"displayButtons($event)\">\r\n        <option style=\"display: none\"></option>\r\n        <option *ngFor=\"let buildingName of buildingNames\"> {{buildingName}} </option>\r\n      </select>\r\n    </div>\r\n    \r\n    <!-- 2) Button Select -->\r\n    <div class=\"buttons\" id=\"buttons\" style=\"display: none; text-align: center;\">\r\n      <input type=\"button\" class=\"btn btn-primary\" (click)=\"displayOption('all')\" value=\"All Rooms\">\r\n      <input type=\"button\" class=\"btn btn-primary\" (click)=\"displayOption('now')\" value=\"Right Now\">\r\n      <input type=\"button\" class=\"btn btn-primary\" (click)=\"displayOption('times')\" value=\"By Time\">\r\n    </div>\r\n    \r\n    <!-- 3a) Get all rooms based on building and time -->\r\n    <app-find id=\"all\" style=\"display: none\" name={{building}}></app-find>\r\n    \r\n    <!-- 3b) Get all rooms based on building -->\r\n    <app-find-now id=\"now\" style=\"display: none\" name={{building}}></app-find-now>\r\n    \r\n    <!-- 3c) Get all rooms based on building and time -->\r\n    <app-find-times id=\"times\" style=\"display: none\" name={{building}}></app-find-times>\r\n    \r\n    <!-- <app-room id=\"room\" style=\"display: none\"></app-room> -->\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n    <head></head>\r\n    <body>\r\n        <h1 *ngIf=\"!show\">No rooms currently available in {{name}}</h1>\r\n        <div id=\"nowTimes\">\r\n        <ng-container *ngIf=\"show\">\r\n            <h2 *ngFor=\"let room of roomsList\" (click)=\"showRoom(name, room.name)\">\r\n                Room: {{room.name}} from {{room.st}} until {{room.et}}\r\n            </h2>\r\n        </ng-container>\r\n        </div>\r\n        <app-room id=\"room2\" style=\"display: none\" building={{buildingName}} room={{roomNumber}}></app-room>\r\n    </body>\r\n</html>\r\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <div style=\"text-align: center\">\r\n      <button (click) = \"show('omon')\" class=\"btn btn-primary\"> Monday</button>\r\n      <button (click) = \"show('otue')\" class=\"btn btn-primary\"> Tuesday</button>\r\n      <button (click) = \"show('owed')\" class=\"btn btn-primary\"> Wednesday</button>\r\n      <button (click) = \"show('othu')\" class=\"btn btn-primary\"> Thursday</button>\r\n    </div>\r\n    <div class=\"slider-grid\">\r\n      <span class=\"start\" id=\"start\"></span>\r\n      <nouislider class=\"slider\" [config]=\"timeSliderConfig\" [(ngModel)]=\"timeRange\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{standalone: true}\" id=\"slider\"></nouislider>\r\n      <span class=\"end\" id=\"end\"></span>\r\n    </div>\r\n    <div class=\"tablecontainer\" id=\"table-2\" style=\"display: none; margin-top: 35px;\">\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <th colspan=\"6\" *ngFor=\"let time of times | slice:tstart:tend\">{{time}}</th>\r\n          </tr>\r\n          <tr *ngFor=\"let rooms of roomsList\">\r\n            <th class=\"left-column\" (click)=\"getRoomInfo(name, rooms.name)\">{{name}}-{{rooms.name}}</th>\r\n            <td class =\"five-minute-chunk\" *ngFor=\"let room of rooms?.room | slice:start:end let i = index \" [ngClass]=\"room ? 'opentime' : 'closedtime'\">\r\n              <span class=\"time-tool-tip\">{{displayToolTip(i)}}</span> <!--this messes up the left column for some reason -->\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <app-room id=\"room3\" style=\"display: none\" building={{buildingName}} room={{roomNumber}}></app-room>\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <div style=\"text-align: center\">\r\n        <button (click) = \"show('omon')\" class=\"btn btn-primary\" id=\"mon\"> Monday</button>\r\n        <button (click) = \"show('otue')\" class=\"btn btn-primary\" id=\"tue\"> Tuesday</button>\r\n        <button (click) = \"show('owed')\" class=\"btn btn-primary\" id=\"wed\"> Wednesday</button>\r\n        <button (click) = \"show('othu')\" class=\"btn btn-primary\" id=\"thu\"> Thursday</button>\r\n      </div>\r\n      <div class=\"tablecontainer\" id=\"table\" style=\"display: none\">\r\n        <table>\r\n          <tbody>\r\n            <tr style=\"display: sticky\">\r\n              <th colspan=\"12\" *ngFor=\"let time of times\">{{time}}</th>\r\n            </tr>\r\n            <tr *ngFor=\"let rooms of roomsList\">\r\n              <!-- <th class=\"left-column\"  (click) = \"getRoomInfo(name, rooms.name)\">{{name}}-{{rooms.name}}</th> -->\r\n              <th class=\"left-column\" (click) = \"getRoomInfo(name, rooms.name)\">{{name}}-{{rooms.name}}</th>\r\n              <td class =\"five-minute-chunk\" *ngFor=\"let room of rooms?.room | slice:96:264 let i = index \" [ngClass]=\"room ? 'opentime' : 'closedtime'\">\r\n                <span class=\"time-tool-tip\">{{displayToolTip(i)}}</span><!-- this messes up the left column for some reason-->\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <app-room id=\"room\" style=\"display: none\" building={{buildingName}} room={{roomNumber}}></app-room> \r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body class=\"home-grid\">\r\n    <div class=\"jumbotron\">\r\n      <h1>Open Classroom</h1>\r\n      <h2>Find available classrooms for your studying needs</h2> \r\n      \r\n      <div *ngIf = \"!authService.loggedIn()\">\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n      </div>\r\n      <div *ngIf = \"authService.loggedIn()\">\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/schedule']\">View My Schedule</a> <a class=\"btn btn-default\" [routerLink]=\"['/findclassroom']\">Find Open Classroom</a>\r\n      </div>\r\n\r\n      <div>\r\n        <p>\r\n          <br /><a [routerLink]=\"['/usermanual']\">User Manual</a> | <a [routerLink]=\"['/devguide']\">Dev Guide</a> \r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"home-content\">\r\n      <div class=\"content-1\">\r\n        <h3>Find the Best Study Spot!</h3>\r\n        <p>Find open rooms by building, right now, or by time.</p>\r\n      </div>\r\n      <div class=\"content-2\">\r\n        <h3>Study with fellow Study Buddies!</h3>\r\n        <p>Find others in the same program to study with.</p>\r\n      </div>\r\n      <div class=\"content-3\">\r\n        <h3>Share Class Notes!</h3>\r\n        <p>Share notes to get an edge on the competition.</p>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <h1>Login</h1>\r\n    <form (submit)=\"onLoginSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n      </div>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n    </form>\r\n  </body>\r\n</html>"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"z-index: 1000\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">OpenClassroom</a>\r\n      <button (click)=\"toggle()\" class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\"> \r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse\" [ngClass]=\"show ? 'show' : ''\" id=\"navbarColor02\" (click)=\"toggle()\">\r\n        <ul class=\"navbar-nav mr-auto\" (click)=\"hide()\">\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/schedule']\">My Schedule</a></li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/findclassroom']\">Find Classroom</a></li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/chat']\">Messaging</a></li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/studybuddy']\">Study Buddy</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\" (click)=\"hide()\">\r\n          <!-- <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Settings</a></li> -->\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Register </a></li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" [routerLink]=\"['/']\">Logout</a></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </body>\r\n</html>"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <h1>Register</h1>\r\n    <form (submit)=\"onRegisterSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Username</label>\r\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n      </div>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n    </form>\r\n  </body>\r\n</html>"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head></head>\r\n  <body>\r\n    <h1 class =\"roomName\">{{rooms?.building}}-{{rooms?.room}}</h1>\r\n    <div class = \"timesection\">\r\n      <h2>Open Times </h2>\r\n\r\n      <h2>Monday</h2>\r\n      <div class = \"dayContainer\" *ngFor=\"let time of rooms?.mon let i = index\">\r\n        <div class = \"day\">\r\n          <h3 class = \"timeContainer\" >Open From {{timeFormat(time.st)}} - {{timeFormat(time.et)}}</h3>\r\n          <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-md\" (click)=\"vote('mon', i, 1)\" >\r\n            <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span>{{time.uVote}}\r\n          </button>\r\n          <button type=\"button\" class=\"dVote\" class=\"btn btn-default btn-md\" (click)=\"vote('mon', i, -1)\" >\r\n            <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span>{{time.dVote}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <h2>Tuesday</h2>\r\n      <div class = \"dayContainer\" *ngFor=\"let time of rooms?.tue let i = index\">\r\n        <div class = \"day\">\r\n          <h3 class = \"timeContainer\" >Open From {{timeFormat(time.st)}} - {{timeFormat(time.et)}}</h3>\r\n          <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-md\" (click)=\"vote('tue', i, 1)\" >\r\n            <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span>{{time.uVote}}\r\n          </button>\r\n          <button type=\"button\" class=\"dVote\" class=\"btn btn-default btn-md\" (click)=\"vote('tue', i, -1)\" >\r\n            <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span>{{time.dVote}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <h2>Wednesday</h2>\r\n      <div class = \"dayContainer\" *ngFor=\"let time of rooms?.wed let i = index\">\r\n        <div class = \"day\">\r\n          <h3 class = \"timeContainer\" >Open From {{timeFormat(time.st)}} - {{timeFormat(time.et)}}</h3>\r\n          <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-md\" (click)=\"vote('wed', i, 1)\" >\r\n            <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span>{{time.uVote}}\r\n          </button>\r\n          <button type=\"button\" class=\"dVote\" class=\"btn btn-default btn-md\" (click)=\"vote('wed', i, -1)\" >\r\n            <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span>{{time.dVote}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <h2>Thursday</h2>\r\n      <div class = \"dayContainer\" *ngFor=\"let time of rooms?.thu let i = index\">\r\n        <div class = \"day\">\r\n          <h3 class = \"timeContainer\" >Open From {{timeFormat(time.st)}} - {{timeFormat(time.et)}}</h3>\r\n          <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-md\" (click)=\"vote('thu', i, 1)\" >\r\n            <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span>{{time.uVote}}\r\n          </button>\r\n          <button type=\"button\" class=\"dVote\" class=\"btn btn-default btn-md\" (click)=\"vote('thu', i, -1)\" >\r\n            <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span>{{time.dVote}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class = \"featureSection\">\r\n      <h2>Features</h2>\r\n      <div class = \"featureContainer\">\r\n        <div class = \"feature\" *ngIf=\"loaded\">\r\n          <h3 class = \"featureName\">Outlets</h3>\r\n          <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-md\" (click)=\"vote('hasOutlets', -1, 1)\" >\r\n            <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span>{{rooms.hasOutlets.uVote}}\r\n          </button>\r\n          <button type=\"button\" class=\"dVote\" class=\"btn btn-default btn-md\" (click)=\"vote('hasOutlets', -1, -1)\" >\r\n            <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span>{{rooms.hasOutlets.dVote}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class = \"featureContainer\">\r\n        <div class = \"feature\" *ngIf=\"loaded\">\r\n          <h3 class = \"featureName\">White Board</h3>\r\n          <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-nd\" (click)=\"vote('whiteBoard', -1, 1)\" >\r\n            <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span>{{rooms.whiteBoard.uVote}}\r\n          </button>\r\n          <button type=\"button\" class=\"dVote\" class=\"btn btn-default btn-md\"(click)=\"vote('whiteBoard', -1, -1)\" >\r\n            <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span>{{rooms.whiteBoard.dVote}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class = \"commentSection\">\r\n      <h2>Comments</h2>\r\n      <form id = \"commentBox\" (submit)=\"onCommentSubmit()\">\r\n        Add A Comment:\r\n        <input class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\">\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n      </form>\r\n      <div class = \"commentContainer\" *ngFor = \"let comment of rooms?.comments let i = index\">\r\n        <p class = \"comment\">\"{{comment.content}}\"</p>\r\n        <p class = \"commentUser\">{{comment.email}} </p>\r\n        <button type=\"button\" class=\"uVote\" class=\"btn btn-primary btn-sm\"  (click)=\"vote('comments', i, 1)\" >\r\n          <span class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></span> {{comment.uVote}}\r\n        </button>\r\n        <button type=\"button\"  class=\"dVote\" class=\"btn btn-default btn-sm\" (click)=\"vote('comments', i, -1)\" >\r\n          <span class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></span> {{comment.dVote}}\r\n        </button>\r\n        <p class = \"date\">{{comment.date}}</p>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body>\r\n    <div *ngIf=\"user && !add && !delete && !finalize\">\r\n      <h1>My Schedule</h1>\r\n      <div style=\"overflow: auto\">\r\n        <table>\r\n          <thead></thead>\r\n          <tbody>\r\n            <tr *ngIf=\"!isFinalized\">\r\n              <td class=\"finalize\" colspan=\"6\"><input class=\"btn btn-primary\" type=\"button\" value=\"Finalize Schedule\" (click)=\"clickFinalize()\"></td>\r\n            </tr> \r\n            <tr class=\"table-title\">\r\n              <td class=\"left-column\"><h3>NAME</h3></td> \r\n              <td style=\"min-width: 125px\"><h3>CLASS #</h3></td> \r\n              <td style=\"min-width: 100px\"><h3>DAYS</h3></td> \r\n              <td style=\"min-width: 125px\"><h3>TIME</h3></td> \r\n              <td style=\"min-width: 150px\"><h3>LOCATION</h3></td> \r\n              <td style=\"min-width: 175px\"><h3>INSTRUCTOR</h3></td> \r\n              <td *ngIf=\"schedule.length > 0\" style=\"background: white; width: 2.5%; border: none;\"></td> \r\n            </tr>\r\n            <tr *ngFor=\"let sched of schedule; let i = index;\" colspan=\"6\" style=\"background-color: white\">\r\n              <td class=\"left-column\">{{sched.name}} {{sched.num}}</td> \r\n              <td>{{sched.sec}}</td> \r\n              <td>{{sched.day}}</td> \r\n              <td>{{sched.time}}</td> \r\n              <td>{{sched.location}}</td> \r\n              <td>{{sched.prof}}</td> \r\n              <!-- https://getbootstrap.com/docs/3.3/components/ --> \r\n              <td style=\"padding: 0;\"> \r\n                <button class=\"btn trash\" (click)=\"clickDelete(i)\"> \r\n                  <span class=\"fa fa-trash\" aria-hidden=\"true\"></span> \r\n                </button> \r\n              </td> \r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"6\" style=\"padding: 0px\">\r\n                <button class=\"btn btn-primary\" style=\"width : 100%\" value=\"Add Course\" (click)=\"clickAdd()\">\r\n                  <span class=\"fa fa-plus\" aria-hidden=\"true\"></span> Add Course\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n      \r\n    <div *ngIf=\"user && add && !delete\">\r\n      <app-course (afterConfirm)=\"onCourseAdd($event)\"></app-course>\r\n    </div>\r\n    \r\n    <div *ngIf=\"user && !add && delete\" style=\"text-align: center;\"> \r\n      <h1>Are you sure you want to remove?</h1>\r\n      <h3>{{deleteMessage}}</h3>\r\n      <div>\r\n          <button class=\"btn btn-default\" style=\"width: 33%\" (click)=\"onCourseDelete(true)\">\r\n            <span class=\"fa fa-check\" aria-hidden=\"true\"></span> Yes\r\n          </button>\r\n        <button class=\"btn btn-primary\" style=\"width: 33%\" (click)=\"onCourseDelete(false)\">\r\n          <span class=\"fa fa-remove\" aria-hidden=\"true\"></span> No\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"user && !add && !delete && finalize && !isFinalized\" style=\"text-align: center;\"> \r\n      <h1>Are you sure you want to finalize your schedule?</h1>\r\n      <div>\r\n          <button class=\"btn btn-default\" style=\"width: 33%\" (click)=\"onFinalize(true)\">\r\n            <span class=\"fa fa-check\" aria-hidden=\"true\"></span> Yes\r\n          </button>\r\n        <button class=\"btn btn-primary\" style=\"width: 33%\" (click)=\"onFinalize(false)\">\r\n          <span class=\"fa fa-remove\" aria-hidden=\"true\"></span> No\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n\r\n  "

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Pick A Course</h1>\r\n<select id=\"courseSelect\" class=\"form-control\" (change)=\"showBuddies()\">\r\n  <option selected hidden></option>\r\n  <option *ngFor=\"let class of schedule\"> {{class.name}} {{class.num}}</option>\r\n</select>\r\n\r\n\r\n<div id=\"buddylist\" style=\"display: none\" *ngIf=\"loaded\">\r\n\r\n  <h1 class = \"courseTitle\">Potential Study Buddies For {{test.name}}</h1>\r\n  <div class=\"studdyBuddies\">\r\n    <h3 class=\"buddy\" *ngFor = \"let buddy of test.buddies\" (click)=\"message(buddy.name)\">{{buddy.name}}</h3>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title> User manual </title>\r\n  </head>\r\n  <body style=\"text-align: left\">\r\n      <h2 class=\"page-header\" style=\"text-align: center;\">User Manual</h2>\r\n      <h3 class=\"header\"> [Overview] </h3>\r\n      <p class= \"tab\">\r\n        For a student, finding the ideal place to study can be a reoccurring issue.\r\n        With the inception of OpenClassroom, our goal is to minimize students' already\r\n        high stress levels by a simple solution to finding optimal classrooms to study in.\r\n        Our application will be able to search for classrooms based on a specific time,\r\n        a specific building, or by a \"now\" function that will list all available classrooms\r\n        that are open at the time of query.\r\n      <h3 class=\"header\"> [Registration] </h3>\r\n      To register, you will need a valid e-mail address.\r\n      <ol type = \"1\">\r\n        <li> Click on the register tab on the top right corner of the navigation bar. </li>\r\n        <li> Enter your name.</li>\r\n        <li> Enter a username. (Other users will be able to identify you by this.)</li>\r\n        <li> Enter a valid e-mail address.</li>\r\n        <li> Create a password.</li>\r\n        <li> Click submit!</li>\r\n        <li> Congratulations! You will now be able to login and access the services provided.</li>\r\n      </ol>\r\n    \r\n      <h3 class=\"header\"> [Login] </h3>\r\n      To login, you will need to have a registered account.\r\n      <ol type = \"1\">\r\n        <li> Click on the login tab on the top right corner of the navigation bar. </li>\r\n        <li> Enter your e-mail address.</li>\r\n        <li> Enter your password.</li>\r\n        <li> Click submit!</li>\r\n      </ol>\r\n    \r\n    <h3 class=\"header\"> [FAQ] </h3>\r\n    <ol type = \"1\">\r\n      <li> When will the application be released to the public? </li>\r\n        <ul>\r\n          <li> We are looking to launch in December, 2017! </li>\r\n        </ul>\r\n      <li> How can I become a part of the development team? </li>\r\n        <ul>\r\n          <li> Please refer to our developer guide!  </li>\r\n        </ul>\r\n      <li> I can't login! What should I do?</li>\r\n        <ul>\r\n          <li> Please make sure you're using the credentials you created your account\r\n        with, and if you are still unable to access your account, please contact us at\r\n        <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a>\r\n          </li>\r\n        </ul>\r\n    </ol>\r\n  </body>\r\n</html>"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(256);
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
    BuildingsService.prototype.getBuilding = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/buildings', { name: name }, { headers: headers }).map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.post('buildings', {name}, {headers : headers}).map(res => res.json()).catch(this.handleError);
    };
    BuildingsService.prototype.getBuildings = function () {
        return this.http.get('http://localhost:3000/buildings').map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.get('buildings').map(res => res.json()).catch(this.handleError);
    };
    BuildingsService.prototype.getBuildingNames = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/buildings/names', { headers: headers }).map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.get('buildings/names', {headers : headers}).map(res => res.json()).catch(this.handleError);
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

/***/ 289:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 45:
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindNowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindNowComponent = (function () {
    // Need to pass argument so it can be used in functions below
    function FindNowComponent(buildingService) {
        this.buildingService = buildingService;
        // Days the buildingService will query using
        this.days = ["x", "omon", "otue", "owed", "othu", "x", "x"];
        // The list that will be displayed after population in the show function
        this.roomsList = [];
        // Notifies the HTML to display the error message when out of hours
        this.show = false;
        //Arguments to pass to roomInfo
        this.buildingName = "";
        this.roomNumber = "";
    }
    // Set the day once when navigating to the find classroom page
    FindNowComponent.prototype.ngOnInit = function () {
        this.day = this.days[new Date().getDay()];
    };
    /*
    * Gets the rooms that are open and display when they are open
    * 1) Not "x" and between 8AM and 10 PM?
    * 2) Notify buildingService to get the buildings from MongoDB
    * 3) Push room name if st >= timesJSON[time].st && (st+30) <= timesJSON[time].et
    */
    FindNowComponent.prototype.showNow = function () {
        var _this = this;
        document.getElementById("nowTimes").style.display = "block";
        var st = new Date().getHours() * 60;
        // 1) Not "x" and between 8 AM and 10 PM?
        if (this.day != "x" && st >= 8 * 60 && st < 22 * 60) {
            // Clear roomsList for new list
            this.roomsList = [];
            // 2) Notify buildingService to get the buildings from MongoDB
            this.buildingService.getBuilding(this.name).subscribe(function (buildingList) {
                // roomsJSON = { name, mon, tue, wed, thu, omon, otue, owed, othu }
                var roomsJSON = buildingList.OpenBuilding[0].rooms;
                for (var room in roomsJSON) {
                    // timesJSON = [{ name, sec, days, location, st, et }]
                    var timesJSON = roomsJSON[room][_this.day];
                    for (var time in timesJSON) {
                        // 3) Push room name if st >= timesJSON[time].st && (st+30) <= timesJSON[time].et
                        if (st >= timesJSON[time].st && (st + 30) <= timesJSON[time].et) {
                            _this.roomsList.push({ name: roomsJSON[room].name, st: _this.timeFormat(timesJSON[time].st), et: _this.timeFormat(timesJSON[time].et) });
                        }
                    }
                }
                if (_this.roomsList.length > 0) {
                    _this.show = true;
                }
                else {
                    _this.show = false;
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.show = false;
        }
    };
    // Adjust time in minutes to stringified time (No 12:00 AM)
    FindNowComponent.prototype.timeFormat = function (time) {
        // 12 AM
        if (Math.trunc(time / 60) == 0) {
            if (time % 60 < 10) {
                return "12:0" + (time % 60) + " AM";
            }
            else {
                return "12:" + (time % 60) + " AM";
            }
        }
        else if (Math.trunc(time / 60) == 12) {
            if (time % 60 < 10) {
                return "12:0" + (time % 60) + " PM";
            }
            else {
                return "12:" + (time % 60) + " PM";
            }
        }
        // 1 PM to 12 AM (exclusive)
        if (time / 60 > 12) {
            if (time % 60 < 10) {
                return (Math.trunc(time / 60) - 12) + ":0" + (time % 60) + " PM";
            }
            else {
                return (Math.trunc(time / 60) - 12) + ":" + (time % 60) + " PM";
            }
        }
        else {
            if (time % 60 < 10) {
                return Math.trunc(time / 60) + ":0" + (time % 60) + " AM";
            }
            else {
                return Math.trunc(time / 60) + ":" + (time % 60) + " AM";
            }
        }
    };
    FindNowComponent.prototype.showRoom = function (room, number) {
        this.buildingName = room;
        this.roomNumber = number;
        document.getElementById("nowTimes").style.display = "none";
        document.getElementById("room2").style.display = "block";
    };
    return FindNowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindNowComponent.prototype, "name", void 0);
FindNowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-now',
        template: __webpack_require__(239),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object])
], FindNowComponent);

var _a;
//# sourceMappingURL=find-now.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    // Create the room based on user pair
    ChatService.prototype.createRoom = function (sender, sendee) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var payload = {
            user_1: sender,
            user_2: sendee
        };
        return this.http.post('http://localhost:3000/messages/create', payload, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('messages/create', payload, {headers: headers}).map(res => res.json());
    };
    // Tell the server to connect to server and join a room
    ChatService.prototype.joinRoom = function (ID) {
        // Connect once while on that page
        if (this.socket == null) {
            this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]("http://localhost:3000/");
            // this.socket = io.connect("https://openclassroom.herokuapp.com/");
        }
        this.socket.emit('join room', ID);
    };
    // Tell the server to send a message to those in the room
    ChatService.prototype.sendMessage = function (ID, sender, message) {
        this.socket.emit('add message', ID, sender, message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var payload = {
            sender: sender,
            msg: message,
            ID: ID
        };
        return this.http.post('http://localhost:3000/messages/send', payload, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('messages/send', payload, {headers: headers}).map(res => res.json());
    };
    // Create an observable that will read off the next message when the user gets a message
    ChatService.prototype.getSubscription = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatService.prototype.getMessages = function (ID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/messages/get', { ID: ID }, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('messages/get', {ID: ID}, {headers: headers}).map(res => res.json());
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(147);
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
    //=========== User Registration ============
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/register', user, {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/authenticate', user, {headers: headers}).map(res => res.json());
    };
    //=========== Schedule =====================
    AuthService.prototype.getSchedule = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:3000/users/schedule', email, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/schedule', email, {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.addScheduleItem = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:3000/users/schedule/add', item, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/schedule/add', item, {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.deleteScheduleItem = function (item) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:3000/users/schedule/delete', item, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('users/schedule/delete', item, {headers: headers}).map(res => res.json());
    };
    //=========== Courses ======================
    AuthService.prototype.getCourseNames = function () {
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/users/courses/names', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('users/courses/names', {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.getCourses = function () {
        // let headers = new Headers({ 'Content-Type' : 'application/json' });
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/users/courses', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('users/courses', {headers: headers}).map(res => res.json());
    };
    //=========== RoomInfo ======================
    AuthService.prototype.getRoomInfo = function (building, room) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/roominfo/getRoomInfo', { building: building, room: room }, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('roominfo/getRoomInfo', {building, room}, {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.addComment = function (building, room, email, comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/roominfo/addComment', { building: building, room: room, email: email, comment: comment }, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('roominfo/addComment', {building, room, email, comment}, {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.addVote = function (building, room, email, item, pos, nvote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/roominfo/addVote', { building: building, room: room, email: email, item: item, pos: pos, nvote: nvote }, { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post(roominfo/addVote', {building, room, email, item, pos, nvote}, {headers: headers}).map(res => res.json());
    };
    //=========== User Token ===================
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
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

/***/ })

},[290]);
//# sourceMappingURL=main.bundle.js.map