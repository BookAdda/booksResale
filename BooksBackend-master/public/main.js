(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.html":
/*!******************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"jumbotron\" style=\"background: white\">\n    <div class=\"container\">\n      <div class=\"row\" style=\"margin:auto\">\n        <div class=\"col-md-6 offset-md-3\">\n            \n          <div class = \"container-fluid\">\n              <h2>Book Details</h2>\n\n              <form #listingForm=\"ngForm\" *ngIf=\"!submitted\" (ngSubmit)=\"onSubmit()\" novalidate>\n              <!-- {{listingForm.value | json}} -->\n              \n                <div class=\"form-group\">\n                  <label class=\"center-block\">Book Name:</label>\n                    <input type=\"text\" #name=\"ngModel\" required \n                    [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" name=\"name\" [(ngModel)]=\"listingModel.name\">\n                  <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">Name is required.</small>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"center-block\">Author Name:</label>\n                      <input type=\"text\" #author=\"ngModel\" required \n                      [class.is-invalid]=\"author.invalid && author.touched\" class=\"form-control\" name=\"author\" [(ngModel)]=\"listingModel.author\">\n                    <small class=\"text-danger\" [class.d-none]=\"author.valid || author.untouched\">Author Name is required.</small>        \n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"center-block\">Image:</label>\n                      <input type=\"text\" #image=\"ngModel\" required \n                      [class.is-invalid]=\"image.invalid && image.touched\" class=\"form-control\" name=\"image\" [(ngModel)]=\"listingModel.image\">\n                    <small class=\"text-danger\" [class.d-none]=\"image.valid || image.untouched\">Please enter image URL.</small>        \n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"center-block\">Price:</label>\n                      <input type=\"text\" #price=\"ngModel\" required \n                      [class.is-invalid]=\"price.invalid && price.touched\" class=\"form-control\" name=\"price\" [(ngModel)]=\"listingModel.price\">\n                    <small class=\"text-danger\" [class.d-none]=\"price.valid || price.untouched\">Price is required</small>        \n                </div>\n\n              \n                <!-- <div class=\"form-group\">\n                    <select class=\"custom-select\">\n                      <option selected>Condition</option>\n                      <option *ngFor=\"let value of cndition\">{{value}}</option>\n                    </select>\n                </div> -->\n\n                <div class=\"form-group mb-3\">\n                    <label class=\"center-block\">Condition:</label>\n                      <div class=\"form-check\">\n                        <input class=\"form-check-input\" #cndition=\"ngModel\" required type=\"radio\" name=\"cndition\" value=\"New\" [(ngModel)]=\"listingModel.cndition\">\n                        <label class=\"form-check-label\">New</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input class=\"form-check-input\" #cndition=\"ngModel\" required type=\"radio\" name=\"cndition\" value=\"Almost New\" [(ngModel)]=\"listingModel.cndition\">\n                        <label class=\"form-check-label\">Almost New</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input class=\"form-check-input\" #cndition=\"ngModel\" required type=\"radio\" name=\"cndition\" value=\"Slightly Damaged\" [(ngModel)]=\"listingModel.cndition\">\n                        <label class=\"form-check-label\">Slightly Damaged</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input class=\"form-check-input\" #cndition=\"ngModel\" required type=\"radio\" name=\"cndition\" value=\"Worn\" [(ngModel)]=\"listingModel.cndition\">\n                        <label class=\"form-check-label\">Worn</label>\n                      </div>\n                    <small class=\"text-danger\" [class.d-none]=\"cndition.valid || cndition.untouched\">Please specify book condition.</small>\n                </div>\n\n              <button (click)=\"onSubmit()\" [disabled]=\"listingFrom.form.invalid\" class=\"btn btn-primary\">Add</button>\n            </form>\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n                {{errorMsg}}\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addlisting/addlisting.component.ts ***!
  \****************************************************/
/*! exports provided: AddlistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddlistingComponent", function() { return AddlistingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddlistingComponent = /** @class */ (function () {
    function AddlistingComponent(addbook, router) {
        this.addbook = addbook;
        this.router = router;
        // cndition = ['New', 'Almost New', 'Slight Damage', 'Worn'];
        this.listingModel = new _book_book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"](null, null, null, null, null, null);
        this.submitted = false;
        this.errorMsg = '';
        this.angularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    AddlistingComponent.prototype.ngOnInit = function () {
        // this.addbook.addBook(newBook)
        // .subscribe(book => 
        // {
        //  console.log(book);
        //   this.books.push(book)
        // });
    };
    AddlistingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.listingModel.userid = localStorage.getItem('currentuid');
        this.addbook.addBook(this.listingModel)
            .subscribe(function (response) {
            console.log('Success!', response);
            console.log("Added " + _this.listingModel);
        }, function (error) {
            _this.errorMsg = error.statusText;
        });
        this.router.navigate(['/listings']);
    };
    AddlistingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addlisting',
            template: __webpack_require__(/*! ./addlisting.component.html */ "./src/app/addlisting/addlisting.component.html"),
            styles: [__webpack_require__(/*! ./addlisting.component.css */ "./src/app/addlisting/addlisting.component.css")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_1__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddlistingComponent);
    return AddlistingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addlisting/addlisting.component */ "./src/app/addlisting/addlisting.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _cond_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cond.pipe */ "./src/app/cond.pipe.ts");
/* harmony import */ var _author_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./author.pipe */ "./src/app/author.pipe.ts");
/* harmony import */ var _name_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./name.pipe */ "./src/app/name.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wish_wish_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./wish/wish.component */ "./src/app/wish/wish.component.ts");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mylist/mylist.component */ "./src/app/mylist/mylist.component.ts");
/* harmony import */ var _price_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./price.pipe */ "./src/app/price.pipe.ts");
/* harmony import */ var _pricee_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pricee.pipe */ "./src/app/pricee.pipe.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _sent_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sent.pipe */ "./src/app/sent.pipe.ts");
/* harmony import */ var _received_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./received.pipe */ "./src/app/received.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { ItemDetailComponent } from './item-detail/item-detail.component';
//import { ContactComponent } from './contact/contact.component';





















var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
        //    redirectTo: 'listings'
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"]
    },
    {
        path: 'listings',
        component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_6__["ListingsComponent"],
    },
    {
        path: 'listings/:id',
        component: _item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
    },
    {
        path: 'add',
        component: _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_7__["AddlistingComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_9__["WishlistComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"]
    },
    {
        path: 'mylist',
        component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_28__["MylistComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"]
    },
    {
        path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_6__["ListingsComponent"],
                _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_7__["AddlistingComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_9__["WishlistComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                // ItemDetailComponent,
                // ContactComponent,
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_21__["BookComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _cond_pipe__WEBPACK_IMPORTED_MODULE_23__["CondPipe"],
                _author_pipe__WEBPACK_IMPORTED_MODULE_24__["AuthorPipe"],
                _name_pipe__WEBPACK_IMPORTED_MODULE_25__["NamePipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _wish_wish_component__WEBPACK_IMPORTED_MODULE_27__["WishComponent"],
                _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_28__["MylistComponent"],
                _price_pipe__WEBPACK_IMPORTED_MODULE_29__["PricePipe"],
                _pricee_pipe__WEBPACK_IMPORTED_MODULE_30__["PriceePipe"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_31__["MessageComponent"],
                _sent_pipe__WEBPACK_IMPORTED_MODULE_32__["SentPipe"],
                _received_pipe__WEBPACK_IMPORTED_MODULE_33__["ReceivedPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_19__["MyserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author.pipe.ts":
/*!********************************!*\
  !*** ./src/app/author.pipe.ts ***!
  \********************************/
/*! exports provided: AuthorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorPipe", function() { return AuthorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthorPipe = /** @class */ (function () {
    function AuthorPipe() {
    }
    AuthorPipe.prototype.transform = function (value, filterAuthor, propName) {
        if (value.length == 0 || filterAuthor === '' || filterAuthor == null) {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] == filterAuthor) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    AuthorPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'author'
        })
    ], AuthorPipe);
    return AuthorPipe;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
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

var BookComponent = /** @class */ (function () {
    function BookComponent(userid, name, author, image, price, cndition) {
        this.userid = userid;
        this.name = name;
        this.author = author;
        this.image = image;
        this.price = price;
        this.cndition = cndition;
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [String, String, String, String, Number, String])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/cond.pipe.ts":
/*!******************************!*\
  !*** ./src/app/cond.pipe.ts ***!
  \******************************/
/*! exports provided: CondPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondPipe", function() { return CondPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CondPipe = /** @class */ (function () {
    function CondPipe() {
    }
    CondPipe.prototype.transform = function (value, filterCond, propName) {
        if (value.length == 0 || filterCond === '' || filterCond == null || filterCond === 'None') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] == filterCond) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    CondPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'cond'
        })
    ], CondPipe);
    return CondPipe;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Page Not Found\n</h2>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  style=\"background-color:lightblue\">\n  <!-- Footer -->\n  <footer class=\"page-footer font-small blue pt-4 mt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center\" data-role=\"footer\" data-position=\"fixed\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-sm\">\n\n          <!-- Content -->\n          <h5 class=\"text-uppercase\">Address</h5>\n          <address>\n            <strong>H.No. 1220/16</strong><br>\n            Faridabad, 121002<br>\n            \n            <abbr title=\"Phone\">P:</abbr> (0129)222-3359\n            <br>\n          </address>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n        <!-- Grid column -->\n        <div class=\"col-sm\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">Contact</h5>\n          <address>\n            <strong>Riya Bhatia</strong><br>\n            <a>9999407469</a><br>\n            <span style = \"font-weight:600\">College: </span>USICT\n          </address>\n\n        </div>\n        <!-- Grid column -->\n\n        <div class=\"col-sm\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">Feedback</h5>\n          <address>\n              Please send me your ideas, bug <br>\n              reports, suggestions! Any <br>\n               feedback would be appreciated. <br>\n          </address>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n      <div>\n          <ul class=\"social-network social-circle\">\n              <li><a href=\"https://www.facebook.com/riyabhatia26\" title=\"Facebook\"><i class=\"fab fa-facebook-square\"></i></a></li>\n              <li><a href=\"https://www.quora.com/profile/Riya-Bhatia-9\" title=\"Quora\"><i class=\"fab fa-quora\"></i></a></li>\n              <li><a href=\"https://www.instagram.com/riyabhatia26/\" title=\"Instagram\"><i class=\"fab fa-instagram\"></i></a></li>\n              <li><a href=\"https://linkedin.com/in/riyabhatia26/\" title=\"Linkedin\"><i class=\"fab fa-linkedin\"></i></a></li>\n              <li><a href=\"https://github.com/riyabhatia26\" title=\"Github\"><i class=\"fab fa-github-square\"></i></a></li>\n          </ul>\n      </div>\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a  href=\"mailto:#\">riyabhatia26@gmail.com</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->\n</div>\n\n\n<!-- fb, linkedin, github, quora, insta -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<!-- <a routerLink=\"/listings\">Listings</a> -->\n\n<div class=\"jumbotron\" style=\"background: white\">\n    <div class=\"container\">\n      <div class=\"row\" style=\"margin:auto\">\n        <div class=\"col-md-6 offset-md-3\">\n              \n          <div class = \"container-fluid\">\n            <h2>Sign Up / Log In</h2>\n\n            <form #loginForm=\"ngForm\" *ngIf=\"!submitted\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n              <!-- {{loginForm.value | json}} -->\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Email:</label>\n                  <input type=\"email\" #email=\"ngModel\" required \n                  [class.is-invalid]=\"email.invalid && email.touched\" class=\"form-control\" name=\"email\" [(ngModel)]=\"loginModel.email\">\n                  <small class=\"text-danger\" [class.d-none]=\"email.valid || email.untouched\">Email is required.</small>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Password:</label>\n                  <input type=\"password\" #password=\"ngModel\" required \n                  [class.is-invalid]=\"password.invalid && password.touched\" class=\"form-control\" name=\"password\" [(ngModel)]=\"loginModel.password\">\n                  <small class=\"text-danger\" [class.d-none]=\"password.valid || password.untouched\">Password is required.</small>\n              </div>\n\n              <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n                  {{errorMsg}}\n              </div>\n  \n              <div class=\"d-flex justify-content-around\">\n                <button [disabled]=\"loginFrom.form.invalid\" class=\"btn btn-primary\"><i class=\"fas fa-sign-in-alt\"></i> LogIn</button>\n              </div>\n              <br>\n              <div class=\"d-flex justify-content-around\">\n                <span> New around here?\n              <button routerLink=\"/signup\" class=\"btn btn-link\">  <i class=\"fas fa-user-plus\"></i> SignUp</button>\n            </span>\n              </div>\n            </form>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { UsersComponent } from '../users/users.component';


var HomeComponent = /** @class */ (function () {
    function HomeComponent(fetchuser, router) {
        this.fetchuser = fetchuser;
        this.router = router;
        this.loginModel = new _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"](null, null);
        this.angularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubmit = function () {
        // console.log("login submit")
        var _this = this;
        // console.log(this.loginModel.email);
        //     console.log(this.loginModel.password);
        this.fetchuser.loginhelp(this.loginModel.email, this.loginModel.password);
        this.fetchuser.fetchuser()
            .subscribe(function (data) {
            _this.userdetails = Object.values(data);
            //      console.log("fetchuserservice");
            // console.log(typeof this.userdetails)
            // console.log(this.userdetails[0].id)
            console.log(_this.userdetails);
            if (_this.userdetails.length == 2) {
                _this.errorMsg = "Email Id or password is incorrect.";
            }
            else {
                _this.fetchuser.useridVal(_this.userdetails[0].id);
                _this.router.navigate(['/listings']);
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!-- <p>\n  {{itemId}}\n</p> -->\n\n<!-- <div>\n  <button (click)=\"goBack()\"><i class=\"fas fa-backward\"></i> Back</button>\n</div> -->\n\n<!-- \n<a (click)=\"goPrev()\">Previous</a>\n<a (click)=\"goNext()\">Next</a>\n -->\n\n\n<br>\n  <div class=\"row\" style=\"margin:auto; justify-content: center\">\n    <div class=\"colspan=8\" style=\"align-content: center\" *ngFor=\"let item of detail\">\n\n\n      <div class=\"card\">\n            <img class=\"card-img-top\" height=\"375px\" width=\"280px\" bind-src=\"item.image\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-around\">\n                <h4 class=\"card-title\">Book Name : {{item.bname}}</h4>\n              </div>\n              <div class=\"d-flex justify-content-around\">\n                <h6 class=\"card-subtitle mb-2 text-muted\">by author : {{item.author}}</h6>\n              </div>\n              <div class=\"d-flex justify-content-around\" style=\"display: -webkit-inline-flex\">\n                <span class=\"card-text\"><span style=\"font-weight:600\">Price : </span>{{item.price}} </span>\n                <span class=\"card-text\"><span style=\"font-weight:600\">Condition : </span>{{item.cndition}}</span>\n              </div>\n              <br>\n              <div class=\"d-flex justify-content-around\">\n                <button (click)=\"showCnt()\"><i class=\"fas fa-mobile-alt\"></i> View Seller Details</button>\n                <button (click)=\"addinwishlist(item)\" class=\"card-link\"><i class=\"far fa-grin-hearts\"></i> Add to wishlist</button>\n              </div>\n              <br>\n              <div style=\"align-content: center\">\n                <span *ngIf=\"viewSeller\">\n                <div class=\"d-flex justify-content-around\">\n                    <h5>Seller Details:</h5>\n                  </div><div class=\"d-flex justify-content-around\">\n                    <span class=\"card-text\"><span style=\"font-weight:600\">Name : </span>{{item.uname}}</span>\n                  <!-- </div><div class=\"d-flex justify-content-around\"> -->\n                    <span class=\"card-text\"><span style=\"font-weight:600\">Email : </span>{{item.email}}</span>\n                  </div><div class=\"d-flex justify-content-around\">\n                    <span class=\"card-text\"><span style=\"font-weight:600\">College : </span>{{item.college}}</span>\n                  <!-- </div><div class=\"d-flex justify-content-around\"> -->\n                    <span class=\"card-text\"><span style=\"font-weight:600\">Contact : </span>{{item.contact}}</span>\n                </div>\n                <br>\n                </span>\n              </div>\n\n              <div class=\"d-flex justify-content-around\">\n                  <input type=\"text\" [(ngModel)]=\"input\">\n                  <button (click)=\"msg(item)\"><i class=\"fas fa-comment-alt\"></i> Send Message</button>\n              </div>\n\n\n              <br>\n              <div class=\"d-flex justify-content-around\">\n                  <br>\n                      <small class=\"text-muted\">*Terms and Conditions apply <i class=\"far fa-check-square\"></i></small>\n              </div>\n            </div>\n          </div>\n\n      <!-- <div style=\"justify-content: center\">\n        <div class=\"card-group\">\n            <div class=\"card-deck\">\n              <div class=\"card\">\n                <div class=\"pull-left\">\n                    <img class=\"card-block\" height=\"375px\" width=\"280px\" bind-src=\"item.image\" alt=\"Card image cap\">\n                </div>\n                <div class=\"pull-right\">\n                      <div class=\"card-body flex-fill\">\n                        <h5 class=\"card-title\">{{item.name}}</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\">{{item.author}}</h6>\n                        <p class=\"card-text\">Price : {{item.price}}</p>\n                        <p class=\"card-text\">Condition : {{item.cndition}}</p>\n                        <button (click)=\"onSelect(item)\" [class.selected]=\"isSelected(item)\">Details</button>\n                                <a href=\"/listings/{{item.id}}\" class=\"card-link\">Details</a>\n                        <button href=\"#\" class=\"card-link\">Add to wishlist</button>\n                      </div>\n                      <div class=\"card-footer\">\n                        <small class=\"text-muted\">*Terms and Conditions apply</small>\n                      </div>\n                </div>\n                </div>\n            </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  <!-- </li>\n</ul> -->\n\n\n<!-- \n<p>\n  <button (click)=\"showOvv()\">Overview</button>\n  <button (click)=\"showCnt()\">Contact</button>\n</p> -->\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _wish_wish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wish/wish.component */ "./src/app/wish/wish.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemComponent = /** @class */ (function () {
    function ItemComponent(route, router, detailservice) {
        this.route = route;
        this.router = router;
        this.detailservice = detailservice;
        this.viewSeller = false;
        this.wishModel = new _wish_wish_component__WEBPACK_IMPORTED_MODULE_3__["WishComponent"](null, null);
        this.msgModel = new _message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"](null, null, null, null);
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let id = parseInt(this.route.snapshot.paramMap.get('id'));
        // this.itemId = id;
        this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this.itemId = id;
            _this.detailservice.idVal(id);
        });
        this.detailservice.getdetail()
            .subscribe(function (data) {
            _this.detail = Object.values(data);
            //      console.log("detailservice");
        });
    };
    ItemComponent.prototype.goBack = function () {
        var selectedId = this.itemId ? this.itemId : null;
        //    this.router.navigate(['/listings', {id : selectedId}])
        this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
    };
    // goPrev(){
    //   let prevId = this.itemId-1;
    //   this.router.navigate(['/listings', prevId]);
    // }
    // goNext(){
    //   let nextId = this.itemId+1;
    //   this.router.navigate(['/listings', nextId]);
    // }
    // showOvv(){
    //   this.router.navigate(['detail'], {relativeTo: this.route})
    // }
    ItemComponent.prototype.showCnt = function () {
        this.viewSeller = true;
        // this.router.navigate(['contact'], {relativeTo: this.route})
    };
    ItemComponent.prototype.addinwishlist = function (item) {
        var _this = this;
        //    this.list.getwish(item.id);
        this.wishModel.bookid = item.id;
        this.detailservice.addtowishlist(this.wishModel)
            .subscribe(function (response) {
            console.log('Success!', response);
            console.log("Wish Added " + _this.wishModel);
        });
    };
    ItemComponent.prototype.msg = function (item) {
        var _this = this;
        this.msgModel.receiverid = item.id;
        this.msgModel.bookid = item.bookid;
        this.msgModel.msg = this.input;
        this.detailservice.message(this.msgModel)
            .subscribe(function (response) {
            console.log('Success!', response);
            console.log("Msg Sent " + _this.msgModel);
        });
        this.input = null;
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<!-- <div style=\"display: inline;\"> -->\n  <nav aria-label=\"breadcrumb\">\n    <div class=\"justify-content-around\">\n    <div style=\"display: inline;\">\n    <div class=\"float-left\">\n    <span> Search by name : \n    <input type=\"text\" [(ngModel)]=\"filterName\" placeholder=\"Book Name\">\n    </span>\n    </div>\n    <div class=\"float-right\">\n        <span> Filter by price : \n        <input type=\"text\" [(ngModel)]=\"filterMin\" placeholder=\"Mininum Price\" >\n        <input type=\"text\" [(ngModel)]=\"filterMax\" placeholder=\"Maximum Price\">\n        </span>\n    </div>\n    </div>\n    </div>\n\n    <br>\n    <br>\n\n    <div class=\"justify-content-around\">\n    <div style=\"display: inline\">\n    <div class=\"float-left\">\n    <span> Search by author : \n    <input type=\"text\" [(ngModel)]=\"filterAuthor\" placeholder=\"Author Name\">\n    </span>\n    </div>\n    <div class=\"float-right\">\n        <!-- <span>\n          <label>Filter by condition:</label>\n          <select class=\"form-control\" id=\"sel1\"  [(ngModel)]=\"filterCond\">\n            <option>New</option>\n            <option>Almost New</option>\n            <option>Slightly Damaged</option>\n            <option>Worn</option>\n            <option>None</option>\n          </select>\n        </span> -->\n\n    <span> Filter by condition : \n    <input type=\"text\" [(ngModel)]=\"filterCond\" placeholder=\"Eg: New\">\n    </span>\n\n    </div>\n    </div>\n    </div>\n  </nav>\n\n<br>\n<!-- </div> -->\n<hr/>\n\n<div class=\"row\" style=\"margin:auto; justify-content: center\">\n    <div *ngFor=\"let item of listing | name:filterName:'bname' | author:filterAuthor:'author' | cond:filterCond:'cndition' | price:filterMin:'price' | pricee:filterMax:'price'\" class=\"col-sm-6 col-lg-4 col-xs-12 col-md-6 bi\">\n      <!-- | cond:filterCond:'cndition' -->\n      <!-- | name:filterName:'bname'  -->\n      <!-- | author:filterAuthor:'author' -->\n      <div style=\"justify-content: center\">\n        <div class=\"card-group\">\n          <div class=\"card-deck\">\n            <div class=\"card\">\n              <img class=\"card-block\" height=\"375px\" width=\"280px\" bind-src=\"item.image\" alt=\"Card image cap\">\n              <div class=\"card-body flex-fill\">\n                <h5 class=\"card-title\">{{item.bname}}</h5>\n                <h6 class=\"card-subtitle mb-2 text-muted\">{{item.author}}</h6>\n                <p class=\"card-text\">Price : {{item.price}}</p>\n                <p class=\"card-text\">Condition : {{item.cndition}}</p>\n                <button (click)=\"onSelect(item)\" [class.selected]=\"isSelected(item)\"><i class=\"fas fa-info-circle\"></i> Details</button>\n                <button (click)=\"addinwishlist(item)\" class=\"card-link\"><i class=\"far fa-grin-hearts\"></i> Add to wishlist</button>\n              </div>\n              <div class=\"card-footer\">\n                <small class=\"text-muted\">*Terms and Conditions apply <i class=\"far fa-check-square\"></i></small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _wish_wish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wish/wish.component */ "./src/app/wish/wish.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(router, route, list) {
        this.router = router;
        this.route = route;
        this.list = list;
        // {"id":1, "name":"item1"},
        // {"id":2, "name":"item2"},
        // {"id":3, "name":"item3"}
        this.filterCond = '';
        this.wishModel = new _wish_wish_component__WEBPACK_IMPORTED_MODULE_3__["WishComponent"](null, null);
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list.getlistings()
            .subscribe(function (data) {
            _this.listing = Object.values(data);
            console.log(_this.listing);
            // console.log("Angular listings " + typeof this.listing);
            // console.log("data rec" + typeof data);
            // console.log(this.listing.values);
            //   var myData = Object.keys(data).map(key => {
            //     console.log("myData" + typeof myData);
            //     return data[key];          
            // })
        });
        this.route.paramMap.subscribe(function (params) {
            var id = parseInt(params.get('id'));
            _this.selectedId = id;
        });
    };
    ListingsComponent.prototype.onSelect = function (item) {
        this.list.idVal(item.id);
        // this.router.navigate(['/listings',item.id]);
        this.router.navigate([item.id], { relativeTo: this.route });
    };
    ListingsComponent.prototype.isSelected = function (item) {
        return item.id === this.selectedId;
    };
    ListingsComponent.prototype.addinwishlist = function (item) {
        var _this = this;
        //    this.list.getwish(item.id);
        this.wishModel.bookid = item.id;
        this.list.addtowishlist(this.wishModel)
            .subscribe(function (response) {
            console.log('Success!', response);
            console.log("Wish Added " + _this.wishModel);
        });
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

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
    function LoginComponent(email, password) {
        this.email = email;
        this.password = password;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [String, String])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!-- <div class=\"jumbotron text-xs-center\"> -->\n\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n      <br>\n      <br>\n      <br>\n      <h1 class=\"display-3\">Thank You!</h1>\n      <p>\n        You have been logged out.\n      </p>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
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

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  message works!\n</p>\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
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

var MessageComponent = /** @class */ (function () {
    function MessageComponent(senderid, receiverid, bookid, msg) {
        this.senderid = senderid;
        this.receiverid = receiverid;
        this.bookid = bookid;
        this.msg = msg;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [Number, Number, Number, String])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"row\" style=\"margin:auto; justify-content: center\">\n<ul>\n    \n    <li class=\"list-group-item active\">SENT MESSAGES</li>\n    <ul class=\"list-group\">    \n        <div *ngFor=\"let msg of sentmessages\">\n                <!-- | received:receiverid -->\n                <!-- | sent:senderid -->\n                    <li class=\"list-group-item\">\n                    <span class=\"badge badge-light\">Sent to : {{msg.uname}}</span>\n                    <p>{{msg.msg}}</p>\n            </li>\n        </div>\n    </ul>\n    <li class=\"list-group-item active\">RECEIVED MESSAGES</li>\n    <ul class=\"list-group\">    \n            <div *ngFor=\"let msg of recmessages\">\n                    <!-- | received:receiverid -->\n                    <!-- | sent:senderid -->\n                        <li class=\"list-group-item\">\n                        <span class=\"badge badge-light\">Received from : {{msg.uname}}</span>\n                        <p>{{msg.msg}}</p>\n                </li>\n            </div>\n        </ul>\n    </ul>  \n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(serv) {
        this.serv = serv;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        // sent(){
        var _this = this;
        this.serv.mysentmsgs()
            .subscribe(function (data) {
            _this.sentmessages = Object.values(data);
            console.log(_this.sentmessages);
        });
        //}
        //rec(){
        this.serv.myrecmsgs()
            .subscribe(function (data) {
            _this.recmessages = Object.values(data);
            console.log(_this.recmessages);
        });
        //}
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_1__["MyserviceService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/mylist/mylist.component.css":
/*!*********************************************!*\
  !*** ./src/app/mylist/mylist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mylist/mylist.component.html":
/*!**********************************************!*\
  !*** ./src/app/mylist/mylist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<div class=\"row\" style=\"margin:auto; justify-content: center\">\n    <div *ngFor=\"let item of mylist\" class=\"col-sm-6 col-lg-4 col-xs-12 col-md-6 bi\">\n        <div style=\"justify-content: center\">\n            <div class=\"card-group\">\n                <div class=\"card-deck\">\n                    <div class=\"card\">\n                        <img class=\"card-block\" height=\"375px\" width=\"280px\" bind-src=\"item.image\" alt=\"Card image cap\">\n                        <div class=\"card-body flex-fill\">\n                            <h5 class=\"card-title\">{{item.bname}}</h5>\n                            <h6 class=\"card-subtitle mb-2 text-muted\">{{item.author}}</h6>\n                            <p class=\"card-text\">Price : {{item.price}}</p>\n                            <p class=\"card-text\">Condition : {{item.cndition}}</p>\n                            <button (click)=\"onSelect(item)\"><i class=\"fas fa-info-circle\"></i> Details</button>\n                            <!-- <button (click)=\"unwish(item)\" class=\"card-link\"><i class=\"far fa-grin-hearts\"></i>Remove from wishlist</button> -->\n                        </div>\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">*Terms and Conditions apply <i class=\"far fa-check-square\"></i></small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/mylist/mylist.component.ts":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MylistComponent = /** @class */ (function () {
    function MylistComponent(getmy) {
        this.getmy = getmy;
    }
    MylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getmy.mylisting()
            .subscribe(function (data) {
            _this.mylist = Object.values(data);
            console.log(_this.mylist);
        });
    };
    MylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mylist',
            template: __webpack_require__(/*! ./mylist.component.html */ "./src/app/mylist/mylist.component.html"),
            styles: [__webpack_require__(/*! ./mylist.component.css */ "./src/app/mylist/mylist.component.css")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_1__["MyserviceService"]])
    ], MylistComponent);
    return MylistComponent;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient } from 'selenium-webdriver/http';



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var MyserviceService = /** @class */ (function () {
    //  public wish;
    function MyserviceService(http) {
        this.http = http;
        // Options = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json'
        //   })
        // };
        this.listingsurl = "http://localhost:8000/listingsdata";
        this.wishlisturl = "http://localhost:8000/wishlistdata";
        this.addbookurl = "http://localhost:8000/addbook";
        this.adduserurl = "http://localhost:8000/adduser";
        this.detailurl = "http://localhost:8000/detail";
        this.fetchurl = "http://localhost:8000/fetch";
        this.addwishurl = "http://localhost:8000/addwish";
        this.mylisturl = "http://localhost:8000/mylistdata";
        this.sendmsgurl = "http://localhost:8000/addmsg";
        this.mysentmsgsurl = "http://localhost:8000/mysentmsgs";
        this.myrecmsgsurl = "http://localhost:8000/myrecmsgs";
    }
    // getwish(wid){
    //   this.wish=wid;
    // }
    MyserviceService.prototype.useridVal = function (getid) {
        this.userid = getid;
        localStorage.setItem('currentuid', getid);
    };
    MyserviceService.prototype.loginhelp = function (email, password) {
        this.email = email;
        this.password = password;
    };
    MyserviceService.prototype.idVal = function (inp) {
        this.id = inp;
    };
    MyserviceService.prototype.getlistings = function () {
        return this.http.get(this.listingsurl);
    };
    MyserviceService.prototype.getdetail = function () {
        return this.http.get(this.detailurl + "?id=" + this.id);
    };
    MyserviceService.prototype.mylisting = function () {
        return this.http.get(this.mylisturl + "?id=" + localStorage.getItem('currentuid'));
    };
    MyserviceService.prototype.mysentmsgs = function () {
        return this.http.get(this.mysentmsgsurl + "?id=" + localStorage.getItem('currentuid'));
    };
    MyserviceService.prototype.myrecmsgs = function () {
        return this.http.get(this.myrecmsgsurl + "?id=" + localStorage.getItem('currentuid'));
    };
    // fetchuser(): Observable<any>{
    //   let Params = new HttpParams();
    //   Params = Params.append('email', this.email);
    //   Params = Params.append('password', this.password);
    //   console.log(this.password)
    //   console.log(Params.get('password'))
    //   // let params = new HttpParams().set('email', this.email);
    //   // let params = new HttpParams().set('password', this.password);
    //   return this.http.get(this.fetchurl, {params:Params})
    // }
    MyserviceService.prototype.fetchuser = function () {
        return this.http.get(this.fetchurl + "?email=" + this.email + "&password=" + this.password);
    };
    MyserviceService.prototype.getwishlist = function () {
        return this.http.get(this.wishlisturl + "?id=" + localStorage.getItem('currentuid'));
    };
    MyserviceService.prototype.create = function (user) {
        return this.http.post(this.adduserurl, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    MyserviceService.prototype.addBook = function (book) {
        return this.http.post(this.addbookurl, book, httpOptions);
    };
    MyserviceService.prototype.addtowishlist = function (wish) {
        // let Params = new HttpParams();
        // Params = Params.append('bookid', this.wish);
        // Params = Params.append('userid', this.userid);
        // return this.http.post(this.wishlisturl, Params, httpOptions)
        wish.userid = localStorage.getItem('currentuid');
        return this.http.post(this.addwishurl, wish, httpOptions);
    };
    MyserviceService.prototype.message = function (message) {
        message.senderid = localStorage.getItem('currentuid');
        return this.http.post(this.sendmsgurl, message, httpOptions);
    };
    MyserviceService.prototype.clearuid = function () {
        localStorage.removeItem('currentuid');
    };
    MyserviceService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    MyserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/name.pipe.ts":
/*!******************************!*\
  !*** ./src/app/name.pipe.ts ***!
  \******************************/
/*! exports provided: NamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePipe", function() { return NamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NamePipe = /** @class */ (function () {
    function NamePipe() {
    }
    NamePipe.prototype.transform = function (value, filterName, propName) {
        if (value.length == 0 || filterName === '' || filterName == null) {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] == filterName) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    NamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'name'
        })
    ], NamePipe);
    return NamePipe;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light\">\n\n  <a class=\"navbar-brand\" href=\"/listings\">\n    <i class=\"fas fa-retweet\"></i>\n    BooksResale\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/wishlist\"><i class=\"far fa-grin-hearts\"></i> Wishlist</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/messages\"><i class=\"far fa-envelope\"></i> Messages</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/add\"><i class=\"far fa-plus-square\"></i> AddListings</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav nav justify-content-end\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/mylist\"><i class=\"fas fa-book-open\"></i> MyListings</a>\n      </li>\n      <li class=\"nav-item\">\n          <a (click)=\"clear()\" class=\"nav-link\" routerLink=\"/logout\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a>\n      </li>\n    </ul>\n      <!-- <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form> -->\n    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AbstractControl, FormGroup, Validators, FormControl } from ‘@angular/forms’;
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(serv) {
        this.serv = serv;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.clear = function () {
        this.serv.clearuid();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_1__["MyserviceService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/price.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/price.pipe.ts ***!
  \*******************************/
/*! exports provided: PricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricePipe", function() { return PricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricePipe = /** @class */ (function () {
    function PricePipe() {
    }
    PricePipe.prototype.transform = function (value, filterMin, propName) {
        if (value.length == 0 || filterMin === '' || filterMin == null || filterMin === 'Min price') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] > filterMin) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    PricePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'price'
        })
    ], PricePipe);
    return PricePipe;
}());



/***/ }),

/***/ "./src/app/pricee.pipe.ts":
/*!********************************!*\
  !*** ./src/app/pricee.pipe.ts ***!
  \********************************/
/*! exports provided: PriceePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceePipe", function() { return PriceePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PriceePipe = /** @class */ (function () {
    function PriceePipe() {
    }
    PriceePipe.prototype.transform = function (value, filterMax, propName) {
        if (value.length == 0 || filterMax === '' || filterMax == null || filterMax === 'Max price') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] < filterMax) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    PriceePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pricee'
        })
    ], PriceePipe);
    return PriceePipe;
}());



/***/ }),

/***/ "./src/app/received.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/received.pipe.ts ***!
  \**********************************/
/*! exports provided: ReceivedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedPipe", function() { return ReceivedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReceivedPipe = /** @class */ (function () {
    function ReceivedPipe() {
    }
    ReceivedPipe.prototype.transform = function (value, id) {
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[id] == localStorage.getItem('currentuid')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    ReceivedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'received'
        })
    ], ReceivedPipe);
    return ReceivedPipe;
}());



/***/ }),

