function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tree-list-tree-list-tree-list-module"], {
  /***/
  "./src/app/components/tree-list/tree-category/tree-category.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/tree-list/tree-category/tree-category.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TreeCategoryComponent */

  /***/
  function srcAppComponentsTreeListTreeCategoryTreeCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeCategoryComponent", function () {
      return TreeCategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.selectors */
    "./src/app/store/tree-list/tree-list.selectors.ts");
    /* harmony import */


    var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.selectors */
    "./src/app/store/donation-list/donation-list.selectors.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.facade */
    "./src/app/store/tree-list/tree-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../tree-product/tree-product.component */
    "./src/app/components/tree-list/tree-product/tree-product.component.ts");
    /* harmony import */


    var src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/tree-list/format-tree-category-title.pipe */
    "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");

    function TreeCategoryComponent_app_tree_product_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tree-product", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTreeProductSelected", function TreeCategoryComponent_app_tree_product_5_Template_app_tree_product_onTreeProductSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectTreeProduct($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tree_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tree", tree_r1)("isTreeProductSelected", ctx_r0.isTreeProductSelected(tree_r1));
      }
    }

    var TreeCategoryComponent = /*#__PURE__*/function () {
      function TreeCategoryComponent(_activatedRoute, _store$, _router, _facadeTreeListService) {
        _classCallCheck(this, TreeCategoryComponent);

        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._router = _router;
        this._facadeTreeListService = _facadeTreeListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(TreeCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          TreeCategoryComponent.scrollUpButton = document.querySelector('.-app-scroll-up-button_tree-category');
          window.addEventListener('scroll', TreeCategoryComponent.isScrolling);

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this.treeCategory = params.categoryName;

            if (Boolean(_this.treeCategory)) {
              _this._facadeTreeListService.searchTreeCategoryTrees(_this.treeCategory);
            }
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectTreeCategoryTrees"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (treeCategoryTrees) {
            _this.treeCategoryTrees = treeCategoryTrees;
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeRouterModeAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isTreeRouterMode) {
            _this.treeMode = isTreeRouterMode;
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_4__["selectDonationListBeforeRegistration"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (donationListBeforeRegistration) {
            _this._donationListBeforeRegistration = donationListBeforeRegistration;
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSelectedTreeProduct"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (selectedTreeProduct) {
            if (Boolean(selectedTreeProduct)) {
              _this._selectedTreeProduct = selectedTreeProduct;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();

          this._facadeTreeListService.goFromTreeRouter();

          window.removeEventListener('scroll', TreeCategoryComponent.isScrolling);
        }
      }, {
        key: "goToTreeCategoryRouter",
        value: function goToTreeCategoryRouter() {
          this._facadeTreeListService.goFromTreeRouter();

          this._router.navigate(['/trees', 'tree-category', this.treeCategory]);
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          var deactivateQuestion = 'You haven’t chosen any tree. Are you sure that you want to go from this page? For donation you need at least one tree';
          return !Boolean(this._donationListBeforeRegistration) ? confirm(deactivateQuestion) : true;
        }
      }, {
        key: "selectTreeProduct",
        value: function selectTreeProduct(tree) {
          this._facadeTreeListService.selectTreeProduct(tree);
        }
      }, {
        key: "isTreeProductSelected",
        value: function isTreeProductSelected(tree) {
          return Boolean(this._selectedTreeProduct) && this._selectedTreeProduct.equals(tree);
        }
      }], [{
        key: "isScrolling",
        value: function isScrolling() {
          if (window.scrollY > TreeCategoryComponent.windowScrollHeight) {
            TreeCategoryComponent.scrollUpButton.classList.add('-app-scroll-up-button_tree-category-visible');
          } else {
            TreeCategoryComponent.scrollUpButton.classList.remove('-app-scroll-up-button_tree-category-visible');
          }
        }
      }]);

      return TreeCategoryComponent;
    }();

    TreeCategoryComponent.windowScrollHeight = 2;

    TreeCategoryComponent.ɵfac = function TreeCategoryComponent_Factory(t) {
      return new (t || TreeCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceTreeList"]));
    };

    TreeCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeCategoryComponent,
      selectors: [["app-tree-category"]],
      decls: 9,
      vars: 8,
      consts: [[1, "-app-tree-category"], [1, "-app-tree-category__title"], ["class", "-app-tree-category__product", 3, "tree", "isTreeProductSelected", "onTreeProductSelected", 4, "ngFor", "ngForOf"], [1, "-app-scroll-up-button", "-app-scroll-up-button_tree-category", 3, "click"], [1, "-app-tree-category__back-button", 3, "click"], [1, "-app-tree-category__product", 3, "tree", "isTreeProductSelected", "onTreeProductSelected"]],
      template: function TreeCategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatTreeCategoryTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeCategoryComponent_app_tree_product_5_Template, 1, 2, "app-tree-product", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_a_click_6_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_div_click_7_listener() {
            return ctx.goToTreeCategoryRouter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category_tree-mode", ctx.treeMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.treeCategory), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.treeCategoryTrees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category__back-button_tree-mode", ctx.treeMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_9__["TreeProductComponent"]],
      pipes: [src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.-app-tree-category[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n}\n.-app-tree-category[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 120px;\n  z-index: -9999;\n  width: 100%;\n  height: 100vh;\n  background-image: url('tree-category-bg.jpg');\n  background-size: cover;\n}\n.-app-tree-category_tree-mode[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.-app-tree-category__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 50px;\n  color: white;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);\n  text-align: center;\n  letter-spacing: 4px;\n  font-size: 36px;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-of-type) {\n  position: relative;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-of-type)::before {\n  content: \"\";\n  position: absolute;\n  top: 87%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  height: 100px;\n  width: 4px;\n  background-color: white;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9000;\n  bottom: 10%;\n  left: 10%;\n  transform: translate(-50%, 0%);\n  width: 60px;\n  height: 60px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  border: 1px solid white;\n  border-radius: 50%;\n  box-shadow: 0px 0px 8px black;\n  background-color: #082508;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:active {\n  transform: translate(-50%, 2%);\n  width: 65px;\n  height: 65px;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 2px 2px 6px black;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.3s;\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 23px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-tree-category__back-button_tree-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1jYXRlZ29yeS90cmVlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtY2F0ZWdvcnlcXHRyZWUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMkJoQjtFQUNJLGFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBRDFCSjtBQzZCQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBekJBLGdCQTJCQTtBRHpCSjtBQzBCSTtFQUNJLFdBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSw2Q0FBQTtFQUNBLHNCQUFBO0FEM0JSO0FDNkJJO0VBQ0ksVUFBQTtBRDNCUjtBQzZCSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBLFlBbkVBO0VBb0VBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUQ1QlI7QUM4Qkk7RUFDSSxrQkFBQTtBRDVCUjtBQzZCUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBdEVSLDhCQXVFMkI7RUFFbkIsYUFBQTtFQUNBLFVBQUE7RUFFQSx1QkF0Rko7QUQ0RFI7QUM2Qkk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBbkZKLDhCQW9GdUI7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUEvRUosZ0JBaUZJO0VBQ0EsZUFBQTtFQTlFSixVQStFcUI7RUE3RXJCLHdCQUFBO0VBK0VJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUVBLHlCQXhHcUI7QURrRjdCO0FDdUJRO0VBbEdKLDhCQW1HMkI7RUFFbkIsV0FBQTtFQUNBLFlBQUE7QURsQlo7QUNxQlk7RUFDSSw4QkFBQTtBRG5CaEI7QUNzQlE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQWpIUixnQ0FrSDJCO0VBMUczQixnQkE0R1E7RUFFQSxZQWhJSjtFQWlJSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEZFo7QUNnQlE7RUFoSEosVUFpSHlCO0VBL0d6QiwwQkFBQTtBRGtHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnkvdHJlZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLi1hcHAtdHJlZS1jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEyMHB4O1xuICB6LWluZGV4OiAtOTk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnktYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV90cmVlLW1vZGUge1xuICB3aWR0aDogNDAlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19wcm9kdWN0Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX3Byb2R1Y3Q6bm90KDpsYXN0LW9mLXR5cGUpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODclO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDkwMDA7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAxMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyNTA4O1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b246YWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMiUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMiUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIlKTtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbl90cmVlLW1vZGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtOTogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4kcGh0aGFsb2N5YW5pbmVHcmVlbk9wYWNpdHk6IHJnYmEoOCwgMzcsIDgsIDEpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMTIwcHg7XHJcbiAgICAgICAgei1pbmRleDogLTk5OTk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1jYXRlZ29yeS1iZy5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgJl90cmVlLW1vZGUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICRibGFja09wYWNpdHkwLTk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgJl9fcHJvZHVjdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDg3JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApO1xyXG5cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICRibGFjaztcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5O1xyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAyJSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggJGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDUzXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCAkYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3RyZWUtbW9kZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1800px) {\n  .-app-tree-category[_ngcontent-%COMP%]::after {\n    left: 110px;\n  }\n  .-app-tree-category-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 110px;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%] {\n    left: 12.5%;\n  }\n}\n@media screen and (max-width: 1500px) {\n  .-app-tree-category[_ngcontent-%COMP%]::after {\n    left: 100px;\n  }\n  .-app-tree-category-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 100px;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .-app-tree-category[_ngcontent-%COMP%] {\n    padding: 0px 50px;\n    box-sizing: border-box;\n  }\n  .-app-tree-category[_ngcontent-%COMP%]::after {\n    left: 80px;\n  }\n}\n@media screen and (max-width: 1140px) {\n  .-app-tree-category[_ngcontent-%COMP%]::after {\n    left: 70px;\n  }\n  .-app-tree-category__title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .-app-tree-category-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 70px;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%] {\n    bottom: 4%;\n    left: 85%;\n  }\n\n  .-app-scroll-up-button[_ngcontent-%COMP%] {\n    bottom: 10%;\n    right: 7.5%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-tree-category__title[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    font-size: 27px;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%] {\n    left: 80%;\n  }\n\n  .-app-scroll-up-button[_ngcontent-%COMP%] {\n    right: 12%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-tree-category[_ngcontent-%COMP%] {\n    padding: 0px 30px;\n  }\n  .-app-tree-category[_ngcontent-%COMP%]::after {\n    left: 60px;\n  }\n  .-app-tree-category-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 60px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .-app-tree-category[_ngcontent-%COMP%] {\n    padding: 0px 25px;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%] {\n    left: 75%;\n  }\n\n  .-app-scroll-up-button[_ngcontent-%COMP%] {\n    right: 17%;\n  }\n}\n@media screen and (max-width: 700px) {\n  .-app-tree-category__back-button[_ngcontent-%COMP%] {\n    left: 67%;\n    bottom: 5%;\n    width: 50px;\n    height: 50px;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%]::before {\n    font-size: 21px;\n  }\n\n  .-app-scroll-up-button[_ngcontent-%COMP%] {\n    right: 25%;\n    width: 50px;\n    height: 50px;\n  }\n  .-app-scroll-up-button[_ngcontent-%COMP%]::before {\n    font-size: 21px;\n  }\n}\n@media screen and (max-width: 650px) {\n  .-app-scroll-up-button[_ngcontent-%COMP%] {\n    right: 20%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .-app-tree-category[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .-app-tree-category__title[_ngcontent-%COMP%] {\n    padding: 0px 15px;\n    padding-top: 30px;\n    font-size: 23px;\n  }\n  .-app-tree-category[_ngcontent-%COMP%]::after {\n    left: 50px;\n  }\n  .-app-tree-category-router-outlet[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .-app-tree-category_tree-mode[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%] {\n    bottom: 6%;\n    width: 40px;\n    height: 40px;\n  }\n  .-app-tree-category__back-button[_ngcontent-%COMP%]::before {\n    font-size: 20px;\n  }\n\n  .-app-scroll-up-button[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .-app-scroll-up-button[_ngcontent-%COMP%]::before {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1jYXRlZ29yeS9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHJlZS1saXN0XFx0cmVlLWNhdGVnb3J5XFx0cmVlLWNhdGVnb3J5LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5L3RyZWUtY2F0ZWdvcnktbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUTtJQUNJLFdBQUE7RUNBVjtFREVNO0lBQ0ksbUJBQUE7RUNBVjtFREVNO0lBQ0ksV0FBQTtFQ0FWO0FBQ0Y7QURJQTtFQUVRO0lBQ0ksV0FBQTtFQ0hWO0VES007SUFDSSxtQkFBQTtFQ0hWO0FBQ0Y7QURPQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxzQkFBQTtFQ0xOO0VETU07SUFDSSxVQUFBO0VDSlY7QUFDRjtBRFFBO0VBRVE7SUFDSSxVQUFBO0VDUFY7RURTTTtJQUNJLGVBQUE7RUNQVjtFRFNNO0lBQ0ksa0JBQUE7RUNQVjtFRFNNO0lBQ0ksVUFBQTtJQUNBLFNBQUE7RUNQVjs7RURVRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDUE47QUFDRjtBRFVBO0VBRVE7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUNUVjtFRFdNO0lBQ0ksU0FBQTtFQ1RWOztFRFlFO0lBQ0ksVUFBQTtFQ1ROO0FBQ0Y7QURZQTtFQUNJO0lBQ0ksaUJBQUE7RUNWTjtFRFdNO0lBQ0ksVUFBQTtFQ1RWO0VEV007SUFDSSxrQkFBQTtFQ1RWO0FBQ0Y7QURhQTtFQUNJO0lBQ0ksaUJBQUE7RUNYTjtFRFlNO0lBQ0ksU0FBQTtFQ1ZWOztFRGFFO0lBQ0ksVUFBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUVRO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ1pWO0VEYVU7SUFDSSxlQUFBO0VDWGQ7O0VEZUU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNaTjtFRGFNO0lBQ0ksZUFBQTtFQ1hWO0FBQ0Y7QURlQTtFQUNJO0lBQ0ksVUFBQTtFQ2JOO0FBQ0Y7QURnQkE7RUFDSTtJQUNJLFlBQUE7RUNkTjtFRGVNO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNiVjtFRGVNO0lBQ0ksVUFBQTtFQ2JWO0VEZU07SUFDSSxrQkFBQTtFQ2JWO0FBQ0Y7QURpQkE7RUFFUTtJQUNJLFVBQUE7RUNoQlY7RURrQk07SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNoQlY7RURpQlU7SUFDSSxlQUFBO0VDZmQ7O0VEb0JFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNqQk47RURrQk07SUFDSSxlQUFBO0VDaEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5L3RyZWUtY2F0ZWdvcnktbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcm91dGVyLW91dGxldCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgICAgICAgbGVmdDogMTIuNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcm91dGVyLW91dGxldCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA1MHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcbiAgICAuLWFwcC10cmVlLWNhdGVnb3J5IHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgICAgICAgYm90dG9tOiA0JTtcclxuICAgICAgICAgICAgbGVmdDogODUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC4tYXBwLXNjcm9sbC11cC1idXR0b24ge1xyXG4gICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgIHJpZ2h0OiA3LjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLi1hcHAtdHJlZS1jYXRlZ29yeSB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuLWFwcC1zY3JvbGwtdXAtYnV0dG9uIHtcclxuICAgICAgICByaWdodDogMTIlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLi1hcHAtdHJlZS1jYXRlZ29yeSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLi1hcHAtdHJlZS1jYXRlZ29yeSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgICAgICAgJl9fYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICBsZWZ0OiA3NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLi1hcHAtc2Nyb2xsLXVwLWJ1dHRvbiB7XHJcbiAgICAgICAgcmlnaHQ6IDE3JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgICAgICAgbGVmdDogNjclO1xyXG4gICAgICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLi1hcHAtc2Nyb2xsLXVwLWJ1dHRvbiB7XHJcbiAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC4tYXBwLXNjcm9sbC11cC1idXR0b24ge1xyXG4gICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuLWFwcC10cmVlLWNhdGVnb3J5IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLi1hcHAtdHJlZS1jYXRlZ29yeSB7XHJcbiAgICAgICAgJl90cmVlLW1vZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNiU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLi1hcHAtc2Nyb2xsLXVwLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xuICAuLWFwcC10cmVlLWNhdGVnb3J5OjphZnRlciB7XG4gICAgbGVmdDogMTEwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1jYXRlZ29yeS1yb3V0ZXItb3V0bGV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uIHtcbiAgICBsZWZ0OiAxMi41JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnk6OmFmdGVyIHtcbiAgICBsZWZ0OiAxMDBweDtcbiAgfVxuICAuLWFwcC10cmVlLWNhdGVnb3J5LXJvdXRlci1vdXRsZXQge1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuLWFwcC10cmVlLWNhdGVnb3J5IHtcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnk6OmFmdGVyIHtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcbiAgLi1hcHAtdHJlZS1jYXRlZ29yeTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDcwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1jYXRlZ29yeV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuLWFwcC10cmVlLWNhdGVnb3J5LXJvdXRlci1vdXRsZXQge1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgfVxuICAuLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbiB7XG4gICAgYm90dG9tOiA0JTtcbiAgICBsZWZ0OiA4NSU7XG4gIH1cblxuICAuLWFwcC1zY3JvbGwtdXAtYnV0dG9uIHtcbiAgICBib3R0b206IDEwJTtcbiAgICByaWdodDogNy41JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtdHJlZS1jYXRlZ29yeV9fdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgfVxuICAuLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbiB7XG4gICAgbGVmdDogODAlO1xuICB9XG5cbiAgLi1hcHAtc2Nyb2xsLXVwLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IDEyJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtdHJlZS1jYXRlZ29yeSB7XG4gICAgcGFkZGluZzogMHB4IDMwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1jYXRlZ29yeTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDYwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1jYXRlZ29yeS1yb3V0ZXItb3V0bGV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnkge1xuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xuICB9XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uIHtcbiAgICBsZWZ0OiA3NSU7XG4gIH1cblxuICAuLWFwcC1zY3JvbGwtdXAtYnV0dG9uIHtcbiAgICByaWdodDogMTclO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbiB7XG4gICAgbGVmdDogNjclO1xuICAgIGJvdHRvbTogNSU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxuXG4gIC4tYXBwLXNjcm9sbC11cC1idXR0b24ge1xuICAgIHJpZ2h0OiAyNSU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC4tYXBwLXNjcm9sbC11cC1idXR0b246OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuLWFwcC1zY3JvbGwtdXAtYnV0dG9uIHtcbiAgICByaWdodDogMjAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuLWFwcC10cmVlLWNhdGVnb3J5IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1jYXRlZ29yeV9fdGl0bGUge1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICAuLWFwcC10cmVlLWNhdGVnb3J5OjphZnRlciB7XG4gICAgbGVmdDogNTBweDtcbiAgfVxuICAuLWFwcC10cmVlLWNhdGVnb3J5LXJvdXRlci1vdXRsZXQge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLi1hcHAtdHJlZS1jYXRlZ29yeV90cmVlLW1vZGUge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b24ge1xuICAgIGJvdHRvbTogNiU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC4tYXBwLXNjcm9sbC11cC1idXR0b24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuLWFwcC1zY3JvbGwtdXAtYnV0dG9uOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-category',
          templateUrl: './tree-category.component.html',
          styleUrls: ['./tree-category.component.scss', './tree-category-media.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_7__["FacadeServiceTreeList"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tree-list/tree-list/tree-list-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/tree-list/tree-list/tree-list-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: TreeListRoutingModule */

  /***/
  function srcAppComponentsTreeListTreeListTreeListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeListRoutingModule", function () {
      return TreeListRoutingModule;
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


    var _tree_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tree-list.component */
    "./src/app/components/tree-list/tree-list/tree-list.component.ts");
    /* harmony import */


    var _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tree-category/tree-category.component */
    "./src/app/components/tree-list/tree-category/tree-category.component.ts");
    /* harmony import */


    var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tree/tree.component */
    "./src/app/components/tree-list/tree/tree.component.ts");
    /* harmony import */


    var src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-proceed-to-tree-category.guard */
    "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts");
    /* harmony import */


    var src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-proceed-to-tree.guard */
    "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts");
    /* harmony import */


    var src_app_guards_tree_list_can_leave_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-leave-tree-category.guard */
    "./src/app/guards/tree-list/can-leave-tree-category.guard.ts");

    var routes = [{
      path: '',
      component: _tree_list_component__WEBPACK_IMPORTED_MODULE_2__["TreeListComponent"]
    }, {
      path: 'tree-category/:categoryName',
      component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"],
      canActivate: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToTreeCategoryGuard"]],
      canDeactivate: [src_app_guards_tree_list_can_leave_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveTreeCategoryGuard"]],
      children: [{
        path: 'tree/:treeName',
        component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
        canActivate: [src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToTreeGuard"]]
      }]
    }, {
      path: 'tree-category/:categoryName#header',
      component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"]
    }];

    var TreeListRoutingModule = function TreeListRoutingModule() {
      _classCallCheck(this, TreeListRoutingModule);
    };

    TreeListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TreeListRoutingModule
    });
    TreeListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TreeListRoutingModule_Factory(t) {
        return new (t || TreeListRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeListRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeListRoutingModule, [{
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
  "./src/app/components/tree-list/tree-list/tree-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/tree-list/tree-list/tree-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TreeListComponent */

  /***/
  function srcAppComponentsTreeListTreeListTreeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeListComponent", function () {
      return TreeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TreeListComponent = /*#__PURE__*/function () {
      function TreeListComponent(_router) {
        _classCallCheck(this, TreeListComponent);

        this._router = _router;
      }

      _createClass(TreeListComponent, [{
        key: "switchRouter",
        value: function switchRouter(treeTypeHtmlElement) {
          var treeTypeContent = treeTypeHtmlElement.innerHTML;
          var treeCategory = treeTypeContent.toLowerCase().split(' ').join('-');

          this._router.navigate(['/trees', 'tree-category', treeCategory]);
        }
      }]);

      return TreeListComponent;
    }();

    TreeListComponent.ɵfac = function TreeListComponent_Factory(t) {
      return new (t || TreeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    TreeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeListComponent,
      selectors: [["app-tree-list"]],
      decls: 60,
      vars: 0,
      consts: [[1, "-app-trees"], [1, "-app-trees__design-block", "-app-trees__design-block_upper-left-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_bottom-right-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_upper-right-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_bottom-left-corner"], [1, "-app-trees__bird-container", "-app-trees__bird-container_first"], [1, "-app-trees__bird", "-app-trees__bird_first"], [1, "-app-trees__bird-container", "-app-trees__bird-container_second"], [1, "-app-trees__bird", "-app-trees__bird_second"], [1, "-app-trees__title"], [1, "-app-trees__menu-list"], [1, "-app-trees__menu-item", "-app-trees__menu-item_native", 3, "click"], [1, "-app-trees__item"], [1, "-app-trees__item-title"], ["native", ""], [1, "-app-trees__item-image", "-app-trees__item-image_native"], [1, "-app-trees__item-sub-title"], [1, "-app-trees__menu-item", "-app-trees__menu-item_arboretum", 3, "click"], ["arboretum", ""], [1, "-app-trees__item-image", "-app-trees__item-image_arboretum"], [1, "-app-trees__menu-item", "-app-trees__menu-item_patio", 3, "click"], ["patio", ""], [1, "-app-trees__item-image", "-app-trees__item-image_patio"], [1, "-app-trees__menu-item", "-app-trees__menu-item_evergreen", 3, "click"], ["evergreen", ""], [1, "-app-trees__item-image", "-app-trees__item-image_evergreen"], [1, "-app-trees__menu-item", "-app-trees__menu-item_potgrown", 3, "click"], ["potgrown", ""], [1, "-app-trees__item-image", "-app-trees__item-image_potgrown"], [1, "-app-trees__menu-item", "-app-trees__menu-item_shrubs", 3, "click"], ["shrubs", ""], [1, "-app-trees__item-image", "-app-trees__item-image_shrubs"]],
      template: function TreeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save Our Planet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return ctx.switchRouter(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Native Trees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " View Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx.switchRouter(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 13, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Arboretum Species");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " View Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.switchRouter(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 13, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Patio Fruit Trees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " View Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            return ctx.switchRouter(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 13, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Evergreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " View Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

            return ctx.switchRouter(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 13, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pot Grown Trees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " View Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

            return ctx.switchRouter(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 13, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Shrubs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " View Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n@-webkit-keyframes flyCycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@keyframes flyCycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@-webkit-keyframes flyRightOne {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n@keyframes flyRightOne {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n.-app-trees[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-image: url('tree-list-menu-bg.jpg');\n  background-size: cover;\n}\n\n.-app-trees__bird-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 20%;\n  left: -10%;\n  transform: scale(0) translateX(-10vw);\n  will-change: transform;\n}\n\n.-app-trees__bird-container_first[_ngcontent-%COMP%] {\n  -webkit-animation: 15s linear 0s infinite flyRightOne;\n  animation: 15s linear 0s infinite flyRightOne;\n}\n\n.-app-trees__bird-container_second[_ngcontent-%COMP%] {\n  -webkit-animation: 17s linear 1s infinite flyRightOne;\n  animation: 17s linear 1s infinite flyRightOne;\n}\n\n.-app-trees__bird[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg\");\n  background-size: auto 100%;\n  width: 88px;\n  height: 125px;\n  will-change: background-position;\n}\n\n.-app-trees__bird_first[_ngcontent-%COMP%] {\n  -webkit-animation: 1s steps(10) -0.5s infinite flyCycle;\n  animation: 1s steps(10) -0.5s infinite flyCycle;\n}\n\n.-app-trees__bird_second[_ngcontent-%COMP%] {\n  -webkit-animation: 0.9s steps(10) -0.75s infinite flyCycle;\n  animation: 0.9s steps(10) -0.75s infinite flyCycle;\n}\n\n.-app-trees__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 30px;\n  padding-left: 54px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: black;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 24px;\n  font-style: italic;\n}\n\n.-app-trees__menu-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-trees__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 200px;\n  height: 200px;\n  color: white;\n}\n\n.-app-trees__menu-item_native[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 20%;\n}\n\n.-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n  top: 5%;\n  right: 40%;\n}\n\n.-app-trees__menu-item_patio[_ngcontent-%COMP%] {\n  top: 35%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: 40%;\n}\n\n.-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n  bottom: 10%;\n  right: 20%;\n}\n\n.-app-trees__menu-item_shrubs[_ngcontent-%COMP%] {\n  top: 70%;\n  left: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover::before, .-app-trees__item[_ngcontent-%COMP%]:hover::after {\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-image[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1, 0);\n  width: 90%;\n  height: 90%;\n  transition: 0.2s;\n  border-right: 1.5px solid white;\n  border-left: 1.5px solid white;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 1);\n  width: 91.5%;\n  height: 90%;\n  transition: 0.2s;\n  border-top: 1.5px solid white;\n  border-bottom: 1.5px solid white;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%], .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  margin: 0;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 40%;\n  font-size: 20px;\n}\n\n.-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 5%;\n  font-size: 17px;\n}\n\n.-app-trees__item-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n  background-size: cover;\n}\n\n.-app-trees__item-image_native[_ngcontent-%COMP%] {\n  background-image: url('tree-list-native-trees-bg.jpg');\n}\n\n.-app-trees__item-image_arboretum[_ngcontent-%COMP%] {\n  background-image: url('tree-list-arboretum-species-bg.jpg');\n}\n\n.-app-trees__item-image_patio[_ngcontent-%COMP%] {\n  background-image: url('tree-list-patio-fruit-trees-bg.jpg');\n}\n\n.-app-trees__item-image_evergreen[_ngcontent-%COMP%] {\n  background-image: url('tree-list-evergreen-trees-bg.jpg');\n}\n\n.-app-trees__item-image_potgrown[_ngcontent-%COMP%] {\n  background-image: url('tree-list-pot-grown-trees-bg.jpg');\n}\n\n.-app-trees__item-image_shrubs[_ngcontent-%COMP%] {\n  background-image: url('tree-list-shrubs-trees-bg.jpg');\n}\n\n.-app-trees__design-block[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 300px;\n  height: 300px;\n  border: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.-app-trees__design-block_upper-left-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-right-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  right: 0%;\n  transform: translate(50%, 50%) rotate(45deg);\n}\n\n.-app-trees__design-block_upper-right-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  right: 0%;\n  transform: translate(50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-left-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  left: 0%;\n  transform: translate(-50%, 50%) rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtbGlzdFxcdHJlZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWxpc3QvdHJlZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDcERKOztBRHlCSTtFQStCQTtJQUNJLDZCQUFBO0VDcEROO0FBQ0Y7O0FEK0JJO0VBbUJBO0lBQ0ksNkJBQUE7RUNoQ047QUFDRjs7QURESTtFQXFDQTtJQXZEQSx1Q0F3RHVCO0VDN0J6QjtFRGdDRTtJQTNEQSxzREE0RHVCO0VDMUJ6QjtFRDZCRTtJQS9EQSxzREFnRXVCO0VDdkJ6QjtFRDBCRTtJQW5FQSxzREFvRXVCO0VDcEJ6QjtFRHVCRTtJQXZFQSxzREF3RXVCO0VDakJ6QjtFRG9CRTtJQTNFQSxzREE0RXVCO0VDZHpCO0VEaUJFO0lBL0VBLHVEQWdGdUI7RUNYekI7RURjRTtJQW5GQSx1REFvRnVCO0VDUnpCO0FBQ0Y7O0FEL0NJO0VBeUJBO0lBdkRBLHVDQXdEdUI7RUMyTXpCO0VEeE1FO0lBM0RBLHNEQTREdUI7RUM4TXpCO0VEM01FO0lBL0RBLHNEQWdFdUI7RUNpTnpCO0VEOU1FO0lBbkVBLHNEQW9FdUI7RUNvTnpCO0VEak5FO0lBdkVBLHNEQXdFdUI7RUN1TnpCO0VEcE5FO0lBM0VBLHNEQTRFdUI7RUMwTnpCO0VEdk5FO0lBL0VBLHVEQWdGdUI7RUM2TnpCO0VEMU5FO0lBbkZBLHVEQW9GdUI7RUNnT3pCO0FBQ0Y7O0FEOU5BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLDhDQUFBO0VBQ0Esc0JBQUE7QUM4Tko7O0FEN05JO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFyR0oscUNBc0d1QjtFQUNuQixzQkFBQTtBQ21PUjs7QURqT1E7RUFyRUoscURBQUE7RUFJQSw2Q0FBQTtBQ3lTSjs7QURyT1E7RUF4RUoscURBQUE7RUFJQSw2Q0FBQTtBQ2dUSjs7QUR4T0k7RUFDSSwrRkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQzBPUjs7QUR4T1E7RUFuRkosdURBQUE7RUFJQSwrQ0FBQTtBQzhUSjs7QUQ1T1E7RUF0RkosMERBQUE7RUFJQSxrREFBQTtBQ3FVSjs7QUQvT0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQWxJSixnQ0FtSXVCO0VBRW5CLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsMENBdkpVO0VBeUpWLFlBeEpBO0VBeUpBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNnUFI7O0FEOU9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNnUFI7O0FEOU9JO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQTVLQTtBQzBaUjs7QUQ3T1E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBQytPWjs7QUQ3T1E7RUFDSSxPQUFBO0VBQ0EsVUFBQTtBQytPWjs7QUQ3T1E7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQTdLUiw4QkE4SzJCO0FDbVAvQjs7QURqUFE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ21QWjs7QURqUFE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ21QWjs7QURqUFE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQTFMUiw4QkEyTDJCO0FDdVAvQjs7QURwUEk7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGVBQUE7QUNtUFI7O0FEalBZO0VBN01SLDRDQThNK0I7QUN1UG5DOztBRHJQWTtFQUNJLFFBQUE7RUFyTVosVUFzTTZCO0VBcE03QiwwQkFBQTtBQzRiSjs7QUR0UFk7RUFDSSxXQUFBO0VBek1aLFVBME02QjtFQXhNN0IsMEJBQUE7QUNpY0o7O0FEdlBZO0VBNU1SLFVBNk02QjtFQTNNN0IsMEJBQUE7QUNxY0o7O0FEdlBRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbE9SLDRDQW1PMkI7RUFFbkIsVUFBQTtFQUNBLFdBQUE7RUE5TlIsZ0JBZ09RO0VBRUEsK0JBQUE7RUFDQSw4QkFBQTtBQzZQWjs7QUQzUFE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFuUFIsNENBb1AyQjtFQUVuQixZQUFBO0VBQ0EsV0FBQTtFQS9PUixnQkFpUFE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0FDaVFaOztBRC9QUTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFsUVIsZ0NBbVEyQjtFQUVuQixXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFoUVIsZ0JBa1FRO0VBOVBSLFVBK1B5QjtFQTdQekIsd0JBQUE7RUErUFEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNzUVo7O0FEcFFRO0VBQ0ksUUFBQTtFQUVBLGVBQUE7QUNxUVo7O0FEblFRO0VBQ0ksVUFBQTtFQUVBLGVBQUE7QUNvUVo7O0FEbFFRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFoU1IsZ0NBaVMyQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQXhSUixZQTBSeUI7RUF4UnpCLHlCQUFBO0VBMFJRLHNCQUFBO0FDc1FaOztBRHJRWTtFQUNJLHNEQUFBO0FDdVFoQjs7QURyUVk7RUFDSSwyREFBQTtBQ3VRaEI7O0FEclFZO0VBQ0ksMkRBQUE7QUN1UWhCOztBRHJRWTtFQUNJLHlEQUFBO0FDdVFoQjs7QURyUVk7RUFDSSx5REFBQTtBQ3VRaEI7O0FEclFZO0VBQ0ksc0RBQUE7QUN1UWhCOztBRG5RSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxvQ0E3VVU7QUMra0JsQjs7QURqUVE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQXpVUiw4Q0EwVTJCO0FDdVEvQjs7QURyUVE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQTlVUiw0Q0ErVTJCO0FDMlEvQjs7QUR6UVE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQW5WUiw2Q0FvVjJCO0FDK1EvQjs7QUQ3UVE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQXhWUiw2Q0F5VjJCO0FDbVIvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1saXN0L3RyZWUtbGlzdC90cmVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiR3aGl0ZU9wYWNpdHkwLTg6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuJGJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC00OiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1vLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIGFuaW1hdGlvbjogI3skc3RyfTsgICAgICBcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZmx5Q3ljbGUpIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZmx5UmlnaHRPbmUpIHtcclxuICAgIDAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KSk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KSk7XHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KSk7XHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNikpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcbn1cclxuLi1hcHAtdHJlZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbWVudS1iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAmX19iaXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dykpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblxyXG4gICAgICAgICZfZmlyc3Qge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzE1cyBsaW5lYXIgMHMgaW5maW5pdGUgZmx5UmlnaHRPbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9zZWNvbmQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzE3cyBsaW5lYXIgMXMgaW5maW5pdGUgZmx5UmlnaHRPbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19iaXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNzQ0NzkvYmlyZC1jZWxscy1uZXcuc3ZnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XHJcblxyXG4gICAgICAgICZfZmlyc3Qge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3NlY29uZCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMC45cyBzdGVwcygxMCkgLTAuNzVzIGluZmluaXRlIGZseUN5Y2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1NHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVPcGFjaXR5MC04O1xyXG5cclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICAgICZfX21lbnUtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgJl9uYXRpdmUge1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2FyYm9yZXR1bSB7XHJcbiAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcGF0aW8ge1xyXG4gICAgICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2V2ZXJncmVlbiB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9wb3Rncm93biB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICByaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3NocnVicyB7XHJcbiAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDApKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MS41JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCAkYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgdG9wOiA0MCU7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjkpO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgJl9uYXRpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbmF0aXZlLXRyZWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYXJib3JldHVtIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LWFyYm9yZXR1bS1zcGVjaWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcGF0aW8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtcGF0aW8tZnJ1aXQtdHJlZXMtYmcuanBnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9ldmVyZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtZXZlcmdyZWVuLXRyZWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcG90Z3Jvd24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtcG90LWdyb3duLXRyZWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2hydWJzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXNocnVicy10cmVlcy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2Rlc2lnbi1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTQ7XHJcbiAgICAgICAgJl91cHBlci1sZWZ0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2JvdHRvbS1yaWdodC1jb3JuZXIge1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3VwcGVyLXJpZ2h0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2JvdHRvbS1sZWZ0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmbHlDeWNsZSB7XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmx5Q3ljbGUge1xuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZmx5Q3ljbGUge1xuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmbHlDeWNsZSB7XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZseUN5Y2xlIHtcbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZseVJpZ2h0T25lIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuQGtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuLi1hcHAtdHJlZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1tZW51LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWVzX19iaXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IC0xMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cbi4tYXBwLXRyZWVzX19iaXJkLWNvbnRhaW5lcl9maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxNXMgbGluZWFyIDBzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICAtbW96LWFuaW1hdGlvbjogMTVzIGxpbmVhciAwcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbiAgLW1zLWFuaW1hdGlvbjogMTVzIGxpbmVhciAwcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbiAgLW8tYW5pbWF0aW9uOiAxNXMgbGluZWFyIDBzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICBhbmltYXRpb246IDE1cyBsaW5lYXIgMHMgaW5maW5pdGUgZmx5UmlnaHRPbmU7XG59XG4uLWFwcC10cmVlc19fYmlyZC1jb250YWluZXJfc2Vjb25kIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDE3cyBsaW5lYXIgMXMgaW5maW5pdGUgZmx5UmlnaHRPbmU7XG4gIC1tb3otYW5pbWF0aW9uOiAxN3MgbGluZWFyIDFzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICAtbXMtYW5pbWF0aW9uOiAxN3MgbGluZWFyIDFzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICAtby1hbmltYXRpb246IDE3cyBsaW5lYXIgMXMgaW5maW5pdGUgZmx5UmlnaHRPbmU7XG4gIGFuaW1hdGlvbjogMTdzIGxpbmVhciAxcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbn1cbi4tYXBwLXRyZWVzX19iaXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIHdpZHRoOiA4OHB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbn1cbi4tYXBwLXRyZWVzX19iaXJkX2ZpcnN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgLW1vei1hbmltYXRpb246IDFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgLW1zLWFuaW1hdGlvbjogMXMgc3RlcHMoMTApIC0wLjVzIGluZmluaXRlIGZseUN5Y2xlO1xuICAtby1hbmltYXRpb246IDFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgYW5pbWF0aW9uOiAxcyBzdGVwcygxMCkgLTAuNXMgaW5maW5pdGUgZmx5Q3ljbGU7XG59XG4uLWFwcC10cmVlc19fYmlyZF9zZWNvbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogMC45cyBzdGVwcygxMCkgLTAuNzVzIGluZmluaXRlIGZseUN5Y2xlO1xuICAtbW96LWFuaW1hdGlvbjogMC45cyBzdGVwcygxMCkgLTAuNzVzIGluZmluaXRlIGZseUN5Y2xlO1xuICAtbXMtYW5pbWF0aW9uOiAwLjlzIHN0ZXBzKDEwKSAtMC43NXMgaW5maW5pdGUgZmx5Q3ljbGU7XG4gIC1vLWFuaW1hdGlvbjogMC45cyBzdGVwcygxMCkgLTAuNzVzIGluZmluaXRlIGZseUN5Y2xlO1xuICBhbmltYXRpb246IDAuOXMgc3RlcHMoMTApIC0wLjc1cyBpbmZpbml0ZSBmbHlDeWNsZTtcbn1cbi4tYXBwLXRyZWVzX190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjb2xvcjogYmxhY2s7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAyNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uLWFwcC10cmVlc19fbWVudS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9uYXRpdmUge1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMjAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9hcmJvcmV0dW0ge1xuICB0b3A6IDUlO1xuICByaWdodDogNDAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9wYXRpbyB7XG4gIHRvcDogMzUlO1xuICByaWdodDogMTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9ldmVyZ3JlZW4ge1xuICBib3R0b206IDUlO1xuICBsZWZ0OiA0MCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3BvdGdyb3duIHtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAyMCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3NocnVicyB7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAxMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG59XG4uLWFwcC10cmVlc19faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOmhvdmVyOjpiZWZvcmUsIC4tYXBwLXRyZWVzX19pdGVtOmhvdmVyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDEpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXIgLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICB0b3A6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICBib3R0b206IDIwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS1pbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMCk7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMSk7XG4gIHdpZHRoOiA5MS41JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUsIC4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICB0b3A6IDQwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcbiAgYm90dG9tOiA1JTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT05MCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbmF0aXZlLXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX2FyYm9yZXR1bSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1hcmJvcmV0dW0tc3BlY2llcy1iZy5qcGdcIik7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9wYXRpbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1wYXRpby1mcnVpdC10cmVlcy1iZy5qcGdcIik7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9ldmVyZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtZXZlcmdyZWVuLXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX3BvdGdyb3duIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXBvdC1ncm93bi10cmVlcy1iZy5qcGdcIik7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9zaHJ1YnMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3Qtc2hydWJzLXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2tfdXBwZXItbGVmdC1jb3JuZXIge1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja19ib3R0b20tcmlnaHQtY29ybmVyIHtcbiAgYm90dG9tOiAwJTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2tfdXBwZXItcmlnaHQtY29ybmVyIHtcbiAgdG9wOiAwJTtcbiAgcmlnaHQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja19ib3R0b20tbGVmdC1jb3JuZXIge1xuICBib3R0b206IDAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbn0iXX0= */", "@media screen and (max-width: 1700px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 275px;\n    height: 275px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 185px;\n    height: 185px;\n  }\n  .-app-trees__menu-item_native[_ngcontent-%COMP%] {\n    top: 12.5%;\n  }\n  .-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n    bottom: 12.5%;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .-app-trees__title[_ngcontent-%COMP%] {\n    letter-spacing: 20px;\n  }\n}\n@media screen and (max-width: 1500px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 170px;\n    height: 170px;\n  }\n  .-app-trees__menu-item_native[_ngcontent-%COMP%] {\n    top: 15%;\n  }\n  .-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n    bottom: 15%;\n  }\n  .-app-trees__title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .-app-trees__item-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 225px;\n    height: 225px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 155px;\n    height: 155px;\n  }\n  .-app-trees__menu-item_native[_ngcontent-%COMP%] {\n    top: 17.5%;\n    left: 15%;\n  }\n  .-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n    bottom: 17.5%;\n    right: 15%;\n  }\n  .-app-trees__title[_ngcontent-%COMP%] {\n    letter-spacing: 16px;\n  }\n  .-app-trees__item-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 140px;\n  }\n  .-app-trees__item-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .-app-trees__title[_ngcontent-%COMP%] {\n    letter-spacing: 13px;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 125px;\n    height: 125px;\n  }\n  .-app-trees__menu-item_native[_ngcontent-%COMP%] {\n    left: 10%;\n  }\n  .-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n    right: 10%;\n  }\n  .-app-trees__menu-item_patio[_ngcontent-%COMP%] {\n    top: 32.5%;\n  }\n  .-app-trees__item-title[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n}\n@media screen and (max-width: 650px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 160px;\n    height: 160px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n  }\n  .-app-trees__item-title[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 140px;\n    height: 140px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 95px;\n    height: 95px;\n  }\n  .-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n    bottom: 7.5%;\n    left: 35%;\n  }\n  .-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n    top: 7.5%;\n    right: 35%;\n  }\n  .-app-trees__title[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    letter-spacing: 9px;\n    font-size: 20px;\n  }\n  .-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-title[_ngcontent-%COMP%] {\n    top: 30%;\n  }\n  .-app-trees__item_title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n  .-app-trees__menu-item[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    bottom: 15%;\n  }\n  .-app-trees__item-title[_ngcontent-%COMP%] {\n    font-size: 8.5px;\n  }\n  .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n    font-size: 6px;\n  }\n}\n@media screen and (max-width: 400px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n    bottom: 10%;\n    left: 25%;\n  }\n  .-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n    top: 10%;\n    right: 25%;\n  }\n}\n@media screen and (max-width: 350px) {\n  .-app-trees__design-block[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n    bottom: 7.5%;\n    left: 22.5%;\n  }\n  .-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n    top: 7.5%;\n    right: 22.5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtbGlzdFxcdHJlZS1saXN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWxpc3QvdHJlZS1saXN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVE7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ0FWO0VERU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ0FWO0VEQ1U7SUFDSSxVQUFBO0VDQ2Q7RURDVTtJQUNJLGFBQUE7RUNDZDtBQUNGO0FESUE7RUFFUTtJQUNJLG9CQUFBO0VDSFY7QUFDRjtBRE9BO0VBRVE7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ05WO0VEUU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ05WO0VET1U7SUFDSSxRQUFBO0VDTGQ7RURPVTtJQUNJLFdBQUE7RUNMZDtFRFFNO0lBQ0ksZUFBQTtFQ05WO0VEU1U7SUFDSSxlQUFBO0VDUGQ7RURTVTtJQUNJLGVBQUE7RUNQZDtBQUNGO0FEWUE7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDWFY7RURhTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDWFY7RURZVTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VDVmQ7RURZVTtJQUNJLGFBQUE7SUFDQSxVQUFBO0VDVmQ7RURhTTtJQUNJLG9CQUFBO0VDWFY7RURjVTtJQUNJLGVBQUE7RUNaZDtFRGNVO0lBQ0ksZUFBQTtFQ1pkO0FBQ0Y7QURpQkE7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDaEJWO0VEa0JNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNoQlY7RURtQlU7SUFDSSxlQUFBO0VDakJkO0VEbUJVO0lBQ0ksZUFBQTtFQ2pCZDtBQUNGO0FEc0JBO0VBRVE7SUFDSSxvQkFBQTtJQUNBLGVBQUE7RUNyQlY7QUFDRjtBRHlCQTtFQUVRO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUN4QlY7RUQwQk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ3hCVjtFRHlCVTtJQUNJLFNBQUE7RUN2QmQ7RUR5QlU7SUFDSSxVQUFBO0VDdkJkO0VEeUJVO0lBQ0ksVUFBQTtFQ3ZCZDtFRDJCVTtJQUNJLGVBQUE7RUN6QmQ7RUQyQlU7SUFDSSxjQUFBO0VDekJkO0FBQ0Y7QUQ4QkE7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDN0JWO0VEK0JNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUM3QlY7RURnQ1U7SUFDSSxpQkFBQTtFQzlCZDtFRGdDVTtJQUNJLGlCQUFBO0VDOUJkO0FBQ0Y7QURtQ0E7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDbENWO0VEb0NNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNsQ1Y7RURtQ1U7SUFDSSxZQUFBO0lBQ0EsU0FBQTtFQ2pDZDtFRG1DVTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDakNkO0VEb0NNO0lBQ0ksa0JBQUE7SUFFQSxtQkFBQTtJQUNBLGVBQUE7RUNuQ1Y7RUR1Q2M7SUFDSSxRQUFBO0VDckNsQjtFRHdDVTtJQUNJLGVBQUE7RUN0Q2Q7RUR3Q1U7SUFDSSxjQUFBO0VDdENkO0FBQ0Y7QUQyQ0E7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDMUNWO0VENENNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUMxQ1Y7RUQ4Q2M7SUFDSSxXQUFBO0VDNUNsQjtFRCtDVTtJQUNJLGdCQUFBO0VDN0NkO0VEK0NVO0lBQ0ksY0FBQTtFQzdDZDtBQUNGO0FEa0RBO0VBRVE7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ2pEVjtFRG9EVTtJQUNJLFdBQUE7SUFDQSxTQUFBO0VDbERkO0VEb0RVO0lBQ0ksUUFBQTtJQUNBLFVBQUE7RUNsRGQ7QUFDRjtBRHVEQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUN0RFY7RUR5RFU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ3ZEZDtFRHlEVTtJQUNJLFNBQUE7SUFDQSxZQUFBO0VDdkRkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWxpc3QvdHJlZS1saXN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgICAuLWFwcC10cmVlcyB7XHJcbiAgICAgICAgJl9fZGVzaWduLWJsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTg1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTg1cHg7XHJcbiAgICAgICAgICAgICZfbmF0aXZlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTIuNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9wb3Rncm93biB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDEyLjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWVzIHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAuLWFwcC10cmVlcyB7XHJcbiAgICAgICAgJl9fZGVzaWduLWJsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgICZfbmF0aXZlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcG90Z3Jvd24ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLi1hcHAtdHJlZXMge1xyXG4gICAgICAgICZfX2Rlc2lnbi1ibG9jayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgICAgICAgICAmX25hdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE3LjUlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcG90Z3Jvd24ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNy41JTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuLWFwcC10cmVlcyB7XHJcbiAgICAgICAgJl9fZGVzaWduLWJsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAuLWFwcC10cmVlcyB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMTNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWVzIHtcclxuICAgICAgICAmX19kZXNpZ24tYmxvY2sge1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgJl9uYXRpdmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcG90Z3Jvd24ge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3BhdGlvIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMzIuNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLi1hcHAtdHJlZXMge1xyXG4gICAgICAgICZfX2Rlc2lnbi1ibG9jayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC4tYXBwLXRyZWVzIHtcclxuICAgICAgICAmX19kZXNpZ24tYmxvY2sge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk1cHg7XHJcbiAgICAgICAgICAgICZfZXZlcmdyZWVuIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNy41JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDM1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FyYm9yZXR1bSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDcuNSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDlweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAmIC4tYXBwLXRyZWVzX19pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC4tYXBwLXRyZWVzIHtcclxuICAgICAgICAmX19kZXNpZ24tYmxvY2sge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICYgLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOC41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuLWFwcC10cmVlcyB7XHJcbiAgICAgICAgJl9fZGVzaWduLWJsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICAmX2V2ZXJncmVlbiB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FyYm9yZXR1bSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAuLWFwcC10cmVlcyB7XHJcbiAgICAgICAgJl9fZGVzaWduLWJsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgJl9ldmVyZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA3LjUlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjIuNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9hcmJvcmV0dW0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3LjUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIyLjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xuICAuLWFwcC10cmVlc19fZGVzaWduLWJsb2NrIHtcbiAgICB3aWR0aDogMjc1cHg7XG4gICAgaGVpZ2h0OiAyNzVweDtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtIHtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAxODVweDtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtX25hdGl2ZSB7XG4gICAgdG9wOiAxMi41JTtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtX3BvdGdyb3duIHtcbiAgICBib3R0b206IDEyLjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLi1hcHAtdHJlZXNfX3RpdGxlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2sge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW0ge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW1fbmF0aXZlIHtcbiAgICB0b3A6IDE1JTtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtX3BvdGdyb3duIHtcbiAgICBib3R0b206IDE1JTtcbiAgfVxuICAuLWFwcC10cmVlc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9jayB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX21lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDE1NXB4O1xuICAgIGhlaWdodDogMTU1cHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9uYXRpdmUge1xuICAgIHRvcDogMTcuNSU7XG4gICAgbGVmdDogMTUlO1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW1fcG90Z3Jvd24ge1xuICAgIGJvdHRvbTogMTcuNSU7XG4gICAgcmlnaHQ6IDE1JTtcbiAgfVxuICAuLWFwcC10cmVlc19fdGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxNnB4O1xuICB9XG4gIC4tYXBwLXRyZWVzX19pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuLWFwcC10cmVlc19fZGVzaWduLWJsb2NrIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuLWFwcC10cmVlc19fdGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9jayB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX21lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogMTI1cHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9uYXRpdmUge1xuICAgIGxlZnQ6IDEwJTtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtX3BvdGdyb3duIHtcbiAgICByaWdodDogMTAlO1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW1fcGF0aW8ge1xuICAgIHRvcDogMzIuNSU7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAuLWFwcC10cmVlc19fZGVzaWduLWJsb2NrIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9jayB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX21lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW1fZXZlcmdyZWVuIHtcbiAgICBib3R0b206IDcuNSU7XG4gICAgbGVmdDogMzUlO1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW1fYXJib3JldHVtIHtcbiAgICB0b3A6IDcuNSU7XG4gICAgcmlnaHQ6IDM1JTtcbiAgfVxuICAuLWFwcC10cmVlc19fdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogOXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XG4gICAgdG9wOiAzMCU7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX2l0ZW1fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuLWFwcC10cmVlc19fZGVzaWduLWJsb2NrIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXIgLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcbiAgICBib3R0b206IDE1JTtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA4LjVweDtcbiAgfVxuICAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuLWFwcC10cmVlc19fZGVzaWduLWJsb2NrIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtX2V2ZXJncmVlbiB7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgbGVmdDogMjUlO1xuICB9XG4gIC4tYXBwLXRyZWVzX19tZW51LWl0ZW1fYXJib3JldHVtIHtcbiAgICB0b3A6IDEwJTtcbiAgICByaWdodDogMjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuLWFwcC10cmVlc19fZGVzaWduLWJsb2NrIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9ldmVyZ3JlZW4ge1xuICAgIGJvdHRvbTogNy41JTtcbiAgICBsZWZ0OiAyMi41JTtcbiAgfVxuICAuLWFwcC10cmVlc19fbWVudS1pdGVtX2FyYm9yZXR1bSB7XG4gICAgdG9wOiA3LjUlO1xuICAgIHJpZ2h0OiAyMi41JTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-list',
          templateUrl: './tree-list.component.html',
          styleUrls: ['./tree-list.component.scss', './tree-list-media.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tree-list/tree-list/tree-list.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/tree-list/tree-list/tree-list.module.ts ***!
    \********************************************************************/

  /*! exports provided: TreeListModule */

  /***/
  function srcAppComponentsTreeListTreeListTreeListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeListModule", function () {
      return TreeListModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tree_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tree-list.component */
    "./src/app/components/tree-list/tree-list/tree-list.component.ts");
    /* harmony import */


    var _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tree-category/tree-category.component */
    "./src/app/components/tree-list/tree-category/tree-category.component.ts");
    /* harmony import */


    var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tree-product/tree-product.component */
    "./src/app/components/tree-list/tree-product/tree-product.component.ts");
    /* harmony import */


    var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tree/tree.component */
    "./src/app/components/tree-list/tree/tree.component.ts");
    /* harmony import */


    var _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tree-list-routing.module */
    "./src/app/components/tree-list/tree-list/tree-list-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-proceed-to-tree-category.guard */
    "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts");
    /* harmony import */


    var src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-proceed-to-tree.guard */
    "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts");
    /* harmony import */


    var src_app_guards_tree_list_can_leave_tree_category_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-leave-tree-category.guard */
    "./src/app/guards/tree-list/can-leave-tree-category.guard.ts");
    /* harmony import */


    var src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/tree-list/format-tree-category-title.pipe */
    "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TreeListModule = function TreeListModule() {
      _classCallCheck(this, TreeListModule);
    };

    TreeListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TreeListModule,
      bootstrap: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"]]
    });
    TreeListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TreeListModule_Factory(t) {
        return new (t || TreeListModule)();
      },
      providers: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"], src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"], src_app_guards_tree_list_can_leave_tree_category_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeCategoryGuard"]],
      imports: [[_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeListModule, {
        declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"], _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"], src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]],
        imports: [_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"], _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"], src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]],
          imports: [_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
          providers: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"], src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"], src_app_guards_tree_list_can_leave_tree_category_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeCategoryGuard"]],
          bootstrap: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/tree-list/tree-product/tree-product.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/tree-list/tree-product/tree-product.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TreeProductComponent */

  /***/
  function srcAppComponentsTreeListTreeProductTreeProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeProductComponent", function () {
      return TreeProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.selectors */
    "./src/app/store/tree-list/tree-list.selectors.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var TreeProductComponent = /*#__PURE__*/function () {
      function TreeProductComponent(_activatedRoute, _router, _store$) {
        _classCallCheck(this, TreeProductComponent);

        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._store$ = _store$;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isSearchLoading = true;
        this.onTreeProductSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TreeProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this2._treeCategoryName = params.categoryName;
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeRouterModeAction"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (isTreeRouterModeAction) {
            if (!isTreeRouterModeAction) {
              _this2.isTreeProductSelected = false;
            }
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeSearchLoading"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (isSearchLoading) {
            _this2.isSearchLoading = isSearchLoading;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "goToCurrentTreeRouter",
        value: function goToCurrentTreeRouter() {
          if (!this.isSearchLoading) {
            this.onTreeProductSelected.emit(this.tree);
            var currentTreeName = this.tree.name;
            var currentTreeRouterName = currentTreeName.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

            this._router.navigate(['/trees', 'tree-category', this._treeCategoryName, 'tree', currentTreeRouterName]);
          }
        }
      }]);

      return TreeProductComponent;
    }();

    TreeProductComponent.ɵfac = function TreeProductComponent_Factory(t) {
      return new (t || TreeProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    TreeProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeProductComponent,
      selectors: [["app-tree-product"]],
      inputs: {
        tree: "tree",
        isTreeProductSelected: "isTreeProductSelected"
      },
      outputs: {
        onTreeProductSelected: "onTreeProductSelected"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "-app-tree-product", 3, "click"], [1, "-app-tree-product__title"], [1, "-app-tree-product__image"], [1, "-app-tree-product__sub-title"]],
      template: function TreeProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeProductComponent_Template_div_click_0_listener() {
            return ctx.goToCurrentTreeRouter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-product_selected", ctx.isTreeProductSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tree.name, " ");
        }
      },
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 250px;\n  width: 250px;\n  padding: 50px 0px;\n}\n.-app-tree-product[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  transition: 0.3s;\n  cursor: pointer;\n  border: 3px solid white;\n  border-radius: 50%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.-app-tree-product_selected[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px black;\n  border: 3px solid #2fff2f;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__title[_ngcontent-%COMP%] {\n  top: -50%;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__button[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover::before {\n  top: 0%;\n}\n.-app-tree-product[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-tree-product[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.-app-tree-product__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  margin: 0px;\n  transition: 0.2s;\n  color: white;\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1px;\n  font-size: 22px;\n}\n.-app-tree-product__image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url('tree-product-image.jpg');\n  background-size: cover;\n}\n.-app-tree-product__sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 170px;\n  transition: 0.4s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: white;\n  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);\n  letter-spacing: 3px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.-app-tree-product__sub-title[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n.-app-tree-product__sub-title[_ngcontent-%COMP%]:hover::before {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n.-app-tree-product__sub-title[_ngcontent-%COMP%]::before {\n  content: \"\uF30A\";\n  position: absolute;\n  top: 50%;\n  left: 90%;\n  transform: translate(0%, -50%) rotate(180deg);\n  transition: 0.6s;\n  color: white;\n  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);\n  font-size: 20px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtcHJvZHVjdFxcdHJlZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQzhCaEI7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FENUJKO0FDK0JBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBekJBLGdCQTJCQTtFQUNBLGVBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUQ3Qko7QUM4Qkk7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0FENUJSO0FDK0JRO0VBQ0ksU0FBQTtBRDdCWjtBQytCUTtFQXRDSixVQXVDeUI7RUFyQ3pCLDBCQUFBO0FEU0o7QUM4QlE7RUF6Q0osVUEwQ3lCO0VBeEN6QiwwQkFBQTtBRGFKO0FDNkJRO0VBQ0ksT0FBQTtBRDNCWjtBQzhCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBNURKLGdCQThESTtFQUVBLG9DQWxGVTtBRHVEbEI7QUM2Qkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQTVGVTtBRCtEbEI7QUMrQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTFGSixnQ0EyRnVCO0VBRW5CLFVBQUE7RUFDQSxXQUFBO0VBdEZKLGdCQXdGSTtFQUVBLFlBL0dBO0VBZ0hBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUR4QlI7QUMwQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLCtDQUFBO0VBQ0Esc0JBQUE7QUQxQlI7QUM0Qkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXRISixnQ0F1SHVCO0VBRW5CLFlBQUE7RUFqSEosZ0JBbUhJO0VBL0dKLFVBZ0hxQjtFQTlHckIsd0JBQUE7RUFnSEksWUEzSUE7RUE0SUEsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHBCUjtBQ3FCUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QURuQlo7QUNvQlk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEbEJoQjtBQ3FCUTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBOUlSLDZDQStJMkI7RUF2STNCLGdCQXlJUTtFQUVBLFlBaEtKO0VBaUtJLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QURkWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1saXN0L3RyZWUtcHJvZHVjdC90cmVlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG5cbi4tYXBwLXRyZWUtcHJvZHVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcbiAgYm9yZGVyOiAzcHggc29saWQgIzJmZmYyZjtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDpob3ZlciAuLWFwcC10cmVlLXByb2R1Y3RfX3RpdGxlIHtcbiAgdG9wOiAtNTAlO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0OmhvdmVyIC4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC10cmVlLXByb2R1Y3Q6aG92ZXIgLi1hcHAtdHJlZS1wcm9kdWN0X19zdWItdGl0bGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDpob3Zlcjo6YmVmb3JlIHtcbiAgdG9wOiAwJTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLXByb2R1Y3QtaW1hZ2UuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19zdWItdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTcwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzO1xuICAtbXMtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG59XG4uLWFwcC10cmVlLXByb2R1Y3RfX3N1Yi10aXRsZTpob3Zlcjo6YmVmb3JlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG59XG4uLWFwcC10cmVlLXByb2R1Y3RfX3N1Yi10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvjIpcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogOTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC42cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNnM7XG4gIC1vLXRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59IiwiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kd2hpdGVPcGFjaXR5MC04OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRibGFja09wYWNpdHkwLTI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuJGxpbWU6IHJnYmEoNDcsIDI1NSwgNDcsIDEpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG59XHJcblxyXG4uLWFwcC10cmVlLXByb2R1Y3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuM3MpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICZfc2VsZWN0ZWQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGxpbWU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmIC4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xyXG4gICAgICAgICAgICB0b3A6IC01MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b24ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4ycyk7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTg7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC0yO1xyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpKTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjJzKTtcclxuXHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggJGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgICZfX2ltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLXByb2R1Y3QtaW1hZ2UuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC40cyk7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMzBhXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpKTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC42cyk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1600px) {\n  [_nghost-%COMP%] {\n    height: 220px;\n    width: 220px;\n    padding: 40px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1600px) {\n  [_nghost-%COMP%] {\n    height: 220px;\n    width: 220px;\n    padding: 40px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n@media screen and (max-width: 1300px) {\n  [_nghost-%COMP%] {\n    height: 190px;\n    width: 190px;\n    padding: 35px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 14px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%]::before {\n    top: 120%;\n    left: 50%;\n    transform: translate(-50%, 0%) rotate(180deg);\n  }\n}\n@media screen and (max-width: 1000px) {\n  [_nghost-%COMP%] {\n    height: 160px;\n    width: 160px;\n    padding: 30px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 900px) {\n  [_nghost-%COMP%] {\n    height: 140px;\n    width: 140px;\n    padding: 25px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%]::before {\n    font-size: 13px;\n  }\n}\n@media screen and (max-width: 700px) {\n  [_nghost-%COMP%] {\n    height: 120px;\n    width: 120px;\n    padding: 20px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%]::before {\n    font-size: 11px;\n  }\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    height: 100px;\n    width: 100px;\n    padding: 15px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 6px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%]::before {\n    font-size: 8px;\n  }\n}\n@media screen and (max-width: 450px) {\n  [_nghost-%COMP%] {\n    height: 80px;\n    width: 80px;\n    padding: 15px 0px;\n  }\n\n  .-app-tree-product__title[_ngcontent-%COMP%] {\n    font-size: 6.5px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%] {\n    font-size: 4.5px;\n  }\n  .-app-tree-product__sub-title[_ngcontent-%COMP%]::before {\n    font-size: 7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtcHJvZHVjdFxcdHJlZS1wcm9kdWN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLXByb2R1Y3QvdHJlZS1wcm9kdWN0LW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDUE47O0VEVU07SUFDSSxlQUFBO0VDUFY7RURTTTtJQUNJLGVBQUE7RUNQVjtBQUNGO0FEV0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNUTjs7RURZTTtJQUNJLGVBQUE7RUNUVjtFRFdNO0lBQ0ksZUFBQTtFQ1RWO0FBQ0Y7QURhQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ1hOOztFRGNNO0lBQ0ksZUFBQTtFQ1hWO0VEYU07SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUNYVjtFRFlVO0lBQ0ksU0FBQTtJQUNBLFNBQUE7SUFsRFosNkNBbUQrQjtFQ05qQztBQUNGO0FEV0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNUTjs7RURZTTtJQUNJLGVBQUE7RUNUVjtFRFdNO0lBQ0ksZUFBQTtFQ1RWO0FBQ0Y7QURhQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ1hOOztFRGNNO0lBQ0ksZUFBQTtFQ1hWO0VEYU07SUFDSSxlQUFBO0VDWFY7RURZVTtJQUNJLGVBQUE7RUNWZDtBQUNGO0FEZUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNiTjs7RURnQk07SUFDSSxlQUFBO0VDYlY7RURlTTtJQUNJLGNBQUE7RUNiVjtFRGNVO0lBQ0ksZUFBQTtFQ1pkO0FBQ0Y7QURpQkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNmTjs7RURrQk07SUFDSSxjQUFBO0VDZlY7RURpQk07SUFDSSxjQUFBO0VDZlY7RURnQlU7SUFDSSxjQUFBO0VDZGQ7QUFDRjtBRG1CQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ2pCTjs7RURvQk07SUFDSSxnQkFBQTtFQ2pCVjtFRG1CTTtJQUNJLGdCQUFBO0VDakJWO0VEa0JVO0lBQ0ksY0FBQTtFQ2hCZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0cmFuc2Zvcm0oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLi1hcHAtdHJlZS1wcm9kdWN0IHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuLWFwcC10cmVlLXByb2R1Y3Qge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcclxuICAgIH1cclxuICAgIC4tYXBwLXRyZWUtcHJvZHVjdCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMjAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkgcm90YXRlKDE4MGRlZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIH1cclxuICAgIC4tYXBwLXRyZWUtcHJvZHVjdCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3N1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuLWFwcC10cmVlLXByb2R1Y3Qge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuLWFwcC10cmVlLXByb2R1Y3Qge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIH1cclxuICAgIC4tYXBwLXRyZWUtcHJvZHVjdCB7XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuLWFwcC10cmVlLXByb2R1Y3Qge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2LjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjVweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gIH1cblxuICAuLWFwcC10cmVlLXByb2R1Y3RfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1wcm9kdWN0X19zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgfVxuXG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAuLWFwcC10cmVlLXByb2R1Y3RfX3N1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTkwcHg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIHBhZGRpbmc6IDM1cHggMHB4O1xuICB9XG5cbiAgLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlOjpiZWZvcmUge1xuICAgIHRvcDogMTIwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpIHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICB9XG5cbiAgLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAyNXB4IDBweDtcbiAgfVxuXG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuLWFwcC10cmVlLXByb2R1Y3RfX3N1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICB9XG5cbiAgLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuLWFwcC10cmVlLXByb2R1Y3RfX3N1Yi10aXRsZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgfVxuXG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDZweDtcbiAgfVxuICAuLWFwcC10cmVlLXByb2R1Y3RfX3N1Yi10aXRsZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgfVxuXG4gIC4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNi41cHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1wcm9kdWN0X19zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNC41cHg7XG4gIH1cbiAgLi1hcHAtdHJlZS1wcm9kdWN0X19zdWItdGl0bGU6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-product',
          templateUrl: './tree-product.component.html',
          styleUrls: ['./tree-product.component.scss', './tree-product-media.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, {
        tree: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isTreeProductSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onTreeProductSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/tree-list/tree/tree.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/tree-list/tree/tree.component.ts ***!
    \*************************************************************/

  /*! exports provided: TreeComponent */

  /***/
  function srcAppComponentsTreeListTreeTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeComponent", function () {
      return TreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.selectors */
    "./src/app/store/tree-list/tree-list.selectors.ts");
    /* harmony import */


    var src_app_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/donation-list/donation */
    "./src/app/models/donation-list/donation.ts");
    /* harmony import */


    var src_app_models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/tree-list/tree-donation */
    "./src/app/models/tree-list/tree-donation.ts");
    /* harmony import */


    var src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.selectors */
    "./src/app/store/donation-list/donation-list.selectors.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.facade */
    "./src/app/store/donation-list/donation-list.facade.ts");
    /* harmony import */


    var src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.facade */
    "./src/app/store/tree-list/tree-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TreeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.applyDonation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Size: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Environment: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Key Feature: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.removeTreeBuyNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.minusTreeBuyNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.plusTreeBuyNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.choose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Choose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__selected-tree_visible", ctx_r0.isSelectedTree);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__description-button_description-mode", ctx_r0.descriptionMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__details-button_not-description-mode", !ctx_r0.descriptionMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__description_not-description-mode", !ctx_r0.descriptionMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__details_description-mode", ctx_r0.descriptionMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.tree.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.size, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.environment, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.keyFeature, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 23, ctx_r0.totalCost), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.myFormTreeNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.canMinusTreeNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.canMinusTreeNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-current-tree__form-input_invalid", ctx_r0.myFormTreeNumber.controls["treeDonationNumber"].touched && ctx_r0.myFormTreeNumber.controls["treeDonationNumber"].invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.myFormTreeNumber.controls["treeDonationNumber"].invalid);
      }
    }

    function TreeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TreeComponent = /*#__PURE__*/function () {
      function TreeComponent(_activatedRoute, _store$, _facadeDonationListService, _facadeTreeListService, _router) {
        _classCallCheck(this, TreeComponent);

        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeTreeListService = _facadeTreeListService;
        this._router = _router;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._donationListBeforeRegistration = null;
        this.isSearchLoading = true;
        this.descriptionMode = true;
        this.treeBuyNumber = 1;
        this.initTreeNumberForm();
      }

      _createClass(TreeComponent, [{
        key: "initTreeNumberForm",
        value: function initTreeNumberForm() {
          this.myFormTreeNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            treeDonationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this.donationTreeNumberValidator])
          });
        }
      }, {
        key: "donationTreeNumberValidator",
        value: function donationTreeNumberValidator(control) {
          var currentDonationTreeNumber = Number(control.value);
          var maxTreeBuyNumber = 50;

          if (!isNaN(currentDonationTreeNumber) && currentDonationTreeNumber > 0 && currentDonationTreeNumber <= maxTreeBuyNumber) {
            return null;
          } else {
            return {
              userNameInputControlName: true
            };
          }
        }
      }, {
        key: "isCanMinusTreeNumber",
        value: function isCanMinusTreeNumber() {
          var currentTreeBuyNumber = Number(this.myFormTreeNumber.controls.treeDonationNumber.value);
          return currentTreeBuyNumber > 1 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this3._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');

            _this3.descriptionMode = true;

            _this3.removeTreeBuyNumber();

            _this3.isSelectedTree = false;

            _this3._facadeTreeListService.isSelectedTreeForDonation(params.treeName, _this3._donationListBeforeRegistration);

            _this3._facadeTreeListService.searchTree(params.treeName);

            _this3._facadeTreeListService.goToTreeRouterMode();
          });

          this._store$.select(src_app_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_6__["selectDonationListBeforeRegistration"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (donationListBeforeRegistration) {
            if (Boolean(donationListBeforeRegistration)) {
              _this3._donationListBeforeRegistration = donationListBeforeRegistration;
            }
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsSelectedTree"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isSelectedTree) {
            _this3.isSelectedTree = isSelectedTree;
          });

          var searTreeDelay = 3000;

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchTree"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(searTreeDelay)).subscribe(function (tree) {
            if (Boolean(tree)) {
              _this3.tree = tree;

              _this3._facadeTreeListService.selectTreeProduct(_this3.tree);

              _this3.totalCost = _this3.tree.cost;

              _this3._facadeTreeListService.searchTreeSuccess();
            }
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeSearchLoading"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isSearchLoading) {
            _this3.isSearchLoading = isSearchLoading;
          });

          this.myFormTreeNumber.controls.treeDonationNumber.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (treeNumber) {
            if (_this3.myFormTreeNumber.controls.treeDonationNumber.valid) {
              _this3.treeBuyNumber = Number(treeNumber);
              _this3.totalCost = Number(_this3.treeBuyNumber) * _this3.tree.cost;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();

          this._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
        }
      }, {
        key: "toggleMenuMode",
        value: function toggleMenuMode() {
          this.descriptionMode = !this.descriptionMode;
        }
      }, {
        key: "minusTreeBuyNumber",
        value: function minusTreeBuyNumber() {
          var currentTreeBuyNumber = Number(this.myFormTreeNumber.controls.treeDonationNumber.value);
          var currentFormTreeBuyNumberAfterMinus = String(currentTreeBuyNumber - 1);
          this.myFormTreeNumber.patchValue({
            treeDonationNumber: currentFormTreeBuyNumberAfterMinus
          });
          this.canMinusTreeNumber = this.isCanMinusTreeNumber();
        }
      }, {
        key: "plusTreeBuyNumber",
        value: function plusTreeBuyNumber() {
          var currentTreeBuyNumber = Number(this.myFormTreeNumber.controls.treeDonationNumber.value);
          var currentFormTreeBuyNumberAfterPlus = String(currentTreeBuyNumber + 1);
          this.myFormTreeNumber.patchValue({
            treeDonationNumber: currentFormTreeBuyNumberAfterPlus
          });
          this.canMinusTreeNumber = true;
        }
      }, {
        key: "removeTreeBuyNumber",
        value: function removeTreeBuyNumber() {
          this.myFormTreeNumber.patchValue({
            treeDonationNumber: '1'
          });
          this.canMinusTreeNumber = false;
        }
      }, {
        key: "choose",
        value: function choose() {
          this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');

          var chosenTreeNumber = Number(this.myFormTreeNumber.controls.treeDonationNumber.value);
          var donation = new src_app_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__["Donation"]('D', null, new src_app_models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__["TreeDonation"]('TD', chosenTreeNumber, this.totalCost, this.tree), new Date());
          this.isSelectedTree = true;

          this._facadeDonationListService.initNewUserDonationBeforeRegistration(donation);
        }
      }, {
        key: "applyDonation",
        value: function applyDonation() {
          this._router.navigate(['/donation']);
        }
      }]);

      return TreeComponent;
    }();

    TreeComponent.ɵfac = function TreeComponent_Factory(t) {
      return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_10__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_11__["FacadeServiceTreeList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeComponent,
      selectors: [["app-tree"]],
      decls: 2,
      vars: 2,
      consts: [["class", "-app-current-tree", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-current-tree"], [1, "-app-current-tree-wrapper"], [1, "-app-current-tree__title-ribbon"], [1, "-app-current-tree__title-ribbon_left"], [1, "-app-current-tree__title"], [1, "-app-current-tree__title-ribbon_right"], ["title", "apply donation", 1, "-app-current-tree__selected-tree", 3, "click"], [1, "-app-current-tree__menu"], [1, "-app-current-tree__description-button", 3, "click"], [1, "-app-current-tree__details-button", 3, "click"], [1, "-app-current-tree__content-wrapper"], [1, "-app-current-tree__description"], [1, "-app-current-tree__details"], [1, "-app-current-tree__image", 3, "src"], [1, "-app-current-tree__feature-list"], [1, "-app-current-tree__feature"], [1, "-app-current-tree__feature-title"], [1, "-app-current-tree__feature-sub-title"], [1, "-app-current-tree_feature-sub-title"], [1, "-app-current-tree__cost-ribbon"], [1, "-app-current-tree__cost"], [1, "-app-current-tree__donate"], [1, "-app-current-tree__form", 3, "formGroup"], [1, "-app-current-tree__form-button", "-app-current-tree__form-button_remove", 3, "disabled", "click"], [1, "-app-current-tree__form-button", "-app-current-tree__form-button_minus", 3, "disabled", "click"], ["name", "name", "type", "text", "formControlName", "treeDonationNumber", "autocomplete", "off", "title", "max number of trees per donation - 50", 1, "-app-current-tree__form-input"], [1, "-app-current-tree__form-button", "-app-current-tree__form-button_plus", 3, "click"], [1, "-app-current-tree__form-donate-button", "-app-current-tree__form-donate-button_donate", 3, "disabled", "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]],
      template: function TreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeComponent_div_0_Template, 46, 25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_div_1_Template, 15, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  height: 100vh;\n}\n.-app-current-tree[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 65%;\n  padding: 0px 200px;\n  color: white;\n}\n.-app-current-tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 70px;\n  box-sizing: border-box;\n  border: 2px solid white;\n  border-radius: 10px;\n  background-color: rgba(8, 37, 8, 0.95);\n}\n.-app-current-tree__selected-tree[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  right: 2.5%;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n}\n.-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n  content: \"\uF00C\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #082508;\n  font-size: 40px;\n  font-weight: 600;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-current-tree__selected-tree_visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 5;\n  cursor: pointer;\n}\n.-app-current-tree__title-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0px;\n  width: 100%;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-right: 2px solid white;\n  border-radius: 5px 0 0 5px;\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-left: 2px solid white;\n  border-radius: 0 5px 5px 0;\n  background: white;\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  right: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 0px;\n  padding: 25px 0px;\n  padding-right: 80px;\n  box-sizing: border-box;\n  color: rgba(8, 37, 8, 0.95);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n  letter-spacing: 3px;\n  font-size: 28px;\n}\n.-app-current-tree__menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 20px;\n  letter-spacing: 1px;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 150px;\n  padding: 10px 20px;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-size: 17px;\n  font-weight: 600;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .-app-current-tree__details-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 100%;\n  transform: translate(0%, 0%);\n  width: 100%;\n  height: 2px;\n  transition: 0.4s;\n  background-color: white;\n}\n.-app-current-tree__description-button_description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__details-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: -100%;\n  transform: translate(0%, 0%);\n  width: 100%;\n  height: 2px;\n  transition: 0.4s;\n  background-color: white;\n}\n.-app-current-tree__details-button_not-description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n  overflow: hidden;\n}\n.-app-current-tree__description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  overflow: auto;\n  transition: 0.4s;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n.-app-current-tree__description_not-description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -120%);\n}\n.-app-current-tree__details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.4s;\n}\n.-app-current-tree__details_description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 120%;\n  transform: translate(0%, 0%);\n}\n.-app-current-tree__image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n  border: 2px solid white;\n}\n.-app-current-tree__feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  height: 90%;\n  overflow: auto;\n  font-size: 20px;\n}\n.-app-current-tree__feature[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px 0px;\n  box-sizing: border-box;\n  text-align: right;\n}\n.-app-current-tree__feature-title[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  text-align: left;\n}\n.-app-current-tree__feature-sub-title[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -6.1px;\n  right: 10%;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  bottom: 44px;\n  width: 0;\n  height: 0;\n  border-left: 53px solid transparent;\n  border-right: 53px solid transparent;\n  border-bottom: 15px solid white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 10px;\n  display: block;\n  width: 90px;\n  padding: 12px 8px 16px;\n  border-bottom-right-radius: 8px;\n  background: white;\n  color: rgba(8, 37, 8, 0.95);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n  text-align: center;\n  letter-spacing: 1px;\n  line-height: 1;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: -7.5px;\n  width: 8px;\n  height: 8px;\n  border-bottom-left-radius: 4px;\n  background: white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5px;\n  left: -9px;\n  width: 9px;\n  height: 8px;\n  border-radius: 0 0 8px 8px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.-app-current-tree__donate[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  margin-top: 20px;\n  box-sizing: border-box;\n}\n.-app-current-tree__form[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n.-app-current-tree__form-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  padding: 0px 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.-app-current-tree__form-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n.-app-current-tree__form-button[_ngcontent-%COMP%]:active::before {\n  font-size: 24px;\n}\n.-app-current-tree__form-button[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 22px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-current-tree__form-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n}\n.-app-current-tree__form-button_plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n}\n.-app-current-tree__form-button_minus[_ngcontent-%COMP%]::before {\n  content: \"\uF068\";\n}\n.-app-current-tree__form-button_remove[_ngcontent-%COMP%]::before {\n  content: \"\uF1F8\";\n}\n.-app-current-tree__form-input[_ngcontent-%COMP%] {\n  min-width: 35px;\n  max-width: 50px;\n  height: 100%;\n  margin: 0px 5px;\n  padding: 2px 5px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid white;\n  border-radius: 5px;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  background: rgba(8, 37, 8, 0.95);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n  letter-spacing: 1px;\n  font-size: 20px;\n}\n.-app-current-tree__form-input_invalid[_ngcontent-%COMP%] {\n  border: 2px solid #ff0e0e;\n  color: #ff0e0e;\n}\n.-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 15px 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #082508;\n  border-radius: 15px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);\n  background-color: white;\n  color: rgba(8, 37, 8, 0.95);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 800;\n}\n.-app-current-tree__form-donate-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n  cursor: default;\n}\n.-app-current-tree__form-donate-button[_ngcontent-%COMP%]:active {\n  transform: translate(-52%, -52%);\n  box-shadow: 2px 2px 6px black;\n  font-size: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWVcXHRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDa0NoQjtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7QURsQ0o7QUNxQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQXhESTtBRG9CUjtBQ3FDSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQWhFeUI7QUR5QmpDO0FDeUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUE5REosOEJBK0R1QjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQTFESixnQkE0REk7RUFDQSxVQUFBO0FEakNSO0FDa0NRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUExRVIsZ0NBMkUyQjtFQUVuQixjQXRGaUI7RUF1RmpCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEN0JaO0FDK0JRO0VBQ0ksVUFBQTtFQUVBLFVBQUE7RUFFQSxlQUFBO0FEL0JaO0FDa0NJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsMkNBQUE7RUFFQSxpQkF0SEE7QURtRlI7QUNxQ1k7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSw2QkFBQTtFQUNBLDBCQUFBO0VBRUEsaUJBdElSO0FEK0ZSO0FDeUNZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0VBRUEsOEJBL0lFO0FEb0dsQjtBQytDWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQkF0S1I7QURxSFI7QUNtRFk7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsMEJBQUE7RUFFQSw4QkEvS0U7QUQwSGxCO0FDeURJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLDJCQTFMeUI7RUEyTHpCLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEekRSO0FDMkRJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsbUJBQUE7QUQzRFI7QUM2REk7RUFFSSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGhFUjtBQ2lFUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUQvRFo7QUNtRVE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQTdOUiw0QkE4TjJCO0VBRW5CLFdBQUE7RUFDQSxXQUFBO0VBek5SLGdCQTJOUTtFQUVBLHVCQXRQSjtBRHlMUjtBQ2dFWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBN09aLDhCQThPK0I7RUFFbkIsV0FBQTtFQUNBLFdBQUE7RUFFQSx1QkFwUVI7QUR1TVI7QUNrRVE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQTdQUiw0QkE4UDJCO0VBRW5CLFdBQUE7RUFDQSxXQUFBO0VBelBSLGdCQTJQUTtFQUVBLHVCQXRSSjtBRDBOUjtBQytEWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBN1FaLDhCQThRK0I7RUFFbkIsV0FBQTtFQUNBLFdBQUE7RUFFQSx1QkFwU1I7QUR3T1I7QUNnRUk7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUQvRFI7QUNpRUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBbFNKLDRCQW1TdUI7RUFFbkIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBcFNKLGdCQXNTSTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEM0RSO0FDNERRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQXRUUixpQ0F1VDJCO0FEdEQvQjtBQ3lESTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUE3VEosOEJBOFR1QjtFQUVuQixhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBN1RKLGdCQStUSTtBRGxEUjtBQ21EUTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUEzVVIsNEJBNFUyQjtBRDdDL0I7QUNnREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7QUQvQ1I7QUNpREk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0FEakRSO0FDbURJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0FEbkRSO0FDb0RRO0VBQ0ksbUJBQUE7RUFHQSxnQkFBQTtBRHBEWjtBQ3NEUTtFQUNJLHNCQUFBO0FEcERaO0FDdURJO0VBQ0ksa0JBQUE7RUFFQSxjQUFBO0VBQ0EsVUFBQTtBRHREUjtBQ3VEUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUR4RFo7QUMyREk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtFQUVBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLCtCQUFBO0VBRUEsaUJBdGFBO0VBd2FBLDJCQS9aeUI7RUFnYXpCLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQ5RFI7QUMrRFE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7RUFFQSxpQkEzYko7QUQwWFI7QUNtRVE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsMEJBQUE7RUFFQSw4QkF0Y007QURpWWxCO0FDd0VJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBRHhFUjtBQzBFSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FEMUVSO0FDMkVRO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBOWNSLGdCQWdkUTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUQxRVo7QUMyRVk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEekVoQjtBQzRFZ0I7RUFDSSxlQUFBO0FEMUVwQjtBQzZFWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUE1ZVosZ0NBNmUrQjtFQUVuQixZQWhnQlI7RUFpZ0JRLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUR4RWhCO0FDMEVZO0VBemVSLFlBMGU2QjtFQXhlN0IseUJBQUE7QURpYUo7QUMwRWdCO0VBQ0ksWUFBQTtBRHhFcEI7QUM0RWdCO0VBQ0ksWUFBQTtBRDFFcEI7QUM4RWdCO0VBQ0ksWUFBQTtBRDVFcEI7QUNnRlE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFyZ0JSLGdCQXVnQlE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUVBLGdDQS9oQnFCO0VBaWlCckIsWUExaUJKO0VBMmlCSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEOUVaO0FDK0VZO0VBQ0kseUJBQUE7RUFDQSxjQXZpQlY7QUQwZE47QUNnRlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBdGlCUixnQ0F1aUIyQjtFQUVuQixrQkFBQTtFQWppQlIsZ0JBbWlCUTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBRUEsdUJBcGtCSjtFQXNrQkksMkJBN2pCcUI7RUE4akJyQix5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQzRVo7QUM0RVk7RUEvaUJSLFlBZ2pCNkI7RUE5aUI3Qix5QkFBQTtFQStpQlksZUFBQTtBRHpFaEI7QUMyRVk7RUEvakJSLGdDQWdrQitCO0VBRW5CLDZCQUFBO0VBRUEsZUFBQTtBRHZFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi4tYXBwLWN1cnJlbnQtdHJlZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NSU7XG4gIHBhZGRpbmc6IDBweCAyMDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDcwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fc2VsZWN0ZWQtdHJlZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHJpZ2h0OiAyLjUlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAwO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19zZWxlY3RlZC10cmVlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AjFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogIzA4MjUwODtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3NlbGVjdGVkLXRyZWVfdmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAtMXB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uX2xlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtOXB4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCA3cHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbl9sZWZ0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBsZWZ0OiAtNC41cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZS1yaWJib25fcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTlweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgN3B4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbl9yaWdodDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgcmlnaHQ6IC00LjVweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDI1cHggMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uLCAuLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDZweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uIDpob3ZlciwgLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbiA6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC40cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbi1idXR0b25fZGVzY3JpcHRpb24tbW9kZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IC0xMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscy1idXR0b25fbm90LWRlc2NyaXB0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb250ZW50LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb25fbm90LWRlc2NyaXB0aW9uLW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEyMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEyMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMjAlKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzO1xuICAtbXMtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlsc19kZXNjcmlwdGlvbi1tb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAxMjAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDkwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtdGl0bGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLXN1Yi10aXRsZSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Nvc3QtcmliYm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC02LjFweDtcbiAgcmlnaHQ6IDEwJTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdC1yaWJib246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiA0NHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwcHg7XG4gIHBhZGRpbmc6IDEycHggOHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogLTcuNXB4O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMC41cHg7XG4gIGxlZnQ6IC05cHg7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kb25hdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0tYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0tYnV0dG9uOmFjdGl2ZTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWJ1dHRvbjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjY7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0tYnV0dG9uX3BsdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0tYnV0dG9uX21pbnVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BqFwiO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWJ1dHRvbl9yZW1vdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74e4XCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0taW5wdXQge1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIG1heC13aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1pbnB1dF9pbnZhbGlkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmMGUwZTtcbiAgY29sb3I6ICNmZjBlMGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0tZG9uYXRlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwODI1MDg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1kb25hdGUtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWRvbmF0ZS1idXR0b246YWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTIlLCAtNTIlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTIlLCAtNTIlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MiUsIC01MiUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTIlLCAtNTIlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUyJSwgLTUyJSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IGJsYWNrO1xuICBmb250LXNpemU6IDIxcHg7XG59IiwiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kYmxhY2s6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiRibGFja09wYWNpdHkwLTk6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC03OiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiRibGFja09wYWNpdHkwLTY6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJGJsYWNrT3BhY2l0eTAtNDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4kYmxhY2tPcGFjaXR5MC0zOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTogcmdiYSg4LCAzNywgOCwgMSk7XHJcbiRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xyXG4kcmVkOiByZ2JhKDI1NSwgMTQsIDE0LCAxKTtcclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi4tYXBwLWN1cnJlbnQtdHJlZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgICBwYWRkaW5nOiAwcHggMjAwcHg7XHJcbiAgIFxyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNzBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5MC05NTtcclxuICAgIH1cclxuICAgICZfX3NlbGVjdGVkLXRyZWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICByaWdodDogMi41JTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl92aXNpYmxlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUtcmliYm9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAycHggM3B4ICRibGFja09wYWNpdHkwLTM7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAmX2xlZnQge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC00LjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3JpZ2h0IHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC05cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTQuNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmX19tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbi1idXR0b24sXHJcbiAgICAmX19kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCAkYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbi1idXR0b24ge1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuNHMpO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2Rlc2NyaXB0aW9uLW1vZGUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZGV0YWlscy1idXR0b24ge1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAwJSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjRzKTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9ub3QtZGVzY3JpcHRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAwJSkpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC40cyk7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAmX25vdC1kZXNjcmlwdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTEyMCUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXRhaWxzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC40cyk7XHJcbiAgICAgICAgJl9kZXNjcmlwdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMjAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKDAlLCAwJSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2ltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgIH1cclxuICAgICZfX2ZlYXR1cmUtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgICZfX2ZlYXR1cmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29zdC1yaWJib24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgYm90dG9tOiAtNi4xcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDQ0cHg7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29zdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4IDE2cHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC03LjVweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMC41cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC05cHg7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrT3BhY2l0eTAtODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kb25hdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9wbHVzIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNjdcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX21pbnVzIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNjhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3JlbW92ZSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMWY4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4zcyk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCAkYmxhY2tPcGFjaXR5MC02O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5MC05NTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgJl9pbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRyZWQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWRvbmF0ZS1idXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCA1MHB4O1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkYmxhY2tPcGFjaXR5MC05O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMC42KTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MiUsIC01MiUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAkYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */", "@media screen and (max-width: 1900px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    height: 70%;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 120px;\n  }\n  .-app-current-tree__form[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    left: 60%;\n  }\n}\n@media screen and (max-width: 1750px) {\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    left: 70%;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .-app-current-tree__feature-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .-app-current-tree-feature-subtitle[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 37px;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    left: 82.5%;\n    padding: 15px 30px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .-app-current-tree__image[_ngcontent-%COMP%] {\n    width: 175px;\n    height: 175px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 34px;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .-app-current-tree__menu[_ngcontent-%COMP%], .-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n    min-height: 260px;\n  }\n  .-app-current-tree__donate[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .-app-current-tree__form[_ngcontent-%COMP%] {\n    justify-content: space-around;\n    align-items: center;\n    margin: 0px;\n  }\n  .-app-current-tree__form-input[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    top: 125%;\n    left: 50%;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 31px;\n  }\n}\n@media screen and (max-width: 1350px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    padding: 0px;\n    width: 500px;\n  }\n  .-app-current-tree__donate[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .-app-current-tree-wrapper[_ngcontent-%COMP%] {\n    padding: 50px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .-app-current-tree__description[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .-app-current-tree__image[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n@media screen and (max-width: 1150px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    padding: 0px;\n    width: 450px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    padding-right: 45px;\n    font-size: 18px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .-app-current-tree__image[_ngcontent-%COMP%] {\n    width: 125px;\n    height: 125px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 40px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 25px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    width: 350px;\n    height: 55%;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    font-size: 14px;\n  }\n  .-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .-app-current-tree-wrapper[_ngcontent-%COMP%] {\n    padding: 50px 40px;\n  }\n  .-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n    min-height: 170px;\n  }\n  .-app-current-tree__donate[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .-app-current-tree__donate[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n  .-app-current-tree__form[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .-app-current-tree__form-button[_ngcontent-%COMP%]::before {\n    font-size: 18px;\n  }\n  .-app-current-tree__form-input[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    top: 170%;\n    padding: 10px 25px;\n    font-size: 14px;\n  }\n  .-app-current-tree__cost[_ngcontent-%COMP%] {\n    width: 80px;\n    font-size: 14px;\n  }\n  .-app-current-tree__cost-ribbon[_ngcontent-%COMP%]::after {\n    right: 10px;\n    bottom: 38px;\n    border-left: 48px solid transparent;\n    border-right: 48px solid transparent;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .-app-current-tree-wrapper[_ngcontent-%COMP%] {\n    padding: 50px 30px;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 110px;\n  }\n  .-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .-app-current-tree__form-button[_ngcontent-%COMP%]::before {\n    font-size: 16px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    top: 160%;\n  }\n  .-app-current-tree__image[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .-app-current-tree-wrapper[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    padding: 10px;\n    padding-right: 30px;\n  }\n  .-app-current-tree__description[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 110px;\n    font-size: 12px;\n  }\n  .-app-current-tree__form[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .-app-current-tree__form-button[_ngcontent-%COMP%]::before {\n    font-size: 14px;\n  }\n  .-app-current-tree__form-input[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 30px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    top: 190%;\n  }\n  .-app-current-tree__image[_ngcontent-%COMP%] {\n    width: 75px;\n    height: 75px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n}\n@media screen and (max-width: 500px) {\n  [_nghost-%COMP%] {\n    width: 55%;\n  }\n\n  .-app-current-tree[_ngcontent-%COMP%] {\n    width: 225px;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n  .-app-current-tree-wrapper[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n    font-size: 8px;\n    padding: 10px 5px;\n  }\n  .-app-current-tree__form-input[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 25px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 7.5px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .-app-current-tree__selected-tree[_ngcontent-%COMP%]::before {\n    font-size: 15px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 500px;\n  }\n  .-app-current-tree-wrapper[_ngcontent-%COMP%] {\n    padding: 50px 10px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n    padding-right: 17.5px;\n    font-size: 14px;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 100px;\n  }\n  .-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n    min-height: 150px;\n  }\n  .-app-current-tree__donate[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .-app-current-tree__form-button[_ngcontent-%COMP%]::before {\n    font-size: 12px;\n  }\n  .-app-current-tree__form-input[_ngcontent-%COMP%] {\n    height: 20px;\n  }\n  .-app-current-tree__form-donate-button[_ngcontent-%COMP%] {\n    top: 170%;\n    padding: 7px 20px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 400px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    height: 450px;\n    width: 175px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n    min-height: 130px;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 60px;\n  }\n  .-app-current-tree__feature-list[_ngcontent-%COMP%] {\n    font-size: 6px;\n  }\n  .-app-current-tree__image[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n}\n@media screen and (max-width: 350px) {\n  .-app-current-tree[_ngcontent-%COMP%] {\n    height: 430px;\n    width: 150px;\n  }\n  .-app-current-tree__title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n    min-height: 130px;\n  }\n  .-app-current-tree__menu[_ngcontent-%COMP%] {\n    padding-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS9EOlxcRVBBTSB0cmFpbmluZ1xcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHJlZS1saXN0XFx0cmVlXFx0cmVlLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL3RyZWUtbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLFdBQUE7RUNDTjtFREFNO0lBQ0ksa0JBQUE7RUNFVjtFREFNO0lBQ0ksZ0JBQUE7RUNFVjtFRERVO0lBQ0ksU0FBQTtFQ0dkO0FBQ0Y7QURFQTtFQUdZO0lBQ0ksU0FBQTtFQ0ZkO0VES007SUFDSSxlQUFBO0VDSFY7RURLTTtJQUNJLGFBQUE7RUNIVjtFREtNO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUNIVjtFRE1VO0lBQ0ksZUFBQTtFQ0pkO0FBQ0Y7QURTQTtFQUVRO0lBQ0ksZUFBQTtFQ1JWO0VEV1U7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUNUZDtFRFlNO0lBQ0ksZUFBQTtFQ1ZWO0VEWU07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ1ZWO0VEYVU7SUFDSSxlQUFBO0VDWGQ7QUFDRjtBRGdCQTtFQUVRO0lBR0ksV0FBQTtJQUNBLHNCQUFBO0VDakJWO0VEbUJNO0lBQ0ksaUJBQUE7RUNqQlY7RURtQk07SUFDSSxhQUFBO0VDakJWO0VEbUJNO0lBQ0ksNkJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUNqQlY7RURrQlU7SUFDSSxZQUFBO0VDaEJkO0VEa0JVO0lBQ0ksU0FBQTtJQUNBLFNBQUE7RUNoQmQ7RURtQk07SUFDSSxlQUFBO0VDakJWO0VEb0JVO0lBQ0ksZUFBQTtFQ2xCZDtBQUNGO0FEdUJBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3JCTjtFRHNCTTtJQUNJLFdBQUE7RUNwQlY7RURzQk07SUFDSSxhQUFBO0VDcEJWO0VEc0JNO0lBQ0ksZUFBQTtFQ3BCVjtFRHNCTTtJQUNJLGVBQUE7RUNwQlY7RUR1QlU7SUFDSSxlQUFBO0VDckJkO0VEd0JNO0lBQ0ksZUFBQTtFQ3RCVjtFRHdCTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDdEJWO0FBQ0Y7QUQwQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDeEJOO0VEeUJNO0lBQ0ksZUFBQTtFQ3ZCVjtFRDBCVTtJQUNJLGVBQUE7RUN4QmQ7QUFDRjtBRDZCQTtFQUNJO0lBQ0ksWUFBQTtFQzNCTjtFRDRCTTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQzFCVjtFRDRCTTtJQUNJLGVBQUE7RUMxQlY7RUQ0Qk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQzFCVjtFRDZCVTtJQUNJLGVBQUE7RUMzQmQ7RUQrQlU7SUFDSSxlQUFBO0VDN0JkO0FBQ0Y7QURrQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VDaENOO0VEaUNNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDL0JWO0VEaUNNO0lBRUksZUFBQTtFQ2hDVjtFRGtDTTtJQUNJLGVBQUE7RUNoQ1Y7RURrQ007SUFDSSxrQkFBQTtFQ2hDVjtFRGtDTTtJQUNJLGlCQUFBO0VDaENWO0VEa0NNO0lBQ0ksV0FBQTtFQ2hDVjtFRGtDTTtJQUNJLFlBQUE7RUNoQ1Y7RURrQ007SUFDSSxZQUFBO0VDaENWO0VEa0NjO0lBQ0ksZUFBQTtFQ2hDbEI7RURtQ1U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ2pDZDtFRG1DVTtJQUNJLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUNqQ2Q7RURvQ007SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ2xDVjtFRG9DYztJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUNBQUE7SUFDQSxvQ0FBQTtFQ2xDbEI7RURzQ007SUFDSSxlQUFBO0VDcENWO0VEc0NNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNwQ1Y7RURxQ1U7SUFDSSxlQUFBO0VDbkNkO0FBQ0Y7QUR3Q0E7RUFDSTtJQUNJLFlBQUE7RUN0Q047RUR1Q007SUFDSSxrQkFBQTtFQ3JDVjtFRHVDTTtJQUNJLGtCQUFBO0VDckNWO0VEdUNNO0lBRUksZUFBQTtFQ3RDVjtFRDBDYztJQUNJLGVBQUE7RUN4Q2xCO0VEMkNVO0lBQ0ksU0FBQTtFQ3pDZDtFRDRDTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDMUNWO0VENkNVO0lBQ0ksZUFBQTtFQzNDZDtBQUNGO0FEZ0RBO0VBQ0k7SUFDSSxZQUFBO0VDOUNOO0VEK0NNO0lBQ0ksa0JBQUE7RUM3Q1Y7RUQrQ007SUFDSSxhQUFBO0lBQ0EsbUJBQUE7RUM3Q1Y7RUQrQ007SUFDSSxjQUFBO0VDN0NWO0VEK0NNO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VDN0NWO0VEK0NNO0lBQ0ksWUFBQTtFQzdDVjtFRCtDYztJQUNJLGVBQUE7RUM3Q2xCO0VEZ0RVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUM5Q2Q7RURnRFU7SUFDSSxTQUFBO0VDOUNkO0VEaURNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUMvQ1Y7RURpRE07SUFDSSxjQUFBO0VDL0NWO0FBQ0Y7QURtREE7RUFDSTtJQUNJLFVBQUE7RUNqRE47O0VEbURFO0lBQ0ksWUFBQTtFQ2hETjtFRGlETTtJQUNJLG9CQUFBO0VDL0NWO0VEaURNO0lBQ0ksa0JBQUE7RUMvQ1Y7RURpRE07SUFDSSxlQUFBO0VDL0NWO0VEaURNO0lBRUksY0FBQTtJQUNBLGlCQUFBO0VDaERWO0VEbURVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNqRGQ7RURvRE07SUFDSSxnQkFBQTtFQ2xEVjtFRG9ETTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDbERWO0VEbURVO0lBQ0ksZUFBQTtFQ2pEZDtBQUNGO0FEc0RBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ3BETjtFRHFETTtJQUNJLGtCQUFBO0VDbkRWO0VEcURNO0lBQ0ksZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7RUNuRFY7RURxRE07SUFDSSxrQkFBQTtFQ25EVjtFRHFETTtJQUNJLGlCQUFBO0VDbkRWO0VEcURNO0lBQ0ksWUFBQTtFQ25EVjtFRHVEYztJQUNJLGVBQUE7RUNyRGxCO0VEd0RVO0lBQ0ksWUFBQTtFQ3REZDtFRHdEVTtJQUNJLFNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUN0RGQ7QUFDRjtBRDJEQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7RUN6RE47RUQwRE07SUFDSSxlQUFBO0VDeERWO0VEMERNO0lBQ0ksaUJBQUE7RUN4RFY7RUQwRE07SUFDSSxpQkFBQTtFQ3hEVjtFRDBETTtJQUNJLGNBQUE7RUN4RFY7RUQwRE07SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ3hEVjtBQUNGO0FENERBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQzFETjtFRDJETTtJQUNJLGVBQUE7RUN6RFY7RUQyRE07SUFDSSxpQkFBQTtFQ3pEVjtFRDJETTtJQUNJLGlCQUFBO0VDekRWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL3RyZWUtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcclxuICAgIC4tYXBwLWN1cnJlbnQtdHJlZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgJl9fbWVudSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICYtZG9uYXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NTBweCkge1xyXG4gICAgLi1hcHAtY3VycmVudC10cmVlIHtcclxuICAgICAgICAmX19mb3JtIHtcclxuICAgICAgICAgICAgJi1kb25hdGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mZWF0dXJlLWxpc3Qge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2ZlYXR1cmUtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWZlYXR1cmUtc3VidGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zZWxlY3RlZC10cmVlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAuLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mb3JtIHtcclxuICAgICAgICAgICAgJi1kb25hdGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDgyLjUlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2ZlYXR1cmUtbGlzdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3NlbGVjdGVkLXRyZWUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC4tYXBwLWN1cnJlbnQtdHJlZSB7XHJcbiAgICAgICAgJl9fbWVudSxcclxuICAgICAgICAmX19kZXNjcmlwdGlvbi1idXR0b24sXHJcbiAgICAgICAgJl9fZGV0YWlscy1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2RvbmF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2Zvcm0ge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICYtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtZG9uYXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEyNSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZmVhdHVyZS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zZWxlY3RlZC10cmVlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XHJcbiAgICAuLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgJl9fZG9uYXRlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZm9ybSB7XHJcbiAgICAgICAgICAgICYtZG9uYXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZmVhdHVyZS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLi1hcHAtY3VycmVudC10cmVlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICZfX2ZlYXR1cmUtbGlzdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc2VsZWN0ZWQtdHJlZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAuLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZmVhdHVyZS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc2VsZWN0ZWQtdHJlZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc2VsZWN0ZWQtdHJlZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgICAmX19tZW51IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2Rlc2NyaXB0aW9uLWJ1dHRvbixcclxuICAgICAgICAmX19kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2RvbmF0ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19kb25hdGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2Zvcm0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1kb25hdGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTcwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19jb3N0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgJi1yaWJib24ge1xyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDQ4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZmVhdHVyZS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zZWxlY3RlZC10cmVlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC4tYXBwLWN1cnJlbnQtdHJlZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZGVzY3JpcHRpb24tYnV0dG9uLFxyXG4gICAgICAgICZfX2RldGFpbHMtYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mb3JtIHtcclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1kb25hdGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fc2VsZWN0ZWQtdHJlZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAuLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAmLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mb3JtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtZG9uYXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mZWF0dXJlLWxpc3Qge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgIH1cclxuICAgIC4tYXBwLWN1cnJlbnQtdHJlZSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgICZfX21lbnUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi13cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZGVzY3JpcHRpb24tYnV0dG9uLFxyXG4gICAgICAgICZfX2RldGFpbHMtYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mb3JtIHtcclxuICAgICAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mZWF0dXJlLWxpc3Qge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcuNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19zZWxlY3RlZC10cmVlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC4tYXBwLWN1cnJlbnQtdHJlZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgJi13cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3LjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19tZW51IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZG9uYXRlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19mb3JtIHtcclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1kb25hdGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTcwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLi1hcHAtY3VycmVudC10cmVlIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX21lbnUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZmVhdHVyZS1saXN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2ltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAuLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICZfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fbWVudSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTAwcHgpIHtcbiAgLi1hcHAtY3VycmVudC10cmVlIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX21lbnUge1xuICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWRvbmF0ZS1idXR0b24ge1xuICAgIGxlZnQ6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc1MHB4KSB7XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1kb25hdGUtYnV0dG9uIHtcbiAgICBsZWZ0OiA3MCU7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlLWZlYXR1cmUtc3VidGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fc2VsZWN0ZWQtdHJlZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDM3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWRvbmF0ZS1idXR0b24ge1xuICAgIGxlZnQ6IDgyLjUlO1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9faW1hZ2Uge1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fc2VsZWN0ZWQtdHJlZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAuLWFwcC1jdXJyZW50LXRyZWVfX21lbnUsIC4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uLCAuLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fY29udGVudC13cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2RvbmF0ZSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWlucHV0IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWRvbmF0ZS1idXR0b24ge1xuICAgIHRvcDogMTI1JTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3NlbGVjdGVkLXRyZWU6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcbiAgLi1hcHAtY3VycmVudC10cmVlIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZG9uYXRlIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWUtd3JhcHBlciB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1kb25hdGUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2ltYWdlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC4tYXBwLWN1cnJlbnQtdHJlZSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fc2VsZWN0ZWQtdHJlZTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC4tYXBwLWN1cnJlbnQtdHJlZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZS1saXN0IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19pbWFnZSB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogMTI1cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19zZWxlY3RlZC10cmVlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3NlbGVjdGVkLXRyZWU6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuLWFwcC1jdXJyZW50LXRyZWUge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX21lbnUge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbi1idXR0b24sIC4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscy1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTcwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19kb25hdGUge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZG9uYXRlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWJ1dHRvbjo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWlucHV0IHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19mb3JtLWRvbmF0ZS1idXR0b24ge1xuICAgIHRvcDogMTcwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdC1yaWJib246OmFmdGVyIHtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDM4cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDQ4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA0OHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZS1saXN0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19zZWxlY3RlZC10cmVlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19zZWxlY3RlZC10cmVlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLi1hcHAtY3VycmVudC10cmVlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX21lbnUge1xuICAgIHBhZGRpbmctdG9wOiAxMTBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uLWJ1dHRvbiwgLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1idXR0b246OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1kb25hdGUtYnV0dG9uIHtcbiAgICB0b3A6IDE2MCU7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19zZWxlY3RlZC10cmVlOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLi1hcHAtY3VycmVudC10cmVlIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19tZW51IHtcbiAgICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1idXR0b246OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1pbnB1dCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1kb25hdGUtYnV0dG9uIHtcbiAgICB0b3A6IDE5MCU7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19pbWFnZSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZS1saXN0IHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cblxuICAuLWFwcC1jdXJyZW50LXRyZWUge1xuICAgIHdpZHRoOiAyMjVweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX21lbnUge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uLCAuLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2Zvcm0taW5wdXQge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtbGlzdCB7XG4gICAgZm9udC1zaXplOiA3LjVweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3NlbGVjdGVkLXRyZWUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX3NlbGVjdGVkLXRyZWU6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuLWFwcC1jdXJyZW50LXRyZWUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX190aXRsZSB7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNy41cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fbWVudSB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fY29udGVudC13cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2RvbmF0ZSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1idXR0b246OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1pbnB1dCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fZm9ybS1kb25hdGUtYnV0dG9uIHtcbiAgICB0b3A6IDE3MCU7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuLWFwcC1jdXJyZW50LXRyZWUge1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTMwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19tZW51IHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtbGlzdCB7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19pbWFnZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuLWFwcC1jdXJyZW50LXRyZWUge1xuICAgIGhlaWdodDogNDMwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICAuLWFwcC1jdXJyZW50LXRyZWVfX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTMwcHg7XG4gIH1cbiAgLi1hcHAtY3VycmVudC10cmVlX19tZW51IHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree',
          templateUrl: './tree.component.html',
          styleUrls: ['./tree.component.scss', './tree-media.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
        }, {
          type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_10__["FacadeServiceDonationList"]
        }, {
          type: src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_11__["FacadeServiceTreeList"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/tree-list/can-leave-tree-category.guard.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/guards/tree-list/can-leave-tree-category.guard.ts ***!
    \*******************************************************************/

  /*! exports provided: CanLeaveTreeCategoryGuard */

  /***/
  function srcAppGuardsTreeListCanLeaveTreeCategoryGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanLeaveTreeCategoryGuard", function () {
      return CanLeaveTreeCategoryGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanLeaveTreeCategoryGuard = /*#__PURE__*/function () {
      function CanLeaveTreeCategoryGuard() {
        _classCallCheck(this, CanLeaveTreeCategoryGuard);
      }

      _createClass(CanLeaveTreeCategoryGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return CanLeaveTreeCategoryGuard;
    }();

    CanLeaveTreeCategoryGuard.ɵfac = function CanLeaveTreeCategoryGuard_Factory(t) {
      return new (t || CanLeaveTreeCategoryGuard)();
    };

    CanLeaveTreeCategoryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanLeaveTreeCategoryGuard,
      factory: CanLeaveTreeCategoryGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveTreeCategoryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts":
  /*!************************************************************************!*\
    !*** ./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts ***!
    \************************************************************************/

  /*! exports provided: CanProceedToTreeCategoryGuard */

  /***/
  function srcAppGuardsTreeListCanProceedToTreeCategoryGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToTreeCategoryGuard", function () {
      return CanProceedToTreeCategoryGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/tree-list/tree-type */
    "./src/app/models/tree-list/tree-type.ts");

    var CanProceedToTreeCategoryGuard = /*#__PURE__*/function () {
      function CanProceedToTreeCategoryGuard() {
        _classCallCheck(this, CanProceedToTreeCategoryGuard);
      }

      _createClass(CanProceedToTreeCategoryGuard, [{
        key: "isExistTreeType",
        value: function isExistTreeType(currentCategoryName) {
          for (var treeType in _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__["TreeType"]) {
            if (currentCategoryName === _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__["TreeType"][treeType]) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "canActivate",
        value: function canActivate(next) {
          var currentCategoryName = next.params.categoryName;
          var isTreeTypeExist = this.isExistTreeType(currentCategoryName);

          if (!isTreeTypeExist) {
            var errorMessage = "This tree category (".concat(currentCategoryName, ") does not exist! Try more!");
            throw new Error(errorMessage);
          }

          return isTreeTypeExist;
        }
      }]);

      return CanProceedToTreeCategoryGuard;
    }();

    CanProceedToTreeCategoryGuard.ɵfac = function CanProceedToTreeCategoryGuard_Factory(t) {
      return new (t || CanProceedToTreeCategoryGuard)();
    };

    CanProceedToTreeCategoryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToTreeCategoryGuard,
      factory: CanProceedToTreeCategoryGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToTreeCategoryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts":
  /*!***************************************************************!*\
    !*** ./src/app/guards/tree-list/can-proceed-to-tree.guard.ts ***!
    \***************************************************************/

  /*! exports provided: CanProceedToTreeGuard */

  /***/
  function srcAppGuardsTreeListCanProceedToTreeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanProceedToTreeGuard", function () {
      return CanProceedToTreeGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/tree-list/tree-list.selectors */
    "./src/app/store/tree-list/tree-list.selectors.ts");
    /* harmony import */


    var _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/tree-list/tree-type */
    "./src/app/models/tree-list/tree-type.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var CanProceedToTreeGuard = /*#__PURE__*/function () {
      function CanProceedToTreeGuard(_store$) {
        _classCallCheck(this, CanProceedToTreeGuard);

        this._store$ = _store$;
      }

      _createClass(CanProceedToTreeGuard, [{
        key: "isExistTreeCategoryRouteName",
        value: function isExistTreeCategoryRouteName(treeType) {
          var isExistTreeCategory;

          for (var currentTreeType in _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"]) {
            if (treeType === _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"][currentTreeType]) {
              isExistTreeCategory = true;
            }
          }

          if (isExistTreeCategory && this._currentUrl.includes(treeType)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "checkTree",
        value: function checkTree(treeRouteName) {
          var isExistCurrentUrlTree;

          var searchTree = this._treeList.find(function (tree) {
            if (Boolean(tree)) {
              var currentTreeRouteName = tree.name.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

              if (treeRouteName === currentTreeRouteName) {
                return tree;
              }
            }
          });

          if (Boolean(searchTree)) {
            isExistCurrentUrlTree = this.isExistTreeCategoryRouteName(searchTree.type);
          }

          if (!isExistCurrentUrlTree) {
            var errorMessage = "There is no tree with this name (".concat(treeRouteName, ")");
            throw new Error(errorMessage);
          }
        }
      }, {
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this4 = this;

          this._currentUrl = state.url;
          var currentTreeRouteName = next.params.treeName;

          this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectTreeList"]).subscribe(function (treeList) {
            _this4._treeList = treeList;

            _this4.checkTree(currentTreeRouteName);
          }).unsubscribe();

          return true;
        }
      }]);

      return CanProceedToTreeGuard;
    }();

    CanProceedToTreeGuard.ɵfac = function CanProceedToTreeGuard_Factory(t) {
      return new (t || CanProceedToTreeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    CanProceedToTreeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanProceedToTreeGuard,
      factory: CanProceedToTreeGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToTreeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pipes/tree-list/format-tree-category-title.pipe.ts ***!
    \********************************************************************/

  /*! exports provided: FormatTreeCategoryTitlePipe */

  /***/
  function srcAppPipesTreeListFormatTreeCategoryTitlePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatTreeCategoryTitlePipe", function () {
      return FormatTreeCategoryTitlePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatTreeCategoryTitlePipe = /*#__PURE__*/function () {
      function FormatTreeCategoryTitlePipe() {
        _classCallCheck(this, FormatTreeCategoryTitlePipe);
      }

      _createClass(FormatTreeCategoryTitlePipe, [{
        key: "transform",
        value: function transform(value) {
          return value.split('-').map(function (currentWord) {
            return currentWord[0].toUpperCase() + currentWord.slice(1);
          }).join(' ');
        }
      }]);

      return FormatTreeCategoryTitlePipe;
    }();

    FormatTreeCategoryTitlePipe.ɵfac = function FormatTreeCategoryTitlePipe_Factory(t) {
      return new (t || FormatTreeCategoryTitlePipe)();
    };

    FormatTreeCategoryTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatTreeCategoryTitle",
      type: FormatTreeCategoryTitlePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatTreeCategoryTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatTreeCategoryTitle'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-tree-list-tree-list-tree-list-module-es5.js.map