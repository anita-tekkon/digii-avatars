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
var FacialHair9 = /** @class */ (function (_super) {
    __extends(FacialHair9, _super);
    function FacialHair9() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair9.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1, mask2 = _a.mask2, path2 = _a.path2;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair9', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M1855.9,865.5c-2.1-2.5-5.3-3.8-8.5-3.4c-3.4,0.2-3.3-1.1-6.1-0.8c-0.7,0.1-1.2,0.4-1.6,0.8\n            c-0.4-0.4-0.9-0.7-1.6-0.8c-2.8-0.3-2.7,1-6.1,0.8c-3.2-0.3-6.4,0.9-8.5,3.4c-2.2,2.7-4.6,3.4-6.8,2.8c1.3,1.5,3.2,2.2,5.2,2.1\n            c3.6,0,6.7-2.4,8.9-2.2c4.8,0.5,7.6-0.6,8.7-1.8c0.1-0.1,0.2-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3c1.1,1.2,3.9,2.3,8.7,1.8\n            c2.2-0.2,5.3,2.2,8.9,2.2c2,0.1,3.9-0.7,5.2-2.1C1860.5,868.9,1858.1,868.3,1855.9,865.5z", id: path1, transform: "translate(-1932 -839) scale(1.08)" }),
                React.createElement("path", { d: "M1885.8,845.9c0,0-1.8,17-8.2,23c-6.4,6-3.2,11-7.7,18c-4.5,7-12.4,11.6-15.5,13.3c-3.1,1.7-5.2,2.9-8.9,4.6\n            c-3.7,1.7-6.6-1.1-6.6-1.1v0l0,0l0,0v0c0,0-3,2.9-6.6,1.1c-3.7-1.7-5.8-2.9-8.9-4.6c-5.8-3.3-10.7-7.9-14.5-13.3\n            c-4.5-7-2.3-12-8.7-18c-6.4-6-8.2-23-8.2-23c-0.2,1.3-1,2.6-0.9,4.2c0.2,11.7,1.4,26.6,4,32.3c3.1,6.6,4,18.4,9.5,23.9\n            s6.4,7.2,12.2,12.4c5.8,5.2,9.5,4,15.3,6c5.6,1.9,6.9,4,6.9,4v0c0,0,0,0,0,0c0,0,0,0,0,0v0c2.1-1.7,4.4-3.1,6.9-4\n            c5.6-2.2,9.5-0.9,15.3-6c5.8-5.2,6.7-6.9,12.2-12.4c5.5-5.5,6.4-17.3,9.5-23.9c2.6-5.7,3.5-25.2,4.2-36.5\n            C1887,843.6,1886,847.2,1885.8,845.9z", id: path2, transform: "translate(-1932 -841) scale(1.08)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement(Colors_1.default, { maskID: mask2 })));
    };
    FacialHair9.optionValue = 'FacialHair9';
    return FacialHair9;
}(React.Component));
exports.default = FacialHair9;
