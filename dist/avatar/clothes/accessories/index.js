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
var Blank_1 = require("../../top/accessories/Blank");
var BowTie_1 = require("./BowTie");
var options_1 = require("../../../options");
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    function Clothes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clothes.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.ClotheAccessoryOption, defaultOption: Blank_1.default },
            React.createElement(BowTie_1.default, null)));
    };
    return Clothes;
}(React.Component));
exports.default = Clothes;
