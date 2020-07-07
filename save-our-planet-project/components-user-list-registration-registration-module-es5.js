function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-list-registration-registration-module"], {
  /***/
  "./src/app/components/user-list/registration/registration-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/user-list/registration/registration-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: RegistrationRoutingModule */

  /***/
  function srcAppComponentsUserListRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function () {
      return RegistrationRoutingModule;
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


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration/registration.component */
    "./src/app/components/user-list/registration/registration.component.ts");
    /* harmony import */


    var src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/guards/user-list/can-leave-registration.guard */
    "./src/app/guards/user-list/can-leave-registration.guard.ts");
    /* harmony import */


    var src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/guards/user-list/can-proceed-to-registration.guard */
    "./src/app/guards/user-list/can-proceed-to-registration.guard.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'mode/login-mode'
    }, {
      path: 'mode/:registrationMode',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"],
      canActivate: [src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_4__["CanProceedToRegistrationGuard"]],
      canDeactivate: [src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_3__["CanLeaveRegistrationGuard"]]
    }];

    var RegistrationRoutingModule = function RegistrationRoutingModule() {
      _classCallCheck(this, RegistrationRoutingModule);
    };

    RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RegistrationRoutingModule
    });
    RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RegistrationRoutingModule_Factory(t) {
        return new (t || RegistrationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
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
  "./src/app/components/user-list/registration/registration.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/user-list/registration/registration.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppComponentsUserListRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_user_list_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user-list/user */
    "./src/app/models/user-list/user.ts");
    /* harmony import */


    var src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/user-list/user-list.selectors */
    "./src/app/store/user-list/user-list.selectors.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/user-list/registration-type */
    "./src/app/models/user-list/registration-type.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/store/user-list/user-list.facade */
    "./src/app/store/user-list/user-list.facade.ts");

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(_store$, _router, _facadeUserListService, _activatedRoute) {
        _classCallCheck(this, RegistrationComponent);

        this._store$ = _store$;
        this._router = _router;
        this._facadeUserListService = _facadeUserListService;
        this._activatedRoute = _activatedRoute;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.initLoginForm();
        this.initRegistrateForm();
      }

      _createClass(RegistrationComponent, [{
        key: "initLoginForm",
        value: function initLoginForm() {
          this.myFormLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userNameValidator]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userSurnameValidator]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userPasswordValidator])
          });
        }
      }, {
        key: "initRegistrateForm",
        value: function initRegistrateForm() {
          this.myFormRegistrate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userNameValidator]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userSurnameValidator]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]),
            userAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userAgeValidator]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userPasswordValidator]),
            userRepeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userRepeatPasswordValidator])
          });
        }
      }, {
        key: "userNameValidator",
        value: function userNameValidator(control) {
          var currentUserName = control.value;
          var minNumberOfCharacters = 3;
          var maxNumberOfCharacters = 12;
          var isValidUserName = RegistrationComponent.isValidUserNameOrSurname(currentUserName, minNumberOfCharacters, maxNumberOfCharacters);

          if (isValidUserName) {
            return null;
          } else {
            return {
              userNameInputControlName: true
            };
          }
        }
      }, {
        key: "userSurnameValidator",
        value: function userSurnameValidator(control) {
          var currentUserSurname = control.value;
          var minNumberOfCharacters = 3;
          var maxNumberOfCharacters = 20;
          var isValidUserSurname = RegistrationComponent.isValidUserNameOrSurname(currentUserSurname, minNumberOfCharacters, maxNumberOfCharacters);

          if (isValidUserSurname) {
            return null;
          } else {
            return {
              userSurnameInputControlName: true
            };
          }
        }
      }, {
        key: "userAgeValidator",
        value: function userAgeValidator(control) {
          var currentUserAge = control.value;

          if (Boolean(currentUserAge) && !isNaN(currentUserAge)) {
            var minAge = 12;
            var maxAge = 150;
            var isValidUserAgeYearsOld = RegistrationComponent.isValidUserAgeYearsOld(currentUserAge, minAge, maxAge);

            if (isValidUserAgeYearsOld) {
              return null;
            } else {
              return {
                userAgeInputControlName: true
              };
            }
          } else {
            return {
              userAgeInputControlName: true
            };
          }
        }
      }, {
        key: "userPasswordValidator",
        value: function userPasswordValidator(control) {
          var currentUserPassword = control.value;
          var minNumberOfCharacters = 6;
          var maxNumberOfCharacters = 15;
          var isUserPasswordValidMatch = RegistrationComponent.isUserPasswordValidMatch(currentUserPassword);

          if (Boolean(currentUserPassword)) {
            if (isUserPasswordValidMatch && currentUserPassword.length >= minNumberOfCharacters && currentUserPassword.length <= maxNumberOfCharacters) {
              RegistrationComponent.enteredUserPassword = currentUserPassword;
              return null;
            } else {
              return {
                userPasswordInputControlName: true
              };
            }
          } else {
            return {
              userPasswordInputControlName: true
            };
          }
        }
      }, {
        key: "userRepeatPasswordValidator",
        value: function userRepeatPasswordValidator(control) {
          var currentUserPassword = RegistrationComponent.enteredUserPassword;
          var currentUserRepeatPassword = control.value;

          if (Boolean(currentUserPassword) && currentUserRepeatPassword === currentUserPassword) {
            return null;
          } else {
            return {
              userRepeatPasswordInputControlName: true
            };
          }
        }
      }, {
        key: "getNewUserId",
        value: function getNewUserId(newRegistrationUser) {
          var dash = '-';
          var firstLetterOfNameForId = newRegistrationUser.newUserName[0].toUpperCase();
          var firstLetterOfSurnameForId = newRegistrationUser.newUserSurname[0].toUpperCase();
          var defaultNewUserId = firstLetterOfNameForId + firstLetterOfSurnameForId + dash + String(newRegistrationUser.newUserAge);
          return defaultNewUserId;
        }
      }, {
        key: "getRegistrationFormValue",
        value: function getRegistrationFormValue() {
          var userAge = Number(this.myFormRegistrate.controls.userAge.value);
          var userName = this.myFormRegistrate.controls.userName.value;
          var userSurname = this.myFormRegistrate.controls.userSurname.value;
          var userPassword = this.myFormRegistrate.controls.userPassword.value;
          var userRepeatPassword = this.myFormRegistrate.controls.userRepeatPassword.value;
          var userEmail = this.myFormRegistrate.controls.userEmail.value;
          return {
            newUserName: userName,
            newUserSurname: userSurname,
            newUserEmail: userEmail,
            newUserAge: userAge,
            newUserPassword: userPassword,
            newUserRepeatPassword: userRepeatPassword
          };
        }
      }, {
        key: "isAnyValuesEnteredInRegistrationForm",
        value: function isAnyValuesEnteredInRegistrationForm() {
          var newRegistrationUser = this.getRegistrationFormValue();

          if (Boolean(newRegistrationUser.newUserAge) || Boolean(newRegistrationUser.newUserName) || Boolean(newRegistrationUser.newUserSurname) || Boolean(newRegistrationUser.newUserPassword) || Boolean(newRegistrationUser.newUserEmail)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this._registrationModeName = params.registrationMode;

            if (_this._registrationModeName === src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].RM) {
              _this.registrationMode = true;
            }
          });

          this._store$.select(src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject$)).subscribe(function (userList) {
            _this._userList = userList;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "switchRegistrationMode",
        value: function switchRegistrationMode() {
          var registrationModeAfterSwitch = this._registrationModeName === src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].LM ? src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].RM : src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].LM;

          this._router.navigate(['/registration', 'mode', registrationModeAfterSwitch]);

          this.registrationMode = !this.registrationMode;
        }
      }, {
        key: "login",
        value: function login() {
          var loginUserName = this.myFormLogin.controls.userName.value;
          var loginUserSurname = this.myFormLogin.controls.userSurname.value;
          var loginUserPassword = this.myFormLogin.controls.userPassword.value;
          var defaultUserLoginId = '1';
          var userLogsIn = new src_app_models_user_list_user__WEBPACK_IMPORTED_MODULE_2__["User"](defaultUserLoginId, loginUserName, loginUserSurname, loginUserPassword);

          var currentUser = this._userList.find(function (user) {
            return userLogsIn.loginEquals(user);
          });

          if (Boolean(currentUser)) {
            this._facadeUserListService.initUser(currentUser);

            this._router.navigate(['/user-profile']);
          } else {
            this.initLoginForm();
            this.myFormLogin.controls.userName.markAsTouched();
            this.myFormLogin.controls.userSurname.markAsTouched();
            this.myFormLogin.controls.userPassword.markAsTouched();
          }
        }
      }, {
        key: "registrate",
        value: function registrate() {
          var newRegistrationUser = this.getRegistrationFormValue();
          var newUserRegistrationDate = new Date();
          var defaultNewUserDonationList = null;
          var deafultNewUserCountry = null;
          var defaultNewUserMedicalPoints = 0;
          var defaultNewUserId = this.getNewUserId(newRegistrationUser);
          var defaultNewUser = new src_app_models_user_list_user__WEBPACK_IMPORTED_MODULE_2__["User"](defaultNewUserId, newRegistrationUser.newUserName, newRegistrationUser.newUserSurname, newRegistrationUser.newUserPassword, newRegistrationUser.newUserEmail, '', newRegistrationUser.newUserAge, newUserRegistrationDate, deafultNewUserCountry, defaultNewUserDonationList, defaultNewUserMedicalPoints);
          this._isUserRegistrated = true;

          this._facadeUserListService.initNewUser(defaultNewUser);

          this.initRegistrateForm();
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          var deactivateQuestion;
          deactivateQuestion = 'You filled in the form fields but did not registrate. Are you sure that you want to go from this page?';
          return !this._isUserRegistrated && this.isAnyValuesEnteredInRegistrationForm() ? confirm(deactivateQuestion) : true;
        }
      }], [{
        key: "validMatch",
        value: function validMatch(content) {
          var onlyLatinCharactersNumbersAndUnderscoreMatch = new RegExp('^[a-zA-Z_0-9]*$');
          return onlyLatinCharactersNumbersAndUnderscoreMatch.test(content) ? true : false;
        }
      }, {
        key: "isUserNameOrSurnameIncludesUnderscore",
        value: function isUserNameOrSurnameIncludesUnderscore(userNameOrSurname) {
          return Boolean(userNameOrSurname.includes('_')) ? true : false;
        }
      }, {
        key: "isValidUserNameOrSurnameNumberOfCharacters",
        value: function isValidUserNameOrSurnameNumberOfCharacters(userNameOrSurname, minNumbers, maxNumbers) {
          return userNameOrSurname.length >= minNumbers && userNameOrSurname.length <= maxNumbers ? true : false;
        }
      }, {
        key: "isUserNameOrSurnameIncludeNumbers",
        value: function isUserNameOrSurnameIncludeNumbers(userNameOrSurname) {
          return Boolean(userNameOrSurname.search(/\d/) >= 0) ? true : false;
        }
      }, {
        key: "isUserNameOrSurnameValidMatch",
        value: function isUserNameOrSurnameValidMatch(userNameOrSurname) {
          return RegistrationComponent.validMatch(userNameOrSurname);
        }
      }, {
        key: "isValidUserNameOrSurname",
        value: function isValidUserNameOrSurname(userNameOrSurname, minNumbers, maxNumbers) {
          if (Boolean(userNameOrSurname)) {
            var isContentIncludeNumbers = RegistrationComponent.isUserNameOrSurnameIncludeNumbers(userNameOrSurname);
            var isContentValidMatch = RegistrationComponent.isUserNameOrSurnameValidMatch(userNameOrSurname);
            var isValidNumberOfContentCharacters = RegistrationComponent.isValidUserNameOrSurnameNumberOfCharacters(userNameOrSurname, minNumbers, maxNumbers);
            var isContentIncludeUnderscore = RegistrationComponent.isUserNameOrSurnameIncludesUnderscore(userNameOrSurname);

            if (!isContentIncludeNumbers && isContentValidMatch && isValidNumberOfContentCharacters && !isContentIncludeUnderscore) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "isValidUserAgeYearsOld",
        value: function isValidUserAgeYearsOld(userAge, minAge, maxAge) {
          return userAge >= minAge && userAge <= maxAge ? true : false;
        }
      }, {
        key: "isUserPasswordValidMatch",
        value: function isUserPasswordValidMatch(userPassword) {
          return RegistrationComponent.validMatch(userPassword);
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 79,
      vars: 112,
      consts: [[1, "-app-registration"], [1, "-app-registration-form__top-decoration"], [1, "-app-registration-form", 3, "formGroup", "ngSubmit"], [1, "-app-registration-form__title"], [1, "-app-registration-form__item"], ["name", "name", "type", "text", "formControlName", "userName", "autocomplete", "off", 1, "-app-registration-form__item-input"], [1, "-app-registration-form__item-line"], [1, "-app-registration-form__item-label"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n            and without any characters and numbers", 1, "-app-registration-form__item-warning"], [1, "-app-registration-form__item-check"], ["name", "surname", "type", "text", "formControlName", "userSurname", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. Maximum number of characters from 3 to 20\n                and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["name", "password", "type", "password", "formControlName", "userPassword", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. User password must contain only numbers, characters and underscore\n                and password length must be in diapazon from 6 to 15 symbols", 1, "-app-registration-form__item-warning"], ["type", "submit", 1, "-app-registration-form__button", "-app-registration-form__button_login", 3, "disabled"], [1, "-app-registration-form__sub-title", 3, "click"], [1, "-app-registration-form__shape-button"], [1, "-app-registration-form__plus", 3, "click"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n                        and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["title", "Invalid value. Maximum number of characters from 3 to 20\n                        and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["name", "email", "type", "email", "formControlName", "userEmail", 1, "-app-registration-form__item-input"], ["title", "Invalid value. Example: egor@g.c", 1, "-app-registration-form__item-warning"], ["name", "age", "type", "text", "formControlName", "userAge", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. User age must not be more than 150 and less than 12 years old", 1, "-app-registration-form__item-warning"], ["title", "Invalid value. User password must contain only numbers, characters and underscore\n                        and password length must be in diapazon from 6 to 15 symbols", 1, "-app-registration-form__item-warning"], ["name", "repeatPassword", "type", "password", "formControlName", "userRepeatPassword", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. you should enter the same password", 1, "-app-registration-form__item-warning"], ["type", "submit", 1, "-app-registration-form__button", "-app-registration-form__button_registrate", 3, "disabled", "click"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_2_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Surname ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Go ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_h4_click_28_listener() {
            return ctx.switchRegistrationMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Are you not registrated? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_31_listener() {
            return ctx.switchRegistrationMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_32_listener() {
            return ctx.registrate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Registrate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Surname ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Age ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Repeat Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_77_listener() {
            return ctx.switchRegistrationMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__top-decoration_registration-mode", ctx.registrationMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form_not-login-mode", ctx.registrationMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myFormLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormLogin.controls["userName"].touched && ctx.myFormLogin.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_invisible", ctx.myFormLogin.controls["userName"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_login", !ctx.registrationMode)("-app-registration-form__item-warning_invalid", ctx.myFormLogin.controls["userName"].touched && ctx.myFormLogin.controls["userName"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_login", !ctx.registrationMode)("-app-registration-form__item-check_valid", ctx.myFormLogin.controls["userName"].touched && ctx.myFormLogin.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormLogin.controls["userSurname"].touched && ctx.myFormLogin.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_invisible", ctx.myFormLogin.controls["userSurname"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_login", !ctx.registrationMode)("-app-registration-form__item-warning_invalid", ctx.myFormLogin.controls["userSurname"].touched && ctx.myFormLogin.controls["userSurname"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_login", !ctx.registrationMode)("-app-registration-form__item-check_valid", ctx.myFormLogin.controls["userSurname"].touched && ctx.myFormLogin.controls["userSurname"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormLogin.controls["userPassword"].touched && ctx.myFormLogin.controls["userPassword"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_invisible", ctx.myFormLogin.controls["userPassword"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_login", !ctx.registrationMode)("-app-registration-form__item-warning_invalid", ctx.myFormLogin.controls["userPassword"].touched && ctx.myFormLogin.controls["userPassword"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_login", !ctx.registrationMode)("-app-registration-form__item-check_valid", ctx.myFormLogin.controls["userPassword"].touched && ctx.myFormLogin.controls["userPassword"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myFormLogin.controls["userName"].invalid || ctx.myFormLogin.controls["userSurname"].invalid || ctx.myFormLogin.controls["userPassword"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__shape-button_registration-mode", ctx.registrationMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__plus_registration-mode", ctx.registrationMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form_registrate", !ctx.registrationMode)("-app-registration-form_registration-mode", ctx.registrationMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myFormRegistrate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userName"].touched && ctx.myFormRegistrate.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userName"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userName"].touched && ctx.myFormRegistrate.controls["userName"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userName"].touched && ctx.myFormRegistrate.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userSurname"].touched && ctx.myFormRegistrate.controls["userSurname"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userSurname"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userSurname"].touched && ctx.myFormRegistrate.controls["userSurname"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userSurname"].touched && ctx.myFormRegistrate.controls["userSurname"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userEmail"].touched && ctx.myFormRegistrate.controls["userEmail"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userEmail"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userEmail"].touched && ctx.myFormRegistrate.controls["userEmail"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userEmail"].touched && ctx.myFormRegistrate.controls["userEmail"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userAge"].touched && ctx.myFormRegistrate.controls["userAge"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userAge"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userAge"].touched && ctx.myFormRegistrate.controls["userAge"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userAge"].touched && ctx.myFormRegistrate.controls["userAge"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userPassword"].touched && ctx.myFormRegistrate.controls["userPassword"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userPassword"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userPassword"].touched && ctx.myFormRegistrate.controls["userPassword"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userPassword"].touched && ctx.myFormRegistrate.controls["userPassword"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-line_valid", ctx.myFormRegistrate.controls["userRepeatPassword"].touched && ctx.myFormRegistrate.controls["userRepeatPassword"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-label_registration-mode", ctx.registrationMode)("-app-registration-form__item-label_invisible", ctx.myFormRegistrate.controls["userRepeatPassword"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-warning_invalid", ctx.myFormRegistrate.controls["userRepeatPassword"].touched && ctx.myFormRegistrate.controls["userRepeatPassword"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-registration-form__item-check_valid", ctx.myFormRegistrate.controls["userRepeatPassword"].touched && ctx.myFormRegistrate.controls["userRepeatPassword"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myFormRegistrate.controls["userName"].invalid || ctx.myFormRegistrate.controls["userSurname"].invalid || ctx.myFormRegistrate.controls["userEmail"].invalid || ctx.myFormRegistrate.controls["userAge"].invalid || ctx.myFormRegistrate.controls["userPassword"].invalid || ctx.myFormRegistrate.controls["userRepeatPassword"].invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-registration-bg.jpg');\n  background-size: cover;\n}\n@-webkit-keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@-webkit-keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    display: block;\n  }\n}\n@keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    display: block;\n  }\n}\n.-app-registration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 650px;\n}\n.-app-registration-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%) scale(1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 60px 50px 40px 50px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n}\n.-app-registration-form_registrate[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%] {\n  background-color: #ffd4ad;\n  color: black;\n  -webkit-animation: 0.4s blinkRegistration forwards 1s;\n  animation: 0.4s blinkRegistration forwards 1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%]::before {\n  left: -49px;\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%], .-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__button[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  color: black;\n}\n.-app-registration-form_not-login-mode[_ngcontent-%COMP%] {\n  transform: translate(0%, -2.5%) scale(0.95);\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.-app-registration-form__top-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: -15px;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(1);\n  width: 95%;\n  height: 20px;\n  transition: 0.2s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 20px 20px 0px 0px;\n  background: rgba(255, 255, 255, 0.6);\n}\n.-app-registration-form__top-decoration_registration-mode[_ngcontent-%COMP%] {\n  transform: translate(-50%, -2%) scale(0.95);\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.-app-registration-form__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: #ffd4ad;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 30px;\n}\n.-app-registration-form__title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50px;\n  transform: translate(-50%, -50%);\n  width: 4px;\n  height: 120%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-registration-form__item-check_valid.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-check.-app-registration-form__item-check_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-registration-form__item-warning_invalid.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-warning.-app-registration-form__item-warning_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  filter: alpha(opacity=100);\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.-app-registration-form__item-label_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form__item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-registration-form__item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    + .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    ~ .-app-registration-form__item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-registration-form__button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: none;\n  border: 2px solid white;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  background: transparent;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);\n}\n.-app-registration-form__button_registrate[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: #e2965d;\n}\n.-app-registration-form__button_registrate[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid black;\n  background-color: transparent;\n  color: black;\n}\n.-app-registration-form__button_login[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #e2965d;\n}\n.-app-registration-form__button_login[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid white;\n  background-color: transparent;\n  color: white;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n  font-size: 22px;\n}\n.-app-registration-form__button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  box-shadow: none;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  color: #ffd4ad;\n  letter-spacing: 2px;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -40%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 110%;\n  height: 2px;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  top: 7%;\n  right: 0%;\n  transform: translate(50%, 10px);\n  width: 130px;\n  height: 130px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button_registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  -webkit-animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 7;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  width: 65px;\n  height: 65px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]:hover::before {\n  font-size: 34px;\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.8s;\n  top: 10%;\n  left: 90%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: black;\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3lDaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsaURBQUE7RUFDQSxzQkFBQTtBRHpDSjtBQzZDSTtFQTBCQTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURwRU47RUNzRUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VEckVOO0FBQ0Y7QUM0Q0k7RUFjQTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURwQk47RUNzQkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VEckJOO0FBQ0Y7QUNoQkk7RUF5Q0E7SUEzREEsVUE0RHFCO0lBMURyQix3QkFBQTtFRHFDRjtFQ3VCRTtJQTlEQSxVQStEcUI7SUE3RHJCLDBCQUFBO0lBOERJLGNBQUE7RURwQk47QUFDRjtBQ2ZJO0VBNkJBO0lBM0RBLFVBNERxQjtJQTFEckIsd0JBQUE7RURpRkY7RUNyQkU7SUE5REEsVUErRHFCO0lBN0RyQiwwQkFBQTtJQThESSxjQUFBO0VEd0JOO0FBQ0Y7QUNyQkE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FEc0JKO0FDckJJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQWhHSixxQ0FpR3VCO0VBRW5CLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFuR0osZ0JBcUdJO0VBekZKLFVBMEZxQjtFQXhGckIsMEJBQUE7RUEwRkksbUJBQUE7RUFDQSwyQ0FBQTtFQUVBLDhCQWhJVTtFQWtJVixZQXJJQTtBRCtKUjtBQ3pCUTtFQUNJLGFBQUE7QUQyQlo7QUN6QlE7RUFDSSx5QkFuSUc7RUFxSUgsWUExSUo7RUFzRUoscURBQUE7RUFJQSw2Q0FBQTtFQXhDQSxVQW9JeUI7RUFsSXpCLHdCQUFBO0FEdUlKO0FDOUJvQjtFQUNJLFdBQUE7RUFFQSx1QkFoSmhCO0FEK0tSO0FDNUJnQjtFQUVJLFlBckpaO0FEa0xSO0FDekJnQjtFQUNJLFlBMUpaO0FEcUxSO0FDekJnQjtFQUNJLHVCQTdKWjtBRHdMUjtBQ3hCWTtFQUNJLHVCQUFBO0VBRUEsWUFuS1I7QUQ0TFI7QUNwQlE7RUExSkosMkNBMkoyQjtFQXZJM0IsWUF3SXlCO0VBdEl6Qix5QkFBQTtBRGlLSjtBQ3pCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBbEtSLHVDQW1LMkI7RUFFbkIsVUFBQTtFQUNBLFlBQUE7RUE5SlIsZ0JBZ0tRO0VBcEpSLFVBcUp5QjtFQW5KekIsMEJBQUE7RUFxSlEsZ0NBQUE7RUFFQSxvQ0E1TE07QUQ0TmxCO0FDL0JZO0VBOUtSLDJDQStLK0I7RUEzSi9CLFlBNEo2QjtFQTFKN0IseUJBQUE7QURnTUo7QUNuQ1E7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFFQSxjQWpNRztFQWtNSCx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRG1DWjtBQ2xDWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBak1aLGdDQWtNK0I7RUFFbkIsVUFBQTtFQUNBLFlBQUE7RUFFQSx5QkFoTkQ7QURxUGY7QUNsQ1E7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEbUNaO0FDbENZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFuTlosOEJBb04rQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQS9NWixnQkFpTlk7RUFDQSxlQUFBO0VBdE1aLFVBdU02QjtFQXJNN0Isd0JBQUE7RUF1TVksYUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBRHlDaEI7QUN2Q2dCO0VBOU1aLFVBK01pQztFQTdNakMsMEJBQUE7RUErTWdCLGFBQUE7QUR5Q3BCO0FDeENvQjtFQUNJLGFBQUE7QUQwQ3hCO0FDdkNnQjtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUR5Q3BCO0FDdENvQjtFQUNJLGNBdlBkO0FEK1JWO0FDckNnQjtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXhQaEIsZ0NBeVBtQztFQUVuQixjQWxRQTtFQW1RQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRHlDcEI7QUN0Q1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXJRWiw4QkFzUStCO0VBRW5CLFdBQUE7RUFDQSxZQUFBO0VBalFaLGdCQW1RWTtFQUNBLGVBQUE7RUF4UFosVUF5UDZCO0VBdlA3Qix3QkFBQTtFQXlQWSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FENkNoQjtBQzVDZ0I7RUEvUFosVUFnUWlDO0VBOVBqQywwQkFBQTtFQWdRZ0IsYUFBQTtBRDhDcEI7QUM3Q29CO0VBQ0ksYUFBQTtBRCtDeEI7QUM1Q2dCO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRDhDcEI7QUMzQ29CO0VBQ0ksY0F4U2Q7QURxVlY7QUMxQ2dCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBelNoQixnQ0EwU21DO0VBRW5CLGNBblRBO0VBb1RBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEOENwQjtBQzNDWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBdFRaLDhCQXVUK0I7RUEvUy9CLDhDQWtUWTtFQXRTWixVQXVTNkI7RUFyUzdCLDBCQUFBO0VBdVNZLHFCQUFBO0VBQ0EsZ0JBQUE7QURtRGhCO0FDbERnQjtFQUNJLFlBOVVaO0FEa1lSO0FDbERnQjtFQTlTWixVQStTaUM7RUE3U2pDLHdCQUFBO0FEa1dKO0FDbERZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBcFVaLDhDQXNVWTtFQUVBLHlCQXpWRDtBRDhZZjtBQ3BEZ0I7RUFDSSxXQUFBO0FEc0RwQjtBQ25EWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBelZaLDhCQTBWK0I7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUFyVlosZ0JBdVZZO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFFQSxZQXZYUjtFQXdYUSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRHdEaEI7QUN0RG9CO0VBQ0ksV0FBQTtBRHdEeEI7QUN0RG9CO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFqWHBCLDhCQWtYdUM7RUE5VnZDLFVBZ1dxQztFQTlWckMsMEJBQUE7QUQwWko7QUN2RFE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBcFhSLGdCQXNYUTtFQUNBLGVBQUE7RUEzV1IsVUE0V3lCO0VBMVd6QiwwQkFBQTtFQTRXUSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUVBLHVCQUFBO0VBRUEsWUF4Wko7RUF5WkkseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDBEWjtBQ3pEWTtFQUNJLDJDQUFBO0FEMkRoQjtBQ3ZEb0I7RUFDSSx5QkFBQTtFQUVBLHlCQTVaSjtBRG9kcEI7QUNwRG9CO0VBQ0ksdUJBQUE7RUFFQSw2QkFBQTtFQUVBLFlBNWFoQjtBRGdlUjtBQzlDb0I7RUFDSSx5QkFBQTtFQUVBLG9DQWpiTjtFQW1iTSxjQWhiSjtBRDhkcEI7QUMxQ29CO0VBQ0ksdUJBQUE7RUFFQSw2QkFBQTtFQUVBLFlBbGNoQjtBRDRlUjtBQ3RDWTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFFQSxlQUFBO0FEdUNoQjtBQ3JDWTtFQUNJLGVBQUE7RUF4YVosWUF5YTZCO0VBdmE3Qix5QkFBQTtFQXlhWSxnQkFBQTtBRHVDaEI7QUNwQ1E7RUFDSSxrQkFBQTtFQUVBLGVBQUE7RUFFQSxjQWhkRztFQWlkSCxtQkFBQTtBRG9DWjtBQ25DWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBOWNaLDhCQStjK0I7RUFFbkIsV0FBQTtFQUNBLFdBQUE7RUFFQSx5QkE3ZEQ7QURtZ0JmO0FDbkNRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUEzZFIsK0JBNGQyQjtFQUVuQixZQUFBO0VBQ0EsYUFBQTtFQXZkUiw4Q0F5ZFE7RUFFQSxrQkFBQTtFQUVBLHlCQTllRztBRHVoQmY7QUN4Q1k7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQXhlWiwrQkF5ZStCO0VBamIvQixtRUFBQTtFQUlBLDJEQUFBO0VBZ2JZLDJDQUFBO0FEaURoQjtBQzlDUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbmZSLDZDQW9mMkI7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQXRmUiw4Q0F3ZlE7QURtRFo7QUNqRGdCO0VBQ0ksZUFBQTtBRG1EcEI7QUNoRFk7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTNnQlosZ0NBNGdCK0I7RUFFbkIsWUE5aEJSO0VBK2hCUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRG9EaEI7QUNsRFk7RUFuZ0JSLHNCQW9nQlk7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQXZoQlosOENBd2hCK0I7QUQyRG5DO0FDMURnQjtFQXpnQlosc0JBMGdCZ0I7RUFDQSxZQXppQlo7QUR5bUJSO0FDN0RZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFoaUJaLDZDQWlpQitCO0FEbUVuQztBQ2xFZ0I7RUFsaEJaLHNCQW1oQmdCO0VBQ0EsWUFwakJaO0FENG5CUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvdXNlci1yZWdpc3RyYXRpb24tYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmxpbmtSZWdpc3RyYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgYmxpbmtSZWdpc3RyYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5rUmVnaXN0cmF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbiAgY29sb3I6IGJsYWNrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbiAgLW1vei1hbmltYXRpb246IDAuNHMgYmxpbmtSZWdpc3RyYXRpb24gZm9yd2FyZHMgMXM7XG4gIC1tcy1hbmltYXRpb246IDAuNHMgYmxpbmtSZWdpc3RyYXRpb24gZm9yd2FyZHMgMXM7XG4gIC1vLWFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbiAgYW5pbWF0aW9uOiAwLjRzIGJsaW5rUmVnaXN0cmF0aW9uIGZvcndhcmRzIDFzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdGl0bGU6OmJlZm9yZSB7XG4gIGxlZnQ6IC00OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZSwgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3N1Yi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9ub3QtbG9naW4tbW9kZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgb3BhY2l0eTogMC45O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RvcC1kZWNvcmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190b3AtZGVjb3JhdGlvbl9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMiUpIHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgb3BhY2l0eTogMC45O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmQ0YWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVja192YWxpZCB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB6LWluZGV4OiA5MDAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2tfdmFsaWQuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcbiAgei1pbmRleDogOTAwMTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjay4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX2xvZ2luOjpiZWZvcmUge1xuICBjb2xvcjogI2Y0YTY2OTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2UyOTY1ZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2ludmFsaWQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgei1pbmRleDogOTAwMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmdfaW52YWxpZC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19sb2dpbjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmNGE2Njk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2UyOTY1ZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1vLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbF9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsX2ludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGluZV92YWxpZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dDpmb2N1cyArIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0OmZvY3VzIH4gLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWwge1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDI1cHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbl9yZWdpc3RyYXRlOmhvdmVyLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjk2NWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjk2NWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX3JlZ2lzdHJhdGVbZGlzYWJsZWRdOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX2xvZ2luOmhvdmVyLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjk2NWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICNlMjk2NWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX2xvZ2luW2Rpc2FibGVkXTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuNztcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zdWItdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmQ0YWQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc3ViLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc2hhcGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA2O1xuICB0b3A6IDclO1xuICByaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1vLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zaGFwZS1idXR0b25fcmVnaXN0cmF0aW9uLW1vZGUge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzO1xuICAtbW96LWFuaW1hdGlvbjogMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzO1xuICAtbXMtYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XG4gIC1vLWFuaW1hdGlvbjogMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzO1xuICBhbmltYXRpb246IDAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA3O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1vei10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzOmhvdmVyOjpiZWZvcmUge1xuICBmb250LXNpemU6IDM0cHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgadcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogOTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19yZWdpc3RyYXRpb24tbW9kZTo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19mcm9tLXJlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzX2Zyb20tcmVnaXN0cmF0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtbXMtdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgY29sb3I6IHdoaXRlO1xufSIsIiR3aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuJHdoaXRlT3BhY2l0eTAtNjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4kYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiRibGFja09wYWNpdHkwLTg6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJGJsYWNrT3BhY2l0eTAtNjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kYmxhY2tPcGFjaXR5MC00OiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiRibGFja09wYWNpdHkwLTI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJHBlYWNoQ3JhaW9sYTogcmdiYSgyNTUsIDIxMiwgMTczLCAxKTtcclxuJHJlZFNhbmQ6IHJnYmEoMjQ0LCAxNjYsIDEwNSwgMSk7XHJcbiRmaXJlU2llbm5hQ3JhaW9sYTogcmdiYSgyMjYsIDE1MCwgOTMsIDEpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvdXNlci1yZWdpc3RyYXRpb24tYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gIFxyXG4gICAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH0gIFxyXG4gICAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uKCRzdHIpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW1vei1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtbXMtYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW8tYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgYW5pbWF0aW9uOiAjeyRzdHJ9OyAgICAgIFxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUpIHtcclxuICAgIDAlIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhibGlua1JlZ2lzdHJhdGlvbikge1xyXG4gICAgMCUge1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uLWFwcC1yZWdpc3RyYXRpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAmLWZvcm0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkYmxhY2tPcGFjaXR5MC02O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2tPcGFjaXR5MC04O1xyXG5cclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICZfcmVnaXN0cmF0ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVhY2hDcmFpb2xhO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgJiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTQ5cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9fdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcycpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX25vdC1sb2dpbi1tb2RlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190b3AtZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSkpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVhY2hDcmFpb2xhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAmLWNoZWNrIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICZfdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZFNhbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZmlyZVNpZW5uYUNyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtd2FybmluZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICZfaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZFNhbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjEyYVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZmlyZVNpZW5uYUNyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAmX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAmICsgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmIH4gLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0ZSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRmaXJlU2llbm5hQ3JhaW9sYTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaXJlU2llbm5hQ3JhaW9sYTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRmaXJlU2llbm5hQ3JhaW9sYTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZpcmVTaWVubmFDcmFpb2xhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTQwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc2hhcGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICB0b3A6IDclO1xyXG4gICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoNTAlLCAxMHB4KSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcycpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRibGFja09wYWNpdHkwLTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZykpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSk7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZGVsYXkoMC44cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWRlbGF5KDAuOHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9mcm9tLXJlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZykpO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWRlbGF5KDAuOHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceUserList"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-list/registration/registration.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/user-list/registration/registration.module.ts ***!
    \**************************************************************************/

  /*! exports provided: RegistrationModule */

  /***/
  function srcAppComponentsUserListRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationModule", function () {
      return RegistrationModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration/registration.component */
    "./src/app/components/user-list/registration/registration.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/components/user-list/registration/registration-routing.module.ts");
    /* harmony import */


    var src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/guards/user-list/can-leave-registration.guard */
    "./src/app/guards/user-list/can-leave-registration.guard.ts");
    /* harmony import */


    var src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/guards/user-list/can-proceed-to-registration.guard */
    "./src/app/guards/user-list/can-proceed-to-registration.guard.ts");

    var RegistrationModule = function RegistrationModule() {
      _classCallCheck(this, RegistrationModule);
    };

    RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RegistrationModule,
      bootstrap: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]]
    });
    RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RegistrationModule_Factory(t) {
        return new (t || RegistrationModule)();
      },
      providers: [src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToRegistrationGuard"], src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__["CanLeaveRegistrationGuard"]],
      imports: [[_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationModule, {
        declarations: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]],
        imports: [_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]],
          imports: [_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToRegistrationGuard"], src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__["CanLeaveRegistrationGuard"]],
          bootstrap: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/user-list/can-leave-registration.guard.ts":
  /*!******************************************************************!*\
    !*** ./src/app/guards/user-list/can-leave-registration.guard.ts ***!
    \******************************************************************/

  /*! exports provided: CanLeaveRegistrationGuard */

  /***/
  function srcAppGuardsUserListCanLeaveRegistrationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanLeaveRegistrationGuard", function () {
      return CanLeaveRegistrationGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanLeaveRegistrationGuard = /*#__PURE__*/function () {
      function CanLeaveRegistrationGuard() {
        _classCallCheck(this, CanLeaveRegistrationGuard);
      }

      _createClass(CanLeaveRegistrationGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return CanLeaveRegistrationGuard;
    }();

    CanLeaveRegistrationGuard.ɵfac = function CanLeaveRegistrationGuard_Factory(t) {
      return new (t || CanLeaveRegistrationGuard)();
    };

    CanLeaveRegistrationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanLeaveRegistrationGuard,
      factory: CanLeaveRegistrationGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveRegistrationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/user-list/can-proceed-to-registration.guard.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/guards/user-list/can-proceed-to-registration.guard.ts ***!
    \***********************************************************************/

  /*! exports provided: CanProceedToRegistrationGuard */

  /***/
  function srcAppGuardsUserListCanProceedToRegistrationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToRegistrationGuard", function () {
      return CanProceedToRegistrationGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/user-list/registration-type */
    "./src/app/models/user-list/registration-type.ts");

    var CanProceedToRegistrationGuard = /*#__PURE__*/function () {
      function CanProceedToRegistrationGuard() {
        _classCallCheck(this, CanProceedToRegistrationGuard);
      }

      _createClass(CanProceedToRegistrationGuard, [{
        key: "canActivate",
        value: function canActivate(next) {
          var currentRegistrationMode = next.params.registrationMode;

          if (currentRegistrationMode !== _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__["RegistrationType"].RM && currentRegistrationMode !== _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__["RegistrationType"].LM) {
            var errorMessage = "This mode (".concat(currentRegistrationMode, ") does not exist, try registration-mode or login-mode");
            throw new Error(errorMessage);
          }

          return true;
        }
      }]);

      return CanProceedToRegistrationGuard;
    }();

    CanProceedToRegistrationGuard.ɵfac = function CanProceedToRegistrationGuard_Factory(t) {
      return new (t || CanProceedToRegistrationGuard)();
    };

    CanProceedToRegistrationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToRegistrationGuard,
      factory: CanProceedToRegistrationGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToRegistrationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/user-list/registration-type.ts":
  /*!*******************************************************!*\
    !*** ./src/app/models/user-list/registration-type.ts ***!
    \*******************************************************/

  /*! exports provided: RegistrationType */

  /***/
  function srcAppModelsUserListRegistrationTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationType", function () {
      return RegistrationType;
    });

    var RegistrationType;

    (function (RegistrationType) {
      RegistrationType["LM"] = "login-mode";
      RegistrationType["RM"] = "registration-mode";
    })(RegistrationType || (RegistrationType = {}));
    /***/

  }
}]);
//# sourceMappingURL=components-user-list-registration-registration-module-es5.js.map