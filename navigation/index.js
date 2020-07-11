import React from 'react';
import { Platform } from "react-native";
import { createStackNavigator, StackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import PetsScreen from '../Screens/Pets/index';
import PetDetails from '../Screens/PetDetail';
import PetsAdoptedScreen from '../Screens/PetsAdopted';
import { View, Text, StyleSheet } from 'react-native';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from "../components/Buttons";
import LoginScreen from '../Screens/Login';
import Icon from 'react-native-vector-icons/FontAwesome';

enableScreens();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      component={PetDetails}
      options={{
        headerTitle: 'name',
      }}
    />
  </Stack.Navigator>
);

const ProfileStackScreen = ({}) => (
<Stack.Navigator>
  <Stack.Screen
    name='ProfileScreen'
    component=''
  />
</Stack.Navigator>
);

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
      component={PetDetails}
      options={{
        headerTitle: 'name',
      }}
    />
  </Stack.Navigator>
)

const LoginStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerTitle: 'Acceso',
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
  </Stack.Navigator>
)

const CustomDrawerContent = ({navigation}) => (
  <View style={{flex: 1}}>
    <DrawerContentScrollView >
    <View style={{flex: 1}}>
      <Text style={styles.title}>Pets CR</Text>
    </View>
    <View
        style={styles.divisorLine}
      />
      <DrawerItem
        label='Mascotas'
        icon={() => <Icon name='paw' size={30} color='black' style={styles.icon} />}
        onPress={() => {navigation.navigate('PetsScreen')}}
      />
      <DrawerItem
        label='Acceso'
        icon={() => <Icon name='sign-in' size={30} color='black' style={styles.icon} />}
        onPress={() => {navigation.navigate('LoginScreen')}}
      />
      <DrawerItem
        label='Adoptados'
        icon={() => <Icon name='check-square-o' size={30} color='black' style={styles.icon} />}
        onPress={() => {navigation.navigate('AdoptedScreen')}}

      />
      <DrawerItem
        label='Perfil'
        icon={() => <Icon name='user' size={30} color='black' style={styles.icon} />}
        onPress={() => {}}
      />
      <DrawerItem label='' />
    </DrawerContentScrollView>
  </View>
);

const MyStack = () =>(
  <Drawer.Navigator
    initialRouteName='Home'
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name='PetsScreen' component={PetsStackScreen} />
    <Drawer.Screen name='LoginScreen' component={LoginStackScreen} />
    <Drawer.Screen name='AdoptedScreen' component={AdoptedStackScreen} />
    <Drawer.Screen name='Profile' component={ProfileStackScreen}/>

  </Drawer.Navigator>
)

export default MyStack;

const styles = StyleSheet.create({
  divisorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10
  },
  icon: {
    marginRight: -15,
    width: 30,
  },
})
