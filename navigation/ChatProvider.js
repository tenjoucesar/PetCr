import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChatContext = createContext({});

export const ChatProvider = ({ children }) => {
  const [chat, setChat ] = useState(null);
  const [messages, setMessages ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const chatRef = firestore().collection('rooms').doc('roomA').collection('messages');
    return chatRef.onSnapshot(querySnapshot => {
      const messagesCollection = [];
      querySnapshot.forEach(doc => {
        debugger;
        const { from, text, createdAt, } = doc.data();
        debugger;
        messagesCollection.push({
          id: doc.id,
          from,
          text,
          createdAt: new Date(createdAt.seconds * 1000),
        });
      });
      debugger;
      setChat(messagesCollection);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  // async function AddNewPet() {
  //   await petsDB.add({
  //     name: 'test',
  //     adopted: 'test',
  //   });
  // }
  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        messages,
        setMessages,
        // AddNewPet,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};