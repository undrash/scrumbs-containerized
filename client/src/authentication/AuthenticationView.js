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
var Authentication_1 = require("./Authentication");
var SystemConstants_1 = require("../core/SystemConstants");
var ConnectionNotifications_1 = require("../connection/ConnectionNotifications");
var AuthenticationNotifications_1 = require("./AuthenticationNotifications");
var AuthenticationView = /** @class */ (function (_super) {
    __extends(AuthenticationView, _super);
    function AuthenticationView() {
        var _this = _super.call(this, "AuthenticationView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "authentication-view-container";
        document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER).appendChild(_this.container);
        _this.authenticationContainer = document.createElement("div");
        _this.container.appendChild(_this.authenticationContainer);
        _this.authentication = new Authentication_1.Authentication(_this, _this.authenticationContainer);
        return _this;
    }
    AuthenticationView.prototype.enterScene = function () {
    };
    AuthenticationView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.authentication.exitScene(exitType);
    };
    AuthenticationView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push("");
        return notifications;
    };
    AuthenticationView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case ConnectionNotifications_1.ConnectionNotifications.LOGIN_SUCCESS:
                console.log("Authentication view received the notification");
                break;
            default:
                break;
        }
    };
    AuthenticationView.prototype.handleSignal = function (signal) {
        console.log("signal received in " + this.NAME + ": " + signal.name);
        switch (signal.name) {
            case AuthenticationNotifications_1.AuthenticationNotifications.LOGIN_SUCCESS:
                this.sendNotification(AuthenticationNotifications_1.AuthenticationNotifications.USER_AUTHENTICATED, signal.data);
                break;
            case AuthenticationNotifications_1.AuthenticationNotifications.SIGN_UP_SUCCESS:
                this.sendNotification(AuthenticationNotifications_1.AuthenticationNotifications.USER_SIGNED_UP, signal.data);
                break;
            default:
                break;
        }
    };
    return AuthenticationView;
}(View_1.View));
exports.AuthenticationView = AuthenticationView;
