import React from 'react';
import {useSelector} from 'react-redux';
import useCheckAuth from '../../hooks/useCheckAuth';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Loader} from '../../components/Loader';
import {UserStack} from '../../navigators/Stacks/UserStack';
import {AuthStack} from '../../navigators/Stacks/AuthStack';

const Router = () => {
  useCheckAuth();
  const {checkingAuth, isAuthenticated} = useSelector(store => store.auth);

  console.log(isAuthenticated);

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
