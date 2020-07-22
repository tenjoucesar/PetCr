import React, {createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthContext = createContext({});
const userDB = firestore().collection('users');

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      isNewUser(user);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function addNewUser(user) {
    const {emailVerified, email, displayName, uid, photoURL} = user;
    await userDB.add({
      displayName,
      email,
      emailVerified,
      uid,
      photoURL,
    });
    setInitializing(false);
  }

  function isNewUser(user) {
    firestore()
      .collection('users')
      .where('uid', '==', user.uid)
      .get()
      .then(querySnapshot => {
        const uidStack = [];
        querySnapshot.forEach(documentSnapshot => {
          const {uid} = documentSnapshot.data();
          uidStack.push({uid});
        });

        return uidStack.length >= 1 ? setInitializing(false) : addNewUser(user);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        initializing,
        setInitializing,
        facebookLogin: () => {
          try {
            setInitializing(true);
            LoginManager.logInWithPermissions(['public_profile','email']).then(result => {
              if (result.isCancelled) {
                setInitializing(false);
              }
              AccessToken.getCurrentAccessToken().then(data => {
                const facebookCredential = auth.FacebookAuthProvider.credential(
                  data.accessToken,
                );
                return auth().signInWithCredential(facebookCredential);
              })
            })
          } catch (e) {
            console.error(e);
          }
        },
        googleLogin: () => {
          try {
            setInitializing(true);
            GoogleSignin.signIn().then((data) => {
              const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
              return auth().signInWithCredential(googleCredential);
            }).catch(error => {
              setInitializing(false);
            })
          } catch (e) {
            console.error(e);
          }
        },
        logout: async (navigation) => {
          try {
            await auth().signOut().then(navigation.navigate('PetsStackScreen'))
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
