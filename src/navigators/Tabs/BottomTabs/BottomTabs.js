import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {APP_ROUTES} from '../../../constants/Routes/routes';
import {MessagesScreen} from '../../../screens/MessagesScreen';
import {HomeScreen} from '../../../screens/HomeScreen';
import '../../types';

const Tab = createBottomTabNavigator();

/**
 * @type {Route[]} tabRoutes
 */

const tabRoutes = [
  {
    name: APP_ROUTES.User.Home,
    component: HomeScreen,
    options: {headerShown: false},
  },
  {
    name: APP_ROUTES.User.Messages,
    component: MessagesScreen,
    options: {headerShown: false},
  },
];

const BottomTabs = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.danger,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: '#eee',
        tabBarInactiveTintColor: colors.black,
      }}>
      {tabRoutes.map(props => (
        <Tab.Screen key={props.name} {...props} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
