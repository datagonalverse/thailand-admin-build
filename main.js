(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_components/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_components/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_components/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, toastr) {
        this.authenticationService = authenticationService;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            // if (err.status === 401) {
            //     // auto logout if 401 response returned from api
            //     this.authenticationService.logout();
            //     location.reload(true);
            // }
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            else if (err.status === 400) {
                if (localStorage.getItem('autoLogoutSet') == 'no') {
                    // there is an error either wrong token or expired token
                    _this.toastr.errorToastr(err.error.error, 'Oops!');
                    setTimeout(function () {
                        if (err.error.error == "An error while decoding token." || err.error.error == "Token not provided." || err.error.error == "Provided token is expired.") {
                            _this.toastr.infoToastr('Logging you Out ...', 'Toast', { position: 'top-center' });
                        }
                    }, 3500);
                    // wait for some time and logs user out
                    setTimeout(function () {
                        _this.authenticationService.logout();
                        if (err.error.error == "An error while decoding token." || err.error.error == "Token not provided." || err.error.error == "Provided token is expired.") {
                            location.reload(true);
                        }
                    }, 6000);
                    localStorage.setItem('autoLogoutSet', 'yes');
                }
                else {
                }
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        // let currentUser = this.authenticationService.currentUserValue;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/articles/article-category.ts":
/*!******************************************************!*\
  !*** ./src/app/_models/articles/article-category.ts ***!
  \******************************************************/
/*! exports provided: ArticleCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCategory", function() { return ArticleCategory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleCategory = /** @class */ (function () {
    function ArticleCategory(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.description = jsonFromApi.description;
        this.created_at = jsonFromApi.created_at;
    }
    ArticleCategory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], ArticleCategory);
    return ArticleCategory;
}());

;


/***/ }),

/***/ "./src/app/_models/articles/article.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/articles/article.ts ***!
  \*********************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Article = /** @class */ (function () {
    function Article(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.num_downloads = jsonFromApi.num_downloads;
        this.article_summary = jsonFromApi.article_summary;
        this.article_body = jsonFromApi.article_body;
        this.article_title = jsonFromApi.article_title;
        this.article_featured_image = jsonFromApi.article_featured_image;
        this.article_source = jsonFromApi.article_source;
        this.article_category_id = jsonFromApi.article_category_id;
        this.article_category_name = jsonFromApi.article_category_name;
        this.user_name = jsonFromApi.user_name;
        this.search_tags = jsonFromApi.search_tags;
        this.originating_region = jsonFromApi.originating_region;
        this.region_name = jsonFromApi.region_name;
        this.image_changed = jsonFromApi.image_changed;
        this.created_by = jsonFromApi.created_by;
        this.status = jsonFromApi.status;
        this.number_of_views = jsonFromApi.number_of_views;
        this.created_at = jsonFromApi.created_at;
    }
    Article = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Article);
    return Article;
}());

;


/***/ }),

/***/ "./src/app/_models/configuration.ts":
/*!******************************************!*\
  !*** ./src/app/_models/configuration.ts ***!
  \******************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Configuration = /** @class */ (function () {
    function Configuration(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.company_name = jsonFromApi.company_name;
        this.email = jsonFromApi.email;
        this.subscriber_url = jsonFromApi.subscriber_url;
        this.company_address = jsonFromApi.company_address;
        this.website = jsonFromApi.website;
        this.company_logo = jsonFromApi.company_logo;
        this.pagination_length = jsonFromApi.pagination_length;
        this.phone_number = jsonFromApi.phone_number;
        this.return_policy = jsonFromApi.return_policy;
        this.currency = jsonFromApi.currency;
        this.num_receipt_print = jsonFromApi.num_receipt_print;
        this.default_background_color = jsonFromApi.default_background_color;
        this.created_at = jsonFromApi.created_at;
    }
    Configuration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Configuration);
    return Configuration;
}());

;


/***/ }),

/***/ "./src/app/_models/contacts/contact-detail.ts":
/*!****************************************************!*\
  !*** ./src/app/_models/contacts/contact-detail.ts ***!
  \****************************************************/
/*! exports provided: ContactDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetail", function() { return ContactDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactDetail = /** @class */ (function () {
    function ContactDetail(jsonFromApi) {
        this.contact_id = jsonFromApi.contact_id;
        this.id = jsonFromApi.id;
        this.detail_value = jsonFromApi.detail_value;
        this.detail_key = jsonFromApi.detail_key;
        this.created_at = jsonFromApi.created_at;
    }
    ContactDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], ContactDetail);
    return ContactDetail;
}());

;


/***/ }),

/***/ "./src/app/_models/contacts/contact-group.ts":
/*!***************************************************!*\
  !*** ./src/app/_models/contacts/contact-group.ts ***!
  \***************************************************/
/*! exports provided: ContactGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactGroup", function() { return ContactGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactGroup = /** @class */ (function () {
    function ContactGroup(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.description = jsonFromApi.description;
        this.created_at = jsonFromApi.created_at;
    }
    ContactGroup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], ContactGroup);
    return ContactGroup;
}());

;


/***/ }),

/***/ "./src/app/_models/contacts/contact.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/contacts/contact.ts ***!
  \*********************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Contact = /** @class */ (function () {
    function Contact(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.contact_detail = jsonFromApi.contact_detail;
        this.description = jsonFromApi.description;
        this.contact_group_id = jsonFromApi.contact_group_id;
        this.group_name = jsonFromApi.group_name;
        this.contact_name = jsonFromApi.contact_name;
        this.contact_picture = jsonFromApi.contact_picture;
        this.image_changed = jsonFromApi.image_changed;
        this.primary_phone = jsonFromApi.primary_phone;
        this.secondary_phone = jsonFromApi.secondary_phone;
        this.address = jsonFromApi.address;
        this.district = jsonFromApi.district;
        this.region = jsonFromApi.region;
        this.region_name = jsonFromApi.region_name;
        this.district_name = jsonFromApi.district_name;
        this.status = jsonFromApi.status;
        this.number_of_views = jsonFromApi.number_of_views;
        this.town = jsonFromApi.town;
        this.email_address = jsonFromApi.email_address;
        this.gps_location = jsonFromApi.gps_location;
        this.is_published = jsonFromApi.is_published;
        this.created_at = jsonFromApi.created_at;
    }
    Contact = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Contact);
    return Contact;
}());

;


/***/ }),

/***/ "./src/app/_models/contacts/district.ts":
/*!**********************************************!*\
  !*** ./src/app/_models/contacts/district.ts ***!
  \**********************************************/
/*! exports provided: District */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "District", function() { return District; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var District = /** @class */ (function () {
    function District(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.description = jsonFromApi.description;
        this.region = jsonFromApi.region;
        this.created_at = jsonFromApi.created_at;
    }
    District = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], District);
    return District;
}());

;


/***/ }),

/***/ "./src/app/_models/contacts/region.ts":
/*!********************************************!*\
  !*** ./src/app/_models/contacts/region.ts ***!
  \********************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Region = /** @class */ (function () {
    function Region(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.description = jsonFromApi.description;
        this.created_at = jsonFromApi.created_at;
    }
    Region = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Region);
    return Region;
}());

;


/***/ }),

/***/ "./src/app/_models/doc-file.ts":
/*!*************************************!*\
  !*** ./src/app/_models/doc-file.ts ***!
  \*************************************/
/*! exports provided: DocFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocFile", function() { return DocFile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocFile = /** @class */ (function () {
    function DocFile(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.file_name = jsonFromApi.file_name;
        this.s3 = jsonFromApi.s3;
        this.file_path = jsonFromApi.file_path;
        this.file_type = jsonFromApi.file_type;
        this.document_id = jsonFromApi.document_id;
        this.created_at = jsonFromApi.created_at;
    }
    DocFile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], DocFile);
    return DocFile;
}());

