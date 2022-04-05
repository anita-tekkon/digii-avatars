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
var Cloth17 = /** @class */ (function (_super) {
    __extends(Cloth17, _super);
    function Cloth17() {
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
    Cloth17.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4;
        return (React.createElement("g", { id: 'Clothing/Cloth17', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("g", { id: "Group_643", "data-name": "Group 643", transform: "translate(35 29) scale(1.1)" },
                React.createElement("path", { id: "Path_3566", "data-name": "Path 3566", d: "M680.342,155c-8.321,8.377-20.552,13.677-34.2,13.677s-25.877-5.3-34.2-13.677c-20.114,6.108-59.624,18.646-54.3,76.169H734.642C739.967,173.645,700.457,161.107,680.342,155Z", transform: "translate(-557.158 -154.999)", fill: "#fc6a5a" })),
            React.createElement("defs", null,
                React.createElement("path", { id: path4, "data-name": "left jacket", d: "M609.973,153.055l10.445,78.573H553.735S546.5,164.8,609.973,153.055Z", transform: "translate(-576 -141) scale(1.1)", fill: "#f6f6f6" }),
                React.createElement("path", { id: path1, opacity: "0.8", "data-name": "Left collar", d: "M603.915,153.055l10.445,78.573-28.12-49.673L597.488,164.8l-14.461-6.322A56.108,56.108,0,0,1,603.915,153.055Z", transform: "translate(-571 -139) scale(1.1)" }),
                React.createElement("path", { id: path2, "data-name": "right jacket", d: "M662.93,153.055l-10.443,78.573h66.681S726.4,164.8,662.93,153.055Z", transform: "translate(-559 -139) scale(1.1)" }),
                React.createElement("path", { "data-name": "right collar", opacity: "0.8", id: path3, d: "M662.93,153.055l-10.443,78.573,28.118-49.673L669.358,164.8l14.461-6.322A56.11,56.11,0,0,0,662.93,153.055Z", transform: "translate(-558 -137) scale(1.1)" })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("use", { id: 'Cloth17', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement("use", { id: 'Cloth17', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth17', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth17', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("path", { id: "Path_3936", "data-name": "Path 3936", d: "M1420.723,2074.535h-5.239c.765-11.265,2.162-30.671,2.719-30.9C1418.7,2043.428,1419.9,2061.349,1420.723,2074.535Z", transform: "translate(-1340 -1966)", fill: "#040505" }),
            React.createElement("path", { id: "Path_3937", "data-name": "Path 3937", d: "M1673.427,2074.536h-4.869l1.658-30.9Z", transform: "translate(-1483 -1970)", fill: "#040505" }),
            this.props.children));
    };
    Cloth17.optionValue = 'Cloth17';
    return Cloth17;
}(React.Component));
exports.default = Cloth17;
