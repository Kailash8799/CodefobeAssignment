import React from 'react';
import {StatusBar} from 'react-native';
import AppRouter from './src/constants/AppRouter';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <AppRouter />
    </NavigationContainer>
  );
}

export default App;
