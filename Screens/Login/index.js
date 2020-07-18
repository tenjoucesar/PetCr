import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Image} from 'react-native';
import GoogleSignInButton from '../../components/LoginButtons/GoogleSigninButton';
import FacebookSignInButton from '../../components/LoginButtons/FacebookSigninButton';
import {AuthContext} from '../../navigation/AuthProvider';
import Loading from '../../components/Loading';

function Login() {
  const {user, logout, initializing} = useContext(AuthContext);

  if (initializing) {
    return <Loading />;
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Inicia Sesion con alguno de los siguientes metodos
        </Text>
        <FacebookSignInButton />
        <GoogleSignInButton />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user.email}</Text>
      <Image source={{uri: user.photoURL}} style={styles.imageProfile} />
      <Button title="Desconectarse" onPress={() => logout()} />
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
    textAlign: 'center',
    marginBottom: 20,
  },
  imageProfile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginVertical: 5,
  },
});
