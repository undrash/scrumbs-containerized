"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTMLHelper = /** @class */ (function () {
    function HTMLHelper() {
    }
    /**
     * Calculates an element position in relation to the window
     * @param element - HTMLElement/Element
     * @return {object} { x: value, y: value }
     */
    HTMLHelper.getPosition = function (element) {
        var xPosition = 0;
        var yPosition = 0;
        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return { x: xPosition, y: yPosition };
    };
    ;
    /**
     * Calculates the absolute height of a specified HTML element
     * @param {HTMLElement} el
     * @return {number}
     */
    HTMLHelper.getAbsoluteHeight = function (el) {
        // Get the DOM Node if a string was provided
        el = (typeof el === "string") ? document.querySelector(el) : el;
        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        return Math.ceil(el.offsetHeight + margin);
    };
    /**
     * Returns the index of the specified element
     * @param {Element} elem
     * @return {number}
     */
    HTMLHelper.getElementIndex = function (elem) {
        var i = 0;
        while ((elem = elem.previousElementSibling) != null)
            ++i;
        return i;
    };
    /**
     * Checks if the element is visible in the container
     * @param {HTMLElement} container
     * @param {HTMLElement} element
     * @param {boolean} partial
     * @return {boolean}
     */
    HTMLHelper.checkInView = function (container, element, partial) {
        // Get container properties
        var cTop = container.scrollTop;
        var cBottom = cTop + container.clientHeight;
        // Get element properties
        var eTop = element.offsetTop;
        var eBottom = eTop + element.clientHeight;
        // Check
        var isTotal = (eTop >= cTop && eBottom <= cBottom);
        var isPartial = partial && ((eTop < cTop && eBottom > cTop) ||
            (eBottom > cBottom && eTop < cBottom));
        // Return the result
        return (isTotal || isPartial);
    };
    /**
     * Returns a boolean value, specifying if the element is partially in the viewport
     * NOTE: Accepts both HTML and jQuery elements
     * @param el - DOM/jQuery element
     * @returns {boolean}
     */
    HTMLHelper.isElementPartiallyInViewport = function (el) {
        // if ( typeof jQuery !== 'undefined' && el instanceof jQuery ) el = el[0];
        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return (vertInView && horInView);
    };
    ;
    /**
     * Returns a boolean value, specifying if the element is in the viewport
     * NOTE: Accepts both HTML and jQuery elements
     * @param el - DOM/jQuery element
     * @returns {boolean}
     */
    HTMLHelper.isElementInViewport = function (el) {
        // if ( typeof jQuery !== 'undefined' && el instanceof jQuery ) el = el[0];
        var rect = el.getBoundingClientRect();
        return rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
    };
    ;
    return HTMLHelper;
}());
exports.HTMLHelper = HTMLHelper;
