import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './LeaderboardCard.styles';

const LeaderboardCard = ({image, rank, name, roll, score, leader}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={leader ? styles.imageLeader : styles.image}
      />
      <View>
        <Text style={leader ? styles.nameLeader : styles.name}>
          {rank}. {name}
        </Text>
        <Text style={leader ? styles.rollLeader : styles.roll}>{roll}</Text>
      </View>
      <Text style={leader ? styles.scoreLeader : styles.score}>{score}</Text>
    </View>
  );
};

export default LeaderboardCard;
