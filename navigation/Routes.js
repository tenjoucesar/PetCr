import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from '../Providers/AuthProvider';
import LoginStackScreen from './Stacks/LoginStack';
import PetsStackScreen from './Stacks/PetsStack';
import AdoptedStackScreen from './Stacks/AdoptedStack';
import ChatStackScreen from './Stacks/ChatStack';
import ProfileStackScreen from './Stacks/ProfileStack';
import RescuersStackScreen from './Stacks/RescuersStack';
import CustomDrawerContent from './CustomDrawer';

import NewPetStack from './Stacks/NewPetStack';
import HomeScreenStack from './Stacks/HomeScreenStack';
import ContactStack from './Stacks/ContactStack';

const Drawer = createDrawerNavigator();

export default function Routes() {
  const {user} = useContext(AuthContext);

  return (
      <Drawer.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{}}
        drawerContent={(props) => <CustomDrawerContent user={user} {...props} />}>
        <Drawer.Screen name='HomeScreen' component={HomeScreenStack} options={{gestureEnabled: false}} />
        <Drawer.Screen name='PetsStackScreen' component={PetsStackScreen} />
        <Drawer.Screen name='LoginScreen' component={LoginStackScreen} />
        <Drawer.Screen name='AdoptedScreen' component={AdoptedStackScreen} />
        <Drawer.Screen name='ProfileScreen' component={ProfileStackScreen}/>
        <Drawer.Screen name='RescuersScreen' component={RescuersStackScreen}/>
        {/* If use logout we unmount the component so we reload new chats if needed. */}
        <Drawer.Screen name='ChatsStackScreen' unmountOnBlur={true} options={{unmountOnBlur: true}} component={ChatStackScreen} />
        <Drawer.Screen name='NewPetScreen' component={NewPetStack} />
        <Drawer.Screen name="ContactScreen" component={ContactStack} />
      </Drawer.Navigator>
  );
}
