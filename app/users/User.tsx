import { View, Text, Button, ScrollView, StyleSheet, FlatList, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import ChatNav from '../components/chatNav';
import chatData from '../data/chatData';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const User = ({ setFlag, userData }) => {
  const [chat, setChat] = useState(chatData);
  const [chating, setChating] = useState("");

  const handleChats = () => {
    const newChat = { id: chat.length + 1, person1: chating, person2: '' }; 
    setChat([...chat, newChat]);
    setChating(''); 
  };

  return (
    <View style={styles.container}>
      <ChatNav userData={userData} />
      <Button onPress={() => setFlag(false)} title='Back' />
      <ScrollView style={styles.main}>
        <FlatList
          style={styles.chats}
          data={chat}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.person1Container}>
                <Text style={styles.person1}>{item.person1}</Text>
              </View>
              <View style={styles.person2Container}>
                <Text style={styles.person2}>{item.person2}</Text>
              </View>
            </View>
          )}
          keyExtractor={({ id }) => id.toString()}
        />
      </ScrollView>
      <View style={styles.chatCard}>
        <TextInput
          style={styles.input}
          placeholder='Enter message'
          value={chating}
          onChangeText={setChating}
        />
        <FontAwesome name='send-o' size={37} style={styles.btn} onPress={handleChats}  color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  main: {
    width: width * 0.9,
    alignSelf: 'center',
    marginBottom: 10,
  },
  chats: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#ccc',
  },
  person1Container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  person2Container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  person1: {
    backgroundColor: '#fcc7',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  person2: {
    backgroundColor: '#ccf7',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: width - 80,
    marginRight: 10,
  },
  chatCard: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal:'auto',
    alignItems:'center',
    justifyContent:'center'
  },
  btn: {
    width: 45,
    height: 45,
    borderRadius: 10,
    // backgroundColor:'#eee3',
    textAlign:'center',
    padding:2,
    // borderWidth:1,
  },
});

export default User;