;


/***/ }),

/***/ "./src/app/_models/graph.ts":
/*!**********************************!*\
  !*** ./src/app/_models/graph.ts ***!
  \**********************************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Graph = /** @class */ (function () {
    function Graph(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.x_axis_label = jsonFromApi.x_axis_label;
        this.x_axis_type = jsonFromApi.x_axis_type;
        this.title = jsonFromApi.title;
        // this.document_group = jsonFromApi.document_group;
        this.x_axis_value = jsonFromApi.x_axis_value;
        this.document_id = jsonFromApi.document_id;
        this.y_axis_label = jsonFromApi.y_axis_label;
        this.y_axis_type = jsonFromApi.y_axis_type;
        this.y_axis_value = jsonFromApi.y_axis_value;
        this.chart_template_type = jsonFromApi.chart_template_type;
        this.file_id = jsonFromApi.file_id;
        this.created_at = jsonFromApi.created_at;
    }
    Graph = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Graph);
    return Graph;
}());

;


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Profile, Configuration, User, Page, UserGroup, PageFunction, Article, ArticleCategory, ServerSideDataTablesResponse, Product, ProductCategory, ProductGraph, DocFile, Graph, Question, Report, SearchAudit, Contact, Region, District, ContactGroup, ContactDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ "./src/app/_models/profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _profile__WEBPACK_IMPORTED_MODULE_0__["Profile"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./src/app/_models/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["User"]; });

/* harmony import */ var _permissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions/page */ "./src/app/_models/permissions/page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _permissions_page__WEBPACK_IMPORTED_MODULE_3__["Page"]; });

/* harmony import */ var _permissions_user_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions/user-group */ "./src/app/_models/permissions/user-group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return _permissions_user_group__WEBPACK_IMPORTED_MODULE_4__["UserGroup"]; });

/* harmony import */ var _permissions_page_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions/page-function */ "./src/app/_models/permissions/page-function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageFunction", function() { return _permissions_page_function__WEBPACK_IMPORTED_MODULE_5__["PageFunction"]; });

/* harmony import */ var _articles_article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/article */ "./src/app/_models/articles/article.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _articles_article__WEBPACK_IMPORTED_MODULE_6__["Article"]; });

/* harmony import */ var _articles_article_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles/article-category */ "./src/app/_models/articles/article-category.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleCategory", function() { return _articles_article_category__WEBPACK_IMPORTED_MODULE_7__["ArticleCategory"]; });

/* harmony import */ var _server_side_datatable_response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server-side-datatable-response */ "./src/app/_models/server-side-datatable-response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerSideDataTablesResponse", function() { return _server_side_datatable_response__WEBPACK_IMPORTED_MODULE_8__["ServerSideDataTablesResponse"]; });

/* harmony import */ var _price_index_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./price-index/product */ "./src/app/_models/price-index/product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _price_index_product__WEBPACK_IMPORTED_MODULE_9__["Product"]; });

/* harmony import */ var _price_index_product_category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./price-index/product-category */ "./src/app/_models/price-index/product-category.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return _price_index_product_category__WEBPACK_IMPORTED_MODULE_10__["ProductCategory"]; });

/* harmony import */ var _price_index_product_graph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price-index/product-graph */ "./src/app/_models/price-index/product-graph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGraph", function() { return _price_index_product_graph__WEBPACK_IMPORTED_MODULE_11__["ProductGraph"]; });

/* harmony import */ var _doc_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doc-file */ "./src/app/_models/doc-file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocFile", function() { return _doc_file__WEBPACK_IMPORTED_MODULE_12__["DocFile"]; });

/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graph */ "./src/app/_models/graph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return _graph__WEBPACK_IMPORTED_MODULE_13__["Graph"]; });

/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question */ "./src/app/_models/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_14__["Question"]; });

/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./report */ "./src/app/_models/report.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return _report__WEBPACK_IMPORTED_MODULE_15__["Report"]; });

/* harmony import */ var _search_audit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-audit */ "./src/app/_models/search-audit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchAudit", function() { return _search_audit__WEBPACK_IMPORTED_MODULE_16__["SearchAudit"]; });

/* harmony import */ var _contacts_contact__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts/contact */ "./src/app/_models/contacts/contact.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _contacts_contact__WEBPACK_IMPORTED_MODULE_17__["Contact"]; });

/* harmony import */ var _contacts_region__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacts/region */ "./src/app/_models/contacts/region.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return _contacts_region__WEBPACK_IMPORTED_MODULE_18__["Region"]; });

/* harmony import */ var _contacts_district__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacts/district */ "./src/app/_models/contacts/district.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "District", function() { return _contacts_district__WEBPACK_IMPORTED_MODULE_19__["District"]; });

/* harmony import */ var _contacts_contact_group__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contacts/contact-group */ "./src/app/_models/contacts/contact-group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactGroup", function() { return _contacts_contact_group__WEBPACK_IMPORTED_MODULE_20__["ContactGroup"]; });

/* harmony import */ var _contacts_contact_detail__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contacts/contact-detail */ "./src/app/_models/contacts/contact-detail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactDetail", function() { return _contacts_contact_detail__WEBPACK_IMPORTED_MODULE_21__["ContactDetail"]; });

























/***/ }),

/***/ "./src/app/_models/permissions/page-function.ts":
/*!******************************************************!*\
  !*** ./src/app/_models/permissions/page-function.ts ***!
  \******************************************************/
/*! exports provided: PageFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFunction", function() { return PageFunction; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageFunction = /** @class */ (function () {
    function PageFunction(jsonFromApi) {
        this.page_function_id = jsonFromApi.page_function_id;
        this.page = jsonFromApi.page;
        this.page_name = jsonFromApi.page_name;
        this.function_name = jsonFromApi.function_name;
        this.post_link = jsonFromApi.post_link;
        this.created_at = jsonFromApi.created_at;
    }
    PageFunction = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], PageFunction);
    return PageFunction;
}());

;


/***/ }),

/***/ "./src/app/_models/permissions/page.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/permissions/page.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page = /** @class */ (function () {
    function Page(jsonFromApi) {
        this.page_id = jsonFromApi.page_id;
        this.page_group = jsonFromApi.page_group;
        this.page_name = jsonFromApi.page_name;
        this.icon = jsonFromApi.icon;
        this.read_link = jsonFromApi.read_link;
        this.tag = jsonFromApi.tag;
        this.created_at = jsonFromApi.created_at;
    }
    Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Page);
    return Page;
}());

;


/***/ }),

/***/ "./src/app/_models/permissions/user-group.ts":
/*!***************************************************!*\
  !*** ./src/app/_models/permissions/user-group.ts ***!
  \***************************************************/
/*! exports provided: UserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return UserGroup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserGroup = /** @class */ (function () {
    function UserGroup(jsonFromApi) {
        this.user_group_id = jsonFromApi.user_group_id;
        this.group_name = jsonFromApi.group_name;
        this.description = jsonFromApi.description;
        this.created_at = jsonFromApi.created_at;
    }
    UserGroup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], UserGroup);
    return UserGroup;
}());

;


/***/ }),

/***/ "./src/app/_models/price-index/product-category.ts":
/*!*********************************************************!*\
  !*** ./src/app/_models/price-index/product-category.ts ***!
  \*********************************************************/
/*! exports provided: ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCategory = /** @class */ (function () {
    function ProductCategory(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.description = jsonFromApi.description;
        this.created_at = jsonFromApi.created_at;
    }
    ProductCategory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], ProductCategory);
    return ProductCategory;
}());

;


/***/ }),

/***/ "./src/app/_models/price-index/product-graph.ts":
/*!******************************************************!*\
  !*** ./src/app/_models/price-index/product-graph.ts ***!
  \******************************************************/
