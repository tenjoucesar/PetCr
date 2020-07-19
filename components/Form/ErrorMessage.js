import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ErrorMessage = ({error}) => {
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {color: 'red'},
});

export default ErrorMessage;
