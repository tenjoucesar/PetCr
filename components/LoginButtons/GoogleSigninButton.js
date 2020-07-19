import React, {useContext, useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {AuthContext} from '../../Providers/AuthProvider';

function GoogleSignInButton() {
  const {googleLogin} = useContext(AuthContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'159654830401-snuots40ikei6fukmma8l58l33jf52rs.apps.googleusercontent.com',
    });
  }, []);

  return (
    <GoogleSigninButton
      style={{width: 197, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => googleLogin()}
      text="hola"
    />
  );
}

export default GoogleSignInButton;
