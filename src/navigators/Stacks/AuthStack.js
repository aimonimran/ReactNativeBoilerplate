import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authRoutes} from '../../routes/routes';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
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

const styles = StyleSheet.create({});

export default AuthStack;
