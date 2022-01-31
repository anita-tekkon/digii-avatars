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
var Sunglasses8 = /** @class */ (function (_super) {
    __extends(Sunglasses8, _super);
    function Sunglasses8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        return _this;
    }
    Sunglasses8.prototype.render = function () {
        var filter1 = this.filter1;
        return (React.createElement("g", { id: 'Top/_Resources/Sunglasses8', fill: 'none', transform: 'translate(62.000000, 85.000000)', strokeWidth: '1' },
            React.createElement("defs", null,
                React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("g", { id: 'Sunglasses8', filter: "url(#".concat(filter1, ")"), transform: 'translate(3.000000, 7.000000) scale(1.3)' },
                React.createElement("g", { id: "Group_asdf", "data-name": "Group asdf", transform: "translate(-113.621 -1437.935)" },
                    React.createElement("path", { id: "Path_2831", "data-name": "Path 2831", d: "M145.346,1442.368a105.957,105.957,0,0,0-18.6-.059,35.6,35.6,0,0,1-5.313.082,17.131,17.131,0,0,1-7.808-2.681,6.076,6.076,0,0,0,1.431,3.146q2.008,2.78,4.173,5.442a39.32,39.32,0,0,1-4.538-.93c3.823,4.587,5.985,10.5,10.377,14.542a23.273,23.273,0,0,0,12.7,5.565,38.915,38.915,0,0,0,14.022-.547c10.492-2.455,11.323-14.475,7.6-19.382C156.032,1443.126,148.716,1442.75,145.346,1442.368Z", transform: "translate(0 -1.514)", fill: "#dd4319" }),
                    React.createElement("path", { id: "Path_2832", "data-name": "Path 2832", d: "M196.234,1478.056a17.055,17.055,0,0,0,2.312,4.585c1.48,2.288,3.068,4.688,5.485,5.947,7.261,3.782,17.521,1.944,19.752.288A7.731,7.731,0,0,0,226,1486.2a15.267,15.267,0,0,0,1.662-8.146,7.069,7.069,0,0,0-.9-3.208c-1.212-1.958-3.657-2.708-5.909-3.183a64.473,64.473,0,0,0-13.336-1.387c-3.18,0-7.289-.356-9.922,1.842C195.882,1473.551,195.669,1476.025,196.234,1478.056Z", transform: "translate(-70.249 -27.578)", fill: "#2b2b2b" }),
                    React.createElement("path", { id: "Path_2833", "data-name": "Path 2833", d: "M257.886,1494.3a7.068,7.068,0,0,0-.9-3.208,5.416,5.416,0,0,0-1.9-1.8c.023.036.047.071.07.107a7.07,7.07,0,0,1,.9,3.208,15.268,15.268,0,0,1-1.662,8.146,7.732,7.732,0,0,1-2.215,2.674c-2.231,1.656-12.492,3.494-19.752-.288a8.433,8.433,0,0,1-1.044-.647,10.125,10.125,0,0,0,2.877,2.338c7.261,3.782,17.521,1.945,19.752.288a7.731,7.731,0,0,0,2.215-2.673A15.267,15.267,0,0,0,257.886,1494.3Z", transform: "translate(-100.474 -43.817)" }),
                    React.createElement("path", { id: "Path_2834", "data-name": "Path 2834", d: "M213.65,1484.987c.726-.2,1.035-1.025,1.362-1.7a6.635,6.635,0,0,1,5.532-3.667,4.272,4.272,0,0,0,2.557-.493.608.608,0,0,0,.268-.467c-.017-.353-.47-.478-.822-.506a23.423,23.423,0,0,0-5.6,0c-1.652.267-4.143,1.106-5.115,2.628C211.007,1482.067,211.567,1485.55,213.65,1484.987Z", transform: "translate(-83.483 -34.167)", fill: "#fff", opacity: "0.2" }),
                    React.createElement("path", { id: "Path_2835", "data-name": "Path 2835", d: "M513.357,1440.593a105.967,105.967,0,0,1,18.6-.059,35.6,35.6,0,0,0,5.313.083,17.134,17.134,0,0,0,7.808-2.681,6.075,6.075,0,0,1-1.431,3.146q-2.008,2.78-4.173,5.442a39.3,39.3,0,0,0,4.538-.93c-3.823,4.587-5.985,10.5-10.377,14.542a23.273,23.273,0,0,1-12.7,5.565,38.915,38.915,0,0,1-14.022-.547c-10.492-2.455-11.323-14.475-7.6-19.382C502.672,1441.351,509.987,1440.975,513.357,1440.593Z", transform: "translate(-327.362)", fill: "#dd4319" }),
                    React.createElement("path", { id: "Path_2836", "data-name": "Path 2836", d: "M555.677,1476.281a17.062,17.062,0,0,1-2.312,4.585c-1.479,2.288-3.068,4.688-5.485,5.947-7.261,3.782-17.521,1.944-19.752.288a7.73,7.73,0,0,1-2.215-2.673,15.27,15.27,0,0,1-1.662-8.146,7.071,7.071,0,0,1,.9-3.208c1.212-1.958,3.656-2.708,5.909-3.183a64.457,64.457,0,0,1,13.336-1.387c3.18,0,7.289-.356,9.923,1.842C556.029,1471.776,556.241,1474.25,555.677,1476.281Z", transform: "translate(-350.321 -26.063)", fill: "#2b2b2b" }),
                    React.createElement("path", { id: "Path_2837", "data-name": "Path 2837", d: "M524.25,1492.521a7.071,7.071,0,0,1,.9-3.208,5.414,5.414,0,0,1,1.9-1.8c-.023.036-.047.071-.07.107a7.069,7.069,0,0,0-.9,3.208,15.269,15.269,0,0,0,1.662,8.146,7.731,7.731,0,0,0,2.215,2.673c2.231,1.656,12.491,3.494,19.752-.288a8.466,8.466,0,0,0,1.044-.648,10.119,10.119,0,0,1-2.877,2.338c-7.261,3.782-17.521,1.944-19.752.288a7.732,7.732,0,0,1-2.215-2.674A15.269,15.269,0,0,1,524.25,1492.521Z", transform: "translate(-350.321 -42.303)" }),
                    React.createElement("path", { id: "Path_2838", "data-name": "Path 2838", d: "M653.631,1483.212c-.726-.2-1.035-1.024-1.362-1.7a6.635,6.635,0,0,0-5.532-3.667,4.272,4.272,0,0,1-2.557-.493.609.609,0,0,1-.267-.467c.017-.353.47-.478.822-.506a23.409,23.409,0,0,1,5.6,0c1.652.267,4.143,1.106,5.115,2.628C656.273,1480.291,655.714,1483.775,653.631,1483.212Z", transform: "translate(-452.456 -32.652)", fill: "#fff", opacity: "0.2" }),
                    React.createElement("path", { id: "Path_2839", "data-name": "Path 2839", d: "M415.764,1475.647c2.655-.033,5.451.413,7.532,2.063l1.748-3.356a2.021,2.021,0,0,0,.323-1.084c-.073-.781-.986-1.1-1.723-1.369a18,18,0,0,0-10.183-1.009c-1.813.358-4.175.946-5.575,2.153a11.631,11.631,0,0,0,.316,1.182.368.368,0,0,0,.066.224,15.973,15.973,0,0,0,1.293,2.011c.551.711,1.434,1.577,1.919.924A5.3,5.3,0,0,1,415.764,1475.647Z", transform: "translate(-251.068 -27.832)", fill: "#dd4319" })))));
    };
    Sunglasses8.optionValue = 'Sunglasses8';
    return Sunglasses8;
}(React.Component));
exports.default = Sunglasses8;
