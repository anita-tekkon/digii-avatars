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
var Cloth31 = /** @class */ (function (_super) {
    __extends(Cloth31, _super);
    function Cloth31() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth31.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1, path2 = _a.path2, mask2 = _a.mask2;
        return (React.createElement("g", { id: 'Clothing/Cloth31', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Path_3870", "data-name": "Path 3870", d: "M2086.423,1000.446h-189.4c-1.27-52.434,28.726-67.063,50.411-74.793,5.091-1.815,9.723-3.25,13.386-4.7.909-.362,1.757-.723,2.538-1.091q.716-.339,1.353-.686c.209-.114.409-.23.6-.345.088-.052.174-.1.26-.159,8.082,5.883,29.24,17.5,53.95.917.956.477,2.027.94,3.193,1.4,1.952.771,4.177,1.539,6.6,2.362C2050.845,930.661,2087.83,942.344,2086.423,1000.446Z", fill: "#834a93", transform: "translate(-1960 -939) scale(1.05)" }),
            React.createElement("defs", null,
                React.createElement("path", { d: "M1947.438,932.562l43.449,75.7h-93.86C1895.757,955.191,1925.753,940.386,1947.438,932.562Z", transform: "translate(-1959 -949) scale(1.05)", id: path1 }),
                React.createElement("path", { d: "M2207.947,1005.68H2113.12l37.724-77.7C2172.368,935.348,2209.353,947.122,2207.947,1005.68Z", transform: "translate(-2085 -946) scale(1.05)", id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("path", { id: "Path_3872", "data-name": "Path 3872", d: "M1997.988,1055.19h-5.7c.832-7.423,2.353-20.208,2.959-20.359C1995.786,1034.695,1997.1,1046.5,1997.988,1055.19Z", transform: "translate(-1992.286 -1034.829)", fill: "#040505" }),
            React.createElement("path", { id: "Path_3874", "data-name": "Path 3874", d: "M2237.313,1055.847h5.7c-.833-7.422-2.354-20.208-2.96-20.359C2239.515,1035.352,2238.2,1047.159,2237.313,1055.847Z", transform: "translate(-2237.313 -1035.486)", fill: "#040505" }),
            this.props.children));
    };
    Cloth31.optionValue = 'Cloth31';
    return Cloth31;
}(React.Component));
exports.default = Cloth31;
