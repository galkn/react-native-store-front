"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const {
  StoreFront
} = _reactNative.NativeModules;
console.log(StoreFront);

const getStoreFront = async () => {
  return _reactNative.Platform.select({
    ios: await StoreFront.getStoreFront(),
    default: undefined
  });
};

var _default = {
  getStoreFront
};
exports.default = _default;
//# sourceMappingURL=index.js.map