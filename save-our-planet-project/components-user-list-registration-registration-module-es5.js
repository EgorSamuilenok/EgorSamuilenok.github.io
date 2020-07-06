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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-registration-bg.jpg');\n  background-size: cover;\n}\n@-webkit-keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@-webkit-keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n@keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n.-app-registration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 650px;\n}\n.-app-registration-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 60px 50px 40px 50px;\n  transform: translate(0%, 0%) scale(1);\n  -webkit-transform: translate(0%, 0%) scale(1);\n  -ms-transform: translate(0%, 0%) scale(1);\n  opacity: 1;\n  transition: 0.2s;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n}\n.-app-registration-form_registrate[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #ffd4ad;\n  opacity: 0;\n  -webkit-animation: 0.4s blinkRegistration forwards 1s;\n          animation: 0.4s blinkRegistration forwards 1s;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%]::before {\n  left: -49px;\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%], .-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__button[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  color: black;\n}\n.-app-registration-form_not-login-mode[_ngcontent-%COMP%] {\n  transform: translate(0%, -2.5%) scale(0.95);\n  -webkit-transform: translate(0%, -2.5%) scale(0.95);\n  -ms-transform: translate(0%, -2.5%) scale(0.95);\n  opacity: 0.9;\n}\n.-app-registration-form__top-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: -15px;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(1);\n  -webkit-transform: translate(-50%, 0%) scale(1);\n  -ms-transform: translate(-50%, 0%) scale(1);\n  opacity: 1;\n  transition: 0.2s;\n  width: 95%;\n  height: 20px;\n  border-radius: 20px 20px 0px 0px;\n  background: rgba(255, 255, 255, 0.6);\n}\n.-app-registration-form__top-decoration_registration-mode[_ngcontent-%COMP%] {\n  transform: translate(-50%, -2%) scale(0.95);\n  -webkit-transform: translate(-50%, -2%) scale(0.95);\n  -ms-transform: translate(-50%, -2%) scale(0.95);\n  opacity: 0.9;\n}\n.-app-registration-form__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: #ffd4ad;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 30px;\n}\n.-app-registration-form__title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50px;\n  transform: translate(-50%, -50%);\n  width: 4px;\n  height: 120%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 9000;\n}\n.-app-registration-form__item-check_valid.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-check.-app-registration-form__item-check_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 9000;\n}\n.-app-registration-form__item-warning_invalid.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-warning.-app-registration-form__item-warning_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-registration-form__item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n}\n.-app-registration-form__item-label_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form__item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-registration-form__item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    + .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    ~ .-app-registration-form__item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n}\n.-app-registration-form__button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  opacity: 1;\n  cursor: pointer;\n  outline: none;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);\n}\n.-app-registration-form__button_registrate[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: #e2965d;\n}\n.-app-registration-form__button_registrate[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid black;\n  background-color: transparent;\n  color: black;\n}\n.-app-registration-form__button_login[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #e2965d;\n}\n.-app-registration-form__button_login[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid white;\n  background-color: transparent;\n  color: white;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n  font-size: 22px;\n}\n.-app-registration-form__button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: default;\n  box-shadow: none;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  color: #ffd4ad;\n  letter-spacing: 2px;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -40%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 110%;\n  height: 2px;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  top: 7%;\n  right: 0%;\n  transform: translate(50%, 10px);\n  width: 130px;\n  height: 130px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button_registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  -webkit-animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n          animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 7;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  width: 65px;\n  height: 65px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]:hover::before {\n  font-size: 34px;\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.8s;\n  top: 10%;\n  left: 90%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: black;\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSxpREFBQTtFQUNBLHNCQUFBO0FEQUo7QUNHQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFFQSxrQkFBQTtFREROO0VDR0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VERk47QUFDRjtBQ1ZBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUVBLGtCQUFBO0VERE47RUNHRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBRUEsbUJBQUE7RURGTjtBQUNGO0FDS0E7RUFDSTtJQUNJLFVBQUE7RURITjtFQ0tFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RURITjtBQUNGO0FDSkE7RUFDSTtJQUNJLFVBQUE7RURITjtFQ0tFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RURITjtBQUNGO0FDTUE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FETEo7QUNNSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtFQUVBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsMkNBQUE7RUFDQSxtQkFBQTtFQUVBLDhCQUFBO0VBRUEsWUFBQTtBRFpSO0FDYVE7RUFDSSxhQUFBO0FEWFo7QUNhUTtFQUNJLFlBQUE7RUFFQSx5QkFBQTtFQTZCQSxVQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBRHhDWjtBQ2NvQjtFQUNJLFdBQUE7RUFFQSx1QkFBQTtBRGJ4QjtBQ2dCZ0I7RUFFSSxZQUFBO0FEZnBCO0FDbUJnQjtFQUNJLFlBQUE7QURqQnBCO0FDbUJnQjtFQUNJLHVCQUFBO0FEakJwQjtBQ29CWTtFQUNJLHVCQUFBO0VBRUEsWUFBQTtBRG5CaEI7QUN5QlE7RUFDSSwyQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FEdkJaO0FDeUJRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGdDQUFBO0VBRUEsb0NBQUE7QUQzQlo7QUM0Qlk7RUFDSSwyQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FEMUJoQjtBQzZCUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRDdCWjtBQzhCWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0FEL0JoQjtBQ2tDUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QURqQ1o7QUNrQ1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBRHBDaEI7QUNzQ2dCO0VBQ0ksVUFBQTtFQUVBLGFBQUE7QURyQ3BCO0FDc0NvQjtFQUNJLGFBQUE7QURwQ3hCO0FDdUNnQjtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QURyQ3BCO0FDd0NvQjtFQUNJLGNBQUE7QUR0Q3hCO0FDeUNnQjtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEekNwQjtBQzRDWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEOUNoQjtBQ2dEZ0I7RUFDSSxVQUFBO0VBRUEsYUFBQTtBRC9DcEI7QUNnRG9CO0VBQ0ksYUFBQTtBRDlDeEI7QUNpRGdCO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRC9DcEI7QUNrRG9CO0VBQ0ksY0FBQTtBRGhEeEI7QUNtRGdCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxjQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURuRHBCO0FDc0RZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUVBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLHFCQUFBO0FEdERoQjtBQ3VEZ0I7RUFDSSxZQUFBO0FEckRwQjtBQ3VEZ0I7RUFDSSxVQUFBO0FEckRwQjtBQ3dEWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxrREFBQTtFQUVBLHlCQUFBO0FEekRoQjtBQzBEZ0I7RUFDSSxXQUFBO0FEeERwQjtBQzJEWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFFQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUQ5RGhCO0FDZ0VvQjtFQUNJLFdBQUE7QUQ5RHhCO0FDZ0VvQjtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFFQSxVQUFBO0FEL0R4QjtBQ29FUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUR2RVo7QUN3RVk7RUFDSSwyQ0FBQTtBRHRFaEI7QUMwRW9CO0VBQ0kseUJBQUE7RUFFQSx5QkFBQTtBRHpFeEI7QUM2RW9CO0VBQ0ksdUJBQUE7RUFFQSw2QkFBQTtFQUVBLFlBQUE7QUQ3RXhCO0FDbUZvQjtFQUNJLHlCQUFBO0VBRUEsb0NBQUE7RUFFQSxjQUFBO0FEbkZ4QjtBQ3VGb0I7RUFDSSx1QkFBQTtFQUVBLDZCQUFBO0VBRUEsWUFBQTtBRHZGeEI7QUMyRlk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBRHpGaEI7QUMyRlk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0FEMUZoQjtBQzZGUTtFQUNJLGtCQUFBO0VBRUEsZUFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtBRDdGWjtBQzhGWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0FEL0ZoQjtBQ2tHUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxrREFBQTtFQUVBLGtCQUFBO0VBRUEseUJBQUE7QURwR1o7QUNxR1k7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBRUEsbUVBQUE7VUFBQSwyREFBQTtFQUNBLDJDQUFBO0FEcEdoQjtBQ3VHUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsOENBQUE7RUFDQSxzREFBQTtFQUNBLGtEQUFBO0FEekdaO0FDMkdnQjtFQUNJLGVBQUE7QUR6R3BCO0FDNEdZO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRDVHaEI7QUM4R1k7RUFDSSxzQkFBQTtFQUVBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOENBQUE7QUQ3R2hCO0FDOEdnQjtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBRDVHcEI7QUMrR1k7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0FEN0doQjtBQzhHZ0I7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUQ1R3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC91c2VyLXJlZ2lzdHJhdGlvbi1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBrZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmxpbmtSZWdpc3RyYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uLWFwcC1yZWdpc3RyYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZTo6YmVmb3JlIHtcbiAgbGVmdDogLTQ5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RpdGxlLCAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc3ViLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX25vdC1sb2dpbi1tb2RlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgb3BhY2l0eTogMC45O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RvcC1kZWNvcmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190b3AtZGVjb3JhdGlvbl9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZkNGFkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC01MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA0NSU7XG4gIHJpZ2h0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX3ZhbGlkIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogOTAwMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX3ZhbGlkLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2s6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2suLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVja19sb2dpbjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmNGE2Njk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgIxcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNlMjk2NWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA0NSU7XG4gIHJpZ2h0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmdfaW52YWxpZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDkwMDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2ludmFsaWQuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICB6LWluZGV4OiA5MDAxO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZy4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmdfbG9naW46OmJlZm9yZSB7XG4gIGNvbG9yOiAjZjRhNjY5O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhKpcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNlMjk2NWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbF9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsX2ludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lX3ZhbGlkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0OmZvY3VzICsgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQ6Zm9jdXMgfiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbCB7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDI1cHggMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbl9yZWdpc3RyYXRlOmhvdmVyLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjk2NWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjk2NWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX3JlZ2lzdHJhdGVbZGlzYWJsZWRdOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX2xvZ2luOmhvdmVyLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjk2NWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICNlMjk2NWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX2xvZ2luW2Rpc2FibGVkXTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zdWItdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmQ0YWQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc3ViLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zaGFwZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG4gIHRvcDogNyU7XG4gIHJpZ2h0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc2hhcGUtYnV0dG9uX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDc7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXM6aG92ZXI6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Bp1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfcmVnaXN0cmF0aW9uLW1vZGUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfcmVnaXN0cmF0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzX2Zyb20tcmVnaXN0cmF0aW9uLW1vZGUge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19mcm9tLXJlZ2lzdHJhdGlvbi1tb2RlOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICBjb2xvcjogd2hpdGU7XG59IiwiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC91c2VyLXJlZ2lzdHJhdGlvbi1iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDk1JTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwLXJlZ2lzdHJhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICYtZm9ybSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgJl9yZWdpc3RyYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XHJcblxyXG4gICAgICAgICAgICAmIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDlweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbSB7XHJcbiAgICAgICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9ub3QtbG9naW4tbW9kZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdG9wLWRlY29yYXRpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMiUpIHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMiUpIHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZkNGFkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICYtY2hlY2sge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVja19sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNGE2Njk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTI5NjVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXdhcm5pbmcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmX2ludmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNGE2Njk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjEyYVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTI5NjVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xyXG4gICAgICAgICAgICAgICAgJl92YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICYgKyAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYgfiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JlZ2lzdHJhdGUge1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTI5NjVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyOTY1ZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfbG9naW4ge1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTI5NjVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMjk2NWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZDRhZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zaGFwZS1idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIHRvcDogNyU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xyXG4gICAgICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3BsdXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDc7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNjdcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogOTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9mcm9tLXJlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
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