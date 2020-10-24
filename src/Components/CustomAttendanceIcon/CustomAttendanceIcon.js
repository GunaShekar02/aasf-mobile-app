import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './CustomAttendanceIcon.styles';

const CustomAttendanceIcon = () => {
  return (
    <View style={styles.button}>
      <MaterialIcons name="qr-code-scanner" color={'#000000'} size={35} />
    </View>
  );
};

export default CustomAttendanceIcon;
