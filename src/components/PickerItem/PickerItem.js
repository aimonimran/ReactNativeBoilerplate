import {TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomText as RNCustomText} from '../CustomText';
import styled from 'styled-components';

const CustomText = styled(RNCustomText)`
  padding: 20px;
`;

const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText>{label}</CustomText>
    </TouchableOpacity>
  );
};

export default PickerItem;
