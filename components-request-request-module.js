(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-request-request-module"],{

/***/ "./src/app/components/request/request.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/request/request.component.ts ***!
  \*********************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/components/dialog/dialog.component */ "./src/app/utils/components/dialog/dialog.component.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request.service */ "./src/app/components/request/request.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _utils_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/components/dialog/dialog.service */ "./src/app/utils/components/dialog/dialog.service.ts");
/* harmony import */ var _utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/cache/cache.service */ "./src/app/utils/cache/cache.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");














function RequestComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.txtNotFound);
} }
function RequestComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.discardEvent(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.acceptEvent(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.buttonRechazar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.buttonAceptar);
} }
function RequestComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RequestComponent {
    constructor(_requestService, _matDialog, _dialogService, _cacheService, _appComponent) {
        this._requestService = _requestService;
        this._matDialog = _matDialog;
        this._dialogService = _dialogService;
        this._cacheService = _cacheService;
        this._appComponent = _appComponent;
        this.blSpinner = false;
        this.notFound = true;
        this.txtNotFound = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].GET_REQUEST_NOTFOUND;
        this.buttonRechazar = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BUTTON_RECHAZAR;
        this.buttonAceptar = _utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BUTTON_ACEPTAR;
    }
    ngOnInit() {
        this.getRequests();
    }
    acceptEvent(event) {
        event.userAdmId = this._cacheService.load("userId");
        event.stateId = 1;
        this.updateEvent(event);
    }
    discardEvent(event) {
        event.userAdmId = this._cacheService.load("userId");
        event.stateId = 5;
        this.updateEvent(event);
    }
    openDialog(content, title) {
        const dialogRef = this._matDialog.open(_utils_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]);
        this._dialogService.dialog.title = title;
        this._dialogService.dialog.content = content;
    }
    getRequests() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.blSpinner = true;
            const response = yield this._requestService.getRequests();
            if (response["result"]) {
                this.dataSource = response["data"];
                this.notFound = false;
            }
            else {
                this.openDialog(response["msg"], "Advertencia");
                this.notFound = true;
            }
            this.blSpinner = false;
        });
    }
    updateEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.blSpinner = true;
            const response = yield this._requestService.acceptDiscardEvent(event);
            if (response["result"]) {
                this.openDialog(response["msg"], "Información");
                const responseGetEvents = yield this._requestService.getRequests();
                if (responseGetEvents["result"]) {
                    this.dataSource = responseGetEvents["data"];
                    this.notFound = false;
                }
                else {
                    this.dataSource = [];
                    this.notFound = true;
                }
            }
            else {
                this.openDialog(response["msg"], "Advertencia");
            }
            this.blSpinner = false;
        });
    }
}
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"])); };
RequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["app-request"]], decls: 4, vars: 3, consts: [[1, "divMain"], ["class", "NotFound", 4, "ngIf"], ["class", "divMainCard", 4, "ngFor", "ngForOf"], ["class", "overlay", 4, "ngIf"], [1, "NotFound"], [1, "divMainCard"], ["ng-mouseover", "'background-color': 'red'grid.appScope.onRowHover(this);", 1, "container"], [1, "txtContainer"], ["width", "388px", "height", "242", 1, "md-user-avatar", 3, "src"], [1, "clsButtons"], ["mat-button", "", 1, "clsBtnRechazar", 3, "click"], ["mat-button", "", 1, "clsBtnAceptar", 3, "click"], [1, "overlay"], [1, "center"], ["diameter", "70"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RequestComponent_div_2_Template, 14, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RequestComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.blSpinner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], styles: [".mat-card-title[_ngcontent-%COMP%] {\n  padding: 2% 0% 1% 0%;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-bottom: 2%;\n}\n\n.mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 30px -8px #006cd2;\n}\n\n.divMainCard[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.NotFound[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.txtContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-right: 4%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"Raleway Medium\" !important;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Raleway Medium\" !important;\n}\n\n.clsButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 2%;\n  justify-content: space-between;\n  padding-left: 8%;\n  padding-right: 2%;\n}\n\n.clsBtnRechazar[_ngcontent-%COMP%] {\n  font-family: \"Raleway Medium\" !important;\n  color: lightgrey !important;\n  font-size: 18px;\n}\n\n.clsBtnAceptar[_ngcontent-%COMP%] {\n  font-family: \"Raleway Medium\" !important;\n  color: #006CD2 !important;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L0U6XFxEb2N1bWVudG9zIHBlcnNvbmFsZXNcXFVOSVZFUlNJREFEXFxUZXNpc1xcZW50ZXJhdGVfZnJvbnRcXGVudGVyYXRlX3dlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVxdWVzdFxccmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFHRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSx3Q0FBQTtBQ0hGOztBRE1BO0VBQ0Usd0NBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDIlIDAlIDElIDAlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5tYXQtY2FyZDpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMwcHggLThweCByZ2JhKDAsMTA4LDIxMCwxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCAtOHB4IHJnYmEoMCwxMDgsMjEwLDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAtOHB4IHJnYmEoMCwxMDgsMjEwLDEpO1xyXG59XHJcblxyXG4uZGl2TWFpbkNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGl2TWFpbiB7XHJcblxyXG59XHJcblxyXG4uTm90Rm91bmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udHh0Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5IE1lZGl1bScgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXkgTWVkaXVtJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xzQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6OCU7XHJcbiAgcGFkZGluZy1yaWdodDoyJTtcclxufVxyXG5cclxuLmNsc0J0blJlY2hhemFyIHtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXkgTWVkaXVtJyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBsaWdodGdyZXkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jbHNCdG5BY2VwdGFyIHtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXkgTWVkaXVtJyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDA2Q0QyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiIsIi5tYXQtY2FyZC10aXRsZSB7XG4gIHBhZGRpbmc6IDIlIDAlIDElIDAlO1xufVxuXG4ubWF0LWNhcmQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cblxuLm1hdC1jYXJkOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMwcHggLThweCAjMDA2Y2QyO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCAtOHB4ICMwMDZjZDI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAtOHB4ICMwMDZjZDI7XG59XG5cbi5kaXZNYWluQ2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uTm90Rm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnR4dENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1yaWdodDogNCU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5IE1lZGl1bVwiICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgTWVkaXVtXCIgIWltcG9ydGFudDtcbn1cblxuLmNsc0J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cblxuLmNsc0J0blJlY2hhemFyIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheSBNZWRpdW1cIiAhaW1wb3J0YW50O1xuICBjb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsc0J0bkFjZXB0YXIge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5IE1lZGl1bVwiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA2Q0QyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-request',
                templateUrl: './request.component.html',
                styleUrls: ['./request.component.scss']
            }]
    }], function () { return [{ type: _request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _utils_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: _utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/request/request.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/request/request.module.ts ***!
  \******************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.component */ "./src/app/components/request/request.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");












const routes = [
    {
        path: '',
        component: _request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"]
    }
];
class RequestModule {
}
RequestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestModule });
RequestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestModule_Factory(t) { return new (t || RequestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestModule, { declarations: [_request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/request/request.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/request/request.service.ts ***!
  \*******************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cache/cache.service */ "./src/app/utils/cache/cache.service.ts");






class RequestService {
    constructor(_http, _cacheService) {
        this._http = _http;
        this._cacheService = _cacheService;
    }
    getRequests() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const token = this._cacheService.load("token");
                const userId = this._cacheService.load("userId");
                const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_ENDPOINT}${_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].EVENTS_ENDPOINT}${_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].REQUESTS_ENDPOINT}/${userId}`;
                const result = yield fetch(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                    method: "GET"
                });
                const response = yield result.json();
                if (response["token"] != "" && response["token"] != null && response["token"] != undefined) {
                    this._cacheService.remove("token");
                    this._cacheService.save({
                        key: "token",
                        data: response["token"],
                        expirationMins: 60
                    });
                }
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    acceptDiscardEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const token = this._cacheService.load("token");
                const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_ENDPOINT}${_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].EVENTS_ENDPOINT}${_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].REQUESTS_ENDPOINT}`;
                const result = yield fetch(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': token
                    },
                    method: "POST",
                    body: JSON.stringify(event)
                });
                const response = yield result.json();
                if (response["token"] != "" && response["token"] != null && response["token"] != undefined) {
                    this._cacheService.remove("token");
                    this._cacheService.save({
                        key: "token",
                        data: response["token"],
                        expirationMins: 60
                    });
                }
                return response;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _utils_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-request-request-module.js.map