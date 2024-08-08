import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'ios',
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppRouter;
