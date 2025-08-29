import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Sendicon } from '../assets/Icons';
import { s } from 'react-native-size-matters';

const SocialCircle = () => {
  return (
    <View style={styles.circle}>
    </View>
  )
}

export default SocialCircle;

const styles = StyleSheet.create({
    circle:{height:s(46),
        width:s(46),
        borderRadius:s(40),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000",
        borderWidth:s(1),
        borderColor:"#E4E6E8"

    }
})