import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from 'Providers/AuthProvider';
import CustomDrawerContent from 'Components/CustomDrawer';
import Screens from './Screens';

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { user } = useContext( AuthContext );

  return (
      <Drawer.Navigator
        initialRouteName='NewPetScreen'
        screenOptions={{}}
        drawerContent={(props) => <CustomDrawerContent user={user} {...props} />}
      >
        {Screens.map(screen =>  screen)}
      </Drawer.Navigator>
  );
}
