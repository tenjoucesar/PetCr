import React from 'react';
import {View, Text} from 'react-native';
import PickPreview from './PickPreview';
import ErrorMessage from './ErrorMessage';

const ImagePicker = ({name, onChange, value, errorMessage}) => {
  const addPick = value => {
    onChange(value, name);
  };

  return (
    <View>
      {!value && <Text>Selecciona Una imagen</Text>}
      <PickPreview addPick={addPick} img={value} />
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </View>
  );
};

export default ImagePicker;
