import React, {useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

import styles from './ResetPassword.styles';
import {Colors} from '../../Themes';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

import {resetPassword} from '../../Redux/Thunks/users';

const ResetPassword = ({navigation}) => {
  const dispatch = useDispatch();

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      if (!currentPassword || !newPassword || !repeatPassword)
        throw {message: 'Please fill all the fields.'};
      if (newPassword.length < 8)
        throw {message: 'Please select a password of at least 8 characters'};
      if (newPassword != repeatPassword)
        throw {message: "Repeated password doesn't match!"};
      setLoading(true);
      await dispatch(resetPassword(currentPassword, newPassword));
      Alert.alert('SUCCESS!', 'Password successfully changed!');
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

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
      <Button title={'Reset'} loading={loading} onPress={handleReset} />
    </ScrollView>
  );
};

export default ResetPassword;
