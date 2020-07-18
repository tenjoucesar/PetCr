import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

import colors from '../../constants/colors';

const AppButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 30,
  },
  text: {
    color: Platform.OS === 'android' ? 'white' : colors.primary,
    textAlign: 'center',
  },
});

export default AppButton;
