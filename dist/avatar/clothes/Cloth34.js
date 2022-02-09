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
var Cloth34 = /** @class */ (function (_super) {
    __extends(Cloth34, _super);
    function Cloth34() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth34.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3;
        return (React.createElement("g", { id: 'Clothing/Cloth34', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M506.81,1488.923l-5.886.45-2.687-45.613c.586.238,1.35.182,2.8.578a41.276,41.276,0,0,1,5.217,1.882Z", transform: "translate(-347 -1486) scale(1.05)", id: path1 }),
                React.createElement("path", { d: "M370.123,1558.247H268.3l.8-27.205,99.241-1.54Z", transform: "translate(-235 -1682) scale(1.15)", id: path2 }),
                React.createElement("path", { d: "M273.353,1488.831l-5.257.3-1.538-46.415a6.436,6.436,0,0,1,2.7-1.03c1.631-.472,1.806.137,2.361-.086Z", transform: "translate(-200 -1482) scale(1.05)", id: path3 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            this.props.children));
    };
    Cloth34.optionValue = 'Cloth34';
    return Cloth34;
}(React.Component));
exports.default = Cloth34;
