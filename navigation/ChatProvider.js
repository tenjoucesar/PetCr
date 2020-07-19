import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChatContext = createContext({});
const chatsRef = firestore().collection('rooms');
const chatRef = firestore().collection('rooms').doc('roomA').collection("messages")

export const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState(null);
  const [chatsCollection, setChatsCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleRequestMessages(key) {
    const newChatRef = firestore().collection('rooms').doc(key).collection('messages');
    debugger;
    newChatRef.onSnapshot(querySnapshot => {
      const messagesCollection = [];
      debugger;
      querySnapshot.forEach(doc => {
        debugger;
        let message = doc.data();
        debugger;
        messagesCollection.push(message);
      });
      setChatMessages(messagesCollection);
      if (loading) {
        setLoading(false);
      }
    });
  }
  useEffect(() => {
    return handleRequestMessages();
    // const orDeredChatRef = chatRef.orderBy("createdAt", "desc");
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

  function mergeBothIds(ownerId, userId) {
    if (ownerId <userId) {
      return ownerId+userId;
    } else {
      return userId+ownerId;
    }
  }

  async function generateNewChate(ownerId, userId) {
    debugger;
    const mergedId = mergeBothIds(ownerId, userId)
    debugger;
    const roomRef = firestore().collection('rooms').doc(mergedId)
    .collection('messages').doc('message1');
    // const messages = {
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA'
    // }
    debugger
    await roomRef.set();
    debugger;
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