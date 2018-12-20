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
var ViewComponent_1 = require("../core/ViewComponent");
//CSS
require("../_style/style-sheets/authentication.scss");
var LoginModel_1 = require("../connection/models/LoginModel");
var SignUpModel_1 = require("../connection/models/SignUpModel");
var Back = gsap.Back;
var Power1 = gsap.Power1;
var TweenLite = gsap.TweenLite;
var AuthenticationNotifications_1 = require("./AuthenticationNotifications");
var HTMLHelper_1 = require("../helpers/HTMLHelper");
var Power0 = gsap.Power0;
//HTML template
var template = require("../_view-templates/authentication.html");
var Authentication = /** @class */ (function (_super) {
    __extends(Authentication, _super);
    function Authentication(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Authentication view component initiated!");
        _this.screenWidth = window.innerWidth;
        _this.screenHeight = window.innerHeight;
        _this.contentContainerOffset = _this.screenWidth > 480 ? "75px" : "110px";
        _this.authStateLogin = true;
        _this.container.innerHTML = template;
        _this.contentContainer = document.getElementById("content-container");
        _this.authLoginHeader = document.getElementById("authentication-header-login");
        _this.authSignUpHeader = document.getElementById("authentication-header-signup");
        _this.authenticationBody = document.getElementById("authentication-body");
        _this.nameInputWrapper = document.getElementById("input-name-wrapper");
        _this.firstNameInput = document.getElementById("authentication-first-name");
        _this.lastNameInput = document.getElementById("authentication-last-name");
        _this.emailInput = document.getElementById("authentication-email");
        _this.passwordInput = document.getElementById("authentication-password");
        _this.checkboxSection = document.getElementById("checkbox-wrapper");
        _this.rememberMe = document.getElementById("authentication-remember-me");
        _this.authFooter = document.getElementById("authentication-footer");
        _this.actionBtn = document.getElementById("authentication-button-action");
        _this.actionBtnContent = document.getElementById("action-span");
        _this.switchBtn = document.getElementById("authentication-button-switch");
        _this.switchBtnContent = document.getElementById("switch-span");
        _this.authSignUpHeader.style.opacity = "0";
        _this.nameInputWrapper.style.opacity = "0";
        _this.container.style.display = "block";
        /** Bind "this" to handlers */
        _this.actionBtnHandler = _this.actionBtnHandler.bind(_this);
        _this.switchBtnHandler = _this.switchBtnHandler.bind(_this);
        _this.firstNameInputHandler = _this.firstNameInputHandler.bind(_this);
        _this.lastNameInputHandler = _this.lastNameInputHandler.bind(_this);
        _this.emailInputHandler = _this.emailInputHandler.bind(_this);
        _this.passwordInputHandler = _this.passwordInputHandler.bind(_this);
        _this.submitFormHandler = _this.submitFormHandler.bind(_this);
        _this.mobileInputFocusHandler = _this.mobileInputFocusHandler.bind(_this);
        _this.mobileInputBlurHandler = _this.mobileInputBlurHandler.bind(_this);
        _this.enterScene();
        return _this;
    }
    Authentication.prototype.registerEventListeners = function () {
        this.actionBtn.addEventListener("click", this.actionBtnHandler, true);
        this.switchBtn.addEventListener("click", this.switchBtnHandler, true);
        this.firstNameInput.addEventListener("click", this.firstNameInputHandler, true);
        // this.firstNameInput.addEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.firstNameInput.addEventListener( "blur", this.mobileInputBlurHandler, true );
        this.lastNameInput.addEventListener("click", this.lastNameInputHandler, true);
        // this.lastNameInput.addEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.lastNameInput.addEventListener( "blur", this.mobileInputBlurHandler, true );
        this.emailInput.addEventListener("click", this.emailInputHandler, true);
        // this.emailInput.addEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.emailInput.addEventListener( "blur", this.mobileInputBlurHandler, true );
        this.passwordInput.addEventListener("click", this.passwordInputHandler, true);
        // this.passwordInput.addEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.passwordInput.addEventListener( "blur", this.mobileInputBlurHandler, true );
        document.addEventListener("keypress", this.submitFormHandler, true);
    };
    Authentication.prototype.unregisterEventListeners = function () {
        console.log("Trying to remove event listeners");
        this.actionBtn.removeEventListener("click", this.actionBtnHandler, true);
        this.switchBtn.removeEventListener("click", this.switchBtnHandler, true);
        this.firstNameInput.removeEventListener("click", this.firstNameInputHandler, true);
        // this.firstNameInput.removeEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.firstNameInput.removeEventListener( "blur", this.mobileInputBlurHandler, true );
        this.lastNameInput.removeEventListener("click", this.lastNameInputHandler, true);
        // this.lastNameInput.removeEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.lastNameInput.removeEventListener( "blur", this.mobileInputBlurHandler, true );
        this.emailInput.removeEventListener("click", this.emailInputHandler, true);
        // this.emailInput.removeEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.emailInput.removeEventListener( "blur", this.mobileInputBlurHandler, true );
        this.passwordInput.removeEventListener("click", this.passwordInputHandler, true);
        // this.passwordInput.removeEventListener( "focus", this.mobileInputFocusHandler, true );
        // this.passwordInput.removeEventListener( "blur", this.mobileInputBlurHandler, true );
        document.removeEventListener("keypress", this.submitFormHandler, true);
    };
    Authentication.prototype.actionBtnHandler = function () {
        var _this = this;
        this.animateButtonClick();
        if (this.loadingState)
            return;
        if (this.authStateLogin && this.validateForLogin()) {
            this.initializeLoader();
            this.connection.login(new LoginModel_1.LoginModel(this.emailInput.value, this.passwordInput.value), function (data) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.LOGIN_SUCCESS, data);
            }, function (message) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.LOGIN_FAILURE, message);
            });
        }
        else if (!this.authStateLogin && this.validateForSignUp()) {
            this.initializeLoader();
            this.connection.signUp(new SignUpModel_1.SignUpModel(this.firstNameInput.value, this.lastNameInput.value, this.emailInput.value, this.passwordInput.value), function (data) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.SIGN_UP_SUCCESS, data);
            }, function (message) {
                _this.sendSignal(AuthenticationNotifications_1.AuthenticationNotifications.SIGN_UP_FAILURE, message);
            });
        }
        else {
            console.warn("Invalid input configuration for action button.");
        }
    };
    Authentication.prototype.switchBtnHandler = function () {
        if (this.loadingState)
            return;
        if (this.authStateLogin) {
            this.switchToSignUpState();
        }
        else {
            this.switchToLoginState();
        }
    };
    Authentication.prototype.firstNameInputHandler = function () {
        TweenLite.to(this.firstNameInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.lastNameInputHandler = function () {
        TweenLite.to(this.lastNameInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.emailInputHandler = function () {
        TweenLite.to(this.emailInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.passwordInputHandler = function () {
        TweenLite.to(this.passwordInput, 0.3, { css: { className: "-=invalid" }, ease: Power1.easeOut });
    };
    Authentication.prototype.submitFormHandler = function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            this.actionBtnHandler();
        }
    };
    Authentication.prototype.mobileInputFocusHandler = function (e) {
        var corrector = 200;
        var elementDistance = HTMLHelper_1.HTMLHelper.getPosition(e.target);
        var inputDistanceTop = elementDistance.y - corrector;
        var windowHeight = document.body.scrollHeight;
        var halfScreen = windowHeight / 2;
        var elementHeight = e.target.offsetHeight;
        var distance = inputDistanceTop + elementHeight;
        console.log("total distance: " + distance);
        console.log("is over the top? : " + (distance > halfScreen));
        if (distance > halfScreen) {
            TweenLite.to(this.contentContainer, 0.2, { top: "-=" + (distance - halfScreen), ease: Power1.easeOut });
        }
    };
    Authentication.prototype.mobileInputBlurHandler = function (e) {
        TweenLite.to(this.contentContainer, 0.2, { top: "-105%", ease: Power1.easeOut });
    };
    Authentication.prototype.enterScene = function () {
        this.registerEventListeners();
        this.switchToLoginState();
        this.container.style.display = "block";
    };
    Authentication.prototype.exitScene = function (exitType) {
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        var self = this;
        TweenLite.to(this.contentContainer, 0.4, { css: { top: this.contentContainerOffset }, ease: Back.easeOut.config(0.25), onComplete: function () {
                self.container.style.display = "none";
                self.view.componentExited(self.name);
            } });
    };
    Authentication.prototype.switchToSignUpState = function () {
        var _this = this;
        this.authStateLogin = false;
        TweenLite.to(this.actionBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.actionBtnContent.innerText = "sign up";
            } });
        TweenLite.to(this.actionBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.switchBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.switchBtnContent.innerText = "login";
            } });
        TweenLite.to(this.switchBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.authenticationBody, 0.5, { y: 100 });
        TweenLite.to(this.authFooter, 0.5, { y: 50 });
        TweenLite.to(this.checkboxSection, 0.5, { opacity: 0 });
        TweenLite.to(this.nameInputWrapper, 0.5, { opacity: 1 });
        TweenLite.to(this.authLoginHeader, 0.15, { opacity: 0, y: -15 });
        TweenLite.to(this.authSignUpHeader, 0.5, { opacity: 1, y: 0 });
    };
    Authentication.prototype.switchToLoginState = function () {
        var _this = this;
        this.authStateLogin = true;
        TweenLite.to(this.actionBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.actionBtnContent.innerText = "login";
            } });
        TweenLite.to(this.actionBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.switchBtnContent, 0.15, { opacity: 0, onComplete: function () {
                _this.switchBtnContent.innerText = "sign up";
            } });
        TweenLite.to(this.switchBtnContent, 0.3, { opacity: 1, delay: 0.2 });
        TweenLite.to(this.authenticationBody, 0.5, { y: 0 });
        TweenLite.to(this.authFooter, 0.5, { y: 0 });
        TweenLite.to(this.checkboxSection, 0.5, { opacity: 1 });
        TweenLite.to(this.nameInputWrapper, 0.3, { opacity: 0 });
        TweenLite.to(this.authLoginHeader, 0.5, { opacity: 1, y: 0 });
        TweenLite.to(this.authSignUpHeader, 0.15, { opacity: 0, y: -15 });
    };
    Authentication.prototype.validateForLogin = function () {
        var email = this.emailInput.value;
        var isEmailValid = this.validateEmail(email);
        var password = this.passwordInput.value;
        if (!isEmailValid)
            TweenLite.to(this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!password)
            TweenLite.to(this.passwordInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        return isEmailValid && password !== "";
    };
    Authentication.prototype.validateForSignUp = function () {
        var firstName = this.firstNameInput.value;
        var lastName = this.lastNameInput.value;
        var email = this.emailInput.value;
        var isEmailValid = this.validateEmail(email);
        var password = this.passwordInput.value;
        if (!firstName)
            TweenLite.to(this.firstNameInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!lastName)
            TweenLite.to(this.lastNameInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!isEmailValid)
            TweenLite.to(this.emailInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        if (!password)
            TweenLite.to(this.passwordInput, 0.3, { css: { className: "+=invalid" }, ease: Power1.easeOut });
        return firstName !== "" && lastName !== "" && isEmailValid && password !== "";
    };
    Authentication.prototype.initializeLoader = function () {
        console.log("initialize loader called");
        this.loadingState = true;
        this.actionBtn.style.backgroundColor = "red";
    };
    Authentication.prototype.animateButtonClick = function () {
        TweenLite.to(this.actionBtn, 0.05, { scale: 0.98, ease: Power0.easeIn });
        TweenLite.to(this.actionBtn, 0.1, { scale: 1, delay: 0.05, ease: Back.easeIn });
    };
    Authentication.prototype.terminateLoader = function () {
        this.loadingState = false;
    };
    Authentication.prototype.setLoadingState = function (value) {
        this.loadingState = value;
    };
    Authentication.prototype.validateEmail = function (email) {
        var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return regex.test(String(email).toLocaleLowerCase());
    };
    return Authentication;
}(ViewComponent_1.ViewComponent));
exports.Authentication = Authentication;
