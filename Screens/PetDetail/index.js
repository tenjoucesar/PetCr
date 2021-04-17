import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import ImageList from 'Components/ImageList';
import AppModal from 'Components/AppModal';
import { DetailText } from 'Components/Text';
import { MainButton } from 'Components/Buttons';
import { AuthContext } from 'Providers/AuthProvider';
import { ChatContext } from 'Providers/ChatProvider';

const PetDetailsScreen = ({ route: { params: {
  pet: {
    name, owner, images,  gender, specie, province, yearOfBirth, description,
  }
} }, navigation }) => {
  const [modalVisible, setModalVisible] = useState( false );
  const { generateNewChat } = useContext( ChatContext );
  const { user } = useContext( AuthContext );
  const chatWithPetOwner = owner => {
    const sender = {
      name: user.displayName,
      senderId: user.uid,
      photoURL: user.photoURL,
    };
    generateNewChat( owner, sender, navigation );
  };

  return (
    <ScrollView>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        questionText="Estas seguro que deseas empezar una conversacion con la casa cuna de esta mascota?"
        functionToCallBack={chatWithPetOwner}
        extraParams={owner}
      />
      <ImageList images={images} />
      <View style={styles.container}>
        <View style={styles.breedContainer}>
        <Text style={styles.breedTitle}>{name}</Text>
        <MainButton onPress={() => setModalVisible(true)}>
          Lo quiero
        </MainButton>
        </View>
        <DetailText title="Protectora" text={owner.name} />
        <DetailText title="Edad" text={(new Date().getFullYear() - yearOfBirth) + ' Años'} />
        <DetailText title="Especie" text={specie} />
        <DetailText title="Genero" text={gender} />
        <DetailText title="Provincia" text={province} />
        <DetailText title="Descripcion" text={description} />
      </View>
    </ScrollView>
  );
};

export default PetDetailsScreen;

const styles = StyleSheet.create({
  image: {
    minWidth: '100%',
    minHeight: 400,
    justifyContent: 'center',
  },
  container: {
    margin: 15,
  },
  breedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  breedTitle: {
    color: 'green',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
