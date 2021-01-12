import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, Linking} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './BugReport.styles';
import {Colors} from '../../Themes';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

const BugReport = ({navigation}) => {
  const [bug, setBug] = useState('');
  const [link, setLink] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Bug Reports
      </Text>
      <Text style={styles.text}>
        We highly appreciate you taking time to help us improve the app's
        experience! To report a bug, please drop us a mail at{' '}
        <Text
          style={styles.goldText}
          onPress={() => Linking.openURL('mailto:aasf.iiitmg@gmail.com')}>
          aasf.iiitmg@gmail.com
        </Text>{' '}
        with the subject{' '}
        <Text style={styles.goldText}>{'[APP BUG REPORT]'}</Text> with the body
        containing a brief description of the bug along with any relevant
        screenshots.
      </Text>
    </ScrollView>
  );
};

export default BugReport;
