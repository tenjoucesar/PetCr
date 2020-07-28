import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MainButton } from '../../components/Buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function HomeScreen() {
  const [dogQuestionFilled, setDogQuestionFilled] = useState(false);

  const petDesiredQuestion = () => (
    <View style={{ display: 'flex', alignItems: 'center' }}>

      <Text style={styles.tittle}>
        Hola!
      {'\n'}
        Estas interesado en adoptar un
    </Text>
      <View style={styles.buttonsContainer}>
        <MainButton >
          <Icon name='cat' size={48} color='white' />
        </MainButton>
        <MainButton >
          <Icon name='dog' size={48} color='white' />
        </MainButton>
      </View>
      <Button title='No estoy seguro' />
    </View>
  );

  const desiredLocation = () => (
    <View style={{ display: 'flex', padding: 20, alignItems: 'center' }}>

      <Text style={styles.tittle}>
        Estas buscandolo a tu amigo en alguna provincia?
    </Text>
      <DropDownPicker
        items={[
          { label: 'Alajuela', value: 'alajuela' },
          { label: 'Heredia', value: 'heredia' },
          { label: 'San Jose', value: 'sanJose' },
          { label: 'Cartago', value: 'cartago' },
          { label: 'Limon', value: 'limon' },
          { label: 'Puntarenas', value: 'puntarenas' },
          { label: 'Guanacaste', value: 'guanacaste' },
        ]}
        placeholder='Selecciona una provincia'
        containerStyle={{ height: 40, width: '70%' }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'center'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => ''}
      />
      <MainButton  >
        continuar
          </MainButton>
      <Button title='No estoy seguro' />
    </View>
  )

  const displayDogQuestion = !dogQuestionFilled ? petDesiredQuestion() : null;
  return (
    <>
      {displayDogQuestion}
      {desiredLocation()}
    </>
  )
}

const styles = StyleSheet.create({
  tittle: {
    marginVertical: 35,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  }
});