/***/ "./src/app/sent.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sent.pipe.ts ***!
  \******************************/
/*! exports provided: SentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentPipe", function() { return SentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SentPipe = /** @class */ (function () {
    function SentPipe() {
    }
    SentPipe.prototype.transform = function (value, id) {
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[id] == localStorage.getItem('currentuid')) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    SentPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sent'
        })
    ], SentPipe);
    return SentPipe;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<!-- <a routerLink=\"/listings\">Listings</a> -->\n\n<!-- \n<form [formGroup]=\"angularForm\">\n  <div class=\"form-group\">\n    <label class=\"center-block\">Name:\n      <input class=\"form-control\" formControlName=\"name\">\n    </label>\n  </div>\n</form> -->\n<div class=\"jumbotron\" style=\"background: white\">\n  <div class=\"container\">\n    <div class=\"row\" style=\"margin:auto\">\n      <div class=\"col-md-6 offset-md-3\">\n        \n          <div class = \"container-fluid\">\n            <div class=\"d-flex justify-content-around\">\n              <h2>SignUp Form</h2>\n            </div>\n            <form #userFrom=\"ngForm\" *ngIf=\"!submitted\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n              <!-- {{userFrom.value | json}} -->\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Name:</label>\n                  <input type=\"text\" #name=\"ngModel\" required \n                  [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" name=\"name\" [(ngModel)]=\"userModel.name\">\n                <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">Name is required.</small>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"center-block\">Email:</label>\n                  <input type=\"email\" #email=\"ngModel\" required \n                  [class.is-invalid]=\"email.invalid && email.touched\" class=\"form-control\" name=\"email\" [(ngModel)]=\"userModel.email\">\n                  <small class=\"text-danger\" [class.d-none]=\"email.valid || email.untouched\">Email is required.</small>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Password:</label>\n                  <input type=\"password\" #password=\"ngModel\" required \n                  [class.is-invalid]=\"password.invalid && password.touched\" class=\"form-control\" name=\"password\" [(ngModel)]=\"userModel.password\">\n                  <small class=\"text-danger\" [class.d-none]=\"password.valid || password.untouched\">Password is required.</small>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">College:</label>\n                  <input type=\"text\" #college=\"ngModel\" required \n                  [class.is-invalid]=\"college.invalid && college.touched\" class=\"form-control\" name=\"college\" [(ngModel)]=\"userModel.college\">\n                  <small class=\"text-danger\" [class.d-none]=\"college.valid || college.untouched\">College is required.</small>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Address:</label>\n                  <input type=\"address\" #address=\"ngModel\" required \n                  [class.is-invalid]=\"address.invalid && address.touched\" class=\"form-control\" name=\"address\" [(ngModel)]=\"userModel.address\">\n                  <small class=\"text-danger\" [class.d-none]=\"address.valid || address.untouched\">Address is required.</small>\n              </div>\n\n          <!-- \n              <div ngModelGroup=\"address\">\n                <div class=\"form-group\">\n                  <label>HouseNumber</label>\n                  <input type=\"text\" class=\"form-control\" name=\"housenumber\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <label>Street</label>\n                  <input type=\"text\" class=\"form-control\" name=\"street\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" name=\"city\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <label>PostalCode</label>\n                  <input type=\"text\" class=\"form-control\" name=\"postalcode\" ngModel>\n                </div>\n              </div> -->\n\n\n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Contact:</label>\n                  <input type=\"tel\" #contact=\"ngModel\" pattern=\"\\d{10}$\" required \n                  [class.is-invalid]=\"contact.invalid && contact.touched\" class=\"form-control\" name=\"contact\" [(ngModel)]=\"userModel.contact\">\n                  <small class=\"text-danger\" [class.d-none]=\"contact.valid || contact.untouched\">Phone number is required and must be 10 digits.</small>\n              </div>\n              <div class=\"d-flex justify-content-around\">\n                <button [disabled]=\"userFrom.form.invalid\" class=\"btn btn-primary\"><i class=\"fas fa-user-plus\"></i> Sign Up</button>\n              </div>\n              <br>\n              <div class=\"d-flex justify-content-around\">\n                  <span> Already a registered user?\n                    <button routerLink=\"/home\" class=\"btn btn-link\">  <i class=\"fas fa-sign-in-alt\"></i> LogIn</button>\n                  </span>\n              </div>\n\n            </form>\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n                {{errorMsg}}\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  \n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, adder) {
        this.router = router;
        this.adder = adder;
        this.userModel = new _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"](null, null, null, null, null, null);
        this.submitted = false;
        this.errorMsg = '';
        this.angularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.adder.create(this.userModel)
            .subscribe(function (response) {
            console.log('Success!', response);
            console.log("Added " + _this.userModel);
        }, function (error) {
            _this.errorMsg = error.statusText;
        });
        this.router.navigate(['/home']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n\n<app-navbar></app-navbar>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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

var UsersComponent = /** @class */ (function () {
    function UsersComponent(name, email, password, college, address, contact) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.college = college;
        this.address = address;
        this.contact = contact;
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [String, String, String, String, String, Number])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/wish/wish.component.css":
/*!*****************************************!*\
  !*** ./src/app/wish/wish.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wish/wish.component.html":
/*!******************************************!*\
  !*** ./src/app/wish/wish.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  wish works!\n</p>\n"

/***/ }),

