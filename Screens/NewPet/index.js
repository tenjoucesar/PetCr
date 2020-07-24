import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import {AuthContext} from '../../Providers/AuthProvider';
import {
  AppButton,
  FormPicker,
  ImagePicker,
  Input,
  SpeciePickerItem,
  Switch,
} from '../../components/Form';
import LoadingScreen from '../../Screens/LoadingScreen';
import species from './species';
import useForm from '../../hooks/useForm';

const validation = values => {
  const errors = {};
  const {name, specie, img, yearOfBirth} = values;
  if (name.trim() === '') errors.name = 'El nombre es obligatorio';
  if (!specie) errors.specie = 'Seleccione la Especie';
  if (!img) errors.img = errors.img = 'Selecciona una imagen';
  return errors;
};

const initialState = {
  adopted: false,
  description: '',
  gender: 'male',
  img: '',
  name: '',
  specie: '',
  yearOfBirth: '',
};

export default function index({navigation}) {
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext);

  const savePet = async () => {
    try {
      setLoading(true);
      const path = `pets/${name}${Date.now()}.jpeg`;
      const storageRef = storage().ref(path);
      await storageRef.putFile(img);
      const imgPath = await storageRef.getDownloadURL();
      const postValues = {
        ...values,
        img: imgPath,
        owner: {
          ownerId: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
        }
      }
      await firestore()
        .collection('pets')
        .add(postValues);
      navigation.navigate('PetsScreen');
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Un error a ocurrido trata mas tarde', [
        {text: 'Okay'},
      ]);
    }
  };

  const {errors, values, onChange, onSubmit} = useForm(
    initialState,
    validation,
    savePet,
  );

  const {name, description, specie, yearOfBirth, gender, img} = values;

  if (loading) return <LoadingScreen />;

  return (
    <ScrollView style={styles.container}>
      <ImagePicker
        onChange={onChange}
        name="img"
        value={img}
        errorMessage={errors.img}
      />
      <Input
        label="Nombre"
        name="name"
        onChange={onChange}
        value={name}
        errorMessage={errors.name}
      />
      <Input
        label="Descripcion"
        name="description"
        onChange={onChange}
        value={description}
        multiline
      />
      <Input
        label="Año de Nacimiento"
        errorMessage={errors.yearOfBirth}
        name="yearOfBirth"
        onChange={onChange}
        value={yearOfBirth}
        keyboardType="number-pad"
      />
      <FormPicker
        items={species}
        name="specie"
        label="Selecciona la especie"
        onChange={onChange}
        value={specie}
        PickerItemComponent={SpeciePickerItem}
        errorMessage={errors.specie}
      />
      <Switch
        onChange={() =>
          onChange(gender != 'male' ? 'male' : 'female', 'gender')
        }
        name="gender"
        label={gender === 'male' ? 'Macho' : 'Hembra'}
        value={gender}
      />
      <AppButton title="Guardar" onPress={onSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
