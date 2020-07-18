import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './AuthProvider';
import { PetsProvider } from './PetsProvider';
import { ChatProvider } from './ChatProvider';
import Routes from './Routes';

const MyStack = () =>(
  <NavigationContainer>
    <AuthProvider>
      <PetsProvider>
        <ChatProvider>
          <Routes />
        </ChatProvider>
      </PetsProvider>
    </AuthProvider>
  </NavigationContainer>
);

export default MyStack;
