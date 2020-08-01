import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity} from 'react-native';
import CostaRicaFlag from '../../images/costa-rica-flag.png';

debugger;
const PetGrid = ({img, name, onSelect}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground source={{uri: img}} style={styles.bgImage} >
        <View style={{display: 'flex', flexDirection: 'row', margin: 5}}>
          <Image source={CostaRicaFlag}/>
          <Text style={styles.province}>Alajuela</Text>
        </View>
        <Text style={styles.text}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 5,
  },
  province: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 10,
  }
});

export default PetGrid;
