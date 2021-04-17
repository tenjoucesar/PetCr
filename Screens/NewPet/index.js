import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View, Alert, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { AuthContext } from 'Providers/AuthProvider';
import {
  AppButton,
  FormPicker,
  ImagePicker,
  Input,
  SpeciePickerItem,
  Switch,
  ErrorMessage
} from 'Components/Form';
import LoadingScreen from 'Screens/LoadingScreen';
import provinces from 'Screens/HomeScreen/DesiredLocation/provincias';

import species from './species';
import useForm from '../../hooks/useForm';
import validation from './validations';

const initialState = {
  adopted: false,
  description: '',
  gender: 'Macho',
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
      images.forEach((img, i) => storeRef.push(storage().ref(`pets/${name}${i}${Date.now()}.jpeg`)));
      await Promise.all(storeRef.map((ref, i) => ref.putFile(images[i])));
      const imgPath = await Promise.all(storeRef.map(ref => ref.getDownloadURL()));
      values.yearOfBirth = Number(values.yearOfBirth);
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
      Alert.alert('Error', 'Un error a ocurrido trata mas tarde', [ {text: 'Okay'}, ]);
    }
  };

  const { errors, values, onChange, onSubmit } = useForm(
    initialState,
    validation,
    savePet,
  );

  const { name, description, specie, yearOfBirth, gender, images, province } = values;

  if (loading) return <LoadingScreen />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1, backgroundColor: 'white'}}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <ImagePicker
        onChange={onChange}
        name="images"
        images={images}
        errorMessage={errors.images}
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
        label="Año de Nacimiento"
        errorMessage={errors.yearOfBirth}
        placeholder="Ingresa la fecha de nacimiento"
        name="yearOfBirth"
        onChange={onChange}
        value={yearOfBirth}
        keyboardType="number-pad"
        maxLength={4}
      />
      <Input
        label="Descripcion"
        name="description"
        placeholder="Ingresa la descripción"
        onChange={onChange}
        value={description}
        multiline
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
        onChange={onChange}
        name="gender"
        label={gender}
        value={gender}
      />
      <ScrollView>
        <DropDownPicker
        items={provinces}
        placeholder="Selecciona una provincia"
        style={styles.dropdownContainer}
        onChangeItem={item => onChange( item.value, 'province' )}
        value={province}
        placeholderStyle={{
          fontWeight: 'bold',
          backgroundColor: '#F7F8FC',
          height: 35,
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
      />
        <ErrorMessage error={errors.province}/>
        <AppButton title="Guardar" onPress={onSubmit} />
      </ScrollView>
      </View>
      </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  dropdownContainer: {
    width: '100%',
    height: 60,
    paddingHorizontal: 0,
    borderWidth: 0,
    backgroundColor: 'white',
  },
});
