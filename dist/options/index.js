"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allOptions = exports.FaceMaskOption = exports.BackgroundOption = exports.JewelleryOption = exports.HairAccessoryOptionColor = exports.HairAccessoryOption = exports.ClotheAccessoryOption = exports.CustomAccessoryColor = exports.CustomOption = exports.SkinOption = exports.MouthOption = exports.EyebrowOption = exports.EyesOption = exports.GraphicOption = exports.ClotheColorOption = exports.ClotheOption = exports.FacialHairColor = exports.FacialHairOption = exports.HairColorOption = exports.HatColorOption = exports.AccessoriesOption = exports.TopOption = exports.Selector = exports.OptionContext = exports.Option = void 0;
var Option_1 = require("./Option");
var Option_2 = require("./Option");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return Option_2.default; } });
var OptionContext_1 = require("./OptionContext");
Object.defineProperty(exports, "OptionContext", { enumerable: true, get: function () { return OptionContext_1.default; } });
var Selector_1 = require("./Selector");
Object.defineProperty(exports, "Selector", { enumerable: true, get: function () { return Selector_1.default; } });
exports.TopOption = new Option_1.default({
    key: 'topType',
    label: 'Top',
});
exports.AccessoriesOption = new Option_1.default({
    key: 'accessoriesType',
    label: '↳ 👓 Accessories',
});
exports.HatColorOption = new Option_1.default({
    key: 'hatColor',
    label: '🎨 HatColor',
});
exports.HairColorOption = new Option_1.default({
    key: 'hairColor',
    label: '↳ 💈 Hair Color',
});
exports.FacialHairOption = new Option_1.default({
    key: 'facialHairType',
    label: 'Facial Hair',
});
exports.FacialHairColor = new Option_1.default({
    key: 'facialHairColor',
    label: '↳ ✂️ Facial Hair Color',
});
exports.ClotheOption = new Option_1.default({
    key: 'clotheType',
    label: '👔 Clothes',
});
exports.ClotheColorOption = new Option_1.default({
    key: 'clotheColor',
    label: '↳ Color Fabric',
});
exports.GraphicOption = new Option_1.default({
    key: 'graphicType',
    label: '↳ Graphic',
});
exports.EyesOption = new Option_1.default({
    key: 'eyeType',
    label: '👁 Eyes',
});
exports.EyebrowOption = new Option_1.default({
    key: 'eyebrowType',
    label: '✏️ Eyebrow',
});
exports.MouthOption = new Option_1.default({
    key: 'mouthType',
    label: '👄 Mouth',
});
exports.SkinOption = new Option_1.default({
    key: 'skinColor',
    label: '🎨 Skin',
});
exports.CustomOption = new Option_1.default({
    key: 'addons',
    label: '🎨 Addons',
});
exports.CustomAccessoryColor = new Option_1.default({
    key: 'customAccessoryColor',
    label: 'Custom Accessory Color',
});
exports.ClotheAccessoryOption = new Option_1.default({
    key: 'clothAccessory',
    label: 'Cloth Accessory',
});
exports.HairAccessoryOption = new Option_1.default({
    key: 'hairAccessory',
    label: 'Hair Accessory',
});
exports.HairAccessoryOptionColor = new Option_1.default({
    key: 'hairAccessoryColor',
    label: 'Hair Accessory Color',
});
exports.JewelleryOption = new Option_1.default({
    key: 'jewellery',
    label: 'Jewellery',
});
exports.BackgroundOption = new Option_1.default({
    key: 'background',
    label: 'Background',
});
exports.FaceMaskOption = new Option_1.default({
    key: 'faceMask',
    label: 'Face Mask',
});
exports.allOptions = [
    exports.TopOption,
    exports.AccessoriesOption,
    exports.HatColorOption,
    exports.HairColorOption,
    exports.FacialHairOption,
    exports.FacialHairColor,
    exports.ClotheOption,
    exports.ClotheColorOption,
    exports.GraphicOption,
    exports.EyesOption,
    exports.EyebrowOption,
    exports.MouthOption,
    exports.SkinOption,
    exports.CustomOption,
    exports.CustomAccessoryColor,
    exports.ClotheAccessoryOption,
    exports.HairAccessoryOption,
    exports.HairAccessoryOptionColor,
    exports.JewelleryOption,
    exports.BackgroundOption,
    exports.FaceMaskOption
];
