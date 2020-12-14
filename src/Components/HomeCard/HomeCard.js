import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './HomeCard.styles';

const HomeCard = ({backgroundColor, text, image, reverse, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor}, reverse ? styles.reverse : null]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.cardText}>{text}</Text>
      {image()}
    </TouchableOpacity>
  );
};

export default HomeCard;
