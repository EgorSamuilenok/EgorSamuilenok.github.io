(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-country-list-country-list-country-list-module"],{

/***/ "./src/app/components/country-list/country-list/country-list-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/country-list/country-list/country-list-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CountryListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListRoutingModule", function() { return CountryListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.component */ "./src/app/components/country-list/country-list/country-list.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../region/region.component */ "./src/app/components/country-list/region/region.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../country/country.component */ "./src/app/components/country-list/country/country.component.ts");
/* harmony import */ var src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/country-list/can-proceed-to-region.guard */ "./src/app/guards/country-list/can-proceed-to-region.guard.ts");
/* harmony import */ var src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/guards/country-list/can-proceed-to-country.guard */ "./src/app/guards/country-list/can-proceed-to-country.guard.ts");
/* harmony import */ var src_app_guards_country_list_can_leave_region_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/country-list/can-leave-region.guard */ "./src/app/guards/country-list/can-leave-region.guard.ts");










const routes = [
    {
        path: '',
        component: _country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]
    },
    {
        path: 'region/:regionName/:subRegionName',
        component: _region_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"],
        canActivate: [src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToRegionGuard"]],
        canDeactivate: [src_app_guards_country_list_can_leave_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveRegionGuard"]],
        children: [{
                path: 'country/:countryName',
                component: _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
                canActivate: [src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToCountryGuard"]]
            }]
    },
];
class CountryListRoutingModule {
}
CountryListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CountryListRoutingModule });
CountryListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CountryListRoutingModule_Factory(t) { return new (t || CountryListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CountryListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/country-list/country-list/country-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/country-list/country-list/country-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CountryListComponent {
    constructor(_router) {
        this._router = _router;
        this.menuMode = false;
        this.asiaMenuMode = false;
        this.europeMenuMode = false;
        this.africaMenuMode = false;
        this.oceaniaMenuMode = false;
        this.americaMenuMode = false;
    }
    takeNameOfContent(htmlElement) {
        const currentSubRegionContent = htmlElement.innerHTML.split(' ').filter((name) => Boolean(name));
        return currentSubRegionContent[0].toLowerCase();
    }
    toggleMenuMode() {
        this.menuMode = !this.menuMode;
    }
    returnMenuMode() {
        this.menuMode = !this.menuMode;
        this.asiaMenuMode = false;
        this.europeMenuMode = false;
        this.africaMenuMode = false;
        this.oceaniaMenuMode = false;
        this.americaMenuMode = false;
    }
    toggleAsiaMenuMode() {
        this.asiaMenuMode = !this.asiaMenuMode;
    }
    toggleEuropeMenuMode() {
        this.europeMenuMode = !this.europeMenuMode;
    }
    toggleOceaniaMenuMode() {
        this.oceaniaMenuMode = !this.oceaniaMenuMode;
    }
    toggleAfricaMenuMode() {
        this.africaMenuMode = !this.africaMenuMode;
    }
    toggleAmericaMenuMode() {
        this.americaMenuMode = !this.americaMenuMode;
    }
    switchRouter(regionHtmlElement, subRegionHtmlElement) {
        const regionName = this.takeNameOfContent(regionHtmlElement);
        const subRegionName = this.takeNameOfContent(subRegionHtmlElement);
        this._router.navigate(['/countries', 'region', regionName, subRegionName]);
    }
}
CountryListComponent.ɵfac = function CountryListComponent_Factory(t) { return new (t || CountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryListComponent, selectors: [["app-country-list"]], decls: 88, vars: 124, consts: [[1, "-app-countries"], [1, "-app-countries__start-menu"], [1, "-app-countries__start-menu-title", 3, "click"], [1, "-app-countries__start-menu-search"], [1, "-app-countries__menu", "-app-countries__menu_bg"], [1, "-app-countries__menu-return", 3, "click"], [1, "-app-countries__menu-list", 3, "click"], ["asia", ""], [1, "-app-countries__menu-item", 3, "click"], ["southernAsia", ""], ["westernAsia", ""], ["centralAsia", ""], ["easternAsia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_south-eastern-asia", 3, "click"], ["southEasternAsia", ""], ["europe", ""], ["northernEurope", ""], ["southernEurope", ""], ["westernEurope", ""], ["easternEurope", ""], ["africa", ""], ["northernAfrica", ""], ["middleAfrica", ""], ["southernAfrica", ""], ["easternAfrica", ""], ["westernAfrica", ""], ["oceania", ""], ["polynesia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_australia-oceania", 3, "click"], ["australia", ""], ["melanesia", ""], ["micronesia", ""], ["america", ""], ["centralAmerica", ""], ["northernAmerica", ""], ["southAmerica", ""], ["caribbean", ""]], template: function CountryListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_2_listener() { return ctx.toggleMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_span_click_6_listener() { return ctx.returnMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_7_listener() { return ctx.toggleAsiaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.switchRouter(_r0, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Southern Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.switchRouter(_r0, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Western Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.switchRouter(_r0, _r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Central Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.switchRouter(_r0, _r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Eastern Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.switchRouter(_r0, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " South-Eastern Asia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_25_listener() { return ctx.toggleEuropeMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.switchRouter(_r6, _r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Northern Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.switchRouter(_r6, _r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Southern Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.switchRouter(_r6, _r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Western Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38); return ctx.switchRouter(_r6, _r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Eastern Europe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_40_listener() { return ctx.toggleAfricaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.switchRouter(_r11, _r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Northern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.switchRouter(_r11, _r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Middle Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.switchRouter(_r11, _r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Southern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); return ctx.switchRouter(_r11, _r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Eastern Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return ctx.switchRouter(_r11, _r16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Western Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_58_listener() { return ctx.toggleOceaniaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Oceania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); return ctx.switchRouter(_r17, _r18); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Polynesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); return ctx.switchRouter(_r17, _r19); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Australia And New Zealand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx.switchRouter(_r17, _r20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Melanesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx.switchRouter(_r17, _r21); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Micronesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_73_listener() { return ctx.toggleAmericaMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Americas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); return ctx.switchRouter(_r22, _r23); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Central America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80); return ctx.switchRouter(_r22, _r24); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Northern America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83); return ctx.switchRouter(_r22, _r25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " South America ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86); return ctx.switchRouter(_r22, _r26); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Caribbean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, styles: ["@charset \"UTF-8\";\n@-webkit-keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n@keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n.-app-countries[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-image: url('country-list-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-countries__start-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 200px;\n  height: 100px;\n}\n.-app-countries__start-menu_menu-mode[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-countries__start-menu[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 10%;\n  left: 0%;\n  width: 30%;\n  height: 3px;\n  -webkit-animation: 1s menuLine alternate infinite;\n  animation: 1s menuLine alternate infinite;\n  border-radius: 2px;\n  background-color: white;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: 0.2s;\n  cursor: pointer;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 5px black;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n  letter-spacing: 2.5px;\n  font-size: 26px;\n}\n.-app-countries__start-menu-title_search-mode[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  cursor: pointer;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n  content: \"\uF002\";\n  position: absolute;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 2px 2px 5px black;\n  font-size: 26px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-countries__menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-countries__menu_bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  transition: 0.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  border-radius: 20%;\n  background: rgba(0, 0, 0, 0.7);\n}\n.-app-countries__menu_bg-menu-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 0%;\n}\n.-app-countries__menu-return[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n.-app-countries__menu-return_visible[_ngcontent-%COMP%] {\n  left: 25%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-return[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-countries__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  text-shadow: none;\n  text-align: center;\n}\n.-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.-app-countries__menu-item_visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-item_visible-southern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-southern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-south-america[_ngcontent-%COMP%] {\n  transform: translate(-120%, 100%);\n}\n.-app-countries__menu-item_visible-western-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-africa[_ngcontent-%COMP%] {\n  transform: translate(-175%, -50%);\n}\n.-app-countries__menu-item_visible-central-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-america[_ngcontent-%COMP%] {\n  transform: translate(-50%, -200%);\n}\n.-app-countries__menu-item_visible-eastern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-caribbean-america[_ngcontent-%COMP%] {\n  transform: translate(100%, -50%);\n}\n.-app-countries__menu-item_visible-southern-europe[_ngcontent-%COMP%] {\n  transform: translate(-50%, 100%);\n}\n.-app-countries__menu-item_visible-micronesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(75%, -400%);\n}\n.-app-countries__menu-item_visible-melanesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(50%, -200%);\n}\n.-app-countries__menu-item_visible-polynesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(110%, 0%);\n}\n.-app-countries__menu-item_visible-australia-oceania[_ngcontent-%COMP%] {\n  transform: translate(-150%, 0%);\n}\n.-app-countries__menu-item_visible-middle-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-central-america[_ngcontent-%COMP%] {\n  transform: translate(40%, 100%);\n}\n.-app-countries__menu-item_visible-south-eastern-asia[_ngcontent-%COMP%] {\n  transform: translate(5%, 100%);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 2px;\n  font-size: 30px;\n}\n.-app-countries__menu-list_invisible[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n.-app-countries__menu-list_invisible.-app-countries__menu-list[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 80%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_asia-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_europe[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_europe-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_africa-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 80%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_oceania-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_america[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_america-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbGlzdFxcY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQzRCWjtFQWtCQTtJQUNJLFFBQUE7RUQzQ047RUM2Q0U7SUFDSSxVQUFBO0lBeENKLCtCQXlDdUI7RUR2Q3pCO0FBQ0Y7QUMyQkk7RUFNQTtJQUNJLFFBQUE7RURTTjtFQ1BFO0lBQ0ksVUFBQTtJQXhDSiwrQkF5Q3VCO0VEYXpCO0FBQ0Y7QUNGQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBM0VKLGdDQTRFdUI7RUFFbkIsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBRElSO0FDSFE7RUE1RUosZ0JBNkVRO0VBRUEsV0FBQTtFQTNFUixVQTZFeUI7RUEzRXpCLHdCQUFBO0FEbUZKO0FDTlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBcERSLGlEQUFBO0VBSUEseUNBQUE7RUFvRFEsa0JBQUE7RUFFQSx1QkFsSEo7QUQwSFI7QUNOUTtFQUNJLFVBQUE7RUFuR1IsZ0JBcUdRO0VBQ0EsZUFBQTtFQUVBLFlBMUhKO0VBMkhJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEVVo7QUNUWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURXaEI7QUNUWTtFQUNJLGFBQUE7QURXaEI7QUNSUTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FEUVo7QUNQWTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBNUlaLGdDQTZJK0I7RUFFbkIsWUF6SlI7RUEwSlEsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRFdoQjtBQ1BJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURTUjtBQ1JRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUE5SlIsZ0NBK0oyQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQTFKUixnQkE0SlE7RUF4SlIsVUF5SnlCO0VBdkp6Qix3QkFBQTtFQXlKUSxrQkFBQTtFQUVBLDhCQWpMTTtBRGdNbEI7QUNkWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBaEtaLFVBa0s2QjtFQWhLN0IsMEJBQUE7RUFrS1ksaUJBQUE7QURlaEI7QUNaUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBdkxSLGdDQXdMMkI7RUFoTDNCLGNBa0xRO0VBOUtSLFVBK0t5QjtFQTdLekIsd0JBQUE7RUErS1EsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FEb0JaO0FDbkJZO0VBQ0ksU0FBQTtFQXRMWixVQXdMNkI7RUF0TDdCLDBCQUFBO0FEMk1KO0FDbkJZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUEzTVosZ0NBNE0rQjtFQUVuQixZQXhOUjtFQXlOUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRHVCaEI7QUNwQlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXhOUixnQ0F5TjJCO0VBak4zQixnQkFtTlE7RUEvTVIsVUFnTnlCO0VBOU16Qix3QkFBQTtFQWdOUSxpQkFBQTtFQUNBLGtCQUFBO0FENkJaO0FDNUJZO0VBQ0ksWUFBQTtBRDhCaEI7QUM1Qlk7RUFDSSxZQUFBO0FEOEJoQjtBQzVCWTtFQTFOUixVQTJONkI7RUF6TjdCLDBCQUFBO0FEd1BKO0FDOUJnQjtFQXhPWixpQ0EyT21DO0FEa0N2QztBQ2hDZ0I7RUE3T1osaUNBZ1BtQztBRG9DdkM7QUNsQ2dCO0VBbFBaLGlDQXNQbUM7QURxQ3ZDO0FDbkNnQjtFQXhQWixnQ0E0UG1DO0FEc0N2QztBQ3BDZ0I7RUE5UFosZ0NBK1BtQztBRDBDdkM7QUN4Q2dCO0VBalFaLGdDQWtRbUM7QUQ4Q3ZDO0FDNUNnQjtFQXBRWixnQ0FxUW1DO0FEa0R2QztBQ2hEZ0I7RUF2UVosOEJBd1FtQztBRHNEdkM7QUNwRGdCO0VBMVFaLCtCQTJRbUM7QUQwRHZDO0FDeERnQjtFQTdRWiwrQkErUW1DO0FENkR2QztBQzNEZ0I7RUFqUlosOEJBa1JtQztBRGlFdkM7QUM3RFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTFSUixnQ0EyUjJCO0VBblIzQixjQXFSUTtFQUNBLGVBQUE7RUFsUlIsVUFtUnlCO0VBalJ6Qix3QkFBQTtFQW1SUSxZQTNTSjtFQTRTSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHNFWjtBQ3JFWTtFQTdSUixnQkE4Ulk7QUQyRWhCO0FDMUVnQjtFQTNSWixVQTRSaUM7RUExUmpDLHdCQUFBO0FEdVdKO0FDMUVZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRDRFaEI7QUMxRVk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQXBTWixVQXNTNkI7RUFwUzdCLDBCQUFBO0FEZ1hKO0FDM0VnQjtFQUNJLDJDQUFBO0FENkVwQjtBQzFFWTtFQTNTUixVQTRTNkI7RUExUzdCLDBCQUFBO0FEdVhKO0FDNUVnQjtFQUNJLDJDQUFBO0FEOEVwQjtBQzNFWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBblRaLFVBcVQ2QjtFQW5UN0IsMEJBQUE7QURnWUo7QUM1RWdCO0VBQ0ksMkNBQUE7QUQ4RXBCO0FDM0VZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUE1VFosVUE4VDZCO0VBNVQ3QiwwQkFBQTtBRHlZSjtBQzVFZ0I7RUFDSSwyQ0FBQTtBRDhFcEI7QUMzRVk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQXJVWixVQXVVNkI7RUFyVTdCLDBCQUFBO0FEa1pKO0FDNUVnQjtFQUNJLDJDQUFBO0FEOEVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ALXdlYmtpdC1rZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICB9XG59XG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uLWFwcC1jb3VudHJpZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QtbWVudS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudV9tZW51LW1vZGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDNweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbjogMXMgbWVudUxpbmUgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiAxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtdGl0bGUge1xuICB3aWR0aDogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZV9zZWFyY2gtbW9kZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CCXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmctbWVudS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LXJldHVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb246IDFzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1yZXR1cm5fdmlzaWJsZSB7XG4gIGxlZnQ6IDI1JTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtcmV0dXJuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+LqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9zb3V0aC1lYXN0ZXJuLWFzaWEge1xuICB3aWR0aDogMjAwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9hdXN0cmFsaWEtb2NlYW5pYSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1zb3V0aGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtYW1lcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIDEwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLXdlc3Rlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS13ZXN0ZXJuLWV1cm9wZSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS13ZXN0ZXJuLWFmcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzUlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzUlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTc1JSwgLTUwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1ub3J0aGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtbm9ydGhlcm4tYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW5vcnRoZXJuLWFtZXJpY2Ege1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1lYXN0ZXJuLWFzaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtY2FyaWJiZWFuLWFtZXJpY2Ege1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tZXVyb3BlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW1pY3JvbmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NSUsIC00MDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDc1JSwgLTQwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1tZWxhbmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC0yMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1wb2x5bmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWF1c3RyYWxpYS1vY2VhbmlhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1taWRkbGUtYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYW1lcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MCUsIDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtZWFzdGVybi1hc2lhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgLW1zLXRyYW5zaXRpb246IDFzO1xuICAtby10cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9pbnZpc2libGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9pbnZpc2libGUuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhIHtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDgwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhLW1lbnUtbW9kZSB7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9ldXJvcGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2V1cm9wZS1tZW51LW1vZGUge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYWZyaWNhIHtcbiAgdG9wOiA4MCU7XG4gIGxlZnQ6IDIwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hZnJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICB0b3A6IDgwJTtcbiAgbGVmdDogODAlO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FtZXJpY2Ege1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjAlO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FtZXJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtNzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKG1lbnVMaW5lKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTEwMCUsIDAlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tcy1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtby1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICBhbmltYXRpb246ICN7JHN0cn07ICAgICAgXHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLi1hcHAtY291bnRyaWVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QtbWVudS1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fc3RhcnQtbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNHMpO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGUnKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAkYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2VhcmNoLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDAyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MiU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4ICRibGFjaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19tZW51IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgJl9iZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC41cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2tPcGFjaXR5MC03O1xyXG4gICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDFzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICZfdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYyZWFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC41cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hdXN0cmFsaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl92aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoZXJuLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoZXJuLWFmcmljYSxcclxuICAgICAgICAgICAgICAgICYtc291dGgtYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtMTIwJSwgMTAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi13ZXN0ZXJuLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLXdlc3Rlcm4tZXVyb3BlLFxyXG4gICAgICAgICAgICAgICAgJi13ZXN0ZXJuLWFmcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtMTc1JSwgLTUwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1jZW50cmFsLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLW5vcnRoZXJuLWV1cm9wZSxcclxuICAgICAgICAgICAgICAgICYtbm9ydGhlcm4tYWZyaWNhLFxyXG4gICAgICAgICAgICAgICAgJi1ub3J0aGVybi1hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC0yMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWVhc3Rlcm4tYXNpYSxcclxuICAgICAgICAgICAgICAgICYtZWFzdGVybi1ldXJvcGUsXHJcbiAgICAgICAgICAgICAgICAmLWVhc3Rlcm4tYWZyaWNhLFxyXG4gICAgICAgICAgICAgICAgJi1jYXJpYmJlYW4tYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgxMDAlLCAtNTAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoZXJuLWV1cm9wZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAxMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1pY3JvbmVzaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg3NSUsIC00MDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1lbGFuZXNpYS1vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDUwJSwgLTIwMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtcG9seW5lc2lhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMTEwJSwgMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYXVzdHJhbGlhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTE1MCUsIDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1pZGRsZS1hZnJpY2EsXHJcbiAgICAgICAgICAgICAgICAmLWNlbnRyYWwtYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg0MCUsIDEwMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtc291dGgtZWFzdGVybi1hc2lhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDUlLCAxMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1saXN0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDFzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC41cyk7XHJcbiAgICAgICAgICAgICAgICAmLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FzaWEge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgICAgICYtbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2V1cm9wZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYWZyaWNhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogODAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-list',
                templateUrl: './country-list.component.html',
                styleUrls: ['./country-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/country-list/country-list/country-list.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/country-list/country-list/country-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CountryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListModule", function() { return CountryListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _country_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.component */ "./src/app/components/country-list/country-list/country-list.component.ts");
/* harmony import */ var _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-list-routing.module */ "./src/app/components/country-list/country-list/country-list-routing.module.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../country/country.component */ "./src/app/components/country-list/country/country.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../region/region.component */ "./src/app/components/country-list/region/region.component.ts");
/* harmony import */ var _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../country-name/country-name.component */ "./src/app/components/country-list/country-name/country-name.component.ts");
/* harmony import */ var src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/country-list/can-proceed-to-region.guard */ "./src/app/guards/country-list/can-proceed-to-region.guard.ts");
/* harmony import */ var src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/guards/country-list/can-proceed-to-country.guard */ "./src/app/guards/country-list/can-proceed-to-country.guard.ts");
/* harmony import */ var src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/country-list/format-forest-area.pipe */ "./src/app/pipes/country-list/format-forest-area.pipe.ts");
/* harmony import */ var src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/country-list/format-area.pipe */ "./src/app/pipes/country-list/format-area.pipe.ts");
/* harmony import */ var src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/country-list/format-region-title.pipe */ "./src/app/pipes/country-list/format-region-title.pipe.ts");
/* harmony import */ var src_app_guards_country_list_can_leave_region_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/guards/country-list/can-leave-region.guard */ "./src/app/guards/country-list/can-leave-region.guard.ts");














class CountryListModule {
}
CountryListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountryListModule, bootstrap: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]] });
CountryListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CountryListModule_Factory(t) { return new (t || CountryListModule)(); }, providers: [
        src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToRegionGuard"],
        src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToCountryGuard"],
        src_app_guards_country_list_can_leave_region_guard__WEBPACK_IMPORTED_MODULE_12__["CanLeaveRegionGuard"]
    ], imports: [[
            _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountryListModule, { declarations: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"],
        _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
        _region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"],
        _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__["CountryNameComponent"],
        src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatForestAreaPipe"],
        src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatAreaPipe"],
        src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatRegionTitlePipe"]], imports: [_country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"],
                    _country_country_component__WEBPACK_IMPORTED_MODULE_4__["CountryComponent"],
                    _region_region_component__WEBPACK_IMPORTED_MODULE_5__["RegionComponent"],
                    _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_6__["CountryNameComponent"],
                    src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatForestAreaPipe"],
                    src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatAreaPipe"],
                    src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatRegionTitlePipe"]
                ],
                imports: [
                    _country_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CountryListRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    src_app_guards_country_list_can_proceed_to_region_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToRegionGuard"],
                    src_app_guards_country_list_can_proceed_to_country_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToCountryGuard"],
                    src_app_guards_country_list_can_leave_region_guard__WEBPACK_IMPORTED_MODULE_12__["CanLeaveRegionGuard"]
                ],
                bootstrap: [_country_list_component__WEBPACK_IMPORTED_MODULE_2__["CountryListComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/country-list/country-name/country-name.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/country-list/country-name/country-name.component.ts ***!
  \********************************************************************************/
/*! exports provided: CountryNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryNameComponent", function() { return CountryNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CountryNameComponent {
    constructor(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._regionName = params.regionName;
            this._subRegionName = params.subRegionName;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    goToCurrentCountryRouter() {
        const countryName = this.country.name.replace(/\./g, '')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
        this._router.navigate([
            '/countries',
            'region',
            this._regionName,
            this._subRegionName,
            'country',
            countryName
        ]);
    }
}
CountryNameComponent.ɵfac = function CountryNameComponent_Factory(t) { return new (t || CountryNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CountryNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryNameComponent, selectors: [["app-country-name"]], inputs: { country: "country" }, decls: 3, vars: 1, consts: [[1, "-app-country"], [1, "-app-country__name", 3, "click"]], template: function CountryNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryNameComponent_Template_div_click_1_listener() { return ctx.goToCurrentCountryRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.name, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n}\n\n.-app-country[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-country__name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  cursor: pointer;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 4px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.-app-country__name[_ngcontent-%COMP%]:hover {\n  letter-spacing: 3.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1uYW1lL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbmFtZVxcY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5LW5hbWUvY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRFlJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUF2QkosZ0JBeUJJO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRFVRO0VBQ0kscUJBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnktbmFtZS9jb3VudHJ5LW5hbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi4tYXBwLWNvdW50cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggJGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzLjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uLWFwcC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX25hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY291bnRyeV9fbmFtZTpob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAzLjVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-name',
                templateUrl: './country-name.component.html',
                styleUrls: ['./country-name.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/country-list/country/country.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/country-list/country/country.component.ts ***!
  \**********************************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/country-list/format-area.pipe */ "./src/app/pipes/country-list/format-area.pipe.ts");
/* harmony import */ var src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/country-list/format-forest-area.pipe */ "./src/app/pipes/country-list/format-forest-area.pipe.ts");













function CountryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.switchToPreviousCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.choose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.unchoose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " unchoose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryComponent_div_0_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.switchToNextCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
} }
function CountryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
} }
class CountryComponent {
    constructor(_store$, _activatedRoute, _router, _facadeDonationListService, _facadeCountryListService) {
        this._store$ = _store$;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isSearchLoading = true;
        this.isCanChosenCountry = true;
    }
    canChosenCountry(countryName) {
        if (Boolean(this._selectedCountriesForDonation)) {
            const chosenCountry = this._selectedCountriesForDonation.find((country) => country.name === countryName);
            return !Boolean(chosenCountry);
        }
        else {
            return true;
        }
    }
    switchRouterToSomeCountry(countryName) {
        const countryRouterName = countryName.replace(/\./g, '')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
        const countryRegionName = this.country.region;
        const countrySubRegionName = this.country.subRegion;
        const countryRegionRouterName = this.takeRouterNameOfRegionOrSubRegion(countryRegionName);
        const countrySubRegionRouterName = this.takeRouterNameOfRegionOrSubRegion(countrySubRegionName);
        this._router.navigate([
            '/countries',
            'region',
            countryRegionRouterName,
            countrySubRegionRouterName,
            'country',
            countryRouterName
        ]);
    }
    takeRouterNameOfRegionOrSubRegion(name) {
        return name.toLowerCase().split(' ')[0];
    }
    ngOnInit() {
        this._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
            this._facadeCountryListService.searchCountry(params.countryName);
        });
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCountriesForDonation"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((selectedCountriesForDonation) => {
            if (Boolean(selectedCountriesForDonation)) {
                this._selectedCountriesForDonation = selectedCountriesForDonation;
            }
        });
        const countrySearchDelay = 3000;
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(countrySearchDelay)).subscribe((country) => {
            if (Boolean(country)) {
                this.country = country;
                this.isCanChosenCountry = this.canChosenCountry(this.country.name);
                this._facadeCountryListService.searchCountrySuccess();
            }
        });
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchPreviousCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((previousCountry) => {
            if (Boolean(previousCountry)) {
                this.previousCountry = previousCountry;
                this.isPreviousCountry = true;
            }
            else {
                this.isPreviousCountry = false;
            }
        });
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchNextCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((nextCountry) => {
            if (Boolean(nextCountry)) {
                this.nextCountry = nextCountry;
                this.isNextCountry = true;
            }
            else {
                this.isNextCountry = false;
            }
        });
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsCountrySearchLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((isSearchLoading) => {
            this.isSearchLoading = isSearchLoading;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
        this._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
        this._facadeCountryListService.resetSearchCounrties();
    }
    choose() {
        this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');
        this.isCanChosenCountry = false;
        this._facadeDonationListService.initNewCountryForDonation(this.country);
    }
    unchoose() {
        this.isCanChosenCountry = true;
        this._facadeDonationListService.deleteNewCountryForDonation(this.country);
    }
    switchToPreviousCountry() {
        const previousCountryName = this.previousCountry.name;
        this.switchRouterToSomeCountry(previousCountryName);
    }
    switchToNextCountry() {
        const nextCountryName = this.nextCountry.name;
        this.switchRouterToSomeCountry(nextCountryName);
    }
}
CountryComponent.ɵfac = function CountryComponent_Factory(t) { return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"])); };
CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryComponent, selectors: [["app-country"]], decls: 2, vars: 2, consts: [["class", "-app-country", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-country"], [1, "-app-country-wrapper"], [1, "-app-country__current-country"], [1, "-app-country__header"], [1, "-app-country__header-info"], [1, "-app-country__header-info-title"], [1, "-app-country__header-info-image", 3, "src"], [1, "-app-country__header-info-capital-title"], [1, "-app-country__header-info-capital-name"], [1, "-app-country__header-info-capital-latitude"], [1, "-app-country__header-info-capital-longitude"], [1, "-app-country__item"], [1, "-app-country__item-title"], [1, "-app-country__item-info"], [1, "-app-country__button-container"], [1, "-app-country__button-slide", "-app-country__button-slide_left", 3, "disabled", "click"], [1, "-app-country__button", "-app-country__button_choose", 3, "click"], [1, "-app-country__button", "-app-country__button_unchoose", 3, "click"], [1, "-app-country__button-slide", "-app-country__button-slide_right", 3, "disabled", "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]], template: function CountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountryComponent_div_0_Template, 56, 21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountryComponent_div_1_Template, 15, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatAreaPipe"], src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatForestAreaPipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n  letter-spacing: 2px;\n}\n.-app-country-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80%;\n  overflow: hidden;\n}\n.-app-country__current-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 30%;\n  border-bottom: 2px solid white;\n}\n.-app-country__header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n}\n.-app-country__header-info-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.-app-country__header-info-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  border-radius: 5px;\n}\n.-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n.-app-country__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 33px 0px;\n  box-sizing: border-box;\n  border-bottom: 2px solid white;\n  font-size: 20px;\n}\n.-app-country__item-title[_ngcontent-%COMP%] {\n  padding-left: 75px;\n}\n.-app-country__item-info[_ngcontent-%COMP%] {\n  padding-right: 75px;\n}\n.-app-country__item[_ngcontent-%COMP%], .-app-country__header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.-app-country__item[_ngcontent-%COMP%]:hover::before, .-app-country__header[_ngcontent-%COMP%]:hover::before {\n  height: 70%;\n}\n.-app-country__item[_ngcontent-%COMP%]::before, .-app-country__header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.2s;\n  width: 3px;\n  height: 60%;\n  background-color: white;\n}\n.-app-country__button-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n}\n.-app-country__button_choose[_ngcontent-%COMP%], .-app-country__button_unchoose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 25px 80px;\n  transition: 0.4s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid white;\n  border-radius: 40px;\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 2px;\n  font-weight: 700;\n  font-size: 20px;\n}\n.-app-country__button_choose[_ngcontent-%COMP%]:hover, .-app-country__button_unchoose[_ngcontent-%COMP%]:hover {\n  transform: translate(-51%, -51%);\n  box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.9);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-country__button_choose[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-country__button_choose-invisible[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-country__button_unchoose[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-country__button_unchoose-visible[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-country__button-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-country__button-slide[_ngcontent-%COMP%]:active::before {\n  font-size: 50px;\n}\n.-app-country__button-slide[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before, .-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);\n  font-size: 46px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n}\n.-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  content: \"\uF054\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnlcXGNvdW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMkJoQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUQxQko7QUM2QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxZQTdDSTtFQThDSixtQkFBQTtBRDVCSjtBQzZCSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEN0JSO0FDK0JJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEOUJSO0FDZ0NJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0FEaENSO0FDaUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0FEaENaO0FDaUNZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QURoQ2hCO0FDa0NZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBRGpDaEI7QUNvQ2dCO0VBSUksWUFBQTtFQUVBLGtCQUFBO0FEdENwQjtBQzJDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSw4QkFBQTtFQUVBLGVBQUE7QUQ1Q1I7QUM2Q1E7RUFDSSxrQkFBQTtBRDNDWjtBQzZDUTtFQUNJLG1CQUFBO0FEM0NaO0FDOENJO0VBRUksa0JBQUE7QUQ3Q1I7QUNnRFk7RUFDSSxXQUFBO0FEOUNoQjtBQ2lEUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbklSLGdDQW9JMkI7RUE1SDNCLGdCQThIUTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsdUJBcEpKO0FEMEdSO0FDOENRO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FEOUNaO0FDZ0RRO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTVKUixnQ0E2SjJCO0VBRW5CLGtCQUFBO0VBdkpSLGdCQXlKUTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBRUEsb0NBakxNO0VBbUxOLFlBckxKO0VBc0xJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUQ1Q1o7QUM2Q1k7RUFoTFIsZ0NBaUwrQjtFQUVuQiwwQ0FBQTtFQUVBLG9DQTlMRTtBRHFKbEI7QUM0Q1E7RUFDSSxVQUFBO0VBN0tSLFVBK0t5QjtFQTdLekIsMEJBQUE7QURtSUo7QUMyQ1k7RUFDSSxXQUFBO0VBakxaLFVBbUw2QjtFQWpMN0Isd0JBQUE7QUR3SUo7QUM0Q1E7RUFDSSxXQUFBO0VBdkxSLFVBeUx5QjtFQXZMekIsd0JBQUE7QUQ2SUo7QUMyQ1k7RUFDSSxVQUFBO0VBM0xaLFVBNkw2QjtFQTNMN0IsMEJBQUE7QURrSko7QUM0Q1E7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBeE1SLGdCQTBNUTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEekNaO0FDMkNnQjtFQUNJLGVBQUE7QUR6Q3BCO0FDNENZO0VBQ0ksZUFBQTtFQWxOWixZQW1ONkI7RUFqTjdCLHlCQUFBO0FEd0tKO0FDNkNnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF0T2hCLGdDQXVPbUM7RUFFbkIsWUFuUFo7RUFvUFksNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRHhDcEI7QUM0Q2dCO0VBQ0ksWUFBQTtBRDFDcEI7QUM4Q2dCO0VBQ0ksWUFBQTtBRDVDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uLWFwcC1jb3VudHJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uLWFwcC1jb3VudHJ5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uLWFwcC1jb3VudHJ5X19jdXJyZW50LWNvdW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1jb3VudHJ5X19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG4uLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC10aXRsZSwgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC1uYW1lLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxhdGl0dWRlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxvbmdpdHVkZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLi1hcHAtY291bnRyeV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMzcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xufVxuLi1hcHAtY291bnRyeV9faXRlbSwgLi1hcHAtY291bnRyeV9faGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLi1hcHAtY291bnRyeV9faXRlbTpob3Zlcjo6YmVmb3JlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXI6aG92ZXI6OmJlZm9yZSB7XG4gIGhlaWdodDogNzAlO1xufVxuLi1hcHAtY291bnRyeV9faXRlbTo6YmVmb3JlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl9jaG9vc2UsIC4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDI1cHggODBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZTpob3ZlciwgLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUxJSwgLTUxJSk7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggN3B4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZSB7XG4gIHotaW5kZXg6IDQ7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZS1pbnZpc2libGUge1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlIHtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbl91bmNob29zZS12aXNpYmxlIHtcbiAgei1pbmRleDogNDtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGU6YWN0aXZlOjpiZWZvcmUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjM7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMCk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfbGVmdDo6YmVmb3JlLCAuLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfcmlnaHQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlX2xlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GTXCI7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GUXCI7XG59IiwiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC05OiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiRibGFja09wYWNpdHkwLTg6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJGJsYWNrT3BhY2l0eTAtNjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi4tYXBwLWNvdW50cnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgJi13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICZfX2N1cnJlbnQtY291bnRyeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWNhcGl0YWwge1xyXG4gICAgICAgICAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAgICAgICAgICYtbmFtZSxcclxuICAgICAgICAgICAgICAgICYtbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAmLWxvbmdpdHVkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAzM3B4IDBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHdoaXRlO1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pdGVtLFxyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2Nob29zZSxcclxuICAgICAgICAmX3VuY2hvb3NlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggODBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNHMpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC04O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MSUsIC01MSUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA0cHggNXB4IDdweCAkYmxhY2tPcGFjaXR5MC05O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9jaG9vc2Uge1xyXG4gICAgICAgICAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgJi1pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3VuY2hvb3NlIHtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgICAgICAmLXZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2xpZGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfbGVmdCxcclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCAkYmxhY2tPcGFjaXR5MC05O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA1M1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA1NFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country',
                templateUrl: './country.component.html',
                styleUrls: ['./country.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"] }, { type: src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceCountryList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/country-list/region/region.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/country-list/region/region.component.ts ***!
  \********************************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../country-name/country-name.component */ "./src/app/components/country-list/country-name/country-name.component.ts");
/* harmony import */ var src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/country-list/format-region-title.pipe */ "./src/app/pipes/country-list/format-region-title.pipe.ts");












