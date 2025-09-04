import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const ConfirmButton = () => {
  return (
    <TouchableOpacity style={{
        backgroundColor:"#FF7622",
        paddingVertical:vs(20),
        justifyContent:"center",
        alignItems:"center",
        marginTop:vs(10),
        borderRadius:s(12)
    }}>
      <Text style={{
        color:"#fff",
        fontWeight:"bold"
      }}>PAY & COMFIRM</Text>
    </TouchableOpacity>
  )
}

export default ConfirmButton;

const styles = StyleSheet.create({})