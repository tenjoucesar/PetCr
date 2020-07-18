import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    webClientId: 'oAuth client id',
    offlineAccess: true,
  });
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        initializing,
        setInitializing,
        facebookLogin: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);
            if (result.isCancelled) {
              throw 'Cancelaste el inicio de sesion';
            }
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
              throw 'Algo salio mal obteniendo tus valores de inicio de sesion';
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );
            return auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.error(e);
          }
        },
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            console.log(idToken);
            const googleCredential = auth.GoogleAuthProvider.credential(
              idToken,
            );
            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.error(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
