import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Pie from 'react-native-pie';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import styles from './Statistics.styles';
import {Colors} from '../../Themes';

import IndicatorBox from '../../Components/IndicatorBox/IndicatorBox';

const Statistics = ({navigation}) => {
  const {score, achievements, rank} = useSelector((state) => state.user);
  const totalScore = score?.technical + score?.managerial + score?.oratory || 0;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Statistics
      </Text>
      <Text style={styles.text}>Total Score : {totalScore}</Text>
      <Text style={styles.text}>Leaderboard Rank : {rank}</Text>
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
              percentage: (score?.technical * 100) / totalScore || 0,
              color: Colors.red,
            },
            {
              percentage: (score?.managerial * 100) / totalScore || 0,
              color: Colors.green,
            },
            {
              percentage: (score?.oratory * 100) / totalScore || 0,
              color: Colors.blue,
            },
          ]}
        />
      </View>

      <View style={styles.achievementsBox}>
        <Text style={styles.achievementsTitle}>Achievements</Text>
        <Text style={styles.achievementsText}>
          First : {achievements.first.join(', ')}
        </Text>
        <Text style={styles.achievementsText}>
          Second : {achievements.second.join(', ')}
        </Text>
        <Text style={styles.achievementsText}>
          Third : {achievements.third.join(', ')}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Statistics;
