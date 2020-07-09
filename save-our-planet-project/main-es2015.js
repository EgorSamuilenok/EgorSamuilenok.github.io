(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | components-country-map-country-map-module */[__webpack_require__.e("default~components-country-map-country-map-module~components-donation-statistic-list-donation-statis~fa421834"), __webpack_require__.e("components-country-map-country-map-module")]).then(__webpack_require__.bind(null, /*! ./components/country-map/country-map.module */ "./src/app/components/country-map/country-map.module.ts")).then((m) => m.CountryMapModule),
    },
    {
        path: 'countries',
        loadChildren: () => __webpack_require__.e(/*! import() | components-country-list-country-list-country-list-module */ "components-country-list-country-list-country-list-module").then(__webpack_require__.bind(null, /*! ./components/country-list/country-list/country-list.module */ "./src/app/components/country-list/country-list/country-list.module.ts")).then((m) => m.CountryListModule),
    },
    {
        path: 'trees',
        loadChildren: () => Promise.all(/*! import() | components-tree-list-tree-list-tree-list-module */[__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-tree-list-tree-list-tree-list-module")]).then(__webpack_require__.bind(null, /*! ./components/tree-list//tree-list/tree-list.module */ "./src/app/components/tree-list/tree-list/tree-list.module.ts")).then((m) => m.TreeListModule)
    },
    {
        path: 'donation-statistic',
        loadChildren: () => Promise.all(/*! import() | components-donation-statistic-list-donation-statistic-donation-statistic-module */[__webpack_require__.e("default~components-country-map-country-map-module~components-donation-statistic-list-donation-statis~fa421834"), __webpack_require__.e("components-donation-statistic-list-donation-statistic-donation-statistic-module")]).then(__webpack_require__.bind(null, /*! ./components/donation-statistic-list/donation-statistic/donation-statistic.module */ "./src/app/components/donation-statistic-list/donation-statistic/donation-statistic.module.ts"))
            .then((m) => m.DonationStatisticModule)
    },
    {
        path: 'user-profile',
        loadChildren: () => Promise.all(/*! import() | components-user-list-user-profile-user-profile-module */[__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-user-list-user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./components/user-list/user-profile/user-profile.module */ "./src/app/components/user-list/user-profile/user-profile.module.ts")).then((m) => m.UserProfileModule)
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() | components-user-list-registration-registration-module */[__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-user-list-registration-registration-module")]).then(__webpack_require__.bind(null, /*! ./components/user-list/registration/registration.module */ "./src/app/components/user-list/registration/registration.module.ts")).then((m) => m.RegistrationModule)
    },
    {
        path: 'donation',
        loadChildren: () => __webpack_require__.e(/*! import() | components-donation-list-donation-list-before-registration-donation-list-before-registration-module */ "components-donation-list-donation-list-before-registration-donation-list-before-registration-module").then(__webpack_require__.bind(null, /*! ./components/donation-list/donation-list-before-registration/donation-list-before-registration.module */ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.module.ts"))
            .then((m) => m.DonationListBeforeRegistrationModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | components-about-about-module */ "components-about-about-module").then(__webpack_require__.bind(null, /*! ./components/about/about.module */ "./src/app/components/about/about.module.ts")).then((m) => m.AboutModule)
    },
    {
        path: 'contacts',
        loadChildren: () => Promise.all(/*! import() | components-contacts-contacts-module */[__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./components/contacts/contacts.module */ "./src/app/components/contacts/contacts.module.ts")).then((m) => m.ContactsModule)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var _store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/user-list/user-list.selectors */ "./src/app/store/user-list/user-list.selectors.ts");
/* harmony import */ var _store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/tree-list/tree-list.facade */ "./src/app/store/tree-list/tree-list.facade.ts");
/* harmony import */ var _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/user-list/user-list.facade */ "./src/app/store/user-list/user-list.facade.ts");
/* harmony import */ var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















const _c0 = function () { return { exact: true }; };
function AppComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " About ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Countries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Trees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Registration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contacts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_0_ng_container_9_Template, 20, 2, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation_menu-mode", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__profile-button_menu-mode", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__donation-button_menu-mode", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__statistic-button_menu-mode", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__button-line_top", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__button-line_middle", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__button-line_bottom", ctx_r0.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.menuMode);
} }
function AppComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Now loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(store$, _facadeCountryListService, _facadeTreeListService, _facadeUserListService, _facadeDonationListService) {
        this.store$ = store$;
        this._facadeCountryListService = _facadeCountryListService;
        this._facadeTreeListService = _facadeTreeListService;
        this._facadeUserListService = _facadeUserListService;
        this._facadeDonationListService = _facadeDonationListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._countryList = null;
        this.title = 'save-our-planet-project';
        this.isLoading = true;
    }
    ngOnInit() {
        this.store$.select(_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((userList) => {
            if (!Boolean(userList)) {
                this._facadeUserListService.initUserList();
            }
        });
        this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((countryList) => {
            if (Boolean(countryList)) {
                this._countryList = countryList;
            }
            else {
                this._facadeCountryListService.initCountryList();
            }
        });
        this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCapitalsCoordinatesData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((capitalsCoordinatesData) => {
            if (capitalsCoordinatesData) {
                this._facadeCountryListService.saveCapitalsCoordinatesData(capitalsCoordinatesData);
            }
        });
        this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryListIsLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
        this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryListIsInitedCountries"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedCountries) => {
            if (isInitedCountries) {
                this._facadeCountryListService.initCapitalsCoordinatesData(this._countryList);
                this._facadeCountryListService.initCountriesForestAreaData();
            }
        });
        this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCountriesForestAreaData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedCountriesForestAreaData) => {
            if (isInitedCountriesForestAreaData) {
                this._facadeCountryListService.initCountriesForestArea();
            }
        });
        this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCapitalsCoordinatesData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedCapitalsCoordinatesData) => {
            if (isInitedCapitalsCoordinatesData) {
                this._facadeCountryListService.initCapitalsCoordinates();
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCountriesForestAreaData"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)),
            this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCapitalsCoordinatesData"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$))
        ]).subscribe(([isInitedCountriesForestAreaData, isInitedCapitalsCoordinatesData]) => {
            if (isInitedCountriesForestAreaData && isInitedCapitalsCoordinatesData) {
                this._facadeCountryListService.countriesLoadingSuccess();
            }
        });
        this.store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectIsInitedTrees"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedTrees) => {
            if (isInitedTrees) {
                this._facadeTreeListService.treesLoadingSuccess();
            }
        });
        this.store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectTreeList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((treeList) => {
            if (!Boolean(treeList)) {
                this._facadeTreeListService.initTreeList();
            }
        });
        this.store$.select(_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_6__["selectDonationList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((donationList) => {
            if (!Boolean(donationList)) {
                this._facadeDonationListService.initDonationList();
            }
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    toggleMenuMode() {
        const appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');
        appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
        this.menuMode = !this.menuMode;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_10__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_11__["FacadeServiceDonationList"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 50, vars: 2, consts: [["class", "-app", 4, "ngIf"], [1, "-app-loading__representation", "-app-loading__representation_cinema"], [1, "-app-loading__present-title"], [1, "-app-loading__sub-title"], [1, "-app-loading__sub-title_first"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-s"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-a"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-v"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-e"], [1, "-app-loading__sub-title_second"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_second-o"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_second-u"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_second-r"], [1, "-app-loading__sub-title_third"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-p"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-l"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-a"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-n"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-e"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-t"], [1, "-app-loading__sub-title_fourth"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-p"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-r"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-o"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-j"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-e"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-c"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-t"], ["class", "-app-loading", 4, "ngIf"], [1, "-app"], [1, "-app-navigation"], ["title", "profile", "routerLinkActive", "active", "routerLink", "/user-profile", 1, "-app-navigation__profile-button"], ["title", "donate", "routerLinkActive", "active", "routerLink", "/donation", 1, "-app-navigation__donation-button"], ["title", "donation statistic", "routerLinkActive", "active", "routerLink", "/donation-statistic", 1, "-app-navigation__statistic-button"], [1, "-app-navigation__button", 3, "click"], [1, "-app-navigation__button-line"], [4, "ngIf"], [1, "-app-router-outlet"], [1, "-app-navigation__menu"], [1, "-app-navigation__item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/about", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/countries", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/trees", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/registration", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/contacts", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], [1, "-app-loading"], [1, "-app-loading__title"], [1, "-app-loading__line"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 12, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Egor Samuilionak presents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " v ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " r ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " p ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " l ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " p ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " r ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " j ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AppComponent_div_49_Template, 4, 0, "div", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n}\n@-webkit-keyframes menuLinksFromBottomToTop {\n  0% {\n    top: 100%;\n    right: 0%;\n    transform: translate(0%, 50%);\n  }\n  100% {\n    top: 50%;\n    right: 0%;\n    transform: translate(0%, -50%);\n  }\n}\n@keyframes menuLinksFromBottomToTop {\n  0% {\n    top: 100%;\n    right: 0%;\n    transform: translate(0%, 50%);\n  }\n  100% {\n    top: 50%;\n    right: 0%;\n    transform: translate(0%, -50%);\n  }\n}\n@-webkit-keyframes menuLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes menuLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes blinkLoading {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes blinkLoading {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);\n  }\n}\n@-webkit-keyframes loadingLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes loadingLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes endLoadingRepresentation {\n  0% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  50% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    display: none;\n    z-index: -9999;\n  }\n}\n@keyframes endLoadingRepresentation {\n  0% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  50% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    display: none;\n    z-index: -9999;\n  }\n}\n@-webkit-keyframes blinkDonationButton {\n  0% {\n    color: white;\n  }\n  100% {\n    color: lime;\n  }\n}\n@keyframes blinkDonationButton {\n  0% {\n    color: white;\n  }\n  100% {\n    color: lime;\n  }\n}\n.-app[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n}\n.-app-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 120px;\n  height: 100%;\n  transition: 0.4s;\n  border-right: 3px solid white;\n  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.4);\n  background-color: black;\n}\n.-app-navigation_menu-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #cfffc0;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%] {\n  transition: 0.4s;\n}\n.-app-navigation__profile-button.active[_ngcontent-%COMP%]::before, .-app-navigation__donation-button.active[_ngcontent-%COMP%]::before, .-app-navigation__statistic-button.active[_ngcontent-%COMP%]::before {\n  color: #6cdb6c;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%] {\n  top: 5%;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2BD\";\n}\n.-app-navigation__donation-button[_ngcontent-%COMP%] {\n  top: 15%;\n}\n.-app-navigation__donation-button_blinking[_ngcontent-%COMP%]::before {\n  -webkit-animation: 1s blinkDonationButton 6 0.3s alternate;\n  animation: 1s blinkDonationButton 6 0.3s alternate;\n}\n.-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n  content: \"\uF4C0\";\n  font-weight: 900;\n}\n.-app-navigation__statistic-button[_ngcontent-%COMP%] {\n  top: 27%;\n}\n.-app-navigation__statistic-button[_ngcontent-%COMP%]::before {\n  content: \"\uF080\";\n  font-weight: 900;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  transform: translate(-50%, 0%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  transition: 0.5s;\n  cursor: pointer;\n  text-decoration: none;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before, .-app-navigation__statistic-button[_ngcontent-%COMP%]::before {\n  color: white;\n  font-size: 40px;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-navigation__profile-button_menu-mode[_ngcontent-%COMP%], .-app-navigation__donation-button_menu-mode[_ngcontent-%COMP%], .-app-navigation__statistic-button_menu-mode[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-navigation__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.-app-navigation__button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-navigation__button-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 60px;\n  height: 7px;\n  margin: 5px 0px;\n  transition: 0.4s;\n  border-radius: 3px;\n  background-color: white;\n}\n.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n  transform-origin: left top;\n  transform: translate(11px, -4px) rotate(45deg);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-navigation__button-line_middle[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n  transform-origin: right bottom;\n  transform: translate(-6px, -40px) rotate(-45deg);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-navigation__menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n}\n.-app-navigation__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  margin-right: 150px;\n  padding: 35px 0px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.-app-navigation__item-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  box-sizing: content-box;\n  -webkit-animation: 1.5s menuLinksFromBottomToTop;\n  animation: 1.5s menuLinksFromBottomToTop;\n  transition: 0.2s;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.9);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 70px;\n  font-weight: 600;\n}\n.-app-navigation__item-link.active[_ngcontent-%COMP%]::before {\n  transform: translate(-50%, 0%) scale(1, 1);\n}\n.-app-navigation__item-link[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n}\n.-app-navigation__item-link[_ngcontent-%COMP%]:hover::before {\n  transform: translate(-50%, 0%) scale(1, 1);\n}\n.-app-navigation__item-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -5%;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(0, 1);\n  display: block;\n  width: 100%;\n  height: 4px;\n  -webkit-animation: 0.8s menuLine;\n  animation: 0.8s menuLine;\n  transition: 0.2s;\n  background-color: black;\n}\n.-app-router-outlet[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 120px;\n  box-sizing: border-box;\n}\n.-app-loading[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10000;\n  width: 100%;\n  height: 100vh;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: black;\n}\n.-app-loading__representation[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100vh;\n  background-color: black;\n}\n.-app-loading__representation.-app-loading__representation_cinema[_ngcontent-%COMP%] {\n  -webkit-animation: 3s endLoadingRepresentation 18s forwards;\n  animation: 3s endLoadingRepresentation 18s forwards;\n}\n.-app-loading__title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 47%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-animation: 1.5s blinkLoading 4  backwards;\n  animation: 1.5s blinkLoading 4  backwards;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  font-size: 20px;\n}\n.-app-loading__line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 3px;\n  -webkit-animation: 3s 2 alternate loadingLine;\n          animation: 3s 2 alternate loadingLine;\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 0.5);\n          animation-timing-function: cubic-bezier(1, 0, 0, 0.5);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-color: #5bdb34;\n}\n.-app-loading__present-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-animation: 3s 2 alternate blinkLoading 6.5s;\n  animation: 3s 2 alternate blinkLoading 6.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-align: center;\n  letter-spacing: 5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-loading__sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);\n  letter-spacing: 3px;\n  font-size: 20px;\n}\n.-app-loading__sub-title-letter[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  font-size: 26px;\n}\n.-app-loading__sub-title_first[_ngcontent-%COMP%], .-app-loading__sub-title_second[_ngcontent-%COMP%], .-app-loading__sub-title_third[_ngcontent-%COMP%], .-app-loading__sub-title_fourth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  padding: 0px 7px;\n}\n.-app-loading__sub-title_first-s[_ngcontent-%COMP%] {\n  -webkit-animation: 6s blinkLoading 12s;\n  animation: 6s blinkLoading 12s;\n}\n.-app-loading__sub-title_first-a[_ngcontent-%COMP%] {\n  -webkit-animation: 5s blinkLoading 13s;\n  animation: 5s blinkLoading 13s;\n}\n.-app-loading__sub-title_first-v[_ngcontent-%COMP%] {\n  -webkit-animation: 3.5s blinkLoading 14.5s;\n  animation: 3.5s blinkLoading 14.5s;\n}\n.-app-loading__sub-title_first-e[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_second[_ngcontent-%COMP%] {\n  position: relative;\n}\n.-app-loading__sub-title_second-o[_ngcontent-%COMP%] {\n  -webkit-animation: 5.5s blinkLoading 12.5s;\n  animation: 5.5s blinkLoading 12.5s;\n}\n.-app-loading__sub-title_second-u[_ngcontent-%COMP%] {\n  -webkit-animation: 5s blinkLoading 13s;\n  animation: 5s blinkLoading 13s;\n}\n.-app-loading__sub-title_second-r[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_third-p[_ngcontent-%COMP%] {\n  -webkit-animation: 3.5s blinkLoading 14.5s;\n  animation: 3.5s blinkLoading 14.5s;\n}\n.-app-loading__sub-title_third-l[_ngcontent-%COMP%] {\n  -webkit-animation: 5s blinkLoading 13s;\n  animation: 5s blinkLoading 13s;\n}\n.-app-loading__sub-title_third-a[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_third-n[_ngcontent-%COMP%] {\n  -webkit-animation: 5.5s blinkLoading 12.5s;\n  animation: 5.5s blinkLoading 12.5s;\n}\n.-app-loading__sub-title_third-e[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_third-t[_ngcontent-%COMP%] {\n  -webkit-animation: 4s blinkLoading 14s;\n  animation: 4s blinkLoading 14s;\n}\n.-app-loading__sub-title_fourth-p[_ngcontent-%COMP%] {\n  -webkit-animation: 6s blinkLoading 12s;\n  animation: 6s blinkLoading 12s;\n}\n.-app-loading__sub-title_fourth-r[_ngcontent-%COMP%] {\n  -webkit-animation: 4s blinkLoading 14s;\n  animation: 4s blinkLoading 14s;\n}\n.-app-loading__sub-title_fourth-o[_ngcontent-%COMP%] {\n  -webkit-animation: 5.5s blinkLoading 12.5s;\n  animation: 5.5s blinkLoading 12.5s;\n}\n.-app-loading__sub-title_fourth-j[_ngcontent-%COMP%] {\n  -webkit-animation: 3s blinkLoading 15s;\n  animation: 3s blinkLoading 15s;\n}\n.-app-loading__sub-title_fourth-e[_ngcontent-%COMP%] {\n  -webkit-animation: 4s blinkLoading 14s;\n  animation: 4s blinkLoading 14s;\n}\n.-app-loading__sub-title_fourth-c[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_fourth-t[_ngcontent-%COMP%] {\n  -webkit-animation: 3s blinkLoading 15s;\n  animation: 3s blinkLoading 15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ29FaEI7RUFDSSxjQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FEbkVKO0FDc0NJO0VBaUNBO0lBQ0ksU0FBQTtJQUNBLFNBQUE7SUE3REosNkJBOER1QjtFRC9EekI7RUNpRUU7SUFDSSxRQUFBO0lBQ0EsU0FBQTtJQWxFSiw4QkFtRXVCO0VEM0R6QjtBQUNGO0FDNkJJO0VBcUJBO0lBQ0ksU0FBQTtJQUNBLFNBQUE7SUE3REosNkJBOER1QjtFRGlCekI7RUNmRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBbEVKLDhCQW1FdUI7RURxQnpCO0FBQ0Y7QUMvREk7RUE4Q0E7SUFDSSxTQUFBO0VEb0JOO0VDbEJFO0lBQ0ksV0FBQTtFRG9CTjtBQUNGO0FDM0RJO0VBa0NBO0lBQ0ksU0FBQTtFRG9ETjtFQ2xERTtJQUNJLFdBQUE7RURvRE47QUFDRjtBQ3ZHSTtFQXVEQTtJQXJFQSxVQXNFcUI7SUFwRXJCLHdCQUFBO0VEd0hGO0VDbERFO0lBeEVBLFVBeUVxQjtJQXZFckIsMEJBQUE7SUF3RUksaURBQUE7RURxRE47QUFDRjtBQ3RHSTtFQTJDQTtJQXJFQSxVQXNFcUI7SUFwRXJCLHdCQUFBO0VEb0tGO0VDOUZFO0lBeEVBLFVBeUVxQjtJQXZFckIsMEJBQUE7SUF3RUksaURBQUE7RURpR047QUFDRjtBQzlKSTtFQWlFQTtJQUNJLFNBQUE7RURnR047RUM5RkU7SUFDSSxXQUFBO0VEZ0dOO0FBQ0Y7QUMxSkk7RUFxREE7SUFDSSxTQUFBO0VEZ0lOO0VDOUhFO0lBQ0ksV0FBQTtFRGdJTjtBQUNGO0FDdE1JO0VBMEVBO0lBeEZBLFVBeUZxQjtJQXZGckIsMEJBQUE7RUR1TkY7RUM5SEU7SUEzRkEsVUE0RnFCO0lBMUZyQix3QkFBQTtFRDJORjtFQy9IRTtJQTlGQSxVQStGcUI7SUE3RnJCLHdCQUFBO0lBK0ZJLGFBQUE7SUFFQSxjQUFBO0VEZ0lOO0FBQ0Y7QUMxTUk7RUE4REE7SUF4RkEsVUF5RnFCO0lBdkZyQiwwQkFBQTtFRHVSRjtFQzlMRTtJQTNGQSxVQTRGcUI7SUExRnJCLHdCQUFBO0VEMlJGO0VDL0xFO0lBOUZBLFVBK0ZxQjtJQTdGckIsd0JBQUE7SUErRkksYUFBQTtJQUVBLGNBQUE7RURnTU47QUFDRjtBQ3RSSTtFQTBGQTtJQUNJLFlBcklBO0VEb1VOO0VDN0xFO0lBQ0ksV0FsSUQ7RURpVUw7QUFDRjtBQ2xSSTtFQThFQTtJQUNJLFlBcklBO0VEb1dOO0VDN05FO0lBQ0ksV0FsSUQ7RURpV0w7QUFDRjtBQzVOQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUQ0Tko7QUMzTkk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBeklKLDhCQTBJdUI7RUFFbkIsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQXpJSixnQkEySUk7RUFFQSw2QkFBQTtFQUNBLDBDQUFBO0VBRUEsdUJBdEtBO0FEc1lSO0FDL05RO0VBQ0ksV0FBQTtFQUVBLHlCQXJLRDtBRHFZWDtBQzlOUTtFQXRKSixnQkF5SlE7QURrT1o7QUNoT2dCO0VBQ0ksY0EzS047QUQ2WWQ7QUM5TlE7RUFDSSxPQUFBO0FEZ09aO0FDL05ZO0VBQ0ksWUFBQTtBRGlPaEI7QUM5TlE7RUFDSSxRQUFBO0FEZ09aO0FDOU5nQjtFQXJJWiwwREFBQTtFQUlBLGtEQUFBO0FEc1dKO0FDak9ZO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FEa09oQjtBQy9OUTtFQUNJLFFBQUE7QURpT1o7QUNoT1k7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7QURpT2hCO0FDOU5RO0VBR0ksa0JBQUE7RUFDQSxVQUFBO0VBdk1SLDhCQXdNMkI7RUFFbkIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQXZNUixnQkF5TVE7RUFDQSxlQUFBO0VBRUEscUJBQUE7QURrT1o7QUNqT1k7RUFDSSxZQXRPUjtFQXVPUSxlQUFBO0VBQ0EsMkRBQUE7QURtT2hCO0FDak9ZO0VBQ0ksYUFBQTtFQS9NWixVQWlONkI7RUEvTTdCLHdCQUFBO0FEa2JKO0FDaE9RO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQW5PUixnQ0FvTzJCO0VBRW5CLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFqT1IsZ0JBbU9RO0VBQ0EsZUFBQTtBRHdPWjtBQ3ZPWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUR5T2hCO0FDdk9ZO0VBQ0ksY0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQTdPWixnQkErT1k7RUFFQSxrQkFBQTtFQUVBLHVCQTNRUjtBRG9mUjtBQ3hPZ0I7RUF0T1osMEJBdU9nQjtFQTdQaEIsOENBOFBtQztFQUVuQixvQ0E3UUY7QUQ4ZmxCO0FDL09nQjtFQWxRWixtQkFtUW1DO0FEcVB2QztBQ25QZ0I7RUFHSSw4QkFBQTtFQXhRaEIsZ0RBeVFtQztFQUVuQixvQ0F4UkY7QURnaEJsQjtBQ3BQUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtBRHFQWjtBQ25QUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRG9QWjtBQ25QWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFwU1osOEJBcVMrQjtFQUVuQix1QkFBQTtFQTNQWixnREFBQTtFQUlBLHdDQUFBO0VBeENBLGdCQWtTWTtFQUNBLGVBQUE7RUFFQSx5QkExVEU7RUE0VEYscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDZQaEI7QUMzUG9CO0VBcFRoQiwwQ0FxVHVDO0FEaVEzQztBQzlQZ0I7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkNBQUE7QURnUXBCO0FDL1BvQjtFQTNUaEIsMENBNFR1QztBRHFRM0M7QUNsUWdCO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFwVWhCLDBDQXFVbUM7RUFFbkIsY0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBOVJoQixnQ0FBQTtFQUlBLHdCQUFBO0VBeENBLGdCQXFVZ0I7RUFFQSx1QkE3Vlo7QUR3bUJSO0FDdFFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEdVFSO0FDclFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLHVCQXJYQTtBRHluQlI7QUNuUVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSx1QkEvWEo7QURrb0JSO0FDbFFZO0VBdFVSLDJEQUFBO0VBSUEsbURBQUE7QUQya0JKO0FDclFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXpYUixnQ0EwWDJCO0VBOVczQixVQWdYeUI7RUE5V3pCLHdCQUFBO0VBOEJBLGlEQUFBO0VBSUEseUNBQUE7RUFnVlEsWUFoWko7RUFpWkksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRDZRWjtBQzNRUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF6WVIsZ0NBMFkyQjtFQUVuQixXQUFBO0VBRUEsNkNBQUE7VUFBQSxxQ0FBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBRUEseUJBMVpFO0FEd3FCZDtBQzVRUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF2WlIsZ0NBd1oyQjtFQTVXM0IsbURBQUE7RUFJQSwyQ0FBQTtFQXBDQSxVQStZeUI7RUE3WXpCLHdCQUFBO0VBOFlRLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsWUE5YUo7RUErYUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHFSWjtBQ25SUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBeGFSLGdDQXlhMkI7RUFFbkIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxZQW5jSjtFQW9jSSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHFSWjtBQ3BSWTtFQUNJLGdCQUFBO0VBNWFaLFVBOGE2QjtFQTVhN0Isd0JBQUE7RUE4YVksZUFBQTtBRHFSaEI7QUNuUlk7RUFJSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBRGlSaEI7QUM5UWdCO0VBOVpaLHNDQUFBO0VBSUEsOEJBQUE7QUQrcUJKO0FDbFJnQjtFQWphWixzQ0FBQTtFQUlBLDhCQUFBO0FEc3JCSjtBQ3RSZ0I7RUFwYVosMENBQUE7RUFJQSxrQ0FBQTtBRDZyQko7QUMxUmdCO0VBdmFaLDBDQUFBO0VBSUEsa0NBQUE7QURvc0JKO0FDN1JZO0VBQ0ksa0JBQUE7QUQrUmhCO0FDOVJnQjtFQTdhWiwwQ0FBQTtFQUlBLGtDQUFBO0FEOHNCSjtBQ2xTZ0I7RUFoYlosc0NBQUE7RUFJQSw4QkFBQTtBRHF0Qko7QUN0U2dCO0VBbmJaLDBDQUFBO0VBSUEsa0NBQUE7QUQ0dEJKO0FDeFNnQjtFQXhiWiwwQ0FBQTtFQUlBLGtDQUFBO0FEbXVCSjtBQzVTZ0I7RUEzYlosc0NBQUE7RUFJQSw4QkFBQTtBRDB1Qko7QUNoVGdCO0VBOWJaLDBDQUFBO0VBSUEsa0NBQUE7QURpdkJKO0FDcFRnQjtFQWpjWiwwQ0FBQTtFQUlBLGtDQUFBO0FEd3ZCSjtBQ3hUZ0I7RUFwY1osMENBQUE7RUFJQSxrQ0FBQTtBRCt2Qko7QUM1VGdCO0VBdmNaLHNDQUFBO0VBSUEsOEJBQUE7QURzd0JKO0FDOVRnQjtFQTVjWixzQ0FBQTtFQUlBLDhCQUFBO0FENndCSjtBQ2xVZ0I7RUEvY1osc0NBQUE7RUFJQSw4QkFBQTtBRG94Qko7QUN0VWdCO0VBbGRaLDBDQUFBO0VBSUEsa0NBQUE7QUQyeEJKO0FDMVVnQjtFQXJkWixzQ0FBQTtFQUlBLDhCQUFBO0FEa3lCSjtBQzlVZ0I7RUF4ZFosc0NBQUE7RUFJQSw4QkFBQTtBRHl5Qko7QUNsVmdCO0VBM2RaLDBDQUFBO0VBSUEsa0NBQUE7QURnekJKO0FDdFZnQjtFQTlkWixzQ0FBQTtFQUlBLDhCQUFBO0FEdXpCSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgbWVudUxpbmtzRnJvbUJvdHRvbVRvVG9wIHtcbiAgMCUge1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3Age1xuICAwJSB7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtMb2FkaW5nIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rTG9hZGluZyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJsaW5rTG9hZGluZyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmxpbmtMb2FkaW5nIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua0xvYWRpbmcge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZ0xpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZ0xpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBsb2FkaW5nTGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbG9hZGluZ0xpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmdMaW5lIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgfVxufVxuQGtleWZyYW1lcyBlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgei1pbmRleDogLTk5OTk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rRG9uYXRpb25CdXR0b24ge1xuICAwJSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiBsaW1lO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuLi1hcHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLi1hcHAtbmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmZmYzA7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24uYWN0aXZlOjpiZWZvcmUsIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbi5hY3RpdmU6OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbi5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbG9yOiAjNmNkYjZjO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24ge1xuICB0b3A6IDUlO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74q9XCI7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b24ge1xuICB0b3A6IDE1JTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbl9ibGlua2luZzo6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rRG9uYXRpb25CdXR0b24gNiAwLjNzIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IDFzIGJsaW5rRG9uYXRpb25CdXR0b24gNiAwLjNzIGFsdGVybmF0ZTtcbiAgLW1zLWFuaW1hdGlvbjogMXMgYmxpbmtEb25hdGlvbkJ1dHRvbiA2IDAuM3MgYWx0ZXJuYXRlO1xuICAtby1hbmltYXRpb246IDFzIGJsaW5rRG9uYXRpb25CdXR0b24gNiAwLjNzIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiAxcyBibGlua0RvbmF0aW9uQnV0dG9uIDYgMC4zcyBhbHRlcm5hdGU7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi75OAXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uIHtcbiAgdG9wOiAyNyU7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+CgFwiO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAtbXMtdHJhbnNpdGlvbjogMC41cztcbiAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbjo6YmVmb3JlLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uX21lbnUtbW9kZSwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uX21lbnUtbW9kZSwgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbl9tZW51LW1vZGUge1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA2MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfdG9wIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFweCwgLTRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXB4LCAtNHB4KSByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFweCwgLTRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFweCwgLTRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFweCwgLTRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfbWlkZGxlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNnB4LCAtNDBweCkgcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgLTQwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgLTQwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNnB4LCAtNDBweCkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02cHgsIC00MHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogMzVweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWFuaW1hdGlvbjogMS41cyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3A7XG4gIC1tb3otYW5pbWF0aW9uOiAxLjVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcDtcbiAgLW1zLWFuaW1hdGlvbjogMS41cyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3A7XG4gIC1vLWFuaW1hdGlvbjogMS41cyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3A7XG4gIGFuaW1hdGlvbjogMS41cyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3A7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluay5hY3RpdmU6OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbms6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01JTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgwLCAxKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMCwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMCwgMSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgwLCAxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDAsIDEpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC44cyBtZW51TGluZTtcbiAgLW1vei1hbmltYXRpb246IDAuOHMgbWVudUxpbmU7XG4gIC1tcy1hbmltYXRpb246IDAuOHMgbWVudUxpbmU7XG4gIC1vLWFuaW1hdGlvbjogMC44cyBtZW51TGluZTtcbiAgYW5pbWF0aW9uOiAwLjhzIG1lbnVMaW5lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcm91dGVyLW91dGxldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC1sb2FkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLWxvYWRpbmdfX3JlcHJlc2VudGF0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtbG9hZGluZ19fcmVwcmVzZW50YXRpb24uLWFwcC1sb2FkaW5nX19yZXByZXNlbnRhdGlvbl9jaW5lbWEge1xuICAtd2Via2l0LWFuaW1hdGlvbjogM3MgZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uIDE4cyBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IDNzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiAxOHMgZm9yd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IDNzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiAxOHMgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogM3MgZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uIDE4cyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiAzcyBlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24gMThzIGZvcndhcmRzO1xufVxuLi1hcHAtbG9hZGluZ19fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDclO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxLjVzIGJsaW5rTG9hZGluZyA0ICBiYWNrd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiAxLjVzIGJsaW5rTG9hZGluZyA0ICBiYWNrd2FyZHM7XG4gIC1tcy1hbmltYXRpb246IDEuNXMgYmxpbmtMb2FkaW5nIDQgIGJhY2t3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAxLjVzIGJsaW5rTG9hZGluZyA0ICBiYWNrd2FyZHM7XG4gIGFuaW1hdGlvbjogMS41cyBibGlua0xvYWRpbmcgNCAgYmFja3dhcmRzO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLi1hcHAtbG9hZGluZ19fbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogM3B4O1xuICBhbmltYXRpb246IDNzIDIgYWx0ZXJuYXRlIGxvYWRpbmdMaW5lO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMC41KTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmRiMzQ7XG59XG4uLWFwcC1sb2FkaW5nX19wcmVzZW50LXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDNzIDIgYWx0ZXJuYXRlIGJsaW5rTG9hZGluZyA2LjVzO1xuICAtbW96LWFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgYmxpbmtMb2FkaW5nIDYuNXM7XG4gIC1tcy1hbmltYXRpb246IDNzIDIgYWx0ZXJuYXRlIGJsaW5rTG9hZGluZyA2LjVzO1xuICAtby1hbmltYXRpb246IDNzIDIgYWx0ZXJuYXRlIGJsaW5rTG9hZGluZyA2LjVzO1xuICBhbmltYXRpb246IDNzIDIgYWx0ZXJuYXRlIGJsaW5rTG9hZGluZyA2LjVzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZS1sZXR0ZXIge1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9maXJzdCwgLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3NlY29uZCwgLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3RoaXJkLCAuLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZmlyc3QtcyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICAtbW96LWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW1zLWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW8tYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICBhbmltYXRpb246IDZzIGJsaW5rTG9hZGluZyAxMnM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZmlyc3QtYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtbW96LWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW1zLWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW8tYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICBhbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZmlyc3QtdiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW1vei1hbmltYXRpb246IDMuNXMgYmxpbmtMb2FkaW5nIDE0LjVzO1xuICAtbXMtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW8tYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9maXJzdC1lIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtbW96LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tcy1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtby1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICBhbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3NlY29uZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9zZWNvbmQtbyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgLW1vei1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICAtbXMtYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgLW8tYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9zZWNvbmQtdSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtbW96LWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW1zLWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW8tYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICBhbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfc2Vjb25kLXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW1zLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1vLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIGFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfdGhpcmQtcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW1vei1hbmltYXRpb246IDMuNXMgYmxpbmtMb2FkaW5nIDE0LjVzO1xuICAtbXMtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW8tYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV90aGlyZC1sIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG4gIC1tb3otYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtbXMtYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtby1hbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG4gIGFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV90aGlyZC1hIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtbW96LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tcy1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtby1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICBhbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3RoaXJkLW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgLW1zLWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIC1vLWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIGFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfdGhpcmQtZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW1vei1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtbXMtYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW8tYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV90aGlyZC10IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIC1tb3otYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICAtbXMtYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICAtby1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIGFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9mb3VydGgtcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICAtbW96LWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW1zLWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW8tYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICBhbmltYXRpb246IDZzIGJsaW5rTG9hZGluZyAxMnM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoLXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgLW1vei1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIC1tcy1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIC1vLWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX2ZvdXJ0aC1vIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICAtbW96LWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIC1tcy1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICAtby1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICBhbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX2ZvdXJ0aC1qIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIC1tb3otYW5pbWF0aW9uOiAzcyBibGlua0xvYWRpbmcgMTVzO1xuICAtbXMtYW5pbWF0aW9uOiAzcyBibGlua0xvYWRpbmcgMTVzO1xuICAtby1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIGFuaW1hdGlvbjogM3MgYmxpbmtMb2FkaW5nIDE1cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9mb3VydGgtZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICAtbW96LWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgLW1zLWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgLW8tYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICBhbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoLWMge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW1zLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1vLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIGFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoLXQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogM3MgYmxpbmtMb2FkaW5nIDE1cztcbiAgLW1vei1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIC1tcy1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIC1vLWFuaW1hdGlvbjogM3MgYmxpbmtMb2FkaW5nIDE1cztcbiAgYW5pbWF0aW9uOiAzcyBibGlua0xvYWRpbmcgMTVzO1xufSIsIiRncmVlbkp1bmdsZUNyYWlvbGE6IHJnYmEoNjgsIDE3MCwgMTUzLCAxKTtcclxuJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kd2hpdGVPcGFjaXR5MC02OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtOTogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4kYmxhY2tPcGFjaXR5MC04OiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRibGFja09wYWNpdHkwLTQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGxpbWU6IHJnYmEoMCwgMjU1LCAwLCAxKTtcclxuJGhvbmV5RGV3OiByZ2JhKDIwNywgMjU1LCAxOTIsIDEpO1xyXG4kdmVyZGVwb21vdnk6IHJnYmEoOTEsIDIxOSwgNTIsIDEpO1xyXG4kcGFzdGVsR3JlZW46IHJnYmEoMTA4LCAyMTksIDEwOCwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xyXG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkYXJncztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tcy1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtby1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICBhbmltYXRpb246ICN7JHN0cn07XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhtZW51TGlua3NGcm9tQm90dG9tVG9Ub3ApIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDUwJSkpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKG1lbnVMaW5lKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhibGlua0xvYWRpbmcpIHtcclxuICAgIDAlIHtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggJHdoaXRlT3BhY2l0eTAtNjtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKGxvYWRpbmdMaW5lKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24pIHtcclxuICAgIDAlIHtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgei1pbmRleDogLTk5OTk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhibGlua0RvbmF0aW9uQnV0dG9uKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGNvbG9yOiAkbGltZTtcclxuICAgIH1cclxufVxyXG5cclxuLi1hcHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAmLW5hdmlnYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC40cyk7XHJcblxyXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMHB4IDZweCAkYmxhY2tPcGFjaXR5MC00O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgJl9tZW51LW1vZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob25leURldztcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgJl9fZG9uYXRpb24tYnV0dG9uLFxyXG4gICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuNHMpO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGFzdGVsR3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJvZmlsZS1idXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYyYmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICAgICAgJl9ibGlua2luZyB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjFzIGJsaW5rRG9uYXRpb25CdXR0b24gNiAwLjNzIGFsdGVybmF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGY0YzBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDI3JTtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDgwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19wcm9maWxlLWJ1dHRvbixcclxuICAgICAgICAmX19kb25hdGlvbi1idXR0b24sXHJcbiAgICAgICAgJl9fc3RhdGlzdGljLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNjBweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjVzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNjBweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuNHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAmX3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLW9yaWdpbihsZWZ0IHRvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgxMXB4LCAtNHB4KSByb3RhdGUoNDVkZWcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfbWlkZGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTZweCwgLTQwcHgpIHJvdGF0ZSgtNDVkZWcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIxLjVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcFwiKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFja09wYWNpdHkwLTk7XHJcbiAgICAgICAgICAgICAgICAkd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggJGJsYWNrT3BhY2l0eTAtODtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDAsIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIwLjhzIG1lbnVMaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4ycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtcm91dGVyLW91dGxldCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAmLWxvYWRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAmX19yZXByZXNlbnRhdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgJi4tYXBwLWxvYWRpbmdfX3JlcHJlc2VudGF0aW9uX2NpbmVtYSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIzcyBlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24gMThzIGZvcndhcmRzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDQ3JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIxLjVzIGJsaW5rTG9hZGluZyA0ICBiYWNrd2FyZHNcIik7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbGluZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgbG9hZGluZ0xpbmU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZXBvbW92eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJlc2VudC10aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIzcyAyIGFsdGVybmF0ZSBibGlua0xvYWRpbmcgNi41c1wiKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICR3aGl0ZU9wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgJi1sZXR0ZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2ZpcnN0LFxyXG4gICAgICAgICAgICAmX3NlY29uZCxcclxuICAgICAgICAgICAgJl90aGlyZCxcclxuICAgICAgICAgICAgJl9mb3VydGgge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2ZpcnN0IHtcclxuICAgICAgICAgICAgICAgICYtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiNnMgYmxpbmtMb2FkaW5nIDEyc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiNXMgYmxpbmtMb2FkaW5nIDEzc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiMy41cyBibGlua0xvYWRpbmcgMTQuNXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2Vjb25kIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICYtbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiNS41cyBibGlua0xvYWRpbmcgMTIuNXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjVzIGJsaW5rTG9hZGluZyAxM3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXIge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfdGhpcmQge1xyXG4gICAgICAgICAgICAgICAgJi1wIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIzLjVzIGJsaW5rTG9hZGluZyAxNC41c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiNXMgYmxpbmtMb2FkaW5nIDEzc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiNC41cyBibGlua0xvYWRpbmcgMTMuNXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1lIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCI0LjVzIGJsaW5rTG9hZGluZyAxMy41c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiNHMgYmxpbmtMb2FkaW5nIDE0c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2ZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICAmLXAge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjZzIGJsaW5rTG9hZGluZyAxMnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXIge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjRzIGJsaW5rTG9hZGluZyAxNHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbihcIjUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1qIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCIzcyBibGlua0xvYWRpbmcgMTVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1lIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCI0cyBibGlua0xvYWRpbmcgMTRzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1jIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oXCI0LjVzIGJsaW5rTG9hZGluZyAxMy41c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKFwiM3MgYmxpbmtMb2FkaW5nIDE1c1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */", "@media screen and (max-width: 1700px) {\n  .-app-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 110px;\n  }\n  .-app-navigation[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    margin-right: 135px;\n  }\n  .-app-navigation_menu-mode[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    width: 55px;\n    height: 6.5px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 64px;\n  }\n  .-app-navigation__button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    left: 55px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n}\n@media screen and (max-width: 1500px) {\n  .-app-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 100px;\n  }\n  .-app-navigation[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    margin-right: 120px;\n  }\n  .-app-navigation_menu-mode[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 6px;\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n    transform: translate(9px, 0px) rotate(45deg);\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n    transform: translate(-5px, -33px) rotate(-45deg);\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 58px;\n  }\n  .-app-navigation__button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    left: 50px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%]::before, .-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n    font-size: 36px;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .-app-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 80px;\n  }\n  .-app-navigation[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    height: 80px;\n    margin-right: 105px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%]::before {\n    height: 3.5px;\n  }\n  .-app-navigation_menu-mode[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 5px;\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n    transform: translate(9px, 2px) rotate(45deg);\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n    transform: translate(-4px, -30px) rotate(-45deg);\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 52px;\n  }\n  .-app-navigation__button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    left: 40px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%]::before, .-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .-app-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 70px;\n  }\n  .-app-navigation[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .-app-navigation__menu[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .-app-navigation_menu-mode[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 4.5px;\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n    transform: translate(9px, 2px) rotate(45deg);\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n    transform: translate(-4px, -29px) rotate(-45deg);\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    height: 80px;\n    margin-right: 90px;\n    padding: 25px 0px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%]::before {\n    height: 3px;\n  }\n  .-app-navigation__button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    left: 35px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%]::before, .-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 60px;\n  }\n  .-app-navigation[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .-app-navigation__menu[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .-app-navigation_menu-mode[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 4px;\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n    transform: translate(7px, 4px) rotate(45deg);\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n    transform: translate(-4px, -25px) rotate(-45deg);\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    margin-right: 75px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%]::before {\n    height: 2.5px;\n  }\n  .-app-navigation__button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    left: 30px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%]::before, .-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .-app-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n  .-app-navigation[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .-app-navigation_menu-mode[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    height: 3px;\n    margin: 2.5px 0px;\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n    transform: translate(6px, -2px) rotate(45deg);\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n    transform: translate(-2px, -19px) rotate(-45deg);\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    height: 65px;\n    margin-right: 60px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%]::before {\n    height: 2px;\n  }\n  .-app-navigation__button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    left: 25px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%], .-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%] {\n    width: 17.5px;\n    height: 17.5px;\n  }\n  .-app-navigation__statistic-button[_ngcontent-%COMP%]::before, .-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    width: 25px;\n  }\n  .-app-navigation__item[_ngcontent-%COMP%] {\n    height: 55px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%]::before {\n    height: 2px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .-app-navigation__button-line[_ngcontent-%COMP%] {\n    height: 2.5px;\n    margin: 2px 0px;\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_top[_ngcontent-%COMP%] {\n    transform: translate(5px, -2px) rotate(45deg);\n  }\n  .-app-navigation__button-line.-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n    transform: translate(-3px, -16px) rotate(-45deg);\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .-app-navigation__item-link[_ngcontent-%COMP%]::before {\n    height: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEVQQU0gdHJhaW5pbmdcXHNhdmUtb3VyLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0LXByb2plY3Qvc3JjXFxhcHBcXGFwcC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBRVE7SUFDSSxtQkFBQTtFQ1JWO0VEVU07SUFDSSxZQUFBO0VDUlY7RURTVTtJQUNJLG1CQUFBO0VDUGQ7RURTVTtJQUNJLFdBQUE7RUNQZDtFRFVjO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNSbEI7RURZYztJQUNJLGVBQUE7RUNWbEI7RURhVTtJQUlJLFVBQUE7RUNkZDtFRGdCVTtJQUdJLFdBQUE7SUFDQSxZQUFBO0VDaEJkO0FBQ0Y7QURxQkE7RUFFUTtJQUNJLG1CQUFBO0VDcEJWO0VEc0JNO0lBQ0ksWUFBQTtFQ3BCVjtFRHFCVTtJQUNJLG1CQUFBO0VDbkJkO0VEcUJVO0lBQ0ksV0FBQTtFQ25CZDtFRHNCYztJQUNJLFdBQUE7SUFDQSxXQUFBO0VDcEJsQjtFRHFCa0I7SUE1RGhCLDRDQTZEdUM7RUNmekM7RURpQmtCO0lBL0RoQixnREFnRXVDO0VDWHpDO0VEZ0JjO0lBQ0ksZUFBQTtFQ2RsQjtFRGlCVTtJQUlJLFVBQUE7RUNsQmQ7RURvQlU7SUFHSSxXQUFBO0lBQ0EsWUFBQTtFQ3BCZDtFRHFCYztJQUNJLGVBQUE7RUNuQmxCO0FBQ0Y7QUR5QkE7RUFFUTtJQUNJLGtCQUFBO0VDeEJWO0VEMEJNO0lBQ0ksV0FBQTtFQ3hCVjtFRHlCVTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtFQ3ZCZDtFRHdCYztJQUNJLGVBQUE7RUN0QmxCO0VEdUJrQjtJQUNJLGFBQUE7RUNyQnRCO0VEeUJVO0lBQ0ksV0FBQTtFQ3ZCZDtFRDBCYztJQUNJLFdBQUE7SUFDQSxXQUFBO0VDeEJsQjtFRHlCa0I7SUFwSGhCLDRDQXFIdUM7RUNuQnpDO0VEcUJrQjtJQXZIaEIsZ0RBd0h1QztFQ2Z6QztFRG9CYztJQUNJLGVBQUE7RUNsQmxCO0VEcUJVO0lBSUksVUFBQTtFQ3RCZDtFRHdCVTtJQUdJLFdBQUE7SUFDQSxZQUFBO0VDeEJkO0VEeUJjO0lBQ0ksZUFBQTtFQ3ZCbEI7QUFDRjtBRDZCQTtFQUVRO0lBQ0ksa0JBQUE7RUM1QlY7RUQ4Qk07SUFDSSxXQUFBO0VDNUJWO0VENkJVO0lBQ0ksVUFBQTtFQzNCZDtFRDZCVTtJQUNJLFdBQUE7RUMzQmQ7RUQ4QmM7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQzVCbEI7RUQ2QmtCO0lBcktoQiw0Q0FzS3VDO0VDdkJ6QztFRHlCa0I7SUF4S2hCLGdEQXlLdUM7RUNuQnpDO0VEdUJVO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUNyQmQ7RURzQmM7SUFDSSxlQUFBO0VDcEJsQjtFRHFCa0I7SUFDSSxXQUFBO0VDbkJ0QjtFRHVCVTtJQUlJLFVBQUE7RUN4QmQ7RUQwQlU7SUFHSSxXQUFBO0lBQ0EsWUFBQTtFQzFCZDtFRDJCYztJQUNJLGVBQUE7RUN6QmxCO0FBQ0Y7QUQrQkE7RUFFUTtJQUNJLGtCQUFBO0VDOUJWO0VEZ0NNO0lBQ0ksV0FBQTtFQzlCVjtFRCtCVTtJQUNJLFVBQUE7RUM3QmQ7RUQrQlU7SUFDSSxXQUFBO0VDN0JkO0VEZ0NjO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUM5QmxCO0VEK0JrQjtJQTVOaEIsNENBNk51QztFQ3pCekM7RUQyQmtCO0lBL05oQixnREFnT3VDO0VDckJ6QztFRHlCVTtJQUNJLGtCQUFBO0VDdkJkO0VEd0JjO0lBQ0ksZUFBQTtFQ3RCbEI7RUR1QmtCO0lBQ0ksYUFBQTtFQ3JCdEI7RUR5QlU7SUFJSSxVQUFBO0VDMUJkO0VENEJVO0lBR0ksV0FBQTtJQUNBLFlBQUE7RUM1QmQ7RUQ2QmM7SUFDSSxlQUFBO0VDM0JsQjtBQUNGO0FEaUNBO0VBRVE7SUFDSSxrQkFBQTtFQ2hDVjtFRGtDTTtJQUNJLFdBQUE7RUNoQ1Y7RURpQ1U7SUFDSSxXQUFBO0VDL0JkO0VEa0NjO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0VDaENsQjtFRGlDa0I7SUE5UWhCLDZDQStRdUM7RUMzQnpDO0VENkJrQjtJQWpSaEIsZ0RBa1J1QztFQ3ZCekM7RUQyQlU7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUN6QmQ7RUQwQmM7SUFDSSxlQUFBO0VDeEJsQjtFRHlCa0I7SUFDSSxXQUFBO0VDdkJ0QjtFRDJCVTtJQUlJLFVBQUE7RUM1QmQ7RUQ4QlU7SUFHSSxhQUFBO0lBQ0EsY0FBQTtFQzlCZDtFRCtCYztJQUNJLGVBQUE7RUM3QmxCO0FBQ0Y7QURtQ0E7RUFJZ0I7SUFDSSxXQUFBO0VDcENsQjtFRHVDVTtJQUNJLFlBQUE7RUNyQ2Q7RURzQ2M7SUFDSSxlQUFBO0VDcENsQjtFRHFDa0I7SUFDSSxXQUFBO0VDbkN0QjtBQUNGO0FEMENBO0VBSWdCO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUMzQ2xCO0VENENrQjtJQS9VaEIsNkNBZ1Z1QztFQ3RDekM7RUR3Q2tCO0lBbFZoQixnREFtVnVDO0VDbEN6QztFRHdDYztJQUNJLGVBQUE7RUN0Q2xCO0VEdUNrQjtJQUNJLFdBQUE7RUNyQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIC4tYXBwIHtcclxuICAgICAgICAmLXJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLW5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYuNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19zdGF0aXN0aWMtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19wcm9maWxlLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fZG9uYXRpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fc3RhdGlzdGljLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgICAgICZfX2RvbmF0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAuLWFwcCB7XHJcbiAgICAgICAgJi1yb3V0ZXItb3V0bGV0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoOXB4LCAwcHgpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNXB4LCAtMzNweCkgcm90YXRlKC00NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2J1dHRvbixcclxuICAgICAgICAgICAgJl9fc3RhdGlzdGljLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgICAgICZfX2RvbmF0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24sXHJcbiAgICAgICAgICAgICZfX3Byb2ZpbGUtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuLWFwcCB7XHJcbiAgICAgICAgJi1yb3V0ZXItb3V0bGV0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLW5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwNXB4O1xyXG4gICAgICAgICAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNHB4LCAtMzBweCkgcm90YXRlKC00NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2J1dHRvbixcclxuICAgICAgICAgICAgJl9fc3RhdGlzdGljLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgICAgICZfX2RvbmF0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24sXHJcbiAgICAgICAgICAgICZfX3Byb2ZpbGUtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuLWFwcCB7XHJcbiAgICAgICAgJi1yb3V0ZXItb3V0bGV0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLW5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgJl9fbWVudSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNHB4LCAtMjlweCkgcm90YXRlKC00NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2J1dHRvbixcclxuICAgICAgICAgICAgJl9fc3RhdGlzdGljLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgICAgICZfX2RvbmF0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24sXHJcbiAgICAgICAgICAgICZfX3Byb2ZpbGUtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC4tYXBwIHtcclxuICAgICAgICAmLXJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAmX19tZW51IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoN3B4LCA0cHgpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNHB4LCAtMjVweCkgcm90YXRlKC00NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2J1dHRvbixcclxuICAgICAgICAgICAgJl9fc3RhdGlzdGljLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgICAgICZfX2RvbmF0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24sXHJcbiAgICAgICAgICAgICZfX3Byb2ZpbGUtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC4tYXBwIHtcclxuICAgICAgICAmLXJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIuNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg2cHgsIC0ycHgpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtMnB4LCAtMTlweCkgcm90YXRlKC00NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICYtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19idXR0b24sXHJcbiAgICAgICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24sXHJcbiAgICAgICAgICAgICZfX3Byb2ZpbGUtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19zdGF0aXN0aWMtYnV0dG9uLFxyXG4gICAgICAgICAgICAmX19wcm9maWxlLWJ1dHRvbixcclxuICAgICAgICAgICAgJl9fZG9uYXRpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNy41cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3LjVweDtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLi1hcHAge1xyXG4gICAgICAgICYtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLi1hcHAge1xyXG4gICAgICAgICYtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV90b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDVweCwgLTJweCkgcm90YXRlKDQ1ZGVnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC0zcHgsIC0xNnB4KSByb3RhdGUoLTQ1ZGVnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTcwMHB4KSB7XG4gIC4tYXBwLXJvdXRlci1vdXRsZXQge1xuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbiB7XG4gICAgd2lkdGg6IDExMHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTM1cHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9tZW51LW1vZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDYuNXB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluayB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gICAgbGVmdDogNTVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuLWFwcC1yb3V0ZXItb3V0bGV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV90b3Age1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg5cHgsIDBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV9ib3R0b20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTMzcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTMzcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtMzNweCkgcm90YXRlKC00NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTMzcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0zM3B4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogNThweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b24ge1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC4tYXBwLXJvdXRlci1vdXRsZXQge1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbms6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAzLjVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX21lbnUtbW9kZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNXB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfdG9wIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDlweCwgMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDlweCwgMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDlweCwgMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDlweCwgMnB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC0zMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC0zMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTMwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC0zMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtMzBweCkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rIHtcbiAgICBmb250LXNpemU6IDUycHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uIHtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uOjpiZWZvcmUsIC4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uOjpiZWZvcmUsIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbjo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuLWFwcC1yb3V0ZXItb3V0bGV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fbWVudSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX21lbnUtbW9kZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogNC41cHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV90b3Age1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg5cHgsIDJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAycHgpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV9ib3R0b20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTI5cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTI5cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtMjlweCkgcm90YXRlKC00NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTI5cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC0yOXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDI1cHggMHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluayB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluazo6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b24ge1xuICAgIGxlZnQ6IDM1cHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtcm91dGVyLW91dGxldCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX21lbnUge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9tZW51LW1vZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZS4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDdweCwgNHB4KSByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZS4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX2JvdHRvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtMjVweCkgcm90YXRlKC00NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtMjVweCkgcm90YXRlKC00NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC0yNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtMjVweCkgcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgLTI1cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogNzVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbms6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAyLjVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b24ge1xuICAgIGxlZnQ6IDMwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLi1hcHAtcm91dGVyLW91dGxldCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZSB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgbWFyZ2luOiAyLjVweCAwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZV90b3Age1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg2cHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNnB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgLTJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZS4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX2JvdHRvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMTlweCkgcm90YXRlKC00NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMTlweCkgcm90YXRlKC00NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0xOXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMTlweCkgcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTE5cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0ge1xuICAgIGhlaWdodDogNjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rOjpiZWZvcmUge1xuICAgIGhlaWdodDogMnB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fc3RhdGlzdGljLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gICAgbGVmdDogMjVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTcuNXB4O1xuICAgIGhlaWdodDogMTcuNXB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b246OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmUge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2l0ZW0ge1xuICAgIGhlaWdodDogNTVweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19pdGVtLWxpbms6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lIHtcbiAgICBoZWlnaHQ6IDIuNXB4O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgfVxuICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24tbGluZS4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTJweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC0ycHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtMnB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lLi1hcHAtbmF2aWdhdGlvbl9fYnV0dG9uLWxpbmVfYm90dG9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0xNnB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0xNnB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgLTE2cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIC0xNnB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAtMTZweCkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rOjpiZWZvcmUge1xuICAgIGhlaWdodDogMnB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss', './app-media.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"] }, { type: _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"] }, { type: _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_10__["FacadeServiceUserList"] }, { type: _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_11__["FacadeServiceDonationList"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/ */ "./src/app/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_country_list_country_list_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/country-list/country-list.effects */ "./src/app/store/country-list/country-list.effects.ts");
/* harmony import */ var _store_tree_list_tree_list_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/tree-list/tree-list.effects */ "./src/app/store/tree-list/tree-list.effects.ts");
/* harmony import */ var _store_user_list_user_list_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/user-list/user-list.effects */ "./src/app/store/user-list/user-list.effects.ts");
/* harmony import */ var _store_donation_list_donation_list_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/donation-list/donation-list.effects */ "./src/app/store/donation-list/donation-list.effects.ts");
/* harmony import */ var _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found/not-found.module */ "./src/app/components/not-found/not-found.module.ts");
/* harmony import */ var _services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/tree-list/tree-data.service */ "./src/app/services/tree-list/tree-data.service.ts");
/* harmony import */ var _services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user-list/user-data.service */ "./src/app/services/user-list/user-data.service.ts");
/* harmony import */ var _services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/donation-list/donation-list-data.service */ "./src/app/services/donation-list/donation-list-data.service.ts");
/* harmony import */ var _services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/country-list/country-data.service */ "./src/app/services/country-list/country-data.service.ts");
/* harmony import */ var _my_error_handler_my_error_handler_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-error-handler/my-error-handler.module */ "./src/app/my-error-handler/my-error-handler.module.ts");
/* harmony import */ var _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var _store_donation_statistic_list_donation_statistic_list_facade__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/donation-statistic-list/donation-statistic-list.facade */ "./src/app/store/donation-statistic-list/donation-statistic-list.facade.ts");
/* harmony import */ var _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store/tree-list/tree-list.facade */ "./src/app/store/tree-list/tree-list.facade.ts");
/* harmony import */ var _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/user-list/user-list.facade */ "./src/app/store/user-list/user-list.facade.ts");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_19__["CountryListDataService"],
        _services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_16__["TreeListDataService"],
        _services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_17__["UserListDataService"],
        _services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_18__["DonationListDataService"],
        _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_21__["FacadeServiceCountryList"],
        _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_22__["FacadeServiceDonationList"],
        _store_donation_statistic_list_donation_statistic_list_facade__WEBPACK_IMPORTED_MODULE_23__["FacadeServiceDonationStatisticList"],
        _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_24__["FacadeServiceTreeList"],
        _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_25__["FacadeServiceUserList"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _my_error_handler_my_error_handler_module__WEBPACK_IMPORTED_MODULE_20__["MyErrorHandler"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store___WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_country_list_country_list_effects__WEBPACK_IMPORTED_MODULE_11__["CountryListEffects"], _store_tree_list_tree_list_effects__WEBPACK_IMPORTED_MODULE_12__["TreeListEffects"], _store_user_list_user_list_effects__WEBPACK_IMPORTED_MODULE_13__["UserListEffects"], _store_donation_list_donation_list_effects__WEBPACK_IMPORTED_MODULE_14__["DonationListEffects"]]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot(),
            _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"], _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store___WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_country_list_country_list_effects__WEBPACK_IMPORTED_MODULE_11__["CountryListEffects"], _store_tree_list_tree_list_effects__WEBPACK_IMPORTED_MODULE_12__["TreeListEffects"], _store_user_list_user_list_effects__WEBPACK_IMPORTED_MODULE_13__["UserListEffects"], _store_donation_list_donation_list_effects__WEBPACK_IMPORTED_MODULE_14__["DonationListEffects"]]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot(),
                    _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"]
                ],
                providers: [
                    _services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_19__["CountryListDataService"],
                    _services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_16__["TreeListDataService"],
                    _services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_17__["UserListDataService"],
                    _services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_18__["DonationListDataService"],
                    _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_21__["FacadeServiceCountryList"],
                    _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_22__["FacadeServiceDonationList"],
                    _store_donation_statistic_list_donation_statistic_list_facade__WEBPACK_IMPORTED_MODULE_23__["FacadeServiceDonationStatisticList"],
                    _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_24__["FacadeServiceTreeList"],
                    _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_25__["FacadeServiceUserList"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _my_error_handler_my_error_handler_module__WEBPACK_IMPORTED_MODULE_20__["MyErrorHandler"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/not-found/not-found-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





const routes = [
    {
        path: 'not-found',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]
    }
];
class NotFoundRoutingModule {
}
NotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotFoundRoutingModule });
NotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NotFoundRoutingModule_Factory(t) { return new (t || NotFoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundComponent {
    constructor(_router) {
        this._router = _router;
    }
    goHome() {
        this._router.navigate(['']);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 16, vars: 0, consts: [[1, "-app-not-found"], [1, "-app-not-found__title"], [1, "-app-not-found__title-letter-wrapper"], [1, "-app-not-found__title-letter", "-app-not-found__title-letter_left"], [1, "-app-not-found__title-letter", "-app-not-found__title-letter_middle"], [1, "-app-not-found__title-letter", "-app-not-found__title-letter_right"], [1, "-app-not-found__info"], [1, "-app-not-found__info-sub-title"], [1, "-app-not-found__info-button", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " not found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_14_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " go home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@-webkit-keyframes fromBottomToTopLetter {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: 45%;\n  }\n}\n@keyframes fromBottomToTopLetter {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: 45%;\n  }\n}\n[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-image: url('not-found-page-bg.png');\n  background-position: center;\n  background-size: cover;\n}\n.-app-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: #f5feff;\n}\n.-app-not-found__title[_ngcontent-%COMP%] {\n  z-index: -1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  height: 60%;\n  background: linear-gradient(180deg, #b0dfe6, white);\n}\n.-app-not-found__title-letter-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 150px;\n  padding: 0px 10px;\n  text-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.6);\n  font-size: 250px;\n  font-weight: 600;\n}\n.-app-not-found__title-letter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.-app-not-found__title-letter_left[_ngcontent-%COMP%] {\n  -webkit-animation: 2s ease-out fromBottomToTopLetter 1s infinite alternate;\n  animation: 2s ease-out fromBottomToTopLetter 1s infinite alternate;\n}\n.-app-not-found__title-letter_middle[_ngcontent-%COMP%] {\n  -webkit-animation: 2s ease-out fromBottomToTopLetter 1.3s infinite alternate;\n  animation: 2s ease-out fromBottomToTopLetter 1.3s infinite alternate;\n}\n.-app-not-found__title-letter_right[_ngcontent-%COMP%] {\n  -webkit-animation: 2s ease-out fromBottomToTopLetter 0.7s infinite alternate;\n  animation: 2s ease-out fromBottomToTopLetter 0.7s infinite alternate;\n}\n.-app-not-found__info[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.-app-not-found__info-sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 20px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 28px;\n  font-weight: 600;\n}\n.-app-not-found__info-button[_ngcontent-%COMP%] {\n  padding: 20px 60px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #f5feff;\n  border-radius: 10px;\n  background: transparent;\n  color: #f5feff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-not-found__info-button[_ngcontent-%COMP%]:hover {\n  background-color: #f5feff;\n  color: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvRDpcXEVQQU0gdHJhaW5pbmdcXHNhdmUtb3VyLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0LXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JJO0VBa0JBO0lBQ0ksVUFBQTtFQ3hDTjtFRDBDRTtJQUNJLFdBQUE7RUN4Q047QUFDRjtBRDZCSTtFQU1BO0lBQ0ksVUFBQTtFQ1JOO0VEVUU7SUFDSSxXQUFBO0VDUk47QUFDRjtBRG1CQTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUNsQko7QURtQkk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ3BCUjtBRHdCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGNBcEZNO0FDNkRWO0FEd0JJO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSxtREFBQTtBQ3pCUjtBRDBCUTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLDRFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzFCWjtBRDRCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUF2R1IsOEJBd0cyQjtBQ3RCL0I7QUR1Qlk7RUFsRVIsMEVBQUE7RUFJQSxrRUFBQTtBQzhDSjtBRG1CWTtFQXJFUiw0RUFBQTtFQUlBLG9FQUFBO0FDcURKO0FEZVk7RUF4RVIsNEVBQUE7RUFJQSxvRUFBQTtBQzRESjtBRGFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF4SEosZ0NBeUh1QjtFQUVuQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1RSO0FEVVE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFFQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEV1E7RUFDSSxrQkFBQTtFQXJJUixnQkF1SVE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUVBLGNBL0pGO0VBZ0tFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEVVk7RUFDSSx5QkF0S047RUF3S00seUJBNUtFO0FDbUtsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRibGFja09wYWNpdHkwLTI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGR1c3R5Qmx1ZTogcmdiYSgxNzYsIDIyMywgMjMwLCAxKTtcclxuJHNreUJsdWU6IHJnYmEoMjQ1LCAyNTQsIDI1NSwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKGZyb21Cb3R0b21Ub1RvcExldHRlcikge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3R0b206IDQ1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1vLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIGFuaW1hdGlvbjogI3skc3RyfTsgICAgICBcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UtYmcucG5nJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwLW5vdC1mb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgY29sb3I6ICRza3lCbHVlO1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRkdXN0eUJsdWUsICR3aGl0ZSk7XHJcbiAgICAgICAgJi1sZXR0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDVweCAkYmxhY2tPcGFjaXR5MC0yLCAwcHggMHB4IDEwcHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sZXR0ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9taWRkbGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMS4zcyBpbmZpbml0ZSBhbHRlcm5hdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDAuN3MgaW5maW5pdGUgYWx0ZXJuYXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNreUJsdWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkc2t5Qmx1ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRza3lCbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2tPcGFjaXR5MC04O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkAtd2Via2l0LWtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZyb21Cb3R0b21Ub1RvcExldHRlciB7XG4gIDAlIHtcbiAgICBib3R0b206IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogNDUlO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UtYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi4tYXBwLW5vdC1mb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmNWZlZmY7XG59XG4uLWFwcC1ub3QtZm91bmRfX3RpdGxlIHtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2IwZGZlNiwgd2hpdGUpO1xufVxuLi1hcHAtbm90LWZvdW5kX190aXRsZS1sZXR0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDI1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtbm90LWZvdW5kX190aXRsZS1sZXR0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn1cbi4tYXBwLW5vdC1mb3VuZF9fdGl0bGUtbGV0dGVyX2xlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tcy1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLi1hcHAtbm90LWZvdW5kX190aXRsZS1sZXR0ZXJfbWlkZGxlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1zLWFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDEuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtby1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMS4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uLWFwcC1ub3QtZm91bmRfX3RpdGxlLWxldHRlcl9yaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMC43cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tb3otYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMC43cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tcy1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAwLjdzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW8tYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMC43cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDAuN3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLi1hcHAtbm90LWZvdW5kX19pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtbm90LWZvdW5kX19pbmZvLXN1Yi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1ub3QtZm91bmRfX2luZm8tYnV0dG9uIHtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y1ZmVmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjVmZWZmO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLW5vdC1mb3VuZF9faW5mby1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmZWZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/not-found/not-found.module.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/components/not-found/not-found-routing.module.ts");




class NotFoundModule {
}
NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotFoundModule, bootstrap: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]] });
NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); }, providers: [], imports: [[
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]], imports: [_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
                ],
                imports: [
                    _not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]
                ],
                providers: [],
                bootstrap: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/country-list/capital-list-snapshot.ts":
