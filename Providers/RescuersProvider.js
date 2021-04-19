import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const RescuerContext = createContext({});
const rescuerDB = firestore().collection('users').where('rescuer', '==', true);
const DebounceDueTime = 200;

export const RescuerProvider = ({children}) => {
  const [rescuers, setRescuers] = useState(null);
  const [initializing, setInitializing] = useState(true);

}
