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
var CoreEntity_1 = require("./CoreEntity");
var AuthenticationView_1 = require("../authentication/AuthenticationView");
var HeaderView_1 = require("../header/HeaderView");
var AuthenticationNotifications_1 = require("../authentication/AuthenticationNotifications");
var RecordsView_1 = require("../records/RecordsView");
var HeaderNotifications_1 = require("../header/HeaderNotifications");
var BlockersView_1 = require("../blockers/BlockersView");
var ViewExitTypes_1 = require("./ViewExitTypes");
var PromptView_1 = require("../prompt/PromptView");
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this, "ViewManager") || this;
        _this.initView();
        return _this;
    }
    ViewManager.prototype.initView = function () {
        new PromptView_1.PromptView();
        this.headerView = new HeaderView_1.HeaderView();
        this.currentView = new AuthenticationView_1.AuthenticationView();
    };
    ViewManager.prototype.switchView = function (view, exitType, callback) {
        var _this = this;
        if (!exitType)
            exitType = ViewExitTypes_1.ViewExitTypes.DEFAULT;
        this.currentView.exitScene(exitType, function () {
            _this.currentView = new view();
            if (callback)
                callback();
        });
    };
    ViewManager.prototype.listNotificationInterests = function () {
        var notifications = [];
        notifications.push(AuthenticationNotifications_1.AuthenticationNotifications.USER_AUTHENTICATED);
        notifications.push(AuthenticationNotifications_1.AuthenticationNotifications.USER_SIGNED_UP);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SIGN_OUT);
        notifications.push(HeaderNotifications_1.HeaderNotifications.BLOCKERS_BTN_PRESSED);
        notifications.push(HeaderNotifications_1.HeaderNotifications.SCRUM_BTN_PRESSED);
        return notifications;
    };
    ViewManager.prototype.handleNotification = function (notification) {
        var _this = this;
        switch (notification.name) {
            case AuthenticationNotifications_1.AuthenticationNotifications.USER_AUTHENTICATED:
                this.switchView(RecordsView_1.RecordsView, null, function () {
                    _this.headerView.enterScene();
                });
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.USER_SIGNED_UP:
                this.switchView(RecordsView_1.RecordsView, null, function () {
                    _this.headerView.enterScene();
                });
                break;
            case HeaderNotifications_1.HeaderNotifications.SIGN_OUT:
                this.headerView.exitScene(ViewExitTypes_1.ViewExitTypes.DEFAULT);
                this.switchView(AuthenticationView_1.AuthenticationView);
                break;
            case HeaderNotifications_1.HeaderNotifications.BLOCKERS_BTN_PRESSED:
                this.switchView(BlockersView_1.BlockersView, ViewExitTypes_1.ViewExitTypes.SWITCH);
                break;
            case HeaderNotifications_1.HeaderNotifications.SCRUM_BTN_PRESSED:
                this.switchView(RecordsView_1.RecordsView, ViewExitTypes_1.ViewExitTypes.SWITCH);
                break;
            default:
                break;
        }
    };
    return ViewManager;
}(CoreEntity_1.CoreEntity));
exports.ViewManager = ViewManager;
