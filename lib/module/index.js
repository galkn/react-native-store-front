import { NativeModules, Platform } from 'react-native';
const {
  StoreFront
} = NativeModules;

const getStoreFront = async () => {
  return Platform.select({
    ios: await StoreFront.getStoreFront(),
    default: undefined
  });
};

export default {
  getStoreFront
};
//# sourceMappingURL=index.js.map