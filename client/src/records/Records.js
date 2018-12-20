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
require("../_style/style-sheets/records.scss");
// HTML template
var optionsTemplate = require("../_view-templates/record-options.html");
var ViewComponent_1 = require("../core/ViewComponent");
var RecordNotifications_1 = require("./RecordNotifications");
var Record_1 = require("./Record");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var Back = gsap.Back;
var SystemConstants_1 = require("../core/SystemConstants");
var ViewExitTypes_1 = require("../core/ViewExitTypes");
var Records = /** @class */ (function (_super) {
    __extends(Records, _super);
    function Records(view, container) {
        var _this = _super.call(this, view, container) || this;
        console.info("Records view component initiated!");
        _this.records = [];
        _this.activeRecordIndex = -1;
        _this.colors = _this.generateRecordsPrimaryColors();
        _this.contentContainer = document.getElementById(SystemConstants_1.SystemConstants.MAIN_CONTAINER);
        _this.keyPressHandler = _this.keyPressHandler.bind(_this);
        _this.keyUpHandler = _this.keyUpHandler.bind(_this);
        _this.keyDownHandler = _this.keyDownHandler.bind(_this);
        _this.resizeHandler = _this.resizeHandler.bind(_this);
        _this.scrollHandler = _this.scrollHandler.bind(_this);
        _this.editRecordHandler = _this.editRecordHandler.bind(_this);
        _this.deleteRecordHandler = _this.deleteRecordHandler.bind(_this);
        _this.createRecordKeyPressHandler = _this.createRecordKeyPressHandler.bind(_this);
        _this.createRecordBlurHandler = _this.createRecordBlurHandler.bind(_this);
        _this.connection.getRecords(_this.populate.bind(_this), function () { return console.warn("Failed to get records!"); });
        _this.createRecordInput = document.createElement("input");
        _this.createRecordInput.setAttribute("style", "border: 0; padding-left: 0; font-weight: bold;");
        _this.isRecordCreationInProgress = false;
        _this.recordOptions = document.createElement("div");
        _this.recordOptions.className = "record-options";
        _this.recordOptions.style.left = _this.contentContainer.offsetWidth / 2 + "px";
        _this.recordOptions.innerHTML = optionsTemplate;
        document.body.appendChild(_this.recordOptions);
        _this.editRecord = document.getElementById("edit-record-btn");
        _this.deleteRecord = document.getElementById("delete-record-btn");
        _this.enterScene();
        return _this;
    }
    Records.prototype.registerEventListeners = function () {
        document.addEventListener("keypress", this.keyPressHandler, true);
        document.addEventListener("keyup", this.keyUpHandler, true);
        document.addEventListener("keydown", this.keyDownHandler, true);
        window.addEventListener("resize", this.resizeHandler, true);
        this.container.addEventListener("scroll", this.scrollHandler, true);
        this.editRecord.addEventListener("click", this.editRecordHandler, true);
        this.deleteRecord.addEventListener("click", this.deleteRecordHandler, true);
        this.createRecordInput.addEventListener("keypress", this.createRecordKeyPressHandler, true);
        this.createRecordInput.addEventListener("blur", this.createRecordBlurHandler, true);
    };
    Records.prototype.unregisterEventListeners = function () {
        document.removeEventListener("keypress", this.keyPressHandler, true);
        document.removeEventListener("keyup", this.keyUpHandler, true);
        document.removeEventListener("keydown", this.keyDownHandler, true);
        window.removeEventListener("resize", this.resizeHandler, true);
        this.container.removeEventListener("scroll", this.scrollHandler, true);
        this.editRecord.removeEventListener("click", this.editRecordHandler, true);
        this.deleteRecord.removeEventListener("click", this.deleteRecordHandler, true);
        this.createRecordInput.removeEventListener("keypress", this.createRecordKeyPressHandler, true);
        this.createRecordInput.removeEventListener("blur", this.createRecordBlurHandler, true);
    };
    Records.prototype.keyPressHandler = function (e) {
        console.log(e.ctrlKey);
        console.log(e.keyCode);
        if (e.ctrlKey && e.keyCode === 14) { // N
            this.initializeRecordInput();
            this.sendSignal(RecordNotifications_1.RecordNotifications.RECORD_ADDED);
            e.preventDefault();
        }
        if (e.ctrlKey && e.keyCode === 15) { // O
            if (this.container.firstChild && this.container.firstChild.nodeName === "INPUT") {
                this.container.removeChild(this.container.firstChild);
            }
            if (this.activeRecord)
                this.activeRecord.toggleRecord();
            e.preventDefault();
        }
    };
    Records.prototype.keyUpHandler = function (e) {
        if (e.ctrlKey && e.keyCode === 9) {
            this.hideRecordOptions();
            if (!e.shiftKey) {
                this.setNextActiveRecord();
            }
            else {
                this.setNextActiveRecord(true);
            }
            e.preventDefault();
        }
    };
    Records.prototype.keyDownHandler = function (e) {
        if (e.keyCode == 27) { // ESC
            if (this.activeRecord) {
                this.activeRecord.passivateRecord();
                this.activeRecordIndex = -1;
            }
            this.isRecordCreationInProgress = false;
            if (this.container.firstChild && this.container.firstChild.nodeName === "INPUT") {
                this.container.removeChild(this.container.firstChild);
            }
            e.preventDefault();
        }
    };
    Records.prototype.resizeHandler = function (e) {
        var now = new Date();
        var delay = now - this.resizeTimer;
        if (delay < 50)
            return;
        this.resizeTimer = new Date();
        this.adjustViewHeight();
    };
    Records.prototype.scrollHandler = function (e) {
        if (e.target.className !== "log-wrapper")
            this.hideRecordOptions();
    };
    Records.prototype.editRecordHandler = function (e) {
        console.info("Edit record btn pressed");
        this.optionsActiveRecord.displayEditRecordInput();
    };
    Records.prototype.deleteRecordHandler = function (e) {
        this.sendSignal(RecordNotifications_1.RecordNotifications.DELETE_RECORD);
    };
    Records.prototype.enterScene = function () {
        this.registerEventListeners();
        this.container.setAttribute("style", "display: block; padding: 20px; position: absolute; top: 0px; bottom: 0px; left: 0px; right: -20px; overflow: auto;");
        this.contentContainer.style.overflow = "hidden";
        this.adjustViewHeight();
    };
    Records.prototype.exitScene = function (exitType) {
        var _this = this;
        _super.prototype.exitScene.call(this, exitType);
        this.unregisterEventListeners();
        this.hideRecordOptions();
        switch (exitType) {
            case ViewExitTypes_1.ViewExitTypes.SWITCH:
                console.log("records container right: " + this.container.style.right);
                //TODO: Calculate speed based on the number of records?
                /** If there are no records, send out the exit signal right away */
                if (!this.records.length)
                    this.sendSignal(RecordNotifications_1.RecordNotifications.EXIT_FINISHED, null, this.name);
                this.container.style.overflow = "hidden";
                var start_1 = new Date().getTime();
                var delay = 0;
                for (var i = this.records.length - 1; i >= 0; i--) {
                    delay += 0.02;
                    TweenLite.to(this.records[i].container, 0.2, { delay: delay, "margin-top": "15%", ease: Power1.easeOut });
                    TweenLite.to(this.records[i].container, 0.15, { delay: delay, opacity: 0.1, ease: Power1.easeOut });
                    if (i === 0) {
                        setTimeout(function () {
                            console.log("Record exit finished in " + (new Date().getTime() - start_1) + " ms.");
                            _this.recordOptions.parentNode.removeChild(_this.recordOptions);
                            _this.view.componentExited(_this.name);
                        }, (150 + delay * 1000));
                    }
                }
                break;
            case ViewExitTypes_1.ViewExitTypes.DEFAULT:
                this.records = [];
                TweenLite.to(this.container, 0.15, { opacity: 0, ease: Power1.easeOut });
                TweenLite.to(this.contentContainer, 0.4, { css: { top: "-105%" }, onComplete: function () {
                        // this.container.innerHTML = "";
                        _this.recordOptions.parentNode.removeChild(_this.recordOptions);
                        _this.view.componentExited(_this.name);
                    }, ease: Back.easeOut.config(0.25) });
                break;
            default:
                console.warn("Invalid exit type provided in records view component.");
        }
    };
    Records.prototype.populate = function (recordsData) {
        for (var i = 0; i < recordsData.length; i++) {
            this.lastRecord = new Record_1.Record(this, recordsData[i], this.container, this.colors[i % this.colors.length], 0);
            this.records.unshift(this.lastRecord);
        }
        this.enterScene();
    };
    Records.prototype.initializeRecordInput = function () {
        if (this.activeRecord) {
            this.activeRecord.passivateRecord();
            this.activeRecordIndex = -1;
        }
        this.container.insertBefore(this.createRecordInput, this.container.firstChild);
        this.createRecordInput.focus();
        this.isRecordCreationInProgress = true;
    };
    Records.prototype.createRecordKeyPressHandler = function (e) {
        var key = e.which || e.keyCode;
        console.log("key: " + key);
        if (key === 13 || e.ctrlKey && e.keyCode === 14) {
            this.createRecord();
        }
    };
    Records.prototype.createRecordBlurHandler = function (e) {
        this.createRecord();
    };
    Records.prototype.createRecord = function () {
        if (!this.isRecordCreationInProgress)
            return;
        this.isRecordCreationInProgress = false;
        var recordName = this.createRecordInput.value;
        this.createRecordInput.value = "";
        if (!recordName) {
            this.createRecordInput.parentNode.removeChild(this.createRecordInput);
        }
        else {
            this.createRecordInput.parentNode.removeChild(this.createRecordInput);
            var self_1 = this;
            this.connection.createRecord(recordName, function (record) {
                self_1.lastRecord = new Record_1.Record(self_1, { record: record, logs: [] }, self_1.container, self_1.colors[Math.floor(Math.random() * (self_1.colors.length - 1))]);
                self_1.records.unshift(self_1.lastRecord);
                self_1.activeRecordIndex = -1;
                self_1.setNextActiveRecord();
            }, function (message) {
                console.warn(message);
            });
        }
    };
    Records.prototype.generateRecordsPrimaryColors = function () {
        var colorsArray = [
            {
                main: "primary-highlight",
                line: "active-line-color-01"
            },
            {
                main: "secondary-highlight",
                line: "active-line-color-02"
            },
            {
                main: "tertiary-highlight",
                line: "active-line-color-03"
            },
            {
                main: "quaternary-highlight",
                line: "active-line-color-04"
            },
            {
                main: "quinary-highlight",
                line: "active-line-color-05"
            },
            {
                main: "senary-highlight",
                line: "active-line-color-06"
            },
            {
                main: "septenary-highlight",
                line: "active-line-color-07"
            },
            {
                main: "octonary-highlight",
                line: "active-line-color-08"
            },
            {
                main: "nonary-highlight",
                line: "active-line-color-09"
            },
            {
                main: "denary-highlight",
                line: "active-line-color-10"
            }
        ];
        for (var i = colorsArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [colorsArray[j], colorsArray[i]], colorsArray[i] = _a[0], colorsArray[j] = _a[1];
        }
        return colorsArray;
        var _a;
    };
    Records.prototype.setNextActiveRecord = function (reverse) {
        if (!this.records.length)
            return;
        if (this.activeRecordIndex >= this.records.length - 1 && !reverse)
            this.activeRecordIndex = -1;
        if (this.activeRecordIndex <= 0 && reverse)
            this.activeRecordIndex = this.records.length;
        if (!reverse) {
            this.activeRecordIndex++;
        }
        else {
            if (this.activeRecordIndex < 1) {
                this.activeRecordIndex = 0;
            }
            else {
                this.activeRecordIndex--;
            }
        }
        if (this.activeRecord)
            this.activeRecord.passivateRecord();
        this.activeRecord = this.records[this.activeRecordIndex];
        this.activeRecord.activateRecord();
    };
    Records.prototype.setActiveRecord = function (record) {
        if (this.activeRecord)
            this.activeRecord.passivateRecord();
        this.activeRecord = record;
        this.activeRecordIndex = this.records.map(function (r) { return r.id; }).indexOf(record.id);
    };
    Records.prototype.displayOptionsForRecord = function (distanceTop, record) {
        if (this.optionsActiveRecord && this.optionsActiveRecord.id === record.id)
            return;
        var self = this;
        var offset = 10;
        var contentContainerHalf = this.contentContainer.offsetWidth / 2;
        TweenLite.to(this.recordOptions, 0.3, { left: contentContainerHalf + (contentContainerHalf / 2) });
        setTimeout(function () {
            self.recordOptions.style.top = (distanceTop + offset) + "px";
        }, 300);
        var moveTo = window.innerWidth / 2 + (this.contentContainer.offsetWidth / 2 - this.recordOptions.offsetWidth / 2) + offset;
        TweenLite.to(this.recordOptions, 0.25, { delay: 0.4, left: moveTo });
        this.optionsActiveRecord = record;
        console.log("Options active for record: " + this.optionsActiveRecord.name);
    };
    Records.prototype.hideRecordOptions = function () {
        TweenLite.to(this.recordOptions, 0.5, { left: this.contentContainer.offsetWidth / 2 });
    };
    Records.prototype.adjustViewHeight = function () {
        console.info("adjust view height executed");
        this.container.style.maxHeight = (window.innerHeight - this.contentContainer.offsetTop) + "px";
        this.adjustForHiddenScrollbar();
    };
    Records.prototype.adjustForHiddenScrollbar = function () {
        if (this.isRecordsContainerScrollable()) {
            this.container.style.right = "-20px";
        }
        else {
            this.container.style.right = "0";
        }
    };
    Records.prototype.isRecordsContainerScrollable = function () {
        return this.container.scrollHeight > this.container.clientHeight;
    };
    Records.prototype.deleteActiveRecord = function () {
        this.hideRecordOptions();
        this.activeRecord.passivateRecord();
        this.records.splice(this.activeRecordIndex, 1);
        this.activeRecord.container.parentNode.removeChild(this.activeRecord.container);
        this.connection.deleteRecord(this.activeRecord.id, function (response) { return console.info(response); }, function (message) { return console.warn(message); });
        this.activeRecord = null;
    };
    return Records;
}(ViewComponent_1.ViewComponent));
exports.Records = Records;
