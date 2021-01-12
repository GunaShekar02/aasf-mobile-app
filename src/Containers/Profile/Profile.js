import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

import styles from './Profile.styles';
import {Colors, Metrics} from '../../Themes';

import {logout} from '../../Redux/Thunks/auth';
import {uploadDP} from '../../Redux/Thunks/users';

const Profile = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {name, dp} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleUploadDP = async (dp) => {
    try {
      if (dp.fileSize > 3000000) {
        Alert.alert(
          'Image too large!',
          'Please select an image with a max size of 3MB',
        );
        return;
      }
      setLoading(true);
      await dispatch(uploadDP(dp));
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEditDP = () => {
    launchImageLibrary({mediaType: 'photo'}, handleUploadDP);
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.imageView}>
        <Image
          source={{
            uri:
              dp ||
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.image}
        />
        {loading ? (
          <View style={styles.imageLoading}>
            <ActivityIndicator size="large" color={Colors.gold} />
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.edit}
          activeOpacity={0.8}
          onPress={handleEditDP}>
          <MaterialIcons name="edit" size={Metrics.h3} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Statistics')}>
        <MaterialIcons name="pie-chart" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>My Statistics</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('WriteABlog')}>
        <MaterialIcons name="article" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>Write a Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ResetPassword')}>
        <MaterialIcons name="vpn-key" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>Reset Password</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Suggestions')}>
        <MaterialIcons name="lightbulb" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>Drop a Suggestion</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ContactUs')}>
        <MaterialIcons
          name="local-phone"
          size={Metrics.h2}
          color={Colors.gold}
        />
        <Text style={styles.text}>Contact Us</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('BugReport')}>
        <MaterialIcons
          name="bug-report"
          size={Metrics.h2}
          color={Colors.gold}
        />
        <Text style={styles.text}>Report a Bug</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => dispatch(logout())}>
        <MaterialIcons name="logout" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
