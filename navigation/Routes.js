import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading/Loading';
import LoginStackScreen from './LoginStack';
import PetsStackScreen from './PetsStack';
import AdoptedStackScreen from './AdoptedStack';
import ProfileStackScreen from './ProfileStack';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const { initializing, setInitializing } = useContext(AuthContext);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <CustomDrawerContent user={user} {...props} />}
      >
          <Drawer.Screen name='PetsScreen' component={PetsStackScreen} />
          <Drawer.Screen name='LoginScreen' component={LoginStackScreen} />
          <Drawer.Screen name='AdoptedScreen' component={AdoptedStackScreen} />
          <Drawer.Screen name='Profile' component={ProfileStackScreen}/>
      </Drawer.Navigator>

  );
}