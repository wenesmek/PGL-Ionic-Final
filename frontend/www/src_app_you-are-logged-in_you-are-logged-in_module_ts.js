"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_you-are-logged-in_you-are-logged-in_module_ts"],{

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 7045);




let UserService = class UserService {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.endpoint = 'http://192.168.1.94:8080/api/users';
    }
    getUsers(token) {
        const myOptions = this.getOptions(token);
        return this.httpClient.get(this.endpoint, myOptions);
    }
    getOptions(token) {
        const bearerAccess = 'Bearer ' + token;
        const options = {
            headers: {
                'Authorization': bearerAccess,
                // 'Content-Type' : 'application/x-www-form-urlencoded',
            }
            //, withCredentials: true
        };
        return options;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 3293:
/*!***********************************************************************!*\
  !*** ./src/app/you-are-logged-in/you-are-logged-in-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YouAreLoggedInPageRoutingModule": () => (/* binding */ YouAreLoggedInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _you_are_logged_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./you-are-logged-in.page */ 4116);




const routes = [
    {
        path: '',
        component: _you_are_logged_in_page__WEBPACK_IMPORTED_MODULE_0__.YouAreLoggedInPage
    }
];
let YouAreLoggedInPageRoutingModule = class YouAreLoggedInPageRoutingModule {
};
YouAreLoggedInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], YouAreLoggedInPageRoutingModule);



/***/ }),

/***/ 8313:
/*!***************************************************************!*\
  !*** ./src/app/you-are-logged-in/you-are-logged-in.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YouAreLoggedInPageModule": () => (/* binding */ YouAreLoggedInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _you_are_logged_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./you-are-logged-in-routing.module */ 3293);
/* harmony import */ var _you_are_logged_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./you-are-logged-in.page */ 4116);







let YouAreLoggedInPageModule = class YouAreLoggedInPageModule {
};
YouAreLoggedInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _you_are_logged_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.YouAreLoggedInPageRoutingModule
        ],
        declarations: [_you_are_logged_in_page__WEBPACK_IMPORTED_MODULE_1__.YouAreLoggedInPage]
    })
], YouAreLoggedInPageModule);



/***/ }),

/***/ 4116:
/*!*************************************************************!*\
  !*** ./src/app/you-are-logged-in/you-are-logged-in.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YouAreLoggedInPage": () => (/* binding */ YouAreLoggedInPage)
/* harmony export */ });
/* harmony import */ var _home_zining_Data_Proyectos_Ionic_UT1_pgl_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _you_are_logged_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./you-are-logged-in.page.html?ngResource */ 8439);
/* harmony import */ var _you_are_logged_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./you-are-logged-in.page.scss?ngResource */ 5218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 7045);









let YouAreLoggedInPage = class YouAreLoggedInPage {
  constructor(router, authService, userService, storage) {
    this.router = router;
    this.authService = authService;
    this.userService = userService;
    this.storage = storage;
    this.userName = '';
  }

  ngOnInit() {
    var _this = this;

    return (0,_home_zining_Data_Proyectos_Ionic_UT1_pgl_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this.storage.get('token');
      _this.userName = yield _this.storage.get('name');
      console.log('logged in');
    })();
  }

  ionViewWillEnter() {
    return (0,_home_zining_Data_Proyectos_Ionic_UT1_pgl_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  gotoJuguetes() {
    this.router.navigateByUrl('/juguetes-nia');
  }

  gotoCrearJuguete() {
    this.router.navigateByUrl('/juegues-nia-form/0');
  }

};

YouAreLoggedInPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage
}];

YouAreLoggedInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-you-are-logged-in',
  template: _you_are_logged_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_you_are_logged_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], YouAreLoggedInPage);


/***/ }),

/***/ 5218:
/*!**************************************************************************!*\
  !*** ./src/app/you-are-logged-in/you-are-logged-in.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  text-align: center;\n  font-weight: bold;\n}\n\n.content {\n  margin: 5%;\n  color: white;\n  text-align: center;\n  background-color: #afc2e8;\n  height: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdS1hcmUtbG9nZ2VkLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJ5b3UtYXJlLWxvZ2dlZC1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiA1JTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmMyZTg7XG4gIGhlaWdodDogODUlO1xufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 8439:
/*!**************************************************************************!*\
  !*** ./src/app/you-are-logged-in/you-are-logged-in.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu contentId=\"main-content\" side=\"start\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item button>\n        <ion-label expand=\"block\" (click)=\"gotoJuguetes()\">Listado juguetes</ion-label>\n      </ion-item>\n      <ion-item button>\n        <ion-label expand=\"block\" (click)=\"gotoCrearJuguete()\">Crear juguete</ion-label>\n      </ion-item>\n      <ion-item button>\n        <ion-label expand=\"block\" (click)=\"logout()\">Logout</ion-label>\n      </ion-item>\n    </ion-list>\n\n\n  </ion-content>\n</ion-menu>\n\n<div class=\"ion-page\" id=\"main-content\" main>\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-menu-button class=\"ion-float-left\"></ion-menu-button>\n      <ion-title>\n        Juguetes\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">Biblioteca de juguetes</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <div class=\"content\">\n      <h1 class=\"nombre ion-margin-bottom jasmine-title\">Bienvenido {{userName}}</h1>\n\n      <ion-img src=\"/assets/images/portada.jpeg\"></ion-img>\n      <p class=\"ion-text-justify ion-padding\">En esta aplicación podrás gestionar los jueguetes de tu mascota.</p>\n\n\n    </div>\n  </ion-content>\n</div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_you-are-logged-in_you-are-logged-in_module_ts.js.map