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
var Cloth6 = /** @class */ (function (_super) {
    __extends(Cloth6, _super);
    function Cloth6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.path5 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask5 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth6.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, path5 = _a.path5, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, mask5 = _a.mask5;
        return (React.createElement("g", { id: 'Clothing/Cloth6', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { opacity: "0.8", d: "M319.18,332.6c-4.318-23.283-7.419-29.408-10.52-31.441-1.151-.753-30.246-7.168-49.18-13.326-6.666,6.024-15.9,7.875-32.709,7.931-16.813-.056-26.043-1.907-32.709-7.931-18.934,6.159-48.029,12.573-49.18,13.326-3.1,2.033-6.2,8.158-10.52,31.441-.7,3.755-4.147,19.958-4.637,27.25H323.817C323.327,352.56,319.877,336.357,319.18,332.6Z", transform: "translate(-95 -260)", id: path1 }),
                React.createElement("rect", { id: path5, "data-name": "Rectangle 80", width: "12.542", height: "50.726", transform: "translate(125 36)" }),
                React.createElement("rect", { opacity: "0.8", id: path2, width: "260", height: "20.726", transform: "translate(0 99)" }),
                React.createElement("path", { id: path3, d: "M169.733,284.951l-16.091,8.58s10.888,17.8,14.392,20.089c0,0,19.816-8.377,23.734-13.709C191.768,299.911,172.934,296.683,169.733,284.951Z", transform: "translate(-62 -264)" }),
                React.createElement("path", { d: "M191.785,284.951l16.091,8.58s-10.888,17.8-14.392,20.089c0,0-19.816-8.377-23.734-13.709C169.75,299.911,188.584,296.683,191.785,284.951Z", transform: "translate(-35 -264)", id: path4 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("mask", { id: mask5, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path5 })),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path5 }),
            React.createElement(Colors_1.default, { maskID: mask5 }),
            React.createElement("circle", { id: "Ellipse_46", "data-name": "Ellipse 46", cx: "2.746", cy: "2.746", r: "2.746", transform: "translate(129 42)", fill: "#f8dfe1" }),
            React.createElement("circle", { id: "Ellipse_47", "data-name": "Ellipse 47", cx: "2.746", cy: "2.746", r: "2.746", transform: "translate(129 58)", fill: "#f8dfe1" }),
            React.createElement("circle", { id: "Ellipse_48", "data-name": "Ellipse 48", cx: "2.746", cy: "2.746", r: "2.746", transform: "translate(129 72)", fill: "#f8dfe1" }),
            this.props.children));
    };
    Cloth6.optionValue = 'Cloth6';
    return Cloth6;
}(React.Component));
exports.default = Cloth6;
