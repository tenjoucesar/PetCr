import React, {createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const AuthContext = createContext({});
const userDB = firestore().collection('users');
const DebounceDueTime = 200;

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  var debounceTimeout;
  function onAuthStateChanged(user) {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      debounceTimeout = null;

      handleAuthStateChanged(user);
    }, DebounceDueTime);
  }

  function handleAuthStateChanged(user) {
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
    await userDB.doc(uid).set({
      displayName,
      email,
      emailVerified,
      uid,
      photoURL,
    });
    setInitializing(false);
  }

  function isNewUser(user) {
    const userRef = firestore()
      .collection('users')
      .doc(user.uid);
    userRef.get().then(doc => {
      !doc.exists ? addNewUser(user) : setInitializing(false);
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
            LoginManager.logInWithPermissions(['public_profile', 'email']).then(
              result => {
                if (result.isCancelled) {
                  setInitializing(false);
                }
                AccessToken.getCurrentAccessToken().then(data => {
                  const facebookCredential = auth.FacebookAuthProvider.credential(
                    data.accessToken,
                  );
                  return auth().signInWithCredential(facebookCredential);
                });
              },
            );
          } catch (e) {
            console.error(e);
          }
        },
        googleLogin: () => {
          try {
            setInitializing(true);
            GoogleSignin.signIn()
              .then(data => {
                const googleCredential = auth.GoogleAuthProvider.credential(
                  data.idToken,
                );
                return auth().signInWithCredential(googleCredential);
              })
              .catch(error => {
                setInitializing(false);
              });
          } catch (e) {
            console.error(e);
          }
        },
        logout: async navigation => {
          try {
            await auth()
              .signOut()
              .then(navigation.navigate('PetsStackScreen'));
          } catch (e) {
            console.error(e);
          }
        },
        emailAndPassLogin: () => {
          debugger;
          auth()
            .signInWithEmailAndPassword(
              'jane.doe@example.com',
              'SuperSecretPassword!',
            )
            // .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
