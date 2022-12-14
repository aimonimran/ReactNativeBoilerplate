import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useCheckAuth from '../../hooks/useCheckAuth';
import {UserStack} from '../../navigators/Stacks/UserStack';
import {AuthStack} from '../../navigators/Stacks/AuthStack';
import {Loader} from '../../components/Loader';

const Router = () => {
  useCheckAuth();
  const {checkingAuth, isAuthenticated} = useSelector(store => store.auth);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {checkingAuth && <Loader />}
        {isAuthenticated ? <UserStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
