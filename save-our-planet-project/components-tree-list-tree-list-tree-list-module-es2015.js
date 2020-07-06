(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tree-list-tree-list-tree-list-module"],{

/***/ "./src/app/components/tree-list/tree-category/tree-category.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tree-list/tree-category/tree-category.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TreeCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeCategoryComponent", function() { return TreeCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/tree-list/tree-list.facade */ "./src/app/store/tree-list/tree-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tree-product/tree-product.component */ "./src/app/components/tree-list/tree-product/tree-product.component.ts");
/* harmony import */ var src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/tree-list/format-tree-category-title.pipe */ "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");











function TreeCategoryComponent_app_tree_product_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tree-product", 5);
} if (rf & 2) {
    const tree_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tree", tree_r1);
} }
class TreeCategoryComponent {
    constructor(_activatedRoute, _store$, _router, _facadeTreeListService) {
        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._router = _router;
        this._facadeTreeListService = _facadeTreeListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._windowScrollHeight = 20;
    }
    ngOnInit() {
        const scrollUpButton = document.querySelector('.-app-scroll-up-button_tree-category');
        window.addEventListener('scroll', () => {
            if (window.scrollY > this._windowScrollHeight) {
                scrollUpButton.classList.add('-app-scroll-up-button_tree-category-visible');
            }
            else {
                scrollUpButton.classList.remove('-app-scroll-up-button_tree-category-visible');
            }
        });
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this.treeCategory = params.categoryName;
            if (Boolean(this.treeCategory)) {
                this._facadeTreeListService.searchTreeCategoryTrees(this.treeCategory);
            }
        });
        this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectTreeCategoryTrees"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((treeCategoryTrees) => {
            this.treeCategoryTrees = treeCategoryTrees;
        });
        this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeRouterModeAction"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isTreeRouterMode) => {
            this.treeMode = isTreeRouterMode;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
        this._facadeTreeListService.goFromTreeRouter();
    }
    goToTreeCategoryRouter() {
        this._facadeTreeListService.goFromTreeRouter();
        this._router.navigate(['/trees', 'tree-category', this.treeCategory]);
    }
    scrollTop() {
        window.scrollTo(0, 0);
    }
}
TreeCategoryComponent.ɵfac = function TreeCategoryComponent_Factory(t) { return new (t || TreeCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceTreeList"])); };
TreeCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeCategoryComponent, selectors: [["app-tree-category"]], decls: 9, vars: 8, consts: [[1, "-app-tree-category"], [1, "-app-tree-category__title"], ["class", "-app-tree-category__product", 3, "tree", 4, "ngFor", "ngForOf"], [1, "-app-tree-category__back-button", 3, "click"], [1, "-app-scroll-up-button", "-app-scroll-up-button_tree-category", 3, "click"], [1, "-app-tree-category__product", 3, "tree"]], template: function TreeCategoryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_div_click_6_listener() { return ctx.goToTreeCategoryRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeCategoryComponent_Template_a_click_7_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category_tree-mode", ctx.treeMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.treeCategory), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.treeCategoryTrees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-tree-category__back-button_tree-mode", ctx.treeMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_8__["TreeProductComponent"]], pipes: [src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatTreeCategoryTitlePipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.-app-tree-category[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n}\n.-app-tree-category[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 120px;\n  z-index: -9999;\n  width: 100%;\n  height: 100vh;\n  background-image: url('tree-category-bg.jpg');\n  background-size: cover;\n}\n.-app-tree-category_tree-mode[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.-app-tree-category__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 50px;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);\n  color: white;\n  font-size: 36px;\n  letter-spacing: 4px;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-child) {\n  position: relative;\n}\n.-app-tree-category__product[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  top: 87%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  height: 100px;\n  width: 4px;\n  background-color: white;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10%;\n  left: 10%;\n  transform: translate(-50%, 0%);\n  width: 60px;\n  height: 60px;\n  transition: 0.3s;\n  cursor: pointer;\n  opacity: 0;\n  box-shadow: 0px 0px 8px black;\n  border: 1px solid white;\n  border-radius: 50%;\n  background-color: #082508;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:active {\n  transform: translate(-50%, 2%);\n  width: 65px;\n  height: 65px;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 2px 2px 6px black;\n}\n.-app-tree-category__back-button[_ngcontent-%COMP%]::before {\n  content: \"\uF053\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.3s;\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 23px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-tree-category__back-button_tree-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1jYXRlZ29yeS90cmVlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtY2F0ZWdvcnlcXHRyZWUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksYUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEQ0o7QUNFQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QURGSjtBQ0lJO0VBQ0ksV0FBQTtFQUVBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDZDQUFBO0VBQ0Esc0JBQUE7QURMUjtBQ09JO0VBQ0ksVUFBQTtBRExSO0FDT0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUROUjtBQ1FJO0VBQ0ksa0JBQUE7QUROUjtBQ09RO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSxVQUFBO0VBRUEsdUJBQUE7QURSWjtBQ1dJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtBRGJSO0FDY1E7RUFDSSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FEYlo7QUNnQlk7RUFDSSw4QkFBQTtBRGRoQjtBQ2lCUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEakJaO0FDbUJRO0VBQ0ksVUFBQTtBRGpCWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnkvdHJlZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLi1hcHAtdHJlZS1jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMjBweDtcbiAgei1pbmRleDogLTk5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWNhdGVnb3J5LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfdHJlZS1tb2RlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX3RpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX3Byb2R1Y3Q6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX3Byb2R1Y3Q6bm90KDpsYXN0LWNoaWxkKTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg3JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjUwODtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIlKTtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cbi4tYXBwLXRyZWUtY2F0ZWdvcnlfX2JhY2stYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG59XG4uLWFwcC10cmVlLWNhdGVnb3J5X19iYWNrLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtdHJlZS1jYXRlZ29yeV9fYmFjay1idXR0b25fdHJlZS1tb2RlIHtcbiAgb3BhY2l0eTogMTtcbn0iLCI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uLWFwcC10cmVlLWNhdGVnb3J5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC05OTk5O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtY2F0ZWdvcnktYmcuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgICZfdHJlZS1tb2RlIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIH1cclxuICAgICZfX3Byb2R1Y3Q6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogODclO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgMzcsIDgsIDEpO1xyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMiUpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjA1M1wiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3RyZWUtbW9kZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-category',
                templateUrl: './tree-category.component.html',
                styleUrls: ['./tree-category.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_6__["FacadeServiceTreeList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tree-list/tree-list/tree-list-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/tree-list/tree-list/tree-list-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TreeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListRoutingModule", function() { return TreeListRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-list.component */ "./src/app/components/tree-list/tree-list/tree-list.component.ts");
/* harmony import */ var _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree-category/tree-category.component */ "./src/app/components/tree-list/tree-category/tree-category.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/components/tree-list/tree/tree.component.ts");
/* harmony import */ var src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/tree-list/can-proceed-to-tree-category.guard */ "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts");
/* harmony import */ var src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/guards/tree-list/can-proceed-to-tree.guard */ "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts");
/* harmony import */ var src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/tree-list/can-leave-tree.guard */ "./src/app/guards/tree-list/can-leave-tree.guard.ts");










