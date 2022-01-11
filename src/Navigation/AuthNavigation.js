import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Containers/Login/Login';
import ForgotPassword from '../Containers/ForgotPassword/ForgotPassword';

const Stack = createStackNavigator();

export default AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
