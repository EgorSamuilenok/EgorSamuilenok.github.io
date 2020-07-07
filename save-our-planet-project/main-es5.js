function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-country-map-country-map-module */
        [__webpack_require__.e("default~components-country-map-country-map-module~components-donation-statistic-list-donation-statis~fa421834"), __webpack_require__.e("components-country-map-country-map-module")]).then(__webpack_require__.bind(null,
        /*! ./components/country-map/country-map.module */
        "./src/app/components/country-map/country-map.module.ts")).then(function (m) {
          return m.CountryMapModule;
        });
      }
    }, {
      path: 'countries',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-country-list-country-list-country-list-module */
        "components-country-list-country-list-country-list-module").then(__webpack_require__.bind(null,
        /*! ./components/country-list/country-list/country-list.module */
        "./src/app/components/country-list/country-list/country-list.module.ts")).then(function (m) {
          return m.CountryListModule;
        });
      }
    }, {
      path: 'trees',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-tree-list-tree-list-tree-list-module */
        [__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-tree-list-tree-list-tree-list-module")]).then(__webpack_require__.bind(null,
        /*! ./components/tree-list//tree-list/tree-list.module */
        "./src/app/components/tree-list/tree-list/tree-list.module.ts")).then(function (m) {
          return m.TreeListModule;
        });
      }
    }, {
      path: 'donation-statistic',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-donation-statistic-list-donation-statistic-donation-statistic-module */
        [__webpack_require__.e("default~components-country-map-country-map-module~components-donation-statistic-list-donation-statis~fa421834"), __webpack_require__.e("components-donation-statistic-list-donation-statistic-donation-statistic-module")]).then(__webpack_require__.bind(null,
        /*! ./components/donation-statistic-list/donation-statistic/donation-statistic.module */
        "./src/app/components/donation-statistic-list/donation-statistic/donation-statistic.module.ts")).then(function (m) {
          return m.DonationStatisticModule;
        });
      }
    }, {
      path: 'user-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-user-list-user-profile-user-profile-module */
        [__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-user-list-user-profile-user-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./components/user-list/user-profile/user-profile.module */
        "./src/app/components/user-list/user-profile/user-profile.module.ts")).then(function (m) {
          return m.UserProfileModule;
        });
      }
    }, {
      path: 'registration',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-user-list-registration-registration-module */
        [__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-user-list-registration-registration-module")]).then(__webpack_require__.bind(null,
        /*! ./components/user-list/registration/registration.module */
        "./src/app/components/user-list/registration/registration.module.ts")).then(function (m) {
          return m.RegistrationModule;
        });
      }
    }, {
      path: 'donation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-donation-list-donation-list-before-registration-donation-list-before-registration-module */
        "components-donation-list-donation-list-before-registration-donation-list-before-registration-module").then(__webpack_require__.bind(null,
        /*! ./components/donation-list/donation-list-before-registration/donation-list-before-registration.module */
        "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.module.ts")).then(function (m) {
          return m.DonationListBeforeRegistrationModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-about-about-module */
        "components-about-about-module").then(__webpack_require__.bind(null,
        /*! ./components/about/about.module */
        "./src/app/components/about/about.module.ts")).then(function (m) {
          return m.AboutModule;
        });
      }
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-contacts-contacts-module */
        [__webpack_require__.e("default~components-contacts-contacts-module~components-tree-list-tree-list-tree-list-module~componen~d9ee68cd"), __webpack_require__.e("components-contacts-contacts-module")]).then(__webpack_require__.bind(null,
        /*! ./components/contacts/contacts.module */
        "./src/app/components/contacts/contacts.module.ts")).then(function (m) {
          return m.ContactsModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'not-found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./store/country-list/country-list.selectors */
    "./src/app/store/country-list/country-list.selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/tree-list/tree-list.selectors */
    "./src/app/store/tree-list/tree-list.selectors.ts");
    /* harmony import */


    var _store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/user-list/user-list.selectors */
    "./src/app/store/user-list/user-list.selectors.ts");
    /* harmony import */


    var _store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/donation-list/donation-list.selectors */
    "./src/app/store/donation-list/donation-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/country-list/country-list.facade */
    "./src/app/store/country-list/country-list.facade.ts");
    /* harmony import */


    var _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/tree-list/tree-list.facade */
    "./src/app/store/tree-list/tree-list.facade.ts");
    /* harmony import */


    var _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/user-list/user-list.facade */
    "./src/app/store/user-list/user-list.facade.ts");
    /* harmony import */


    var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/donation-list/donation-list.facade */
    "./src/app/store/donation-list/donation-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    function AppComponent_div_0_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " About ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Countries ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Trees ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Registration ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_9_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contacts ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_0_ng_container_9_Template, 20, 2, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation_menu-mode", ctx_r0.menuMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__profile-button_menu-mode", ctx_r0.menuMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__donation-button_menu-mode", ctx_r0.menuMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-navigation__statistic-button_menu-mode", ctx_r0.menuMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.menuMode);
      }
    }

    function AppComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Now loading ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(store$, _facadeCountryListService, _facadeTreeListService, _facadeUserListService, _facadeDonationListService) {
        _classCallCheck(this, AppComponent);

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

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.store$.select(_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (userList) {
            if (!Boolean(userList)) {
              _this._facadeUserListService.initUserList();
            }
          });
          this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (countryList) {
            if (Boolean(countryList)) {
              _this._countryList = countryList;
            } else {
              _this._facadeCountryListService.initCountryList();
            }
          });
          this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCapitalsCoordinatesData"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (capitalsCoordinatesData) {
            if (capitalsCoordinatesData) {
              _this._facadeCountryListService.saveCapitalsCoordinatesData(capitalsCoordinatesData);
            }
          });
          this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryListIsLoading"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isLoading) {
            _this.isLoading = isLoading;
          });
          this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryListIsInitedCountries"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedCountries) {
            if (isInitedCountries) {
              _this._facadeCountryListService.initCapitalsCoordinatesData(_this._countryList);

              _this._facadeCountryListService.initCountriesForestAreaData();
            }
          });
          this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCountriesForestAreaData"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedCountriesForestAreaData) {
            if (isInitedCountriesForestAreaData) {
              _this._facadeCountryListService.initCountriesForestArea();
            }
          });
          this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCapitalsCoordinatesData"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedCapitalsCoordinatesData) {
            if (isInitedCapitalsCoordinatesData) {
              _this._facadeCountryListService.initCapitalsCoordinates();
            }
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCountriesForestAreaData"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)), this.store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCapitalsCoordinatesData"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$))]).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                isInitedCountriesForestAreaData = _ref2[0],
                isInitedCapitalsCoordinatesData = _ref2[1];

            if (isInitedCountriesForestAreaData && isInitedCapitalsCoordinatesData) {
              _this._facadeCountryListService.countriesLoadingSuccess();
            }
          });
          this.store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectIsInitedTrees"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedTrees) {
            if (isInitedTrees) {
              _this._facadeTreeListService.treesLoadingSuccess();
            }
          });
          this.store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectTreeList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (treeList) {
            if (!Boolean(treeList)) {
              _this._facadeTreeListService.initTreeList();
            }
          });
          this.store$.select(_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_6__["selectDonationList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (donationList) {
            if (!Boolean(donationList)) {
              _this._facadeDonationListService.initDonationList();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "toggleMenuMode",
        value: function toggleMenuMode() {
          var appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');
          appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
          this.menuMode = !this.menuMode;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_10__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_11__["FacadeServiceDonationList"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 50,
      vars: 2,
      consts: [["class", "-app", 4, "ngIf"], [1, "-app-loading__representation", "-app-loading__representation_cinema"], [1, "-app-loading__present-title"], [1, "-app-loading__sub-title"], [1, "-app-loading__sub-title_first"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-s"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-a"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-v"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_first-e"], [1, "-app-loading__sub-title_second"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_second-o"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_second-u"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_second-r"], [1, "-app-loading__sub-title_third"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-p"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-l"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-a"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-n"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-e"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_third-t"], [1, "-app-loading__sub-title_fourth"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-p"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-r"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-o"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-j"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-e"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-c"], [1, "-app-loading__sub-title-letter", "-app-loading__sub-title_fourth-t"], ["class", "-app-loading", 4, "ngIf"], [1, "-app"], [1, "-app-navigation"], ["title", "profile", "routerLinkActive", "active", "routerLink", "/user-profile", 1, "-app-navigation__profile-button"], ["title", "donate", "routerLinkActive", "active", "routerLink", "/donation", 1, "-app-navigation__donation-button"], ["title", "donation statistic", "routerLinkActive", "active", "routerLink", "/donation-statistic", 1, "-app-navigation__statistic-button"], [1, "-app-navigation__button", 3, "click"], [1, "-app-navigation__button-line", "-app-navigation__button-line_top"], [1, "-app-navigation__button-line", "-app-navigation__button-line_middle"], [1, "-app-navigation__button-line", "-app-navigation__button-line_bottom"], [4, "ngIf"], [1, "-app-router-outlet"], [1, "-app-navigation__menu"], [1, "-app-navigation__item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/about", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/countries", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/trees", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/registration", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], ["routerLink", "/contacts", "routerLinkActive", "active", 1, "-app-navigation__item-link", 3, "click"], [1, "-app-loading"], [1, "-app-loading__title"], [1, "-app-loading__line"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 12, 9, "div", 0);

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n}\n@-webkit-keyframes menuLinksFromBottomToTop {\n  0% {\n    top: 100%;\n    right: 0%;\n    transform: translate(0%, 50%);\n  }\n  100% {\n    top: 50%;\n    right: 0%;\n    transform: translate(0%, -50%);\n  }\n}\n@keyframes menuLinksFromBottomToTop {\n  0% {\n    top: 100%;\n    right: 0%;\n    transform: translate(0%, 50%);\n  }\n  100% {\n    top: 50%;\n    right: 0%;\n    transform: translate(0%, -50%);\n  }\n}\n@-webkit-keyframes menuLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes menuLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes blinkLoading {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes blinkLoading {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);\n  }\n}\n@-webkit-keyframes loadingLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes loadingLine {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes endLoadingRepresentation {\n  0% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  50% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    display: none;\n    z-index: -9999;\n  }\n}\n@keyframes endLoadingRepresentation {\n  0% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n  }\n  50% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    display: none;\n    z-index: -9999;\n  }\n}\n@-webkit-keyframes blinkDonationButton {\n  0% {\n    color: white;\n  }\n  100% {\n    color: lime;\n  }\n}\n@keyframes blinkDonationButton {\n  0% {\n    color: white;\n  }\n  100% {\n    color: lime;\n  }\n}\n.-app[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n}\n.-app-navigation[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 120px;\n  height: 100%;\n  transition: 0.4s;\n  border-right: 3px solid white;\n  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.4);\n  background-color: black;\n}\n.-app-navigation_menu-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #cfffc0;\n}\n.-app-navigation_menu-mode[_ngcontent-%COMP%]   .-app-navigation__button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-navigation_menu-mode[_ngcontent-%COMP%]   .-app-navigation__button-line_top[_ngcontent-%COMP%] {\n  transform-origin: left top;\n  transform: translate(11px, -4px) rotate(45deg);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-navigation_menu-mode[_ngcontent-%COMP%]   .-app-navigation__button-line_middle[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n.-app-navigation_menu-mode[_ngcontent-%COMP%]   .-app-navigation__button-line_bottom[_ngcontent-%COMP%] {\n  transform-origin: right bottom;\n  transform: translate(-6px, -40px) rotate(-45deg);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%] {\n  transition: 0.4s;\n}\n.-app-navigation__profile-button.active[_ngcontent-%COMP%]::before, .-app-navigation__donation-button.active[_ngcontent-%COMP%]::before, .-app-navigation__statistic-button.active[_ngcontent-%COMP%]::before {\n  color: #6cdb6c;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%] {\n  top: 5%;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2BD\";\n}\n.-app-navigation__donation-button[_ngcontent-%COMP%] {\n  top: 15%;\n}\n.-app-navigation__donation-button_blinking[_ngcontent-%COMP%]::before {\n  -webkit-animation: 1s blinkDonationButton 6 0.3s alternate;\n  animation: 1s blinkDonationButton 6 0.3s alternate;\n}\n.-app-navigation__donation-button[_ngcontent-%COMP%]::before {\n  content: \"\uF4C0\";\n  font-weight: 900;\n}\n.-app-navigation__statistic-button[_ngcontent-%COMP%] {\n  top: 27%;\n}\n.-app-navigation__statistic-button[_ngcontent-%COMP%]::before {\n  content: \"\uF080\";\n  font-weight: 900;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%], .-app-navigation__donation-button[_ngcontent-%COMP%], .-app-navigation__statistic-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  transform: translate(-50%, 0%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  transition: 0.5s;\n  cursor: pointer;\n  text-decoration: none;\n}\n.-app-navigation__profile-button[_ngcontent-%COMP%]::before, .-app-navigation__donation-button[_ngcontent-%COMP%]::before, .-app-navigation__statistic-button[_ngcontent-%COMP%]::before {\n  color: white;\n  font-size: 40px;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-navigation__profile-button_menu-mode[_ngcontent-%COMP%], .-app-navigation__donation-button_menu-mode[_ngcontent-%COMP%], .-app-navigation__statistic-button_menu-mode[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-navigation__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60px;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.-app-navigation__button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-navigation__button-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 60px;\n  height: 7px;\n  margin: 5px 0px;\n  transition: 0.4s;\n  border-radius: 3px;\n  background-color: white;\n}\n.-app-navigation__menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n}\n.-app-navigation__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  margin-right: 150px;\n  padding: 35px 0px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.-app-navigation__item-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  box-sizing: content-box;\n  -webkit-animation: 1.5s menuLinksFromBottomToTop;\n  animation: 1.5s menuLinksFromBottomToTop;\n  transition: 0.2s;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.9);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 70px;\n  font-weight: 600;\n}\n.-app-navigation__item-link.active[_ngcontent-%COMP%]::before {\n  transform: translate(-50%, 0%) scale(1, 1);\n}\n.-app-navigation__item-link[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n}\n.-app-navigation__item-link[_ngcontent-%COMP%]:hover::before {\n  transform: translate(-50%, 0%) scale(1, 1);\n}\n.-app-navigation__item-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -5%;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(0, 1);\n  display: block;\n  width: 100%;\n  height: 4px;\n  -webkit-animation: 0.8s menuLine;\n  animation: 0.8s menuLine;\n  transition: 0.2s;\n  background-color: black;\n}\n.-app-router-outlet[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 120px;\n  box-sizing: border-box;\n}\n.-app-loading[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10000;\n  width: 100%;\n  height: 100vh;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: black;\n}\n.-app-loading__representation[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9999;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100vh;\n  background-color: black;\n}\n.-app-loading__representation.-app-loading__representation_cinema[_ngcontent-%COMP%] {\n  -webkit-animation: 3s endLoadingRepresentation 18s forwards;\n  animation: 3s endLoadingRepresentation 18s forwards;\n}\n.-app-loading__title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 47%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-animation: 1.5s blinkLoading 4  backwards;\n  animation: 1.5s blinkLoading 4  backwards;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  font-size: 20px;\n}\n.-app-loading__line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 3px;\n  -webkit-animation: 3s 2 alternate loadingLine;\n          animation: 3s 2 alternate loadingLine;\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 0.5);\n          animation-timing-function: cubic-bezier(1, 0, 0, 0.5);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-color: #5bdb34;\n}\n.-app-loading__present-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-animation: 3s 2 alternate blinkLoading 6.5s;\n  animation: 3s 2 alternate blinkLoading 6.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  letter-spacing: 5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-loading__sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.6);\n  letter-spacing: 3px;\n  font-size: 20px;\n}\n.-app-loading__sub-title-letter[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  font-size: 26px;\n}\n.-app-loading__sub-title_first[_ngcontent-%COMP%], .-app-loading__sub-title_second[_ngcontent-%COMP%], .-app-loading__sub-title_third[_ngcontent-%COMP%], .-app-loading__sub-title_fourth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  padding: 0px 7px;\n}\n.-app-loading__sub-title_first-s[_ngcontent-%COMP%] {\n  -webkit-animation: 6s blinkLoading 12s;\n  animation: 6s blinkLoading 12s;\n}\n.-app-loading__sub-title_first-a[_ngcontent-%COMP%] {\n  -webkit-animation: 5s blinkLoading 13s;\n  animation: 5s blinkLoading 13s;\n}\n.-app-loading__sub-title_first-v[_ngcontent-%COMP%] {\n  -webkit-animation: 3.5s blinkLoading 14.5s;\n  animation: 3.5s blinkLoading 14.5s;\n}\n.-app-loading__sub-title_first-e[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_second[_ngcontent-%COMP%] {\n  position: relative;\n}\n.-app-loading__sub-title_second-o[_ngcontent-%COMP%] {\n  -webkit-animation: 5.5s blinkLoading 12.5s;\n  animation: 5.5s blinkLoading 12.5s;\n}\n.-app-loading__sub-title_second-u[_ngcontent-%COMP%] {\n  -webkit-animation: 5s blinkLoading 13s;\n  animation: 5s blinkLoading 13s;\n}\n.-app-loading__sub-title_second-r[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_third-p[_ngcontent-%COMP%] {\n  -webkit-animation: 3.5s blinkLoading 14.5s;\n  animation: 3.5s blinkLoading 14.5s;\n}\n.-app-loading__sub-title_third-l[_ngcontent-%COMP%] {\n  -webkit-animation: 5s blinkLoading 13s;\n  animation: 5s blinkLoading 13s;\n}\n.-app-loading__sub-title_third-a[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_third-n[_ngcontent-%COMP%] {\n  -webkit-animation: 5.5s blinkLoading 12.5s;\n  animation: 5.5s blinkLoading 12.5s;\n}\n.-app-loading__sub-title_third-e[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_third-t[_ngcontent-%COMP%] {\n  -webkit-animation: 4s blinkLoading 14s;\n  animation: 4s blinkLoading 14s;\n}\n.-app-loading__sub-title_fourth-p[_ngcontent-%COMP%] {\n  -webkit-animation: 6s blinkLoading 12s;\n  animation: 6s blinkLoading 12s;\n}\n.-app-loading__sub-title_fourth-r[_ngcontent-%COMP%] {\n  -webkit-animation: 4s blinkLoading 14s;\n  animation: 4s blinkLoading 14s;\n}\n.-app-loading__sub-title_fourth-o[_ngcontent-%COMP%] {\n  -webkit-animation: 5.5s blinkLoading 12.5s;\n  animation: 5.5s blinkLoading 12.5s;\n}\n.-app-loading__sub-title_fourth-j[_ngcontent-%COMP%] {\n  -webkit-animation: 3s blinkLoading 15s;\n  animation: 3s blinkLoading 15s;\n}\n.-app-loading__sub-title_fourth-e[_ngcontent-%COMP%] {\n  -webkit-animation: 4s blinkLoading 14s;\n  animation: 4s blinkLoading 14s;\n}\n.-app-loading__sub-title_fourth-c[_ngcontent-%COMP%] {\n  -webkit-animation: 4.5s blinkLoading 13.5s;\n  animation: 4.5s blinkLoading 13.5s;\n}\n.-app-loading__sub-title_fourth-t[_ngcontent-%COMP%] {\n  -webkit-animation: 3s blinkLoading 15s;\n  animation: 3s blinkLoading 15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ29FaEI7RUFDSSxjQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FEbkVKO0FDc0NJO0VBaUNBO0lBQ0ksU0FBQTtJQUNBLFNBQUE7SUE3REosNkJBOER1QjtFRC9EekI7RUNpRUU7SUFDSSxRQUFBO0lBQ0EsU0FBQTtJQWxFSiw4QkFtRXVCO0VEM0R6QjtBQUNGO0FDNkJJO0VBcUJBO0lBQ0ksU0FBQTtJQUNBLFNBQUE7SUE3REosNkJBOER1QjtFRGlCekI7RUNmRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBbEVKLDhCQW1FdUI7RURxQnpCO0FBQ0Y7QUMvREk7RUE4Q0E7SUFDSSxTQUFBO0VEb0JOO0VDbEJFO0lBQ0ksV0FBQTtFRG9CTjtBQUNGO0FDM0RJO0VBa0NBO0lBQ0ksU0FBQTtFRG9ETjtFQ2xERTtJQUNJLFdBQUE7RURvRE47QUFDRjtBQ3ZHSTtFQXVEQTtJQXJFQSxVQXNFcUI7SUFwRXJCLHdCQUFBO0VEd0hGO0VDbERFO0lBeEVBLFVBeUVxQjtJQXZFckIsMEJBQUE7SUF3RUksaURBQUE7RURxRE47QUFDRjtBQ3RHSTtFQTJDQTtJQXJFQSxVQXNFcUI7SUFwRXJCLHdCQUFBO0VEb0tGO0VDOUZFO0lBeEVBLFVBeUVxQjtJQXZFckIsMEJBQUE7SUF3RUksaURBQUE7RURpR047QUFDRjtBQzlKSTtFQWlFQTtJQUNJLFNBQUE7RURnR047RUM5RkU7SUFDSSxXQUFBO0VEZ0dOO0FBQ0Y7QUMxSkk7RUFxREE7SUFDSSxTQUFBO0VEZ0lOO0VDOUhFO0lBQ0ksV0FBQTtFRGdJTjtBQUNGO0FDdE1JO0VBMEVBO0lBeEZBLFVBeUZxQjtJQXZGckIsMEJBQUE7RUR1TkY7RUM5SEU7SUEzRkEsVUE0RnFCO0lBMUZyQix3QkFBQTtFRDJORjtFQy9IRTtJQTlGQSxVQStGcUI7SUE3RnJCLHdCQUFBO0lBK0ZJLGFBQUE7SUFFQSxjQUFBO0VEZ0lOO0FBQ0Y7QUMxTUk7RUE4REE7SUF4RkEsVUF5RnFCO0lBdkZyQiwwQkFBQTtFRHVSRjtFQzlMRTtJQTNGQSxVQTRGcUI7SUExRnJCLHdCQUFBO0VEMlJGO0VDL0xFO0lBOUZBLFVBK0ZxQjtJQTdGckIsd0JBQUE7SUErRkksYUFBQTtJQUVBLGNBQUE7RURnTU47QUFDRjtBQ3RSSTtFQTBGQTtJQUNJLFlBcklBO0VEb1VOO0VDN0xFO0lBQ0ksV0FsSUQ7RURpVUw7QUFDRjtBQ2xSSTtFQThFQTtJQUNJLFlBcklBO0VEb1dOO0VDN05FO0lBQ0ksV0FsSUQ7RURpV0w7QUFDRjtBQzVOQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUQ0Tko7QUMzTkk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBeklKLDhCQTBJdUI7RUFFbkIsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQXpJSixnQkEySUk7RUFFQSw2QkFBQTtFQUNBLDBDQUFBO0VBRUEsdUJBdEtBO0FEc1lSO0FDL05RO0VBQ0ksV0FBQTtFQUVBLHlCQXJLRDtBRHFZWDtBQzlOZ0I7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEZ09wQjtBQzdOb0I7RUE1SWhCLDBCQTZJb0I7RUFuS3BCLDhDQW9LdUM7RUFFbkIsb0NBbkxOO0FEeVpsQjtBQ3BPb0I7RUF4S2hCLG1CQXlLdUM7QUQwTzNDO0FDeE9vQjtFQUdJLDhCQUFBO0VBOUtwQixnREErS3VDO0VBRW5CLG9DQTlMTjtBRDJhbEI7QUN4T1E7RUE5S0osZ0JBaUxRO0FENE9aO0FDMU9nQjtFQUNJLGNBbk1OO0FEK2FkO0FDeE9RO0VBQ0ksT0FBQTtBRDBPWjtBQ3pPWTtFQUNJLFlBQUE7QUQyT2hCO0FDeE9RO0VBQ0ksUUFBQTtBRDBPWjtBQ3hPZ0I7RUE3SmQsMERBQUE7RUFJQSxrREFBQTtBRHdZRjtBQzNPWTtFQUNJLFlBQUE7RUFFQSxnQkFBQTtBRDRPaEI7QUN6T1E7RUFDSSxRQUFBO0FEMk9aO0FDMU9ZO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FEMk9oQjtBQ3hPUTtFQUdJLGtCQUFBO0VBQ0EsVUFBQTtFQS9OUiw4QkFnTzJCO0VBRW5CLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUEvTlIsZ0JBaU9RO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0FENE9aO0FDM09ZO0VBQ0ksWUE5UFI7RUErUFEsZUFBQTtFQUNBLDJEQUFBO0FENk9oQjtBQzNPWTtFQUNJLGFBQUE7RUF2T1osVUF5TzZCO0VBdk83Qix3QkFBQTtBRG9kSjtBQzFPUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUEzUFIsZ0NBNFAyQjtFQUVuQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBelBSLGdCQTJQUTtFQUNBLGVBQUE7QURrUFo7QUNqUFk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEbVBoQjtBQ2pQWTtFQUNJLGNBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFyUVosZ0JBdVFZO0VBRUEsa0JBQUE7RUFFQSx1QkFuU1I7QURzaEJSO0FDaFBRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0FEaVBaO0FDL09RO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FEZ1BaO0FDL09ZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTNTWiw4QkE0UytCO0VBRW5CLHVCQUFBO0VBbFFkLGdEQUFBO0VBSUEsd0NBQUE7RUF4Q0UsZ0JBeVNZO0VBQ0EsZUFBQTtFQUVBLHlCQWpVRTtFQW1VRixxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEeVBoQjtBQ3ZQb0I7RUEzVGhCLDBDQTRUdUM7QUQ2UDNDO0FDMVBnQjtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQ0FBQTtBRDRQcEI7QUMzUG9CO0VBbFVoQiwwQ0FtVXVDO0FEaVEzQztBQzlQZ0I7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQTNVaEIsMENBNFVtQztFQUVuQixjQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFyU2xCLGdDQUFBO0VBSUEsd0JBQUE7RUF4Q0UsZ0JBNFVnQjtFQUVBLHVCQXBXWjtBRDJtQlI7QUNsUUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURtUVI7QUNqUUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsdUJBNVhBO0FENG5CUjtBQy9QUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQXRZSjtBRHFvQlI7QUM5UFk7RUE3VVYsMkRBQUE7RUFJQSxtREFBQTtBRDhrQkY7QUNqUVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBaFlSLGdDQWlZMkI7RUFyWDNCLFVBdVh5QjtFQXJYekIsd0JBQUE7RUE4QkYsaURBQUE7RUFJQSx5Q0FBQTtFQXdWVSxZQXhaSjtFQXlaSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEd1FaO0FDdFFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQWpaUixnQ0FrWjJCO0VBRW5CLFdBQUE7RUFFQSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsNkRBQUE7VUFBQSxxREFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFFQSx5QkFsYUU7QUQycUJkO0FDdlFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQS9aUixnQ0FnYTJCO0VBcFg3QixtREFBQTtFQUlBLDJDQUFBO0VBcENFLFVBdVp5QjtFQXJaekIsd0JBQUE7RUFzWlEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxZQXRiSjtFQXViSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGdSWjtBQzlRUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBL2FSLGdDQWdiMkI7RUFFbkIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFFQSxZQTFjSjtFQTJjSSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRGdSWjtBQy9RWTtFQUNJLGdCQUFBO0VBbmJaLFVBcWI2QjtFQW5iN0Isd0JBQUE7RUFxYlksZUFBQTtBRGdSaEI7QUM5UVk7RUFJSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBRDRRaEI7QUN6UWdCO0VBcmFkLHNDQUFBO0VBSUEsOEJBQUE7QURpckJGO0FDN1FnQjtFQXhhZCxzQ0FBQTtFQUlBLDhCQUFBO0FEd3JCRjtBQ2pSZ0I7RUEzYWQsMENBQUE7RUFJQSxrQ0FBQTtBRCtyQkY7QUNyUmdCO0VBOWFkLDBDQUFBO0VBSUEsa0NBQUE7QURzc0JGO0FDeFJZO0VBQ0ksa0JBQUE7QUQwUmhCO0FDelJnQjtFQXBiZCwwQ0FBQTtFQUlBLGtDQUFBO0FEZ3RCRjtBQzdSZ0I7RUF2YmQsc0NBQUE7RUFJQSw4QkFBQTtBRHV0QkY7QUNqU2dCO0VBMWJkLDBDQUFBO0VBSUEsa0NBQUE7QUQ4dEJGO0FDblNnQjtFQS9iZCwwQ0FBQTtFQUlBLGtDQUFBO0FEcXVCRjtBQ3ZTZ0I7RUFsY2Qsc0NBQUE7RUFJQSw4QkFBQTtBRDR1QkY7QUMzU2dCO0VBcmNkLDBDQUFBO0VBSUEsa0NBQUE7QURtdkJGO0FDL1NnQjtFQXhjZCwwQ0FBQTtFQUlBLGtDQUFBO0FEMHZCRjtBQ25UZ0I7RUEzY2QsMENBQUE7RUFJQSxrQ0FBQTtBRGl3QkY7QUN2VGdCO0VBOWNkLHNDQUFBO0VBSUEsOEJBQUE7QUR3d0JGO0FDelRnQjtFQW5kZCxzQ0FBQTtFQUlBLDhCQUFBO0FEK3dCRjtBQzdUZ0I7RUF0ZGQsc0NBQUE7RUFJQSw4QkFBQTtBRHN4QkY7QUNqVWdCO0VBemRkLDBDQUFBO0VBSUEsa0NBQUE7QUQ2eEJGO0FDclVnQjtFQTVkZCxzQ0FBQTtFQUlBLDhCQUFBO0FEb3lCRjtBQ3pVZ0I7RUEvZGQsc0NBQUE7RUFJQSw4QkFBQTtBRDJ5QkY7QUM3VWdCO0VBbGVkLDBDQUFBO0VBSUEsa0NBQUE7QURrekJGO0FDalZnQjtFQXJlZCxzQ0FBQTtFQUlBLDhCQUFBO0FEeXpCRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgbWVudUxpbmtzRnJvbUJvdHRvbVRvVG9wIHtcbiAgMCUge1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3Age1xuICAwJSB7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmtMb2FkaW5nIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rTG9hZGluZyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJsaW5rTG9hZGluZyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmxpbmtMb2FkaW5nIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua0xvYWRpbmcge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZ0xpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZ0xpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBsb2FkaW5nTGluZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbG9hZGluZ0xpbmUge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmdMaW5lIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgfVxufVxuQGtleWZyYW1lcyBlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgei1pbmRleDogLTk5OTk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rRG9uYXRpb25CdXR0b24ge1xuICAwJSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiBsaW1lO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuQGtleWZyYW1lcyBibGlua0RvbmF0aW9uQnV0dG9uIHtcbiAgMCUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogbGltZTtcbiAgfVxufVxuLi1hcHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLi1hcHAtbmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmZmYzA7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX21lbnUtbW9kZSAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX3RvcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDExcHgsIC00cHgpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFweCwgLTRweCkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExcHgsIC00cHgpIHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExcHgsIC00cHgpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExcHgsIC00cHgpIHJvdGF0ZSg0NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX21pZGRsZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fbWVudS1tb2RlIC4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lX2JvdHRvbSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgLTQwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC02cHgsIC00MHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC02cHgsIC00MHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTZweCwgLTQwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNnB4LCAtNDBweCkgcm90YXRlKC00NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b24sIC4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b24ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbi5hY3RpdmU6OmJlZm9yZSwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uLmFjdGl2ZTo6YmVmb3JlLCAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29sb3I6ICM2Y2RiNmM7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbiB7XG4gIHRvcDogNSU7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvir1cIjtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gIHRvcDogMTUlO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uX2JsaW5raW5nOjpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgYmxpbmtEb25hdGlvbkJ1dHRvbiA2IDAuM3MgYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmxpbmtEb25hdGlvbkJ1dHRvbiA2IDAuM3MgYWx0ZXJuYXRlO1xuICAtbXMtYW5pbWF0aW9uOiAxcyBibGlua0RvbmF0aW9uQnV0dG9uIDYgMC4zcyBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogMXMgYmxpbmtEb25hdGlvbkJ1dHRvbiA2IDAuM3MgYWx0ZXJuYXRlO1xuICBhbmltYXRpb246IDFzIGJsaW5rRG9uYXRpb25CdXR0b24gNiAwLjNzIGFsdGVybmF0ZTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvk4BcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b24ge1xuICB0b3A6IDI3JTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX3N0YXRpc3RpYy1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74KAXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19wcm9maWxlLWJ1dHRvbiwgLi1hcHAtbmF2aWdhdGlvbl9fZG9uYXRpb24tYnV0dG9uLCAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX3Byb2ZpbGUtYnV0dG9uOjpiZWZvcmUsIC4tYXBwLW5hdmlnYXRpb25fX2RvbmF0aW9uLWJ1dHRvbjo6YmVmb3JlLCAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uOjpiZWZvcmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9fcHJvZmlsZS1idXR0b25fbWVudS1tb2RlLCAuLWFwcC1uYXZpZ2F0aW9uX19kb25hdGlvbi1idXR0b25fbWVudS1tb2RlLCAuLWFwcC1uYXZpZ2F0aW9uX19zdGF0aXN0aWMtYnV0dG9uX21lbnUtbW9kZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDYwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2J1dHRvbi1saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDdweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1uYXZpZ2F0aW9uX19tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxLjVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcDtcbiAgLW1vei1hbmltYXRpb246IDEuNXMgbWVudUxpbmtzRnJvbUJvdHRvbVRvVG9wO1xuICAtbXMtYW5pbWF0aW9uOiAxLjVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcDtcbiAgLW8tYW5pbWF0aW9uOiAxLjVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcDtcbiAgYW5pbWF0aW9uOiAxLjVzIG1lbnVMaW5rc0Zyb21Cb3R0b21Ub1RvcDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rLmFjdGl2ZTo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKTtcbn1cbi4tYXBwLW5hdmlnYXRpb25fX2l0ZW0tbGluazpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rOmhvdmVyOjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEsIDEpO1xufVxuLi1hcHAtbmF2aWdhdGlvbl9faXRlbS1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDAsIDEpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgwLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgwLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDAsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMCwgMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjhzIG1lbnVMaW5lO1xuICAtbW96LWFuaW1hdGlvbjogMC44cyBtZW51TGluZTtcbiAgLW1zLWFuaW1hdGlvbjogMC44cyBtZW51TGluZTtcbiAgLW8tYW5pbWF0aW9uOiAwLjhzIG1lbnVMaW5lO1xuICBhbmltYXRpb246IDAuOHMgbWVudUxpbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yb3V0ZXItb3V0bGV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi4tYXBwLWxvYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtbG9hZGluZ19fcmVwcmVzZW50YXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uLWFwcC1sb2FkaW5nX19yZXByZXNlbnRhdGlvbi4tYXBwLWxvYWRpbmdfX3JlcHJlc2VudGF0aW9uX2NpbmVtYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAzcyBlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24gMThzIGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbjogM3MgZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uIDE4cyBmb3J3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogM3MgZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uIDE4cyBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiAzcyBlbmRMb2FkaW5nUmVwcmVzZW50YXRpb24gMThzIGZvcndhcmRzO1xuICBhbmltYXRpb246IDNzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiAxOHMgZm9yd2FyZHM7XG59XG4uLWFwcC1sb2FkaW5nX190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NyU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDEuNXMgYmxpbmtMb2FkaW5nIDQgIGJhY2t3YXJkcztcbiAgLW1vei1hbmltYXRpb246IDEuNXMgYmxpbmtMb2FkaW5nIDQgIGJhY2t3YXJkcztcbiAgLW1zLWFuaW1hdGlvbjogMS41cyBibGlua0xvYWRpbmcgNCAgYmFja3dhcmRzO1xuICAtby1hbmltYXRpb246IDEuNXMgYmxpbmtMb2FkaW5nIDQgIGJhY2t3YXJkcztcbiAgYW5pbWF0aW9uOiAxLjVzIGJsaW5rTG9hZGluZyA0ICBiYWNrd2FyZHM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uLWFwcC1sb2FkaW5nX19saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgbG9hZGluZ0xpbmU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLCAwLCAwLCAwLjUpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViZGIzNDtcbn1cbi4tYXBwLWxvYWRpbmdfX3ByZXNlbnQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgYmxpbmtMb2FkaW5nIDYuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiAzcyAyIGFsdGVybmF0ZSBibGlua0xvYWRpbmcgNi41cztcbiAgLW1zLWFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgYmxpbmtMb2FkaW5nIDYuNXM7XG4gIC1vLWFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgYmxpbmtMb2FkaW5nIDYuNXM7XG4gIGFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgYmxpbmtMb2FkaW5nIDYuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZS1sZXR0ZXIge1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9maXJzdCwgLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3NlY29uZCwgLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3RoaXJkLCAuLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZmlyc3QtcyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICAtbW96LWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW1zLWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW8tYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICBhbmltYXRpb246IDZzIGJsaW5rTG9hZGluZyAxMnM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZmlyc3QtYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtbW96LWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW1zLWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW8tYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICBhbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZmlyc3QtdiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW1vei1hbmltYXRpb246IDMuNXMgYmxpbmtMb2FkaW5nIDE0LjVzO1xuICAtbXMtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW8tYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9maXJzdC1lIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtbW96LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tcy1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtby1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICBhbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3NlY29uZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9zZWNvbmQtbyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgLW1vei1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICAtbXMtYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgLW8tYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9zZWNvbmQtdSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtbW96LWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW1zLWFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbiAgLW8tYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICBhbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfc2Vjb25kLXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW1zLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1vLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIGFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfdGhpcmQtcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW1vei1hbmltYXRpb246IDMuNXMgYmxpbmtMb2FkaW5nIDE0LjVzO1xuICAtbXMtYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgLW8tYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbiAgYW5pbWF0aW9uOiAzLjVzIGJsaW5rTG9hZGluZyAxNC41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV90aGlyZC1sIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG4gIC1tb3otYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtbXMtYW5pbWF0aW9uOiA1cyBibGlua0xvYWRpbmcgMTNzO1xuICAtby1hbmltYXRpb246IDVzIGJsaW5rTG9hZGluZyAxM3M7XG4gIGFuaW1hdGlvbjogNXMgYmxpbmtMb2FkaW5nIDEzcztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV90aGlyZC1hIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtbW96LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tcy1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtby1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICBhbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX3RoaXJkLW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiA1LjVzIGJsaW5rTG9hZGluZyAxMi41cztcbiAgLW1zLWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIC1vLWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIGFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfdGhpcmQtZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW1vei1hbmltYXRpb246IDQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzO1xuICAtbXMtYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW8tYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV90aGlyZC10IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIC1tb3otYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICAtbXMtYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICAtby1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIGFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9mb3VydGgtcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICAtbW96LWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW1zLWFuaW1hdGlvbjogNnMgYmxpbmtMb2FkaW5nIDEycztcbiAgLW8tYW5pbWF0aW9uOiA2cyBibGlua0xvYWRpbmcgMTJzO1xuICBhbmltYXRpb246IDZzIGJsaW5rTG9hZGluZyAxMnM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoLXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgLW1vei1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIC1tcy1hbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG4gIC1vLWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX2ZvdXJ0aC1vIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICAtbW96LWFuaW1hdGlvbjogNS41cyBibGlua0xvYWRpbmcgMTIuNXM7XG4gIC1tcy1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICAtby1hbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xuICBhbmltYXRpb246IDUuNXMgYmxpbmtMb2FkaW5nIDEyLjVzO1xufVxuLi1hcHAtbG9hZGluZ19fc3ViLXRpdGxlX2ZvdXJ0aC1qIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIC1tb3otYW5pbWF0aW9uOiAzcyBibGlua0xvYWRpbmcgMTVzO1xuICAtbXMtYW5pbWF0aW9uOiAzcyBibGlua0xvYWRpbmcgMTVzO1xuICAtby1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIGFuaW1hdGlvbjogM3MgYmxpbmtMb2FkaW5nIDE1cztcbn1cbi4tYXBwLWxvYWRpbmdfX3N1Yi10aXRsZV9mb3VydGgtZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICAtbW96LWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgLW1zLWFuaW1hdGlvbjogNHMgYmxpbmtMb2FkaW5nIDE0cztcbiAgLW8tYW5pbWF0aW9uOiA0cyBibGlua0xvYWRpbmcgMTRzO1xuICBhbmltYXRpb246IDRzIGJsaW5rTG9hZGluZyAxNHM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoLWMge1xuICAtd2Via2l0LWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiA0LjVzIGJsaW5rTG9hZGluZyAxMy41cztcbiAgLW1zLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIC1vLWFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG4gIGFuaW1hdGlvbjogNC41cyBibGlua0xvYWRpbmcgMTMuNXM7XG59XG4uLWFwcC1sb2FkaW5nX19zdWItdGl0bGVfZm91cnRoLXQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogM3MgYmxpbmtMb2FkaW5nIDE1cztcbiAgLW1vei1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIC1tcy1hbmltYXRpb246IDNzIGJsaW5rTG9hZGluZyAxNXM7XG4gIC1vLWFuaW1hdGlvbjogM3MgYmxpbmtMb2FkaW5nIDE1cztcbiAgYW5pbWF0aW9uOiAzcyBibGlua0xvYWRpbmcgMTVzO1xufSIsIiRncmVlbkp1bmdsZUNyYWlvbGE6IHJnYmEoNjgsIDE3MCwgMTUzLCAxKTtcclxuJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kd2hpdGVPcGFjaXR5MC02OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtOTogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4kYmxhY2tPcGFjaXR5MC04OiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRibGFja09wYWNpdHkwLTQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGxpbWU6IHJnYmEoMCwgMjU1LCAwLCAxKTtcclxuJGhvbmV5RGV3OiByZ2JhKDIwNywgMjU1LCAxOTIsIDEpO1xyXG4kdmVyZGVwb21vdnk6IHJnYmEoOTEsIDIxOSwgNTIsIDEpO1xyXG4kcGFzdGVsR3JlZW46IHJnYmEoMTA4LCAyMTksIDEwOCwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJGFyZ3M7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgLW1vei1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAtby1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgYW5pbWF0aW9uOiAjeyRzdHJ9OyAgICAgIFxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMobWVudUxpbmtzRnJvbUJvdHRvbVRvVG9wKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCA1MCUpKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhtZW51TGluZSkge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmxpbmtMb2FkaW5nKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICR3aGl0ZU9wYWNpdHkwLTY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhsb2FkaW5nTGluZSkge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZW5kTG9hZGluZ1JlcHJlc2VudGF0aW9uKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IC05OTk5O1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmxpbmtEb25hdGlvbkJ1dHRvbikge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBjb2xvcjogJGxpbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgJi1uYXZpZ2F0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjRzKTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggNnB4ICRibGFja09wYWNpdHkwLTQ7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICAuLWFwcC1uYXZpZ2F0aW9uX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICZfdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLW9yaWdpbihsZWZ0IHRvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMTFweCwgLTRweCkgcm90YXRlKDQ1ZGVnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC05O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX21pZGRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNnB4LCAtNDBweCkgcm90YXRlKC00NWRlZykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgJl9fZG9uYXRpb24tYnV0dG9uLFxyXG4gICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuNHMpO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGFzdGVsR3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJvZmlsZS1idXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYyYmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICAgICAgJl9ibGlua2luZyB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMXMgYmxpbmtEb25hdGlvbkJ1dHRvbiA2IDAuM3MgYWx0ZXJuYXRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmNGMwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdGF0aXN0aWMtYnV0dG9uIHtcclxuICAgICAgICAgICAgdG9wOiAyNyU7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA4MFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJvZmlsZS1idXR0b24sXHJcbiAgICAgICAgJl9fZG9uYXRpb24tYnV0dG9uLFxyXG4gICAgICAgICZfX3N0YXRpc3RpYy1idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNXMpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMS41cyBtZW51TGlua3NGcm9tQm90dG9tVG9Ub3AnKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2tPcGFjaXR5MC05O1xyXG4gICAgICAgICAgICAgICAgJHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgwLCAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcwLjhzIG1lbnVMaW5lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtcm91dGVyLW91dGxldCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAmLWxvYWRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAmX19yZXByZXNlbnRhdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgJi4tYXBwLWxvYWRpbmdfX3JlcHJlc2VudGF0aW9uX2NpbmVtYSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzNzIGVuZExvYWRpbmdSZXByZXNlbnRhdGlvbiAxOHMgZm9yd2FyZHMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0NyU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMS41cyBibGlua0xvYWRpbmcgNCAgYmFja3dhcmRzJyk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbGluZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogM3MgMiBhbHRlcm5hdGUgbG9hZGluZ0xpbmU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZXBvbW92eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJlc2VudC10aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzNzIDIgYWx0ZXJuYXRlIGJsaW5rTG9hZGluZyA2LjVzJyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggJHdoaXRlT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAmLWxldHRlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfZmlyc3QsXHJcbiAgICAgICAgICAgICZfc2Vjb25kLFxyXG4gICAgICAgICAgICAmX3RoaXJkLFxyXG4gICAgICAgICAgICAmX2ZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfZmlyc3Qge1xyXG4gICAgICAgICAgICAgICAgJi1zIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzZzIGJsaW5rTG9hZGluZyAxMnMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc1cyBibGlua0xvYWRpbmcgMTNzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXYge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMy41cyBibGlua0xvYWRpbmcgMTQuNXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc0LjVzIGJsaW5rTG9hZGluZyAxMy41cycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2Vjb25kIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICYtbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc1LjVzIGJsaW5rTG9hZGluZyAxMi41cycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi11IHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzVzIGJsaW5rTG9hZGluZyAxM3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtciB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc0LjVzIGJsaW5rTG9hZGluZyAxMy41cycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfdGhpcmQge1xyXG4gICAgICAgICAgICAgICAgJi1wIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzMuNXMgYmxpbmtMb2FkaW5nIDE0LjVzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWwge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignNXMgYmxpbmtMb2FkaW5nIDEzcycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1hIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzQuNXMgYmxpbmtMb2FkaW5nIDEzLjVzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignNS41cyBibGlua0xvYWRpbmcgMTIuNXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc0LjVzIGJsaW5rTG9hZGluZyAxMy41cycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi10IHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzRzIGJsaW5rTG9hZGluZyAxNHMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2ZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICAmLXAge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignNnMgYmxpbmtMb2FkaW5nIDEycycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1yIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzRzIGJsaW5rTG9hZGluZyAxNHMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc1LjVzIGJsaW5rTG9hZGluZyAxMi41cycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1qIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzNzIGJsaW5rTG9hZGluZyAxNXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCc0cyBibGlua0xvYWRpbmcgMTRzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWMge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignNC41cyBibGlua0xvYWRpbmcgMTMuNXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCczcyBibGlua0xvYWRpbmcgMTVzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }, {
          type: _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"]
        }, {
          type: _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"]
        }, {
          type: _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_10__["FacadeServiceUserList"]
        }, {
          type: _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_11__["FacadeServiceDonationList"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _store___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/ */
    "./src/app/store/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_country_list_country_list_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/country-list/country-list.effects */
    "./src/app/store/country-list/country-list.effects.ts");
    /* harmony import */


    var _store_tree_list_tree_list_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/tree-list/tree-list.effects */
    "./src/app/store/tree-list/tree-list.effects.ts");
    /* harmony import */


    var _store_user_list_user_list_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./store/user-list/user-list.effects */
    "./src/app/store/user-list/user-list.effects.ts");
    /* harmony import */


    var _store_donation_list_donation_list_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./store/donation-list/donation-list.effects */
    "./src/app/store/donation-list/donation-list.effects.ts");
    /* harmony import */


    var _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/not-found/not-found.module */
    "./src/app/components/not-found/not-found.module.ts");
    /* harmony import */


    var _services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/tree-list/tree-data.service */
    "./src/app/services/tree-list/tree-data.service.ts");
    /* harmony import */


    var _services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/user-list/user-data.service */
    "./src/app/services/user-list/user-data.service.ts");
    /* harmony import */


    var _services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/donation-list/donation-list-data.service */
    "./src/app/services/donation-list/donation-list-data.service.ts");
    /* harmony import */


    var _services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/country-list/country-data.service */
    "./src/app/services/country-list/country-data.service.ts");
    /* harmony import */


    var _my_error_handler_my_error_handler_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./my-error-handler/my-error-handler.module */
    "./src/app/my-error-handler/my-error-handler.module.ts");
    /* harmony import */


    var _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./store/country-list/country-list.facade */
    "./src/app/store/country-list/country-list.facade.ts");
    /* harmony import */


    var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./store/donation-list/donation-list.facade */
    "./src/app/store/donation-list/donation-list.facade.ts");
    /* harmony import */


    var _store_donation_statistic_list_donation_statistic_list_facade__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./store/donation-statistic-list/donation-statistic-list.facade */
    "./src/app/store/donation-statistic-list/donation-statistic-list.facade.ts");
    /* harmony import */


    var _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./store/tree-list/tree-list.facade */
    "./src/app/store/tree-list/tree-list.facade.ts");
    /* harmony import */


    var _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./store/user-list/user-list.facade */
    "./src/app/store/user-list/user-list.facade.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_19__["CountryListDataService"], _services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_16__["TreeListDataService"], _services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_17__["UserListDataService"], _services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_18__["DonationListDataService"], _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_21__["FacadeServiceCountryList"], _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_22__["FacadeServiceDonationList"], _store_donation_statistic_list_donation_statistic_list_facade__WEBPACK_IMPORTED_MODULE_23__["FacadeServiceDonationStatisticList"], _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_24__["FacadeServiceTreeList"], _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_25__["FacadeServiceUserList"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
        useClass: _my_error_handler_my_error_handler_module__WEBPACK_IMPORTED_MODULE_20__["MyErrorHandler"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store___WEBPACK_IMPORTED_MODULE_9__["reducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_country_list_country_list_effects__WEBPACK_IMPORTED_MODULE_11__["CountryListEffects"], _store_tree_list_tree_list_effects__WEBPACK_IMPORTED_MODULE_12__["TreeListEffects"], _store_user_list_user_list_effects__WEBPACK_IMPORTED_MODULE_13__["UserListEffects"], _store_donation_list_donation_list_effects__WEBPACK_IMPORTED_MODULE_14__["DonationListEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot(), _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"], _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store___WEBPACK_IMPORTED_MODULE_9__["reducers"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_country_list_country_list_effects__WEBPACK_IMPORTED_MODULE_11__["CountryListEffects"], _store_tree_list_tree_list_effects__WEBPACK_IMPORTED_MODULE_12__["TreeListEffects"], _store_user_list_user_list_effects__WEBPACK_IMPORTED_MODULE_13__["UserListEffects"], _store_donation_list_donation_list_effects__WEBPACK_IMPORTED_MODULE_14__["DonationListEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot(), _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_15__["NotFoundModule"]],
          providers: [_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_19__["CountryListDataService"], _services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_16__["TreeListDataService"], _services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_17__["UserListDataService"], _services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_18__["DonationListDataService"], _store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_21__["FacadeServiceCountryList"], _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_22__["FacadeServiceDonationList"], _store_donation_statistic_list_donation_statistic_list_facade__WEBPACK_IMPORTED_MODULE_23__["FacadeServiceDonationStatisticList"], _store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_24__["FacadeServiceTreeList"], _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_25__["FacadeServiceUserList"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: _my_error_handler_my_error_handler_module__WEBPACK_IMPORTED_MODULE_20__["MyErrorHandler"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/not-found/not-found-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/not-found/not-found-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: NotFoundRoutingModule */

  /***/
  function srcAppComponentsNotFoundNotFoundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function () {
      return NotFoundRoutingModule;
    });
    /* harmony import */


    var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var routes = [{
      path: 'not-found',
      component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]
    }];

    var NotFoundRoutingModule = function NotFoundRoutingModule() {
      _classCallCheck(this, NotFoundRoutingModule);
    };

    NotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NotFoundRoutingModule
    });
    NotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NotFoundRoutingModule_Factory(t) {
        return new (t || NotFoundRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/not-found/not-found.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent(_router) {
        _classCallCheck(this, NotFoundComponent);

        this._router = _router;
      }

      _createClass(NotFoundComponent, [{
        key: "goHome",
        value: function goHome() {
          this._router.navigate(['']);
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 16,
      vars: 0,
      consts: [[1, "-app-not-found"], [1, "-app-not-found__title"], [1, "-app-not-found__title-letter-wrapper"], [1, "-app-not-found__title-letter", "-app-not-found__title-letter_left"], [1, "-app-not-found__title-letter", "-app-not-found__title-letter_middle"], [1, "-app-not-found__title-letter", "-app-not-found__title-letter_right"], [1, "-app-not-found__info"], [1, "-app-not-found__info-sub-title"], [1, "-app-not-found__info-button", 3, "click"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_14_listener() {
            return ctx.goHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " go home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@-webkit-keyframes fromBottomToTopLetter {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: 45%;\n  }\n}\n@keyframes fromBottomToTopLetter {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: 45%;\n  }\n}\n[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-image: url('not-found-page-bg.png');\n  background-position: center;\n  background-size: cover;\n}\n.-app-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: #f5feff;\n}\n.-app-not-found__title[_ngcontent-%COMP%] {\n  z-index: -1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  height: 60%;\n  background: linear-gradient(180deg, #b0dfe6, white);\n}\n.-app-not-found__title-letter-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 150px;\n  padding: 0px 10px;\n  text-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.6);\n  font-size: 250px;\n  font-weight: 600;\n}\n.-app-not-found__title-letter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.-app-not-found__title-letter_left[_ngcontent-%COMP%] {\n  -webkit-animation: 2s ease-out fromBottomToTopLetter 1s infinite alternate;\n  animation: 2s ease-out fromBottomToTopLetter 1s infinite alternate;\n}\n.-app-not-found__title-letter_middle[_ngcontent-%COMP%] {\n  -webkit-animation: 2s ease-out fromBottomToTopLetter 1.3s infinite alternate;\n  animation: 2s ease-out fromBottomToTopLetter 1.3s infinite alternate;\n}\n.-app-not-found__title-letter_right[_ngcontent-%COMP%] {\n  -webkit-animation: 2s ease-out fromBottomToTopLetter 0.7s infinite alternate;\n  animation: 2s ease-out fromBottomToTopLetter 0.7s infinite alternate;\n}\n.-app-not-found__info[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.-app-not-found__info-sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 20px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 28px;\n  font-weight: 600;\n}\n.-app-not-found__info-button[_ngcontent-%COMP%] {\n  padding: 20px 60px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #f5feff;\n  border-radius: 10px;\n  background: transparent;\n  color: #f5feff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-not-found__info-button[_ngcontent-%COMP%]:hover {\n  background-color: #f5feff;\n  color: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvRDpcXEVQQU0gdHJhaW5pbmdcXHNhdmUtb3VyLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0LXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JJO0VBa0JBO0lBQ0ksVUFBQTtFQ3hDTjtFRDBDRTtJQUNJLFdBQUE7RUN4Q047QUFDRjtBRDZCSTtFQU1BO0lBQ0ksVUFBQTtFQ1JOO0VEVUU7SUFDSSxXQUFBO0VDUk47QUFDRjtBRG1CQTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUNsQko7QURtQkk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ3BCUjtBRHdCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGNBcEZNO0FDNkRWO0FEd0JJO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSxtREFBQTtBQ3pCUjtBRDBCUTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLDRFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzFCWjtBRDRCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUF2R1IsOEJBd0cyQjtBQ3RCL0I7QUR1Qlk7RUFsRVIsMEVBQUE7RUFJQSxrRUFBQTtBQzhDSjtBRG1CWTtFQXJFUiw0RUFBQTtFQUlBLG9FQUFBO0FDcURKO0FEZVk7RUF4RVIsNEVBQUE7RUFJQSxvRUFBQTtBQzRESjtBRGFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF4SEosZ0NBeUh1QjtFQUVuQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1RSO0FEVVE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFFQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEV1E7RUFDSSxrQkFBQTtFQXJJUixnQkF1SVE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUVBLGNBL0pGO0VBZ0tFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEVVk7RUFDSSx5QkF0S047RUF3S00seUJBNUtFO0FDbUtsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRibGFja09wYWNpdHkwLTI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGR1c3R5Qmx1ZTogcmdiYSgxNzYsIDIyMywgMjMwLCAxKTtcclxuJHNreUJsdWU6IHJnYmEoMjQ1LCAyNTQsIDI1NSwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKGZyb21Cb3R0b21Ub1RvcExldHRlcikge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3R0b206IDQ1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1vLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIGFuaW1hdGlvbjogI3skc3RyfTsgICAgICBcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UtYmcucG5nJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwLW5vdC1mb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgY29sb3I6ICRza3lCbHVlO1xyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRkdXN0eUJsdWUsICR3aGl0ZSk7XHJcbiAgICAgICAgJi1sZXR0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDVweCAkYmxhY2tPcGFjaXR5MC0yLCAwcHggMHB4IDEwcHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sZXR0ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9taWRkbGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMS4zcyBpbmZpbml0ZSBhbHRlcm5hdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDAuN3MgaW5maW5pdGUgYWx0ZXJuYXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNreUJsdWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkc2t5Qmx1ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRza3lCbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2tPcGFjaXR5MC04O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkAtd2Via2l0LWtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZyb21Cb3R0b21Ub1RvcExldHRlciB7XG4gIDAlIHtcbiAgICBib3R0b206IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJvdHRvbTogNDUlO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIge1xuICAwJSB7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDQ1JTtcbiAgfVxufVxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm90LWZvdW5kLXBhZ2Uvbm90LWZvdW5kLXBhZ2UtYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi4tYXBwLW5vdC1mb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmNWZlZmY7XG59XG4uLWFwcC1ub3QtZm91bmRfX3RpdGxlIHtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2IwZGZlNiwgd2hpdGUpO1xufVxuLi1hcHAtbm90LWZvdW5kX190aXRsZS1sZXR0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDI1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtbm90LWZvdW5kX190aXRsZS1sZXR0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn1cbi4tYXBwLW5vdC1mb3VuZF9fdGl0bGUtbGV0dGVyX2xlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tcy1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1vLWFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLi1hcHAtbm90LWZvdW5kX190aXRsZS1sZXR0ZXJfbWlkZGxlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1vei1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW1zLWFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDEuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAtby1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMS4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uLWFwcC1ub3QtZm91bmRfX3RpdGxlLWxldHRlcl9yaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMC43cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tb3otYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMC43cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIC1tcy1hbmltYXRpb246IDJzIGVhc2Utb3V0IGZyb21Cb3R0b21Ub1RvcExldHRlciAwLjdzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgLW8tYW5pbWF0aW9uOiAycyBlYXNlLW91dCBmcm9tQm90dG9tVG9Ub3BMZXR0ZXIgMC43cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbjogMnMgZWFzZS1vdXQgZnJvbUJvdHRvbVRvVG9wTGV0dGVyIDAuN3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLi1hcHAtbm90LWZvdW5kX19pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtbm90LWZvdW5kX19pbmZvLXN1Yi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1ub3QtZm91bmRfX2luZm8tYnV0dG9uIHtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y1ZmVmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjVmZWZmO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLW5vdC1mb3VuZF9faW5mby1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmZWZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/not-found/not-found.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/not-found/not-found.module.ts ***!
    \**********************************************************/

  /*! exports provided: NotFoundModule */

  /***/
  function srcAppComponentsNotFoundNotFoundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundModule", function () {
      return NotFoundModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found-routing.module */
    "./src/app/components/not-found/not-found-routing.module.ts");

    var NotFoundModule = function NotFoundModule() {
      _classCallCheck(this, NotFoundModule);
    };

    NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotFoundModule,
      bootstrap: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]]
    });
    NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotFoundModule_Factory(t) {
        return new (t || NotFoundModule)();
      },
      providers: [],
      imports: [[_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundModule, {
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]],
        imports: [_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]],
          imports: [_not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]],
          providers: [],
          bootstrap: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/country-list/capital-list-snapshot.ts":
  /*!**************************************************************!*\
    !*** ./src/app/models/country-list/capital-list-snapshot.ts ***!
    \**************************************************************/

  /*! exports provided: CapitalListSnapshot */

  /***/
  function srcAppModelsCountryListCapitalListSnapshotTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalListSnapshot", function () {
      return CapitalListSnapshot;
    });
    /* harmony import */


    var _capital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./capital */
    "./src/app/models/country-list/capital.ts");

    var CapitalListSnapshot = /*#__PURE__*/function () {
      function CapitalListSnapshot(capitalList) {
        _classCallCheck(this, CapitalListSnapshot);

        this.capitalList = capitalList;
      }

      _createClass(CapitalListSnapshot, null, [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new CapitalListSnapshot((json.capitalList || []).filter(Boolean).map(_capital__WEBPACK_IMPORTED_MODULE_0__["Capital"].fromJSON)) : null;
        }
      }, {
        key: "toJSON",
        value: function toJSON(capitalListSnapshot) {
          return Boolean(capitalListSnapshot) ? {
            capitalList: (capitalListSnapshot.capitalList || []).filter(Boolean).map(_capital__WEBPACK_IMPORTED_MODULE_0__["Capital"].toJSON)
          } : {};
        }
      }]);

      return CapitalListSnapshot;
    }();
    /***/

  },

  /***/
  "./src/app/models/country-list/capital.ts":
  /*!************************************************!*\
    !*** ./src/app/models/country-list/capital.ts ***!
    \************************************************/

  /*! exports provided: Capital */

  /***/
  function srcAppModelsCountryListCapitalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Capital", function () {
      return Capital;
    });

    var Capital = /*#__PURE__*/function () {
      function Capital(latitude, longitude, name) {
        _classCallCheck(this, Capital);

        this._latitude = latitude;
        this._longitude = longitude;
        this._name = name;
      }

      _createClass(Capital, [{
        key: "clone",
        value: function clone() {
          return new Capital(this.latitude, this.longitude, this.name);
        }
      }, {
        key: "latitude",
        set: function set(newlatitude) {
          this._latitude = newlatitude;
        },
        get: function get() {
          return this._latitude;
        }
      }, {
        key: "longitude",
        set: function set(newlongitude) {
          this._longitude = newlongitude;
        },
        get: function get() {
          return this._longitude;
        }
      }, {
        key: "name",
        set: function set(newName) {
          this._name = newName;
        },
        get: function get() {
          return this._name;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new Capital(json.latitude, json.longitude, json.name) : null;
        }
      }, {
        key: "toJSON",
        value: function toJSON(capital) {
          return Boolean(capital) ? {
            latitude: capital.latitude,
            longitude: capital.longitude,
            name: capital.name
          } : {};
        }
      }]);

      return Capital;
    }();
    /***/

  },

  /***/
  "./src/app/models/country-list/country.ts":
  /*!************************************************!*\
    !*** ./src/app/models/country-list/country.ts ***!
    \************************************************/

  /*! exports provided: Country */

  /***/
  function srcAppModelsCountryListCountryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Country", function () {
      return Country;
    });
    /* harmony import */


    var _capital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./capital */
    "./src/app/models/country-list/capital.ts");

    var Country = /*#__PURE__*/function () {
      function Country(id, name, nativeName, region, subRegion, capital, population, area, forestArea, flag, timeZone) {
        _classCallCheck(this, Country);

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

      _createClass(Country, [{
        key: "clone",
        value: function clone() {
          return new Country(this.id, this.name, this.nativeName, this.region, this.subRegion, this.capital.clone(), this.population, this.area, this.forestArea, this.flag, this.timeZone);
        }
      }, {
        key: "equals",
        value: function equals(country) {
          return Boolean(country) && JSON.stringify(country) === JSON.stringify(this);
        }
      }, {
        key: "id",
        set: function set(newId) {
          this._id = newId;
        },
        get: function get() {
          return this._id;
        }
      }, {
        key: "name",
        set: function set(newName) {
          this._name = newName;
        },
        get: function get() {
          return this._name;
        }
      }, {
        key: "nativeName",
        set: function set(newNativeName) {
          this._nativeName = newNativeName;
        },
        get: function get() {
          return this._nativeName;
        }
      }, {
        key: "region",
        set: function set(newRegion) {
          this._region = newRegion;
        },
        get: function get() {
          return this._region;
        }
      }, {
        key: "subRegion",
        set: function set(newSubRegion) {
          this._subRegion = newSubRegion;
        },
        get: function get() {
          return this._subRegion;
        }
      }, {
        key: "capital",
        set: function set(newCapital) {
          this._capital = newCapital;
        },
        get: function get() {
          return this._capital;
        }
      }, {
        key: "population",
        set: function set(newPopulation) {
          this._population = newPopulation;
        },
        get: function get() {
          return this._population;
        }
      }, {
        key: "area",
        set: function set(newArea) {
          this._area = newArea;
        },
        get: function get() {
          return this._area;
        }
      }, {
        key: "forestArea",
        set: function set(newForestArea) {
          this._forestArea = newForestArea;
        },
        get: function get() {
          return this._forestArea;
        }
      }, {
        key: "flag",
        set: function set(newFlag) {
          this._flag = newFlag;
        },
        get: function get() {
          return this._flag;
        }
      }, {
        key: "timeZone",
        set: function set(newTimeZone) {
          this._timeZone = newTimeZone;
        },
        get: function get() {
          return this._timeZone;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          var _a;

          var timezones = ((_a = Boolean(json.timezones)) !== null && _a !== void 0 ? _a : json.timezones.length > 0) ? json.timezones[0] : undefined;
          return Boolean(json) ? new Country(json.alpha2Code, json.name, json.nativeName, json.region, json.subregion, new _capital__WEBPACK_IMPORTED_MODULE_0__["Capital"](json.latitude, json.longitude, json.capital), json.population, json.area, json.forestArea, json.flag, timezones) : null;
        }
      }]);

      return Country;
    }();
    /***/

  },

  /***/
  "./src/app/models/donation-list/donation.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/donation-list/donation.ts ***!
    \**************************************************/

  /*! exports provided: Donation */

  /***/
  function srcAppModelsDonationListDonationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Donation", function () {
      return Donation;
    });
    /* harmony import */


    var _tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../tree-list/tree-donation */
    "./src/app/models/tree-list/tree-donation.ts");
    /* harmony import */


    var _tree_list_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tree-list/tree */
    "./src/app/models/tree-list/tree.ts");
    /* harmony import */


    var _tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tree-list/tree-type */
    "./src/app/models/tree-list/tree-type.ts");

    var Donation = /*#__PURE__*/function () {
      function Donation(id, country, treeDonation, date) {
        _classCallCheck(this, Donation);

        this._id = id;
        this._country = country;
        this._treeDonation = treeDonation;
        this._date = date;
      }

      _createClass(Donation, [{
        key: "equals",
        value: function equals(donation) {
          return Boolean(donation) && JSON.stringify(donation) === JSON.stringify(this);
        }
      }, {
        key: "clone",
        value: function clone() {
          return new Donation(this.id, this.country, this.treeDonation.clone(), this.date);
        }
      }, {
        key: "id",
        set: function set(newId) {
          this._id = newId;
        },
        get: function get() {
          return this._id;
        }
      }, {
        key: "country",
        set: function set(newCountry) {
          this._country = newCountry;
        },
        get: function get() {
          return this._country;
        }
      }, {
        key: "treeDonation",
        set: function set(newTreeDonation) {
          this._treeDonation = newTreeDonation;
        },
        get: function get() {
          return this._treeDonation;
        }
      }, {
        key: "date",
        set: function set(newDate) {
          this._date = newDate;
        },
        get: function get() {
          return this._date;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new Donation(json.id, json.country, new _tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_0__["TreeDonation"](json.treeDonation.id, json.treeDonation.amount, json.treeDonation.cost, new _tree_list_tree__WEBPACK_IMPORTED_MODULE_1__["Tree"](json.treeDonation.tree.id, json.treeDonation.tree.name, json.treeDonation.tree.description, json.treeDonation.tree.picture, json.treeDonation.tree.size, json.treeDonation.tree.environment, json.treeDonation.tree.keyFeature, Number(json.treeDonation.tree.cost), _tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"][json.treeDonation.tree.id])), json.date) : null;
        }
      }]);

      return Donation;
    }();
    /***/

  },

  /***/
  "./src/app/models/donation-statistic-list/statistic-element-type.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/models/donation-statistic-list/statistic-element-type.ts ***!
    \**************************************************************************/

  /*! exports provided: StatisticElementType */

  /***/
  function srcAppModelsDonationStatisticListStatisticElementTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticElementType", function () {
      return StatisticElementType;
    });

    var StatisticElementType;

    (function (StatisticElementType) {
      StatisticElementType["BC"] = "by-cost";
      StatisticElementType["BT"] = "by-tree";
    })(StatisticElementType || (StatisticElementType = {}));
    /***/

  },

  /***/
  "./src/app/models/donation-statistic-list/statistic-sub-category-type.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/models/donation-statistic-list/statistic-sub-category-type.ts ***!
    \*******************************************************************************/

  /*! exports provided: StatisticSubCategoryType */

  /***/
  function srcAppModelsDonationStatisticListStatisticSubCategoryTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticSubCategoryType", function () {
      return StatisticSubCategoryType;
    });

    var StatisticSubCategoryType;

    (function (StatisticSubCategoryType) {
      StatisticSubCategoryType["AD"] = "all-donators";
      StatisticSubCategoryType["TD"] = "top-10-donators";
      StatisticSubCategoryType["AC"] = "all-countries";
      StatisticSubCategoryType["TC"] = "top-10-countries";
    })(StatisticSubCategoryType || (StatisticSubCategoryType = {}));
    /***/

  },

  /***/
  "./src/app/models/tree-list/tree-donation.ts":
  /*!***************************************************!*\
    !*** ./src/app/models/tree-list/tree-donation.ts ***!
    \***************************************************/

  /*! exports provided: TreeDonation */

  /***/
  function srcAppModelsTreeListTreeDonationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeDonation", function () {
      return TreeDonation;
    });

    var TreeDonation = /*#__PURE__*/function () {
      function TreeDonation(id, amount, cost, tree) {
        _classCallCheck(this, TreeDonation);

        this._id = id;
        this._amont = amount;
        this._cost = cost;
        this._tree = tree;
      }

      _createClass(TreeDonation, [{
        key: "clone",
        value: function clone() {
          return new TreeDonation(this.id, this.amount, this.cost, this.tree.clone());
        }
      }, {
        key: "id",
        set: function set(newId) {
          this._id = newId;
        },
        get: function get() {
          return this._id;
        }
      }, {
        key: "amount",
        set: function set(newAmount) {
          this._amont = newAmount;
        },
        get: function get() {
          return this._amont;
        }
      }, {
        key: "cost",
        set: function set(newCost) {
          this._cost = newCost;
        },
        get: function get() {
          return this._cost;
        }
      }, {
        key: "tree",
        set: function set(newTree) {
          this._tree = newTree;
        },
        get: function get() {
          return this._tree;
        }
      }]);

      return TreeDonation;
    }();
    /***/

  },

  /***/
  "./src/app/models/tree-list/tree-type.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/tree-list/tree-type.ts ***!
    \***********************************************/

  /*! exports provided: TreeType */

  /***/
  function srcAppModelsTreeListTreeTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeType", function () {
      return TreeType;
    });

    var TreeType;

    (function (TreeType) {
      TreeType["NT"] = "native-trees";
      TreeType["AS"] = "arboretum-species";
      TreeType["PF"] = "patio-fruit-trees";
      TreeType["EG"] = "evergreen";
      TreeType["PG"] = "pot-grown-trees";
      TreeType["SH"] = "shrubs";
    })(TreeType || (TreeType = {}));
    /***/

  },

  /***/
  "./src/app/models/tree-list/tree.ts":
  /*!******************************************!*\
    !*** ./src/app/models/tree-list/tree.ts ***!
    \******************************************/

  /*! exports provided: Tree */

  /***/
  function srcAppModelsTreeListTreeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tree", function () {
      return Tree;
    });
    /* harmony import */


    var _tree_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tree-type */
    "./src/app/models/tree-list/tree-type.ts");

    var Tree = /*#__PURE__*/function () {
      function Tree(id, name, description, picture, size, environment, keyFeature, cost, type) {
        _classCallCheck(this, Tree);

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

      _createClass(Tree, [{
        key: "clone",
        value: function clone() {
          return new Tree(this.id, this.name, this.description, this.picture, this.size, this.environment, this.keyFeature, this.cost, this.type);
        }
      }, {
        key: "id",
        set: function set(newId) {
          this._id = newId;
        },
        get: function get() {
          return this._id;
        }
      }, {
        key: "name",
        set: function set(newName) {
          this._name = newName;
        },
        get: function get() {
          return this._name;
        }
      }, {
        key: "description",
        set: function set(newDescription) {
          this._description = newDescription;
        },
        get: function get() {
          return this._description;
        }
      }, {
        key: "picture",
        set: function set(newPicture) {
          this._picture = newPicture;
        },
        get: function get() {
          return this._picture;
        }
      }, {
        key: "size",
        set: function set(newSize) {
          this._size = newSize;
        },
        get: function get() {
          return this._size;
        }
      }, {
        key: "environment",
        set: function set(newEnvironment) {
          this._environment = newEnvironment;
        },
        get: function get() {
          return this._environment;
        }
      }, {
        key: "keyFeature",
        set: function set(newKeyFeature) {
          this._keyFeature = newKeyFeature;
        },
        get: function get() {
          return this._keyFeature;
        }
      }, {
        key: "cost",
        set: function set(newCost) {
          this._cost = newCost;
        },
        get: function get() {
          return this._cost;
        }
      }, {
        key: "type",
        set: function set(newType) {
          this._type = newType;
        },
        get: function get() {
          return this._type;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new Tree(json.id, json.name, json.description, json.picture, json.size, json.environment, json.keyFeature, Number(json.cost), _tree_type__WEBPACK_IMPORTED_MODULE_0__["TreeType"][json.id]) : null;
        }
      }]);

      return Tree;
    }();
    /***/

  },

  /***/
  "./src/app/models/user-list/user.ts":
  /*!******************************************!*\
    !*** ./src/app/models/user-list/user.ts ***!
    \******************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserListUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var _country_list_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../country-list/country */
    "./src/app/models/country-list/country.ts");

    var User = /*#__PURE__*/function () {
      function User(id, name, surName, password, email, profileImage, age, date, country, donationList, medicalPoints) {
        _classCallCheck(this, User);

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

      _createClass(User, [{
        key: "clone",
        value: function clone() {
          var donationListClone = Boolean(this.donationList) ? _toConsumableArray(this.donationList) : null;
          var countryListClone = Boolean(this.country) ? this.country.clone() : null;
          return new User(this.id, this.name, this.surName, this.password, this.email, this.profileImage, this.age, this.date, countryListClone, donationListClone, this.medicalPoints);
        }
      }, {
        key: "loginEquals",
        value: function loginEquals(user) {
          return this.name === user.name && this.surName === user.surName && this.password === user.password && Boolean(user);
        }
      }, {
        key: "id",
        set: function set(newId) {
          this._id = newId;
        },
        get: function get() {
          return this._id;
        }
      }, {
        key: "name",
        set: function set(newName) {
          this._name = newName;
        },
        get: function get() {
          return this._name;
        }
      }, {
        key: "surName",
        set: function set(newSurname) {
          this._surName = newSurname;
        },
        get: function get() {
          return this._surName;
        }
      }, {
        key: "password",
        set: function set(newPassword) {
          this._password = newPassword;
        },
        get: function get() {
          return this._password;
        }
      }, {
        key: "email",
        set: function set(newEmail) {
          this._email = newEmail;
        },
        get: function get() {
          return this._email;
        }
      }, {
        key: "profileImage",
        set: function set(newProfileImage) {
          this._profileImage = newProfileImage;
        },
        get: function get() {
          return this._profileImage;
        }
      }, {
        key: "age",
        set: function set(newAge) {
          this._age = newAge;
        },
        get: function get() {
          return this._age;
        }
      }, {
        key: "date",
        set: function set(newDate) {
          this._date = newDate;
        },
        get: function get() {
          return this._date;
        }
      }, {
        key: "country",
        set: function set(newCountry) {
          this._country = newCountry;
        },
        get: function get() {
          return this._country;
        }
      }, {
        key: "donationList",
        set: function set(newDonationList) {
          this._donationList = newDonationList;
        },
        get: function get() {
          return this._donationList;
        }
      }, {
        key: "medicalPoints",
        set: function set(newMedicalPoints) {
          this._medicalPoints = newMedicalPoints;
        },
        get: function get() {
          return this._medicalPoints;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          return Boolean(json) ? new User(json.id, json.name, json.surname, json.password, json.email, json.profileImage, Number(json.age), json.date, _country_list_country__WEBPACK_IMPORTED_MODULE_0__["Country"].fromJSON(json.country), json.donationList, Number(json.medicalPoints)) : null;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/my-error-handler/my-error-handler.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/my-error-handler/my-error-handler.module.ts ***!
    \*************************************************************/

  /*! exports provided: MyErrorHandler */

  /***/
  function srcAppMyErrorHandlerMyErrorHandlerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorHandler", function () {
      return MyErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MyErrorHandler = /*#__PURE__*/function () {
      function MyErrorHandler(_router) {
        _classCallCheck(this, MyErrorHandler);

        this._router = _router;
      }

      _createClass(MyErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          console.log(error.message);

          this._router.navigate(['/not-found']);
        }
      }]);

      return MyErrorHandler;
    }();

    MyErrorHandler.ɵfac = function MyErrorHandler_Factory(t) {
      return new (t || MyErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MyErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MyErrorHandler,
      factory: MyErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/country-list/country-data.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/country-list/country-data.service.ts ***!
    \***************************************************************/

  /*! exports provided: CountryListDataService */

  /***/
  function srcAppServicesCountryListCountryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListDataService", function () {
      return CountryListDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_country_list_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/country-list/country */
    "./src/app/models/country-list/country.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_country_list_capital__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/country-list/capital */
    "./src/app/models/country-list/capital.ts");
    /* harmony import */


    var _models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/country-list/capital-list-snapshot */
    "./src/app/models/country-list/capital-list-snapshot.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CountryListDataService = /*#__PURE__*/function () {
      function CountryListDataService(_httpClient) {
        _classCallCheck(this, CountryListDataService);

        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
        this._countryUrl = 'https://restcountries.eu/rest/v2/all';
      }

      _createClass(CountryListDataService, [{
        key: "loadCountriesList",
        value: function loadCountriesList() {
          return this._httpClient.get(this._countryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (json) {
            return (json || []).filter(Boolean).map(_models_country_list_country__WEBPACK_IMPORTED_MODULE_2__["Country"].fromJSON);
          }));
        }
      }, {
        key: "loadCapitalsCoordinatesData",
        value: function loadCapitalsCoordinatesData(countryList) {
          var _this2 = this;

          var LSData = localStorage.getItem(CountryListDataService.countryListLSKey);

          if (Boolean(LSData)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_toConsumableArray(_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_5__["CapitalListSnapshot"].fromJSON(JSON.parse(LSData)).capitalList));
          } else {
            var countryList$ = _toConsumableArray(countryList).map(function (currentCountry) {
              var currentCountryCapitalName = currentCountry.capital.name;

              if (Boolean(currentCountryCapitalName)) {
                return _this2._httpClient.get("https://geocode-maps.yandex.ru/1.x/?format=json&apikey=cf12cc60-e991-460b-8057-553e3de62bf8&geocode=".concat(currentCountryCapitalName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (json) {
                  var newCountry = currentCountry.clone();

                  if (Boolean(json.response.GeoObjectCollection.featureMember[0])) {
                    if (json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos) {
                      var location = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                      var coordinates = location.split(' ');
                      var newCountryCapitalName = newCountry.capital.name;

                      if (Boolean(coordinates[0]) && Boolean(coordinates[1]) && Boolean(newCountryCapitalName)) {
                        return new _models_country_list_capital__WEBPACK_IMPORTED_MODULE_4__["Capital"](Number(coordinates[1]), Number(coordinates[0]), newCountryCapitalName);
                      }
                    }
                  }
                }));
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
              }
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(_toConsumableArray(countryList$));
          }
        }
      }, {
        key: "loadCountriesForestAreaData",
        value: function loadCountriesForestAreaData() {
          var loadForestAreaDataDelay = 5500;
          return this._httpClient.get("".concat(this._baseUrl, "/countries-forest-data.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(loadForestAreaDataDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (json) {
            return (json || []).filter(Boolean).map(function (forestAreaObject) {
              return {
                id: "".concat(forestAreaObject.id),
                value: Number(forestAreaObject.value)
              };
            });
          }));
        }
      }, {
        key: "saveCapitalsCoordinatesData",
        value: function saveCapitalsCoordinatesData(capitalListSnapshot) {
          localStorage.setItem(CountryListDataService.countryListLSKey, JSON.stringify(_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_5__["CapitalListSnapshot"].toJSON(capitalListSnapshot)));
        }
      }]);

      return CountryListDataService;
    }();

    CountryListDataService.countryListLSKey = '-app-country-list';

    CountryListDataService.ɵfac = function CountryListDataService_Factory(t) {
      return new (t || CountryListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    CountryListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CountryListDataService,
      factory: CountryListDataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/donation-list/donation-list-data.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/services/donation-list/donation-list-data.service.ts ***!
    \**********************************************************************/

  /*! exports provided: DonationListDataService */

  /***/
  function srcAppServicesDonationListDonationListDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationListDataService", function () {
      return DonationListDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_donation_list_donation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/donation-list/donation */
    "./src/app/models/donation-list/donation.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DonationListDataService = /*#__PURE__*/function () {
      function DonationListDataService(_httpClient) {
        _classCallCheck(this, DonationListDataService);

        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
      }

      _createClass(DonationListDataService, [{
        key: "loadDonationList",
        value: function loadDonationList() {
          return this._httpClient.get("".concat(this._baseUrl, "/donations-data.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (json) {
            return (json || []).filter(Boolean).map(_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_1__["Donation"].fromJSON);
          }));
        }
      }]);

      return DonationListDataService;
    }();

    DonationListDataService.ɵfac = function DonationListDataService_Factory(t) {
      return new (t || DonationListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DonationListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DonationListDataService,
      factory: DonationListDataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/tree-list/tree-data.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/tree-list/tree-data.service.ts ***!
    \*********************************************************/

  /*! exports provided: TreeListDataService */

  /***/
  function srcAppServicesTreeListTreeDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeListDataService", function () {
      return TreeListDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tree_list_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/tree-list/tree */
    "./src/app/models/tree-list/tree.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TreeListDataService = /*#__PURE__*/function () {
      function TreeListDataService(_httpClient) {
        _classCallCheck(this, TreeListDataService);

        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
      }

      _createClass(TreeListDataService, [{
        key: "loadTreeList",
        value: function loadTreeList() {
          return this._httpClient.get("".concat(this._baseUrl, "/trees-data.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (json) {
            return (json || []).filter(Boolean).map(_models_tree_list_tree__WEBPACK_IMPORTED_MODULE_1__["Tree"].fromJSON);
          }));
        }
      }]);

      return TreeListDataService;
    }();

    TreeListDataService.ɵfac = function TreeListDataService_Factory(t) {
      return new (t || TreeListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    TreeListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TreeListDataService,
      factory: TreeListDataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user-list/user-data.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/user-list/user-data.service.ts ***!
    \*********************************************************/

  /*! exports provided: UserListDataService */

  /***/
  function srcAppServicesUserListUserDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListDataService", function () {
      return UserListDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_list_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/user-list/user */
    "./src/app/models/user-list/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserListDataService = /*#__PURE__*/function () {
      function UserListDataService(_httpClient) {
        _classCallCheck(this, UserListDataService);

        this._httpClient = _httpClient;
        this._baseUrl = 'assets';
      }

      _createClass(UserListDataService, [{
        key: "loadUserList",
        value: function loadUserList() {
          return this._httpClient.get("".concat(this._baseUrl, "/users-data.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (json) {
            return (json || []).filter(Boolean).map(_models_user_list_user__WEBPACK_IMPORTED_MODULE_1__["User"].fromJSON);
          }));
        }
      }]);

      return UserListDataService;
    }();

    UserListDataService.ɵfac = function UserListDataService_Factory(t) {
      return new (t || UserListDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserListDataService,
      factory: UserListDataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/country-list/country-list.actions.ts":
  /*!************************************************************!*\
    !*** ./src/app/store/country-list/country-list.actions.ts ***!
    \************************************************************/

  /*! exports provided: countryListActionsType, InitCountryListAction, InitCountryListSuccessAction, InitCapitalsCoordinatesAction, InitCapitalsCoordinatesDataAction, InitCapitalsCoordinatesDataSuccessAction, InitCountriesForestAreaAction, InitCountriesForestAreaDataAction, InitCountriesForestAreaDataSuccessAction, IsCountriesLoadingSuccessAction, SearchSubRegionCountriesAction, SearchCountryAction, SearchCountrySuccessAction, SearchPreviousCountryAction, SearchNextCountryAction, ToggleMapModeCountryListAction, ToggleShowCapitalsModeCountryListAction, SearchMapCountryAction, DontSearchMapCountryAction, CountCountryForestAreaAction, ResetSearchCountriesAction */

  /***/
  function srcAppStoreCountryListCountryListActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countryListActionsType", function () {
      return countryListActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCountryListAction", function () {
      return InitCountryListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCountryListSuccessAction", function () {
      return InitCountryListSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCapitalsCoordinatesAction", function () {
      return InitCapitalsCoordinatesAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCapitalsCoordinatesDataAction", function () {
      return InitCapitalsCoordinatesDataAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCapitalsCoordinatesDataSuccessAction", function () {
      return InitCapitalsCoordinatesDataSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCountriesForestAreaAction", function () {
      return InitCountriesForestAreaAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCountriesForestAreaDataAction", function () {
      return InitCountriesForestAreaDataAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitCountriesForestAreaDataSuccessAction", function () {
      return InitCountriesForestAreaDataSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsCountriesLoadingSuccessAction", function () {
      return IsCountriesLoadingSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchSubRegionCountriesAction", function () {
      return SearchSubRegionCountriesAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCountryAction", function () {
      return SearchCountryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCountrySuccessAction", function () {
      return SearchCountrySuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPreviousCountryAction", function () {
      return SearchPreviousCountryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchNextCountryAction", function () {
      return SearchNextCountryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleMapModeCountryListAction", function () {
      return ToggleMapModeCountryListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleShowCapitalsModeCountryListAction", function () {
      return ToggleShowCapitalsModeCountryListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchMapCountryAction", function () {
      return SearchMapCountryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DontSearchMapCountryAction", function () {
      return DontSearchMapCountryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountCountryForestAreaAction", function () {
      return CountCountryForestAreaAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetSearchCountriesAction", function () {
      return ResetSearchCountriesAction;
    });

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
    })(countryListActionsType || (countryListActionsType = {}));

    var InitCountryListAction = function InitCountryListAction() {
      _classCallCheck(this, InitCountryListAction);

      this.type = countryListActionsType.initCountries;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitCountryListSuccessAction = /*#__PURE__*/function () {
      function InitCountryListSuccessAction(_payload) {
        _classCallCheck(this, InitCountryListSuccessAction);

        this._payload = _payload;
        this.type = countryListActionsType.initCountriesSuccess;
      }

      _createClass(InitCountryListSuccessAction, [{
        key: "countryList",
        get: function get() {
          return this._payload.countryList;
        }
      }]);

      return InitCountryListSuccessAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitCapitalsCoordinatesAction = function InitCapitalsCoordinatesAction() {
      _classCallCheck(this, InitCapitalsCoordinatesAction);

      this.type = countryListActionsType.initCapitalsCoordinates;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitCapitalsCoordinatesDataAction = /*#__PURE__*/function () {
      function InitCapitalsCoordinatesDataAction(_payload) {
        _classCallCheck(this, InitCapitalsCoordinatesDataAction);

        this._payload = _payload;
        this.type = countryListActionsType.initCapitalsCoordinatesData;
      }

      _createClass(InitCapitalsCoordinatesDataAction, [{
        key: "countryList",
        get: function get() {
          return this._payload.countryList;
        }
      }]);

      return InitCapitalsCoordinatesDataAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitCapitalsCoordinatesDataSuccessAction = /*#__PURE__*/function () {
      function InitCapitalsCoordinatesDataSuccessAction(_payload) {
        _classCallCheck(this, InitCapitalsCoordinatesDataSuccessAction);

        this._payload = _payload;
        this.type = countryListActionsType.initCapitalsCoordinatesDataSuccess;
      }

      _createClass(InitCapitalsCoordinatesDataSuccessAction, [{
        key: "capitalsCoordinatesData",
        get: function get() {
          return this._payload.capitalsCoordinatesData;
        }
      }]);

      return InitCapitalsCoordinatesDataSuccessAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitCountriesForestAreaAction = function InitCountriesForestAreaAction() {
      _classCallCheck(this, InitCountriesForestAreaAction);

      this.type = countryListActionsType.initCountriesForestArea;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitCountriesForestAreaDataAction = function InitCountriesForestAreaDataAction() {
      _classCallCheck(this, InitCountriesForestAreaDataAction);

      this.type = countryListActionsType.initCountriesForestAreaData;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitCountriesForestAreaDataSuccessAction = /*#__PURE__*/function () {
      function InitCountriesForestAreaDataSuccessAction(_payload) {
        _classCallCheck(this, InitCountriesForestAreaDataSuccessAction);

        this._payload = _payload;
        this.type = countryListActionsType.initCountriesForestAreaDataSuccess;
      }

      _createClass(InitCountriesForestAreaDataSuccessAction, [{
        key: "countriesForestAreaData",
        get: function get() {
          return this._payload.countriesForestAreaData;
        }
      }]);

      return InitCountriesForestAreaDataSuccessAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var IsCountriesLoadingSuccessAction = function IsCountriesLoadingSuccessAction() {
      _classCallCheck(this, IsCountriesLoadingSuccessAction);

      this.type = countryListActionsType.isCountriesLoadingSuccess;
    }; // tslint:disable-next-line: max-classes-per-file


    var SearchSubRegionCountriesAction = /*#__PURE__*/function () {
      function SearchSubRegionCountriesAction(_payload) {
        _classCallCheck(this, SearchSubRegionCountriesAction);

        this._payload = _payload;
        this.type = countryListActionsType.searchSubRegionCountries;
      }

      _createClass(SearchSubRegionCountriesAction, [{
        key: "subRegionName",
        get: function get() {
          return this._payload.subRegionName;
        }
      }, {
        key: "regionName",
        get: function get() {
          return this._payload.regionName;
        }
      }]);

      return SearchSubRegionCountriesAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var SearchCountryAction = /*#__PURE__*/function () {
      function SearchCountryAction(_payload) {
        _classCallCheck(this, SearchCountryAction);

        this._payload = _payload;
        this.type = countryListActionsType.searchCountry;
      }

      _createClass(SearchCountryAction, [{
        key: "name",
        get: function get() {
          return this._payload.name;
        }
      }]);

      return SearchCountryAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var SearchCountrySuccessAction = function SearchCountrySuccessAction() {
      _classCallCheck(this, SearchCountrySuccessAction);

      this.type = countryListActionsType.searchCountrySuccess;
    }; // tslint:disable-next-line: max-classes-per-file


    var SearchPreviousCountryAction = /*#__PURE__*/function () {
      function SearchPreviousCountryAction(_payload) {
        _classCallCheck(this, SearchPreviousCountryAction);

        this._payload = _payload;
        this.type = countryListActionsType.searchPreviousCountry;
      }

      _createClass(SearchPreviousCountryAction, [{
        key: "name",
        get: function get() {
          return this._payload.name;
        }
      }]);

      return SearchPreviousCountryAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var SearchNextCountryAction = /*#__PURE__*/function () {
      function SearchNextCountryAction(_payload) {
        _classCallCheck(this, SearchNextCountryAction);

        this._payload = _payload;
        this.type = countryListActionsType.searchNextCountry;
      }

      _createClass(SearchNextCountryAction, [{
        key: "name",
        get: function get() {
          return this._payload.name;
        }
      }]);

      return SearchNextCountryAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var ToggleMapModeCountryListAction = function ToggleMapModeCountryListAction() {
      _classCallCheck(this, ToggleMapModeCountryListAction);

      this.type = countryListActionsType.toggleMapMode;
    }; // tslint:disable-next-line: max-classes-per-file


    var ToggleShowCapitalsModeCountryListAction = function ToggleShowCapitalsModeCountryListAction() {
      _classCallCheck(this, ToggleShowCapitalsModeCountryListAction);

      this.type = countryListActionsType.toggleShowCapitalsMode;
    }; // tslint:disable-next-line: max-classes-per-file


    var SearchMapCountryAction = /*#__PURE__*/function () {
      function SearchMapCountryAction(_payload) {
        _classCallCheck(this, SearchMapCountryAction);

        this._payload = _payload;
        this.type = countryListActionsType.searchMapCountry;
      }

      _createClass(SearchMapCountryAction, [{
        key: "name",
        get: function get() {
          return this._payload.name;
        }
      }]);

      return SearchMapCountryAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var DontSearchMapCountryAction = function DontSearchMapCountryAction() {
      _classCallCheck(this, DontSearchMapCountryAction);

      this.type = countryListActionsType.dontSearchMapCountry;
    }; // tslint:disable-next-line: max-classes-per-file


    var CountCountryForestAreaAction = /*#__PURE__*/function () {
      function CountCountryForestAreaAction(_payload) {
        _classCallCheck(this, CountCountryForestAreaAction);

        this._payload = _payload;
        this.type = countryListActionsType.countCountryForestArea;
      }

      _createClass(CountCountryForestAreaAction, [{
        key: "donation",
        get: function get() {
          return this._payload.donation;
        }
      }]);

      return CountCountryForestAreaAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var ResetSearchCountriesAction = function ResetSearchCountriesAction() {
      _classCallCheck(this, ResetSearchCountriesAction);

      this.type = countryListActionsType.resetSearchCounrties;
    };
    /***/

  },

  /***/
  "./src/app/store/country-list/country-list.effects.ts":
  /*!************************************************************!*\
    !*** ./src/app/store/country-list/country-list.effects.ts ***!
    \************************************************************/

  /*! exports provided: CountryListEffects */

  /***/
  function srcAppStoreCountryListCountryListEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListEffects", function () {
      return CountryListEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _country_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./country-list.actions */
    "./src/app/store/country-list/country-list.actions.ts");
    /* harmony import */


    var src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/country-list/country-data.service */
    "./src/app/services/country-list/country-data.service.ts");

    var CountryListEffects = /*#__PURE__*/function () {
      function CountryListEffects(_actions$, _countryListDataService) {
        _classCallCheck(this, CountryListEffects);

        this._actions$ = _actions$;
        this._countryListDataService = _countryListDataService;
      }

      _createClass(CountryListEffects, [{
        key: "loadCountryList",
        value: function loadCountryList() {
          var _this3 = this;

          return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_list_actions__WEBPACK_IMPORTED_MODULE_4__["countryListActionsType"].initCountries), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this3._countryListDataService.loadCountriesList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (currentCountryList) {
              return new _country_list_actions__WEBPACK_IMPORTED_MODULE_4__["InitCountryListSuccessAction"]({
                countryList: currentCountryList
              });
            }));
          }));
        }
      }, {
        key: "loadCountriesForestAreaData",
        value: function loadCountriesForestAreaData() {
          var _this4 = this;

          return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_list_actions__WEBPACK_IMPORTED_MODULE_4__["countryListActionsType"].initCountriesForestAreaData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this4._countryListDataService.loadCountriesForestAreaData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (countriesForestData) {
              return new _country_list_actions__WEBPACK_IMPORTED_MODULE_4__["InitCountriesForestAreaDataSuccessAction"]({
                countriesForestAreaData: countriesForestData
              });
            }));
          }));
        }
      }, {
        key: "loadCapitalsCoordinates",
        value: function loadCapitalsCoordinates() {
          var _this5 = this;

          return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_country_list_actions__WEBPACK_IMPORTED_MODULE_4__["countryListActionsType"].initCapitalsCoordinatesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this5._countryListDataService.loadCapitalsCoordinatesData(payload.countryList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (currentCapitalsData) {
              return new _country_list_actions__WEBPACK_IMPORTED_MODULE_4__["InitCapitalsCoordinatesDataSuccessAction"]({
                capitalsCoordinatesData: currentCapitalsData
              });
            }));
          }));
        }
      }]);

      return CountryListEffects;
    }();

    CountryListEffects.ɵfac = function CountryListEffects_Factory(t) {
      return new (t || CountryListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_5__["CountryListDataService"]));
    };

    CountryListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CountryListEffects,
      factory: CountryListEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CountryListEffects.prototype, "loadCountryList", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CountryListEffects.prototype, "loadCountriesForestAreaData", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CountryListEffects.prototype, "loadCapitalsCoordinates", null);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_5__["CountryListDataService"]
        }];
      }, {
        loadCountryList: [],
        loadCountriesForestAreaData: [],
        loadCapitalsCoordinates: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/store/country-list/country-list.facade.ts":
  /*!***********************************************************!*\
    !*** ./src/app/store/country-list/country-list.facade.ts ***!
    \***********************************************************/

  /*! exports provided: FacadeServiceCountryList */

  /***/
  function srcAppStoreCountryListCountryListFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacadeServiceCountryList", function () {
      return FacadeServiceCountryList;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/country-list/capital-list-snapshot */
    "./src/app/models/country-list/capital-list-snapshot.ts");
    /* harmony import */


    var _country_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./country-list.actions */
    "./src/app/store/country-list/country-list.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/country-list/country-data.service */
    "./src/app/services/country-list/country-data.service.ts");

    var FacadeServiceCountryList = /*#__PURE__*/function () {
      function FacadeServiceCountryList(_store$, _countryListDataService) {
        _classCallCheck(this, FacadeServiceCountryList);

        this._store$ = _store$;
        this._countryListDataService = _countryListDataService;
      }

      _createClass(FacadeServiceCountryList, [{
        key: "saveCapitalsCoordinatesData",
        value: function saveCapitalsCoordinatesData(capitalsData) {
          this._countryListDataService.saveCapitalsCoordinatesData(new src_app_models_country_list_capital_list_snapshot__WEBPACK_IMPORTED_MODULE_1__["CapitalListSnapshot"](capitalsData));
        }
      }, {
        key: "toggleMapMode",
        value: function toggleMapMode() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleMapModeCountryListAction"]());
        }
      }, {
        key: "toggleCapitalsMode",
        value: function toggleCapitalsMode() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleShowCapitalsModeCountryListAction"]());
        }
      }, {
        key: "searchCurrentCountry",
        value: function searchCurrentCountry(countryName) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchCountryAction"]({
            name: countryName
          }));
        }
      }, {
        key: "searchPreviousCountry",
        value: function searchPreviousCountry(countryName) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchPreviousCountryAction"]({
            name: countryName
          }));
        }
      }, {
        key: "searchNextCountry",
        value: function searchNextCountry(countryName) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchNextCountryAction"]({
            name: countryName
          }));
        }
      }, {
        key: "searchCountry",
        value: function searchCountry(countryName) {
          this.searchCurrentCountry(countryName);
          this.searchPreviousCountry(countryName);
          this.searchNextCountry(countryName);
        }
      }, {
        key: "searchMapCountry",
        value: function searchMapCountry(countryName) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchMapCountryAction"]({
            name: countryName
          }));
        }
      }, {
        key: "searchCountrySuccess",
        value: function searchCountrySuccess() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchCountrySuccessAction"]());
        }
      }, {
        key: "searchSubRegionCountries",
        value: function searchSubRegionCountries(regionName, subRegionName) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["SearchSubRegionCountriesAction"]({
            regionName: regionName,
            subRegionName: subRegionName
          }));
        }
      }, {
        key: "initCountryList",
        value: function initCountryList() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCountryListAction"]());
        }
      }, {
        key: "initCapitalsCoordinatesData",
        value: function initCapitalsCoordinatesData(countryList) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCapitalsCoordinatesDataAction"]({
            countryList: countryList
          }));
        }
      }, {
        key: "initCountriesForestAreaData",
        value: function initCountriesForestAreaData() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCountriesForestAreaDataAction"]());
        }
      }, {
        key: "initCountriesForestArea",
        value: function initCountriesForestArea() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCountriesForestAreaAction"]());
        }
      }, {
        key: "initCapitalsCoordinates",
        value: function initCapitalsCoordinates() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["InitCapitalsCoordinatesAction"]());
        }
      }, {
        key: "countriesLoadingSuccess",
        value: function countriesLoadingSuccess() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["IsCountriesLoadingSuccessAction"]());
        }
      }, {
        key: "dontSearchMapCountry",
        value: function dontSearchMapCountry() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["DontSearchMapCountryAction"]());
        }
      }, {
        key: "countCountryForestArea",
        value: function countCountryForestArea(donation) {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["CountCountryForestAreaAction"]({
            donation: donation
          }));
        }
      }, {
        key: "resetSearchCounrties",
        value: function resetSearchCounrties() {
          this._store$.dispatch(new _country_list_actions__WEBPACK_IMPORTED_MODULE_2__["ResetSearchCountriesAction"]());
        }
      }]);

      return FacadeServiceCountryList;
    }();

    FacadeServiceCountryList.ɵfac = function FacadeServiceCountryList_Factory(t) {
      return new (t || FacadeServiceCountryList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_4__["CountryListDataService"]));
    };

    FacadeServiceCountryList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FacadeServiceCountryList,
      factory: FacadeServiceCountryList.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceCountryList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: src_app_services_country_list_country_data_service__WEBPACK_IMPORTED_MODULE_4__["CountryListDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/country-list/country-list.reducer.ts":
  /*!************************************************************!*\
    !*** ./src/app/store/country-list/country-list.reducer.ts ***!
    \************************************************************/

  /*! exports provided: countryListFeatureKey, countryListReducer, StateReducerCountryList */

  /***/
  function srcAppStoreCountryListCountryListReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countryListFeatureKey", function () {
      return countryListFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countryListReducer", function () {
      return countryListReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerCountryList", function () {
      return StateReducerCountryList;
    });
    /* harmony import */


    var _country_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./country-list.actions */
    "./src/app/store/country-list/country-list.actions.ts");

    var countryListFeatureKey = 'COUNTRY-LIST';
    var initialState = {
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
      searchMapCountry: null
    };

    function countryListReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountries:
          {
            return Object.assign({}, state);
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isInitedCountries: true,
              countryList: _toConsumableArray(action.countryList).filter(function (country) {
                return Boolean(country);
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCapitalsCoordinatesData:
          {
            return Object.assign({}, state);
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCapitalsCoordinatesDataSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isInitedCapitalsCoordinatesData: true,
              capitalsCoordinatesData: _toConsumableArray(action.capitalsCoordinatesData).filter(function (capital) {
                if (Boolean(capital)) {
                  return {
                    latitude: capital.latitude,
                    longitude: capital.longitude,
                    name: capital.name
                  };
                }
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCapitalsCoordinates:
          {
            return Object.assign(Object.assign({}, state), {
              countryList: _toConsumableArray(state.capitalsCoordinatesData).filter(Boolean).map(function (capital) {
                if (Boolean(capital)) {
                  var currentCountry = state.countryList.find(function (country) {
                    return country.capital.name === capital.name;
                  });

                  if (Boolean(currentCountry)) {
                    var newCountry = currentCountry.clone();
                    newCountry.capital = capital.clone();
                    return newCountry;
                  }
                }
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesForestAreaData:
          {
            return Object.assign({}, state);
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesForestAreaDataSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isInitedCountriesForestAreaData: true,
              countriesForestAreaData: _toConsumableArray(action.countriesForestAreaData).filter(function (forestArea) {
                return Boolean(forestArea);
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].initCountriesForestArea:
          {
            return Object.assign(Object.assign({}, state), {
              countryList: _toConsumableArray(state.countriesForestAreaData).filter(Boolean).map(function (forestArea) {
                if (Boolean(forestArea)) {
                  var currentCountry = state.countryList.find(function (country) {
                    return country.id === forestArea.id;
                  });

                  if (Boolean(currentCountry)) {
                    var newCountry = currentCountry.clone();
                    newCountry.forestArea = Number(forestArea.value);
                    return newCountry;
                  }
                }
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].isCountriesLoadingSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isLoading: false
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchSubRegionCountries:
          {
            var currentRegionCountries = _toConsumableArray(state.countryList).filter(function (country) {
              if (Boolean(country)) {
                if (country.region.toLowerCase() === action.regionName) {
                  return country;
                }
              }
            });

            return Object.assign(Object.assign({}, state), {
              subRegionsCountries: _toConsumableArray(currentRegionCountries).filter(function (country) {
                if (Boolean(country)) {
                  var countrySubRegionInfo = country.subRegion.toLowerCase().split(' ');

                  if (countrySubRegionInfo[0] === action.subRegionName) {
                    return country;
                  }
                }
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchCountry:
          {
            return Object.assign(Object.assign({}, state), {
              isSearchLoading: true,
              searchCountry: _toConsumableArray(state.subRegionsCountries).find(function (country) {
                if (Boolean(country)) {
                  var currentCountryRouterName = country.name.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

                  if (action.name === currentCountryRouterName) {
                    return country;
                  }
                }
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchMapCountry:
          {
            return Object.assign(Object.assign({}, state), {
              searchMapCountry: _toConsumableArray(state.countryList).find(function (country) {
                if (Boolean(country)) {
                  var currentCountryName = country.name.toLowerCase().split(' ').join('');
                  var currentSearchMapCountryName = action.name.toLowerCase().split(' ').join('');

                  if (currentCountryName.includes(currentSearchMapCountryName)) {
                    return country;
                  } else {
                    return null;
                  }
                }
              })
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].dontSearchMapCountry:
          {
            return Object.assign(Object.assign({}, state), {
              searchMapCountry: null
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchCountrySuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isSearchLoading: false
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchPreviousCountry:
          {
            var previousCountryIndex = _toConsumableArray(state.subRegionsCountries).findIndex(function (country) {
              if (Boolean(country)) {
                var currentCountryRouterName = country.name.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

                if (action.name === currentCountryRouterName) {
                  return country;
                }
              }
            }) - 1;

            if (previousCountryIndex >= 0) {
              return Object.assign(Object.assign({}, state), {
                searchPreviousCountry: state.subRegionsCountries[previousCountryIndex].clone()
              });
            } else {
              return Object.assign(Object.assign({}, state), {
                searchPreviousCountry: null
              });
            }
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].searchNextCountry:
          {
            var nextCountryIndex = _toConsumableArray(state.subRegionsCountries).findIndex(function (country) {
              if (Boolean(country)) {
                var currentCountryRouterName = country.name.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

                if (action.name === currentCountryRouterName) {
                  return country;
                }
              }
            }) + 1;

            if (nextCountryIndex < state.subRegionsCountries.length) {
              return Object.assign(Object.assign({}, state), {
                searchNextCountry: state.subRegionsCountries[nextCountryIndex].clone()
              });
            } else {
              return Object.assign(Object.assign({}, state), {
                searchNextCountry: null
              });
            }
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].toggleMapMode:
          {
            return Object.assign(Object.assign({}, state), {
              isMapMode: !state.isMapMode,
              isGlobeMode: !state.isGlobeMode
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].toggleShowCapitalsMode:
          {
            return Object.assign(Object.assign({}, state), {
              isShowCapitalsMode: !state.isShowCapitalsMode
            });
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].countCountryForestArea:
          {
            var currentCountry = _toConsumableArray(state.countryList).filter(function (country) {
              return Boolean(country);
            }).find(function (country) {
              if (country.id === action.donation.country.id) {
                return country.clone();
              }
            });

            if (Boolean(currentCountry)) {
              var currentCountryId = currentCountry.id;
              var currentCountryArea = currentCountry.area;
              var currentCountryForestAreaInProcents = currentCountry.forestArea;
              var oneHundredProcents = 100;
              var currentCountryForestAreaInSqKm = currentCountryArea * currentCountryForestAreaInProcents / oneHundredProcents;
              var donationTreeNumber = action.donation.treeDonation.amount;
              var newCountryForestAreaInSqKm = currentCountryForestAreaInSqKm + donationTreeNumber;
              var newCountryForestAreaInProcents = newCountryForestAreaInSqKm * oneHundredProcents / currentCountryArea;
              return Object.assign(Object.assign({}, state), {
                countryList: _toConsumableArray(state.countryList).filter(function (country) {
                  return Boolean(country);
                }).map(function (country) {
                  if (country.id === currentCountryId) {
                    var newCountry = currentCountry.clone();
                    newCountry.forestArea = newCountryForestAreaInProcents;
                    return newCountry.clone();
                  } else {
                    return country.clone();
                  }
                }),
                countriesForestAreaData: _toConsumableArray(state.countriesForestAreaData).map(function (forestAreaObject) {
                  if (forestAreaObject.id === currentCountryId) {
                    return {
                      id: currentCountryId,
                      value: String(newCountryForestAreaInProcents)
                    };
                  } else {
                    return Object.assign({}, forestAreaObject);
                  }
                })
              });
            } else {
              return Object.assign({}, state);
            }
          }

        case _country_list_actions__WEBPACK_IMPORTED_MODULE_0__["countryListActionsType"].resetSearchCounrties:
          {
            return Object.assign(Object.assign({}, state), {
              searchCountry: null,
              searchMapCountry: null,
              searchNextCountry: null,
              searchPreviousCountry: null
            });
          }

        default:
          {
            return Object.assign({}, state);
          }
      }
    }

    function StateReducerCountryList(state, action) {
      return countryListReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/country-list/country-list.selectors.ts":
  /*!**************************************************************!*\
    !*** ./src/app/store/country-list/country-list.selectors.ts ***!
    \**************************************************************/

  /*! exports provided: selectStateCountryList, selectCountryListIsLoading, selectCountryList, selectCountryListIsInitedCountries, selectCountriesForestAreaData, selectIsInitedCountriesForestAreaData, selectCapitalsCoordinatesData, selectIsInitedCapitalsCoordinatesData, selectSubRegionsCountries, selectSearchCountry, selectSearchPreviousCountry, selectSearchNextCountry, selectIsCountrySearchLoading, selectIsMapMode, selectIsGlobeMode, selectIsShowCapitalsMode, selectSearchMapCountry */

  /***/
  function srcAppStoreCountryListCountryListSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateCountryList", function () {
      return selectStateCountryList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountryListIsLoading", function () {
      return selectCountryListIsLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountryList", function () {
      return selectCountryList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountryListIsInitedCountries", function () {
      return selectCountryListIsInitedCountries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesForestAreaData", function () {
      return selectCountriesForestAreaData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsInitedCountriesForestAreaData", function () {
      return selectIsInitedCountriesForestAreaData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCapitalsCoordinatesData", function () {
      return selectCapitalsCoordinatesData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsInitedCapitalsCoordinatesData", function () {
      return selectIsInitedCapitalsCoordinatesData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSubRegionsCountries", function () {
      return selectSubRegionsCountries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSearchCountry", function () {
      return selectSearchCountry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSearchPreviousCountry", function () {
      return selectSearchPreviousCountry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSearchNextCountry", function () {
      return selectSearchNextCountry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsCountrySearchLoading", function () {
      return selectIsCountrySearchLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsMapMode", function () {
      return selectIsMapMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsGlobeMode", function () {
      return selectIsGlobeMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsShowCapitalsMode", function () {
      return selectIsShowCapitalsMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSearchMapCountry", function () {
      return selectSearchMapCountry;
    });
    /* harmony import */


    var _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./country-list.reducer */
    "./src/app/store/country-list/country-list.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectStateCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListFeatureKey"]);
    var selectCountryListIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isLoading;
    });
    var selectCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.countryList;
    });
    var selectCountryListIsInitedCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isInitedCountries;
    });
    var selectCountriesForestAreaData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.countriesForestAreaData;
    });
    var selectIsInitedCountriesForestAreaData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isInitedCountriesForestAreaData;
    });
    var selectCapitalsCoordinatesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.capitalsCoordinatesData;
    });
    var selectIsInitedCapitalsCoordinatesData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isInitedCapitalsCoordinatesData;
    });
    var selectSubRegionsCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.subRegionsCountries;
    });
    var selectSearchCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.searchCountry;
    });
    var selectSearchPreviousCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.searchPreviousCountry;
    });
    var selectSearchNextCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.searchNextCountry;
    });
    var selectIsCountrySearchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isSearchLoading;
    });
    var selectIsMapMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isMapMode;
    });
    var selectIsGlobeMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isGlobeMode;
    });
    var selectIsShowCapitalsMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.isShowCapitalsMode;
    });
    var selectSearchMapCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateCountryList, function (state) {
      return state.searchMapCountry;
    });
    /***/
  },

  /***/
  "./src/app/store/country-list/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/country-list/index.ts ***!
    \*********************************************/

  /*! exports provided: countryListFeatureKey, countryListReducer, StateReducerCountryList */

  /***/
  function srcAppStoreCountryListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./country-list.reducer */
    "./src/app/store/country-list/country-list.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "countryListFeatureKey", function () {
      return _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "countryListReducer", function () {
      return _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerCountryList", function () {
      return _country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerCountryList"];
    });
    /***/

  },

  /***/
  "./src/app/store/donation-list/donation-list.actions.ts":
  /*!**************************************************************!*\
    !*** ./src/app/store/donation-list/donation-list.actions.ts ***!
    \**************************************************************/

  /*! exports provided: donationListActionsType, InitDonationListAction, InitDonationListSuccessAction, InitNewUserDonationBeforeRegistrationAction, MakeDonationAction, DeleteDonationAction, InitNewCountryForDonationAction, DeleteNewCountryForDonationAction, InitDonationCurrentCountryAction, InitUserDonationListAction, InitUserDonationListSuccessAction, InitAllDonatorsDataByCostAction, InitAllDonatorsDataByTreeAction */

  /***/
  function srcAppStoreDonationListDonationListActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "donationListActionsType", function () {
      return donationListActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitDonationListAction", function () {
      return InitDonationListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitDonationListSuccessAction", function () {
      return InitDonationListSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitNewUserDonationBeforeRegistrationAction", function () {
      return InitNewUserDonationBeforeRegistrationAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MakeDonationAction", function () {
      return MakeDonationAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteDonationAction", function () {
      return DeleteDonationAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitNewCountryForDonationAction", function () {
      return InitNewCountryForDonationAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteNewCountryForDonationAction", function () {
      return DeleteNewCountryForDonationAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitDonationCurrentCountryAction", function () {
      return InitDonationCurrentCountryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitUserDonationListAction", function () {
      return InitUserDonationListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitUserDonationListSuccessAction", function () {
      return InitUserDonationListSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByCostAction", function () {
      return InitAllDonatorsDataByCostAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByTreeAction", function () {
      return InitAllDonatorsDataByTreeAction;
    });

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
    })(donationListActionsType || (donationListActionsType = {})); // tslint:disable-next-line: max-classes-per-file


    var InitDonationListAction = function InitDonationListAction() {
      _classCallCheck(this, InitDonationListAction);

      this.type = donationListActionsType.initDonationList;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitDonationListSuccessAction = /*#__PURE__*/function () {
      function InitDonationListSuccessAction(_payload) {
        _classCallCheck(this, InitDonationListSuccessAction);

        this._payload = _payload;
        this.type = donationListActionsType.InitDonationListSuccess;
      }

      _createClass(InitDonationListSuccessAction, [{
        key: "donationList",
        get: function get() {
          return this._payload.donationList;
        }
      }]);

      return InitDonationListSuccessAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitNewUserDonationBeforeRegistrationAction = /*#__PURE__*/function () {
      function InitNewUserDonationBeforeRegistrationAction(_payload) {
        _classCallCheck(this, InitNewUserDonationBeforeRegistrationAction);

        this._payload = _payload;
        this.type = donationListActionsType.initNewUserDonationBeforeRegistration;
      }

      _createClass(InitNewUserDonationBeforeRegistrationAction, [{
        key: "newDonation",
        get: function get() {
          return this._payload.donation;
        }
      }]);

      return InitNewUserDonationBeforeRegistrationAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var MakeDonationAction = /*#__PURE__*/function () {
      function MakeDonationAction(_payload) {
        _classCallCheck(this, MakeDonationAction);

        this._payload = _payload;
        this.type = donationListActionsType.makeDonation;
      }

      _createClass(MakeDonationAction, [{
        key: "donation",
        get: function get() {
          return this._payload.donation;
        }
      }, {
        key: "userId",
        get: function get() {
          return this._payload.userId;
        }
      }]);

      return MakeDonationAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var DeleteDonationAction = /*#__PURE__*/function () {
      function DeleteDonationAction(_payload) {
        _classCallCheck(this, DeleteDonationAction);

        this._payload = _payload;
        this.type = donationListActionsType.deleteDonation;
      }

      _createClass(DeleteDonationAction, [{
        key: "donation",
        get: function get() {
          return this._payload.donation;
        }
      }]);

      return DeleteDonationAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitNewCountryForDonationAction = /*#__PURE__*/function () {
      function InitNewCountryForDonationAction(_payload) {
        _classCallCheck(this, InitNewCountryForDonationAction);

        this._payload = _payload;
        this.type = donationListActionsType.initNewCountryForDonation;
      }

      _createClass(InitNewCountryForDonationAction, [{
        key: "newCountry",
        get: function get() {
          return this._payload.country;
        }
      }]);

      return InitNewCountryForDonationAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var DeleteNewCountryForDonationAction = /*#__PURE__*/function () {
      function DeleteNewCountryForDonationAction(_payload) {
        _classCallCheck(this, DeleteNewCountryForDonationAction);

        this._payload = _payload;
        this.type = donationListActionsType.deleteNewCountryForDonation;
      }

      _createClass(DeleteNewCountryForDonationAction, [{
        key: "newCountry",
        get: function get() {
          return this._payload.country;
        }
      }]);

      return DeleteNewCountryForDonationAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitDonationCurrentCountryAction = /*#__PURE__*/function () {
      function InitDonationCurrentCountryAction(_payload) {
        _classCallCheck(this, InitDonationCurrentCountryAction);

        this._payload = _payload;
        this.type = donationListActionsType.initDonationCurrentCountry;
      }

      _createClass(InitDonationCurrentCountryAction, [{
        key: "donation",
        get: function get() {
          return this._payload.donation;
        }
      }, {
        key: "country",
        get: function get() {
          return this._payload.country;
        }
      }]);

      return InitDonationCurrentCountryAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitUserDonationListAction = /*#__PURE__*/function () {
      function InitUserDonationListAction(_payload) {
        _classCallCheck(this, InitUserDonationListAction);

        this._payload = _payload;
        this.type = donationListActionsType.initUserDonationList;
      }

      _createClass(InitUserDonationListAction, [{
        key: "id",
        get: function get() {
          return this._payload.id;
        }
      }]);

      return InitUserDonationListAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitUserDonationListSuccessAction = function InitUserDonationListSuccessAction() {
      _classCallCheck(this, InitUserDonationListSuccessAction);

      this.type = donationListActionsType.initUserDonationListSuccess;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitAllDonatorsDataByCostAction = /*#__PURE__*/function () {
      function InitAllDonatorsDataByCostAction(_payload) {
        _classCallCheck(this, InitAllDonatorsDataByCostAction);

        this._payload = _payload;
        this.type = donationListActionsType.initAllDonatorsDataByCost;
      }

      _createClass(InitAllDonatorsDataByCostAction, [{
        key: "userList",
        get: function get() {
          return this._payload.userList;
        }
      }]);

      return InitAllDonatorsDataByCostAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitAllDonatorsDataByTreeAction = /*#__PURE__*/function () {
      function InitAllDonatorsDataByTreeAction(_payload) {
        _classCallCheck(this, InitAllDonatorsDataByTreeAction);

        this._payload = _payload;
        this.type = donationListActionsType.initAllDonatorsDataByTree;
      }

      _createClass(InitAllDonatorsDataByTreeAction, [{
        key: "userList",
        get: function get() {
          return this._payload.userList;
        }
      }]);

      return InitAllDonatorsDataByTreeAction;
    }();
    /***/

  },

  /***/
  "./src/app/store/donation-list/donation-list.effects.ts":
  /*!**************************************************************!*\
    !*** ./src/app/store/donation-list/donation-list.effects.ts ***!
    \**************************************************************/

  /*! exports provided: DonationListEffects */

  /***/
  function srcAppStoreDonationListDonationListEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationListEffects", function () {
      return DonationListEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _donation_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./donation-list.actions */
    "./src/app/store/donation-list/donation-list.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/donation-list/donation-list-data.service */
    "./src/app/services/donation-list/donation-list-data.service.ts");

    var DonationListEffects = /*#__PURE__*/function () {
      function DonationListEffects(_actions$, _donationListDataService) {
        _classCallCheck(this, DonationListEffects);

        this._actions$ = _actions$;
        this._donationListDataService = _donationListDataService;
      }

      _createClass(DonationListEffects, [{
        key: "loadDonationList",
        value: function loadDonationList() {
          var _this6 = this;

          return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_donation_list_actions__WEBPACK_IMPORTED_MODULE_3__["donationListActionsType"].initDonationList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this6._donationListDataService.loadDonationList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (donationList) {
              return new _donation_list_actions__WEBPACK_IMPORTED_MODULE_3__["InitDonationListSuccessAction"]({
                donationList: donationList
              });
            }));
          }));
        }
      }]);

      return DonationListEffects;
    }();

    DonationListEffects.ɵfac = function DonationListEffects_Factory(t) {
      return new (t || DonationListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_5__["DonationListDataService"]));
    };

    DonationListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DonationListEffects,
      factory: DonationListEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], DonationListEffects.prototype, "loadDonationList", null);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DonationListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: src_app_services_donation_list_donation_list_data_service__WEBPACK_IMPORTED_MODULE_5__["DonationListDataService"]
        }];
      }, {
        loadDonationList: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/store/donation-list/donation-list.facade.ts":
  /*!*************************************************************!*\
    !*** ./src/app/store/donation-list/donation-list.facade.ts ***!
    \*************************************************************/

  /*! exports provided: FacadeServiceDonationList */

  /***/
  function srcAppStoreDonationListDonationListFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacadeServiceDonationList", function () {
      return FacadeServiceDonationList;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./donation-list.actions */
    "./src/app/store/donation-list/donation-list.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var FacadeServiceDonationList = /*#__PURE__*/function () {
      function FacadeServiceDonationList(_store$) {
        _classCallCheck(this, FacadeServiceDonationList);

        this._store$ = _store$;
      }

      _createClass(FacadeServiceDonationList, [{
        key: "initNewUserDonationBeforeRegistration",
        value: function initNewUserDonationBeforeRegistration(donation) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewUserDonationBeforeRegistrationAction"]({
            donation: donation
          }));
        }
      }, {
        key: "makeDonation",
        value: function makeDonation(donation, userId) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["MakeDonationAction"]({
            donation: donation,
            userId: userId
          }));
        }
      }, {
        key: "deleteDonation",
        value: function deleteDonation(donation) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteDonationAction"]({
            donation: donation
          }));
        }
      }, {
        key: "initNewCountryForDonation",
        value: function initNewCountryForDonation(country) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewCountryForDonationAction"]({
            country: country
          }));
        }
      }, {
        key: "initDonationCurrentCountry",
        value: function initDonationCurrentCountry(donation, country) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitDonationCurrentCountryAction"]({
            donation: donation,
            country: country
          }));
        }
      }, {
        key: "initUserDonationList",
        value: function initUserDonationList(id) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserDonationListAction"]({
            id: id
          }));
        }
      }, {
        key: "initUserDonationListSuccess",
        value: function initUserDonationListSuccess() {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserDonationListSuccessAction"]());
        }
      }, {
        key: "initDonationList",
        value: function initDonationList() {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitDonationListAction"]());
        }
      }, {
        key: "deleteNewCountryForDonation",
        value: function deleteNewCountryForDonation(country) {
          this._store$.dispatch(new _donation_list_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteNewCountryForDonationAction"]({
            country: country
          }));
        }
      }]);

      return FacadeServiceDonationList;
    }();

    FacadeServiceDonationList.ɵfac = function FacadeServiceDonationList_Factory(t) {
      return new (t || FacadeServiceDonationList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    FacadeServiceDonationList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FacadeServiceDonationList,
      factory: FacadeServiceDonationList.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceDonationList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/donation-list/donation-list.reducer.ts":
  /*!**************************************************************!*\
    !*** ./src/app/store/donation-list/donation-list.reducer.ts ***!
    \**************************************************************/

  /*! exports provided: donationListFeatureKey, donationListReducer, StateReducerDonationList */

  /***/
  function srcAppStoreDonationListDonationListReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "donationListFeatureKey", function () {
      return donationListFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "donationListReducer", function () {
      return donationListReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDonationList", function () {
      return StateReducerDonationList;
    });
    /* harmony import */


    var _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./donation-list.actions */
    "./src/app/store/donation-list/donation-list.actions.ts");

    var donationListFeatureKey = 'DONATION-LIST';
    var initialState = {
      isLoading: true,
      isInitedDonationList: false,
      isInitedDonationListBeforRegistration: false,
      isInitedCountriesForDonation: false,
      isInitedUserDonationList: false,
      donationList: null,
      beforeRegistrationUserDonationList: null,
      countriesForDonation: null,
      userDonationList: null
    };

    function donationListReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initDonationList:
          {
            return Object.assign({}, state);
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].InitDonationListSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              isInitedDonationList: true,
              donationList: _toConsumableArray(action.donationList).filter(function (donation) {
                return Boolean(donation);
              })
            });
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initNewUserDonationBeforeRegistration:
          {
            var newDonationListBeforeRegistration = Boolean(state.beforeRegistrationUserDonationList) ? [].concat(_toConsumableArray(state.beforeRegistrationUserDonationList), [action.newDonation.clone()]) : [action.newDonation.clone()];
            return Object.assign(Object.assign({}, state), {
              isInitedDonationListBeforRegistration: true,
              beforeRegistrationUserDonationList: _toConsumableArray(newDonationListBeforeRegistration)
            });
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].makeDonation:
          {
            var newCurrentUserDonation = action.donation.clone();
            newCurrentUserDonation.id = action.userId;
            var newDonationList = Boolean(state.donationList) ? [].concat(_toConsumableArray(state.donationList), [newCurrentUserDonation.clone()]) : [newCurrentUserDonation.clone()];
            var newUserDonationList = Boolean(state.userDonationList) ? [].concat(_toConsumableArray(state.userDonationList), [newCurrentUserDonation.clone()]) : [newCurrentUserDonation.clone()];

            var newBeforeRegistrationUserDonationList = _toConsumableArray(state.beforeRegistrationUserDonationList).filter(function (donation) {
              if (!donation.equals(action.donation)) {
                return donation;
              }
            });

            var isInitedDonationListAfterMakeDonation = Boolean(newBeforeRegistrationUserDonationList.length) ? true : false;
            return Object.assign(Object.assign({}, state), {
              donationList: _toConsumableArray(newDonationList),
              userDonationList: _toConsumableArray(newUserDonationList),
              beforeRegistrationUserDonationList: _toConsumableArray(newBeforeRegistrationUserDonationList),
              isInitedDonationListBeforRegistration: isInitedDonationListAfterMakeDonation
            });
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].deleteDonation:
          {
            var _newBeforeRegistrationUserDonationList = _toConsumableArray(state.beforeRegistrationUserDonationList).filter(function (donation) {
              if (!donation.equals(action.donation)) {
                return donation;
              }
            });

            var isInitedDonationListAfterDeleteDonation = Boolean(_newBeforeRegistrationUserDonationList.length) ? true : false;
            return Object.assign(Object.assign({}, state), {
              beforeRegistrationUserDonationList: _toConsumableArray(_newBeforeRegistrationUserDonationList),
              isInitedDonationListBeforRegistration: isInitedDonationListAfterDeleteDonation
            });
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initNewCountryForDonation:
          {
            if (Boolean(state.countriesForDonation)) {
              return Object.assign(Object.assign({}, state), {
                countriesForDonation: [].concat(_toConsumableArray(state.countriesForDonation), [action.newCountry.clone()])
              });
            } else {
              return Object.assign(Object.assign({}, state), {
                isInitedCountriesForDonation: true,
                countriesForDonation: [action.newCountry.clone()]
              });
            }
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].deleteNewCountryForDonation:
          {
            var searchNewCountryList = _toConsumableArray(state.countriesForDonation).filter(function (country) {
              return !country.equals(action.newCountry);
            });

            if (Boolean(searchNewCountryList.length)) {
              return Object.assign(Object.assign({}, state), {
                countriesForDonation: _toConsumableArray(searchNewCountryList)
              });
            } else {
              return Object.assign(Object.assign({}, state), {
                isInitedCountriesForDonation: false,
                countriesForDonation: null
              });
            }
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initDonationCurrentCountry:
          {
            var _newBeforeRegistrationUserDonationList2 = _toConsumableArray(state.beforeRegistrationUserDonationList).map(function (donation) {
              if (donation.equals(action.donation)) {
                var newDonation = donation.clone();
                newDonation.country = action.country;
                return newDonation;
              } else {
                return donation;
              }
            });

            return Object.assign(Object.assign({}, state), {
              isInitedCountriesForDonation: true,
              beforeRegistrationUserDonationList: _toConsumableArray(_newBeforeRegistrationUserDonationList2)
            });
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initUserDonationList:
          {
            return Object.assign(Object.assign({}, state), {
              userDonationList: _toConsumableArray(state.donationList).filter(function (donation) {
                if (donation.id === action.id) {
                  return donation.clone();
                }
              })
            });
          }

        case _donation_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationListActionsType"].initUserDonationListSuccess:
          {
            var isUserDonationListInited;

            if (Boolean(state.userDonationList)) {
              isUserDonationListInited = Boolean(state.userDonationList.length) ? true : false;
            }

            return Object.assign(Object.assign({}, state), {
              isInitedUserDonationList: isUserDonationListInited
            });
          }

        default:
          {
            return Object.assign({}, state);
          }
      }
    }

    function StateReducerDonationList(state, action) {
      return donationListReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/donation-list/donation-list.selectors.ts":
  /*!****************************************************************!*\
    !*** ./src/app/store/donation-list/donation-list.selectors.ts ***!
    \****************************************************************/

  /*! exports provided: selectStateDonationList, selectDonationListBeforeRegistration, selectCountriesForDonation, selectIsInitedDonationListBeforeRegistration, selectIsInitedCountriesForDonation, selectDonationList, selectUserDonationList, selectIsInitedUserDonationList */

  /***/
  function srcAppStoreDonationListDonationListSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateDonationList", function () {
      return selectStateDonationList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDonationListBeforeRegistration", function () {
      return selectDonationListBeforeRegistration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCountriesForDonation", function () {
      return selectCountriesForDonation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsInitedDonationListBeforeRegistration", function () {
      return selectIsInitedDonationListBeforeRegistration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsInitedCountriesForDonation", function () {
      return selectIsInitedCountriesForDonation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDonationList", function () {
      return selectDonationList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserDonationList", function () {
      return selectUserDonationList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsInitedUserDonationList", function () {
      return selectIsInitedUserDonationList;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _donation_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./donation-list.reducer */
    "./src/app/store/donation-list/donation-list.reducer.ts");

    var selectStateDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_donation_list_reducer__WEBPACK_IMPORTED_MODULE_1__["donationListFeatureKey"]);
    var selectDonationListBeforeRegistration = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.beforeRegistrationUserDonationList;
    });
    var selectCountriesForDonation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.countriesForDonation;
    });
    var selectIsInitedDonationListBeforeRegistration = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.isInitedDonationListBeforRegistration;
    });
    var selectIsInitedCountriesForDonation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.isInitedCountriesForDonation;
    });
    var selectDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.donationList;
    });
    var selectUserDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.userDonationList;
    });
    var selectIsInitedUserDonationList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDonationList, function (state) {
      return state.isInitedUserDonationList;
    });
    /***/
  },

  /***/
  "./src/app/store/donation-list/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/donation-list/index.ts ***!
    \**********************************************/

  /*! exports provided: donationListFeatureKey, donationListReducer, StateReducerDonationList */

  /***/
  function srcAppStoreDonationListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./donation-list.reducer */
    "./src/app/store/donation-list/donation-list.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationListFeatureKey", function () {
      return _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationListReducer", function () {
      return _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDonationList", function () {
      return _donation_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerDonationList"];
    });
    /***/

  },

  /***/
  "./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts ***!
    \**********************************************************************************/

  /*! exports provided: donationStatisticListActionsType, InitUserListDonationStatisticListAction, InitDonationListDonationStatisticListAction, InitAllDonatorsDataByCostDonationStatisticListAction, InitAllDonatorsDataByTreeDonationStatisticListAction, SortTopDonationStatisticListAction, SortBottomDonationStatisticListAction, InitAllCountriesDataByCostDonationStatisticListAction, InitAllCountriesDataByTreeDonationStatisticListAction, InitTopTenDataStatisticDonationStatisticListAction */

  /***/
  function srcAppStoreDonationStatisticListDonationStatisticListActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListActionsType", function () {
      return donationStatisticListActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitUserListDonationStatisticListAction", function () {
      return InitUserListDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitDonationListDonationStatisticListAction", function () {
      return InitDonationListDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByCostDonationStatisticListAction", function () {
      return InitAllDonatorsDataByCostDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAllDonatorsDataByTreeDonationStatisticListAction", function () {
      return InitAllDonatorsDataByTreeDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortTopDonationStatisticListAction", function () {
      return SortTopDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortBottomDonationStatisticListAction", function () {
      return SortBottomDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAllCountriesDataByCostDonationStatisticListAction", function () {
      return InitAllCountriesDataByCostDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAllCountriesDataByTreeDonationStatisticListAction", function () {
      return InitAllCountriesDataByTreeDonationStatisticListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitTopTenDataStatisticDonationStatisticListAction", function () {
      return InitTopTenDataStatisticDonationStatisticListAction;
    });

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
    })(donationStatisticListActionsType || (donationStatisticListActionsType = {})); // tslint:disable-next-line: max-classes-per-file


    var InitUserListDonationStatisticListAction = /*#__PURE__*/function () {
      function InitUserListDonationStatisticListAction(_payload) {
        _classCallCheck(this, InitUserListDonationStatisticListAction);

        this._payload = _payload;
        this.type = donationStatisticListActionsType.initUserList;
      }

      _createClass(InitUserListDonationStatisticListAction, [{
        key: "userList",
        get: function get() {
          return this._payload.userList;
        }
      }]);

      return InitUserListDonationStatisticListAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitDonationListDonationStatisticListAction = /*#__PURE__*/function () {
      function InitDonationListDonationStatisticListAction(_payload) {
        _classCallCheck(this, InitDonationListDonationStatisticListAction);

        this._payload = _payload;
        this.type = donationStatisticListActionsType.initDonationList;
      }

      _createClass(InitDonationListDonationStatisticListAction, [{
        key: "donationList",
        get: function get() {
          return this._payload.donationList;
        }
      }]);

      return InitDonationListDonationStatisticListAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitAllDonatorsDataByCostDonationStatisticListAction = function InitAllDonatorsDataByCostDonationStatisticListAction() {
      _classCallCheck(this, InitAllDonatorsDataByCostDonationStatisticListAction);

      this.type = donationStatisticListActionsType.initAllDonatorsDataByCost;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitAllDonatorsDataByTreeDonationStatisticListAction = function InitAllDonatorsDataByTreeDonationStatisticListAction() {
      _classCallCheck(this, InitAllDonatorsDataByTreeDonationStatisticListAction);

      this.type = donationStatisticListActionsType.initAllDonatorsDataByTree;
    }; // tslint:disable-next-line: max-classes-per-file


    var SortTopDonationStatisticListAction = function SortTopDonationStatisticListAction() {
      _classCallCheck(this, SortTopDonationStatisticListAction);

      this.type = donationStatisticListActionsType.sortTop;
    }; // tslint:disable-next-line: max-classes-per-file


    var SortBottomDonationStatisticListAction = function SortBottomDonationStatisticListAction() {
      _classCallCheck(this, SortBottomDonationStatisticListAction);

      this.type = donationStatisticListActionsType.sortBottom;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitAllCountriesDataByCostDonationStatisticListAction = function InitAllCountriesDataByCostDonationStatisticListAction() {
      _classCallCheck(this, InitAllCountriesDataByCostDonationStatisticListAction);

      this.type = donationStatisticListActionsType.initAllCountriesDataByCost;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitAllCountriesDataByTreeDonationStatisticListAction = function InitAllCountriesDataByTreeDonationStatisticListAction() {
      _classCallCheck(this, InitAllCountriesDataByTreeDonationStatisticListAction);

      this.type = donationStatisticListActionsType.initAllCountriesDataByTree;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitTopTenDataStatisticDonationStatisticListAction = function InitTopTenDataStatisticDonationStatisticListAction() {
      _classCallCheck(this, InitTopTenDataStatisticDonationStatisticListAction);

      this.type = donationStatisticListActionsType.initTopTenDataStatistic;
    };
    /***/

  },

  /***/
  "./src/app/store/donation-statistic-list/donation-statistic-list.facade.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/store/donation-statistic-list/donation-statistic-list.facade.ts ***!
    \*********************************************************************************/

  /*! exports provided: FacadeServiceDonationStatisticList */

  /***/
  function srcAppStoreDonationStatisticListDonationStatisticListFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacadeServiceDonationStatisticList", function () {
      return FacadeServiceDonationStatisticList;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./donation-statistic-list.actions */
    "./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts");
    /* harmony import */


    var src_app_models_donation_statistic_list_statistic_element_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/donation-statistic-list/statistic-element-type */
    "./src/app/models/donation-statistic-list/statistic-element-type.ts");
    /* harmony import */


    var src_app_models_donation_statistic_list_statistic_sub_category_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/donation-statistic-list/statistic-sub-category-type */
    "./src/app/models/donation-statistic-list/statistic-sub-category-type.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var FacadeServiceDonationStatisticList = /*#__PURE__*/function () {
      function FacadeServiceDonationStatisticList(_store$) {
        _classCallCheck(this, FacadeServiceDonationStatisticList);

        this._store$ = _store$;
      }

      _createClass(FacadeServiceDonationStatisticList, [{
        key: "initUserList",
        value: function initUserList(userList) {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserListDonationStatisticListAction"]({
            userList: userList
          }));
        }
      }, {
        key: "initDonationList",
        value: function initDonationList(donationList) {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitDonationListDonationStatisticListAction"]({
            donationList: donationList
          }));
        }
      }, {
        key: "initAllDonatorsDataByCost",
        value: function initAllDonatorsDataByCost() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllDonatorsDataByCostDonationStatisticListAction"]());
        }
      }, {
        key: "initAllDonatorsDataByTree",
        value: function initAllDonatorsDataByTree() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllDonatorsDataByTreeDonationStatisticListAction"]());
        }
      }, {
        key: "initTopTenDataStatistic",
        value: function initTopTenDataStatistic() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitTopTenDataStatisticDonationStatisticListAction"]());
        }
      }, {
        key: "sortTopDonationStatisticList",
        value: function sortTopDonationStatisticList() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["SortTopDonationStatisticListAction"]());
        }
      }, {
        key: "sortBottomDonationStatisticList",
        value: function sortBottomDonationStatisticList() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["SortBottomDonationStatisticListAction"]());
        }
      }, {
        key: "initAllCountriesDataByCost",
        value: function initAllCountriesDataByCost() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllCountriesDataByCostDonationStatisticListAction"]());
        }
      }, {
        key: "initAllCountriesDataByTree",
        value: function initAllCountriesDataByTree() {
          this._store$.dispatch(new _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitAllCountriesDataByTreeDonationStatisticListAction"]());
        }
      }, {
        key: "initDonatorsData",
        value: function initDonatorsData(statisticSubCategory, statisticElement) {
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
      }, {
        key: "initCountriesData",
        value: function initCountriesData(statisticSubCategory, statisticElement) {
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
      }]);

      return FacadeServiceDonationStatisticList;
    }();

    FacadeServiceDonationStatisticList.ɵfac = function FacadeServiceDonationStatisticList_Factory(t) {
      return new (t || FacadeServiceDonationStatisticList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    FacadeServiceDonationStatisticList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FacadeServiceDonationStatisticList,
      factory: FacadeServiceDonationStatisticList.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceDonationStatisticList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts ***!
    \**********************************************************************************/

  /*! exports provided: donationStatisticListFeatureKey, donationStatisticListReducer, StateReducerDonationStatisticList */

  /***/
  function srcAppStoreDonationStatisticListDonationStatisticListReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListFeatureKey", function () {
      return donationStatisticListFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListReducer", function () {
      return donationStatisticListReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDonationStatisticList", function () {
      return StateReducerDonationStatisticList;
    });
    /* harmony import */


    var _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./donation-statistic-list.actions */
    "./src/app/store/donation-statistic-list/donation-statistic-list.actions.ts");

    var donationStatisticListFeatureKey = 'DONATION-STATISTIC-LIST';
    var initialState = {
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

    function donationStatisticListReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initUserList:
          {
            return Object.assign(Object.assign({}, state), {
              userList: _toConsumableArray(action.userList),
              isInitedUserList: true
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initDonationList:
          {
            return Object.assign(Object.assign({}, state), {
              donationList: _toConsumableArray(action.donationList),
              isInitedDonationList: true
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllDonatorsDataByCost:
          {
            var allDonatorsStatisticDataByCost = _toConsumableArray(state.userList).map(function (user) {
              var space = ' ';
              var userFullName = user.name + space + user.surName;
              var userTotalDonationCost = 0;
              var userProfileImage = user.profileImage;

              _toConsumableArray(state.donationList).map(function (donation) {
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
              } else {
                return null;
              }
            }).filter(function (donator) {
              return Boolean(donator);
            });

            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(allDonatorsStatisticDataByCost),
              isInitedAllDataStatistic: true,
              isInitedTopTenDataStatistic: false,
              isInitedStatisticDataByCost: true,
              isInitedStatisticDataByTree: false,
              isSortedByIncrease: false,
              isSortedByDecrease: false
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllDonatorsDataByTree:
          {
            var allDonatorsStatisticDataByTree = _toConsumableArray(state.userList).map(function (user) {
              var space = ' ';
              var userFullName = user.name + space + user.surName;
              var userTotalDonationTreeAmount = 0;
              var userProfileImage = user.profileImage;

              _toConsumableArray(state.donationList).map(function (donation) {
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
              } else {
                return null;
              }
            }).filter(function (donator) {
              return Boolean(donator);
            });

            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(allDonatorsStatisticDataByTree),
              isInitedAllDataStatistic: true,
              isInitedTopTenDataStatistic: false,
              isInitedStatisticDataByCost: false,
              isInitedStatisticDataByTree: true,
              isSortedByIncrease: false,
              isSortedByDecrease: false
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initTopTenDataStatistic:
          {
            var dataStatisticNumber = 11;
            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(state.statisticData).reverse().slice(0, dataStatisticNumber).reverse(),
              isInitedAllDataStatistic: false,
              isInitedTopTenDataStatistic: true
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].sortTop:
          {
            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(state.statisticData).sort(function (statistic, currentStatistic) {
                return statistic.points > currentStatistic.points ? 1 : -1;
              }),
              isSortedByIncrease: true,
              isSortedByDecrease: false
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].sortBottom:
          {
            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(state.statisticData).sort(function (statistic, currentStatistic) {
                return statistic.points > currentStatistic.points ? -1 : 1;
              }),
              isSortedByIncrease: false,
              isSortedByDecrease: true
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllCountriesDataByCost:
          {
            var uniqueCountryNameList = [];

            var donationsStatisticDataByTree = _toConsumableArray(state.donationList).map(function (donation) {
              var takeNumberWordsInCountryName = 2;
              var currentCountryName = donation.country.name;
              var isCountryNameInUniqueCountryNameList = uniqueCountryNameList.filter(function (countryName) {
                if (Boolean(countryName) && currentCountryName === countryName) {
                  return countryName;
                }
              });

              if (!Boolean(isCountryNameInUniqueCountryNameList.length)) {
                uniqueCountryNameList.push(currentCountryName);
                var statisticCountryName = currentCountryName.split(' ').slice(0, takeNumberWordsInCountryName).join(' ');
                var currentCountryCostAmount = 0;

                _toConsumableArray(state.donationList).map(function (currentDonation) {
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
            }).filter(function (donation) {
              return Boolean(donation);
            });

            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(donationsStatisticDataByTree),
              isInitedAllDataStatistic: true,
              isInitedTopTenDataStatistic: false,
              isInitedStatisticDataByCost: true,
              isInitedStatisticDataByTree: false,
              isSortedByIncrease: false,
              isSortedByDecrease: false
            });
          }

        case _donation_statistic_list_actions__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListActionsType"].initAllCountriesDataByTree:
          {
            var _uniqueCountryNameList = [];

            var _donationsStatisticDataByTree = _toConsumableArray(state.donationList).map(function (donation) {
              var takeNumberWordsInCountryName = 2;
              var currentCountryName = donation.country.name;

              var isCountryNameInUniqueCountryNameList = _uniqueCountryNameList.filter(function (countryName) {
                if (Boolean(countryName) && currentCountryName === countryName) {
                  return countryName;
                }
              });

              if (!Boolean(isCountryNameInUniqueCountryNameList.length)) {
                _uniqueCountryNameList.push(currentCountryName);

                var statisticCountryName = currentCountryName.split(' ').slice(0, takeNumberWordsInCountryName).join(' ');
                var currentCountryTreeAmount = 0;

                _toConsumableArray(state.donationList).map(function (currentDonation) {
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
            }).filter(function (donation) {
              return Boolean(donation);
            });

            return Object.assign(Object.assign({}, state), {
              statisticData: _toConsumableArray(_donationsStatisticDataByTree),
              isInitedAllDataStatistic: true,
              isInitedTopTenDataStatistic: false,
              isInitedStatisticDataByCost: false,
              isInitedStatisticDataByTree: true,
              isSortedByIncrease: false,
              isSortedByDecrease: false
            });
          }

        default:
          {
            return Object.assign({}, state);
          }
      }
    }

    function StateReducerDonationStatisticList(state, action) {
      return donationStatisticListReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/donation-statistic-list/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/donation-statistic-list/index.ts ***!
    \********************************************************/

  /*! exports provided: donationStatisticListFeatureKey, donationStatisticListReducer, StateReducerDonationStatisticList */

  /***/
  function srcAppStoreDonationStatisticListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./donation-statistic-list.reducer */
    "./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListFeatureKey", function () {
      return _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListReducer", function () {
      return _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__["donationStatisticListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDonationStatisticList", function () {
      return _donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerDonationStatisticList"];
    });
    /***/

  },

  /***/
  "./src/app/store/index.ts":
  /*!********************************!*\
    !*** ./src/app/store/index.ts ***!
    \********************************/

  /*! exports provided: countryListFeatureKey, countryListReducer, StateReducerCountryList, treeListFeatureKey, treeListReducer, StateReducerTreeList, userListFeatureKey, userListReducer, StateReducerUserList, donationListFeatureKey, donationListReducer, StateReducerDonationList, donationStatisticListFeatureKey, donationStatisticListReducer, StateReducerDonationStatisticList, reducers */

  /***/
  function srcAppStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _reducers;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _country_list_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./country-list/country-list.reducer */
    "./src/app/store/country-list/country-list.reducer.ts");
    /* harmony import */


    var _tree_list_tree_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tree-list/tree-list.reducer */
    "./src/app/store/tree-list/tree-list.reducer.ts");
    /* harmony import */


    var _user_list_user_list_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-list/user-list.reducer */
    "./src/app/store/user-list/user-list.reducer.ts");
    /* harmony import */


    var _donation_list_donation_list_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./donation-list/donation-list.reducer */
    "./src/app/store/donation-list/donation-list.reducer.ts");
    /* harmony import */


    var _donation_statistic_list_donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./donation-statistic-list/donation-statistic-list.reducer */
    "./src/app/store/donation-statistic-list/donation-statistic-list.reducer.ts");
    /* harmony import */


    var _country_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./country-list */
    "./src/app/store/country-list/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "countryListFeatureKey", function () {
      return _country_list__WEBPACK_IMPORTED_MODULE_5__["countryListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "countryListReducer", function () {
      return _country_list__WEBPACK_IMPORTED_MODULE_5__["countryListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerCountryList", function () {
      return _country_list__WEBPACK_IMPORTED_MODULE_5__["StateReducerCountryList"];
    });
    /* harmony import */


    var _tree_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tree-list */
    "./src/app/store/tree-list/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "treeListFeatureKey", function () {
      return _tree_list__WEBPACK_IMPORTED_MODULE_6__["treeListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "treeListReducer", function () {
      return _tree_list__WEBPACK_IMPORTED_MODULE_6__["treeListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerTreeList", function () {
      return _tree_list__WEBPACK_IMPORTED_MODULE_6__["StateReducerTreeList"];
    });
    /* harmony import */


    var _user_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-list */
    "./src/app/store/user-list/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userListFeatureKey", function () {
      return _user_list__WEBPACK_IMPORTED_MODULE_7__["userListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userListReducer", function () {
      return _user_list__WEBPACK_IMPORTED_MODULE_7__["userListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerUserList", function () {
      return _user_list__WEBPACK_IMPORTED_MODULE_7__["StateReducerUserList"];
    });
    /* harmony import */


    var _donation_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./donation-list */
    "./src/app/store/donation-list/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationListFeatureKey", function () {
      return _donation_list__WEBPACK_IMPORTED_MODULE_8__["donationListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationListReducer", function () {
      return _donation_list__WEBPACK_IMPORTED_MODULE_8__["donationListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDonationList", function () {
      return _donation_list__WEBPACK_IMPORTED_MODULE_8__["StateReducerDonationList"];
    });
    /* harmony import */


    var _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./donation-statistic-list */
    "./src/app/store/donation-statistic-list/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListFeatureKey", function () {
      return _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__["donationStatisticListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "donationStatisticListReducer", function () {
      return _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__["donationStatisticListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDonationStatisticList", function () {
      return _donation_statistic_list__WEBPACK_IMPORTED_MODULE_9__["StateReducerDonationStatisticList"];
    });

    var reducers = (_reducers = {}, _defineProperty(_reducers, _country_list_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["countryListFeatureKey"], _country_list_country_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerCountryList"]), _defineProperty(_reducers, _tree_list_tree_list_reducer__WEBPACK_IMPORTED_MODULE_1__["treeListFeatureKey"], _tree_list_tree_list_reducer__WEBPACK_IMPORTED_MODULE_1__["StateReducerTreeList"]), _defineProperty(_reducers, _user_list_user_list_reducer__WEBPACK_IMPORTED_MODULE_2__["userListFeatureKey"], _user_list_user_list_reducer__WEBPACK_IMPORTED_MODULE_2__["StateReducerUserList"]), _defineProperty(_reducers, _donation_list_donation_list_reducer__WEBPACK_IMPORTED_MODULE_3__["donationListFeatureKey"], _donation_list_donation_list_reducer__WEBPACK_IMPORTED_MODULE_3__["StateReducerDonationList"]), _defineProperty(_reducers, _donation_statistic_list_donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_4__["donationStatisticListFeatureKey"], _donation_statistic_list_donation_statistic_list_reducer__WEBPACK_IMPORTED_MODULE_4__["StateReducerDonationStatisticList"]), _reducers);
    /***/
  },

  /***/
  "./src/app/store/tree-list/index.ts":
  /*!******************************************!*\
    !*** ./src/app/store/tree-list/index.ts ***!
    \******************************************/

  /*! exports provided: treeListFeatureKey, treeListReducer, StateReducerTreeList */

  /***/
  function srcAppStoreTreeListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tree-list.reducer */
    "./src/app/store/tree-list/tree-list.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "treeListFeatureKey", function () {
      return _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["treeListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "treeListReducer", function () {
      return _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["treeListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerTreeList", function () {
      return _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerTreeList"];
    });
    /***/

  },

  /***/
  "./src/app/store/tree-list/tree-list.actions.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/tree-list/tree-list.actions.ts ***!
    \******************************************************/

  /*! exports provided: treeListActionsType, InitTreeListAction, InitTreeListSuccessAction, IsTreesLoadingSuccessAction, SearchTreeCategoryTreesAction, SearchTreeAction, SearchTreeSuccessAction, TreeRouterModeAction, GoFromTreeRouterAction, IsSelectedTreeForDonationAction */

  /***/
  function srcAppStoreTreeListTreeListActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "treeListActionsType", function () {
      return treeListActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitTreeListAction", function () {
      return InitTreeListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitTreeListSuccessAction", function () {
      return InitTreeListSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsTreesLoadingSuccessAction", function () {
      return IsTreesLoadingSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTreeCategoryTreesAction", function () {
      return SearchTreeCategoryTreesAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTreeAction", function () {
      return SearchTreeAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTreeSuccessAction", function () {
      return SearchTreeSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeRouterModeAction", function () {
      return TreeRouterModeAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoFromTreeRouterAction", function () {
      return GoFromTreeRouterAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsSelectedTreeForDonationAction", function () {
      return IsSelectedTreeForDonationAction;
    });

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
    })(treeListActionsType || (treeListActionsType = {}));

    var InitTreeListAction = function InitTreeListAction() {
      _classCallCheck(this, InitTreeListAction);

      this.type = treeListActionsType.initTrees;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitTreeListSuccessAction = /*#__PURE__*/function () {
      function InitTreeListSuccessAction(_payload) {
        _classCallCheck(this, InitTreeListSuccessAction);

        this._payload = _payload;
        this.type = treeListActionsType.initTreesSuccess;
      }

      _createClass(InitTreeListSuccessAction, [{
        key: "treeList",
        get: function get() {
          return this._payload.treeList;
        }
      }]);

      return InitTreeListSuccessAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var IsTreesLoadingSuccessAction = function IsTreesLoadingSuccessAction() {
      _classCallCheck(this, IsTreesLoadingSuccessAction);

      this.type = treeListActionsType.isTreesLoadingSuccess;
    }; // tslint:disable-next-line: max-classes-per-file


    var SearchTreeCategoryTreesAction = /*#__PURE__*/function () {
      function SearchTreeCategoryTreesAction(_payload) {
        _classCallCheck(this, SearchTreeCategoryTreesAction);

        this._payload = _payload;
        this.type = treeListActionsType.searchTreeCategoryTrees;
      }

      _createClass(SearchTreeCategoryTreesAction, [{
        key: "treeCategory",
        get: function get() {
          return this._payload.treeCategory;
        }
      }]);

      return SearchTreeCategoryTreesAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var SearchTreeAction = /*#__PURE__*/function () {
      function SearchTreeAction(_payload) {
        _classCallCheck(this, SearchTreeAction);

        this._payload = _payload;
        this.type = treeListActionsType.searchTree;
      }

      _createClass(SearchTreeAction, [{
        key: "name",
        get: function get() {
          return this._payload.name;
        }
      }]);

      return SearchTreeAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var SearchTreeSuccessAction = function SearchTreeSuccessAction() {
      _classCallCheck(this, SearchTreeSuccessAction);

      this.type = treeListActionsType.searchTreeSuccess;
    }; // tslint:disable-next-line: max-classes-per-file


    var TreeRouterModeAction = function TreeRouterModeAction() {
      _classCallCheck(this, TreeRouterModeAction);

      this.type = treeListActionsType.treeRouterMode;
    }; // tslint:disable-next-line: max-classes-per-file


    var GoFromTreeRouterAction = function GoFromTreeRouterAction() {
      _classCallCheck(this, GoFromTreeRouterAction);

      this.type = treeListActionsType.goFromTreeRouterMode;
    }; // tslint:disable-next-line: max-classes-per-file


    var IsSelectedTreeForDonationAction = /*#__PURE__*/function () {
      function IsSelectedTreeForDonationAction(_payload) {
        _classCallCheck(this, IsSelectedTreeForDonationAction);

        this._payload = _payload;
        this.type = treeListActionsType.isSelectedTreeForDonation;
      }

      _createClass(IsSelectedTreeForDonationAction, [{
        key: "treeRouteName",
        get: function get() {
          return this._payload.treeRouteName;
        }
      }, {
        key: "donationListBeforeRegistration",
        get: function get() {
          return this._payload.donationListBeforeRegistration;
        }
      }]);

      return IsSelectedTreeForDonationAction;
    }();
    /***/

  },

  /***/
  "./src/app/store/tree-list/tree-list.effects.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/tree-list/tree-list.effects.ts ***!
    \******************************************************/

  /*! exports provided: TreeListEffects */

  /***/
  function srcAppStoreTreeListTreeListEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeListEffects", function () {
      return TreeListEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tree_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tree-list.actions */
    "./src/app/store/tree-list/tree-list.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/tree-list/tree-data.service */
    "./src/app/services/tree-list/tree-data.service.ts");

    var TreeListEffects = /*#__PURE__*/function () {
      function TreeListEffects(_actions$, _treeListDataService) {
        _classCallCheck(this, TreeListEffects);

        this._actions$ = _actions$;
        this._treeListDataService = _treeListDataService;
      }

      _createClass(TreeListEffects, [{
        key: "loadTreeList",
        value: function loadTreeList() {
          var _this7 = this;

          return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_tree_list_actions__WEBPACK_IMPORTED_MODULE_3__["treeListActionsType"].initTrees), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this7._treeListDataService.loadTreeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (treeList) {
              return new _tree_list_actions__WEBPACK_IMPORTED_MODULE_3__["InitTreeListSuccessAction"]({
                treeList: treeList
              });
            }));
          }));
        }
      }]);

      return TreeListEffects;
    }();

    TreeListEffects.ɵfac = function TreeListEffects_Factory(t) {
      return new (t || TreeListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_5__["TreeListDataService"]));
    };

    TreeListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TreeListEffects,
      factory: TreeListEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], TreeListEffects.prototype, "loadTreeList", null);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TreeListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_services_tree_list_tree_data_service__WEBPACK_IMPORTED_MODULE_5__["TreeListDataService"]
        }];
      }, {
        loadTreeList: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/store/tree-list/tree-list.facade.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store/tree-list/tree-list.facade.ts ***!
    \*****************************************************/

  /*! exports provided: FacadeServiceTreeList */

  /***/
  function srcAppStoreTreeListTreeListFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacadeServiceTreeList", function () {
      return FacadeServiceTreeList;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tree-list.actions */
    "./src/app/store/tree-list/tree-list.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var FacadeServiceTreeList = /*#__PURE__*/function () {
      function FacadeServiceTreeList(_store$) {
        _classCallCheck(this, FacadeServiceTreeList);

        this._store$ = _store$;
      }

      _createClass(FacadeServiceTreeList, [{
        key: "searchTree",
        value: function searchTree(name) {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SearchTreeAction"]({
            name: name
          }));
        }
      }, {
        key: "goToTreeRouterMode",
        value: function goToTreeRouterMode() {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["TreeRouterModeAction"]());
        }
      }, {
        key: "searchTreeSuccess",
        value: function searchTreeSuccess() {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SearchTreeSuccessAction"]());
        }
      }, {
        key: "searchTreeCategoryTrees",
        value: function searchTreeCategoryTrees(treeCategory) {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["SearchTreeCategoryTreesAction"]({
            treeCategory: treeCategory
          }));
        }
      }, {
        key: "goFromTreeRouter",
        value: function goFromTreeRouter() {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["GoFromTreeRouterAction"]());
        }
      }, {
        key: "initTreeList",
        value: function initTreeList() {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitTreeListAction"]());
        }
      }, {
        key: "treesLoadingSuccess",
        value: function treesLoadingSuccess() {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["IsTreesLoadingSuccessAction"]());
        }
      }, {
        key: "isSelectedTreeForDonation",
        value: function isSelectedTreeForDonation(treeRouteName, donationListBeforeRegistration) {
          this._store$.dispatch(new _tree_list_actions__WEBPACK_IMPORTED_MODULE_1__["IsSelectedTreeForDonationAction"]({
            treeRouteName: treeRouteName,
            donationListBeforeRegistration: donationListBeforeRegistration
          }));
        }
      }]);

      return FacadeServiceTreeList;
    }();

    FacadeServiceTreeList.ɵfac = function FacadeServiceTreeList_Factory(t) {
      return new (t || FacadeServiceTreeList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    FacadeServiceTreeList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FacadeServiceTreeList,
      factory: FacadeServiceTreeList.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceTreeList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/tree-list/tree-list.reducer.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/tree-list/tree-list.reducer.ts ***!
    \******************************************************/

  /*! exports provided: treeListFeatureKey, treeListReducer, StateReducerTreeList */

  /***/
  function srcAppStoreTreeListTreeListReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "treeListFeatureKey", function () {
      return treeListFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "treeListReducer", function () {
      return treeListReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerTreeList", function () {
      return StateReducerTreeList;
    });
    /* harmony import */


    var _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tree-list.actions */
    "./src/app/store/tree-list/tree-list.actions.ts");

    var treeListFeatureKey = 'TREE-LIST';
    var initialState = {
      isLoading: true,
      isInitedTrees: false,
      treeList: null,
      treeCategoryTrees: null,
      isSearchLoading: false,
      searchTree: null,
      isTreeRouterMode: false,
      isSelectedTree: false
    };

    function treeListReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].initTrees:
          {
            return Object.assign({}, state);
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].initTreesSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isInitedTrees: true,
              treeList: _toConsumableArray(action.treeList).filter(function (tree) {
                return Boolean(tree);
              })
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].isTreesLoadingSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isLoading: false
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].searchTreeCategoryTrees:
          {
            return Object.assign(Object.assign({}, state), {
              treeCategoryTrees: _toConsumableArray(state.treeList).filter(function (tree) {
                if (tree.type === action.treeCategory) {
                  return tree;
                }
              })
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].searchTree:
          {
            return Object.assign(Object.assign({}, state), {
              isSearchLoading: true,
              searchTree: _toConsumableArray(state.treeList).find(function (tree) {
                var currentTreeRouterName = tree.name.replace(/\(|\)/g, '').split(' ').join('-').toLowerCase();

                if (Boolean(tree) && action.name === currentTreeRouterName) {
                  return tree;
                }
              })
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].searchTreeSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isSearchLoading: false
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].treeRouterMode:
          {
            return Object.assign(Object.assign({}, state), {
              isTreeRouterMode: true
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].goFromTreeRouterMode:
          {
            return Object.assign(Object.assign({}, state), {
              isTreeRouterMode: false
            });
          }

        case _tree_list_actions__WEBPACK_IMPORTED_MODULE_0__["treeListActionsType"].isSelectedTreeForDonation:
          {
            if (Boolean(action.donationListBeforeRegistration)) {
              var selectedTreesForDonation = _toConsumableArray(action.donationListBeforeRegistration).map(function (donation) {
                return donation.treeDonation.tree.clone();
              });

              var currentTree = _toConsumableArray(selectedTreesForDonation).find(function (tree) {
                var treeRouteName = tree.name.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

                if (treeRouteName === action.treeRouteName) {
                  return tree.clone();
                }
              });

              if (Boolean(currentTree)) {
                return Object.assign(Object.assign({}, state), {
                  isSelectedTree: true
                });
              } else {
                return Object.assign(Object.assign({}, state), {
                  isSelectedTree: false
                });
              }
            } else {
              return Object.assign(Object.assign({}, state), {
                isSelectedTree: false
              });
            }
          }

        default:
          {
            return Object.assign({}, state);
          }
      }
    }

    function StateReducerTreeList(state, action) {
      return treeListReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/tree-list/tree-list.selectors.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/tree-list/tree-list.selectors.ts ***!
    \********************************************************/

  /*! exports provided: selectStateTreeList, selectTreeListIsLoading, selectTreeList, selectIsInitedTrees, selectTreeCategoryTrees, selectSearchTree, selectIsTreeSearchLoading, selectIsTreeRouterModeAction, selectIsSelectedTree */

  /***/
  function srcAppStoreTreeListTreeListSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateTreeList", function () {
      return selectStateTreeList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTreeListIsLoading", function () {
      return selectTreeListIsLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTreeList", function () {
      return selectTreeList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsInitedTrees", function () {
      return selectIsInitedTrees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTreeCategoryTrees", function () {
      return selectTreeCategoryTrees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSearchTree", function () {
      return selectSearchTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsTreeSearchLoading", function () {
      return selectIsTreeSearchLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsTreeRouterModeAction", function () {
      return selectIsTreeRouterModeAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsSelectedTree", function () {
      return selectIsSelectedTree;
    });
    /* harmony import */


    var _tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tree-list.reducer */
    "./src/app/store/tree-list/tree-list.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectStateTreeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_tree_list_reducer__WEBPACK_IMPORTED_MODULE_0__["treeListFeatureKey"]);
    var selectTreeListIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.isLoading;
    });
    var selectTreeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.treeList;
    });
    var selectIsInitedTrees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.isInitedTrees;
    });
    var selectTreeCategoryTrees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.treeCategoryTrees;
    });
    var selectSearchTree = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.searchTree;
    });
    var selectIsTreeSearchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.isSearchLoading;
    });
    var selectIsTreeRouterModeAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.isTreeRouterMode;
    });
    var selectIsSelectedTree = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateTreeList, function (state) {
      return state.isSelectedTree;
    });
    /***/
  },

  /***/
  "./src/app/store/user-list/index.ts":
  /*!******************************************!*\
    !*** ./src/app/store/user-list/index.ts ***!
    \******************************************/

  /*! exports provided: userListFeatureKey, userListReducer, StateReducerUserList */

  /***/
  function srcAppStoreUserListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-list.reducer */
    "./src/app/store/user-list/user-list.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userListFeatureKey", function () {
      return _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["userListFeatureKey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userListReducer", function () {
      return _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["userListReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateReducerUserList", function () {
      return _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["StateReducerUserList"];
    });
    /***/

  },

  /***/
  "./src/app/store/user-list/user-list.actions.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/user-list/user-list.actions.ts ***!
    \******************************************************/

  /*! exports provided: userListActionsType, InitUserListAction, InitUserListSuccessAction, InitUserAction, InitNewUserAction, InitNewUserProfileImageUserListAction, PickUpPointsFromUserUserListAction, AddMedicalPointsForCurrentUserUserListAction */

  /***/
  function srcAppStoreUserListUserListActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userListActionsType", function () {
      return userListActionsType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitUserListAction", function () {
      return InitUserListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitUserListSuccessAction", function () {
      return InitUserListSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitUserAction", function () {
      return InitUserAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitNewUserAction", function () {
      return InitNewUserAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitNewUserProfileImageUserListAction", function () {
      return InitNewUserProfileImageUserListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickUpPointsFromUserUserListAction", function () {
      return PickUpPointsFromUserUserListAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMedicalPointsForCurrentUserUserListAction", function () {
      return AddMedicalPointsForCurrentUserUserListAction;
    });

    var userListActionsType;

    (function (userListActionsType) {
      userListActionsType["initUser"] = "[USER-LIST/API] Init-User User-List";
      userListActionsType["initNewUser"] = "[USER-LIST/API] Init-New-User User-List";
      userListActionsType["initUserList"] = "[USER-LIST/API] Init-User-List User-List";
      userListActionsType["initUserListSuccess"] = "[USER-LIST/API] Init-User-List-Success User-List";
      userListActionsType["initNewUserProfileImage"] = "[USER-LIST/API] Init-New-User-Profile-Image User-List";
      userListActionsType["pickUpPointsFromUser"] = "[USER-LIST/API] Pick-Up-Points-From-User User-List";
      userListActionsType["addMedicalPointsForCurrentUser"] = "[USER-LIST/API] Add-Medical-Points-For-Current-User User-List";
    })(userListActionsType || (userListActionsType = {})); // tslint:disable-next-line: max-classes-per-file


    var InitUserListAction = function InitUserListAction() {
      _classCallCheck(this, InitUserListAction);

      this.type = userListActionsType.initUserList;
    }; // tslint:disable-next-line: max-classes-per-file


    var InitUserListSuccessAction = /*#__PURE__*/function () {
      function InitUserListSuccessAction(_payload) {
        _classCallCheck(this, InitUserListSuccessAction);

        this._payload = _payload;
        this.type = userListActionsType.initUserListSuccess;
      }

      _createClass(InitUserListSuccessAction, [{
        key: "userList",
        get: function get() {
          return this._payload.userList;
        }
      }]);

      return InitUserListSuccessAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitUserAction = /*#__PURE__*/function () {
      function InitUserAction(_payload) {
        _classCallCheck(this, InitUserAction);

        this._payload = _payload;
        this.type = userListActionsType.initUser;
      }

      _createClass(InitUserAction, [{
        key: "user",
        get: function get() {
          return this._payload.user;
        }
      }]);

      return InitUserAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitNewUserAction = /*#__PURE__*/function () {
      function InitNewUserAction(_payload) {
        _classCallCheck(this, InitNewUserAction);

        this._payload = _payload;
        this.type = userListActionsType.initNewUser;
      }

      _createClass(InitNewUserAction, [{
        key: "user",
        get: function get() {
          return this._payload.user;
        }
      }]);

      return InitNewUserAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var InitNewUserProfileImageUserListAction = /*#__PURE__*/function () {
      function InitNewUserProfileImageUserListAction(_payload) {
        _classCallCheck(this, InitNewUserProfileImageUserListAction);

        this._payload = _payload;
        this.type = userListActionsType.initNewUserProfileImage;
      }

      _createClass(InitNewUserProfileImageUserListAction, [{
        key: "newImage",
        get: function get() {
          return this._payload.newImage;
        }
      }]);

      return InitNewUserProfileImageUserListAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var PickUpPointsFromUserUserListAction = /*#__PURE__*/function () {
      function PickUpPointsFromUserUserListAction(_payload) {
        _classCallCheck(this, PickUpPointsFromUserUserListAction);

        this._payload = _payload;
        this.type = userListActionsType.pickUpPointsFromUser;
      }

      _createClass(PickUpPointsFromUserUserListAction, [{
        key: "userId",
        get: function get() {
          return this._payload.userId;
        }
      }, {
        key: "medicalPoints",
        get: function get() {
          return this._payload.medicalPoints;
        }
      }]);

      return PickUpPointsFromUserUserListAction;
    }(); // tslint:disable-next-line: max-classes-per-file


    var AddMedicalPointsForCurrentUserUserListAction = /*#__PURE__*/function () {
      function AddMedicalPointsForCurrentUserUserListAction(_payload) {
        _classCallCheck(this, AddMedicalPointsForCurrentUserUserListAction);

        this._payload = _payload;
        this.type = userListActionsType.addMedicalPointsForCurrentUser;
      }

      _createClass(AddMedicalPointsForCurrentUserUserListAction, [{
        key: "medicalPoints",
        get: function get() {
          return this._payload.medicalPoints;
        }
      }]);

      return AddMedicalPointsForCurrentUserUserListAction;
    }();
    /***/

  },

  /***/
  "./src/app/store/user-list/user-list.effects.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/user-list/user-list.effects.ts ***!
    \******************************************************/

  /*! exports provided: UserListEffects */

  /***/
  function srcAppStoreUserListUserListEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListEffects", function () {
      return UserListEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _user_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-list.actions */
    "./src/app/store/user-list/user-list.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user-list/user-data.service */
    "./src/app/services/user-list/user-data.service.ts");

    var UserListEffects = /*#__PURE__*/function () {
      function UserListEffects(_actions$, _userListDataService) {
        _classCallCheck(this, UserListEffects);

        this._actions$ = _actions$;
        this._userListDataService = _userListDataService;
      }

      _createClass(UserListEffects, [{
        key: "loadUserList",
        value: function loadUserList() {
          var _this8 = this;

          return this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_list_actions__WEBPACK_IMPORTED_MODULE_3__["userListActionsType"].initUserList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this8._userListDataService.loadUserList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userList) {
              return new _user_list_actions__WEBPACK_IMPORTED_MODULE_3__["InitUserListSuccessAction"]({
                userList: userList
              });
            }));
          }));
        }
      }]);

      return UserListEffects;
    }();

    UserListEffects.ɵfac = function UserListEffects_Factory(t) {
      return new (t || UserListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserListDataService"]));
    };

    UserListEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserListEffects,
      factory: UserListEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], UserListEffects.prototype, "loadUserList", null);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserListEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: src_app_services_user_list_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserListDataService"]
        }];
      }, {
        loadUserList: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/store/user-list/user-list.facade.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store/user-list/user-list.facade.ts ***!
    \*****************************************************/

  /*! exports provided: FacadeServiceUserList */

  /***/
  function srcAppStoreUserListUserListFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacadeServiceUserList", function () {
      return FacadeServiceUserList;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-list.actions */
    "./src/app/store/user-list/user-list.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var FacadeServiceUserList = /*#__PURE__*/function () {
      function FacadeServiceUserList(_store$) {
        _classCallCheck(this, FacadeServiceUserList);

        this._store$ = _store$;
      }

      _createClass(FacadeServiceUserList, [{
        key: "changeCurrentUserImage",
        value: function changeCurrentUserImage(image) {
          this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewUserProfileImageUserListAction"]({
            newImage: image
          }));
        }
      }, {
        key: "pickUpPointsFromUser",
        value: function pickUpPointsFromUser(userId, medicalPoints) {
          this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["PickUpPointsFromUserUserListAction"]({
            userId: userId,
            medicalPoints: medicalPoints
          }));
        }
      }, {
        key: "addMedicalPointsForCurrentUser",
        value: function addMedicalPointsForCurrentUser(medicalPoints) {
          this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["AddMedicalPointsForCurrentUserUserListAction"]({
            medicalPoints: medicalPoints
          }));
        }
      }, {
        key: "initUser",
        value: function initUser(user) {
          this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserAction"]({
            user: user
          }));
        }
      }, {
        key: "initNewUser",
        value: function initNewUser(user) {
          this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitNewUserAction"]({
            user: user
          }));
        }
      }, {
        key: "initUserList",
        value: function initUserList() {
          this._store$.dispatch(new _user_list_actions__WEBPACK_IMPORTED_MODULE_1__["InitUserListAction"]());
        }
      }]);

      return FacadeServiceUserList;
    }();

    FacadeServiceUserList.ɵfac = function FacadeServiceUserList_Factory(t) {
      return new (t || FacadeServiceUserList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    FacadeServiceUserList.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FacadeServiceUserList,
      factory: FacadeServiceUserList.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacadeServiceUserList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/user-list/user-list.reducer.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/user-list/user-list.reducer.ts ***!
    \******************************************************/

  /*! exports provided: userListFeatureKey, userListReducer, StateReducerUserList */

  /***/
  function srcAppStoreUserListUserListReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userListFeatureKey", function () {
      return userListFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userListReducer", function () {
      return userListReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerUserList", function () {
      return StateReducerUserList;
    });
    /* harmony import */


    var _user_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-list.actions */
    "./src/app/store/user-list/user-list.actions.ts");

    var userListFeatureKey = 'USER-LIST';
    var initialState = {
      isLoading: true,
      userList: null,
      user: null
    };

    function userListReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initUserList:
          {
            return Object.assign({}, state);
          }

        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initUserListSuccess:
          {
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              userList: _toConsumableArray(action.userList)
            });
          }

        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initUser:
          {
            return Object.assign(Object.assign({}, state), {
              user: action.user.clone()
            });
          }

        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initNewUser:
          {
            return Object.assign(Object.assign({}, state), {
              userList: [].concat(_toConsumableArray(state.userList), [action.user.clone()])
            });
          }

        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].initNewUserProfileImage:
          {
            var newUser = state.user.clone();
            newUser.profileImage = action.newImage;
            return Object.assign(Object.assign({}, state), {
              user: newUser.clone()
            });
          }

        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].pickUpPointsFromUser:
          {
            var currentUser = _toConsumableArray(state.userList).find(function (user) {
              return user.id === action.userId;
            }).clone();

            currentUser.medicalPoints = currentUser.medicalPoints - action.medicalPoints;
            return Object.assign(Object.assign({}, state), {
              userList: _toConsumableArray(state.userList).map(function (user) {
                if (user.id === action.userId) {
                  return currentUser.clone();
                } else {
                  return user.clone();
                }
              }),
              user: currentUser.clone()
            });
          }

        case _user_list_actions__WEBPACK_IMPORTED_MODULE_0__["userListActionsType"].addMedicalPointsForCurrentUser:
          {
            var _currentUser = state.user.clone();

            _currentUser.medicalPoints = _currentUser.medicalPoints + action.medicalPoints;
            return Object.assign(Object.assign({}, state), {
              userList: _toConsumableArray(state.userList).map(function (user) {
                if (user.id === _currentUser.id) {
                  return _currentUser.clone();
                } else {
                  return user.clone();
                }
              }),
              user: _currentUser.clone()
            });
          }

        default:
          {
            return Object.assign({}, state);
          }
      }
    }

    function StateReducerUserList(state, action) {
      return userListReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/user-list/user-list.selectors.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/user-list/user-list.selectors.ts ***!
    \********************************************************/

  /*! exports provided: selectStateUserList, selectUser, selectUserList */

  /***/
  function srcAppStoreUserListUserListSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateUserList", function () {
      return selectStateUserList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUser", function () {
      return selectUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserList", function () {
      return selectUserList;
    });
    /* harmony import */


    var _user_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-list.reducer */
    "./src/app/store/user-list/user-list.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectStateUserList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_user_list_reducer__WEBPACK_IMPORTED_MODULE_0__["userListFeatureKey"]);
    var selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateUserList, function (state) {
      return state.user;
    });
    var selectUserList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectStateUserList, function (state) {
      return state.userList;
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\EPAM training\save-our-planet\save-our-planet-project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map