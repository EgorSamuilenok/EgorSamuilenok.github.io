(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-donation-list-donation-list-before-registration-donation-list-before-registration-module"],{

/***/ "./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DonationBeforeRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationBeforeRegistrationComponent", function() { return DonationBeforeRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/user-list/user-list.selectors */ "./src/app/store/user-list/user-list.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/user-list/user-list.facade */ "./src/app/store/user-list/user-list.facade.ts");
/* harmony import */ var src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/country-list/country-list.facade */ "./src/app/store/country-list/country-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_pipes_donation_list_format_donation_before_registration_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/donation-list/format-donation-before-registration-tree-amount.pipe */ "./src/app/pipes/donation-list/format-donation-before-registration-tree-amount.pipe.ts");













function DonationBeforeRegistrationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.donation.country.name, " ");
} }
function DonationBeforeRegistrationComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " select country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DonationBeforeRegistrationComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.selectCountry(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r6.name, " ");
} }
function DonationBeforeRegistrationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationBeforeRegistrationComponent_div_7_div_1_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_div_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleSelectCountryMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__country-list_select-country-mode", ctx_r2.selectCountryMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.countriesForDonation);
} }
function DonationBeforeRegistrationComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country: ", ctx_r3.donation.country.name, " ");
} }
function DonationBeforeRegistrationComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is not selected! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DonationBeforeRegistrationComponent {
    constructor(_store$, _router, _facadeDonationListService, _facadeUserListService, _facadeCountryListService) {
        this._store$ = _store$;
        this._router = _router;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeUserListService = _facadeUserListService;
        this._facadeCountryListService = _facadeCountryListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    findCurrentSelectedCountry(countryName) {
        return this.countriesForDonation.find((country) => country.name === countryName);
    }
    canMakeDonation() {
        if (Boolean(this.donation) && Boolean(this.donation.country)) {
            this.isChoosenCountry = true;
        }
    }
    ngOnInit() {
        this.canMakeDonation();
        this._store$.select(src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((user) => {
            this._currentDonationUser = user;
        });
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCountriesForDonation"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((countriesForDonation) => {
            this.countriesForDonation = countriesForDonation;
        });
    }
    toggleDonationDetailsMode() {
        this.donationDetailsMode = !this.donationDetailsMode;
    }
    makeDonation() {
        if (Boolean(this._currentDonationUser)) {
            this._facadeDonationListService.makeDonation(this.donation, this._currentDonationUser.id);
            this._facadeCountryListService.countCountryForestArea(this.donation);
            this._facadeUserListService.addMedicalPointsForCurrentUser(this.donation.treeDonation.cost);
        }
        else {
            this._router.navigate([
                '/registration',
                'mode',
                'login-mode'
            ]);
        }
    }
    deleteDonation() {
        this._facadeDonationListService.deleteDonation(this.donation);
    }
    toggleSelectCountryMode() {
        this.selectCountryMode = !this.selectCountryMode;
    }
    selectCountry(countryNameTitle) {
        const selectedCountryName = countryNameTitle.innerText;
        const selectedCountry = this.findCurrentSelectedCountry(selectedCountryName);
        this._facadeDonationListService.initDonationCurrentCountry(this.donation, selectedCountry);
    }
}
DonationBeforeRegistrationComponent.ɵfac = function DonationBeforeRegistrationComponent_Factory(t) { return new (t || DonationBeforeRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceCountryList"])); };
DonationBeforeRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationBeforeRegistrationComponent, selectors: [["app-donation-before-registration"]], inputs: { donation: "donation" }, decls: 35, vars: 32, consts: [[1, "-app-donation"], [1, "-app-donation__donation-button", "-app-donation__donation-button_delete", 3, "click"], [1, "-app-donation__tree-image", 3, "src"], [1, "-app-donation__country"], [1, "-app-donation__country-title", 3, "click"], [4, "ngIf"], ["class", "-app-donation__country-list", 3, "-app-donation__country-list_select-country-mode", 4, "ngIf"], [1, "-app-donation__details", 3, "click"], [1, "-app-donation__details-title"], [1, "-app-donation__details-info"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-name"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-size"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-environment"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-type"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-key-feature"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-number"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-cost"], [1, "-app-donation__details-item", "-app-donation__details-item", "_total-cost"], ["class", "-app-donation__details-item  -app-donation__details-item _country", 4, "ngIf"], [1, "-app-donation__donation-button", "-app-donation__donation-button_make", 3, "disabled", "title", "click"], [1, "-app-donation__country-list"], ["class", "-app-donation__country-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "-app-donation__country-list-button", 3, "click"], [1, "-app-donation__country-list-item", 3, "click"], ["countryNameTitle", ""], [1, "-app-donation__details-item", "-app-donation__details-item", "_country"]], template: function DonationBeforeRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_button_click_1_listener() { return ctx.deleteDonation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_div_click_4_listener() { return ctx.toggleSelectCountryMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DonationBeforeRegistrationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DonationBeforeRegistrationComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DonationBeforeRegistrationComponent_div_7_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_div_click_8_listener() { return ctx.toggleDonationDetailsMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "formatDonationBeforeRegistrationTreeAmount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DonationBeforeRegistrationComponent_div_31_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DonationBeforeRegistrationComponent_div_32_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_button_click_33_listener() { return ctx.makeDonation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " make donation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.donation.treeDonation.tree.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__country_select-country-mode", ctx.selectCountryMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__country-title_select-country-mode", ctx.selectCountryMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.donation.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.donation.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.countriesForDonation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__details_donation-details-mode", ctx.donationDetailsMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__details-title_invisible", ctx.donationDetailsMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__details-info_visible", ctx.donationDetailsMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx.donation.treeDonation.tree.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Size: ", ctx.donation.treeDonation.tree.size, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Environment: ", ctx.donation.treeDonation.tree.environment, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Type: ", ctx.donation.treeDonation.tree.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Key Feature: ", ctx.donation.treeDonation.tree.keyFeature, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 26, ctx.donation.treeDonation.amount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cost: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 28, ctx.donation.treeDonation.tree.cost), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Cost: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 30, ctx.donation.treeDonation.cost), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.donation.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.donation.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", !ctx.isChoosenCountry ? "select country before donation" : "donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isChoosenCountry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [src_app_pipes_donation_list_format_donation_before_registration_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_11__["FormatDonationBeforeRegistrationTreeAmountPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding: 100px 0px;\n}\n.-app-donation[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  border: 2px solid white;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.-app-donation__tree-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 0%;\n  left: 15%;\n  transform: translate(-50%, -50%);\n  width: 250px;\n  height: 250px;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n.-app-donation__donation-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 15%;\n  height: 100%;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n}\n.-app-donation__donation-button_delete[_ngcontent-%COMP%]::before {\n  content: \"\uF00D\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-donation__donation-button_make[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.-app-donation__details[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35%;\n  transition: 0.3s;\n  cursor: pointer;\n  border-right: 2px solid white;\n}\n.-app-donation__details_donation-details-mode[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-left: 2px solid white;\n}\n.-app-donation__details-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-donation__details-title_invisible[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-donation__details-info[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: wrap;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  transition: 0.3s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: white;\n}\n.-app-donation__details-info_visible[_ngcontent-%COMP%] {\n  z-index: 5;\n  padding: 0px 100px;\n  box-sizing: border-box;\n  overflow: scroll;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-donation__details-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  text-align: center;\n  letter-spacing: 1px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.-app-donation__donation-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n}\n.-app-donation__country[_ngcontent-%COMP%], .-app-donation__details-title[_ngcontent-%COMP%], .-app-donation__donation-button_make[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 30px;\n  box-sizing: border-box;\n  color: white;\n  text-align: center;\n  letter-spacing: 4px;\n  font-size: 30px;\n  font-weight: 500;\n}\n.-app-donation__country[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 35%;\n  overflow: hidden;\n  transition: 0.3s;\n  cursor: pointer;\n  border: 2px solid white;\n  border-top: none;\n  border-bottom: none;\n}\n.-app-donation__country_select-country-mode[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.-app-donation__country-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-donation__country-title_select-country-mode[_ngcontent-%COMP%] {\n  z-index: -1;\n  left: 0%;\n  transform: translate(-100%, -50%);\n}\n.-app-donation__country-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 0%;\n  height: 200px;\n  overflow: auto;\n  transition: 0.3s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  background-color: transparent;\n  color: white;\n}\n.-app-donation__country-list_select-country-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-donation__country-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.-app-donation__country-list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(189, 255, 67, 0.4);\n}\n.-app-donation__country-list-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 50%;\n  left: 85%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-donation__country-list-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 28px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24vZG9uYXRpb24tYmVmb3JlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24vQzpcXFVzZXJzXFxZYWhvcl9TYW11aWxpb25ha1xcd29ya1xcc2F2ZS1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0LXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRvbmF0aW9uLWxpc3RcXGRvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb25cXGRvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMEJoQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7QUR6Qko7QUM0QkE7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQ0EzQ2M7QURjbEI7QUM4Qkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQXhDSixnQ0F5Q3VCO0VBRW5CLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtBRDFCUjtBQzRCSTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLFlBdEVBO0FEd0NSO0FDZ0NZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFwRVosZ0NBcUUrQjtFQUVuQixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRDVCaEI7QUMrQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRDdCWjtBQ2dDSTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQTdFSixnQkErRUk7RUFDQSxlQUFBO0VBRUEsNkJBQUE7QUQ3QlI7QUM4QlE7RUFDSSxjQUFBO0VBRUEsNEJBQUE7QUQ3Qlo7QUMrQlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXBHUixnQ0FxRzJCO0VBRW5CLFdBQUE7RUEvRlIsZ0JBaUdRO0VBN0ZSLFVBOEZ5QjtFQTVGekIsMEJBQUE7QURzRUo7QUN1Qlk7RUFDSSxXQUFBO0VBaEdaLFVBa0c2QjtFQWhHN0Isd0JBQUE7QUQyRUo7QUN3QlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXJIUixnQ0FzSDJCO0VBRW5CLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBdEhSLGdCQXdIUTtFQXBIUixVQXFIeUI7RUFuSHpCLHdCQUFBO0VBcUhRLFlBNUlKO0FEMkhSO0FDa0JZO0VBQ0ksVUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQTdIWixVQStINkI7RUE3SDdCLDBCQUFBO0FENEdKO0FDb0JRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcEJaO0FDd0JRO0VBbkpKLFlBb0p5QjtFQWxKekIseUJBQUE7QUQ2SEo7QUN3Qkk7RUFHSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQXRMQTtFQXVMQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMUJSO0FDNEJJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtFQW5MSixnQkFxTEk7RUFDQSxlQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEMUJSO0FDMkJRO0VBQ0ksWUFBQTtBRHpCWjtBQzJCUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF6TVIsZ0NBME0yQjtFQUVuQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBek1SLGdCQTJNUTtBRHBCWjtBQ3FCWTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBdE5aLGlDQXVOK0I7QURmbkM7QUNrQlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUExTlIsZ0JBNE5RO0VBeE5SLFVBeU55QjtFQXZOekIsd0JBQUE7RUF5TlEsNkJBQUE7RUFFQSxZQWxQSjtBRG1PUjtBQ2dCWTtFQUNJLFdBQUE7RUEvTlosVUFpTzZCO0VBL043QiwwQkFBQTtBRGlOSjtBQ2dCWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBL09aLGdCQWlQWTtBRGJoQjtBQ2NnQjtFQUNJLHlDQWxRSTtBRHNQeEI7QUNlWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbFFaLGdDQW1RK0I7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRFpoQjtBQ2FnQjtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbFJoQixnQ0FtUm1DO0VBRW5CLFlBOVJaO0VBK1JZLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEVHBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24vZG9uYXRpb24tYmVmb3JlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwMHB4IDBweDtcbn1cblxuLi1hcHAtZG9uYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uLWFwcC1kb25hdGlvbl9fdHJlZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTAwMDtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMTUlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLi1hcHAtZG9uYXRpb25fX2RvbmF0aW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWRvbmF0aW9uX19kb25hdGlvbi1idXR0b25fZGVsZXRlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLWRvbmF0aW9uX19kb25hdGlvbi1idXR0b25fbWFrZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNSU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWRvbmF0aW9uX19kZXRhaWxzX2RvbmF0aW9uLWRldGFpbHMtbW9kZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWRvbmF0aW9uX19kZXRhaWxzLXRpdGxlX2ludmlzaWJsZSB7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1kb25hdGlvbl9fZGV0YWlscy1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtaW5mb192aXNpYmxlIHtcbiAgei1pbmRleDogNTtcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLWRvbmF0aW9uX19kZXRhaWxzLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWRvbmF0aW9uX19kb25hdGlvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC42O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnksIC4tYXBwLWRvbmF0aW9uX19kZXRhaWxzLXRpdGxlLCAuLWFwcC1kb25hdGlvbl9fZG9uYXRpb24tYnV0dG9uX21ha2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDM1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnlfc2VsZWN0LWNvdW50cnktbW9kZSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5LXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5LXRpdGxlX3NlbGVjdC1jb3VudHJ5LW1vZGUge1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnktbGlzdF9zZWxlY3QtY291bnRyeS1tb2RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnktbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAyNTUsIDY3LCAwLjQpO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnktbGlzdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwMDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA4NSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5LWxpc3QtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+LqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufSIsIiR3aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtNzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kZ3JlZW5ZZWxsb3dPcGFjaXR5MC00OiByZ2JhKDE4OSwgMjU1LCA2NywgMC40KTtcclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHByb3BlcnR5OyBcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xyXG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xyXG59XHJcblxyXG4uLWFwcC1kb25hdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTc7XHJcbiAgICAmX190cmVlLWltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAmX19kb25hdGlvbi1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgJl9kZWxldGUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9tYWtlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogMzUlO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAmX2RvbmF0aW9uLWRldGFpbHMtbW9kZSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgJl92aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2RvbmF0aW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY291bnRyeSxcclxuICAgICZfX2RldGFpbHMtdGl0bGUsXHJcbiAgICAmX19kb25hdGlvbi1idXR0b25fbWFrZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJl9fY291bnRyeSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgJl9zZWxlY3QtY291bnRyeS1tb2RlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgICAgICAmX3NlbGVjdC1jb3VudHJ5LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTEwMCUsIC01MCUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgJl9zZWxlY3QtY291bnRyeS1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlblllbGxvd09wYWNpdHkwLTQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogODUlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjJlYVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationBeforeRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donation-before-registration',
                templateUrl: './donation-before-registration.component.html',
                styleUrls: ['./donation-before-registration.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"] }, { type: src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"] }, { type: src_app_store_country_list_country_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceCountryList"] }]; }, { donation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration-routing.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration-routing.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: DonationListBeforeRegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationListBeforeRegistrationRoutingModule", function() { return DonationListBeforeRegistrationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donation-list-before-registration.component */ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts");





const routes = [
    {
        path: '',
        component: _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_2__["DonationListBeforeRegistrationComponent"]
    }
];
class DonationListBeforeRegistrationRoutingModule {
}
DonationListBeforeRegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DonationListBeforeRegistrationRoutingModule });
DonationListBeforeRegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DonationListBeforeRegistrationRoutingModule_Factory(t) { return new (t || DonationListBeforeRegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DonationListBeforeRegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DonationListBeforeRegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DonationListBeforeRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationListBeforeRegistrationComponent", function() { return DonationListBeforeRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../donation-before-registration/donation-before-registration.component */ "./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts");









function DonationListBeforeRegistrationComponent_ng_container_1_app_donation_before_registration_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-donation-before-registration", 5);
} if (rf & 2) {
    const donation_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("donation", donation_r7);
} }
function DonationListBeforeRegistrationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_container_1_app_donation_before_registration_1_Template, 1, 1, "app-donation-before-registration", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.donationListBeforeRegistration);
} }
function DonationListBeforeRegistrationComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DonationListBeforeRegistrationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_container_2_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !(ctx_r1.isInitedDonationListBeforeRegistration || ctx_r1.isInitedCountriesForDonation) ? _r2 : _r4);
} }
function DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Before donation you need to choose any tree and country for donation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on the button below to choose it! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.switchRouterToCountryList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " choose countries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.switchRouterToTreeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " choose trees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DonationListBeforeRegistrationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template, 10, 0, "div", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isInitedDonationListBeforeRegistration);
} }
function DonationListBeforeRegistrationComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Before donation you need to choose any tree for donation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on the button below to choose it! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_5_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.switchRouterToTreeList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DonationListBeforeRegistrationComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Before donation you need to choose any country for donation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on the button below to choose it! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_5_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.switchRouterToCountryList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DonationListBeforeRegistrationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DonationListBeforeRegistrationComponent_ng_template_5_div_0_Template, 7, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_template_5_div_1_Template, 7, 0, "div", 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isInitedDonationListBeforeRegistration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isInitedCountriesForDonation);
} }
class DonationListBeforeRegistrationComponent {
    constructor(_store$, _router) {
        this._store$ = _store$;
        this._router = _router;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectDonationListBeforeRegistration"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((donationListBeforeRegistration) => {
            this.donationListBeforeRegistration = donationListBeforeRegistration;
        });
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountriesForDonation"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((countriesForDonation) => {
            this.countriesForDonation = countriesForDonation;
        });
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedDonationListBeforeRegistration"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedDonationListBeforeRegistration) => {
            this.isInitedDonationListBeforeRegistration = isInitedDonationListBeforeRegistration;
        });
        this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCountriesForDonation"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedCountriesForDonation) => {
            this.isInitedCountriesForDonation = isInitedCountriesForDonation;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    switchRouterToTreeList() {
        this._router.navigate(['trees']);
    }
    switchRouterToCountryList() {
        this._router.navigate(['countries']);
    }
}
DonationListBeforeRegistrationComponent.ɵfac = function DonationListBeforeRegistrationComponent_Factory(t) { return new (t || DonationListBeforeRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
DonationListBeforeRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonationListBeforeRegistrationComponent, selectors: [["app-donation-list-before-registration"]], decls: 7, vars: 2, consts: [[1, "-app-donation-list"], [4, "ngIf"], ["notInitedAllSettings", ""], ["notInitedOneSetting", ""], ["class", "-app-donation-list__donation", 3, "donation", 4, "ngFor", "ngForOf"], [1, "-app-donation-list__donation", 3, "donation"], [4, "ngTemplateOutlet"], ["class", "-app-donation-list__start", 4, "ngIf"], [1, "-app-donation-list__start"], [1, "-app-donation-list__start-title"], [1, "-app-donation-list__start-sub-title"], [1, "-app-donation-list__button-list"], [1, "-app-donation-list__start-button", 3, "click"]], template: function DonationListBeforeRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DonationListBeforeRegistrationComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DonationListBeforeRegistrationComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DonationListBeforeRegistrationComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInitedDonationListBeforeRegistration && ctx.isInitedCountriesForDonation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInitedDonationListBeforeRegistration || !ctx.isInitedCountriesForDonation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_7__["DonationBeforeRegistrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n}\n\n.-app-donation-list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  padding: 100px;\n  box-sizing: border-box;\n}\n\n.-app-donation-list[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 120px;\n  z-index: -9999;\n  width: 100%;\n  height: 100vh;\n  background-image: url('donation-list-bg.jpg');\n  background-size: cover;\n}\n\n.-app-donation-list__start[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n}\n\n.-app-donation-list__start-title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: capitalize;\n  letter-spacing: 4px;\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.-app-donation-list__start-sub-title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n\n.-app-donation-list__start-title[_ngcontent-%COMP%], .-app-donation-list__start-sub-title[_ngcontent-%COMP%] {\n  margin: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n}\n\n.-app-donation-list__start-button[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0px 50px;\n  margin-top: 20px;\n  padding: 25px 0px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid white;\n  border-radius: 45px;\n  background-color: rgba(8, 37, 8, 0.95);\n  color: white;\n  letter-spacing: 1px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.-app-donation-list__start-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.4);\n          filter: brightness(1.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWxpc3QtYmVmb3JlLXJlZ2lzdHJhdGlvbi9DOlxcVXNlcnNcXFlhaG9yX1NhbXVpbGlvbmFrXFx3b3JrXFxzYXZlLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZG9uYXRpb24tbGlzdFxcZG9uYXRpb24tbGlzdC1iZWZvcmUtcmVnaXN0cmF0aW9uXFxkb25hdGlvbi1saXN0LWJlZm9yZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZG9uYXRpb24tbGlzdC9kb25hdGlvbi1saXN0LWJlZm9yZS1yZWdpc3RyYXRpb24vZG9uYXRpb24tbGlzdC1iZWZvcmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDcEJKOztBRHFCSTtFQUNJLFdBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSw2Q0FBQTtFQUNBLHNCQUFBO0FDdEJSOztBRHdCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBNURBO0FDb0NSOztBRHlCUTtFQUNJLFNBQUE7RUFFQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDeEJaOztBRDBCUTtFQUNJLFNBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3pCWjs7QUQyQlE7RUFFSSxZQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQzNCWjs7QUQ2QlE7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBeEVSLGdCQTBFUTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQWhHcUI7RUFrR3JCLFlBbkdKO0VBb0dJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDNUJaOztBRDZCWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUMzQmhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWxpc3QtYmVmb3JlLXJlZ2lzdHJhdGlvbi9kb25hdGlvbi1saXN0LWJlZm9yZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi4tYXBwLWRvbmF0aW9uLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC05OTk5O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9uYXRpb24tbGlzdC9kb25hdGlvbi1saXN0LWJnLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAmX19zdGFydCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5MC05NTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLi1hcHAtZG9uYXRpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtZG9uYXRpb24tbGlzdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMTIwcHg7XG4gIHotaW5kZXg6IC05OTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWxpc3QtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtZG9uYXRpb24tbGlzdF9fc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb24tbGlzdF9fc3RhcnQtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1kb25hdGlvbi1saXN0X19zdGFydC1zdWItdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLWRvbmF0aW9uLWxpc3RfX3N0YXJ0LXRpdGxlLCAuLWFwcC1kb25hdGlvbi1saXN0X19zdGFydC1zdWItdGl0bGUge1xuICBtYXJnaW46IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC1kb25hdGlvbi1saXN0X19zdGFydC1idXR0b24ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMHB4IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDI1cHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWRvbmF0aW9uLWxpc3RfX3N0YXJ0LWJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationListBeforeRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-donation-list-before-registration',
                templateUrl: './donation-list-before-registration.component.html',
                styleUrls: ['./donation-list-before-registration.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: DonationListBeforeRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationListBeforeRegistrationModule", function() { return DonationListBeforeRegistrationModule; });
/* harmony import */ var _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donation-list-before-registration.component */ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts");
/* harmony import */ var _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../donation-before-registration/donation-before-registration.component */ "./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donation-list-before-registration-routing.module */ "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_pipes_donation_list_format_donation_before_registration_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/donation-list/format-donation-before-registration-tree-amount.pipe */ "./src/app/pipes/donation-list/format-donation-before-registration-tree-amount.pipe.ts");







class DonationListBeforeRegistrationModule {
}
DonationListBeforeRegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DonationListBeforeRegistrationModule, bootstrap: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"]] });
DonationListBeforeRegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function DonationListBeforeRegistrationModule_Factory(t) { return new (t || DonationListBeforeRegistrationModule)(); }, providers: [], imports: [[
            _donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationListBeforeRegistrationRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DonationListBeforeRegistrationModule, { declarations: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"],
        _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_1__["DonationBeforeRegistrationComponent"],
        src_app_pipes_donation_list_format_donation_before_registration_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDonationBeforeRegistrationTreeAmountPipe"]], imports: [_donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationListBeforeRegistrationRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DonationListBeforeRegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"],
                    _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_1__["DonationBeforeRegistrationComponent"],
                    src_app_pipes_donation_list_format_donation_before_registration_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDonationBeforeRegistrationTreeAmountPipe"]
                ],
                imports: [
                    _donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationListBeforeRegistrationRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/donation-list/format-donation-before-registration-tree-amount.pipe.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pipes/donation-list/format-donation-before-registration-tree-amount.pipe.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormatDonationBeforeRegistrationTreeAmountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDonationBeforeRegistrationTreeAmountPipe", function() { return FormatDonationBeforeRegistrationTreeAmountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatDonationBeforeRegistrationTreeAmountPipe {
    transform(value) {
        return (String(value) + 'th');
    }
}
FormatDonationBeforeRegistrationTreeAmountPipe.ɵfac = function FormatDonationBeforeRegistrationTreeAmountPipe_Factory(t) { return new (t || FormatDonationBeforeRegistrationTreeAmountPipe)(); };
FormatDonationBeforeRegistrationTreeAmountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatDonationBeforeRegistrationTreeAmount", type: FormatDonationBeforeRegistrationTreeAmountPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatDonationBeforeRegistrationTreeAmountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatDonationBeforeRegistrationTreeAmount'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-donation-list-donation-list-before-registration-donation-list-before-registration-module-es2015.js.map