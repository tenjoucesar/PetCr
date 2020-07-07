import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button, Image } from 'react-native';
import GoogleSignInButton from './LogInButtons/GoogleLogIn';
import FacebookSignInButton from './LogInButtons/FacebookLoginButton';
import { LoginManager, AccessToken, LoginButton } from 'react-native-fbsdk';


function Login() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // Handle user state changes
  function onAuthStateChanged(user) {
    debugger;
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const logOff = () => {
    debugger;
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <FacebookSignInButton/>
        <GoogleSignInButton />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Image source={{uri : user.photoURL}} style={{width: 100, height: 100, borderRadius: 50}}/>
      <Button
      title="logoff"
      onPress={() => logOff()}
      />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5,
  }
})