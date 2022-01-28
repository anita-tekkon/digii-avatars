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
var Hair15 = /** @class */ (function (_super) {
    __extends(Hair15, _super);
    function Hair15() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    Hair15.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { id: path2, "data-name": "Path 3482", d: "M182.008,23.974c-12.559-4.423-15.521,1.8-19.022,6.451-14.43,19.2-7.782,62.1-7.782,62.1,7.878-1.924,8.5,8.148,6.6,11.923s1.955,15.455,1.955,15.455a82.407,82.407,0,0,0,2.884-21.6c.046-4.612,7.2-14.665,6.895-22.925-.544-14.9,9.174-19.219,19.126-19.79,4.369-.251,10.1,9.135,24.135,12.775,17.252,4.477,35.885-4.878,35.885-4.878a12.827,12.827,0,0,1,.74,6.972,20.131,20.131,0,0,0-.054,7.685c1.866,8.807,5.321,17.237,5.352,20.16a82.248,82.248,0,0,0,2.884,21.6s3.864-11.68,1.955-15.455-1.28-13.847,6.6-11.923c0,0,5.9-19.659,1.631-38.87Z", transform: "translate(-82.0 5.0)" }),
                React.createElement("path", { id: path3, "data-name": "Path 3483", d: "M252.559,62.724c-.012-.058-.019-.12-.035-.177,0,0,4.62-3.656,7.512-12.791,2.672-8.445-4.2-16.967-4.2-16.967-.7,7.955-10.358,9.282-17.233,5.437-8.106-4.531-14.68-15.008-31.285-17.472-43.447-6.451-46.894,11.383-46.894,11.383a109.519,109.519,0,0,0,14.4,32.58c4.234,1.431,10.134,9.278,22.709,12.536,15.02,3.895,31.073-2.684,34.979-4.454C238.415,68.4,245.495,65.388,252.559,62.724Z", transform: "translate(-63 -5)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Hair15', mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Behind', strokeWidth: '1', fillRule: 'evenodd' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("mask", { id: mask3, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path3 })),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path3 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 }),
                        React.createElement(HairColor_1.default, { maskID: mask3 })),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    Hair15.optionValue = 'Hair15';
    return Hair15;
}(React.Component));
exports.default = Hair15;
