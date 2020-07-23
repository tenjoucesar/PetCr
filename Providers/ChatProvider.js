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
      const newChatRef = chatsRef.doc(key).collection('messages');
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
    return handleChatsCall();
  }, []);

  function handleChatsCall(key) {
    if (key) {
      const useRef = firestore().collection('users').doc(key).collection('userChatRooms');
      useRef.onSnapshot(querySnapshot => {
        const chatsStack = [];
        querySnapshot.forEach(doc => {
          const {chatId, contacted} = doc.data();
          const lastMessageRef = chatsRef.doc(chatId).collection('messages').orderBy('createdAt', 'desc').limit(1);
          lastMessageRef.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
              const lastMessage = doc.data();
              if (chatsStack.length) {
                chatsStack.map(chat => {
                  chat.chatId === chatId ? chat.lastMessage = lastMessage : chatsStack.push({chatId, contacted, lastMessage});
                })
              } else {
                chatsStack.push({chatId, contacted, lastMessage})
              }
            });
            setChatsCollection(chatsStack);
          })
        })
      })
    } else {
      setChatsCollection(null);
    }
  }

  async function assignNewChatToUsers(owner, userId, chatId, message){
    const batch = firestore().batch();
    const batchObject = {chatId, contacted: owner}
    const ownerId = owner.ownerId;

    const ownerRef = firestore().collection('users').doc(ownerId).collection('userChatRooms').doc(chatId);
    batch.set(ownerRef, batchObject);

    const userRef = firestore().collection('users').doc(userId).collection('userChatRooms').doc(chatId);
    batch.set(userRef, batchObject);

    const newChatRef = firestore().collection('rooms').doc(chatId).collection('messages').doc(chatId);
    batch.set(newChatRef, message);

    batch.commit().then(() => {
      handleRequestMessages(chatId)
    })
  }

  async function addNewMessage(message, chat) {
    const newChatRef = firestore().collection('rooms').doc(chat).collection('messages');
    await newChatRef.add(message).then(handleRequestMessages(chat));
  }

  async function generateNewChat(owner, userId, navigation) {
    const ownerId = owner.ownerId;
    const chatId = ownerId < userId ? `${ownerId}${userId}` : `${userId}${ownerId}`; //Mergin both Ids we create a unique chatId
    navigation.navigate('ChatsStackScreen', { screen: 'ChatScreen', params: {chatId, owner, userId}, initial: false, });
  }

  return (
    <ChatContext.Provider
      value={{
        chatMessages,
        setChatMessages,
        addNewMessage,
        generateNewChat,
        chatsCollection,
        handleRequestMessages,
        handleChatsCall,
        assignNewChatToUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};