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
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(viewName) {
        var _this = _super.call(this, viewName) || this;
        _this.NAME = viewName;
        _this.viewComponentExitCount = {};
        return _this;
    }
    View.prototype.handleSignal = function (signal) {
    };
    View.prototype.enterScene = function (callback) {
    };
    View.prototype.exitScene = function (exitType, callback) {
    };
    View.prototype.componentExited = function (componentName) {
        this.viewComponentExitCount[componentName] = true;
        for (var key in this.viewComponentExitCount) {
            if (this.viewComponentExitCount.hasOwnProperty(key)) {
                if (!this.viewComponentExitCount[key]) {
                    console.warn("Not all view components finished exiting, aborting.");
                    return;
                }
            }
        }
        if (this.exitCallback) {
            this.container.parentNode.removeChild(this.container);
            this.unregister();
            this.exitCallback();
        }
        else {
            this.container.parentNode.removeChild(this.container);
            console.warn("No exit callback available on view!");
        }
    };
    return View;
}(CoreEntity_1.CoreEntity));
exports.View = View;
