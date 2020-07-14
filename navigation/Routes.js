import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import LoginStackScreen from './LoginStack';
import PetsStackScreen from './PetsStack';
import AdoptedStackScreen from './AdoptedStack';
import ProfileStackScreen from './ProfileStack';
import RescuersStackScreen from './RescuersStack';
import CustomDrawerContent from './CustomDrawer';
import ChatStackScreen from './ChatStack';

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { user } = useContext(AuthContext);

  return (
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <CustomDrawerContent user={user} {...props} />}
      >
          <Drawer.Screen name='PetsScreen' component={PetsStackScreen} />
          <Drawer.Screen name='LoginScreen' component={LoginStackScreen} />
          <Drawer.Screen name='AdoptedScreen' component={AdoptedStackScreen} />
          <Drawer.Screen name='Profile' component={ProfileStackScreen}/>
          <Drawer.Screen name='RescuersScreen' component={RescuersStackScreen}/>
          <Drawer.Screen name='ChatScreen' component={ChatStackScreen}/>
      </Drawer.Navigator>

  );
}