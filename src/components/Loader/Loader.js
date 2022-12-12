import {ActivityIndicator, View as RNView} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const View = styled(RNView)`
  flex: 1;
  justify-content: center;
`;

function Loader({color, size = 'small'}) {
  return (
    <View>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

export default Loader;
