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
var Cloth33 = /** @class */ (function (_super) {
    __extends(Cloth33, _super);
    function Cloth33() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth33.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, mask1 = _a.mask1, mask2 = _a.mask2;
        return (React.createElement("g", { id: 'Clothing/Cloth33', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Shirt", d: "M3253.239,1047.218H3148.671l3.295-51.836,94.122.435Z", transform: "translate(-3068 -939)", fill: "#ec5045" }),
            React.createElement("defs", null,
                React.createElement("path", { id: path1, "data-name": "Right-Sleeve", d: "M3388.114,1014.233h-64.683l.286-75.9a37.111,37.111,0,0,0,5.737.565C3343.478,939.271,3389.595,937.875,3388.114,1014.233Z", transform: "translate(-3194 -919) scale(1.01)" }),
                React.createElement("path", { "data-name": "Left-Sleeve", d: "M3112,1015.12h-62.976c-1.484-76.487,38.268-73.644,56.277-74.962.859-.426,5.955-.318,6.693-.753Z", transform: "translate(-3042 -920) scale(1.01)", id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Cloth33', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth33', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            this.props.children));
    };
    Cloth33.optionValue = 'Cloth33';
    return Cloth33;
}(React.Component));
exports.default = Cloth33;
