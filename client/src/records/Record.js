"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionProxy_1 = require("../connection/ConnectionProxy");
var TweenLite = gsap.TweenLite;
var Power1 = gsap.Power1;
var HTMLHelper_1 = require("../helpers/HTMLHelper");
var Record = /** @class */ (function () {
    function Record(parent, data, mainContainer, colorData, recordIndex) {
        this.parent = parent;
        this.name = data.record.name;
        this.id = data.record._id;
        this.created = data.record.created;
        this.moderators = data.record.moderators;
        this.ownerId = data.record.owner;
        this.logs = data.logs;
        this.colorData = colorData;
        this.recordIndex = recordIndex;
        this.recordOpen = false;
        this.contentContainer = document.getElementById("content-container");
        this.mainContainer = mainContainer;
        this.container = document.createElement("div");
        this.container.id = "record_" + this.id;
        this.container.className = "record-container";
        this.recordBody = document.createElement("div");
        this.recordBody.className = "record-body";
        this.recordBody.style.opacity = "0";
        this.recordBody.style.height = "0px";
        this.logWrapper = document.createElement("div");
        this.logWrapper.id = this.id + "-wrapper";
        this.logWrapper.className = "log-wrapper";
        // this.logWrapper.style.height = "0";
        this.logWrapper.style.opacity = "0";
        this.recordFooter = document.createElement("div");
        this.recordFooter.className = "record-footer";
        // this.recordFooter.style.opacity = "0";
        this.noteInput = document.createElement("textarea");
        this.noteInput.className = "note-input";
        this.noteInput.placeholder = "Enter your notes";
        this.recordFooter.appendChild(this.noteInput);
        this.generateRecordHeader();
        this.generateRecordContent();
        if (!this.mainContainer.firstChild) {
            this.mainContainer.appendChild(this.container);
        }
        if (this.mainContainer.firstChild && this.mainContainer.firstChild.nodeName !== "INPUT") {
            this.mainContainer.insertBefore(this.container, this.mainContainer.firstChild);
        }
        else {
            this.mainContainer.insertBefore(this.container, this.mainContainer.children[1]);
        }
        this.editRecordInput = document.createElement("input");
        this.editRecordInput.className = "edit-record-input";
        this.editRecordInput.value = this.name;
        this.editRecordKeydownHandler = this.editRecordKeydownHandler.bind(this);
        this.editRecordBlurHandler = this.editRecordBlurHandler.bind(this);
        this.recordBodyClickHandler = this.recordBodyClickHandler.bind(this);
        this.registerEventListeners();
    }
    Record.prototype.registerEventListeners = function () {
        var _this = this;
        this.recordHeader.addEventListener("click", function (e) {
            console.log(e.target.id);
            if (e.target.classList.contains(_this.editRecordInput.className))
                return;
            _this.toggleRecord();
        });
        this.noteInput.addEventListener("keydown", function (e) {
            var key = e.which || e.keyCode;
            var self = _this;
            if (key === 13) {
                e.preventDefault();
                var p = new ConnectionProxy_1.ConnectionProxy("RecordProxy");
                var content_1 = _this.noteInput.value;
                var isBlocker = false;
                if (content_1.toLowerCase().substring(0, 3) === "b**") {
                    isBlocker = true;
                    content_1 = content_1.substring(3, content_1.length);
                }
                console.info("is blocker: " + isBlocker);
                console.info("content: " + content_1);
                p.addNote(_this.id, content_1, isBlocker, function (log) {
                    console.log("Log id received from server" + log);
                    var logElement = document.getElementById(log._id);
                    var p = document.createElement("p");
                    p.className = "note";
                    p.innerHTML = content_1;
                    self.noteInput.value = "";
                    console.log(logElement);
                    if (!logElement) {
                        var logContainer = document.createElement("div");
                        logContainer.id = log._id + "-container";
                        logContainer.className = "log-container";
                        var logHeader = document.createElement("p");
                        logHeader.className = "log-header";
                        logHeader.classList.add(self.colorData.main);
                        logHeader.innerHTML = self.parseDateFormat(log.created);
                        logContainer.appendChild(logHeader);
                        var logBody = document.createElement("div");
                        logBody.id = log._id;
                        logBody.className = "log-body";
                        logContainer.appendChild(logBody);
                        logBody.appendChild(p);
                        self.logWrapper.appendChild(logContainer);
                        self.logWrapper.scrollTop = self.logWrapper.scrollHeight;
                    }
                    else {
                        logElement.appendChild(p);
                        self.logWrapper.appendChild(logElement);
                        self.logWrapper.scrollTop = self.logWrapper.scrollHeight;
                    }
                    self.adjustForHiddenScrollbar();
                });
            }
        });
        this.recordBody.addEventListener("click", this.recordBodyClickHandler);
        this.logWrapper.addEventListener("scroll", function () {
            if (_this.logWrapper.scrollTop == 0) {
                _this.recordBody.classList.remove("scrolled");
            }
            else {
                _this.recordBody.classList.add("scrolled");
            }
        });
        this.editRecordInput.addEventListener("keydown", this.editRecordKeydownHandler);
        this.editRecordInput.addEventListener("blur", this.editRecordBlurHandler);
    };
    Record.prototype.recordBodyClickHandler = function (e) {
        this.focusRecord();
    };
    Record.prototype.toggleRecord = function () {
        var self = this;
        var calculatedMinHeight = HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.logWrapper) + HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.recordFooter);
        this.mainContainer.style.right = "0";
        this.mainContainer.style.overflow = "hidden";
        if (!this.recordOpen) {
            this.container.classList.add("open-record");
            this.recordBody.style.display = "block";
            this.focusRecord();
            this.recordHeader.classList.add("active");
            this.logWrapper.scrollTop = this.logWrapper.scrollHeight;
            TweenLite.to(this.recordArrowIcon, 0.3, { rotation: "180_cw" });
            TweenLite.to(this.recordBody, 0.5, { css: { "min-height": calculatedMinHeight + "px", height: "100%" }, onComplete: function () {
                    self.adjustForHiddenScrollbar();
                    self.mainContainer.style.overflow = "auto";
                } });
            TweenLite.to(this.recordBody, 1.5, { css: { opacity: 1 } });
            TweenLite.to(this.logWrapper, 1, { opacity: 1, delay: 0.5, onComplete: function () {
                    if (self.logWrapper.scrollTop != 0)
                        self.recordBody.classList.add("scrolled");
                } });
            this.recordOpen = true;
            this.noteInput.focus();
        }
        else {
            this.parent.hideRecordOptions();
            this.container.classList.remove("open-record");
            if (!this.isActiveRecord) {
                this.recordHeader.classList.remove("active");
            }
            TweenLite.to(this.recordArrowIcon, 0.3, { rotation: "-=180_cw" });
            this.recordBody.style.display = "none";
            this.logWrapper.style.opacity = "0";
            this.recordOpen = false;
            this.noteInput.value = "";
            this.adjustForHiddenScrollbar();
            this.mainContainer.style.overflow = "auto";
        }
    };
    Record.prototype.focusRecord = function () {
        var self = this;
        TweenLite.to(this.mainContainer, 0.3, { scrollTop: this.getScrollTopDistance(), onComplete: function () {
                var distance = HTMLHelper_1.HTMLHelper.getPosition(self.container);
                self.parent.displayOptionsForRecord(distance.y, self);
                self.parent.setActiveRecord(self);
                self.recordHeader.classList.add("active");
                self.container.classList.add("active-record");
                self.container.classList.add(self.colorData.line);
            } });
    };
    Record.prototype.generateRecordHeader = function () {
        this.recordHeader = document.createElement("div");
        this.recordHeader.className = "record-header";
        this.recordName = document.createElement("p");
        this.recordName.className = "record-name";
        this.recordName.innerHTML = this.name;
        this.recordArrowIcon = document.createElement("span");
        this.recordArrowIcon.className = "record-dropdown-icon";
        this.recordHeader.appendChild(this.recordName);
        this.recordHeader.appendChild(this.recordArrowIcon);
        this.recordHeader.style.opacity = "0";
        this.container.appendChild(this.recordHeader);
        var delay = 0;
        if (this.recordIndex) {
            if (this.recordIndex > 10) {
                delay = 2.5;
            }
            else {
                delay = this.recordIndex * 0.25;
            }
        }
        TweenLite.to(this.recordHeader, 0.2, { opacity: 1, ease: Power1.easeOut, delay: delay });
    };
    Record.prototype.generateRecordContent = function () {
        for (var i = 0; i < this.logs.length; i++) {
            var logContainer = document.createElement("div");
            logContainer.id = this.logs[i]._id + "-container";
            logContainer.className = "log-container";
            var logHeader = document.createElement("p");
            logHeader.className = "log-header";
            logHeader.classList.add(this.colorData.main);
            logHeader.innerHTML = this.parseDateFormat(this.logs[i].created);
            logContainer.appendChild(logHeader);
            var logBody = document.createElement("div");
            logBody.id = this.logs[i]._id;
            logBody.className = "log-body";
            logContainer.appendChild(logBody);
            for (var j = 0; j < this.logs[i].notes.length; j++) {
                var note = this.logs[i].notes[j];
                var p = document.createElement("p");
                p.className = "note";
                p.id = note._id;
                p.innerHTML = note.content;
                if (note.blocker)
                    p.style.backgroundColor = "#fff5f5";
                logBody.appendChild(p);
            }
            this.logWrapper.appendChild(logContainer);
        }
        this.recordBody.appendChild(this.logWrapper);
        this.recordBody.appendChild(this.recordFooter);
        this.container.appendChild(this.recordBody);
        this.recordBody.style.display = "none";
    };
    Record.prototype.enterScene = function () {
    };
    Record.prototype.exitScene = function () {
    };
    Record.prototype.activateRecord = function () {
        this.recordHeader.classList.add("active");
        this.container.classList.add("active-record");
        console.log("checkInView: " + HTMLHelper_1.HTMLHelper.checkInView(this.mainContainer, this.container, false));
        var cTop = this.mainContainer.scrollTop;
        var cBottom = cTop + this.mainContainer.clientHeight;
        var eTop = this.container.offsetTop;
        var eBottom = eTop + this.container.clientHeight;
        if (!HTMLHelper_1.HTMLHelper.checkInView(this.mainContainer, this.container, false)) {
            if (this.mainContainer.firstElementChild.id === this.container.id ||
                this.mainContainer.lastElementChild.id === this.container.id) {
                TweenLite.to(this.mainContainer, 0.2, { scrollTo: "#" + this.container.id });
            }
            else {
                if (eTop < cTop) {
                    TweenLite.to(this.mainContainer, 0.2, { scrollTop: "-=" + HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.container) });
                }
                else if (eBottom > cBottom) {
                    TweenLite.to(this.mainContainer, 0.2, { scrollTop: "+=" + HTMLHelper_1.HTMLHelper.getAbsoluteHeight(this.container) });
                }
            }
        }
        this.container.classList.add(this.colorData.line);
        this.isActiveRecord = true;
    };
    Record.prototype.passivateRecord = function () {
        this.recordHeader.classList.remove("active");
        this.container.classList.remove("active-record");
        this.container.classList.remove("active-line-color-01", "active-line-color-02", "active-line-color-03", "active-line-color-04", "active-line-color-05", "active-line-color-06", "active-line-color-07", "active-line-color-08", "active-line-color-09", "active-line-color-10");
        this.isActiveRecord = false;
    };
    Record.prototype.displayEditRecordInput = function () {
        this.hideHeaderContent();
        this.isEditModeActive = true;
        this.recordHeader.insertBefore(this.editRecordInput, this.recordHeader.firstChild);
        this.editRecordInput.focus();
    };
    Record.prototype.editRecordKeydownHandler = function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            e.stopPropagation();
            e.preventDefault();
            if (!this.isEditModeActive)
                return;
            this.isEditModeActive = false;
            this.editRecord();
        }
    };
    Record.prototype.editRecordBlurHandler = function (e) {
        if (!this.isEditModeActive)
            return;
        this.isEditModeActive = false;
        this.editRecord();
    };
    Record.prototype.editRecord = function () {
        var editedName = this.editRecordInput.value;
        if (editedName === this.name) {
            this.showHeaderContent();
            return;
        }
        this.showHeaderContent(editedName);
        var proxy = new ConnectionProxy_1.ConnectionProxy("RecordProxy");
        proxy.editRecord(this.id, editedName, function () {
            // Handle success use case
        }, function () {
            // Handle failure use case
        });
    };
    Record.prototype.hideHeaderContent = function () {
        this.recordName.style.display = "none";
        this.recordArrowIcon.style.display = "none";
    };
    Record.prototype.showHeaderContent = function (name) {
        if (this.recordHeader.contains(this.editRecordInput))
            this.recordHeader.removeChild(this.editRecordInput);
        if (name) {
            this.name = name;
            this.recordName.innerHTML = name;
        }
        this.recordName.style.display = "block";
        this.recordArrowIcon.style.display = "block";
    };
    Record.prototype.parseDateFormat = function (date) {
        var d = new Date(date);
        var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
            "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
        ];
        var year = d.getFullYear();
        var month = monthNames[d.getMonth()];
        var day = d.getDate();
        return day + " " + month + " " + year;
    };
    Record.prototype.getScrollTopDistance = function () {
        var index = HTMLHelper_1.HTMLHelper.getElementIndex(this.container);
        var openRecords = document.getElementsByClassName("open-record");
        var recordHeight = 51;
        var substract = 20;
        var openRecordHeights = [];
        for (var i = 0; i < openRecords.length; i++) {
            var openRecordIndex = HTMLHelper_1.HTMLHelper.getElementIndex(openRecords[i]);
            if (openRecordIndex < index) {
                openRecordHeights.push(HTMLHelper_1.HTMLHelper.getAbsoluteHeight(openRecords[i]));
            }
        }
        var totalHeightOpenRecords = 0;
        for (var i = 0; i < openRecordHeights.length; i++) {
            totalHeightOpenRecords += openRecordHeights[i];
        }
        return recordHeight * (index - openRecordHeights.length) + totalHeightOpenRecords + substract;
    };
    Record.prototype.adjustForHiddenScrollbar = function () {
        if (this.isRecordsContainerScrollable()) {
            this.mainContainer.style.right = "-20px";
        }
        else {
            this.mainContainer.style.right = "0";
        }
    };
    Record.prototype.isRecordsContainerScrollable = function () {
        return this.mainContainer.scrollHeight > this.mainContainer.clientHeight;
    };
    return Record;
}());
exports.Record = Record;
