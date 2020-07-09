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
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-registration-bg.jpg');\n  background-size: cover;\n}\n@-webkit-keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@-webkit-keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    display: block;\n  }\n}\n@keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    display: block;\n  }\n}\n.-app-registration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 650px;\n}\n.-app-registration-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%) scale(1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 60px 50px 40px 50px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n}\n.-app-registration-form_registrate[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%] {\n  background-color: #ffd4ad;\n  color: black;\n  -webkit-animation: 0.4s blinkRegistration forwards 1s;\n  animation: 0.4s blinkRegistration forwards 1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%]::before {\n  left: -49px;\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%], .-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: black !important;\n  color: black !important;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__button[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  color: black;\n}\n.-app-registration-form_not-login-mode[_ngcontent-%COMP%] {\n  transform: translate(0%, -2.5%) scale(0.95);\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.-app-registration-form__top-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: -15px;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(1);\n  width: 95%;\n  height: 20px;\n  transition: 0.2s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 20px 20px 0px 0px;\n  background: rgba(255, 255, 255, 0.6);\n}\n.-app-registration-form__top-decoration_registration-mode[_ngcontent-%COMP%] {\n  transform: translate(-50%, -2%) scale(0.95);\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.-app-registration-form__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: #ffd4ad;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 30px;\n}\n.-app-registration-form__title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50px;\n  transform: translate(-50%, -50%);\n  width: 4px;\n  height: 120%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-registration-form__item-check_valid.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-check.-app-registration-form__item-check_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-registration-form__item-warning_invalid.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-warning.-app-registration-form__item-warning_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  filter: alpha(opacity=100);\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.-app-registration-form__item-label_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form__item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-registration-form__item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    + .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    ~ .-app-registration-form__item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: white !important;\n  color: white !important;\n}\n.-app-registration-form__button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: none;\n  border: 2px solid white;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  background: transparent;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);\n}\n.-app-registration-form__button_registrate[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: #e2965d;\n}\n.-app-registration-form__button_registrate[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid black;\n  background-color: transparent;\n  color: black;\n}\n.-app-registration-form__button_login[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #e2965d;\n}\n.-app-registration-form__button_login[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid white;\n  background-color: transparent;\n  color: white;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n  font-size: 22px;\n}\n.-app-registration-form__button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  box-shadow: none;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  color: #ffd4ad;\n  letter-spacing: 2px;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -40%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 110%;\n  height: 2px;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  top: 7%;\n  right: 0%;\n  transform: translate(50%, 10px);\n  width: 130px;\n  height: 130px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button_registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  -webkit-animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 7;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  width: 65px;\n  height: 65px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]:hover::before {\n  font-size: 34px;\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.8s;\n  top: 10%;\n  left: 90%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: black;\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3lDaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsaURBQUE7RUFDQSxzQkFBQTtBRHpDSjtBQzZDSTtFQTBCQTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURwRU47RUNzRUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VEckVOO0FBQ0Y7QUM0Q0k7RUFjQTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURwQk47RUNzQkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VEckJOO0FBQ0Y7QUNoQkk7RUF5Q0E7SUEzREEsVUE0RHFCO0lBMURyQix3QkFBQTtFRHFDRjtFQ3VCRTtJQTlEQSxVQStEcUI7SUE3RHJCLDBCQUFBO0lBOERJLGNBQUE7RURwQk47QUFDRjtBQ2ZJO0VBNkJBO0lBM0RBLFVBNERxQjtJQTFEckIsd0JBQUE7RURpRkY7RUNyQkU7SUE5REEsVUErRHFCO0lBN0RyQiwwQkFBQTtJQThESSxjQUFBO0VEd0JOO0FBQ0Y7QUNyQkE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FEc0JKO0FDckJJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQWhHSixxQ0FpR3VCO0VBRW5CLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFuR0osZ0JBcUdJO0VBekZKLFVBMEZxQjtFQXhGckIsMEJBQUE7RUEwRkksbUJBQUE7RUFDQSwyQ0FBQTtFQUVBLDhCQWhJVTtFQWtJVixZQXJJQTtBRCtKUjtBQ3pCUTtFQUNJLGFBQUE7QUQyQlo7QUN6QlE7RUFDSSx5QkFuSUc7RUFxSUgsWUExSUo7RUFzRUoscURBQUE7RUFJQSw2Q0FBQTtFQXhDQSxVQXlJeUI7RUF2SXpCLHdCQUFBO0FEdUlKO0FDOUJvQjtFQUNJLFdBQUE7RUFFQSx1QkFoSmhCO0FEK0tSO0FDNUJnQjtFQUVJLFlBckpaO0FEa0xSO0FDekJnQjtFQUNJLFlBMUpaO0FEcUxSO0FDMUJvQjtFQUNJLG1EQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtBRDRCeEI7QUN6QmdCO0VBQ0ksdUJBbEtaO0FENkxSO0FDeEJZO0VBQ0ksdUJBQUE7RUFFQSxZQXhLUjtBRGlNUjtBQ3BCUTtFQS9KSiwyQ0FnSzJCO0VBNUkzQixZQTZJeUI7RUEzSXpCLHlCQUFBO0FEc0tKO0FDekJRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUF2S1IsdUNBd0syQjtFQUVuQixVQUFBO0VBQ0EsWUFBQTtFQW5LUixnQkFxS1E7RUF6SlIsVUEwSnlCO0VBeEp6QiwwQkFBQTtFQTBKUSxnQ0FBQTtFQUVBLG9DQWpNTTtBRGlPbEI7QUMvQlk7RUFuTFIsMkNBb0wrQjtFQWhLL0IsWUFpSzZCO0VBL0o3Qix5QkFBQTtBRHFNSjtBQ25DUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUVBLGNBdE1HO0VBdU1ILHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEbUNaO0FDbENZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUF0TVosZ0NBdU0rQjtFQUVuQixVQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQXJORDtBRDBQZjtBQ2xDUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QURtQ1o7QUNsQ1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXhOWiw4QkF5TitCO0VBRW5CLFdBQUE7RUFDQSxZQUFBO0VBcE5aLGdCQXNOWTtFQUNBLGVBQUE7RUEzTVosVUE0TTZCO0VBMU03Qix3QkFBQTtFQTRNWSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEeUNoQjtBQ3ZDZ0I7RUFuTlosVUFvTmlDO0VBbE5qQywwQkFBQTtFQW9OZ0IsYUFBQTtBRHlDcEI7QUN4Q29CO0VBQ0ksYUFBQTtBRDBDeEI7QUN2Q2dCO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRHlDcEI7QUN0Q29CO0VBQ0ksY0E1UGQ7QURvU1Y7QUNyQ2dCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBN1BoQixnQ0E4UG1DO0VBRW5CLGNBdlFBO0VBd1FBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEeUNwQjtBQ3RDWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBMVFaLDhCQTJRK0I7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUF0UVosZ0JBd1FZO0VBQ0EsZUFBQTtFQTdQWixVQThQNkI7RUE1UDdCLHdCQUFBO0VBOFBZLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUQ2Q2hCO0FDNUNnQjtFQXBRWixVQXFRaUM7RUFuUWpDLDBCQUFBO0VBcVFnQixhQUFBO0FEOENwQjtBQzdDb0I7RUFDSSxhQUFBO0FEK0N4QjtBQzVDZ0I7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEOENwQjtBQzNDb0I7RUFDSSxjQTdTZDtBRDBWVjtBQzFDZ0I7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUE5U2hCLGdDQStTbUM7RUFFbkIsY0F4VEE7RUF5VEEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUQ4Q3BCO0FDM0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUEzVFosOEJBNFQrQjtFQXBUL0IsOENBdVRZO0VBM1NaLFVBNFM2QjtFQTFTN0IsMEJBQUE7RUE0U1kscUJBQUE7RUFDQSxnQkFBQTtBRG1EaEI7QUNsRGdCO0VBQ0ksWUFuVlo7QUR1WVI7QUNsRGdCO0VBblRaLFVBb1RpQztFQWxUakMsd0JBQUE7QUR1V0o7QUNsRFk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUF6VVosOENBMlVZO0VBRUEseUJBOVZEO0FEbVpmO0FDcERnQjtFQUNJLFdBQUE7QURzRHBCO0FDbkRZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUE5VlosOEJBK1YrQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQTFWWixnQkE0Vlk7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUVBLFlBNVhSO0VBNlhRLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEd0RoQjtBQ3REb0I7RUFDSSxXQUFBO0FEd0R4QjtBQ3REb0I7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQXRYcEIsOEJBdVh1QztFQW5XdkMsVUFxV3FDO0VBbldyQywwQkFBQTtBRCtaSjtBQ3pEZ0I7RUFDSSxtREFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7QUQyRHBCO0FDdkRRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQTlYUixnQkFnWVE7RUFDQSxlQUFBO0VBclhSLFVBc1h5QjtFQXBYekIsMEJBQUE7RUFzWFEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFFQSx1QkFBQTtFQUVBLFlBbGFKO0VBbWFJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQwRFo7QUN6RFk7RUFDSSwyQ0FBQTtBRDJEaEI7QUN2RG9CO0VBQ0kseUJBQUE7RUFFQSx5QkF0YUo7QUQ4ZHBCO0FDcERvQjtFQUNJLHVCQUFBO0VBRUEsNkJBQUE7RUFFQSxZQXRiaEI7QUQwZVI7QUM5Q29CO0VBQ0kseUJBQUE7RUFFQSxvQ0EzYk47RUE2Yk0sY0ExYko7QUR3ZXBCO0FDMUNvQjtFQUNJLHVCQUFBO0VBRUEsNkJBQUE7RUFFQSxZQTVjaEI7QURzZlI7QUN0Q1k7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBRUEsZUFBQTtBRHVDaEI7QUNyQ1k7RUFDSSxlQUFBO0VBbGJaLFlBbWI2QjtFQWpiN0IseUJBQUE7RUFtYlksZ0JBQUE7QUR1Q2hCO0FDcENRO0VBQ0ksa0JBQUE7RUFFQSxlQUFBO0VBRUEsY0ExZEc7RUEyZEgsbUJBQUE7QURvQ1o7QUNuQ1k7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQXhkWiw4QkF5ZCtCO0VBRW5CLFdBQUE7RUFDQSxXQUFBO0VBRUEseUJBdmVEO0FENmdCZjtBQ25DUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBcmVSLCtCQXNlMkI7RUFFbkIsWUFBQTtFQUNBLGFBQUE7RUFqZVIsOENBbWVRO0VBRUEsa0JBQUE7RUFFQSx5QkF4Zkc7QURpaUJmO0FDeENZO0VBQ0ksUUFBQTtFQUNBLFVBQUE7RUFsZlosK0JBbWYrQjtFQTNiL0IsbUVBQUE7RUFJQSwyREFBQTtFQTBiWSwyQ0FBQTtBRGlEaEI7QUM5Q1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTdmUiw2Q0E4ZjJCO0VBRW5CLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFoZ0JSLDhDQWtnQlE7QURtRFo7QUNqRGdCO0VBQ0ksZUFBQTtBRG1EcEI7QUNoRFk7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXJoQlosZ0NBc2hCK0I7RUFFbkIsWUF4aUJSO0VBeWlCUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRG9EaEI7QUNsRFk7RUE3Z0JSLHNCQThnQlk7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQWppQlosOENBa2lCK0I7QUQyRG5DO0FDMURnQjtFQW5oQlosc0JBb2hCZ0I7RUFDQSxZQW5qQlo7QURtbkJSO0FDN0RZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUExaUJaLDZDQTJpQitCO0FEbUVuQztBQ2xFZ0I7RUE1aEJaLHNCQTZoQmdCO0VBQ0EsWUE5akJaO0FEc29CUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvdXNlci1yZWdpc3RyYXRpb24tYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmxpbmtSZWdpc3RyYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgYmxpbmtSZWdpc3RyYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5rUmVnaXN0cmF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbiAgY29sb3I6IGJsYWNrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbiAgLW1vei1hbmltYXRpb246IDAuNHMgYmxpbmtSZWdpc3RyYXRpb24gZm9yd2FyZHMgMXM7XG4gIC1tcy1hbmltYXRpb246IDAuNHMgYmxpbmtSZWdpc3RyYXRpb24gZm9yd2FyZHMgMXM7XG4gIC1vLWFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbiAgYW5pbWF0aW9uOiAwLjRzIGJsaW5rUmVnaXN0cmF0aW9uIGZvcndhcmRzIDFzO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdGl0bGU6OmJlZm9yZSB7XG4gIGxlZnQ6IC00OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZSwgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3N1Yi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQ6Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1MHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fbm90LWxvZ2luLW1vZGUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMi41JSkgc2NhbGUoMC45NSk7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190b3AtZGVjb3JhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgdG9wOiAtMTVweDtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdG9wLWRlY29yYXRpb25fcmVnaXN0cmF0aW9uLW1vZGUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSk7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZkNGFkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC01MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA0NSU7XG4gIHJpZ2h0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2tfdmFsaWQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgei1pbmRleDogOTAwMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX3ZhbGlkLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2s6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2suLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVja19sb2dpbjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmNGE2Njk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgIxcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNlMjk2NWQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA0NSU7XG4gIHJpZ2h0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19pbnZhbGlkIHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIHotaW5kZXg6IDkwMDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2ludmFsaWQuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICB6LWluZGV4OiA5MDAxO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZy4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmdfbG9naW46OmJlZm9yZSB7XG4gIGNvbG9yOiAjZjRhNjY5O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhKpcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNlMjk2NWQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWxfcmVnaXN0cmF0aW9uLW1vZGUge1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbF9pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbiAgbGVmdDogMCU7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1vei10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmVfdmFsaWQge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQ6Zm9jdXMgKyAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dDpmb2N1cyB+IC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsIHtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQ6Oi13ZWJraXQtYXV0b2ZpbGwge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1MHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMjVweCAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uX3JlZ2lzdHJhdGU6aG92ZXIuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyOTY1ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyOTY1ZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fcmVnaXN0cmF0ZVtkaXNhYmxlZF06aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fbG9naW46aG92ZXIuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyOTY1ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogI2UyOTY1ZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fbG9naW5bZGlzYWJsZWRdOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xuICBmb250LXNpemU6IDIycHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC43O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3N1Yi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZDRhZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zdWItdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDRhZDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19zaGFwZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG4gIHRvcDogNyU7XG4gIHJpZ2h0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwcHgpO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1vei10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3NoYXBlLWJ1dHRvbl9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIHRvcDogNTAlO1xuICByaWdodDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XG4gIC1tb3otYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XG4gIC1tcy1hbmltYXRpb246IDAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcztcbiAgLW8tYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XG4gIGFuaW1hdGlvbjogMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDc7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXM6aG92ZXI6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Bp1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfcmVnaXN0cmF0aW9uLW1vZGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA5MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzX3JlZ2lzdHJhdGlvbi1tb2RlOjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19wbHVzX2Zyb20tcmVnaXN0cmF0aW9uLW1vZGUge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfZnJvbS1yZWdpc3RyYXRpb24tbW9kZTo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICBjb2xvcjogd2hpdGU7XG59IiwiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kd2hpdGVPcGFjaXR5MC02OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRibGFja09wYWNpdHkwLTQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJsYWNrT3BhY2l0eTAtMjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4kcGVhY2hDcmFpb2xhOiByZ2JhKDI1NSwgMjEyLCAxNzMsIDEpO1xyXG4kcmVkU2FuZDogcmdiYSgyNDQsIDE2NiwgMTA1LCAxKTtcclxuJGZpcmVTaWVubmFDcmFpb2xhOiByZ2JhKDIyNiwgMTUwLCA5MywgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZGVsYXkoJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kZWxheTogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC91c2VyLXJlZ2lzdHJhdGlvbi1iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbi1uYW1lKSB7XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSAgXHJcbiAgICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfSAgXHJcbiAgICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tcy1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICAtby1hbmltYXRpb246ICN7JHN0cn07XHJcbiAgICBhbmltYXRpb246ICN7JHN0cn07ICAgICAgXHJcbn1cclxuXHJcbkBpbmNsdWRlIGtleWZyYW1lcyhzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSkge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDk1JTtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKGJsaW5rUmVnaXN0cmF0aW9uKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi4tYXBwLXJlZ2lzdHJhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICYtZm9ybSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRibGFja09wYWNpdHkwLTY7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICRibGFja09wYWNpdHkwLTg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgJl9yZWdpc3RyYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAmIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNDlweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX190aXRsZSxcclxuICAgICAgICAgICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtIHtcclxuICAgICAgICAgICAgICAgICYtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzAuNHMgYmxpbmtSZWdpc3RyYXRpb24gZm9yd2FyZHMgMXMnKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9ub3QtbG9naW4tbW9kZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KSk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMC45KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdG9wLWRlY29yYXRpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZU9wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtMiUpIHNjYWxlKDAuOTUpKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMC45KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgJi1jaGVjayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVja19sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRTYW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZpcmVTaWVubmFDcmFpb2xhO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXdhcm5pbmcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmX2ludmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRTYW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMmFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZpcmVTaWVubmFDcmFpb2xhO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX2ludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVhY2hDcmFpb2xhO1xyXG4gICAgICAgICAgICAgICAgJl92YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJiArIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJiB+IC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNTBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCAkYmxhY2tPcGFjaXR5MC02O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9yZWdpc3RyYXRlIHtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGZpcmVTaWVubmFDcmFpb2xhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpcmVTaWVubmFDcmFpb2xhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGZpcmVTaWVubmFDcmFpb2xhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZmlyZVNpZW5uYUNyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zaGFwZS1idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIHRvcDogNyU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1MCUsIDEwcHgpKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkpO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzJyk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGJsYWNrT3BhY2l0eTAtNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19wbHVzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA3O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpKTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNjdcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1kZWxheSgwLjhzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKSk7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZGVsYXkoMC44cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2Zyb20tcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKSk7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZGVsYXkoMC44cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
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