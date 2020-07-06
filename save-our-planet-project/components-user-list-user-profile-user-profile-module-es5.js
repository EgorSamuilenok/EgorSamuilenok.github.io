function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-list-user-profile-user-profile-module"], {
  /***/
  "./src/app/components/user-list/user-profile-donation/user-profile-donation.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/user-list/user-profile-donation/user-profile-donation.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UserProfileDonationComponent */

  /***/
  function srcAppComponentsUserListUserProfileDonationUserProfileDonationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileDonationComponent", function () {
      return UserProfileDonationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var UserProfileDonationComponent = // tslint:disable-next-line: no-empty
    function UserProfileDonationComponent() {
      _classCallCheck(this, UserProfileDonationComponent);
    };

    UserProfileDonationComponent.ɵfac = function UserProfileDonationComponent_Factory(t) {
      return new (t || UserProfileDonationComponent)();
    };

    UserProfileDonationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileDonationComponent,
      selectors: [["app-user-profile-donation"]],
      inputs: {
        donation: "donation"
      },
      decls: 27,
      vars: 7,
      consts: [[1, "-app-user-profile-donation"], [1, "-app-user-profile-donation__item"], [1, "-app-user-profile-donation__item-title"], [1, "-app-user-profile-donation__item-info"]],
      template: function UserProfileDonationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " tree name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " tree type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " tree number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " cost: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.tree.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.tree.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.amount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.amount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 5, ctx.donation.date), " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n.-app-user-profile-donation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 20px 0px;\n  box-sizing: border-box;\n}\n\n.-app-user-profile-donation__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0px 40px;\n  box-sizing: border-box;\n  text-align: center;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n}\n\n.-app-user-profile-donation__item-title[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.-app-user-profile-donation__item-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlLWRvbmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHVzZXItcHJvZmlsZS1kb25hdGlvblxcdXNlci1wcm9maWxlLWRvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLXByb2ZpbGUtZG9uYXRpb24vdXNlci1wcm9maWxlLWRvbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBRUEsc0JBQUE7QUNGSjs7QURJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7RUFFQSxpQkFBQTtFQUVBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDTlI7O0FET1E7RUFDSSxnQkFBQTtBQ0xaOztBRE9RO0VBQ0ksaUJBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItcHJvZmlsZS1kb25hdGlvbi91c2VyLXByb2ZpbGUtZG9uYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi4tYXBwLXVzZXItcHJvZmlsZS1kb25hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi4tYXBwLXVzZXItcHJvZmlsZS1kb25hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZS1kb25hdGlvbl9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZS1kb25hdGlvbl9faXRlbS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb25fX2l0ZW0taW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileDonationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile-donation',
          templateUrl: './user-profile-donation.component.html',
          styleUrls: ['./user-profile-donation.component.scss']
        }]
      }], function () {
        return [];
      }, {
        donation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-list/user-profile/user-profile-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/user-list/user-profile/user-profile-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserProfileRoutingModule */

  /***/
  function srcAppComponentsUserListUserProfileUserProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function () {
      return UserProfileRoutingModule;
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


    var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-profile.component */
    "./src/app/components/user-list/user-profile/user-profile.component.ts");
    /* harmony import */


    var src_app_guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/guards/user-list/can-proceed-to-user-profile.guard */
    "./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts");
    /* harmony import */


    var src_app_guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/guards/user-list/can-leave-user-profile.guard */
    "./src/app/guards/user-list/can-leave-user-profile.guard.ts");

    var routes = [{
      path: '',
      component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
      canActivate: [src_app_guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_3__["CanProceedToUserProfileGuard"]],
      canDeactivate: [src_app_guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_4__["CanLeaveUserProfileGuard"]]
    }];

    var UserProfileRoutingModule = function UserProfileRoutingModule() {
      _classCallCheck(this, UserProfileRoutingModule);
    };

    UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UserProfileRoutingModule
    });
    UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UserProfileRoutingModule_Factory(t) {
        return new (t || UserProfileRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileRoutingModule, [{
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
  "./src/app/components/user-list/user-profile/user-profile.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/user-list/user-profile/user-profile.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsUserListUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.selectors */
    "./src/app/store/donation-list/donation-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/store/user-list/user-list.facade */
    "./src/app/store/user-list/user-list.facade.ts");
    /* harmony import */


    var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.facade */
    "./src/app/store/donation-list/donation-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../user-profile-donation/user-profile-donation.component */
    "./src/app/components/user-list/user-profile-donation/user-profile-donation.component.ts");

    function UserProfileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      }
    }

    function UserProfileComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function UserProfileComponent_div_1_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.user.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UserProfileComponent_div_1_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " no image ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserProfileComponent_div_1_div_10_app_user_profile_donation_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-profile-donation", 40);
      }

      if (rf & 2) {
        var donation_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("donation", donation_r11);
      }
    }

    function UserProfileComponent_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_div_1_div_10_app_user_profile_donation_1_Template, 1, 1, "app-user-profile-donation", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.userDonationList);
      }
    }

    function UserProfileComponent_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " you have not donated ever ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " start your donation history by clicking on the button below ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_div_11_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.startDonation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " start ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__start-donation_image-mode", ctx_r8.imageMode);
      }
    }

    function UserProfileComponent_div_1_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country: ", ctx_r9.user.country.name, " ");
      }
    }

    function UserProfileComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.toggleImageMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfileComponent_div_1_div_2_Template, 1, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfileComponent_div_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileComponent_div_1_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " donations ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserProfileComponent_div_1_div_10_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserProfileComponent_div_1_div_11_Template, 7, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserProfileComponent_div_1_div_25_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.toggleFillMedicalForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_1_Template_form_ngSubmit_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.applyInsurance();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.toggleFillMedicalForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "medical insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " points number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "get");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Enter the url of any picture, which you want to see in your profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_1_Template_form_ngSubmit_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.changeImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Change ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.toggleImageMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.user.profileImage ? _r3 : _r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__donation-list_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isInitedUserDonationList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isInitedUserDonationList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list_medical-mode", ctx_r1.medicalFormMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.surName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Age: ", ctx_r1.user.age, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Join our project: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 43, ctx_r1.user.date), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Medical Points: ", ctx_r1.user.medicalPoints, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.user.medicalPoints);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form_medical-mode", ctx_r1.medicalFormMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.myFormApplyInsurance);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form-item-label_invisible", ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form-warning_item-invalid", ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].touched && ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form-warning_message-invalid", ctx_r1.myFormApplyInsurance.controls["userMessage"].touched && ctx_r1.myFormApplyInsurance.controls["userMessage"].invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].invalid || ctx_r1.myFormApplyInsurance.controls["userMessage"].invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-title_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-image_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.myFormNewImage.controls["userNewImage"].value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-form_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.myFormNewImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-input_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-input-line_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-switch-button_image-mode", ctx_r1.imageMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-return-button_image-mode", ctx_r1.imageMode);
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(_store$, _router, _facadeUserListService, _facadeDonationListService) {
        _classCallCheck(this, UserProfileComponent);

        this._store$ = _store$;
        this._router = _router;
        this._facadeUserListService = _facadeUserListService;
        this._facadeDonationListService = _facadeDonationListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.initImageForm();
        this.initApplyInsuranceForm();
      }

      _createClass(UserProfileComponent, [{
        key: "initImageForm",
        value: function initImageForm() {
          this.myFormNewImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userNewImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }
      }, {
        key: "initApplyInsuranceForm",
        value: function initApplyInsuranceForm() {
          this.myFormApplyInsurance = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userMedicalPoints: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.medicalPointsValidator]),
            userMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }
      }, {
        key: "medicalPointsValidator",
        value: function medicalPointsValidator(control) {
          var medicalPointsInputControlName = 'userMedicalPoints';

          if (!isNaN(control.value) && control.value > 0 && Number(control.value) <= UserProfileComponent.currentUserMedicalPoints) {
            return null;
          } else {
            return {
              medicalPointsInputControlName: true
            };
          }
        }
      }, {
        key: "isAnyValuesEnteredInMedicalInsuranceForm",
        value: function isAnyValuesEnteredInMedicalInsuranceForm() {
          if (Boolean(this.myFormApplyInsurance.controls.userMedicalPoints.value) || Boolean(this.myFormApplyInsurance.controls.userMessage.value)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._store$.select(src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (user) {
            if (Boolean(user)) {
              UserProfileComponent.currentUserMedicalPoints = user.clone().medicalPoints;
              _this.user = user;

              _this._facadeDonationListService.initUserDonationList(_this.user.id);
            }
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserDonationList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (userDonationList) {
            _this.userDonationList = userDonationList;

            _this._facadeDonationListService.initUserDonationListSuccess();
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_5__["selectIsInitedUserDonationList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isInitedUserDonationList) {
            _this.isInitedUserDonationList = isInitedUserDonationList;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "toggleImageMode",
        value: function toggleImageMode() {
          this.imageMode = !this.imageMode;
        }
      }, {
        key: "changeImage",
        value: function changeImage() {
          var newImage = this.myFormNewImage.controls.userNewImage.value;

          this._facadeUserListService.changeCurrentUserImage(newImage);

          this.toggleImageMode();
        }
      }, {
        key: "startDonation",
        value: function startDonation() {
          this._router.navigate(['/donation']);
        }
      }, {
        key: "toggleFillMedicalForm",
        value: function toggleFillMedicalForm() {
          this.medicalFormMode = !this.medicalFormMode;
        }
      }, {
        key: "applyInsurance",
        value: function applyInsurance() {
          this._isGettedMedicalInsurance = true;

          if (this.myFormApplyInsurance.invalid) {
            this.myFormApplyInsurance.controls.userMedicalPoints.markAsTouched();
            this.myFormApplyInsurance.controls.userMessage.markAsTouched();
            return;
          }

          var numberOfGetMedicalPoints = Number(this.myFormApplyInsurance.controls.userMedicalPoints.value);

          this._facadeUserListService.pickUpPointsFromUser(this.user.id, numberOfGetMedicalPoints);

          if (this.medicalFormMode) {
            this.toggleFillMedicalForm();
          }

          this.initApplyInsuranceForm();
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          var deactivateQuestion = 'You filled in the form fields but did not get insurance. Are you sure that you want to go from this page?';
          return !this._isGettedMedicalInsurance && this.isAnyValuesEnteredInMedicalInsuranceForm() ? confirm(deactivateQuestion) : true;
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceDonationList"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 2,
      vars: 2,
      consts: [["class", "-app-user-profile", 4, "ngIf"], [1, "-app-user-profile"], [1, "-app-user-profile__image-container", 3, "click"], [4, "ngTemplateOutlet"], ["profileImage", ""], ["defaultProfileImage", ""], [1, "-app-user-profile__donation-list"], [1, "-app-user-profile__donation-list-title"], ["class", "-app-user-profile__donation-list-wrapper", 4, "ngIf"], ["class", "-app-user-profile__start-donation", 3, "-app-user-profile__start-donation_image-mode", 4, "ngIf"], [1, "-app-user-profile__info-list-wrapper"], [1, "-app-user-profile__info-list"], [1, "-app-user-profile__info-item"], ["class", "-app-user-profile__info-item", 4, "ngIf"], ["title", "1 medical point = 1 donation $", 1, "-app-user-profile__info-item"], ["title", "get medical insurance", 1, "-app-user-profile__info-list-button", 3, "disabled", "click"], [1, "-app-user-profile__info-list-form", "-app-user-profile__info-list-form_medical", 3, "formGroup", "ngSubmit"], [1, "-app-user-profile__info-list-form-back", 3, "click"], [1, "-app-user-profile__info-list-form-title"], [1, "-app-user-profile__info-list-form-item"], ["name", "medicalPoints", "type", "text", "formControlName", "userMedicalPoints", "autocomplete", "off", 1, "-app-user-profile__info-list-form-item-input", "-app-user-profile__info-list-form-item-input_name"], [1, "-app-user-profile__info-list-form-item-line"], [1, "-app-user-profile__info-list-form-item-label"], ["title", "Enter only values \u200B\u200Bwithin your medical points", 1, "-app-user-profile__info-list-form-warning", "-app-user-profile__info-list-form-warning_item"], [1, "-app-user-profile__info-list-form-message"], ["placeholder", "Write your message", "formControlName", "userMessage", "title", "Enter only values \u200B\u200Bwithin your medical points", 1, "-app-user-profile__info-list-form-message-textarea"], ["title", "Enter some message to us", 1, "-app-user-profile__info-list-form-warning", "-app-user-profile__info-list-form-warning_message"], ["type", "submit", 1, "-app-user-profile__info-list-form-button", 3, "disabled"], [1, "-app-user-profile__change"], [1, "-app-user-profile__change-title"], [1, "-app-user-profile__change-image", 3, "src"], [1, "-app-user-profile__change-form", 3, "formGroup", "ngSubmit"], ["type", "text", "name", "imageUrl", "placeholder", "Enter url of the picture", "formControlName", "userNewImage", "autocomplete", "off", 1, "-app-user-profile__change-input"], [1, "-app-user-profile__change-input-line"], ["type", "submit", 1, "-app-user-profile__change-switch-button"], [1, "-app-user-profile__change-return-button", 3, "click"], [1, "-app-user-profile__image", 3, "src"], [1, "-app-user-profile__image", "-app-user-profile__image_default"], [1, "-app-user-profile__donation-list-wrapper"], ["class", "-app-user-profile__current-donation", 3, "donation", 4, "ngFor", "ngForOf"], [1, "-app-user-profile__current-donation", 3, "donation"], [1, "-app-user-profile__start-donation"], [1, "-app-user-profile__start-donation-title"], [1, "-app-user-profile__start-donation-sub-title"], [1, "-app-user-profile__start-donation-button", 3, "click"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_div_1_Template, 54, 45, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileDonationComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-profile-bg.jpg');\n  background-size: cover;\n}\n.-app-user-profile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 60%;\n  height: 75%;\n  border: 2px solid #d2ffd0;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2ffd0;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  left: 25%;\n  top: 0%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n  overflow: hidden;\n  border: 2px solid #d2ffd0;\n  border-radius: 50%;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  transition: 0.2s;\n  width: 0%;\n  height: 0%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]::after {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.4s;\n  transition-delay: 0.1s;\n  opacity: 0;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-weight: 900;\n  font-size: 30px;\n}\n.-app-user-profile__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-user-profile__image_default[_ngcontent-%COMP%] {\n  background-image: url('default-user-profile-image.jpg');\n  background-size: cover;\n}\n.-app-user-profile__info-list-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n.-app-user-profile__info-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-user-profile__info-list_medical-mode.-app-user-profile__info-list[_ngcontent-%COMP%] {\n  left: 0%;\n  transform: translate(-100%, -50%);\n}\n.-app-user-profile__info-list-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  transform: translate(0%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-user-profile__info-list-form_medical-mode.-app-user-profile__info-list-form[_ngcontent-%COMP%] {\n  left: 0%;\n  transform: translate(0%, -50%);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-form-warning_item-invalid[_ngcontent-%COMP%], .-app-user-profile__info-list-form-warning_message-invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-user-profile__info-list-form-warning_item[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n.-app-user-profile__info-list-form-warning_message[_ngcontent-%COMP%] {\n  top: 2.5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #f8b2a6;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  width: 100%;\n  text-align: center;\n  padding: 20px 30px;\n  font-size: 28px;\n}\n.-app-user-profile__info-list-form-button[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 15px 50px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  background: transparent;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.-app-user-profile__info-list-form-button[disabled][_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-button[_ngcontent-%COMP%]:hover {\n  background-color: #d2ffd0;\n  color: black;\n}\n.-app-user-profile__info-list-form-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 60px;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 0px 100px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%]:focus    + .-app-user-profile__info-list-form-item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-user-profile__info-list-form-item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-user-profile__info-list-form-item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 80%;\n  height: 2px;\n  transition: 0.3s;\n  background-color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  margin: 30px 0px;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n  resize: vertical;\n  padding: 20px 60px;\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid #d2ffd0;\n  background-color: transparent;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%]::before {\n  content: \"\uF00D\";\n  position: absolute;\n  z-index: 9001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #d2ffd0;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%]::before {\n  content: \"\uF469\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #d2ffd0;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 0px 30px;\n  padding-left: 60px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  text-align: left;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__donation-list[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  border-right: 2px solid #d2ffd0;\n}\n.-app-user-profile__donation-list_image-mode[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n}\n.-app-user-profile__donation-list-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  padding: 20px 30px;\n  padding-top: 120px;\n  box-sizing: border-box;\n  border-bottom: 2px solid #d2ffd0;\n  color: #d2ffd0;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n  font-weight: 600;\n  font-size: 20px;\n}\n.-app-user-profile__donation-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  overflow: auto;\n}\n.-app-user-profile__change[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 25%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 0;\n  box-sizing: border-box;\n  border-right: 2px solid #d2ffd0;\n  background-color: transparent;\n}\n.-app-user-profile__change_image-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-user-profile__change-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 5px;\n  padding-top: 120px;\n  text-align: center;\n}\n.-app-user-profile__change-image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  margin: 20px 0px;\n  border: 2px solid #d2ffd0;\n}\n.-app-user-profile__change-title[_ngcontent-%COMP%], .-app-user-profile__change-image[_ngcontent-%COMP%], .-app-user-profile__change-switch-button[_ngcontent-%COMP%], .-app-user-profile__change-return-button[_ngcontent-%COMP%], .-app-user-profile__change-input[_ngcontent-%COMP%], .-app-user-profile__change-form[_ngcontent-%COMP%], .-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.2s;\n  opacity: 0;\n}\n.-app-user-profile__change-title_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-image_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-switch-button_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-return-button_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-input_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-form_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-input-line_image-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.5s;\n  opacity: 1;\n}\n.-app-user-profile__change-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70%;\n  height: 40px;\n  margin: 10px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: white;\n  font-size: 16px;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]:focus    + .-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 2px;\n  transition: 0.2s;\n  background-color: #d2ffd0;\n}\n.-app-user-profile__change-switch-button[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  margin-top: 30px;\n  padding: 15px 40px;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  border-radius: 30px;\n  background-color: transparent;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.-app-user-profile__change-return-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.-app-user-profile__change-return-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 20px;\n  font-weight: 900;\n}\n.-app-user-profile__current-donation[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 2px solid #d2ffd0;\n}\n.-app-user-profile__start-donation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.-app-user-profile__start-donation_image-mode[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-user-profile__start-donation-title[_ngcontent-%COMP%], .-app-user-profile__start-donation-sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  box-sizing: border-box;\n}\n.-app-user-profile__start-donation-title[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  font-size: 22px;\n}\n.-app-user-profile__start-donation-sub-title[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  font-size: 16px;\n}\n.-app-user-profile__start-donation-button[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px 65px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  border-radius: 35px;\n  background: transparent;\n  color: #d2ffd0;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: 2px;\n}\n.-app-user-profile__start-donation-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSw0Q0FBQTtFQUNBLHNCQUFBO0FEQUo7QUNHQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQ0FBQTtFQUNBLGNBQUE7QURKSjtBQ0tJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtBRE5SO0FDT1E7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsZ0JBQUE7RUFFQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBRUEsb0NBQUE7QURWWjtBQ2FZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURYaEI7QUNhWTtFQUNJLFVBQUE7QURYaEI7QUNjUTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUVBLDJE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QSxlQUFBO0FEeElaO0FDMElRO0VBQ0ksa0JBQUE7RUFFQSxlQUFBO0FEeklaO0FDMklRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRDdJWjtBQzhJWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUQ1SWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC91c2VyLXByb2ZpbGUtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uLWFwcC11c2VyLXByb2ZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNkMmZmZDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTAwMDtcbiAgbGVmdDogMjUlO1xuICB0b3A6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2UtY29udGFpbmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZS1jb250YWluZXI6aG92ZXI6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlLWNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZS1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCLvgadcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgb3BhY2l0eTogMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2VfZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L2RlZmF1bHQtdXNlci1wcm9maWxlLWltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdF9tZWRpY2FsLW1vZGUuLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdCB7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm1fbWVkaWNhbC1tb2RlLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybSB7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nX2l0ZW0taW52YWxpZCwgLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nX21lc3NhZ2UtaW52YWxpZCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmdfaXRlbSB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmdfbWVzc2FnZSB7XG4gIHRvcDogMi41JTtcbiAgcmlnaHQ6IDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjZjhiMmE2O1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tdGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2QyZmZkMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYnV0dG9uW2Rpc2FibGVkXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZmZkMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtLWlucHV0IHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbS1pbnB1dDpmb2N1cyArIC4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbS1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtLWxhYmVsX2ludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1tZXNzYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1tZXNzYWdlLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tbWVzc2FnZS10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTAwMDtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYmFjazpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1iYWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwMDE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWJ1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi75GpXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDE7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19kb25hdGlvbi1saXN0X2ltYWdlLW1vZGUge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDI1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2QyZmZkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZV9pbWFnZS1tb2RlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWltYWdlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtdGl0bGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWltYWdlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1zd2l0Y2gtYnV0dG9uLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1yZXR1cm4tYnV0dG9uLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dCwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtZm9ybSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQtbGluZSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBvcGFjaXR5OiAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtdGl0bGVfaW1hZ2UtbW9kZSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW1hZ2VfaW1hZ2UtbW9kZSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2Utc3dpdGNoLWJ1dHRvbl9pbWFnZS1tb2RlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1yZXR1cm4tYnV0dG9uX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0X2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWZvcm1faW1hZ2UtbW9kZSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQtbGluZV9pbWFnZS1tb2RlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNkMmZmZDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dDpmb2N1cyArIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmUge1xuICB3aWR0aDogODUlO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQtbGluZSB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2Utc3dpdGNoLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXJldHVybi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXJldHVybi1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74uqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2N1cnJlbnQtZG9uYXRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX3N0YXJ0LWRvbmF0aW9uX2ltYWdlLW1vZGUge1xuICBvcGFjaXR5OiAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi10aXRsZSwgLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi1zdWItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX3N0YXJ0LWRvbmF0aW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX3N0YXJ0LWRvbmF0aW9uLXN1Yi10aXRsZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi1idXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggNjVweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fc3RhcnQtZG9uYXRpb24tYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG59IiwiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC91c2VyLXByb2ZpbGUtYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uLWFwcC11c2VyLXByb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICZfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAlO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2N1wiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICZfZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvZGVmYXVsdC11c2VyLXByb2ZpbGUtaW1hZ2UuanBnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgICAgJi1saXN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgJl9tZWRpY2FsLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgJi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAmX21lZGljYWwtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtd2FybmluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICZfaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAmX21lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLWludmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmX21lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjEyYVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjhiMmE2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICYtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYgKyAuLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZfaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAmLXRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwZFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmNDY5XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcblxyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZG9uYXRpb24tbGlzdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2QyZmZkMDtcclxuICAgICAgICAmX2ltYWdlLW1vZGUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuXHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZmZkMDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jaGFuZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkMmZmZDA7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICZfaW1hZ2UtbW9kZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICYtaW1hZ2UsXHJcbiAgICAgICAgJi1zd2l0Y2gtYnV0dG9uLFxyXG4gICAgICAgICYtcmV0dXJuLWJ1dHRvbixcclxuICAgICAgICAmLWlucHV0LFxyXG4gICAgICAgICYtZm9ybSxcclxuICAgICAgICAmLWlucHV0LWxpbmUge1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICZfaW1hZ2UtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgJiArIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zd2l0Y2gtYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJldHVybi1idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMmVhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY3VycmVudC1kb25hdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZmZkMDtcclxuICAgIH1cclxuICAgICZfX3N0YXJ0LWRvbmF0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAmX2ltYWdlLW1vZGUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCA2NXB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"]
        }, {
          type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceDonationList"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-list/user-profile/user-profile.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/user-list/user-profile/user-profile.module.ts ***!
    \**************************************************************************/

  /*! exports provided: UserProfileModule */

  /***/
  function srcAppComponentsUserListUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
      return UserProfileModule;
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


    var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-profile.component */
    "./src/app/components/user-list/user-profile/user-profile.component.ts");
    /* harmony import */


    var _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-profile-donation/user-profile-donation.component */
    "./src/app/components/user-list/user-profile-donation/user-profile-donation.component.ts");
    /* harmony import */


    var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-profile-routing.module */
    "./src/app/components/user-list/user-profile/user-profile-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/guards/user-list/can-proceed-to-user-profile.guard */
    "./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts");
    /* harmony import */


    var src_app_guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/guards/user-list/can-leave-user-profile.guard */
    "./src/app/guards/user-list/can-leave-user-profile.guard.ts");

    var UserProfileModule = function UserProfileModule() {
      _classCallCheck(this, UserProfileModule);
    };

    UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserProfileModule,
      bootstrap: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]]
    });
    UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserProfileModule_Factory(t) {
        return new (t || UserProfileModule)();
      },
      providers: [src_app_guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToUserProfileGuard"], src_app_guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveUserProfileGuard"]],
      imports: [[_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, {
        declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileDonationComponent"]],
        imports: [_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileDonationComponent"]],
          imports: [_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          providers: [src_app_guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToUserProfileGuard"], src_app_guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveUserProfileGuard"]],
          bootstrap: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/user-list/can-leave-user-profile.guard.ts":
  /*!******************************************************************!*\
    !*** ./src/app/guards/user-list/can-leave-user-profile.guard.ts ***!
    \******************************************************************/

  /*! exports provided: CanLeaveUserProfileGuard */

  /***/
  function srcAppGuardsUserListCanLeaveUserProfileGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanLeaveUserProfileGuard", function () {
      return CanLeaveUserProfileGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanLeaveUserProfileGuard = /*#__PURE__*/function () {
      function CanLeaveUserProfileGuard() {
        _classCallCheck(this, CanLeaveUserProfileGuard);
      }

      _createClass(CanLeaveUserProfileGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return CanLeaveUserProfileGuard;
    }();

    CanLeaveUserProfileGuard.ɵfac = function CanLeaveUserProfileGuard_Factory(t) {
      return new (t || CanLeaveUserProfileGuard)();
    };

    CanLeaveUserProfileGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanLeaveUserProfileGuard,
      factory: CanLeaveUserProfileGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveUserProfileGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts ***!
    \***********************************************************************/

  /*! exports provided: CanProceedToUserProfileGuard */

  /***/
  function srcAppGuardsUserListCanProceedToUserProfileGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToUserProfileGuard", function () {
      return CanProceedToUserProfileGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/user-list/user-list.selectors */
    "./src/app/store/user-list/user-list.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CanProceedToUserProfileGuard = /*#__PURE__*/function () {
      function CanProceedToUserProfileGuard(_store$, _router) {
        _classCallCheck(this, CanProceedToUserProfileGuard);

        this._store$ = _store$;
        this._router = _router;
      }

      _createClass(CanProceedToUserProfileGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var currentUser;

          this._store$.select(_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"]).subscribe(function (user) {
            currentUser = user;
          }).unsubscribe();

          if (currentUser) {
            return true;
          } else {
            this._router.navigate(['/registration', 'mode', 'login-mode']);

            return false;
          }
        }
      }]);

      return CanProceedToUserProfileGuard;
    }();

    CanProceedToUserProfileGuard.ɵfac = function CanProceedToUserProfileGuard_Factory(t) {
      return new (t || CanProceedToUserProfileGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    CanProceedToUserProfileGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToUserProfileGuard,
      factory: CanProceedToUserProfileGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToUserProfileGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-user-list-user-profile-user-profile-module-es5.js.map