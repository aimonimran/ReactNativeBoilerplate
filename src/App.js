import React, {useEffect} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from './routes/Router';

// const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return <Text>Hey</Text>;
};

export default App;
