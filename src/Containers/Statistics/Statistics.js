import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import styles from './Statistics.styles';

const Statistics = () => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View>
        <Text style={styles.title}>Statistics</Text>
      </View>
    </ScrollView>
  );
};

export default Statistics;
