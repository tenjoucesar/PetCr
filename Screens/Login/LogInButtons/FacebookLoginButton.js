import React from 'react';
import auth from '@react-native-firebase/auth';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

function FacebookSignInButton(  ) {
  const onFacebookButtonPress = async () => {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        throw 'Cancelaste el inicio de sesion';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Algo salio mal obteniendo tus valores de inicio de sesion';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      return auth().signInWithCredential(facebookCredential);
    }

  return (
    <TouchableOpacity
      style={styles.loginScreenButton}
      onPress={() => onFacebookButtonPress()}
      underlayColor='#fff'
    >
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
    backgroundColor:'#3b5998',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    width: 190,
    height: 43,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
      color:'#fff',
      paddingLeft : 5,
      fontWeight: "700",
      letterSpacing: -0.25,
  }
});
