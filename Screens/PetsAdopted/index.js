import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { connect } from 'react-redux';
import AdoptedGrid from "../../components/Grid/AdoptedGrid";

const PetsAdoptedScreen = ({ navigation, adoptedPets }) => {
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

const mapStateToProps = (state) => ({ adoptedPets: state.pets.pets.filter(pet => pet.adopted)});
export default connect(mapStateToProps)(PetsAdoptedScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});