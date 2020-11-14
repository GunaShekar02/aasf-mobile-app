import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './ResetPassword.styles';
import {Colors} from '../../Themes';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Reset Password
      </Text>

      <TextInput
        placeholder={'Current Password'}
        secureTextEntry={true}
        value={currentPassword}
        setValue={setCurrentPassword}
      />
      <TextInput
        placeholder={'New Password'}
        secureTextEntry={true}
        value={newPassword}
        setValue={setNewPassword}
      />
      <TextInput
        placeholder={'Repeat New Password'}
        secureTextEntry={true}
        value={repeatPassword}
        setValue={setRepeatPassword}
      />
      <Button title={'Reset'} />
    </ScrollView>
  );
};

export default ResetPassword;
