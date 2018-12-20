"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.notifications = {};
        this.entities = {};
        if (EventManager._instance) {
            throw new Error("Error: Instantiation failed! Use EventManager.getInstance() instead of new.");
        }
        EventManager._instance = this;
    }
    EventManager.prototype.getInstance = function () {
        return EventManager._instance;
    };
    EventManager.prototype.registerNotification = function (notificationName) {
        if (!this.notifications[notificationName])
            this.notifications[notificationName] = new Array();
    };
    EventManager.prototype.unregisterNotification = function (notificationName) {
        delete this.notifications[notificationName];
    };
    EventManager.prototype.registerEntity = function (entityName, entity) {
        if (!this.entities[entityName]) {
            this.entities[entityName] = entity;
            entity.onRegister();
            var notificationInterests = entity.listNotificationInterests();
            for (var i = 0; i < notificationInterests.length; i++) {
                this.registerNotification(notificationInterests[i]);
                this.notifications[notificationInterests[i]].push(entity);
            }
        }
    };
    EventManager.prototype.unregirsterEntity = function (entityName) {
        var targetEntity = this.entities[entityName];
        var notificationInterests = targetEntity.listNotificationInterests();
        for (var i = 0; i < notificationInterests.length; i++) {
            var listeningEntities = this.notifications[notificationInterests[i]];
            for (var j = 0; j < listeningEntities.length; j++) {
                if (listeningEntities[j] === targetEntity) {
                    listeningEntities.splice(j, 1);
                }
            }
        }
        targetEntity.onUnregister();
        delete this.entities[entityName];
    };
    EventManager.prototype.sendNotification = function (notificationName, data) {
        if (this.notifications[notificationName]) {
            var entities = this.notifications[notificationName];
            for (var i = 0; i < entities.length; i++) {
                entities[i].handleNotification({ name: notificationName, data: data });
            }
        }
    };
    EventManager._instance = new EventManager();
    return EventManager;
}());
exports.EventManager = EventManager;
