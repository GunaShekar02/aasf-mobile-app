import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Image, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

import styles from './Login.styles';

import {Images} from '../../Themes';

import {login} from '../../Redux/Thunks/auth';

import validRollNumber from '../../Utils/rollNumberValidation';

const Login = () => {
  const dispatch = useDispatch();

  const [roll, setRoll] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!roll || !password || !validRollNumber(roll)) {
        Alert.alert(
          'Invalid Credentials!',
          'Please enter a valid roll number and password!',
        );
        return;
      }
      setLoading(true);
      await dispatch(login(roll, password));
    } catch (err) {
      Alert.alert('OOPS!', err?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={Images.logo} style={styles.logo} />
      <TextInput
        value={roll}
        setValue={setRoll}
        placeholder={'Roll number (20XXYYY-ZZZ)'}
      />
      <TextInput
        value={password}
        setValue={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <Button title="Login" loading={loading} onPress={handleLogin} />
    </ScrollView>
  );
};

export default Login;
