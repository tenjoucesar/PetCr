import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const PetGrid = ({ img, onSelect }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onSelect}>
      <Image source={{ uri: img }} style={styles.bgImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default PetGrid;
