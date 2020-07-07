import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const DetailText = ({ title, text, style }) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.defaultText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  defaultText: {
    fontSize: 15,
    color: "grey",
  },
});
