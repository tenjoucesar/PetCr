import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button, Image } from 'react-native';
import GoogleSignInButton from './LogInButtons/GoogleLogIn';
import FacebookSignInButton from './LogInButtons/FacebookLoginButton';

function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  function onAuthStateChanged(user) {
    debugger;
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
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
        <Text style={styles.title}>Inicia Sesion con alguno de los siguientes metodos</Text>
        <FacebookSignInButton/>
        <GoogleSignInButton />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user.email}</Text>
      <Image source={{uri : user.photoURL}} style={{width: 100, height: 100, borderRadius: 50}}/>
      <Button
      title="Desconectarse"
      onPress={() => logOff()}
      />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 150,
  },
  title: {
    fontSize: 20,
    maxWidth: 320,
    textAlign: "center",
    marginBottom: 20,
  }
})