"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hungarian_1 = require("./translations/Hungarian");
var English_1 = require("./translations/English");
var Languages_1 = require("./Languages");
var Language = /** @class */ (function () {
    function Language() {
    }
    Language.getTranslation = function (stringPointer) {
        debugger;
        if (!Language.languages || Language.currentLanguage == null) {
            console.warn("Language component has not yet been initated!");
            return;
        }
        if (!Language.languages[Language.currentLanguage]) {
            console.warn("Language is missing!");
            return;
        }
        if (!Language.languages[Language.currentLanguage][stringPointer]) {
            console.warn("The current language does not contain the specified pointer!");
            return;
        }
        return Language.languages[Language.currentLanguage][stringPointer];
    };
    Language.getLanguagesObject = function () {
        var languages = {};
        languages[Languages_1.Languages.ENGLISH] = English_1.English;
        languages[Languages_1.Languages.HUNGARIAN] = Hungarian_1.Hungarian;
        return languages;
    };
    Language.currentLanguage = Languages_1.Languages.HUNGARIAN;
    Language.languages = Language.getLanguagesObject();
    return Language;
}());
exports.Language = Language;
