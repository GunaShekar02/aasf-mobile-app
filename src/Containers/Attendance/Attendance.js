import React from 'react';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from './Attendance.styles';

const Attendance = () => {
  const onRead = (e) => {
    console.log(e.data);
  };

  return (
    <View style={styles.screen}>
      <QRCodeScanner
        onRead={onRead}
        showMarker={true}
        markerStyle={styles.markerStyle}
      />
    </View>
  );
};

export default Attendance;
