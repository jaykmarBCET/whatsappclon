import { View, Text,StyleSheet ,Dimensions,Image} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
const chatNav = ({userData}:{userData:Object}) => {
  return (
    <View>
          <View style={styles.navigation}>
            <View style={styles.subNev}>
              <Image style={styles.image} source={{uri:userData.image}} />
              <Text style={styles.text}>{userData.name}</Text>

            </View>
             <View style={styles.subNev}>
             <AntDesign style={styles.icon}  name="videocamera" size={24} color="white" />
             <Ionicons style={styles.icon} name="call-outline" size={24} color="white" />
             <Entypo style={styles.icon} name="dots-three-vertical" size={24} color="white" />
            </View>
          </View>
        </View>
  )
}

const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    navigation: {
      width:width,
      flexDirection: 'row',
      backgroundColor:'#333',
      justifyContent:'space-between',
      alignItems:'center',
      height:130,
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
      alignItems:'center',
      
    },
    image:{
        width:50,
        height:50,
        borderRadius:60,
    },
    icon:{
      fontSize:20,
      fontWeight:'bold',
    }
  })

export default chatNav