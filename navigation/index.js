import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './AuthProvider';
import { PetsProvider } from './PetsProvider';
import Routes from './Routes';

const MyStack = () =>(
  <NavigationContainer>
    <AuthProvider>
      <PetsProvider>
        <Routes />
      </PetsProvider>
    </AuthProvider>
  </NavigationContainer>
);

export default MyStack;