const routes = [
    {
        path: '',
        component: _tree_list_component__WEBPACK_IMPORTED_MODULE_2__["TreeListComponent"]
    },
    {
        path: 'tree-category/:categoryName',
        component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"],
        canActivate: [src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_5__["CanProceedToTreeCategoryGuard"]],
        children: [{
                path: 'tree/:treeName',
                component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
                canActivate: [src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToTreeGuard"]],
                canDeactivate: [src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveTreeGuard"]]
            }]
    },
    {
        path: 'tree-category/:categoryName#header',
        component: _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_3__["TreeCategoryComponent"]
    }
];
class TreeListRoutingModule {
}
TreeListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TreeListRoutingModule });
TreeListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TreeListRoutingModule_Factory(t) { return new (t || TreeListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/tree-list/tree-list/tree-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tree-list/tree-list/tree-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: TreeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListComponent", function() { return TreeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class TreeListComponent {
    constructor(_router) {
        this._router = _router;
    }
    switchRouter(treeTypeHtmlElement) {
        const treeTypeContent = treeTypeHtmlElement.innerHTML.toLowerCase();
        const treeCategory = treeTypeContent.split(' ').join('-');
        this._router.navigate(['/trees', 'tree-category', treeCategory]);
    }
}
TreeListComponent.ɵfac = function TreeListComponent_Factory(t) { return new (t || TreeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TreeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeListComponent, selectors: [["app-tree-list"]], decls: 60, vars: 0, consts: [[1, "-app-trees"], [1, "-app-trees__design-block", "-app-trees__design-block_upper-left-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_bottom-right-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_upper-right-corner"], [1, "-app-trees__design-block", "-app-trees__design-block_bottom-left-corner"], [1, "-app-trees__bird-container", "-app-trees__bird-container_first"], [1, "-app-trees__bird", "-app-trees__bird_first"], [1, "-app-trees__bird-container", "-app-trees__bird-container_second"], [1, "-app-trees__bird", "-app-trees__bird_second"], [1, "-app-trees__title"], [1, "-app-trees__menu-list"], [1, "-app-trees__menu-item", "-app-trees__menu-item_native", 3, "click"], [1, "-app-trees__item"], [1, "-app-trees__item-title"], ["native", ""], [1, "-app-trees__item-image", "-app-trees__item-image_native"], [1, "-app-trees__item-sub-title"], [1, "-app-trees__menu-item", "-app-trees__menu-item_arboretum", 3, "click"], ["arboretum", ""], [1, "-app-trees__item-image", "-app-trees__item-image_arboretum"], [1, "-app-trees__menu-item", "-app-trees__menu-item_patio", 3, "click"], ["patio", ""], [1, "-app-trees__item-image", "-app-trees__item-image_patio"], [1, "-app-trees__menu-item", "-app-trees__menu-item_evergreen", 3, "click"], ["evergreen", ""], [1, "-app-trees__item-image", "-app-trees__item-image_evergreen"], [1, "-app-trees__menu-item", "-app-trees__menu-item_potgrown", 3, "click"], ["potgrown", ""], [1, "-app-trees__item-image", "-app-trees__item-image_potgrown"], [1, "-app-trees__menu-item", "-app-trees__menu-item_shrubs", 3, "click"], ["shrubs", ""], [1, "-app-trees__item-image", "-app-trees__item-image_shrubs"]], template: function TreeListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.switchRouter(_r0); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.switchRouter(_r1); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.switchRouter(_r2); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return ctx.switchRouter(_r3); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.switchRouter(_r4); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeListComponent_Template_div_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55); return ctx.switchRouter(_r5); });
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
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n@-webkit-keyframes fly-cycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@keyframes fly-cycle {\n  100% {\n    background-position: -900px 0;\n  }\n}\n\n@-webkit-keyframes fly-right-one {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n@keyframes fly-right-one {\n  0% {\n    transform: scale(0.3) translateX(-10vw);\n  }\n  10% {\n    transform: translateY(2vh) translateX(10vw) scale(0.4);\n  }\n  20% {\n    transform: translateY(0vh) translateX(30vw) scale(0.5);\n  }\n  30% {\n    transform: translateY(4vh) translateX(50vw) scale(0.6);\n  }\n  40% {\n    transform: translateY(2vh) translateX(70vw) scale(0.6);\n  }\n  50% {\n    transform: translateY(0vh) translateX(90vw) scale(0.6);\n  }\n  60% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n  100% {\n    transform: translateY(0vh) translateX(110vw) scale(0.6);\n  }\n}\n\n.-app-trees[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-image: url('tree-list-menu-bg.jpg');\n  background-size: cover;\n}\n\n.-app-trees__bird-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 20%;\n  left: -10%;\n  transform: scale(0) translateX(-10vw);\n  will-change: transform;\n  -webkit-animation-name: fly-right-one;\n          animation-name: fly-right-one;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.-app-trees__bird-container_first[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 15s;\n          animation-duration: 15s;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n.-app-trees__bird-container_second[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 16s;\n          animation-duration: 16s;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.-app-trees__bird[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg\");\n  background-size: auto 100%;\n  width: 88px;\n  height: 125px;\n  will-change: background-position;\n  -webkit-animation-name: fly-cycle;\n          animation-name: fly-cycle;\n  -webkit-animation-timing-function: steps(10);\n          animation-timing-function: steps(10);\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.-app-trees__bird_first[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.-app-trees__bird_second[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 0.9s;\n          animation-duration: 0.9s;\n  -webkit-animation-delay: -0.75s;\n          animation-delay: -0.75s;\n}\n\n.-app-trees__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 30px;\n  padding-left: 54px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.8);\n  text-transform: uppercase;\n  font-style: italic;\n  color: black;\n  letter-spacing: 24px;\n}\n\n.-app-trees__menu-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.-app-trees__menu-item[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 200px;\n  height: 200px;\n  color: white;\n}\n\n.-app-trees__menu-item_native[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 20%;\n}\n\n.-app-trees__menu-item_arboretum[_ngcontent-%COMP%] {\n  top: 5%;\n  right: 40%;\n}\n\n.-app-trees__menu-item_patio[_ngcontent-%COMP%] {\n  top: 35%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__menu-item_evergreen[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: 40%;\n}\n\n.-app-trees__menu-item_potgrown[_ngcontent-%COMP%] {\n  bottom: 10%;\n  right: 20%;\n}\n\n.-app-trees__menu-item_shrubs[_ngcontent-%COMP%] {\n  top: 70%;\n  left: 10%;\n  transform: translate(0%, -50%);\n}\n\n.-app-trees__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover::before {\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover::after {\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 50%;\n  opacity: 1;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 20%;\n  opacity: 1;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]:hover   .-app-trees__item-image[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1, 0);\n  width: 90%;\n  height: 90%;\n  transition: 0.2s;\n  border-right: 1.5px solid white;\n  border-left: 1.5px solid white;\n}\n\n.-app-trees__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 1);\n  width: 91.5%;\n  height: 90%;\n  transition: 0.2s;\n  border-top: 1.5px solid white;\n  border-bottom: 1.5px solid white;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%], .-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  margin: 0;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  opacity: 0;\n  text-shadow: 2px 2px 6px black;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n\n.-app-trees__item-title[_ngcontent-%COMP%] {\n  top: 40%;\n}\n\n.-app-trees__item-sub-title[_ngcontent-%COMP%] {\n  bottom: 5%;\n}\n\n.-app-trees__item-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  background-size: cover;\n}\n\n.-app-trees__item-image_native[_ngcontent-%COMP%] {\n  background-image: url('tree-list-native-trees-bg.jpg');\n}\n\n.-app-trees__item-image_arboretum[_ngcontent-%COMP%] {\n  background-image: url('tree-list-arboretum-species-bg.jpg');\n}\n\n.-app-trees__item-image_patio[_ngcontent-%COMP%] {\n  background-image: url('tree-list-patio-fruit-trees-bg.jpg');\n}\n\n.-app-trees__item-image_evergreen[_ngcontent-%COMP%] {\n  background-image: url('tree-list-evergreen-bg.jpg');\n}\n\n.-app-trees__item-image_potgrown[_ngcontent-%COMP%] {\n  background-image: url('tree-list-pot-grown-trees-bg.jpg');\n}\n\n.-app-trees__item-image_shrubs[_ngcontent-%COMP%] {\n  background-image: url('tree-list-shrubs-bg.jpg');\n}\n\n.-app-trees__design-block[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 300px;\n  height: 300px;\n  border: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.-app-trees__design-block_upper-left-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-right-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  right: 0%;\n  transform: translate(50%, 50%) rotate(45deg);\n}\n\n.-app-trees__design-block_upper-right-corner[_ngcontent-%COMP%] {\n  top: 0%;\n  right: 0%;\n  transform: translate(50%, -50%) rotate(45deg);\n}\n\n.-app-trees__design-block_bottom-left-corner[_ngcontent-%COMP%] {\n  bottom: 0%;\n  left: 0%;\n  transform: translate(-50%, 50%) rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1saXN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtbGlzdFxcdHJlZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlLWxpc3QvdHJlZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJO0lBQ0ksNkJBQUE7RUNFTjtBQUNGOztBRExBO0VBQ0k7SUFDSSw2QkFBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSTtJQUNJLHVDQUFBO0VDQ047RURFRTtJQUNJLHNEQUFBO0VDQU47RURHRTtJQUNJLHNEQUFBO0VDRE47RURJRTtJQUNJLHNEQUFBO0VDRk47RURLRTtJQUNJLHNEQUFBO0VDSE47RURNRTtJQUNJLHNEQUFBO0VDSk47RURPRTtJQUNJLHVEQUFBO0VDTE47RURRRTtJQUNJLHVEQUFBO0VDTk47QUFDRjs7QUR6QkE7RUFDSTtJQUNJLHVDQUFBO0VDQ047RURFRTtJQUNJLHNEQUFBO0VDQU47RURHRTtJQUNJLHNEQUFBO0VDRE47RURJRTtJQUNJLHNEQUFBO0VDRk47RURLRTtJQUNJLHNEQUFBO0VDSE47RURNRTtJQUNJLHNEQUFBO0VDSk47RURPRTtJQUNJLHVEQUFBO0VDTE47RURRRTtJQUNJLHVEQUFBO0VDTk47QUFDRjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSw4Q0FBQTtFQUNBLHNCQUFBO0FDVEo7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNUUjs7QURVUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0FDUlo7O0FEVVE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ1JaOztBRFdJO0VBQ0ksK0ZBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFFQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNWUjs7QURXUTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDVFo7O0FEV1E7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ1RaOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsbUJBQUE7RUFFQSwwQ0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNoQlI7O0FEa0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNoQlI7O0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0FDbEJSOztBRG1CUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0FDakJaOztBRG1CUTtFQUNJLE9BQUE7RUFDQSxVQUFBO0FDakJaOztBRG1CUTtFQUNJLFFBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUNqQlo7O0FEbUJRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNqQlo7O0FEbUJRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNqQlo7O0FEbUJRO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQ2pCWjs7QURvQkk7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxlQUFBO0VBRUEsc0JBQUE7QUN2QlI7O0FEeUJZO0VBQ0ksNENBQUE7QUN2QmhCOztBRHlCWTtFQUNJLDRDQUFBO0FDdkJoQjs7QUR5Qlk7RUFDSSxRQUFBO0VBQ0EsVUFBQTtBQ3ZCaEI7O0FEeUJZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUN2QmhCOztBRHlCWTtFQUNJLFVBQUE7QUN2QmhCOztBRDBCUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUVBLCtCQUFBO0VBQ0EsOEJBQUE7QUM1Qlo7O0FEOEJRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0VBRUEsNkJBQUE7RUFDQSxnQ0FBQTtBQ2hDWjs7QURrQ1E7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBRUEsU0FBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ3RDWjs7QUR3Q1E7RUFDSSxRQUFBO0FDdENaOztBRHdDUTtFQUNJLFVBQUE7QUN0Q1o7O0FEd0NRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUVBLHNCQUFBO0FDekNaOztBRDBDWTtFQUNJLHNEQUFBO0FDeENoQjs7QUQwQ1k7RUFDSSwyREFBQTtBQ3hDaEI7O0FEMENZO0VBQ0ksMkRBQUE7QUN4Q2hCOztBRDBDWTtFQUNJLG1EQUFBO0FDeENoQjs7QUQwQ1k7RUFDSSx5REFBQTtBQ3hDaEI7O0FEMENZO0VBQ0ksZ0RBQUE7QUN4Q2hCOztBRDRDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxvQ0FBQTtBQzdDUjs7QUQ4Q1E7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhDQUFBO0FDNUNaOztBRDhDUTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7QUM1Q1o7O0FEOENRO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtBQzVDWjs7QUQ4Q1E7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDZDQUFBO0FDNUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1saXN0L3RyZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZseS1jeWNsZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWCgtMTB2dyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNik7XHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XHJcbiAgICB9XHJcbn1cclxuLi1hcHAtdHJlZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LW1lbnUtYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJl9fYmlyZC1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cclxuICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgJl9maXJzdCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfc2Vjb25kIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYmlyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Z1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLXBvc2l0aW9uO1xyXG5cclxuICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LWN5Y2xlO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAmX2ZpcnN0IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9zZWNvbmQge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTRweDtcclxuXHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgJl9fbWVudS1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmX19tZW51LWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICZfbmF0aXZlIHtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9hcmJvcmV0dW0ge1xyXG4gICAgICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgICAgICByaWdodDogNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX3BhdGlvIHtcclxuICAgICAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9ldmVyZ3JlZW4ge1xyXG4gICAgICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcG90Z3Jvd24ge1xyXG4gICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9zaHJ1YnMge1xyXG4gICAgICAgICAgICB0b3A6IDcwJTtcclxuICAgICAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmIC4tYXBwLXRyZWVzX19pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmIC4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDIwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAuLWFwcC10cmVlc19faXRlbS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDApO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDkxLjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaW1hZ2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICZfbmF0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LW5hdGl2ZS10cmVlcy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2FyYm9yZXR1bSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1hcmJvcmV0dW0tc3BlY2llcy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3BhdGlvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXBhdGlvLWZydWl0LXRyZWVzLWJnLmpwZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfZXZlcmdyZWVuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LWV2ZXJncmVlbi1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3BvdGdyb3duIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXBvdC1ncm93bi10cmVlcy1iZy5qcGcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3NocnVicyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1zaHJ1YnMtYmcuanBnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXNpZ24tYmxvY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAmX3VwcGVyLWxlZnQtY29ybmVyIHtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfYm90dG9tLXJpZ2h0LWNvcm5lciB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfdXBwZXItcmlnaHQtY29ybmVyIHtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfYm90dG9tLWxlZnQtY29ybmVyIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuQGtleWZyYW1lcyBmbHktY3ljbGUge1xuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmbHktcmlnaHQtb25lIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpIHRyYW5zbGF0ZVgoNzB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgfVxufVxuLi1hcHAtdHJlZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1tZW51LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi4tYXBwLXRyZWVzX19iaXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IC0xMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWCgtMTB2dyk7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGFuaW1hdGlvbi1uYW1lOiBmbHktcmlnaHQtb25lO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuLi1hcHAtdHJlZXNfX2JpcmQtY29udGFpbmVyX2ZpcnN0IHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMDtcbn1cbi4tYXBwLXRyZWVzX19iaXJkLWNvbnRhaW5lcl9zZWNvbmQge1xuICBhbmltYXRpb24tZHVyYXRpb246IDE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cbi4tYXBwLXRyZWVzX19iaXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTc0NDc5L2JpcmQtY2VsbHMtbmV3LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIHdpZHRoOiA4OHB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbi4tYXBwLXRyZWVzX19iaXJkX2ZpcnN0IHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbn1cbi4tYXBwLXRyZWVzX19iaXJkX3NlY29uZCB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XG59XG4uLWFwcC10cmVlc19fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDU0cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGJsYWNrO1xuICBsZXR0ZXItc3BhY2luZzogMjRweDtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX25hdGl2ZSB7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAyMCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX2FyYm9yZXR1bSB7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiA0MCU7XG59XG4uLWFwcC10cmVlc19fbWVudS1pdGVtX3BhdGlvIHtcbiAgdG9wOiAzNSU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbn1cbi4tYXBwLXRyZWVzX19tZW51LWl0ZW1fZXZlcmdyZWVuIHtcbiAgYm90dG9tOiA1JTtcbiAgbGVmdDogNDAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9wb3Rncm93biB7XG4gIGJvdHRvbTogMTAlO1xuICByaWdodDogMjAlO1xufVxuLi1hcHAtdHJlZXNfX21lbnUtaXRlbV9zaHJ1YnMge1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG59XG4uLWFwcC10cmVlc19faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDEpO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXIgLi1hcHAtdHJlZXNfX2l0ZW0tdGl0bGUge1xuICB0b3A6IDUwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtOmhvdmVyIC4tYXBwLXRyZWVzX19pdGVtLXN1Yi10aXRsZSB7XG4gIGJvdHRvbTogMjAlO1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06aG92ZXIgLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Uge1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMCk7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItbGVmdDogMS41cHggc29saWQgd2hpdGU7XG59XG4uLWFwcC10cmVlc19faXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDEpO1xuICB3aWR0aDogOTEuNSU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgd2hpdGU7XG59XG4uLWFwcC10cmVlc19faXRlbS10aXRsZSwgLi1hcHAtdHJlZXNfX2l0ZW0tc3ViLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA2O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLXRpdGxlIHtcbiAgdG9wOiA0MCU7XG59XG4uLWFwcC10cmVlc19faXRlbS1zdWItdGl0bGUge1xuICBib3R0b206IDUlO1xufVxuLi1hcHAtdHJlZXNfX2l0ZW0taW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtbmF0aXZlLXRyZWVzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX2FyYm9yZXR1bSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1hcmJvcmV0dW0tc3BlY2llcy1iZy5qcGdcIik7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9wYXRpbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtbGlzdC1wYXRpby1mcnVpdC10cmVlcy1iZy5qcGdcIik7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9ldmVyZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3QtZXZlcmdyZWVuLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19pdGVtLWltYWdlX3BvdGdyb3duIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmVlLWxpc3QvdHJlZS1saXN0LXBvdC1ncm93bi10cmVlcy1iZy5qcGdcIik7XG59XG4uLWFwcC10cmVlc19faXRlbS1pbWFnZV9zaHJ1YnMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyZWUtbGlzdC90cmVlLWxpc3Qtc2hydWJzLWJnLmpwZ1wiKTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2tfdXBwZXItbGVmdC1jb3JuZXIge1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbn1cbi4tYXBwLXRyZWVzX19kZXNpZ24tYmxvY2tfYm90dG9tLXJpZ2h0LWNvcm5lciB7XG4gIGJvdHRvbTogMCU7XG4gIHJpZ2h0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG4uLWFwcC10cmVlc19fZGVzaWduLWJsb2NrX3VwcGVyLXJpZ2h0LWNvcm5lciB7XG4gIHRvcDogMCU7XG4gIHJpZ2h0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuLi1hcHAtdHJlZXNfX2Rlc2lnbi1ibG9ja19ib3R0b20tbGVmdC1jb3JuZXIge1xuICBib3R0b206IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-list',
                templateUrl: './tree-list.component.html',
                styleUrls: ['./tree-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tree-list/tree-list/tree-list.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/tree-list/tree-list/tree-list.module.ts ***!
  \********************************************************************/
/*! exports provided: TreeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeListModule", function() { return TreeListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tree_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-list.component */ "./src/app/components/tree-list/tree-list/tree-list.component.ts");
/* harmony import */ var _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree-category/tree-category.component */ "./src/app/components/tree-list/tree-category/tree-category.component.ts");
/* harmony import */ var _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree-product/tree-product.component */ "./src/app/components/tree-list/tree-product/tree-product.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/components/tree-list/tree/tree.component.ts");
/* harmony import */ var _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-list-routing.module */ "./src/app/components/tree-list/tree-list/tree-list-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/tree-list/can-proceed-to-tree-category.guard */ "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts");
/* harmony import */ var src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/guards/tree-list/can-proceed-to-tree.guard */ "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts");
/* harmony import */ var src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/guards/tree-list/can-leave-tree.guard */ "./src/app/guards/tree-list/can-leave-tree.guard.ts");
/* harmony import */ var src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pipes/tree-list/format-tree-category-title.pipe */ "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts");