/*!**************************************************************!*\
  !*** ./src/app/models/country-list/capital-list-snapshot.ts ***!
  \**************************************************************/
/*! exports provided: CapitalListSnapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalListSnapshot", function() { return CapitalListSnapshot; });
/* harmony import */ var _capital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capital */ "./src/app/models/country-list/capital.ts");

class CapitalListSnapshot {
    constructor(capitalList) {
        this.capitalList = capitalList;
    }
    static fromJSON(json) {
        return Boolean(json)
            ? new CapitalListSnapshot((json.capitalList || []).filter(Boolean).map(_capital__WEBPACK_IMPORTED_MODULE_0__["Capital"].fromJSON))
            : null;
    }
    static toJSON(capitalListSnapshot) {
        return Boolean(capitalListSnapshot)
            ? {
                capitalList: (capitalListSnapshot.capitalList || []).filter(Boolean).map(_capital__WEBPACK_IMPORTED_MODULE_0__["Capital"].toJSON)
            }
            : {};
    }
}


/***/ }),

/***/ "./src/app/models/country-list/capital.ts":
/*!************************************************!*\
  !*** ./src/app/models/country-list/capital.ts ***!
  \************************************************/
/*! exports provided: Capital */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capital", function() { return Capital; });
class Capital {
    constructor(latitude, longitude, name) {
        this._latitude = latitude;
        this._longitude = longitude;
        this._name = name;
    }
    static fromJSON(json) {
        return Boolean(json)
            ? new Capital(json.latitude, json.longitude, json.name)
            : null;
    }
    static toJSON(capital) {
        return Boolean(capital)
            ? {
                latitude: capital.latitude,
                longitude: capital.longitude,
                name: capital.name
            }
            : {};
    }
    set latitude(newlatitude) {
        this._latitude = newlatitude;
    }
    get latitude() {
        return this._latitude;
    }
    set longitude(newlongitude) {
        this._longitude = newlongitude;
    }
    get longitude() {
        return this._longitude;
    }
    set name(newName) {
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    clone() {
        return new Capital(this.latitude, this.longitude, this.name);
    }
}


/***/ }),

