import React from 'react';
import {View, Text} from 'react-native';

import styles from './IndicatorBox.styles';

const IndicatorBox = ({backgroundColor, indicatorText}) => {
  return (
    <View style={styles.indicatorView}>
      <View style={[styles.indicatorBox, {backgroundColor}]} />
      <Text style={styles.indicatorText}>{indicatorText}</Text>
    </View>
  );
};

export default IndicatorBox;
