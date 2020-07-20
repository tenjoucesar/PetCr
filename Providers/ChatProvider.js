import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChatContext = createContext({});
const chatsRef = firestore().collection('rooms');

export const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState(null);
  const [chatsCollection, setChatsCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleRequestMessages(key) {
    if (key) {
      const newChatRef = firestore().collection('rooms').doc(key).collection('messages');
      const orDeredChatRef = newChatRef.orderBy("createdAt", "desc");
      orDeredChatRef.onSnapshot(querySnapshot => {
        const messagesCollection = [];
        querySnapshot.forEach(doc => {
          let message = doc.data();
          messagesCollection.push(message);
        });
        setChatMessages(messagesCollection);
        if (loading) {
          setLoading(false);
        }
      });
    }
  }
  useEffect(() => {
    return handleRequestMessages();
  }, []);

  useEffect(() => {
    chatsRef.onSnapshot(querySnapshot => {
      const chatsStack = [];
      querySnapshot.forEach(doc => {
        const {chatId} = doc.data();
        chatsStack.push(chatId)
      })
      setChatsCollection(chatsStack);
    })
  }, []);

  async function addNewMessage(message, chat) {
    const newChatRef = firestore().collection('rooms').doc(chat).collection('messages');
    await newChatRef.add(message);
  }

  async function generateNewChate(ownerId, userId, navigation) {
    const chatId = (ownerId, userId) => {return ownerId < userId ? ownerId+userId : userId+ownerId};
    const roomRef = firestore().collection('rooms').doc(chatId);

    await roomRef.set({
      chatId
    }).then(
      navigation.navigate('ChatsStackScreen', { screen: 'ChatScreen', params: {chatId}, initial: false, }),
      handleRequestMessages(chatId)
    );
  }

  return (
    <ChatContext.Provider
      value={{
        chatMessages,
        setChatMessages,
        addNewMessage,
        generateNewChate,
        chatsCollection,
        handleRequestMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};