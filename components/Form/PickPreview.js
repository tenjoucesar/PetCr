import React from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImgPicker from 'react-native-image-picker';
import {PERMISSIONS, request} from 'react-native-permissions';

const PickPreview = ({onChangePick, img}) => {
  const getPermissions = async () => {
    const result = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
      }),
    );
    if (result !== 'granted') {
      Alert.alert(
        'Permisos Insuficientes',
        'Necesita proporcionar permisos para agregar imagenes',
        [{text: 'Okay'}],
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const result = await getPermissions();
    if (!result) return;
    ImgPicker.launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 500,
        maxHeight: 500,
        mediaType: 'photo',
      },
      response => {
        if (response.uri) onChangePick(response.uri);
        else if (response.error)
          Alert.alert('Error', 'Trata de nuevo', [{text: 'Okay'}]);
      },
    );
  };

  const onHandlePress = () => {
    if (!img) pickImage();
    else
      Alert.alert('Borrar', 'Seguro que quiere eliminar la foto ?', [
        {text: 'Si', onPress: () => onChangePick(img)},
        {text: 'No'},
      ]);
  };

  return (
    <TouchableOpacity onPress={onHandlePress} style={styles.container}>
      {img ? (
        <Image style={styles.img} source={{uri: img}} resizeMode="contain" />
      ) : (
        <Icon name="camera" size={25} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    marginTop: 10,
    overflow: 'hidden',
    width: '45%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default PickPreview;
