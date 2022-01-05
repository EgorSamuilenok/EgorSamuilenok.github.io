function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contacts-contacts-module"], {
  /***/
  "./src/app/components/contacts/contacts-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/contacts/contacts-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ContactsRoutingModule */

  /***/
  function srcAppComponentsContactsContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function () {
      return ContactsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts.component */
    "./src/app/components/contacts/contacts.component.ts");

    var routes = [{
      path: '',
      component: _contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]
    }];

    var ContactsRoutingModule = function ContactsRoutingModule() {
      _classCallCheck(this, ContactsRoutingModule);
    };

    ContactsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactsRoutingModule
    });
    ContactsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactsRoutingModule_Factory(t) {
        return new (t || ContactsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contacts/contacts.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        this.initContactForm();
      }

      _createClass(ContactsComponent, [{
        key: "initContactForm",
        value: function initContactForm() {
          this.myFormContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.userNameValidator]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
            userMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "userNameValidator",
        value: function userNameValidator(control) {
          var currentUserName = control.value;
          var minNumberOfCharacters = 3;
          var maxNumberOfCharacters = 12;
          var isValidUserName = ContactsComponent.isValidUserName(currentUserName, minNumberOfCharacters, maxNumberOfCharacters);

          if (isValidUserName) {
            return null;
          } else {
            return {
              userNameInputControlName: true
            };
          }
        }
      }, {
        key: "contact",
        value: function contact() {
          this._userMessage = this.myFormContact.controls.userMessage.value;
          this.initContactForm();
        }
      }], [{
        key: "validMatch",
        value: function validMatch(content) {
          var onlyLatinCharactersNumbersAndUnderscoreMatch = new RegExp('^[a-zA-Z_0-9]*$');
          return onlyLatinCharactersNumbersAndUnderscoreMatch.test(content) ? true : false;
        }
      }, {
        key: "isUserNameIncludesUnderscore",
        value: function isUserNameIncludesUnderscore(userName) {
          return Boolean(userName.includes('_')) ? true : false;
        }
      }, {
        key: "isValidUserNameNumberOfCharacters",
        value: function isValidUserNameNumberOfCharacters(userName, minNumbers, maxNumbers) {
          return userName.length >= minNumbers && userName.length <= maxNumbers ? true : false;
        }
      }, {
        key: "isUserNameIncludeNumbers",
        value: function isUserNameIncludeNumbers(userName) {
          return Boolean(userName.search(/\d/) >= 0) ? true : false;
        }
      }, {
        key: "isUserNameValidMatch",
        value: function isUserNameValidMatch(userName) {
          return ContactsComponent.validMatch(userName);
        }
      }, {
        key: "isValidUserName",
        value: function isValidUserName(userName, minNumbers, maxNumbers) {
          if (Boolean(userName)) {
            var isContentIncludeNumbers = ContactsComponent.isUserNameIncludeNumbers(userName);
            var isContentValidMatch = ContactsComponent.isUserNameValidMatch(userName);
            var isValidNumberOfContentCharacters = ContactsComponent.isValidUserNameNumberOfCharacters(userName, minNumbers, maxNumbers);
            var isContentIncludeUnderscore = ContactsComponent.isUserNameIncludesUnderscore(userName);

            if (!isContentIncludeNumbers && isContentValidMatch && isValidNumberOfContentCharacters && !isContentIncludeUnderscore) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 43,
      vars: 24,
      consts: [[1, "-app-contacts"], [1, "-app-contacts__header-wrapper"], [1, "-app-contacts__header"], [1, "-app-contacts__form", 3, "formGroup", "ngSubmit"], [1, "-app-contacts__form-title"], [1, "-app-contacts__form-item"], ["name", "name", "type", "text", "formControlName", "userName", "autocomplete", "off", 1, "-app-contacts__form-item-input"], [1, "-app-contacts__form-item-line"], [1, "-app-contacts__form-item-label"], ["title", "Invalid value. Maximum number of characters from 3 to 12\n                        and without any characters and numbers", 1, "-app-contacts__form-item-warning"], [1, "-app-contacts__form-item-check"], ["name", "email", "type", "email", "formControlName", "userEmail", 1, "-app-contacts__form-item-input"], ["title", "Invalid value. Example: egor@g.c", 1, "-app-contacts__form-item-warning"], [1, "-app-contacts__form-item", "-app-contacts__form-item_textarea"], ["name", "message", "formControlName", "userMessage", "autocomplete", "off", 1, "-app-contacts__form-item-textarea"], [1, "-app-contacts__form-item-label", "-app-contacts__form-item-label_textarea"], ["title", "Enter any message", 1, "-app-contacts__form-item-warning", "-app-contacts__form-item-warning_textarea"], [1, "-app-contacts__form-item-check", "-app-contacts__form-item-check_textarea"], ["type", "submit", 1, "-app-contacts__form-button", 3, "disabled"], [1, "-app-contacts__menu"], ["routerLink", "/home", 1, "-app-contacts__menu-link"], ["href", "mailto:egor.samuilenok@gmail.com", 1, "-app-contacts__menu-link"], ["href", "tel:+375447860634", 1, "-app-contacts__menu-link"], [1, "-app-contacts__link-bar"], ["href", "https://vk.com/id182133074", "target", "_blank", 1, "-app-contacts__bar-link", "-app-contacts__bar-link_vk"], ["href", "https://t.me/EgorSamuilenok", "target", "_blank", 1, "-app-contacts__bar-link", "-app-contacts__bar-link_telegram"], ["href", "https://www.instagram.com/ochen_prostoi_chelovek/", "target", "_blank", 1, "-app-contacts__bar-link", "-app-contacts__bar-link_instagram"], ["href", "https://www.linkedin.com/in/egor-samuilenok-648b6a1b1/", "target", "_blank", 1, "-app-contacts__bar-link", "-app-contacts__bar-link_linkedin"], ["href", "https://twitter.com/Egor73193510", "target", "_blank", 1, "-app-contacts__bar-link", "-app-contacts__bar-link_twitter"], ["href", "https://www.facebook.com/profile.php?id=100053059608987", "target", "_blank", 1, "-app-contacts__bar-link", "-app-contacts__bar-link_facebook"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactsComponent_Template_form_ngSubmit_3_listener() {
            return ctx.contact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Contact us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Message ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Project: save our planet project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Email: egor@samuilenok.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Tel: +375-44-786-06-34 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myFormContact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-line_valid", ctx.myFormContact.controls["userName"].touched && ctx.myFormContact.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-label_invisible", ctx.myFormContact.controls["userName"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-warning_invalid", ctx.myFormContact.controls["userName"].touched && ctx.myFormContact.controls["userName"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-check_valid", ctx.myFormContact.controls["userName"].touched && ctx.myFormContact.controls["userName"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-line_valid", ctx.myFormContact.controls["userEmail"].touched && ctx.myFormContact.controls["userEmail"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-label_invisible", ctx.myFormContact.controls["userEmail"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-warning_invalid", ctx.myFormContact.controls["userEmail"].touched && ctx.myFormContact.controls["userEmail"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-check_valid", ctx.myFormContact.controls["userEmail"].touched && ctx.myFormContact.controls["userEmail"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-label_invisible", ctx.myFormContact.controls["userMessage"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-warning_invalid", ctx.myFormContact.controls["userMessage"].touched && ctx.myFormContact.controls["userMessage"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-contacts__form-item-check_valid", ctx.myFormContact.controls["userMessage"].touched && ctx.myFormContact.controls["userMessage"].valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.myFormContact.controls["userName"].invalid || ctx.myFormContact.controls["userEmail"].invalid || ctx.myFormContact.controls["userMessage"].invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-image: url('contacts-mountains-bg.jpg');\n  background-size: cover;\n}\n.-app-contacts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-contacts__header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  height: 80%;\n}\n.-app-contacts__header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1000px;\n  height: 700px;\n  border: 2px solid white;\n  border-radius: 10px;\n  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.-app-contacts__link-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n  padding: 0px 50px;\n  box-sizing: border-box;\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  margin: 0px 30px;\n  transition: 0.3s;\n  cursor: pointer;\n  border: 2px solid black;\n  border-radius: 50%;\n  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.3);\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%]:hover {\n  transition: 0.3s;\n  box-shadow: 0px 0px 4px white;\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%]:hover::before {\n  font-size: 26px;\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 7px black;\n  font-size: 24px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-contacts__bar-link_vk[_ngcontent-%COMP%]::before {\n  content: \"\uF189\";\n}\n.-app-contacts__bar-link_telegram[_ngcontent-%COMP%]::before {\n  content: \"\uF3FE\";\n}\n.-app-contacts__bar-link_instagram[_ngcontent-%COMP%]::before {\n  content: \"\uF16D\";\n}\n.-app-contacts__bar-link_linkedin[_ngcontent-%COMP%]::before {\n  content: \"\uF0E1\";\n}\n.-app-contacts__bar-link_twitter[_ngcontent-%COMP%]::before {\n  content: \"\uF099\";\n}\n.-app-contacts__bar-link_facebook[_ngcontent-%COMP%]::before {\n  content: \"\uF39E\";\n}\n.-app-contacts__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  padding: 30px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  color: white;\n}\n.-app-contacts__form-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  padding: 20px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 34px;\n}\n.-app-contacts__form-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%]:focus    + .-app-contacts__form-item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%]:focus    ~ .-app-contacts__form-item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%]::-webkit-autofill {\n  box-shadow: inset 0 0 0 50px transparent !important;\n  -webkit-text-fill-color: white !important;\n  color: white !important;\n}\n.-app-contacts__form-item_textarea[_ngcontent-%COMP%] {\n  height: 200px;\n  margin-top: 25px;\n  margin-bottom: 40px;\n}\n.-app-contacts__form-item-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 150px;\n  max-height: 200px;\n  resize: vertical;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid white;\n  background-color: transparent;\n  color: white;\n  text-align: left;\n  letter-spacing: 1px;\n  font-size: 18px;\n  font-weight: 600;\n  font-family: \"NotoSans\", sans-serif;\n}\n.-app-contacts__form-item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: white;\n}\n.-app-contacts__form-item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-contacts__form-item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  filter: alpha(opacity=100);\n  color: white;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n}\n.-app-contacts__form-item-label_textarea[_ngcontent-%COMP%] {\n  top: 2.5%;\n  transform: translate(0%, 0%);\n}\n.-app-contacts__form-item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.-app-contacts__form-item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-contacts__form-item-warning_textarea[_ngcontent-%COMP%] {\n  top: 0%;\n  transform: translate(0%, 25%);\n}\n.-app-contacts__form-item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-contacts__form-item-warning_invalid.-app-contacts__form-item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-contacts__form-item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-contacts__form-item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #ffa899;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-contacts__form-item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-contacts__form-item-check_textarea[_ngcontent-%COMP%] {\n  top: 0%;\n  transform: translate(0%, -25%);\n}\n.-app-contacts__form-item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 9000;\n}\n.-app-contacts__form-item-check_valid.-app-contacts__form-item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-contacts__form-item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-contacts__form-item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-contacts__form-button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: none;\n  border: 2px solid white;\n  box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.8);\n  background: transparent;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-contacts__form-button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n  box-shadow: none;\n}\n.-app-contacts__form-button[disabled][_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n}\n.-app-contacts__form-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.8);\n}\n.-app-contacts__menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  border-left: 2px solid white;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 20px;\n  transition: 0.3s;\n  cursor: pointer;\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);\n  text-decoration: none;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%]:hover {\n  letter-spacing: 3px;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 25%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 0%;\n  height: 2px;\n  transition: 0.3s;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9DOlxcVXNlcnNcXFlhaG9yX1NhbXVpbGlvbmFrXFx3b3JrXFxzYXZlLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdHNcXGNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQytCaEI7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGtEQUFBO0VBQ0Esc0JBQUE7QUQ5Qko7QUNpQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUQvQko7QUNnQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FEL0JSO0FDaUNJO0VBQ0ksYUFBQTtFQUVBLGFBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBRUEsb0NBM0RVO0FEeUJsQjtBQ29DSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FEbkNSO0FDcUNJO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBNURKLGdCQThESTtFQUNBLGVBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFFQSxvQ0FyRlU7QURrRGxCO0FDb0NRO0VBdEVKLGdCQXVFUTtFQUVBLDZCQUFBO0FEL0JaO0FDZ0NZO0VBQ0ksZUFBQTtBRDlCaEI7QUNpQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBekZSLGdDQTBGMkI7RUFFbkIsWUEx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Q0EsZUFBQTtFQUNBLGdCQUFBO0FETFo7QUNNWTtFQUNJLG1CQUFBO0FESmhCO0FDS2dCO0VBQ0ksV0FBQTtBREhwQjtBQ01ZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUF6YVosOEJBMGErQjtFQUVuQixTQUFBO0VBQ0EsV0FBQTtFQXJhWixnQkF1YVk7RUFFQSx1QkEvYlI7QUQrYlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0cy9jb250YWN0cy1tb3VudGFpbnMtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uLWFwcC1jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLWNvbnRhY3RzX19oZWFkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cbi4tYXBwLWNvbnRhY3RzX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwMHB4O1xuICBoZWlnaHQ6IDcwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jb250YWN0c19fbGluay1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xuICBwYWRkaW5nOiAwcHggNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi4tYXBwLWNvbnRhY3RzX19iYXItbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwcHggMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCB3aGl0ZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19iYXItbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDdweCBibGFjaztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1jb250YWN0c19fYmFyLWxpbmtfdms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74aJXCI7XG59XG4uLWFwcC1jb250YWN0c19fYmFyLWxpbmtfdGVsZWdyYW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74++XCI7XG59XG4uLWFwcC1jb250YWN0c19fYmFyLWxpbmtfaW5zdGFncmFtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+FrVwiO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rX2xpbmtlZGluOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+DoVwiO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rX3R3aXR0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74KZXCI7XG59XG4uLWFwcC1jb250YWN0c19fYmFyLWxpbmtfZmFjZWJvb2s6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi746eXCI7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDM0cHg7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0taW5wdXQ6Zm9jdXMgKyAuLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0taW5wdXQ6Zm9jdXMgfiAuLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxhYmVsIHtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1pbnB1dDo6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbV90ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tb3otdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1zLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1vLXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1saW5lX3ZhbGlkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW1vei10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1sYWJlbF90ZXh0YXJlYSB7XG4gIHRvcDogMi41JTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1sYWJlbF9pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNDUlO1xuICByaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0td2FybmluZ190ZXh0YXJlYSB7XG4gIHRvcDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDI1JSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDI1JSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMjUlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDI1JSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAyNSUpO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS13YXJuaW5nX2ludmFsaWQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgei1pbmRleDogOTAwMDtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0td2FybmluZ19pbnZhbGlkLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICB6LWluZGV4OiA5MDAxO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS13YXJuaW5nOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SqXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjZmZhODk5O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNDUlO1xuICByaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tY2hlY2tfdGV4dGFyZWEge1xuICB0b3A6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjUlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTI1JSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTI1JSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yNSUpO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1jaGVja192YWxpZCB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICB6LWluZGV4OiA5MDAwO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1jaGVja192YWxpZC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tY2hlY2s6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWNoZWNrOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWNoZWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDI1cHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWJ1dHRvbltkaXNhYmxlZF06aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0tYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi4tYXBwLWNvbnRhY3RzX19tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19tZW51LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY29udGFjdHNfX21lbnUtbGluazpob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4uLWFwcC1jb250YWN0c19fbWVudS1saW5rOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLWNvbnRhY3RzX19tZW51LWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNSU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiR3aGl0ZU9wYWNpdHkwLTg6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuJHdoaXRlT3BhY2l0eTAtMzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4kYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiRibGFja09wYWNpdHkwLTk6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRicmlnaHRUYW5nZXJpbmU6IHJnYmEoMjU1LCAxNjgsIDE1MywgMSk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0cy9jb250YWN0cy1tb3VudGFpbnMtYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uLWFwcC1jb250YWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAmX19oZWFkZXItd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgfVxyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzAwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4ICRibGFja09wYWNpdHkwLTY7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICB9XHJcbiAgICAmX19saW5rLWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgJl9fYmFyLWxpbmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDMwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAkd2hpdGVPcGFjaXR5MC0zO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4ICR3aGl0ZTtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggN3B4ICRibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdmsge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxODlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3RlbGVncmFtIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmM2ZlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9pbnN0YWdyYW0ge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxNmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX2xpbmtlZGluIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMGUxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl90d2l0dGVyIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDk5XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9mYWNlYm9vayB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjM5ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG5cclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICYtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICYgKyAuLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJiB+IC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1MHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl90ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1saW5lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTUlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJl92YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgICAgICZfdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMi41JTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAwJSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi13YXJuaW5nIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmX3RleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDI1JSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9pbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmc6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRicmlnaHRUYW5nZXJpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY2hlY2sge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICZfdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTI1JSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl92YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1jaGVjazo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggJHdoaXRlT3BhY2l0eTAtODtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggJHdoaXRlT3BhY2l0eTAtODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4ICRibGFja09wYWNpdHkwLTk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4zcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contacts/contacts.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/contacts/contacts.module.ts ***!
    \********************************************************/

  /*! exports provided: ContactsModule */

  /***/
  function srcAppComponentsContactsContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsModule", function () {
      return ContactsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contacts-routing.module */
    "./src/app/components/contacts/contacts-routing.module.ts");
    /* harmony import */


    var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactsModule = function ContactsModule() {
      _classCallCheck(this, ContactsModule);
    };

    ContactsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactsModule,
      bootstrap: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]]
    });
    ContactsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactsModule_Factory(t) {
        return new (t || ContactsModule)();
      },
      providers: [],
      imports: [[_contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactsRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsModule, {
        declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]],
        imports: [_contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactsRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]],
          imports: [_contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactsRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-contacts-contacts-module-es5.js.map