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
var test_1 = require("./test");
var DevilWings_1 = require("./DevilWings");
var WhiteWings_1 = require("./WhiteWings");
var RedWings_1 = require("./RedWings");
var Wings05_1 = require("./Wings05");
var Wings06_1 = require("./Wings06");
var Wings07_1 = require("./Wings07");
var Wings08_1 = require("./Wings08");
var Wings09_1 = require("./Wings09");
var Wings10_1 = require("./Wings10");
var Wings11_1 = require("./Wings11");
var Wings12_1 = require("./Wings12");
var Wings13_1 = require("./Wings13");
var Wings14_1 = require("./Wings14");
var Wings15_1 = require("./Wings15");
var options_1 = require("../../options");
var Blank_1 = require("../top/facialHair/Blank");
var CustomPiece = /** @class */ (function (_super) {
    __extends(CustomPiece, _super);
    function CustomPiece() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPiece.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.CustomOption, defaultOption: Blank_1.default },
            React.createElement(test_1.default, null),
            React.createElement(DevilWings_1.default, null),
            React.createElement(WhiteWings_1.default, null),
            React.createElement(RedWings_1.default, null),
            React.createElement(Wings05_1.default, null),
            React.createElement(Wings06_1.default, null),
            React.createElement(Wings07_1.default, null),
            React.createElement(Wings08_1.default, null),
            React.createElement(Wings09_1.default, null),
            React.createElement(Wings10_1.default, null),
            React.createElement(Wings11_1.default, null),
            React.createElement(Wings12_1.default, null),
            React.createElement(Wings13_1.default, null),
            React.createElement(Wings14_1.default, null),
            React.createElement(Wings15_1.default, null)));
    };
    return CustomPiece;
}(React.Component));
exports.default = CustomPiece;
