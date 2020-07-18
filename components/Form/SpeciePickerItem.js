import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './Icon';

export default function SpeciePickerItem({
  item: {label, icon, backgroundColor},
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon icon={icon} backgroundColor={backgroundColor} size={70} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  text: {marginTop: 5, textAlign: 'center'},
});
