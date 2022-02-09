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
var Cloth575 = /** @class */ (function (_super) {
    __extends(Cloth575, _super);
    function Cloth575() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.path5 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask5 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth575.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, path5 = _a.path5, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, mask5 = _a.mask5;
        return (React.createElement("g", { id: 'Clothing/Cloth575', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { opacity: "0.8", id: "Shirt", d: "M437.174,177.494c-.02-.207-.028-.4-.045-.609L415,197.426l-.027-.037v-.02l-.008.008-.007-.008v.02l-.027.037L392.8,176.885c-.017.205-.025.4-.045.609-.163,1.641-5.346,14-16.185,16.579v76.263h76.793V194.072C442.52,191.49,437.336,179.135,437.174,177.494Z", transform: "translate(-332 -187) scale(1.12)", fill: "#f6f6f6" }),
            React.createElement("defs", null,
                React.createElement("path", { id: path1, "data-name": "Tie", d: "M403.8,199.1l-.092-.263,10.823-14.5H387.179L398,198.834l-.1.263c-2.872,8.07-4.735,50.71-5.556,59.241l-.052.751h17.109l-.052-.751C408.539,249.809,406.672,207.167,403.8,199.1Z", transform: "translate(-268 -150)" }),
                React.createElement("path", { id: path2, "data-name": "Left-coat", d: "M426.852,229.3c.28-13.263-1.756-26.2-4.208-39.09a45.907,45.907,0,0,1-6.44-9.079c-19.257,7.423-46.49,15.581-47.721,16.5-3.573,2.669-9.892,28.06-15.359,66.329h87.5c-1.806-6.769-3.708-14.22-5.557-21.974C430.444,240.641,426.7,236.468,426.852,229.3Z", transform: "translate(-320 -155)" }),
                React.createElement("path", { "data-name": "Right-coat", id: path3, d: "M467.868,197.629c-1.231-.918-28.464-9.075-47.721-16.5a46.014,46.014,0,0,1-6.44,9.079c-2.452,12.889-4.488,25.828-4.211,39.09.153,7.173-3.593,11.343-8.211,12.681-1.849,7.759-3.753,15.211-5.557,21.974h87.5C477.76,225.69,471.441,200.3,467.868,197.629Z", transform: "translate(-252 -155)" }),
                React.createElement("path", { "data-name": "left-collar", opacity: "0.9", d: "M384.408,182.91l-7.758,28.446,7.758,5.231-11.154,8.555,23.35,39.985h16.167c-6.8-30.062-18.141-71.893-20.9-84.772Z", transform: "translate(-291 -156)", id: path4 }),
                React.createElement("path", { "data-name": "Right-collar", opacity: "0.9", d: "M423.139,216.585l7.756-5.231-7.756-28.446-7.461-2.556c-2.762,12.88-14.108,54.711-20.9,84.772h16.167l23.348-39.986Z", transform: "translate(-252 -156)", id: path5 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("mask", { id: mask5, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path5 })),
            React.createElement("use", { id: 'Cloth575', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth575', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth575', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("use", { id: 'Cloth575', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement("use", { id: 'Cloth575', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path5 }),
            React.createElement(Colors_1.default, { maskID: mask5 }),
            React.createElement("path", { id: "Shirt-Collar", "data-name": "Path 3425", d: "M437.443,186.435c-1.924-2.039-6.322-9.367-6.34-9.55l-22.112,18.191L386.88,176.885c-.02.183-4.416,7.511-6.34,9.55l15.006,22.907L408.992,196l13.445,13.345Z", transform: "translate(-325 -186) scale(1.12)", fill: "#fff" }),
            this.props.children));
    };
    Cloth575.optionValue = 'Cloth575';
    return Cloth575;
}(React.Component));
exports.default = Cloth575;
