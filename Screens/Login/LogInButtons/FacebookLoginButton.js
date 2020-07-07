import React from 'react';
import auth from '@react-native-firebase/auth';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

function FacebookSignInButton(  ) {
  const onFacebookButtonPress = async () => {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      return auth().signInWithCredential(facebookCredential);
    }

  return (
    // <Button
    //   title="Facebook Sign-In"
    //   onPress={() => onFacebookButtonPress()}
    //   style={styles.container}
    // />

    <TouchableOpacity
      style={styles.loginScreenButton}
      onPress={() => onFacebookButtonPress()}
      underlayColor='#fff'
    >
      <Icon name="facebook" size={28} color="white" style={styles.icon} />
      <Text style={styles.loginText}>Sign in with Facebook</Text>
    </TouchableOpacity>
  );
}

export default FacebookSignInButton;

const styles = StyleSheet.create({
  loginScreenButton: {
    marginVertical: 10,
    paddingTop: 5,
    backgroundColor:'#3b5998',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    width: 190,
    height: 38,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
      color:'#fff',
      paddingLeft : 10,
      fontWeight: "700",
      letterSpacing: -0.25,
  },
  facebookIcon: {
  }
});