/*! exports provided: ProductGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGraph", function() { return ProductGraph; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductGraph = /** @class */ (function () {
    function ProductGraph(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.embed_url_code = jsonFromApi.embed_url_code;
        this.rice_product_id = jsonFromApi.rice_product_id;
        this.name_of_graph = jsonFromApi.name_of_graph;
        this.created_at = jsonFromApi.created_at;
    }
    ProductGraph = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], ProductGraph);
    return ProductGraph;
}());

;


/***/ }),

/***/ "./src/app/_models/price-index/product.ts":
/*!************************************************!*\
  !*** ./src/app/_models/price-index/product.ts ***!
  \************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Product = /** @class */ (function () {
    function Product(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.product_name = jsonFromApi.product_name;
        this.product_image = jsonFromApi.product_image;
        this.product_description = jsonFromApi.product_description;
        this.category_id = jsonFromApi.category_id;
        this.category_name = jsonFromApi.category_name;
        this.image_changed = jsonFromApi.image_changed;
        this.user_name = jsonFromApi.user_name;
        this.status = jsonFromApi.status;
        this.number_of_views = jsonFromApi.number_of_views;
        this.created_by = jsonFromApi.created_by;
        this.created_at = jsonFromApi.created_at;
    }
    Product = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Product);
    return Product;
}());

;


/***/ }),

/***/ "./src/app/_models/profile.ts":
/*!************************************!*\
  !*** ./src/app/_models/profile.ts ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Profile = /** @class */ (function () {
    function Profile(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.password = jsonFromApi.password;
        this.email = jsonFromApi.email;
        this.formatted_id = jsonFromApi.formatted_id;
        this.user_group = jsonFromApi.user_group;
        this.group_name = jsonFromApi.group_name;
        this.profile_image = jsonFromApi.profile_image;
        this.first_name = jsonFromApi.first_name;
        this.last_name = jsonFromApi.last_name;
        this.created_at = jsonFromApi.created_at;
    }
    Profile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Profile);
    return Profile;
}());

;


/***/ }),

/***/ "./src/app/_models/question.ts":
/*!*************************************!*\
  !*** ./src/app/_models/question.ts ***!
  \*************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Question = /** @class */ (function () {
    function Question(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.query_image = jsonFromApi.query_image;
        this.question_query = jsonFromApi.question_query;
        this.question_answer = jsonFromApi.question_answer;
        this.answer_image = jsonFromApi.answer_image;
        this.image_changed = jsonFromApi.image_changed;
        this.answered_by = jsonFromApi.answered_by;
        this.answered_by_name = jsonFromApi.user_name;
        this.created_by = jsonFromApi.created_by;
        this.discursion_engagement = jsonFromApi.discursion_engagement;
        this.is_published = jsonFromApi.is_published;
        this.status = jsonFromApi.status;
        this.created_at = jsonFromApi.created_at;
    }
    Question = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Question);
    return Question;
}());

;


/***/ }),

/***/ "./src/app/_models/report.ts":
/*!***********************************!*\
  !*** ./src/app/_models/report.ts ***!
  \***********************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Report = /** @class */ (function () {
    function Report(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.name = jsonFromApi.name;
        this.report_query = jsonFromApi.report_query;
        this.created_at = jsonFromApi.created_at;
        this.updated_at = jsonFromApi.updated_at;
        this.deleted_at = jsonFromApi.deleted_at;
    }
    Report = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], Report);
    return Report;
}());

;


/***/ }),

/***/ "./src/app/_models/search-audit.ts":
/*!*****************************************!*\
  !*** ./src/app/_models/search-audit.ts ***!
  \*****************************************/
/*! exports provided: SearchAudit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAudit", function() { return SearchAudit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchAudit = /** @class */ (function () {
    function SearchAudit(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.first_name = jsonFromApi.first_name;
        this.connection_type = jsonFromApi.connection_type;
        this.email = jsonFromApi.email;
        this.last_name = jsonFromApi.last_name;
        this.display_picture = jsonFromApi.display_picture;
        this.profession = jsonFromApi.profession;
        this.search_term = jsonFromApi.search_term;
        this.originating_region = jsonFromApi.originating_region;
        this.created_at = jsonFromApi.created_at;
    }
    SearchAudit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], SearchAudit);
    return SearchAudit;
}());

;


/***/ }),

/***/ "./src/app/_models/server-side-datatable-response.ts":
/*!***********************************************************!*\
  !*** ./src/app/_models/server-side-datatable-response.ts ***!
  \***********************************************************/
/*! exports provided: ServerSideDataTablesResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSideDataTablesResponse", function() { return ServerSideDataTablesResponse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerSideDataTablesResponse = /** @class */ (function () {
    function ServerSideDataTablesResponse() {
    }
    ServerSideDataTablesResponse = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], ServerSideDataTablesResponse);
    return ServerSideDataTablesResponse;
}());

;


/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = /** @class */ (function () {
    function User(jsonFromApi) {
        this.id = jsonFromApi.id;
        this.password = jsonFromApi.password;
        this.email = jsonFromApi.email;
        this.user_group = jsonFromApi.user_group;
        this.formatted_id = jsonFromApi.formatted_id;
        this.profile_image = jsonFromApi.profile_image;
        this.group_name = jsonFromApi.group_name;
        this.first_name = jsonFromApi.first_name;
        this.last_name = jsonFromApi.last_name;
        this.created_at = jsonFromApi.created_at;
    }
    User = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [Object])
    ], User);
    return User;
}());

;


/***/ }),

/***/ "./src/app/_pipes/reverse.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/_pipes/reverse.pipe.ts ***!
  \****************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        console.log(value, args);
        console.log(args[0]);
        console.log(args[1]);
        var newstring = value;
        if (args[0]) {
            newstring += ".";
        }
        if (args[1] === "singlequote") {
            newstring = "'" + newstring;
        }
        else if (args[1] === "doublequote") {
            newstring = '"' + newstring;
        }
        return newstring;
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/articles/article-category.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/_services/articles/article-category.service.ts ***!
  \****************************************************************/
/*! exports provided: ArticleCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCategoryService", function() { return ArticleCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleCategoryService = /** @class */ (function () {
    function ArticleCategoryService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ArticleCategoryService.prototype.getAllArticleCategories = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllArticleCategories');
        return response;
    };
    ArticleCategoryService.prototype.saveArticleCategory = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveArticleCategory', data);
        return response;
    };
    ArticleCategoryService.prototype.updateArticleCategory = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateArticleCategory', data);
        return response;
    };
    ArticleCategoryService.prototype.deleteArticleCategory = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteArticleCategory', data);
        return response;
    };
    ArticleCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ArticleCategoryService);
    return ArticleCategoryService;
}());



/***/ }),

