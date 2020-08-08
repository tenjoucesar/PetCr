import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Item, HeaderButtons} from 'react-navigation-header-buttons';
import Contact from '../../Screens/Contact';
import HeaderButton from '../../components/Buttons';

const Stack = createStackNavigator();

const RescuersStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ContactScreen"
      component={Contact}
      options={{
        headerTitle: 'Contacto',
        headerTitleAlign: 'center',
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
