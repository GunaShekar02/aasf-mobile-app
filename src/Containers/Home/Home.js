import React from 'react';
import {ScrollView, Text, Linking} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './Home.styles';

import HomeCard from '../../Components/HomeCard/HomeCard';

import {homeData} from '../../Assets/data/home';

const Home = () => {
  const {name} = useSelector((state) => state.user);

  const displayCards = homeData.map((data, index) => (
    <HomeCard
      key={data.id}
      backgroundColor={data.backgroundColor}
      text={data.text}
      image={data.image}
      reverse={index % 2}
      onPress={() => Linking.openURL(data.link)}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.intro}>Welcome</Text>
      <Text style={styles.name}>{name}</Text>
      {displayCards}
    </ScrollView>
  );
};

export default Home;
