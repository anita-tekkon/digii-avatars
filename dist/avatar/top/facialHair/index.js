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
var BeardLight_1 = require("./BeardLight");
var BeardMajestic_1 = require("./BeardMajestic");
var BeardMedium_1 = require("./BeardMedium");
var Blank_1 = require("./Blank");
var MoustacheFancy_1 = require("./MoustacheFancy");
var MoustacheMagnum_1 = require("./MoustacheMagnum");
var FacialHair2_1 = require("./FacialHair2");
var FacialHair3_1 = require("./FacialHair3");
var FacialHair4_1 = require("./FacialHair4");
var FacialHair6_1 = require("./FacialHair6");
var FacialHair7_1 = require("./FacialHair7");
var FacialHair8_1 = require("./FacialHair8");
var FacialHair9_1 = require("./FacialHair9");
var FacialHair11_1 = require("./FacialHair11");
var options_1 = require("../../../options");
var FacialHair = /** @class */ (function (_super) {
    __extends(FacialHair, _super);
    function FacialHair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacialHair.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.FacialHairOption, defaultOption: Blank_1.default },
            React.createElement(Blank_1.default, null),
            React.createElement(BeardMedium_1.default, null),
            React.createElement(BeardLight_1.default, null),
            React.createElement(BeardMajestic_1.default, null),
            React.createElement(MoustacheFancy_1.default, null),
            React.createElement(MoustacheMagnum_1.default, null),
            React.createElement(FacialHair2_1.default, null),
            React.createElement(FacialHair3_1.default, null),
            React.createElement(FacialHair4_1.default, null),
            React.createElement(FacialHair6_1.default, null),
            React.createElement(FacialHair7_1.default, null),
            React.createElement(FacialHair8_1.default, null),
            React.createElement(FacialHair9_1.default, null),
            React.createElement(FacialHair11_1.default, null)));
    };
    return FacialHair;
}(React.Component));
exports.default = FacialHair;
