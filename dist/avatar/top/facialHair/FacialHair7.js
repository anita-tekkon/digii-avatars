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
var FacialHair7 = /** @class */ (function (_super) {
    __extends(FacialHair7, _super);
    function FacialHair7() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair7.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair7', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M355.882,251.419v0c.221-3.945-.058-12.456,1.28-18.538.577-2.628-1.794-5.276-1.794-5.276s-2.951,29.959-3.765,31.11-1.278,4.264-1.161,5.648a8.534,8.534,0,0,1-1.743,4.575c-.58.54-1.626,6.374-3.6,6.6s-5.11,5.879-5.69,6.8a33.953,33.953,0,0,1-5.343,5.417c-.929.46-4.723,2.063-4.723,2.063s-.729-.344-.148-3.34-.58-12.446-3.02-14.405-5.692-3.342-9.874-4.611-6.5,1.037-9.176,1.037-4.994-2.305-9.176-1.037-7.433,2.65-9.873,4.611-3.6,11.407-3.02,14.405-.148,3.34-.148,3.34-3.81-1.6-4.739-2.063a33.876,33.876,0,0,1-5.343-5.417c-.58-.922-3.716-6.569-5.692-6.8s-3.02-6.063-3.6-6.6a8.533,8.533,0,0,1-1.743-4.575c.118-1.384-.347-4.493-1.161-5.648s-3.179-25.581-3.179-25.581-5.191-8.836-3.73-4.166c2.356,7.519,3.076,28.712,3.191,31.824.038,1,.3,3.217.687,5.871l0,0,.007.043c.094.646.2,1.319.3,2,1.134,8.362.318,13.781,4.484,21.356,4.5,8.18,6.182,7.808,8.618,12.454s3.935,3.718,6.931,7.063,9.368,7.435,12.74,11.153,12.017,3.16,14.438,3.9,8.6-1.115,11.975-3.532,3.935-3.16,6.932-4.274,5.432-6.507,8.43-7.065,5.808-7.249,8.055-8.922,5.611-5.117,6.37-9.48,5.75-12.434,5.808-18.957S356.891,255.709,355.882,251.419Zm-68.737,33.448c.465-3.8,1.045-7.145,3.718-7.836s3.833-3,6.157-2.536a74.044,74.044,0,0,0,20.21,0c2.323-.46,3.486,1.843,6.157,2.536s3.253,4.033,3.718,7.836a7.214,7.214,0,0,1-3.369,7.376c-1.859,1.037-2.788,4.264-4.414,5.07s-4.415,3.112-5.692,2.305-3.369.462-4.182-1.268.349-3.8.814-3.8,1.394-.806,2.9-1.728,1.045-1.615,1.045-1.615-3.253,1.268-4.065,1.037a9.281,9.281,0,0,0-3.021.346,9.268,9.268,0,0,0-3.02-.346c-.814.231-4.065-1.037-4.065-1.037s-.465.693,1.045,1.615,2.439,1.728,2.9,1.728,1.625,2.074.814,3.8-2.9.462-4.182,1.268-4.065-1.5-5.692-2.305-2.555-4.033-4.414-5.07A7.213,7.213,0,0,1,287.145,284.867Z", transform: "translate(-270 -187) scale(1.06)", id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    FacialHair7.optionValue = 'FacialHair7';
    return FacialHair7;
}(React.Component));
exports.default = FacialHair7;
