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
var Sunglasses6 = /** @class */ (function (_super) {
    __extends(Sunglasses6, _super);
    function Sunglasses6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        return _this;
    }
    Sunglasses6.prototype.render = function () {
        var filter1 = this.filter1;
        return (React.createElement("g", { id: 'Top/_Resources/Sunglasses6', fill: 'none', transform: 'translate(62.000000, 85.000000)', strokeWidth: '1' },
            React.createElement("defs", null,
                React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("g", { id: 'Sunglasses6', filter: "url(#".concat(filter1, ")"), transform: 'translate(18.000000, -1.000000) scale(1.12)' },
                React.createElement("g", { id: "Group_431", "data-name": "Group 431", transform: "translate(-121.209 -757.247)" },
                    React.createElement("g", { id: "Group_428", "data-name": "Group 428", transform: "translate(121.209 757.247)" },
                        React.createElement("path", { id: "Path_2818", "data-name": "Path 2818", d: "M161.727,797.7l-11.518-2.861a2.551,2.551,0,0,0-2.305.566l-8.886,7.867a2.55,2.55,0,0,1-4.234-1.73l-.839-11.838a2.551,2.551,0,0,0-1.25-2.018l-10.227-6.02a2.55,2.55,0,0,1,.336-4.562l11-4.456a2.55,2.55,0,0,0,1.533-1.813l2.565-11.587a2.55,2.55,0,0,1,4.442-1.09l7.637,9.084a2.551,2.551,0,0,0,2.2.9L163.989,767a2.551,2.551,0,0,1,2.409,3.888l-6.28,10.07a2.551,2.551,0,0,0-.174,2.367l4.736,10.882A2.55,2.55,0,0,1,161.727,797.7Z", transform: "translate(-121.209 -757.247)", fill: "#e0ac1b" }),
                        React.createElement("path", { id: "Path_2819", "data-name": "Path 2819", d: "M183.029,820.759l-9.624-2.39a2.131,2.131,0,0,0-1.926.472l-7.425,6.573a2.131,2.131,0,0,1-3.538-1.445l-.7-9.892a2.131,2.131,0,0,0-1.045-1.686l-8.546-5.031a2.131,2.131,0,0,1,.281-3.812l9.191-3.723a2.131,2.131,0,0,0,1.281-1.515l2.143-9.682a2.131,2.131,0,0,1,3.712-.911l6.381,7.591a2.131,2.131,0,0,0,1.836.75l9.871-.953a2.131,2.131,0,0,1,2.013,3.249l-5.247,8.415a2.131,2.131,0,0,0-.146,1.978l3.957,9.093A2.131,2.131,0,0,1,183.029,820.759Z", transform: "translate(-145.386 -782.934)", fill: "#2b2b2b" }),
                        React.createElement("g", { id: "Group_427", "data-name": "Group 427", transform: "translate(3.753 12.37)" },
                            React.createElement("path", { id: "Path_2820", "data-name": "Path 2820", d: "M257.586,871.094,253.629,862a2.131,2.131,0,0,1,.146-1.978l5.247-8.414a2.134,2.134,0,0,0-.868-3.044,2.1,2.1,0,0,1-.322,1.261l-5.247,8.414a2.131,2.131,0,0,0-.146,1.978l3.957,9.093a2.131,2.131,0,0,1-2.468,2.919l-9.624-2.39a2.131,2.131,0,0,0-1.926.473l-7.425,6.573a2.111,2.111,0,0,1-2.35.318v.019a2.131,2.131,0,0,0,3.538,1.445l7.425-6.573a2.131,2.131,0,0,1,1.926-.472l9.624,2.39A2.131,2.131,0,0,0,257.586,871.094Z", transform: "translate(-221.267 -848.565)" }),
                            React.createElement("path", { id: "Path_2821", "data-name": "Path 2821", d: "M158.365,931.622a2.131,2.131,0,0,0-1.045-1.686l-8.4-4.946a2.1,2.1,0,0,0,1.046,1.7l8.4,4.946Z", transform: "translate(-148.918 -914.638)" })),
                        React.createElement("path", { id: "Path_2822", "data-name": "Path 2822", d: "M253.671,801.124a3.394,3.394,0,0,0-.312,1.914,19.157,19.157,0,0,1-.821,5.859c-.1.339-.195.762.066,1a.613.613,0,0,0,.729.014,1.413,1.413,0,0,0,.471-.615c.76-1.627.454-3.553.955-5.277a1.338,1.338,0,0,1,.547-.848,4.617,4.617,0,0,1,.561-.19C257.838,802.213,255.12,798.866,253.671,801.124Z", transform: "translate(-234.659 -794.514)", fill: "#fff", opacity: "0.2" }),
                        React.createElement("path", { id: "Path_2823", "data-name": "Path 2823", d: "M171.756,900.32a18.09,18.09,0,0,0,3.853-1.542.781.781,0,0,1,.549-.13.524.524,0,0,1,.215.765,1.384,1.384,0,0,1-.747.505c-1.908.711-4.107.911-5.6,2.294a3.264,3.264,0,0,1-.8.646c-1.049.481-2.267-.8-1.032-1.533A13.376,13.376,0,0,1,171.756,900.32Z", transform: "translate(-161.38 -879.482)", fill: "#fff", opacity: "0.2" })),
                    React.createElement("g", { id: "Group_430", "data-name": "Group 430", transform: "translate(170.329 759.465)" },
                        React.createElement("path", { id: "Path_2824", "data-name": "Path 2824", d: "M527.28,799.491l-10.7,5.124a2.55,2.55,0,0,0-1.418,1.9l-1.848,11.723a2.55,2.55,0,0,1-4.367,1.361l-8.181-8.6a2.55,2.55,0,0,0-2.248-.761l-11.72,1.865a2.55,2.55,0,0,1-2.644-3.733L489.8,797.94a2.551,2.551,0,0,0,.029-2.373L484.43,785a2.55,2.55,0,0,1,2.733-3.668l11.672,2.147a2.551,2.551,0,0,0,2.266-.706l8.386-8.4a2.55,2.55,0,0,1,4.333,1.466l1.565,11.764a2.55,2.55,0,0,0,1.372,1.937l10.578,5.38A2.55,2.55,0,0,1,527.28,799.491Z", transform: "translate(-483.835 -773.619)", fill: "#e0ac1b" }),
                        React.createElement("path", { id: "Path_2825", "data-name": "Path 2825", d: "M544.165,825.187l-8.945,4.281a2.131,2.131,0,0,0-1.185,1.59l-1.544,9.8a2.131,2.131,0,0,1-3.649,1.137l-6.836-7.184a2.131,2.131,0,0,0-1.879-.636l-9.793,1.559a2.131,2.131,0,0,1-2.209-3.119l4.72-8.721a2.131,2.131,0,0,0,.024-1.983l-4.508-8.832a2.131,2.131,0,0,1,2.284-3.065L520.4,811.8a2.131,2.131,0,0,0,1.894-.59L529.3,804.2a2.131,2.131,0,0,1,3.621,1.225l1.308,9.83a2.131,2.131,0,0,0,1.146,1.618l8.839,4.5A2.131,2.131,0,0,1,544.165,825.187Z", transform: "translate(-504.609 -799.512)", fill: "#2b2b2b" }),
                        React.createElement("g", { id: "Group_429", "data-name": "Group 429", transform: "translate(3.803 4.076)" },
                            React.createElement("path", { id: "Path_2826", "data-name": "Path 2826", d: "M677.759,821.508l-8.839-4.5a2.131,2.131,0,0,1-1.146-1.618l-1.308-9.83a2.134,2.134,0,0,0-2.607-1.8,2.1,2.1,0,0,1,.555,1.178l1.308,9.83a2.132,2.132,0,0,0,1.147,1.619l8.839,4.5a2.131,2.131,0,0,1-.046,3.822l-8.945,4.281a2.131,2.131,0,0,0-1.185,1.591l-1.544,9.8a2.111,2.111,0,0,1-1.61,1.741l.013.014A2.131,2.131,0,0,0,666.039,841l1.544-9.8a2.131,2.131,0,0,1,1.185-1.59l8.945-4.281A2.131,2.131,0,0,0,677.759,821.508Z", transform: "translate(-641.995 -803.713)" }),
                            React.createElement("path", { id: "Path_2827", "data-name": "Path 2827", d: "M523.416,1025.537a2.131,2.131,0,0,0-1.879-.635l-9.629,1.532a2.1,2.1,0,0,0,1.887.644l9.628-1.532Z", transform: "translate(-511.909 -994.917)" })),
                        React.createElement("path", { id: "Path_2828", "data-name": "Path 2828", d: "M522.985,862.16a3.394,3.394,0,0,0,.978,1.675,19.155,19.155,0,0,1,3.1,5.042c.136.327.335.712.689.731a.614.614,0,0,0,.571-.453,1.412,1.412,0,0,0-.028-.774c-.449-1.738-1.911-3.03-2.622-4.678a1.338,1.338,0,0,1-.117-1,4.6,4.6,0,0,1,.312-.5C526.892,860.348,522.666,859.5,522.985,862.16Z", transform: "translate(-517.667 -848.706)", fill: "#fff", opacity: "0.2" }),
                        React.createElement("path", { id: "Path_2829", "data-name": "Path 2829", d: "M526.78,968.238a18.092,18.092,0,0,0,1.991-3.642.78.78,0,0,1,.341-.45c.281-.124.608.15.653.453a1.384,1.384,0,0,1-.255.865c-1.019,1.763-2.588,3.317-2.861,5.334a3.27,3.27,0,0,1-.205,1.007c-.5,1.038-2.26.822-1.771-.525A13.366,13.366,0,0,1,526.78,968.238Z", transform: "translate(-519.068 -938.312)", fill: "#fff", opacity: "0.2" })),
                    React.createElement("path", { id: "Path_2830", "data-name": "Path 2830", d: "M401.971,924.048a16.6,16.6,0,0,1,6.4-.2,7.54,7.54,0,0,1,4.566,2.178l2.353-2.43a.7.7,0,0,0,.191-.274.652.652,0,0,0-.1-.475c-.952-1.787-4.417-2.872-6.683-3.177-4.933-.664-10.009.044-12.449,3.765-.017.027,1.3,1.618,1.419,1.732.411.409.535.6,1.056.38.443-.187.822-.647,1.29-.86A10.337,10.337,0,0,1,401.971,924.048Z", transform: "translate(-237.779 -140.227)", fill: "#e0ac1b" })))));
    };
    Sunglasses6.optionValue = 'Sunglasses6';
    return Sunglasses6;
}(React.Component));
exports.default = Sunglasses6;
