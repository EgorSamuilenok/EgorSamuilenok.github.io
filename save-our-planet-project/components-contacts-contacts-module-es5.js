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
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\s@]+@[^\s@]+\.[^\s@]+$')]),
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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-image: url('contacts-mountains-bg.jpg');\n  background-size: cover;\n}\n.-app-contacts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.-app-contacts__header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  height: 80%;\n}\n.-app-contacts__header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1000px;\n  height: 700px;\n  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.-app-contacts__link-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20%;\n  padding: 0px 50px;\n  box-sizing: border-box;\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  margin: 0px 30px;\n  transition: 0.3s;\n  cursor: pointer;\n  box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.3);\n  border: 2px solid black;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%]:hover {\n  transition: 0.3s;\n  box-shadow: 0px 0px 4px white;\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%]:hover::before {\n  font-size: 26px;\n}\n.-app-contacts__bar-link[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 7px black;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 900;\n}\n.-app-contacts__bar-link_vk[_ngcontent-%COMP%]::before {\n  content: \"\uF189\";\n}\n.-app-contacts__bar-link_telegram[_ngcontent-%COMP%]::before {\n  content: \"\uF3FE\";\n}\n.-app-contacts__bar-link_instagram[_ngcontent-%COMP%]::before {\n  content: \"\uF16D\";\n}\n.-app-contacts__bar-link_linkedin[_ngcontent-%COMP%]::before {\n  content: \"\uF0E1\";\n}\n.-app-contacts__bar-link_twitter[_ngcontent-%COMP%]::before {\n  content: \"\uF099\";\n}\n.-app-contacts__bar-link_facebook[_ngcontent-%COMP%]::before {\n  content: \"\uF39E\";\n}\n.-app-contacts__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  padding: 30px;\n  transition: 0.2s;\n  box-sizing: border-box;\n  color: white;\n}\n.-app-contacts__form-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  padding: 20px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 30px;\n}\n.-app-contacts__form-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 90px;\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  width: 100%;\n  height: 40px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: transparent;\n  color: white;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%]:focus    + .-app-contacts__form-item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-contacts__form-item-input[_ngcontent-%COMP%]:focus    ~ .-app-contacts__form-item-label[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  opacity: 1;\n}\n.-app-contacts__form-item_textarea[_ngcontent-%COMP%] {\n  height: 200px;\n  margin-top: 25px;\n  margin-bottom: 40px;\n}\n.-app-contacts__form-item-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 150px;\n  max-height: 200px;\n  resize: vertical;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid white;\n  background-color: transparent;\n  color: white;\n  text-align: left;\n  letter-spacing: 1px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n}\n.-app-contacts__form-item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15%;\n  left: 0%;\n  width: 0%;\n  height: 2px;\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: white;\n}\n.-app-contacts__form-item-line_valid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-contacts__form-item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  -ms-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n  color: white;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n}\n.-app-contacts__form-item-label_textarea[_ngcontent-%COMP%] {\n  top: 2.5%;\n  transform: translate(0%, 0%);\n}\n.-app-contacts__form-item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-contacts__form-item-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-contacts__form-item-warning_textarea[_ngcontent-%COMP%] {\n  top: 0%;\n  transform: translate(0%, -25%);\n}\n.-app-contacts__form-item-warning_invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 9000;\n}\n.-app-contacts__form-item-warning_invalid.-app-contacts__form-item-warning[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-contacts__form-item-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-contacts__form-item-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #ffa899;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-contacts__form-item-check[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 45%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-contacts__form-item-check_textarea[_ngcontent-%COMP%] {\n  top: 0%;\n  transform: translate(0%, -25%);\n}\n.-app-contacts__form-item-check_valid[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 9000;\n}\n.-app-contacts__form-item-check_valid.-app-contacts__form-item-check[_ngcontent-%COMP%]::before {\n  z-index: 9001;\n}\n.-app-contacts__form-item-check[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-contacts__form-item-check[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-contacts__form-button[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 80px;\n  margin: 25px 0px;\n  transition: 0.3s;\n  opacity: 1;\n  cursor: pointer;\n  outline: none;\n  box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.8);\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.-app-contacts__form-button[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.6;\n  box-shadow: none;\n}\n.-app-contacts__form-button[disabled][_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n}\n.-app-contacts__form-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.8);\n}\n.-app-contacts__menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  border-left: 2px solid white;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 20px;\n  transition: 0.3s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);\n  text-decoration: none;\n  font-size: 20px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%]:hover {\n  letter-spacing: 3px;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n}\n.-app-contacts__menu-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 25%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  transition: 0.3s;\n  width: 0%;\n  height: 2px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdHNcXGNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsa0RBQUE7RUFDQSxzQkFBQTtBRENKO0FDRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QURBSjtBQ0NJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBREFSO0FDRUk7RUFDSSxhQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFFQSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQ0FBQTtBREhSO0FDS0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7RUFFQSxzQkFBQTtBRE5SO0FDUUk7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxnREFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQ0FBQTtBRFhSO0FDYVE7RUFDSSxnQkFBQTtFQUVBLDZCQUFBO0FEWlo7QUNhWTtFQUNJLGVBQUE7QURYaEI7QUNjUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEYlo7QUNnQlk7RUFDSSxZQUFBO0FEZGhCO0FDa0JZO0VBQ0ksWUFBQTtBRGhCaEI7QUNvQlk7RUFDSSxZQUFBO0FEbEJoQjtBQ3NCWTtFQUNJLFlBQUE7QURwQmhCO0FDd0JZO0VBQ0ksWUFBQTtBRHRCaEI7QUMwQlk7RUFDSSxZQUFBO0FEeEJoQjtBQzRCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsWUFBQTtBRC9CUjtBQ2dDUTtFQUNJLFdBQUE7RUFFQSxXQUFBO0VBRUEsYUFBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEakNaO0FDbUNRO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBRGxDWjtBQ21DWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFFQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUR0Q2hCO0FDd0NvQjtFQUNJLFdBQUE7QUR0Q3hCO0FDd0NvQjtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFFQSxVQUFBO0FEdkN4QjtBQzJDWTtFQUNJLGFBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FEMUNoQjtBQzRDWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBRUEsNkJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEOUNoQjtBQ2dEWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLDhDQUFBO0VBQ0Esc0RBQUE7RUFDQSxrREFBQTtFQUVBLHVCQUFBO0FEakRoQjtBQ2tEZ0I7RUFDSSxXQUFBO0FEaERwQjtBQ21EWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFFQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURuRGhCO0FDb0RnQjtFQUNJLFNBQUE7RUFDQSw0QkFBQTtBRGxEcEI7QUNvRGdCO0VBQ0ksVUFBQTtBRGxEcEI7QUNxRFk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBRHZEaEI7QUN5RGdCO0VBQ0ksT0FBQTtFQUNBLDhCQUFBO0FEdkRwQjtBQ3lEZ0I7RUFDSSxVQUFBO0VBRUEsYUFBQTtBRHhEcEI7QUN5RG9CO0VBQ0ksYUFBQTtBRHZEeEI7QUMwRGdCO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRHhEcEI7QUMwRGdCO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxjQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQxRHBCO0FDNkRZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUQvRGhCO0FDaUVnQjtFQUNJLE9BQUE7RUFDQSw4QkFBQTtBRC9EcEI7QUNpRWdCO0VBQ0ksVUFBQTtFQUVBLGFBQUE7QURoRXBCO0FDaUVvQjtFQUNJLGFBQUE7QUQvRHhCO0FDa0VnQjtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QURoRXBCO0FDa0VnQjtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEbEVwQjtBQ3NFUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsdUJBQUE7RUFFQSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUR6RVo7QUMwRVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FEekVoQjtBQzBFZ0I7RUFDSSxnQkFBQTtBRHhFcEI7QUMyRVk7RUFDSSxpREFBQTtBRHpFaEI7QUM2RUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtBRDdFUjtBQzhFUTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUQvRVo7QUNnRlk7RUFDSSxtQkFBQTtBRDlFaEI7QUMrRWdCO0VBQ0ksV0FBQTtBRDdFcEI7QUNnRlk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBRUEsZ0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0FEbEZoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLW1vdW50YWlucy1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi4tYXBwLWNvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtY29udGFjdHNfX2hlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xufVxuLi1hcHAtY29udGFjdHNfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogNzAwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWNvbnRhY3RzX19saW5rLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHBhZGRpbmc6IDBweCA1MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IDBweCAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggd2hpdGU7XG59XG4uLWFwcC1jb250YWN0c19fYmFyLWxpbms6aG92ZXI6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi4tYXBwLWNvbnRhY3RzX19iYXItbGluazo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA3cHggYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rX3ZrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GiVwiO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rX3RlbGVncmFtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+PvlwiO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rX2luc3RhZ3JhbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvha1cIjtcbn1cbi4tYXBwLWNvbnRhY3RzX19iYXItbGlua19saW5rZWRpbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvg6FcIjtcbn1cbi4tYXBwLWNvbnRhY3RzX19iYXItbGlua190d2l0dGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+CmVwiO1xufVxuLi1hcHAtY29udGFjdHNfX2Jhci1saW5rX2ZhY2Vib29rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+OnlwiO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1pbnB1dDpmb2N1cyArIC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1pbnB1dDpmb2N1cyB+IC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGFiZWwge1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbV90ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxpbmVfdmFsaWQge1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGFiZWxfdGV4dGFyZWEge1xuICB0b3A6IDIuNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWxhYmVsX2ludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNDUlO1xuICByaWdodDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmdfdGV4dGFyZWEge1xuICB0b3A6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTI1JSk7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmdfaW52YWxpZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDkwMDA7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLXdhcm5pbmdfaW52YWxpZC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0td2FybmluZzo6YmVmb3JlIHtcbiAgei1pbmRleDogOTAwMTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0td2FybmluZzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS13YXJuaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmYTg5OTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWNoZWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDQ1JTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1jaGVja190ZXh0YXJlYSB7XG4gIHRvcDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjUlKTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tY2hlY2tfdmFsaWQge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA5MDAwO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1jaGVja192YWxpZC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tY2hlY2s6OmJlZm9yZSB7XG4gIHotaW5kZXg6IDkwMDE7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWNoZWNrOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWNoZWNrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDI1cHggMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19mb3JtLWJ1dHRvbltkaXNhYmxlZF06aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLi1hcHAtY29udGFjdHNfX2Zvcm0tYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi4tYXBwLWNvbnRhY3RzX19tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWNvbnRhY3RzX19tZW51LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWNvbnRhY3RzX19tZW51LWxpbms6aG92ZXIge1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLi1hcHAtY29udGFjdHNfX21lbnUtbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLWFwcC1jb250YWN0c19fbWVudS1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59IiwiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0cy9jb250YWN0cy1tb3VudGFpbnMtYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uLWFwcC1jb250YWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAmX19oZWFkZXItd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgfVxyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzAwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICB9XHJcbiAgICAmX19saW5rLWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAmX19iYXItbGluayB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4IDMwcHg7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDdweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl92ayB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjE4OVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdGVsZWdyYW0ge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYzZmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX2luc3RhZ3JhbSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjE2ZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfbGlua2VkaW4ge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwZTFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3R3aXR0ZXIge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwOTlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX2ZhY2Vib29rIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMzllXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19mb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJiArIC4tYXBwLWNvbnRhY3RzX19mb3JtLWl0ZW0tbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmIH4gLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3RleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICZfdmFsaWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgJl90ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX2ludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXdhcm5pbmcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmX3RleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjUlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtY29udGFjdHNfX2Zvcm0taXRlbS13YXJuaW5nOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjEyYVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhODk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWNoZWNrIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJl90ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTI1JSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICYuLWFwcC1jb250YWN0c19fZm9ybS1pdGVtLWNoZWNrOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5MDAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDI1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgJi1saW5rIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
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