class TreeListModule {
}
TreeListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeListModule, bootstrap: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"]] });
TreeListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TreeListModule_Factory(t) { return new (t || TreeListModule)(); }, providers: [
        src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"],
        src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"],
        src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeGuard"]
    ], imports: [[
            _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeListModule, { declarations: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"],
        _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"],
        _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"],
        _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
        src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]], imports: [_tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"],
                    _tree_category_tree_category_component__WEBPACK_IMPORTED_MODULE_2__["TreeCategoryComponent"],
                    _tree_product_tree_product_component__WEBPACK_IMPORTED_MODULE_3__["TreeProductComponent"],
                    _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
                    src_app_pipes_tree_list_format_tree_category_title_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatTreeCategoryTitlePipe"]
                ],
                imports: [
                    _tree_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TreeListRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                ],
                providers: [
                    src_app_guards_tree_list_can_proceed_to_tree_category_guard__WEBPACK_IMPORTED_MODULE_7__["CanProceedToTreeCategoryGuard"],
                    src_app_guards_tree_list_can_proceed_to_tree_guard__WEBPACK_IMPORTED_MODULE_8__["CanProceedToTreeGuard"],
                    src_app_guards_tree_list_can_leave_tree_guard__WEBPACK_IMPORTED_MODULE_9__["CanLeaveTreeGuard"]
                ],
                bootstrap: [_tree_list_component__WEBPACK_IMPORTED_MODULE_1__["TreeListComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/tree-list/tree-product/tree-product.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tree-list/tree-product/tree-product.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TreeProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeProductComponent", function() { return TreeProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class TreeProductComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._treeCategoryName = params.categoryName;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    goToCurrentTreeRouter() {
        const currentTreeName = this.tree.name;
        const currentTreeRouterName = currentTreeName.replace(/\(|\)/g, '').toLowerCase().split(' ').join('-');
        this._router.navigate(['/trees', 'tree-category', this._treeCategoryName, 'tree', currentTreeRouterName]);
    }
}
TreeProductComponent.ɵfac = function TreeProductComponent_Factory(t) { return new (t || TreeProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TreeProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeProductComponent, selectors: [["app-tree-product"]], inputs: { tree: "tree" }, decls: 6, vars: 1, consts: [[1, "-app-tree-product"], [1, "-app-tree-product__title"], [1, "-app-tree-product__image"], [1, "-app-tree-product__button", 3, "click"]], template: function TreeProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeProductComponent_Template_a_click_4_listener() { return ctx.goToCurrentTreeRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tree.name, " ");
    } }, styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  height: 250px;\n  width: 250px;\n  padding: 50px;\n}\n.-app-tree-product[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  transition: 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 3px solid white;\n  border-radius: 50%;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__title[_ngcontent-%COMP%] {\n  top: -50%;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover   .-app-tree-product__button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-tree-product[_ngcontent-%COMP%]:hover::before {\n  top: 0%;\n}\n.-app-tree-product[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-tree-product[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.-app-tree-product__title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  margin: 0px;\n  transition: 0.2s;\n  color: white;\n  text-shadow: 2px 2px 6px black;\n  font-size: 22px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n.-app-tree-product__image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url('tree-product-image.jpg');\n  background-size: cover;\n}\n.-app-tree-product__button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 170px;\n  transition: 0.4s;\n  cursor: pointer;\n  opacity: 0;\n  color: white;\n  font-size: 18px;\n  letter-spacing: 3px;\n}\n.-app-tree-product__button[_ngcontent-%COMP%]:hover {\n  text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);\n}\n.-app-tree-product__button[_ngcontent-%COMP%]:hover::before {\n  text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);\n}\n.-app-tree-product__button[_ngcontent-%COMP%]::before {\n  content: \"\uF30A\";\n  position: absolute;\n  top: 50%;\n  left: 90%;\n  transform: translate(0%, -50%) rotate(180deg);\n  transition: 0.6s;\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 20px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWUtcHJvZHVjdFxcdHJlZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBRENKO0FDRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtBREpKO0FDTVE7RUFDSSxTQUFBO0FESlo7QUNNUTtFQUNJLFVBQUE7QURKWjtBQ01RO0VBQ0ksT0FBQTtBREpaO0FDT0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsb0NBQUE7QURSUjtBQ1VJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQ0FBQTtBRFZSO0FDWUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEYlI7QUNlSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsK0NBQUE7RUFDQSxzQkFBQTtBRGZSO0FDaUJJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGxCUjtBQ21CUTtFQUNJLGlEQUFBO0FEakJaO0FDa0JZO0VBQ0ksaURBQUE7QURoQmhCO0FDbUJRO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUVBLGdCQUFBO0VBRUEsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcEJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS1wcm9kdWN0L3RyZWUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uLWFwcC10cmVlLXByb2R1Y3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDpob3ZlciAuLWFwcC10cmVlLXByb2R1Y3RfX3RpdGxlIHtcbiAgdG9wOiAtNTAlO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0OmhvdmVyIC4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDpob3Zlcjo6YmVmb3JlIHtcbiAgdG9wOiAwJTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uLWFwcC10cmVlLXByb2R1Y3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtcHJvZHVjdC1pbWFnZS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC10cmVlLXByb2R1Y3RfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxNzBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi4tYXBwLXRyZWUtcHJvZHVjdF9fYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuLi1hcHAtdHJlZS1wcm9kdWN0X19idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74yKXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufSIsIjpob3N0IHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcblxyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLi1hcHAtdHJlZS1wcm9kdWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgICYgLi1hcHAtdHJlZS1wcm9kdWN0X190aXRsZSB7XHJcbiAgICAgICAgICAgIHRvcDogLTUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiAuLWFwcC10cmVlLXByb2R1Y3RfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJlZS1saXN0L3RyZWUtcHJvZHVjdC1pbWFnZS5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjMwYVwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogOTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree-product',
                templateUrl: './tree-product.component.html',
                styleUrls: ['./tree-product.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { tree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/tree-list/tree/tree.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tree-list/tree/tree.component.ts ***!
  \*************************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var src_app_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/donation-list/donation */ "./src/app/models/donation-list/donation.ts");
/* harmony import */ var src_app_models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/tree-list/tree-donation */ "./src/app/models/tree-list/tree-donation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/tree-list/tree-list.facade */ "./src/app/store/tree-list/tree-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function TreeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleMenuMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleMenuMode(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeTreeBuyNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.minusTreeBuyNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.plusTreeBuyNumber(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeComponent_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.choose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
} }
function TreeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
} }
class TreeComponent {
    constructor(_activatedRoute, _store$, _facadeDonationListService, _facadeTreeListService) {
        this._activatedRoute = _activatedRoute;
        this._store$ = _store$;
        this._facadeDonationListService = _facadeDonationListService;
        this._facadeTreeListService = _facadeTreeListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isSearchLoading = true;
        this.descriptionMode = true;
        this.treeBuyNumber = 1;
    }
    calculateTotalBuyCost() {
        return this.tree.cost * this.treeBuyNumber;
    }
    isCanMinusTreeNumber() {
        return (this.treeBuyNumber > 1) ? true : false;
    }
    ngOnInit() {
        this._activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((params) => {
            this._appNavigationDonationButton = document.querySelector('.-app-navigation__donation-button');
            this._appNavigationDonationButton.classList.remove('-app-navigation__donation-button_blinking');
            this.treeBuyNumber = 1;
            if (Boolean(this.tree)) {
                const currentTreeRouteName = this.tree.name.replace(/\(|\)/g, '')
                    .toLowerCase()
                    .split(' ')
                    .join('-');
                if (currentTreeRouteName !== params.countryName) {
                    this._facadeTreeListService.searchTree(params.treeName);
                    this._facadeTreeListService.goToTreeRouterMode();
                }
            }
            else {
                this._facadeTreeListService.searchTree(params.treeName);
                this._facadeTreeListService.goToTreeRouterMode();
            }
        });
        const searTreeDelay = 3000;
        this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSearchTree"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(searTreeDelay)).subscribe((tree) => {
            if (Boolean(tree)) {
                this.tree = tree;
                this.totalCost = this.tree.cost;
                this._facadeTreeListService.searchTreeSuccess();
            }
        });
        this._store$.select(src_app_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsTreeSearchLoading"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isSearchLoading) => {
            this.isSearchLoading = isSearchLoading;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    toggleMenuMode() {
        this.descriptionMode = !this.descriptionMode;
    }
    minusTreeBuyNumber() {
        this.treeBuyNumber--;
        this.totalCost = this.calculateTotalBuyCost();
        this.canMinusTreeNumber = this.isCanMinusTreeNumber();
    }
    plusTreeBuyNumber() {
        this.treeBuyNumber++;
        this.totalCost = this.calculateTotalBuyCost();
        this.canMinusTreeNumber = true;
    }
    removeTreeBuyNumber() {
        this.treeBuyNumber = 1;
        this.totalCost = this.calculateTotalBuyCost();
        this.canMinusTreeNumber = false;
    }
    choose() {
        this._appNavigationDonationButton.classList.add('-app-navigation__donation-button_blinking');
        this._isChosenAtLeastOneTree = true;
        const donation = new src_app_models_donation_list_donation__WEBPACK_IMPORTED_MODULE_4__["Donation"]('D', null, new src_app_models_tree_list_tree_donation__WEBPACK_IMPORTED_MODULE_5__["TreeDonation"]('TD', this.treeBuyNumber, this.totalCost, this.tree), new Date());
        this._facadeDonationListService.initNewUserDonationBeforeRegistration(donation);
    }
    canDeactivate() {
        const deactivateQuestion = 'You haven’t chosen any tree. Are you sure that you want to go from this page? For donation you need at least one tree';
        return (!this._isChosenAtLeastOneTree)
            ? confirm(deactivateQuestion)
            : true;
    }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceDonationList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"])); };
TreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeComponent, selectors: [["app-tree"]], decls: 2, vars: 2, consts: [["class", "-app-current-tree", 4, "ngIf"], ["class", "-app-loader", 4, "ngIf"], [1, "-app-current-tree"], [1, "-app-current-tree-wrapper"], [1, "-app-current-tree__title-ribbon"], [1, "-app-current-tree__title-ribbon_left"], [1, "-app-current-tree__title"], [1, "-app-current-tree__title-ribbon_right"], [1, "-app-current-tree__menu"], [1, "-app-current-tree__description-button", 3, "click"], [1, "-app-current-tree__details-button", 3, "click"], [1, "-app-current-tree__content-wrapper"], [1, "-app-current-tree__description"], [1, "-app-current-tree__details"], [1, "-app-current-tree__image", 3, "src"], [1, "-app-current-tree__feature-list"], [1, "-app-current-tree__feature"], [1, "-app-current-tree__feature-title"], [1, "-app-current-tree__feature-sub-title"], [1, "-app-current-tree_feature-sub-title"], [1, "-app-current-tree__cost-ribbon"], [1, "-app-current-tree__cost"], [1, "-app-current-tree__donate"], [1, "-app-current-tree__button", "-app-current-tree__button_remove", 3, "disabled", "click"], [1, "-app-current-tree__button", "-app-current-tree__button_minus", 3, "disabled", "click"], [1, "-app-current-tree__tree-number"], [1, "-app-current-tree__button", "-app-current-tree__button_plus", 3, "click"], [1, "-app-current-tree__donate-button", "-app-current-tree__donate-button_donate", 3, "click"], [1, "-app-loader"], [1, "-app-loader__ball", "-app-loader__ball_first"], [1, "-app-loader__inner"], [1, "-app-loader__ball", "-app-loader__ball_second"], [1, "-app-loader__ball", "-app-loader__ball_third"], [1, "-app-loader__ball", "-app-loader__ball_fourth"], [1, "-app-loader__ball", "-app-loader__ball_fifth"], [1, "-app-loader__ball", "-app-loader__ball_sixth"], [1, "-app-loader__ball", "-app-loader__ball_center"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeComponent_div_0_Template, 45, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_div_1_Template, 15, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  height: 100vh;\n}\n.-app-current-tree[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 60%;\n  padding: 200px;\n  color: white;\n}\n.-app-current-tree-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  padding: 70px;\n  box-sizing: border-box;\n  border: 2px solid white;\n  border-radius: 10px;\n  background-color: rgba(8, 37, 8, 0.95);\n}\n.-app-current-tree__title-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 0px;\n  width: 100%;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-right: 2px solid white;\n  border-radius: 5px 0 0 5px;\n  background: white;\n}\n.-app-current-tree__title-ribbon_left[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: -9px;\n  width: 7px;\n  height: 100%;\n  padding: 0 0 7px;\n  border-left: 2px solid white;\n  border-radius: 0 5px 5px 0;\n  background: white;\n}\n.-app-current-tree__title-ribbon_right[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  right: -4.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px 0 0 5px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.-app-current-tree__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 0px;\n  padding: 25px 0px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n  color: rgba(8, 37, 8, 0.95);\n  letter-spacing: 3px;\n  font-size: 28px;\n}\n.-app-current-tree__menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 20px;\n  letter-spacing: 1px;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%], .-app-current-tree__details-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  font-weight: 600;\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .-app-current-tree__details-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n.-app-current-tree__description-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 100%;\n  transform: translate(0%, 0%);\n  transition: 0.4s;\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__description-button_description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__details-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: -100%;\n  transform: translate(0%, 0%);\n  transition: 0.4s;\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__details-button_not-description-mode[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 100%;\n  height: 2px;\n  background-color: white;\n}\n.-app-current-tree__content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 60%;\n  overflow: hidden;\n}\n.-app-current-tree__description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(0%, 0%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  overflow: auto;\n  transition: 0.4s;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 18px;\n}\n.-app-current-tree__description_not-description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, -120%);\n}\n.-app-current-tree__details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.4s;\n}\n.-app-current-tree__details_description-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 120%;\n  transform: translate(0%, 0%);\n}\n.-app-current-tree__image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 2px solid white;\n}\n.-app-current-tree__feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding-left: 20px;\n  font-size: 20px;\n}\n.-app-current-tree__feature[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px 0px;\n  text-align: right;\n}\n.-app-current-tree__feature-title[_ngcontent-%COMP%] {\n  padding-right: 20px;\n  white-space: nowrap;\n  text-align: left;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -6.1px;\n  right: 10%;\n}\n.-app-current-tree__cost-ribbon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  bottom: 44px;\n  width: 0;\n  height: 0;\n  border-left: 53px solid transparent;\n  border-right: 53px solid transparent;\n  border-bottom: 15px solid white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -3px;\n  right: 10px;\n  display: block;\n  width: 90px;\n  padding: 12px 8px 16px;\n  border-bottom-right-radius: 8px;\n  background: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n  color: rgba(8, 37, 8, 0.95);\n  line-height: 1;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 600;\n  font-size: 20px;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: -7.5px;\n  width: 8px;\n  height: 8px;\n  border-bottom-left-radius: 4px;\n  background: white;\n}\n.-app-current-tree__cost[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5px;\n  left: -9px;\n  width: 9px;\n  height: 8px;\n  border-radius: 0 0 8px 8px;\n  background: rgba(0, 0, 0, 0.8);\n}\n.-app-current-tree__donate[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  margin-top: 20px;\n  box-sizing: border-box;\n}\n.-app-current-tree__donate-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 15px 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9);\n  outline: none;\n  border: 2px solid #082508;\n  border-radius: 15px;\n  background-color: white;\n  color: rgba(8, 37, 8, 0.95);\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-current-tree__donate-button[_ngcontent-%COMP%]:active {\n  transform: translate(-52%, -52%);\n  box-shadow: 2px 2px 6px black;\n  font-size: 21px;\n}\n.-app-current-tree__button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  padding: 0px 10px;\n  transition: 0.3s;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-current-tree__button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n.-app-current-tree__button[_ngcontent-%COMP%]:active::before {\n  font-size: 24px;\n}\n.-app-current-tree__button[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0px 0px 8px black;\n  font-size: 22px;\n  font-weight: 900;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n}\n.-app-current-tree__button.-app-current-tree__button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.-app-current-tree__button_plus[_ngcontent-%COMP%]::before {\n  content: \"\uF067\";\n}\n.-app-current-tree__button_minus[_ngcontent-%COMP%]::before {\n  content: \"\uF068\";\n}\n.-app-current-tree__button_remove[_ngcontent-%COMP%]::before {\n  content: \"\uF1F8\";\n}\n.-app-current-tree__tree-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  margin: 0px 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  border-radius: 5px;\n  background: rgba(8, 37, 8, 0.95);\n  color: white;\n  letter-spacing: 1px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbGlzdC90cmVlL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLWxpc3RcXHRyZWVcXHRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtBREFKO0FDR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtFQUVBLFlBQUE7QURISjtBQ0lJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBRUEsc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsc0NBQUE7QURSUjtBQ1VJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFFQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EsMkNBQUE7RUFFQSxpQkFBQTtBRFpSO0FDY1k7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSw2QkFBQTtFQUNBLDBCQUFBO0VBRUEsaUJBQUE7QURqQmhCO0FDbUJZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0VBRUEsOEJBQUE7QURyQmhCO0FDeUJZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSwwQkFBQTtFQUVBLGlCQUFBO0FENUJoQjtBQzhCWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtFQUVBLDhCQUFBO0FEaENoQjtBQ29DSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURwQ1I7QUNzQ0k7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSxtQkFBQTtBRHRDUjtBQ3dDSTtFQUVJLGtCQUFBO0VBRUEsY0FBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQkFBQTtBRDVDUjtBQzZDUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUQzQ1o7QUMrQ1E7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBRUEsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0FEakRaO0FDb0RZO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7QURyRGhCO0FDMERRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUVBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtBRDVEWjtBQytEWTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0FEaEVoQjtBQ29FSTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtBRHBFUjtBQ3NFSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxTQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUQxRVI7QUMyRVE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7QUR6RVo7QUM0RUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUQ3RVI7QUM4RVE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUQ1RVo7QUMrRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0FEOUVSO0FDZ0ZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtBRGhGUjtBQ2tGSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUVBLGlCQUFBO0VBRUEsaUJBQUE7QURuRlI7QUNvRlE7RUFDSSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7QURuRlo7QUNzRkk7RUFDSSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0FEckZSO0FDc0ZRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtBRHZGWjtBQzBGSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxjQUFBO0VBRUEsV0FBQTtFQUNBLHNCQUFBO0VBRUEsK0JBQUE7RUFFQSxpQkFBQTtFQUVBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRDdGUjtBQzhGUTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSw4QkFBQTtFQUVBLGlCQUFBO0FEaEdaO0FDa0dRO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0VBRUEsOEJBQUE7QURwR1o7QUN1R0k7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLHNCQUFBO0FEekdSO0FDMEdRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUVBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDdHWjtBQzhHWTtFQUNJLGdDQUFBO0VBRUEsNkJBQUE7RUFFQSxlQUFBO0FEOUdoQjtBQ2tISTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBRHJIUjtBQ3NIUTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QURwSFo7QUN1SFk7RUFDSSxlQUFBO0FEckhoQjtBQ3dIUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FEdkhaO0FDeUhRO0VBQ0ksWUFBQTtBRHZIWjtBQzBIWTtFQUNJLFlBQUE7QUR4SGhCO0FDNEhZO0VBQ0ksWUFBQTtBRDFIaEI7QUM4SFk7RUFDSSxZQUFBO0FENUhoQjtBQ2dJSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBRUEsMENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEcElSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVlLWxpc3QvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uLWFwcC1jdXJyZW50LXRyZWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAlO1xuICBwYWRkaW5nOiAyMDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDcwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAtMXB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fdGl0bGUtcmliYm9uX2xlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtOXB4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCA3cHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbl9sZWZ0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBsZWZ0OiAtNC41cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX190aXRsZS1yaWJib25fcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTlweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgN3B4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlLXJpYmJvbl9yaWdodDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgcmlnaHQ6IC00LjVweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDI1cHggMHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uLCAuLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbi1idXR0b24gOmhvdmVyLCAuLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uIDpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbi1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZGVzY3JpcHRpb24tYnV0dG9uX2Rlc2NyaXB0aW9uLW1vZGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IC0xMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXRhaWxzLWJ1dHRvbl9ub3QtZGVzY3JpcHRpb24tbW9kZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29udGVudC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kZXNjcmlwdGlvbl9ub3QtZGVzY3JpcHRpb24tbW9kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwJSk7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RldGFpbHNfZGVzY3JpcHRpb24tbW9kZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMTIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9faW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19mZWF0dXJlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2ZlYXR1cmUtdGl0bGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19jb3N0LXJpYmJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNi4xcHg7XG4gIHJpZ2h0OiAxMCU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Nvc3QtcmliYm9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogNDRweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fY29zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtM3B4O1xuICByaWdodDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MHB4O1xuICBwYWRkaW5nOiAxMnB4IDhweCAxNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgY29sb3I6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Nvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IC03LjVweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2Nvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTAuNXB4O1xuICBsZWZ0OiAtOXB4O1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi4tYXBwLWN1cnJlbnQtdHJlZV9fZG9uYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2RvbmF0ZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAxNXB4IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzA4MjUwODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19kb25hdGUtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MiUsIC01MiUpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDZweCBibGFjaztcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b246YWN0aXZlOjpiZWZvcmUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b24uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjY7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbl9wbHVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Bp1wiO1xufVxuLi1hcHAtY3VycmVudC10cmVlX19idXR0b25fbWludXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GoXCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX2J1dHRvbl9yZW1vdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74e4XCI7XG59XG4uLWFwcC1jdXJyZW50LXRyZWVfX3RyZWUtbnVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgMzcsIDgsIDAuOTUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iLCI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uLWFwcC1jdXJyZW50LXRyZWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG5cclxuICAgIHBhZGRpbmc6IDIwMHB4O1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDcwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZS1yaWJib24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgJl9sZWZ0IHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTlweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC00LjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcmlnaHQge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTlweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00LjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG5cclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgICZfX21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICAgICZfX2Rlc2NyaXB0aW9uLWJ1dHRvbixcclxuICAgICZfX2RldGFpbHMtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbi1idXR0b24ge1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9kZXNjcmlwdGlvbi1tb2RlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9ub3QtZGVzY3JpcHRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG5cclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgJl9ub3QtZGVzY3JpcHRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTIwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICZfZGVzY3JpcHRpb24tbW9kZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMTIwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICB9XHJcbiAgICAmX19mZWF0dXJlLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgJl9fZmVhdHVyZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2Nvc3QtcmliYm9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICAgIGJvdHRvbTogLTYuMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgYm90dG9tOiA0NHB4O1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29zdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4IDE2cHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgbGVmdDogLTcuNXB4O1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTAuNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOXB4O1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDlweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kb25hdGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOCwgMzcsIDgsIDEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg4LCAzNywgOCwgMC45NSk7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUyJSwgLTUyJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi4tYXBwLWN1cnJlbnQtdHJlZV9fYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9wbHVzIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9taW51cyB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2OFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcmVtb3ZlIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMWY4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX190cmVlLW51bWJlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDM3LCA4LCAwLjk1KTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tree',
                templateUrl: './tree.component.html',
                styleUrls: ['./tree.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: src_app_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceDonationList"] }, { type: src_app_store_tree_list_tree_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceTreeList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/tree-list/can-leave-tree.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/guards/tree-list/can-leave-tree.guard.ts ***!
  \**********************************************************/
/*! exports provided: CanLeaveTreeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveTreeGuard", function() { return CanLeaveTreeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveTreeGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveTreeGuard.ɵfac = function CanLeaveTreeGuard_Factory(t) { return new (t || CanLeaveTreeGuard)(); };
CanLeaveTreeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveTreeGuard, factory: CanLeaveTreeGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveTreeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts":
/*!************************************************************************!*\
  !*** ./src/app/guards/tree-list/can-proceed-to-tree-category.guard.ts ***!
  \************************************************************************/
/*! exports provided: CanProceedToTreeCategoryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToTreeCategoryGuard", function() { return CanProceedToTreeCategoryGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/tree-list/tree-type */ "./src/app/models/tree-list/tree-type.ts");



