import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import AdoptedGrid from "../../components/Grid/AdoptedGrid";

const PetsAdoptedScreen = ({ navigation }) => {
  const adopted = useSelector((state) => state.pets.adopted);

  return (
    <FlatList
      style={styles.container}
      data={adopted}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <AdoptedGrid
          name={itemData.item.name}
          protective={itemData.item.protective}
          breed={itemData.item.breed}
          img={itemData.item.img}
          onSelect={() =>
            navigation.navigate("PetDetailsScreen", {
             params: {
                item
              }
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default PetsAdoptedScreen;
