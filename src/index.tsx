import { NativeModules, Platform } from 'react-native';

const { StoreFront } = NativeModules;

console.log(StoreFront)

const getStoreFront = async (): Promise<string | undefined> => {
  return Platform.select({
    ios: await StoreFront.getStoreFront() as string,
    default: undefined
  })
};

export default {
  getStoreFront
}
