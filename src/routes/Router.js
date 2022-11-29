import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import UserStack from '../navigators/Stacks/UserStack';
import AuthStack from '../navigators/Stacks/AuthStack';

const Router = () => {
  return (
    <NavigationContainer>
      {true ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Router;
