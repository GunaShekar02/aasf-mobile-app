import React from 'react';
import {ScrollView, Text, TouchableOpacity, Linking, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ContactUs.styles';
import {Colors} from '../../Themes';

const ContactUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Contact Us
      </Text>
      <Text style={styles.text}>
        Say hello at{' '}
        <Text
          style={styles.goldText}
          onPress={() => Linking.openURL('mailto:aasf.iiitmg@gmail.com')}>
          aasf.iiitmg@gmail.com
        </Text>
        !
      </Text>

      <Text style={styles.text}>Follow us on :</Text>

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.8}
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/company/aasf-iiitmg')
        }>
        <MaterialCommunityIcons
          name="linkedin"
          size={30}
          color={Colors.white}
        />
        <Text style={styles.goldText}>/aasf-iiitmg</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.8}
        onPress={() => Linking.openURL('https://www.facebook.com/aasfiiitm')}>
        <MaterialCommunityIcons
          name="facebook"
          size={30}
          color={Colors.white}
        />
        <Text style={styles.goldText}>/aasfiiitm</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.8}
        onPress={() =>
          Linking.openURL('https://www.instagram.com/aasf_iiitmg')
        }>
        <MaterialCommunityIcons
          name="instagram"
          size={30}
          color={Colors.white}
        />
        <Text style={styles.goldText}>/aasf_iiitmg</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.8}
        onPress={() => Linking.openURL('https://github.com/AASF-IIITM')}>
        <MaterialCommunityIcons name="github" size={30} color={Colors.white} />
        <Text style={styles.goldText}>/aasf-iiitm</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.8}
        onPress={() => Linking.openURL('http://aasf.in')}>
        <MaterialCommunityIcons name="web" size={30} color={Colors.white} />
        <Text style={styles.goldText}>aasf.in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactUs;
