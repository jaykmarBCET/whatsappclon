import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList, ScrollView, Image } from 'react-native';
import React from 'react';
import Nav from './components/Nav';
import users from './data/status';
import channels from './data/channel';


const Updates = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Nav title={"WA Business"} />
      <View style={styles.container}>
        <Text style={styles.headingText}>Status</Text>
        <View style={styles.userList}>

          <FlatList style={styles.card} horizontal={true}
            keyExtractor={(item, index) => index.toString()}  // Ensure unique key for each item
            data={users}
            renderItem={({ item }) => (  // Destructure item from the renderItem parameter
              <View style={styles.user}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.status}>{item.numberOfStatus}</Text>
              </View>
            )}
          />
        </View>
        <ScrollView>
            <Text style={styles.headingText}>Channels</Text>

             <View>
                 <FlatList style={styles.allChannels} data={channels} keyExtractor={(item,index)=>index.toString()}
                   renderItem={({item})=>(
                    <View style={styles.channel}>
                      <Image style={styles.image} source={{uri:item.channelImage}} />
                      <View style={styles.textCard}>
                         <Text style={styles.channelName}>{item.channelName}</Text>
                         <Text style={styles.channelNews}>{item.lastNews}</Text>
                      </View>
                    </View>

                   )}
                  />
             </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0418',
  },
  container: {
    padding: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    fontStyle:'italic',
    marginBottom:5,
  },
  userList: {
  },
  user: {
    padding: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#eee1',
    margin: 4,
    borderRadius: 10,
    backgroundColor: '#eee2'
  },
  card: {
    width: width -5,
    height: 80,
    gap: 10,
    position: 'relative',

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 60,

  },
  name: {
    fontSize: 8,
    textAlign: 'center'
  },
  status: {
    fontSize: 10,
    position: 'absolute',
    color: 'green',
    backgroundColor: '#eeed',
    boxShadow: '0px 0px 1px 1px #0005',
    paddingVertical: 3,
    paddingHorizontal: 6,
    top: 32,
    left: 43,
    borderRadius: 40,

  },
  allChannels:{
    width: width ,
    marginBottom:25,
  },
  channel:{
    width:width-40,
    flex:1,
    flexDirection:'row',
    gap:20,
    marginVertical:10,
    marginLeft:10,
    backgroundColor:'#eee9',
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:10,
    boxShadow:'0px 0px 6px 0px'
  
  },
  textCard:{},
  channelName:{
    fontSize: 20,
  },
  channelNews:{
    fontSize: 8,
    backgroundColor:'#eee5',
    paddingVertical:3,
    paddingHorizontal:10,
    borderRadius:10,
    elevation:3,
  },
});


export default Updates;
