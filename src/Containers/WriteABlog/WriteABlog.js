import React from 'react';
import {ScrollView, TouchableOpacity, Text, Linking} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './WriteABlog.styles';
import {Colors} from '../../Themes';

import Writer from '../../Assets/writer.svg';

const WriteABlog = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Write A Blog
      </Text>
      <Writer height={'30%'} width={'100%'} style={styles.image} />
      <Text style={styles.instructionsTitle}>Instructions :</Text>
      <Text style={styles.instructionsText}>
        1. Write a blog on medium on any technical topic of your choice, that
        you think will be useful for the student community.
      </Text>
      <Text style={styles.instructionsText}>
        2. On the top right, click on the menu icon to find the "Share draft
        link" option.
      </Text>
      <Text style={styles.instructionsText}>
        3. Drop a mail at{' '}
        <Text
          style={styles.noteText}
          onPress={() => Linking.openURL('mailto:aasf.iiitmg@gmail.com')}>
          aasf.iiitmg@gmail.com
        </Text>{' '}
        with the subject{' '}
        <Text style={styles.noteText}>{'"[BLOG ENTRY] <Roll Number>"'}</Text>{' '}
        with the body containing the draft link to your blog and the email ID
        associated with your medium account.
      </Text>
      <Text style={styles.noteText}>
        Note: The blog is all yours and you'll be given due credit for it. We're
        just giving it a home. :)
      </Text>
    </ScrollView>
  );
};

export default WriteABlog;