/***/ "./src/app/_services/articles/article.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/articles/article.service.ts ***!
  \*******************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = /** @class */ (function () {
    function ArticleService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ArticleService.prototype.getAllArticles = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getAllArticles', data);
        return response;
    };
    ArticleService.prototype.getAllArticleCategories = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllArticleCategories');
        return response;
    };
    ArticleService.prototype.getArticleLookups = function () {
        // let response = this.http.get<any>(this.appConfig.api_base_url_backoffice+'getArticleLookups');
        //    return response;
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllArticleCategories');
        return response;
    };
    ArticleService.prototype.saveArticle = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveArticle', data);
        return response;
    };
    ArticleService.prototype.findArticle = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'findArticle', data);
        return response;
    };
    ArticleService.prototype.updateArticle = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateArticle', data);
        return response;
    };
    ArticleService.prototype.publishAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'publishArticleAction', data);
        return response;
    };
    ArticleService.prototype.unpublishAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'unpublishArticleAction', data);
        return response;
    };
    ArticleService.prototype.reviewedAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'reviewedAction', data);
        return response;
    };
    ArticleService.prototype.deleteArticle = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteArticle', data);
        return response;
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.roles = [];
        this.result = [];
        this.pageTags = [];
        this.pages = [];
        this.menuItems = [];
        this.functionItems = [];
        this.functions = [];
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.appConfig.api_base_url + 'user/authenticate', { email: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.pageTags = [];
                _this.pages = [];
                _this.menuItems = [];
                _this.functionItems = [];
                _this.functions = [];
                _this.roles = [];
                _this.result = user;
                // loop through user permission and prepare list of pages groups, pages functions
                user.permissions.forEach(function (record) {
                    // prepare and setup page group list
                    if (record.page_id != null) {
                        var page_tag_data = { p_tag_name: record.tag, p_id: record.page_id };
                        // check to see if page group does not exist b4 u push
                        var foundTag = _this.pageTags.some(function (el) {
                            return el.p_tag_name === record.tag;
                        });
                        if (!foundTag) {
                            _this.pageTags.push(page_tag_data);
                        }
                        //prepare and setup pages list
                        var page_data = { p_name: record.page_name, p_id: record.page_id, p_read: record.read_link, p_tag: record.tag, icon: record.icon };
                        // check to see if page does not exist b4 u push
                        var foundPage = _this.pages.some(function (el) {
                            return el.p_id === record.page_id;
                        });
                        if (!foundPage) {
                            _this.pages.push(page_data);
                            _this.menuItems.push(record.read_link);
                        }
                        // prepare and setup function list
                        var page_function_data = { f_name: record.function_name, f_id: record.page_function_id, page: record.page, p_link: record.post_link };
                        // check to see if function does not exist b4 u push
                        var foundFunction = _this.functions.some(function (el) {
                            return el.f_id === record.page_function_id;
                        });
                        if (!foundFunction) {
                            _this.functions.push(page_function_data);
                            _this.functionItems.push(record.post_link);
                        }
                    }
                });
                // conbine into roles
                var permissions = { pageTags: _this.pageTags, pages: _this.pages, functions: _this.functions, menuItems: _this.menuItems, functionsItems: _this.functionItems };
                _this.roles.push(permissions);
                var currentUserData = { token: user.token, roles: _this.roles, user_info: user.result };
                localStorage.setItem('currentUser', JSON.stringify(currentUserData));
                _this.appConfig.currentUser = currentUserData; // set the user object
                // this.appConfig.currentUser = JSON.parse(JSON.stringify(currentUserData)); // set the user object
                _this.appConfig.currentUserInfo = new _models__WEBPACK_IMPORTED_MODULE_5__["Profile"](user.result); // set the user object
                // localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        // alert('am here');
        localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/contacts/contact-group.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/_services/contacts/contact-group.service.ts ***!
  \*************************************************************/
/*! exports provided: ContactGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactGroupService", function() { return ContactGroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactGroupService = /** @class */ (function () {
    function ContactGroupService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ContactGroupService.prototype.getAllContactGroups = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllContactGroups');
        return response;
    };
    ContactGroupService.prototype.saveContactGroup = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveContactGroup', data);
        return response;
    };
    ContactGroupService.prototype.updateContactGroup = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateContactGroup', data);
        return response;
    };
    ContactGroupService.prototype.deleteContactGroup = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteContactGroup', data);
        return response;
    };
    ContactGroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ContactGroupService);
    return ContactGroupService;
}());



/***/ }),

/***/ "./src/app/_services/contacts/contact.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/contacts/contact.service.ts ***!
  \*******************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ContactService.prototype.getAllContacts = function (data) {
        if (data === void 0) { data = ""; }
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getAllContacts', data);
        return response;
    };
    ContactService.prototype.saveContact = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveContact', data);
        return response;
    };
    ContactService.prototype.updateContact = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateContact', data);
        return response;
    };
    ContactService.prototype.updateContactDetail = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateContactDetail', data);
        return response;
    };
    ContactService.prototype.deleteContact = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteContact', data);
        return response;
    };
    ContactService.prototype.deleteContactDetail = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteContactDetail', data);
        return response;
    };
    ContactService.prototype.getContactLookups = function (data) {
        if (data === void 0) { data = ""; }
        // let response = this.http.get<any>(this.appConfig.api_base_url_backoffice+'getContactLookups');
        //    return response;
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getContactLookups', data);
        return response;
    };
    ContactService.prototype.findContact = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'findContact', data);
        return response;
    };
    ContactService.prototype.publishAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'publishContact', data);
        return response;
    };
    ContactService.prototype.unpublishAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'unpublishContact', data);
        return response;
    };
    ContactService.prototype.reviewedAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'reviewedAction', data);
        return response;
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/_services/file.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/file.service.ts ***!
  \*******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = /** @class */ (function () {
    function FileService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    FileService.prototype.updateArticleFile = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateArticleFile', data);
        return response;
    };
    FileService.prototype.deleteArticleFile = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteArticleFile', data);
        return response;
    };
    FileService.prototype.addProductFile = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'addProductFile', data);
        return response;
    };
    FileService.prototype.deleteProductFile = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteProductFile', data);
        return response;
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/_services/graph.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/graph.service.ts ***!
  \********************************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphService = /** @class */ (function () {
    function GraphService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    GraphService.prototype.getAllGraphs = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllGraphs');
        return response;
    };
    GraphService.prototype.saveGraph = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveGraph', data);
        return response;
    };
    GraphService.prototype.updateGraph = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateGraph', data);
        return response;
    };
    GraphService.prototype.deleteGraph = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteGraph', data);
        return response;
    };
    GraphService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], GraphService);
    return GraphService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, UserGroupService, PageFunctionService, PageService, LookupService, ArticleService, ArticleCategoryService, FileService, GraphService, ProductService, ProductCategoryService, ContactGroupService, ContactService, QuestionService, ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _permissions_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions/user.service */ "./src/app/_services/permissions/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _permissions_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _permissions_user_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions/user-group.service */ "./src/app/_services/permissions/user-group.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserGroupService", function() { return _permissions_user_group_service__WEBPACK_IMPORTED_MODULE_3__["UserGroupService"]; });

/* harmony import */ var _permissions_page_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions/page-function.service */ "./src/app/_services/permissions/page-function.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageFunctionService", function() { return _permissions_page_function_service__WEBPACK_IMPORTED_MODULE_4__["PageFunctionService"]; });

/* harmony import */ var _permissions_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions/page.service */ "./src/app/_services/permissions/page.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return _permissions_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"]; });

/* harmony import */ var _lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookup.service */ "./src/app/_services/lookup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LookupService", function() { return _lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]; });

/* harmony import */ var _articles_article_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles/article.service */ "./src/app/_services/articles/article.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return _articles_article_service__WEBPACK_IMPORTED_MODULE_7__["ArticleService"]; });

/* harmony import */ var _articles_article_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./articles/article-category.service */ "./src/app/_services/articles/article-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleCategoryService", function() { return _articles_article_category_service__WEBPACK_IMPORTED_MODULE_8__["ArticleCategoryService"]; });

/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file.service */ "./src/app/_services/file.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return _file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"]; });

/* harmony import */ var _graph_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graph.service */ "./src/app/_services/graph.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return _graph_service__WEBPACK_IMPORTED_MODULE_10__["GraphService"]; });

/* harmony import */ var _price_index_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price-index/product.service */ "./src/app/_services/price-index/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _price_index_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]; });

/* harmony import */ var _price_index_product_category_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price-index/product-category.service */ "./src/app/_services/price-index/product-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return _price_index_product_category_service__WEBPACK_IMPORTED_MODULE_12__["ProductCategoryService"]; });

/* harmony import */ var _contacts_contact_group_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacts/contact-group.service */ "./src/app/_services/contacts/contact-group.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactGroupService", function() { return _contacts_contact_group_service__WEBPACK_IMPORTED_MODULE_13__["ContactGroupService"]; });

