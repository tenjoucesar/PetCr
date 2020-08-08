import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PickPreview from './PickPreview';
import ErrorMessage from './ErrorMessage';

const ImagePicker = ({name, onChange, images = [], errorMessage}) => {
  const limit = 2;

  const addPick = value => {
    onChange([...images, value], name);
  };

  const deletePick = value => {
    const filterData = images.filter(i => i !== value);
    onChange(filterData, name);
  };

  return (
    <View>
      {!images.lenght && <Text>Selecciona Una imagen</Text>}
      <View
        style={{
          ...styles.container,
          justifyContent: images.length ? 'space-between' : 'center',
        }}>
        {images.map((img, i) => (
          <PickPreview key={i} onChangePick={deletePick} img={img} />
        ))}
        {images.length < 2 && <PickPreview onChangePick={addPick} />}
      </View>
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default ImagePicker;
