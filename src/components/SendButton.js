import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Sendicon } from '../assets/Icons';
import { s } from 'react-native-size-matters';

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
        <Sendicon/>
    </TouchableOpacity>
  )
}

export default SendButton;

const styles = StyleSheet.create({
    circle:{height:s(46),
        width:s(46),
        borderRadius:s(40),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1077AF"
    }
})