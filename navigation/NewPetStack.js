import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from '../components/Buttons';

import NewPet from '../Screens/NewPet';

const Stack = createStackNavigator();

const NewPetStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="NewPet"
      component={NewPet}
      options={{
        headerTitle: 'Nueva Mascota',
        headerTitleAlign:"center",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="navicon"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        )
      }}
    />
  </Stack.Navigator>
);

export default NewPetStack;