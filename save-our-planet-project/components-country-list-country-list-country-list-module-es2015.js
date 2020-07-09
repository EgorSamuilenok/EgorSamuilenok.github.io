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
CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryListComponent, selectors: [["app-country-list"]], decls: 88, vars: 124, consts: [[1, "-app-countries"], [1, "-app-countries__start-menu", 3, "click"], [1, "-app-countries__start-menu-title"], [1, "-app-countries__start-menu-search"], [1, "-app-countries__menu", "-app-countries__menu_bg"], [1, "-app-countries__menu-return", 3, "click"], [1, "-app-countries__menu-list", 3, "click"], ["asia", ""], [1, "-app-countries__menu-item", 3, "click"], ["southernAsia", ""], ["westernAsia", ""], ["centralAsia", ""], ["easternAsia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_south-eastern-asia", 3, "click"], ["southEasternAsia", ""], ["europe", ""], ["northernEurope", ""], ["southernEurope", ""], ["westernEurope", ""], ["easternEurope", ""], ["africa", ""], ["northernAfrica", ""], ["middleAfrica", ""], ["southernAfrica", ""], ["easternAfrica", ""], ["westernAfrica", ""], ["oceania", ""], ["polynesia", ""], [1, "-app-countries__menu-item", "-app-countries__menu-item_australia-oceania", 3, "click"], ["australia", ""], ["melanesia", ""], ["micronesia", ""], ["america", ""], ["centralAmerica", ""], ["northernAmerica", ""], ["southAmerica", ""], ["caribbean", ""]], template: function CountryListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryListComponent_Template_div_click_1_listener() { return ctx.toggleMenuMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
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
    } }, styles: ["@charset \"UTF-8\";\n@-webkit-keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n@keyframes menuLine {\n  0% {\n    left: 0%;\n  }\n  100% {\n    left: 100%;\n    transform: translate(-100%, 0%);\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n.-app-countries[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-image: url('country-list-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-countries__start-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 200px;\n  height: 100px;\n  cursor: pointer;\n}\n.-app-countries__start-menu_menu-mode[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-countries__start-menu[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 10%;\n  left: 0%;\n  width: 30%;\n  height: 3px;\n  -webkit-animation: 1s menuLine alternate infinite;\n  animation: 1s menuLine alternate infinite;\n  border-radius: 2px;\n  background-color: white;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: 0.2s;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 5px black;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-countries__start-menu-title[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n  letter-spacing: 2.5px;\n  font-size: 26px;\n}\n.-app-countries__start-menu-title_search-mode[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n}\n.-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n  content: \"\uF002\";\n  position: absolute;\n  top: 52%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 2px 2px 5px black;\n  font-size: 26px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-countries__menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-countries__menu_bg[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 10px;\n  height: 10px;\n  transition: 0.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  border-radius: 20%;\n  background: rgba(0, 0, 0, 0.7);\n}\n.-app-countries__menu_bg-menu-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 0%;\n}\n.-app-countries__menu-return[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n.-app-countries__menu-return_visible[_ngcontent-%COMP%] {\n  left: 25%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-return[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-countries__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.5s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  text-shadow: none;\n  text-align: center;\n}\n.-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.-app-countries__menu-item_visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-item_visible-southern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-southern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-south-america[_ngcontent-%COMP%] {\n  transform: translate(-120%, 100%);\n}\n.-app-countries__menu-item_visible-western-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-western-africa[_ngcontent-%COMP%] {\n  transform: translate(-175%, -50%);\n}\n.-app-countries__menu-item_visible-central-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-northern-america[_ngcontent-%COMP%] {\n  transform: translate(-50%, -200%);\n}\n.-app-countries__menu-item_visible-eastern-asia[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-europe[_ngcontent-%COMP%], .-app-countries__menu-item_visible-eastern-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-caribbean-america[_ngcontent-%COMP%] {\n  transform: translate(100%, -50%);\n}\n.-app-countries__menu-item_visible-southern-europe[_ngcontent-%COMP%] {\n  transform: translate(-50%, 100%);\n}\n.-app-countries__menu-item_visible-micronesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(75%, -400%);\n}\n.-app-countries__menu-item_visible-melanesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(50%, -200%);\n}\n.-app-countries__menu-item_visible-polynesia-oceania[_ngcontent-%COMP%] {\n  transform: translate(110%, 0%);\n}\n.-app-countries__menu-item_visible-australia-oceania[_ngcontent-%COMP%] {\n  transform: translate(-150%, 0%);\n}\n.-app-countries__menu-item_visible-middle-africa[_ngcontent-%COMP%], .-app-countries__menu-item_visible-central-america[_ngcontent-%COMP%] {\n  transform: translate(40%, 100%);\n}\n.-app-countries__menu-item_visible-south-eastern-asia[_ngcontent-%COMP%] {\n  transform: translate(5%, 100%);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 1s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 2px;\n  font-size: 30px;\n}\n.-app-countries__menu-list_invisible[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n.-app-countries__menu-list_invisible.-app-countries__menu-list[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-countries__menu-list[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 80%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_asia-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_europe[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_europe-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_africa-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 80%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_oceania-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-countries__menu-list_america[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-countries__menu-list_america-menu-mode[_ngcontent-%COMP%] {\n  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbGlzdFxcY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQzRCWjtFQWtCQTtJQUNJLFFBQUE7RUQzQ047RUM2Q0U7SUFDSSxVQUFBO0lBeENKLCtCQXlDdUI7RUR2Q3pCO0FBQ0Y7QUMyQkk7RUFNQTtJQUNJLFFBQUE7RURTTjtFQ1BFO0lBQ0ksVUFBQTtJQXhDSiwrQkF5Q3VCO0VEYXpCO0FBQ0Y7QUNGQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBM0VKLGdDQTRFdUI7RUFFbkIsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7QURHUjtBQ0ZRO0VBOUVKLGdCQStFUTtFQUVBLFdBQUE7RUE3RVIsVUErRXlCO0VBN0V6Qix3QkFBQTtBRG9GSjtBQ0xRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQXREUixpREFBQTtFQUlBLHlDQUFBO0VBc0RRLGtCQUFBO0VBRUEsdUJBcEhKO0FEMkhSO0FDTFE7RUFDSSxVQUFBO0VBckdSLGdCQXVHUTtFQUVBLFlBM0hKO0VBNEhJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEU1o7QUNSWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURVaEI7QUNSWTtFQUNJLGFBQUE7QURVaEI7QUNQUTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7QURRWjtBQ1BZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUEzSVosZ0NBNEkrQjtFQUVuQixZQXhKUjtFQXlKUSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEV2hCO0FDUEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRFNSO0FDUlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTdKUixnQ0E4SjJCO0VBRW5CLFdBQUE7RUFDQSxZQUFBO0VBekpSLGdCQTJKUTtFQXZKUixVQXdKeUI7RUF0SnpCLHdCQUFBO0VBd0pRLGtCQUFBO0VBRUEsOEJBaExNO0FEK0xsQjtBQ2RZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUEvSlosVUFpSzZCO0VBL0o3QiwwQkFBQTtFQWlLWSxpQkFBQTtBRGVoQjtBQ1pRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF0TFIsZ0NBdUwyQjtFQS9LM0IsY0FpTFE7RUE3S1IsVUE4S3lCO0VBNUt6Qix3QkFBQTtFQThLUSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7QURvQlo7QUNuQlk7RUFDSSxTQUFBO0VBckxaLFVBdUw2QjtFQXJMN0IsMEJBQUE7QUQwTUo7QUNuQlk7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTFNWixnQ0EyTStCO0VBRW5CLFlBdk5SO0VBd05RLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEdUJoQjtBQ3BCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBdk5SLGdDQXdOMkI7RUFoTjNCLGdCQWtOUTtFQTlNUixVQStNeUI7RUE3TXpCLHdCQUFBO0VBK01RLGlCQUFBO0VBQ0Esa0JBQUE7QUQ2Qlo7QUM1Qlk7RUFDSSxZQUFBO0FEOEJoQjtBQzVCWTtFQUNJLFlBQUE7QUQ4QmhCO0FDNUJZO0VBek5SLFVBME42QjtFQXhON0IsMEJBQUE7QUR1UEo7QUM5QmdCO0VBdk9aLGlDQTBPbUM7QURrQ3ZDO0FDaENnQjtFQTVPWixpQ0ErT21DO0FEb0N2QztBQ2xDZ0I7RUFqUFosaUNBcVBtQztBRHFDdkM7QUNuQ2dCO0VBdlBaLGdDQTJQbUM7QURzQ3ZDO0FDcENnQjtFQTdQWixnQ0E4UG1DO0FEMEN2QztBQ3hDZ0I7RUFoUVosZ0NBaVFtQztBRDhDdkM7QUM1Q2dCO0VBblFaLGdDQW9RbUM7QURrRHZDO0FDaERnQjtFQXRRWiw4QkF1UW1DO0FEc0R2QztBQ3BEZ0I7RUF6UVosK0JBMFFtQztBRDBEdkM7QUN4RGdCO0VBNVFaLCtCQThRbUM7QUQ2RHZDO0FDM0RnQjtFQWhSWiw4QkFpUm1DO0FEaUV2QztBQzdEUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBelJSLGdDQTBSMkI7RUFsUjNCLGNBb1JRO0VBQ0EsZUFBQTtFQWpSUixVQWtSeUI7RUFoUnpCLHdCQUFBO0VBa1JRLFlBMVNKO0VBMlNJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEc0VaO0FDckVZO0VBNVJSLGdCQTZSWTtBRDJFaEI7QUMxRWdCO0VBMVJaLFVBMlJpQztFQXpSakMsd0JBQUE7QURzV0o7QUMxRVk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FENEVoQjtBQzFFWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBblNaLFVBcVM2QjtFQW5TN0IsMEJBQUE7QUQrV0o7QUMzRWdCO0VBQ0ksMkNBQUE7QUQ2RXBCO0FDMUVZO0VBMVNSLFVBMlM2QjtFQXpTN0IsMEJBQUE7QURzWEo7QUM1RWdCO0VBQ0ksMkNBQUE7QUQ4RXBCO0FDM0VZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFsVFosVUFvVDZCO0VBbFQ3QiwwQkFBQTtBRCtYSjtBQzVFZ0I7RUFDSSwyQ0FBQTtBRDhFcEI7QUMzRVk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQTNUWixVQTZUNkI7RUEzVDdCLDBCQUFBO0FEd1lKO0FDNUVnQjtFQUNJLDJDQUFBO0FEOEVwQjtBQzNFWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBcFVaLFVBc1U2QjtFQXBVN0IsMEJBQUE7QURpWko7QUM1RWdCO0VBQ0ksMkNBQUE7QUQ4RXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkAtd2Via2l0LWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgbWVudUxpbmUge1xuICAwJSB7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBtZW51TGluZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1lbnVMaW5lIHtcbiAgMCUge1xuICAgIGxlZnQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG4gIH1cbn1cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi4tYXBwLWNvdW50cmllcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC1tZW51LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnVfbWVudS1tb2RlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiAxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IDFzIG1lbnVMaW5lIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiAxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogMXMgbWVudUxpbmUgYWx0ZXJuYXRlIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXRpdGxlIHtcbiAgd2lkdGg6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXRpdGxlOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXRpdGxlX3NlYXJjaC1tb2RlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS1zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CCXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnVfYmctbWVudS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LXJldHVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb246IDFzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1yZXR1cm5fdmlzaWJsZSB7XG4gIGxlZnQ6IDI1JTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtcmV0dXJuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+LqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9zb3V0aC1lYXN0ZXJuLWFzaWEge1xuICB3aWR0aDogMjAwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9hdXN0cmFsaWEtb2NlYW5pYSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1zb3V0aGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtYW1lcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIDEwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAxMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLXdlc3Rlcm4tYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS13ZXN0ZXJuLWV1cm9wZSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS13ZXN0ZXJuLWFmcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzUlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNzUlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3NSUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTc1JSwgLTUwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYXNpYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1ub3J0aGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtbm9ydGhlcm4tYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW5vcnRoZXJuLWFtZXJpY2Ege1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1lYXN0ZXJuLWFzaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1ldXJvcGUsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtZWFzdGVybi1hZnJpY2EsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtY2FyaWJiZWFuLWFtZXJpY2Ege1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGhlcm4tZXVyb3BlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLW1pY3JvbmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NSUsIC00MDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzUlLCAtNDAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDc1JSwgLTQwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1tZWxhbmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC0yMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIwMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1wb2x5bmVzaWEtb2NlYW5pYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTAlLCAwJSk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWF1c3RyYWxpYS1vY2VhbmlhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCUpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fdmlzaWJsZS1taWRkbGUtYWZyaWNhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV92aXNpYmxlLWNlbnRyYWwtYW1lcmljYSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MCUsIDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3Zpc2libGUtc291dGgtZWFzdGVybi1hc2lhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1JSwgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxMDAlKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgLW1zLXRyYW5zaXRpb246IDFzO1xuICAtby10cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9pbnZpc2libGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9pbnZpc2libGUuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhIHtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDgwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hc2lhLW1lbnUtbW9kZSB7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9ldXJvcGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2V1cm9wZS1tZW51LW1vZGUge1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYWZyaWNhIHtcbiAgdG9wOiA4MCU7XG4gIGxlZnQ6IDIwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hZnJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICB0b3A6IDgwJTtcbiAgbGVmdDogODAlO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FtZXJpY2Ege1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjAlO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FtZXJpY2EtbWVudS1tb2RlIHtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtNzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKG1lbnVMaW5lKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTEwMCUsIDAlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tcy1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtby1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICBhbmltYXRpb246ICN7JHN0cn07ICAgICAgXHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLi1hcHAtY291bnRyaWVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC1tZW51LWJnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICZfX3N0YXJ0LW1lbnUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmX21lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNHMpO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcxcyBtZW51TGluZSBhbHRlcm5hdGUgaW5maW5pdGUnKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggJGJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3NlYXJjaC1tb2RlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zZWFyY2gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwMlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTIlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICZfYmcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNXMpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrT3BhY2l0eTAtNztcclxuICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJldHVybiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigxcyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmX3Zpc2libGUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjUlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMmVhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNXMpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJl9zb3V0aC1lYXN0ZXJuLWFzaWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYXVzdHJhbGlhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgJi1zb3V0aGVybi1hc2lhLFxyXG4gICAgICAgICAgICAgICAgJi1zb3V0aGVybi1hZnJpY2EsXHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoLWFtZXJpY2Ege1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTEyMCUsIDEwMCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtd2VzdGVybi1hc2lhLFxyXG4gICAgICAgICAgICAgICAgJi13ZXN0ZXJuLWV1cm9wZSxcclxuICAgICAgICAgICAgICAgICYtd2VzdGVybi1hZnJpY2Ege1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTE3NSUsIC01MCUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtY2VudHJhbC1hc2lhLFxyXG4gICAgICAgICAgICAgICAgJi1ub3J0aGVybi1ldXJvcGUsXHJcbiAgICAgICAgICAgICAgICAmLW5vcnRoZXJuLWFmcmljYSxcclxuICAgICAgICAgICAgICAgICYtbm9ydGhlcm4tYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtMjAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1lYXN0ZXJuLWFzaWEsXHJcbiAgICAgICAgICAgICAgICAmLWVhc3Rlcm4tZXVyb3BlLFxyXG4gICAgICAgICAgICAgICAgJi1lYXN0ZXJuLWFmcmljYSxcclxuICAgICAgICAgICAgICAgICYtY2FyaWJiZWFuLWFtZXJpY2Ege1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMTAwJSwgLTUwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1zb3V0aGVybi1ldXJvcGUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMTAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1taWNyb25lc2lhLW9jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoNzUlLCAtNDAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1tZWxhbmVzaWEtb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1MCUsIC0yMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXBvbHluZXNpYS1vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDExMCUsIDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWF1c3RyYWxpYS1vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC0xNTAlLCAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1taWRkbGUtYWZyaWNhLFxyXG4gICAgICAgICAgICAgICAgJi1jZW50cmFsLWFtZXJpY2Ege1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoNDAlLCAxMDAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXNvdXRoLWVhc3Rlcm4tYXNpYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1JSwgMTAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbGlzdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigxcyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICZfaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNXMpO1xyXG4gICAgICAgICAgICAgICAgJi4tYXBwLWNvdW50cmllc19fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hc2lhIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogODAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAmLW1lbnUtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9ldXJvcGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgICAgICYtbWVudS1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FmcmljYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDgwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgJi1tZW51LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1900px) {\n  .-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n    left: 75%;\n  }\n  .-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n    left: 25%;\n  }\n  .-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n    left: 75%;\n  }\n  .-app-countries__menu-list_america[_ngcontent-%COMP%] {\n    left: 25%;\n  }\n}\n@media screen and (max-width: 1650px) {\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n    left: 70%;\n  }\n  .-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n    left: 30%;\n  }\n  .-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n    left: 70%;\n  }\n  .-app-countries__menu-list_america[_ngcontent-%COMP%] {\n    left: 30%;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .-app-countries__menu-list_asia[_ngcontent-%COMP%] {\n    left: 65%;\n  }\n  .-app-countries__menu-list_africa[_ngcontent-%COMP%] {\n    left: 35%;\n  }\n  .-app-countries__menu-list_oceania[_ngcontent-%COMP%] {\n    left: 65%;\n  }\n  .-app-countries__menu-list_america[_ngcontent-%COMP%] {\n    left: 35%;\n  }\n}\n@media screen and (max-width: 900px) {\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 20px;\n  }\n  .-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%], .-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n    width: 130px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 900px) {\n  .-app-countries__menu-return[_ngcontent-%COMP%]::before {\n    font-size: 17px;\n  }\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 17px;\n  }\n  .-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%], .-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 650px) {\n  .-app-countries__menu-return[_ngcontent-%COMP%]::before {\n    font-size: 15px;\n  }\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 15px;\n  }\n  .-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%], .-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n    width: 75px;\n  }\n  .-app-countries__start-menu[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .-app-countries__menu-return[_ngcontent-%COMP%]::before {\n    font-size: 13px;\n  }\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 13px;\n  }\n  .-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%], .-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n    width: 65px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .-app-countries__menu-return[_ngcontent-%COMP%]::before {\n    font-size: 11px;\n  }\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 11px;\n  }\n  .-app-countries__start-menu[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%], .-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .-app-countries__menu-return[_ngcontent-%COMP%]::before {\n    font-size: 9px;\n  }\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 9px;\n  }\n  .-app-countries__menu-item_australia-oceania[_ngcontent-%COMP%], .-app-countries__menu-item_south-eastern-asia[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 6px;\n  }\n}\n@media screen and (max-width: 350px) {\n  .-app-countries__start-menu-title[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .-app-countries__start-menu-search[_ngcontent-%COMP%]::before {\n    font-size: 8px;\n  }\n  .-app-countries__menu-list[_ngcontent-%COMP%] {\n    font-size: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbGlzdFxcY291bnRyeS1saXN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1k7SUFDSSxTQUFBO0VDRGQ7RURHVTtJQUNJLFNBQUE7RUNEZDtFREdVO0lBQ0ksU0FBQTtFQ0RkO0VER1U7SUFDSSxTQUFBO0VDRGQ7QUFDRjtBRE1BO0VBRVE7SUFDSSxlQUFBO0VDTFY7QUFDRjtBRFNBO0VBR1k7SUFDSSxTQUFBO0VDVGQ7RURXVTtJQUNJLFNBQUE7RUNUZDtFRFdVO0lBQ0ksU0FBQTtFQ1RkO0VEV1U7SUFDSSxTQUFBO0VDVGQ7QUFDRjtBRGNBO0VBRVE7SUFDSSxlQUFBO0VDYlY7QUFDRjtBRGlCQTtFQUdZO0lBQ0ksU0FBQTtFQ2pCZDtFRG1CVTtJQUNJLFNBQUE7RUNqQmQ7RURtQlU7SUFDSSxTQUFBO0VDakJkO0VEbUJVO0lBQ0ksU0FBQTtFQ2pCZDtBQUNGO0FEdUJBO0VBR1k7SUFDSSxlQUFBO0VDdkJkO0VEMEJjO0lBQ0ksZUFBQTtFQ3hCbEI7RUQ2QlU7SUFFSSxZQUFBO0VDNUJkO0VEK0JNO0lBQ0ksZUFBQTtFQzdCVjtBQUNGO0FEaUNBO0VBR1k7SUFDSSxlQUFBO0VDakNkO0VEcUNVO0lBQ0ksZUFBQTtFQ25DZDtFRHNDYztJQUNJLGVBQUE7RUNwQ2xCO0VEeUNVO0lBRUksWUFBQTtFQ3hDZDtFRDJDTTtJQUNJLGVBQUE7RUN6Q1Y7QUFDRjtBRDZDQTtFQUdZO0lBQ0ksZUFBQTtFQzdDZDtFRGlEVTtJQUNJLGVBQUE7RUMvQ2Q7RURrRGM7SUFDSSxlQUFBO0VDaERsQjtFRHFEVTtJQUVJLFdBQUE7RUNwRGQ7RUR1RE07SUFDSSxZQUFBO0VDckRWO0VEdURNO0lBQ0ksZUFBQTtFQ3JEVjtBQUNGO0FEeURBO0VBR1k7SUFDSSxlQUFBO0VDekRkO0VENkRVO0lBQ0ksZUFBQTtFQzNEZDtFRDhEYztJQUNJLGVBQUE7RUM1RGxCO0VEaUVVO0lBRUksV0FBQTtFQ2hFZDtFRG1FTTtJQUNJLGVBQUE7RUNqRVY7QUFDRjtBRHFFQTtFQUdZO0lBQ0ksZUFBQTtFQ3JFZDtFRHlFVTtJQUNJLGVBQUE7RUN2RWQ7RUQwRWM7SUFDSSxlQUFBO0VDeEVsQjtFRDRFTTtJQUNJLFlBQUE7RUMxRVY7RUQ2RVU7SUFFSSxXQUFBO0VDNUVkO0VEK0VNO0lBQ0ksY0FBQTtFQzdFVjtBQUNGO0FEaUZBO0VBR1k7SUFDSSxjQUFBO0VDakZkO0VEcUZVO0lBQ0ksY0FBQTtFQ25GZDtFRHNGYztJQUNJLGNBQUE7RUNwRmxCO0VEeUZVO0lBRUksV0FBQTtFQ3hGZDtFRDJGTTtJQUNJLGNBQUE7RUN6RlY7QUFDRjtBRDZGQTtFQUdZO0lBQ0ksY0FBQTtFQzdGZDtFRGdHYztJQUNJLGNBQUE7RUM5RmxCO0VEa0dNO0lBQ0ksY0FBQTtFQ2hHVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MDBweCkge1xyXG4gICAgLi1hcHAtY291bnRyaWVzIHtcclxuICAgICAgICAmX19tZW51LWxpc3Qge1xyXG4gICAgICAgICAgICAmX2FzaWEge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYWZyaWNhIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX29jZWFuaWEge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYW1lcmljYSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xyXG4gICAgLi1hcHAtY291bnRyaWVzIHtcclxuICAgICAgICAmX19tZW51LWxpc3Qge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cmllcyB7XHJcbiAgICAgICAgJl9fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgJl9hc2lhIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FmcmljYSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9vY2VhbmlhIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FtZXJpY2Ege1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cmllcyB7XHJcbiAgICAgICAgJl9fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuLWFwcC1jb3VudHJpZXMge1xyXG4gICAgICAgICZfX21lbnUtbGlzdCB7XHJcbiAgICAgICAgICAgICZfYXNpYSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hZnJpY2Ege1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfb2NlYW5pYSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hbWVyaWNhIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDM1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuLWFwcC1jb3VudHJpZXMge1xyXG4gICAgICAgICZfX3N0YXJ0LW1lbnUge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICAmX2F1c3RyYWxpYS1vY2VhbmlhLFxyXG4gICAgICAgICAgICAmX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cmllcyB7XHJcbiAgICAgICAgJl9fbWVudS1yZXR1cm4ge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N0YXJ0LW1lbnUge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICAmX2F1c3RyYWxpYS1vY2VhbmlhLFxyXG4gICAgICAgICAgICAmX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cmllcyB7XHJcbiAgICAgICAgJl9fbWVudS1yZXR1cm4ge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N0YXJ0LW1lbnUge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICAmX2F1c3RyYWxpYS1vY2VhbmlhLFxyXG4gICAgICAgICAgICAmX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdGFydC1tZW51IHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWxpc3Qge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLi1hcHAtY291bnRyaWVzIHtcclxuICAgICAgICAmX19tZW51LXJldHVybiB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3RhcnQtbWVudSB7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgICZfYXVzdHJhbGlhLW9jZWFuaWEsXHJcbiAgICAgICAgICAgICZfc291dGgtZWFzdGVybi1hc2lhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtbGlzdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuLWFwcC1jb3VudHJpZXMge1xyXG4gICAgICAgICZfX21lbnUtcmV0dXJuIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdGFydC1tZW51IHtcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3RhcnQtbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgJl9hdXN0cmFsaWEtb2NlYW5pYSxcclxuICAgICAgICAgICAgJl9zb3V0aC1lYXN0ZXJuLWFzaWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLi1hcHAtY291bnRyaWVzIHtcclxuICAgICAgICAmX19tZW51LXJldHVybiB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdGFydC1tZW51IHtcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgICZfYXVzdHJhbGlhLW9jZWFuaWEsXHJcbiAgICAgICAgICAgICZfc291dGgtZWFzdGVybi1hc2lhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtbGlzdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cmllcyB7XHJcbiAgICAgICAgJl9fc3RhcnQtbWVudSB7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWxpc3Qge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYXNpYSB7XG4gICAgbGVmdDogNzUlO1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FmcmljYSB7XG4gICAgbGVmdDogMjUlO1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICAgIGxlZnQ6IDc1JTtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hbWVyaWNhIHtcbiAgICBsZWZ0OiAyNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NTBweCkge1xuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYXNpYSB7XG4gICAgbGVmdDogNzAlO1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FmcmljYSB7XG4gICAgbGVmdDogMzAlO1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICAgIGxlZnQ6IDcwJTtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hbWVyaWNhIHtcbiAgICBsZWZ0OiAzMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3RfYXNpYSB7XG4gICAgbGVmdDogNjUlO1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X2FmcmljYSB7XG4gICAgbGVmdDogMzUlO1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1saXN0X29jZWFuaWEge1xuICAgIGxlZnQ6IDY1JTtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdF9hbWVyaWNhIHtcbiAgICBsZWZ0OiAzNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS1zZWFyY2g6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX2F1c3RyYWxpYS1vY2VhbmlhLCAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9zb3V0aC1lYXN0ZXJuLWFzaWEge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtcmV0dXJuOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX3N0YXJ0LW1lbnUtc2VhcmNoOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9hdXN0cmFsaWEtb2NlYW5pYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fc291dGgtZWFzdGVybi1hc2lhIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLi1hcHAtY291bnRyaWVzX19tZW51LXJldHVybjo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXNlYXJjaDo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fYXVzdHJhbGlhLW9jZWFuaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLi1hcHAtY291bnRyaWVzX19tZW51LXJldHVybjo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXNlYXJjaDo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fYXVzdHJhbGlhLW9jZWFuaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XG4gICAgd2lkdGg6IDY1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLi1hcHAtY291bnRyaWVzX19tZW51LXJldHVybjo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXNlYXJjaDo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fYXVzdHJhbGlhLW9jZWFuaWEsIC4tYXBwLWNvdW50cmllc19fbWVudS1pdGVtX3NvdXRoLWVhc3Rlcm4tYXNpYSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19tZW51LWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtcmV0dXJuOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXNlYXJjaDo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtaXRlbV9hdXN0cmFsaWEtb2NlYW5pYSwgLi1hcHAtY291bnRyaWVzX19tZW51LWl0ZW1fc291dGgtZWFzdGVybi1hc2lhIHtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC4tYXBwLWNvdW50cmllc19fc3RhcnQtbWVudS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyaWVzX19zdGFydC1tZW51LXNlYXJjaDo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuLWFwcC1jb3VudHJpZXNfX21lbnUtbGlzdCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-list',
                templateUrl: './country-list.component.html',
                styleUrls: ['./country-list.component.scss', './country-list-media.component.scss']
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
/* harmony import */ var src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/country-list/country-list.selectors */ "./src/app/store/country-list/country-list.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");







