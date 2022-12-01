import {Platform} from 'react-native';

export const fontFamily = {
  font: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
};

export const fontSize = {
  xxs: 10,
  xs: 12,
  sm: 15,
  md: 17,
  lg: 22,
  xl: 25,
  xxl: 30,
  xxxl: 35,
};

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};
