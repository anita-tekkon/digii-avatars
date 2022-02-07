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
var Cloth7 = /** @class */ (function (_super) {
    __extends(Cloth7, _super);
    function Cloth7() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth7.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, mask1 = _a.mask1, mask2 = _a.mask2;
        return (React.createElement("g", { id: 'Clothing/Cloth7', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Shirt", d: "M542.333,333.171c-4.317-23.278-7.416-29.4-10.516-31.431-1.153-.754-30.241-7.165-49.169-13.324-6.665,6.025-15.891,7.875-32.7,7.929-16.81-.055-26.036-1.9-32.7-7.929-18.931,6.159-48.019,12.57-49.169,13.324-3.1,2.034-6.2,8.153-10.518,31.431-.695,3.754-4.145,19.954-4.633,27.243H546.969C546.478,353.125,543.03,336.925,542.333,333.171Z", transform: "translate(-408 -317) scale(1.2)", fill: "#f6f6f6" }),
            React.createElement("defs", null,
                React.createElement("path", { id: path1, d: "M542.39,333.171c-4.319-23.278-7.419-29.4-10.519-31.431-1.153-.754-30.241-7.165-49.169-13.324-.428,19.822-21.585,36-32.7,36l-.027,0h0l-.027,0c-11.113,0-32.27-16.18-32.7-36-18.928,6.159-48.016,12.57-49.167,13.324-3.1,2.034-6.2,8.153-10.518,31.431-.695,3.754-4.145,19.954-4.633,27.243H547.023C546.535,353.125,543.085,336.925,542.39,333.171Z", transform: "translate(-407 -317) scale(1.2)" }),
                React.createElement("path", { opacity: "0.7", d: "M485.894,333.171c-4.319-23.278-7.419-29.4-10.519-31.431-1.153-.754-30.241-7.165-49.169-13.324-.428,19.822-21.585,36-32.7,36l-.027,0h0l-.027,0a14.589,14.589,0,0,1-2.594-.279v36.276h99.668C490.039,353.125,486.588,336.925,485.894,333.171Z", transform: "translate(-339 -316) scale(1.2)", id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Cloth7', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth7', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("path", { id: "Path_3403", "data-name": "Path 3403", d: "M399.821,309.637h-5.626a1.065,1.065,0,0,1-1.108-1.016v-.9a1.065,1.065,0,0,1,1.108-1.016h5.626a1.067,1.067,0,0,1,1.108,1.016v.9A1.067,1.067,0,0,1,399.821,309.637Z", transform: "translate(-337 -272) scale(1.2)", fill: "#494e54" }),
            React.createElement("path", { id: "Path_3404", "data-name": "Path 3404", d: "M399.821,317.174h-5.626a1.063,1.063,0,0,1-1.108-1.013v-.9a1.063,1.063,0,0,1,1.108-1.013h5.626a1.065,1.065,0,0,1,1.108,1.013v.9A1.065,1.065,0,0,1,399.821,317.174Z", transform: "translate(-337 -294) scale(1.2)", fill: "#494e54" }),
            this.props.children));
    };
    Cloth7.optionValue = 'Cloth7';
    return Cloth7;
}(React.Component));
exports.default = Cloth7;
