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
var FacialHair3 = /** @class */ (function (_super) {
    __extends(FacialHair3, _super);
    function FacialHair3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair3.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair3', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M231.264,162.5a38.563,38.563,0,0,1-1.779-8.321,23.657,23.657,0,0,0-2.348-8.148,16.058,16.058,0,0,0-9.652-7.225,23.63,23.63,0,0,0-6.367-.873c-2.812-.022-6.714-.1-9,1.783a9.806,9.806,0,0,0-.942.887,9.8,9.8,0,0,0-.943-.887c-2.29-1.883-6.193-1.805-9-1.783a23.632,23.632,0,0,0-6.367.873,16.057,16.057,0,0,0-9.652,7.225,23.657,23.657,0,0,0-2.349,8.148,38.589,38.589,0,0,1-1.779,8.321,10.74,10.74,0,0,1-5.491,6.222c4.941.374,10.288.651,14.442-2.052,4.276-2.783,6.382-8.2,10.839-10.684,2.9-1.616,6.424-1.761,9.393-3.25a9.088,9.088,0,0,0,.911-.521,9.084,9.084,0,0,0,.911.521c2.969,1.489,6.491,1.633,9.393,3.25,4.457,2.483,6.563,7.9,10.84,10.684,4.153,2.7,9.5,2.426,14.442,2.052A10.74,10.74,0,0,1,231.264,162.5Z", transform: "translate(-144 -44)", id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    FacialHair3.optionValue = 'FacialHair3';
    return FacialHair3;
}(React.Component));
exports.default = FacialHair3;
