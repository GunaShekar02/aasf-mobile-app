import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {Alert, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import AppNavigation from '../Navigation/AppNavigation';

import {getUserDetails} from '../Redux/Thunks/users';

const AppContainer = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const loadUserDetails = async () => {
    try {
      await dispatch(getUserDetails());
      setLoading(false);
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please try again!',
      );
    }
  };
  useEffect(() => {
    loadUserDetails();
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
