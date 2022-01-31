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
var FacialHair4 = /** @class */ (function (_super) {
    __extends(FacialHair4, _super);
    function FacialHair4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair4.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair4', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M224.554,632.361a4.773,4.773,0,0,0-1.444-1.7,5.618,5.618,0,0,0-3.153-1.2,4.191,4.191,0,0,0-3.117,1.168,3.354,3.354,0,0,0-.895,3.148,1.953,1.953,0,0,0,.763,1.152,3.018,3.018,0,0,0,2.59.729,1.664,1.664,0,0,0,1.475-1.648.86.86,0,0,0-.644-.975,1.32,1.32,0,0,1-2.4.976,1.909,1.909,0,0,1-.26-.738,1.786,1.786,0,0,1,.025-.807,1.884,1.884,0,0,1,2.1-1.022,3.7,3.7,0,0,1,2.835,5.412c-.164.218-.309.442-.443.619a2.837,2.837,0,0,1-2.008,1.164c-4.983.924-9.994-1.106-14.607-3.2s-9.453-4.36-14.5-3.922a4.252,4.252,0,0,0-2.27.718,4.274,4.274,0,0,0-2.256-.708c-5.048-.44-9.889,1.821-14.5,3.917s-9.626,4.124-14.609,3.2a2.837,2.837,0,0,1-2.007-1.165c-.133-.176-.279-.4-.443-.619a3.7,3.7,0,0,1,2.837-5.411,1.884,1.884,0,0,1,2.1,1.022,1.785,1.785,0,0,1,.025.807,1.9,1.9,0,0,1-.26.738,1.32,1.32,0,0,1-2.4-.977.86.86,0,0,0-.645.975,1.664,1.664,0,0,0,1.474,1.649,3.017,3.017,0,0,0,2.59-.728,1.952,1.952,0,0,0,.764-1.152,3.354,3.354,0,0,0-.893-3.148,4.191,4.191,0,0,0-3.116-1.17,5.617,5.617,0,0,0-3.153,1.2,4.774,4.774,0,0,0-1.445,1.695,6.205,6.205,0,0,0-.441,2.9,8.08,8.08,0,0,0,.519,2.838,4.631,4.631,0,0,0,2.655,2.592,16.474,16.474,0,0,0,9.288.493c10-2.16,13.065-4.618,22.412-5.783a4.413,4.413,0,0,0,1.525-.387,4.485,4.485,0,0,0,1.5.377c9.347,1.169,12.41,3.627,22.41,5.791a16.473,16.473,0,0,0,9.288-.489,4.632,4.632,0,0,0,2.656-2.591,8.087,8.087,0,0,0,.52-2.839A6.206,6.206,0,0,0,224.554,632.361Z", transform: "translate(-133 -534)", id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    FacialHair4.optionValue = 'FacialHair4';
    return FacialHair4;
}(React.Component));
exports.default = FacialHair4;
