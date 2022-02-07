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
var Cloth608 = /** @class */ (function (_super) {
    __extends(Cloth608, _super);
    function Cloth608() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.path5 = (0, lodash_1.uniqueId)('react-path-');
        _this.path6 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask5 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask6 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth608.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, path5 = _a.path5, path6 = _a.path6, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, mask5 = _a.mask5, mask6 = _a.mask6;
        return (React.createElement("g", { id: 'Clothing/Cloth608', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("path", { id: "Shirt", d: "M332.416,69.156l-.027-.019a5.159,5.159,0,0,1-2.377-3.786c-.021-.2-.027-.387-.048-.587L305.24,80.171,280.515,64.764c-.018.2-.027.387-.048.587a5.155,5.155,0,0,1-2.377,3.786l-.029.019c-4.033,2.567-3.359,3.383-12.548,8.018V150.3h79.453V77.173C335.776,72.538,336.449,71.722,332.416,69.156Z", transform: "translate(-173 -43)", fill: "#f6f6f6" }),
            React.createElement("defs", null,
                React.createElement("path", { id: path1, "data-name": "Tie", d: "M290.264,83.983l-.085-.238,9.789-13.114H276l9.795,13.114-.087.238a94.319,94.319,0,0,0-5.026,22.6l-3.034,31.657h20.686L295.3,106.586A94.067,94.067,0,0,0,290.264,83.983Z", transform: "translate(-190 -43)" }),
                React.createElement("path", { "data-name": "Shirt-Collar", id: path6, d: "M332.416,69.032l-.027-.018a5,5,0,0,1-2.377-3.679c-.021-.19-.027-.376-.048-.571L305.24,79.737,280.515,64.764c-.018.19-.027.376-.048.571a5,5,0,0,1-2.377,3.679l-.029.018c-4.033,2.494-3.359,3.287-12.548,7.792v33.049L305.24,80.924l39.723,28.949V76.824C335.776,72.319,336.449,71.526,332.416,69.032Z", transform: "translate(-173 -43)", fill: "#fff" }),
                React.createElement("path", { id: path2, "data-name": "Left-coat", d: "M318.5,66.065c-11.688,7.428-56.612,18.208-58.388,19.409-4.036,2.725-13.008,20.268-18.811,62.691H342.4c-5.385-21.913-20.86-61.955-23.78-82.1Z", transform: "translate(-250 -51) scale(1.12)" }),
                React.createElement("path", { "data-name": "Right-coat", id: path3, d: "M363.823,85.474c-1.777-1.2-46.7-11.982-58.388-19.409h-.119c-2.918,20.145-18.4,60.187-23.78,82.1h101.1C376.833,105.742,367.859,88.2,363.823,85.474Z", transform: "translate(-184 -51) scale(1.12)" }),
                React.createElement("path", { "data-name": "left-collar", opacity: "0.9", d: "M287.667,66.065c-3.449,2.191-1.608,1.441-9.979,4.319l-13.833,38.609,10.637,9.761-14.444,5.308,15.6,24.1H311.56c-5.385-21.913-20.86-61.955-23.78-82.1Z", transform: "translate(-216 -51) scale(1.12)", id: path4 }),
                React.createElement("path", { "data-name": "Right-collar", opacity: "0.9", d: "M318.6,118.753l10.638-9.761L315.41,70.383c-8.368-2.877-6.53-2.128-9.976-4.318h-.119c-2.918,20.145-18.4,60.187-23.78,82.1h35.914l15.6-24.1Z", transform: "translate(-185 -51) scale(1.12)", id: path5 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("mask", { id: mask6, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path6 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("mask", { id: mask3, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("mask", { id: mask4, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path4 })),
            React.createElement("mask", { id: mask5, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path5 })),
            React.createElement("use", { id: 'Cloth608', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("use", { id: 'Cloth608', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path6 }),
            React.createElement("use", { id: 'Cloth608', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement("use", { id: 'Cloth608', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement("use", { id: 'Cloth608', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement("use", { id: 'Cloth608', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path5 }),
            React.createElement(Colors_1.default, { maskID: mask5 }),
            this.props.children));
    };
    Cloth608.optionValue = 'Cloth608';
    return Cloth608;
}(React.Component));
exports.default = Cloth608;
