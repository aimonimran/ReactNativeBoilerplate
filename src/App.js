import {ThemeProvider} from 'styled-components';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './constants/Routes/Router';
import theme from './styles';

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
