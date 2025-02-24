import { View, Text ,Image,Button,StyleSheet,Dimensions} from 'react-native'
import React from 'react'



const CallRing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText} >Call Ring</Text>
      <View>
        <Image style={styles.image} source={{uri:"https://randomuser.me/api/portraits/men/10.jpg"}} />
      </View>
      <View>
        <Text style={styles.name}>Jay Kumar</Text>
      </View>
      <View style={styles.btnCard}>
        <Button  style={styles.btn} title='close'/><Button style={styles.btn} title='Call'/>
      </View>
    </View>
  )
}

const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        width:width-50,
        marginHorizontal:'auto',
        marginTop:60,
        height:400,
        flex:1,
        flexWrap:'wrap',
        alignItems:'center',
        backgroundColor:'black',
        borderRadius:10,
    },
    headingText: {
        width:'100%',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        textAlign:'center',
        
        borderColor:'red',
        paddingVertical:10,
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
    },
    name:{
        color:'white',
        fontSize:20,
    },
    btnCard:{
        flex:1,
        flexDirection:'row',
        height:20,
    },
    btn:{
        width:100,
        marginHorizontal:10,
        height:40,
    }
})

export default CallRing