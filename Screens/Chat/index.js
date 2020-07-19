import React, { useCallback, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatContext } from '../../navigation/ChatProvider';
import { AuthContext } from '../../navigation/AuthProvider';

export function ChatScreen({route}) {
  debugger;
  const { chatMessages, addNewMessage } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const tempUser = user && {
    _id: user.uid,
    name: user.displayName,
    avatar: user.photoURL,
  };

  const onSend = useCallback((messages) => {
    const formattedMessage = {...messages[0], createdAt: Date.now() ,sent: true }
    debugger;
    addNewMessage(formattedMessage, route.params.params.chat)
  }, [])

  return (
    <GiftedChat
      onSend={messages => onSend(messages)}
      messages={chatMessages}
      user={tempUser}
    />
  )
}
export default ChatScreen;