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
var BlazerShirt_1 = require("./BlazerShirt");
var BlazerSweater_1 = require("./BlazerSweater");
var CollarSweater_1 = require("./CollarSweater");
var GraphicShirt_1 = require("./GraphicShirt");
var Hoodie_1 = require("./Hoodie");
var Overall_1 = require("./Overall");
var ShirtCrewNeck_1 = require("./ShirtCrewNeck");
var ShirtScoopNeck_1 = require("./ShirtScoopNeck");
var ShirtVNeck_1 = require("./ShirtVNeck");
var Cloth4_1 = require("./Cloth4");
var Cloth5_1 = require("./Cloth5");
var Cloth6_1 = require("./Cloth6");
var Cloth7_1 = require("./Cloth7");
var Cloth10_1 = require("./Cloth10");
var Cloth18_1 = require("./Cloth18");
var Cloth14_1 = require("./Cloth14");
var Cloth17_1 = require("./Cloth17");
var Cloth21_1 = require("./Cloth21");
var Cloth22_1 = require("./Cloth22");
var Cloth24_1 = require("./Cloth24");
var Cloth31_1 = require("./Cloth31");
var Cloth33_1 = require("./Cloth33");
var Cloth34_1 = require("./Cloth34");
var Cloth36_1 = require("./Cloth36");
var Cloth37_1 = require("./Cloth37");
var Cloth575_1 = require("./Cloth575");
var Cloth608_1 = require("./Cloth608");
var Cloth582_1 = require("./Cloth582");
var Cloth41_1 = require("./Cloth41");
var options_1 = require("../../options");
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    function Clothes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clothes.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.ClotheOption, defaultOption: BlazerShirt_1.default },
            React.createElement(BlazerShirt_1.default, null),
            React.createElement(BlazerSweater_1.default, null),
            React.createElement(CollarSweater_1.default, null),
            React.createElement(GraphicShirt_1.default, null),
            React.createElement(Hoodie_1.default, null),
            React.createElement(Overall_1.default, null),
            React.createElement(ShirtCrewNeck_1.default, null),
            React.createElement(ShirtScoopNeck_1.default, null),
            React.createElement(ShirtVNeck_1.default, null),
            React.createElement(Cloth4_1.default, null),
            React.createElement(Cloth5_1.default, null),
            React.createElement(Cloth6_1.default, null),
            React.createElement(Cloth7_1.default, null),
            React.createElement(Cloth10_1.default, null),
            React.createElement(Cloth18_1.default, null),
            React.createElement(Cloth14_1.default, null),
            React.createElement(Cloth33_1.default, null),
            React.createElement(Cloth36_1.default, null),
            React.createElement(Cloth37_1.default, null),
            React.createElement(Cloth575_1.default, null),
            React.createElement(Cloth608_1.default, null),
            React.createElement(Cloth582_1.default, null),
            React.createElement(Cloth24_1.default, null),
            React.createElement(Cloth31_1.default, null),
            React.createElement(Cloth34_1.default, null),
            React.createElement(Cloth41_1.default, null),
            React.createElement(Cloth17_1.default, null),
            React.createElement(Cloth21_1.default, null),
            React.createElement(Cloth22_1.default, null)));
    };
    return Clothes;
}(React.Component));
exports.default = Clothes;
