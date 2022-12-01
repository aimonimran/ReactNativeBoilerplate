import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES} from '../../routes/routes';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const authRoutes = [
  {
    name: APP_ROUTES.Auth.Login,
    component: LoginScreen,
    options: {headerShown: false},
  },
  {
    name: APP_ROUTES.Auth.Register,
    component: RegisterScreen,
    options: {headerShown: false},
  },
];

function AuthStack() {
  return (
    <Stack.Navigator>
      {authRoutes.map(({name, component, options}) => (
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

export default AuthStack;
