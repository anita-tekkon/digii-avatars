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
var Background16_1 = require("./Background16");
var Background17_1 = require("./Background17");
var Background18_1 = require("./Background18");
var Background19_1 = require("./Background19");
var Background20_1 = require("./Background20");
var options_1 = require("../../options");
var Blank_1 = require("../top/facialHair/Blank");
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Background.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.BackgroundOption, defaultOption: Blank_1.default },
            React.createElement(Background16_1.default, null),
            React.createElement(Background17_1.default, null),
            React.createElement(Background18_1.default, null),
            React.createElement(Background19_1.default, null),
            React.createElement(Background20_1.default, null)));
    };
    return Background;
}(React.Component));
exports.default = Background;
