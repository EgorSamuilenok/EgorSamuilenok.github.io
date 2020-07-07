function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-country-list-country-list-country-list-module"], {
  /***/
  "./src/app/components/country-list/country-list/country-list-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/country-list/country-list/country-list-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: CountryListRoutingModule */

  /***/
  function srcAppComponentsCountryListCountryListCountryListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListRoutingModule", function () {
      return CountryListRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./country-list.component */
    "./src/app/components/country-list/country-list/country-list.component.ts");
    /* harmony import */


    var _region_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../region/region.component */
    "./src/app/components/country-list/region/region.component.ts");
    /* harmony import */


    var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../country/country.component */
    "./src/app/components/country-list/country/country.component.ts");
    /* harmony import */


    var src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/guards/country-list/can-proceed-to-region.guard */
    "./src/app/guards/country-list/can-proceed-to-region.guard.ts");
    /* harmony import */


    var src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/guards/country-list/can-proceed-to-country.guard */
    "./src/app/guards/country-list/can-proceed-to-country.guard.ts");
    /* harmony import */


    var src_app_guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/guards/country-list/can-leave-country.guard */
    "./src/app/guards/country-list/can-leave-country.guard.ts");

    var routes = [{
      path: '',
      component: _country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]
    }, {
      path: 'region/:regionName/:subRegionName',
      component: _region_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"],
      canActivate: [src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToRegionGuard"]],
      children: [{
        path: 'country/:countryName',
        component: _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
        canActivate: [src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToCountryGuard"]],
        canDeactivate: [src_app_guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveCountryGuard"]]
      }]
    }];

    var CountryListRoutingModule = function CountryListRoutingModule() {
      _classCallCheck(this, CountryListRoutingModule);
    };

    CountryListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CountryListRoutingModule
    });
    CountryListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CountryListRoutingModule_Factory(t) {
        return new (t || CountryListRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CountryListRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/country-list/country-list/country-list.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/country-list/country-list/country-list.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CountryListComponent */

  /***/
  function srcAppComponentsCountryListCountryListCountryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListComponent", function () {
      return CountryListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CountryListComponent = /*#__PURE__*/function () {
      function CountryListComponent(_router) {
        _classCallCheck(this, CountryListComponent);

        this._router = _router;
        this.menuMode = false;
        this.asiaMenuMode = false;
        this.europeMenuMode = false;
        this.africaMenuMode = false;
        this.oceaniaMenuMode = false;
        this.americaMenuMode = false;
      }

      _createClass(CountryListComponent, [{
        key: "takeNameOfContent",
        value: function takeNameOfContent(htmlElement) {
          var currentSubRegionContent = htmlElement.innerHTML.split(' ').filter(function (name) {
            return Boolean(name);
          });
          return currentSubRegionContent[0].toLowerCase();
        }
      }, {
        key: "toggleMenuMode",
        value: function toggleMenuMode() {
          this.menuMode = !this.menuMode;
        }
      }, {
        key: "returnMenuMode",
        value: function returnMenuMode() {
          this.menuMode = !this.menuMode;
          this.asiaMenuMode = false;
          this.europeMenuMode = false;
          this.africaMenuMode = false;
          this.oceaniaMenuMode = false;
          this.americaMenuMode = false;
        }
      }, {
        key: "toggleAsiaMenuMode",
        value: function toggleAsiaMenuMode() {
          this.asiaMenuMode = !this.asiaMenuMode;
        }
      }, {
        key: "toggleEuropeMenuMode",
        value: function toggleEuropeMenuMode() {
          this.europeMenuMode = !this.europeMenuMode;
        }
      }, {
        key: "toggleOceaniaMenuMode",
        value: function toggleOceaniaMenuMode() {
          this.oceaniaMenuMode = !this.oceaniaMenuMode;
        }
      }, {
        key: "toggleAfricaMenuMode",
        value: function toggleAfricaMenuMode() {
          this.africaMenuMode = !this.africaMenuMode;
        }
      }, {
        key: "toggleAmericaMenuMode",
        value: function toggleAmericaMenuMode() {
          this.americaMenuMode = !this.americaMenuMode;
        }
      }, {
        key: "switchRouter",
        value: function switchRouter(regionHtmlElement, subRegionHtmlElement) {
          var regionName = this.takeNameOfContent(regionHtmlElement);
          var subRegionName = this.takeNameOfContent(subRegionHtmlElement);

          this._router.navigate(['/countries', 'region', regionName, subRegionName]);
        }
      }]);

      return CountryListComponent;
    }();

    CountryListComponent.ɵfac = function CountryListComponent_Factory(t) {
      return new (t || CountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryListComponent,
      selectors: [["app-country-list"]],
      decls: 88,
      vars: 124,
      consts: [[1, "-app-countries"], [1, "-app-countries__start-menu"], [1, "-app-countries__start-menu-title", 3, "click"], [1, "-app-countries__start-menu-search"], [1, "-app-countries__menu", "-app-countries__menu_bg"], [1, "-app-countries__menu-return", 3, "click"], [1, "-app-countries__menu-list", 3, "click"], ["asia", ""], [1, "-app-countries__menu-item", 3, "click"], ["southernAsia", ""], ["westernAsia", ""], ["centralAsia", ""], ["easternAsia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_south-eastern-asia", 3, "click"], ["southEasternAsia", ""], ["europe", ""], ["northernEurope", ""], ["southernEurope", ""], ["westernEurope", ""], ["easternEurope", ""], ["africa", ""], ["northernAfrica", ""], ["middleAfrica", ""], ["southernAfrica", ""], ["easternAfrica", ""], ["westernAfrica", ""], ["oceania", ""], ["polynesia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_australia-oceania", 3, "click"], ["australia", ""], ["melanesia", ""], ["micronesia", ""], ["america", ""], ["centralAmerica", ""], ["northernAmerica", ""], ["southAmerica", ""], ["caribbean", ""]],
      template: function CountryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_2_listener() {
            return ctx.toggleMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_span_click_6_listener() {
            return ctx.returnMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_7_listener() {
            return ctx.toggleAsiaMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Asia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return ctx.switchRouter(_r0, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Southern Asia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.switchRouter(_r0, _r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Western Asia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            return ctx.switchRouter(_r0, _r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Central Asia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.switchRouter(_r0, _r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Eastern Asia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx.switchRouter(_r0, _r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " South-Eastern Asia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_25_listener() {
            return ctx.toggleEuropeMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Europe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            return ctx.switchRouter(_r6, _r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Northern Europe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return ctx.switchRouter(_r6, _r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Southern Europe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

            return ctx.switchRouter(_r6, _r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Western Europe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.switchRouter(_r6, _r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Eastern Europe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_40_listener() {
            return ctx.toggleAfricaMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Africa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

            return ctx.switchRouter(_r11, _r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Northern Africa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

            return ctx.switchRouter(_r11, _r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Middle Africa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            return ctx.switchRouter(_r11, _r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Southern Africa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);

            return ctx.switchRouter(_r11, _r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Eastern Africa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            return ctx.switchRouter(_r11, _r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Western Africa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_58_listener() {
            return ctx.toggleOceaniaMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Oceania ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            return ctx.switchRouter(_r17, _r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Polynesia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);

            return ctx.switchRouter(_r17, _r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Australia And New Zealand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

            return ctx.switchRouter(_r17, _r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Melanesia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);

            return ctx.switchRouter(_r17, _r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Micronesia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_73_listener() {
            return ctx.toggleAmericaMenuMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Americas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_76_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

            return ctx.switchRouter(_r22, _r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Central America ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

            return ctx.switchRouter(_r22, _r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Northern America ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);

            return ctx.switchRouter(_r22, _r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " South America ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

            return ctx.switchRouter(_r22, _r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Caribbean ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__start-menu_menu-mode", ctx.menuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu_bg-menu-mode", ctx.menuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-return_visible", ctx.menuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.europeMenuMode || ctx.americaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_asia", ctx.menuMode)("-app-countries__menu-list_asia-menu-mode", ctx.asiaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-southern-asia", ctx.asiaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-western-asia", ctx.asiaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-central-asia", ctx.asiaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-eastern-asia", ctx.asiaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.asiaMenuMode)("-app-countries__menu-item_visible-south-eastern-asia", ctx.asiaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.americaMenuMode || ctx.asiaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_europe", ctx.menuMode)("-app-countries__menu-list_europe-menu-mode", ctx.europeMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-northern-europe", ctx.europeMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-southern-europe", ctx.europeMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-western-europe", ctx.europeMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.europeMenuMode)("-app-countries__menu-item_visible-eastern-europe", ctx.europeMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.europeMenuMode || ctx.asiaMenuMode || ctx.americaMenuMode)("-app-countries__menu-list_africa", ctx.menuMode)("-app-countries__menu-list_africa-menu-mode", ctx.africaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-northern-africa", ctx.africaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-middle-africa", ctx.africaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-southern-africa", ctx.africaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-eastern-africa", ctx.africaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.africaMenuMode)("-app-countries__menu-item_visible-western-africa", ctx.africaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.americaMenuMode || ctx.europeMenuMode || ctx.asiaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_oceania", ctx.menuMode)("-app-countries__menu-list_oceania-menu-mode", ctx.oceaniaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-polynesia-oceania", ctx.oceaniaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-australia-oceania", ctx.oceaniaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-melanesia-oceania", ctx.oceaniaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.oceaniaMenuMode)("-app-countries__menu-item_visible-micronesia-oceania", ctx.oceaniaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-list_invisible", ctx.oceaniaMenuMode || ctx.europeMenuMode || ctx.asiaMenuMode || ctx.africaMenuMode)("-app-countries__menu-list_america", ctx.menuMode)("-app-countries__menu-list_america-menu-mode", ctx.americaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-central-america", ctx.americaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-northern-america", ctx.americaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-south-america", ctx.americaMenuMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-countries__menu-item_visible", ctx.americaMenuMode)("-app-countries__menu-item_visible-caribbean-america", ctx.americaMenuMode);
        }
      },
      styles: ["@charset \"UTF-8\";\n@-webkit-keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n@keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n.-app-countries[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-image: url('country-list-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-countries__start-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 200px;\n  height: 100px;\n}\n.-app-countries__start-menu_menu-mode[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-countries__start-menu[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 10%;\n  left: 0%;\n  width: 30%;\n  height: 3px;\n  -webkit-animation: 1s menuLine alternate infinite;\n  animation: 1s menuLine alternate infinite;\n  border-radius: 2px;\n  background-color: white;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: 0.2s;\n  cursor: pointer;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 5px black;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n  letter-spacing: 2.5px;\n  font-size: 26px;\n}\n.-app-countries__start-menu-title_search-mode[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  cursor: pointer;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n  content: \"\uF002\";\n  position: absolute;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 2px 2px 5px black;\n  font-size: 26px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-countries__menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-countries__menu_bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  transition: 0.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  border-radius: 20%;\n  background: rgba(0, 0, 0, 0.7);\n}\n.-app-countries__menu_bg-menu-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 0%;\n}\n.-app-countries__menu-return[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n.-app-countries__menu-return_visible[_ngcontent-%COMP%] {\n  left: 25%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-return[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-countries__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  text-shadow: none;\n  text-align: center;\n}\n.-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.-app-countries__menu-item_visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-item_visible-southern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-southern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-south-america[_ngcontent-%COMP%] {\n  transform: translate(-120%, 100%);\n}\n.-app-countries__menu-item_visible-western-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-africa[_ngcontent-%COMP%] {\n  transform: translate(-175%, -50%);\n}\n.-app-countries__menu-item_visible-central-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-america[_ngcontent-%COMP%] {\n  transform: translate(-50%, -200%);\n}\n.-app-countries__menu-item_visible-eastern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-caribbean-america[_ngcontent-%COMP%] {\n  transform: translate(100%, -50%);\n}\n.-app-countries__menu-item_visible-southern-europe[_ngcontent-%COMP%] {\n  transform: translate(-50%, 100%);\n}\n.-app-countries__menu-item_visible-micronesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(75%, -400%);\n}\n.-app-countries__menu-item_visible-melanesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(50%, -200%);\n}\n.-app-countries__menu-item_visible-polynesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(110%, 0%);\n}\n.-app-countries__menu-item_visible-australia-oceania[_ngcontent-%COMP%] {\n  transform: translate(-150%, 0%);\n}\n.-app-countries__menu-item_visible-middle-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-central-america[_ngcontent-%COMP%] {\n  transform: translate(40%, 100%);\n}\n.-app-countries__menu-item_visible-south-eastern-asia[_ngcontent-%COMP%] {\n  transform: translate(5%, 100%);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 2px;\n  font-size: 30px;\n}\n.-app-countries__menu-list_invisible[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n.-app-countries__menu-list_invisible.-app-countries__menu-list[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 80%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_asia-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_europe[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_europe-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_africa-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 80%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_oceania-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_america[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_america-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbGlzdFxcY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQzRCWjtFQWtCQTtJQUNJLFFBQUE7RUQzQ047RUM2Q0U7SUFDSSxVQUFBO0lBeENKLCtCQXlDdUI7RUR2Q3pCO0FBQ0Y7QUMyQkk7RUFNQTtJQUNJLFFBQUE7RURTTjtFQ1BFO0lBQ0ksVUFBQTtJQXhDSiwrQkF5Q3VCO0VEYXpCO0FBQ0Y7QUNGQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBM0VKLGdDQTRFdUI7RUFFbkIsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBRElSO0FDSFE7RUE1RUosZ0JBNkVRO0VBRUEsV0FBQTtFQTNFUixVQTZFeUI7RUEzRXpCLHdCQUFBO0FEbUZKO0FDTlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBcERSLGlEQUFBO0VBSUEseUNBQUE7RUFvRFEsa0JBQUE7RUFFQSx1QkFsSEo7QUQwSFI7QUNOUTtFQUNJLFVBQUE7RUFuR1IsZ0JBcUdRO0VBQ0EsZUFBQTtFQUVBLFlBMUhKO0VBMkhJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEVVo7QUNUWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURXaEI7QUNUWTtFQUNJLGFBQUE7QURXaEI7QUNSUTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FEUVo7QUNQWTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBNUlaLGdDQTZJK0I7RUFFbkIsWUF6SlI7RUEwSlEsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRFdoQjtBQ1BJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURTUjtBQ1JRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUE5SlIsZ0NBK0oyQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQTFKUixnQkE0SlE7RUF4SlIsVUF5SnlCO0VBdkp6Qix3QkFBQTtFQXlKUSxrQkFBQTtFQUVBLDhCQWpMTTtBRGdNbEI7QUNkWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBaEtaLFVBa0s2QjtFQWhLN0IsMEJBQUE7RUFrS1ksaUJBQUE7QURlaEI7QUNaUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBdkxSLGdDQXdMMkI7RUFoTDNCLGNBa0xRO0VBOUtSLFVBK0t5QjtFQTdLekIsd0JBQUE7RUErS1EsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FEb0JaO0FDbkJZO0VBQ0ksU0FBQTtFQXRMWixVQXdMNkI7RUF0TDdCLDBCQUFBO0FEMk1KO0FDbkJZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUEzTVosZ0NBNE0rQjtFQUVuQixZQXhOUjtFQXlOUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRHVCaEI7QUNwQlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXhOUixnQ0F5TjJCO0VBak4zQixnQkFtTlE7RUEvTVIsVUFnTnlCO0VBOU16Qix3QkFBQTtFQWdOUSxpQkFBQTtFQUNBLGtCQUFBO0FENkJaO0FDNUJZO0VBQ0ksWUFBQTtBRDhCaEI7QUM1Qlk7RUFDSSxZQUFBO0FEOEJoQjtBQzVCWTtFQTFOUixVQTJONkI7RUF6TjdCLDBCQUFBO0FEd1BKO0FDOUJnQjtFQXhPWixpQ0EyT21DO0FEa0N2QztBQ2hDZ0I7RUE3T1osaUNBZ1BtQztBRG9DdkM7QUNsQ2dCO0VBbFBaLGlDQXNQbUM7QURxQ3ZDO0FDbkNnQjtFQXhQWixnQ0E0UG1DO0FEc0N2QztBQ3BDZ0I7RUE5UFosZ0NBK1BtQztBRDBDdkM7QUN4Q2dCO0VBalFaLGdDQWtRbUM7QUQ4Q3ZDO0FDNUNnQjtFQXBRWixnQ0FxUW1DO0FEa0R2QztBQ2hEZ0I7RUF2UVosOEJBd1FtQztBRHNEdkM7QUNwRGdCO0VBMVFaLCtCQTJRbUM7QUQwRHZDO0FDeERnQjtFQTdRWiwrQkErUW1DO0FENkR2QztBQzNEZ0I7RUFqUlosOEJBa1JtQztBRGlFdkM7QUM3RFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTFSUixnQ0EyUjJCO0VBblIzQixjQXFSUTtFQUNBLGVBQUE7RUFsUlIsVUFtUnlCO0VBalJ6Qix3QkFBQTtFQW1SUSxZQTNTSjtFQTRTSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHNFWjtBQ3JFWTtFQTdSUixnQkE4Ulk7QUQyRWhCO0FDMUVnQjtFQTNSWixVQTRSaUM7RUExUmpDLHdCQUFBO0FEdVdKO0FDMUVZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRDRFaEI7QUMxRVk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQXBTWixVQXNTNkI7RUFwUzdCLDBCQUFBO0FEZ1hKO0FDM0VnQjtFQUNJLDJDQUFBO0FENkVwQjtBQzFFWTtFQTNTUixVQTRTNkI7RUExUzdCLDBCQUFBO0FEdVhKO0FDNUVnQjtFQUNJLDJDQUFBO0FEOEVwQjtBQzNFWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBblRaLFVBcVQ2QjtFQW5UN0IsMEJBQUE7QURnWUo7QUM1RWdCO0VBQ0ksMkNBQUE7QUQ4RXBCO0FDM0VZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUE1VFosVUE4VDZCO0VBNVQ3QiwwQkFBQTtBRHlZSjtBQzVFZ0I7RUFDSSwyQ0FBQTtBRDhFcEI7QUMzRVk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQXJVWixVQXVVNkI7RUFyVTdCLDBCQUFBO0FEa1pKO0FDNUVnQjtFQUNJLDJDQUFBO0FEOEVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ALXdlYmtpdC1rZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICB9XG59XG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uLWFwcC1jb3VudHJpZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QtbWVudS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudV9tZW51LW1vZGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDNweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbjogMXMgbWVudUxpbmUgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiAxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtdGl0bGUge1xuICB3aWR0aDogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZV9zZWFyY2gtbW9kZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CCXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmctbWVudS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LXJldHVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb246IDFzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1yZXR1cm5fdmlzaWJsZSB7XG4gIGxlZnQ6IDI1JTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtcmV0dXJuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+LqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9zb3V0aC1lYXN0ZXJuLWFzaWEge1xuICB3aWR0aDogMjAwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9hdXN0cmFsaWEtb2NlYW5pYSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1zb3V0aGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtYW1lcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIDEwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLXdlc3Rlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS13ZXN0ZXJuLWV1cm9wZSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS13ZXN0ZXJuLWFmcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzUlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzUlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTc1JSwgLTUwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1ub3J0aGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtbm9ydGhlcm4tYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW5vcnRoZXJuLWFtZXJpY2Ege1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1lYXN0ZXJuLWFzaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtY2FyaWJiZWFuLWFtZXJpY2Ege1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tZXVyb3BlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW1pY3JvbmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NSUsIC00MDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDc1JSwgLTQwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1tZWxhbmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC0yMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1wb2x5bmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWF1c3RyYWxpYS1vY2VhbmlhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1taWRkbGUtYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYW1lcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MCUsIDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtZWFzdGVybi1hc2lhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgLW1zLXRyYW5zaXRpb246IDFzO1xuICAtby10cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9pbnZpc2libGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9pbnZpc2libGUuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhIHtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDgwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhLW1lbnUtbW9kZSB7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9ldXJvcGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2V1cm9wZS1tZW51LW1vZGUge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYWZyaWNhIHtcbiAgdG9wOiA4MCU7XG4gIGxlZnQ6IDIwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hZnJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICB0b3A6IDgwJTtcbiAgbGVmdDogODAlO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FtZXJpY2Ege1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjAlO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FtZXJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtNzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKG1lbnVMaW5lKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTEwMCUsIDAlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tcy1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtby1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICBhbmltYXRpb246ICN7JHN0cn07ICAgICAgXHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLi1hcHAtY291bnRyaWVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QtbWVudS1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fc3RhcnQtbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNHMpO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGUnKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAkYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2VhcmNoLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDAyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MiU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4ICRibGFjaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19tZW51IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgJl9iZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC41cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2tPcGFjaXR5MC03O1xyXG4gICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDFzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICZfdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYyZWFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC41cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hdXN0cmFsaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl92aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoZXJuLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoZXJuLWFmcmljYSxcclxuICAgICAgICAgICAgICAgICYtc291dGgtYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtMTIwJSwgMTAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi13ZXN0ZXJuLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLXdlc3Rlcm4tZXVyb3BlLFxyXG4gICAgICAgICAgICAgICAgJi13ZXN0ZXJuLWFmcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtMTc1JSwgLTUwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1jZW50cmFsLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLW5vcnRoZXJuLWV1cm9wZSxcclxuICAgICAgICAgICAgICAgICYtbm9ydGhlcm4tYWZyaWNhLFxyXG4gICAgICAgICAgICAgICAgJi1ub3J0aGVybi1hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC0yMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWVhc3Rlcm4tYXNpYSxcclxuICAgICAgICAgICAgICAgICYtZWFzdGVybi1ldXJvcGUsXHJcbiAgICAgICAgICAgICAgICAmLWVhc3Rlcm4tYWZyaWNhLFxyXG4gICAgICAgICAgICAgICAgJi1jYXJpYmJlYW4tYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgxMDAlLCAtNTAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoZXJuLWV1cm9wZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAxMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1pY3JvbmVzaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg3NSUsIC00MDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1lbGFuZXNpYS1vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDUwJSwgLTIwMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtcG9seW5lc2lhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMTEwJSwgMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYXVzdHJhbGlhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTE1MCUsIDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1pZGRsZS1hZnJpY2EsXHJcbiAgICAgICAgICAgICAgICAmLWNlbnRyYWwtYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg0MCUsIDEwMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtc291dGgtZWFzdGVybi1hc2lhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDUlLCAxMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saXN0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDFzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC41cyk7XHJcbiAgICAgICAgICAgICAgICAmLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FzaWEge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgICAgICYtbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2V1cm9wZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYWZyaWNhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogODAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country-list',
          templateUrl: './country-list.component.html',
          styleUrls: ['./country-list.component.scss']
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
  "./src/app/components/country-list/country-list/country-list.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/country-list/country-list/country-list.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CountryListModule */

  /***/
  function srcAppComponentsCountryListCountryListCountryListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListModule", function () {
      return CountryListModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./country-list.component */
    "./src/app/components/country-list/country-list/country-list.component.ts");
    /* harmony import */


    var _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./country-list-routing.module */
    "./src/app/components/country-list/country-list/country-list-routing.module.ts");
    /* harmony import */


    var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../country/country.component */
    "./src/app/components/country-list/country/country.component.ts");
    /* harmony import */


    var _region_region_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../region/region.component */
    "./src/app/components/country-list/region/region.component.ts");
    /* harmony import */


    var _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../country-name/country-name.component */
    "./src/app/components/country-list/country-name/country-name.component.ts");
    /* harmony import */


    var src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/guards/country-list/can-proceed-to-region.guard */
    "./src/app/guards/country-list/can-proceed-to-region.guard.ts");
    /* harmony import */


    var src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/guards/country-list/can-proceed-to-country.guard */
    "./src/app/guards/country-list/can-proceed-to-country.guard.ts");
    /* harmony import */


    var src_app_guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/guards/country-list/can-leave-country.guard */
    "./src/app/guards/country-list/can-leave-country.guard.ts");
    /* harmony import */


    var src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/country-list/format-forest-area.pipe */
    "./src/app/pipes/country-list/format-forest-area.pipe.ts");
    /* harmony import */


    var src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/pipes/country-list/format-area.pipe */
    "./src/app/pipes/country-list/format-area.pipe.ts");
    /* harmony import */


    var src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/pipes/country-list/format-region-title.pipe */
    "./src/app/pipes/country-list/format-region-title.pipe.ts");

    var CountryListModule = function CountryListModule() {
      _classCallCheck(this, CountryListModule);
    };

    CountryListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CountryListModule,
      bootstrap: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]]
    });
    CountryListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CountryListModule_Factory(t) {
        return new (t || CountryListModule)();
      },
      providers: [src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToRegionGuard"], src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToCountryGuard"], src_app_guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveCountryGuard"]],
      imports: [[_country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountryListModule, {
        declarations: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"], _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"], _region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"], _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__["CountryNameComponent"], src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatForestAreaPipe"], src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatAreaPipe"], src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatRegionTitlePipe"]],
        imports: [_country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"], _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"], _region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"], _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__["CountryNameComponent"], src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatForestAreaPipe"], src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatAreaPipe"], src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatRegionTitlePipe"]],
          imports: [_country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToRegionGuard"], src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToCountryGuard"], src_app_guards_country_list_can_leave_country_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveCountryGuard"]],
          bootstrap: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/country-list/country-name/country-name.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/country-list/country-name/country-name.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CountryNameComponent */

  /***/
  function srcAppComponentsCountryListCountryNameCountryNameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryNameComponent", function () {
      return CountryNameComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CountryNameComponent = /*#__PURE__*/function () {
      function CountryNameComponent(_router, _activatedRoute) {
        _classCallCheck(this, CountryNameComponent);

        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CountryNameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this._regionName = params.regionName;
            _this._subRegionName = params.subRegionName;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "goToCurrentCountryRouter",
        value: function goToCurrentCountryRouter() {
          var countryName = this.country.name.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

          this._router.navigate(['/countries', 'region', this._regionName, this._subRegionName, 'country', countryName]);
        }
      }]);

      return CountryNameComponent;
    }();

    CountryNameComponent.ɵfac = function CountryNameComponent_Factory(t) {
      return new (t || CountryNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    CountryNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryNameComponent,
      selectors: [["app-country-name"]],
      inputs: {
        country: "country"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "-app-country"], [1, "-app-country__name", 3, "click"]],
      template: function CountryNameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryNameComponent_Template_div_click_1_listener() {
            return ctx.goToCurrentCountryRouter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.name, " ");
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n}\n\n.-app-country[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-country__name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  cursor: pointer;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 4px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.-app-country__name[_ngcontent-%COMP%]:hover {\n  letter-spacing: 3.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1uYW1lL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbmFtZVxcY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5LW5hbWUvY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0FDWEo7O0FEY0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRFlJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUF2QkosZ0JBeUJJO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRFVRO0VBQ0kscUJBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnktbmFtZS9jb3VudHJ5LW5hbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uLWFwcC1jb3VudHJ5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgJl9fbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFjaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMy41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi4tYXBwLWNvdW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1jb3VudHJ5X19uYW1lOmhvdmVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDMuNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country-name',
          templateUrl: './country-name.component.html',
          styleUrls: ['./country-name.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, {
        country: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/country-list/country/country.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/country-list/country/country.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CountryComponent */

  /***/
  function srcAppComponentsCountryListCountryCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryComponent", function () {
      return CountryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/country-list/country-list.selectors */
    "./src/app/store/country-list/country-list.selectors.ts");
    /* harmony import */


    var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.selectors */
    "./src/app/store/donation-list/donation-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.facade */
    "./src/app/store/donation-list/donation-list.facade.ts");
    /* harmony import */


    var src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/store/country-list/country-list.facade */
    "./src/app/store/country-list/country-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/country-list/format-area.pipe */
    "./src/app/pipes/country-list/format-area.pipe.ts");
    /* harmony import */


    var src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/pipes/country-list/format-forest-area.pipe */
    "./src/app/pipes/country-list/format-forest-area.pipe.ts");

    function CountryComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Capital ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Region: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sub Region: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Area: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "formatArea");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Forest Area: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "formatForestArea");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Native Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Time Zone: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.switchToPreviousCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.choose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " choose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.unchoose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " unchoose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.switchToNextCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.country.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx_r0.country.capital.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Latitude: ", ctx_r0.country.capital.latitude, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Longitude: ", ctx_r0.country.capital.longitude, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.region, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.subRegion, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 17, ctx_r0.country.area), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 19, ctx_r0.country.forestArea), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.nativeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.country.timeZone, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.isPreviousCountry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-country__button_choose-invisible", !ctx_r0.isCanChosenCountry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-country__button_unchoose-visible", !ctx_r0.isCanChosenCountry);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.isNextCountry);
      }
    }

    function CountryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CountryComponent = /*#__PURE__*/function () {
      function CountryComponent(_store$, _activatedRoute, _router, _facadeDonationListService, _facadeCountryListService) {
        _classCallCheck(this, CountryComponent);

        this._store$ = _store$;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isSearchLoading = true;
        this.isCanChosenCountry = true;
      }

      _createClass(CountryComponent, [{
        key: "canChosenCountry",
        value: function canChosenCountry(countryName) {
          if (Boolean(this._selectedCountriesForDonation)) {
            var chosenCountry = this._selectedCountriesForDonation.find(function (country) {
              return country.name === countryName;
            });

            return !Boolean(chosenCountry);
          } else {
            return true;
          }
        }
      }, {
        key: "switchRouterToSomeCountry",
        value: function switchRouterToSomeCountry(countryName) {
          var countryRouterName = countryName.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');
          var countryRegionName = this.country.region;
          var countrySubRegionName = this.country.subRegion;
          var countryRegionRouterName = this.takeRouterNameOfRegionOrSubRegion(countryRegionName);
          var countrySubRegionRouterName = this.takeRouterNameOfRegionOrSubRegion(countrySubRegionName);

          this._router.navigate(['/countries', 'region', countryRegionRouterName, countrySubRegionRouterName, 'country', countryRouterName]);
        }
      }, {
        key: "takeRouterNameOfRegionOrSubRegion",
        value: function takeRouterNameOfRegionOrSubRegion(name) {
          return name.toLowerCase().split(' ')[0];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this2._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');

            _this2._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');

            if (Boolean(_this2.country)) {
              var currentCountryRouteName = _this2.country.name.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

              if (currentCountryRouteName !== params.countryName) {
                _this2._facadeCountryListService.searchCountry(params.countryName);
              }
            } else {
              _this2._facadeCountryListService.searchCountry(params.countryName);
            }
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCountriesForDonation"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (selectedCountriesForDonation) {
            if (Boolean(selectedCountriesForDonation)) {
              _this2._isChosenAtLeastOneCountry = true;
              _this2._selectedCountriesForDonation = selectedCountriesForDonation;
            }
          });

          var countrySearchDelay = 3000;

          this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchCountry"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(countrySearchDelay)).subscribe(function (country) {
            if (Boolean(country)) {
              _this2.country = country;
              _this2.isCanChosenCountry = _this2.canChosenCountry(_this2.country.name);

              _this2._facadeCountryListService.searchCountrySuccess();
            }
          });

          this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchPreviousCountry"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (previousCountry) {
            if (Boolean(previousCountry)) {
              _this2.previousCountry = previousCountry;
              _this2.isPreviousCountry = true;
            } else {
              _this2.isPreviousCountry = false;
            }
          });

          this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchNextCountry"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (nextCountry) {
            if (Boolean(nextCountry)) {
              _this2.nextCountry = nextCountry;
              _this2.isNextCountry = true;
            } else {
              _this2.isNextCountry = false;
            }
          });

          this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsCountrySearchLoading"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (isSearchLoading) {
            _this2.isSearchLoading = isSearchLoading;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "choose",
        value: function choose() {
          this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');

          this.isCanChosenCountry = false;

          this._facadeDonationListService.initNewCountryForDonation(this.country);
        }
      }, {
        key: "unchoose",
        value: function unchoose() {
          this.isCanChosenCountry = true;

          this._facadeDonationListService.deleteNewCountryForDonation(this.country);
        }
      }, {
        key: "switchToPreviousCountry",
        value: function switchToPreviousCountry() {
          var previousCountryName = this.previousCountry.name;
          this.switchRouterToSomeCountry(previousCountryName);
        }
      }, {
        key: "switchToNextCountry",
        value: function switchToNextCountry() {
          var nextCountryName = this.nextCountry.name;
          this.switchRouterToSomeCountry(nextCountryName);
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          var deactivateQuestion = 'You haven’t chosen country. Are you sure that you want to go from this page? For donation you need at least one country';
          return !this._isChosenAtLeastOneCountry ? confirm(deactivateQuestion) : true;
        }
      }]);

      return CountryComponent;
    }();

    CountryComponent.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"]));
    };

    CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryComponent,
      selectors: [["app-country"]],
      decls: 2,
      vars: 2,
      consts: [["class", "-app-country", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-country"], [1, "-app-country-wrapper"], [1, "-app-country__current-country"], [1, "-app-country__header"], [1, "-app-country__header-info"], [1, "-app-country__header-info-title"], [1, "-app-country__header-info-image", 3, "src"], [1, "-app-country__header-info-capital-title"], [1, "-app-country__header-info-capital-name"], [1, "-app-country__header-info-capital-latitude"], [1, "-app-country__header-info-capital-longitude"], [1, "-app-country__item"], [1, "-app-country__item-title"], [1, "-app-country__item-info"], [1, "-app-country__button-container"], [1, "-app-country__button-slide", "-app-country__button-slide_left", 3, "disabled", "click"], [1, "-app-country__button", "-app-country__button_choose", 3, "click"], [1, "-app-country__button", "-app-country__button_unchoose", 3, "click"], [1, "-app-country__button-slide", "-app-country__button-slide_right", 3, "disabled", "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountryComponent_div_0_Template, 56, 21, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountryComponent_div_1_Template, 15, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      pipes: [src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatAreaPipe"], src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatForestAreaPipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n  letter-spacing: 2px;\n}\n.-app-country-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80%;\n  overflow: hidden;\n}\n.-app-country__current-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 30%;\n  border-bottom: 2px solid white;\n}\n.-app-country__header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n}\n.-app-country__header-info-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.-app-country__header-info-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  border: 2px solid white;\n  border-radius: 5px;\n}\n.-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n.-app-country__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 33px 0px;\n  box-sizing: border-box;\n  border-bottom: 2px solid white;\n  font-size: 20px;\n}\n.-app-country__item-title[_ngcontent-%COMP%] {\n  padding-left: 75px;\n}\n.-app-country__item-info[_ngcontent-%COMP%] {\n  padding-right: 75px;\n}\n.-app-country__item[_ngcontent-%COMP%], .-app-country__header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.-app-country__item[_ngcontent-%COMP%]:hover::before, .-app-country__header[_ngcontent-%COMP%]:hover::before {\n  height: 70%;\n}\n.-app-country__item[_ngcontent-%COMP%]::before, .-app-country__header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.2s;\n  width: 3px;\n  height: 60%;\n  background-color: white;\n}\n.-app-country__button-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n}\n.-app-country__button_choose[_ngcontent-%COMP%], .-app-country__button_unchoose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 25px 80px;\n  transition: 0.4s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid white;\n  border-radius: 40px;\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 2px;\n  font-weight: 700;\n  font-size: 20px;\n}\n.-app-country__button_choose[_ngcontent-%COMP%]:hover, .-app-country__button_unchoose[_ngcontent-%COMP%]:hover {\n  transform: translate(-51%, -51%);\n  box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.9);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-country__button_choose[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-country__button_choose-invisible[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-country__button_unchoose[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-country__button_unchoose-visible[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-country__button-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-country__button-slide[_ngcontent-%COMP%]:active::before {\n  font-size: 50px;\n}\n.-app-country__button-slide[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before, .-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);\n  font-size: 46px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n}\n.-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  content: \"\uF054\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnlcXGNvdW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMkJoQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUQxQko7QUM2QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxZQTdDSTtFQThDSixtQkFBQTtBRDVCSjtBQzZCSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEN0JSO0FDK0JJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEOUJSO0FDZ0NJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0FEaENSO0FDaUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0FEaENaO0FDaUNZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QURoQ2hCO0FDa0NZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FEakNoQjtBQ29DZ0I7RUFJSSxZQUFBO0VBRUEsa0JBQUE7QUR0Q3BCO0FDMkNJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLDhCQUFBO0VBRUEsZUFBQTtBRDVDUjtBQzZDUTtFQUNJLGtCQUFBO0FEM0NaO0FDNkNRO0VBQ0ksbUJBQUE7QUQzQ1o7QUM4Q0k7RUFFSSxrQkFBQTtBRDdDUjtBQ2dEWTtFQUNJLFdBQUE7QUQ5Q2hCO0FDaURRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFwSVIsZ0NBcUkyQjtFQTdIM0IsZ0JBK0hRO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFySko7QUQyR1I7QUM4Q1E7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUQ5Q1o7QUNnRFE7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBN0pSLGdDQThKMkI7RUFFbkIsa0JBQUE7RUF4SlIsZ0JBMEpRO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFFQSxvQ0FsTE07RUFvTE4sWUF0TEo7RUF1TEkseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRDVDWjtBQzZDWTtFQWpMUixnQ0FrTCtCO0VBRW5CLDBDQUFBO0VBRUEsb0NBL0xFO0FEc0psQjtBQzRDUTtFQUNJLFVBQUE7RUE5S1IsVUFnTHlCO0VBOUt6QiwwQkFBQTtBRG9JSjtBQzJDWTtFQUNJLFdBQUE7RUFsTFosVUFvTDZCO0VBbEw3Qix3QkFBQTtBRHlJSjtBQzRDUTtFQUNJLFdBQUE7RUF4TFIsVUEwTHlCO0VBeEx6Qix3QkFBQTtBRDhJSjtBQzJDWTtFQUNJLFVBQUE7RUE1TFosVUE4TDZCO0VBNUw3QiwwQkFBQTtBRG1KSjtBQzRDUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUF6TVIsZ0JBMk1RO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUR6Q1o7QUMyQ2dCO0VBQ0ksZUFBQTtBRHpDcEI7QUM0Q1k7RUFDSSxlQUFBO0VBbk5aLFlBb042QjtFQWxON0IseUJBQUE7QUR5S0o7QUM2Q2dCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXZPaEIsZ0NBd09tQztFQUVuQixZQXBQWjtFQXFQWSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEeENwQjtBQzRDZ0I7RUFDSSxZQUFBO0FEMUNwQjtBQzhDZ0I7RUFDSSxZQUFBO0FENUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi4tYXBwLWNvdW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLWNvdW50cnktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi4tYXBwLWNvdW50cnlfX2N1cnJlbnQtY291bnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC10aXRsZSwgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC1uYW1lLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxhdGl0dWRlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxvbmdpdHVkZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLi1hcHAtY291bnRyeV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMzcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xufVxuLi1hcHAtY291bnRyeV9faXRlbSwgLi1hcHAtY291bnRyeV9faGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLi1hcHAtY291bnRyeV9faXRlbTpob3Zlcjo6YmVmb3JlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXI6aG92ZXI6OmJlZm9yZSB7XG4gIGhlaWdodDogNzAlO1xufVxuLi1hcHAtY291bnRyeV9faXRlbTo6YmVmb3JlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl9jaG9vc2UsIC4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDI1cHggODBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZTpob3ZlciwgLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUxJSwgLTUxJSk7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZSB7XG4gIHotaW5kZXg6IDQ7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZS1pbnZpc2libGUge1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlIHtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZS12aXNpYmxlIHtcbiAgei1pbmRleDogNDtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGU6YWN0aXZlOjpiZWZvcmUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjM7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMCk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfbGVmdDo6YmVmb3JlLCAuLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfcmlnaHQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlX2xlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GTXCI7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG59IiwiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC05OiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiRibGFja09wYWNpdHkwLTg6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJGJsYWNrT3BhY2l0eTAtNjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi4tYXBwLWNvdW50cnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgJi13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICZfX2N1cnJlbnQtY291bnRyeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY2FwaXRhbCB7XHJcbiAgICAgICAgICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICAgICAgICAgJi1uYW1lLFxyXG4gICAgICAgICAgICAgICAgJi1sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICYtbG9uZ2l0dWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDMzcHggMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkd2hpdGU7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0sXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfY2hvb3NlLFxyXG4gICAgICAgICZfdW5jaG9vc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCA4MHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC40cyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUxJSwgLTUxJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA1cHggN3B4ICRibGFja09wYWNpdHkwLTk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX2Nob29zZSB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDQ7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAmLWludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdW5jaG9vc2Uge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgICYtdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zbGlkZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9sZWZ0LFxyXG4gICAgICAgICAgICAmX3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4ICRibGFja09wYWNpdHkwLTk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDUzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDU0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-country',
          templateUrl: './country.component.html',
          styleUrls: ['./country.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]
        }, {
          type: src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/country-list/region/region.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/country-list/region/region.component.ts ***!
    \********************************************************************/

  /*! exports provided: RegionComponent */

  /***/
  function srcAppComponentsCountryListRegionRegionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionComponent", function () {
      return RegionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/country-list/country-list.selectors */
    "./src/app/store/country-list/country-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/store/country-list/country-list.facade */
    "./src/app/store/country-list/country-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../country-name/country-name.component */
    "./src/app/components/country-list/country-name/country-name.component.ts");
    /* harmony import */


    var src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pipes/country-list/format-region-title.pipe */
    "./src/app/pipes/country-list/format-region-title.pipe.ts");

    function RegionComponent_app_country_name_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-country-name", 7);
      }

      if (rf & 2) {
        var country_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r1);
      }
    }

    var RegionComponent = /*#__PURE__*/function () {
      function RegionComponent(_store$, _router, _activatedRoute, _facadeCountryListService) {
        _classCallCheck(this, RegionComponent);

        this._store$ = _store$;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._windowScrollHeight = 2;
      }

      _createClass(RegionComponent, [{
        key: "navigateToCurrentSubRegionRoute",
        value: function navigateToCurrentSubRegionRoute() {
          var firstSubRegionCountryName = this.subRegionsCountries[0].name;
          var firstSubRegionCountryRouterName = firstSubRegionCountryName.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

          this._router.navigate(['/countries', 'region', this.regionName, this.subRegionName, 'country', firstSubRegionCountryRouterName]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var scrollUpButton = document.querySelector('.-app-scroll-up-button_sub-region-category');
          this._scrollBlock = document.querySelector('.-app-region');

          this._scrollBlock.addEventListener('scroll', function () {
            if (_this3._scrollBlock.scrollTop > _this3._windowScrollHeight) {
              scrollUpButton.classList.add('-app-scroll-up-button_sub-region-category-visible');
            } else {
              scrollUpButton.classList.remove('-app-scroll-up-button_sub-region-category-visible');
            }
          });

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this3.regionName = params.regionName;
            _this3.subRegionName = params.subRegionName;

            _this3._facadeCountryListService.searchSubRegionCountries(_this3.regionName, _this3.subRegionName);
          });

          this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchCountry"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (searchCountry) {
            if (Boolean(searchCountry)) {
              _this3._isSearchCountry = true;
            }
          });

          this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSubRegionsCountries"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (subRegionsCountries) {
            if (Boolean(subRegionsCountries)) {
              _this3.subRegionsCountries = subRegionsCountries;

              if (!_this3._isSearchCountry) {
                _this3.navigateToCurrentSubRegionRoute();
              }
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
        key: "scrollTop",
        value: function scrollTop() {
          this._scrollBlock.scrollTo(0, 0);
        }
      }]);

      return RegionComponent;
    }();

    RegionComponent.ɵfac = function RegionComponent_Factory(t) {
      return new (t || RegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceCountryList"]));
    };

    RegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegionComponent,
      selectors: [["app-region"]],
      decls: 12,
      vars: 7,
      consts: [[1, "-app-region"], [1, "-app-region__title"], [1, "-app-region__sub-title"], [1, "-app-region__country-list"], [3, "country", 4, "ngFor", "ngForOf"], [1, "-app-scroll-up-button", "-app-scroll-up-button_sub-region-category", 3, "click"], [1, "-app-region__current-country"], [3, "country"]],
      template: function RegionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatRegionTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "formatRegionTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegionComponent_app_country_name_8_Template, 1, 1, "app-country-name", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionComponent_Template_a_click_9_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.regionName), " Region ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.subRegionName), " Subregion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subRegionsCountries);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_8__["CountryNameComponent"]],
      pipes: [src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatRegionTitlePipe"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n  background-image: url('region-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-region[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  overflow: scroll;\n}\n.-app-region__title[_ngcontent-%COMP%], .-app-region__sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n  text-align: center;\n  letter-spacing: 2.5px;\n  font-weight: 800;\n}\n.-app-region__title[_ngcontent-%COMP%] {\n  padding: 30px;\n  font-size: 36px;\n}\n.-app-region__sub-title[_ngcontent-%COMP%] {\n  padding: 30px;\n  padding-top: 0px;\n  font-size: 28px;\n}\n.-app-region__country-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n}\n.-app-region__current-country[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  border-left: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvcmVnaW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXHJlZ2lvblxccmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUNMSjtBRE1JO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSwyQ0FBQTtFQUNBLHNCQUFBO0FDUFI7QURXQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDVko7QURXSTtFQUVJLFdBQUE7RUFDQSxXQUFBO0VBRUEsWUE1Q0E7RUE2Q0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1hSO0FEYUk7RUFDSSxhQUFBO0VBRUEsZUFBQTtBQ1pSO0FEY0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDYlI7QURlSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDYlI7QURlSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUVBLG9DQTdFVTtBQzREbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC04OiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRibGFja09wYWNpdHkwLTY6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHJcbjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3VudHJ5LWxpc3QvcmVnaW9uLW1lbnUtYmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuLi1hcHAtcmVnaW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgJl9fdGl0bGUsXHJcbiAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAkYmxhY2tPcGFjaXR5MC04O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgJl9fY291bnRyeS1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB9XHJcbiAgICAmX19jdXJyZW50LWNvdW50cnkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkd2hpdGU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3VudHJ5LWxpc3QvcmVnaW9uLW1lbnUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uLWFwcC1yZWdpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLi1hcHAtcmVnaW9uX190aXRsZSwgLi1hcHAtcmVnaW9uX19zdWItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi4tYXBwLXJlZ2lvbl9fc3ViLXRpdGxlIHtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLi1hcHAtcmVnaW9uX19jb3VudHJ5LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuLi1hcHAtcmVnaW9uX19jdXJyZW50LWNvdW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-region',
          templateUrl: './region.component.html',
          styleUrls: ['./region.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceCountryList"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/country-list/can-leave-country.guard.ts":
  /*!****************************************************************!*\
    !*** ./src/app/guards/country-list/can-leave-country.guard.ts ***!
    \****************************************************************/

  /*! exports provided: CanLeaveCountryGuard */

  /***/
  function srcAppGuardsCountryListCanLeaveCountryGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanLeaveCountryGuard", function () {
      return CanLeaveCountryGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanLeaveCountryGuard = /*#__PURE__*/function () {
      function CanLeaveCountryGuard() {
        _classCallCheck(this, CanLeaveCountryGuard);
      }

      _createClass(CanLeaveCountryGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return CanLeaveCountryGuard;
    }();

    CanLeaveCountryGuard.ɵfac = function CanLeaveCountryGuard_Factory(t) {
      return new (t || CanLeaveCountryGuard)();
    };

    CanLeaveCountryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanLeaveCountryGuard,
      factory: CanLeaveCountryGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveCountryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/country-list/can-proceed-to-country.guard.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/guards/country-list/can-proceed-to-country.guard.ts ***!
    \*********************************************************************/

  /*! exports provided: CanProceedToCountryGuard */

  /***/
  function srcAppGuardsCountryListCanProceedToCountryGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToCountryGuard", function () {
      return CanProceedToCountryGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/country-list/country-list.selectors */
    "./src/app/store/country-list/country-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var CanProceedToCountryGuard = /*#__PURE__*/function () {
      function CanProceedToCountryGuard(_store$) {
        _classCallCheck(this, CanProceedToCountryGuard);

        this._store$ = _store$;
      }

      _createClass(CanProceedToCountryGuard, [{
        key: "takeNameOfRegionOrSubRegion",
        value: function takeNameOfRegionOrSubRegion(name) {
          return name.toLowerCase().split(' ')[0];
        }
      }, {
        key: "isExistRegionOrSubRegionRouteName",
        value: function isExistRegionOrSubRegionRouteName(name) {
          var currentCountryRegionOrSubRegionRouteName = this.takeNameOfRegionOrSubRegion(name);

          if (this._currentUrl.includes(currentCountryRegionOrSubRegionRouteName)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "checkCountry",
        value: function checkCountry(countryRouterName) {
          var isExistCurrentUrlCountry;

          var searchCountry = this._countryList.find(function (country) {
            if (Boolean(country)) {
              var currentCountryRouterName = country.name.replace(/\./g, '').replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

              if (currentCountryRouterName === countryRouterName) {
                return country;
              }
            }
          });

          if (Boolean(searchCountry)) {
            isExistCurrentUrlCountry = this.isExistRegionOrSubRegionRouteName(searchCountry.region);
            isExistCurrentUrlCountry = this.isExistRegionOrSubRegionRouteName(searchCountry.subRegion);
          }

          if (!isExistCurrentUrlCountry) {
            var errorMessage = "There is no country with this name (".concat(countryRouterName, ") in this region and sub-region");
            throw new Error(errorMessage);
          }
        }
      }, {
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this4 = this;

          this._currentUrl = state.url;
          var currentCountryName = next.params.countryName;

          this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"]).subscribe(function (countryList) {
            _this4._countryList = countryList;

            _this4.checkCountry(currentCountryName);
          }).unsubscribe();

          return true;
        }
      }]);

      return CanProceedToCountryGuard;
    }();

    CanProceedToCountryGuard.ɵfac = function CanProceedToCountryGuard_Factory(t) {
      return new (t || CanProceedToCountryGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    CanProceedToCountryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToCountryGuard,
      factory: CanProceedToCountryGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToCountryGuard, [{
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
  "./src/app/guards/country-list/can-proceed-to-region.guard.ts":
  /*!********************************************************************!*\
    !*** ./src/app/guards/country-list/can-proceed-to-region.guard.ts ***!
    \********************************************************************/

  /*! exports provided: CanProceedToRegionGuard */

  /***/
  function srcAppGuardsCountryListCanProceedToRegionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToRegionGuard", function () {
      return CanProceedToRegionGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/country-list/country-list.selectors */
    "./src/app/store/country-list/country-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var CanProceedToRegionGuard = /*#__PURE__*/function () {
      function CanProceedToRegionGuard(_store$) {
        _classCallCheck(this, CanProceedToRegionGuard);

        this._store$ = _store$;
      }

      _createClass(CanProceedToRegionGuard, [{
        key: "checkRouterParams",
        value: function checkRouterParams(regionName, subRegionName) {
          var currentRegionSubRegionCountry = this._countryList.find(function (country) {
            if (Boolean(country)) {
              var currentCountryRegionName = country.region.split(' ')[0].toLowerCase();
              var currentCountrySubRegionName = country.subRegion.split(' ')[0].toLowerCase();

              if (currentCountryRegionName === regionName && currentCountrySubRegionName === subRegionName) {
                return country;
              }
            }
          });

          if (!Boolean(currentRegionSubRegionCountry)) {
            var errorMessage = "There are no countries in such region (".concat(regionName, ") and sub-region (").concat(subRegionName, ")");
            throw new Error(errorMessage);
          }
        }
      }, {
        key: "canActivate",
        value: function canActivate(next) {
          var _this5 = this;

          var currentRegion = next.params.regionName;
          var currentSubRegion = next.params.subRegionName;

          this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"]).subscribe(function (countryList) {
            _this5._countryList = countryList;
          }).unsubscribe();

          this.checkRouterParams(currentRegion, currentSubRegion);
          return true;
        }
      }]);

      return CanProceedToRegionGuard;
    }();

    CanProceedToRegionGuard.ɵfac = function CanProceedToRegionGuard_Factory(t) {
      return new (t || CanProceedToRegionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    CanProceedToRegionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToRegionGuard,
      factory: CanProceedToRegionGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToRegionGuard, [{
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
  "./src/app/pipes/country-list/format-area.pipe.ts":
  /*!********************************************************!*\
    !*** ./src/app/pipes/country-list/format-area.pipe.ts ***!
    \********************************************************/

  /*! exports provided: FormatAreaPipe */

  /***/
  function srcAppPipesCountryListFormatAreaPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatAreaPipe", function () {
      return FormatAreaPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatAreaPipe = /*#__PURE__*/function () {
      function FormatAreaPipe() {
        _classCallCheck(this, FormatAreaPipe);
      }

      _createClass(FormatAreaPipe, [{
        key: "transform",
        value: function transform(value) {
          var currentCountryArea = value.toString();
          var currentCountryAreaInfoWithSpacesAfterEachThirdCharacters = currentCountryArea.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
          var countryAreaInfo = currentCountryAreaInfoWithSpacesAfterEachThirdCharacters + ' sq/km';
          return countryAreaInfo;
        }
      }]);

      return FormatAreaPipe;
    }();

    FormatAreaPipe.ɵfac = function FormatAreaPipe_Factory(t) {
      return new (t || FormatAreaPipe)();
    };

    FormatAreaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatArea",
      type: FormatAreaPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatAreaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatArea'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/country-list/format-forest-area.pipe.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pipes/country-list/format-forest-area.pipe.ts ***!
    \***************************************************************/

  /*! exports provided: FormatForestAreaPipe */

  /***/
  function srcAppPipesCountryListFormatForestAreaPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatForestAreaPipe", function () {
      return FormatForestAreaPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatForestAreaPipe = /*#__PURE__*/function () {
      function FormatForestAreaPipe() {
        _classCallCheck(this, FormatForestAreaPipe);
      }

      _createClass(FormatForestAreaPipe, [{
        key: "transform",
        value: function transform(value) {
          var currentCountryForestArea = value;
          var currentCountryForestAreaInfo = "".concat(currentCountryForestArea, "%");
          return currentCountryForestAreaInfo;
        }
      }]);

      return FormatForestAreaPipe;
    }();

    FormatForestAreaPipe.ɵfac = function FormatForestAreaPipe_Factory(t) {
      return new (t || FormatForestAreaPipe)();
    };

    FormatForestAreaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatForestArea",
      type: FormatForestAreaPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatForestAreaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatForestArea'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/country-list/format-region-title.pipe.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pipes/country-list/format-region-title.pipe.ts ***!
    \****************************************************************/

  /*! exports provided: FormatRegionTitlePipe */

  /***/
  function srcAppPipesCountryListFormatRegionTitlePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatRegionTitlePipe", function () {
      return FormatRegionTitlePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatRegionTitlePipe = /*#__PURE__*/function () {
      function FormatRegionTitlePipe() {
        _classCallCheck(this, FormatRegionTitlePipe);
      }

      _createClass(FormatRegionTitlePipe, [{
        key: "transform",
        value: function transform(value) {
          return value.split('-').map(function (currentWord) {
            return currentWord[0].toUpperCase() + currentWord.slice(1);
          }).join(' ');
        }
      }]);

      return FormatRegionTitlePipe;
    }();

    FormatRegionTitlePipe.ɵfac = function FormatRegionTitlePipe_Factory(t) {
      return new (t || FormatRegionTitlePipe)();
    };

    FormatRegionTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatRegionTitle",
      type: FormatRegionTitlePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatRegionTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatRegionTitle'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-country-list-country-list-country-list-module-es5.js.map