class CanProceedToTreeCategoryGuard {
    isExistTreeType(currentCategoryName) {
        for (const treeType in _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__["TreeType"]) {
            if (currentCategoryName === _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_1__["TreeType"][treeType]) {
                return true;
            }
        }
        return false;
    }
    canActivate(next) {
        const currentCategoryName = next.params.categoryName;
        const isTreeTypeExist = this.isExistTreeType(currentCategoryName);
        if (!isTreeTypeExist) {
            const errorMessage = `This tree category (${currentCategoryName}) does not exist! Try more!`;
            throw new Error(errorMessage);
        }
        return isTreeTypeExist;
    }
}
CanProceedToTreeCategoryGuard.ɵfac = function CanProceedToTreeCategoryGuard_Factory(t) { return new (t || CanProceedToTreeCategoryGuard)(); };
CanProceedToTreeCategoryGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToTreeCategoryGuard, factory: CanProceedToTreeCategoryGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToTreeCategoryGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/tree-list/can-proceed-to-tree.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/guards/tree-list/can-proceed-to-tree.guard.ts ***!
  \***************************************************************/
/*! exports provided: CanProceedToTreeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToTreeGuard", function() { return CanProceedToTreeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/tree-list/tree-list.selectors */ "./src/app/store/tree-list/tree-list.selectors.ts");
/* harmony import */ var _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/tree-list/tree-type */ "./src/app/models/tree-list/tree-type.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");





