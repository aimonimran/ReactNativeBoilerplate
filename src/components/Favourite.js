import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

FontAwesomeIcon.loadFont();

const Favourite = ({name, color, size = 25}) => {
  const handleFavourite = () => {};

  return (
    <TouchableOpacity onPress={handleFavourite}>
      <FontAwesomeIcon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Favourite;
