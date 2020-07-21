import React, { useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatContext } from '../../Providers/ChatProvider';
import { AuthContext } from '../../Providers/AuthProvider';

export function ChatScreen({route}) {
  const { chatMessages, addNewMessage } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const tempUser = user && {
    _id: user.uid,
    name: user.displayName,
    avatar: user.photoURL,
  };

  const onSend = useCallback((messages) => {
    const formattedMessage = {...messages[0], createdAt: Date.now() ,sent: true }
    const chatId = route.params.chatId;
    addNewMessage(formattedMessage, chatId)
  }, [])

  return (
    <GiftedChat
      onSend={messages => onSend(messages)}
      messages={chatMessages}
      user={tempUser}
    />
  );
}
export default ChatScreen;
