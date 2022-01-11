import React, {useState} from 'react';
import {Alert, ScrollView, Text} from 'react-native';

import styles from './ForgotPassword.styles';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

import {
  resetPasswordWithOtp,
  sendForgotPasswordOTP,
} from '../../Services/auth.service';
import validRollNumber from '../../Utils/rollNumberValidation';

const states = {
  REQUEST_OTP: 'REQUEST_OTP',
  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_SUCCESSFUL: 'RESET_SUCCESSFUL',
};

const ForgotPassword = ({navigation}) => {
  const [currentState, setCurrentState] = useState(states.REQUEST_OTP);
  const [roll, setRoll] = useState();
  const [otp, setOtp] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      if (!otp || !newPassword || !repeatPassword)
        throw {message: 'Please fill all the fields.'};
      if (newPassword.length < 8)
        throw {message: 'Please select a password of at least 8 characters'};
      if (newPassword != repeatPassword)
        throw {message: "Repeated password doesn't match!"};
      setLoading(true);

      await resetPasswordWithOtp(roll, otp, newPassword, repeatPassword);

      setCurrentState(states.RESET_SUCCESSFUL);
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async () => {
    try {
      if (!roll || !validRollNumber(roll)) {
        Alert.alert(
          'Invalid Credentials!',
          'Please enter a valid roll number!',
        );
        return;
      }
      setLoading(true);
      await sendForgotPasswordOTP(roll);
      Alert.alert('', 'An OTP has been sent to your institute e-mail.');
      setCurrentState(states.RESET_PASSWORD);
    } catch (err) {
      Alert.alert(
        'OOPS!',
        err.message || 'Something went wrong! Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  switch (currentState) {
    case states.REQUEST_OTP:
      return (
        <ScrollView contentContainerStyle={styles.screen}>
          <Text style={styles.title}>Forgot Password?</Text>

          <TextInput
            placeholder={'Roll Number'}
            value={roll}
            setValue={setRoll}
          />
          <Button title={'Get OTP'} loading={loading} onPress={sendOTP} />
        </ScrollView>
      );
    case states.RESET_PASSWORD:
      return (
        <ScrollView contentContainerStyle={styles.screen}>
          <Text style={styles.title}>Forgot Password?</Text>

          <TextInput placeholder={'OTP'} value={otp} setValue={setOtp} />
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
    case states.RESET_SUCCESSFUL:
      return (
        <ScrollView contentContainerStyle={styles.screen}>
          <Text style={styles.text}>
            Your password has been successfully reset. Head over to the
            <Text
              style={styles.goldText}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Login{' '}
            </Text>
            page to get started!
          </Text>

          <Button
            title={'Login'}
            loading={loading}
            onPress={() => navigation.navigate('Login')}
          />
        </ScrollView>
      );
  }
};

export default ForgotPassword;
