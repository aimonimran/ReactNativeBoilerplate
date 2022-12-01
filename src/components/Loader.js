import {ActivityIndicator, View} from 'react-native';
import React from 'react';

function Loader({color, size = 'small'}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

export default Loader;
