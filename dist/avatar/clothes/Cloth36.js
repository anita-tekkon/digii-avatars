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
var Cloth36 = /** @class */ (function (_super) {
    __extends(Cloth36, _super);
    function Cloth36() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth36.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Cloth36', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M2112.124,1502.751H1897.032c-1.38-48.146,29.708-63.1,53.963-70.807q1.843-.585,3.628-1.119c5.647-1.695,10.784-3.044,14.861-4.414,1.031-.346,2-.694,2.882-1.048.541-.217,1.055-.436,1.536-.659.237-.109.465-.22.686-.331.047-.024.095-.047.141-.073,4.886,4.795,17.187,15.292,31.353,15.447h.042c8.879.086,18.49-3.9,27.466-15.9q.471.272.975.526c.058.03.117.059.177.087.113.057.227.112.344.166a43.545,43.545,0,0,0,4.694,1.821c3.146,1.052,6.915,2.094,11.056,3.292,4.217,1.219,8.82,2.6,13.549,4.313C2087.4,1442.4,2113.386,1458.646,2112.124,1502.751Z", transform: "translate(-1973 -1468) scale(1.05)", id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("path", { id: "Path_3917", "data-name": "Path 3917", d: "M1998,1562.979h-6.475c.946-8.429,2.673-22.949,3.361-23.121C1995.5,1539.7,1996.994,1553.112,1998,1562.979Z", transform: "translate(-1925 -1457)", fill: "#040505" }),
            React.createElement("path", { id: "Path_3918", "data-name": "Path 3918", d: "M2249.4,1562.98h-6.018l2.049-23.121Z", transform: "translate(-2054 -1458)", fill: "#040505" }),
            React.createElement("path", { id: "Path_3919", "data-name": "Path 3919", d: "M2050.406,1416.479l8.408-9.126,25.328,22.559,19.747-21.541,7.737,8.05-7.591,31.539-19.688-15.484-19.381,16.407Z", transform: "translate(-2157 -1529) scale(1.1)", fill: "#f6fbfb" }),
            this.props.children));
    };
    Cloth36.optionValue = 'Cloth36';
    return Cloth36;
}(React.Component));
exports.default = Cloth36;
