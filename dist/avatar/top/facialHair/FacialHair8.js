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
var FacialHair8 = /** @class */ (function (_super) {
    __extends(FacialHair8, _super);
    function FacialHair8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair8.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1, mask2 = _a.mask2, path2 = _a.path2;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair8', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M458.012,84.848a18.706,18.706,0,0,0-1.349-5.211s-.965,26.243-7.526,36.276-13.894,15.437-17.56,20.261-14.084,14.472-14.858,12.929-4.244-3.666-5.4-4.246c-.869-.434-.073-4.182-1.13-5.919-.353-.578-1.428-.593-2.152-.641-.724.048-1.668.017-2.021.6-1.058,1.737-.39,5.532-1.259,5.965-1.157.58-4.629,2.7-5.4,4.246S388.163,141,384.5,136.173s-11-10.226-17.558-20.261-7.526-36.276-7.526-36.276a18.706,18.706,0,0,0-1.349,5.211c0,1.929,1.543,18.33,1.349,27.4a46.249,46.249,0,0,0,1.931,15.052l.578-3.28c.58,7.91,12.735,24.312,12.735,24.312l.386-2.7c3.282,7.912,16.017,21.032,24.12,25.47s8.875,6.754,8.875,6.754.773-2.315,8.877-6.754,20.838-17.558,24.118-25.47l.388,2.7s12.155-16.4,12.735-24.312l.578,3.28a46.249,46.249,0,0,0,1.931-15.052C456.469,103.178,458.012,86.777,458.012,84.848Z", id: path1, transform: "translate(-377 -21) scale(1.06)" }),
                React.createElement("path", { d: "M440.779,135.81s12.155-16.4,12.735-24.312l.578,3.28a46.249,46.249,0,0,0,1.931-15.052c-.04-1.9,0-4.127.079-6.47-1.927,18.126-13.42,34.072-13.42,34.072v-3.376s-9.938,20.251-20.708,23.637-14.543,7.581-14.543,7.581c-.821-2.5-6.282-4.969-15-8.954-17.717-8.1-18.485-24.4-18.485-24.4l-1.332,3.8S357.047,104.826,360.377,95l-1.595,2.459c.006.791,0,1.559-.012,2.269a46.25,46.25,0,0,0,1.931,15.052l.578-3.28c.58,7.91,12.735,24.312,12.735,24.312l.386-2.7c3.282,7.912,16.017,21.032,24.12,25.47s8.875,6.754,8.875,6.754.773-2.315,8.877-6.754,20.838-17.558,24.118-25.47Z", id: path2, transform: "translate(-377 -2) scale(1.06)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement(Colors_1.default, { maskID: mask2 })));
    };
    FacialHair8.optionValue = 'FacialHair8';
    return FacialHair8;
}(React.Component));
exports.default = FacialHair8;
