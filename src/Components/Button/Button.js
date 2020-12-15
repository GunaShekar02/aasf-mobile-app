import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {Colors} from '../../Themes';

import styles from './Button.styles';

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.gold} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
