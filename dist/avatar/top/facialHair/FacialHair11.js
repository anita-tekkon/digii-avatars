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
var FacialHair11 = /** @class */ (function (_super) {
    __extends(FacialHair11, _super);
    function FacialHair11() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair11.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1, mask2 = _a.mask2, path2 = _a.path2, mask3 = _a.mask3, path3 = _a.path3;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair11', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M58.7,35.8C51.8,43,45,43.4,41.2,42.5s-4.9-7.2-3.4-9c0.8-0.9,1.4-1.8,2-2.8c-1.3,0.4-2.7,0.7-4.1,0.7\n              c-1.4,0-2.8-0.3-4.1-0.7c0.6,1,1.3,1.9,2,2.8c1.5,1.8,0.3,8.1-3.4,9c-3.7,0.9-10.6,0.5-17.5-6.7C5.8,28.7,0,22.8,0,22.8\n              c0.1,1,0.4,2,0.8,2.9c0.8,2,6.4,10.1,9.5,14.9c3.2,5,9.6,16.7,25.5,16.7c15.9,0,22.5-11.6,25.5-16.7c3.2-5.5,8.6-13,9.5-14.9\n              c0.4-0.9,0.7-1.9,0.8-2.9C71.5,22.8,65.6,28.7,58.7,35.8z", id: path1, transform: "translate(20 88)" }),
                React.createElement("path", { d: "M35.5,4.4c-0.2-2.3-2.8-3.5-5.8-2.1s-8.1,7.9-10.8,8.1c-2.5,0.2-3.8-1.5-3.6-3.2\n            c0.1-1.2,1.1-2.1,2.3-2c0,0,0.1,0,0.1,0c0.6,0.1,1.2,0.4,1.6,1c-0.1-1.2-1.2-2-2.3-1.9c-2.2,0-3.9,2.4-3.1,5.1s3.2,4.2,8,3.5\n            S35.7,8.4,35.5,4.4z", id: path2, transform: "translate(18 93)" }),
                React.createElement("path", { d: "M36,4.4c0.2-2.3,2.8-3.5,5.8-2.1s8.1,7.9,10.8,8.1c2.5,0.2,3.8-1.5,3.6-3.2\n            c-0.1-1.2-1.1-2.1-2.3-2c0,0-0.1,0-0.1,0c-0.6,0.1-1.2,0.4-1.6,1c0.1-1.2,1.2-2,2.3-1.9c2.2,0,3.9,2.4,3.1,5.1s-3.2,4.2-8,3.5\n            S35.7,8.4,36,4.4z", id: path3, transform: "translate(20 93)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement(Colors_1.default, { maskID: mask3 })));
    };
    FacialHair11.optionValue = 'FacialHair11';
    return FacialHair11;
}(React.Component));
exports.default = FacialHair11;
