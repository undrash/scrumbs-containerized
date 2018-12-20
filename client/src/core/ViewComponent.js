"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionProxy_1 = require("../connection/ConnectionProxy");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(view, container) {
        this.view = view;
        this.container = container;
        this.name = this.constructor.name;
        this.connection = new ConnectionProxy_1.ConnectionProxy(this.name + "Proxy");
        this.view.viewComponentExitCount[this.name] = null;
    }
    ViewComponent.prototype.sendSignal = function (name, data, sender) {
        this.view.handleSignal({ name: name, data: data, sender: sender });
    };
    ViewComponent.prototype.enterScene = function () {
    };
    ViewComponent.prototype.exitScene = function (exitType) {
        if (this.connection)
            this.connection.unregister();
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
