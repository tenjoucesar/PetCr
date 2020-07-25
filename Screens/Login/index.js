import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Image} from 'react-native';
import GoogleSignInButton from '../../components/LoginButtons/GoogleSigninButton';
import FacebookSignInButton from '../../components/LoginButtons/FacebookSigninButton';
import {AuthContext} from '../../Providers/AuthProvider';
import Loading from '../../components/Loading';

function Login({navigation}) {
  const {user, logout, initializing, emailAndPassLogin} = useContext(AuthContext);

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
        <Button onPress={() => emailAndPassLogin()} title='lOGUEATE CON TU CORREO  Y CONTRASE;A' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {user.email}</Text>
      <Image source={user.photoURL && user.photoURL.length!=0?{uri: user.photoURL}:null} style={styles.imageProfile} />
      <Button title="Desconectarse" onPress={() => logout(navigation)} />
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
