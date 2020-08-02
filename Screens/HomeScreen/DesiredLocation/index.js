import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MainButton } from '../../../components/Buttons/index';
import { PetContext } from '../../../Providers/PetsProvider';
import provincias from './provincias';

function DesiredLocationQuestionScreen ({ navigation, route }) {
  const [province, setProvince] = useState('');
  const { handlePetsRequest } = useContext(PetContext);
  const desiredPet = route.params;

  function onProvinceSelect(province, desiredPet) {
    handlePetsRequest(province, desiredPet);
    navigation.navigate('PetsStackScreen');
  }

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
        itemStyle={{ justifyContent: 'center' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => setProvince(item)}
      />
      <View style={styles.btnContainer}>
        <MainButton disabled={!province} onPress={() => onProvinceSelect(province, desiredPet)}>
          continuar
        </MainButton>
      </View>
      <View style={styles.btnContainer}>
        <Button title='No estoy seguro' onPress={() => onProvinceSelect(province, desiredPet)} />
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
