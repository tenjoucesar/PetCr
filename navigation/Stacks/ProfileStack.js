import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/Buttons';
import ProfileScreen from '../../Screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerTitle: 'Mi Perfil',
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

export default ProfileStackScreen;
