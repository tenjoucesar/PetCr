import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Loading from 'Components/Loading';
import CostaRicaFlag from 'Components/CostaRicaFlag';

const containerWidth = Dimensions.get('window').width / 3 - 20;

const PetGrid = ({img, name, onSelect, province}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onSelect}>
      <ImageBackground
        source={{uri: img}}
        style={styles.bgImage}
        resizeMode="cover"
        loadingIndicatorSource={() => <Loading />}
        >
        <CostaRicaFlag province={province} />
        <Text style={styles.name}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

export default PetGrid;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: containerWidth,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    overflow: 'hidden',
  },
  bgImage: {
    height: 150,
    justifyContent: 'flex-end',
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 5,
  },
});
