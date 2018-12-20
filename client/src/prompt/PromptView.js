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
require("../_style/style-sheets/prompt.scss");
var TweenLite = gsap.TweenLite;
var View_1 = require("../core/View");
var RecordNotifications_1 = require("../records/RecordNotifications");
var Dialog_1 = require("./Dialog");
var Power1 = gsap.Power1;
var PromptNotifications_1 = require("./PromptNotifications");
var PromptView = /** @class */ (function (_super) {
    __extends(PromptView, _super);
    function PromptView() {
        var _this = _super.call(this, "PromptView") || this;
        _this.container = document.createElement("div");
        _this.container.id = "prompt-view-container";
        _this.background = document.createElement("div");
        _this.background.id = "prompt-view-background";
        _this.container.appendChild(_this.background);
        _this.dialogContainer = document.createElement("div");
        _this.dialogContainer.id = "dialog-container";
        _this.container.appendChild(_this.dialogContainer);
        _this.registerEventListeners();
        return _this;
    }
    PromptView.prototype.registerEventListeners = function () {
        var _this = this;
        this.background.addEventListener("click", function () {
            _this.exitScene();
        });
    };
    PromptView.prototype.enterScene = function () {
        document.body.appendChild(this.container);
        TweenLite.to(this.background, 0.2, { opacity: 0.65, ease: Power1.easeOut });
    };
    PromptView.prototype.exitScene = function () {
        this.dialog.exitScene();
    };
    PromptView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        notifications.push(RecordNotifications_1.RecordNotifications.DELETE_RECORD);
        return notifications;
    };
    PromptView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            case RecordNotifications_1.RecordNotifications.DELETE_RECORD:
                this.enterScene();
                this.dialog = new Dialog_1.Dialog(this, this.dialogContainer, PromptNotifications_1.PromptNotifications.DELETE_RECORD, "Do you want to delete Record Name?", "Once you delete this record you won't be able to undo this action.", "Yes, delete Record Name", "Cancel, keep the record");
                break;
            default:
                break;
        }
    };
    PromptView.prototype.handleSignal = function (signal) {
        switch (signal.name) {
            case PromptNotifications_1.PromptNotifications.DELETE_RECORD:
                this.sendNotification(PromptNotifications_1.PromptNotifications.DELETE_RECORD);
                break;
            default:
                break;
        }
    };
    return PromptView;
}(View_1.View));
exports.PromptView = PromptView;
