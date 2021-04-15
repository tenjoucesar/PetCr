import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginStackScreen from './Stacks/LoginStack';
import PetsStackScreen from './Stacks/PetsStack';
import AdoptedStackScreen from './Stacks/AdoptedStack';
import ChatStackScreen from './Stacks/ChatStack';
import ProfileStackScreen from './Stacks/ProfileStack';
import RescuersStackScreen from './Stacks/RescuersStack';
import NewPetStack from './Stacks/NewPetStack';
import HomeScreenStack from './Stacks/HomeScreenStack';
import ContactStack from './Stacks/ContactStack';

const Drawer = createDrawerNavigator();

const  Screens = [
  <Drawer.Screen key='HomeScreen' name='HomeScreen' component={HomeScreenStack} options={{gestureEnabled: false}} />,
  <Drawer.Screen key='PetsStackScreen' name='PetsStackScreen' component={PetsStackScreen} />,
  <Drawer.Screen key='LoginScreen' name='LoginScreen' component={LoginStackScreen} />,
  <Drawer.Screen key='AdoptedScreen' name='AdoptedScreen' component={AdoptedStackScreen} />,
  <Drawer.Screen key='ProfileScreen' name='ProfileScreen' component={ProfileStackScreen}/>,
  <Drawer.Screen key='RescuersScreen' name='RescuersScreen' component={RescuersStackScreen}/>,
  <Drawer.Screen key='ChatsStackScreen' name='ChatsStackScreen' unmountOnBlur={true} options={{unmountOnBlur: true}} component={ChatStackScreen} />,
  <Drawer.Screen key='NewPetScreen' name='NewPetScreen' component={NewPetStack} />,
  <Drawer.Screen key='ContactScreen' name='ContactScreen' component={ContactStack} />
]

export default Screens;