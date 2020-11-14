import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './Suggestions.styles';
import {Colors} from '../../Themes';

import TextInput from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';

const Suggestions = ({navigation}) => {
  const [suggestion, setSuggestion] = useState();
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
          <MaterialIcons name="arrow-back-ios" size={24} color={Colors.white} />
        </TouchableOpacity>
        Suggestions
      </Text>
      <Text style={styles.text}>
        We're constantly trying to help the student community to our best
        extent, and we realise that there's always room for improvement.
      </Text>
      <Text style={styles.text}>
        To drop a suggestion, please send us a mail at aasf.iiitmg@gmail.com or
        fill the form below.
      </Text>
      <TextInput
        placeholder={'Drop your suggestion here'}
        multiline={true}
        numberOfLines={5}
        value={suggestion}
        setValue={setSuggestion}
      />
      <View style={styles.checkboxView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setChecked(!checked)}>
          <MaterialIcons
            name={checked ? 'check-box' : 'check-box-outline-blank'}
            color={Colors.gold}
            size={24}
            style={styles.checkbox}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Stay Anonymous</Text>
      </View>
      <Button title={'Submit'} />
    </ScrollView>
  );
};

export default Suggestions;
