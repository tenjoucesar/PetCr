import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/Buttons';
import HomeScreen from '../../Screens/HomeScreen';

const Stack = createStackNavigator();

const HomeScreenStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name='HomeScreenStack'
      component={HomeScreen}
      options={{
        headerTitle: 'Vamos a buscarte un amigo',
        headerTitleAlign:'center',
        // headerLeft: () => (
        //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item
        //       title='Menu'
        //       iconName='navicon'
        //       onPress={() => navigation.toggleDrawer()}
        //     />
        //   </HeaderButtons>
        // )
      }}
    />
  </Stack.Navigator>
);

export default HomeScreenStack;