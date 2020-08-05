import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../Screens/Profile'

const Stack = createStackNavigator();

const ProfileStackScreen = ({}) => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileScreen" options={{headerTitle:"Mi Perfil",headerTitleAlign:"center"}} component={Profile} />
  </Stack.Navigator>
);

export default ProfileStackScreen;
