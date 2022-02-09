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
var Cloth41 = /** @class */ (function (_super) {
    __extends(Cloth41, _super);
    function Cloth41() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth41.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4;
        return (React.createElement("g", { id: 'Clothing/Cloth41', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { id: path4, "data-name": "Shirt", d: "M1501.167,2057.226H1320.522a140.723,140.723,0,0,1,2.305-29.928q.667-3.4,1.5-6.532l2.414-2.38s113.507,9.006,115.563,9.006c1.618,0,37.274-10.551,52.351-15.034a88.226,88.226,0,0,1,3.187,10.332C1500.189,2032.259,1501.441,2043.634,1501.167,2057.226Z", transform: "translate(-1334 -2030) scale(1.04)", fill: "#f6f6f6", opacity: "0.8" }),
                React.createElement("path", { id: path1, "data-name": "Left strap", d: "M1433.328,1939.686V1973.8h-5.822v-32.291l.516-.169C1429.846,1940.741,1431.624,1940.2,1433.328,1939.686Z", transform: "translate(-1491 -2103) scale(1.1)" }),
                React.createElement("path", { id: path2, "data-name": "right strap", d: "M1646.619,1944.844V1975.1H1640.8v-32.252C1642.688,1943.455,1644.639,1944.112,1646.619,1944.844Z", transform: "translate(-1627 -2106) scale(1.1)" }),
                React.createElement("path", { "data-name": "fold", id: path3, d: "M1499.961,2003.98c-75.821,21.374-153.19,7.617-173.883,3.217a48.109,48.109,0,0,1,9.589-18.385c81.249,16.745,134.973,3.458,153.356-2.591A47.228,47.228,0,0,1,1499.961,2003.98Z", transform: "translate(-1367 -2056) scale(1.06)" })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("use", { id: 'Cloth41', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement("use", { id: 'Cloth41', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth41', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth41', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("path", { id: "Path_3936", "data-name": "Path 3936", d: "M1420.723,2074.535h-5.239c.765-11.265,2.162-30.671,2.719-30.9C1418.7,2043.428,1419.9,2061.349,1420.723,2074.535Z", opacity: "0.8", transform: "translate(-1340 -1966)", fill: "#040505" }),
            React.createElement("path", { id: "Path_3937", "data-name": "Path 3937", d: "M1673.427,2074.536h-4.869l1.658-30.9Z", opacity: "0.8", transform: "translate(-1483 -1970)", fill: "#040505" }),
            this.props.children));
    };
    Cloth41.optionValue = 'Cloth41';
    return Cloth41;
}(React.Component));
exports.default = Cloth41;
