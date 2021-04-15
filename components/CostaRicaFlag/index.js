import React from 'react';
import CRFlag from 'Images/costa-rica-flag.png';
import { Text, View, Image, StyleSheet } from 'react-native';

const CostaRicaFlag = ({ province }) => (
  <View style={styles.container}>
      <Image source={CRFlag} />
      <Text style={styles.province}>{province}</Text>
  </View>
);

export default CostaRicaFlag;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  province: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
  },
});