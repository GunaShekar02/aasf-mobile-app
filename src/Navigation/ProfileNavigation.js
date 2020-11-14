import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../Containers/Profile/Profile';
import Statistics from '../Containers/Statistics/Statistics';
import WriteABlog from '../Containers/WriteABlog/WriteABlog';
import Suggestions from '../Containers/Suggestions/Suggestions';
import ResetPassword from '../Containers/ResetPassword/ResetPassword';
import ContactUs from '../Containers/ContactUs/ContactUs';

const Stack = createStackNavigator();

export default ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="WriteABlog" component={WriteABlog} />
      <Stack.Screen name="Suggestions" component={Suggestions} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};
