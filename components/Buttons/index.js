import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeaderCustom = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Icon}
    iconSize={23}
    color={'#4a148c'}
  />
);

export const MainButton = ({ children, onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default CustomHeaderCustom;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    backgroundColor: '#4a148c',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textTransform: "capitalize",
  },
});

