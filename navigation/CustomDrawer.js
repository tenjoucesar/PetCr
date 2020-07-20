import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../Providers/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomDrawerContent({ navigation, user }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{flex: 1}} >
      <DrawerContentScrollView >
        <Text style={styles.title}>Pets CR</Text>
        <View style={styles.divisorLine} />
        {user &&
        <>
          <View style={styles.userInfoContainer}>
            <Image source={{ uri: user.photoURL }} style={styles.imageProfile} />
            <View style={styles.userDataContainer}>
              <Text style={styles.userName}>{user.displayName}</Text>
              <TouchableOpacity >
                <Text style={styles.goToAccount}>Ver Cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divisorLine} />
        </>
        }
        <DrawerItem
          label='Mascotas'
          icon={() => <Icon name='paw' size={30} color='black' style={styles.icon} />}
          onPress={() => { navigation.navigate('PetsScreen') }}
        />
        {/* {user && */}
          <DrawerItem
            label='Acceso'
            icon={() => <Icon name='sign-in' size={30} color='black' style={styles.icon} />}
            onPress={() => { navigation.navigate('LoginScreen') }}
          />
        {/* } */}
        <DrawerItem
          label='Adoptados'
          icon={() => <Icon name='check-square-o' size={30} color='black' style={styles.icon} />}
          onPress={() => { navigation.navigate('AdoptedScreen') }}
        />

        <DrawerItem
          label='Rescatistas'
          icon={() => <Icon name='home' size={30} color='black' style={styles.icon} />}
          onPress={() => { navigation.navigate('RescuersScreen') }}
        />

        {user &&
        <>
        <DrawerItem
          label='Chat'
          icon={() => <Icon name='comments-o' size={30} color='black' style={styles.icon} />}
          // onPress={() => { navigation.navigate('ChatsScreen') }}
          onPress={() => {
            navigation.navigate('ChatsStackScreen', { screen: 'ChatsScreen'})
            }}
        />
        <DrawerItem
          label='Perfil'
          icon={() => <Icon name='user' size={30} color='black' style={styles.icon} />}
          onPress={() => {}}
        />
        <View style={styles.divisorLine} />
          <DrawerItem
            label='Desconectarse'
            style={styles.signOut}
            icon={() => <Icon name='sign-out' size={30} style={styles.icon} color='black' />}
            onPress={() => logout()}
          />
        </>
        }
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  userName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 15,
  },
  userDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  divisorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
    marginRight: 10
  },
  icon: {
    marginRight: -15,
    width: 30,
  },
  signOut: {
    marginTop: 10,
  },
  goToAccount: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 6,
    color: '#4a148c'
  }
})