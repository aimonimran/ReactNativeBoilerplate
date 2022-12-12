import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES} from '../../../constants/Routes/routes';
import {useTheme} from 'styled-components';
import {BottomTabs} from '../../Tabs/BottomTabs';
import '../../types';

const Stack = createNativeStackNavigator();

/**
 * @type {Route[]} appRoutes
 */
const appRoutes = [
  {
    name: APP_ROUTES.User.BottomTabs,
    component: BottomTabs,
    options: {headerShown: false},
  },
];

function UserStack() {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.danger,
        },
        headerTintColor: colors.white,
      }}>
      {appRoutes.map(props => (
        <Stack.Screen key={props.name} {...props} />
      ))}
    </Stack.Navigator>
  );
}

export default UserStack;