class CountryNameComponent {
    constructor(_router, _activatedRoute, _store$) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isSearchLoading = true;
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._regionName = params.regionName;
            this._subRegionName = params.subRegionName;
        });
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsCountrySearchLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isSearchLoading) => {
            this.isSearchLoading = isSearchLoading;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    goToCurrentCountryRouter() {
        this.onSelected.emit(this.country);
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
CountryNameComponent.ɵfac = function CountryNameComponent_Factory(t) { return new (t || CountryNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
CountryNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryNameComponent, selectors: [["app-country-name"]], inputs: { country: "country", isCountrySelected: "isCountrySelected" }, outputs: { onSelected: "onSelected" }, decls: 3, vars: 4, consts: [[1, "-app-country"], [1, "-app-country__name", 3, "disabled", "click"]], template: function CountryNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CountryNameComponent_Template_button_click_1_listener() { return ctx.goToCurrentCountryRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-country__name_selected", ctx.isCountrySelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSearchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.country.name, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n}\n\n.-app-country[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-country__name[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 4px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n.-app-country__name[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.-app-country__name[_ngcontent-%COMP%]:hover {\n  letter-spacing: 3.5px;\n}\n\n.-app-country__name[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translate(-50%, 20%);\n  width: 0%;\n  height: 2px;\n  transition: 0.3s;\n  background-color: white;\n}\n\n.-app-country__name_selected[_ngcontent-%COMP%]::before {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1uYW1lL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbmFtZVxcY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5LW5hbWUvY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3BCSjs7QURxQkk7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBaENKLGdCQWtDSTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckJSOztBRHNCUTtFQUNJLGVBQUE7QUNwQlo7O0FEc0JRO0VBQ0kscUJBQUE7QUNwQlo7O0FEc0JRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFwRFIsK0JBcUQyQjtFQUVuQixTQUFBO0VBQ0EsV0FBQTtFQWhFUixnQkFrRVE7RUFFQSx1QkE1RUo7QUM0RFI7O0FEbUJZO0VBQ0ksVUFBQTtBQ2pCaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5LW5hbWUvY291bnRyeS1uYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4kd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRzY3JlYW1pbmdHcmVlbjogcmdiYSg4NCwgMjU1LCA4NCwgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi4tYXBwLWNvdW50cnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFjaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICZbZGlzYWJsZWRde1xyXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMy41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAyMCUpKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuM3MpO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3NlbGVjdGVkIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uLWFwcC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX25hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1jb3VudHJ5X19uYW1lW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi4tYXBwLWNvdW50cnlfX25hbWU6aG92ZXIge1xuICBsZXR0ZXItc3BhY2luZzogMy41cHg7XG59XG4uLWFwcC1jb3VudHJ5X19uYW1lOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jb3VudHJ5X19uYW1lX3NlbGVjdGVkOjpiZWZvcmUge1xuICB3aWR0aDogOTAlO1xufSJdfQ== */", "@media screen and (max-width: 1500px) {\n  .-app-country__name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .-app-country__name[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .-app-country__name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1000px) {\n  [_nghost-%COMP%] {\n    height: 60px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-country__name[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%] {\n    height: 50px;\n  }\n\n  .-app-country__name[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 500px) {\n  [_nghost-%COMP%] {\n    height: 40px;\n  }\n\n  .-app-country__name[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1uYW1lL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnktbmFtZVxcY291bnRyeS1uYW1lLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5LW5hbWUvY291bnRyeS1uYW1lLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVE7SUFDSSxlQUFBO0VDQVY7QUFDRjtBRElBO0VBRVE7SUFDSSxlQUFBO0VDSFY7QUFDRjtBRE9BO0VBRVE7SUFDSSxlQUFBO0VDTlY7QUFDRjtBRFVBO0VBQ0k7SUFDSSxZQUFBO0VDUk47QUFDRjtBRFdBO0VBRVE7SUFDSSxlQUFBO0VDVlY7QUFDRjtBRGNBO0VBQ0k7SUFDSSxZQUFBO0VDWk47O0VEZU07SUFDSSxlQUFBO0VDWlY7QUFDRjtBRGdCQTtFQUNJO0lBQ0ksWUFBQTtFQ2ROOztFRGlCTTtJQUNJLGVBQUE7RUNkVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS1uYW1lL2NvdW50cnktbmFtZS1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgLi1hcHAtY291bnRyeSB7XHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLi1hcHAtY291bnRyeSB7XHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgLi1hcHAtY291bnRyeSB7XHJcbiAgICAgICAgJl9fbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX25hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX25hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX25hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLi1hcHAtY291bnRyeV9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-name',
                templateUrl: './country-name.component.html',
                styleUrls: ['./country-name.component.scss', './country-name-media.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCountrySelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
                this._facadeCountryListService.selectCountry(country);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [src_app_pipes_country_list_format_area_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatAreaPipe"], src_app_pipes_country_list_format_forest_area_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatForestAreaPipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n  letter-spacing: 2px;\n}\n.-app-country-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 80%;\n  overflow: hidden;\n}\n.-app-country__current-country[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-country__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 30%;\n  border-bottom: 2px solid white;\n}\n.-app-country__header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n}\n.-app-country__header-info-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 20px;\n  padding: 0px 20px;\n  text-align: center;\n}\n.-app-country__header-info-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  border-radius: 5px;\n}\n.-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n.-app-country__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  padding: 10px 0px;\n  box-sizing: border-box;\n  border-bottom: 2px solid white;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n}\n.-app-country__item-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  padding-left: 55px;\n  box-sizing: border-box;\n  text-align: left;\n}\n.-app-country__item-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  padding-right: 55px;\n  box-sizing: border-box;\n  text-align: right;\n}\n.-app-country__item[_ngcontent-%COMP%], .-app-country__header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.-app-country__item[_ngcontent-%COMP%]:hover::before, .-app-country__header[_ngcontent-%COMP%]:hover::before {\n  height: 70%;\n}\n.-app-country__item[_ngcontent-%COMP%]::before, .-app-country__header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.2s;\n  width: 3px;\n  height: 60%;\n  background-color: white;\n}\n.-app-country__button-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n}\n.-app-country__button_choose[_ngcontent-%COMP%], .-app-country__button_unchoose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 25px 80px;\n  transition: 0.4s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid white;\n  border-radius: 40px;\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 2px;\n  font-weight: 700;\n  font-size: 20px;\n}\n.-app-country__button_choose[_ngcontent-%COMP%]:hover, .-app-country__button_unchoose[_ngcontent-%COMP%]:hover {\n  transform: translate(-51%, -51%);\n  box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.9);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.-app-country__button_choose[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-country__button_choose-invisible[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-country__button_unchoose[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-country__button_unchoose-visible[_ngcontent-%COMP%] {\n  z-index: 4;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-country__button-slide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-country__button-slide[_ngcontent-%COMP%]:active::before {\n  font-size: 50px;\n}\n.-app-country__button-slide[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before, .-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);\n  font-size: 46px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-country__button-slide_left[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n}\n.-app-country__button-slide_right[_ngcontent-%COMP%]::before {\n  content: \"\uF054\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXGNvdW50cnlcXGNvdW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMkJoQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUQxQko7QUM2QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxZQTdDSTtFQThDSixtQkFBQTtBRDVCSjtBQzZCSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEN0JSO0FDK0JJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEOUJSO0FDZ0NJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDhCQUFBO0FEaENSO0FDaUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0FEaENaO0FDaUNZO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtBRGhDaEI7QUNrQ1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0FEakNoQjtBQ29DZ0I7RUFJSSxZQUFBO0VBRUEsa0JBQUE7QUR0Q3BCO0FDMkNJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSw4QkFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FENUNSO0FDNkNRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBRDdDWjtBQytDUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7QUQvQ1o7QUNrREk7RUFFSSxrQkFBQTtBRGpEUjtBQ29EWTtFQUNJLFdBQUE7QURsRGhCO0FDcURRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF6SlIsZ0NBMEoyQjtFQWxKM0IsZ0JBb0pRO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSx1QkExS0o7QUQ0SFI7QUNrRFE7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QURsRFo7QUNvRFE7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbExSLGdDQW1MMkI7RUFFbkIsa0JBQUE7RUE3S1IsZ0JBK0tRO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFFQSxvQ0F2TU07RUF5TU4sWUEzTUo7RUE0TUkseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGhEWjtBQ2lEWTtFQXRNUixnQ0F1TStCO0VBRW5CLDBDQUFBO0VBRUEsb0NBcE5FO0FEdUtsQjtBQ2dEUTtFQUNJLFVBQUE7RUFuTVIsVUFxTXlCO0VBbk16QiwwQkFBQTtBRHFKSjtBQytDWTtFQUNJLFdBQUE7RUF2TVosVUF5TTZCO0VBdk03Qix3QkFBQTtBRDBKSjtBQ2dEUTtFQUNJLFdBQUE7RUE3TVIsVUErTXlCO0VBN016Qix3QkFBQTtBRCtKSjtBQytDWTtFQUNJLFVBQUE7RUFqTlosVUFtTjZCO0VBak43QiwwQkFBQTtBRG9LSjtBQ2dEUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUE5TlIsZ0JBZ09RO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQ3Q1o7QUMrQ2dCO0VBQ0ksZUFBQTtBRDdDcEI7QUNnRFk7RUFDSSxlQUFBO0VBeE9aLFlBeU82QjtFQXZPN0IseUJBQUE7QUQwTEo7QUNpRGdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTVQaEIsZ0NBNlBtQztFQUVuQixZQXpRWjtFQTBRWSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FENUNwQjtBQ2dEZ0I7RUFDSSxZQUFBO0FEOUNwQjtBQ2tEZ0I7RUFDSSxZQUFBO0FEaERwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi4tYXBwLWNvdW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLWNvdW50cnktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi4tYXBwLWNvdW50cnlfX2N1cnJlbnQtY291bnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC10aXRsZSwgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC1uYW1lLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxhdGl0dWRlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxvbmdpdHVkZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLi1hcHAtY291bnRyeV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtLCAuLWFwcC1jb3VudHJ5X19oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtOmhvdmVyOjpiZWZvcmUsIC4tYXBwLWNvdW50cnlfX2hlYWRlcjpob3Zlcjo6YmVmb3JlIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG4uLWFwcC1jb3VudHJ5X19pdGVtOjpiZWZvcmUsIC4tYXBwLWNvdW50cnlfX2hlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX2Nob29zZSwgLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMjVweCA4MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b25fY2hvb3NlOmhvdmVyLCAuLWFwcC1jb3VudHJ5X19idXR0b25fdW5jaG9vc2U6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUxJSwgLTUxJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MSUsIC01MSUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTElLCAtNTElKTtcbiAgYm94LXNoYWRvdzogNHB4IDVweCA3cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b25fY2hvb3NlIHtcbiAgei1pbmRleDogNDtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b25fY2hvb3NlLWludmlzaWJsZSB7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b25fdW5jaG9vc2Uge1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuLi1hcHAtY291bnRyeV9fYnV0dG9uX3VuY2hvb3NlLXZpc2libGUge1xuICB6LWluZGV4OiA0O1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZTphY3RpdmU6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZVtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuMztcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTMwKTtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9sZWZ0OjpiZWZvcmUsIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9yaWdodDo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZNcIjtcbn1cbi4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZRcIjtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFja09wYWNpdHkwLTk6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xyXG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uLWFwcC1jb3VudHJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAmX19jdXJyZW50LWNvdW50cnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY2FwaXRhbCB7XHJcbiAgICAgICAgICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICAgICAgICAgJi1uYW1lLFxyXG4gICAgICAgICAgICAgICAgJi1sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICYtbG9uZ2l0dWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHdoaXRlO1xyXG5cclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faXRlbSxcclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2Nob29zZSxcclxuICAgICAgICAmX3VuY2hvb3NlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggODBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC40cyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUxJSwgLTUxJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA1cHggN3B4ICRibGFja09wYWNpdHkwLTk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX2Nob29zZSB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDQ7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAmLWludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdW5jaG9vc2Uge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgICYtdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zbGlkZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMC4zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQsXHJcbiAgICAgICAgICAgICZfcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggJGJsYWNrT3BhY2l0eTAtOTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9sZWZ0IHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNTNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNTRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */", "@media screen and (max-width: 1500px) {\n  .-app-country__item[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%] {\n    padding-left: 40px;\n  }\n  .-app-country__item-info[_ngcontent-%COMP%] {\n    padding-right: 40px;\n  }\n  .-app-country__button-slide_right[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n  .-app-country__button-slide_left[_ngcontent-%COMP%] {\n    margin-right: 50px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .-app-country__header-info[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .-app-country__header-info-image[_ngcontent-%COMP%] {\n    width: 160px;\n    height: 80px;\n  }\n  .-app-country__header-info-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .-app-country__button[_ngcontent-%COMP%] {\n    padding: 20px 65px;\n  }\n  .-app-country__item[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .-app-country__item-info[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 30px;\n  }\n  .-app-country__button-slide_right[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n  .-app-country__button-slide_left[_ngcontent-%COMP%] {\n    margin-right: 60px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .-app-country__header-info[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .-app-country__header-info-image[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 70px;\n  }\n  .-app-country__header-info-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%] {\n    padding-left: 25px;\n  }\n  .-app-country__item-info[_ngcontent-%COMP%] {\n    padding-right: 25px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%], .-app-country__item-info[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .-app-country__button[_ngcontent-%COMP%] {\n    padding: 14px 40px;\n    font-size: 17px;\n  }\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-country__header-info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .-app-country__header-info-image[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 60px;\n  }\n  .-app-country__header-info-title[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n  .-app-country__item-info[_ngcontent-%COMP%] {\n    padding-right: 20px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%], .-app-country__item-info[_ngcontent-%COMP%] {\n    width: 70px;\n    font-size: 12px;\n  }\n  .-app-country__button[_ngcontent-%COMP%] {\n    padding: 14px 30px;\n    font-size: 14px;\n  }\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 650px) {\n  .-app-country__header-info[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .-app-country__header-info-image[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 50px;\n  }\n  .-app-country__header-info-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n    font-size: 7.5px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n  .-app-country__item-info[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%], .-app-country__item-info[_ngcontent-%COMP%] {\n    width: 70px;\n    font-size: 10px;\n  }\n  .-app-country__button[_ngcontent-%COMP%] {\n    padding: 14px 30px;\n    font-size: 11px;\n  }\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 26px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .-app-country__header-info[_ngcontent-%COMP%] {\n    font-size: 8.5px;\n  }\n  .-app-country__header-info-image[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 40px;\n  }\n  .-app-country__header-info-title[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n  .-app-country__header-info-capital-title[_ngcontent-%COMP%], .-app-country__header-info-capital-name[_ngcontent-%COMP%], .-app-country__header-info-capital-latitude[_ngcontent-%COMP%], .-app-country__header-info-capital-longitude[_ngcontent-%COMP%] {\n    font-size: 6.5px;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .-app-country__item-info[_ngcontent-%COMP%] {\n    padding-right: 10px;\n    word-break: break-all;\n  }\n  .-app-country__item-title[_ngcontent-%COMP%], .-app-country__item-info[_ngcontent-%COMP%] {\n    width: 70px;\n    font-size: 8px;\n  }\n  .-app-country__button[_ngcontent-%COMP%] {\n    padding: 12px 22px;\n    font-size: 9px;\n  }\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 17px;\n  }\n  .-app-country__button-slide_right[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n  .-app-country__button-slide_left[_ngcontent-%COMP%] {\n    margin-right: 50px;\n  }\n  .-app-country__button[_ngcontent-%COMP%] {\n    padding: 5px 15px;\n    font-size: 7.5px;\n  }\n}\n@media screen and (max-width: 350px) {\n  .-app-country__button-slide[_ngcontent-%COMP%]::before {\n    font-size: 15px;\n  }\n  .-app-country__button-slide_right[_ngcontent-%COMP%] {\n    margin-left: 40px;\n  }\n  .-app-country__button-slide_left[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvY291bnRyeS9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY291bnRyeS1saXN0XFxjb3VudHJ5XFxjb3VudHJ5LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9jb3VudHJ5L2NvdW50cnktbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUTtJQUNJLGVBQUE7RUNBVjtFRENVO0lBQ0ksa0JBQUE7RUNDZDtFRENVO0lBQ0ksbUJBQUE7RUNDZDtFREdVO0lBQ0ksaUJBQUE7RUNEZDtFREdVO0lBQ0ksa0JBQUE7RUNEZDtBQUNGO0FETUE7RUFHWTtJQUNJLGVBQUE7RUNOZDtFRE9jO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNMbEI7RURPYztJQUNJLGVBQUE7RUNMbEI7RURRa0I7SUFJSSxlQUFBO0VDVHRCO0VEY007SUFDSSxrQkFBQTtFQ1pWO0VEY007SUFDSSxlQUFBO0VDWlY7RURhVTtJQUNJLGtCQUFBO0VDWGQ7RURhVTtJQUNJLG1CQUFBO0VDWGQ7RURlVTtJQUNJLGVBQUE7RUNiZDtFRGVVO0lBQ0ksaUJBQUE7RUNiZDtFRGVVO0lBQ0ksa0JBQUE7RUNiZDtBQUNGO0FEbUJBO0VBR1k7SUFDSSxlQUFBO0VDbkJkO0VEb0JjO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNsQmxCO0VEb0JjO0lBQ0ksZUFBQTtFQ2xCbEI7RURxQmtCO0lBSUksZUFBQTtFQ3RCdEI7RUQ0QlU7SUFDSSxrQkFBQTtFQzFCZDtFRDRCVTtJQUNJLG1CQUFBO0VDMUJkO0VENEJVO0lBRUksV0FBQTtFQzNCZDtFRDhCTTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQzVCVjtFRCtCVTtJQUNJLGVBQUE7RUM3QmQ7QUFDRjtBRG1DQTtFQUdZO0lBQ0ksZUFBQTtFQ25DZDtFRG9DYztJQUNJLFlBQUE7SUFDQSxZQUFBO0VDbENsQjtFRG9DYztJQUNJLGVBQUE7RUNsQ2xCO0VEcUNrQjtJQUlJLGNBQUE7RUN0Q3RCO0VENENVO0lBQ0ksa0JBQUE7RUMxQ2Q7RUQ0Q1U7SUFDSSxtQkFBQTtFQzFDZDtFRDRDVTtJQUVJLFdBQUE7SUFFQSxlQUFBO0VDNUNkO0VEK0NNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDN0NWO0VEZ0RVO0lBQ0ksZUFBQTtFQzlDZDtBQUNGO0FEbURBO0VBR1k7SUFDSSxlQUFBO0VDbkRkO0VEb0RjO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNsRGxCO0VEb0RjO0lBQ0ksZUFBQTtFQ2xEbEI7RURxRGtCO0lBSUksZ0JBQUE7RUN0RHRCO0VENERVO0lBQ0ksa0JBQUE7RUMxRGQ7RUQ0RFU7SUFDSSxtQkFBQTtFQzFEZDtFRDREVTtJQUVJLFdBQUE7SUFFQSxlQUFBO0VDNURkO0VEK0RNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDN0RWO0VEZ0VVO0lBQ0ksZUFBQTtFQzlEZDtBQUNGO0FEbUVBO0VBR1k7SUFDSSxnQkFBQTtFQ25FZDtFRG9FYztJQUNJLFlBQUE7SUFDQSxZQUFBO0VDbEVsQjtFRG9FYztJQUNJLGNBQUE7RUNsRWxCO0VEcUVrQjtJQUlJLGdCQUFBO0VDdEV0QjtFRDRFVTtJQUNJLGtCQUFBO0VDMUVkO0VENEVVO0lBQ0ksbUJBQUE7SUFDQSxxQkFBQTtFQzFFZDtFRDRFVTtJQUVJLFdBQUE7SUFFQSxjQUFBO0VDNUVkO0VEK0VNO0lBQ0ksa0JBQUE7SUFDQSxjQUFBO0VDN0VWO0VEZ0ZVO0lBQ0ksZUFBQTtFQzlFZDtBQUNGO0FEbUZBO0VBR1k7SUFDSSxlQUFBO0VDbkZkO0VEcUZVO0lBQ0ksaUJBQUE7RUNuRmQ7RURxRlU7SUFDSSxrQkFBQTtFQ25GZDtFRHNGTTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUNwRlY7QUFDRjtBRHdGQTtFQUdZO0lBQ0ksZUFBQTtFQ3hGZDtFRDBGVTtJQUNJLGlCQUFBO0VDeEZkO0VEMEZVO0lBQ0ksa0JBQUE7RUN4RmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1saXN0L2NvdW50cnkvY291bnRyeS1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgLi1hcHAtY291bnRyeSB7XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uLXNsaWRlIHtcclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1jYXBpdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICYtbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAmLWxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICYtbG9uZ2l0dWRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2J1dHRvbi1zbGlkZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAuLWFwcC1jb3VudHJ5IHtcclxuICAgICAgICAmX19oZWFkZXIge1xyXG4gICAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtY2FwaXRhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAmLW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJi1sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAmLWxvbmdpdHVkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uLXNsaWRlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuLWFwcC1jb3VudHJ5IHtcclxuICAgICAgICAmX19oZWFkZXIge1xyXG4gICAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtY2FwaXRhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAmLW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJi1sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAmLWxvbmdpdHVkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uLXNsaWRlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1jYXBpdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICYtbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAmLWxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICYtbG9uZ2l0dWRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3LjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTRweCAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2J1dHRvbi1zbGlkZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuLWFwcC1jb3VudHJ5IHtcclxuICAgICAgICAmX19oZWFkZXIge1xyXG4gICAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4LjVweDtcclxuICAgICAgICAgICAgICAgICYtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtY2FwaXRhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAmLW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJi1sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAmLWxvbmdpdHVkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNi41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uLXNsaWRlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX2J1dHRvbi1zbGlkZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcuNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgIC4tYXBwLWNvdW50cnkge1xyXG4gICAgICAgICZfX2J1dHRvbi1zbGlkZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19pdGVtLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faXRlbS1pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlX2xlZnQge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8taW1hZ2Uge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLXRpdGxlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLW5hbWUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbGF0aXR1ZGUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbG9uZ2l0dWRlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAyMHB4IDY1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faXRlbSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWltYWdlIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC10aXRsZSwgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC1uYW1lLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxhdGl0dWRlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLWxvbmdpdHVkZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faXRlbS10aXRsZSwgLi1hcHAtY291bnRyeV9faXRlbS1pbmZvIHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19idXR0b24ge1xuICAgIHBhZGRpbmc6IDE0cHggNDBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1pbWFnZSB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtdGl0bGUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbmFtZSwgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC1sYXRpdHVkZSwgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tY2FwaXRhbC1sb25naXR1ZGUge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faXRlbS10aXRsZSwgLi1hcHAtY291bnRyeV9faXRlbS1pbmZvIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8taW1hZ2Uge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faGVhZGVyLWluZm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLXRpdGxlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLW5hbWUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbGF0aXR1ZGUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbG9uZ2l0dWRlIHtcbiAgICBmb250LXNpemU6IDcuNXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9faXRlbS10aXRsZSwgLi1hcHAtY291bnRyeV9faXRlbS1pbmZvIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvIHtcbiAgICBmb250LXNpemU6IDguNXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWltYWdlIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDdweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLXRpdGxlLCAuLWFwcC1jb3VudHJ5X19oZWFkZXItaW5mby1jYXBpdGFsLW5hbWUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbGF0aXR1ZGUsIC4tYXBwLWNvdW50cnlfX2hlYWRlci1pbmZvLWNhcGl0YWwtbG9uZ2l0dWRlIHtcbiAgICBmb250LXNpemU6IDYuNXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19pdGVtLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2l0ZW0tdGl0bGUsIC4tYXBwLWNvdW50cnlfX2l0ZW0taW5mbyB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMnB4IDIycHg7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGVfcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBmb250LXNpemU6IDcuNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuLWFwcC1jb3VudHJ5X19idXR0b24tc2xpZGU6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC4tYXBwLWNvdW50cnlfX2J1dHRvbi1zbGlkZV9yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLi1hcHAtY291bnRyeV9fYnV0dG9uLXNsaWRlX2xlZnQge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country',
                templateUrl: './country.component.html',
                styleUrls: ['./country.component.scss', './country-media.component.scss']
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
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-country-name", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelected", function RegionComponent_app_country_name_8_Template_app_country_name_onSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCountry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("country", country_r1)("isCountrySelected", ctx_r0.isCountrySelected(country_r1));
} }
class RegionComponent {
    constructor(_store$, _router, _activatedRoute, _facadeCountryListService) {
        this._store$ = _store$;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    static isScrolling() {
        if (RegionComponent.scrollBlock.scrollTop > RegionComponent.windowScrollHeight) {
            RegionComponent.scrollUpButton.classList.add('-app-scroll-up-button_tree-category-visible');
        }
        else {
            RegionComponent.scrollUpButton.classList.remove('-app-scroll-up-button_tree-category-visible');
        }
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
        RegionComponent.scrollBlock = document.querySelector('.-app-region');
        RegionComponent.scrollUpButton = document.querySelector('.-app-scroll-up-button_sub-region-category');
        RegionComponent.scrollBlock.addEventListener('scroll', RegionComponent.isScrolling);
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
        this._store$.select(src_app_store_country_list_country_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSelectedCountry"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((selectedCountry) => {
            if (Boolean(selectedCountry)) {
                this._selectedCountry = selectedCountry;
            }
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
        RegionComponent.scrollBlock.removeEventListener('scroll', RegionComponent.isScrolling);
    }
    scrollTop() {
        RegionComponent.scrollBlock.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    canDeactivate() {
        const deactivateQuestion = 'You haven’t chosen country. Are you sure that you want to go from this page? For donation you need at least one country';
        return (!Boolean(this._countriesForDonation))
            ? confirm(deactivateQuestion)
            : true;
    }
    selectCountry(country) {
        this._facadeCountryListService.selectCountry(country);
    }
    isCountrySelected(country) {
        return Boolean(this._selectedCountry)
            && this._selectedCountry.equals(country);
    }
}
RegionComponent.windowScrollHeight = 2;
RegionComponent.ɵfac = function RegionComponent_Factory(t) { return new (t || RegionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceCountryList"])); };
RegionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionComponent, selectors: [["app-region"]], decls: 12, vars: 7, consts: [[1, "-app-region"], [1, "-app-region__title"], [1, "-app-region__sub-title"], [1, "-app-region__country-list"], [3, "country", "isCountrySelected", "onSelected", 4, "ngFor", "ngForOf"], [1, "-app-scroll-up-button", "-app-scroll-up-button_sub-region-category", 3, "click"], [1, "-app-region__current-country"], [3, "country", "isCountrySelected", "onSelected"]], template: function RegionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegionComponent_app_country_name_8_Template, 1, 2, "app-country-name", 4);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _country_name_country_name_component__WEBPACK_IMPORTED_MODULE_9__["CountryNameComponent"]], pipes: [src_app_pipes_country_list_format_region_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatRegionTitlePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n  background-image: url('region-menu-bg.jpg');\n  background-size: cover;\n}\n.-app-region[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  height: 100vh;\n  overflow: scroll;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.-app-region__title[_ngcontent-%COMP%], .-app-region__sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n  text-align: center;\n  letter-spacing: 2.5px;\n  font-weight: 800;\n}\n.-app-region__title[_ngcontent-%COMP%] {\n  padding: 65px;\n  box-sizing: border-box;\n  font-size: 46px;\n}\n.-app-region__sub-title[_ngcontent-%COMP%] {\n  padding: 65px;\n  padding-top: 0px;\n  box-sizing: border-box;\n  font-size: 32px;\n}\n.-app-region__country-list[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 70vh;\n}\n.-app-region__current-country[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  border-left: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvcmVnaW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXHJlZ2lvblxccmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUNMSjtBRE1JO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSwyQ0FBQTtFQUNBLHNCQUFBO0FDUFI7QURXQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBdENjO0FDMkJsQjtBRFlJO0VBRUksV0FBQTtFQUNBLFdBQUE7RUFFQSxZQTlDQTtFQStDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDWlI7QURjSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGVBQUE7QUNiUjtBRGVJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0FDZFI7QURnQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNkUjtBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUVBLG9DQWpGVTtBQytEbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC04OiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRibGFja09wYWNpdHkwLTY6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHJcbjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb3VudHJ5LWxpc3QvcmVnaW9uLW1lbnUtYmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuLi1hcHAtcmVnaW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgJl9fdGl0bGUsXHJcbiAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAkYmxhY2tPcGFjaXR5MC04O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiA2NXB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgIH1cclxuICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogNjVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICAgICZfX2NvdW50cnktbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcclxuICAgIH1cclxuICAgICZfX2N1cnJlbnQtY291bnRyeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR3aGl0ZTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG46aG9zdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvdW50cnktbGlzdC9yZWdpb24tbWVudS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi4tYXBwLXJlZ2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1yZWdpb25fX3RpdGxlLCAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uLWFwcC1yZWdpb25fX3RpdGxlIHtcbiAgcGFkZGluZzogNjVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiA0NnB4O1xufVxuLi1hcHAtcmVnaW9uX19zdWItdGl0bGUge1xuICBwYWRkaW5nOiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDMycHg7XG59XG4uLWFwcC1yZWdpb25fX2NvdW50cnktbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xufVxuLi1hcHAtcmVnaW9uX19jdXJyZW50LWNvdW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59Il19 */", "@media screen and (max-width: 1500px) {\n  .-app-region__title[_ngcontent-%COMP%] {\n    padding: 25px 30px;\n    font-size: 42px;\n  }\n  .-app-region__sub-title[_ngcontent-%COMP%] {\n    padding: 25px 30px;\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .-app-region__title[_ngcontent-%COMP%] {\n    padding: 20px 25px;\n    font-size: 38px;\n  }\n  .-app-region__sub-title[_ngcontent-%COMP%] {\n    padding: 20px 25px;\n    font-size: 24px;\n  }\n  .-app-region__current-country[_ngcontent-%COMP%] {\n    border-left: 1.5px solid white;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .-app-region__title[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    font-size: 34px;\n  }\n  .-app-region__sub-title[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    font-size: 20px;\n  }\n  .-app-region__current-country[_ngcontent-%COMP%] {\n    border-left: 1.25px solid white;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-region__title[_ngcontent-%COMP%] {\n    padding: 15px 15px;\n    font-size: 28px;\n  }\n  .-app-region__sub-title[_ngcontent-%COMP%] {\n    padding: 15px 15px;\n    font-size: 18px;\n  }\n  .-app-region__current-country[_ngcontent-%COMP%] {\n    border-left: 1px solid white;\n  }\n}\n@media screen and (max-width: 650px) {\n  .-app-region__title[_ngcontent-%COMP%] {\n    padding: 15px 15px;\n    font-size: 22px;\n  }\n  .-app-region__sub-title[_ngcontent-%COMP%] {\n    padding: 15px 15px;\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .-app-region__title[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n    font-size: 18px;\n  }\n  .-app-region__sub-title[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvcmVnaW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb3VudHJ5LWxpc3RcXHJlZ2lvblxccmVnaW9uLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbGlzdC9yZWdpb24vcmVnaW9uLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNBVjtFREVNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDQVY7QUFDRjtBRElBO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNIVjtFREtNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDSFY7RURLTTtJQUNJLDhCQUFBO0VDSFY7QUFDRjtBRE9BO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNOVjtFRFFNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDTlY7RURRTTtJQUNJLCtCQUFBO0VDTlY7QUFDRjtBRFVBO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNUVjtFRFdNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDVFY7RURXTTtJQUNJLDRCQUFBO0VDVFY7QUFDRjtBRGFBO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNaVjtFRGNNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDWlY7QUFDRjtBRGdCQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDZlY7RURpQk07SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNmVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LWxpc3QvcmVnaW9uL3JlZ2lvbi1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgLi1hcHAtcmVnaW9uIHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLi1hcHAtcmVnaW9uIHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fY3VycmVudC1jb3VudHJ5IHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAuLWFwcC1yZWdpb24ge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19jdXJyZW50LWNvdW50cnkge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMS4yNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC4tYXBwLXJlZ2lvbiB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2N1cnJlbnQtY291bnRyeSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLi1hcHAtcmVnaW9uIHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuLWFwcC1yZWdpb24ge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuLWFwcC1yZWdpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG4gIC4tYXBwLXJlZ2lvbl9fc3ViLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX2N1cnJlbnQtY291bnRyeSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkIHdoaXRlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX2N1cnJlbnQtY291bnRyeSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEuMjVweCBzb2xpZCB3aGl0ZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX2N1cnJlbnQtY291bnRyeSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLi1hcHAtcmVnaW9uX190aXRsZSB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuLWFwcC1yZWdpb25fX3N1Yi10aXRsZSB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-region',
                templateUrl: './region.component.html',
                styleUrls: ['./region.component.scss', './region-media.component.scss']
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
        if (Boolean(value)) {
            const currentCountryArea = value.toString();
            const currentCountryAreaInfoWithSpacesAfterEachThirdCharacters = currentCountryArea
                .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
            const countryAreaInfo = currentCountryAreaInfoWithSpacesAfterEachThirdCharacters + ' sq/km';
            return countryAreaInfo;
        }
        else {
            return 'no-data';
        }
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