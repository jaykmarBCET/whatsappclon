import { View, Text, ScrollView, SafeAreaView,StyleSheet,Dimensions,Image } from 'react-native'
import React from 'react'
import Nav from './components/Nav'
import users from './data/calls'
import CallRing from './components/CallRing'
const Calls = () => {
  return (
    <View>
      <SafeAreaView style={styles.main}>
          <Nav title={"Calls"} />
        <ScrollView>
          {/* <CallRing /> */}
          <View style={styles.container}>
             <Text style={styles.headingText}>Recent Calls</Text>
             <View style={styles.listContainer}>
              {
                users.map( (user, index) => (
                  <View key={index} style={styles.listItem}>
                      <Image source={{uri:user.image}} style={styles.image} />
                    <View style={styles.card}>
                      <Text style={styles.name}>{user.name}</Text>
                      <Text style={styles.lastCall}>{user.lastCall}</Text>
                    </View>
                  </View>
                  ))
              }
             </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const {width,height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#0418',
  },
  container:{
    width:width,
    marginBottom:190,
    paddingVertical:20,
  },
  headingText:{
    color:'#fff',
    fontSize:20,
    paddingVertical:20,
    paddingHorizontal:20,
    fontStyle:'italic',
  },
  listContainer:{
    flex:1,
    gap:10,
  },
  listItem:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10,
    gap:20,
    backgroundColor:'#eee8',
    width:width-20,
    margin:'auto',
    borderRadius:10,
    boxShadow:'0px 0px 5px 0px'
  },
  image:{
    width:50,
    height:50,
    borderRadius:60,
  },
  card:{},
  name:{
    fontSize:18,
    fontWeight:'300',
    fontStyle:'italic',
  },

  lastCall:{
    fontSize:8,
  },

})
export default Calls