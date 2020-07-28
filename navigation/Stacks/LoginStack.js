import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screens/Login';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from '../../components/Buttons';

const Stack = createStackNavigator();

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

export default LoginStackScreen;