/***/ "./src/app/wish/wish.component.ts":
/*!****************************************!*\
  !*** ./src/app/wish/wish.component.ts ***!
  \****************************************/
/*! exports provided: WishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishComponent", function() { return WishComponent; });
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

var WishComponent = /** @class */ (function () {
    function WishComponent(userid, bookid) {
        this.userid = userid;
        this.bookid = bookid;
    }
    WishComponent.prototype.ngOnInit = function () {
    };
    WishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wish',
            template: __webpack_require__(/*! ./wish.component.html */ "./src/app/wish/wish.component.html"),
            styles: [__webpack_require__(/*! ./wish.component.css */ "./src/app/wish/wish.component.css")]
        }),
        __metadata("design:paramtypes", [Number, Number])
    ], WishComponent);
    return WishComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\" style=\"margin:auto; justify-content: center\">\n    <div *ngFor=\"let item of wishlist\" class=\"col-sm-6 col-lg-4 col-xs-12 col-md-6 bi\">\n        <div style=\"justify-content: center\">\n            <div class=\"card-group\">\n                <div class=\"card-deck\">\n                    <div class=\"card\">\n                        <img class=\"card-block\" height=\"375px\" width=\"280px\" bind-src=\"item.image\" alt=\"Card image cap\">\n                        <div class=\"card-body flex-fill\">\n                            <h5 class=\"card-title\">{{item.bname}}</h5>\n                            <h6 class=\"card-subtitle mb-2 text-muted\">{{item.author}}</h6>\n                            <p class=\"card-text\">Price : {{item.price}}</p>\n                            <p class=\"card-text\">Condition : {{item.cndition}}</p>\n                            <button (click)=\"isSelected(item)\"><i class=\"fas fa-info-circle\"></i> Details</button>\n                            <!-- <button (click)=\"unwish(item)\" class=\"card-link\"><i class=\"far fa-grin-hearts\"></i>Remove from wishlist</button> -->\n                        </div>\n                        <div class=\"card-footer\">\n                            <small class=\"text-muted\">*Terms and Conditions apply <i class=\"far fa-check-square\"></i></small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
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



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(router, list) {
        this.router = router;
        this.list = list;
        this.wishlist = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list.getwishlist()
            .subscribe(function (data) {
            _this.wishlist = Object.values(data);
            console.log(_this.wishlist);
            _this.try = JSON.stringify(data);
            _this.wishlist = JSON.parse(_this.try);
            console.log(_this.wishlist);
        });
    };
    WishlistComponent.prototype.onSelect = function (item) {
        this.router.navigate(['/listings/' + item.id]);
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _myservice_service__WEBPACK_IMPORTED_MODULE_1__["MyserviceService"]])
    ], WishlistComponent);
    return WishlistComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Riya Bhatia\Desktop\bootcamp\Books\myproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map