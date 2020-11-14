import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../Containers/Profile/Profile';
import Statistics from '../Containers/Statistics/Statistics';

const Stack = createStackNavigator();

export default ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};