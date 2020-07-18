import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../components/Buttons';
import PetDetailsScreen from '../Screens/PetDetail';
import PetsAdoptedScreen from '../Screens/PetsAdopted';
import NewPet from '../Screens/NewPet';

const Stack = createStackNavigator();

const AdoptedStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="AdoptedScreen"
      component={PetsAdoptedScreen}
      options={{
        headerTitle: 'Adoptados',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="navicon"
              onPress={() => navigation.toggleDrawer()}
            />
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
    <Stack.Screen
      name="NewPet"
      component={NewPet}
      options={{
        headerTitle: 'Agrega una mascota',
      }}
    />
  </Stack.Navigator>
);

export default AdoptedStackScreen;
