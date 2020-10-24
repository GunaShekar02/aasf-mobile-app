import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import AppNavigation from '../Navigation/AppNavigation';

const AppContainer = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <AppNavigation />
    </>
  );
};
export default AppContainer;
