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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {marginTop: 5, textAlign: 'center'},
});
