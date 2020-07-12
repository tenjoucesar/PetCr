import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createTabConfig } from './constants';

const Tab = ({ name, onPress, id, activeTab, tabKey }) => (
  <>
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => onPress(createTabConfig({ name, id }))}>
      <View style={[styles.button,  activeTab.tabKey === tabKey ? styles.buttonActive : styles.button] }>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  </>
);

export default Tab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  buttonActive: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.50,
    shadowRadius: 10.00,
    elevation: 16,
    marginTop: 0,
  },
  button: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: '#9B9B9B',
    shadowOpacity: 0.30,
    shadowOffset: {width: 0, height: 4},
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    // fontFamily: "open-sans",
    textTransform: "capitalize",
  },
});
