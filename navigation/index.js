import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider}  from '../Providers/AuthProvider';
import {ChatProvider}  from '../Providers/ChatProvider';
import { PetsProvider } from '../Providers/PetsProvider';
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
