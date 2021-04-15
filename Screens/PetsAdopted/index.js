import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { PetContext } from 'Providers/PetsProvider';
import AdoptedGrid from "Components/Grid/AdoptedGrid";

const PetsAdoptedScreen = ({ navigation }) => {
  const { pets } = useContext(PetContext);
  const adoptedPets = pets.filter(pet => pet.adopted);
  const renderPetItem = ({item: {owner, name, images}, item}) => (
    <AdoptedGrid
      name={name}
      protective={owner.name}
      img={images.length ? images[0] : ''}
      onSelect={() => navigation.navigate("PetDetails", { params: item })}
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