import React, { useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatContext } from '../../navigation/ChatProvider';
import { AuthContext } from '../../navigation/AuthProvider';

export function ChatScreen() {
  const { chat, addNewMessage } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const tempUser = user && {
    _id: user.uid,
    name: user.displayName,
    avatar: user.photoURL,
  };

  const onSend = useCallback((messages) => {
    const formattedMessage = {...messages[0], createdAt: Date.now() ,sent: true }
    addNewMessage(formattedMessage)
  }, [])

  return (
    <GiftedChat
      onSend={messages => onSend(messages)}
      messages={chat}
      user={tempUser}
    />
  )
}
export default ChatScreen;