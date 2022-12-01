import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View as RNView,
} from 'react-native';
import styled, {useTheme} from 'styled-components';
import propTypes from 'prop-types';
import PickerItem from './PickerItem';
import CustomText from './CustomText';

const View = styled(RNView)`
  background-color: ${({containerTheme}) => containerTheme.bgColor};
  border-radius: 25px;
  width: 100%;
  margin-vertical: 10px;
  padding: 15px;
`;

const Picker = ({selectedItem, onSelectItem, items, placeholder}) => {
  const theme = useTheme();
  const {colors, fonts} = theme;

  const [modalVisible, setModalVisible] = useState(false);

  const handlePickerItem = item => {
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View containerTheme={{bgColor: colors.light}}>
          <CustomText style={{color: colors.medium}}>
            {selectedItem ? selectedItem.label : placeholder}
          </CustomText>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({item}) => (
            <PickerItem
              label={item.label}
              onPress={() => handlePickerItem(item)}
            />
          )}
        />
      </Modal>
    </>
  );
};

Picker.propTypes = {
  input: propTypes.string,
  handleInput: propTypes.func,
  keyboardType: propTypes.string,
  placeholder: propTypes.string.isRequired,
};

export default Picker;
