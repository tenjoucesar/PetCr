import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import RescuersScreen from '../../Screens/Rescuers';
import HeaderButton from '../../components/Buttons';

const Stack = createStackNavigator();

const RescuersStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name='RescuersScreen'
      component={RescuersScreen}
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

export default RescuersStackScreen;