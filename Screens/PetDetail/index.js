import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { DetailText } from '../../components/Text';
import { MainButton } from '../../components/Buttons';
import {AuthContext} from '../../navigation/AuthProvider';
import {ChatContext} from '../../navigation/ChatProvider';

const PetDetailsScreen = ({ route }) => {
  const petDetailsObj = route.params.params.item;
  const { generateNewChate, } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const chatWithPetOwner = (ownerId) => {
    debugger;
    const userId = user.uid;
    debugger
    generateNewChate(ownerId, userId);
  }

  const {
    img,
    name,
    breed,
    protective,
    age,
    weight,
    gender,
    description,
    ownerId,
  } = petDetailsObj;
  return (
    <ScrollView>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.breedContainer}>
          <View style={styles.breedTextContainer}>
            <Text style={styles.breedTitle}>{name}</Text>
            <Text>{breed}</Text>
          </View>
          <MainButton onPress={() => chatWithPetOwner(ownerId)}>Lo quiero</MainButton>
        </View>
        <DetailText title="Protectora" text={protective} />
        <DetailText title="Edad" text={age + " Años"} style={styles.details} />
        <DetailText title="Peso" text={weight + " Kg"} style={styles.details} />
        <DetailText title="Gender" text={gender} style={styles.details} />
        <DetailText title="Descripcion" text={description} />
      </View>
    </ScrollView>
  );
};

export default PetDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 450,
  },
  container: {
    margin: 15,
  },
  breedContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  breedTextContainer: {
    width: "50%",
  },
  breedTitle: {
    color: "green",
    fontSize: 20,
    textTransform: "uppercase",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
