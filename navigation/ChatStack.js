import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from '../components/Buttons';
import ChatScreen from '../Screens/Chat';

const Stack = createStackNavigator();

const ChatStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name='ChatScreen'
      component={ChatScreen}
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
);

export default ChatStackScreen;