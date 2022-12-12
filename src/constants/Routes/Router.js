import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UserStack} from '../../navigators/Stacks/UserStack';
import {AuthStack} from '../../navigators/Stacks/AuthStack';

const goToUserStack = false;

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {goToUserStack ? <UserStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
