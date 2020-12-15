import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Leaderboard.styles';
import {Colors, Metrics} from '../../Themes';

import LeaderboardCard from '../../Components/LeaderboardCard/LeaderboardCard';

import Hero from '../../Assets/leaderboard.svg';

import {getLeaderboard} from '../../Redux/Thunks/users';

const Leaderboard = () => {
  const [loading, setLoading] = useState(false);

  const {leaderboard, done} = useSelector((state) => state.leaderboard);
  const dispatch = useDispatch();

  const loadMore = async () => {
    try {
      setLoading(true);
      await dispatch(getLeaderboard());
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please restart the app!',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  const displayLeaderboard = leaderboard.map((student, index) => (
    <LeaderboardCard
      key={student._id}
      image={
        student.dp ||
        'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png'
      }
      rank={index + 1}
      name={student.name}
      roll={student._id}
      score={student.totalScore}
      leader={index === 0}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Leaderboard</Text>
      <Hero
        width={'100%'}
        height={Metrics.screenWidth / 2}
        style={styles.hero}
      />
      {displayLeaderboard}
      {loading ? (
        <ActivityIndicator size="large" color={Colors.gold} />
      ) : !done ? (
        <TouchableOpacity
          style={styles.loadContainer}
          activeOpacity={0.8}
          onPress={loadMore}>
          <Text style={styles.load}>Load more...</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            color={Colors.gold}
            size={30}
          />
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
};

export default Leaderboard;
