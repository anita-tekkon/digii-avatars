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
var SunglassesTest = /** @class */ (function (_super) {
    __extends(SunglassesTest, _super);
    function SunglassesTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        _this.filter2 = (0, lodash_1.uniqueId)('react-filter-');
        _this.path1 = (0, lodash_1.uniqueId)('react-filter-');
        _this.path2 = (0, lodash_1.uniqueId)('react-filter-');
        return _this;
    }
    SunglassesTest.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, path1 = _a.path1, path2 = _a.path2, filter2 = _a.filter2;
        return (React.createElement("g", { id: 'Top/_Resources/SunglassesTest', fill: 'none', transform: 'translate(-16.45, -1095)', strokeWidth: '1' },
            React.createElement("defs", null,
                React.createElement("filter", { x: '-0.8%', y: '-2.4%', width: '101.5%', height: '109.8%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' }))),
                React.createElement("filter", { x: '-0.8%', y: '-2.4%', width: '101.5%', height: '109.8%', filterUnits: 'objectBoundingBox', id: filter2 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("g", { id: "Glasses-".concat(path1, "}"), filter: "url(#".concat(filter1, ")"), fill: '#D6EAF2', transform: "translate(98.293 1183.321)" },
                React.createElement("path", { id: "Path_4", "data-name": "Path 4", d: "M155.44,1183.994c-7.094-2.542-14.092,2.942-14.092,2.942s-7-5.484-14.092-2.942-11.614,10.452-8.083,18.08,22.175,16.808,22.175,16.808,18.644-9.181,22.176-16.808S162.534,1186.536,155.44,1183.994Z", transform: "translate(-117.945 -1183.321)", fill: "#f06" }),
                React.createElement("path", { id: "Path_5", "data-name": "Path 5", d: "M171.7,1204.885c-6.149-2.051-12.215,2.372-12.215,2.372s-6.065-4.423-12.215-2.372-10.067,8.43-7.006,14.581,19.221,13.556,19.221,13.556,16.16-7.4,19.221-13.556S177.852,1206.935,171.7,1204.885Z", transform: "translate(-136.085 -1201.259)", fill: "#2b2b2b" }),
                React.createElement("path", { id: "Path_7", "data-name": "Path 7", d: "M161.112,1231.7a7.529,7.529,0,0,0,.213,3.6,2.848,2.848,0,0,0,.826,1.29,1.507,1.507,0,0,0,1.451.3c.788-.3,1.02-1.292,1.089-2.133a25.736,25.736,0,0,1,.3-3.04,4.8,4.8,0,0,1,1.382-2.667c.732-.652,1.754-.995,2.289-1.817a1.031,1.031,0,0,0,.2-.685c-.082-.594-.845-.794-1.444-.761A6.985,6.985,0,0,0,161.112,1231.7Z", transform: "translate(-154.679 -1219.552)", fill: "#fff", opacity: "0.18" })),
            React.createElement("g", { id: "Glasses-".concat(path2, "}"), filter: "url(#".concat(filter2, ")"), fill: '#D6EAF2', transform: "translate(154.819 1183.321)" },
                React.createElement("path", { id: "Path_8", "data-name": "Path 8", d: "M540.818,1183.994c-7.095-2.542-14.092,2.942-14.092,2.942s-7-5.484-14.092-2.942-11.614,10.452-8.083,18.08,22.176,16.808,22.176,16.808,18.644-9.181,22.176-16.808S547.913,1186.536,540.818,1183.994Z", transform: "translate(-503.323 -1183.321)", fill: "#f06" }),
                React.createElement("path", { id: "Path_9", "data-name": "Path 9", d: "M557.081,1204.885c-6.149-2.051-12.215,2.372-12.215,2.372s-6.065-4.423-12.215-2.372-10.067,8.43-7.006,14.581,19.221,13.556,19.221,13.556,16.16-7.4,19.221-13.556S563.23,1206.935,557.081,1204.885Z", transform: "translate(-521.464 -1201.259)", fill: "#2b2b2b" }),
                React.createElement("path", { id: "Path_11", "data-name": "Path 11", d: "M546.49,1231.7a7.533,7.533,0,0,0,.213,3.6,2.849,2.849,0,0,0,.826,1.29,1.507,1.507,0,0,0,1.451.3c.788-.3,1.02-1.292,1.089-2.133a25.755,25.755,0,0,1,.3-3.04,4.8,4.8,0,0,1,1.382-2.667c.732-.652,1.754-.995,2.289-1.817a1.032,1.032,0,0,0,.2-.685c-.082-.594-.845-.794-1.444-.761A6.985,6.985,0,0,0,546.49,1231.7Z", transform: "translate(-540.058 -1219.552)", fill: "#fff", opacity: "0.18" })),
            React.createElement("path", { id: "Path_12", "data-name": "Path 12", d: "M431.063,1246.152a1.413,1.413,0,0,1,.569.426,1.5,1.5,0,0,1,.191.676,44.261,44.261,0,0,1,.428,6.013,7.678,7.678,0,0,0-4.634-2.66,10.749,10.749,0,0,0-3.163.02c-2.355.318-4.793,1.208-6.177,3.139l-.476-3.094c-.139-.9-.509-2.363-.023-3.224.453-.8,1.836-1.29,2.639-1.618a13.3,13.3,0,0,1,6.932-.835A12.369,12.369,0,0,1,431.063,1246.152Z", transform: "translate(-275.298 -52.508)", fill: "#f06" }),
            React.createElement("path", { id: "Path_13", "data-name": "Path 13", d: "M95.094,1238.588c.135.236.362.405.516.629a2.423,2.423,0,0,1,.318.968l.7,3.933a4.942,4.942,0,0,0,.912,2.455,1.7,1.7,0,0,0,2.348.321,2.379,2.379,0,0,0,.455-1.9c-.1-1.544-.348-3.073-.489-4.613-.093-1.027,1.357-3.607.263-3.728C97.934,1236.407,94.035,1236.733,95.094,1238.588Z", transform: "translate(0 -45.446)", fill: "#f06" }),
            React.createElement("path", { id: "Path_14", "data-name": "Path 14", d: "M808.728,1238.588c-.135.236-.362.405-.516.629a2.426,2.426,0,0,0-.318.968l-.7,3.933a4.942,4.942,0,0,1-.912,2.455,1.7,1.7,0,0,1-2.348.321,2.38,2.38,0,0,1-.455-1.9c.1-1.544.349-3.073.489-4.613.093-1.027-1.357-3.607-.263-3.728C805.889,1236.407,809.787,1236.733,808.728,1238.588Z", transform: "translate(-604.476 -45.446)", fill: "#f06" })));
    };
    SunglassesTest.optionValue = 'SunglassesTest';
    return SunglassesTest;
}(React.Component));
exports.default = SunglassesTest;
