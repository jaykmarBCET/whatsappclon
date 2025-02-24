import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router'
import React, { useState } from 'react';
import users from './data/users'
import Nav from './components/Nav';
import User from './users/User';


const Chat = () => {
  const [usersList, setUsersList] = useState(users);
  const [flag, setFlag] = useState(false);
  const [userData, setUserData] = useState({name:'',image:"",lastMessage:""});
  const handleUser = (name:String,image:String,lastMessage:String)=>{
    setFlag(!flag)  
    setUserData({name,image:image,lastMessage:lastMessage})
  }
  if (!flag) {
    return (
      <View style={styles.container}>
        <Nav title={'WA Bussiness'} />
        <ScrollView>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>All</Text>
            <Text style={styles.badgeText}>Unread</Text>
            <Text style={styles.badgeText}>Favourites</Text>
            <Text style={styles.badgeText}>Groups</Text>
          </View >
          <View style={styles.listCard}>
            {
              usersList.map((user, index) => (
                <Text onPress={()=>handleUser(user.name,user.image,user.lastMessage)} key={index} style={styles.user}>
                  <View>
                    <Image source={{ uri: user.image }} style={styles.image} />
                  </View>
                  <View>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.lastMessage}> {user.lastMessage}</Text>

                  </View>
                </Text>
              ))
            }
          </View>

        </ScrollView>
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        
        <User setFlag={setFlag} userData={userData} />
      </View>
    )
  }
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0418',
  },
  navigation: {
    width: width,
    height: 100,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 8,
  },
  badge: {
    width: width - 20,
    marginHorizontal: 'auto',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  badgeText: {
    color: 'white',
    backgroundColor: '#eee3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    height: 40,

  },
  listCard: {
    width: width - 20,
    marginHorizontal: 'auto',
    flex: 1,
    gap: 8,
    marginBottom: 10,
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#eee8',
    borderRadius: 10,
    boxShadow: '0px 0px 6px 0px'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 60
  },
  name: {
    fontSize: 18,
    fontWeight: '300',
  },
  lastMessage: {
    fontSize: 8,
    backgroundColor: '#eee4',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    elevation: 5,
  }
});

export default Chat;
