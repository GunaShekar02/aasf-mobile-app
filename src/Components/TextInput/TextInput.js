import React from 'react';
import {TextInput} from 'react-native';

import styles from './TextInput.styles';
import {Colors} from '../../Themes';

const CustomTextInput = ({placeholder, value, setValue, ...rest}) => {
  return (
    <TextInput
      {...rest}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.white}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  );
};

export default CustomTextInput;
