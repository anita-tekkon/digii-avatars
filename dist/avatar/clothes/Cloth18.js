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
var lodash_1 = require("lodash");
var Colors_1 = require("./Colors");
var Cloth18 = /** @class */ (function (_super) {
    __extends(Cloth18, _super);
    function Cloth18() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth18.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, mask1 = _a.mask1, mask2 = _a.mask2;
        return (React.createElement("g", { id: 'Clothing/Cloth18', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Strap", d: "M18.852,44.713A99.047,99.047,0,0,1,20.127,2.027C17.465,1.255,14.98.6,12.769,0c-1,11.581-2.362,23.342-6.72,33.774A56.234,56.234,0,0,1,0,44.713Z", transform: "translate(150 27)", fill: "#352c38" }),
            React.createElement("defs", null,
                React.createElement("path", { id: path1, d: "M197.718,388.175c-10.4,15.6-32.7,26.393-58.545,26.393s-48.139-10.79-58.544-26.393c-18.516,9.569-36.763,27.923-32.967,67.756H230.684C234.481,416.1,216.234,397.744,197.718,388.175Z", transform: "translate(-19 -382) scale(1.08)" }),
                React.createElement("path", { opacity: "0.7", d: "M133.108,433.1c36.753,0,68.921-10.63,86.619-26.524-6.294-8.608-14.792-14.363-23.353-18.4-10.4,14.235-32.7,24.078-58.545,24.078S89.69,402.41,79.285,388.175c-10.111,4.767-20.134,11.935-26.538,23.368C71.221,424.641,100.336,433.1,133.108,433.1Z", transform: "translate(-13 -370) scale(1.05)", id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Cloth18', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth18', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            this.props.children));
    };
    Cloth18.optionValue = 'Cloth18';
    return Cloth18;
}(React.Component));
exports.default = Cloth18;
