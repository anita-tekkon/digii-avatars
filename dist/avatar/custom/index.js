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
            React.createElement(RedWings_1.default, null)));
    };
    return CustomPiece;
}(React.Component));
exports.default = CustomPiece;
