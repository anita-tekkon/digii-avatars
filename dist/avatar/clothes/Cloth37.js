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
var Cloth37 = /** @class */ (function (_super) {
    __extends(Cloth37, _super);
    function Cloth37() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth37.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3;
        return (React.createElement("g", { id: 'Clothing/Cloth37', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { opacity: "0.7", d: "M2666.61,1503.338H2473.027c-1.22-47.765,25.789-63.164,47.442-71.063,5.9-2.155,11.41-3.751,15.836-5.294q1-.35,1.93-.7a37.316,37.316,0,0,0,3.977-1.723l22.754,6.744,32.311-6.822a36.9,36.9,0,0,0,4.225,1.838c1.521.57,3.2,1.138,5.012,1.727,4.678,1.527,10.206,3.21,15.983,5.488C2643.488,1441.82,2667.768,1457.994,2666.61,1503.338Z", transform: "translate(-2695 -1540) scale(1.1)", id: path1 }),
                React.createElement("path", { d: "M2681.8,1422.625a64.833,64.833,0,0,1-23.157,8.073,60.232,60.232,0,0,1-8.368.583,62.922,62.922,0,0,1-31.743-8.693,33.667,33.667,0,0,0,4.594-2.057,16.052,16.052,0,0,0,4.09-3.269,56.671,56.671,0,0,0,12.113,3.971,53.22,53.22,0,0,0,33.7-3.952,16.052,16.052,0,0,0,4.072,3.251A34.044,34.044,0,0,0,2681.8,1422.625Z", transform: "translate(-2785 -1535) scale(1.1)", id: path2 }),
                React.createElement("path", { d: "M2681.36,1505.957l-.428-69.8c-5.778-2.278-11.305-3.96-15.984-5.488l.46,74.89-3.2.4ZM2578.9,1434.894c.519,23.647,1.138,53.992,1.386,71.063h15.948c-.286-20.891-1.112-58.98-1.5-76.357C2590.313,1431.143,2584.807,1432.739,2578.9,1434.894Z", transform: "translate(-2760 -1544) scale(1.1)", id: path3 })),
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
    Cloth37.optionValue = 'Cloth37';
    return Cloth37;
}(React.Component));
exports.default = Cloth37;
