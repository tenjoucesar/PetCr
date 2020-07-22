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
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => setVisible(false)}
                title="Cerrar"
                color={colors.primary}
              />
            </View>
            <FlatList
              data={items}
              keyExtractor={item => item.value}
              numColumns={2}
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
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    // marginTop: 40,
    // width: 200,
    // height: 200,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {textTransform: 'capitalize'},
  buttonContainer: {
    borderRadius: 20,
    marginBottom: 10,
    width: 100,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: 170,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
