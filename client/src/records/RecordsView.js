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
var Records_1 = require("./Records");
var RecordNotifications_1 = require("./RecordNotifications");
var HeaderNotifications_1 = require("../header/HeaderNotifications");
var PromptNotifications_1 = require("../prompt/PromptNotifications");
var RecordsView = /** @class */ (function (_super) {
    __extends(RecordsView, _super);
    function RecordsView() {
        var _this = _super.call(this, "RecordsView") || this;
        console.info("Records view initiated.");
        _this.container = document.createElement("div");
        _this.container.id = "records-view-container";
        _this.contentContainer = document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER);
        _this.contentContainer.appendChild(_this.container);
        _this.records = new Records_1.Records(_this, _this.container);
        return _this;
    }
    RecordsView.prototype.enterScene = function (callback) {
    };
    RecordsView.prototype.exitScene = function (exitType, callback) {
        this.exitCallback = callback;
        this.records.exitScene(exitType);
    };
    RecordsView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(HeaderNotifications_1.HeaderNotifications.ADD_ITEM);
        notifications.push(PromptNotifications_1.PromptNotifications.DELETE_RECORD);
        return notifications;
    };
    RecordsView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case HeaderNotifications_1.HeaderNotifications.ADD_ITEM:
                this.records.initializeRecordInput();
                break;
            case PromptNotifications_1.PromptNotifications.DELETE_RECORD:
                this.records.deleteActiveRecord();
                break;
            default:
                break;
        }
    };
    RecordsView.prototype.handleSignal = function (signal) {
        console.info("signal received: " + signal.name);
        switch (signal.name) {
            case RecordNotifications_1.RecordNotifications.RECORD_ADDED:
                this.sendNotification(RecordNotifications_1.RecordNotifications.RECORD_ADDED);
                break;
            case RecordNotifications_1.RecordNotifications.DELETE_RECORD:
                this.sendNotification(RecordNotifications_1.RecordNotifications.DELETE_RECORD);
                break;
            default:
                break;
        }
    };
    return RecordsView;
}(View_1.View));
exports.RecordsView = RecordsView;
