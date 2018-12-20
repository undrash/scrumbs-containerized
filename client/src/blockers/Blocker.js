"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CSS
require("../_style/style-sheets/blockers.scss");
var ConnectionProxy_1 = require("../connection/ConnectionProxy");
var TweenLite = gsap.TweenLite;
var Blocker = /** @class */ (function () {
    function Blocker(parent, data, mainContainer, isSolved) {
        this.parent = parent;
        this.content = data.content;
        this.id = data._id;
        this.label = data.label;
        this.mainContainer = mainContainer;
        this.container = document.createElement("li");
        this.container.id = this.id;
        this.container.className = "blocker-item";
        this.checkboxContainer = document.createElement("div");
        this.checkboxContainer.className = "blocker-item-input";
        this.checkbox = document.createElement("input");
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.id = "checkbox" + this.id;
        if (isSolved) {
            this.checkbox.checked = true;
            this.container.classList.add("ready");
        }
        this.checkMark = document.createElement("span");
        this.checkMark.className = "blocker-item-checkmark";
        this.checkboxContainer.appendChild(this.checkbox);
        this.checkboxContainer.appendChild(this.checkMark);
        this.textContainer = document.createElement("div");
        this.textContainer.className = "blocker-item-text";
        this.text = document.createElement("label");
        this.text.innerHTML = this.content;
        this.text.className = "inline";
        this.textContainer.appendChild(this.text);
        this.recordOwner = document.createElement("span");
        this.recordOwner.innerHTML = this.label;
        this.recordOwner.className = "user";
        this.container.appendChild(this.checkboxContainer);
        this.container.appendChild(this.textContainer);
        this.container.appendChild(this.recordOwner);
        // this.mainContainer.appendChild( this.container );
        if (this.mainContainer.firstChild && this.mainContainer.firstChild.nodeName !== "INPUT") {
            this.mainContainer.insertBefore(this.container, this.mainContainer.firstChild);
        }
        else {
            this.mainContainer.insertBefore(this.container, this.mainContainer.children[1]);
        }
        this.registerEventListeners();
    }
    Blocker.prototype.registerEventListeners = function () {
        var _this = this;
        this.container.addEventListener("click", function () {
            console.info("click recorded on blocker");
            console.info("isChecked: " + _this.checkbox.checked);
            if (_this.checkbox.checked) {
                _this.checkbox.checked = false;
                _this.container.classList.remove("ready");
                TweenLite.to(_this.container, 0.5, { opacity: 0, onComplete: function () {
                        var proxy = new ConnectionProxy_1.ConnectionProxy("BlockerProxy");
                        var self = _this;
                        proxy.unsolveBlocker(_this.id, function () {
                            self.parent.unsolvedBlockersContainer.appendChild(self.container);
                            self.parent.toggleSolvedBlockersVisibilityButton();
                            self.container.style.opacity = "1";
                        }, function (message) {
                            console.warn(message);
                        });
                    } });
            }
            else {
                _this.checkbox.checked = true;
                _this.container.classList.add("ready");
                TweenLite.to(_this.container, 0.5, { opacity: 0, onComplete: function () {
                        var proxy = new ConnectionProxy_1.ConnectionProxy("BlockerProxy");
                        var self = _this;
                        proxy.solveBlocker(_this.id, function () {
                            self.parent.solvedBlockersContainer.appendChild(self.container);
                            self.parent.toggleSolvedBlockersVisibilityButton();
                            self.container.style.opacity = "1";
                        }, function (message) {
                            console.warn(message);
                        });
                    } });
            }
        });
    };
    Blocker.prototype.unregisterEventListeners = function () {
    };
    return Blocker;
}());
exports.Blocker = Blocker;
