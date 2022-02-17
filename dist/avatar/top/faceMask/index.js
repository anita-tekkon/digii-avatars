"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Blank_1 = require("../facialHair/Blank");
var FaceMask01_1 = require("./FaceMask01");
var FaceMask02_1 = require("./FaceMask02");
var FaceMask03_1 = require("./FaceMask03");
var FaceMask04_1 = require("./FaceMask04");
var FaceMask05_1 = require("./FaceMask05");
var FaceMask06_1 = require("./FaceMask06");
var FaceMask07_1 = require("./FaceMask07");
var options_1 = require("../../../options");
var FaceMask = /** @class */ (function (_super) {
    __extends(FaceMask, _super);
    function FaceMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceMask.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.FaceMaskOption, defaultOption: Blank_1.default },
            React.createElement(Blank_1.default, null),
            React.createElement(FaceMask01_1.default, null),
            React.createElement(FaceMask02_1.default, null),
            React.createElement(FaceMask03_1.default, null),
            React.createElement(FaceMask04_1.default, null),
            React.createElement(FaceMask05_1.default, null),
            React.createElement(FaceMask06_1.default, null),
            React.createElement(FaceMask07_1.default, null)));
    };
    return FaceMask;
}(React.Component));
exports.default = FaceMask;
