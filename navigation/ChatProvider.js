import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChatContext = createContext({});
const chatRef = firestore().collection('rooms').doc('roomA').collection("messages")

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orDeredChatRef = chatRef.orderBy("createdAt", "desc");
    return orDeredChatRef.onSnapshot(querySnapshot => {
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

  function mergeBothIds(petOwnerId, userId) {
    if (petOwnerId <userId) {
      return petOwnerId+userId;
    } else {
      return userId+petOwnerId;
    }
  }

  async function generateNewChate(userId) {
    let petOwnerId = 'vkKdHk5nRmgXogy5u1RZXjnLmFs2';
    const mergedId = mergeBothIds(petOwnerId, userId)
    debugger;
    const roomRef = firestore().collection('rooms').doc(mergedId)
    .collection('messages').doc('message1');
    debugger;
    const messages = {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA'
    }
    debugger
    await roomRef.set(messages);
    debugger;
  }

  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        addNewMessage,
        generateNewChate,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};