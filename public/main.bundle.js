webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(123);
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
    AuthService.prototype.getCourseNames = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/courses/names', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('users/courses/names', {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.getCourses = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/courses', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('users/courses', {headers: headers}).map(res => res.json());
    };
    AuthService.prototype.addScheduleItem = function (email, sec) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/addschedule', { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.get('users/addschedule', {headers: headers}).map(res => res.json());
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(213);
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
        return this.http.post('http://localhost:3000/building', { name: name }).map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.post('building', {name}).map(res => res.json()).catch(this.handleError);
    };
    BuildingsService.prototype.getBuildings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/buildings', null).map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.get('buildings', null).map(res => res.json()).catch(this.handleError);
    };
    BuildingsService.prototype.getBuildingNames = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/buildings/names', null).map(function (res) { return res.json(); }).catch(this.handleError);
        // return this.http.post('buildings/times', null).map(res => res.json()).catch(this.handleError);
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
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
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(20);
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
    }
    // Set the day once when navigating to the find classroom page
    FindNowComponent.prototype.ngOnInit = function () {
        this.day = this.days[new Date().getDay()];
    };
    /*
    * Gets the rooms that are open and display when they are open
    * 1) Not "x" and between 8AM and 10 PM?
    * 2) Notify buildingService to get the buildings from MongoDB
    * 3) Push room name if st >= timesJSON[time].st && (st+45) <= timesJSON[time].et OR st < timesJSON[time].st && timesJSON[time] > (st+60)
    */
    FindNowComponent.prototype.showNow = function () {
        var _this = this;
        var st = new Date().getHours() * 60;
        // 1) Not "x" and between 8 AM and 10 PM?
        if (this.day != "x" && st >= 8 * 60 && st + 45 <= 22 * 60) {
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
                        // 3) Push room name if st >= timesJSON[time].st && (st+45) <= timesJSON[time].et OR st < timesJSON[time].st && timesJSON[time] > (st+60)
                        if (st >= timesJSON[time].st && (st + 45) <= timesJSON[time].et) {
                            _this.roomsList.push({ name: roomsJSON[room].name, st: _this.timeFormat(timesJSON[time].st), et: _this.timeFormat(timesJSON[time].et) });
                            _this.show = true;
                        }
                        else {
                            // TODO: Eventually be open soon (30 minutes after the hour)
                            if (st < timesJSON[time].st && timesJSON[time] > (st + 60)) {
                                _this.roomsList.push({ name: roomsJSON[room].name, st: _this.timeFormat(timesJSON[time].st), et: _this.timeFormat(timesJSON[time].et) });
                                _this.show = true;
                            }
                        }
                    }
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
    return FindNowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindNowComponent.prototype, "name", void 0);
FindNowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-now',
        template: __webpack_require__(198),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object])
], FindNowComponent);

