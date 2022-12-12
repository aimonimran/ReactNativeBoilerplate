import {
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TouchableOpacity = styled(RNTouchableOpacity)`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 25px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-vertical: 10px;
`;

const Text = styled(RNText)`
  font-size: ${({theme}) => theme.fonts.fontSize.sm}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fonts.fontWeight.bold};
  text-transform: capitalize;
`;

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default CustomButton;
