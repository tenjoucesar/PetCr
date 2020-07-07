import React from 'react';
import { Platform } from "react-native";
import { createStackNavigator, StackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import PetsScreen from '../Screens/Pets/index';
import PetDetailsScreen from '../Screens/PetDetail';
import PetsAdoptedScreen from '../Screens/PetsAdopted';
import {View, Text} from 'react-native';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from "../components/Buttons";

enableScreens();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Holaaa</Text>
    </View>
  );
}

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
      name="PetDetailsScreen"
      component={PetDetailsScreen}
      options={{
        headerTitle: 'name',
      }}
    />
  </Stack.Navigator>
);

const AdoptedStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={PetsAdoptedScreen}
      options={{
        headerTitle: 'Adoptados',
      }}
    />
    <Stack.Screen
      name="PetDetailsScreen"
      component={PetDetailsScreen}
      options={{
        headerTitle: 'name',
      }}
    />
  </Stack.Navigator>
)

const TestScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerTitle: 'Home Screen',
      }}
    />
  </Stack.Navigator>
)

const MyStack = () =>(
  <Drawer.Navigator initialRouteName='Home'>
    <Drawer.Screen name='Mascotas' component={PetsStackScreen} />
    <Drawer.Screen name='Home2' component={TestScreen} />
    <Drawer.Screen name='Adoptados' component={AdoptedStackScreen} />
  </Drawer.Navigator>
)

export default MyStack;
