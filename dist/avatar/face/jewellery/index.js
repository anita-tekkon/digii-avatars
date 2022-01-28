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
var Blank_1 = require("../accessories/Blank");
var options_1 = require("../../../options");
var Jewellery = /** @class */ (function (_super) {
    __extends(Jewellery, _super);
    function Jewellery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jewellery.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Blank_1.default, option: options_1.JewelleryOption },
            React.createElement(Hairband_1.default, null)));
    };
    return Jewellery;
}(React.Component));
exports.default = Jewellery;
