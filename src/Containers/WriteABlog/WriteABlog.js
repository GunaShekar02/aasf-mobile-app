import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './WriteABlog.styles';
import {Colors} from '../../Themes';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

import Writer from '../../Assets/writer.svg';

const WriteABlog = ({navigation}) => {
  const [email, setEmail] = useState();
  const [draft, setDraft] = useState();

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
        3. Enter your email that is registered on Medium, and the draft link in
        the form below and click on Submit.
      </Text>
      <Text style={styles.noteText}>
        Note: The blog is all yours and you'll be given due credit for it. We're
        just giving it a home. :)
      </Text>
      <TextInput
        placeholder={'Enter Your Email'}
        value={email}
        setValue={setEmail}
        autoCompleteType={'email'}
      />
      <TextInput
        placeholder={'Enter Link to Medium Draft'}
        value={draft}
        setValue={setDraft}
      />
      <Button title={'Submit'} />
    </ScrollView>
  );
};

export default WriteABlog;