/* harmony import */ var _contacts_contact_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contacts/contact.service */ "./src/app/_services/contacts/contact.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return _contacts_contact_service__WEBPACK_IMPORTED_MODULE_14__["ContactService"]; });

/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question.service */ "./src/app/_services/question.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return _question_service__WEBPACK_IMPORTED_MODULE_15__["QuestionService"]; });

/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./report.service */ "./src/app/_services/report.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return _report_service__WEBPACK_IMPORTED_MODULE_16__["ReportService"]; });




















/***/ }),

/***/ "./src/app/_services/lookup.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/lookup.service.ts ***!
  \*********************************************/
/*! exports provided: LookupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupService", function() { return LookupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LookupService = /** @class */ (function () {
    function LookupService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    // product category begins
    LookupService.prototype.saveClientLogo = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveClientLogo', data);
        return response;
    };
    LookupService.prototype.getConfiguration = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getConfiguration');
        return response;
    };
    LookupService.prototype.updateConfiguration = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateConfiguration', data);
        return response;
    };
    LookupService.prototype.updateAboutus = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateConfigurationAboutus', data);
        return response;
    };
    LookupService.prototype.updateContactus = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateConfigurationContactus', data);
        return response;
    };
    LookupService.prototype.updatePolicy = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateConfigurationPolicy', data);
        return response;
    };
    LookupService.prototype.updateTerms = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateConfigurationTerms', data);
        return response;
    };
    LookupService.prototype.getDashboardData = function (data) {
        if (data === void 0) { data = ""; }
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getDashboardData', data);
        return response;
    };
    LookupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], LookupService);
    return LookupService;
}());



/***/ }),

/***/ "./src/app/_services/permissions/page-function.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/_services/permissions/page-function.service.ts ***!
  \****************************************************************/
/*! exports provided: PageFunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFunctionService", function() { return PageFunctionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageFunctionService = /** @class */ (function () {
    function PageFunctionService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    PageFunctionService.prototype.getAllPageFunctions = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllPageFunctions');
        return response;
    };
    PageFunctionService.prototype.getAllPageFunctionsJoinOthers = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllPageFunctionsJoinOthers');
        return response;
    };
    PageFunctionService.prototype.savePageFunction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'savePageFunction', data);
        return response;
    };
    PageFunctionService.prototype.updatePageFunction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updatePageFunction', data);
        return response;
    };
    PageFunctionService.prototype.deletePageFunction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deletePageFunction', data);
        return response;
    };
    PageFunctionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], PageFunctionService);
    return PageFunctionService;
}());



/***/ }),

/***/ "./src/app/_services/permissions/page.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/permissions/page.service.ts ***!
  \*******************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = /** @class */ (function () {
    function PageService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    PageService.prototype.getAllPages = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllPages');
        return response;
    };
    PageService.prototype.savePage = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'savePage', data);
        return response;
    };
    PageService.prototype.updatePage = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updatePage', data);
        return response;
    };
    PageService.prototype.deletePage = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deletePage', data);
        return response;
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/_services/permissions/user-group.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/_services/permissions/user-group.service.ts ***!
  \*************************************************************/
/*! exports provided: UserGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupService", function() { return UserGroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGroupService = /** @class */ (function () {
    function UserGroupService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    UserGroupService.prototype.getAllUserGroups = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllUserGroups');
        return response;
    };
    UserGroupService.prototype.getThisUserGroupPermissions = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getThisUserGroupPermissions', data);
        return response;
    };
    UserGroupService.prototype.saveUserGroup = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveUserGroup', data);
        return response;
    };
    UserGroupService.prototype.saveUserGroupPermission = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveUserGroupPermissions', data);
        return response;
    };
    UserGroupService.prototype.updateUserGroup = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateUserGroup', data);
        return response;
    };
    UserGroupService.prototype.deleteUserGroup = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteUserGroup', data);
        return response;
    };
    UserGroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], UserGroupService);
    return UserGroupService;
}());



/***/ }),

/***/ "./src/app/_services/permissions/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_services/permissions/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    UserService.prototype.getAllUsers = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllUsers');
        return response;
    };
    UserService.prototype.saveUser = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveUser', data);
        return response;
    };
    UserService.prototype.saveUserImage = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveUserImage', data);
        return response;
    };
    UserService.prototype.updateUser = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateUser', data);
        return response;
    };
    UserService.prototype.updateUserPassword = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateUserPassword', data);
        return response;
    };
    UserService.prototype.updateUserProfile = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateUserProfile', data);
        return response;
    };
    UserService.prototype.updateUserProfilePassword = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateUserProfilePassword', data);
        return response;
    };
    UserService.prototype.deleteUser = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteUser', data);
        return response;
    };
    UserService.prototype.assignStore = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'assignStore', data);
        return response;
    };
    UserService.prototype.register = function (user) {
        // return this.http.post(`${config.apiUrl}/users/register`, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_services/price-index/product-category.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_services/price-index/product-category.service.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return ProductCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoryService = /** @class */ (function () {
    function ProductCategoryService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ProductCategoryService.prototype.getAllProductCategories = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllProductCategories');
        return response;
    };
    ProductCategoryService.prototype.saveProductCategory = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveProductCategory', data);
        return response;
    };
    ProductCategoryService.prototype.updateProductCategory = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateProductCategory', data);
        return response;
    };
    ProductCategoryService.prototype.deleteProductCategory = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteProductCategory', data);
        return response;
    };
    ProductCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ProductCategoryService);
    return ProductCategoryService;
}());



/***/ }),

