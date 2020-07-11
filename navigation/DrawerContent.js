import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = ({navigation}) => (
  <View style={styles.divisorLine}>
    <DrawerContentScrollView >
    <View style={{flex: 1}}>
      <Text style={title}>Pets CR</Text>
    </View>
    <View style={styles.divisorLine} />
      <DrawerItem
        label='Mascotas'
        icon={() => <Icon name='paw' size={30} color='black'/>}
        onPress={() => {navigation.navigate('PetsScreen')}}
      />
      <DrawerItem
        label='Acceso'
        icon={() => <Icon name='sign-in' size={30} color='black' />}
        onPress={() => {navigation.navigate('LoginScreen')}}
      />
      <DrawerItem
        label='Adoptados'
        icon={() => <Icon name='check-square-o' size={30} color='black' />}
        onPress={() => {navigation.navigate('AdoptedScreen')}}

      />
      <DrawerItem
        label='Perfil'
        icon={() => <Icon name='user' size={30} color='black' />}
        onPress={() => {}}
      />
      <DrawerItem label='' />
    </DrawerContentScrollView>
  </View>
);

export default CustomDrawerContent;

const styles = StyleSheet.create({
  divisorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10
  }
})