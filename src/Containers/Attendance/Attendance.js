import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useDispatch} from 'react-redux';

import styles from './Attendance.styles';

import {markAttendance} from '../../Redux/Thunks/events';

const Attendance = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onRead = async (e) => {
    try {
      setLoading(true);
      await dispatch(markAttendance(e.data));
      Alert.alert('Success!', 'Attendance has been marked successfully.');
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Some error has occurred, please try again!',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <QRCodeScanner
        reactivate={true}
        reactivateTimeout={10 * 1000}
        onRead={onRead}
        showMarker={true}
        markerStyle={loading ? styles.marked : styles.markerStyle}
      />
    </View>
  );
};

export default Attendance;