var _a;
//# sourceMappingURL=find-now.component.js.map

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(118);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
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
        template: __webpack_require__(193),
        styles: [__webpack_require__(177)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_usermanual_usermanual_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_devguide_devguide_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_find_home_find_home_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_buildings_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_find_now_find_now_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_find_times_find_times_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_course_course_component__ = __webpack_require__(105);
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
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_11__components_schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'usermanual', component: __WEBPACK_IMPORTED_MODULE_13__components_usermanual_usermanual_component__["a" /* UsermanualComponent */] },
    { path: 'devguide', component: __WEBPACK_IMPORTED_MODULE_14__components_devguide_devguide_component__["a" /* DevguideComponent */] },
    { path: 'findclassroom', component: __WEBPACK_IMPORTED_MODULE_16__components_find_home_find_home_component__["a" /* FindHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'findclassroom/now', component: __WEBPACK_IMPORTED_MODULE_22__components_find_now_find_now_component__["a" /* FindNowComponent */] },
    { path: 'findclassroom/building', component: __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__["a" /* FindComponent */] },
    { path: 'findclassroom/time', component: __WEBPACK_IMPORTED_MODULE_23__components_find_times_find_times_component__["a" /* FindTimesComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderComponent"],
            __WEBPACK_IMPORTED_MODULE_16__components_find_home_find_home_component__["a" /* FindHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_find_now_find_now_component__["a" /* FindNowComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_find_times_find_times_component__["a" /* FindTimesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_course_course_component__["a" /* CourseComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__services_buildings_service__["a" /* BuildingsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(12);
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
    function CourseComponent(authService) {
        this.authService = authService;
        this.courseChoice = null;
        this.confirm = false;
    }
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
            this.courseNumOptions = this.makeUnique(this.courseNumOptions.sort());
        }
    };
    CourseComponent.prototype.getCourseChoiceOptions = function () {
        if (this.courseNumOptions != null) {
            this.courseChoiceOptions = [];
            // Populate the choices the user can pick for the class they want to add
            for (var courses in this.currCourseName) {
                if (this.currCourseName[courses].num == this.courseNum) {
                    this.courseChoiceOptions.push(this.currCourseName[courses]);
                }
            }
            // Sort choices by section (no need to make unique since section number is unique)
            this.courseChoiceOptions = this.courseChoiceOptions.sort(function (a, b) { return a.sec - b.sec; });
        }
    };
    CourseComponent.prototype.change = function () {
        console.log();
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
    CourseComponent.prototype.getCurrItem = function () {
        // for (let i in this.courseAll[this.courseName]["courses"]) {
        //   if (this.courseAll[this.courseName]["courses"][i].sec == this.courseChoiceOptions) {
        //     this.currItem = this.courseAll[this.courseName]["courses"][i]
        //     break;
        //   }
        // }
    };
    CourseComponent.prototype.onSubmit = function () {
        if (this.courseAll && this.courseNameOptions && this.courseNumOptions && this.courseChoiceOptions && this.courseChoice) {
            this.confirm = true;
            console.log(this.courseChoice);
            this.confirmMessage = this.courseName + " " + this.courseChoice.num + " Class # " + this.courseChoice.sec + " " + this.courseChoice.day + " " + this.courseChoice.time + " " + this.courseChoice.location;
        }
    };
    CourseComponent.prototype.addClick = function (answer) {
        if (answer) {
            // (TEMP) Get the email of the user
            var email = localStorage.getItem('user');
            email = JSON.parse(email).email;
            console.log(this.courseChoice.sec);
            this.authService.addScheduleItem(email, this.courseChoice.sec);
            console.log("done");
        }
        else {
            // Reset
            this.courseNumOptions = null;
            this.courseChoiceOptions = null;
            this.courseChoice = null;
            this.confirm = false;
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
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-course',
        template: __webpack_require__(194),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CourseComponent);

var _a;
//# sourceMappingURL=course.component.js.map

/***/ }),
/* 106 */
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
        template: __webpack_require__(195),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 107 */
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
        template: __webpack_require__(196),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], DevguideComponent);

