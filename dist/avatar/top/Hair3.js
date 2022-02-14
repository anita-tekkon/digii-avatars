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
var Hair3 = /** @class */ (function (_super) {
    __extends(Hair3, _super);
    function Hair3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    Hair3.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { id: path2, "data-name": "Path 3482", d: "M111,49.3c6.4-8.9,9.4-15,6.9-19.6c-1.8-3.6-4-7.1-6.5-10.2c-2.9-3.7-6.2-7.1-10-9.9c-1.8-1.4-3.7-2.7-5.7-3.8\n             c-0.7-0.4-1.3-0.7-2-1.1h0c-6.3-3-13.2-4.6-20.2-4.7h0C56-0.6,38.2,5.9,30.9,11.9c-4.4,3.6-6.2,6.1-6.2,8.4\n             c-0.1,3,2.6,5.8,5.9,10.4c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.2,0.3,0.4,0.4,0.6c1.8,2.3,4.9,3.4,8.5,4.1\n             c2,0.3,4.1,0.6,6.3,0.8c4.8,0.4,9.9,0.7,14,2l0,0c2.1,0.6,4,1.7,5.6,3.2c4.1,4.2,14-1.9,24.6-7.4c6.3,6.4,16.9,18.6,19,29.9\n             c1.6,8.5-0.2,37.3-0.2,37.3l4.7-14.9c0,0-0.2-15.9-1-27.2C112.6,56.1,112,52.7,111,49.3z", transform: "translate(74 16)" }),
                React.createElement("path", { id: path3, "data-name": "Path 3483", d: "M32.2,34.3c-2.9-2.9-5.3-6.4-7-10.1c0,0-18.9,7.8-24,28.4C0.4,55.8,0,59.1,0,62.5c-0.3,8.4,1.4,16.8,5,24.4\n             l4.7,14.9c0,0-1.3-21-0.7-32.4c0.7-1.8,1.6-3.4,2.7-4.9c1.3-1.6,2.8-3.1,4.5-4.3c4.9-3.3,4.2-4.3,6.4-12.3c0.1-0.5,0.3-1.1,0.5-1.6\n             c0.3-1.2,0.8-2.3,1.3-3.4C27.6,36.2,33,35.2,32.2,34.3z", transform: "translate(72 17)" }),
                React.createElement("path", { id: path4, "data-name": "Path 3483", d: "M28.7,41.7c-1.1,1.2-1.9,2.6-2.6,4.1c-0.6,1.5-1,3-1.2,4.6c-0.2,1.6-0.2,3.2,0.1,4.7c0.7-3,1.6-5.9,2.7-8.7\n             c1-2.9,2.8-5.4,5.1-7.4C31.2,39.5,29.7,40.4,28.7,41.7z", transform: "translate(74 16)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Hair3', mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Behind', strokeWidth: '1', fillRule: 'evenodd' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("mask", { id: mask3, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path3 })),
                        React.createElement("mask", { id: mask4, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path4 })),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path3 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path4 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 }),
                        React.createElement(HairColor_1.default, { maskID: mask3 }),
                        React.createElement(HairColor_1.default, { maskID: mask4 })),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    Hair3.optionValue = 'Hair3';
    return Hair3;
}(React.Component));
exports.default = Hair3;
