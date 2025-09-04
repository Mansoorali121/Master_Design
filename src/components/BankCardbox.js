import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { Card } from '../assets/Icons';

const BankCardbox = () => {
  return (
    <View style={styles.container}>
        <Card/>
      <Text style={{
        color:"#32343E",
        fontSize:s(16),
        fontWeight:"bold",
        marginTop:vs(17)
      }}>No Master Card Added</Text>
      <Text style={{
        color:"#2D2D2D",
        fontSize:s(12),
        marginTop:vs(6),
        textAlign:"center"
      }}>You Can Add a Master card and save it for later </Text>
    </View>
  )
}

export default BankCardbox;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dbdfe3ff",
        // backgroundColor:"red",
        height:vs(270),
        width:s(290),
        marginTop:vs(25),
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:vs(35),
        paddingHorizontal:s(30),
        borderRadius:s(20)
    },
})