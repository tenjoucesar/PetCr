import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import CostaRicaFlag from '../../images/costa-rica-flag.png';
import Loading from '../../components/Loading';

const PetGrid = ({img, name, onSelect}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground
      source={{uri: img}}
      style={styles.bgImage}
      resizeMode='cover'
      loadingIndicatorSource={() => <Loading />}
       >
        <View style={{display: 'flex', flexDirection: 'row', margin: 5}}>
          <Image source={CostaRicaFlag}/>
          <Text style={styles.province}>Alajuela</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
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
    height: 150,
    justifyContent: 'flex-end',
  },
  name: {
    color: '#fff',
    fontSize: 16,
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
