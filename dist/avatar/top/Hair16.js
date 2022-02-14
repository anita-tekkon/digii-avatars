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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var Hair16 = /** @class */ (function (_super) {
    __extends(Hair16, _super);
    function Hair16() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask5 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask6 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.path5 = (0, lodash_1.uniqueId)('react-path-');
        _this.path6 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    Hair16.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, mask5 = _a.mask5, mask6 = _a.mask6, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, path5 = _a.path5, path6 = _a.path6;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { id: path3, "data-name": "Path 3483", opacity: "0.8", d: "M422.14,52.923c8.288-2.849,1.935-19.955,10.664-17.16,3.413-4.685,3.947,2.433,6.693-2.869-3.432-3.485,2.526-4.855-3.187-7.49-12.677-7.5-16.631-6.841-29.067-4.5v.015c-12.4,2.331-4.379,13.94-9.978,19.623,2.746,5.3,4.4,5.833,7.809,10.518,9.652-3.089,5.681-.371,14.807,2.634C420.64,53.449,421.39,53.182,422.14,52.923Z", transform: "translate(-285 9)" }),
                React.createElement("path", { id: path2, "data-name": "Path 3482", opacity: "0.8", d: "M405.451,14.714s7.736,4.056.861,7.995a56.025,56.025,0,0,0-12.748,9.168c-4.731,4.533-13.247,13.632-6.372,21.8,12.76,15.153,35.7,7.242,44.622,0a44.083,44.083,0,0,0,0-5.826c-1.752-6.429-6.579-4.82-6-11.98.347-4.338,4.43-10.5-2.556-18.126C420.47,14.7,416.3,12.341,405.451,14.714Z", transform: "translate(-272 -8)" }),
                React.createElement("path", { id: path4, "data-name": "Path 3483", 
                    // opacity="0.8"
                    d: "M426.61,45.042c1.432,6.014,1.516,10.92-2.506,12.889,0,0,.32-.952.758-2.4,1.581-5.2.049-10.554-3.017-15.034-1.5-2.194-1.413-5.58,1.44-12.223,2.845-6.627-.255-11.244-5.53-13.521a13.928,13.928,0,0,0-13.6.929c5.881.171,8.322,4.654,5.39,7.5-3.287,3.192-13.015,5.588-17.125,15.738-4.986,12.325.309,21.17,6.266,27.146-4.045-1.733-5.344-2.731-7.378-5.416a26.573,26.573,0,0,1-4.94-15.182c-2.08,6.125-2.2,11.735.141,15.83,6.319,11.038,21.349,12.245,21.349,12.245C442.6,67.6,426.61,45.042,426.61,45.042Z", transform: "translate(-273-8)" }),
                React.createElement("path", { id: path5, "data-name": "Path 3483", 
                    // opacity="0.8"
                    d: "M400.208,55.311s-.232-4.1-4.483-9.812c-1.463-1.962-4.121-3.645-6.178-6.285-4.35-5.588-1.127-13.845,3.706-19.28,0,0-3.656,10.109-.141,16.683C395.619,41.309,405.072,43.637,400.208,55.311Z", transform: "translate(-266 7)" }),
                React.createElement("path", { id: path6, "data-name": "Path 3483", 
                    // opacity="0.8"
                    d: "M398.471,17.6s-13.8,11.232-5.115,22.2c6.4,8.09,5.725,16.664,2.285,19.764,0,0,15.917-6.2,2.255-21.055C391.939,32.038,396.608,22.474,398.471,17.6Z", transform: "translate(-257 0)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Hair16', mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Behind', strokeWidth: '1', fillRule: 'evenodd' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement(HairColor_1.default, { maskID: mask2 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement("mask", { id: mask3, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path3 })),
                        React.createElement("mask", { id: mask4, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path4 })),
                        React.createElement("mask", { id: mask5, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path5 })),
                        React.createElement("mask", { id: mask6, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path6 })),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path3 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path4 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path5 }),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path6 }),
                        React.createElement(HairColor_1.default, { maskID: mask3 }),
                        React.createElement(HairColor_1.default, { maskID: mask4 }),
                        React.createElement(HairColor_1.default, { maskID: mask5 }),
                        React.createElement(HairColor_1.default, { maskID: mask6 })),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    Hair16.optionValue = 'Hair16';
    return Hair16;
}(React.Component));
exports.default = Hair16;
