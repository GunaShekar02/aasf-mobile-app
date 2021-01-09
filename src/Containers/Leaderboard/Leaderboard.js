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
  const {rank} = useSelector((state) => state.user);
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

  const displayLeaderboard = () => {
    let rank = 1;
    return leaderboard.map((student, index, arr) => {
      if (index !== 0 && arr[index - 1].totalScore !== student.totalScore)
        rank++;
      return (
        <LeaderboardCard
          key={student._id}
          image={
            student.dp ||
            'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png'
          }
          rank={rank}
          name={student.name}
          roll={student._id}
          score={student.totalScore}
          leader={rank === 1}
        />
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Leaderboard</Text>
      <Hero
        width={'100%'}
        height={Metrics.screenWidth / 2}
        style={styles.hero}
      />
      <Text style={styles.rank}>
        Your Rank : <Text style={styles.gold}>{rank}</Text>
      </Text>
      <Text style={styles.note}>
        *Rank might be different in the leaderboard due to equality of scores.
      </Text>
      {displayLeaderboard()}
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
