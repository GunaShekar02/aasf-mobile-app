import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Containers/Login/Login';

const Stack = createStackNavigator();

export default AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
