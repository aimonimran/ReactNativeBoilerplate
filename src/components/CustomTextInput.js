import React from 'react';
import {TextInput as RNTextInput, View as RNView} from 'react-native';
import styled, {useTheme} from 'styled-components';
import propTypes from 'prop-types';

const View = styled(RNView)`
  background-color: ${({theme}) => theme.colors.light};
  border-radius: 25px;
  width: 100%;
  margin-vertical: 10px;
`;

const TextInput = styled(RNTextInput)`
  color: ${({theme}) => theme.colors.black};
`;

const CustomTextInput = ({input, handleInput, ...rest}) => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <View>
      <TextInput
        fontSize={15}
        value={input}
        onChangeText={text => handleInput(text)}
        placeholderTextColor={colors.medium}
        {...rest}
      />
    </View>
  );
};

CustomTextInput.propTypes = {
  input: propTypes.string,
  handleInput: propTypes.func,
};

export default CustomTextInput;
