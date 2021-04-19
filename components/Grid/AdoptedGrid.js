import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

const AdoptedGrid = ({ name, protective, img, onSelect }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: img }} />
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{protective}</Text>
    </View>
    {/* <TouchableOpacity style={styles.buttonContainer} onPress={onSelect}>
      <Text>
        <Icon name="play" size={32} color="gray" />
      </Text>
    </TouchableOpacity> */}
  </View>
);

export default AdoptedGrid;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingVertical: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  name: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  text: {
    color: "grey",
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
