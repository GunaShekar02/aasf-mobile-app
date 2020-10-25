import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import styles from './Leaderboard.styles';

import Hero from '../../Assets/leaderboard.svg';

const Leaderboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Leaderboard</Text>
      <Hero width={'100%'} height={'30%'} style={styles.hero} />
      <View style={styles.card}>
        <Image
          source={{
            uri:
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.imageLeader}
        />
        <View>
          <Text style={styles.nameLeader}>Guna Shekar Proddaturi</Text>
          <Text style={styles.rollLeader}>2018BCS-031</Text>
        </View>
        <Text style={styles.scoreLeader}>200</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri:
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Guna Shekar Proddaturi</Text>
          <Text style={styles.roll}>2018BCS-031</Text>
        </View>
        <Text style={styles.score}>150</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri:
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Guna Shekar Proddaturi</Text>
          <Text style={styles.roll}>2018BCS-031</Text>
        </View>
        <Text style={styles.score}>100</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri:
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Guna Shekar Proddaturi</Text>
          <Text style={styles.roll}>2018BCS-031</Text>
        </View>
        <Text style={styles.score}>150</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri:
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Guna Shekar Proddaturi</Text>
          <Text style={styles.roll}>2018BCS-031</Text>
        </View>
        <Text style={styles.score}>150</Text>
      </View>
    </ScrollView>
  );
};

export default Leaderboard;
