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
var Cloth14 = /** @class */ (function (_super) {
    __extends(Cloth14, _super);
    function Cloth14() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth14.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Cloth14', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M312.049,414.522c-1.182-.772-25.6-6.3-45.011-12.615-6.854,6.2-21.758,19.451-39.09,19.451h-.113c-17.332,0-32.236-13.255-39.09-19.451-19.411,6.314-43.829,11.843-45.011,12.615-3.692,2.422-7.384,10.5-13.03,45.214l40.67,12.52.037,2.437H284.372l.038-2.437,40.387-12.52C319.15,425.018,315.741,416.944,312.049,414.522Z", transform: "translate(-116 -403) scale(1.08)", id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            this.props.children));
    };
    Cloth14.optionValue = 'Cloth14';
    return Cloth14;
}(React.Component));
exports.default = Cloth14;
