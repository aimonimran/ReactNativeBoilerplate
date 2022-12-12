import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View as RNView,
} from 'react-native';
import styled from 'styled-components';
import PickerItem from '../PickerItem/PickerItem';
import {CustomText} from '../CustomText';

const View = styled(RNView)`
  background-color: ${({theme}) => theme.colors.light};
  border-radius: 25px;
  width: 100%;
  margin-vertical: 10px;
  padding: 15px;
`;

const Text = styled(CustomText)`
  color: ${({theme}) => theme.colors.medium};
`;

const Picker = ({selectedItem, onSelectItem, items, placeholder}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePickerItem = item => {
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View>
          <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
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

export default Picker;
