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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var Hair6 = /** @class */ (function (_super) {
    __extends(Hair6, _super);
    function Hair6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    Hair6.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { id: path2, "data-name": "Path 3482", d: "M258.11,95.112s-7.506,3.5-15.507,2.5S230.1,94.292,226.59,96.453a11.9,11.9,0,0,0-5.5,9.916c0,3.751,1.5,9.492,0,11.372s-7.5,4.882-8.5,8.635c-.648,2.418-1.5,6-3.252,6.753s-2.751-7.256-3.5-10.255-7.25-12.506-6-27.762c0,0-10.007-17.259,3.5-29.514,0,0,3.179-28.263,23.852-25.011,0,0,9.4-5.753,13.661-6.256,0,0,7.254-15.752,31.263-5.749,0,0,8.753-7.5,18.256,2s18.008,9.221,19.761,14.505c1.341,4.048,11.255,7.256,13.255,20.26a22.929,22.929,0,0,1,5.751,6.254s5.252,1.5,4.254,9c0,0-3.749,12.009-1.252,17.01s-5,8.757-5.751,17.01-2.357,10.6-5.5,14.5a23.336,23.336,0,0,1-3.751,4.054c-2.25,2.2-1.248-8.054-5-9.8s-8.258-7.757-10-16.76-14.01-8.256-17.259-10.255-11.51-6-17.76-4S258.11,95.112,258.11,95.112Z", transform: "translate(-147 -32) scale(1.06)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Hair6', mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Behind', strokeWidth: '1', fillRule: 'evenodd' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 })),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    Hair6.optionValue = 'Hair6';
    return Hair6;
}(React.Component));
exports.default = Hair6;
