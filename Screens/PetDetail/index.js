import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {DetailText} from '../../components/Text';
import {MainButton} from '../../components/Buttons';
import {AuthContext} from '../../Providers/AuthProvider';
import {ChatContext} from '../../Providers/ChatProvider';
import AppModal from '../../components/AppModal';

import ImageList from '../../components/ImageList';

const PetDetailsScreen = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {generateNewChat} = useContext(ChatContext);
  const {user} = useContext(AuthContext);
  const petDetailsObj = route.params.params.item;

  const chatWithPetOwner = owner => {
    const sender = {
      name: user.displayName,
      senderId: user.uid,
      photoURL: user.photoURL,
    };
    generateNewChat(owner, sender, navigation);
  };

  const {
    images,
    name,
    breed,
    protective,
    age,
    weight,
    gender,
    description,
    owner,
  } = petDetailsObj;

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
          <View style={styles.breedTextContainer}>
            <Text style={styles.breedTitle}>{name}</Text>
            <Text>{breed}</Text>
          </View>
          <MainButton onPress={() => setModalVisible(true)}>
            Lo quiero
          </MainButton>
        </View>
        <DetailText title="Protectora" text={protective} />
        <DetailText title="Edad" text={age + ' Años'} style={styles.details} />
        <DetailText title="Peso" text={weight + ' Kg'} style={styles.details} />
        <DetailText title="Gender" text={gender} style={styles.details} />
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
    marginBottom: 15,
  },
  breedTextContainer: {
    width: '50%',
  },
  breedTitle: {
    color: 'green',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
