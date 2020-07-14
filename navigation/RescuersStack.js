import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RescuersStackScreen = ({}) => (
  <Stack.Navigator>
    <Stack.Screen
      name='RescuersScreen'
      component=''
    />
  </Stack.Navigator>
);

export default RescuersStackScreen;