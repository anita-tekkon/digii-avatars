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
var Cloth22 = /** @class */ (function (_super) {
    __extends(Cloth22, _super);
    function Cloth22() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        return _this;
    }
    Cloth22.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Cloth22', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M942.946,498.422H745.029c-1.27-50.317,27.336-65.944,49.655-74q1.7-.612,3.339-1.169c5.2-1.771,9.923-3.181,13.674-4.613.949-.362,1.836-.726,2.652-1.1q.747-.339,1.414-.688.326-.172.631-.346c.044-.025.087-.049.13-.076,4.5,5.01,15.815,15.982,28.85,16.143h.039c8.171.09,17.014-4.073,25.273-16.616q.434.285.9.55l.163.091c.1.059.209.117.316.174a37.533,37.533,0,0,0,4.32,1.9c2.895,1.1,6.363,2.188,10.173,3.44,3.88,1.273,8.116,2.716,12.467,4.507C920.2,435.345,944.109,452.327,942.946,498.422Z", transform: "translate(-779 -425) scale(1.08)", id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("g", { id: "Group_681", "data-name": "Group 681", transform: "translate(788.58 477.325)", opacity: "0.12" },
                React.createElement("path", { id: "Path_3673", "data-name": "Path 3673", d: "M846.057,552.775H840.1c.87-7.69,2.459-20.938,3.092-21.1C843.756,531.539,845.127,543.773,846.057,552.775Z", transform: "translate(-840.099 -531.678)", fill: "#040505" })),
            React.createElement("g", { id: "Group_682", "data-name": "Group 682", transform: "translate(904.709 477.327)", opacity: "0.12" },
                React.createElement("path", { id: "Path_3674", "data-name": "Path 3674", d: "M1099.008,552.776h-5.537l1.885-21.1Z", transform: "translate(-1093.47 -531.681)", fill: "#040505" })),
            React.createElement("path", { id: "Path_3675", "data-name": "Path 3675", d: "M1054.45,449.772l0,0h0Z", transform: "translate(-847 -425) scale(1.08)", fill: "#77262b" }),
            React.createElement("path", { id: "Path_3688", "data-name": "Path 3688", d: "M908.05,431.4c-17.858,37.743-41.189,2.252-47.351-8.383,5.2-1.592,9.923-2.86,13.674-4.147.949-.325,1.836-.652,2.652-.985q.747-.305,1.414-.619.326-.155.631-.311c.044-.022.087-.044.13-.069C883.7,421.393,895.015,431.257,908.05,431.4Z", transform: "translate(-847 -425) scale(1.08)", fill: "#fff" }),
            React.createElement("path", { id: "Path_3689", "data-name": "Path 3689", d: "M1005.237,421.5c-2.5,8.724-9.266,26.658-22.622,26.573-16.979-.106-18.433-15.971-18.519-17.171,8.171.081,17.014-3.662,25.273-14.938q.434.256.9.494l.163.082c.1.053.209.105.316.156a39.794,39.794,0,0,0,4.32,1.711C997.958,419.392,1001.426,420.371,1005.237,421.5Z", transform: "translate(-907 -425) scale(1.08)", fill: "#fff" }),
            React.createElement("ellipse", { id: "Ellipse_62", "data-name": "Ellipse 62", cx: "6.031", cy: "5.98", rx: "6.031", ry: "5.98", transform: "translate(126 62) scale(1.08)", fill: "#fff" }),
            React.createElement("ellipse", { id: "Ellipse_63", "data-name": "Ellipse 63", cx: "6.031", cy: "5.98", rx: "6.031", ry: "5.98", transform: "translate(126 88) scale(1.08)", fill: "#fff" }),
            this.props.children));
    };
    Cloth22.optionValue = 'Cloth22';
    return Cloth22;
}(React.Component));
exports.default = Cloth22;
