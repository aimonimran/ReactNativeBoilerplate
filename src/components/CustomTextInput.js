import React from 'react';
import {TextInput, View as RNView} from 'react-native';
import styled, {useTheme} from 'styled-components';
import propTypes from 'prop-types';

const View = styled(RNView)`
  background-color: ${({containerTheme}) => containerTheme.bgColor};
  border-radius: 25px;
  width: 100%;
  margin-vertical: 10px;
`;

const CustomTextInput = ({input, handleInput, placeholder, keyboardType}) => {
  const theme = useTheme();
  const {colors, fonts} = theme;

  return (
    <View containerTheme={{bgColor: colors.light}}>
      <TextInput
        fontSize={17}
        value={input}
        onChangeText={text => handleInput(text)}
        placeholder={placeholder}
        placeholderTextColor={colors.medium}
        keyboardType={keyboardType}
      />
    </View>
  );
};

CustomTextInput.propTypes = {
  input: propTypes.string.isRequired,
  handleInput: propTypes.func.isRequired,
  keyboardType: propTypes.string,
  placeholder: propTypes.string.isRequired,
};

export default CustomTextInput;
