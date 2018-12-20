"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// CSS
require("../_style/style-sheets/dialog.scss");
//HTML template
var template = require("../_view-templates/dialog.html");
var TweenLite = gsap.TweenLite;
var ViewComponent_1 = require("../core/ViewComponent");
var Back = gsap.Back;
var Power0 = gsap.Power0;
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(view, container, confirmSignal, title, message, submitBtnText, cancelBtnText) {
        var _this = _super.call(this, view, container) || this;
        console.info("Dialog view component initialized.");
        _this.container.innerHTML = template;
        _this.confirmSignal = confirmSignal;
        _this.title = document.getElementById("dialog-title");
        _this.message = document.getElementById("dialog-message");
        _this.submitButton = document.getElementById("dialog-submit-button");
        _this.cancelButton = document.getElementById("dialog-cancel-button");
        _this.closeButton = document.getElementById("close-dialog");
        if (title.length > 100)
            title = title.substr(0, 99) + " ...?";
        _this.title.innerHTML = title;
        if (message.length > 100)
            throw new Error("Dialog message length cannot exceed 100 characters!");
        if (message)
            _this.message.innerHTML = message;
        submitBtnText ? _this.submitButton.innerText = submitBtnText : _this.submitButton.innerText = "OK";
        cancelBtnText ? _this.cancelButton.innerHTML = cancelBtnText : _this.cancelButton.innerText = "Cancel";
        _this.confirmBtnClickHandler = _this.confirmBtnClickHandler.bind(_this);
        _this.exitScene = _this.exitScene.bind(_this);
        _this.enterScene();
        return _this;
    }
    Dialog.prototype.registerEventListeners = function () {
        this.closeButton.addEventListener("click", this.exitScene);
        this.cancelButton.addEventListener("click", this.exitScene);
        this.submitButton.addEventListener("click", this.confirmBtnClickHandler);
    };
    Dialog.prototype.unregisterEventListeners = function () {
        this.closeButton.removeEventListener("click", this.exitScene);
        this.cancelButton.removeEventListener("click", this.exitScene);
        this.submitButton.removeEventListener("click", this.confirmBtnClickHandler);
    };
    Dialog.prototype.confirmBtnClickHandler = function (e) {
        this.sendSignal(this.confirmSignal);
        this.exitScene();
    };
    Dialog.prototype.enterScene = function () {
        this.registerEventListeners();
        TweenLite.to(this.container, 0.3, { css: { "margin-top": "15%", opacity: 1 }, ease: Back.easeOut.config(0.7) });
    };
    Dialog.prototype.exitScene = function () {
        var _this = this;
        this.unregisterEventListeners();
        TweenLite.to(this.view.background, 0.1, { opacity: 0, delay: 0.05 });
        TweenLite.to(this.container, 0.15, { css: { "margin-top": "30%", opacity: 0, }, onComplete: function () {
                _this.view.componentExited(_this.name);
            }, ease: Power0.easeOut });
    };
    return Dialog;
}(ViewComponent_1.ViewComponent));
exports.Dialog = Dialog;
