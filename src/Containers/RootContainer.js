import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthContainer from './AuthContainer';
import AppContainer from './AppContainer';

const RootStack = createStackNavigator();

const RootContainer = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{gestureEnabled: false}}>
        {loggedIn ? (
          <RootStack.Screen name="App" component={AppContainer} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthContainer} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootContainer;
