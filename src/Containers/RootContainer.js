import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import AuthContainer from './AuthContainer';
import AppContainer from './AppContainer';

const RootStack = createStackNavigator();

const RootContainer = () => {
  const {isLoggedIn} = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{gestureEnabled: false}}>
        {isLoggedIn ? (
          <RootStack.Screen name="App" component={AppContainer} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthContainer} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootContainer;
