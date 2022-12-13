import {Text, TouchableWithoutFeedback, View as RNView} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const View = styled(RNView)`
  background-color: ${({theme}) => theme.colors.light};
  padding: 20px;
  margin-vertical: 5px;
`;

const Title = styled(Text)`
  font-size: ${({theme}) => theme.fonts.fontSize.md}px;
  color: ${({color}) => color};
  text-transform: capitalize;
  margin-left: 10px;
`;

const Description = styled(Text)`
  margin-left: 10px;
  color: ${({color}) => color};
`;

const ListItem = ({title, description, color, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Title color={color}>{title}</Title>
        {description && <Description color={color}>{description}</Description>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
