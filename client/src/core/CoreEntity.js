"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager_1 = require("./EventManager");
var CoreEntity = /** @class */ (function () {
    function CoreEntity(entityName) {
        this.NAME = entityName;
        this.eventManager = EventManager_1.EventManager._instance;
        this.register();
    }
    CoreEntity.prototype.register = function () {
        this.eventManager.registerEntity(this.NAME, this);
    };
    CoreEntity.prototype.onRegister = function () {
    };
    CoreEntity.prototype.unregister = function () {
        this.eventManager.unregirsterEntity(this.NAME);
    };
    CoreEntity.prototype.onUnregister = function () {
    };
    CoreEntity.prototype.sendNotification = function (notificationName, body) {
        this.eventManager.sendNotification(notificationName, body);
    };
    CoreEntity.prototype.listNotificationInterests = function () {
        return [];
    };
    CoreEntity.prototype.handleNotification = function (notification) {
    };
    return CoreEntity;
}());
exports.CoreEntity = CoreEntity;
