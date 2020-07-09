
import React from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '',
});

function GoogleSignInButton () {
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    debugger;

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }


  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => onGoogleButtonPress()}
      // disabled={this.state.isSigninInProgress}
    />
  )
}

export default GoogleSignInButton;