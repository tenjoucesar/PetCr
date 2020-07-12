import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from '../components/Buttons';
import PetsScreen from '../Screens/Pets';
import PetDetailsScreen from '../Screens/PetDetail';

const Stack = createStackNavigator();

const PetsStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="PetsScreen"
      component={PetsScreen}
      options={{
        headerTitle: 'Adopta una mascota',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="navicon"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Search" iconName="search" onPress={() => ''} />
          </HeaderButtons>
        ),
      }}
    />
    <Stack.Screen
      name="PetDetails"
      component={PetDetailsScreen}
      options={{
        headerTitle: 'name',
      }}
    />
  </Stack.Navigator>
);

export default PetsStackScreen;