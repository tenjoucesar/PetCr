import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const SwitchComponent = ({label, onChange}) => {
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => {
    setEnabled(!enabled);
    onChange();
  };
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={enabled ? colors.primary : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={enabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SwitchComponent;
