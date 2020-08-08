import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {AuthContext} from '../../Providers/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

const index = () => {
  const {
    user: {email, photoURL, displayName},
  } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: photoURL}} style={styles.img} />
      </View>
      <View style={styles.details}>
        <View style={styles.detailContainer}>
          <Icon
            name="account"
            color={colors.primary}
            size={30}
            style={styles.icon}
          />
          <Text style={styles.text}>{displayName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Icon
            name="email"
            color={colors.primary}
            size={30}
            style={styles.icon}
          />
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    backgroundColor: '#94AFCC',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    width: '100%',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  details: {paddingTop: 20},
  detailContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {paddingHorizontal: 20},
  text: {fontSize: 16},
});

export default index;
