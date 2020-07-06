function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-donation-list-donation-list-before-registration-donation-list-before-registration-module"], {
  /***/
  "./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: DonationBeforeRegistrationComponent */

  /***/
  function srcAppComponentsDonationListDonationBeforeRegistrationDonationBeforeRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationBeforeRegistrationComponent", function () {
      return DonationBeforeRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/store/user-list/user-list.selectors */
    "./src/app/store/user-list/user-list.selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
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


    var src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/store/user-list/user-list.facade */
    "./src/app/store/user-list/user-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DonationBeforeRegistrationComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.donation.country.name, " ");
      }
    }

    function DonationBeforeRegistrationComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " select country ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function DonationBeforeRegistrationComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_div_7_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.selectCountry(_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r6.name, " ");
      }
    }

    function DonationBeforeRegistrationComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationBeforeRegistrationComponent_div_7_div_1_Template, 3, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_div_7_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.toggleSelectCountryMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-donation__country-list_select-country-mode", ctx_r2.selectCountryMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.countriesForDonation);
      }
    }

    function DonationBeforeRegistrationComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country: ", ctx_r3.donation.country.name, " ");
      }
    }

    function DonationBeforeRegistrationComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country: not selected! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DonationBeforeRegistrationComponent = /*#__PURE__*/function () {
      function DonationBeforeRegistrationComponent(_store$, _router, _facadeDonationListService, _facadeUserListService) {
        _classCallCheck(this, DonationBeforeRegistrationComponent);

        this._store$ = _store$;
        this._router = _router;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeUserListService = _facadeUserListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(DonationBeforeRegistrationComponent, [{
        key: "findCurrentSelectedCountry",
        value: function findCurrentSelectedCountry(countryName) {
          return this.countriesForDonation.find(function (country) {
            return country.name === countryName;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._store$.select(src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (user) {
            _this._currentDonationUser = user;
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCountriesForDonation"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (countriesForDonation) {
            _this.countriesForDonation = countriesForDonation;
          });
        }
      }, {
        key: "toggleDonationDetailsMode",
        value: function toggleDonationDetailsMode() {
          this.donationDetailsMode = !this.donationDetailsMode;
        }
      }, {
        key: "makeDonation",
        value: function makeDonation() {
          if (Boolean(this._currentDonationUser)) {
            this._facadeDonationListService.makeDonation(this.donation, this._currentDonationUser.id);

            this._facadeUserListService.addMedicalPointsForCurrentUser(this.donation.treeDonation.cost);
          } else {
            this._router.navigate(['user', 'registration']);
          }
        }
      }, {
        key: "deleteDonation",
        value: function deleteDonation() {
          this._facadeDonationListService.deleteDonation(this.donation);
        }
      }, {
        key: "toggleSelectCountryMode",
        value: function toggleSelectCountryMode() {
          this.selectCountryMode = !this.selectCountryMode;
        }
      }, {
        key: "selectCountry",
        value: function selectCountry(countryNameTitle) {
          var selectedCountryName = countryNameTitle.innerText;
          var selectedCountry = this.findCurrentSelectedCountry(selectedCountryName);

          this._facadeDonationListService.initDonationCurrentCountry(this.donation, selectedCountry);
        }
      }]);

      return DonationBeforeRegistrationComponent;
    }();

    DonationBeforeRegistrationComponent.ɵfac = function DonationBeforeRegistrationComponent_Factory(t) {
      return new (t || DonationBeforeRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"]));
    };

    DonationBeforeRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonationBeforeRegistrationComponent,
      selectors: [["app-donation-before-registration"]],
      inputs: {
        donation: "donation"
      },
      decls: 32,
      vars: 24,
      consts: [[1, "-app-donation"], [1, "-app-donation__donation-button", "-app-donation__donation-button_delete", 3, "click"], [1, "-app-donation__tree-image", 3, "src"], [1, "-app-donation__country"], [1, "-app-donation__country-title", 3, "click"], [4, "ngIf"], ["class", "-app-donation__country-list", 3, "-app-donation__country-list_select-country-mode", 4, "ngIf"], [1, "-app-donation__details", 3, "click"], [1, "-app-donation__details-title"], [1, "-app-donation__details-info"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-name"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-size"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-environment"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-type"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-key-feature"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-number"], [1, "-app-donation__details-item", "-app-donation__details-item", "_tree-cost"], [1, "-app-donation__details-item", "-app-donation__details-item", "_total-cost"], ["class", "-app-donation__details-item  -app-donation__details-item _country", 4, "ngIf"], [1, "-app-donation__donation-button", "-app-donation__donation-button_make", 3, "click"], [1, "-app-donation__country-list"], ["class", "-app-donation__country-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "-app-donation__country-list-button", 3, "click"], [1, "-app-donation__country-list-item", 3, "click"], ["countryNameTitle", ""], [1, "-app-donation__details-item", "-app-donation__details-item", "_country"]],
      template: function DonationBeforeRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_button_click_1_listener() {
            return ctx.deleteDonation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_div_click_4_listener() {
            return ctx.toggleSelectCountryMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DonationBeforeRegistrationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DonationBeforeRegistrationComponent_ng_container_6_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DonationBeforeRegistrationComponent_div_7_Template, 3, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_div_click_8_listener() {
            return ctx.toggleDonationDetailsMode();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DonationBeforeRegistrationComponent_div_28_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DonationBeforeRegistrationComponent_div_29_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationBeforeRegistrationComponent_Template_button_click_30_listener() {
            return ctx.makeDonation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " make donation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount: ", ctx.donation.treeDonation.amount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cost: ", ctx.donation.treeDonation.tree.cost, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Cost: ", ctx.donation.treeDonation.cost, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.donation.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.donation.country);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding: 100px 0px;\n}\n.-app-donation[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  border: 2px solid white;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.-app-donation__tree-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 0%;\n  left: 15%;\n  transform: translate(-50%, -50%);\n  width: 250px;\n  height: 250px;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n.-app-donation__donation-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 15%;\n  height: 100%;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n}\n.-app-donation__donation-button_delete[_ngcontent-%COMP%]::before {\n  content: \"\uF00D\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 30px;\n  font-weight: 900;\n}\n.-app-donation__donation-button_make[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.-app-donation__details[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35%;\n  transition: 0.3s;\n  cursor: pointer;\n  border-right: 2px solid white;\n}\n.-app-donation__details_donation-details-mode[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-left: 2px solid white;\n}\n.-app-donation__details-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  opacity: 1;\n  transition: 0.3s;\n}\n.-app-donation__details-title_invisible[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n}\n.-app-donation__details-info[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: wrap;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 0;\n  color: white;\n}\n.-app-donation__details-info_visible[_ngcontent-%COMP%] {\n  z-index: 5;\n  padding: 0px 100px;\n  overflow: scroll;\n  opacity: 1;\n  box-sizing: border-box;\n}\n.-app-donation__details-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 200px;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  text-align: center;\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n.-app-donation__donation-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.-app-donation__country[_ngcontent-%COMP%], .-app-donation__details-title[_ngcontent-%COMP%], .-app-donation__donation-button_make[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 30px;\n  box-sizing: border-box;\n  color: white;\n  text-align: center;\n  letter-spacing: 4px;\n  font-size: 30px;\n  font-weight: 500;\n}\n.-app-donation__country[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 35%;\n  overflow: hidden;\n  transition: 0.3s;\n  cursor: pointer;\n  border: 2px solid white;\n  border-top: none;\n  border-bottom: none;\n}\n.-app-donation__country_select-country-mode[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.-app-donation__country-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-donation__country-title_select-country-mode[_ngcontent-%COMP%] {\n  z-index: -1;\n  left: 0%;\n  transform: translate(-100%, -50%);\n}\n.-app-donation__country-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 0%;\n  height: 200px;\n  overflow: auto;\n  transition: 0.3s;\n  opacity: 0;\n  background-color: transparent;\n  color: white;\n}\n.-app-donation__country-list_select-country-mode[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 1;\n}\n.-app-donation__country-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.-app-donation__country-list-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(189, 255, 67, 0.4);\n}\n.-app-donation__country-list-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 50%;\n  left: 85%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-donation__country-list-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 28px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24vZG9uYXRpb24tYmVmb3JlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24vRDpcXEVQQU0gdHJhaW5pbmdcXHNhdmUtb3VyLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0LXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRvbmF0aW9uLWxpc3RcXGRvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb25cXGRvbmF0aW9uLWJlZm9yZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBRENKO0FDRUE7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQ0FBQTtBREhKO0FDSUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FESlI7QUNNSTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7QURSUjtBQ1VZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEVmhCO0FDYVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRFhaO0FDY0k7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSw2QkFBQTtBRGZSO0FDZ0JRO0VBQ0ksY0FBQTtFQUVBLDRCQUFBO0FEZlo7QUNpQlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUVBLFVBQUE7RUFFQSxnQkFBQTtBRGxCWjtBQ21CWTtFQUNJLFdBQUE7RUFFQSxVQUFBO0FEbEJoQjtBQ3FCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0FEdkJaO0FDd0JZO0VBQ0ksVUFBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxVQUFBO0VBRUEsc0JBQUE7QUQxQmhCO0FDNkJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0VBRUEsc0JBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRC9CWjtBQ21DUTtFQUNJLFlBQUE7QURqQ1o7QUNvQ0k7RUFHSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBRUEsc0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHZDUjtBQ3lDSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUQ1Q1I7QUM2Q1E7RUFDSSxZQUFBO0FEM0NaO0FDNkNRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEOUNaO0FDK0NZO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtBRDdDaEI7QUNnRFE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxTQUFBO0VBQ0EsYUFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtFQUVBLFlBQUE7QURuRFo7QUNvRFk7RUFDSSxXQUFBO0VBRUEsVUFBQTtBRG5EaEI7QUNxRFk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUVBLGdCQUFBO0FEdERoQjtBQ3VEZ0I7RUFDSSx5Q0FBQTtBRHJEcEI7QUN3RFk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHpEaEI7QUMwRGdCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDFEcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvbmF0aW9uLWxpc3QvZG9uYXRpb24tYmVmb3JlLXJlZ2lzdHJhdGlvbi9kb25hdGlvbi1iZWZvcmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTAwcHggMHB4O1xufVxuXG4uLWFwcC1kb25hdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi4tYXBwLWRvbmF0aW9uX190cmVlLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDAwO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAxNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uLWFwcC1kb25hdGlvbl9fZG9uYXRpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb25fX2RvbmF0aW9uLWJ1dHRvbl9kZWxldGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CNXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLi1hcHAtZG9uYXRpb25fX2RvbmF0aW9uLWJ1dHRvbl9tYWtlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uLWFwcC1kb25hdGlvbl9fZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM1JTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWRvbmF0aW9uX19kZXRhaWxzX2RvbmF0aW9uLWRldGFpbHMtbW9kZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi4tYXBwLWRvbmF0aW9uX19kZXRhaWxzLXRpdGxlX2ludmlzaWJsZSB7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwO1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtaW5mb192aXNpYmxlIHtcbiAgei1pbmRleDogNTtcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvcGFjaXR5OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLi1hcHAtZG9uYXRpb25fX2RvbmF0aW9uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjY7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeSwgLi1hcHAtZG9uYXRpb25fX2RldGFpbHMtdGl0bGUsIC4tYXBwLWRvbmF0aW9uX19kb25hdGlvbi1idXR0b25fbWFrZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnlfc2VsZWN0LWNvdW50cnktbW9kZSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5LXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeS10aXRsZV9zZWxlY3QtY291bnRyeS1tb2RlIHtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeS1saXN0X3NlbGVjdC1jb3VudHJ5LW1vZGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLWRvbmF0aW9uX19jb3VudHJ5LWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnktbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDI1NSwgNjcsIDAuNCk7XG59XG4uLWFwcC1kb25hdGlvbl9fY291bnRyeS1saXN0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTAwMDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDg1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtZG9uYXRpb25fX2NvdW50cnktbGlzdC1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74uqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDEwMHB4IDBweDtcclxufVxyXG5cclxuLi1hcHAtZG9uYXRpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICZfX3RyZWUtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgJl9fZG9uYXRpb24tYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgJl9kZWxldGUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9tYWtlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogMzUlO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgJl9kb25hdGlvbi1kZXRhaWxzLW1vZGUge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICZfdmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZG9uYXRpb24tYnV0dG9uIHtcclxuICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb3VudHJ5LFxyXG4gICAgJl9fZGV0YWlscy10aXRsZSxcclxuICAgICZfX2RvbmF0aW9uLWJ1dHRvbl9tYWtlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAmX19jb3VudHJ5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMzUlO1xyXG5cclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICZfc2VsZWN0LWNvdW50cnktbW9kZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmX3NlbGVjdC1jb3VudHJ5LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAmX3NlbGVjdC1jb3VudHJ5LW1vZGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgMjU1LCA2NywgMC40KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA4NSU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMmVhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationBeforeRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donation-before-registration',
          templateUrl: './donation-before-registration.component.html',
          styleUrls: ['./donation-before-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceDonationList"]
        }, {
          type: src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"]
        }];
      }, {
        donation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration-routing.module.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration-routing.module.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: DonationListBeforeRegistrationRoutingModule */

  /***/
  function srcAppComponentsDonationListDonationListBeforeRegistrationDonationListBeforeRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationListBeforeRegistrationRoutingModule", function () {
      return DonationListBeforeRegistrationRoutingModule;
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


    var _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./donation-list-before-registration.component */
    "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts");

    var routes = [{
      path: '',
      component: _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_2__["DonationListBeforeRegistrationComponent"]
    }];

    var DonationListBeforeRegistrationRoutingModule = function DonationListBeforeRegistrationRoutingModule() {
      _classCallCheck(this, DonationListBeforeRegistrationRoutingModule);
    };

    DonationListBeforeRegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DonationListBeforeRegistrationRoutingModule
    });
    DonationListBeforeRegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DonationListBeforeRegistrationRoutingModule_Factory(t) {
        return new (t || DonationListBeforeRegistrationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DonationListBeforeRegistrationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DonationListBeforeRegistrationRoutingModule, [{
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
  "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: DonationListBeforeRegistrationComponent */

  /***/
  function srcAppComponentsDonationListDonationListBeforeRegistrationDonationListBeforeRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationListBeforeRegistrationComponent", function () {
      return DonationListBeforeRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.selectors */
    "./src/app/store/donation-list/donation-list.selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../donation-before-registration/donation-before-registration.component */
    "./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts");

    function DonationListBeforeRegistrationComponent_ng_container_1_app_donation_before_registration_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-donation-before-registration", 5);
      }

      if (rf & 2) {
        var donation_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("donation", donation_r7);
      }
    }

    function DonationListBeforeRegistrationComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_container_1_app_donation_before_registration_1_Template, 1, 1, "app-donation-before-registration", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.donationListBeforeRegistration);
      }
    }

    function DonationListBeforeRegistrationComponent_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function DonationListBeforeRegistrationComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_container_2_div_1_Template, 1, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !(ctx_r1.isInitedDonationListBeforeRegistration || ctx_r1.isInitedCountriesForDonation) ? _r2 : _r4);
      }
    }

    function DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Before donation you need to choose any tree and country for donation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on the button below to choose it! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.switchRouterToCountryList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " choose countries ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.switchRouterToTreeList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " choose trees ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DonationListBeforeRegistrationComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DonationListBeforeRegistrationComponent_ng_template_3_div_0_Template, 10, 0, "div", 7);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isInitedDonationListBeforeRegistration);
      }
    }

    function DonationListBeforeRegistrationComponent_ng_template_5_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Before donation you need to choose any tree for donation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on the button below to choose it! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_5_div_0_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.switchRouterToTreeList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " choose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DonationListBeforeRegistrationComponent_ng_template_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Before donation you need to choose any country for donation ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on the button below to choose it! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonationListBeforeRegistrationComponent_ng_template_5_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.switchRouterToCountryList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " choose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DonationListBeforeRegistrationComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DonationListBeforeRegistrationComponent_ng_template_5_div_0_Template, 7, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_template_5_div_1_Template, 7, 0, "div", 7);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isInitedDonationListBeforeRegistration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isInitedCountriesForDonation);
      }
    }

    var DonationListBeforeRegistrationComponent = /*#__PURE__*/function () {
      function DonationListBeforeRegistrationComponent(_store$, _router) {
        _classCallCheck(this, DonationListBeforeRegistrationComponent);

        this._store$ = _store$;
        this._router = _router;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(DonationListBeforeRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectDonationListBeforeRegistration"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (donationListBeforeRegistration) {
            _this2.donationListBeforeRegistration = donationListBeforeRegistration;
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectCountriesForDonation"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (countriesForDonation) {
            _this2.countriesForDonation = countriesForDonation;
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedDonationListBeforeRegistration"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedDonationListBeforeRegistration) {
            _this2.isInitedDonationListBeforeRegistration = isInitedDonationListBeforeRegistration;
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectIsInitedCountriesForDonation"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedCountriesForDonation) {
            _this2.isInitedCountriesForDonation = isInitedCountriesForDonation;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "switchRouterToTreeList",
        value: function switchRouterToTreeList() {
          this._router.navigate(['trees']);
        }
      }, {
        key: "switchRouterToCountryList",
        value: function switchRouterToCountryList() {
          this._router.navigate(['countries']);
        }
      }]);

      return DonationListBeforeRegistrationComponent;
    }();

    DonationListBeforeRegistrationComponent.ɵfac = function DonationListBeforeRegistrationComponent_Factory(t) {
      return new (t || DonationListBeforeRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    DonationListBeforeRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonationListBeforeRegistrationComponent,
      selectors: [["app-donation-list-before-registration"]],
      decls: 7,
      vars: 2,
      consts: [[1, "-app-donation-list"], [4, "ngIf"], ["notInitedAllSettings", ""], ["notInitedOneSetting", ""], ["class", "-app-donation-list__donation", 3, "donation", 4, "ngFor", "ngForOf"], [1, "-app-donation-list__donation", 3, "donation"], [4, "ngTemplateOutlet"], ["class", "-app-donation-list__start", 4, "ngIf"], [1, "-app-donation-list__start"], [1, "-app-donation-list__start-title"], [1, "-app-donation-list__start-sub-title"], [1, "-app-donation-list__button-list"], [1, "-app-donation-list__start-button", 3, "click"]],
      template: function DonationListBeforeRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DonationListBeforeRegistrationComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DonationListBeforeRegistrationComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DonationListBeforeRegistrationComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DonationListBeforeRegistrationComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInitedDonationListBeforeRegistration && ctx.isInitedCountriesForDonation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isInitedDonationListBeforeRegistration || !ctx.isInitedCountriesForDonation);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_7__["DonationBeforeRegistrationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n}\n\n.-app-donation-list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  padding: 100px;\n  box-sizing: border-box;\n}\n\n.-app-donation-list[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 120px;\n  z-index: -9999;\n  width: 100%;\n  height: 100vh;\n  background-image: url('donation-list-bg.jpg');\n  background-size: cover;\n}\n\n.-app-donation-list__start[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: white;\n}\n\n.-app-donation-list__start-title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: capitalize;\n  letter-spacing: 4px;\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.-app-donation-list__start-sub-title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n\n.-app-donation-list__start-title[_ngcontent-%COMP%], .-app-donation-list__start-sub-title[_ngcontent-%COMP%] {\n  margin: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n}\n\n.-app-donation-list__start-button[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0px 50px;\n  margin-top: 20px;\n  padding: 25px 0px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid white;\n  border-radius: 45px;\n  background-color: rgba(8, 37, 8, 0.95);\n  color: white;\n  letter-spacing: 1px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.-app-donation-list__start-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.4);\n          filter: brightness(1.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGlvbi1saXN0L2RvbmF0aW9uLWxpc3QtYmVmb3JlLXJlZ2lzdHJhdGlvbi9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZG9uYXRpb24tbGlzdFxcZG9uYXRpb24tbGlzdC1iZWZvcmUtcmVnaXN0cmF0aW9uXFxkb25hdGlvbi1saXN0LWJlZm9yZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZG9uYXRpb24tbGlzdC9kb25hdGlvbi1saXN0LWJlZm9yZS1yZWdpc3RyYXRpb24vZG9uYXRpb24tbGlzdC1iZWZvcmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLHNCQUFBO0FDRko7O0FER0k7RUFDSSxXQUFBO0VBRUEsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsNkNBQUE7RUFDQSxzQkFBQTtBQ0pSOztBRE1JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtBQ05SOztBRE9RO0VBQ0ksU0FBQTtFQUVBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOWjs7QURRUTtFQUNJLFNBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1BaOztBRFNRO0VBRUksWUFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsa0JBQUE7QUNWWjs7QURZUTtFQUNJLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDZlo7O0FEZ0JZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBQ2RoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9uYXRpb24tbGlzdC9kb25hdGlvbi1saXN0LWJlZm9yZS1yZWdpc3RyYXRpb24vZG9uYXRpb24tbGlzdC1iZWZvcmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uLWFwcC1kb25hdGlvbi1saXN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcblxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC05OTk5O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9uYXRpb24tbGlzdC9kb25hdGlvbi1saXN0LWJnLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAmX19zdGFydCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uLWFwcC1kb25hdGlvbi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC1kb25hdGlvbi1saXN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMjBweDtcbiAgei1pbmRleDogLTk5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RvbmF0aW9uLWxpc3QvZG9uYXRpb24tbGlzdC1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC1kb25hdGlvbi1saXN0X19zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1kb25hdGlvbi1saXN0X19zdGFydC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWRvbmF0aW9uLWxpc3RfX3N0YXJ0LXN1Yi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLi1hcHAtZG9uYXRpb24tbGlzdF9fc3RhcnQtdGl0bGUsIC4tYXBwLWRvbmF0aW9uLWxpc3RfX3N0YXJ0LXN1Yi10aXRsZSB7XG4gIG1hcmdpbjogMjBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi4tYXBwLWRvbmF0aW9uLWxpc3RfX3N0YXJ0LWJ1dHRvbiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwcHggNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMjVweCAwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWRvbmF0aW9uLWxpc3RfX3N0YXJ0LWJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjQpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationListBeforeRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donation-list-before-registration',
          templateUrl: './donation-list-before-registration.component.html',
          styleUrls: ['./donation-list-before-registration.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.module.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.module.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: DonationListBeforeRegistrationModule */

  /***/
  function srcAppComponentsDonationListDonationListBeforeRegistrationDonationListBeforeRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationListBeforeRegistrationModule", function () {
      return DonationListBeforeRegistrationModule;
    });
    /* harmony import */


    var _donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./donation-list-before-registration.component */
    "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration.component.ts");
    /* harmony import */


    var _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../donation-before-registration/donation-before-registration.component */
    "./src/app/components/donation-list/donation-before-registration/donation-before-registration.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./donation-list-before-registration-routing.module */
    "./src/app/components/donation-list/donation-list-before-registration/donation-list-before-registration-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DonationListBeforeRegistrationModule = function DonationListBeforeRegistrationModule() {
      _classCallCheck(this, DonationListBeforeRegistrationModule);
    };

    DonationListBeforeRegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DonationListBeforeRegistrationModule,
      bootstrap: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"]]
    });
    DonationListBeforeRegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function DonationListBeforeRegistrationModule_Factory(t) {
        return new (t || DonationListBeforeRegistrationModule)();
      },
      providers: [],
      imports: [[_donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationListBeforeRegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DonationListBeforeRegistrationModule, {
        declarations: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"], _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_1__["DonationBeforeRegistrationComponent"]],
        imports: [_donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationListBeforeRegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DonationListBeforeRegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"], _donation_before_registration_donation_before_registration_component__WEBPACK_IMPORTED_MODULE_1__["DonationBeforeRegistrationComponent"]],
          imports: [_donation_list_before_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["DonationListBeforeRegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          providers: [],
          bootstrap: [_donation_list_before_registration_component__WEBPACK_IMPORTED_MODULE_0__["DonationListBeforeRegistrationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-donation-list-donation-list-before-registration-donation-list-before-registration-module-es5.js.map