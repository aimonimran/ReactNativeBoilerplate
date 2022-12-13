import {useFormikContext} from 'formik';
import React, {useState} from 'react';
import {
  Text as RNText,
  TouchableOpacity as RNTouchableOpacity,
  View as RNView,
} from 'react-native';
import styled from 'styled-components/native';

const OuterBox = styled(RNView)`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  position: relative;
`;

const CheckMark = styled(RNView)`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border-width: 1px;
  background-color: ${({theme}) => theme.colors.black};
  position: absolute;
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
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

function Radio({data, name}) {
  const {setFieldValue} = useFormikContext();
  const [userOption, setUserOption] = useState(null);

  const handleRadio = item => {
    setUserOption(item);
    setFieldValue(name, userOption);
  };

  return data.map(item => {
    return (
      <TouchableOpacity key={item} onPress={() => handleRadio(item)}>
        <View>
          <OuterBox>{item === userOption ? <CheckMark /> : null}</OuterBox>
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  });
}

export default Radio;
