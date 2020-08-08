import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
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
import provinces from '../HomeScreen/DesiredLocation/provincias';
import useForm from '../../hooks/useForm';

const validation = values => {
  const errors = {};
  const {name, specie, images, province} = values;
  if (!name.trim()) errors.name = 'El nombre es obligatorio';
  if (!specie) errors.specie = 'Seleccione la Especie';
  if (!images.length) errors.images = 'Selecciona una imagen';
  if (!province) errors.province = 'Selecciona una provincia';
  return errors;
};

const initialState = {
  adopted: false,
  description: '',
  gender: 'male',
  images: [],
  name: '',
  province: null,
  specie: '',
  yearOfBirth: '',
};

export default function NewPetScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext);

  const savePet = async () => {
    try {
      setLoading(true);
      const storeRef = [];
      images.forEach((img, i) => {
        storeRef.push(storage().ref(`pets/${name}${i}${Date.now()}.jpeg`));
      });
      await Promise.all(storeRef.map((ref, i) => ref.putFile(images[i])));
      const imgPath = await Promise.all(
        storeRef.map(ref => ref.getDownloadURL()),
      );

      const pet = {
        ...values,
        images: imgPath,
        owner: {
          ownerId: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
        },
      };
      await firestore()
        .collection('pets')
        .add(pet);
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

  const {name, description, specie, yearOfBirth, gender, images} = values;

  if (loading) return <LoadingScreen />;

  return (
    <ScrollView style={styles.container}>
      <ImagePicker
        onChange={onChange}
        name="images"
        images={images}
        errorMessage={errors.images}
      />
      <DropDownPicker
        items={provinces}
        placeholder="Selecciona una provincia"
        style={styles.dropdownContainer}
        onChangeItem={item => onChange(item.value, 'province')}
      />
      <Input
        label="Nombre"
        name="name"
        placeholder="Ingresa el Nombre"
        onChange={onChange}
        value={name}
        errorMessage={errors.name}
      />
      <Input
        label="Descripcion"
        name="description"
        placeholder="Ingresa la descripción"
        onChange={onChange}
        value={description}
        multiline
      />
      <Input
        label="Año de Nacimiento"
        errorMessage={errors.yearOfBirth}
        placeholder="Ingresa la fecha de nacimiento"
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
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  dropdownContainer: {
    width: '100%',
    height: 60,
    paddingHorizontal: 0,
    backgroundColor: 'white',
    borderWidth: 0,
  },
});
