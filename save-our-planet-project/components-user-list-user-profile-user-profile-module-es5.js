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


    var src_app_pipes_user_list_format_user_profile_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/pipes/user-list/format-user-profile-tree-amount.pipe */
    "./src/app/pipes/user-list/format-user-profile-tree-amount.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
      decls: 34,
      vars: 12,
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "formatUserProfileTreeAmount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " cost: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " country: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "date");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx.donation.treeDonation.amount), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, ctx.donation.treeDonation.cost), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.country.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 10, ctx.donation.date), " ");
        }
      },
      pipes: [src_app_pipes_user_list_format_user_profile_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatUserProfileTreeAmountPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n.-app-user-profile-donation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 20px 0px;\n  box-sizing: border-box;\n}\n\n.-app-user-profile-donation__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0px 40px;\n  box-sizing: border-box;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n\n.-app-user-profile-donation__item-title[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.-app-user-profile-donation__item-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlLWRvbmF0aW9uL0M6XFxVc2Vyc1xcWWFob3JfU2FtdWlsaW9uYWtcXHdvcmtcXHNhdmUtcGxhbmV0XFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHVzZXItcHJvZmlsZS1kb25hdGlvblxcdXNlci1wcm9maWxlLWRvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLXByb2ZpbGUtZG9uYXRpb24vdXNlci1wcm9maWxlLWRvbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FERVE7RUFDSSxnQkFBQTtBQ0FaOztBREVRO0VBQ0ksaUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItcHJvZmlsZS1kb25hdGlvbi91c2VyLXByb2ZpbGUtZG9uYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi4tYXBwLXVzZXItcHJvZmlsZS1kb25hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb25fX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb25fX2l0ZW0tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLi1hcHAtdXNlci1wcm9maWxlLWRvbmF0aW9uX19pdGVtLWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"]
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
    /* harmony import */


    var src_app_pipes_user_list_format_user_age_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/pipes/user-list/format-user-age.pipe */
    "./src/app/pipes/user-list/format-user-age.pipe.ts");
    /* harmony import */


    var src_app_pipes_user_list_format_user_medical_points_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/pipes/user-list/format-user-medical-points.pipe */
    "./src/app/pipes/user-list/format-user-medical-points.pipe.ts");

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

    function UserProfileComponent_div_1_div_26_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "formatUserAge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserProfileComponent_div_1_div_26_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "formatUserMedicalPoints");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.toggleFillMedicalForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_1_Template_form_ngSubmit_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.applyInsurance();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.toggleFillMedicalForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "medical insurance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " points number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "get");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Enter the url of any picture, which you want to see in your profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "form", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_1_Template_form_ngSubmit_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.changeImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Change ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_55_listener() {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Age: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 43, ctx_r1.user.age), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Join our project: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 45, ctx_r1.user.date), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Medical Points: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 47, ctx_r1.user.medicalPoints), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_div_1_Template, 56, 49, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileDonationComponent"]],
      pipes: [src_app_pipes_user_list_format_user_age_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatUserAgePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], src_app_pipes_user_list_format_user_medical_points_pipe__WEBPACK_IMPORTED_MODULE_13__["FormatUserMedicalPointsPipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-profile-bg.jpg');\n  background-size: cover;\n}\n.-app-user-profile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 60%;\n  height: 75%;\n  border: 2px solid #d2ffd0;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2ffd0;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  left: 25%;\n  top: 0%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid #d2ffd0;\n  border-radius: 50%;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 0%;\n  height: 0%;\n  transition: 0.2s;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]::after {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.4s;\n  transition-delay: 0.1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-user-profile__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-user-profile__image_default[_ngcontent-%COMP%] {\n  background-image: url('default-user-profile-image.jpg');\n  background-size: cover;\n}\n.-app-user-profile__info-list-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n.-app-user-profile__info-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-user-profile__info-list_medical-mode.-app-user-profile__info-list[_ngcontent-%COMP%] {\n  left: 0%;\n  transform: translate(-100%, -50%);\n}\n.-app-user-profile__info-list-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  transform: translate(0%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-user-profile__info-list-form_medical-mode.-app-user-profile__info-list-form[_ngcontent-%COMP%] {\n  left: 0%;\n  transform: translate(0%, -50%);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-form-warning_item-invalid[_ngcontent-%COMP%], .-app-user-profile__info-list-form-warning_message-invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-user-profile__info-list-form-warning_item[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n.-app-user-profile__info-list-form-warning_message[_ngcontent-%COMP%] {\n  top: 2.5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #f8b2a6;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-user-profile__info-list-form-title[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 30px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 28px;\n}\n.-app-user-profile__info-list-form-button[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 15px 50px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  background: transparent;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n  cursor: default;\n}\n.-app-user-profile__info-list-form-button[disabled][_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-button[_ngcontent-%COMP%]:hover {\n  background-color: #d2ffd0;\n  color: black;\n}\n.-app-user-profile__info-list-form-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 60px;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 0px 100px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1px;\n  font-size: 18px;\n  font-weight: 500;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%]:focus    + .-app-user-profile__info-list-form-item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: #d2ffd0 !important;\n  color: #d2ffd0 !important;\n}\n.-app-user-profile__info-list-form-item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-user-profile__info-list-form-item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 80%;\n  height: 2px;\n  transition: 0.3s;\n  background-color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  margin: 30px 0px;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n  resize: vertical;\n  padding: 20px 60px;\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid #d2ffd0;\n  background-color: transparent;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1px;\n  font-size: 18px;\n  font-weight: 500;\n  font-family: \"NotoSans\", sans-serif;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%]::before {\n  content: \"\uF00D\";\n  position: absolute;\n  z-index: 9001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #d2ffd0;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%]::before {\n  content: \"\uF469\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #d2ffd0;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-user-profile__info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 0px 30px;\n  padding-left: 60px;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: left;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__donation-list[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  box-sizing: border-box;\n  border-right: 2px solid #d2ffd0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.-app-user-profile__donation-list_image-mode[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n.-app-user-profile__donation-list-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  padding: 20px 30px;\n  padding-top: 120px;\n  box-sizing: border-box;\n  border-bottom: 2px solid #d2ffd0;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 2.5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-user-profile__donation-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  overflow: auto;\n}\n.-app-user-profile__change[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 25%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  height: 100%;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  border-right: 2px solid #d2ffd0;\n  background-color: transparent;\n}\n.-app-user-profile__change_image-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-user-profile__change-title[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  text-align: center;\n  letter-spacing: 5px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.-app-user-profile__change-image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  margin: 20px 0px;\n  border: 2px solid #d2ffd0;\n}\n.-app-user-profile__change-title[_ngcontent-%COMP%], .-app-user-profile__change-image[_ngcontent-%COMP%], .-app-user-profile__change-switch-button[_ngcontent-%COMP%], .-app-user-profile__change-return-button[_ngcontent-%COMP%], .-app-user-profile__change-input[_ngcontent-%COMP%], .-app-user-profile__change-form[_ngcontent-%COMP%], .-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.-app-user-profile__change-title_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-image_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-switch-button_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-return-button_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-input_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-form_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-input-line_image-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.5s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-user-profile__change-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70%;\n  height: 40px;\n  margin: 10px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: white;\n  font-size: 16px;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]:focus    + .-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 2px;\n  transition: 0.2s;\n  background-color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: #d2ffd0 !important;\n  color: #d2ffd0 !important;\n}\n.-app-user-profile__change-switch-button[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  margin-top: 30px;\n  padding: 15px 40px;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  border-radius: 30px;\n  background-color: transparent;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.-app-user-profile__change-return-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.-app-user-profile__change-return-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-user-profile__current-donation[_ngcontent-%COMP%]:not(:last-of-type) {\n  border-bottom: 2px solid #d2ffd0;\n}\n.-app-user-profile__start-donation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.-app-user-profile__start-donation_image-mode[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-user-profile__start-donation-title[_ngcontent-%COMP%], .-app-user-profile__start-donation-sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  box-sizing: border-box;\n}\n.-app-user-profile__start-donation-title[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  font-size: 22px;\n}\n.-app-user-profile__start-donation-sub-title[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  font-size: 16px;\n}\n.-app-user-profile__start-donation-button[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px 65px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  border-radius: 35px;\n  background: transparent;\n  color: #d2ffd0;\n  letter-spacing: 2px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.-app-user-profile__start-donation-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1wcm9maWxlL0M6XFxVc2Vyc1xcWWFob3JfU2FtdWlsaW9uYWtcXHdvcmtcXHNhdmUtcGxhbmV0XFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ29DaEI7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsNENBQUE7RUFDQSxzQkFBQTtBRHBDSjtBQ3VDQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQ0EzRGM7RUE2RGQsY0E1RE87QURtQlg7QUMwQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQXpESixnQ0EwRHVCO0VBRW5CLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtBRHZDUjtBQ3dDUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBekVSLDhCQTBFMkI7RUFFbkIsU0FBQTtFQUNBLFVBQUE7RUFyRVIsZ0JBdUVRO0VBRUEsa0JBQUE7RUFFQSxvQ0E1Rk07QUR5RGxCO0FDc0NZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURwQ2hCO0FDc0NZO0VBOUVSLFVBK0U2QjtFQTdFN0IsMEJBQUE7QUQwQ0o7QUNzQ1E7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQW5HUixnQ0FvRzJCO0VBNUYzQixnQkE4RlE7RUFoRlIsc0JBaUZRO0VBM0ZSLFVBNEZ5QjtFQTFGekIsd0JBQUE7RUE0RlEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUQxQlo7QUM2Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRDNCUjtBQzRCUTtFQUNJLHVEQUFBO0VBQ0Esc0JBQUE7QUQxQlo7QUM4QlE7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQ3Qlo7QUMrQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbElSLGdDQW1JMkI7RUFFbkIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBbklSLGdCQXFJUTtBRHhCWjtBQzBCZ0I7RUFDSSxRQUFBO0VBaEpoQixpQ0FpSm1DO0FEcEJ2QztBQ3VCWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUF2SlosOEJBd0orQjtFQUVuQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUF4SlosZ0JBMEpZO0FEaEJoQjtBQ2tCb0I7RUFDSSxRQUFBO0VBcktwQiw4QkFzS3VDO0FEWjNDO0FDZWdCO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUF0S2hCLGdCQXdLZ0I7RUFDQSxlQUFBO0VBcktoQixVQXNLaUM7RUFwS2pDLHdCQUFBO0VBc0tnQixhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEWnBCO0FDZXdCO0VBOUtwQixVQStLeUM7RUE3S3pDLDBCQUFBO0FEaUtKO0FDZW9CO0VBQ0ksUUFBQTtFQUNBLFVBQUE7RUFoTXBCLDhCQWlNdUM7QURUM0M7QUNXb0I7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQXJNcEIsNEJBc011QztBREwzQztBQ09vQjtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QURMeEI7QUNPb0I7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQWhOcEIsZ0NBaU51QztFQUVuQixjQTFOZDtFQTJOYyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBREh4QjtBQ01nQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURMcEI7QUNPZ0I7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBNU5oQixnQkE4TmdCO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLHVCQUFBO0VBRUEsY0F0UFQ7RUF1UFMseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRExwQjtBQ01vQjtFQXZPaEIsWUF3T3FDO0VBdE9yQyx5QkFBQTtFQXVPb0IsZUFBQTtBREh4QjtBQ0l3QjtFQUNJLHVCQUFBO0VBRUEsY0FqUWpCO0FEOFBYO0FDTW9CO0VBQ0kseUJBclFiO0VBdVFhLFlBelFoQjtBRG9RUjtBQ1FnQjtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtBRFJwQjtBQ1NvQjtFQUNJLFVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBeFFwQixnQkEwUW9CO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxjQWxTYjtFQW1TYSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QURSeEI7QUNVNEI7RUFDSSxXQUFBO0FEUmhDO0FDV3dCO0VBQ0ksbURBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0FEVDVCO0FDWW9CO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUEvU3BCLGdDQWdUdUM7RUFFbkIsV0FBQTtFQTFTcEIsZ0JBNFNvQjtFQXhTcEIsVUF5U3FDO0VBdlNyQywwQkFBQTtFQXlTb0Isa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FESnhCO0FDS3dCO0VBOVNwQixVQStTeUM7RUE3U3pDLHdCQUFBO0FEMlNKO0FDS29CO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQWpVcEIsOEJBa1V1QztFQUVuQixVQUFBO0VBQ0EsV0FBQTtFQTdUcEIsZ0JBK1RvQjtFQUVBLHlCQWpWYjtBRG1WWDtBQ0NnQjtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0FEQXBCO0FDQ29CO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBRUEsNkJBQUE7RUFFQSxjQXZXYjtFQXdXYSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QURGeEI7QUNHd0I7RUFDSSxjQTlXakI7QUQ2V1g7QUNBd0I7RUFDSSxjQTlXakI7QUQ2V1g7QUNBd0I7RUFDSSxjQTlXakI7QUQ2V1g7QUNLZ0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQTlXaEIsNEJBK1dtQztFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQTFXaEIsZ0JBNFdnQjtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEQ3BCO0FDQW9CO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBREV4QjtBQ0FvQjtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXBZcEIsZ0NBcVl1QztFQUVuQixjQS9ZYjtFQWdaYSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBREl4QjtBQ0FZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQWpaWiw0QkFrWitCO0VBRW5CLFdBQUE7RUFDQSxZQUFBO0VBN1laLGdCQStZWTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FETWhCO0FDTGdCO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRE9wQjtBQ0xnQjtFQXJaWixZQXNaaUM7RUFwWmpDLHlCQUFBO0FENFpKO0FDTmdCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF6YWhCLGdDQTBhbUM7RUFFbkIsY0FwYlQ7RUFxYlMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QURVcEI7QUNOUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURNWjtBQ0hJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBcmNKLGdCQXVjSTtFQW5jSixVQW9jcUI7RUFsY3JCLDBCQUFBO0VBb2NJLHNCQUFBO0VBRUEsK0JBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRElSO0FDSFE7RUEzY0osVUE0Y3lCO0VBMWN6Qix3QkFBQTtFQTRjUSxXQUFBO0FES1o7QUNIUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0NBQUE7RUFFQSxjQTdlRDtFQThlQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURHWjtBQ0RRO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBREdaO0FDQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQXRmSiw4QkF1ZnVCO0VBRW5CLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBeGZKLGdCQTBmSTtFQXRmSixVQXVmcUI7RUFyZnJCLHdCQUFBO0VBdWZJLCtCQUFBO0VBRUEsNkJBQUE7QURNUjtBQ0xRO0VBNWZKLFVBNmZ5QjtFQTNmekIsMEJBQUE7QURtZ0JKO0FDTlE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURPWjtBQ0xRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0FETVo7QUNKUTtFQWxoQkosZ0JBeWhCUTtFQXJoQlIsVUFzaEJ5QjtFQXBoQnpCLHdCQUFBO0VBc2hCUSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRElaO0FDSFk7RUEvZ0JSLHNCQWdoQlk7RUExaEJaLFVBMmhCNkI7RUF6aEI3QiwwQkFBQTtBRG1pQko7QUNQUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0FEUVo7QUNOUTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsNkJBQUE7RUFFQSxZQTNrQko7RUE0a0JJLGVBQUE7QURHWjtBQ0ZZO0VBQ0ksY0Eza0JMO0FEK2tCWDtBQ0xZO0VBQ0ksY0Eza0JMO0FEK2tCWDtBQ0xZO0VBQ0ksY0Eza0JMO0FEK2tCWDtBQ0RnQjtFQUNJLFVBQUE7QURHcEI7QUNBWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBcGtCWixnQkFza0JZO0VBRUEseUJBeGxCTDtBRDRsQlg7QUNGWTtFQUNJLG1EQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBREloQjtBQ0RRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsNkJBQUE7RUFFQSxjQTdtQkQ7RUE4bUJDLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0dRO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FESlo7QUNLWTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBM25CWixnQ0E0bkIrQjtFQUVuQixZQXpvQlI7RUEwb0JRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FERGhCO0FDS0k7RUFDSSxnQ0FBQTtBREhSO0FDS0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUF2b0JKLGdCQXlvQkk7RUFyb0JKLFVBc29CcUI7RUFwb0JyQiwwQkFBQTtFQXNvQkksY0E1cEJHO0VBNnBCSCxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUREUjtBQ0VRO0VBNW9CSixVQTZvQnlCO0VBM29CekIsd0JBQUE7QUQ0b0JKO0FDQ1E7RUFFSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FEQVo7QUNFUTtFQUNJLGtCQUFBO0VBRUEsZUFBQTtBRERaO0FDR1E7RUFDSSxrQkFBQTtFQUVBLGVBQUE7QURGWjtBQ0lRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBcnFCUixnQkF1cUJRO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFFQSxjQWhzQkQ7RUFpc0JDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FERlo7QUNHWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUREaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L3VzZXItcHJvZmlsZS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi4tYXBwLXVzZXItcHJvZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDAwO1xuICBsZWZ0OiAyNSU7XG4gIHRvcDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZS1jb250YWluZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlLWNvbnRhaW5lcjpob3Zlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2UtY29udGFpbmVyOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZS1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCLvgadcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2VfZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L2RlZmF1bHQtdXNlci1wcm9maWxlLWltYWdlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0X21lZGljYWwtbW9kZS4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0IHtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm1fbWVkaWNhbC1tb2RlLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybSB7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmdfaXRlbS1pbnZhbGlkLCAuLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmdfbWVzc2FnZS1pbnZhbGlkIHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmdfaXRlbSB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nX21lc3NhZ2Uge1xuICB0b3A6IDIuNSU7XG4gIHJpZ2h0OiA1JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXdhcm5pbmc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjZjhiMmE2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1idXR0b25bZGlzYWJsZWRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0taW5wdXQge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMTAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0taW5wdXQ6Zm9jdXMgKyAuLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtLWlucHV0Ojotd2Via2l0LWF1dG9maWxsIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNTBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2QyZmZkMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2QyZmZkMCAhaW1wb3J0YW50O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbS1sYWJlbF9pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1tZXNzYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1tZXNzYWdlLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgcGFkZGluZzogMjBweCA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1tZXNzYWdlLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDAwO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYmFjazpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1iYWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwMDE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC40O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+RqVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2RvbmF0aW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZDJmZmQwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdF9pbWFnZS1tb2RlIHtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB6LWluZGV4OiAtMTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDI1JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZDJmZmQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlX2ltYWdlLW1vZGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWltYWdlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtdGl0bGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWltYWdlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1zd2l0Y2gtYnV0dG9uLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1yZXR1cm4tYnV0dG9uLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dCwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtZm9ybSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQtbGluZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXRpdGxlX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWltYWdlX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXN3aXRjaC1idXR0b25faW1hZ2UtbW9kZSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtcmV0dXJuLWJ1dHRvbl9pbWFnZS1tb2RlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dF9pbWFnZS1tb2RlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1mb3JtX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmVfaW1hZ2UtbW9kZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAtbXMtdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQ6Zm9jdXMgKyAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dC1saW5lIHtcbiAgd2lkdGg6IDg1JTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmUge1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQ6Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1MHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZDJmZmQwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZDJmZmQwICFpbXBvcnRhbnQ7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1zd2l0Y2gtYnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTVweCA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2QyZmZkMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtcmV0dXJuLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtcmV0dXJuLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvi6pcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY3VycmVudC1kb25hdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fc3RhcnQtZG9uYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbl9pbWFnZS1tb2RlIHtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi10aXRsZSwgLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi1zdWItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX3N0YXJ0LWRvbmF0aW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX3N0YXJ0LWRvbmF0aW9uLXN1Yi10aXRsZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi1idXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggNjVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2QyZmZkMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi1idXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kaG9uZXlEZXc6IHJnYmEoMjEwLCAyNTUsIDIwOCwgMSk7XHJcbiRhcHJpY290OiByZ2JhKDI0OCwgMTc4LCAxNjYsIDEpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogJGFyZ3M7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvdXNlci1wcm9maWxlLWJnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLi1hcHAtdXNlci1wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcblxyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGhvbmV5RGV3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC04O1xyXG5cclxuICAgIGNvbG9yOiAkaG9uZXlEZXc7XHJcbiAgICAmX19pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRob25leURldztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC40cyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZGVsYXkoMC4xcyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICZfZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvZGVmYXVsdC11c2VyLXByb2ZpbGUtaW1hZ2UuanBnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgICAgJi1saXN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbGlzdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgJl9tZWRpY2FsLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgJi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC0xMDAlLCAtNTAlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgICZfbWVkaWNhbC1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi13YXJuaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAmX2l0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgJl9tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi1pbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJl9tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDAlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMmFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFwcmljb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkaG9uZXlEZXc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRob25leURldztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvbmV5RGV3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRob25leURldztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYgKyAuLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1MHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICRob25leURldyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRob25leURldyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob25leURldztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICYtdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkaG9uZXlEZXc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaG9uZXlEZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ05vdG9TYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRob25leURldztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjQ2OVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZG9uYXRpb24tbGlzdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRob25leURldztcclxuXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgJl9pbWFnZS1tb2RlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkaG9uZXlEZXc7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NoYW5nZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGhvbmV5RGV3O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAmX2ltYWdlLW1vZGUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkaG9uZXlEZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgJi1pbWFnZSxcclxuICAgICAgICAmLXN3aXRjaC1idXR0b24sXHJcbiAgICAgICAgJi1yZXR1cm4tYnV0dG9uLFxyXG4gICAgICAgICYtaW5wdXQsXHJcbiAgICAgICAgJi1mb3JtLFxyXG4gICAgICAgICYtaW5wdXQtbGluZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICZfaW1hZ2UtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWRlbGF5KDAuNXMpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkaG9uZXlEZXc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAmICsgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob25leURldztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGhvbmV5RGV3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zd2l0Y2gtYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcmV0dXJuLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYyZWFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY3VycmVudC1kb25hdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkaG9uZXlEZXc7XHJcbiAgICB9XHJcbiAgICAmX19zdGFydC1kb25hdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgY29sb3I6ICRob25leURldztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJl9pbWFnZS1tb2RlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSxcclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDY1cHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJGhvbmV5RGV3O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
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
    /* harmony import */


    var src_app_pipes_user_list_format_user_profile_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pipes/user-list/format-user-profile-tree-amount.pipe */
    "./src/app/pipes/user-list/format-user-profile-tree-amount.pipe.ts");
    /* harmony import */


    var src_app_pipes_user_list_format_user_medical_points_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pipes/user-list/format-user-medical-points.pipe */
    "./src/app/pipes/user-list/format-user-medical-points.pipe.ts");
    /* harmony import */


    var src_app_pipes_user_list_format_user_age_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/user-list/format-user-age.pipe */
    "./src/app/pipes/user-list/format-user-age.pipe.ts");

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
        declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileDonationComponent"], src_app_pipes_user_list_format_user_profile_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatUserProfileTreeAmountPipe"], src_app_pipes_user_list_format_user_medical_points_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatUserMedicalPointsPipe"], src_app_pipes_user_list_format_user_age_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatUserAgePipe"]],
        imports: [_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileDonationComponent"], src_app_pipes_user_list_format_user_profile_tree_amount_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatUserProfileTreeAmountPipe"], src_app_pipes_user_list_format_user_medical_points_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatUserMedicalPointsPipe"], src_app_pipes_user_list_format_user_age_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatUserAgePipe"]],
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

  },

  /***/
  "./src/app/pipes/user-list/format-user-age.pipe.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pipes/user-list/format-user-age.pipe.ts ***!
    \*********************************************************/

  /*! exports provided: FormatUserAgePipe */

  /***/
  function srcAppPipesUserListFormatUserAgePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatUserAgePipe", function () {
      return FormatUserAgePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatUserAgePipe = /*#__PURE__*/function () {
      function FormatUserAgePipe() {
        _classCallCheck(this, FormatUserAgePipe);
      }

      _createClass(FormatUserAgePipe, [{
        key: "transform",
        value: function transform(userAge) {
          return "".concat(userAge, " y.o.");
        }
      }]);

      return FormatUserAgePipe;
    }();

    FormatUserAgePipe.ɵfac = function FormatUserAgePipe_Factory(t) {
      return new (t || FormatUserAgePipe)();
    };

    FormatUserAgePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatUserAge",
      type: FormatUserAgePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatUserAgePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatUserAge'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/user-list/format-user-medical-points.pipe.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pipes/user-list/format-user-medical-points.pipe.ts ***!
    \********************************************************************/

  /*! exports provided: FormatUserMedicalPointsPipe */

  /***/
  function srcAppPipesUserListFormatUserMedicalPointsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatUserMedicalPointsPipe", function () {
      return FormatUserMedicalPointsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatUserMedicalPointsPipe = /*#__PURE__*/function () {
      function FormatUserMedicalPointsPipe() {
        _classCallCheck(this, FormatUserMedicalPointsPipe);
      }

      _createClass(FormatUserMedicalPointsPipe, [{
        key: "transform",
        value: function transform(userMedicalPoints) {
          return "".concat(userMedicalPoints, "p");
        }
      }]);

      return FormatUserMedicalPointsPipe;
    }();

    FormatUserMedicalPointsPipe.ɵfac = function FormatUserMedicalPointsPipe_Factory(t) {
      return new (t || FormatUserMedicalPointsPipe)();
    };

    FormatUserMedicalPointsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatUserMedicalPoints",
      type: FormatUserMedicalPointsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatUserMedicalPointsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatUserMedicalPoints'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/user-list/format-user-profile-tree-amount.pipe.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pipes/user-list/format-user-profile-tree-amount.pipe.ts ***!
    \*************************************************************************/

  /*! exports provided: FormatUserProfileTreeAmountPipe */

  /***/
  function srcAppPipesUserListFormatUserProfileTreeAmountPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatUserProfileTreeAmountPipe", function () {
      return FormatUserProfileTreeAmountPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatUserProfileTreeAmountPipe = /*#__PURE__*/function () {
      function FormatUserProfileTreeAmountPipe() {
        _classCallCheck(this, FormatUserProfileTreeAmountPipe);
      }

      _createClass(FormatUserProfileTreeAmountPipe, [{
        key: "transform",
        value: function transform(value) {
          return String(value) + 'th';
        }
      }]);

      return FormatUserProfileTreeAmountPipe;
    }();

    FormatUserProfileTreeAmountPipe.ɵfac = function FormatUserProfileTreeAmountPipe_Factory(t) {
      return new (t || FormatUserProfileTreeAmountPipe)();
    };

    FormatUserProfileTreeAmountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatUserProfileTreeAmount",
      type: FormatUserProfileTreeAmountPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatUserProfileTreeAmountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatUserProfileTreeAmount'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-user-list-user-profile-user-profile-module-es5.js.map