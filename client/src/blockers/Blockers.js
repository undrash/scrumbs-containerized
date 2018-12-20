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
//CSS
require("../_style/style-sheets/blockers.scss");
var ViewComponent_1 = require("../core/ViewComponent");
var ViewExitTypes_1 = require("../core/ViewExitTypes");
var Blocker_1 = require("./Blocker");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var Back = gsap.Back;
var SystemConstants_1 = require("../core/SystemConstants");
var Blockers = /** @class */ (function (_super) {
    __extends(Blockers, _super);
    function Blockers(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Blockers view component initiated!");
        _this.contentContainer = document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER);
        _this.unsolvedBlockersContainer = document.createElement("div");
        _this.unsolvedBlockersContainer.id = "unsolved-blockers-container";
        _this.unsolvedBlockersContainer.className = "list-clear";
        _this.solvedBlockersContainer = document.createElement("div");
        _this.solvedBlockersContainer.id = "solved-blockers-container";
        _this.solvedBlockersContainer.className = "list-clear solved-blockers-container";
        _this.isSolvedBlockerVisible = false;
        _this.toggleSolvedBlockersVisibility = document.createElement("button");
        _this.toggleSolvedBlockersVisibility.innerText = "Show solved blockers";
        _this.toggleSolvedBlockersVisibility.className = "toggle-solved-blockers-visibility-btn";
        _this.container.appendChild(_this.unsolvedBlockersContainer);
        _this.container.appendChild(_this.toggleSolvedBlockersVisibility);
        _this.container.appendChild(_this.solvedBlockersContainer);
        _this.connection.getBlockers(_this.populate.bind(_this), function (message) { return console.log(message); });
        _this.createBlockerInput = document.createElement("input");
        _this.createBlockerInput.setAttribute("style", "border: 0; padding-left: 0; font-weight: bold;");
        _this.solvedBlockersVisibilityBtnClickHandler = _this.solvedBlockersVisibilityBtnClickHandler.bind(_this);
        _this.createBlockerKeyPressHandler = _this.createBlockerKeyPressHandler.bind(_this);
        _this.createBlockerBlurHandler = _this.createBlockerBlurHandler.bind(_this);
        _this.documentKeyPressHandler = _this.documentKeyPressHandler.bind(_this);
        return _this;
    }
    Blockers.prototype.registerEventListeners = function () {
        this.toggleSolvedBlockersVisibility.addEventListener("click", this.solvedBlockersVisibilityBtnClickHandler);
        this.createBlockerInput.addEventListener("keypress", this.createBlockerKeyPressHandler);
        this.createBlockerInput.addEventListener("blur", this.createBlockerBlurHandler);
        document.addEventListener("keypress", this.documentKeyPressHandler);
    };
    Blockers.prototype.unregisterEventListeners = function () {
        this.toggleSolvedBlockersVisibility.removeEventListener("click", this.solvedBlockersVisibilityBtnClickHandler);
        this.createBlockerInput.removeEventListener("keypress", this.createBlockerKeyPressHandler);
        this.createBlockerInput.removeEventListener("blur", this.createBlockerBlurHandler);
        document.removeEventListener("keypress", this.documentKeyPressHandler);
    };
    Blockers.prototype.solvedBlockersVisibilityBtnClickHandler = function (e) {
        if (this.isSolvedBlockerVisible) {
            this.toggleSolvedBlockersVisibility.innerText = "Show solved blockers";
            TweenLite.to(this.solvedBlockersContainer, 0.3, { opacity: 0, ease: Power1.easeOut });
            this.isSolvedBlockerVisible = false;
        }
        else {
            this.toggleSolvedBlockersVisibility.innerText = "Hide solved blockers";
            TweenLite.to(this.solvedBlockersContainer, 0.3, { opacity: 1, ease: Power1.easeOut });
            this.isSolvedBlockerVisible = true;
        }
    };
    Blockers.prototype.documentKeyPressHandler = function (e) {
        if (e.ctrlKey && e.keyCode === 14) { // N
            this.initializeBlockerInput();
            e.preventDefault();
        }
    };
    Blockers.prototype.createBlockerKeyPressHandler = function (e) {
        var key = e.which || e.keyCode;
        console.log("key: " + key);
        if (key === 13 || e.ctrlKey && e.keyCode === 14) {
            this.createBlocker();
        }
    };
    Blockers.prototype.createBlockerBlurHandler = function (e) {
        this.createBlocker();
    };
    Blockers.prototype.enterScene = function () {
        this.registerEventListeners();
        TweenLite.to(this.unsolvedBlockersContainer, 0.2, { opacity: 1, ease: Power1.easeOut });
        this.toggleSolvedBlockersVisibilityButton();
    };
    Blockers.prototype.exitScene = function (exitType) {
        var _this = this;
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        switch (exitType) {
            case ViewExitTypes_1.ViewExitTypes.SWITCH:
                this.view.componentExited(this.name);
                break;
            case ViewExitTypes_1.ViewExitTypes.DEFAULT:
                TweenLite.to(this.container, 0.15, { opacity: 0, ease: Power1.easeOut });
                TweenLite.to(this.contentContainer, 0.4, { css: { top: "-105%" }, onComplete: function () {
                        _this.view.componentExited(_this.name);
                    }, ease: Back.easeOut.config(0.25) });
                break;
            default:
                console.warn("Invalid exit type provided in blockers view component.");
                break;
        }
    };
    Blockers.prototype.populate = function (data) {
        var solved = data.solved;
        var unsolved = data.unsolved;
        for (var i = 0; i < unsolved.length; i++) {
            new Blocker_1.Blocker(this, unsolved[i], this.unsolvedBlockersContainer, false);
        }
        for (var i = 0; i < solved.length; i++) {
            new Blocker_1.Blocker(this, solved[i], this.solvedBlockersContainer, true);
        }
        this.enterScene();
    };
    Blockers.prototype.initializeBlockerInput = function () {
        this.container.insertBefore(this.createBlockerInput, this.container.firstChild);
        this.createBlockerInput.focus();
        this.isBlockerCreationInProgress = true;
    };
    Blockers.prototype.createBlocker = function () {
        if (!this.isBlockerCreationInProgress)
            return;
        this.isBlockerCreationInProgress = false;
        var content = this.createBlockerInput.value;
        this.createBlockerInput.value = "";
        this.createBlockerInput.parentNode.removeChild(this.createBlockerInput);
        if (!content)
            return;
        var self = this;
        this.connection.createBlocker(content, function (blocker) {
            new Blocker_1.Blocker(self, blocker, self.unsolvedBlockersContainer, false);
        }, function (message) {
            console.warn(message);
        });
    };
    Blockers.prototype.toggleSolvedBlockersVisibilityButton = function () {
        if (this.solvedBlockersContainer.hasChildNodes()) {
            TweenLite.to(this.toggleSolvedBlockersVisibility, 0.15, { opacity: 1, delay: 0.2, ease: Power1.easeOut });
        }
        else {
            TweenLite.to(this.toggleSolvedBlockersVisibility, 0.15, { opacity: 0, delay: 0.25, ease: Power1.easeOut });
        }
    };
    return Blockers;
}(ViewComponent_1.ViewComponent));
exports.Blockers = Blockers;
