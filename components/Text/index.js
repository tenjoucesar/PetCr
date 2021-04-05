import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const DetailText = ({ title, text }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.defaultText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
  },
  defaultText: {
    fontSize: 15,
    color: 'grey',
  },
});
