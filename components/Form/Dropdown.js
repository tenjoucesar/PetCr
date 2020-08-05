import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const Dropdown = ({name, onChange, value, items = []}) => (
  <ScrollView style={styles.container}>
{/*     <Picker
      selectedValue={value}
      mode="dialog"
      onValueChange={itemValue => onChange(itemValue, name)}>
      {!value && <Picker.Item value="" label="Seleccionar ubicación" />}
      {items.map((item, i) => (
        <Picker.Item key={i} label={item.label} value={item.value} />
      ))}
    </Picker> */}
  </ScrollView>
);

export default Dropdown;

const styles = StyleSheet.create({
  container: {width: '100%'},
});
