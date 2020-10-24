import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppContainer from './AppContainer';

const RootStack = createStackNavigator();

const RootContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="App"
        headerMode="none"
        screenOptions={{gestureEnabled: false}}>
        <RootStack.Screen name="App" component={AppContainer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootContainer;
