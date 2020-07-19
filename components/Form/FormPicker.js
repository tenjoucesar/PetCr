import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';
import ErrorMessage from './ErrorMessage';

export default function FormPicker({
  items,
  name,
  value,
  onChange,
  label,
  PickerItemComponent,
  errorMessage,
}) {
  const [visible, setVisible] = useState(false);

  const getValue = () => {
    const item = items.find(i => i.value === value);
    return item.label;
  };

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>{value ? getValue() : label}</Text>
          <Icon name="chevron-down" color="black" size={20} />
        </View>
        <ErrorMessage error={errorMessage} />
      </TouchableOpacity>

      <Modal visible={visible} animationType="fade">
        <View style={styles.buttonContainer}>
          <Button
            title="close"
            color={colors.primary}
            onPress={() => setVisible(false)}
          />
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.value}
          numColumns={3}
          renderItem={({item}) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setVisible(false);
                onChange(item.value, name);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {textTransform: 'capitalize'},
  buttonContainer: {width: 200, alignSelf: 'center'},
});
