import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../navigation/AuthProvider';

function FacebookSignInButton() {
  const {facebookLogin} = useContext(AuthContext);
  return (
    <TouchableOpacity
      style={styles.loginScreenButton}
      onPress={() => facebookLogin()}
      underlayColor="#fff">
      <Icon name="facebook" size={31} color="white" />
      <Text style={styles.loginText}>Continua con Facebook</Text>
    </TouchableOpacity>
  );
}

export default FacebookSignInButton;

const styles = StyleSheet.create({
  loginScreenButton: {
    marginVertical: 10,
    paddingTop: 5,
    paddingLeft: 3,
    backgroundColor: '#3b5998',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    width: 190,
    height: 43,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    paddingLeft: 5,
    fontWeight: '700',
    letterSpacing: -0.25,
  },
});
