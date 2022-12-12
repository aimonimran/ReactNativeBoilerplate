import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES} from '../../../constants/Routes/routes';
import {LoginScreen} from '../../../screens/LoginScreen';
import {SignupScreen} from '../../../screens/SignupScreen';
import '../../types';

const Stack = createNativeStackNavigator();

/**
 * @type {Route[]} authRoutes
 */
const authRoutes = [
  {
    name: APP_ROUTES.Auth.Login,
    component: LoginScreen,
    options: {headerShown: false},
  },
  {
    name: APP_ROUTES.Auth.Signup,
    component: SignupScreen,
    options: {headerShown: false},
  },
];

function AuthStack() {
  return (
    <Stack.Navigator>
      {authRoutes.map(props => (
        <Stack.Screen key={props.name} {...props} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
