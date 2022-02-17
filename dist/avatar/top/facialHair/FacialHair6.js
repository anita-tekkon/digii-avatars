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
var FacialHair6 = /** @class */ (function (_super) {
    __extends(FacialHair6, _super);
    function FacialHair6() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask3 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask4 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask5 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask6 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        _this.path4 = (0, lodash_1.uniqueId)('react-path-');
        _this.path5 = (0, lodash_1.uniqueId)('react-path-');
        _this.path6 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    FacialHair6.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1, mask2 = _a.mask2, path2 = _a.path2, mask3 = _a.mask3, path3 = _a.path3, mask4 = _a.mask4, path4 = _a.path4, mask5 = _a.mask5, path5 = _a.path5, mask6 = _a.mask6, path6 = _a.path6;
        return (React.createElement("g", { id: 'Facial-Hair/FacialHair6', transform: 'translate(78.000000, 42.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: "M2858.614,209.144c-1.375,5.733-.153,11.264,1.916,16.785a2.553,2.553,0,0,1,.2-1.571c1.278,4.431,2.729,9.206,7.438,13.039-.062-.326-.331-2.1-.392-2.426,3.761,5.673,7.455,4.391,8.635,8.649.263-.5,1.536-1.98,1.572-2.542a8.461,8.461,0,0,1,2.434,4.22,8.968,8.968,0,0,0,2.75-4.353l.313,1.689a20.193,20.193,0,0,0,5.14-4.9,8.207,8.207,0,0,1,.377,2.435,10.236,10.236,0,0,0,2.92-3.536c2.633-4.4,5.333-9.008,5.736-14.12a22.145,22.145,0,0,1-.2,4.614c2.837-3.636,3.41-8.666,2.55-13.015s-2.762-8.413-4.649-12.426l-.526.142a57.08,57.08,0,0,1-.394,12.061c-.425,3.05-1.146,6.173-3,8.629s-4.342,4.265-7.509,3.659c-1.918-.367-2.373-3.341-2.373-3.341s-2.706-.083-4.036.044c-.843,2.306-2.63,3.745-4.639,3.216-4.592-1.209-8.08-5.179-9.792-9.608-1.8-4.666-1.2-9.6-.486-13.932a10.363,10.363,0,0,0-1.1-.052A36.012,36.012,0,0,0,2858.614,209.144Z", transform: "translate(-2824 -98)", id: path1 }),
                React.createElement("path", { d: "M2900,265.072a39.046,39.046,0,0,0-2.477-7.644c-.175.378.489,2,.584,2.392a27.618,27.618,0,0,1,.773,5.693,27.34,27.34,0,0,1-.553,6.4q-.13-1.11-.26-2.22a29.689,29.689,0,0,1-8.133,15.478l.461-.889-1.675,2.238a10.884,10.884,0,0,0,.647-2.584,21.493,21.493,0,0,1-7.654,7.025,18.026,18.026,0,0,0,.371-4.622,7.967,7.967,0,0,1-2.024,2.739,8.094,8.094,0,0,1-3.169-2.616,6.679,6.679,0,0,0,.313,2.952,21.119,21.119,0,0,1-11.757-9.014q.349,1.519.831,3a42.159,42.159,0,0,1-5.466-15.666,24.724,24.724,0,0,0-.24,4.1,34.043,34.043,0,0,1-1.587-6.17,12.105,12.105,0,0,0,.039,2.561q-.544-2.841-.84-5.722c-.583,4.88.57,9.631,2.347,14.375a2.56,2.56,0,0,1,.2-1.571c1.279,4.431,2.729,9.206,7.438,13.039-.061-.326-.33-2.1-.392-2.426,3.761,5.673,7.455,4.391,8.635,8.649.262-.5,1.535-1.98,1.572-2.542a8.46,8.46,0,0,1,2.434,4.22,8.971,8.971,0,0,0,2.75-4.353l.313,1.689a20.191,20.191,0,0,0,5.139-4.9,8.207,8.207,0,0,1,.377,2.435,10.24,10.24,0,0,0,2.92-3.536c2.633-4.4,5.333-9.008,5.736-14.12a22.162,22.162,0,0,1-.2,4.614C2900.283,274.451,2900.856,269.422,2900,265.072Z", transform: "translate(-2824 -145)", id: path2 }),
                React.createElement("path", { opacity: "0.13", d: "M2978.527,464.288a21.776,21.776,0,0,0,3.285,3.1q-.014-.563-.028-1.125a1.109,1.109,0,0,0,.611.457l.126-.58a14.617,14.617,0,0,0,3.712,4.019,15.068,15.068,0,0,1,1.458-5.958,12.012,12.012,0,0,0,1.682,5.342,13.821,13.821,0,0,1,.615-2.02,4.806,4.806,0,0,0,.346,1.532,6.2,6.2,0,0,0,1.162-3.568,43.581,43.581,0,0,1,1.158,5.983,32.9,32.9,0,0,0,3.662-4.808q-.152,1.259-.3,2.517l1.428-1.923a6.512,6.512,0,0,0,.038,2.24,13.657,13.657,0,0,0,6.43-7.063,11.981,11.981,0,0,1-1.148,3.338,6.163,6.163,0,0,0,1.761-2.776,11.854,11.854,0,0,1-2.541,3.9,62,62,0,0,1-8.224,7.772,22,22,0,0,0,1.661-2.858l-1.693,1.463q.015-.345.031-.691a7.326,7.326,0,0,1-.879.983,4.079,4.079,0,0,1,.047-1.651,5.173,5.173,0,0,1-1.745,1.944,24.409,24.409,0,0,0-.556-3.2,21.741,21.741,0,0,0-.746,3.812,9.079,9.079,0,0,1-1.654-3.2,3.634,3.634,0,0,0,.089,2.128,8.206,8.206,0,0,0-2.676-2.057,4.48,4.48,0,0,0,.43,3.17,60.065,60.065,0,0,1-4.94-5.1,9.274,9.274,0,0,0,1.426,3.128c-.955-1.3-1.89-2.672-2.756-4.017a8.01,8.01,0,0,1-.943-2.06C2978.722,466.017,2978.769,464.569,2978.527,464.288Z", transform: "translate(-2824 -92)", id: path3 }),
                React.createElement("path", { opacity: "0.13", d: "M2892.152,333.236q-.214-.737-.429-1.475a.357.357,0,0,1,.011-.322c.07-.087.261-.022.216.08q-.094-.4-.188-.792a20.559,20.559,0,0,0,2.718,3.85,43.686,43.686,0,0,1-2.982-6.626,3.523,3.523,0,0,0,0,1.3l-1.735-3.456q.048.216.1.432a30.918,30.918,0,0,1-3.6-9.693,49.774,49.774,0,0,0,2.073,8.352A66.864,66.864,0,0,0,2892.152,333.236Z", transform: "translate(-2824 -92)", id: path4 }),
                React.createElement("path", { opacity: "0.13", d: "M3236.569,289.732a10.471,10.471,0,0,1-.219,2.724,6.29,6.29,0,0,0,1.051-1.819q.018.4.036.8a20.459,20.459,0,0,0,1.744-10.127,6.242,6.242,0,0,1-.229,2.265,15.135,15.135,0,0,0-1.336-7.051,30.628,30.628,0,0,1-.72,10.225q.1-.763.2-1.527a29.088,29.088,0,0,1-.859,3.311q.03-.481.06-.963a19.753,19.753,0,0,1-4.191,8.013,9.067,9.067,0,0,0,2.1-2.27c.4-.573.83-1.122,1.218-1.7C3235.681,291.228,3236.593,290.192,3236.569,289.732Z", transform: "translate(-2824 -92)", id: path5 }),
                React.createElement("path", { d: "M2926.388,113.853l1.8.139a23.64,23.64,0,0,0-8.744-4.161c-3.468-1-7.3-.13-8.638,1.018a11.44,11.44,0,0,0-8.217-.706,23.632,23.632,0,0,0-8.739,4.17l1.8-.141-.42.62a9.614,9.614,0,0,0,2.852-.363,6.492,6.492,0,0,1-1.664,2.514c1.947-.588,4.154-.819,5.871-1.857l-.424,1.047,1.458-.525-.887,1.316,5.747-1.018a6.12,6.12,0,0,0,2.731-.948,2.556,2.556,0,0,0,.283-.256,6.308,6.308,0,0,0,2.668.9l5.748,1.011-.888-1.315,1.459.524-.426-1.046c1.718,1.036,3.926,1.265,5.874,1.85a6.487,6.487,0,0,1-1.667-2.512,9.614,9.614,0,0,0,2.852.36Z", transform: "translate(-2856 -11)", id: path6 })),
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
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path3 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path4 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path5 }),
            React.createElement("use", { id: 'Beardness', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path6 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement(Colors_1.default, { maskID: mask2 }),
            React.createElement(Colors_1.default, { maskID: mask3 }),
            React.createElement(Colors_1.default, { maskID: mask4 }),
            React.createElement(Colors_1.default, { maskID: mask5 }),
            React.createElement(Colors_1.default, { maskID: mask6 })));
    };
    FacialHair6.optionValue = 'FacialHair6';
    return FacialHair6;
}(React.Component));
exports.default = FacialHair6;