/***/ "./src/app/models/country-list/country.ts":
/*!************************************************!*\
  !*** ./src/app/models/country-list/country.ts ***!
  \************************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony import */ var _capital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capital */ "./src/app/models/country-list/capital.ts");

class Country {
    constructor(id, name, nativeName, region, subRegion, capital, population, area, forestArea, flag, timeZone) {
        this._id = id;
        this._name = name;
        this._nativeName = nativeName;
        this._region = region;
        this._subRegion = subRegion;
        this._capital = capital;
        this._population = population;
        this._area = area;
        this._forestArea = forestArea;
        this._flag = flag;
        this._timeZone = timeZone;
    }
    set id(newId) {
        this._id = newId;
    }
    get id() {
        return this._id;
    }
    set name(newName) {
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set nativeName(newNativeName) {
        this._nativeName = newNativeName;
    }
    get nativeName() {
        return this._nativeName;
    }
    set region(newRegion) {
        this._region = newRegion;
    }
    get region() {
        return this._region;
    }
    set subRegion(newSubRegion) {
        this._subRegion = newSubRegion;
    }
    get subRegion() {
        return this._subRegion;
    }
    set capital(newCapital) {
        this._capital = newCapital;
    }
    get capital() {
        return this._capital;
    }
    set population(newPopulation) {
        this._population = newPopulation;
    }
    get population() {
        return this._population;
    }
    set area(newArea) {
        this._area = newArea;
    }
    get area() {
        return this._area;
    }
    set forestArea(newForestArea) {
        this._forestArea = newForestArea;
    }
    get forestArea() {
        return this._forestArea;
    }
    set flag(newFlag) {
        this._flag = newFlag;
    }
    get flag() {
        return this._flag;
    }
    set timeZone(newTimeZone) {
        this._timeZone = newTimeZone;
    }
    get timeZone() {
        return this._timeZone;
    }
    static fromJSON(json) {
        var _a;
        const timezones = ((_a = Boolean(json.timezones)) !== null && _a !== void 0 ? _a : json.timezones.length > 0)
            ? json.timezones[0]
            : undefined;
        return Boolean(json)
            ? new Country(json.alpha2Code, json.name, json.nativeName, json.region, json.subregion, new _capital__WEBPACK_IMPORTED_MODULE_0__["Capital"](json.latitude, json.longitude, json.capital), json.population, json.area, json.forestArea, json.flag, timezones)
            : null;
    }
    clone() {
        return new Country(this.id, this.name, this.nativeName, this.region, this.subRegion, this.capital.clone(), this.population, this.area, this.forestArea, this.flag, this.timeZone);
    }
    equals(country) {
        return (Boolean(country)
            && JSON.stringify(country) === JSON.stringify(this));
    }
}


/***/ }),

