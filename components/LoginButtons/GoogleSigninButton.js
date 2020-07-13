import React, {useContext} from 'react'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { AuthContext } from '../../navigation/AuthProvider';

GoogleSignin.configure({
  webClientId: '',
});

function GoogleSignInButton () {
  const { googleLogin } = useContext(AuthContext);

  return (
    <GoogleSigninButton
      style={{ width: 197, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => googleLogin()}
      text="hola"
    />
  )
}

export default GoogleSignInButton;