/***/ "./src/app/_services/price-index/product.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/_services/price-index/product.service.ts ***!
  \**********************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ProductService.prototype.getAllProducts = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getAllProducts', data);
        return response;
    };
    ProductService.prototype.getAllProductCategories = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllProductCategories');
        return response;
    };
    ProductService.prototype.getProductLookups = function () {
        // let response = this.http.get<any>(this.appConfig.api_base_url_backoffice+'getProductLookups');
        //    return response;
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllProductCategories');
        return response;
    };
    ProductService.prototype.saveProduct = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveProduct', data);
        return response;
    };
    ProductService.prototype.findProduct = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'findProduct', data);
        return response;
    };
    ProductService.prototype.updateProduct = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateProduct', data);
        return response;
    };
    ProductService.prototype.publishAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'publishAction', data);
        return response;
    };
    ProductService.prototype.unpublishAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'unpublishAction', data);
        return response;
    };
    ProductService.prototype.reviewedAction = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'reviewedAction', data);
        return response;
    };
    ProductService.prototype.deleteProduct = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteProduct', data);
        return response;
    };
    ProductService.prototype.saveProductGraph = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveProductGraph', data);
        return response;
    };
    ProductService.prototype.updateProductGraph = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateProductGraph', data);
        return response;
    };
    ProductService.prototype.deleteProductGraph = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteProductGraph', data);
        return response;
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/_services/question.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/question.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = /** @class */ (function () {
    function QuestionService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    QuestionService.prototype.getAllQuestions = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllCommunityQuestions');
        return response;
    };
    QuestionService.prototype.saveQuestion = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveCommunityQuestion', data);
        return response;
    };
    QuestionService.prototype.answerQuestion = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'answerCommunityQuestion', data);
        return response;
    };
    QuestionService.prototype.updateQuestion = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateCommuinityQuestion', data);
        return response;
    };
    QuestionService.prototype.deleteQuestion = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteCommunityQuestion', data);
        return response;
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/_services/report.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/report.service.ts ***!
  \*********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportService = /** @class */ (function () {
    function ReportService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentUserToken = this.appConfig.currentUserToken;
    }
    ReportService.prototype.getAllReports = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getAllReports');
        return response;
    };
    ReportService.prototype.getReport = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getReport', data);
        return response;
    };
    ReportService.prototype.runReport = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'runReport', data);
        return response;
    };
    ReportService.prototype.runReportWithRange = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'runReportDate', data);
        return response;
    };
    ReportService.prototype.saveReport = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'saveReport', data);
        return response;
    };
    ReportService.prototype.updateReport = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'updateReport', data);
        return response;
    };
    ReportService.prototype.deleteReport = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'deleteReport', data);
        return response;
    };
    ReportService.prototype.runAdvanceSearch = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'runAdvanceSearch', data);
        return response;
    };
    ReportService.prototype.getDeletedSales = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getDeletedSales', data);
        return response;
    };
    ReportService.prototype.getDetailedReports = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'getConsolidatedDataReport', data);
        return response;
    };
    ReportService.prototype.searchDataByString = function (data) {
        var response = this.http.post(this.appConfig.api_base_url_backoffice + 'searchDataByString', data);
        return response;
    };
    ReportService.prototype.getStringSearchData = function () {
        var response = this.http.get(this.appConfig.api_base_url_backoffice + 'getStringSearchData');
        return response;
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { DashboardComponent } from './dashboard/dashboard.component';



var routes = [
    // { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: 'notfound',
        pathMatch: 'full',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: '**', redirectTo: 'notfound' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/backoffice/' }] // Adjust the value based on your base href
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-upload {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.file-upload__label {\r\n  display: block;\r\n  padding: 1em 2em;\r\n  color: #fff;\r\n  background: #222;\r\n  border-radius: .4em;\r\n  transition: background .3s;\r\n  \r\n  &:hover {\r\n     cursor: pointer;\r\n     background: #000;\r\n  }\r\n}\r\n\r\n.file-upload__input {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    font-size: 1;\r\n    width:0;\r\n    height: 100%;\r\n    opacity: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7O0VBRTFCO0tBQ0csZUFBZTtLQUNmLGdCQUFnQjtFQUNuQjtBQUNGOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLXVwbG9hZCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZpbGUtdXBsb2FkX19sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMWVtIDJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgfVxyXG59XHJcbiAgICBcclxuLmZpbGUtdXBsb2FkX19pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE7XHJcbiAgICB3aWR0aDowO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'app-template-jwt-angular';
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        // elastic_base_url: string = 'http://localhost/arg-api/public/api/';
        // elastic_base_url: string = 'http://preview.bycavemen.com/arg_api/public/api/';
        // api_base_url: string = 'http://localhost/datagonalverse/thailand-backoffice-api/public/';
        // api_base_url_backoffice: string = 'http://localhost/datagonalverse/thailand-backoffice-api/public/backoffice-api/';
        // api_base_url: string = 'http://localhost/thailand-backstage-api/public/';
        // api_base_url_backoffice: string = 'http://localhost/thailand-backstage-api/public/backoffice-api/';
        // api_base_url: string = 'http://backstage.bycavemen.com/api/public/';
        // api_base_url_backoffice: string = 'http://backstage.bycavemen.com/api/public/backoffice-api/';
        // api_base_url: string = 'http://arg2.demo.bycavemen.com/backoffice-api/public/';
        // api_base_url_backoffice: string = 'http://arg2.demo.bycavemen.com/backoffice-api/public/backoffice-api/';
        // run : ng build --base-href="http://arg2.demo.bycavemen.com/backoffice/"
        //  api_base_url: string = 'http://165.227.230.106/backoffice-api/public/index.php/';
        // api_base_url_backoffice: string = 'http://165.227.230.106/backoffice-api/public/index.php/backoffice-api/';
        // run : ng build --base-href="http://165.227.230.106/backoffice";
        this.api_base_url = 'https://rap.admin.bydatagon.com/backoffice-api/';
        this.api_base_url_backoffice = 'https://rap.admin.bydatagon.com/backoffice-api/backoffice-api/';
        // run : ng build --base-href="https://rap.admin.bydatagon.com";
        this.search_value = "";
        this.search_region = "";
        this.document_ready = false;
        this.app_base_url = "" + window.location.origin;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.clientConfig = JSON.parse(localStorage.getItem("client_config"));
        this.currentUserToken = JSON.parse(localStorage.getItem("currentUser"));
        this.paginationLength = 100;
        // currentUserInfo: Profile =  new Profile(this.currentUser.user_info);
        this.currentUserInfo = null;
    }
    AppConfig.prototype.resetStorageData = function (userData) {
        var currentUserData = { token: JSON.parse(localStorage.getItem("currentUser")).token, roles: JSON.parse(localStorage.getItem("currentUser")).roles, user_info: userData };
        localStorage.setItem('currentUser', JSON.stringify(currentUserData));
    };
    AppConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _custom_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom.pipe */ "./src/app/custom.pipe.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _includes_includes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./includes/includes.module */ "./src/app/includes/includes.module.ts");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_pipes/reverse.pipe */ "./src/app/_pipes/reverse.pipe.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { ChartsModule } from 'ng2-charts';

// import { ChartsModule } from 'ng2-charts';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_19__["AdminLayoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _custom_pipe__WEBPACK_IMPORTED_MODULE_15__["appendDollarPipe"],
                _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_21__["ReversePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _includes_includes_module__WEBPACK_IMPORTED_MODULE_20__["IncludesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__["NgxChartsModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].forRoot({
                    spinnerPosition: 'right',
                    color: '#39afd1',
                    thick: true
                }),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"].forRoot()
            ],
            providers: [_app_config__WEBPACK_IMPORTED_MODULE_11__["AppConfig"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom.pipe.ts":
/*!********************************!*\
  !*** ./src/app/custom.pipe.ts ***!
  \********************************/
/*! exports provided: appendDollarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendDollarPipe", function() { return appendDollarPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var appendDollarPipe = /** @class */ (function () {
    function appendDollarPipe() {
    }
    appendDollarPipe.prototype.transform = function (value, pretext) {
        return value + pretext;
    };
    appendDollarPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'appendDollar'
        })
    ], appendDollarPipe);
    return appendDollarPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You're logged in with Angular 7!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.first_name}} {{user.last_name}})\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, userService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.users = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/includes/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/includes/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/includes/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{test | date: 'yyyy'}}, Designed by\n      <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/includes/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/includes/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/includes/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/includes/includes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/includes/includes.module.ts ***!
  \*********************************************/
/*! exports provided: IncludesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncludesModule", function() { return IncludesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/includes/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/includes/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/includes/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



var IncludesModule = /** @class */ (function () {
    function IncludesModule() {
    }
    IncludesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                // NgbModule
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], IncludesModule);
    return IncludesModule;
}());



/***/ }),

