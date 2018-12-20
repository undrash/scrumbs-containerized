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
var View_1 = require("../core/View");
var SystemConstants_1 = require("../core/SystemConstants");
// Example imports:
//CSS
require("../_style/style-sheets/header.scss");
var Back = gsap.Back;
var TweenLite = gsap.TweenLite;
var HeaderNotifications_1 = require("./HeaderNotifications");
var Power0 = gsap.Power0;
var RecordNotifications_1 = require("../records/RecordNotifications");
var ConnectionNotifications_1 = require("../connection/ConnectionNotifications");
//HTML template
var template = require("../_view-templates/header.html");
var HeaderView = /** @class */ (function (_super) {
    __extends(HeaderView, _super);
    function HeaderView() {
        var _this = _super.call(this, "HeaderView") || this;
        console.info("Header view initiated!");
        _this.screenWidth = window.innerWidth;
        _this.screenHeight = window.innerHeight;
        _this.headingOffset = _this.screenWidth > 480 ? "-50px" : "-130px";
        _this.container = document.getElementById(SystemConstants_1.SystemConstants.HEADING_CONTAINER);
        _this.headingContainer = document.getElementById("heading-container");
        _this.headingContainer.style.top = _this.headingOffset;
        _this.container.innerHTML = template;
        _this.profileMenuToggle = document.getElementById("profile-dropdown-icon");
        _this.addRecordBtn = document.getElementById("header-button-add-record");
        _this.headerButtonsContainer = document.getElementById("header-buttons-container");
        _this.scrumBtn = document.getElementById("records-button");
        _this.blockersBtn = document.getElementById("blockers-button");
        _this.addRecordHandler = _this.addRecordHandler.bind(_this);
        _this.addRecordBtnMouseOverHandler = _this.addRecordBtnMouseOverHandler.bind(_this);
        _this.addRecordBtnMouseOutHandler = _this.addRecordBtnMouseOutHandler.bind(_this);
        _this.profileMenuToggleClickHandler = _this.profileMenuToggleClickHandler.bind(_this);
        _this.scrumBtnHandler = _this.scrumBtnHandler.bind(_this);
        _this.blockersBtnHandler = _this.blockersBtnHandler.bind(_this);
        _this.keyPressHandler = _this.keyPressHandler.bind(_this);
        _this.setActiveMenuBtnClickHandler = _this.setActiveMenuBtnClickHandler.bind(_this);
        return _this;
    }
    HeaderView.prototype.registerEventListeners = function () {
        this.addRecordBtn.addEventListener("click", this.addRecordHandler);
        this.addRecordBtn.addEventListener("mouseover", this.addRecordBtnMouseOverHandler);
        this.addRecordBtn.addEventListener("mouseout", this.addRecordBtnMouseOutHandler);
        this.profileMenuToggle.addEventListener("click", this.profileMenuToggleClickHandler);
        this.scrumBtn.addEventListener("click", this.setActiveMenuBtnClickHandler);
        this.scrumBtn.addEventListener("click", this.scrumBtnHandler);
        this.blockersBtn.addEventListener("click", this.setActiveMenuBtnClickHandler);
        this.blockersBtn.addEventListener("click", this.blockersBtnHandler);
        document.addEventListener("keypress", this.keyPressHandler);
    };
    HeaderView.prototype.unregisterEventListeners = function () {
        this.addRecordBtn.removeEventListener("click", this.addRecordHandler);
        this.addRecordBtn.removeEventListener("mouseover", this.addRecordBtnMouseOverHandler);
        this.addRecordBtn.removeEventListener("mouseout", this.addRecordBtnMouseOutHandler);
        this.profileMenuToggle.removeEventListener("click", this.profileMenuToggleClickHandler);
        this.blockersBtn.removeEventListener("click", this.setActiveMenuBtnClickHandler);
        this.scrumBtn.removeEventListener("click", this.scrumBtnHandler);
        this.blockersBtn.removeEventListener("click", this.setActiveMenuBtnClickHandler);
        this.blockersBtn.removeEventListener("click", this.blockersBtnHandler);
        document.removeEventListener("keypress", this.keyPressHandler);
    };
    HeaderView.prototype.addRecordBtnAnimation = function () {
        TweenLite.to(this.addRecordBtn, 0.15, { scale: 0.5, ease: Power0.easeOut });
        TweenLite.to(this.addRecordBtn, 0.10, { delay: 0.15, scale: 1, ease: Back.easeOut.config(0.25) });
    };
    HeaderView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(ConnectionNotifications_1.ConnectionNotifications.LOGIN_SUCCESS);
        notifications.push(ConnectionNotifications_1.ConnectionNotifications.SIGNUP_SUCCESS);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
        notifications.push(RecordNotifications_1.RecordNotifications.RECORD_ADDED);
        return notifications;
    };
    HeaderView.prototype.addRecordHandler = function () {
        this.addRecordBtnAnimation();
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.ADD_ITEM);
    };
    HeaderView.prototype.addRecordBtnMouseOverHandler = function () {
        TweenLite.to(this.addRecordBtn, 0.15, { scale: 1.05, ease: Power0.easeOut });
    };
    HeaderView.prototype.addRecordBtnMouseOutHandler = function () {
        TweenLite.to(this.addRecordBtn, 0.2, { scale: 1, ease: Power0.easeOut });
    };
    HeaderView.prototype.profileMenuToggleClickHandler = function () {
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
    };
    HeaderView.prototype.scrumBtnHandler = function () {
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.SCRUM_BTN_PRESSED);
    };
    HeaderView.prototype.blockersBtnHandler = function () {
        this.sendNotification(HeaderNotifications_1.HeaderNotifications.BLOCKERS_BTN_PRESSED);
    };
    HeaderView.prototype.keyPressHandler = function (e) {
        if (e.ctrlKey && e.keyCode === 17) {
            this.sendNotification(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
        }
    };
    HeaderView.prototype.setActiveMenuBtnClickHandler = function (e) {
        this.setActiveMenuBtn(e.target);
    };
    HeaderView.prototype.setActiveMenuBtn = function (btn) {
        var buttons = this.headerButtonsContainer.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        btn.classList.add("active");
    };
    HeaderView.prototype.enterScene = function () {
        this.registerEventListeners();
        TweenLite.to(this.headingContainer, 0.2, { css: { top: 0 }, ease: Back.easeOut.config(0.2) });
    };
    HeaderView.prototype.exitScene = function (exitType) {
        var _this = this;
        this.unregisterEventListeners();
        TweenLite.to(this.headingContainer, 0.2, {
            css: { top: this.headingOffset },
            onComplete: function () { return _this.setActiveMenuBtn(_this.scrumBtn); },
            ease: Back.easeOut.config(0.2)
        });
    };
    HeaderView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case RecordNotifications_1.RecordNotifications.RECORD_ADDED:
                this.addRecordBtnAnimation();
                break;
            default:
                break;
        }
    };
    return HeaderView;
}(View_1.View));
exports.HeaderView = HeaderView;
