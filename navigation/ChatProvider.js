import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChatContext = createContext({});
const chatRef = firestore().collection('rooms').doc('roomA').collection('messages');

export const ChatProvider = ({ children }) => {
  const [chat, setChat ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return chatRef.onSnapshot(querySnapshot => {
      const messagesCollection = [];
      querySnapshot.forEach(doc => {
        let message = doc.data();
        messagesCollection.push(
          message
        );

      });
      setChat(messagesCollection);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  async function addNewMessage(message) {
    await chatRef.add(message);
  }
  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        addNewMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};