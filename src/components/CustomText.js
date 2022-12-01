import {Text} from 'react-native';
import React from 'react';
import defaultStyles from '../styles/defaultStyles';

const CustomText = ({children, style}) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default CustomText;
