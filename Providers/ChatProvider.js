import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChatContext = createContext({});
const chatsRef = firestore().collection('rooms');

export const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);
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
        querySnapshot.empty ? setChatsCollection([]) : '';
        //  here at the '' we can test using the forEach rather than calling it when is empty..
        querySnapshot.forEach(doc => {
          const {chatId, sender} = doc.data();
          const lastMessageRef = chatsRef.doc(chatId).collection('messages').orderBy('createdAt', 'desc').limit(1);
          lastMessageRef.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
              const lastMessage = doc.data();
              if (chatsStack.length) {
                chatsStack.map(chat => {
                  chat.chatId === chatId ? chat.lastMessage = lastMessage : chatsStack.push({chatId, sender, lastMessage});
                })
              } else {
                chatsStack.push({chatId, sender, lastMessage})
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

  async function assignNewChatToUsers(owner, sender, chatId, message){
    const batch = firestore().batch();
    // const batchObject = {chatId, contacted: owner, sender}
    const ownerId = owner.ownerId;
    const senderId =  sender.senderId;

    const ownerRef = firestore().collection('users').doc(ownerId).collection('userChatRooms').doc(chatId);
    batch.set(ownerRef, {chatId,  contacted: owner, sender});

    const userRef = firestore().collection('users').doc(senderId).collection('userChatRooms').doc(chatId);
    batch.set(userRef, {chatId, contacted: sender, sender: owner});

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

  async function generateNewChat(owner, sender, navigation) {
    const ownerId = owner.ownerId;
    const senderId = sender.senderId;
    const chatId = ownerId < senderId ? `${ownerId}${senderId}` : `${senderId}${ownerId}`; //Mergin both Ids we create a unique chatId
    navigation.navigate('ChatsStackScreen', { screen: 'ChatScreen', params: {chatId, owner, sender}, initial: false, });
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