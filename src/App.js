import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './constants/Routes/Router';
import theme from './styles';

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
