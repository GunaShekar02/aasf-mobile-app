import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Profile.styles';
import {Colors, Metrics} from '../../Themes';

import {LOGOUT} from '../../Redux/ActionTypes';

const Profile = ({navigation}) => {
  const {name} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.imageView}>
        <Image
          source={{
            uri:
              'https://aasfwebsitergdiag.blob.core.windows.net/dps/default.png',
          }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.edit} activeOpacity={0.8}>
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
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Suggestions')}>
        <MaterialIcons name="lightbulb" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>Drop a Suggestion</Text>
      </TouchableOpacity>
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
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('BugReport')}>
        <MaterialIcons
          name="bug-report"
          size={Metrics.h2}
          color={Colors.gold}
        />
        <Text style={styles.text}>Report a Bug</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => dispatch({type: LOGOUT})}>
        <MaterialIcons name="logout" size={Metrics.h2} color={Colors.gold} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