/***/ "./src/app/includes/navbar/navbar.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/navbar/navbar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/includes/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/includes/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/includes/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import Chart from 'chart.js';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/includes/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/includes/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/includes/sidebar/sidebar.component.css":
/*!********************************************************!*\
  !*** ./src/app/includes/sidebar/sidebar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGVzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/includes/sidebar/sidebar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/includes/sidebar/sidebar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     <!-- NAVIGATION\n    ================================================== -->\n    \n      <!-- <nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light \" id=\"sidebar\" style=\"background-color: currentColor;\"> -->\n        <div class=\"container-fluid\">\n\n          <!-- Toggler -->\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sidebarCollapse\" aria-controls=\"sidebarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n\n          <!-- Brand -->\n          <a class=\"navbar-brand\" >\n            <img [src]=\"appConfig.clientConfig.company_logo\" class=\"navbar-brand-img\n            mx-auto rounded-circle border border-card\" style=\"height: 60px; width: 60px;min-height: 60px;\" alt=\"...\">\n          </a>\n\n\n          <!-- User (xs) -->\n          <div class=\"navbar-user d-md-none\">\n\n            <!-- Dropdown -->\n            <div class=\"dropdown\">\n        \n              <!-- Toggle -->\n              <a href=\"#!\" id=\"sidebarIcon\" class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <div class=\"avatar avatar-sm avatar-online\">\n                  <img src=\"assets/img/avatars/profiles/avatar-1.jpg\" class=\"avatar-img rounded-circle\" alt=\"...\">\n                </div>\n              </a>\n\n              <!-- Menu -->\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"sidebarIcon\">\n                <a href=\"profile-posts.html\" class=\"dropdown-item\">Profile</a>\n                <a href=\"settings.html\" class=\"dropdown-item\">Settings</a>\n                <hr class=\"dropdown-divider\">\n                <a href=\"sign-in.html\" class=\"dropdown-item\">Logout</a>\n              </div>\n\n            </div>\n\n          </div>\n\n          <!-- Collapse -->\n          <div class=\"collapse navbar-collapse\" id=\"sidebarCollapse\">\n\n            <!-- div -->\n            <div class=\"mt-4 mb-3 d-md-none\">\n              <div class=\"input-group input-group-rounded input-group-merge\">\n                <input type=\"search\" class=\"div-control div-control-rounded div-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <span class=\"fe fe-search\"></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n      \n            <!-- Navigation -->\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" >\n                  <i class=\"fe fe-home\"></i> Dashboards\n                </a>\n                \n              </li>\n              <!-- *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/configuration') > -1)\" -->\n             <li class=\"nav-item\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/configuration') > -1)\">\n\n                <a class=\"nav-link\" [routerLink]=\"['/configuration']\" >\n                  <i class=\"fe fe-settings \"></i> Client Config\n                </a>\n\n              </li>\n              <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/pages') > -1) || (currentUser.roles[0].menuItems.indexOf('/page-functions') > -1)\">\n                <a class=\"nav-link\" href=\"#sidebarSystemControl\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fe fe-book-open\"></i> System Control\n                </a>\n                <div class=\"collapse \" id=\"sidebarSystemControl\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    <li class=\"nav-item\"  *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/pages') > -1)\" >\n                      <a [routerLink]=\"['/pages']\" class=\"nav-link\">\n                        Pages\n                      </a>\n                    </li>\n                    \n                     <li class=\"nav-item\"  *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/page-functions') > -1)\" >\n                      <a [routerLink]=\"['/page-functions']\" class=\"nav-link\">\n                        Page Functions\n                      </a>\n                    </li>\n                    \n                  </ul>\n                </div>\n              </li>\n              <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/users') > -1) || (currentUser.roles[0].menuItems.indexOf('/user-groups') > -1)\">\n                <a class=\"nav-link\" href=\"#sidebarUsersAndRoles\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fa fa-users\" style=\"margin-right: 10px;\"></i> Users and Roles\n                </a>\n                <div class=\"collapse \" id=\"sidebarUsersAndRoles\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    \n                    \n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/user-groups') > -1)\">\n                      <a [routerLink]=\"['/user-groups']\" class=\"nav-link\">\n                        User Groups \n                      </a>\n                    </li>\n\n                    <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/users') > -1)\">\n                      <a [routerLink]=\"['/users']\" class=\"nav-link\">\n                        Users\n                      </a>\n                    </li>\n                    \n                  </ul>\n                </div>\n              </li>\n               <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/article') > -1) || (currentUser.roles[0].menuItems.indexOf('/article-categories') > -1)\">\n                <a class=\"nav-link\" href=\"#myArticles\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fa fa-folder\" style=\"margin-right: 10px;\"></i> Article\n                </a>\n                <div class=\"collapse \" id=\"myArticles\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    \n                    \n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/article') > -1)\">\n                      <a [routerLink]=\"['/article-list']\" class=\"nav-link\">\n                        List\n                      </a>\n                    </li>\n\n                    <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/article-categories') > -1)\">\n                      <a [routerLink]=\"['/article-categories']\" class=\"nav-link\">\n                        Categories\n                      </a>\n                    </li>\n                    \n                  </ul>\n                </div>\n              </li>\n              <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1) || (currentUser.roles[0].menuItems.indexOf('/rice-product-category') > -1)\">\n                <a class=\"nav-link\" href=\"#contacts\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fa fa-list\" style=\"margin-right: 10px;\"></i> Contacts\n                </a>\n                <div class=\"collapse \" id=\"contacts\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    \n                    \n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/contact-list']\" class=\"nav-link\">\n                        List\n                      </a>\n                    </li>\n\n                    <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product-category') > -1)\">\n                      <a [routerLink]=\"['/contact-groups']\" class=\"nav-link\">\n                        Contact Groups\n                      </a>\n                    </li>\n                    \n                  </ul>\n                </div>\n              </li>\n          \n               <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1) || (currentUser.roles[0].menuItems.indexOf('/rice-product-category') > -1)\">\n                <a class=\"nav-link\" href=\"#priceIndex\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fa fa-list\" style=\"margin-right: 10px;\"></i> Price Index\n                </a>\n                <div class=\"collapse \" id=\"priceIndex\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    \n                    \n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/rice-product-list']\" class=\"nav-link\">\n                        Rice Products\n                      </a>\n                    </li>\n\n                    <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product-category') > -1)\">\n                      <a [routerLink]=\"['/rice-product-categories']\" class=\"nav-link\">\n                        Product Categories\n                      </a>\n                    </li>\n                    \n                  </ul>\n                </div>\n              </li>\n               <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1) || (currentUser.roles[0].menuItems.indexOf('/rice-product-category') > -1)\">\n                <a class=\"nav-link\" href=\"#community\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fa fa-users\" style=\"margin-right: 10px;\"></i> Community\n                </a>\n                <div class=\"collapse \" id=\"community\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    \n                    \n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/question-list']\" class=\"nav-link\">\n                        Questions\n                      </a>\n                    </li>\n\n                    \n                    \n                  </ul>\n                </div>\n              </li>\n                <li class=\"nav-item dropdown\" *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1) || (currentUser.roles[0].menuItems.indexOf('/rice-product-category') > -1)\">\n                <a class=\"nav-link\" href=\"#static-page\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"sidebarComponents\">\n                  <i class=\"fa fa-folder\" style=\"margin-right: 10px;\"></i> Static Pages\n                </a>\n                <div class=\"collapse \" id=\"static-page\">\n                  <ul class=\"nav nav-sm flex-column\">\n                    \n                    \n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/about-us']\" class=\"nav-link\">\n                        About us\n                      </a>\n                    </li>\n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/contact-us']\" class=\"nav-link\">\n                        Contact Us\n                      </a>\n                    </li>\n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/terms-and-conditions']\" class=\"nav-link\">\n                        Terms and Condition\n                      </a>\n                    </li>\n                     <li class=\"nav-item\"   *ngIf=\"(currentUser.roles[0].menuItems.indexOf('/rice-product') > -1)\">\n                      <a [routerLink]=\"['/privacy-policy']\" class=\"nav-link\">\n                        Privacy Policy\n                      </a>\n                    </li>\n\n                    \n                    \n                  </ul>\n                </div>\n              </li>\n             \n              \n               \n               \n            </ul>\n\n\n            <!-- Divider -->\n            <hr class=\"navbar-divider my-3\">\n\n            <!-- Heading -->\n            <h6 class=\"navbar-heading\">\n              System Logs\n            </h6>\n\n            <!-- Navigation -->\n            <ul class=\"navbar-nav mb-md-4\">\n              <li class=\"nav-item\" >\n               <a [routerLink]=\"['/report-dashboard']\" class=\"nav-link\">\n                      <i class=\"fe fe-file\" style=\"\"></i>  Reports \n                </a>\n              </li>\n             <li class=\"nav-item\" >\n               <a [routerLink]=\"['/search-audit']\" class=\"nav-link\">\n                      <i class=\"fe fe-file\" style=\"\"></i> Search Terms\n                </a>\n              </li>\n              \n            </ul>\n      \n            <!-- Push content down -->\n            <div class=\"mt-auto\"></div>\n      \n            \n            <!-- Customize -->\n            <!-- <a href=\"#modalDemo\" class=\"btn btn-block btn-primary mb-4\" data-toggle=\"modal\">\n              <i class=\"fe fe-sliders mr-2\"></i> Customize\n            </a>\n             -->\n      \n            \n            <!-- User (md) -->\n            <div class=\"navbar-user d-none d-md-flex\" id=\"sidebarUser\">\n\n              <!-- Icon -->\n              <a href=\"#sidebarModalActivity\" style=\"visibility: hidden;\" class=\"navbar-user-link\" data-toggle=\"modal\">\n                <span class=\"icon\">\n                  <i class=\"fe fe-bell\"></i>\n                </span>\n              </a>\n\n              <!-- Dropup -->\n              <div class=\"dropup\">\n\n                <!-- Toggle -->\n                <a href=\"#!\" id=\"sidebarIconCopy\" class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <div class=\"avatar avatar-sm avatar-online\">\n                    <img [src]=\"imageUrl\" class=\"avatar-img rounded-circle\" alt=\"...\">\n                  </div>\n                </a>\n\n                <!-- Menu -->\n                <div class=\"dropdown-menu\" aria-labelledby=\"sidebarIconCopy\">\n                  <a [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">Profile</a>\n                  <!-- <a  class=\"dropdown-item\">Settings</a> -->\n                  <hr class=\"dropdown-divider\">\n                  <a [routerLink]=\"['/login']\" class=\"dropdown-item\">Logout</a>\n                </div>\n\n              </div>\n\n              <!-- Icon -->\n              <a href=\"#sidebarModalSearch\" style=\"visibility: hidden;\" class=\"navbar-user-link\" data-toggle=\"modal\">\n                <span class=\"icon\">\n                  <i class=\"fe fe-search\"></i>\n                </span>\n              </a>\n\n            </div>\n            \n\n          </div> <!-- / .navbar-collapse -->\n\n        </div>\n      <!-- </nav> -->\n    \n    "

/***/ }),

