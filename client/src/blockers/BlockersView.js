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
var Blockers_1 = require("./Blockers");
var HeaderNotifications_1 = require("../header/HeaderNotifications");
var BlockersView = /** @class */ (function (_super) {
    __extends(BlockersView, _super);
    function BlockersView() {
        var _this = _super.call(this, "BlockersView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "blockers-view-container";
        document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER).appendChild(_this.container);
        _this.blockersContainer = document.createElement("div");
        _this.blockersContainer.id = "blockers-container";
        _this.container.appendChild(_this.blockersContainer);
        _this.blockers = new Blockers_1.Blockers(_this, _this.blockersContainer);
        return _this;
    }
    BlockersView.prototype.enterScene = function () {
    };
    BlockersView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.blockers.exitScene(exitType);
    };
    BlockersView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(HeaderNotifications_1.HeaderNotifications.ADD_ITEM);
        return notifications;
    };
    BlockersView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case HeaderNotifications_1.HeaderNotifications.ADD_ITEM:
                this.blockers.initializeBlockerInput();
                break;
            default:
                break;
        }
    };
    BlockersView.prototype.handleSignal = function (signal) {
        switch (signal.name) {
            default:
                break;
        }
    };
    return BlockersView;
}(View_1.View));
exports.BlockersView = BlockersView;
