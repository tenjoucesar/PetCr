import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DesiredLocationQuestionScreen from '../../Screens/HomeScreen/DesiredLocation';
import DesiredPetQuestionScreen from '../../Screens/HomeScreen/DesiredPet';

const Stack = createStackNavigator();

const HomeScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='DesiredPetQuestionScreen'
      component={DesiredPetQuestionScreen}
      options={{
        headerTitle: 'Vamos a buscarte un amigo',
        headerTitleAlign:'center',
      }}
    />
    <Stack.Screen
      name='DesiredLocationQuestionScreen'
      component={DesiredLocationQuestionScreen}
      options={{
        headerTitle: 'Selecciona una Provincia',
        headerTitleAlign:'center',
      }}
    />
  </Stack.Navigator>
);

export default HomeScreenStack;