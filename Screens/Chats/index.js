import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ChatContext } from '../../Providers/ChatProvider';

function ChatsScreen ({navigation}) {
  const {chatsCollection, handleRequestMessages} = useContext(ChatContext);
  const executeRequestChat = (chatId) => {
    navigation.navigate('ChatScreen', {
      chatId,
    })
    handleRequestMessages(chatId)
  }

return (
  <>
    {chatsCollection.map((chatId, i) => (
      <View  key={i}>
        <TouchableOpacity onPress={() => executeRequestChat(chatId)} style={styles.container}>
          <Text>{chatId}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    borderRadius: 10,
    padding: 30,
    overflow: 'hidden',
    backgroundColor: '#A6ACAF',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
});

export default ChatsScreen;
