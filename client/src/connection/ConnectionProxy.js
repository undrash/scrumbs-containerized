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
var CoreEntity_1 = require("../core/CoreEntity");
var ConnectionNotifications_1 = require("./ConnectionNotifications");
var ConnectionProxy = /** @class */ (function (_super) {
    __extends(ConnectionProxy, _super);
    function ConnectionProxy(proxyName) {
        var _this = _super.call(this, proxyName) || this;
        // this.address = "http://192.168.0.192:4200";
        // this.address = "http://192.168.1.4:4200";
        // this.address = "http://192.168.1.6:4200";
        _this.address = "http://138.68.82.238:4200";
        return _this;
    }
    ConnectionProxy.prototype.login = function (data, success, failure) {
        console.info("Proxy login executed");
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/login", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            ConnectionProxy.userId = response.userId;
            ConnectionProxy.userFirstName = response.firstName;
            ConnectionProxy.userLastName = response.lastName;
            ConnectionProxy.userEmail = response.email;
            console.log("response userId");
            console.log(response.userId);
            console.log(response);
            if (response.success) {
                console.log("LOGIN SUCCESS");
                if (success)
                    success(response);
            }
            else {
                console.log("LOGIN FAILURE! " + response.message);
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send(JSON.stringify(data));
    };
    ConnectionProxy.prototype.signUp = function (data, success, failure) {
        console.info("Proxy sign up executed");
        console.log(data);
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/signup", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            ConnectionProxy.userId = response.userId;
            console.log(response);
            if (response.success) {
                console.log("SIGN UP SUCCESS");
                if (success)
                    success(response);
            }
            else {
                console.log("SIGN UP FAILURE! " + response.message);
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send(JSON.stringify(data));
    };
    ConnectionProxy.prototype.createRecord = function (name, success, failure) {
        console.info("Proxy create record executed");
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/records/create", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.success) {
                if (success)
                    success(response.record);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send(JSON.stringify({ name: name, owner: ConnectionProxy.userId }));
    };
    ConnectionProxy.prototype.getRecords = function (success, failure) {
        console.info("Proxy get records executed");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.address + "/records/" + ConnectionProxy.userId, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response.userRecords);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send();
    };
    ConnectionProxy.prototype.deleteRecord = function (recordId, success, failure) {
        console.info("Proxy delete record executed");
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', this.address + "/records/delete/" + recordId, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send();
    };
    ConnectionProxy.prototype.addNote = function (recordId, content, isBlocker, callback) {
        var _this = this;
        console.info("Proxy create note executed");
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/notes/create", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.success) {
                console.log("NOTE CREATION SUCCESS!");
                if (callback)
                    callback(response.log);
                _this.sendNotification(ConnectionNotifications_1.ConnectionNotifications.CREATE_NOTE_SUCCESS, response);
            }
            else {
                console.log("NOTE CREATION FAILURE! " + response.message);
                _this.sendNotification(ConnectionNotifications_1.ConnectionNotifications.CREATE_NOTE_FAILURE, response);
            }
        };
        xhr.send(JSON.stringify({ recordId: recordId, content: content, userId: ConnectionProxy.userId, isBlocker: isBlocker }));
    };
    ConnectionProxy.prototype.createBlocker = function (content, success, failure) {
        console.info("Proxy create blocker executed");
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/blockers/create", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.success) {
                if (success)
                    success(response.blocker);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        var label = ConnectionProxy.userFirstName + ' ' + ConnectionProxy.userLastName;
        var userId = ConnectionProxy.userId;
        xhr.send(JSON.stringify({ userId: userId, content: content, label: label }));
    };
    ConnectionProxy.prototype.getBlockers = function (success, failure) {
        console.info("Proxy get blockers executed");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.address + "/blockers/" + ConnectionProxy.userId, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send();
    };
    ConnectionProxy.prototype.solveBlocker = function (blockerId, success, failure) {
        console.info("Proxy solve blocker executed");
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', this.address + "/blockers/solve/" + blockerId, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send();
    };
    ConnectionProxy.prototype.unsolveBlocker = function (blockerId, success, failure) {
        console.info("Proxy unsolve blocker executed");
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', this.address + "/blockers/unsolve/" + blockerId, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                if (success)
                    success(response);
            }
            else {
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send();
    };
    ConnectionProxy.prototype.editRecord = function (recordId, name, success, failure) {
        console.info("Proxy edit record executed");
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.address + "/records/edit", true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.success) {
                console.log(response.message);
                if (success)
                    success(response);
            }
            else {
                console.log(response.message);
                if (failure)
                    failure(response.message);
            }
        };
        xhr.send(JSON.stringify({ recordId: recordId, name: name }));
    };
    return ConnectionProxy;
}(CoreEntity_1.CoreEntity));
exports.ConnectionProxy = ConnectionProxy;
