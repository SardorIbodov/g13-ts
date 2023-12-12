"use strict";
var Utils;
(function (Utils) {
    Utils.PI = 3.1415;
    function log(text, color, fontSize) {
        console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
    }
    Utils.log = log;
})(Utils || (Utils = {}));
Utils.log("Hello", "yellow", 40);
