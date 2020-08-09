(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/authentication/login/login.module": [
		"./src/app/components/authentication/login/login.module.ts",
		"default~components-authentication-login-login-module~components-events-events-module~components-requ~9859c4cb",
		"default~components-authentication-login-login-module~components-events-events-module~components-stat~21790b49",
		"components-authentication-login-login-module"
	],
	"./components/events/events.module": [
		"./src/app/components/events/events.module.ts",
		"default~components-authentication-login-login-module~components-events-events-module~components-requ~9859c4cb",
		"default~components-authentication-login-login-module~components-events-events-module~components-stat~21790b49",
		"default~components-events-events-module~components-statistics-statistics-module",
		"default~components-events-events-module~components-request-request-module",
		"components-events-events-module"
	],
	"./components/notification/notification.module": [
		"./src/app/components/notification/notification.module.ts",
		"components-notification-notification-module"
	],
	"./components/request/request.module": [
		"./src/app/components/request/request.module.ts",
		"default~components-authentication-login-login-module~components-events-events-module~components-requ~9859c4cb",
		"default~components-events-events-module~components-request-request-module",
		"components-request-request-module"
	],
	"./components/statistics/statistics.module": [
		"./src/app/components/statistics/statistics.module.ts",
		"default~components-authentication-login-login-module~components-events-events-module~components-requ~9859c4cb",
		"default~components-authentication-login-login-module~components-events-events-module~components-stat~21790b49",
		"default~components-events-events-module~components-statistics-statistics-module",
		"components-statistics-statistics-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'events',
        loadChildren: './components/events/events.module#EventsModule'
    },
    {
        path: 'notifications',
        loadChildren: './components/notification/notification.module#NotificationModule'
    },
    {
        path: 'requests',
        loadChildren: './components/request/request.module#RequestModule'
    },
    {
        path: 'statistics',
        loadChildren: './components/statistics/statistics.module#StatisticsModule'
    },
    {
        path: 'login',
        loadChildren: './components/authentication/login/login.module#LoginModule'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/cache/cache.service */ "./src/app/utils/cache/cache.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function AppComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.exit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_div_1_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/requests");
} }
function AppComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_11_div_1_a_5_Template, 2, 1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.blAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/statistics");
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_11_div_1_Template, 10, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blMenu);
} }
class AppComponent {
    constructor(router, _cacheService) {
        this.router = router;
        this._cacheService = _cacheService;
        this.title = 'enterateWeb';
        this.blMenu = true;
        this.blAdmin = false;
        this.txtEvents = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].MENU_EVENTS;
        this.txtRequets = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].MENU_REQUEST;
        this.txtNotifications = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].MENU_NOTIFICATIONS;
        this.txtStatistics = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].MENU_STATISTICS;
        const token = this._cacheService.load("token");
    }
    ngOnInit() {
        this.router.navigate(['/events']);
    }
    exit() {
        this._cacheService.remove("token");
        this._cacheService.remove("userId");
        this._cacheService.remove("rolId");
        this._cacheService.remove("user");
        this._cacheService.remove("tokenAcademusoft");
        this._cacheService.remove("academusoftId");
        this.router.navigate(['/login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 6, consts: [[1, "mainAppComponent"], ["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan"], [1, "headerLogin"], [1, "headerBodyLogin"], [1, "example-spacer"], ["src", "assets/logoCamacho.png", "width", "9%"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with share icon", 3, "click", 4, "ngIf"], [1, "gridContent", 3, "colspan"], ["class", "contentApp", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon", 3, "click"], [1, "contentApp"], [1, "row"], [1, "page-footer", "font-small", "blue", "column", "footer"], [1, "md-hue-2", "md-toolbar"], [1, "md-toolbar-tools"], [1, "imgSmartCampus"], ["src", "assets/logo-smart-campus.png", "width", "12%"], ["class", "mainSide row", 4, "ngIf"], [1, "mainSide", "row"], [1, "menuLateral", "container", "column"], ["src", "assets/logo-enterate.png", "width", "40%"], ["mat-button", "", 1, "btnMenu", 3, "routerLink"], ["src", "assets/eventos.png", "width", "100%"], ["mat-button", "", "class", "btnMenu", 3, "routerLink", 4, "ngIf"], ["src", "assets/estadisticas.png", "width", "100%"], [1, "contentMain", "rout", "container"], ["src", "assets/peticiones.png", "width", "100%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_button_8_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 8, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 7, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 4)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.blMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blMenu);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".imgSmartCampus[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2%;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  font-family: \"Raleway\", sans-serif !important;\n  border-bottom-color: #006CD2 !important;\n  border-style: solid;\n  border-width: 0px 0px 1px 0px;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXERvY3VtZW50b3MgcGVyc29uYWxlc1xcVU5JVkVSU0lEQURcXFRlc2lzXFxlbnRlcmF0ZV9mcm9udFxcZW50ZXJhdGVfd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdTbWFydENhbXB1cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDZDRDIgIWltcG9ydGFudDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIiwiLmltZ1NtYXJ0Q2FtcHVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDZDRDIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/cache/cache.service.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/cache/cache.service.ts ***!
  \**********************************************/
/*! exports provided: CacheService, LocalStorageSaveOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageSaveOptions", function() { return LocalStorageSaveOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CacheService {
    constructor(router) {
        this.router = router;
    }
    save(options) {
        // Set default values for optionals
        options.expirationMins = options.expirationMins || 0;
        // Set expiration date in miliseconds
        const expirationMS = options.expirationMins !== 0 ? options.expirationMins * 60 * 1000 : 0;
        const record = {
            value: typeof options.data === 'string' ? options.data : JSON.stringify(options.data),
            expiration: expirationMS !== 0 ? new Date().getTime() + expirationMS : null,
            hasExpiration: expirationMS !== 0 ? true : false
        };
        localStorage.setItem(options.key, JSON.stringify(record));
    }
    load(key) {
        // Get cached data from localstorage
        const item = localStorage.getItem(key);
        if (item !== null) {
            const record = JSON.parse(item);
            const now = new Date().getTime();
            // Expired data will return null
            if (!record || (record.hasExpiration && record.expiration <= now)) {
                this.router.navigateByUrl('/login');
                return null;
            }
            else {
                return record.value;
            }
        }
        else {
            this.router.navigateByUrl('/login');
            return null;
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    cleanLocalStorage() {
        localStorage.clear();
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
class LocalStorageSaveOptions {
}


/***/ }),

/***/ "./src/app/utils/constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
//Integration
Constants.API_ENDPOINT = 'https://tesisenterate.herokuapp.com/';
//public static API_ENDPOINT = 'http://localhost:8086/';
Constants.API_FILE_ENDPOINT = '/rsu_upload_files-0.0.1-SNAPSHOT/fileservice/uploadFile';
Constants.FILE_DIRECTORY = 'Eventos';
Constants.FILE_API_NAME = 'ENTERATE_UNIAJC';
Constants.FILE_MSG_ERROR = 'No se pudo cargar la imagen ingresada, por favor comuniquese con el administrador.';
//Configuración
Constants.ROLADMIN = 3;
Constants.ROLSTATISTICS = 4;
//Events
Constants.EVENTS_ENDPOINT = 'events/';
Constants.REQUESTS_ENDPOINT = 'request';
Constants.GET_EVENTS_NOTFOUND = 'No se encontraron eventos.';
Constants.CAMPUS_ENDPOINT = 'campus';
Constants.CONFIGURATION_ENDPOINT = 'configuration';
Constants.PROGRAMS_ENDPOINT = 'program/';
//Users
Constants.USERS_ENDPOINT = 'users/';
Constants.VALIDATE_USER_ENDPOINT = 'validateUser';
Constants.AUTHENTICATE_USER_ENDPOINT = 'authenticateUser';
Constants.RECOVERYPASSWORD_USER_ENDPOINT = 'recoveryAccess';
Constants.AUTHENTICATE_USER_ROLNOTFOUND = 'EL usuario no tiene permisos para entrar a la aplicación.';
//User Form
Constants.TXTUSER = "Usuario academusoft";
Constants.TXTPASSWORD = "Contraseña";
Constants.VALIDATE_USERNAME = "El usuario es requerido.";
Constants.VALIDATE_PASSWORD = "La contraseña es requerida.";
Constants.BUTTON_LOGIN = "Continuar";
Constants.BUTTON_CANCEL = "Cancelar";
Constants.BUTTON_PASSWORD = "Ingresar";
Constants.TXTRECOVERY = "Olvidé mi contraseña";
Constants.BUTTON_RECOVERY = "Restablecer Contraseña";
Constants.CANCEL_RECOVERY = "Ya la recuerdas, volver a iniciar sesión.";
//Login Form
Constants.MENU_EVENTS = 'Eventos';
Constants.MENU_REQUEST = 'Solicitudes';
Constants.MENU_NOTIFICATIONS = 'Notificaciones';
Constants.MENU_STATISTICS = 'Estadisticas';
//request Form
Constants.GET_REQUEST_NOTFOUND = 'No se encontraron solicitudes pendientes.';
Constants.BUTTON_RECHAZAR = 'Rechazar';
Constants.BUTTON_ACEPTAR = 'Aceptar';
//Create Event Form
Constants.BUTTON_CREATE = 'Crear Evento';
Constants.BUTTON_FILE = 'Seleccionar Imagen';
Constants.TXTVALIDATENAMECREATEVENT = 'El nombre del evento es obligatorio';
Constants.TXTVALIDATEDESCRIPTIONCREATEVENT = 'La descripción del evento es obligatoria';
Constants.TXTVALIDATEDATECREATEVENT = 'La fecha de inicio es obligatoria';
Constants.TXTVALIDATEHSTARTCREATEVENT = 'La hora de inicio es obligatorio';
Constants.TXTVALIDATEHENDCREATEVENT = 'La hora de finalziación es obligatorio';
Constants.TXTVALIDATECATEGORYCREATEVENT = 'La categoria es obligatoria';
Constants.TXTVALIDATEESTATEMENTCREATEVENT = 'El estamento es obligatorio';
Constants.TXTVALIDATELOCATIONCREATEVENT = 'La ubicación es obligatoria';
Constants.TXTVALIDATEASISTCREATEVENT = 'La cantidad de asistentes es obligatoria';
Constants.TXTVALIDATEIMGCREATEVENT = 'La imagen es obligatoria';
Constants.TXTNAMECREATEEVENT = 'Nombre Evento';
Constants.TXTDESCRIPTIONCREATEEVENT = 'Descripción del Evento';
Constants.TXTDATECREATEEVENT = 'Fecha de Inicio';
Constants.TXTDATECREATEEVENTEND = 'Fecha de Finalización';
Constants.TXTHSTARTCREATEEVENT = 'Hora de Inicio';
Constants.TXTHENDCREATEEVENT = 'Hora de Finalización';
Constants.TXTCATEGORYCREATEEVENT = 'Categoria';
Constants.TXTESTATEMENTCREATEEVENT = 'Estamento';
Constants.TXTLOCATIONCREATEEVENT = 'Ubicación';
Constants.TXTASISTCREATEEVENT = 'Asistentes';
Constants.TXTIMGCREATEEVENT = 'Imagenes';
Constants.TXTJORNALYCREATEEVENT = 'Jornada';
Constants.TXTFACULTYCREATEEVENT = 'Facultad';
Constants.TXTPROGRAMCREATEEVENT = 'Programa';
Constants.CREATEVENT_TITLE = 'Creación de Eventos';
Constants.IMG_CREATEEVENT_NAME = 'assets/nombre_de_evento.png';
Constants.IMG_CREATEEVENT_DESCRIPTION = 'assets/descripcion_evento.png';
Constants.IMG_CREATEEVENT_DATE = 'assets/fecha_de_inicio.png';
Constants.IMG_CREATEEVENT_HSTART = 'assets/hora_de_inicio.png';
Constants.IMG_CREATEEVENT_HEND = 'assets/hora_de_finalizacion.png';
Constants.IMG_CREATEEVENT_CATEGORY = 'assets/categoria.png';
Constants.IMG_CREATEEVENT_ESTATEMENT = 'assets/estamento.png';
Constants.IMG_CREATEEVENT_LOCATION = 'assets/ubicacion.png';
Constants.IMG_CREATEEVENT_ASIST = 'assets/asistentes.png';
Constants.IMG_CREATEEVENT_IMG = 'assets/imagenes.png';
Constants.IMG_CREATEEVENT_FACULTY = 'assets/facultad.png';
Constants.IMG_CREATEEVENT_JORNALY = 'assets/jornada.png';
Constants.IMG_CREATEEVENT_PROGRAM = 'assets/programa.png';
Constants.INVALID_STATUS = 'Por favor ingrese todos los campos requeridos para poder continuar.';
//Statistics
Constants.BUTTON_SEARCH = 'Buscar';
Constants.BUTTON_CLEAR = 'Borrar Filtro';
Constants.BUTTON_DOWNLOAD = 'Descargar';
Constants.STATISTICS_ENDPOINT = 'statistics/';
Constants.SATISFACTIONLEVEL_ENDPOINT = 'satisfactionLevel/';
Constants.ALLGENDER_ENDPOINT = 'genderAssistants/';
Constants.CANT_ASSIST_ENDPOINT = 'allAssistants/';
Constants.CANTS_EVENTS_ENDPOINT = 'allEvents/';
Constants.ALL_AGE_ENDPOINT = 'ageAssistants/';
Constants.TITLE_SATISFACTION = 'Nivel de satisfacción';
Constants.TITLE_CANTEVENTS = 'Eventos por fecha';
Constants.TITLE_CANTASSIS = 'Participación en los eventos';
Constants.TITLE_ALLGENDER = 'Genero de participantes';
Constants.TITLE_AGE = 'Edad por quinquenios';
Constants.DESCRIPTION_SATISFACTION = 'Esta gráfica muestra el nivel de satisfacción de los asistentes a los eventos';
Constants.DESCRIPTION_CANTEVENTS = 'Esta gráfica muestra la cantidad de eventos realizados en cada mes';
Constants.DESCRIPTION_CANTASSIS = 'Esta gráfica muestra lel resultado de los registros.';
Constants.DESCRIPTION_ALLGENDER = 'Esta gráfica muestra el número de particpantes por genero';
Constants.DESCRIPTION_AGE = 'Esta gráfica muestra la edad de los participantes por quinquenio';
Constants.MES_1 = 'Enero';
Constants.MES_2 = 'Febrero';
Constants.MES_3 = 'Marzo';
Constants.MES_4 = 'Abril';
Constants.MES_5 = 'Mayo';
Constants.MES_6 = 'Junio';
Constants.MES_7 = 'Julio';
Constants.MES_8 = 'Agosto';
Constants.MES_9 = 'Septiembre';
Constants.MES_10 = 'Octubre';
Constants.MES_11 = 'Noviembre';
Constants.MES_12 = 'Diciembre';
Constants.QUINQUENIO1 = '1 - 5 años';
Constants.QUINQUENIO2 = '6 - 10 años';
Constants.QUINQUENIO3 = '11 - 15 años';
Constants.QUINQUENIO4 = '16 - 20 años';
Constants.QUINQUENIO5 = '21 - 25 años';
Constants.QUINQUENIO6 = '26 - 30 años';
Constants.QUINQUENIO7 = '31 - 35 años';
Constants.QUINQUENIO8 = '36 - 40 años';
Constants.QUINQUENIO9 = '41 - 45 años';
Constants.QUINQUENIO10 = '46 - 50 años';
Constants.QUINQUENIO11 = '51 - 55 años';
Constants.QUINQUENIO12 = '56 - 60 años';
Constants.QUINQUENIO13 = '61 - 65 años';
Constants.QUINQUENIO14 = '66 - 70 años';
Constants.QUINQUENIO15 = '71 - 75 años';
Constants.QUINQUENIO16 = '76 - 80 años';
Constants.QUINQUENIO17 = '81 o mas años';
//Logo Camacho
Constants.TXTLOGOUNIAJCBIENVENIDO = 'Bienvenido';
Constants.TXTLOGOUNIAJC = '#UniCamacho';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Documentos personales\UNIVERSIDAD\Tesis\enterate_front\enterate_web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map