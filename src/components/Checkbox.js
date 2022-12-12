import React from 'react';
import {
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
  View as RNView,
} from 'react-native';
import styled from 'styled-components/native';

const OuterBox = styled(RNView)`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  position: relative;
`;

const CheckMark = styled(RNView)`
  width: 10px;
  height: 10px;
  border-radius: 1px;
  border-width: 1px;
  background-color: ${({theme}) => theme.colors.black};
  position: absolute;
  left: 3px;
  right: 3px;
  top: 3px;
  bottom: 3px;
`;

const TouchableOpacity = styled(RNTouchableOpacity)`
  padding: 10px;
`;

const View = styled(RNView)`
  flex-direction: row;
  align-items: center;
`;

const Text = styled(RNText)`
  margin-left: 8px;
  color: ${({theme}) => theme.colors.black};
`;

function Checkbox({title, checked, setter}) {
  return (
    <TouchableOpacity onPress={setter}>
      <View>
        <OuterBox>{checked ? <CheckMark /> : null}</OuterBox>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Checkbox;
