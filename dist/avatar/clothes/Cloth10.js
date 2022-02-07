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
var Cloth10 = /** @class */ (function (_super) {
    __extends(Cloth10, _super);
    function Cloth10() {
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
    Cloth10.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4;
        return (React.createElement("g", { id: 'Clothing/Cloth10', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Shirt", d: "M317.632,204.111c-1.481-.972-38.911-10.728-58.366-18.161.031.1.055.193.084.29a17.8,17.8,0,0,1-4.093-9.448c-.021-.193-.029-.376-.047-.569L232.2,196.78l-23.009-20.557c-.018.193-.026.376-.047.569a17.8,17.8,0,0,1-4.093,9.448c.029-.1.052-.193.084-.29-19.457,7.434-56.885,17.19-58.366,18.161-3.748,2.458-10.38,25.856-16.116,61.121H333.748C328.012,229.968,321.38,206.569,317.632,204.111Z", transform: "translate(-128 -183) scale(1.12)", fill: "#f6f6f6" }),
            React.createElement("defs", null,
                React.createElement("path", { "data-name": "tie", id: path1, d: "M179.436,197.711l-.086-.24,9.834-13.17H164.877l9.834,13.17-.086.24a94.734,94.734,0,0,0-5.049,22.7l-3.048,31.8h21l-3.046-31.8a94.736,94.736,0,0,0-5.046-22.7Z", transform: "translate(-65 -169) scale(1.12)" }),
                React.createElement("path", { id: path4, "data-name": "collar", d: "M220.186,190.27c-2.406-1.275-8.152-11.94-8.322-13.478-.023-.193-.029-.376-.05-.569L188.863,196.6l-22.952-20.382c-.021.193-.026.376-.05.569-.172,1.538-5.919,12.2-8.324,13.478l19.172,22.1,12.154-14.235,12.154,14.235Z", transform: "translate(-79 -185) scale(1.12)", fill: "#fff" }),
                React.createElement("path", { "data-name": "left-coat", d: "M186.809,179.947c-11.54,4.978-30.072,9.837-44.788,14.068,2.69,14.559,8.437,46.922,9.913,65.214h53.7c-.05-.089-.118-.191-.165-.274C191.072,232.245,186.53,209.627,186.809,179.947Z", transform: "translate(-108 -176) scale(1.12)", id: path2 }),
                React.createElement("path", { "data-name": "right-coat", id: path3, d: "M191.51,179.947c.279,29.68-4.263,52.3-18.663,79.008-.044.084-.112.185-.162.274h53.7c1.476-18.292,7.222-50.655,9.91-65.214C221.582,189.784,203.05,184.925,191.51,179.947Z", transform: "translate(-50 -176) scale(1.12)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("use", { id: 'Cloth10', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth10', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement("use", { id: 'Cloth10', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth10', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("rect", { id: "Tie-pin", width: "13.437", height: "4.124", transform: "translate(122 98) scale(1.12)", fill: "#e9eaea" }),
            this.props.children));
    };
    Cloth10.optionValue = 'Cloth10';
    return Cloth10;
}(React.Component));
exports.default = Cloth10;
