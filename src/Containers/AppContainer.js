import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {Alert, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';

import AppNavigation from '../Navigation/AppNavigation';

import {getUserDetails, resetFcmToken} from '../Redux/Thunks/users';

const AppContainer = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const loadUserDetails = async () => {
    try {
      await dispatch(getUserDetails());
      setLoading(false);
      SplashScreen.hide();
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please try again!',
      );
    }
  };

  const sendFcmToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      await dispatch(resetFcmToken(token));
    } catch (err) {
      //Do nothing
      return;
    }
  };

  useEffect(() => {
    loadUserDetails();
    sendFcmToken();
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {loading ? null : <AppNavigation />}
    </>
  );
};
export default AppContainer;
