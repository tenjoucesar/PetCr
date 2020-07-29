import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MainButton } from '../../../components/Buttons/index';
import provincias from './provincias';

const DesiredLocationQuestionScreen = ({ navigation }) => {
  const [province, setProvince] = useState('');

  return (
      <View style={styles.componentContainer}>
      <Text style={styles.tittle}>
        Estas buscandolo a tu amigo en alguna provincia?
    </Text>
      <DropDownPicker
        items={provincias}
        placeholder='Selecciona una provincia'
        containerStyle={styles.dropdownContainer}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{justifyContent: 'center'}}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => setProvince(item)}
        />
      <View style={styles.btnContainer}>
        <MainButton disabled={!province} onPress={() => navigation.navigate('PetsStackScreen')}>
          continuar
        </MainButton>
      </View>
      <View style={styles.btnContainer}>
        <Button title='No estoy seguro' />
      </View>

    </View>
  )
}


export default DesiredLocationQuestionScreen;

const styles = StyleSheet.create({
  componentContainer: {
    display: 'flex',
    padding: 20,
    alignItems: 'center'
  },
  tittle: {
    marginTop: 85,
    marginBottom: 40,
    marginHorizontal: '10%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  dropdownContainer: {
    height: 50,
    width: '70%',
    marginBottom: 20
  },
  btnContainer: {
    marginTop: 80,
  }
});
