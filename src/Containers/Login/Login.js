import React, {useState} from 'react';
import {ScrollView, Text, Image} from 'react-native';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

import styles from './Login.styles';

import {Images} from '../../Themes';
const Login = () => {
  const [roll, setRoll] = useState();
  const [password, setPassword] = useState();

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
      />
      <Button title="Login" />
    </ScrollView>
  );
};

export default Login;
