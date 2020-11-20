import PropTypes from 'prop-types';
import React from 'react';
import { Platform, NativeModules } from 'react-native';

const { StoreFront } = NativeModules;

export default () => {
  if(Platform.OS === "ios")
    return StoreFront.getStoreFront()
  return undefined
}
