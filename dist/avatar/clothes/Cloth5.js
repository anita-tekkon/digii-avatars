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
var Cloth5 = /** @class */ (function (_super) {
    __extends(Cloth5, _super);
    function Cloth5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth5.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4;
        return (React.createElement("g", { id: 'Clothing/Cloth5', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Shirt", d: "M439.258,367.786c-5.537-39.287-14.1-55.533-17.949-58.06-1.7-1.112-45.993-14.819-57.144-21.7l-.285.444c-3.336,22.341-24.039,40.98-24.056,40.94,0,0-18.872-23.97-22.2-46.308l-4.194,6.351a31.318,31.318,0,0,1-6.967,3.678c-18.487,7.061-46.618,15.67-48.026,16.591-3.852,2.526-12.412,18.772-17.949,58.06Z", transform: "translate(-250 -300) scale(1.12)", fill: "#f6f6f6" }),
            React.createElement("defs", null,
                React.createElement("path", { id: path2, d: "M296.21,329.275c-.687-1.442-18.909-24.52-22.143-46.169l-4.192,6.351c-.127.077,5.45,24.786,26.335,40.794Z", transform: "translate(-200 -300) scale(1.12)" }),
                React.createElement("path", { d: 'M328.881,361.8V323.426c-17.837-6.907-33.837-18.783-33.3-36.279-17.934,6.805-44.238,15.05-47.755,16.467,4.363,10.185,16.705,39.779,20.957,58.184Z', transform: "translate(-236 -293) scale(1.12)", id: path1 }),
                React.createElement("path", { opacity: "0.9", id: path3, d: "M280.518,329.6c.687-1.442,18.765-25.057,22-46.705l4.194,6.351c.127.077-5.306,25.322-26.191,41.33Z", transform: "translate(-182 -300) scale(1.12)" }),
                React.createElement("path", { opacity: "0.9", d: "M341.3,362.291c4.251-18.405,16.594-48,20.956-58.184-3.517-1.417-29.963-10.488-47.9-17.293.536,17.494-16.462,30.2-34.3,37.106v38.371Z", transform: "translate(-184 -293) scale(1.12)", id: path4 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("use", { id: 'Cloth5', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement("path", { id: "Path_3381", "data-name": "Path 3381", d: "M288.876,306.33a3.542,3.542,0,1,1-3.542-3.542A3.542,3.542,0,0,1,288.876,306.33Z", transform: "translate(-202 -287) scale(1.2)", fill: "#f6f6f6" }),
            React.createElement("path", { id: "Path_3382", "data-name": "Path 3382", d: "M288.876,317.084a3.542,3.542,0,1,1-3.542-3.542A3.542,3.542,0,0,1,288.876,317.084Z", transform: "translate(-202 -283) sclae(1.2)", fill: "#f6f6f6" }),
            this.props.children));
    };
    Cloth5.optionValue = 'Cloth5';
    return Cloth5;
}(React.Component));
exports.default = Cloth5;
