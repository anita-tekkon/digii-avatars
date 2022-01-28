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
var Eyebrow1 = /** @class */ (function (_super) {
    __extends(Eyebrow1, _super);
    function Eyebrow1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyebrow1.prototype.render = function () {
        return (React.createElement("g", { id: 'Eyebrow/Outline/Eyebrow1', fillOpacity: '0.599999964', fillRule: 'nonzero', transform: "translate(18,0)" },
            React.createElement("g", { id: "Group_12", "data-name": "Group 12", transform: "translate(1.649 1.544)" },
                React.createElement("g", { id: "Group_11", "data-name": "Group 11" },
                    React.createElement("path", { id: "Path_12", "data-name": "Path 12", d: "M80.94,91.37a3.3,3.3,0,0,0-3.289-3.358,1.4,1.4,0,0,0-.418.039h0S61.4,89.956,59.426,99.022c0,0,13.912-4.051,18.293-4.295h0A3.337,3.337,0,0,0,80.94,91.37Z", transform: "translate(-59.426 -88.012)", fill: "#35312d" }),
                    React.createElement("path", { id: "Path_13", "data-name": "Path 13", d: "M160.449,91.37a3.287,3.287,0,0,1,3.274-3.358,1.271,1.271,0,0,1,.4.039h0S179.96,89.96,181.93,99.026c0,0-13.912-4.051-18.293-4.295h0A3.31,3.31,0,0,1,160.449,91.37Z", transform: "translate(-111.265 -88.012)", fill: "#35312d" })))));
    };
    Eyebrow1.optionValue = 'Eyebrow1';
    return Eyebrow1;
}(React.Component));
exports.default = Eyebrow1;
