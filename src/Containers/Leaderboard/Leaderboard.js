import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './Leaderboard.styles';
import {Colors} from '../../Themes';

import LeaderboardCard from '../../Components/LeaderboardCard/LeaderboardCard';

import Hero from '../../Assets/leaderboard.svg';
import {leaderboard} from '../../Assets/data/leaderboard';

const Leaderboard = () => {
  const displayLeaderboard = leaderboard.map((student, index) => (
    <LeaderboardCard
      key={student.roll}
      image={student.image}
      rank={index + 1}
      name={student.name}
      roll={student.roll}
      score={student.score}
      leader={index === 0}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Leaderboard</Text>
      <Hero width={'100%'} height={'30%'} style={styles.hero} />
      {displayLeaderboard}
      <TouchableOpacity style={styles.loadContainer} activeOpacity={0.8}>
        <Text style={styles.load}>Load more...</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          color={Colors.gold}
          size={30}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Leaderboard;