function RegionComponent_app_country_name_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-country-name", 7);
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r1);
} }
class RegionComponent {
    constructor(_store$, _router, _activatedRoute, _facadeCountryListService) {
        this._store$ = _store$;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._windowScrollHeight = 2;
    }
    navigateToCurrentSubRegionRoute() {
        const firstSubRegionCountryName = this.subRegionsCountries[0].name;
        const firstSubRegionCountryRouterName = firstSubRegionCountryName.replace(/\./g, '')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .split(' ')
            .join('-');
        this._router.navigate(['/countries', 'region', this.regionName, this.subRegionName, 'country', firstSubRegionCountryRouterName]);
    }
    ngOnInit() {
        const scrollUpButton = document.querySelector('.-app-scroll-up-button_sub-region-category');
        this._scrollBlock = document.querySelector('.-app-region');
        this._scrollBlock.addEventListener('scroll', () => {
            if (this._scrollBlock.scrollTop > this._windowScrollHeight) {
                scrollUpButton.classList.add('-app-scroll-up-button_sub-region-category-visible');
            }
            else {
                scrollUpButton.classList.remove('-app-scroll-up-button_sub-region-category-visible');
            }
        });
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this.regionName = params.regionName;
            this.subRegionName = params.subRegionName;
            this._facadeCountryListService.searchSubRegionCountries(this.regionName, this.subRegionName);
        });
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((searchCountry) => {
            if (Boolean(searchCountry)) {
                this._isSearchCountry = true;
            }
        });
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCountriesForDonation"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((countriesForDonation) => {
            if (Boolean(countriesForDonation)) {
                this._countriesForDonation = countriesForDonation;
            }
        });
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSubRegionsCountries"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((subRegionsCountries) => {
            if (Boolean(subRegionsCountries)) {
                this.subRegionsCountries = subRegionsCountries;
                if (!this._isSearchCountry) {
                    this.navigateToCurrentSubRegionRoute();
                }
            }
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    scrollTop() {
        this._scrollBlock.scrollTo(0, 0);
    }
    canDeactivate() {
        const deactivateQuestion = 'You haven’t chosen country. Are you sure that you want to go from this page? For donation you need at least one country';
        return (!Boolean(this._countriesForDonation))
            ? confirm(deactivateQuestion)
            : true;
    }
}
RegionComponent.ɵfac = function RegionComponent_Factory(t) { return new (t || RegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceCountryList"])); };
RegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionComponent, selectors: [["app-region"]], decls: 12, vars: 7, consts: [[1, "-app-region"], [1, "-app-region__title"], [1, "-app-region__sub-title"], [1, "-app-region__country-list"], [3, "country", 4, "ngFor", "ngForOf"], [1, "-app-scroll-up-button", "-app-scroll-up-button_sub-region-category", 3, "click"], [1, "-app-region__current-country"], [3, "country"]], template: function RegionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionComponent_Template_a_click_9_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.regionName), " Region ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.subRegionName), " Subregion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subRegionsCountries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_9__["CountryNameComponent"]], pipes: [src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatRegionTitlePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n  background-image: url('region-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-region[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  overflow: scroll;\n}\n.-app-region__title[_ngcontent-%COMP%], .-app-region__sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n  text-align: center;\n  letter-spacing: 2.5px;\n  font-weight: 800;\n}\n.-app-region__title[_ngcontent-%COMP%] {\n  padding: 65px;\n  box-sizing: border-box;\n  font-size: 46px;\n}\n.-app-region__sub-title[_ngcontent-%COMP%] {\n  padding: 65px;\n  padding-top: 0px;\n  box-sizing: border-box;\n  font-size: 32px;\n}\n.-app-region__country-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n}\n.-app-region__current-country[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  border-left: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvcmVnaW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXHJlZ2lvblxccmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUNMSjtBRE1JO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSwyQ0FBQTtFQUNBLHNCQUFBO0FDUFI7QURXQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDVko7QURXSTtFQUVJLFdBQUE7RUFDQSxXQUFBO0VBRUEsWUE1Q0E7RUE2Q0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1hSO0FEYUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0FDWlI7QURjSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtBQ2JSO0FEZUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2JSO0FEZUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFVBQUE7RUFDQSxhQUFBO0VBRUEsNEJBQUE7RUFFQSxvQ0EvRVU7QUM4RGxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblxyXG46aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY291bnRyeS1saXN0L3JlZ2lvbi1tZW51LWJnLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwLXJlZ2lvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICZfX3RpdGxlLFxyXG4gICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggJGJsYWNrT3BhY2l0eTAtODtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogNjVweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICB9XHJcbiAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDY1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAmX19jb3VudHJ5LWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgIH1cclxuICAgICZfX2N1cnJlbnQtY291bnRyeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR3aGl0ZTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG46aG9zdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9yZWdpb24tbWVudS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi4tYXBwLXJlZ2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uLWFwcC1yZWdpb25fX3RpdGxlLCAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uLWFwcC1yZWdpb25fX3RpdGxlIHtcbiAgcGFkZGluZzogNjVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiA0NnB4O1xufVxuLi1hcHAtcmVnaW9uX19zdWItdGl0bGUge1xuICBwYWRkaW5nOiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDMycHg7XG59XG4uLWFwcC1yZWdpb25fX2NvdW50cnktbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG59XG4uLWFwcC1yZWdpb25fX2N1cnJlbnQtY291bnRyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-region',
                templateUrl: './region.component.html',
                styleUrls: ['./region.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceCountryList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/country-list/can-leave-region.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/guards/country-list/can-leave-region.guard.ts ***!
  \***************************************************************/
/*! exports provided: CanLeaveRegionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveRegionGuard", function() { return CanLeaveRegionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveRegionGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveRegionGuard.ɵfac = function CanLeaveRegionGuard_Factory(t) { return new (t || CanLeaveRegionGuard)(); };
CanLeaveRegionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveRegionGuard, factory: CanLeaveRegionGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveRegionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/country-list/can-proceed-to-country.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/guards/country-list/can-proceed-to-country.guard.ts ***!
  \*********************************************************************/
/*! exports provided: CanProceedToCountryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToCountryGuard", function() { return CanProceedToCountryGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class CanProceedToCountryGuard {
    constructor(_store$) {
        this._store$ = _store$;
    }
    takeNameOfRegionOrSubRegion(name) {
        return name.toLowerCase().split(' ')[0];
    }
    isExistRegionOrSubRegionRouteName(name) {
        const currentCountryRegionOrSubRegionRouteName = this.takeNameOfRegionOrSubRegion(name);
        if (this._currentUrl.includes(currentCountryRegionOrSubRegionRouteName)) {
            return true;
        }
        else {
            return false;
        }
    }
    checkCountry(countryRouterName) {
        let isExistCurrentUrlCountry;
        const searchCountry = this._countryList.find((country) => {
            if (Boolean(country)) {
                const currentCountryRouterName = country.name.replace(/\./g, '')
                    .replace(/\(|\)/g, '')
                    .toLowerCase()
                    .split(' ')
                    .join('-');
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
            const errorMessage = `There is no country with this name (${countryRouterName}) in this region and sub-region`;
            throw new Error(errorMessage);
        }
    }
    canActivate(next, state) {
        this._currentUrl = state.url;
        const currentCountryName = next.params.countryName;
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"])
            .subscribe((countryList) => {
            this._countryList = countryList;
            this.checkCountry(currentCountryName);
        }).unsubscribe();
        return true;
    }
}
CanProceedToCountryGuard.ɵfac = function CanProceedToCountryGuard_Factory(t) { return new (t || CanProceedToCountryGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CanProceedToCountryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToCountryGuard, factory: CanProceedToCountryGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToCountryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/country-list/can-proceed-to-region.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/guards/country-list/can-proceed-to-region.guard.ts ***!
  \********************************************************************/
/*! exports provided: CanProceedToRegionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToRegionGuard", function() { return CanProceedToRegionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class CanProceedToRegionGuard {
    constructor(_store$) {
        this._store$ = _store$;
    }
    checkRouterParams(regionName, subRegionName) {
        const currentRegionSubRegionCountry = this._countryList.find((country) => {
            if (Boolean(country)) {
                const currentCountryRegionName = country.region.split(' ')[0].toLowerCase();
                const currentCountrySubRegionName = country.subRegion.split(' ')[0].toLowerCase();
                if (currentCountryRegionName === regionName && currentCountrySubRegionName === subRegionName) {
                    return country;
                }
            }
        });
        if (!Boolean(currentRegionSubRegionCountry)) {
            const errorMessage = `There are no countries in such region (${regionName}) and sub-region (${subRegionName})`;
            throw new Error(errorMessage);
        }
    }
    canActivate(next) {
        const currentRegion = next.params.regionName;
        const currentSubRegion = next.params.subRegionName;
        this._store$.select(_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountryList"])
            .subscribe((countryList) => {
            this._countryList = countryList;
        }).unsubscribe();
        this.checkRouterParams(currentRegion, currentSubRegion);
        return true;
    }
}
CanProceedToRegionGuard.ɵfac = function CanProceedToRegionGuard_Factory(t) { return new (t || CanProceedToRegionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CanProceedToRegionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToRegionGuard, factory: CanProceedToRegionGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToRegionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/country-list/format-area.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pipes/country-list/format-area.pipe.ts ***!
  \********************************************************/
/*! exports provided: FormatAreaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAreaPipe", function() { return FormatAreaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatAreaPipe {
    transform(value) {
        const currentCountryArea = value.toString();
        const currentCountryAreaInfoWithSpacesAfterEachThirdCharacters = currentCountryArea
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
        const countryAreaInfo = currentCountryAreaInfoWithSpacesAfterEachThirdCharacters + ' sq/km';
        return countryAreaInfo;
    }
}
FormatAreaPipe.ɵfac = function FormatAreaPipe_Factory(t) { return new (t || FormatAreaPipe)(); };
FormatAreaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatArea", type: FormatAreaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatAreaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatArea'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/country-list/format-forest-area.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/pipes/country-list/format-forest-area.pipe.ts ***!
  \***************************************************************/
/*! exports provided: FormatForestAreaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatForestAreaPipe", function() { return FormatForestAreaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatForestAreaPipe {
    transform(value) {
        const currentCountryForestArea = value;
        const currentCountryForestAreaInfo = `${currentCountryForestArea}%`;
        return currentCountryForestAreaInfo;
    }
}
FormatForestAreaPipe.ɵfac = function FormatForestAreaPipe_Factory(t) { return new (t || FormatForestAreaPipe)(); };
FormatForestAreaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatForestArea", type: FormatForestAreaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatForestAreaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatForestArea'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/country-list/format-region-title.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/pipes/country-list/format-region-title.pipe.ts ***!
  \****************************************************************/
/*! exports provided: FormatRegionTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatRegionTitlePipe", function() { return FormatRegionTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatRegionTitlePipe {
    transform(value) {
        return value.split('-').map((currentWord) => {
            return currentWord[0].toUpperCase() + currentWord.slice(1);
        }).join(' ');
    }
}
FormatRegionTitlePipe.ɵfac = function FormatRegionTitlePipe_Factory(t) { return new (t || FormatRegionTitlePipe)(); };
FormatRegionTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatRegionTitle", type: FormatRegionTitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatRegionTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatRegionTitle'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-country-list-country-list-country-list-module-es2015.js.map