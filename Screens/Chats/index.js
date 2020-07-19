import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ChatContext } from '../../navigation/ChatProvider';

function ChatsScreen ({navigation}) {
  const {chatsCollection, handleRequestMessages} = useContext(ChatContext);
  const executeRequestChat = (chat) => {
    debugger;
    navigation.navigate('ChatScreen', {
      params: { chat },
    })
    debugger;
    handleRequestMessages(chat)
  }
  // debugger;
return (
  <>
    {chatsCollection.map((chat, i) => (
      <View  key={i}>
        <TouchableOpacity onPress={() => executeRequestChat(chat)} style={styles.container}>
          <Text>{chat}</Text>
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
