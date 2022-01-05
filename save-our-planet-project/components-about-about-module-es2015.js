(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-about-about-module"],{

/***/ "./src/app/components/about/about-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/about/about-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");





const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    // tslint:disable-next-line: no-empty
    constructor() { }
    static isScrolling() {
        if (window.scrollY > AboutComponent.windowScrollHeight) {
            AboutComponent.leftDesert.classList.add('-app-about__parallax-item_desert-left-invisible');
            AboutComponent.rightDesert.classList.add('-app-about__parallax-item_desert-right-invisible');
        }
        else {
            AboutComponent.leftDesert.classList.remove('-app-about__parallax-item_desert-left-invisible');
            AboutComponent.rightDesert.classList.remove('-app-about__parallax-item_desert-right-invisible');
        }
    }
    ngOnInit() {
        AboutComponent.leftDesert = document.querySelector('.-app-about__parallax-item_desert-left');
        AboutComponent.rightDesert = document.querySelector('.-app-about__parallax-item_desert-right');
        window.addEventListener('scroll', AboutComponent.isScrolling);
    }
    ngOnDestroy() {
        window.removeEventListener('scroll', AboutComponent.isScrolling);
    }
}
AboutComponent.windowScrollHeight = 500;
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 21, vars: 0, consts: [[1, "-app-about"], [1, "-app-about__parallax"], [1, "-app-about__parallax-item", "-app-about__parallax-item_forest"], [1, "-app-about__parallax-item", "-app-about__parallax-item_desert-left"], [1, "-app-about__parallax-item", "-app-about__parallax-item_desert-right"], [1, "-app-about__content"], [1, "-app-about__content-wrapper"], [1, "-app-about__content-header"], [1, "-app-about__content-title"], [1, "-app-about__content-sub-title"], [1, "-app-about__content-article"], [1, "-app-about__content-article-paragraph"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " It is Save Our Planet Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Our project is based on planting trees around the world. You can select any country in the countries menu and select any tree in the trees menu. If you donate a tree to a country, you will receive honey points which you can convert in your profile to health insurance with which you can get a good discount in any medical institution. Our project is still young enough but we try to make the world a better place. Join our project and make the world green! Egor Samuilionok was engaged in this project, the development of which was spent about a month. All ideas were invented either in the shower or in the soft bed. Also inspiration was my imagination and rich inner world. Our office is located in the city of Mogilev at 10 Lane Oil House. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sint eius totam, numquam ipsa vel ab cumque itaque, voluptatibus placeat. Iusto dolore nostrum fugit quos tempore qui voluptatem, incidunt provident nemo officiis fugiat voluptas sint! Asperiores vel fuga magni excepturi dignissimos velit quisquam pariatur adipisci quos neque rem soluta consectetur corrupti illo sapiente alias rerum quibusdam, error provident tempore ipsum porro nemo officia. Molestiae rem molestias doloribus consequuntur, reprehenderit vitae aliquid deleniti totam velit quis adipisci magni iure, commodi deserunt? Harum aut atque possimus voluptates aspernatur libero suscipit similique, quas nostrum sunt consequuntur, magni obcaecati iste magnam. Minima laborum, voluptatem maiores ratione perspiciatis ducimus totam voluptas voluptate ipsa saepe modi expedita! Sequi, tenetur quas autem aliquam vel cum! Perferendis recusandae necessitatibus inventore vel voluptates fuga rem aspernatur temporibus obcaecati? Excepturi tenetur voluptate quae ea alias ratione ipsum reiciendis quisquam vel qui velit error quos unde, at modi itaque earum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sint eius totam, numquam ipsa vel ab cumque itaque, voluptatibus placeat. Iusto dolore nostrum fugit quos tempore qui voluptatem, incidunt provident nemo officiis fugiat voluptas sint! Asperiores vel fuga magni excepturi dignissimos velit quisquam pariatur adipisci quos neque rem soluta consectetur corrupti illo sapiente alias rerum quibusdam, error provident tempore ipsum porro nemo officia. Molestiae rem molestias doloribus consequuntur, reprehenderit vitae aliquid deleniti totam velit quis adipisci magni iure, commodi deserunt? Harum aut atque possimus voluptates aspernatur libero suscipit similique, quas nostrum sunt consequuntur, magni obcaecati iste magnam. Minima laborum, voluptatem maiores ratione perspiciatis ducimus totam voluptas voluptate ipsa saepe modi expedita! Sequi, tenetur quas autem aliquam vel cum! Perferendis recusandae necessitatibus inventore vel voluptates fuga rem aspernatur temporibus obcaecati? Excepturi tenetur voluptate quae ea alias ratione ipsum reiciendis quisquam vel qui velit error quos unde, at modi itaque earum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sint eius totam, numquam ipsa vel ab cumque itaque, voluptatibus placeat. Iusto dolore nostrum fugit quos tempore qui voluptatem, incidunt provident nemo officiis fugiat voluptas sint! Asperiores vel fuga magni excepturi dignissimos velit quisquam pariatur adipisci quos neque rem soluta consectetur corrupti illo sapiente alias rerum quibusdam, error provident tempore ipsum porro nemo officia. Molestiae rem molestias doloribus consequuntur, reprehenderit vitae aliquid deleniti totam velit quis adipisci magni iure, commodi deserunt? Harum aut atque possimus voluptates aspernatur libero suscipit similique, quas nostrum sunt consequuntur, magni obcaecati iste magnam. Minima laborum, voluptatem maiores ratione perspiciatis ducimus totam voluptas voluptate ipsa saepe modi expedita! Sequi, tenetur quas autem aliquam vel cum! Perferendis recusandae necessitatibus inventore vel voluptates fuga rem aspernatur temporibus obcaecati? Excepturi tenetur voluptate quae ea alias ratione ipsum reiciendis quisquam vel qui velit error quos unde, at modi itaque earum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n}\n\n.-app-about[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n}\n\n.-app-about__parallax[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\n.-app-about__parallax-item[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0%;\n  left: 120px;\n  width: 100%;\n  transition: 3s;\n}\n\n.-app-about__parallax-item_forest[_ngcontent-%COMP%] {\n  height: 100%;\n  background: url('green-trees-bg.jpg') 0 0/cover no-repeat;\n}\n\n.-app-about__parallax-item_desert-right[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 80%;\n  -ms-perspective: 800px;\n  -o-perspective: 800px;\n  perspective: 800px;\n  -ms-perspective-origin: top right;\n  -o-perspective-origin: top right;\n  perspective-origin: top right;\n  transform-style: preserve-3d;\n  transform: rotate(0deg, 10deg, 10deg);\n  background: url('desert-right-image.png') top right/100% no-repeat;\n}\n\n.-app-about__parallax-item_desert-right-invisible[_ngcontent-%COMP%] {\n  transform: translate3d(100px, 50%, -100px);\n}\n\n.-app-about__parallax-item_desert-left[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 70%;\n  -ms-perspective: 800px;\n  -o-perspective: 800px;\n  perspective: 800px;\n  -ms-perspective-origin: bottom left;\n  -o-perspective-origin: bottom left;\n  perspective-origin: bottom left;\n  transform-style: preserve-3d;\n  transform: rotate(0deg, 10deg, 10deg);\n  background: url('desert-left-image.png') left top/45% no-repeat;\n}\n\n.-app-about__parallax-item_desert-left-invisible[_ngcontent-%COMP%] {\n  transform: translate3d(-100px, 50%, -200px);\n}\n\n.-app-about__content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  background: url('green-trees-bg.png') 0 0/cover no-repeat;\n}\n\n.-app-about__content-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n\n.-app-about__content-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 0px 20px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.-app-about__content-title[_ngcontent-%COMP%], .-app-about__content-sub-title[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.-app-about__content-title[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n\n.-app-about__content-sub-title[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.-app-about__content-article[_ngcontent-%COMP%] {\n  padding: 25px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.3);\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n}\n\n.-app-about__content-article-paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXFlhaG9yX1NhbXVpbGlvbmFrXFx3b3JrXFxzYXZlLXBsYW5ldFxcc2F2ZS1vdXItcGxhbmV0XFxzYXZlLW91ci1wbGFuZXQtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDQTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUMxQ0o7O0FENkNBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDM0NKOztBRDRDSTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtBQzNDUjs7QUQ0Q1E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBbERSLGNBb0RRO0FDeENaOztBRHlDWTtFQUNJLFlBQUE7RUFFQSx5REFBQTtBQ3hDaEI7O0FEMENZO0VBQ0ksVUFBQTtFQUVBLFdBQUE7RUEvQ1osc0JBaURZO0VBaERaLHFCQWdEWTtFQS9DWixrQkErQ1k7RUF6Q1osaUNBMENZO0VBekNaLGdDQXlDWTtFQXhDWiw2QkF3Q1k7RUF4RFosNEJBeURZO0VBekVaLHFDQTBFK0I7RUFFbkIsa0VBQUE7QUMzQmhCOztBRDRCZ0I7RUE3RVosMENBOEVtQztBQ3RCdkM7O0FEeUJZO0VBQ0ksVUFBQTtFQUVBLFdBQUE7RUE5RFosc0JBZ0VZO0VBL0RaLHFCQStEWTtFQTlEWixrQkE4RFk7RUF4RFosbUNBeURZO0VBeERaLGtDQXdEWTtFQXZEWiwrQkF1RFk7RUF2RVosNEJBd0VZO0VBeEZaLHFDQXlGK0I7RUFFbkIsK0RBQUE7QUNWaEI7O0FEV2dCO0VBNUZaLDJDQTZGbUM7QUNMdkM7O0FEVUk7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUVBLHlEQUFBO0FDWFI7O0FEWVE7RUFDSSxpQkFBQTtBQ1ZaOztBRFlRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUNYWjs7QURhUTtFQUVJLFdBQUE7QUNaWjs7QURjUTtFQUNJLGdCQUFBO0FDWlo7O0FEY1E7RUFDSSxlQUFBO0FDWlo7O0FEY1E7RUFDSSxhQUFBO0VBRUEsbUJBQUE7RUFFQSwwQ0E1SU07RUE4SU4sa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNmWjs7QURnQlk7RUFDSSxtQkFBQTtBQ2RoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGVPcGFjaXR5MC0zOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCRwcm9wZXJ0eSkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiAkcHJvcGVydHk7XHJcbiAgICAtby10cmFuc2Zvcm06ICRwcm9wZXJ0eTsgXHJcbiAgICB0cmFuc2Zvcm06ICRwcm9wZXJ0eTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XHJcbiAgICB0cmFuc2l0aW9uOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICRhcmdzO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6ICRhcmdzO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogJGFyZ3M7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICRhcmdzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBlcnNwZWN0aXZlKCRhcmdzLi4uKSB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAkYXJncztcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6ICRhcmdzO1xyXG4gICAgLW1zLXBlcnNwZWN0aXZlOiAkYXJncztcclxuICAgIC1vLXBlcnNwZWN0aXZlOiAkYXJncztcclxuICAgIHBlcnNwZWN0aXZlOiAkYXJncztcclxufVxyXG5cclxuQG1peGluIHBlcnNwZWN0aXZlLW9yaWdpbigkYXJncy4uLikge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46ICRhcmdzO1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZS1vcmlnaW46ICRhcmdzO1xyXG4gICAgLW1zLXBlcnNwZWN0aXZlLW9yaWdpbjogJGFyZ3M7XHJcbiAgICAtby1wZXJzcGVjdGl2ZS1vcmlnaW46ICRhcmdzO1xyXG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiAkYXJncztcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLi1hcHAtYWJvdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgJl9fcGFyYWxsYXgge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogMTIwcHg7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oM3MpO1xyXG4gICAgICAgICAgICAmX2ZvcmVzdCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0L2dyZWVuLXRyZWVzLWJnLmpwZycpIDAgMCAvIGNvdmVyIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX2Rlc2VydC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlKDgwMHB4KTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlLW9yaWdpbih0b3AgcmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLXN0eWxlKHByZXNlcnZlLTNkKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoMGRlZywgMTBkZWcsIDEwZGVnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0L2Rlc2VydC1yaWdodC1pbWFnZS5wbmcnKSB0b3AgcmlnaHQgLyAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICYtaW52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlM2QoMTAwcHgsIDUwJSwgLTEwMHB4KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9kZXNlcnQtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlKDgwMHB4KTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlLW9yaWdpbihib3R0b20gbGVmdCk7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tc3R5bGUocHJlc2VydmUtM2QpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgwZGVnLCAxMGRlZywgMTBkZWcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvZGVzZXJ0LWxlZnQtaW1hZ2UucG5nJykgbGVmdCB0b3AgLyA0NSUgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgJi1pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUzZCgtMTAwcHgsIDUwJSwgLTIwMHB4KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvZ3JlZW4tdHJlZXMtYmcucG5nJykgMCAwIC8gY292ZXIgbm8tcmVwZWF0O1xyXG4gICAgICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxlLFxyXG4gICAgICAgICYtc3ViLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1hcnRpY2xlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVPcGFjaXR5MC0zO1xyXG5cclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAmLXBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLi1hcHAtYWJvdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtYWJvdXRfX3BhcmFsbGF4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC1hYm91dF9fcGFyYWxsYXgtaXRlbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDNzO1xuICAtbW96LXRyYW5zaXRpb246IDNzO1xuICAtbXMtdHJhbnNpdGlvbjogM3M7XG4gIC1vLXRyYW5zaXRpb246IDNzO1xuICB0cmFuc2l0aW9uOiAzcztcbn1cbi4tYXBwLWFib3V0X19wYXJhbGxheC1pdGVtX2ZvcmVzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC9ncmVlbi10cmVlcy1iZy5qcGdcIikgMCAwL2NvdmVyIG5vLXJlcGVhdDtcbn1cbi4tYXBwLWFib3V0X19wYXJhbGxheC1pdGVtX2Rlc2VydC1yaWdodCB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogODAlO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA4MDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogODAwcHg7XG4gIC1tcy1wZXJzcGVjdGl2ZTogODAwcHg7XG4gIC1vLXBlcnNwZWN0aXZlOiA4MDBweDtcbiAgcGVyc3BlY3RpdmU6IDgwMHB4O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAtbXMtcGVyc3BlY3RpdmUtb3JpZ2luOiB0b3AgcmlnaHQ7XG4gIC1vLXBlcnNwZWN0aXZlLW9yaWdpbjogdG9wIHJpZ2h0O1xuICBwZXJzcGVjdGl2ZS1vcmlnaW46IHRvcCByaWdodDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZywgMTBkZWcsIDEwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvZGVzZXJ0LXJpZ2h0LWltYWdlLnBuZ1wiKSB0b3AgcmlnaHQvMTAwJSBuby1yZXBlYXQ7XG59XG4uLWFwcC1hYm91dF9fcGFyYWxsYXgtaXRlbV9kZXNlcnQtcmlnaHQtaW52aXNpYmxlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCA1MCUsIC0xMDBweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDBweCwgNTAlLCAtMTAwcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDBweCwgNTAlLCAtMTAwcHgpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCA1MCUsIC0xMDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDUwJSwgLTEwMHB4KTtcbn1cbi4tYXBwLWFib3V0X19wYXJhbGxheC1pdGVtX2Rlc2VydC1sZWZ0IHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA3MCU7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDgwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiA4MDBweDtcbiAgLW1zLXBlcnNwZWN0aXZlOiA4MDBweDtcbiAgLW8tcGVyc3BlY3RpdmU6IDgwMHB4O1xuICBwZXJzcGVjdGl2ZTogODAwcHg7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgLW1vei1wZXJzcGVjdGl2ZS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAtbXMtcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgLW8tcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZywgMTBkZWcsIDEwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcsIDEwZGVnLCAxMGRlZyk7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvZGVzZXJ0LWxlZnQtaW1hZ2UucG5nXCIpIGxlZnQgdG9wLzQ1JSBuby1yZXBlYXQ7XG59XG4uLWFwcC1hYm91dF9fcGFyYWxsYXgtaXRlbV9kZXNlcnQtbGVmdC1pbnZpc2libGUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCA1MCUsIC0yMDBweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIDUwJSwgLTIwMHB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCA1MCUsIC0yMDBweCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCA1MCUsIC0yMDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCA1MCUsIC0yMDBweCk7XG59XG4uLWFwcC1hYm91dF9fY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC9ncmVlbi10cmVlcy1iZy5wbmdcIikgMCAwL2NvdmVyIG5vLXJlcGVhdDtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cbi4tYXBwLWFib3V0X19jb250ZW50LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uLWFwcC1hYm91dF9fY29udGVudC10aXRsZSwgLi1hcHAtYWJvdXRfX2NvbnRlbnQtc3ViLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uLWFwcC1hYm91dF9fY29udGVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG4uLWFwcC1hYm91dF9fY29udGVudC1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4uLWFwcC1hYm91dF9fY29udGVudC1hcnRpY2xlIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uLWFwcC1hYm91dF9fY29udGVudC1hcnRpY2xlLXBhcmFncmFwaCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about/about.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/about/about.module.ts ***!
  \**************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/components/about/about-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutModule, bootstrap: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]] });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, providers: [], imports: [[
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]], imports: [_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"],
                ],
                imports: [
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                providers: [],
                bootstrap: [_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-about-about-module-es2015.js.map