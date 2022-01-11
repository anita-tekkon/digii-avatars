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
var Prescription01 = /** @class */ (function (_super) {
    __extends(Prescription01, _super);
    function Prescription01() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        return _this;
    }
    Prescription01.prototype.render = function () {
        var filter1 = this.filter1;
        return (React.createElement("g", { id: 'Top/_Resources/BlackPrescription', fill: 'none', transform: 'translate(62.000000, 85.000000)', strokeWidth: '1' },
            React.createElement("defs", null,
                React.createElement("filter", { x: '-0.8%', y: '-2.4%', width: '101.5%', height: '109.8%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("g", { id: 'Glasses', filter: "url(#".concat(filter1, ")"), transform: 'translate(18.000000, 6.000000)', fill: '#D6EAF2' },
                React.createElement("path", { d: "M353.967,211.978s-5.163-.277-10.56-1.157c-5.479-.89-8.606-1.53-14.373-1.355s-6.475.536-8.959.715-11,2.5-13.128,2.861-5.593.53-5.593.53-3.458-.175-5.589-.53-10.644-2.685-13.13-2.861-3.191-.536-8.959-.715-8.892.465-14.372,1.355c-5.4.88-10.56,1.157-10.56,1.157s-1.685,4.876-1.241,5.764,2.663,1.777,3.816,3.372,1.952,6.208,2.306,8.425,2.838,8.961,4.613,10.648,6.654,4.79,15.35,4.26,13.394-2.221,16.675-6.212,6.123-7.451,7.985-16.322c0,0,.267-1.153,3.105-1.153s3.107,1.153,3.107,1.153c1.862,8.871,4.7,12.331,7.983,16.322s7.985,5.679,16.679,6.212,13.574-2.575,15.35-4.26,4.256-8.427,4.611-10.648,1.155-6.828,2.306-8.425,3.372-2.486,3.816-3.372S353.967,211.978,353.967,211.978Zm-100.709,3.641c-.75,0-2.435-.454-2.435-1.009s1.542-1.151,2.435-.986c0,0,1.779.086,1.779,1.021S254.014,215.619,253.258,215.619Zm41.18,7.712c-.713,4.081-2.661,10.293-6.567,14.375s-8.784,5.322-15.526,5.322-10.734-1.508-12.952-4.438c-1.08-1.42-6.921-14.106-2.838-21.113s21.646-5.324,21.646-5.324C294.348,213.751,295.145,219.254,294.438,223.331Zm48.879,15.259c-2.217,2.93-6.208,4.438-12.948,4.438s-11.622-1.243-15.528-5.322-5.854-10.293-6.565-14.375.088-9.58,16.235-11.178c0,0,17.569-1.685,21.646,5.324S344.4,237.17,343.317,238.59Zm6.137-22.971c-.754,0-1.777-.043-1.777-.974s1.777-1.021,1.777-1.021c.892-.165,2.439.43,2.439.986S350.206,215.619,349.454,215.619Z", transform: "translate(-247.429 -209.437)", id: 'Frame-Stuff' }))));
    };
    Prescription01.optionValue = 'BlackPrescription';
    return Prescription01;
}(React.Component));
exports.default = Prescription01;