/***/ "./src/app/models/donation-list/donation.ts":
/*!**************************************************!*\
  !*** ./src/app/models/donation-list/donation.ts ***!
  \**************************************************/
/*! exports provided: Donation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donation", function() { return Donation; });
/* harmony import */ var _tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree-list/tree-donation */ "./src/app/models/tree-list/tree-donation.ts");
/* harmony import */ var _tree_list_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree-list/tree */ "./src/app/models/tree-list/tree.ts");
/* harmony import */ var _tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree-list/tree-type */ "./src/app/models/tree-list/tree-type.ts");



class Donation {
    constructor(id, country, treeDonation, date) {
        this._id = id;
        this._country = country;
        this._treeDonation = treeDonation;
        this._date = date;
    }
    static fromJSON(json) {
        return Boolean(json)
            ? new Donation(json.id, json.country, new _tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_0__["TreeDonation"](json.treeDonation.id, json.treeDonation.amount, json.treeDonation.cost, new _tree_list_tree__WEBPACK_IMPORTED_MODULE_1__["Tree"](json.treeDonation.tree.id, json.treeDonation.tree.name, json.treeDonation.tree.description, json.treeDonation.tree.picture, json.treeDonation.tree.size, json.treeDonation.tree.environment, json.treeDonation.tree.keyFeature, Number(json.treeDonation.tree.cost), _tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"][json.treeDonation.tree.id])), json.date)
            : null;
    }
    set id(newId) {
        this._id = newId;
    }
    get id() {
        return this._id;
    }
    set country(newCountry) {
        this._country = newCountry;
    }
    get country() {
        return this._country;
    }
    set treeDonation(newTreeDonation) {
        this._treeDonation = newTreeDonation;
    }
    get treeDonation() {
        return this._treeDonation;
    }
    set date(newDate) {
        this._date = newDate;
    }
    get date() {
        return this._date;
    }
    equals(donation) {
        return (Boolean(donation)
            && JSON.stringify(donation) === JSON.stringify(this));
    }
    clone() {
        return new Donation(this.id, this.country, this.treeDonation.clone(), this.date);
    }
}


/***/ }),

/***/ "./src/app/models/donation-statistic-list/statistic-element-type.ts":
/*!**************************************************************************!*\
  !*** ./src/app/models/donation-statistic-list/statistic-element-type.ts ***!
  \**************************************************************************/
/*! exports provided: StatisticElementType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticElementType", function() { return StatisticElementType; });
var StatisticElementType;
(function (StatisticElementType) {
    StatisticElementType["BC"] = "by-cost";
    StatisticElementType["BT"] = "by-tree";
})(StatisticElementType || (StatisticElementType = {}));


/***/ }),

/***/ "./src/app/models/donation-statistic-list/statistic-sub-category-type.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/models/donation-statistic-list/statistic-sub-category-type.ts ***!
  \*******************************************************************************/
/*! exports provided: StatisticSubCategoryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticSubCategoryType", function() { return StatisticSubCategoryType; });
var StatisticSubCategoryType;
(function (StatisticSubCategoryType) {
    StatisticSubCategoryType["AD"] = "all-donators";
    StatisticSubCategoryType["TD"] = "top-10-donators";
    StatisticSubCategoryType["AC"] = "all-countries";
    StatisticSubCategoryType["TC"] = "top-10-countries";
})(StatisticSubCategoryType || (StatisticSubCategoryType = {}));


/***/ }),

/***/ "./src/app/models/tree-list/tree-donation.ts":
/*!***************************************************!*\
  !*** ./src/app/models/tree-list/tree-donation.ts ***!
  \***************************************************/
/*! exports provided: TreeDonation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDonation", function() { return TreeDonation; });
class TreeDonation {
    constructor(id, amount, cost, tree) {
        this._id = id;
        this._amont = amount;
        this._cost = cost;
        this._tree = tree;
    }
    set id(newId) {
        this._id = newId;
    }
    get id() {
        return this._id;
    }
    set amount(newAmount) {
        this._amont = newAmount;
    }
    get amount() {
        return this._amont;
    }
    set cost(newCost) {
        this._cost = newCost;
    }
    get cost() {
        return this._cost;
    }
    set tree(newTree) {
        this._tree = newTree;
    }
    get tree() {
        return this._tree;
    }
    clone() {
        return new TreeDonation(this.id, this.amount, this.cost, this.tree.clone());
    }
}


/***/ }),

/***/ "./src/app/models/tree-list/tree-type.ts":
/*!***********************************************!*\
  !*** ./src/app/models/tree-list/tree-type.ts ***!
  \***********************************************/
/*! exports provided: TreeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeType", function() { return TreeType; });
var TreeType;
(function (TreeType) {
    TreeType["NT"] = "native-trees";
    TreeType["AS"] = "arboretum-species";
    TreeType["PF"] = "patio-fruit-trees";
    TreeType["EG"] = "evergreen";
    TreeType["PG"] = "pot-grown-trees";
    TreeType["SH"] = "shrubs";
})(TreeType || (TreeType = {}));


/***/ }),

/***/ "./src/app/models/tree-list/tree.ts":
/*!******************************************!*\
  !*** ./src/app/models/tree-list/tree.ts ***!
  \******************************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var _tree_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-type */ "./src/app/models/tree-list/tree-type.ts");

class Tree {
    constructor(id, name, description, picture, size, environment, keyFeature, cost, type) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._picture = picture;
        this._size = size;
        this._environment = environment;
        this._keyFeature = keyFeature;
        this._cost = cost;
        this._type = type;
    }
    set id(newId) {
        this._id = newId;
    }
    get id() {
        return this._id;
    }
    set name(newName) {
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
    get description() {
        return this._description;
    }
    set picture(newPicture) {
        this._picture = newPicture;
    }
    get picture() {
        return this._picture;
    }
    set size(newSize) {
        this._size = newSize;
    }
    get size() {
        return this._size;
    }
    set environment(newEnvironment) {
        this._environment = newEnvironment;
    }
    get environment() {
        return this._environment;
    }
    set keyFeature(newKeyFeature) {
        this._keyFeature = newKeyFeature;
    }
    get keyFeature() {
        return this._keyFeature;
    }
    set cost(newCost) {
        this._cost = newCost;
    }
    get cost() {
        return this._cost;
    }
    set type(newType) {
        this._type = newType;
    }
    get type() {
        return this._type;
    }
    static fromJSON(json) {
        return Boolean(json)
            ? new Tree(json.id, json.name, json.description, json.picture, json.size, json.environment, json.keyFeature, Number(json.cost), _tree_type__WEBPACK_IMPORTED_MODULE_0__["TreeType"][json.id])
            : null;
    }
    clone() {
        return new Tree(this.id, this.name, this.description, this.picture, this.size, this.environment, this.keyFeature, this.cost, this.type);
    }
    equals(tree) {
        return (Boolean(tree)
            && JSON.stringify(tree) === JSON.stringify(this));
    }
}


/***/ }),

/***/ "./src/app/models/user-list/user.ts":
/*!******************************************!*\
  !*** ./src/app/models/user-list/user.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _country_list_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../country-list/country */ "./src/app/models/country-list/country.ts");

class User {
    constructor(id, name, surName, password, email, profileImage, age, date, country, donationList, medicalPoints) {
        this._id = id;
        this._name = name;
        this._surName = surName;
        this._password = password;
        this._email = email;
        this._profileImage = profileImage;
        this._age = age;
        this._date = date;
        this._country = country;
        this._donationList = donationList;
        this._medicalPoints = medicalPoints;
    }
    set id(newId) {
        this._id = newId;
    }
    get id() {
        return this._id;
    }
    set name(newName) {
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set surName(newSurname) {
        this._surName = newSurname;
    }
    get surName() {
        return this._surName;
    }
    set password(newPassword) {
        this._password = newPassword;
    }
    get password() {
        return this._password;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    get email() {
        return this._email;
    }
    set profileImage(newProfileImage) {
        this._profileImage = newProfileImage;
    }
    get profileImage() {
        return this._profileImage;
    }
    set age(newAge) {
        this._age = newAge;
    }
    get age() {
        return this._age;
    }
    set date(newDate) {
        this._date = newDate;
    }
    get date() {
        return this._date;
    }
    set country(newCountry) {
        this._country = newCountry;
    }
    get country() {
        return this._country;
    }
    set donationList(newDonationList) {
        this._donationList = newDonationList;
    }
    get donationList() {
        return this._donationList;
    }
    set medicalPoints(newMedicalPoints) {
        this._medicalPoints = newMedicalPoints;
    }
    get medicalPoints() {
        return this._medicalPoints;
    }
    static fromJSON(json) {
        return Boolean(json)
            ? new User(json.id, json.name, json.surname, json.password, json.email, json.profileImage, Number(json.age), json.date, _country_list_country__WEBPACK_IMPORTED_MODULE_0__["Country"].fromJSON(json.country), json.donationList, Number(json.medicalPoints))
            : null;
    }
    clone() {
        const donationListClone = (Boolean(this.donationList))
            ? [...this.donationList]
            : null;
        const countryListClone = (Boolean(this.country))
            ? this.country.clone()
            : null;
        return new User(this.id, this.name, this.surName, this.password, this.email, this.profileImage, this.age, this.date, countryListClone, donationListClone, this.medicalPoints);
    }
    loginEquals(user) {
        return this.name === user.name
            && this.surName === user.surName
            && this.password === user.password
            && Boolean(user);
    }
}


/***/ }),

/***/ "./src/app/my-error-handler/my-error-handler.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/my-error-handler/my-error-handler.module.ts ***!
  \*************************************************************/
/*! exports provided: MyErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorHandler", function() { return MyErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MyErrorHandler {
    constructor(_router) {
        this._router = _router;
    }
    handleError(error) {
        console.log(error.message);
        this._router.navigate(['/not-found']);
    }
}
MyErrorHandler.ɵfac = function MyErrorHandler_Factory(t) { return new (t || MyErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MyErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyErrorHandler, factory: MyErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/country-list/country-data.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/country-list/country-data.service.ts ***!
  \***************************************************************/
