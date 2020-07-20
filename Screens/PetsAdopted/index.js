import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { PetContext } from '../../Providers/PetsProvider';
import AdoptedGrid from "../../components/Grid/AdoptedGrid";

const PetsAdoptedScreen = ({ navigation }) => {
  const { pets } = useContext(PetContext);
  const adoptedPets = pets.filter(pet => pet.adopted);

  const renderPetItem = ({item: {name, protective, breed, img}, item}) => (
    <AdoptedGrid
      name={name}
      protective={protective}
      breed={breed}
      img={img}
      onSelect={() =>
        navigation.navigate("PetDetails", {
          params: {
          item
          }
        })
      }
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={adoptedPets}
      keyExtractor={item => item.id}
      renderItem={renderPetItem}
    />
  );
};

export default PetsAdoptedScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});