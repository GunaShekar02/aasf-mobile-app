import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import AuthNavigation from '../Navigation/AuthNavigation';

const AuthContainer = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <AuthNavigation />
    </>
  );
};
export default AuthContainer;
