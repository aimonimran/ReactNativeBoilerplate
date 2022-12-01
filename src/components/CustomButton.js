import {
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';
import React from 'react';
import styled, {useTheme} from 'styled-components';
import propTypes from 'prop-types';

const TouchableOpacity = styled(RNTouchableOpacity)`
  background-color: ${({buttonTheme}) => buttonTheme.bgColor};
  border-radius: 25px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-vertical: 10px;
`;

const Text = styled(RNText)`
  font-size: ${({textTheme}) => textTheme.fontSize};
  color: ${({textTheme}) => textTheme.color};
  font-weight: ${({textTheme}) => textTheme.fontWeight};
  text-transform: uppercase;
`;

const CustomButton = ({title, onPress}) => {
  const theme = useTheme();
  const {colors, fonts} = theme;

  return (
    <TouchableOpacity buttonTheme={{bgColor: colors.primary}} onPress={onPress}>
      <Text
        textTheme={{
          color: colors.white,
          fontSize: fonts.fontSize.sm,
          fontWeight: fonts.fontWeight.bold,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default CustomButton;
