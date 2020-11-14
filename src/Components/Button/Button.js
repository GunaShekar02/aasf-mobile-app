import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
