(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-list-registration-registration-module"],{

/***/ "./src/app/components/user-list/registration/registration-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/user-list/registration/registration-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/components/user-list/registration/registration.component.ts");
/* harmony import */ var src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/user-list/can-leave-registration.guard */ "./src/app/guards/user-list/can-leave-registration.guard.ts");
/* harmony import */ var src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/user-list/can-proceed-to-registration.guard */ "./src/app/guards/user-list/can-proceed-to-registration.guard.ts");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mode/login-mode'
    },
    {
        path: 'mode/:registrationMode',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"],
        canActivate: [src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_4__["CanProceedToRegistrationGuard"]],
        canDeactivate: [src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_3__["CanLeaveRegistrationGuard"]]
    }
];
class RegistrationRoutingModule {
}
RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/user-list/registration/registration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-list/registration/registration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_models_user_list_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user-list/user */ "./src/app/models/user-list/user.ts");
/* harmony import */ var src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/user-list/user-list.selectors */ "./src/app/store/user-list/user-list.selectors.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user-list/registration-type */ "./src/app/models/user-list/registration-type.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/user-list/user-list.facade */ "./src/app/store/user-list/user-list.facade.ts");












class RegistrationComponent {
    constructor(_store$, _router, _facadeUserListService, _activatedRoute) {
        this._store$ = _store$;
        this._router = _router;
        this._facadeUserListService = _facadeUserListService;
        this._activatedRoute = _activatedRoute;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.initLoginForm();
        this.initRegistrateForm();
    }
    static validMatch(content) {
        const onlyLatinCharactersNumbersAndUnderscoreMatch = new RegExp('^[a-zA-Z_0-9]*$');
        return (onlyLatinCharactersNumbersAndUnderscoreMatch.test(content))
            ? true
            : false;
    }
    static isUserNameOrSurnameIncludesUnderscore(userNameOrSurname) {
        return Boolean(userNameOrSurname.includes('_'))
            ? true
            : false;
    }
    static isValidUserNameOrSurnameNumberOfCharacters(userNameOrSurname, minNumbers, maxNumbers) {
        return (userNameOrSurname.length >= minNumbers
            && userNameOrSurname.length <= maxNumbers)
            ? true
            : false;
    }
    static isUserNameOrSurnameIncludeNumbers(userNameOrSurname) {
        return (Boolean(userNameOrSurname.search(/\d/) >= 0))
            ? true
            : false;
    }
    static isUserNameOrSurnameValidMatch(userNameOrSurname) {
        return RegistrationComponent.validMatch(userNameOrSurname);
    }
    static isValidUserNameOrSurname(userNameOrSurname, minNumbers, maxNumbers) {
        if (Boolean(userNameOrSurname)) {
            const isContentIncludeNumbers = RegistrationComponent.isUserNameOrSurnameIncludeNumbers(userNameOrSurname);
            const isContentValidMatch = RegistrationComponent.isUserNameOrSurnameValidMatch(userNameOrSurname);
            const isValidNumberOfContentCharacters = RegistrationComponent.isValidUserNameOrSurnameNumberOfCharacters(userNameOrSurname, minNumbers, maxNumbers);
            const isContentIncludeUnderscore = RegistrationComponent.isUserNameOrSurnameIncludesUnderscore(userNameOrSurname);
            if (!isContentIncludeNumbers
                && isContentValidMatch
                && isValidNumberOfContentCharacters
                && !isContentIncludeUnderscore) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static isValidUserAgeYearsOld(userAge, minAge, maxAge) {
        return (userAge >= minAge
            && userAge <= maxAge)
            ? true
            : false;
    }
    static isUserPasswordValidMatch(userPassword) {
        return RegistrationComponent.validMatch(userPassword);
    }
    initLoginForm() {
        this.myFormLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userNameValidator
            ]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userSurnameValidator
            ]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userPasswordValidator
            ])
        });
    }
    initRegistrateForm() {
        this.myFormRegistrate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userNameValidator
            ]),
            userSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userSurnameValidator
            ]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ]),
            userAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userAgeValidator
            ]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userPasswordValidator
            ]),
            userRepeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.userRepeatPasswordValidator
            ])
        });
    }
    userNameValidator(control) {
        const currentUserName = control.value;
        const minNumberOfCharacters = 3;
        const maxNumberOfCharacters = 12;
        const isValidUserName = RegistrationComponent.isValidUserNameOrSurname(currentUserName, minNumberOfCharacters, maxNumberOfCharacters);
        if (isValidUserName) {
            return null;
        }
        else {
            return { userNameInputControlName: true };
        }
    }
    userSurnameValidator(control) {
        const currentUserSurname = control.value;
        const minNumberOfCharacters = 3;
        const maxNumberOfCharacters = 20;
        const isValidUserSurname = RegistrationComponent.isValidUserNameOrSurname(currentUserSurname, minNumberOfCharacters, maxNumberOfCharacters);
        if (isValidUserSurname) {
            return null;
        }
        else {
            return { userSurnameInputControlName: true };
        }
    }
    userAgeValidator(control) {
        const currentUserAge = control.value;
        if (Boolean(currentUserAge) && !isNaN(currentUserAge)) {
            const minAge = 12;
            const maxAge = 150;
            const isValidUserAgeYearsOld = RegistrationComponent.isValidUserAgeYearsOld(currentUserAge, minAge, maxAge);
            if (isValidUserAgeYearsOld) {
                return null;
            }
            else {
                return { userAgeInputControlName: true };
            }
        }
        else {
            return { userAgeInputControlName: true };
        }
    }
    userPasswordValidator(control) {
        const currentUserPassword = control.value;
        const minNumberOfCharacters = 6;
        const maxNumberOfCharacters = 15;
        const isUserPasswordValidMatch = RegistrationComponent.isUserPasswordValidMatch(currentUserPassword);
        if (Boolean(currentUserPassword)) {
            if (isUserPasswordValidMatch
                && currentUserPassword.length >= minNumberOfCharacters
                && currentUserPassword.length <= maxNumberOfCharacters) {
                RegistrationComponent.enteredUserPassword = currentUserPassword;
                return null;
            }
            else {
                return { userPasswordInputControlName: true };
            }
        }
        else {
            return { userPasswordInputControlName: true };
        }
    }
    userRepeatPasswordValidator(control) {
        const currentUserPassword = RegistrationComponent.enteredUserPassword;
        const currentUserRepeatPassword = control.value;
        if (Boolean(currentUserPassword)
            && currentUserRepeatPassword === currentUserPassword) {
            return null;
        }
        else {
            return { userRepeatPasswordInputControlName: true };
        }
    }
    getNewUserId(newRegistrationUser) {
        const dash = '-';
        const firstLetterOfNameForId = newRegistrationUser.newUserName[0].toUpperCase();
        const firstLetterOfSurnameForId = newRegistrationUser.newUserSurname[0].toUpperCase();
        const defaultNewUserId = firstLetterOfNameForId + firstLetterOfSurnameForId + dash
            + String(newRegistrationUser.newUserAge);
        return defaultNewUserId;
    }
    getRegistrationFormValue() {
        const userAge = Number(this.myFormRegistrate.controls.userAge.value);
        const userName = this.myFormRegistrate.controls.userName.value;
        const userSurname = this.myFormRegistrate.controls.userSurname.value;
        const userPassword = this.myFormRegistrate.controls.userPassword.value;
        const userRepeatPassword = this.myFormRegistrate.controls.userRepeatPassword.value;
        const userEmail = this.myFormRegistrate.controls.userEmail.value;
        return {
            newUserName: userName,
            newUserSurname: userSurname,
            newUserEmail: userEmail,
            newUserAge: userAge,
            newUserPassword: userPassword,
            newUserRepeatPassword: userRepeatPassword
        };
    }
    isAnyValuesEnteredInRegistrationForm() {
        const newRegistrationUser = this.getRegistrationFormValue();
        if (Boolean(newRegistrationUser.newUserAge)
            || Boolean(newRegistrationUser.newUserName)
            || Boolean(newRegistrationUser.newUserSurname)
            || Boolean(newRegistrationUser.newUserPassword)
            || Boolean(newRegistrationUser.newUserEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._registrationModeName = params.registrationMode;
            if (this._registrationModeName === src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].RM) {
                this.registrationMode = true;
            }
        });
        this._store$.select(src_app_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectUserList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject$)).subscribe((userList) => {
            this._userList = userList;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    switchRegistrationMode() {
        const registrationModeAfterSwitch = (this._registrationModeName === src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].LM)
            ? src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].RM
            : src_app_models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_6__["RegistrationType"].LM;
        this._router.navigate([
            '/registration',
            'mode',
            registrationModeAfterSwitch
        ]);
        this.registrationMode = !this.registrationMode;
    }
    login() {
        const loginUserName = this.myFormLogin.controls.userName.value;
        const loginUserSurname = this.myFormLogin.controls.userSurname.value;
        const loginUserPassword = this.myFormLogin.controls.userPassword.value;
        const defaultUserLoginId = '1';
        const userLogsIn = new src_app_models_user_list_user__WEBPACK_IMPORTED_MODULE_2__["User"](defaultUserLoginId, loginUserName, loginUserSurname, loginUserPassword);
        const currentUser = this._userList.find((user) => {
            return userLogsIn.loginEquals(user);
        });
        if (Boolean(currentUser)) {
            this._facadeUserListService.initUser(currentUser);
            this._router.navigate(['/user-profile']);
        }
        else {
            this.initLoginForm();
            this.myFormLogin.controls.userName.markAsTouched();
            this.myFormLogin.controls.userSurname.markAsTouched();
            this.myFormLogin.controls.userPassword.markAsTouched();
        }
    }
    registrate() {
        const newRegistrationUser = this.getRegistrationFormValue();
        const newUserRegistrationDate = new Date();
        const defaultNewUserDonationList = null;
        const deafultNewUserCountry = null;
        const defaultNewUserMedicalPoints = 0;
        const defaultNewUserId = this.getNewUserId(newRegistrationUser);
        const defaultNewUser = new src_app_models_user_list_user__WEBPACK_IMPORTED_MODULE_2__["User"](defaultNewUserId, newRegistrationUser.newUserName, newRegistrationUser.newUserSurname, newRegistrationUser.newUserPassword, newRegistrationUser.newUserEmail, '', newRegistrationUser.newUserAge, newUserRegistrationDate, deafultNewUserCountry, defaultNewUserDonationList, defaultNewUserMedicalPoints);
        this._isUserRegistrated = true;
        this._facadeUserListService.initNewUser(defaultNewUser);
        this.initRegistrateForm();
    }
    canDeactivate() {
        let deactivateQuestion;
        deactivateQuestion = 'You filled in the form fields but did not registrate. Are you sure that you want to go from this page?';
        return (!this._isUserRegistrated && this.isAnyValuesEnteredInRegistrationForm())
            ? confirm(deactivateQuestion)
            : true;
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 79, vars: 112, consts: [[1, "-app-registration"], [1, "-app-registration-form__top-decoration"], [1, "-app-registration-form", 3, "formGroup", "ngSubmit"], [1, "-app-registration-form__title"], [1, "-app-registration-form__item"], ["name", "name", "type", "text", "formControlName", "userName", "autocomplete", "off", 1, "-app-registration-form__item-input"], [1, "-app-registration-form__item-line"], [1, "-app-registration-form__item-label"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n            and without any characters and numbers", 1, "-app-registration-form__item-warning"], [1, "-app-registration-form__item-check"], ["name", "surname", "type", "text", "formControlName", "userSurname", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. Maximum number of characters from 3 to 20\n                and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["name", "password", "type", "password", "formControlName", "userPassword", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. User password must contain only numbers, characters and underscore\n                and password length must be in diapazon from 6 to 15 symbols", 1, "-app-registration-form__item-warning"], ["type", "submit", 1, "-app-registration-form__button", "-app-registration-form__button_login", 3, "disabled"], [1, "-app-registration-form__sub-title", 3, "click"], [1, "-app-registration-form__shape-button"], [1, "-app-registration-form__plus", 3, "click"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n                        and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["title", "Invalid value. Maximum number of characters from 3 to 20\n                        and without any characters and numbers", 1, "-app-registration-form__item-warning"], ["name", "email", "type", "email", "formControlName", "userEmail", 1, "-app-registration-form__item-input"], ["title", "Invalid value. Example: egor@g.c", 1, "-app-registration-form__item-warning"], ["name", "age", "type", "text", "formControlName", "userAge", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. User age must not be more than 150 and less than 12 years old", 1, "-app-registration-form__item-warning"], ["title", "Invalid value. User password must contain only numbers, characters and underscore\n                        and password length must be in diapazon from 6 to 15 symbols", 1, "-app-registration-form__item-warning"], ["name", "repeatPassword", "type", "password", "formControlName", "userRepeatPassword", "autocomplete", "off", 1, "-app-registration-form__item-input"], ["title", "Invalid value. you should enter the same password", 1, "-app-registration-form__item-warning"], ["type", "submit", 1, "-app-registration-form__button", "-app-registration-form__button_registrate", 3, "disabled", "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_2_listener() { return ctx.login(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_h4_click_28_listener() { return ctx.switchRegistrationMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Are you not registrated? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_31_listener() { return ctx.switchRegistrationMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_32_listener() { return ctx.registrate(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_77_listener() { return ctx.switchRegistrationMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-registration-bg.jpg');\n  background-size: cover;\n}\n@-webkit-keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@keyframes shapeButtonToRegistrationMode {\n  0% {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 100%;\n    height: 95%;\n    border-radius: 10px;\n  }\n}\n@-webkit-keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    display: block;\n  }\n}\n@keyframes blinkRegistration {\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    display: block;\n  }\n}\n.-app-registration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 650px;\n}\n.-app-registration-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%) scale(1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 60px 50px 40px 50px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n}\n.-app-registration-form_registrate[_ngcontent-%COMP%] {\n  display: none;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%] {\n  background-color: #ffd4ad;\n  color: black;\n  -webkit-animation: 0.4s blinkRegistration forwards 1s;\n  animation: 0.4s blinkRegistration forwards 1s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%]::before {\n  left: -49px;\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__title[_ngcontent-%COMP%], .-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: black !important;\n  color: black !important;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.-app-registration-form_registration-mode[_ngcontent-%COMP%]   .-app-registration-form__button[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  color: black;\n}\n.-app-registration-form_not-login-mode[_ngcontent-%COMP%] {\n  transform: translate(0%, -2.5%) scale(0.95);\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.-app-registration-form__top-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: -15px;\n  left: 50%;\n  transform: translate(-50%, 0%) scale(1);\n  width: 95%;\n  height: 20px;\n  transition: 0.2s;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  border-radius: 20px 20px 0px 0px;\n  background: rgba(255, 255, 255, 0.6);\n}\n.-app-registration-form__top-decoration_registration-mode[_ngcontent-%COMP%] {\n  transform: translate(-50%, -2%) scale(0.95);\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.-app-registration-form__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  color: #ffd4ad;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 30px;\n}\n.-app-registration-form__title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50px;\n  transform: translate(-50%, -50%);\n  width: 4px;\n  height: 120%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-registration-form__item-check_valid.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-check.-app-registration-form__item-check_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-registration-form__item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-registration-form__item-warning_invalid.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-registration-form__item-warning.-app-registration-form__item-warning_login[_ngcontent-%COMP%]::before {\n  color: #f4a669;\n}\n.-app-registration-form__item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #e2965d;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  filter: alpha(opacity=100);\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.-app-registration-form__item-label_registration-mode[_ngcontent-%COMP%] {\n  color: black;\n}\n.-app-registration-form__item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-registration-form__item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #ffd4ad;\n}\n.-app-registration-form__item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  padding-right: 50px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    + .-app-registration-form__item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]:focus    ~ .-app-registration-form__item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-registration-form__item-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: white !important;\n  color: white !important;\n}\n.-app-registration-form__button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: none;\n  border: 2px solid white;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  background: transparent;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);\n}\n.-app-registration-form__button_registrate[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: #e2965d;\n}\n.-app-registration-form__button_registrate[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid black;\n  background-color: transparent;\n  color: black;\n}\n.-app-registration-form__button_login[_ngcontent-%COMP%]:hover.-app-registration-form__button {\n  border: 2px solid #e2965d;\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #e2965d;\n}\n.-app-registration-form__button_login[disabled][_ngcontent-%COMP%]:hover {\n  border: 2px solid white;\n  background-color: transparent;\n  color: white;\n}\n.-app-registration-form__button[_ngcontent-%COMP%]:active {\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n  font-size: 22px;\n}\n.-app-registration-form__button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  box-shadow: none;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  color: #ffd4ad;\n  letter-spacing: 2px;\n}\n.-app-registration-form__sub-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -40%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 110%;\n  height: 2px;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  top: 7%;\n  right: 0%;\n  transform: translate(50%, 10px);\n  width: 130px;\n  height: 130px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 50%;\n  background-color: #ffd4ad;\n}\n.-app-registration-form__shape-button_registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  -webkit-animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  animation: 0.3s shapeButtonToRegistrationMode forwards 0.3s;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 7;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  width: 65px;\n  height: 65px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]:hover::before {\n  font-size: 34px;\n}\n.-app-registration-form__plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.8s;\n  top: 10%;\n  left: 90%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.-app-registration-form__plus_registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: black;\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.-app-registration-form__plus_from-registration-mode[_ngcontent-%COMP%]::before {\n  transition-delay: 0.8s;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3lDaEI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsaURBQUE7RUFDQSxzQkFBQTtBRHpDSjtBQzZDSTtFQTBCQTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURwRU47RUNzRUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VEckVOO0FBQ0Y7QUM0Q0k7RUFjQTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7RURwQk47RUNzQkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUVBLG1CQUFBO0VEckJOO0FBQ0Y7QUNoQkk7RUF5Q0E7SUEzREEsVUE0RHFCO0lBMURyQix3QkFBQTtFRHFDRjtFQ3VCRTtJQTlEQSxVQStEcUI7SUE3RHJCLDBCQUFBO0lBOERJLGNBQUE7RURwQk47QUFDRjtBQ2ZJO0VBNkJBO0lBM0RBLFVBNERxQjtJQTFEckIsd0JBQUE7RURpRkY7RUNyQkU7SUE5REEsVUErRHFCO0lBN0RyQiwwQkFBQTtJQThESSxjQUFBO0VEd0JOO0FBQ0Y7QUNyQkE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FEc0JKO0FDckJJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQWhHSixxQ0FpR3VCO0VBRW5CLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFuR0osZ0JBcUdJO0VBekZKLFVBMEZxQjtFQXhGckIsMEJBQUE7RUEwRkksbUJBQUE7RUFDQSwyQ0FBQTtFQUVBLDhCQWhJVTtFQWtJVixZQXJJQTtBRCtKUjtBQ3pCUTtFQUNJLGFBQUE7QUQyQlo7QUN6QlE7RUFDSSx5QkFuSUc7RUFxSUgsWUExSUo7RUFzRUoscURBQUE7RUFJQSw2Q0FBQTtFQXhDQSxVQXlJeUI7RUF2SXpCLHdCQUFBO0FEdUlKO0FDOUJvQjtFQUNJLFdBQUE7RUFFQSx1QkFoSmhCO0FEK0tSO0FDNUJnQjtFQUVJLFlBckpaO0FEa0xSO0FDekJnQjtFQUNJLFlBMUpaO0FEcUxSO0FDMUJvQjtFQUNJLG1EQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtBRDRCeEI7QUN6QmdCO0VBQ0ksdUJBbEtaO0FENkxSO0FDeEJZO0VBQ0ksdUJBQUE7RUFFQSxZQXhLUjtBRGlNUjtBQ3BCUTtFQS9KSiwyQ0FnSzJCO0VBNUkzQixZQTZJeUI7RUEzSXpCLHlCQUFBO0FEc0tKO0FDekJRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUF2S1IsdUNBd0syQjtFQUVuQixVQUFBO0VBQ0EsWUFBQTtFQW5LUixnQkFxS1E7RUF6SlIsVUEwSnlCO0VBeEp6QiwwQkFBQTtFQTBKUSxnQ0FBQTtFQUVBLG9DQWpNTTtBRGlPbEI7QUMvQlk7RUFuTFIsMkNBb0wrQjtFQWhLL0IsWUFpSzZCO0VBL0o3Qix5QkFBQTtBRHFNSjtBQ25DUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUVBLGNBdE1HO0VBdU1ILHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEbUNaO0FDbENZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUF0TVosZ0NBdU0rQjtFQUVuQixVQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQXJORDtBRDBQZjtBQ2xDUTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QURtQ1o7QUNsQ1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXhOWiw4QkF5TitCO0VBRW5CLFdBQUE7RUFDQSxZQUFBO0VBcE5aLGdCQXNOWTtFQUNBLGVBQUE7RUEzTVosVUE0TTZCO0VBMU03Qix3QkFBQTtFQTRNWSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEeUNoQjtBQ3ZDZ0I7RUFuTlosVUFvTmlDO0VBbE5qQywwQkFBQTtFQW9OZ0IsYUFBQTtBRHlDcEI7QUN4Q29CO0VBQ0ksYUFBQTtBRDBDeEI7QUN2Q2dCO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRHlDcEI7QUN0Q29CO0VBQ0ksY0E1UGQ7QURvU1Y7QUNyQ2dCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBN1BoQixnQ0E4UG1DO0VBRW5CLGNBdlFBO0VBd1FBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEeUNwQjtBQ3RDWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBMVFaLDhCQTJRK0I7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUF0UVosZ0JBd1FZO0VBQ0EsZUFBQTtFQTdQWixVQThQNkI7RUE1UDdCLHdCQUFBO0VBOFBZLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUQ2Q2hCO0FDNUNnQjtFQXBRWixVQXFRaUM7RUFuUWpDLDBCQUFBO0VBcVFnQixhQUFBO0FEOENwQjtBQzdDb0I7RUFDSSxhQUFBO0FEK0N4QjtBQzVDZ0I7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEOENwQjtBQzNDb0I7RUFDSSxjQTdTZDtBRDBWVjtBQzFDZ0I7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUE5U2hCLGdDQStTbUM7RUFFbkIsY0F4VEE7RUF5VEEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUQ4Q3BCO0FDM0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUEzVFosOEJBNFQrQjtFQXBUL0IsOENBdVRZO0VBM1NaLFVBNFM2QjtFQTFTN0IsMEJBQUE7RUE0U1kscUJBQUE7RUFDQSxnQkFBQTtBRG1EaEI7QUNsRGdCO0VBQ0ksWUFuVlo7QUR1WVI7QUNsRGdCO0VBblRaLFVBb1RpQztFQWxUakMsd0JBQUE7QUR1V0o7QUNsRFk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUF6VVosOENBMlVZO0VBRUEseUJBOVZEO0FEbVpmO0FDcERnQjtFQUNJLFdBQUE7QURzRHBCO0FDbkRZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUE5VlosOEJBK1YrQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUE1VlosZ0JBOFZZO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFFQSxZQTlYUjtFQStYUSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRHdEaEI7QUN0RG9CO0VBQ0ksV0FBQTtBRHdEeEI7QUN0RG9CO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUF4WHBCLDhCQXlYdUM7RUFyV3ZDLFVBdVdxQztFQXJXckMsMEJBQUE7QURpYUo7QUN6RGdCO0VBQ0ksbURBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0FEMkRwQjtBQ3ZEUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFoWVIsZ0JBa1lRO0VBQ0EsZUFBQTtFQXZYUixVQXdYeUI7RUF0WHpCLDBCQUFBO0VBd1hRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBRUEsdUJBQUE7RUFFQSxZQXBhSjtFQXFhSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMERaO0FDekRZO0VBQ0ksMkNBQUE7QUQyRGhCO0FDdkRvQjtFQUNJLHlCQUFBO0VBRUEseUJBeGFKO0FEZ2VwQjtBQ3BEb0I7RUFDSSx1QkFBQTtFQUVBLDZCQUFBO0VBRUEsWUF4YmhCO0FENGVSO0FDOUNvQjtFQUNJLHlCQUFBO0VBRUEsb0NBN2JOO0VBK2JNLGNBNWJKO0FEMGVwQjtBQzFDb0I7RUFDSSx1QkFBQTtFQUVBLDZCQUFBO0VBRUEsWUE5Y2hCO0FEd2ZSO0FDdENZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUVBLGVBQUE7QUR1Q2hCO0FDckNZO0VBQ0ksZUFBQTtFQXBiWixZQXFiNkI7RUFuYjdCLHlCQUFBO0VBcWJZLGdCQUFBO0FEdUNoQjtBQ3BDUTtFQUNJLGtCQUFBO0VBRUEsZUFBQTtFQUVBLGNBNWRHO0VBNmRILG1CQUFBO0FEb0NaO0FDbkNZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUExZFosOEJBMmQrQjtFQUVuQixXQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQXplRDtBRCtnQmY7QUNuQ1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQXZlUiwrQkF3ZTJCO0VBRW5CLFlBQUE7RUFDQSxhQUFBO0VBbmVSLDhDQXFlUTtFQUVBLGtCQUFBO0VBRUEseUJBMWZHO0FEbWlCZjtBQ3hDWTtFQUNJLFFBQUE7RUFDQSxVQUFBO0VBcGZaLCtCQXFmK0I7RUE3Yi9CLG1FQUFBO0VBSUEsMkRBQUE7RUE0YlksMkNBQUE7QURpRGhCO0FDOUNRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUEvZlIsNkNBZ2dCMkI7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQWxnQlIsOENBb2dCUTtBRG1EWjtBQ2pEZ0I7RUFDSSxlQUFBO0FEbURwQjtBQ2hEWTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBdmhCWixnQ0F3aEIrQjtFQUVuQixZQTFpQlI7RUEyaUJRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEb0RoQjtBQ2xEWTtFQS9nQlIsc0JBZ2hCWTtFQUVBLFFBQUE7RUFDQSxTQUFBO0VBbmlCWiw4Q0FvaUIrQjtBRDJEbkM7QUMxRGdCO0VBcmhCWixzQkFzaEJnQjtFQUNBLFlBcmpCWjtBRHFuQlI7QUM3RFk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQTVpQlosNkNBNmlCK0I7QURtRW5DO0FDbEVnQjtFQTloQlosc0JBK2hCZ0I7RUFDQSxZQWhrQlo7QUR3b0JSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC91c2VyLXJlZ2lzdHJhdGlvbi1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rUmVnaXN0cmF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBibGlua1JlZ2lzdHJhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJsaW5rUmVnaXN0cmF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmxpbmtSZWdpc3RyYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLi1hcHAtcmVnaXN0cmF0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNjUwcHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBzY2FsZSgxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xuICBjb2xvcjogYmxhY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjRzIGJsaW5rUmVnaXN0cmF0aW9uIGZvcndhcmRzIDFzO1xuICAtbW96LWFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbiAgLW1zLWFuaW1hdGlvbjogMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcztcbiAgLW8tYW5pbWF0aW9uOiAwLjRzIGJsaW5rUmVnaXN0cmF0aW9uIGZvcndhcmRzIDFzO1xuICBhbmltYXRpb246IDAuNHMgYmxpbmtSZWdpc3RyYXRpb24gZm9yd2FyZHMgMXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX3JlZ2lzdHJhdGlvbi1tb2RlIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZTo6YmVmb3JlIHtcbiAgbGVmdDogLTQ5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RpdGxlLCAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc3ViLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9yZWdpc3RyYXRpb24tbW9kZSAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dDo6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fcmVnaXN0cmF0aW9uLW1vZGUgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9ub3QtbG9naW4tbW9kZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yLjUlKSBzY2FsZSgwLjk1KTtcbiAgb3BhY2l0eTogMC45O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RvcC1kZWNvcmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgc2NhbGUoMSk7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzO1xuICAtby10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190b3AtZGVjb3JhdGlvbl9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMiUpIHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKSBzY2FsZSgwLjk1KTtcbiAgb3BhY2l0eTogMC45O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmQ0YWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX190aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVja192YWxpZCB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB6LWluZGV4OiA5MDAwO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tY2hlY2tfdmFsaWQuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjazo6YmVmb3JlIHtcbiAgei1pbmRleDogOTAwMTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1jaGVjay4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX2xvZ2luOjpiZWZvcmUge1xuICBjb2xvcjogI2Y0YTY2OTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2UyOTY1ZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2ludmFsaWQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgei1pbmRleDogOTAwMDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmdfaW52YWxpZC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZ19sb2dpbjo6YmVmb3JlIHtcbiAgY29sb3I6ICNmNGE2Njk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2UyOTY1ZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1vLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbF9yZWdpc3RyYXRpb24tbW9kZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxhYmVsX2ludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGluZV92YWxpZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dDpmb2N1cyArIC4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWlucHV0OmZvY3VzIH4gLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0tbGFiZWwge1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1pbnB1dDo6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAyNXB4IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25fcmVnaXN0cmF0ZTpob3Zlci4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTI5NjVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI5NjVkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbl9yZWdpc3RyYXRlW2Rpc2FibGVkXTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbl9sb2dpbjpob3Zlci4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTI5NjVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiAjZTI5NjVkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbl9sb2dpbltkaXNhYmxlZF06aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b246YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19idXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjc7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc3ViLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZkNGFkO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3N1Yi10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC00MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgd2lkdGg6IDExMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGFkO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3NoYXBlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgdG9wOiA3JTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTBweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMHB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTBweCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTBweCk7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbW96LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ0YWQ7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fc2hhcGUtYnV0dG9uX3JlZ2lzdHJhdGlvbi1tb2RlIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcztcbiAgLW1vei1hbmltYXRpb246IDAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcztcbiAgLW1zLWFuaW1hdGlvbjogMC4zcyBzaGFwZUJ1dHRvblRvUmVnaXN0cmF0aW9uTW9kZSBmb3J3YXJkcyAwLjNzO1xuICAtby1hbmltYXRpb246IDAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcztcbiAgYW5pbWF0aW9uOiAwLjNzIHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlIGZvcndhcmRzIDAuM3M7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1vLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1czpob3Zlcjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19yZWdpc3RyYXRpb24tbW9kZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtbXMtdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDkwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfcmVnaXN0cmF0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xuICAtbXMtdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgY29sb3I6IGJsYWNrO1xufVxuLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX3BsdXNfZnJvbS1yZWdpc3RyYXRpb24tbW9kZSB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG59XG4uLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fcGx1c19mcm9tLXJlZ2lzdHJhdGlvbi1tb2RlOjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgLW1zLXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiR3aGl0ZU9wYWNpdHkwLTY6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuJGJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC04OiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRibGFja09wYWNpdHkwLTY6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJGJsYWNrT3BhY2l0eTAtNDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYmxhY2tPcGFjaXR5MC0yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRwZWFjaENyYWlvbGE6IHJnYmEoMjU1LCAyMTIsIDE3MywgMSk7XHJcbiRyZWRTYW5kOiByZ2JhKDI0NCwgMTY2LCAxMDUsIDEpO1xyXG4kZmlyZVNpZW5uYUNyYWlvbGE6IHJnYmEoMjI2LCAxNTAsIDkzLCAxKTtcclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHByb3BlcnR5OyBcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbi1kZWxheTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAkYXJncztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xyXG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L3VzZXItcmVnaXN0cmF0aW9uLWJnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1vLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIGFuaW1hdGlvbjogI3skc3RyfTsgICAgICBcclxufVxyXG5cclxuQGluY2x1ZGUga2V5ZnJhbWVzKHNoYXBlQnV0dG9uVG9SZWdpc3RyYXRpb25Nb2RlKSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTUlO1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoYmxpbmtSZWdpc3RyYXRpb24pIHtcclxuICAgIDAlIHtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLi1hcHAtcmVnaXN0cmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgJi1mb3JtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAwJSkgc2NhbGUoMSkpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGJsYWNrT3BhY2l0eTAtNjtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrT3BhY2l0eTAtODtcclxuXHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAmX3JlZ2lzdHJhdGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICYgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC00OXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfX3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNTBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMC40cyBibGlua1JlZ2lzdHJhdGlvbiBmb3J3YXJkcyAxcycpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX25vdC1sb2dpbi1tb2RlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTIuNSUpIHNjYWxlKDAuOTUpKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190b3AtZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSBzY2FsZSgxKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC0yJSkgc2NhbGUoMC45NSkpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHBlYWNoQ3JhaW9sYTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVhY2hDcmFpb2xhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAmLWNoZWNrIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICZfdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi4tYXBwLXJlZ2lzdHJhdGlvbi1mb3JtX19pdGVtLWNoZWNrX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZFNhbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZmlyZVNpZW5uYUNyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtd2FybmluZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICZfaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2l0ZW0td2FybmluZzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS13YXJuaW5nX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZFNhbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjEyYVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZmlyZVNpZW5uYUNyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJl9yZWdpc3RyYXRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgICAgICAmX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICYgKyAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYgfiAuLWFwcC1yZWdpc3RyYXRpb24tZm9ybV9faXRlbS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0ZSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRmaXJlU2llbm5hQ3JhaW9sYTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaXJlU2llbm5hQ3JhaW9sYTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtcmVnaXN0cmF0aW9uLWZvcm1fX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRmaXJlU2llbm5hQ3JhaW9sYTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZpcmVTaWVubmFDcmFpb2xhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTQwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc2hhcGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICB0b3A6IDclO1xyXG4gICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoNTAlLCAxMHB4KSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZWFjaENyYWlvbGE7XHJcbiAgICAgICAgICAgICZfcmVnaXN0cmF0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzAuM3Mgc2hhcGVCdXR0b25Ub1JlZ2lzdHJhdGlvbk1vZGUgZm9yd2FyZHMgMC4zcycpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICRibGFja09wYWNpdHkwLTQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcGx1cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZykpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSk7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZGVsYXkoMC44cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWRlbGF5KDAuOHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9mcm9tLXJlZ2lzdHJhdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZykpO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWRlbGF5KDAuOHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceUserList"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user-list/registration/registration.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-list/registration/registration.module.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/components/user-list/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/components/user-list/registration/registration-routing.module.ts");
/* harmony import */ var src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/user-list/can-leave-registration.guard */ "./src/app/guards/user-list/can-leave-registration.guard.ts");
/* harmony import */ var src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/guards/user-list/can-proceed-to-registration.guard */ "./src/app/guards/user-list/can-proceed-to-registration.guard.ts");








class RegistrationModule {
}
RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegistrationModule, bootstrap: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]] });
RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); }, providers: [
        src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToRegistrationGuard"],
        src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__["CanLeaveRegistrationGuard"]
    ], imports: [[
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]], imports: [_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]
                ],
                imports: [
                    _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ],
                providers: [
                    src_app_guards_user_list_can_proceed_to_registration_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToRegistrationGuard"],
                    src_app_guards_user_list_can_leave_registration_guard__WEBPACK_IMPORTED_MODULE_5__["CanLeaveRegistrationGuard"]
                ],
                bootstrap: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/user-list/can-leave-registration.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/guards/user-list/can-leave-registration.guard.ts ***!
  \******************************************************************/
/*! exports provided: CanLeaveRegistrationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveRegistrationGuard", function() { return CanLeaveRegistrationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveRegistrationGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveRegistrationGuard.ɵfac = function CanLeaveRegistrationGuard_Factory(t) { return new (t || CanLeaveRegistrationGuard)(); };
CanLeaveRegistrationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveRegistrationGuard, factory: CanLeaveRegistrationGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveRegistrationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/user-list/can-proceed-to-registration.guard.ts":
/*!***********************************************************************!*\
  !*** ./src/app/guards/user-list/can-proceed-to-registration.guard.ts ***!
  \***********************************************************************/
/*! exports provided: CanProceedToRegistrationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToRegistrationGuard", function() { return CanProceedToRegistrationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user-list/registration-type */ "./src/app/models/user-list/registration-type.ts");



class CanProceedToRegistrationGuard {
    canActivate(next) {
        const currentRegistrationMode = next.params.registrationMode;
        if (currentRegistrationMode !== _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__["RegistrationType"].RM && currentRegistrationMode !== _models_user_list_registration_type__WEBPACK_IMPORTED_MODULE_1__["RegistrationType"].LM) {
            const errorMessage = `This mode (${currentRegistrationMode}) does not exist, try registration-mode or login-mode`;
            throw new Error(errorMessage);
        }
        return true;
    }
}
CanProceedToRegistrationGuard.ɵfac = function CanProceedToRegistrationGuard_Factory(t) { return new (t || CanProceedToRegistrationGuard)(); };
CanProceedToRegistrationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToRegistrationGuard, factory: CanProceedToRegistrationGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToRegistrationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/user-list/registration-type.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/user-list/registration-type.ts ***!
  \*******************************************************/
/*! exports provided: RegistrationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationType", function() { return RegistrationType; });
var RegistrationType;
(function (RegistrationType) {
    RegistrationType["LM"] = "login-mode";
    RegistrationType["RM"] = "registration-mode";
})(RegistrationType || (RegistrationType = {}));


/***/ })

}]);
//# sourceMappingURL=components-user-list-registration-registration-module-es2015.js.map