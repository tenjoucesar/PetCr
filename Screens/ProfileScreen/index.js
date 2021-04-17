import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'Constants/colors';
import { AuthContext } from 'Providers/AuthProvider';

const index = ({ navigation }) => {
  const {
    user, logout
  } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.imgContainer}>
          <Image source={{uri: user && user.photoURL}} style={styles.img} />
        </View>
        <View style={styles.detailContainer}>
          <Icon
            name="account"
            color={colors.primary}
            size={30}
            style={styles.icon}
          />
          <Text style={styles.text}>{user && user.displayName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Icon
            name="email"
            color={colors.primary}
            size={30}
            style={styles.icon}
          />
          <Text style={styles.text}>{user && user.email}</Text>
        </View>
      </View>
      <Button title="Desconectarse" onPress={() => {
          logout(navigation)
          navigation.navigate('PetsStackScreen')
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 200
  },
  imgContainer: {
    backgroundColor: '#94AFCC',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    width: '100%',
    marginBottom: 30,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  details: {
    flex: 1
  },
  detailContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16
  },
});

export default index;
