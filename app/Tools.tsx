import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Nav from './components/Nav'

const Tools = () => {
  return (
    <View>
      <Nav title={"Tools"} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Setting
        </Text>
      </View>
    </View>
  )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    width: width,
    height: height-180,
    borderColor: '#f6f6',
    backgroundColor: '#0418',

  },
  text: {
    color: '#fffe',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 60,
    fontStyle: 'italic',
    fontWeight: 'bold',
    backgroundColor: '#eee1',
    width: width - 20,
    borderRadius: 10,
  }
})
export default Tools