"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_juguetes-nia_juguetes-nia_module_ts"],{

/***/ 4777:
/*!*************************************************************!*\
  !*** ./src/app/juguetes-nia/juguetes-nia-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesNiaPageRoutingModule": () => (/* binding */ JuguetesNiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _juguetes_nia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./juguetes-nia.page */ 3684);




const routes = [
    {
        path: '',
        component: _juguetes_nia_page__WEBPACK_IMPORTED_MODULE_0__.JuguetesNiaPage
    }
];
let JuguetesNiaPageRoutingModule = class JuguetesNiaPageRoutingModule {
};
JuguetesNiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JuguetesNiaPageRoutingModule);



/***/ }),

/***/ 1154:
/*!*****************************************************!*\
  !*** ./src/app/juguetes-nia/juguetes-nia.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesNiaPageModule": () => (/* binding */ JuguetesNiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _juguetes_nia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./juguetes-nia-routing.module */ 4777);
/* harmony import */ var _juguetes_nia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juguetes-nia.page */ 3684);







let JuguetesNiaPageModule = class JuguetesNiaPageModule {
};
JuguetesNiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _juguetes_nia_routing_module__WEBPACK_IMPORTED_MODULE_0__.JuguetesNiaPageRoutingModule
        ],
        declarations: [_juguetes_nia_page__WEBPACK_IMPORTED_MODULE_1__.JuguetesNiaPage]
    })
], JuguetesNiaPageModule);



/***/ }),

/***/ 3684:
/*!***************************************************!*\
  !*** ./src/app/juguetes-nia/juguetes-nia.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesNiaPage": () => (/* binding */ JuguetesNiaPage)
/* harmony export */ });
/* harmony import */ var _home_zining_Data_Proyectos_Ionic_UT1_pgl_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _juguetes_nia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juguetes-nia.page.html?ngResource */ 5435);
/* harmony import */ var _juguetes_nia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juguetes-nia.page.scss?ngResource */ 5632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_juguete_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/juguete.service */ 8855);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 7045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);








let JuguetesNiaPage = class JuguetesNiaPage {
  constructor(jugueteService, router, storage) {
    this.jugueteService = jugueteService;
    this.router = router;
    this.storage = storage;
    this.juguetes = [];
  }

  ngOnInit() {
    this.getAllJuguetes();
  }

  ionViewWillEnter() {
    this.getAllJuguetes();
  }

  getAllJuguetes() {
    var _this = this;

    return (0,_home_zining_Data_Proyectos_Ionic_UT1_pgl_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this.storage.get('token');

      _this.jugueteService.getJuguetes(token).subscribe(response => {
        _this.juguetes = response;
      });
    })();
  }

  showMenu(id) {
    this.router.navigateByUrl('/juegues-nia-form/' + id);
  }

};

JuguetesNiaPage.ctorParameters = () => [{
  type: _services_juguete_service__WEBPACK_IMPORTED_MODULE_3__.JugueteService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
}];

JuguetesNiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-juguetes-nia',
  template: _juguetes_nia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_juguetes_nia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], JuguetesNiaPage);


/***/ }),

/***/ 5632:
/*!****************************************************************!*\
  !*** ./src/app/juguetes-nia/juguetes-nia.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "#arrow {\n  float: right;\n}\n\nion-item {\n  --padding-start: 0;\n}\n\nion-card {\n  width: 100% !important;\n  background-color: #afc2e8;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1Z3VldGVzLW5pYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJqdWd1ZXRlcy1uaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fycm93IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZjMmU4O1xuICBjb2xvcjogd2hpdGU7XG5cbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 5435:
/*!****************************************************************!*\
  !*** ./src/app/juguetes-nia/juguetes-nia.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Listado de juguetes</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" text=\"Volver\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item button *ngFor=\"let j of juguetes\" (click)=\"showMenu(j.id)\">\n\n      <ion-card>\n        <ion-label>\n          <ion-card-header>\n            <ion-card-title>{{j.nombre}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-avatar>\n              <img *ngIf=\"j.filename\" src=\"http://localhost:8080/images/{{j.filename}}\" alt=\"image\"/>\n            </ion-avatar>\n            <ion-label>{{j.descripcion}}</ion-label>\n          </ion-card-content>\n        </ion-label>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"showMenu('0')\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-label>\n      <ion-select-option value=\"ver\">Ver</ion-select-option>\n      <ion-select-option value=\"modificar\">Modificar</ion-select-option>\n      <ion-select-option value=\"eliminar\">Eliminar</ion-select-option>\n    </ion-label>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_juguetes-nia_juguetes-nia_module_ts.js.map