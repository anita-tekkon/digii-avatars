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
var Fringe = /** @class */ (function (_super) {
    __extends(Fringe, _super);
    function Fringe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    Fringe.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { id: path2, d: "M60.059,9.732l.143.106a4.643,4.643,0,0,0,.422.293,7.441,7.441,0,0,0,1.745.823,11.666,11.666,0,0,0,2.937.536,23.712,23.712,0,0,0,3.9-.145c1.421-.16,2.969-.461,4.57-.791,1.517-.465,3.241-1.062,5.025-1.425a33.978,33.978,0,0,1,5.586-.684,23.232,23.232,0,0,1,5.8.328,30.239,30.239,0,0,1,5.58,1.666c1.789.717,3.484,1.467,5.158,2.262a8.8,8.8,0,0,1,2.312,1.579l.123.125.071.075.054.062.214.245c.145.189.3.382.415.573a7.278,7.278,0,0,1,.621,1.188,18.217,18.217,0,0,1,1.07,4.662c.413,2.875.7,5.279.908,6.962.185,1.687.293,2.649.293,2.649l-.085.015s-.2-.951-.551-2.609c-.334-1.662-.81-4.037-1.317-6.9a20.32,20.32,0,0,0-1.149-4.423,6.978,6.978,0,0,0-.567-1.041c-.106-.172-.224-.316-.337-.472l-.212-.245-.054-.062-.042-.042-.1-.108a8.9,8.9,0,0,0-2.073-1.444c-1.583-.8-3.312-1.6-5.034-2.36a34.885,34.885,0,0,0-5.391-1.917,18.3,18.3,0,0,0-2.827-.478,26.266,26.266,0,0,0-2.861-.031,24.679,24.679,0,0,0-5.476.908c-1.755.478-3.309,1.161-4.971,1.67a33.053,33.053,0,0,1-4.674.762,18.566,18.566,0,0,1-4.016-.008,10.563,10.563,0,0,1-3.014-.756,7.344,7.344,0,0,1-1.72-1.016,5.035,5.035,0,0,1-.391-.347L60,9.8Z", transform: "translate(666.12 -751.185)" })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Long-but-not-too-long', mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Behind', strokeWidth: '1', fillRule: 'evenodd' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 })),
                    React.createElement("g", { id: 'Top', opacity: '0.439990942', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(50.000000, 18.000000)', fillOpacity: '0.159999996' },
                        React.createElement("path", { d: 'M11.8989604,84.7749122 C25.7109099,83.0145308 41.6792969,77.5379209 57.3415164,68.4953343 C69.4732686,61.4910638 79.8439791,53.2579416 87.8209384,44.752196 C84.3941075,52.6604321 80.2445133,59.5880409 75.3721558,65.5350224 C88.0473359,60.0120855 96.6778122,51.1324394 101.263585,38.8960843 C101.64142,39.8180234 102.034942,40.738913 102.444252,41.6582378 C114.38223,68.4713761 136.296003,86.1944823 157,88.1510343 L157,88.1510343 L157,74 C157,33.1309285 123.869071,-7.50752664e-15 83,0 C46.9151011,6.62868839e-15 16.8627142,25.8282542 10.3212729,60.0063288 C10.214595,60.0021202 10.1074956,60 10,60 C4.4771525,60 0,65.5964406 0,72.5 C0,78.9816827 3.9466744,84.3111215 8.99999442,84.9382803 L8.99999434,85.0927525 C9.31629342,85.0638362 9.63387297,85.0328725 9.95270131,84.9998631 C9.96845895,84.9999543 9.98422521,85 10,85 C10.6492988,85 11.2841443,84.9226474 11.8989604,84.7749122 Z', id: 'Combined-Shape', fill: '#FFFFFF' })),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    Fringe.optionValue = 'Fringe';
    return Fringe;
}(React.Component));
exports.default = Fringe;
