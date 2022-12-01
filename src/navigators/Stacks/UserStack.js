import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {userRoutes} from '../../routes/routes';
import {useTheme} from 'styled-components';

const Stack = createNativeStackNavigator();

// const screenOptions = {
//   headerShown: false,
// };

function UserStack() {
  const theme = useTheme();
  const {colors, fonts} = theme;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      {userRoutes.map(({name, component, options}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default UserStack;