//# sourceMappingURL=devguide.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__ = __webpack_require__(69);
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
    function FindHomeComponent(buildingService) {
        this.buildingService = buildingService;
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
        }
    };
    // 3) Display button depending on id
    FindHomeComponent.prototype.displayOption = function (option) {
        if (document.getElementById("buttons").style.display == "block") {
            document.getElementById("buttons").style.display = "none";
            document.getElementById(option).style.display = "block";
            if (option == "now") {
                this.nowComponent.showNow();
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
        template: __webpack_require__(197),
        styles: [__webpack_require__(181)],
        // Needed to function call the FindNowComponent
        providers: [__WEBPACK_IMPORTED_MODULE_2__find_now_find_now_component__["a" /* FindNowComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _b || Object])
], FindHomeComponent);

var _a, _b;
//# sourceMappingURL=find-home.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(20);
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
            pageSteps: 2,
            margin: 0.5,
            range: {
                min: 8,
                max: 22
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 6,
                stepped: true
            }
        };
        // The list of all values from the building chosen ("cached")
        this.buildingList = null;
        // The list that will be displayed after population in the show function
        this.roomsList = [];
    }
    FindTimesComponent.prototype.ngOnInit = function () { };
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
        if (time > 720) {
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
    };
    return FindTimesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindTimesComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindTimesComponent.prototype, "day", void 0);
FindTimesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find-times',
        template: __webpack_require__(199),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object])
], FindTimesComponent);

var _a;
//# sourceMappingURL=find-times.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(21);
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
    // Need to pass arguments so it can be used in functions below
    function FindComponent(buildingService, router, flashMessage) {
        this.buildingService = buildingService;
        this.router = router;
        this.flashMessage = flashMessage;
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
        if (time > 720) {
            t += " PM";
        }
        else {
            t += " AM";
        }
        return t;
    };
    return FindComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FindComponent.prototype, "day", void 0);
FindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find',
        template: __webpack_require__(200),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_buildings_service__["a" /* BuildingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FindComponent);

var _a, _b, _c;
//# sourceMappingURL=find.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(12);
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
        template: __webpack_require__(201),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(21);
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
        template: __webpack_require__(202),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(40);
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
        template: __webpack_require__(203),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
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
        template: __webpack_require__(204),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
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
        this.user = { username: "sugi", email: "nlsugi10@gmail.com" };
        this.schedule = null;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        // this.authService.getSchedule().subscribe(schedule => {
        //   this.user = schedule.user;
        // },
        // err => {
        //   console.log(err);
        //   return false;
        // })
        this.user['email'] = "me";
        this.user['username'] = "Another";
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(205),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ScheduleComponent);

var _a, _b;
//# sourceMappingURL=schedule.component.js.map

/***/ }),
/* 116 */
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
        template: __webpack_require__(206),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], UsermanualComponent);

//# sourceMappingURL=usermanual.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(12);
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
/* 118 */
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
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".sticky-nav {\r\n    position:fixed; \r\n    top:0; \r\n    width:100%;\r\n    z-index: 100;\r\n}\r\n\r\n.content {\r\n    padding: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".buttons\r\n{\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "table {\r\n  width : 2000px;\r\n  height : auto;\r\n}\r\n\r\ntr{\r\nheight: 20px;\r\n}\r\n\r\ntd{\r\nborder-collapse: collapse;\r\n}\r\n\r\n.tablecontainer {\r\n  width : 100%;\r\n  height : 100%;\r\n  overflow : auto;\r\n  padding : 0, 0, 0, 0;\r\n}\r\n\r\n.opentime {\r\n  background-color : #81ea9d;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.closedtime {\r\n  background-color : #ed5d50;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.five-minute-chunk{\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n/*tool tip for each square*/\r\n.five-minute-chunk:hover .time-tool-tip{\r\n  width: 75px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  /*padding: 5px 0;*/\r\n  position:absolute;/*this is messing up when scrolling to the right, like wtih an offset for some reason*/\r\n  top: -20px;\r\n  left: 20px;\r\n  z-index: 1;\r\n  visibility: visible;\r\n  display: block;\r\n}\r\n\r\n.time-tool-tip{\r\nvisibility: hidden;\r\nz-index: 20;\r\n/* display: none; */ /* This is making the cells small. */\r\n}\r\n\r\n.five-minute-chunk:hover .time-tool-tip{\r\n  visibility: visible;\r\n}\r\n\r\n.left-column{\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\nleft: 0;\r\ntop: -50;\r\nbackground-color: #ffffff;\r\nwidth: 100px;\r\nborder: 2px solid black;\r\ntext-align: center;\r\nz-index: 20;\r\n}\r\n\r\n.left-column:hover {\r\nbackground-color: #76a8f7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "table {\r\n  width : 2000px;\r\n  height : auto;\r\n}\r\n\r\ntr{\r\nheight: 20px;\r\n}\r\n\r\ntd{\r\nborder-collapse: collapse;\r\n}\r\n\r\n.tablecontainer {\r\n  width : 100%;\r\n  height : 100%;\r\n  overflow : auto;\r\n  padding : 0, 0, 0, 0;\r\n}\r\n\r\n.opentime {\r\n  background-color : #81ea9d;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.closedtime {\r\n  background-color : #ed5d50;\r\n  padding : 5px, 5px, 5px, 5px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.five-minute-chunk{\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n/*tool tip for each square*/\r\n.five-minute-chunk:hover .time-tool-tip{\r\n  width: 75px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  /*padding: 5px 0;*/\r\n  position:absolute;/*this is messing up when scrolling to the right, like wtih an offset for some reason*/\r\n  top: -20px;\r\n  left: 20px;\r\n  z-index: 1;\r\n  visibility: visible;\r\n  display: block;\r\n}\r\n\r\n.time-tool-tip{\r\nvisibility: hidden;\r\nz-index: 20;\r\n/* display: none; */ /* This is making the cells small. */\r\n}\r\n\r\n.five-minute-chunk:hover .time-tool-tip{\r\n  visibility: visible;\r\n}\r\n\r\n.left-column{\r\nposition: -webkit-sticky;\r\nposition: sticky;\r\nleft: 0;\r\ntop: -50;\r\nbackground-color: #ffffff;\r\nwidth: 100px;\r\nborder: 2px solid black;\r\ntext-align: center;\r\nz-index: 20;\r\n}\r\n\r\n.left-column:hover {\r\nbackground-color: #76a8f7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <body>\r\n    <app-navbar class=\"sticky-nav\"></app-navbar>\r\n      <div class=\"content\">\r\n        <flash-messages></flash-messages>  \r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!confirm\">\r\n  <div class=\"form-group\">\r\n    <!-- 1) Choosing the course name -->\r\n    <h1 style=\"text-align: center\">Add a Course</h1>\r\n    <h2>Department</h2>\r\n    <select class=\"form-control\" style=\"text-align: center\" [(ngModel)]=\"courseName\" name=\"courseName\" (focus)=\"cache()\" (change)=\"getCourseNumOptions()\">\r\n      <option selected hidden></option>\r\n      <option *ngFor=\"let cname of courseNameOptions\">{{cname}}</option>\r\n    </select>\r\n\r\n    <!-- 2) Choosing the course number -->\r\n    <div *ngIf=\"courseNumOptions\">\r\n      <h2>Course Number</h2>\r\n      <select class=\"form-control\" style=\"text-align: center\" [(ngModel)]=\"courseNum\" name=\"courseNum\" (change)=\"getCourseChoiceOptions()\">\r\n        <option selected hidden></option>\r\n        <option *ngFor=\"let cid of courseNumOptions\"> {{cid}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <!-- 3) Finally choosing a class -->\r\n    <div *ngIf=\"courseChoiceOptions\">\r\n      <h2>Course</h2>\r\n      <select class=\"form-control\" style=\"text-align: center\" [(ngModel)]=\"courseChoice\" name=\"courseChoice\" (change)=\"change()\">\r\n        <option selected hidden></option>\r\n        <option *ngFor=\"let cchoice of courseChoiceOptions\" [ngValue]=\"cchoice\"> {{courseName}} {{cchoice.num}} |  #{{cchoice.sec}} {{cchoice.day}} {{cchoice.time}} {{cchoice.location}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <input type=\"button\" class=\"btn btn-primary\" style=\"width : 33%\" value=\"Add Course\" (click)=\"onSubmit()\">\r\n</form>\r\n\r\n<div *ngIf=\"confirm\" id=\"confirm\" style=\"text-align: center\">\r\n  <h1>Are you sure you want to add?</h1>\r\n  <h2>{{confirmMessage}}</h2>\r\n  <div>\r\n    <input type=\"button\" class=\"btn btn-primary\" style=\"width : 33%\" value=\"Yes\" (click)=\"addClick(true)\">\r\n    <input type=\"button\" class=\"btn btn-primary\" style=\"width : 33%\" value=\"No\" (click)=\"addClick(false)\">\r\n  </div>\r\n</div>"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<h2 classs= \"page-header\">Dashboard</h2>\r\n<p>Set your schedule up here</p>\r\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title> Developer Guide </title>\r\n</head>\r\n\r\n<div>\r\n  <h2 class=\"page-header\" style=\"text-align: center;\">Developer Guide</h2>\r\n  \r\n  <h3 class=\"header\"> [What is Open Classroom?] </h3>\r\n  <body>\r\n    As computer science students, we have personally had issues finding open rooms to study in. So we created an app to let students know what classrooms and labs are open. Currently students have no easy way to find this out. They have to chance upon a room or search physically till they find one. We provide a listing of what rooms are open to make the lives of students easier. In addition, students will soon be able to upload their schedules and Open Classroom will suggest where they can go to study. There are also social elements in the works, where students can find other people to study with whether they are in the same class or taking a different section. Chat functionality and note sharing are also on the way. A means for users updating erroneous information and having it user moderated will also be implemented. This application will surely increase the student’s knowledgebase of where they can prepare for their next exam or simply get the help they need in a free space devoid of professor involvement.\r\n  </body>\r\n  \r\n  <h3 class=\"header\"> [Features] </h3>\r\n  <body>\r\n    <u>Currently Live</u>\r\n    <ul>\r\n      <li>Signup</li>\r\n      <li>Login/Logout</li>\r\n      <li>Get Open Classroom by Building</li>\r\n    </ul>\r\n    <u>In Progress</u>\r\n    <ul>\r\n      <li>Open Classroom based on Schedule</li>\r\n      <li>User Schedule Building</li>\r\n      <li>User Chatroom</li>\r\n      <li>User Group Boards</li>\r\n      <li>File Transfer between Users</li>\r\n    </ul>\r\n  </body>\r\n  \r\n  <h3 class=\"header\"> [Setup] </h3>\r\n  <body>\r\n    You can install the Open Classroom application by downloading the source code directly and unzipping the contents into a folder. Alternatively, you can also fork project. As this is a MEAN stack application, you must <strong>install the 4 dependencies</strong>:\r\n    <ol type = \"1\">\r\n      <li> <strong>MongoDB</strong> (via website)</li>\r\n      <li> <strong>Angular 2.0</strong> (via npm install)</li>\r\n      <li> <strong>ExpressJS</strong> (via npm install)</li>\r\n      <li> <strong>NodeJS</strong> (via website)</li>\r\n    </ol>\r\n    Furthermore, you must <strong>install (\"ng install\") the node_modules folder</strong> into these 2 folders <strong>using a terminal at that path location</strong>:\r\n    <ol type = \"1\">\r\n      <li> \"openclassroom\" folder</li>\r\n      <li> \"openclassroom/angular-src\" folder</li>\r\n    </ol>\r\n\r\n    <u>Populate your MongoDB Database with Classroom Content</u>\r\n    <ol type = \"1\">\r\n      <li> Navigate where you installed MongoDB (default location: C:\\Program Files\\MongoDB\\Server\\3.4\\bin) and <strong>run \"mongod.exe\"</strong> or the <strong>\"mongod.exe\" shortcut</strong> in the scraper folder</li>\r\n      <li> Navigate to the \"scraper\" folder</li>\r\n      <li> In a terminal at this path location, run \"node scraper\"</li>\r\n    </ol>\r\n\r\n    <u>Run the Open Classroom Application on Localhost</u>\r\n    <ol type = \"1\">\r\n      <li> Make sure <strong>\"mongod.exe\"</strong> is running (if not, run \"mongod.exe\" as seen above) </li>\r\n      <li> Open a new terminal in the <strong>\"openclassroom\"</strong> folder</li>\r\n      <li> Use the command <strong>\"npm start\"</strong> or <strong>\"npm serve\"</strong> or <strong>\"nodemon\"</strong> (see dependencies) </li>\r\n      <li> <strong>Open a web browser</strong> (Chrome, Edge, Firefox, etc.) and go to <strong>\"localhost:3000\"</strong> </li>\r\n    </ol>\r\n  </body>\r\n  \r\n  <h3 class=\"header\"> [Dependencies] </h3>\r\n  <body>\r\n    <u>Open Classroom uses the MEAN stack</u>\r\n    <ul>\r\n      <li><a href=\"https://www.mongodb.com/download-center\"> MongoDB </a></li>\r\n      <li><a href=\"https://github.com/angular/angular-cli\"> Angular 2.0</a></li>\r\n      <li><a href=\"https://github.com/expressjs/express\"> ExpressJS </a></li>\r\n      <li><a href=\"https://nodejs.org/en/download/\"> NodeJS </a></li>\r\n    </ul>\r\n    <i>(Angular 2.0 and ExpressJS are installed using \"ng install\". MongoDB and NodeJS shall be installed from their respective websites.)</i> \r\n    <br>\r\n    <br>\r\n    <u>Helpful Applications</u>\r\n    <ul>\r\n      <li> <a href=\"https://nodemon.io/\">Nodemon</a> - an application that updates your project without having to restart \"npm start\" or \"ng serve\" </li>\r\n      <li> <a href=\"https://robomongo.org/\">Robomongo</a> - a MongoDB client that displays the data in your database (when connected)</li>\r\n    </ul>\r\n  </body>\r\n\r\n  <h3 class=\"header\"> [OpenClassroom Project Tree] </h3>\r\n  <body>\r\n    <ul>\r\n      <li>angular-src (where our angular project resides)\r\n        <ul>\r\n          <li>e2e (for testing)</li>\r\n          <li>node_modules (dependencies installed based on package.json)</li>\r\n          <li>src\r\n            <ul>\r\n              <li>app (where the pieces to make the application resides)\r\n                <ul>\r\n                  <li>components (modules that are added to the website)</li>\r\n                  <li>guards (protects routes)</li>\r\n                  <li>services (authenticate and distribute data)</li>\r\n                </ul>\r\n              </li>\r\n              <li>assets</li>\r\n              <li>environments</li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>config (where JSON Web Token strategy and database is located)</li>\r\n      <li>models (what objects the project will be interacting with)</li>\r\n      <li>node_modules (dependencies installed based on package.json)</li>\r\n      <li>public (deployment files and starting page location)</li>\r\n      <li>routes (set up GET and POST requests here)</li>\r\n      <li>scraper (where CSULB population happens)\r\n        <ul>\r\n        <li>open-classroom-data (JSON file with pre-scraped buildings 2017)</li>\r\n        <li>node_modules (dependencies installed based on package.json)</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </body>\r\n\r\n  <h3 class=\"header\"> [How do I contribute?] </h3>\r\n  <body>\r\n    If you want to contribute to the project, feel free to report bugs, download the source code, or fork the project.\r\n    <ul>\r\n      <li>Source Code: <a href=\"https://github.com/jonathanpchan/openclassroom\">https://github.com/jonathanpchan/openclassroom</a></li>\r\n      <li>Issue Tracker: <a href=\"https://github.com/jonathanpchan/openclassroom/issues\">https://github.com/jonathanpchan/openclassroom/issues</a></li>\r\n    </ul>\r\n  </body>\r\n\r\n  <h3 class=\"header\"> [Support] </h3>\r\n  <body>\r\n    If you have any questions, feel free to contact us at <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a> \r\n  </body>\r\n</div>\r\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<!-- 1) Building Select -->\r\n<div class=\"form-group\">\r\n  <h1 style=\"text-align: center;\" id=\"title\">Building</h1>\r\n  <select class=\"form-control\" [(ngModel)]=\"building\" name=\"building\" (focus)=\"displayButtons($event)\">\r\n    <option *ngFor=\"let buildingName of buildingNames\"> {{buildingName}} </option>\r\n  </select>\r\n</div>\r\n\r\n<!-- 2) Button Select -->\r\n<div class=\"buttons\" id=\"buttons\" style=\"display: none\">\r\n  <input type=\"button\" class=\"btn btn-primary\" (click)=\"displayOption('all')\" style=\"width : 33%\" value=\"All Rooms\">\r\n  <input type=\"button\" class=\"btn btn-primary\" (click)=\"displayOption('now')\" style=\"width : 33%\" value=\"Right Now\">    \r\n  <input type=\"button\" class=\"btn btn-primary\" (click)=\"displayOption('times')\" style=\"width : 33%\" value=\"By Time\">\r\n</div>\r\n\r\n<!-- 3a) Get all rooms based on building and time -->\r\n<app-find id=\"all\" style=\"display: none\" name={{building}} day={{building}}></app-find>\r\n  \r\n<!-- 3b) Get all rooms based on building -->\r\n<app-find-now id=\"now\" style=\"display: none\" name={{building}}></app-find-now>\r\n\r\n<!-- 3c) Get all rooms based on building and time -->\r\n<app-find-times id=\"times\" style=\"display: none\" name={{building}} day={{building}}></app-find-times>\r\n  "

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"!show\" style=\"text-align: center\">No rooms currently available in {{name}}</h1>\r\n<h2 *ngFor=\"let room of roomsList\">\r\n    Room: {{room.name}} from {{room.st}} until {{room.et}}\r\n</h2>"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <button (click) = \"show('omon')\" class=\"btn btn-primary\" style=\"width:24%\"> Monday</button>\r\n  <button (click) = \"show('otue')\" class=\"btn btn-primary\" style=\"width:24%\"> Tuesday</button>\r\n  <button (click) = \"show('owed')\" class=\"btn btn-primary\" style=\"width:24%\"> Wednesday</button>\r\n  <button (click) = \"show('othu')\" class=\"btn btn-primary\" style=\"width:24%\"> Thursday</button>\r\n</div>\r\n<nouislider [config]=\"timeSliderConfig\" [(ngModel)]=\"timeRange\" (ngModelChange)=\"onChange($event)\" [ngModelOptions]=\"{standalone: true}\" id=\"slider\" style=\"margin-left: auto; margin-right: auto\"></nouislider>\r\n<div class=\"tablecontainer\" id=\"table-2\" style=\"display: none\">\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <th></th>\r\n        <th colspan=\"6\" *ngFor=\"let time of times | slice:tstart:tend\">{{time}}</th>\r\n      </tr>\r\n      <tr *ngFor=\"let rooms of roomsList\">\r\n        <th class=\"left-column\">{{name}}-{{rooms.name}}</th>\r\n        <td class =\"five-minute-chunk\" *ngFor=\"let room of rooms?.room | slice:start:end let i = index \" [ngClass]=\"room ? 'opentime' : 'closedtime'\">\r\n          <span class=\"time-tool-tip\">{{displayToolTip(i)}}</span><!-- this messes up the left column for some reason-->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <button (click) = \"show('omon')\" class=\"btn btn-primary\" style=\"width:24%\"> Monday</button>\r\n  <button (click) = \"show('otue')\" class=\"btn btn-primary\" style=\"width:24%\"> Tuesday</button>\r\n  <button (click) = \"show('owed')\" class=\"btn btn-primary\" style=\"width:24%\"> Wednesday</button>\r\n  <button (click) = \"show('othu')\" class=\"btn btn-primary\" style=\"width:24%\"> Thursday</button>\r\n</div>\r\n\r\n<div class=\"tablecontainer\" id=\"table\" style=\"display: none\">\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <th></th>\r\n        <th colspan=\"12\" *ngFor=\"let time of times\">{{time}}</th>\r\n      </tr>\r\n      <tr *ngFor=\"let rooms of roomsList\">\r\n        <th class=\"left-column\">{{name}}-{{rooms.name}}</th>\r\n        <td class =\"five-minute-chunk\" *ngFor=\"let room of rooms?.room | slice:96:264 let i = index \" [ngClass]=\"room ? 'opentime' : 'closedtime'\">\r\n          <span class=\"time-tool-tip\">{{displayToolTip(i)}}</span><!-- this messes up the left column for some reason-->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Open Classroom</h1>\r\n  <p class=\"lead\">Find your study buddy here</p>\r\n  <div *ngIf = \"!authService.loggedIn()\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n  </div>\r\n  <div *ngIf = \"authService.loggedIn()\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/findclassroom']\">Find Open Classroom</a> <a class=\"btn btn-default\">Find Study Buddy</a>\r\n  </div>\r\n\r\n  <div>\r\n    <p>\r\n      <br /><a [routerLink]=\"['/usermanual']\">User Manual</a> | <a [routerLink]=\"['/devguide']\">Dev Guide</a> \r\n      <!--<a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"> for need authorization-->\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h3>Find the Best Study Spot!</h3>\r\n    <p>Find open rooms by building or by schedule.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Study with fellow Study Buddies!</h3>\r\n    <p>Find others in the same program to study with.</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Share Class Notes!</h3>\r\n    <p>Share notes to get an edge on the competition.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n</form>\r\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<!-- Modeled after: https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_collapse&stacked=h-->\r\n\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">OpenClassroom</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/schedule']\">My Schedule</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/findclassroom']\">Find Classroom</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/findbuddy']\">Find Buddy</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/messages']\">Messages</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/groups']\">Groups</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Settings</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"[active]\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register </a></li>\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n    <!-- <h2 class=\"page-header\">My Schedule</h2> -->\r\n    <h1 style=\"text-align: center;\" id=\"title\">My Schedule</h1>\r\n    <ul class=\"list-group\">\r\n      <li class= \"list-group-item\">Username: {{user.username}}</li>\r\n      <li class= \"list-group-item\">Email: {{user.email}}</li>\r\n    </ul>\r\n    <table class=\"table-striped, table-bordered\" style=\"width : 100%\">\r\n      <thead></thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>NAME</td>\r\n          <td>CLASS #</td>\r\n          <td>DAYS</td>\r\n          <td>TIME</td>\r\n          <td>LOCATION</td>\r\n          <td>INSTRUCTOR</td>\r\n        </tr>\r\n        <td *ngIf=\"schedule; else display\" colspan=\"6\" style=\"border : solid 1px black; vertical-align: top; height:30rem\">No Courses</td>\r\n        <ng-template #display>\r\n          <tr>\r\n            <td>A</td>\r\n            <td>B</td>\r\n            <td>C</td>\r\n            <td>D</td>\r\n            <td>E</td>\r\n            <td>F</td>\r\n          </tr>\r\n          <tr>\r\n            <td>A</td>\r\n            <td>B</td>\r\n            <td>C</td>\r\n            <td>D</td>\r\n            <td>E</td>\r\n            <td>F</td>\r\n          </tr>\r\n        </ng-template>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <input type=\"button\" class=\"btn btn-primary\" style=\"width : 33%\" value=\"Add Course\">\r\n  <app-course></app-course>\r\n  "

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title> User manual </title>\r\n</head>\r\n\r\n<div>\r\n  <h2 class=\"page-header\" style=\"text-align: center;\">User Manual</h2>\r\n  <h3 class=\"header\"> [Overview] </h3>\r\n  <p class= \"tab\">\r\n    <body>\r\n    For a student, finding the ideal place to study can be a reoccurring issue.\r\n    With the inception of OpenClassroom, our goal is to minimize students' already\r\n    high stress levels by a simple solution to finding optimal classrooms to study in.\r\n    Our application will be able to search for classrooms based on a specific time,\r\n    a specific building, or by a \"now\" function that will list all available classrooms\r\n    that are open at the time of query.\r\n  </body></p>\r\n  <h3 class=\"header\"> [Registration] </h3>\r\n  <body>\r\n  To register, you will need a valid e-mail address.\r\n</body>\r\n  <ol type = \"1\">\r\n    <li> Click on the register tab on the top right corner of the navigation bar. </li>\r\n    <li> Enter your name.</li>\r\n    <li> Enter a username. (Other users will be able to identify you by this.)</li>\r\n    <li> Enter a valid e-mail address.</li>\r\n    <li> Create a password.</li>\r\n    <li> Click submit!</li>\r\n    <li> Congratulations! You will now be able to login and access the services provided.</li>\r\n  </ol>\r\n\r\n  <h3 class=\"header\"> [Login] </h3>\r\n  <body>\r\n  To login, you will need to have a registered account.\r\n  </body>\r\n  <ol type = \"1\">\r\n    <li> Click on the login tab on the top right corner of the navigation bar. </li>\r\n    <li> Enter your e-mail address.</li>\r\n    <li> Enter your password.</li>\r\n    <li> Click submit!</li>\r\n  </ol>\r\n</div>\r\n\r\n<h3 class=\"header\"> [FAQ] </h3>\r\n<ol type = \"1\">\r\n  <li> When will the application be released to the public? </li>\r\n    <ul>\r\n      <li> We are looking to launch in December, 2017! </li>\r\n    </ul>\r\n  <li> How can I become a part of the development team? </li>\r\n    <ul>\r\n      <li> Please refer to our developer guide!  </li>\r\n    </ul>\r\n  <li> I can't login! What should I do?</li>\r\n    <ul>\r\n      <li> Please make sure you're using the credentials you created your account\r\n    with, and if you are still unable to access your account, please contact us at\r\n    <a href=\"openclassroom2017@gmail.com\">openclassroom2017@gmail.com.</a>\r\n      </li>\r\n    </ul>\r\n</ol>\r\n"

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ })
],[241]);
//# sourceMappingURL=main.bundle.js.map