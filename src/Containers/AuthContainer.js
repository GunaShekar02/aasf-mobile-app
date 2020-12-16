import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import AuthNavigation from '../Navigation/AuthNavigation';

const AuthContainer = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
