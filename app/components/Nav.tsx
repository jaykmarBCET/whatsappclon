import { View, Text, ScrollView, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const Nav = ({title}:{title:String}) => {
  return (
    <SafeAreaView  >
      <ScrollView>
        <View>
          <View style={styles.navigation}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.subNev}>
              <AntDesign style={styles.icon} name="camerao" size={24} color="black" />
              <AntDesign style={styles.icon} name="search1" size={24} color="black" />
              <Entypo style={styles.icon} name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  navigation: {
    width:width,
    flexDirection: 'row',
    backgroundColor:'#333',
    justifyContent:'space-between',
    alignItems:'center',
    height:120,
    paddingHorizontal: 14,
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  },
  subNev:{
    flexDirection:'row',
    gap:20,
    
  },
  icon:{
    fontSize:29,
    margin:8,
    color:'white',
    
  }
})
export default Nav