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
var Hair13 = /** @class */ (function (_super) {
    __extends(Hair13, _super);
    function Hair13() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    Hair13.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: "M422.025,173.821a82.216,82.216,0,0,1,13.811-2.319,130.274,130.274,0,0,1-6.669-36.728c-17.279.095-36.046.716-48.077,4.195-7.26,17.411-2.637,29.241,12.292,34.4C401.666,167.406,418.63,172.829,422.025,173.821Z", transform: "translate(-359 -136.755) scale(1.085)", id: path2 }),
                React.createElement("path", { d: "M415.109,184.42s-21.712-1.065-30.927-11.265c-5.589-6.18-8.1-17.21,5.028-30.033,14.887-14.547,38.543-14.558,55.477-5.839,22.769,11.727,35.713,31,41.211,32.394,1.41.027-1.626-2.02-2.758-2.107,0,0,7.59-2.058,9.605,7.1,1.86,8.473-5.824,16.691-23.364,12.125C449.92,181.722,448.336,169.127,415.109,184.42Z", transform: "translate(-354 -146.338) scale(1.085)", id: path3 }),
                React.createElement("path", { d: "M476.369,160c-6.862-3.187-12.588-8.185-19.37-11.519a35.425,35.425,0,0,1-14.66-13.637c-1.057-.03-2.114-.064-3.175-.068-24.675.129-52.525,1.288-59.338,10.352-14.175,18.862,2.857,62.453,2.857,62.453,7.741-1.891,8.359,8.01,6.483,11.72s1.921,15.183,1.921,15.183a80.65,80.65,0,0,0,2.834-21.223c.046-4.536,5.881-18.461,4.918-26.528-2.91-24.364,28.3-14.3,33.03-12.91,4.733-1.387,46.762-10.648,45.758,16.907-.3,8.12,6.729,17.995,6.779,22.53a80.789,80.789,0,0,0,2.83,21.223s3.8-11.474,1.925-15.183-1.258-13.611,6.479-11.72c0,0,7.9-22.383,5.237-41.34A73.693,73.693,0,0,1,476.369,160Z", transform: "translate(-369 -136.755) scale(1.085)", id: path4 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Hair13', mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Hair', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(25.000000, 10.000000)' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'Hair13-1!', fill: '#314756', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 }),
                        React.createElement("mask", { id: mask3, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path3 })),
                        React.createElement("use", { id: 'Hair13-2!', fill: '#314756', xlinkHref: '#' + path3 }),
                        React.createElement(HairColor_1.default, { maskID: mask3 }),
                        React.createElement("mask", { id: mask4, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path4 })),
                        React.createElement("use", { id: 'Hair13-3!', fill: '#314756', xlinkHref: '#' + path4 }),
                        React.createElement(HairColor_1.default, { maskID: mask4 })),
                    React.createElement("path", { d: "M410.823,146.549c12.576-1.982,24.683,8.469,36.414,18.59,9.617,8.294,18.556,15.566,27.278,15.861,9.458.322,9.458-6.464,9.458-6.464-10.31,7.321-21.966-1.171-34.5-11.985-11.743-10.136-25.077-21.625-39.18-19.378-17.256,2.743-17.9,13.417-17.68,16.623.33,4.96,3.009,9.48,5.968,13.031-4.119-2.058-8.632-5.119-11.2-9.458-3.236-5.464-3.482-14.228,6.464-20.939,24.917-16.8,48.342,3.812,59.6,13.721l1.3,1.137c8.275,7.222,17.654,15.407,23.838,16.578,1.8.341,3.766.068,4.8-1.735,1.728-2.993-1.709-6.089-1.709-6.089a4.5,4.5,0,0,1-.409,4.054,2.425,2.425,0,0,1-2.054.409c-5.267-1-15.066-9.549-22.22-15.793l-1.288-1.129c-10.973-9.655-36.668-32.265-63.772-13.986-11.159,7.525-11.8,18.237-7.5,25.516,5.055,8.545,19.723,14.243,24.186,15.589,0,0-3.91-11.2-3.482-17.047a7.345,7.345,0,0,1,2.895-5.619c2.13-1.523,5.24-1.815,8.992-.83,8.454,2.209,16.331,8.321,23.951,14.228,9.806,7.612,17.908,13.936,29.639,14.963,6.093.534,7.836-3.675,7.836-3.675-13.111,3.3-23.921-5.1-35.379-13.99-7.889-6.12-16.051-12.451-25.187-14.835-6.017-1.576-9.765-.129-11.845,1.357a10.722,10.722,0,0,0-4.316,8.15,25.041,25.041,0,0,0,1.584,9.53c-3.323-3.372-6.945-8.173-7.29-13.364C395.572,152.861,400.968,148.117,410.823,146.549Z", transform: "translate(-324 -132) scale(1.085)", id: 'Lights', fillOpacity: '0.35', fill: '#FFFFFF', fillRule: 'evenodd' }),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    Hair13.optionValue = 'Hair13';
    return Hair13;
}(React.Component));
exports.default = Hair13;
