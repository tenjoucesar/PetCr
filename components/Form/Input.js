import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ErrorMessage from './ErrorMessage';

const Input = ({label, errorMessage, onChange, name, ...rest}) => (
  <View style={styles.container}>
    <Text>{label}</Text>
    <TextInput
      style={styles.input}
      onChangeText={text => onChange(text, name)}
      {...rest}
    />
    {errorMessage && <ErrorMessage error={errorMessage} />}
  </View>
);

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  icon: {marginRight: 10},
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flex: 1,
    padding: 0,
    color: 'black',
  },
});

export default Input;
