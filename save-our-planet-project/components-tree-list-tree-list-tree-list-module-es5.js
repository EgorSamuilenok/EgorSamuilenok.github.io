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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.facade */
    "./src/app/store/tree-list/tree-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../tree-product/tree-product.component */
    "./src/app/components/tree-list/tree-product/tree-product.component.ts");
    /* harmony import */


    var src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pipes/tree-list/format-tree-category-title.pipe */
    "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");

    function TreeCategoryComponent_app_tree_product_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tree-product", 5);
      }

      if (rf & 2) {
        var tree_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tree", tree_r1);
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
        this._windowScrollHeight = 20;
      }

      _createClass(TreeCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var scrollUpButton = document.querySelector('.-app-scroll-up-button_tree-category');
          window.addEventListener('scroll', function () {
            if (window.scrollY > _this._windowScrollHeight) {
              scrollUpButton.classList.add('-app-scroll-up-button_tree-category-visible');
            } else {
              scrollUpButton.classList.remove('-app-scroll-up-button_tree-category-visible');
            }
          });

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
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();

          this._facadeTreeListService.goFromTreeRouter();
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
          window.scrollTo(0, 0);
        }
      }]);

      return TreeCategoryComponent;
    }();

    TreeCategoryComponent.ɵfac = function TreeCategoryComponent_Factory(t) {
      return new (t || TreeCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceTreeList"]));
    };

    TreeCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeCategoryComponent,
      selectors: [["app-tree-category"]],
      decls: 9,
      vars: 8,
      consts: [[1, "-app-tree-category"], [1, "-app-tree-category__title"], ["class", "-app-tree-category__product", 3, "tree", 4, "ngFor", "ngForOf"], [1, "-app-tree-category__back-button", 3, "click"], [1, "-app-scroll-up-button", "-app-scroll-up-button_tree-category", 3, "click"], [1, "-app-tree-category__product", 3, "tree"]],
      template: function TreeCategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatTreeCategoryTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeCategoryComponent_app_tree_product_5_Template, 1, 1, "app-tree-product", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_div_click_6_listener() {
            return ctx.goToTreeCategoryRouter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_a_click_7_listener() {
            return ctx.scrollTop();
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category__back-button_tree-mode", ctx.treeMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_8__["TreeProductComponent"]],
      pipes: [src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatTreeCategoryTitlePipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.-app-tree-category[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n}\n.-app-tree-category[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 120px;\n  z-index: -9999;\n  width: 100%;\n  height: 100vh;\n  background-image: url('tree-category-bg.jpg');\n  background-size: cover;\n}\n.-app-tree-category_tree-mode[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.-app-tree-category__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 50px;\n  color: white;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);\n  letter-spacing: 4px;\n  font-size: 36px;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-child) {\n  position: relative;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  top: 87%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  height: 100px;\n  width: 4px;\n  background-color: white;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10%;\n  left: 10%;\n  transform: translate(-50%, 0%);\n  width: 60px;\n  height: 60px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  border: 1px solid white;\n  border-radius: 50%;\n  box-shadow: 0px 0px 8px black;\n  background-color: #082508;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:active {\n  transform: translate(-50%, 2%);\n  width: 65px;\n  height: 65px;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 2px 2px 6px black;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.3s;\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 23px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-tree-category__back-button_tree-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1jYXRlZ29yeS90cmVlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtY2F0ZWdvcnlcXHRyZWUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMkJoQjtFQUNJLGFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBRDFCSjtBQzZCQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBekJBLGdCQTJCQTtBRHpCSjtBQzBCSTtFQUNJLFdBQUE7RUFFQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFFQSw2Q0FBQTtFQUNBLHNCQUFBO0FEM0JSO0FDNkJJO0VBQ0ksVUFBQTtBRDNCUjtBQzZCSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBLFlBbkVBO0VBb0VBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FENUJSO0FDOEJJO0VBQ0ksa0JBQUE7QUQ1QlI7QUM2QlE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXJFUiw4QkFzRTJCO0VBRW5CLGFBQUE7RUFDQSxVQUFBO0VBRUEsdUJBckZKO0FEMkRSO0FDNkJJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBakZKLDhCQWtGdUI7RUFFbkIsV0FBQTtFQUNBLFlBQUE7RUE3RUosZ0JBK0VJO0VBQ0EsZUFBQTtFQTVFSixVQTZFcUI7RUEzRXJCLHdCQUFBO0VBNkVJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUVBLHlCQXRHcUI7QURnRjdCO0FDdUJRO0VBaEdKLDhCQWlHMkI7RUFFbkIsV0FBQTtFQUNBLFlBQUE7QURsQlo7QUNxQlk7RUFDSSw4QkFBQTtBRG5CaEI7QUNzQlE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQS9HUixnQ0FnSDJCO0VBeEczQixnQkEwR1E7RUFFQSxZQTlISjtFQStISSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEZFo7QUNnQlE7RUE5R0osVUErR3lCO0VBN0d6QiwwQkFBQTtBRGdHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnkvdHJlZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLi1hcHAtdHJlZS1jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEyMHB4O1xuICB6LWluZGV4OiAtOTk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnktYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV90cmVlLW1vZGUge1xuICB3aWR0aDogNDAlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fcHJvZHVjdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fcHJvZHVjdDpub3QoOmxhc3QtY2hpbGQpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODclO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAxMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyNTA4O1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b246YWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMiUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMiUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIlKTtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbl90cmVlLW1vZGUge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn0iLCIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtOTogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4kcGh0aGFsb2N5YW5pbmVHcmVlbk9wYWNpdHk6IHJnYmEoOCwgMzcsIDgsIDEpO1xyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkcHJvcGVydHk7IFxyXG4gICAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgdHJhbnNpdGlvbjogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XHJcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcclxuICAgICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi4tYXBwLXRyZWUtY2F0ZWdvcnkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMTIwcHg7XHJcbiAgICAgICAgei1pbmRleDogLTk5OTk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1jYXRlZ29yeS1iZy5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgJl90cmVlLW1vZGUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICRibGFja09wYWNpdHkwLTk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAmX19wcm9kdWN0Om5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDg3JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2JhY2stYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkYmxhY2s7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTtcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMiUpKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4ICRibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjA1M1wiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggJGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl90cmVlLW1vZGUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-category',
          templateUrl: './tree-category.component.html',
          styleUrls: ['./tree-category.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceTreeList"]
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


    var src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-leave-tree.guard */
    "./src/app/guards/tree-list/can-leave-tree.guard.ts");

    var routes = [{
      path: '',
      component: _tree_list_component__WEBPACK_IMPORTED_MODULE_2__["TreeListComponent"]
    }, {
      path: 'tree-category/:categoryName',
      component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"],
      canActivate: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToTreeCategoryGuard"]],
      children: [{
        path: 'tree/:treeName',
        component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
        canActivate: [src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToTreeGuard"]],
        canDeactivate: [src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveTreeGuard"]]
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
          var treeTypeContent = treeTypeHtmlElement.innerHTML.toLowerCase();
          var treeCategory = treeTypeContent.split(' ').join('-');

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save Our Planet");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View Products");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Products");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View Products");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "View Products");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "View Products");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n@-webkit-keyframes flyCycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@keyframes flyCycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@-webkit-keyframes flyRightOne {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n@keyframes flyRightOne {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n.-app-trees[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-image: url('tree-list-menu-bg.jpg');\n  background-size: cover;\n}\n\n.-app-trees__bird-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 20%;\n  left: -10%;\n  transform: scale(0) translateX(-10vw);\n  will-change: transform;\n  \n}\n\n.-app-trees__bird-container_first[_ngcontent-%COMP%] {\n  \n  -webkit-animation: 15s linear 0s infinite flyRightOne;\n  animation: 15s linear 0s infinite flyRightOne;\n}\n\n.-app-trees__bird-container_second[_ngcontent-%COMP%] {\n  \n  -webkit-animation: 17s linear 1s infinite flyRightOne;\n  animation: 17s linear 1s infinite flyRightOne;\n}\n\n.-app-trees__bird[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg\");\n  background-size: auto 100%;\n  width: 88px;\n  height: 125px;\n  will-change: background-position;\n  \n}\n\n.-app-trees__bird_first[_ngcontent-%COMP%] {\n  -webkit-animation: 1s steps(10) -0.5s infinite flyCycle;\n  animation: 1s steps(10) -0.5s infinite flyCycle;\n  \n}\n\n.-app-trees__bird_second[_ngcontent-%COMP%] {\n  -webkit-animation: 0.9s steps(10) -0.75s infinite flyCycle;\n  animation: 0.9s steps(10) -0.75s infinite flyCycle;\n  \n}\n\n.-app-trees__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 30px;\n  padding-left: 54px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: black;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-transform: uppercase;\n  letter-spacing: 24px;\n  font-style: italic;\n}\n\n.-app-trees__menu-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-trees__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 200px;\n  height: 200px;\n  color: white;\n}\n\n.-app-trees__menu-item_native[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 20%;\n}\n\n.-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n  top: 5%;\n  right: 40%;\n}\n\n.-app-trees__menu-item_patio[_ngcontent-%COMP%] {\n  top: 35%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: 40%;\n}\n\n.-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n  bottom: 10%;\n  right: 20%;\n}\n\n.-app-trees__menu-item_shrubs[_ngcontent-%COMP%] {\n  top: 70%;\n  left: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover::before, .-app-trees__item[_ngcontent-%COMP%]:hover::after {\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 20%;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-image[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1, 0);\n  width: 90%;\n  height: 90%;\n  transition: 0.2s;\n  border-right: 1.5px solid white;\n  border-left: 1.5px solid white;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 1);\n  width: 91.5%;\n  height: 90%;\n  transition: 0.2s;\n  border-top: 1.5px solid white;\n  border-bottom: 1.5px solid white;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%], .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  margin: 0;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 40%;\n}\n\n.-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 5%;\n}\n\n.-app-trees__item-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n  background-size: cover;\n}\n\n.-app-trees__item-image_native[_ngcontent-%COMP%] {\n  background-image: url('tree-list-native-trees-bg.jpg');\n}\n\n.-app-trees__item-image_arboretum[_ngcontent-%COMP%] {\n  background-image: url('tree-list-arboretum-species-bg.jpg');\n}\n\n.-app-trees__item-image_patio[_ngcontent-%COMP%] {\n  background-image: url('tree-list-patio-fruit-trees-bg.jpg');\n}\n\n.-app-trees__item-image_evergreen[_ngcontent-%COMP%] {\n  background-image: url('tree-list-evergreen-bg.jpg');\n}\n\n.-app-trees__item-image_potgrown[_ngcontent-%COMP%] {\n  background-image: url('tree-list-pot-grown-trees-bg.jpg');\n}\n\n.-app-trees__item-image_shrubs[_ngcontent-%COMP%] {\n  background-image: url('tree-list-shrubs-bg.jpg');\n}\n\n.-app-trees__design-block[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 300px;\n  height: 300px;\n  border: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.-app-trees__design-block_upper-left-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-right-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  right: 0%;\n  transform: translate(50%, 50%) rotate(45deg);\n}\n\n.-app-trees__design-block_upper-right-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  right: 0%;\n  transform: translate(50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-left-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  left: 0%;\n  transform: translate(-50%, 50%) rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtbGlzdFxcdHJlZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWxpc3QvdHJlZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDcERKOztBRHlCSTtFQStCQTtJQUNJLDZCQUFBO0VDcEROO0FBQ0Y7O0FEK0JJO0VBbUJBO0lBQ0ksNkJBQUE7RUNoQ047QUFDRjs7QURESTtFQXFDQTtJQXZEQSx1Q0F3RHVCO0VDN0J6QjtFRGdDRTtJQTNEQSxzREE0RHVCO0VDMUJ6QjtFRDZCRTtJQS9EQSxzREFnRXVCO0VDdkJ6QjtFRDBCRTtJQW5FQSxzREFvRXVCO0VDcEJ6QjtFRHVCRTtJQXZFQSxzREF3RXVCO0VDakJ6QjtFRG9CRTtJQTNFQSxzREE0RXVCO0VDZHpCO0VEaUJFO0lBL0VBLHVEQWdGdUI7RUNYekI7RURjRTtJQW5GQSx1REFvRnVCO0VDUnpCO0FBQ0Y7O0FEL0NJO0VBeUJBO0lBdkRBLHVDQXdEdUI7RUMyTXpCO0VEeE1FO0lBM0RBLHNEQTREdUI7RUM4TXpCO0VEM01FO0lBL0RBLHNEQWdFdUI7RUNpTnpCO0VEOU1FO0lBbkVBLHNEQW9FdUI7RUNvTnpCO0VEak5FO0lBdkVBLHNEQXdFdUI7RUN1TnpCO0VEcE5FO0lBM0VBLHNEQTRFdUI7RUMwTnpCO0VEdk5FO0lBL0VBLHVEQWdGdUI7RUM2TnpCO0VEMU5FO0lBbkZBLHVEQW9GdUI7RUNnT3pCO0FBQ0Y7O0FEOU5BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLDhDQUFBO0VBQ0Esc0JBQUE7QUM4Tko7O0FEN05JO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFyR0oscUNBc0d1QjtFQUNuQixzQkFBQTtFQUVEOzt5Q0FBQTtBQ29PUDs7QURqT1E7RUFDRzt3QkFBQTtFQXpFUCxxREFBQTtFQUlBLDZDQUFBO0FDOFNKOztBRHJPUTtFQUNJO3dCQUFBO0VBOUVSLHFEQUFBO0VBSUEsNkNBQUE7QUN1VEo7O0FEeE9JO0VBQ0ksK0ZBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFFSDs7MkNBQUE7QUMyT0w7O0FEeE9RO0VBN0ZKLHVEQUFBO0VBSUEsK0NBQUE7RUEyRk87NEJBQUE7QUMrT1g7O0FENU9RO0VBbEdKLDBEQUFBO0VBSUEsa0RBQUE7RUFnR1E7NEJBQUE7QUNtUFo7O0FEL09JO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFoSkosZ0NBaUp1QjtFQUVuQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLDBDQXJLVTtFQXVLVixZQXRLQTtFQXVLQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ2dQUjs7QUQ5T0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2dQUjs7QUQ5T0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFlBekxBO0FDdWFSOztBRDdPUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0FDK09aOztBRDdPUTtFQUNJLE9BQUE7RUFDQSxVQUFBO0FDK09aOztBRDdPUTtFQUNJLFFBQUE7RUFDQSxVQUFBO0VBMUxSLDhCQTJMMkI7QUNtUC9COztBRGpQUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDbVBaOztBRGpQUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDbVBaOztBRGpQUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBdk1SLDhCQXdNMkI7QUN1UC9COztBRHBQSTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtBQ21QUjs7QURqUFk7RUExTlIsNENBMk4rQjtBQ3VQbkM7O0FEclBZO0VBQ0ksUUFBQTtFQWxOWixVQW1ONkI7RUFqTjdCLDBCQUFBO0FDeWNKOztBRHRQWTtFQUNJLFdBQUE7RUF0TlosVUF1TjZCO0VBck43QiwwQkFBQTtBQzhjSjs7QUR2UFk7RUF6TlIsVUEwTjZCO0VBeE43QiwwQkFBQTtBQ2tkSjs7QUR2UFE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUEvT1IsNENBZ1AyQjtFQUVuQixVQUFBO0VBQ0EsV0FBQTtFQTNPUixnQkE2T1E7RUFFQSwrQkFBQTtFQUNBLDhCQUFBO0FDNlBaOztBRDNQUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQWhRUiw0Q0FpUTJCO0VBRW5CLFlBQUE7RUFDQSxXQUFBO0VBNVBSLGdCQThQUTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNpUVo7O0FEL1BRO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQS9RUixnQ0FnUjJCO0VBRW5CLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQTdRUixnQkErUVE7RUEzUVIsVUE0UXlCO0VBMVF6Qix3QkFBQTtFQTRRUSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ3NRWjs7QURwUVE7RUFDSSxRQUFBO0FDc1FaOztBRHBRUTtFQUNJLFVBQUE7QUNzUVo7O0FEcFFRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUF6U1IsZ0NBMFMyQjtFQUVuQixXQUFBO0VBQ0EsWUFBQTtFQWpTUixZQW1TeUI7RUFqU3pCLHlCQUFBO0VBbVNRLHNCQUFBO0FDd1FaOztBRHZRWTtFQUNJLHNEQUFBO0FDeVFoQjs7QUR2UVk7RUFDSSwyREFBQTtBQ3lRaEI7O0FEdlFZO0VBQ0ksMkRBQUE7QUN5UWhCOztBRHZRWTtFQUNJLG1EQUFBO0FDeVFoQjs7QUR2UVk7RUFDSSx5REFBQTtBQ3lRaEI7O0FEdlFZO0VBQ0ksZ0RBQUE7QUN5UWhCOztBRHJRSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxvQ0F0VlU7QUMwbEJsQjs7QURuUVE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQWxWUiw4Q0FtVjJCO0FDeVEvQjs7QUR2UVE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQXZWUiw0Q0F3VjJCO0FDNlEvQjs7QUQzUVE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQTVWUiw2Q0E2VjJCO0FDaVIvQjs7QUQvUVE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQWpXUiw2Q0FrVzJCO0FDcVIvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1saXN0L3RyZWUtbGlzdC90cmVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiR3aGl0ZU9wYWNpdHkwLTg6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuJGJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC00OiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcclxuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gICAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcclxufVxyXG5cclxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gICAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9ICBcclxuICAgIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAjeyRzdHJ9O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIC1vLWFuaW1hdGlvbjogI3skc3RyfTtcclxuICAgIGFuaW1hdGlvbjogI3skc3RyfTsgICAgICBcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZmx5Q3ljbGUpIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBrZXlmcmFtZXMoZmx5UmlnaHRPbmUpIHtcclxuICAgIDAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KSk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KSk7XHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KSk7XHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNikpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KSk7XHJcbiAgICB9XHJcbn1cclxuLi1hcHAtdHJlZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbWVudS1iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAmX19iaXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dykpO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblxyXG4gICAgICAgLyogIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgKi9cclxuICAgICAgICAmX2ZpcnN0IHtcclxuICAgICAgICAgICAvKiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMDsgKi9cclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcxNXMgbGluZWFyIDBzIGluZmluaXRlIGZseVJpZ2h0T25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfc2Vjb25kIHtcclxuICAgICAgICAgICAgLyogYW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7ICovXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuaW1hdGlvbignMTdzIGxpbmVhciAxcyBpbmZpbml0ZSBmbHlSaWdodE9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2JpcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE3NDQ3OS9iaXJkLWNlbGxzLW5ldy5zdmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcclxuXHJcbiAgICAgLyogICAgYW5pbWF0aW9uLW5hbWU6IGZseUN5Y2xlO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgKi9cclxuICAgICAgICAmX2ZpcnN0IHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5pbWF0aW9uKCcxcyBzdGVwcygxMCkgLTAuNXMgaW5maW5pdGUgZmx5Q3ljbGUnKTtcclxuICAgICAgICAgICAvKiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41czsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9zZWNvbmQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmltYXRpb24oJzAuOXMgc3RlcHMoMTApIC0wLjc1cyBpbmZpbml0ZSBmbHlDeWNsZScpO1xyXG4gICAgICAgICAgICAvKiBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzOyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTRweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlT3BhY2l0eTAtODtcclxuXHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICAgICZfX21lbnUtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgJl9fbWVudS1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgJl9uYXRpdmUge1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2FyYm9yZXR1bSB7XHJcbiAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcGF0aW8ge1xyXG4gICAgICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2V2ZXJncmVlbiB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9wb3Rncm93biB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICByaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3NocnVicyB7XHJcbiAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIC01MCUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDApKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4ycyk7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MS41JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjJzKTtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCAkYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjkpO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgJl9uYXRpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbmF0aXZlLXRyZWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYXJib3JldHVtIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LWFyYm9yZXR1bS1zcGVjaWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcGF0aW8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtcGF0aW8tZnJ1aXQtdHJlZXMtYmcuanBnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9ldmVyZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtZXZlcmdyZWVuLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfcG90Z3Jvd24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtcG90LWdyb3duLXRyZWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2hydWJzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXNocnVicy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2Rlc2lnbi1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja09wYWNpdHkwLTQ7XHJcbiAgICAgICAgJl91cHBlci1sZWZ0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2JvdHRvbS1yaWdodC1jb3JuZXIge1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3VwcGVyLXJpZ2h0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2JvdHRvbS1sZWZ0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKC01MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmbHlDeWNsZSB7XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmx5Q3ljbGUge1xuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgZmx5Q3ljbGUge1xuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmbHlDeWNsZSB7XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZseUN5Y2xlIHtcbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwMHB4IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZseVJpZ2h0T25lIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuQGtleWZyYW1lcyBmbHlSaWdodE9uZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCg5MHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuLi1hcHAtdHJlZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1tZW51LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWVzX19iaXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IC0xMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgLyogIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7ICovXG59XG4uLWFwcC10cmVlc19fYmlyZC1jb250YWluZXJfZmlyc3Qge1xuICAvKiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICBhbmltYXRpb24tZGVsYXk6IDA7ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxNXMgbGluZWFyIDBzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICAtbW96LWFuaW1hdGlvbjogMTVzIGxpbmVhciAwcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbiAgLW1zLWFuaW1hdGlvbjogMTVzIGxpbmVhciAwcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbiAgLW8tYW5pbWF0aW9uOiAxNXMgbGluZWFyIDBzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICBhbmltYXRpb246IDE1cyBsaW5lYXIgMHMgaW5maW5pdGUgZmx5UmlnaHRPbmU7XG59XG4uLWFwcC10cmVlc19fYmlyZC1jb250YWluZXJfc2Vjb25kIHtcbiAgLyogYW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxN3MgbGluZWFyIDFzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICAtbW96LWFuaW1hdGlvbjogMTdzIGxpbmVhciAxcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbiAgLW1zLWFuaW1hdGlvbjogMTdzIGxpbmVhciAxcyBpbmZpbml0ZSBmbHlSaWdodE9uZTtcbiAgLW8tYW5pbWF0aW9uOiAxN3MgbGluZWFyIDFzIGluZmluaXRlIGZseVJpZ2h0T25lO1xuICBhbmltYXRpb246IDE3cyBsaW5lYXIgMXMgaW5maW5pdGUgZmx5UmlnaHRPbmU7XG59XG4uLWFwcC10cmVlc19fYmlyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE3NDQ3OS9iaXJkLWNlbGxzLW5ldy5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICB3aWR0aDogODhweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQtcG9zaXRpb247XG4gIC8qICAgIGFuaW1hdGlvbi1uYW1lOiBmbHlDeWNsZTtcbiAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgKi9cbn1cbi4tYXBwLXRyZWVzX19iaXJkX2ZpcnN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgLW1vei1hbmltYXRpb246IDFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgLW1zLWFuaW1hdGlvbjogMXMgc3RlcHMoMTApIC0wLjVzIGluZmluaXRlIGZseUN5Y2xlO1xuICAtby1hbmltYXRpb246IDFzIHN0ZXBzKDEwKSAtMC41cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgYW5pbWF0aW9uOiAxcyBzdGVwcygxMCkgLTAuNXMgaW5maW5pdGUgZmx5Q3ljbGU7XG4gIC8qICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41czsgKi9cbn1cbi4tYXBwLXRyZWVzX19iaXJkX3NlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAwLjlzIHN0ZXBzKDEwKSAtMC43NXMgaW5maW5pdGUgZmx5Q3ljbGU7XG4gIC1tb3otYW5pbWF0aW9uOiAwLjlzIHN0ZXBzKDEwKSAtMC43NXMgaW5maW5pdGUgZmx5Q3ljbGU7XG4gIC1tcy1hbmltYXRpb246IDAuOXMgc3RlcHMoMTApIC0wLjc1cyBpbmZpbml0ZSBmbHlDeWNsZTtcbiAgLW8tYW5pbWF0aW9uOiAwLjlzIHN0ZXBzKDEwKSAtMC43NXMgaW5maW5pdGUgZmx5Q3ljbGU7XG4gIGFuaW1hdGlvbjogMC45cyBzdGVwcygxMCkgLTAuNzVzIGluZmluaXRlIGZseUN5Y2xlO1xuICAvKiBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzOyAqL1xufVxuLi1hcHAtdHJlZXNfX3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiBibGFjaztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uLWFwcC10cmVlc19fbWVudS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9uYXRpdmUge1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMjAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9hcmJvcmV0dW0ge1xuICB0b3A6IDUlO1xuICByaWdodDogNDAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9wYXRpbyB7XG4gIHRvcDogMzUlO1xuICByaWdodDogMTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9ldmVyZ3JlZW4ge1xuICBib3R0b206IDUlO1xuICBsZWZ0OiA0MCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3BvdGdyb3duIHtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAyMCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3NocnVicyB7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAxMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG59XG4uLWFwcC10cmVlc19faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOmhvdmVyOjpiZWZvcmUsIC4tYXBwLXRyZWVzX19pdGVtOmhvdmVyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDEpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXIgLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICB0b3A6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICBib3R0b206IDIwJTtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG59XG4uLWFwcC10cmVlc19faXRlbTpob3ZlciAuLWFwcC10cmVlc19faXRlbS1pbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMCk7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMSk7XG4gIHdpZHRoOiA5MS41JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUsIC4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICB0b3A6IDQwJTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gIGJvdHRvbTogNSU7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX25hdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1uYXRpdmUtdHJlZXMtYmcuanBnXCIpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2VfYXJib3JldHVtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LWFyYm9yZXR1bS1zcGVjaWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX3BhdGlvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXBhdGlvLWZydWl0LXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX2V2ZXJncmVlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1ldmVyZ3JlZW4tYmcuanBnXCIpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2VfcG90Z3Jvd24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtcG90LWdyb3duLXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX3NocnVicyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1zaHJ1YnMtYmcuanBnXCIpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja191cHBlci1sZWZ0LWNvcm5lciB7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uLWFwcC10cmVlc19fZGVzaWduLWJsb2NrX2JvdHRvbS1yaWdodC1jb3JuZXIge1xuICBib3R0b206IDAlO1xuICByaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja191cHBlci1yaWdodC1jb3JuZXIge1xuICB0b3A6IDAlO1xuICByaWdodDogMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uLWFwcC10cmVlc19fZGVzaWduLWJsb2NrX2JvdHRvbS1sZWZ0LWNvcm5lciB7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-list',
          templateUrl: './tree-list.component.html',
          styleUrls: ['./tree-list.component.scss']
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


    var src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/guards/tree-list/can-leave-tree.guard */
    "./src/app/guards/tree-list/can-leave-tree.guard.ts");
    /* harmony import */


    var src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pipes/tree-list/format-tree-category-title.pipe */
    "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");

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
      providers: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"], src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"], src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeGuard"]],
      imports: [[_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeListModule, {
        declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"], _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"], src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]],
        imports: [_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"], _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"], src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]],
          imports: [_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
          providers: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"], src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"], src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeGuard"]],
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TreeProductComponent = /*#__PURE__*/function () {
      function TreeProductComponent(_activatedRoute, _router) {
        _classCallCheck(this, TreeProductComponent);

        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(TreeProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this2._treeCategoryName = params.categoryName;
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
          var currentTreeName = this.tree.name;
          var currentTreeRouterName = currentTreeName.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

          this._router.navigate(['/trees', 'tree-category', this._treeCategoryName, 'tree', currentTreeRouterName]);
        }
      }]);

      return TreeProductComponent;
    }();

    TreeProductComponent.ɵfac = function TreeProductComponent_Factory(t) {
      return new (t || TreeProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    TreeProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeProductComponent,
      selectors: [["app-tree-product"]],
      inputs: {
        tree: "tree"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "-app-tree-product"], [1, "-app-tree-product__title"], [1, "-app-tree-product__image"], [1, "-app-tree-product__button", 3, "click"]],
      template: function TreeProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeProductComponent_Template_a_click_4_listener() {
            return ctx.goToCurrentTreeRouter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tree.name, " ");
        }
      },
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 250px;\n  width: 250px;\n  padding: 50px;\n}\n.-app-tree-product[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  transition: 0.3s;\n  border: 3px solid white;\n  border-radius: 50%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__title[_ngcontent-%COMP%] {\n  top: -50%;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__button[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover::before {\n  top: 0%;\n}\n.-app-tree-product[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-tree-product[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.-app-tree-product__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  margin: 0px;\n  transition: 0.2s;\n  color: white;\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1px;\n  font-size: 22px;\n}\n.-app-tree-product__image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url('tree-product-image.jpg');\n  background-size: cover;\n}\n.-app-tree-product__button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 170px;\n  transition: 0.4s;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: white;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n.-app-tree-product__button[_ngcontent-%COMP%]:hover {\n  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-tree-product__button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);\n}\n.-app-tree-product__button[_ngcontent-%COMP%]::before {\n  content: \"\uF30A\";\n  position: absolute;\n  top: 50%;\n  left: 90%;\n  transform: translate(0%, -50%) rotate(180deg);\n  transition: 0.6s;\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtcHJvZHVjdFxcdHJlZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQzZCaEI7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUQzQko7QUM4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUF6QkEsZ0JBMkJBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FENUJKO0FDOEJRO0VBQ0ksU0FBQTtBRDVCWjtBQzhCUTtFQWpDSixVQWtDeUI7RUFoQ3pCLDBCQUFBO0FES0o7QUM2QlE7RUFDSSxPQUFBO0FEM0JaO0FDOEJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFwREosZ0JBc0RJO0VBRUEsb0NBekVVO0FEOENsQjtBQzZCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsb0NBbkZVO0FEc0RsQjtBQytCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBbEZKLGdDQW1GdUI7RUFFbkIsVUFBQTtFQUNBLFdBQUE7RUE5RUosZ0JBZ0ZJO0VBRUEsWUF0R0E7RUF1R0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHhCUjtBQzBCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsK0NBQUE7RUFDQSxzQkFBQTtBRDFCUjtBQzRCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBOUdKLGdDQStHdUI7RUFFbkIsWUFBQTtFQXpHSixnQkEyR0k7RUFDQSxlQUFBO0VBeEdKLFVBeUdxQjtFQXZHckIsd0JBQUE7RUF5R0ksWUFuSUE7RUFvSUEsbUJBQUE7RUFDQSxlQUFBO0FEcEJSO0FDcUJRO0VBQ0ksMkNBQUE7QURuQlo7QUNvQlk7RUFDSSwyQ0FBQTtBRGxCaEI7QUNxQlE7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQXJJUiw2Q0FzSTJCO0VBOUgzQixnQkFnSVE7RUFFQSxZQXRKSjtFQXVKSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRGRaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uLWFwcC10cmVlLXByb2R1Y3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0OmhvdmVyIC4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xuICB0b3A6IC01MCU7XG59XG4uLWFwcC10cmVlLXByb2R1Y3Q6aG92ZXIgLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b24ge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDpob3Zlcjo6YmVmb3JlIHtcbiAgdG9wOiAwJTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycztcbiAgLW1zLXRyYW5zaXRpb246IDAuMnM7XG4gIC1vLXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLXByb2R1Y3QtaW1hZ2UuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTcwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzO1xuICAtbXMtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b246aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b246aG92ZXI6OmJlZm9yZSB7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC10cmVlLXByb2R1Y3RfX2J1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvjIpcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogOTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC42cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNnM7XG4gIC1vLXRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59IiwiJHdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kd2hpdGVPcGFjaXR5MC04OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiRibGFjazogcmdiYSgwLCAwLCAwLCAxKTtcclxuJGJsYWNrT3BhY2l0eTAtODogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRibGFja09wYWNpdHkwLTI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHByb3BlcnR5OyBcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xyXG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLi1hcHAtdHJlZS1wcm9kdWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC4zcyk7XHJcblxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgJiAuLWFwcC10cmVlLXByb2R1Y3RfX3RpdGxlIHtcclxuICAgICAgICAgICAgdG9wOiAtNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIC4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2tPcGFjaXR5MC04O1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrT3BhY2l0eTAtMjtcclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuMnMpO1xyXG5cclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCAkYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtcHJvZHVjdC1pbWFnZS5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC40cyk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XHJcblxyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAkYmxhY2tPcGFjaXR5MC02O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXGYzMGFcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZykpO1xyXG5cclxuICAgICAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC42cyk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-product',
          templateUrl: './tree-product.component.html',
          styleUrls: ['./tree-product.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        tree: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/store/donation-list/donation-list.facade */
    "./src/app/store/donation-list/donation-list.facade.ts");
    /* harmony import */


    var src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/store/tree-list/tree-list.facade */
    "./src/app/store/tree-list/tree-list.facade.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleMenuMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Size: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Environment: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Key Feature: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.removeTreeBuyNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.minusTreeBuyNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.plusTreeBuyNumber();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.choose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Choose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tree.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 18, ctx_r0.totalCost), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.canMinusTreeNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.canMinusTreeNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treeBuyNumber, " ");
      }
    }

    function TreeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TreeComponent = /*#__PURE__*/function () {
      function TreeComponent(_activatedRoute, _store$, _facadeDonationListService, _facadeTreeListService) {
        _classCallCheck(this, TreeComponent);

        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeTreeListService = _facadeTreeListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isSearchLoading = true;
        this.descriptionMode = true;
        this.treeBuyNumber = 1;
      }

      _createClass(TreeComponent, [{
        key: "calculateTotalBuyCost",
        value: function calculateTotalBuyCost() {
          return this.tree.cost * this.treeBuyNumber;
        }
      }, {
        key: "isCanMinusTreeNumber",
        value: function isCanMinusTreeNumber() {
          return this.treeBuyNumber > 1 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (params) {
            _this3._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');

            _this3._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');

            _this3.treeBuyNumber = 1;

            if (Boolean(_this3.tree)) {
              var currentTreeRouteName = _this3.tree.name.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');

              if (currentTreeRouteName !== params.countryName) {
                _this3._facadeTreeListService.searchTree(params.treeName);

                _this3._facadeTreeListService.goToTreeRouterMode();
              }
            } else {
              _this3._facadeTreeListService.searchTree(params.treeName);

              _this3._facadeTreeListService.goToTreeRouterMode();
            }
          });

          var searTreeDelay = 3000;

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchTree"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(searTreeDelay)).subscribe(function (tree) {
            if (Boolean(tree)) {
              _this3.tree = tree;
              _this3.totalCost = _this3.tree.cost;

              _this3._facadeTreeListService.searchTreeSuccess();
            }
          });

          this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeSearchLoading"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe(function (isSearchLoading) {
            _this3.isSearchLoading = isSearchLoading;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject$.next(true);

          this._destroySubject$.complete();
        }
      }, {
        key: "toggleMenuMode",
        value: function toggleMenuMode() {
          this.descriptionMode = !this.descriptionMode;
        }
      }, {
        key: "minusTreeBuyNumber",
        value: function minusTreeBuyNumber() {
          this.treeBuyNumber--;
          this.totalCost = this.calculateTotalBuyCost();
          this.canMinusTreeNumber = this.isCanMinusTreeNumber();
        }
      }, {
        key: "plusTreeBuyNumber",
        value: function plusTreeBuyNumber() {
          this.treeBuyNumber++;
          this.totalCost = this.calculateTotalBuyCost();
          this.canMinusTreeNumber = true;
        }
      }, {
        key: "removeTreeBuyNumber",
        value: function removeTreeBuyNumber() {
          this.treeBuyNumber = 1;
          this.totalCost = this.calculateTotalBuyCost();
          this.canMinusTreeNumber = false;
        }
      }, {
        key: "choose",
        value: function choose() {
          this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');

          this._isChosenAtLeastOneTree = true;
          var donation = new src_app_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__["Donation"]('D', null, new src_app_models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__["TreeDonation"]('TD', this.treeBuyNumber, this.totalCost, this.tree), new Date());

          this._facadeDonationListService.initNewUserDonationBeforeRegistration(donation);
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          var deactivateQuestion = 'You haven’t chosen any tree. Are you sure that you want to go from this page? For donation you need at least one tree';
          return !this._isChosenAtLeastOneTree ? confirm(deactivateQuestion) : true;
        }
      }]);

      return TreeComponent;
    }();

    TreeComponent.ɵfac = function TreeComponent_Factory(t) {
      return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"]));
    };

    TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeComponent,
      selectors: [["app-tree"]],
      decls: 2,
      vars: 2,
      consts: [["class", "-app-current-tree", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-current-tree"], [1, "-app-current-tree-wrapper"], [1, "-app-current-tree__title-ribbon"], [1, "-app-current-tree__title-ribbon_left"], [1, "-app-current-tree__title"], [1, "-app-current-tree__title-ribbon_right"], [1, "-app-current-tree__menu"], [1, "-app-current-tree__description-button", 3, "click"], [1, "-app-current-tree__details-button", 3, "click"], [1, "-app-current-tree__content-wrapper"], [1, "-app-current-tree__description"], [1, "-app-current-tree__details"], [1, "-app-current-tree__image", 3, "src"], [1, "-app-current-tree__feature-list"], [1, "-app-current-tree__feature"], [1, "-app-current-tree__feature-title"], [1, "-app-current-tree__feature-sub-title"], [1, "-app-current-tree_feature-sub-title"], [1, "-app-current-tree__cost-ribbon"], [1, "-app-current-tree__cost"], [1, "-app-current-tree__donate"], [1, "-app-current-tree__button", "-app-current-tree__button_remove", 3, "disabled", "click"], [1, "-app-current-tree__button", "-app-current-tree__button_minus", 3, "disabled", "click"], [1, "-app-current-tree__tree-number"], [1, "-app-current-tree__button", "-app-current-tree__button_plus", 3, "click"], [1, "-app-current-tree__donate-button", "-app-current-tree__donate-button_donate", 3, "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]],
      template: function TreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeComponent_div_0_Template, 45, 20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_div_1_Template, 15, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  height: 100vh;\n}\n.-app-current-tree[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 60%;\n  padding: 200px;\n  color: white;\n}\n.-app-current-tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 70px;\n  box-sizing: border-box;\n  border: 2px solid white;\n  border-radius: 10px;\n  background-color: rgba(8, 37, 8, 0.95);\n}\n.-app-current-tree__title-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0px;\n  width: 100%;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-right: 2px solid white;\n  border-radius: 5px 0 0 5px;\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-left: 2px solid white;\n  border-radius: 0 5px 5px 0;\n  background: white;\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  right: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 0px;\n  padding: 25px 0px;\n  color: rgba(8, 37, 8, 0.95);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n  letter-spacing: 3px;\n  font-size: 28px;\n}\n.-app-current-tree__menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 20px;\n  letter-spacing: 1px;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-weight: 600;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .-app-current-tree__details-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 100%;\n  transform: translate(0%, 0%);\n  width: 100%;\n  height: 2px;\n  transition: 0.4s;\n  background-color: white;\n}\n.-app-current-tree__description-button_description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__details-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: -100%;\n  transform: translate(0%, 0%);\n  width: 100%;\n  height: 2px;\n  transition: 0.4s;\n  background-color: white;\n}\n.-app-current-tree__details-button_not-description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 60%;\n  overflow: hidden;\n}\n.-app-current-tree__description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  overflow: auto;\n  transition: 0.4s;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n.-app-current-tree__description_not-description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -120%);\n}\n.-app-current-tree__details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.4s;\n}\n.-app-current-tree__details_description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 120%;\n  transform: translate(0%, 0%);\n}\n.-app-current-tree__image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 2px solid white;\n}\n.-app-current-tree__feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding-left: 20px;\n  font-size: 20px;\n}\n.-app-current-tree__feature[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px 0px;\n  text-align: right;\n}\n.-app-current-tree__feature-title[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  text-align: left;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -6.1px;\n  right: 10%;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  bottom: 44px;\n  width: 0;\n  height: 0;\n  border-left: 53px solid transparent;\n  border-right: 53px solid transparent;\n  border-bottom: 15px solid white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 10px;\n  display: block;\n  width: 90px;\n  padding: 12px 8px 16px;\n  border-bottom-right-radius: 8px;\n  background: white;\n  color: rgba(8, 37, 8, 0.95);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n  text-align: center;\n  letter-spacing: 1px;\n  line-height: 1;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: -7.5px;\n  width: 8px;\n  height: 8px;\n  border-bottom-left-radius: 4px;\n  background: white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5px;\n  left: -9px;\n  width: 9px;\n  height: 8px;\n  border-radius: 0 0 8px 8px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.-app-current-tree__donate[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  margin-top: 20px;\n  box-sizing: border-box;\n}\n.-app-current-tree__donate-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 15px 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #082508;\n  border-radius: 15px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);\n  background-color: white;\n  color: rgba(8, 37, 8, 0.95);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-current-tree__donate-button[_ngcontent-%COMP%]:active {\n  transform: translate(-52%, -52%);\n  box-shadow: 2px 2px 6px black;\n  font-size: 21px;\n}\n.-app-current-tree__button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  padding: 0px 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.-app-current-tree__button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n.-app-current-tree__button[_ngcontent-%COMP%]:active::before {\n  font-size: 24px;\n}\n.-app-current-tree__button[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 22px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-current-tree__button.-app-current-tree__button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n}\n.-app-current-tree__button_plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n}\n.-app-current-tree__button_minus[_ngcontent-%COMP%]::before {\n  content: \"\uF068\";\n}\n.-app-current-tree__button_remove[_ngcontent-%COMP%]::before {\n  content: \"\uF1F8\";\n}\n.-app-current-tree__tree-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  margin: 0px 10px;\n  border: 2px solid white;\n  border-radius: 5px;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  background: rgba(8, 37, 8, 0.95);\n  color: white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  letter-spacing: 1px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWVcXHRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDaUNoQjtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7QURqQ0o7QUNvQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLFlBdkRJO0FEb0JSO0FDb0NJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsc0NBL0R5QjtBRHlCakM7QUN3Q0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSwyQ0FBQTtFQUVBLGlCQXJGQTtBRDRDUjtBQzJDWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLDZCQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQkFyR1I7QUR3RFI7QUMrQ1k7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBRUEsMEJBQUE7RUFFQSw4QkE5R0U7QUQ2RGxCO0FDcURZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSwwQkFBQTtFQUVBLGlCQXJJUjtBRDhFUjtBQ3lEWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtFQUVBLDhCQTlJRTtBRG1GbEI7QUMrREk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSwyQkF2SnlCO0VBd0p6QiwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRC9EUjtBQ2lFSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtFQUVBLG1CQUFBO0FEakVSO0FDbUVJO0VBRUksa0JBQUE7RUFFQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0FEdEVSO0FDdUVRO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRHJFWjtBQ3lFUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBdExSLDRCQXVMMkI7RUFFbkIsV0FBQTtFQUNBLFdBQUE7RUFsTFIsZ0JBb0xRO0VBRUEsdUJBOU1KO0FEMklSO0FDc0VZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUF0TVosOEJBdU0rQjtFQUVuQixXQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQTVOUjtBRHlKUjtBQ3dFUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBdE5SLDRCQXVOMkI7RUFFbkIsV0FBQTtFQUNBLFdBQUE7RUFsTlIsZ0JBb05RO0VBRUEsdUJBOU9KO0FENEtSO0FDcUVZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUF0T1osOEJBdU8rQjtFQUVuQixXQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQTVQUjtBRDBMUjtBQ3NFSTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHJFUjtBQ3VFSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUExUEosNEJBMlB1QjtFQUVuQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUE1UEosZ0JBOFBJO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURqRVI7QUNrRVE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBOVFSLGlDQStRMkI7QUQ1RC9CO0FDK0RJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQXJSSiw4QkFzUnVCO0VBRW5CLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFyUkosZ0JBdVJJO0FEeERSO0FDeURRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQW5TUiw0QkFvUzJCO0FEbkQvQjtBQ3NESTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7QURyRFI7QUN1REk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFFQSxlQUFBO0FEdkRSO0FDeURJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtBRHpEUjtBQzBEUTtFQUNJLG1CQUFBO0VBR0EsZ0JBQUE7QUQxRFo7QUM2REk7RUFDSSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0FENURSO0FDNkRRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtBRDlEWjtBQ2lFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBRUEsV0FBQTtFQUNBLHNCQUFBO0VBRUEsK0JBQUE7RUFFQSxpQkF2WEE7RUF5WEEsMkJBaFh5QjtFQWlYekIsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHBFUjtBQ3FFUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSw4QkFBQTtFQUVBLGlCQTVZSjtBRHFVUjtBQ3lFUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtFQUVBLDhCQXZaTTtBRDRVbEI7QUM4RUk7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEOUVSO0FDK0VRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQTNaUixnQ0E0WjJCO0VBRW5CLGtCQUFBO0VBdFpSLGdCQXdaUTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBRUEsdUJBeGJKO0VBMGJJLDJCQWpicUI7RUFrYnJCLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDFFWjtBQzJFWTtFQWhiUixnQ0FpYitCO0VBRW5CLDZCQUFBO0VBRUEsZUFBQTtBRHZFaEI7QUMyRUk7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUF0YkosZ0JBd2JJO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRDFFUjtBQzJFUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUR6RVo7QUM0RVk7RUFDSSxlQUFBO0FEMUVoQjtBQzZFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFwZFIsZ0NBcWQyQjtFQUVuQixZQXZlSjtFQXdlSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEeEVaO0FDMEVRO0VBamRKLFlBa2R5QjtFQWhkekIseUJBQUE7QUR5WUo7QUMwRVk7RUFDSSxZQUFBO0FEeEVoQjtBQzRFWTtFQUNJLFlBQUE7QUQxRWhCO0FDOEVZO0VBQ0ksWUFBQTtBRDVFaEI7QUNnRkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFFQSxnQ0FwZ0J5QjtFQXNnQnpCLFlBL2dCQTtFQWdoQkEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURsRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi4tYXBwLWN1cnJlbnQtdHJlZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBhZGRpbmc6IDIwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZS1yaWJib24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZS1yaWJib25fbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC05cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDdweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uX2xlZnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIGxlZnQ6IC00LjVweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbl9yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtOXB4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCA3cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uX3JpZ2h0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xuICByaWdodDogLTQuNXB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMjVweCAwcHg7XG4gIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbi1idXR0b24sIC4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscy1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uLWJ1dHRvbiA6aG92ZXIsIC4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscy1idXR0b24gOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBsZWZ0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uX2Rlc2NyaXB0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBsZWZ0OiAtMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzO1xuICAtbXMtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uX25vdC1kZXNjcmlwdGlvbi1tb2RlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29udGVudC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IDAuNHM7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjRzO1xuICAtby10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb25fbm90LWRlc2NyaXB0aW9uLW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEyMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEyMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMjAlKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjRzO1xuICAtbXMtdHJhbnNpdGlvbjogMC40cztcbiAgLW8tdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGV0YWlsc19kZXNjcmlwdGlvbi1tb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAxMjAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLXRpdGxlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdC1yaWJib24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTYuMXB4O1xuICByaWdodDogMTAlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0LXJpYmJvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDQ0cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Nvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTNweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTBweDtcbiAgcGFkZGluZzogMTJweCA4cHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAtNy41cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjVweDtcbiAgbGVmdDogLTlweDtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RvbmF0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kb25hdGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzA4MjUwODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kb25hdGUtYnV0dG9uOmFjdGl2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUyJSwgLTUyJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUyJSwgLTUyJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTIlLCAtNTIlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUyJSwgLTUyJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MiUsIC01MiUpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDZweCBibGFjaztcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbjphY3RpdmU6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uX3BsdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbl9taW51czo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgahcIjtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uX3JlbW92ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvh7hcIjtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdHJlZS1udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgY29sb3I6IHdoaXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSIsIiR3aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuJGJsYWNrOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4kYmxhY2tPcGFjaXR5MC05OiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiRibGFja09wYWNpdHkwLTg6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJGJsYWNrT3BhY2l0eTAtNzogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4kYmxhY2tPcGFjaXR5MC02OiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRibGFja09wYWNpdHkwLTQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuJGJsYWNrT3BhY2l0eTAtMzogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4kcGh0aGFsb2N5YW5pbmVHcmVlbk9wYWNpdHk6IHJnYmEoOCwgMzcsIDgsIDEpO1xyXG4kcGh0aGFsb2N5YW5pbmVHcmVlbk9wYWNpdHkwLTk1OiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHByb3BlcnR5KSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHByb3BlcnR5OyBcclxuICAgIHRyYW5zZm9ybTogJHByb3BlcnR5O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkYXJncztcclxuICAgIHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xyXG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XHJcbiAgICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcGFkZGluZzogMjAwcHg7XHJcblxyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNzBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5MC05NTtcclxuICAgIH1cclxuICAgICZfX3RpdGxlLXJpYmJvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCAkYmxhY2tPcGFjaXR5MC0zO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgJl9sZWZ0IHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTlweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNC41cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibGFja09wYWNpdHkwLTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9yaWdodCB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtOXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00LjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrT3BhY2l0eTAtNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDBweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmX19tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbi1idXR0b24sXHJcbiAgICAmX19kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbi1idXR0b24ge1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDAlKSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjRzKTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9kZXNjcmlwdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2RldGFpbHMtYnV0dG9uIHtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNHMpO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX25vdC1kZXNjcmlwdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgMCUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoMCUsIDAlKSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgIHRyYW5zaXRpb24oMC40cyk7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAmX25vdC1kZXNjcmlwdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTEyMCUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXRhaWxzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAwJSkpO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlICB0cmFuc2l0aW9uKDAuNHMpO1xyXG4gICAgICAgICZfZGVzY3JpcHRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMTIwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgwJSwgMCUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgIH1cclxuICAgICZfX2ZlYXR1cmUtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmX19mZWF0dXJlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgJHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29zdC1yaWJib24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgYm90dG9tOiAtNi4xcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDQ0cHg7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29zdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4IDE2cHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICRibGFja09wYWNpdHkwLTQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC03LjVweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMC41cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC05cHg7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrT3BhY2l0eTAtODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kb25hdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSk7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAkYmxhY2tPcGFjaXR5MC05O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICRwaHRoYWxvY3lhbmluZUdyZWVuT3BhY2l0eTAtOTU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUyJSwgLTUyJSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4ICRibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cclxuICAgICAgICBAaW5jbHVkZSAgdHJhbnNpdGlvbigwLjNzKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICRibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcGx1cyB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2N1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfbWludXMge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNjhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX3JlbW92ZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjFmOFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdHJlZS1udW1iZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggJGJsYWNrT3BhY2l0eTAtNjtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogJHBodGhhbG9jeWFuaW5lR3JlZW5PcGFjaXR5MC05NTtcclxuXHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree',
          templateUrl: './tree.component.html',
          styleUrls: ['./tree.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }, {
          type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceDonationList"]
        }, {
          type: src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/tree-list/can-leave-tree.guard.ts":
  /*!**********************************************************!*\
    !*** ./src/app/guards/tree-list/can-leave-tree.guard.ts ***!
    \**********************************************************/

  /*! exports provided: CanLeaveTreeGuard */

  /***/
  function srcAppGuardsTreeListCanLeaveTreeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanLeaveTreeGuard", function () {
      return CanLeaveTreeGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanLeaveTreeGuard = /*#__PURE__*/function () {
      function CanLeaveTreeGuard() {
        _classCallCheck(this, CanLeaveTreeGuard);
      }

      _createClass(CanLeaveTreeGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return CanLeaveTreeGuard;
    }();

    CanLeaveTreeGuard.ɵfac = function CanLeaveTreeGuard_Factory(t) {
      return new (t || CanLeaveTreeGuard)();
    };

    CanLeaveTreeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanLeaveTreeGuard,
      factory: CanLeaveTreeGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveTreeGuard, [{
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