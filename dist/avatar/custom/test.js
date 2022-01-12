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
var Colors_1 = require("../top/facialHair/Colors");
var CustomTest = /** @class */ (function (_super) {
    __extends(CustomTest, _super);
    function CustomTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask5 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask6 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask7 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.path5 = (0, lodash_1.uniqueId)('react-path-');
        _this.path6 = (0, lodash_1.uniqueId)('react-path-');
        _this.path7 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    CustomTest.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1, mask2 = _a.mask2, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, path5 = _a.path5, path6 = _a.path6, path7 = _a.path7, mask3 = _a.mask3, mask4 = _a.mask4, mask5 = _a.mask5, mask6 = _a.mask6, mask7 = _a.mask7;
        return (React.createElement("g", { id: 'Facial-Hair/Custom-Test', transform: 'translate(188.000000, 48.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { id: path1, d: "M62.659,31.1l1.022-12.353L63.7,18.5l-.2.112L53.336,24.355a9.374,9.374,0,0,1,3.341,2.126c-1.791,2.142-4.291,6.708-2.143,14.141a48.969,48.969,0,0,0,3.056,7.609c2.438,5.139,3.78,7.971-.126,12.84C51.544,68.447,41.021,68.7,40.914,68.7a1.231,1.231,0,0,0-.146.019V20.4a1.969,1.969,0,0,0-.15-.744,12.084,12.084,0,0,1,5.639.218L39,5.989l-.142-.273-.142.273L31.465,19.872a12.16,12.16,0,0,1,6.07-.127,1.944,1.944,0,0,0-.116.653V68.7c-.87-.031-10.8-.542-16.483-7.628-3.907-4.869-2.564-7.7-.126-12.84a48.881,48.881,0,0,0,3.056-7.609c2.149-7.433-.353-12-2.143-14.141a9.342,9.342,0,0,1,3.341-2.126L14.9,18.614l-.2-.112.019.242L15.741,31.1a9.626,9.626,0,0,1,3.713-2.823c1.29,1.447,3.583,5.1,1.749,11.447a46.358,46.358,0,0,1-2.877,7.131c-2.49,5.251-4.641,9.786.5,16.2,6.671,8.313,17.858,8.657,18.591,8.671v118c0,1,.75,3.207,1.674,3.207s1.675-1.955,1.675-2.956V71.7a1.128,1.128,0,0,0,.166.018h.018c.481-.006,11.868-.256,18.621-8.671,5.141-6.41,2.99-10.945.5-16.2A46.358,46.358,0,0,1,57.2,39.722c-1.834-6.351.458-10,1.747-11.447A9.629,9.629,0,0,1,62.659,31.1Z" }),
                React.createElement("path", { id: path2, d: "M15.557,20.439,16.286,30l2.735-2.013Z" }),
                React.createElement("path", { id: path3, d: "M22.583,35.658s.73,3.924-2.735,10.466-4.742,9.056-2.189,14.491a24.226,24.226,0,0,0,5.017,5.837s-5.017-4.931-5.291-9.762,2.282-8.554,4.012-11.774S23.678,38.073,22.583,35.658Z" }),
                React.createElement("path", { id: path4, d: "M40.736,7.774l-5.745,11.17,4.013-.1Z" }),
                React.createElement("path", { id: path5, d: "M40.934,20.542V183.2s-.365,5.584.456,6.289l.275-168.445Z" }),
                React.createElement("path", { id: path6, d: "M68.416,20.542l-.547,9.56-3.1-2.315Z" }),
                React.createElement("path", { id: path7, d: "M60.954,28.61s-3.738,2.113-3.191,8.755S65.6,51.654,63.872,58.4,50.739,70.876,44.813,71.178c0,0,16.322-1.007,19.789-13.284a10.963,10.963,0,0,0-.457-6.541c-1.369-3.421-5.664-10.814-5.381-15.9C59.129,28.912,60.954,28.61,60.954,28.61Z" })),
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
            React.createElement("mask", { id: mask6, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path6 })),
            React.createElement("mask", { id: mask7, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path7 })),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path5 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path6 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path7 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement(Colors_1.default, { maskID: mask5 }),
            React.createElement(Colors_1.default, { maskID: mask6 }),
            React.createElement(Colors_1.default, { maskID: mask7 })));
    };
    CustomTest.optionValue = 'CustomTest';
    return CustomTest;
}(React.Component));
exports.default = CustomTest;
