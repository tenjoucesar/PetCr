import React, { useState, useCallback, useEffect, useContext } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatContext } from '../../navigation/ChatProvider';

export function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const { chat } = useContext(ChatContext);
  debugger;
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={chat}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
export default ChatScreen;