/***/ "./src/app/includes/sidebar/sidebar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/includes/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models */ "./src/app/_models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    // { path: 'page-group', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appConfig) {
        this.appConfig = appConfig;
        this.currentUser = null;
        this.imageUrl = '../../assets/img/user.png';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // console.log(this.currentUser);
        // currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.appConfig.currentUserInfo = new _models__WEBPACK_IMPORTED_MODULE_2__["Profile"](this.currentUser.user_info); // set the user object
        if (this.appConfig.currentUserInfo.profile_image != null) {
            this.imageUrl = this.appConfig.currentUserInfo.profile_image;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/includes/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/includes/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \t<ng-progress  \n              [spinner]=\"true\" [spinnerPosition]=\"'right'\" [direction]=\"'leftToRightIncreased'\"\n              [color]=\"'brown'\" [trickleSpeed]=\"250\" [thick]=\"true\"\n>\n    \n</ng-progress> -->\n<ng-progress ></ng-progress>\n    <nav class=\"navbar navbar-vertical fixed-left navbar-expand-md navbar-light \" id=\"sidebar\" style=\"background-color: currentColor;\">\n      <app-sidebar></app-sidebar>\n    </nav>\n    \n    <!-- MAIN CONTENT\n    ================================================== -->\n    <div class=\"main-content \" >\n      <router-outlet></router-outlet>\n    </div> \n\n\n       \n    "

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLayoutComponent = /** @class */ (function () {
    // private _router: Subscription;
    // private lastPoppedUrl: string;
    // private yScrollStack: number[] = [];
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress ></ng-progress>\n\n\n <!-- CONTENT\n    ================================================== -->\n    <div class=\"container-fluid\">\n      <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5\">\n              \n          <!-- Heading -->\n          <div class=\"display-4 text-center mb-3\">\n            <img src=\"assets/img/logo.png\" class=\"navbar-brand-img\n            mx-auto rounded-circle border border-card\" style=\"height: 70px; width: 70px;min-height: 70px;\" alt=\"...\">\n          </div>\n          \n          <!-- Subheading -->\n          <p class=\"text-muted text-center mb-5\">\n             Access to {{ companyName }} Backoffice\n          </p>\n          \n          <!-- <p>\n     \n     {{ \"this is a test string\" | reverse: [true, \"doublequote\"] }}\n</p> -->\n          <!-- Form -->\n         <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n<div class=\"form-group\">\n        \n    </div>\n    <div class=\"form-group\">\n       \n    </div>\n    <!--  -->\n            <!-- Email address -->\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"name@address.com\"/>\n              <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n            </div>\n\n        </div>\n\n            <!-- Password -->\n            <div class=\"form-group\">\n\n              <div class=\"row\">\n                <div class=\"col\">\n                      \n                  <!-- Label -->\n                 <label for=\"password\">Password</label>\n\n                </div>\n                <!-- <div class=\"col-auto\">\n                  \n                  <a href=\"#\" class=\"form-text small text-muted\">\n                    Forgot password?\n                  </a>\n\n                </div> -->\n              </div> <!-- / .row -->\n \n        \n        \n              <!-- Input group -->\n              <div class=\"input-group input-group-merge\">\n\n                <!-- Input -->\n<input type=\"password\" formControlName=\"password\" class=\"form-control \" placeholder=\"Enter your password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <!-- Icon -->\n              <!--   <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fe fe-eye\"></i>\n                  </span>\n                </div> -->\n\n              </div>\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n            </div>\n\n           \n            <button [disabled]=\"loading\" class=\"btn btn-lg btn-block btn-primary mb-3\">Login</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n\n            <!-- Link -->\n            <p class=\"text-center\">\n              <small class=\"text-muted text-center\">\n                <!-- Don't have an account yet? <a href=\"#\">Sign up</a>. -->\n              </small>\n            </p>\n            \n          </form>\n        <!-- <p style=\"text-align: center; margin-top: 60px\" >Built with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"margin-left: 10px; margin-right: 10px\"></i> <a href=\"https://www.builtbycavemen.com\">by Cavemen </a></p> -->\n        </div>\n        <div class=\"col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block\">\n          \n          <!-- Image -->\n          <div class=\"bg-cover vh-100 mt--1 mr--3\" style=\"background-image: url(assets/img/covers/auth-side-cover.jpg);\"></div>\n\n        </div>\n      </div> <!-- / .row -->\n    </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/ */ "./src/app/_services/index.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, appConfig, LookupService, router, authenticationService, alertService, toastr, ngProgress) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.appConfig = appConfig;
        this.LookupService = LookupService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.toastr = toastr;
        this.ngProgress = ngProgress;
        this.loading = false;
        this.submitted = false;
        this.costOfMyCoffeeCup = 6;
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LookupService.getConfiguration().subscribe(function (configuration) {
            // this.progress.complete();
            if (configuration.status == "success") { // results is found
                // console.log(configuration.result)
                _this.companyName = configuration.result.company_name;
                // console.log(this.companyName);
                localStorage.setItem("client_config", JSON.stringify(configuration.result));
                localStorage.setItem("pagination_length", configuration.result.pagination_length);
                _this.appConfig.paginationLength = configuration.result.pagination_length;
            }
        });
        this.progress = this.ngProgress.ref();
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.progress.start();
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            // this.toastr.errorToastr(error, 'Oops!');
            _this.loading = false;
            _this.progress.complete();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"],
            _services___WEBPACK_IMPORTED_MODULE_6__["LookupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services___WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services___WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgress"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        // this.userService.register(this.registerForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\datagonalverse\thailand-backoffice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map