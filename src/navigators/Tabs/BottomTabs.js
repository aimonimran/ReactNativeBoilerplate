import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {APP_ROUTES} from '../../constants/Routes/routes';
import MessagesScreen from '../../screens/MessagesScreen';
import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const tabRoutes = [
  {
    name: APP_ROUTES.User.Home,
    component: HomeScreen,
    options: {title: 'Home'},
  },
  {
    name: APP_ROUTES.User.Messages,
    component: MessagesScreen,
    options: {title: 'Messages'},
  },
];

const BottomTabs = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.danger,
        activeTintColor: colors.white,
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: colors.black,
      }}>
      {tabRoutes.map(({name, component}) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
