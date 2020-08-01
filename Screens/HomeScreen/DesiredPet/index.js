import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainButton } from '../../../components/Buttons/index';

const DesiredPetQuestionScreen = ({navigation}) => (
  <View style={{ display: 'flex', alignItems: 'center' }}>
    <Text style={styles.tittle}>
      Hola!
      {'\n'}
      Estas interesado en adoptar un
    </Text>
    <View style={styles.buttonsContainer}>
      <MainButton onPress={() => navigation.navigate('DesiredLocationQuestionScreen', 'gato')}>
        <Icon name='cat' size={48} color='white' />
      </MainButton>
      <MainButton onPress={() => navigation.navigate('DesiredLocationQuestionScreen', 'perro')}>
        <Icon name='dog' size={48} color='white' />
      </MainButton>
    </View>
    <Button title='No estoy seguro' onPress={() => navigation.navigate('DesiredLocationQuestionScreen','unsure')}/>
  </View>
);

export default DesiredPetQuestionScreen;

const styles = StyleSheet.create({
  tittle: {
    marginTop: 85,
    marginBottom: 45,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 70,
  }
});