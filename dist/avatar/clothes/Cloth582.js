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
var Cloth582 = /** @class */ (function (_super) {
    __extends(Cloth582, _super);
    function Cloth582() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth582.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Cloth582', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { id: path1, "data-name": "Shirt", d: "M420.344,203.985c-1.415-.972-37.184-10.726-55.777-18.159.027.094.05.194.08.29a18.215,18.215,0,0,1-3.914-9.446c-.02-.2-.025-.376-.045-.569L338.7,196.654,316.709,176.1c-.018.194-.025.374-.045.569a18.226,18.226,0,0,1-3.912,9.446c.027-.1.05-.2.08-.29-18.592,7.428-54.364,17.188-55.779,18.159-3.582,2.458-9.92,25.854-15.4,61.114H435.746C430.264,229.838,423.929,206.441,420.344,203.985Z", transform: "translate(-241 -180) scale(1.1)", fill: "#f6f6f6" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Cloth582', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("path", { "data-name": "Button-place", d: "M284.435,187.767,277.92,181.7V255.94h13.142V181.6Z", transform: "translate(-181 -170) sclae(1.1)", fill: "#fff" }),
            React.createElement("path", { "data-name": "Shirt-Collar", d: "M298.6,192.93,279.812,176.1c-.018.185-11.163,11.448-13.462,12.666,0,0,11.106,17.459,18.772,16.2C290.821,204.026,298.6,192.93,298.6,192.93Z", transform: "translate(-201 -180) scale(1.1)", fill: "#fff" }),
            React.createElement("path", { d: "M281.843,192.93l18.784-16.83c.017.185,11.163,11.448,13.462,12.666,0,0-11.106,17.459-18.772,16.2C289.619,204.026,281.843,192.93,281.843,192.93Z", transform: "translate(-174 -180) scale(1.1)", fill: "#fff" }),
            React.createElement("rect", { "data-name": "Rectangle 81", width: "32.314", height: "21.445", transform: "translate(162 84) scale(1.1)", fill: "#fff" }),
            React.createElement("rect", { "data-name": "Rectangle 82", width: "33.936", height: "6.007", transform: "translate(161 79) scale(1.1)", fill: "#fff" }),
            React.createElement("circle", { id: "Ellipse_49", "data-name": "Ellipse 49", cx: "2.366", cy: "2.366", r: "2.366", transform: "translate(129 42)", fill: "#2b2b2b" }),
            React.createElement("circle", { id: "Ellipse_50", "data-name": "Ellipse 50", cx: "2.366", cy: "2.366", r: "2.366", transform: "translate(129 72)", fill: "#2b2b2b" }),
            React.createElement("circle", { id: "Ellipse_51", "data-name": "Ellipse 51", cx: "2.366", cy: "2.366", r: "2.366", transform: "translate(129 102)", fill: "#2b2b2b" }),
            this.props.children));
    };
    Cloth582.optionValue = 'Cloth582';
    return Cloth582;
}(React.Component));
exports.default = Cloth582;