class CanProceedToTreeGuard {
    constructor(_store$) {
        this._store$ = _store$;
    }
    isExistTreeCategoryRouteName(treeType) {
        let isExistTreeCategory;
        for (const currentTreeType in _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"]) {
            if (treeType === _models_tree_list_tree_type__WEBPACK_IMPORTED_MODULE_2__["TreeType"][currentTreeType]) {
                isExistTreeCategory = true;
            }
        }
        if (isExistTreeCategory && this._currentUrl.includes(treeType)) {
            return true;
        }
        else {
            return false;
        }
    }
    checkTree(treeRouteName) {
        let isExistCurrentUrlTree;
        const searchTree = this._treeList.find((tree) => {
            if (Boolean(tree)) {
                const currentTreeRouteName = tree.name.replace(/\(|\)/g, '')
                    .toLowerCase()
                    .split(' ')
                    .join('-');
                if (treeRouteName === currentTreeRouteName) {
                    return tree;
                }
            }
        });
        if (Boolean(searchTree)) {
            isExistCurrentUrlTree = this.isExistTreeCategoryRouteName(searchTree.type);
        }
        if (!isExistCurrentUrlTree) {
            const errorMessage = `There is no tree with this name (${treeRouteName})`;
            throw new Error(errorMessage);
        }
    }
    canActivate(next, state) {
        this._currentUrl = state.url;
        const currentTreeRouteName = next.params.treeName;
        this._store$.select(_store_tree_list_tree_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectTreeList"])
            .subscribe((treeList) => {
            this._treeList = treeList;
            this.checkTree(currentTreeRouteName);
        }).unsubscribe();
        return true;
    }
}
CanProceedToTreeGuard.ɵfac = function CanProceedToTreeGuard_Factory(t) { return new (t || CanProceedToTreeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CanProceedToTreeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToTreeGuard, factory: CanProceedToTreeGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToTreeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/tree-list/format-tree-category-title.pipe.ts":
/*!********************************************************************!*\
  !*** ./src/app/pipes/tree-list/format-tree-category-title.pipe.ts ***!
  \********************************************************************/
/*! exports provided: FormatTreeCategoryTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTreeCategoryTitlePipe", function() { return FormatTreeCategoryTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatTreeCategoryTitlePipe {
    transform(value) {
        return value.split('-').map((currentWord) => {
            return currentWord[0].toUpperCase() + currentWord.slice(1);
        }).join(' ');
    }
}
FormatTreeCategoryTitlePipe.ɵfac = function FormatTreeCategoryTitlePipe_Factory(t) { return new (t || FormatTreeCategoryTitlePipe)(); };
FormatTreeCategoryTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatTreeCategoryTitle", type: FormatTreeCategoryTitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatTreeCategoryTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatTreeCategoryTitle'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-tree-list-tree-list-tree-list-module-es2015.js.map