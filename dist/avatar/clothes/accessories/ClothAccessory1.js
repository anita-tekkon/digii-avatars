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
// import { uniqueId } from 'lodash'
// import Colors from './Colors'
var ClotheAccessory1 = /** @class */ (function (_super) {
    __extends(ClotheAccessory1, _super);
    function ClotheAccessory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClotheAccessory1.prototype.render = function () {
        return (React.createElement("g", { id: 'ClotheAccessory/ClotheAccessory1', transform: 'translate(101 200)' },
            React.createElement("path", { id: "Path_340", "data-name": "Path 340", d: "M337.116,295.71c-6.382-8.57-21.926,4.411-22.891,5.231a3.131,3.131,0,0,0-.528-.406c-1.416-.841-6.587,0-6.587,0s-.129.082-.327.236c-2.053-1.7-16.57-13.273-22.687-5.06-6.588,8.849-4.706,4.519-3.765,13.367s7.905,10.54,10.355,9.6c2.057-.792,12.213-6.251,15.392-8.744.838,1.434,1.788,1.613,4.232,1.613a6.46,6.46,0,0,0,4.446-1.925c2.647,2.316,13.622,8.229,15.774,9.056,2.447.941,9.41-.754,10.35-9.6S343.7,304.559,337.116,295.71Z", transform: "translate(-279.343 -292.795)", fill: "#181823" })));
    };
    ClotheAccessory1.optionValue = 'ClotheAccessory1';
    return ClotheAccessory1;
}(React.Component));
exports.default = ClotheAccessory1;
