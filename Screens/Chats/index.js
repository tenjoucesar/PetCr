import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { ChatContext } from '../../Providers/ChatProvider';

function ChatsScreen ({navigation, route}) {
  const {chatsCollection, handleRequestMessages, handleChatsCall} = useContext(ChatContext);

  useEffect(() => {
    if (route.params && route.params.userId) {
      return handleChatsCall(route.params.userId);
    }
  },[navigation])

  const executeRequestChat = (chatId) => {
    debugger;
    navigation.navigate('ChatScreen', {chatId})
    handleRequestMessages(chatId)
  }

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
  };

  const dateValue = (value) => {
    const dateSent = new Date(value);
    const messageBelongsToday = isToday(dateSent);
    if (messageBelongsToday) {
      const lastMessageTime = dateSent.toLocaleTimeString()
      const formattedMessageTime = lastMessageTime.replace(/:\d\d /, ' ');
      return formattedMessageTime.toString();
    }
    return dateSent.toLocaleDateString();
  }

  return (
    <>
      <View style={styles.chatStackContainer}>
        {chatsCollection && chatsCollection.map((chat, i) => (
          <TouchableOpacity key={i} onPress={() => executeRequestChat(chat.chatId)} style={styles.chatContainer}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image
                  source={{ uri: chat.sender.photoURL }}
                  style={styles.imageProfile}
                />
                <View style={styles.messageContainer}>
                  <Text style={styles.userName}>{chat.sender.name}</Text>
                  <Text style={styles.chatMessage} numberOfLines={1}>{chat.lastMessage.text}</Text>
                </View>
                  <Text style={styles.timer}>{dateValue(chat.lastMessage.createdAt)}</Text>
              </View>

          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  chatStackContainer: {
    backgroundColor: '#FFFF',
    flex: 1,
    paddingTop: 10,
  },
  chatContainer: {
    height: 80,
    borderRadius: 10,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    margin: 5,
  },
  chatMessage:{
    fontSize:  12,
    maxHeight: 22,
    marginTop: 10,
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
    display: 'flex',
  },
  timer: {
    fontSize: 10,
    marginTop: 36,
    marginLeft: 15,
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    marginTop: 5,
  },
});

export default ChatsScreen;
