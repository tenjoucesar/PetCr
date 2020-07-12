import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStackScreen = ({}) => (
  <Stack.Navigator>
    <Stack.Screen
      name='ProfileScreen'
      component=''
    />
  </Stack.Navigator>
);

export default ProfileStackScreen;