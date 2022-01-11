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
var BeardTest = /** @class */ (function (_super) {
    __extends(BeardTest, _super);
    function BeardTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    BeardTest.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1, mask2 = _a.mask2, path2 = _a.path2;
        return (React.createElement("g", { id: 'Facial-Hair/Beard-Test', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M81.818,96.02c-4.222,0-4.306,2.589-4.306,2.589a2.789,2.789,0,0,1,2.1-1.027c.875,0,3.786.8,3.893,3.3.172,3.953-5.162,4.439-5.162,4.439-7.729,0-6.645-5.637-13.447-11.883-5.434-4.99-9.471.109-9.471,2.45a16.474,16.474,0,0,0,.826,4.984c2.877,6.463,13.064,9.378,17.457,9.378,6.779,0,13.487-3.261,13.487-8.981A5.408,5.408,0,0,0,81.818,96.02Z", id: path1 }),
                React.createElement("path", { d: "M30.414,96.02c4.225,0,4.307,2.589,4.307,2.589a2.787,2.787,0,0,0-2.1-1.027c-.877,0-3.785.8-3.9,3.3-.17,3.953,5.165,4.439,5.165,4.439,7.728,0,6.644-5.637,13.447-11.883,5.433-4.99,9.471.109,9.471,2.45a16.475,16.475,0,0,1-.827,4.984c-2.879,6.463-13.064,9.378-17.457,9.378-6.781,0-13.486-3.261-13.486-8.981A5.407,5.407,0,0,1,30.414,96.02Z", id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement(Colors_1.default, { maskID: mask2 })));
    };
    BeardTest.optionValue = 'BeardTest';
    return BeardTest;
}(React.Component));
exports.default = BeardTest;
