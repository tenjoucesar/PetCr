
import React from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

// GoogleSignin.configure({
//   webClientId: '',
// });

function GoogleSignInButton () {
  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }


  return (
    <GoogleSigninButton
      style={{ width: 197, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => onGoogleButtonPress()}
      text="hola"
      // disabled={this.state.isSigninInProgress}
    />
  )
}

export default GoogleSignInButton;