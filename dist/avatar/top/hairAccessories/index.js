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
var Hairband_1 = require("./Hairband");
var HairAccessory2_1 = require("./HairAccessory2");
var HairAccessory5_1 = require("./HairAccessory5");
var HairAccessory6_1 = require("./HairAccessory6");
var HairAccessory7_1 = require("./HairAccessory7");
var HairAccessory8_1 = require("./HairAccessory8");
var HairAccessory10_1 = require("./HairAccessory10");
var HairAccessory12_1 = require("./HairAccessory12");
var HairAccessory13_1 = require("./HairAccessory13");
var Blank_1 = require("../accessories/Blank");
var options_1 = require("../../../options");
var HairAccessories = /** @class */ (function (_super) {
    __extends(HairAccessories, _super);
    function HairAccessories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HairAccessories.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Blank_1.default, option: options_1.HairAccessoryOption },
            React.createElement(Hairband_1.default, null),
            React.createElement(HairAccessory2_1.default, null),
            React.createElement(HairAccessory5_1.default, null),
            React.createElement(HairAccessory6_1.default, null),
            React.createElement(HairAccessory7_1.default, null),
            React.createElement(HairAccessory8_1.default, null),
            React.createElement(HairAccessory10_1.default, null),
            React.createElement(HairAccessory12_1.default, null),
            React.createElement(HairAccessory13_1.default, null)));
    };
    return HairAccessories;
}(React.Component));
exports.default = HairAccessories;