/*! exports provided: CountryListDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListDataService", function() { return CountryListDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_country_list_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/country-list/country */ "./src/app/models/country-list/country.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_country_list_capital__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/country-list/capital */ "./src/app/models/country-list/capital.ts");
/* harmony import */ var _models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/country-list/capital-list-snapshot */ "./src/app/models/country-list/capital-list-snapshot.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class CountryListDataService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
        this._countryUrl = 'https://restcountries.eu/rest/v2/all';
    }
    loadCountriesList() {
        return this._httpClient.get(this._countryUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((json) => {
            return (json || []).filter(Boolean).map(_models_country_list_country__WEBPACK_IMPORTED_MODULE_2__["Country"].fromJSON);
        }));
    }
    loadCapitalsCoordinatesData(countryList) {
        const LSData = localStorage.getItem(CountryListDataService.countryListLSKey);
        if (Boolean(LSData)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([...(_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_5__["CapitalListSnapshot"].fromJSON(JSON.parse(LSData))).capitalList]);
        }
        else {
            const countryList$ = [...countryList].map((currentCountry) => {
                const currentCountryCapitalName = currentCountry.capital.name;
                if (Boolean(currentCountryCapitalName)) {
                    return this._httpClient.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=cf12cc60-e991-460b-8057-553e3de62bf8&geocode=${currentCountryCapitalName}`)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((json) => {
                        const newCountry = currentCountry.clone();
                        if (Boolean(json.response.GeoObjectCollection.featureMember[0])) {
                            if (json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos) {
                                const location = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                                const coordinates = location.split(' ');
                                const newCountryCapitalName = newCountry.capital.name;
                                if (Boolean(coordinates[0]) && Boolean(coordinates[1]) && Boolean(newCountryCapitalName)) {
                                    return new _models_country_list_capital__WEBPACK_IMPORTED_MODULE_4__["Capital"](Number(coordinates[1]), Number(coordinates[0]), newCountryCapitalName);
                                }
                            }
                        }
                    }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([...countryList$]);
        }
    }
    loadCountriesForestAreaData() {
        const loadForestAreaDataDelay = 5500;
        return this._httpClient.get(`${this._baseUrl}/countries-forest-data.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(loadForestAreaDataDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((json) => {
            return (json || []).filter(Boolean).map((forestAreaObject) => {
                return {
                    id: `${forestAreaObject.id}`,
                    value: Number(forestAreaObject.value)
                };
            });
        }));
    }
    saveCapitalsCoordinatesData(capitalListSnapshot) {
        localStorage.setItem(CountryListDataService.countryListLSKey, JSON.stringify(_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_5__["CapitalListSnapshot"].toJSON(capitalListSnapshot)));
    }
}
CountryListDataService.countryListLSKey = '-app-country-list';
CountryListDataService.ɵfac = function CountryListDataService_Factory(t) { return new (t || CountryListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
CountryListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryListDataService, factory: CountryListDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/donation-list/donation-list-data.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/donation-list/donation-list-data.service.ts ***!
  \**********************************************************************/
/*! exports provided: DonationListDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationListDataService", function() { return DonationListDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_donation_list_donation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/donation-list/donation */ "./src/app/models/donation-list/donation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DonationListDataService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
    }
    loadDonationList() {
        return this._httpClient.get(`${this._baseUrl}/donations-data.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((json) => {
            return (json || []).filter(Boolean).map(_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_1__["Donation"].fromJSON);
        }));
    }
}
DonationListDataService.ɵfac = function DonationListDataService_Factory(t) { return new (t || DonationListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DonationListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DonationListDataService, factory: DonationListDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tree-list/tree-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/tree-list/tree-data.service.ts ***!
  \*********************************************************/
/*! exports provided: TreeListDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListDataService", function() { return TreeListDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_tree_list_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/tree-list/tree */ "./src/app/models/tree-list/tree.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TreeListDataService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
    }
    loadTreeList() {
        return this._httpClient.get(`${this._baseUrl}/trees-data.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((json) => {
            return (json || []).filter(Boolean).map(_models_tree_list_tree__WEBPACK_IMPORTED_MODULE_1__["Tree"].fromJSON);
        }));
    }
}
TreeListDataService.ɵfac = function TreeListDataService_Factory(t) { return new (t || TreeListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TreeListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeListDataService, factory: TreeListDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user-list/user-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/user-list/user-data.service.ts ***!
  \*********************************************************/
/*! exports provided: UserListDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListDataService", function() { return UserListDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user_list_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user-list/user */ "./src/app/models/user-list/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserListDataService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
    }
    loadUserList() {
        return this._httpClient.get(`${this._baseUrl}/users-data.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((json) => {
            return (json || []).filter(Boolean).map(_models_user_list_user__WEBPACK_IMPORTED_MODULE_1__["User"].fromJSON);
        }));
    }
}
UserListDataService.ɵfac = function UserListDataService_Factory(t) { return new (t || UserListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserListDataService, factory: UserListDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/country-list/country-list.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/store/country-list/country-list.actions.ts ***!
  \************************************************************/
/*! exports provided: countryListActionsType, InitCountryListAction, InitCountryListSuccessAction, InitCapitalsCoordinatesAction, InitCapitalsCoordinatesDataAction, InitCapitalsCoordinatesDataSuccessAction, InitCountriesForestAreaAction, InitCountriesForestAreaDataAction, InitCountriesForestAreaDataSuccessAction, IsCountriesLoadingSuccessAction, SearchSubRegionCountriesAction, SearchCountryAction, SearchCountrySuccessAction, SearchPreviousCountryAction, SearchNextCountryAction, ToggleMapModeCountryListAction, ToggleShowCapitalsModeCountryListAction, SearchMapCountryAction, DontSearchMapCountryAction, CountCountryForestAreaAction, ResetSearchCountriesAction, SelectCountryAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryListActionsType", function() { return countryListActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCountryListAction", function() { return InitCountryListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCountryListSuccessAction", function() { return InitCountryListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCapitalsCoordinatesAction", function() { return InitCapitalsCoordinatesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCapitalsCoordinatesDataAction", function() { return InitCapitalsCoordinatesDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCapitalsCoordinatesDataSuccessAction", function() { return InitCapitalsCoordinatesDataSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCountriesForestAreaAction", function() { return InitCountriesForestAreaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCountriesForestAreaDataAction", function() { return InitCountriesForestAreaDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCountriesForestAreaDataSuccessAction", function() { return InitCountriesForestAreaDataSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCountriesLoadingSuccessAction", function() { return IsCountriesLoadingSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSubRegionCountriesAction", function() { return SearchSubRegionCountriesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCountryAction", function() { return SearchCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCountrySuccessAction", function() { return SearchCountrySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPreviousCountryAction", function() { return SearchPreviousCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNextCountryAction", function() { return SearchNextCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleMapModeCountryListAction", function() { return ToggleMapModeCountryListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleShowCapitalsModeCountryListAction", function() { return ToggleShowCapitalsModeCountryListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMapCountryAction", function() { return SearchMapCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DontSearchMapCountryAction", function() { return DontSearchMapCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountCountryForestAreaAction", function() { return CountCountryForestAreaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSearchCountriesAction", function() { return ResetSearchCountriesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCountryAction", function() { return SelectCountryAction; });
var countryListActionsType;
(function (countryListActionsType) {
    countryListActionsType["initCountries"] = "[COUNTRY-LIST/API] Init-Countries Country-List";
    countryListActionsType["initCountriesSuccess"] = "[COUNTRY-LIST/API] Init-Countries-Success Country-List";
    countryListActionsType["initCapitalsCoordinatesData"] = "[COUNTRY-LIST/API] Init-Capitals-Coordinates-Data Country-List";
    countryListActionsType["initCapitalsCoordinatesDataSuccess"] = "[COUNTRY-LIST/API] Init-Capitals-Coordinates-Data-Success Country-List";
    countryListActionsType["initCountriesForestArea"] = "[COUNTRY-LIST/API] Init-Countries-Forest-Area Country-List";
    countryListActionsType["initCountriesForestAreaData"] = "[COUNTRY-LIST/API] Init-Countries-Forest-Area-Data Country-List";
    countryListActionsType["initCountriesForestAreaDataSuccess"] = "[COUNTRY-LIST/API] Init-Countries-Forest-Area-Data-Success Country-List";
    countryListActionsType["isCountriesLoadingSuccess"] = "[COUNTRY-LIST/API] Is-Loading-Success Country-List";
    countryListActionsType["initCapitalsCoordinates"] = "[COUNTRY-LIST/API] Init-Capitals-Coordinates Country-List";
    countryListActionsType["searchSubRegionCountries"] = "[COUNTRY-LIST/API] Search-Sub-Region-Countries Country-List";
    countryListActionsType["searchCountry"] = "[COUNTRY-LIST/API] Search-Country Country-List";
    countryListActionsType["searchCountrySuccess"] = "[COUNTRY-LIST/API] Search-Country-Success Country-List";
    countryListActionsType["searchPreviousCountry"] = "[COUNTRY-LIST/API] Search-Previous-Country Country-List";
    countryListActionsType["searchNextCountry"] = "[COUNTRY-LIST/API] Search-Next-Country Country-List";
    countryListActionsType["toggleMapMode"] = "[COUNTRY-LIST/API] Toggle-Map-Mode Country-List";
    countryListActionsType["toggleShowCapitalsMode"] = "[COUNTRY-LIST/API] Toggle-Is-Show-Capitals-Mode Country-List";
    countryListActionsType["searchMapCountry"] = "[COUNTRY-LIST/API] Search-Map-Country Country-List";
    countryListActionsType["dontSearchMapCountry"] = "[COUNTRY-LIST/API] Dont-Search-Map-Country Country-List";
    countryListActionsType["countCountryForestArea"] = "[COUNTRY-LIST/API] Count-Country-Forest-Area Country-List";
    countryListActionsType["resetSearchCounrties"] = "[COUNTRY-LIST/API] Reset-Search-Countries Country-List";
    countryListActionsType["selectCountry"] = "[COUNTRY-LIST/API] Select-Country Country-List";
})(countryListActionsType || (countryListActionsType = {}));
class InitCountryListAction {
    constructor() {
        this.type = countryListActionsType.initCountries;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCountryListSuccessAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.initCountriesSuccess;
    }
    get countryList() {
        return this._payload.countryList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCapitalsCoordinatesAction {
    constructor() {
        this.type = countryListActionsType.initCapitalsCoordinates;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCapitalsCoordinatesDataAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.initCapitalsCoordinatesData;
    }
    get countryList() {
        return this._payload.countryList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCapitalsCoordinatesDataSuccessAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.initCapitalsCoordinatesDataSuccess;
    }
    get capitalsCoordinatesData() {
        return this._payload.capitalsCoordinatesData;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCountriesForestAreaAction {
    constructor() {
        this.type = countryListActionsType.initCountriesForestArea;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCountriesForestAreaDataAction {
    constructor() {
        this.type = countryListActionsType.initCountriesForestAreaData;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitCountriesForestAreaDataSuccessAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.initCountriesForestAreaDataSuccess;
    }
    get countriesForestAreaData() {
        return this._payload.countriesForestAreaData;
    }
}
// tslint:disable-next-line: max-classes-per-file
class IsCountriesLoadingSuccessAction {
    constructor() {
        this.type = countryListActionsType.isCountriesLoadingSuccess;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchSubRegionCountriesAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.searchSubRegionCountries;
    }
    get subRegionName() {
        return this._payload.subRegionName;
    }
    get regionName() {
        return this._payload.regionName;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchCountryAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.searchCountry;
    }
    get name() {
        return this._payload.name;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchCountrySuccessAction {
    constructor() {
        this.type = countryListActionsType.searchCountrySuccess;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchPreviousCountryAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.searchPreviousCountry;
    }
    get name() {
        return this._payload.name;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchNextCountryAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.searchNextCountry;
    }
    get name() {
        return this._payload.name;
    }
}
// tslint:disable-next-line: max-classes-per-file
class ToggleMapModeCountryListAction {
    constructor() {
        this.type = countryListActionsType.toggleMapMode;
    }
}
// tslint:disable-next-line: max-classes-per-file
class ToggleShowCapitalsModeCountryListAction {
    constructor() {
        this.type = countryListActionsType.toggleShowCapitalsMode;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchMapCountryAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.searchMapCountry;
    }
    get name() {
        return this._payload.name;
    }
}
// tslint:disable-next-line: max-classes-per-file
class DontSearchMapCountryAction {
    constructor() {
        this.type = countryListActionsType.dontSearchMapCountry;
    }
}
// tslint:disable-next-line: max-classes-per-file
class CountCountryForestAreaAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.countCountryForestArea;
    }
    get donation() {
        return this._payload.donation;
    }
}
// tslint:disable-next-line: max-classes-per-file
class ResetSearchCountriesAction {
    constructor() {
        this.type = countryListActionsType.resetSearchCounrties;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SelectCountryAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = countryListActionsType.selectCountry;
    }
    get country() {
        return this._payload.country;
    }
}


/***/ }),

/***/ "./src/app/store/country-list/country-list.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/store/country-list/country-list.effects.ts ***!
  \************************************************************/
/*! exports provided: CountryListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListEffects", function() { return CountryListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _country_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-list.actions */ "./src/app/store/country-list/country-list.actions.ts");
/* harmony import */ var src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/country-list/country-data.service */ "./src/app/services/country-list/country-data.service.ts");








class CountryListEffects {
    constructor(_actions$, _countryListDataService) {
        this._actions$ = _actions$;
        this._countryListDataService = _countryListDataService;
    }
    loadCountryList() {
        return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_list_actions__WEBPACK_IMPORTED_MODULE_4__["countryListActionsType"].initCountries), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._countryListDataService.loadCountriesList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currentCountryList) => {
            return new _country_list_actions__WEBPACK_IMPORTED_MODULE_4__["InitCountryListSuccessAction"]({ countryList: currentCountryList });
        }))));
    }
    loadCountriesForestAreaData() {
        return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_list_actions__WEBPACK_IMPORTED_MODULE_4__["countryListActionsType"].initCountriesForestAreaData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._countryListDataService.loadCountriesForestAreaData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((countriesForestData) => {
            return new _country_list_actions__WEBPACK_IMPORTED_MODULE_4__["InitCountriesForestAreaDataSuccessAction"]({ countriesForestAreaData: countriesForestData });
        }))));
    }
    loadCapitalsCoordinates() {
        return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_list_actions__WEBPACK_IMPORTED_MODULE_4__["countryListActionsType"].initCapitalsCoordinatesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((payload) => this._countryListDataService.loadCapitalsCoordinatesData(payload.countryList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currentCapitalsData) => {
            return new _country_list_actions__WEBPACK_IMPORTED_MODULE_4__["InitCapitalsCoordinatesDataSuccessAction"]({ capitalsCoordinatesData: currentCapitalsData });
        }))));
    }
}
CountryListEffects.ɵfac = function CountryListEffects_Factory(t) { return new (t || CountryListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_5__["CountryListDataService"])); };
CountryListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryListEffects, factory: CountryListEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CountryListEffects.prototype, "loadCountryList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CountryListEffects.prototype, "loadCountriesForestAreaData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], CountryListEffects.prototype, "loadCapitalsCoordinates", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_5__["CountryListDataService"] }]; }, { loadCountryList: [], loadCountriesForestAreaData: [], loadCapitalsCoordinates: [] }); })();


/***/ }),

/***/ "./src/app/store/country-list/country-list.facade.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/country-list/country-list.facade.ts ***!
  \***********************************************************/
/*! exports provided: FacadeServiceCountryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeServiceCountryList", function() { return FacadeServiceCountryList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/country-list/capital-list-snapshot */ "./src/app/models/country-list/capital-list-snapshot.ts");
/* harmony import */ var _country_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.actions */ "./src/app/store/country-list/country-list.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/country-list/country-data.service */ "./src/app/services/country-list/country-data.service.ts");






class FacadeServiceCountryList {
    constructor(_store$, _countryListDataService) {
        this._store$ = _store$;
        this._countryListDataService = _countryListDataService;
    }
    saveCapitalsCoordinatesData(capitalsData) {
        this._countryListDataService.saveCapitalsCoordinatesData(new src_app_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_1__["CapitalListSnapshot"](capitalsData));
    }
    toggleMapMode() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleMapModeCountryListAction"]());
    }
    toggleCapitalsMode() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleShowCapitalsModeCountryListAction"]());
    }
    searchCurrentCountry(countryName) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchCountryAction"]({ name: countryName }));
    }
    searchPreviousCountry(countryName) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchPreviousCountryAction"]({ name: countryName }));
    }
    searchNextCountry(countryName) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchNextCountryAction"]({ name: countryName }));
    }
    searchCountry(countryName) {
        this.searchCurrentCountry(countryName);
        this.searchPreviousCountry(countryName);
        this.searchNextCountry(countryName);
    }
    searchMapCountry(countryName) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchMapCountryAction"]({ name: countryName }));
    }
    searchCountrySuccess() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchCountrySuccessAction"]());
    }
    searchSubRegionCountries(regionName, subRegionName) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchSubRegionCountriesAction"]({ regionName, subRegionName }));
    }
    initCountryList() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCountryListAction"]());
    }
    initCapitalsCoordinatesData(countryList) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCapitalsCoordinatesDataAction"]({ countryList }));
    }
    initCountriesForestAreaData() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCountriesForestAreaDataAction"]());
    }
    initCountriesForestArea() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCountriesForestAreaAction"]());
    }
    initCapitalsCoordinates() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCapitalsCoordinatesAction"]());
    }
    countriesLoadingSuccess() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["IsCountriesLoadingSuccessAction"]());
    }
    dontSearchMapCountry() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["DontSearchMapCountryAction"]());
    }
    countCountryForestArea(donation) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["CountCountryForestAreaAction"]({ donation }));
    }
    resetSearchCounrties() {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["ResetSearchCountriesAction"]());
    }
    selectCountry(country) {
        this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SelectCountryAction"]({ country }));
    }
}
FacadeServiceCountryList.ɵfac = function FacadeServiceCountryList_Factory(t) { return new (t || FacadeServiceCountryList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_4__["CountryListDataService"])); };
FacadeServiceCountryList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacadeServiceCountryList, factory: FacadeServiceCountryList.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceCountryList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_4__["CountryListDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/country-list/country-list.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/store/country-list/country-list.reducer.ts ***!
  \************************************************************/
/*! exports provided: countryListFeatureKey, countryListReducer, StateReducerCountryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryListFeatureKey", function() { return countryListFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryListReducer", function() { return countryListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReducerCountryList", function() { return StateReducerCountryList; });
/* harmony import */ var _country_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list.actions */ "./src/app/store/country-list/country-list.actions.ts");

const countryListFeatureKey = 'COUNTRY-LIST';
const initialState = {
    isLoading: true,
    isSearchLoading: false,
    isInitedCountries: false,
    isInitedCapitalsCoordinatesData: false,
    isInitedCountriesForestAreaData: false,
    isMapMode: true,
    isGlobeMode: false,
    isShowCapitalsMode: true,
    countryList: null,
    capitalsCoordinatesData: null,
    countriesForestAreaData: null,
    subRegionsCountries: null,
    searchPreviousCountry: null,
    searchCountry: null,
    searchNextCountry: null,
    searchMapCountry: null,
    selectedCountry: null
};
function countryListReducer(state = initialState, action) {
    switch (action.type) {
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountries: {
            return Object.assign({}, state);
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesSuccess: {
            return Object.assign(Object.assign({}, state), { isInitedCountries: true, countryList: [...action.countryList].filter((country) => Boolean(country)) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCapitalsCoordinatesData: {
            return Object.assign({}, state);
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCapitalsCoordinatesDataSuccess: {
            return Object.assign(Object.assign({}, state), { isInitedCapitalsCoordinatesData: true, capitalsCoordinatesData: [...action.capitalsCoordinatesData].filter((capital) => {
                    if (Boolean(capital)) {
                        return {
                            latitude: capital.latitude,
                            longitude: capital.longitude,
                            name: capital.name
                        };
                    }
                }) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCapitalsCoordinates: {
            return Object.assign(Object.assign({}, state), { countryList: [...state.capitalsCoordinatesData].filter(Boolean).map((capital) => {
                    if (Boolean(capital)) {
                        const currentCountry = state.countryList.find((country) => {
                            return country.capital.name === capital.name;
                        });
                        if (Boolean(currentCountry)) {
                            const newCountry = currentCountry.clone();
                            newCountry.capital = capital.clone();
                            return newCountry;
                        }
                    }
                }) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesForestAreaData: {
            return Object.assign({}, state);
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesForestAreaDataSuccess: {
            return Object.assign(Object.assign({}, state), { isInitedCountriesForestAreaData: true, countriesForestAreaData: [...action.countriesForestAreaData]
                    .filter((forestArea) => Boolean(forestArea)) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesForestArea: {
            return Object.assign(Object.assign({}, state), { countryList: [...state.countriesForestAreaData].filter(Boolean).map((forestArea) => {
                    if (Boolean(forestArea)) {
                        const currentCountry = state.countryList.find((country) => country.id === forestArea.id);
                        if (Boolean(currentCountry)) {
                            const newCountry = currentCountry.clone();
                            newCountry.forestArea = Number(forestArea.value);
                            return newCountry;
                        }
                    }
                }) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].isCountriesLoadingSuccess: {
            return Object.assign(Object.assign({}, state), { isLoading: false });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchSubRegionCountries: {
            const currentRegionCountries = [...state.countryList].filter((country) => {
                if (Boolean(country)) {
                    if (country.region.toLowerCase() === action.regionName) {
                        return country;
                    }
                }
            });
            return Object.assign(Object.assign({}, state), { subRegionsCountries: [...currentRegionCountries].filter((country) => {
                    if (Boolean(country)) {
                        const countrySubRegionInfo = country.subRegion.toLowerCase().split(' ');
                        if (countrySubRegionInfo[0] === action.subRegionName) {
                            return country;
                        }
                    }
                }) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchCountry: {
            return Object.assign(Object.assign({}, state), { isSearchLoading: true, searchCountry: [...state.subRegionsCountries].find((country) => {
                    if (Boolean(country)) {
                        const currentCountryRouterName = country.name.replace(/\./g, '')
                            .replace(/\(|\)/g, '')
                            .toLowerCase()
                            .split(' ')
                            .join('-');
                        if (action.name === currentCountryRouterName) {
                            return country;
                        }
                    }
                }) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchMapCountry: {
            return Object.assign(Object.assign({}, state), { searchMapCountry: [...state.countryList].find((country) => {
                    if (Boolean(country)) {
                        const currentCountryName = country.name.toLowerCase().split(' ').join('');
                        const currentSearchMapCountryName = action.name.toLowerCase().split(' ').join('');
                        if (currentCountryName.includes(currentSearchMapCountryName)) {
                            return country;
                        }
                        else {
                            return null;
                        }
                    }
                }) });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].dontSearchMapCountry: {
            return Object.assign(Object.assign({}, state), { searchMapCountry: null });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchCountrySuccess: {
            return Object.assign(Object.assign({}, state), { isSearchLoading: false });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchPreviousCountry: {
            const previousCountryIndex = [...state.subRegionsCountries].findIndex((country) => {
                if (Boolean(country)) {
                    const currentCountryRouterName = country.name.replace(/\./g, '')
                        .replace(/\(|\)/g, '')
                        .toLowerCase()
                        .split(' ')
                        .join('-');
                    if (action.name === currentCountryRouterName) {
                        return country;
                    }
                }
            }) - 1;
            if (previousCountryIndex >= 0) {
                return Object.assign(Object.assign({}, state), { searchPreviousCountry: state.subRegionsCountries[previousCountryIndex].clone() });
            }
            else {
                return Object.assign(Object.assign({}, state), { searchPreviousCountry: null });
            }
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchNextCountry: {
            const nextCountryIndex = [...state.subRegionsCountries].findIndex((country) => {
                if (Boolean(country)) {
                    const currentCountryRouterName = country.name.replace(/\./g, '')
                        .replace(/\(|\)/g, '')
                        .toLowerCase()
                        .split(' ')
                        .join('-');
                    if (action.name === currentCountryRouterName) {
                        return country;
                    }
                }
            }) + 1;
            if (nextCountryIndex < state.subRegionsCountries.length) {
                return Object.assign(Object.assign({}, state), { searchNextCountry: state.subRegionsCountries[nextCountryIndex].clone() });
            }
            else {
                return Object.assign(Object.assign({}, state), { searchNextCountry: null });
            }
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].toggleMapMode: {
            return Object.assign(Object.assign({}, state), { isMapMode: !state.isMapMode, isGlobeMode: !state.isGlobeMode });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].toggleShowCapitalsMode: {
            return Object.assign(Object.assign({}, state), { isShowCapitalsMode: !state.isShowCapitalsMode });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].countCountryForestArea: {
            const currentCountry = [...state.countryList].filter((country) => Boolean(country))
                .find((country) => {
                if (country.id === action.donation.country.id) {
                    return country.clone();
                }
            });
            if (Boolean(currentCountry)) {
                const currentCountryId = currentCountry.id;
                const currentCountryArea = currentCountry.area;
                const currentCountryForestAreaInProcents = currentCountry.forestArea;
                const oneHundredProcents = 100;
                const currentCountryForestAreaInSqKm = currentCountryArea * currentCountryForestAreaInProcents / oneHundredProcents;
                const donationTreeNumber = action.donation.treeDonation.amount;
                const newCountryForestAreaInSqKm = currentCountryForestAreaInSqKm + donationTreeNumber;
                const newCountryForestAreaInProcents = newCountryForestAreaInSqKm * oneHundredProcents / currentCountryArea;
                return Object.assign(Object.assign({}, state), { countryList: [...state.countryList].filter((country) => Boolean(country))
                        .map((country) => {
                        if (country.id === currentCountryId) {
                            const newCountry = currentCountry.clone();
                            newCountry.forestArea = newCountryForestAreaInProcents;
                            return newCountry.clone();
                        }
                        else {
                            return country.clone();
                        }
                    }), countriesForestAreaData: [...state.countriesForestAreaData].map((forestAreaObject) => {
                        if (forestAreaObject.id === currentCountryId) {
                            return {
                                id: currentCountryId,
                                value: String(newCountryForestAreaInProcents)
                            };
                        }
                        else {
                            return Object.assign({}, forestAreaObject);
                        }
                    }) });
            }
            else {
                return Object.assign({}, state);
            }
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].resetSearchCounrties: {
            return Object.assign(Object.assign({}, state), { searchCountry: null, searchMapCountry: null, searchNextCountry: null, searchPreviousCountry: null });
        }
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].selectCountry: {
            return Object.assign(Object.assign({}, state), { selectedCountry: action.country.clone() });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}
function StateReducerCountryList(state, action) {
    return countryListReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/country-list/country-list.selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/country-list/country-list.selectors.ts ***!
  \**************************************************************/
/*! exports provided: selectStateCountryList, selectCountryListIsLoading, selectCountryList, selectCountryListIsInitedCountries, selectCountriesForestAreaData, selectIsInitedCountriesForestAreaData, selectCapitalsCoordinatesData, selectIsInitedCapitalsCoordinatesData, selectSubRegionsCountries, selectSearchCountry, selectSearchPreviousCountry, selectSearchNextCountry, selectIsCountrySearchLoading, selectIsMapMode, selectIsGlobeMode, selectIsShowCapitalsMode, selectSearchMapCountry, selectSelectedCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStateCountryList", function() { return selectStateCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryListIsLoading", function() { return selectCountryListIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryList", function() { return selectCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryListIsInitedCountries", function() { return selectCountryListIsInitedCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountriesForestAreaData", function() { return selectCountriesForestAreaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsInitedCountriesForestAreaData", function() { return selectIsInitedCountriesForestAreaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCapitalsCoordinatesData", function() { return selectCapitalsCoordinatesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsInitedCapitalsCoordinatesData", function() { return selectIsInitedCapitalsCoordinatesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubRegionsCountries", function() { return selectSubRegionsCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchCountry", function() { return selectSearchCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchPreviousCountry", function() { return selectSearchPreviousCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchNextCountry", function() { return selectSearchNextCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsCountrySearchLoading", function() { return selectIsCountrySearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsMapMode", function() { return selectIsMapMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsGlobeMode", function() { return selectIsGlobeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsShowCapitalsMode", function() { return selectIsShowCapitalsMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchMapCountry", function() { return selectSearchMapCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedCountry", function() { return selectSelectedCountry; });
/* harmony import */ var _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list.reducer */ "./src/app/store/country-list/country-list.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const selectStateCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListFeatureKey"]);
const selectCountryListIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isLoading);
const selectCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.countryList);
const selectCountryListIsInitedCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isInitedCountries);
const selectCountriesForestAreaData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.countriesForestAreaData);
const selectIsInitedCountriesForestAreaData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isInitedCountriesForestAreaData);
const selectCapitalsCoordinatesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.capitalsCoordinatesData);
const selectIsInitedCapitalsCoordinatesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isInitedCapitalsCoordinatesData);
const selectSubRegionsCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.subRegionsCountries);
const selectSearchCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.searchCountry);
const selectSearchPreviousCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.searchPreviousCountry);
const selectSearchNextCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.searchNextCountry);
const selectIsCountrySearchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isSearchLoading);
const selectIsMapMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isMapMode);
const selectIsGlobeMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isGlobeMode);
const selectIsShowCapitalsMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.isShowCapitalsMode);
const selectSearchMapCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.searchMapCountry);
const selectSelectedCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, (state) => state.selectedCountry);


/***/ }),

/***/ "./src/app/store/country-list/index.ts":
/*!*********************************************!*\
  !*** ./src/app/store/country-list/index.ts ***!
  \*********************************************/
/*! exports provided: countryListFeatureKey, countryListReducer, StateReducerCountryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list.reducer */ "./src/app/store/country-list/country-list.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryListFeatureKey", function() { return _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryListReducer", function() { return _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerCountryList", function() { return _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerCountryList"]; });




/***/ }),

/***/ "./src/app/store/donation-list/donation-list.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/donation-list/donation-list.actions.ts ***!
  \**************************************************************/
/*! exports provided: donationListActionsType, InitDonationListAction, InitDonationListSuccessAction, InitNewUserDonationBeforeRegistrationAction, MakeDonationAction, DeleteDonationAction, InitNewCountryForDonationAction, DeleteNewCountryForDonationAction, InitDonationCurrentCountryAction, InitUserDonationListAction, InitUserDonationListSuccessAction, InitAllDonatorsDataByCostAction, InitAllDonatorsDataByTreeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donationListActionsType", function() { return donationListActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDonationListAction", function() { return InitDonationListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDonationListSuccessAction", function() { return InitDonationListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitNewUserDonationBeforeRegistrationAction", function() { return InitNewUserDonationBeforeRegistrationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeDonationAction", function() { return MakeDonationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDonationAction", function() { return DeleteDonationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitNewCountryForDonationAction", function() { return InitNewCountryForDonationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNewCountryForDonationAction", function() { return DeleteNewCountryForDonationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDonationCurrentCountryAction", function() { return InitDonationCurrentCountryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserDonationListAction", function() { return InitUserDonationListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserDonationListSuccessAction", function() { return InitUserDonationListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByCostAction", function() { return InitAllDonatorsDataByCostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByTreeAction", function() { return InitAllDonatorsDataByTreeAction; });
var donationListActionsType;
(function (donationListActionsType) {
    donationListActionsType["initDonationList"] = "[DONATION-LIST/API] Init-Donation-List Donation-List";
    donationListActionsType["InitDonationListSuccess"] = "[DONATION-LIST/API] Init-Donation-List-Success Donation-List";
    donationListActionsType["initNewUserDonationBeforeRegistration"] = "[DONATION-LIST/API] Init-New-User-Donation Donation-List";
    donationListActionsType["makeDonation"] = "[DONATION-LIST/API] Make-Donation Donation-List";
    donationListActionsType["deleteDonation"] = "[DONATION-LIST/API] Delete-Donation Donation-List";
    donationListActionsType["initNewCountryForDonation"] = "[DONATION-LIST/API] Init-New-Country-For-Donation Donation-List";
    donationListActionsType["deleteNewCountryForDonation"] = "[DONATION-LIST/API] Delete-New-Country-For-Donation Donation-List";
    donationListActionsType["initDonationCurrentCountry"] = "[DONATION-LIST/API] Init-Donation-Current-Country Donation-List";
    donationListActionsType["initUserDonationList"] = "[DONATION-LIST/API] Init-User-Donation-List Donation-List";
    donationListActionsType["initUserDonationListSuccess"] = "[DONATION-LIST/API]  Init-User-Donation-List-Success Donation-List";
    donationListActionsType["initAllDonatorsDataByCost"] = "[DONATION-LIST/API] Init-All-Donators-Data-By-Cost Donation-List";
    donationListActionsType["initAllDonatorsDataByTree"] = "[DONATION-LIST/API] Init-All-Donators-Data-By-Tree Donation-List";
})(donationListActionsType || (donationListActionsType = {}));
// tslint:disable-next-line: max-classes-per-file
class InitDonationListAction {
    constructor() {
        this.type = donationListActionsType.initDonationList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitDonationListSuccessAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.InitDonationListSuccess;
    }
    get donationList() {
        return this._payload.donationList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitNewUserDonationBeforeRegistrationAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.initNewUserDonationBeforeRegistration;
    }
    get newDonation() {
        return this._payload.donation;
    }
}
// tslint:disable-next-line: max-classes-per-file
class MakeDonationAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.makeDonation;
    }
    get donation() {
        return this._payload.donation;
    }
    get userId() {
        return this._payload.userId;
    }
}
// tslint:disable-next-line: max-classes-per-file
class DeleteDonationAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.deleteDonation;
    }
    get donation() {
        return this._payload.donation;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitNewCountryForDonationAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.initNewCountryForDonation;
    }
    get newCountry() {
        return this._payload.country;
    }
}
// tslint:disable-next-line: max-classes-per-file
class DeleteNewCountryForDonationAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.deleteNewCountryForDonation;
    }
    get newCountry() {
        return this._payload.country;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitDonationCurrentCountryAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.initDonationCurrentCountry;
    }
    get donation() {
        return this._payload.donation;
    }
    get country() {
        return this._payload.country;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitUserDonationListAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.initUserDonationList;
    }
    get id() {
        return this._payload.id;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitUserDonationListSuccessAction {
    constructor() {
        this.type = donationListActionsType.initUserDonationListSuccess;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitAllDonatorsDataByCostAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.initAllDonatorsDataByCost;
    }
    get userList() {
        return this._payload.userList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitAllDonatorsDataByTreeAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationListActionsType.initAllDonatorsDataByTree;
    }
    get userList() {
        return this._payload.userList;
    }
}


/***/ }),

/***/ "./src/app/store/donation-list/donation-list.effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/donation-list/donation-list.effects.ts ***!
  \**************************************************************/
/*! exports provided: DonationListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationListEffects", function() { return DonationListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _donation_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donation-list.actions */ "./src/app/store/donation-list/donation-list.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/donation-list/donation-list-data.service */ "./src/app/services/donation-list/donation-list-data.service.ts");








class DonationListEffects {
    constructor(_actions$, _donationListDataService) {
        this._actions$ = _actions$;
        this._donationListDataService = _donationListDataService;
    }
    loadDonationList() {
        return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_donation_list_actions__WEBPACK_IMPORTED_MODULE_3__["donationListActionsType"].initDonationList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this._donationListDataService.loadDonationList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((donationList) => {
            return new _donation_list_actions__WEBPACK_IMPORTED_MODULE_3__["InitDonationListSuccessAction"]({ donationList });
        }))));
    }
}
DonationListEffects.ɵfac = function DonationListEffects_Factory(t) { return new (t || DonationListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_5__["DonationListDataService"])); };
DonationListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DonationListEffects, factory: DonationListEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], DonationListEffects.prototype, "loadDonationList", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DonationListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: src_app_services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_5__["DonationListDataService"] }]; }, { loadDonationList: [] }); })();


/***/ }),

/***/ "./src/app/store/donation-list/donation-list.facade.ts":
/*!*************************************************************!*\
  !*** ./src/app/store/donation-list/donation-list.facade.ts ***!
  \*************************************************************/
/*! exports provided: FacadeServiceDonationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeServiceDonationList", function() { return FacadeServiceDonationList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-list.actions */ "./src/app/store/donation-list/donation-list.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class FacadeServiceDonationList {
    constructor(_store$) {
        this._store$ = _store$;
    }
    initNewUserDonationBeforeRegistration(donation) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewUserDonationBeforeRegistrationAction"]({ donation }));
    }
    makeDonation(donation, userId) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["MakeDonationAction"]({ donation, userId }));
    }
    deleteDonation(donation) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteDonationAction"]({ donation }));
    }
    initNewCountryForDonation(country) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewCountryForDonationAction"]({ country }));
    }
    initDonationCurrentCountry(donation, country) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitDonationCurrentCountryAction"]({ donation, country }));
    }
    initUserDonationList(id) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserDonationListAction"]({ id }));
    }
    initUserDonationListSuccess() {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserDonationListSuccessAction"]());
    }
    initDonationList() {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitDonationListAction"]());
    }
    deleteNewCountryForDonation(country) {
        this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteNewCountryForDonationAction"]({ country }));
    }
}
FacadeServiceDonationList.ɵfac = function FacadeServiceDonationList_Factory(t) { return new (t || FacadeServiceDonationList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
FacadeServiceDonationList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacadeServiceDonationList, factory: FacadeServiceDonationList.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceDonationList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/donation-list/donation-list.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/donation-list/donation-list.reducer.ts ***!
  \**************************************************************/
/*! exports provided: donationListFeatureKey, donationListReducer, StateReducerDonationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donationListFeatureKey", function() { return donationListFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donationListReducer", function() { return donationListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReducerDonationList", function() { return StateReducerDonationList; });
/* harmony import */ var _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-list.actions */ "./src/app/store/donation-list/donation-list.actions.ts");

const donationListFeatureKey = 'DONATION-LIST';
const initialState = {
    isLoading: true,
    isInitedDonationList: false,
    isInitedDonationListBeforRegistration: false,
    isInitedCountriesForDonation: false,
    isInitedUserDonationList: false,
    donationList: null,
    beforeRegistrationUserDonationList: null,
    countriesForDonation: null,
    userDonationList: null,
};
function donationListReducer(state = initialState, action) {
    switch (action.type) {
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initDonationList: {
            return Object.assign({}, state);
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].InitDonationListSuccess: {
            return Object.assign(Object.assign({}, state), { isLoading: false, isInitedDonationList: true, donationList: [...action.donationList].filter((donation) => Boolean(donation)) });
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initNewUserDonationBeforeRegistration: {
            const newDonationListBeforeRegistration = (Boolean(state.beforeRegistrationUserDonationList)) ?
                [...state.beforeRegistrationUserDonationList, action.newDonation.clone()]
                : [action.newDonation.clone()];
            return Object.assign(Object.assign({}, state), { isInitedDonationListBeforRegistration: true, beforeRegistrationUserDonationList: [...newDonationListBeforeRegistration] });
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].makeDonation: {
            const newCurrentUserDonation = action.donation.clone();
            newCurrentUserDonation.id = action.userId;
            const newDonationList = (Boolean(state.donationList)) ?
                [...state.donationList, newCurrentUserDonation.clone()]
                : [newCurrentUserDonation.clone()];
            const newUserDonationList = (Boolean(state.userDonationList)) ?
                [...state.userDonationList, newCurrentUserDonation.clone()]
                : [newCurrentUserDonation.clone()];
            const newBeforeRegistrationUserDonationList = [...state.beforeRegistrationUserDonationList].filter((donation) => {
                if (!donation.equals(action.donation)) {
                    return donation;
                }
            });
            const isInitedDonationListAfterMakeDonation = (Boolean(newBeforeRegistrationUserDonationList.length))
                ? true : false;
            return Object.assign(Object.assign({}, state), { donationList: [...newDonationList], userDonationList: [...newUserDonationList], beforeRegistrationUserDonationList: [...newBeforeRegistrationUserDonationList], isInitedDonationListBeforRegistration: isInitedDonationListAfterMakeDonation });
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].deleteDonation: {
            const newBeforeRegistrationUserDonationList = [...state.beforeRegistrationUserDonationList].filter((donation) => {
                if (!donation.equals(action.donation)) {
                    return donation;
                }
            });
            const isInitedDonationListAfterDeleteDonation = (Boolean(newBeforeRegistrationUserDonationList.length))
                ? true
                : false;
            return Object.assign(Object.assign({}, state), { beforeRegistrationUserDonationList: [...newBeforeRegistrationUserDonationList], isInitedDonationListBeforRegistration: isInitedDonationListAfterDeleteDonation });
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initNewCountryForDonation: {
            if (Boolean(state.countriesForDonation)) {
                return Object.assign(Object.assign({}, state), { countriesForDonation: [...state.countriesForDonation, action.newCountry.clone()] });
            }
            else {
                return Object.assign(Object.assign({}, state), { isInitedCountriesForDonation: true, countriesForDonation: [action.newCountry.clone()] });
            }
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].deleteNewCountryForDonation: {
            const searchNewCountryList = [...state.countriesForDonation].filter((country) => {
                return !country.equals(action.newCountry);
            });
            if (Boolean(searchNewCountryList.length)) {
                return Object.assign(Object.assign({}, state), { countriesForDonation: [...searchNewCountryList] });
            }
            else {
                return Object.assign(Object.assign({}, state), { isInitedCountriesForDonation: false, countriesForDonation: null });
            }
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initDonationCurrentCountry: {
            const newBeforeRegistrationUserDonationList = [...state.beforeRegistrationUserDonationList].map((donation) => {
                if (donation.equals(action.donation)) {
                    const newDonation = donation.clone();
                    newDonation.country = action.country;
                    return newDonation;
                }
                else {
                    return donation;
                }
            });
            return Object.assign(Object.assign({}, state), { isInitedCountriesForDonation: true, beforeRegistrationUserDonationList: [...newBeforeRegistrationUserDonationList] });
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initUserDonationList: {
            return Object.assign(Object.assign({}, state), { userDonationList: [...state.donationList].filter((donation) => {
                    if (donation.id === action.id) {
                        return donation.clone();
                    }
                }) });
        }
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initUserDonationListSuccess: {
            let isUserDonationListInited;
            if (Boolean(state.userDonationList)) {
                isUserDonationListInited = (Boolean(state.userDonationList.length))
                    ? true
                    : false;
            }
            return Object.assign(Object.assign({}, state), { isInitedUserDonationList: isUserDonationListInited });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}
function StateReducerDonationList(state, action) {
    return donationListReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/donation-list/donation-list.selectors.ts":
/*!****************************************************************!*\
  !*** ./src/app/store/donation-list/donation-list.selectors.ts ***!
  \****************************************************************/
/*! exports provided: selectStateDonationList, selectDonationListBeforeRegistration, selectCountriesForDonation, selectIsInitedDonationListBeforeRegistration, selectIsInitedCountriesForDonation, selectDonationList, selectUserDonationList, selectIsInitedUserDonationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStateDonationList", function() { return selectStateDonationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDonationListBeforeRegistration", function() { return selectDonationListBeforeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountriesForDonation", function() { return selectCountriesForDonation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsInitedDonationListBeforeRegistration", function() { return selectIsInitedDonationListBeforeRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsInitedCountriesForDonation", function() { return selectIsInitedCountriesForDonation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDonationList", function() { return selectDonationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserDonationList", function() { return selectUserDonationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsInitedUserDonationList", function() { return selectIsInitedUserDonationList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _donation_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-list.reducer */ "./src/app/store/donation-list/donation-list.reducer.ts");


const selectStateDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_donation_list_reducer__WEBPACK_IMPORTED_MODULE_1__["donationListFeatureKey"]);
const selectDonationListBeforeRegistration = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.beforeRegistrationUserDonationList);
const selectCountriesForDonation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.countriesForDonation);
const selectIsInitedDonationListBeforeRegistration = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.isInitedDonationListBeforRegistration);
const selectIsInitedCountriesForDonation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.isInitedCountriesForDonation);
const selectDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.donationList);
const selectUserDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.userDonationList);
const selectIsInitedUserDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, (state) => state.isInitedUserDonationList);


/***/ }),

/***/ "./src/app/store/donation-list/index.ts":
/*!**********************************************!*\
  !*** ./src/app/store/donation-list/index.ts ***!
  \**********************************************/
/*! exports provided: donationListFeatureKey, donationListReducer, StateReducerDonationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-list.reducer */ "./src/app/store/donation-list/donation-list.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationListFeatureKey", function() { return _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationListReducer", function() { return _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerDonationList", function() { return _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerDonationList"]; });




/***/ }),

/***/ "./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts ***!
  \**********************************************************************************/
/*! exports provided: donationStatisticListActionsType, InitUserListDonationStatisticListAction, InitDonationListDonationStatisticListAction, InitAllDonatorsDataByCostDonationStatisticListAction, InitAllDonatorsDataByTreeDonationStatisticListAction, SortTopDonationStatisticListAction, SortBottomDonationStatisticListAction, InitAllCountriesDataByCostDonationStatisticListAction, InitAllCountriesDataByTreeDonationStatisticListAction, InitTopTenDataStatisticDonationStatisticListAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListActionsType", function() { return donationStatisticListActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserListDonationStatisticListAction", function() { return InitUserListDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDonationListDonationStatisticListAction", function() { return InitDonationListDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByCostDonationStatisticListAction", function() { return InitAllDonatorsDataByCostDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByTreeDonationStatisticListAction", function() { return InitAllDonatorsDataByTreeDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortTopDonationStatisticListAction", function() { return SortTopDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortBottomDonationStatisticListAction", function() { return SortBottomDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAllCountriesDataByCostDonationStatisticListAction", function() { return InitAllCountriesDataByCostDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitAllCountriesDataByTreeDonationStatisticListAction", function() { return InitAllCountriesDataByTreeDonationStatisticListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitTopTenDataStatisticDonationStatisticListAction", function() { return InitTopTenDataStatisticDonationStatisticListAction; });
var donationStatisticListActionsType;
(function (donationStatisticListActionsType) {
    donationStatisticListActionsType["initUserList"] = "[DONATION-STATISTIC-LIST/API] Init-User-List Donation-Statistic-List";
    donationStatisticListActionsType["initDonationList"] = "[DONATION-STATISTIC-LIST/API] Init-Donation-List Donation-Statistic-List";
    donationStatisticListActionsType["initAllDonatorsDataByCost"] = "[DONATION-STATISTIC-LIST/API] Init-All-Donators-Data-By-Cost Donation-Statistic-List";
    donationStatisticListActionsType["initAllDonatorsDataByTree"] = "[DONATION-STATISTIC-LIST/API] Init-All-Donators-Data-By-Tree Donation-Statistic-List";
    donationStatisticListActionsType["initTopTenDataStatistic"] = "[DONATION-STATISTIC-LIST/API] Init-Top-10-Data-Statistic Donation-Statistic-List";
    donationStatisticListActionsType["sortTop"] = "[DONATION-STATISTIC-LIST/API] Sort-Top Donation-Statistic-List";
    donationStatisticListActionsType["sortBottom"] = "[DONATION-STATISTIC-LIST/API] Sort-Bottom Donation-Statistic-List";
    donationStatisticListActionsType["initAllCountriesDataByCost"] = "[DONATION-STATISTIC-LIST/API] Init-All-Countries-Data-By-Cost Donation-Statistic-List";
    donationStatisticListActionsType["initAllCountriesDataByTree"] = "[DONATION-STATISTIC-LIST/API] Init-All-Countries-Data-By-Tree Donation-Statistic-List";
})(donationStatisticListActionsType || (donationStatisticListActionsType = {}));
// tslint:disable-next-line: max-classes-per-file
class InitUserListDonationStatisticListAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationStatisticListActionsType.initUserList;
    }
    get userList() {
        return this._payload.userList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitDonationListDonationStatisticListAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = donationStatisticListActionsType.initDonationList;
    }
    get donationList() {
        return this._payload.donationList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitAllDonatorsDataByCostDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.initAllDonatorsDataByCost;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitAllDonatorsDataByTreeDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.initAllDonatorsDataByTree;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SortTopDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.sortTop;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SortBottomDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.sortBottom;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitAllCountriesDataByCostDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.initAllCountriesDataByCost;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitAllCountriesDataByTreeDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.initAllCountriesDataByTree;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitTopTenDataStatisticDonationStatisticListAction {
    constructor() {
        this.type = donationStatisticListActionsType.initTopTenDataStatistic;
    }
}


/***/ }),

/***/ "./src/app/store/donation-statistic-list/donation-statistic-list.facade.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/store/donation-statistic-list/donation-statistic-list.facade.ts ***!
  \*********************************************************************************/
/*! exports provided: FacadeServiceDonationStatisticList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeServiceDonationStatisticList", function() { return FacadeServiceDonationStatisticList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-statistic-list.actions */ "./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts");
/* harmony import */ var src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/donation-statistic-list/statistic-element-type */ "./src/app/models/donation-statistic-list/statistic-element-type.ts");
/* harmony import */ var src_app_models_donation_statistic_list_statistic_sub_category_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/donation-statistic-list/statistic-sub-category-type */ "./src/app/models/donation-statistic-list/statistic-sub-category-type.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");






class FacadeServiceDonationStatisticList {
    constructor(_store$) {
        this._store$ = _store$;
    }
    initUserList(userList) {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserListDonationStatisticListAction"]({ userList }));
    }
    initDonationList(donationList) {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitDonationListDonationStatisticListAction"]({ donationList }));
    }
    initAllDonatorsDataByCost() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllDonatorsDataByCostDonationStatisticListAction"]());
    }
    initAllDonatorsDataByTree() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllDonatorsDataByTreeDonationStatisticListAction"]());
    }
    initTopTenDataStatistic() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitTopTenDataStatisticDonationStatisticListAction"]());
    }
    sortTopDonationStatisticList() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["SortTopDonationStatisticListAction"]());
    }
    sortBottomDonationStatisticList() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["SortBottomDonationStatisticListAction"]());
    }
    initAllCountriesDataByCost() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllCountriesDataByCostDonationStatisticListAction"]());
    }
    initAllCountriesDataByTree() {
        this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllCountriesDataByTreeDonationStatisticListAction"]());
    }
    initDonatorsData(statisticSubCategory, statisticElement) {
        if (statisticSubCategory === src_app_models_donation_statistic_list_statistic_sub_category_type__WEBPACK_IMPORTED_MODULE_3__["StatisticSubCategoryType"].AD) {
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BC) {
                this.initAllDonatorsDataByCost();
                this.sortTopDonationStatisticList();
            }
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BT) {
                this.initAllDonatorsDataByTree();
                this.sortTopDonationStatisticList();
            }
        }
        if (statisticSubCategory === src_app_models_donation_statistic_list_statistic_sub_category_type__WEBPACK_IMPORTED_MODULE_3__["StatisticSubCategoryType"].TD) {
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BC) {
                this.initAllDonatorsDataByCost();
                this.sortTopDonationStatisticList();
                this.initTopTenDataStatistic();
            }
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BT) {
                this.initAllDonatorsDataByTree();
                this.sortTopDonationStatisticList();
                this.initTopTenDataStatistic();
            }
        }
    }
    initCountriesData(statisticSubCategory, statisticElement) {
        if (statisticSubCategory === src_app_models_donation_statistic_list_statistic_sub_category_type__WEBPACK_IMPORTED_MODULE_3__["StatisticSubCategoryType"].AC) {
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BC) {
                this.initAllCountriesDataByCost();
                this.sortTopDonationStatisticList();
            }
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BT) {
                this.initAllCountriesDataByTree();
                this.sortTopDonationStatisticList();
            }
        }
        if (statisticSubCategory === src_app_models_donation_statistic_list_statistic_sub_category_type__WEBPACK_IMPORTED_MODULE_3__["StatisticSubCategoryType"].TC) {
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BC) {
                this.initAllCountriesDataByCost();
                this.sortTopDonationStatisticList();
                this.initTopTenDataStatistic();
            }
            if (statisticElement === src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__["StatisticElementType"].BT) {
                this.initAllCountriesDataByTree();
                this.sortTopDonationStatisticList();
                this.initTopTenDataStatistic();
            }
        }
    }
}
FacadeServiceDonationStatisticList.ɵfac = function FacadeServiceDonationStatisticList_Factory(t) { return new (t || FacadeServiceDonationStatisticList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
FacadeServiceDonationStatisticList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacadeServiceDonationStatisticList, factory: FacadeServiceDonationStatisticList.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceDonationStatisticList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts ***!
  \**********************************************************************************/
/*! exports provided: donationStatisticListFeatureKey, donationStatisticListReducer, StateReducerDonationStatisticList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListFeatureKey", function() { return donationStatisticListFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListReducer", function() { return donationStatisticListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReducerDonationStatisticList", function() { return StateReducerDonationStatisticList; });
/* harmony import */ var _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-statistic-list.actions */ "./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts");

const donationStatisticListFeatureKey = 'DONATION-STATISTIC-LIST';
const initialState = {
    isInitedUserList: false,
    isInitedDonationList: false,
    isInitedAllDataStatistic: false,
    isInitedTopTenDataStatistic: false,
    isInitedStatisticDataByCost: false,
    isInitedStatisticDataByTree: false,
    isSortedByIncrease: false,
    isSortedByDecrease: false,
    userList: null,
    donationList: null,
    statisticData: null
};
function donationStatisticListReducer(state = initialState, action) {
    switch (action.type) {
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initUserList: {
            return Object.assign(Object.assign({}, state), { userList: [...action.userList], isInitedUserList: true });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initDonationList: {
            return Object.assign(Object.assign({}, state), { donationList: [...action.donationList], isInitedDonationList: true });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllDonatorsDataByCost: {
            const allDonatorsStatisticDataByCost = [...state.userList].map((user) => {
                const space = ' ';
                const userFullName = user.name + space + user.surName;
                let userTotalDonationCost = 0;
                const userProfileImage = user.profileImage;
                [...state.donationList].map((donation) => {
                    if (user.id === donation.id) {
                        userTotalDonationCost += Number(donation.treeDonation.cost);
                    }
                });
                if (Boolean(userTotalDonationCost)) {
                    return {
                        name: userFullName,
                        points: userTotalDonationCost,
                        bullet: userProfileImage
                    };
                }
                else {
                    return null;
                }
            }).filter((donator) => Boolean(donator));
            return Object.assign(Object.assign({}, state), { statisticData: [...allDonatorsStatisticDataByCost], isInitedAllDataStatistic: true, isInitedTopTenDataStatistic: false, isInitedStatisticDataByCost: true, isInitedStatisticDataByTree: false, isSortedByIncrease: false, isSortedByDecrease: false });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllDonatorsDataByTree: {
            const allDonatorsStatisticDataByTree = [...state.userList].map((user) => {
                const space = ' ';
                const userFullName = user.name + space + user.surName;
                let userTotalDonationTreeAmount = 0;
                const userProfileImage = user.profileImage;
                [...state.donationList].map((donation) => {
                    if (user.id === donation.id) {
                        userTotalDonationTreeAmount += Number(donation.treeDonation.amount);
                    }
                });
                if (Boolean(userTotalDonationTreeAmount)) {
                    return {
                        name: userFullName,
                        points: userTotalDonationTreeAmount,
                        bullet: userProfileImage
                    };
                }
                else {
                    return null;
                }
            }).filter((donator) => Boolean(donator));
            return Object.assign(Object.assign({}, state), { statisticData: [...allDonatorsStatisticDataByTree], isInitedAllDataStatistic: true, isInitedTopTenDataStatistic: false, isInitedStatisticDataByCost: false, isInitedStatisticDataByTree: true, isSortedByIncrease: false, isSortedByDecrease: false });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initTopTenDataStatistic: {
            const dataStatisticNumber = 11;
            return Object.assign(Object.assign({}, state), { statisticData: [...state.statisticData].reverse()
                    .slice(0, dataStatisticNumber).reverse(), isInitedAllDataStatistic: false, isInitedTopTenDataStatistic: true });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].sortTop: {
            return Object.assign(Object.assign({}, state), { statisticData: [...state.statisticData].sort((statistic, currentStatistic) => {
                    return (statistic.points > currentStatistic.points) ? 1 : -1;
                }), isSortedByIncrease: true, isSortedByDecrease: false });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].sortBottom: {
            return Object.assign(Object.assign({}, state), { statisticData: [...state.statisticData].sort((statistic, currentStatistic) => {
                    return (statistic.points > currentStatistic.points) ? -1 : 1;
                }), isSortedByIncrease: false, isSortedByDecrease: true });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllCountriesDataByCost: {
            const uniqueCountryNameList = [];
            const donationsStatisticDataByTree = [...state.donationList].map((donation) => {
                const takeNumberWordsInCountryName = 2;
                const currentCountryName = donation.country.name;
                const isCountryNameInUniqueCountryNameList = uniqueCountryNameList.filter((countryName) => {
                    if (Boolean(countryName) && currentCountryName === countryName) {
                        return countryName;
                    }
                });
                if (!Boolean(isCountryNameInUniqueCountryNameList.length)) {
                    uniqueCountryNameList.push(currentCountryName);
                    const statisticCountryName = currentCountryName.split(' ').slice(0, takeNumberWordsInCountryName).join(' ');
                    let currentCountryCostAmount = 0;
                    [...state.donationList].map((currentDonation) => {
                        if (currentDonation.country.name === currentCountryName) {
                            currentCountryCostAmount += Number(currentDonation.treeDonation.cost);
                        }
                    });
                    return {
                        name: statisticCountryName,
                        points: currentCountryCostAmount,
                        bullet: donation.country.flag
                    };
                }
            }).filter((donation) => Boolean(donation));
            return Object.assign(Object.assign({}, state), { statisticData: [...donationsStatisticDataByTree], isInitedAllDataStatistic: true, isInitedTopTenDataStatistic: false, isInitedStatisticDataByCost: true, isInitedStatisticDataByTree: false, isSortedByIncrease: false, isSortedByDecrease: false });
        }
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllCountriesDataByTree: {
            const uniqueCountryNameList = [];
            const donationsStatisticDataByTree = [...state.donationList].map((donation) => {
                const takeNumberWordsInCountryName = 2;
                const currentCountryName = donation.country.name;
                const isCountryNameInUniqueCountryNameList = uniqueCountryNameList.filter((countryName) => {
                    if (Boolean(countryName) && currentCountryName === countryName) {
                        return countryName;
                    }
                });
                if (!Boolean(isCountryNameInUniqueCountryNameList.length)) {
                    uniqueCountryNameList.push(currentCountryName);
                    const statisticCountryName = currentCountryName.split(' ').slice(0, takeNumberWordsInCountryName).join(' ');
                    let currentCountryTreeAmount = 0;
                    [...state.donationList].map((currentDonation) => {
                        if (currentDonation.country.name === currentCountryName) {
                            currentCountryTreeAmount += Number(currentDonation.treeDonation.amount);
                        }
                    });
                    return {
                        name: statisticCountryName,
                        points: currentCountryTreeAmount,
                        bullet: donation.country.flag
                    };
                }
            }).filter((donation) => Boolean(donation));
            return Object.assign(Object.assign({}, state), { statisticData: [...donationsStatisticDataByTree], isInitedAllDataStatistic: true, isInitedTopTenDataStatistic: false, isInitedStatisticDataByCost: false, isInitedStatisticDataByTree: true, isSortedByIncrease: false, isSortedByDecrease: false });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}
function StateReducerDonationStatisticList(state, action) {
    return donationStatisticListReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/donation-statistic-list/index.ts":
/*!********************************************************!*\
  !*** ./src/app/store/donation-statistic-list/index.ts ***!
  \********************************************************/
/*! exports provided: donationStatisticListFeatureKey, donationStatisticListReducer, StateReducerDonationStatisticList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-statistic-list.reducer */ "./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListFeatureKey", function() { return _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListReducer", function() { return _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerDonationStatisticList", function() { return _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerDonationStatisticList"]; });




/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: countryListFeatureKey, countryListReducer, StateReducerCountryList, treeListFeatureKey, treeListReducer, StateReducerTreeList, userListFeatureKey, userListReducer, StateReducerUserList, donationListFeatureKey, donationListReducer, StateReducerDonationList, donationStatisticListFeatureKey, donationStatisticListReducer, StateReducerDonationStatisticList, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _country_list_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list/country-list.reducer */ "./src/app/store/country-list/country-list.reducer.ts");
/* harmony import */ var _tree_list_tree_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-list/tree-list.reducer */ "./src/app/store/tree-list/tree-list.reducer.ts");
/* harmony import */ var _user_list_user_list_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/user-list.reducer */ "./src/app/store/user-list/user-list.reducer.ts");
/* harmony import */ var _donation_list_donation_list_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donation-list/donation-list.reducer */ "./src/app/store/donation-list/donation-list.reducer.ts");
/* harmony import */ var _donation_statistic_list_donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donation-statistic-list/donation-statistic-list.reducer */ "./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts");
/* harmony import */ var _country_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country-list */ "./src/app/store/country-list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryListFeatureKey", function() { return _country_list__WEBPACK_IMPORTED_MODULE_5__["countryListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countryListReducer", function() { return _country_list__WEBPACK_IMPORTED_MODULE_5__["countryListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerCountryList", function() { return _country_list__WEBPACK_IMPORTED_MODULE_5__["StateReducerCountryList"]; });

/* harmony import */ var _tree_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-list */ "./src/app/store/tree-list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeListFeatureKey", function() { return _tree_list__WEBPACK_IMPORTED_MODULE_6__["treeListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeListReducer", function() { return _tree_list__WEBPACK_IMPORTED_MODULE_6__["treeListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerTreeList", function() { return _tree_list__WEBPACK_IMPORTED_MODULE_6__["StateReducerTreeList"]; });

/* harmony import */ var _user_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list */ "./src/app/store/user-list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userListFeatureKey", function() { return _user_list__WEBPACK_IMPORTED_MODULE_7__["userListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userListReducer", function() { return _user_list__WEBPACK_IMPORTED_MODULE_7__["userListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerUserList", function() { return _user_list__WEBPACK_IMPORTED_MODULE_7__["StateReducerUserList"]; });

/* harmony import */ var _donation_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./donation-list */ "./src/app/store/donation-list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationListFeatureKey", function() { return _donation_list__WEBPACK_IMPORTED_MODULE_8__["donationListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationListReducer", function() { return _donation_list__WEBPACK_IMPORTED_MODULE_8__["donationListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerDonationList", function() { return _donation_list__WEBPACK_IMPORTED_MODULE_8__["StateReducerDonationList"]; });

/* harmony import */ var _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./donation-statistic-list */ "./src/app/store/donation-statistic-list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListFeatureKey", function() { return _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__["donationStatisticListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "donationStatisticListReducer", function() { return _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__["donationStatisticListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerDonationStatisticList", function() { return _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__["StateReducerDonationStatisticList"]; });











const reducers = {
    [_country_list_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListFeatureKey"]]: _country_list_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerCountryList"],
    [_tree_list_tree_list_reducer__WEBPACK_IMPORTED_MODULE_1__["treeListFeatureKey"]]: _tree_list_tree_list_reducer__WEBPACK_IMPORTED_MODULE_1__["StateReducerTreeList"],
    [_user_list_user_list_reducer__WEBPACK_IMPORTED_MODULE_2__["userListFeatureKey"]]: _user_list_user_list_reducer__WEBPACK_IMPORTED_MODULE_2__["StateReducerUserList"],
    [_donation_list_donation_list_reducer__WEBPACK_IMPORTED_MODULE_3__["donationListFeatureKey"]]: _donation_list_donation_list_reducer__WEBPACK_IMPORTED_MODULE_3__["StateReducerDonationList"],
    [_donation_statistic_list_donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_4__["donationStatisticListFeatureKey"]]: _donation_statistic_list_donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_4__["StateReducerDonationStatisticList"]
};


/***/ }),

/***/ "./src/app/store/tree-list/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/tree-list/index.ts ***!
  \******************************************/
/*! exports provided: treeListFeatureKey, treeListReducer, StateReducerTreeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-list.reducer */ "./src/app/store/tree-list/tree-list.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeListFeatureKey", function() { return _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["treeListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeListReducer", function() { return _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["treeListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerTreeList", function() { return _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerTreeList"]; });




/***/ }),

/***/ "./src/app/store/tree-list/tree-list.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/tree-list/tree-list.actions.ts ***!
  \******************************************************/
/*! exports provided: treeListActionsType, InitTreeListAction, InitTreeListSuccessAction, IsTreesLoadingSuccessAction, SearchTreeCategoryTreesAction, SearchTreeAction, SearchTreeSuccessAction, TreeRouterModeAction, GoFromTreeRouterAction, IsSelectedTreeForDonationAction, SelectTreeProductAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeListActionsType", function() { return treeListActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitTreeListAction", function() { return InitTreeListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitTreeListSuccessAction", function() { return InitTreeListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTreesLoadingSuccessAction", function() { return IsTreesLoadingSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTreeCategoryTreesAction", function() { return SearchTreeCategoryTreesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTreeAction", function() { return SearchTreeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTreeSuccessAction", function() { return SearchTreeSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeRouterModeAction", function() { return TreeRouterModeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoFromTreeRouterAction", function() { return GoFromTreeRouterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSelectedTreeForDonationAction", function() { return IsSelectedTreeForDonationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTreeProductAction", function() { return SelectTreeProductAction; });
var treeListActionsType;
(function (treeListActionsType) {
    treeListActionsType["initTrees"] = "[TREE-LIST/API] Init-Trees Tree-List";
    treeListActionsType["initTreesSuccess"] = "[TREE-LIST/API] Init-Trees-Success Tree-List";
    treeListActionsType["isTreesLoadingSuccess"] = "[TREE-LIST/API] Is-Loading-Success Tree-List";
    treeListActionsType["searchTreeCategoryTrees"] = "[TREE-LIST/API] Search-Tree-Category-Trees Tree-list";
    treeListActionsType["searchTree"] = "[TREE-LIST/API] Search-Tree Tree-List";
    treeListActionsType["searchTreeSuccess"] = "[TREE-LIST/API] Search-Tree-Success Tree-List";
    treeListActionsType["treeRouterMode"] = "[TREE-LIST/API] Tree-Router-Mode Tree-List";
    treeListActionsType["goFromTreeRouterMode"] = "[TREE-LIST/API] Go-From-Tree-Router-Mode Tree-List";
    treeListActionsType["isSelectedTreeForDonation"] = "[TREE-LIST/API] Is-Selected-Tree-For-Donation Tree-List";
    treeListActionsType["selectTreeProduct"] = "[COUNTRY-LIST/API] Select-Tree-Product Tree-List";
})(treeListActionsType || (treeListActionsType = {}));
class InitTreeListAction {
    constructor() {
        this.type = treeListActionsType.initTrees;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitTreeListSuccessAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = treeListActionsType.initTreesSuccess;
    }
    get treeList() {
        return this._payload.treeList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class IsTreesLoadingSuccessAction {
    constructor() {
        this.type = treeListActionsType.isTreesLoadingSuccess;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchTreeCategoryTreesAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = treeListActionsType.searchTreeCategoryTrees;
    }
    get treeCategory() {
        return this._payload.treeCategory;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchTreeAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = treeListActionsType.searchTree;
    }
    get name() {
        return this._payload.name;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SearchTreeSuccessAction {
    constructor() {
        this.type = treeListActionsType.searchTreeSuccess;
    }
}
// tslint:disable-next-line: max-classes-per-file
class TreeRouterModeAction {
    constructor() {
        this.type = treeListActionsType.treeRouterMode;
    }
}
// tslint:disable-next-line: max-classes-per-file
class GoFromTreeRouterAction {
    constructor() {
        this.type = treeListActionsType.goFromTreeRouterMode;
    }
}
// tslint:disable-next-line: max-classes-per-file
class IsSelectedTreeForDonationAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = treeListActionsType.isSelectedTreeForDonation;
    }
    get treeRouteName() {
        return this._payload.treeRouteName;
    }
    get donationListBeforeRegistration() {
        return this._payload.donationListBeforeRegistration;
    }
}
// tslint:disable-next-line: max-classes-per-file
class SelectTreeProductAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = treeListActionsType.selectTreeProduct;
    }
    get treeProduct() {
        return this._payload.treeProduct;
    }
}


/***/ }),

/***/ "./src/app/store/tree-list/tree-list.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/store/tree-list/tree-list.effects.ts ***!
  \******************************************************/
/*! exports provided: TreeListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListEffects", function() { return TreeListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-list.actions */ "./src/app/store/tree-list/tree-list.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tree-list/tree-data.service */ "./src/app/services/tree-list/tree-data.service.ts");








class TreeListEffects {
    constructor(_actions$, _treeListDataService) {
        this._actions$ = _actions$;
        this._treeListDataService = _treeListDataService;
    }
    loadTreeList() {
        return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_tree_list_actions__WEBPACK_IMPORTED_MODULE_3__["treeListActionsType"].initTrees), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this._treeListDataService.loadTreeList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((treeList) => {
            return new _tree_list_actions__WEBPACK_IMPORTED_MODULE_3__["InitTreeListSuccessAction"]({ treeList });
        }))));
    }
}
TreeListEffects.ɵfac = function TreeListEffects_Factory(t) { return new (t || TreeListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_5__["TreeListDataService"])); };
TreeListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TreeListEffects, factory: TreeListEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], TreeListEffects.prototype, "loadTreeList", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TreeListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_5__["TreeListDataService"] }]; }, { loadTreeList: [] }); })();


/***/ }),

/***/ "./src/app/store/tree-list/tree-list.facade.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/tree-list/tree-list.facade.ts ***!
  \*****************************************************/
/*! exports provided: FacadeServiceTreeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeServiceTreeList", function() { return FacadeServiceTreeList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-list.actions */ "./src/app/store/tree-list/tree-list.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class FacadeServiceTreeList {
    constructor(_store$) {
        this._store$ = _store$;
    }
    searchTree(name) {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SearchTreeAction"]({ name }));
    }
    goToTreeRouterMode() {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["TreeRouterModeAction"]());
    }
    searchTreeSuccess() {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SearchTreeSuccessAction"]());
    }
    searchTreeCategoryTrees(treeCategory) {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SearchTreeCategoryTreesAction"]({ treeCategory }));
    }
    goFromTreeRouter() {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["GoFromTreeRouterAction"]());
    }
    initTreeList() {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitTreeListAction"]());
    }
    treesLoadingSuccess() {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["IsTreesLoadingSuccessAction"]());
    }
    isSelectedTreeForDonation(treeRouteName, donationListBeforeRegistration) {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["IsSelectedTreeForDonationAction"]({ treeRouteName, donationListBeforeRegistration }));
    }
    selectTreeProduct(treeProduct) {
        this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SelectTreeProductAction"]({ treeProduct }));
    }
}
FacadeServiceTreeList.ɵfac = function FacadeServiceTreeList_Factory(t) { return new (t || FacadeServiceTreeList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
FacadeServiceTreeList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacadeServiceTreeList, factory: FacadeServiceTreeList.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceTreeList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/tree-list/tree-list.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/tree-list/tree-list.reducer.ts ***!
  \******************************************************/
/*! exports provided: treeListFeatureKey, treeListReducer, StateReducerTreeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeListFeatureKey", function() { return treeListFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeListReducer", function() { return treeListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReducerTreeList", function() { return StateReducerTreeList; });
/* harmony import */ var _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-list.actions */ "./src/app/store/tree-list/tree-list.actions.ts");

const treeListFeatureKey = 'TREE-LIST';
const initialState = {
    isLoading: true,
    isInitedTrees: false,
    treeList: null,
    treeCategoryTrees: null,
    isSearchLoading: false,
    searchTree: null,
    isTreeRouterMode: false,
    isSelectedTree: false,
    selectedTreeProduct: null
};
function treeListReducer(state = initialState, action) {
    switch (action.type) {
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].initTrees: {
            return Object.assign({}, state);
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].initTreesSuccess: {
            return Object.assign(Object.assign({}, state), { isInitedTrees: true, treeList: [...action.treeList].filter((tree) => Boolean(tree)) });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].isTreesLoadingSuccess: {
            return Object.assign(Object.assign({}, state), { isLoading: false });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].searchTreeCategoryTrees: {
            return Object.assign(Object.assign({}, state), { treeCategoryTrees: [...state.treeList].filter((tree) => {
                    if (tree.type === action.treeCategory) {
                        return tree;
                    }
                }) });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].searchTree: {
            return Object.assign(Object.assign({}, state), { isSearchLoading: true, searchTree: [...state.treeList].find((tree) => {
                    const currentTreeRouterName = tree.name.replace(/\(|\)/g, '')
                        .split(' ')
                        .join('-')
                        .toLowerCase();
                    if (Boolean(tree) && action.name === currentTreeRouterName) {
                        return tree;
                    }
                }) });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].searchTreeSuccess: {
            return Object.assign(Object.assign({}, state), { isSearchLoading: false });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].treeRouterMode: {
            return Object.assign(Object.assign({}, state), { isTreeRouterMode: true });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].goFromTreeRouterMode: {
            return Object.assign(Object.assign({}, state), { isTreeRouterMode: false });
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].isSelectedTreeForDonation: {
            if (Boolean(action.donationListBeforeRegistration)) {
                const selectedTreesForDonation = [...action.donationListBeforeRegistration].map((donation) => {
                    return donation.treeDonation.tree.clone();
                });
                const currentTree = [...selectedTreesForDonation].find((tree) => {
                    const treeRouteName = tree.name.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');
                    if (treeRouteName === action.treeRouteName) {
                        return tree.clone();
                    }
                });
                if (Boolean(currentTree)) {
                    return Object.assign(Object.assign({}, state), { isSelectedTree: true });
                }
                else {
                    return Object.assign(Object.assign({}, state), { isSelectedTree: false });
                }
            }
            else {
                return Object.assign(Object.assign({}, state), { isSelectedTree: false });
            }
        }
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].selectTreeProduct: {
            return Object.assign(Object.assign({}, state), { selectedTreeProduct: action.treeProduct.clone() });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}
function StateReducerTreeList(state, action) {
    return treeListReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/tree-list/tree-list.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/store/tree-list/tree-list.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectStateTreeList, selectTreeListIsLoading, selectTreeList, selectIsInitedTrees, selectTreeCategoryTrees, selectSearchTree, selectIsTreeSearchLoading, selectIsTreeRouterModeAction, selectIsSelectedTree, selectSelectedTreeProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStateTreeList", function() { return selectStateTreeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTreeListIsLoading", function() { return selectTreeListIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTreeList", function() { return selectTreeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsInitedTrees", function() { return selectIsInitedTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTreeCategoryTrees", function() { return selectTreeCategoryTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearchTree", function() { return selectSearchTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsTreeSearchLoading", function() { return selectIsTreeSearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsTreeRouterModeAction", function() { return selectIsTreeRouterModeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsSelectedTree", function() { return selectIsSelectedTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedTreeProduct", function() { return selectSelectedTreeProduct; });
/* harmony import */ var _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-list.reducer */ "./src/app/store/tree-list/tree-list.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const selectStateTreeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["treeListFeatureKey"]);
const selectTreeListIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.isLoading);
const selectTreeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.treeList);
const selectIsInitedTrees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.isInitedTrees);
const selectTreeCategoryTrees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.treeCategoryTrees);
const selectSearchTree = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.searchTree);
const selectIsTreeSearchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.isSearchLoading);
const selectIsTreeRouterModeAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.isTreeRouterMode);
const selectIsSelectedTree = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.isSelectedTree);
const selectSelectedTreeProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, (state) => state.selectedTreeProduct);


/***/ }),

/***/ "./src/app/store/user-list/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/user-list/index.ts ***!
  \******************************************/
/*! exports provided: userListFeatureKey, userListReducer, StateReducerUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.reducer */ "./src/app/store/user-list/user-list.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userListFeatureKey", function() { return _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["userListFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userListReducer", function() { return _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["userListReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateReducerUserList", function() { return _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerUserList"]; });




/***/ }),

/***/ "./src/app/store/user-list/user-list.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/user-list/user-list.actions.ts ***!
  \******************************************************/
/*! exports provided: userListActionsType, InitUserListAction, InitUserListSuccessAction, InitUserAction, InitNewUserAction, InitNewUserProfileImageUserListAction, PickUpPointsFromUserUserListAction, AddMedicalPointsForCurrentUserUserListAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListActionsType", function() { return userListActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserListAction", function() { return InitUserListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserListSuccessAction", function() { return InitUserListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitUserAction", function() { return InitUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitNewUserAction", function() { return InitNewUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitNewUserProfileImageUserListAction", function() { return InitNewUserProfileImageUserListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickUpPointsFromUserUserListAction", function() { return PickUpPointsFromUserUserListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedicalPointsForCurrentUserUserListAction", function() { return AddMedicalPointsForCurrentUserUserListAction; });
var userListActionsType;
(function (userListActionsType) {
    userListActionsType["initUser"] = "[USER-LIST/API] Init-User User-List";
    userListActionsType["initNewUser"] = "[USER-LIST/API] Init-New-User User-List";
    userListActionsType["initUserList"] = "[USER-LIST/API] Init-User-List User-List";
    userListActionsType["initUserListSuccess"] = "[USER-LIST/API] Init-User-List-Success User-List";
    userListActionsType["initNewUserProfileImage"] = "[USER-LIST/API] Init-New-User-Profile-Image User-List";
    userListActionsType["pickUpPointsFromUser"] = "[USER-LIST/API] Pick-Up-Points-From-User User-List";
    userListActionsType["addMedicalPointsForCurrentUser"] = "[USER-LIST/API] Add-Medical-Points-For-Current-User User-List";
})(userListActionsType || (userListActionsType = {}));
// tslint:disable-next-line: max-classes-per-file
class InitUserListAction {
    constructor() {
        this.type = userListActionsType.initUserList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitUserListSuccessAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = userListActionsType.initUserListSuccess;
    }
    get userList() {
        return this._payload.userList;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitUserAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = userListActionsType.initUser;
    }
    get user() {
        return this._payload.user;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitNewUserAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = userListActionsType.initNewUser;
    }
    get user() {
        return this._payload.user;
    }
}
// tslint:disable-next-line: max-classes-per-file
class InitNewUserProfileImageUserListAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = userListActionsType.initNewUserProfileImage;
    }
    get newImage() {
        return this._payload.newImage;
    }
}
// tslint:disable-next-line: max-classes-per-file
class PickUpPointsFromUserUserListAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = userListActionsType.pickUpPointsFromUser;
    }
    get userId() {
        return this._payload.userId;
    }
    get medicalPoints() {
        return this._payload.medicalPoints;
    }
}
// tslint:disable-next-line: max-classes-per-file
class AddMedicalPointsForCurrentUserUserListAction {
    constructor(_payload) {
        this._payload = _payload;
        this.type = userListActionsType.addMedicalPointsForCurrentUser;
    }
    get medicalPoints() {
        return this._payload.medicalPoints;
    }
}


/***/ }),

/***/ "./src/app/store/user-list/user-list.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/store/user-list/user-list.effects.ts ***!
  \******************************************************/
/*! exports provided: UserListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListEffects", function() { return UserListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _user_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list.actions */ "./src/app/store/user-list/user-list.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-list/user-data.service */ "./src/app/services/user-list/user-data.service.ts");








class UserListEffects {
    constructor(_actions$, _userListDataService) {
        this._actions$ = _actions$;
        this._userListDataService = _userListDataService;
    }
    loadUserList() {
        return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_list_actions__WEBPACK_IMPORTED_MODULE_3__["userListActionsType"].initUserList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this._userListDataService.loadUserList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((userList) => {
            return new _user_list_actions__WEBPACK_IMPORTED_MODULE_3__["InitUserListSuccessAction"]({ userList });
        }))));
    }
}
UserListEffects.ɵfac = function UserListEffects_Factory(t) { return new (t || UserListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserListDataService"])); };
UserListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserListEffects, factory: UserListEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserListEffects.prototype, "loadUserList", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: src_app_services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserListDataService"] }]; }, { loadUserList: [] }); })();


/***/ }),

/***/ "./src/app/store/user-list/user-list.facade.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/user-list/user-list.facade.ts ***!
  \*****************************************************/
/*! exports provided: FacadeServiceUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeServiceUserList", function() { return FacadeServiceUserList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.actions */ "./src/app/store/user-list/user-list.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class FacadeServiceUserList {
    constructor(_store$) {
        this._store$ = _store$;
    }
    changeCurrentUserImage(image) {
        this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewUserProfileImageUserListAction"]({ newImage: image }));
    }
    pickUpPointsFromUser(userId, medicalPoints) {
        this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["PickUpPointsFromUserUserListAction"]({ userId, medicalPoints }));
    }
    addMedicalPointsForCurrentUser(medicalPoints) {
        this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["AddMedicalPointsForCurrentUserUserListAction"]({ medicalPoints }));
    }
    initUser(user) {
        this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserAction"]({ user }));
    }
    initNewUser(user) {
        this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewUserAction"]({ user }));
    }
    initUserList() {
        this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserListAction"]());
    }
}
FacadeServiceUserList.ɵfac = function FacadeServiceUserList_Factory(t) { return new (t || FacadeServiceUserList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
FacadeServiceUserList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacadeServiceUserList, factory: FacadeServiceUserList.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceUserList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/user-list/user-list.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/user-list/user-list.reducer.ts ***!
  \******************************************************/
/*! exports provided: userListFeatureKey, userListReducer, StateReducerUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListFeatureKey", function() { return userListFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userListReducer", function() { return userListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateReducerUserList", function() { return StateReducerUserList; });
/* harmony import */ var _user_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.actions */ "./src/app/store/user-list/user-list.actions.ts");

const userListFeatureKey = 'USER-LIST';
const initialState = {
    isLoading: true,
    userList: null,
    user: null
};
function userListReducer(state = initialState, action) {
    switch (action.type) {
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initUserList: {
            return Object.assign({}, state);
        }
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initUserListSuccess: {
            return Object.assign(Object.assign({}, state), { isLoading: false, userList: [...action.userList] });
        }
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initUser: {
            return Object.assign(Object.assign({}, state), { user: action.user.clone() });
        }
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initNewUser: {
            return Object.assign(Object.assign({}, state), { userList: [...state.userList, action.user.clone()] });
        }
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initNewUserProfileImage: {
            const newUser = state.user.clone();
            newUser.profileImage = action.newImage;
            return Object.assign(Object.assign({}, state), { user: newUser.clone() });
        }
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].pickUpPointsFromUser: {
            const currentUser = [...state.userList].find((user) => user.id === action.userId).clone();
            currentUser.medicalPoints = currentUser.medicalPoints - action.medicalPoints;
            return Object.assign(Object.assign({}, state), { userList: [...state.userList].map((user) => {
                    if (user.id === action.userId) {
                        return currentUser.clone();
                    }
                    else {
                        return user.clone();
                    }
                }), user: currentUser.clone() });
        }
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].addMedicalPointsForCurrentUser: {
            const currentUser = state.user.clone();
            currentUser.medicalPoints = currentUser.medicalPoints + action.medicalPoints;
            return Object.assign(Object.assign({}, state), { userList: [...state.userList].map((user) => {
                    if (user.id === currentUser.id) {
                        return currentUser.clone();
                    }
                    else {
                        return user.clone();
                    }
                }), user: currentUser.clone() });
        }
        default: {
            return Object.assign({}, state);
        }
    }
}
function StateReducerUserList(state, action) {
    return userListReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/user-list/user-list.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/store/user-list/user-list.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectStateUserList, selectUser, selectUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStateUserList", function() { return selectStateUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserList", function() { return selectUserList; });
/* harmony import */ var _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.reducer */ "./src/app/store/user-list/user-list.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const selectStateUserList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["userListFeatureKey"]);
const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateUserList, (state) => state.user);
const selectUserList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateUserList, (state) => state.userList);


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\EPAM training\save-our-planet\save-our-planet-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map