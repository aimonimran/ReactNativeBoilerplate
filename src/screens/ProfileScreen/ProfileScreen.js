import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import {ListItem} from '../../components/ListItem';
import {authActions} from '../../redux/auth/AuthSlice';
import {useDispatch} from 'react-redux';
import {colors} from '../../styles/colors';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.auth);

  const {username, email} = user.payload;

  const data = [
    {id: 1, title: username, desciption: email, color: colors.secondary},
    {
      id: 2,
      title: 'Logout',
      onPress: () => dispatch(authActions.onLogout()),
      color: colors.danger,
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            description={item.desciption}
            onPress={item.onPress}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

export default ProfileScreen;
