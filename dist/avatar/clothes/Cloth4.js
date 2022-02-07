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
var Cloth4 = /** @class */ (function (_super) {
    __extends(Cloth4, _super);
    function Cloth4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth4.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, mask1 = _a.mask1, mask2 = _a.mask2;
        return (React.createElement("g", { id: 'Clothing/Cloth4', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { id: path1, d: "M439.258,367.786c-5.537-39.287-14.1-55.533-17.949-58.06-1.7-1.112-45.993-14.819-57.144-21.7l-.285.444c-3.336,22.341-24.039,40.98-24.056,40.94,0,0-18.872-23.97-22.2-46.308l-4.194,6.351a31.318,31.318,0,0,1-6.967,3.678c-18.487,7.061-46.618,15.67-48.026,16.591-3.852,2.526-12.412,18.772-17.949,58.06Z", transform: "translate(-209 -266) ", fill: "#f6f6f6" }),
                React.createElement("rect", { id: path2, width: "260", height: "20.726", transform: "translate(24 89)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Cloth4', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth4', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("path", { id: path3, d: "M55.168,473.566l-9.961-71.429-7.155,2.008,9.667,69.421Z", transform: "translate(38 -370) ", fill: "#000000" }),
            React.createElement("path", { d: "M78.8,473.566l9.667-69.421-7.155-2.008-9.961,71.429Z", transform: "translate(100 -370) ", id: path4, fill: "#000000" }),
            this.props.children));
    };
    Cloth4.optionValue = 'Cloth4';
    return Cloth4;
}(React.Component));
exports.default = Cloth4;
