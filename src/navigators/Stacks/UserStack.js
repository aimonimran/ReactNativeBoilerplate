import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES} from '../../constants/Routes/routes';
import {useTheme} from 'styled-components';
import BottomTabs from '../Tabs/BottomTabs';

const Stack = createNativeStackNavigator();

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
      {appRoutes.map(({name, component, options}) => (
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

export default UserStack;
