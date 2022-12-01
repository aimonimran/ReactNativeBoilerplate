import {TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText style={{padding: 20}}>{label}</CustomText>
    </TouchableOpacity>
  );
};

export default PickerItem;
