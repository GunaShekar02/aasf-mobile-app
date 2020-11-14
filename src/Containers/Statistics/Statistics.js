import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Pie from 'react-native-pie';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './Statistics.styles';
import {Colors} from '../../Themes';

import IndicatorBox from '../../Components/IndicatorBox/IndicatorBox';

const Statistics = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Statistics
      </Text>
      <Text style={styles.text}>Total Score : 100</Text>
      <Text style={styles.text}>Leaderboard Rank : 10</Text>
      <View style={styles.pieView}>
        <IndicatorBox
          backgroundColor={Colors.red}
          indicatorText={'Technical'}
        />
        <IndicatorBox
          backgroundColor={Colors.green}
          indicatorText={'Managerial'}
        />
        <IndicatorBox
          backgroundColor={Colors.blue}
          indicatorText={'Oratory and Literary'}
        />
        <Pie
          radius={100}
          sections={[
            {
              percentage: 80,
              color: Colors.red,
            },
            {
              percentage: 10,
              color: Colors.green,
            },
            {
              percentage: 10,
              color: Colors.blue,
            },
          ]}
        />
      </View>

      <View style={styles.achievementsBox}>
        <Text style={styles.achievementsTitle}>Achievements</Text>
        <Text style={styles.achievementsText}>First : JAM, Junior PC - 1</Text>
        <Text style={styles.achievementsText}>Second : JAM, Junior PC - 1</Text>
        <Text style={styles.achievementsText}>Third : JAM, Junior PC - 1</Text>
      </View>
    </ScrollView>
  );
};

export default Statistics;
