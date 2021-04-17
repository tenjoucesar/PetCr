import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ErrorMessage from './ErrorMessage';

const Input = ({label, placeholder, errorMessage, onChange, name, ...rest}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={{
          ...styles.input,
          backgroundColor: isFocus ? 'white' : '#F7F8FC',
          borderColor: isFocus ? '#6287D0' : '#E9EAEE',
        }}
        onChangeText={text => onChange(text, name)}
        placeholder={placeholder}
        {...rest}
      />
    </View>
    {errorMessage && <ErrorMessage error={errorMessage} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  icon: {marginRight: 10},
  input: {
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 45,
  },
});

export default Input;
